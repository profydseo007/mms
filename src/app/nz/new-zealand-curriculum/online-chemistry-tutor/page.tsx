'use client';

import { useAppNavigate } from '@/lib/useAppNavigate';
import NZChemistryTutorContent from '@/app/new-zealand-curriculum/online-chemistry-tutor/page';

export default function NZChemistryTutorPage() {
  const { navigateTo } = useAppNavigate();
  
  return <NZChemistryTutorContent onNavigate={navigateTo} />;
}
