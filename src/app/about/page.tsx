'use client';

import About from '@/components/About';
import { useAppNavigate } from '@/lib/useAppNavigate';

export default function Page() {
  const { navigateTo } = useAppNavigate();
  return <About onNavigate={navigateTo} />;
}
