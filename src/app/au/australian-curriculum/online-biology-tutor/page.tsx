'use client';

import { useAppNavigate } from '@/lib/useAppNavigate';
import AUBiologyTutorContent from '@/app/australian-curriculum/online-biology-tutor/page';

export default function AUBiologyTutorPage() {
  const { navigateTo } = useAppNavigate();
  
  return <AUBiologyTutorContent onNavigate={navigateTo} />;
}
