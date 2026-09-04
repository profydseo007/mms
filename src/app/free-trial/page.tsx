'use client';

import FreeTrial from '@/components/FreeTrial';
import { useAppNavigate } from '@/lib/useAppNavigate';

export default function Page() {
  const { navigateTo } = useAppNavigate();
  return <FreeTrial onNavigate={navigateTo} />;
}
