'use client';

import { useAppNavigate } from '@/lib/useAppNavigate';
import IEChemistryTutorContent from '@/app/irish-curriculum/online-chemistry-tutor/page';

export default function IEChemistryTutorPage() {
  const { navigateTo } = useAppNavigate();
  
  return <IEChemistryTutorContent onNavigate={navigateTo} />;
}
