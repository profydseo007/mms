import { ActivePage } from './types';

const COUNTRY_CODES = new Set(['AU', 'CA', 'IE', 'NZ', 'UK']);

/**
 * Maps the legacy hash-based `ActivePage` identifiers used throughout the
 * component tree onto real Next.js URL paths.
 *
 * The old app used `window.location.hash = 'gcse-maths-mock'` style routing.
 * We keep the exact same `ActivePage` vocabulary (so none of the ported
 * components need to change), but translate it to proper, crawlable routes.
 */

const MOCK_SUBJECT_SLUGS: Record<string, string> = {
  'gcse-maths-mock': 'gcse-maths',
  'gcse-physics-mock': 'gcse-physics',
  'gcse-chemistry-mock': 'gcse-chemistry',
  'gcse-biology-mock': 'gcse-biology',
  'gcse-combined-science-mock': 'gcse-combined-science',
  'alevel-maths-mock': 'alevel-maths',
  'alevel-physics-mock': 'alevel-physics',
  'alevel-chemistry-mock': 'alevel-chemistry',
  'alevel-biology-mock': 'alevel-biology',
};

const PREDICTED_SUBJECT_SLUGS: Record<string, string> = {
  'gcse-maths-predicted': 'gcse-maths',
  'gcse-physics-predicted': 'gcse-physics',
  'gcse-chemistry-predicted': 'gcse-chemistry',
  'gcse-biology-predicted': 'gcse-biology',
  'gcse-combined-science-predicted': 'gcse-combined-science',
  'alevel-maths-predicted': 'alevel-maths',
  'alevel-physics-predicted': 'alevel-physics',
  'alevel-chemistry-predicted': 'alevel-chemistry',
  'alevel-biology-predicted': 'alevel-biology',
};

// Reverse lookups, built from the maps above so they can never drift apart.
const MOCK_SLUG_TO_PAGE: Record<string, ActivePage> = Object.fromEntries(
  Object.entries(MOCK_SUBJECT_SLUGS).map(([page, slug]) => [slug, page as ActivePage])
);
const PREDICTED_SLUG_TO_PAGE: Record<string, ActivePage> = Object.fromEntries(
  Object.entries(PREDICTED_SUBJECT_SLUGS).map(([page, slug]) => [slug, page as ActivePage])
);

const TEST_PREP_SLUGS: Record<string, string> = {
  '11 Plus': '11-plus',
  '13 Plus': '13-plus',
  GCSE: 'gcse',
  IGCSE: 'igcse',
};
const TEST_PREP_SLUG_TO_TITLE: Record<string, string> = Object.fromEntries(
  Object.entries(TEST_PREP_SLUGS).map(([title, slug]) => [slug, title])
);

const US_SUBJECT_ROUTE_MAP: Record<string, string> = {
  Maths: '/us-curriculum/online-math-tutor',
  Math: '/us-curriculum/online-math-tutor',
  'Maths Tutor': '/us-curriculum/online-math-tutor',
  English: '/us-curriculum/online-english-tutor',
  'English Tutor': '/us-curriculum/online-english-tutor',
  Science: '/us-curriculum/online-science-tutor',
  Physics: '/us-curriculum/online-physics-tutor',
  Chemistry: '/us-curriculum/online-chemistry-tutor',
  Biology: '/us-curriculum/online-biology-tutor',
};

