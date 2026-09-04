'use client';

import ALevelsPrep from '@/components/testprep/ALevelsPrep';
import { useAppNavigate } from '@/lib/useAppNavigate';

export default function Page() {
  const { navigateTo } = useAppNavigate();
  return <ALevelsPrep onNavigate={navigateTo} />;
}
