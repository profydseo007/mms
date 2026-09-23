'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { ActivePage } from '@/lib/types';

// Routes that use the LMS portal
const LMS_ROUTES = new Set(['/au', '/nz']);

function getPortalUrl(pathname: string): { url: string; label: string } {
  const base = '/' + pathname.split('/')[1].toLowerCase();
  if (LMS_ROUTES.has(base)) {
    return { url: 'https://lms.mathmakesmart.com/', label: 'Sign in to LMS Portal' };
  }
  return { url: 'https://learn.mathmakesmart.com/', label: 'Sign in to Learn Portal' };
}

interface LoginProps {
  onNavigate: (page: ActivePage, subjectTitle?: string) => void;
}

export default function Login({ onNavigate }: LoginProps) {
  const pathname = usePathname();
  const { url, label } = getPortalUrl(pathname);

  return (
    <div className="relative min-h-[80vh] flex flex-col items-center justify-center py-12">
      {/* Subtle Background Element */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 flex items-center justify-center">
        <img
          alt=""
          className="w-full max-w-4xl opacity-[0.04] scale-125 transform translate-y-12 select-none"
          src="https://lh3.googleusercontent.com/aida/AP1WRLsOBvpTRIcYljEc199wVqFTnoIVx_enhkVEnf37jlFn_Rx2ELD5QGzL2x3AXx2N24L1PbewHb8symAXu1V4KjWsP_0P1VLHmQaT5CLGZuf0ipYFKdLziTNVByn-PI12Ha5d8mfvMsJMwFI7npucvXpO1cYZ7-9dnb7nWTs56SLEO6Hoge3BZaAbKE8ugMCRW1gk9GBo29-S_fpKnJUil3QWs_-qe-0Bbx5aSmrEuTufHQBVHRf7v31GjOKj"
        />
      </div>

      {/* Main Content Wrapper */}
      <main className="w-full flex-grow flex flex-col items-center justify-center px-margin-mobile md:px-margin-desktop z-10">
        {/* Brand Logo Anchor */}
        <div
          onClick={() => onNavigate('home')}
          className="mb-10 text-center cursor-pointer"
        >
          <img
            alt="Math Make Smart logo"
            className="h-24 w-auto mx-auto mb-2"
            src="https://lh3.googleusercontent.com/aida/AP1WRLvP1ko5GslmfwxB6qphzaGxLXJOMPzjIT3B8-12vSfEQC8YUURu8fF7lbuXC-ZWpmsiB-PBziK7YM98MCyXig7Rpj_fIcw6OQ5ZAanXpx-4Ek6tA8-vPqvPJiJ3Fjcrh_8IEzxSny6rH5esUsZ5aUqTWMFgbAcPnzrUC08bDjaHvr1umI4usHMJlW_2lano-zDQJtK_4Jgugp0cAsjNpDqmZ_GaBGOnXHbpa9hBKtmNQTobSywu3foes9tX"
          />
        </div>

        {/* Login Card */}
        <div className="bg-surface-container-lowest w-full max-w-[480px] rounded-xl p-8 md:p-10 login-card border border-outline-variant">
          <div className="text-center mb-8">
            <h1 className="font-headline-md text-headline-md text-charcoal mb-2">
              Sign in to your portal
            </h1>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Click below to access your learning portal.
            </p>
          </div>

          {/* Portal Login Link — auto-selected by country route */}
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center bg-royal-purple text-on-primary font-headline-md text-headline-md py-4 rounded-xl hover:shadow-lg transition-all active:scale-[0.98] cursor-pointer"
          >
            {label}
          </a>

          {/* Free Trial Footer */}
          <div className="mt-8 text-center">
            <p className="font-body-md text-body-md text-on-surface-variant">
              New to Math Make Smart?{' '}
              <button
                type="button"
                onClick={() => onNavigate('trial')}
                className="text-royal-purple font-semibold hover:underline cursor-pointer"
              >
                Start your 7-day free trial
              </button>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

