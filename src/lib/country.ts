// src/lib/country.ts
export const COUNTRY_ROUTE_MAP: Record<string, string> = {
  GB: 'uk',
  UK: 'uk',
  CA: 'ca',
  AU: 'au',
  NZ: 'nz',
  IE: 'ie',
};

export const COUNTRY_LABELS: Record<string, string> = {
  GB: 'United Kingdom',
  UK: 'United Kingdom',
  US: 'United States',
  CA: 'Canada',
  AU: 'Australia',
  NZ: 'New Zealand',
  IE: 'Ireland',
};

export const COUNTRY_FORM_IDS: Record<string, string> = {
  US: 'KoegIzV5zV9qvxp4I6O7',
  GB: '19dxE59bL3rYid59C5Sx',
  CA: 'YOUR_CANADA_FORM_ID',
  AU: 'Z1vqihztGfP3v9ioZ11v',
  NZ: '5605rTIJa7R7b2jjFH2R',
  IE: 'qqq116RRiFIjQdOfHlRI',
};

function getClientIP(headers: Headers): string | null {
  const forwardedFor = headers.get('x-forwarded-for');
  if (forwardedFor) {
    return forwardedFor.split(',')[0].trim();
  }
  return headers.get('x-real-ip');
}

function isPrivateOrLocalIP(ip: string): boolean {
  const normalizedIP = ip.toLowerCase().replace(/^::ffff:/, '');

  return (
    normalizedIP === '127.0.0.1' ||
    normalizedIP === '::1' ||
    normalizedIP.startsWith('192.168.') ||
    normalizedIP.startsWith('10.') ||
    normalizedIP.startsWith('172.16.')
  );
}

async function lookupCountryByIP(ip: string): Promise<string | null> {
  if (!ip || isPrivateOrLocalIP(ip)) {
    console.log('[country] IP lookup skipped — local/private IP:', ip);
    return null;
  }

  try {
    console.log('[country] Calling GeoIP lookup for IP:', ip);
    const res = await fetch(`https://ipapi.co/${ip}/country/`, {
      signal: AbortSignal.timeout(1500),
    });
    console.log('[country] GeoIP response status:', res.status);
    if (!res.ok) return null;
    const country = (await res.text()).trim();
    console.log('[country] GeoIP raw response body:', country);
    return /^[A-Z]{2}$/.test(country) ? country : null;
  } catch (err) {
    console.log('[country] GeoIP lookup failed:', err);
    return null;
  }
}

async function lookupCountryFromPublicIP(): Promise<string | null> {
  try {
    console.log('[country] Looking up country from public IP');
    const res = await fetch('https://ipwho.is/', {
      signal: AbortSignal.timeout(1500),
    });

    if (!res.ok) {
      console.log('[country] Public IP lookup response status:', res.status);
      return null;
    }

    const data = (await res.json()) as {
      success?: boolean;
      country_code?: string;
    };
    const country = data.country_code?.toUpperCase();

    console.log('[country] Public IP lookup result:', country ?? null);
    return data.success !== false && country && /^[A-Z]{2}$/.test(country)
      ? country
      : null;
  } catch (err) {
    console.log('[country] Public IP lookup failed:', err);
    return null;
  }
}

export async function getCountryCode(
  headers: Headers,
  searchParams?: URLSearchParams
): Promise<string> {
  const debugCountry = searchParams?.get('debug_country');
  console.log('[country] debug_country param:', debugCountry);
  if (debugCountry) {
    console.log('[country] Using debug override:', debugCountry.toUpperCase());
    return debugCountry.toUpperCase();
  }

  const vercelHeader = headers.get('x-vercel-ip-country');
  const cfHeader = headers.get('cf-ipcountry');
  const customHeader = headers.get('x-country-code');

  console.log('[country] Header check:', {
    'x-vercel-ip-country': vercelHeader,
    'cf-ipcountry': cfHeader,
    'x-country-code': customHeader,
  });

  const headerCountry = vercelHeader ?? cfHeader ?? customHeader;

  if (headerCountry) {
    console.log('[country] Using header value:', headerCountry.toUpperCase());
    return headerCountry.toUpperCase();
  }

  const ip = getClientIP(headers);
  console.log('[country] No headers found. Extracted client IP:', ip, {
    'x-forwarded-for': headers.get('x-forwarded-for'),
    'x-real-ip': headers.get('x-real-ip'),
  });

  if (ip) {
    const looked_up = await lookupCountryByIP(ip);
    if (looked_up) {
      console.log('[country] Using GeoIP lookup result:', looked_up);
      return looked_up.toUpperCase();
    }
  }

  const publicIPCountry = await lookupCountryFromPublicIP();
  if (publicIPCountry) {
    console.log('[country] Using public IP lookup result:', publicIPCountry);
    return publicIPCountry;
  }

  console.log('[country] All methods failed — defaulting to US');
  return 'US';
}

let clientCountryLookupPromise: Promise<{ countryCode: string | null }> | null = null;
let resolvedClientCountryCode: string | null | undefined = undefined;

export async function getClientCountryDetection(signal?: AbortSignal): Promise<{ countryCode: string | null }> {
  if (resolvedClientCountryCode !== undefined) {
    return { countryCode: resolvedClientCountryCode };
  }

  if (!clientCountryLookupPromise) {
    // Do NOT pass `signal` to fetch — the singleton must not be cancellable by
    // individual callers. One component unmounting (e.g. HMR) would otherwise
    // abort the shared request for every other caller.
    clientCountryLookupPromise = fetch('/api/country', { cache: 'no-store' })
      .then(async (response) => {
        if (!response.ok) {
          throw new Error(`Country endpoint returned ${response.status}`);
        }
        const data = (await response.json()) as { countryCode?: string };
        const countryCode = data.countryCode?.toUpperCase() ?? null;
        resolvedClientCountryCode = countryCode;
        return { countryCode };
      })
      .catch((error) => {
        clientCountryLookupPromise = null;
        resolvedClientCountryCode = undefined;
        throw error;
      });
  }

  // Respect the caller's own abort signal — if they navigate away before the
  // shared fetch resolves, throw so they don't act on a stale result.
  if (signal) {
    return Promise.race([
      clientCountryLookupPromise,
      new Promise<never>((_, reject) => {
        if (signal.aborted) {
          reject(new DOMException('Aborted', 'AbortError'));
        } else {
          signal.addEventListener('abort', () =>
            reject(new DOMException('Aborted', 'AbortError')),
          { once: true });
        }
      }),
    ]);
  }

  return clientCountryLookupPromise;
}

export function getCountryRouteFromCode(countryCode?: string | null): string {
  if (!countryCode) {
    console.log('[country] No country code passed — using home route');
    return '';
  }

  const normalized = countryCode.toUpperCase();
  const route = COUNTRY_ROUTE_MAP[normalized] ?? '';
  console.log('[country] Mapping country code to route:', { normalized, route });
  return route;
}