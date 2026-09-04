'use client';

import MockPapers from '@/components/MockPapers';
import { useAppNavigate } from '@/lib/useAppNavigate';

export default function Page() {
  const { navigateTo } = useAppNavigate();
  return <MockPapers onNavigate={navigateTo} />;
}
