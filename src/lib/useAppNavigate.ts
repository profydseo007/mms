'use client';

import { useRouter, usePathname } from 'next/navigation';
import { useMemo, useCallback } from 'react';
import { ActivePage } from './types';
import { pageToPath, pathToPage } from './navigation';

const COUNTRY_CODES = new Set(['AU', 'CA', 'IE', 'NZ', 'UK']);

/**
 * Extract country code from pathname
 */
function getCountryFromPathname(pathname: string): string | undefined {
  const firstSegment = pathname.split('/')[1]?.toUpperCase();
  if (firstSegment && COUNTRY_CODES.has(firstSegment)) {
    return firstSegment;
  }
  return undefined;
}

/**
 * Drop-in replacement for the old `navigateTo` function that used to live in
 * App.tsx and mutate `window.location.hash`. Every ported component still
 * calls `onNavigate(page, subjectTitle?)` exactly as before — this hook is
 * the only thing that changed, translating those calls into real Next.js
 * client-side navigations.
 */
export function useAppNavigate() {
  const router = useRouter();
  const pathname = usePathname();
  const currentCountry = useMemo(() => getCountryFromPathname(pathname ?? ''), [pathname]);

  const navigateTo = useCallback(
    (page: ActivePage, subjectTitle?: string) => {
      router.push(pageToPath(page, subjectTitle, currentCountry));
      if (typeof window !== 'undefined') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    },
    [router, currentCountry]
  );

  const { currentPage, currentSubject } = useMemo(() => pathToPage(pathname ?? '/'), [pathname]);

  return { navigateTo, currentPage, currentSubject };
}
