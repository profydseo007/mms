'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import Header from './Header';
import HeaderAU from './headers/HeaderAU';
import HeaderCA from './headers/HeaderCA';
import HeaderIE from './headers/HeaderIE';
import HeaderNZ from './headers/HeaderNZ';
import HeaderUK from './headers/HeaderUK';
import Footer from './Footer';
import FooterAU from './footers/FooterAU';
import FooterCA from './footers/FooterCA';
import FooterIE from './footers/FooterIE';
import FooterNZ from './footers/FooterNZ';
import FooterUK from './footers/FooterUK';
import { useAppNavigate } from '@/lib/useAppNavigate';

export default function AppShell({ children }: { children: React.ReactNode }) {
  const { navigateTo, currentPage, currentSubject } = useAppNavigate();
  const pathname = usePathname();

  // Determine which header to use based on country
  const getHeader = () => {
    const countryCode = pathname.split('/')[1]?.toUpperCase();
    
    switch (countryCode) {
      case 'AU':
        return <HeaderAU currentPage={currentPage} currentSubject={currentSubject} onNavigate={navigateTo} />;
      case 'CA':
        return <HeaderCA currentPage={currentPage} currentSubject={currentSubject} onNavigate={navigateTo} />;
      case 'IE':
        return <HeaderIE currentPage={currentPage} currentSubject={currentSubject} onNavigate={navigateTo} />;
      case 'NZ':
        return <HeaderNZ currentPage={currentPage} currentSubject={currentSubject} onNavigate={navigateTo} />;
      case 'UK':
        return <HeaderUK currentPage={currentPage} currentSubject={currentSubject} onNavigate={navigateTo} />;
      default:
        return <Header currentPage={currentPage} currentSubject={currentSubject} onNavigate={navigateTo} />;
    }
  };

  // The original Footer remains the default US footer. Country routes use
  // their own footer component, matching the country-specific header pattern.
  const getFooter = () => {
    const countryCode = pathname.split('/')[1]?.toUpperCase();

    switch (countryCode) {
      case 'AU':
        return <FooterAU onNavigate={navigateTo} />;
      case 'CA':
        return <FooterCA onNavigate={navigateTo} />;
      case 'IE':
        return <FooterIE onNavigate={navigateTo} />;
      case 'NZ':
        return <FooterNZ onNavigate={navigateTo} />;
      case 'UK':
        return <FooterUK onNavigate={navigateTo} />;
      default:
        return <Footer onNavigate={navigateTo} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-background text-on-surface">
      {getHeader()}
      <main className="flex-grow">{children}</main>
      {getFooter()}
    </div>
  );
}
