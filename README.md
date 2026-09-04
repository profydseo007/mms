# Math Make Smart — Next.js

This is the Next.js (App Router) + TypeScript + Tailwind CSS v4 port of the original
Vite/React SPA.

## Getting started

```bash
npm install
npm run dev       # http://localhost:3000
```

```bash
npm run build     # production build
npm run start     # serve the production build
```

## What changed from the original

The original app was a single-page app that rendered every "page" inside
`App.tsx` and tracked the active page with `window.location.hash` (e.g.
`#gcse-maths-mock`). That has been replaced with real Next.js routes:

| Old hash                     | New route                            |
| ----------------------------- | ------------------------------------- |
| `#home`                       | `/`                                   |
| `#about`                      | `/about`                              |
| `#free-trial`                 | `/free-trial`                         |
| `#login`                      | `/login`                              |
| `#curriculum`                 | `/curriculum`                         |
| `#resources-hub`              | `/resources-hub`                      |
| `#mock-papers`                | `/mock-papers`                        |
| `#gcse-maths-mock`, etc.       | `/mock-papers/gcse-maths`, etc.       |
| `#predicted-papers`           | `/predicted-papers`                   |
| `#gcse-maths-predicted`, etc.  | `/predicted-papers/gcse-maths`, etc.  |
| `#pricing`                    | `/pricing`                            |
| `#privacy`                    | `/privacy`                            |
| `#refund`                     | `/refund`                             |
| `#subject-Maths`, etc.         | `/subject/Maths`, etc.                |
| `#test-prep-GCSE`, etc.        | `/test-prep/gcse`, etc.               |

Every route is now a real, bookmarkable, crawlable URL rather than a hash
fragment, and the back/forward browser buttons work natively via Next.js
routing instead of a manual `hashchange` listener.

### How the components stayed the same

Every ported component still receives the exact same
`onNavigate(page: ActivePage, subjectTitle?: string)` prop it always did — no
component internals needed to change. Two small files do all the routing
translation:

- `src/lib/navigation.ts` — maps `ActivePage` values to real paths and back.
- `src/lib/useAppNavigate.ts` — a client hook that turns `onNavigate(...)`
  calls into `router.push(...)`, and derives the current page/subject from
  the URL (used to highlight the active nav item in the header/footer).

`src/components/AppShell.tsx` renders the persistent `Header` / `Footer`
around whichever route is active, replacing the old `renderActivePage()`
switch in `App.tsx`.

### Styling

The Tailwind v4 theme (`@theme` block, custom fonts, utility classes) was
carried over unchanged into `src/app/globals.css` — the original project
already used Tailwind v4's CSS-first configuration, so no changes were
needed there.

### Fixed along the way

A handful of pre-existing `class="..."` typos (should have been
`className="..."`) were caught by TypeScript and fixed in:
`Curriculum.tsx`, `PhysicsSubject.tsx`, `GcsePrep.tsx`, `ThirteenPlusPrep.tsx`.

### Not carried over

`@google/genai`, `express`, and `motion` were in the original
`package.json` but never actually imported/used anywhere in the source, so
they were dropped.
"# MMS" 
