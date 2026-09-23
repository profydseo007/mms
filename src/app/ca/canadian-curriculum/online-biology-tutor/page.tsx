'use client';

import { useAppNavigate } from '@/lib/useAppNavigate';
import CABiologyTutorContent from '@/app/canadian-curriculum/online-biology-tutor/page';

export default function CABiologyTutorPage() {
  const { navigateTo } = useAppNavigate();
  
  return <CABiologyTutorContent onNavigate={navigateTo} />;
}
