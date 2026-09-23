'use client';

import { useAppNavigate } from '@/lib/useAppNavigate';
import UKBiologyTutorContent from '@/app/uk-curriculum/online-biology-tutor/page';

export default function UKBiologyTutorPage() {
  const { navigateTo } = useAppNavigate();
  
  return <UKBiologyTutorContent onNavigate={navigateTo} />;
}
