'use client';

import { useAppNavigate } from '@/lib/useAppNavigate';
import AUChemistryTutorContent from '@/app/australian-curriculum/online-chemistry-tutor/page';

export default function AUChemistryTutorPage() {
  const { navigateTo } = useAppNavigate();
  
  return <AUChemistryTutorContent onNavigate={navigateTo} />;
}
