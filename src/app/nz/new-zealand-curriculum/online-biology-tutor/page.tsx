'use client';

import { useAppNavigate } from '@/lib/useAppNavigate';
import NZBiologyTutorContent from '@/app/new-zealand-curriculum/online-biology-tutor/page';

export default function NZBiologyTutorPage() {
  const { navigateTo } = useAppNavigate();
  
  return <NZBiologyTutorContent onNavigate={navigateTo} />;
}
