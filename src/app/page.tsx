'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Home from '@/components/Home';
import { useAppNavigate } from '@/lib/useAppNavigate';
import { getClientCountryDetection, getCountryRouteFromCode } from '@/lib/country';

export default function Page() {
  const router = useRouter();
  const { navigateTo } = useAppNavigate();

  useEffect(() => {
    const debugCountry = new URLSearchParams(window.location.search).get('debug_country');
    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 3000);

    async function detectCountry() {
      try {
        console.log('[client-country] Detecting visitor IP in the browser');

        const result = await getClientCountryDetection(controller.signal);
        const countryCode = (debugCountry ?? result.countryCode)?.toUpperCase();
        const countryRoute = getCountryRouteFromCode(countryCode);

        console.log('[client-country] IP lookup response:', {
          countryCode,
          countryRoute: countryRoute || '/',
        });

        if (!countryCode) {
          throw new Error('IP lookup did not return a country');
        }

        if (countryRoute) {
          router.replace(`/${countryRoute}`);
        }
      } catch (error) {
        if (error instanceof DOMException && error.name === 'AbortError') {
          console.log('[client-country] Detection cancelled during page refresh');
        } else {
          console.log('[client-country] Detection failed; staying on home page:', error);
        }
      } finally {
        window.clearTimeout(timeout);
      }
    }

    void detectCountry();

    return () => {
      window.clearTimeout(timeout);
      controller.abort();
    };
  }, [router]);

  return <Home onNavigate={navigateTo} />;
}
