'use client';

import { useAppNavigate } from '@/lib/useAppNavigate';
import UKChemistryTutorContent from '@/app/uk-curriculum/online-chemistry-tutor/page';

export default function UKChemistryTutorPage() {
  const { navigateTo } = useAppNavigate();
  
  return <UKChemistryTutorContent onNavigate={navigateTo} />;
}
