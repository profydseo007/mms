'use client';

import ChemistrySubject from '@/components/subjects/ChemistrySubject';
import { useAppNavigate } from '@/lib/useAppNavigate';

export default function Page() {
  const { navigateTo } = useAppNavigate();
  return <ChemistrySubject onNavigate={navigateTo} />;
}
