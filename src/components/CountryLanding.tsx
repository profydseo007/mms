'use client';

import Home from './Home';
import HomeAU from './HomeAU';
import HomeCA from './HomeCA';
import HomeIE from './HomeIE';
import HomeNZ from './HomeNZ';
import HomeUK from './HomeUK';
import { useAppNavigate } from '@/lib/useAppNavigate';

interface CountryLandingProps {
  country: string;
}

export default function CountryLanding({ country }: CountryLandingProps) {
  const { navigateTo } = useAppNavigate();

  switch (country) {
    case 'GB':
    case 'UK':
      return <HomeUK />;
    case 'CA':
      return <HomeCA />;
    case 'AU':
      return <HomeAU />;
    case 'NZ':
      return <HomeNZ />;
    case 'IE':
      return <HomeIE />;
    default:
      return <Home onNavigate={navigateTo} country="US" />;
  }
}