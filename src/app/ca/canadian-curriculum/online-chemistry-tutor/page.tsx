'use client';

import { useAppNavigate } from '@/lib/useAppNavigate';
import CAChemistryTutorContent from '@/app/canadian-curriculum/online-chemistry-tutor/page';

export default function CAChemistryTutorPage() {
  const { navigateTo } = useAppNavigate();
  
  return <CAChemistryTutorContent onNavigate={navigateTo} />;
}
