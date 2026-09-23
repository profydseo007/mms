'use client';

import { useAppNavigate } from '@/lib/useAppNavigate';
import IEBiologyTutorContent from '@/app/irish-curriculum/online-biology-tutor/page';

export default function IEBiologyTutorPage() {
  const { navigateTo } = useAppNavigate();
  
  return <IEBiologyTutorContent onNavigate={navigateTo} />;
}
