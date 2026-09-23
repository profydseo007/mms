'use client';

import { useAppNavigate } from '@/lib/useAppNavigate';
import UKScienceTutorContent from '@/app/uk-curriculum/online-science-tutor/page';

export default function UKScienceTutorPage() {
  const { navigateTo } = useAppNavigate();
  
  return <UKScienceTutorContent onNavigate={navigateTo} />;
}
