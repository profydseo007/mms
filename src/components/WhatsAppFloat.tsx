'use client';

import { MessageCircle } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import {
  COUNTRY_WHATSAPP_NUMBERS,
  getClientCountryDetection,
} from '@/lib/country';

const COUNTRY_ROUTE_CODES: Record<string, string> = {
  au: 'AU',
  ca: 'CA',
  ie: 'IE',
  nz: 'NZ',
  uk: 'GB',
};

const DEFAULT_COUNTRY = 'US';

export default function WhatsAppFloat() {
  const pathname = usePathname();
  const routeCountry = COUNTRY_ROUTE_CODES[pathname.split('/')[1]?.toLowerCase()];
  const [countryCode, setCountryCode] = useState(routeCountry ?? DEFAULT_COUNTRY);

  useEffect(() => {
    if (routeCountry) {
      setCountryCode(routeCountry);
      return;
    }

    const controller = new AbortController();

    void getClientCountryDetection(controller.signal)
      .then(({ countryCode: detectedCountry }) => {
        if (detectedCountry && COUNTRY_WHATSAPP_NUMBERS[detectedCountry]) {
          setCountryCode(detectedCountry);
        }
      })
      .catch(() => {
        // Keep the US fallback when country detection is unavailable.
      });

    return () => controller.abort();
  }, [routeCountry]);

  const phoneNumber =
    COUNTRY_WHATSAPP_NUMBERS[countryCode] ?? COUNTRY_WHATSAPP_NUMBERS[DEFAULT_COUNTRY];

  return (
    <a
      href={`https://api.whatsapp.com/send/?phone=%2B${phoneNumber}&text&type=phone_number&app_absent=0`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact us on WhatsApp"
      className="whatsapp-float fixed bottom-4 left-4 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 sm:bottom-5 sm:left-5 sm:h-14 sm:w-14"
    >
      <MessageCircle className="h-6 w-6 sm:h-7 sm:w-7" />
    </a>
  );
}