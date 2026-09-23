'use client';

import Pricing from '@/components/Pricing';
import { useAppNavigate } from '@/lib/useAppNavigate';

export default function Page() {
  const { navigateTo } = useAppNavigate();
  return <Pricing onNavigate={navigateTo} />;
}