export function pageToPath(page: ActivePage, subjectTitle?: string, country?: string): string {
  const prefix = country ? `/${country.toLowerCase()}` : '';

  if (page in MOCK_SUBJECT_SLUGS) {
    return `${prefix}/mock-papers/${MOCK_SUBJECT_SLUGS[page]}`;
  }
  if (page in PREDICTED_SUBJECT_SLUGS) {
    return `${prefix}/predicted-papers/${PREDICTED_SUBJECT_SLUGS[page]}`;
  }

  switch (page) {
    case 'home':
      return prefix ? prefix : '/';
    case 'about':
      return `${prefix}/about`;
    case 'trial':
      return `/free-trial`;
    case 'login':
      return `${prefix}/login`;
    case 'a-levels':
      return `${prefix}/a-levels`;
    case 'curriculum':
      return `${prefix}/us-curriculum`;
    case 'resources-hub':
      return `${prefix}/resources-hub`;
    case 'mock-papers':
      return `${prefix}/mock-papers`;
    case 'predicted-papers':
      return `${prefix}/predicted-papers`;
    case 'pricing':
      return `${prefix}/pricing`;
    case 'blogs':
      return `${prefix}/blog`;
    case 'blog':
      return `${prefix}/blog/${encodeURIComponent(subjectTitle ?? '')}`;
    case 'privacy':
      return `${prefix}/privacy`;
    case 'refund':
      return `${prefix}/refund`;
    case 'subject': {
      const subjectKey = subjectTitle ?? 'Maths';
      const mappedSubjectRoute = US_SUBJECT_ROUTE_MAP[subjectKey] ?? US_SUBJECT_ROUTE_MAP[subjectKey.trim()];
      if (mappedSubjectRoute) {
        return prefix ? `${prefix}${mappedSubjectRoute}` : mappedSubjectRoute;
      }
      return `${prefix}/subject/${encodeURIComponent(subjectKey)}`;
    }
    case 'test-prep': {
      const slug = subjectTitle ? TEST_PREP_SLUGS[subjectTitle] ?? encodeURIComponent(subjectTitle) : 'gcse';
      return `${prefix}/test-prep/${slug}`;
    }
    default:
      return prefix ? prefix : '/';
  }
}

export interface ResolvedRoute {
  currentPage: ActivePage;
  currentSubject?: string;
}

/**
 * The reverse of `pageToPath` — used by the app shell (Header/Footer) so it
 * can highlight the active nav item, driven purely by the current URL.
 */
export function pathToPage(pathname: string): ResolvedRoute {
  const segments = pathname.split('/').filter(Boolean);

  if (segments.length === 0) return { currentPage: 'home' };

  // Check if first segment is a country code
  let startIndex = 0;
  if (segments[0] && COUNTRY_CODES.has(segments[0].toUpperCase())) {
    startIndex = 1;
  }

  const [first, second] = segments.slice(startIndex);

  if (first === 'mock-papers') {
    if (second && MOCK_SLUG_TO_PAGE[second]) {
      return { currentPage: MOCK_SLUG_TO_PAGE[second] };
    }
    return { currentPage: 'mock-papers' };
  }

  if (first === 'predicted-papers') {
    if (second && PREDICTED_SLUG_TO_PAGE[second]) {
      return { currentPage: PREDICTED_SLUG_TO_PAGE[second] };
    }
    return { currentPage: 'predicted-papers' };
  }

  if (first === 'us-curriculum') {
    return {
      currentPage: 'curriculum',
      currentSubject: second ? decodeURIComponent(second) : undefined,
    };
  }

  if (first === 'subject') {
    return {
      currentPage: 'subject',
      currentSubject: second ? decodeURIComponent(second) : undefined,
    };
  }

  if (first === 'test-prep') {
    const title = second ? TEST_PREP_SLUG_TO_TITLE[second] ?? decodeURIComponent(second) : undefined;
    return { currentPage: 'test-prep', currentSubject: title };
  }

  if (first === 'blog') {
    return { currentPage: second ? 'blog' : 'blogs', currentSubject: second ? decodeURIComponent(second) : undefined };
  }

  const simplePages: Record<string, ActivePage> = {
    about: 'about',
    'free-trial': 'trial',
    login: 'login',
    'a-levels': 'a-levels',
    curriculum: 'curriculum',
    'resources-hub': 'resources-hub',
    pricing: 'pricing',
    blog: 'blogs',
    privacy: 'privacy',
    refund: 'refund',
  };

  if (simplePages[first]) {
    return { currentPage: simplePages[first] };
  }

  return { currentPage: 'home' };
}

export { TEST_PREP_SLUG_TO_TITLE };
