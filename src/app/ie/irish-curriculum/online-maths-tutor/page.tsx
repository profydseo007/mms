'use client';

import { useAppNavigate } from '@/lib/useAppNavigate';
import IEMathTutorContent from '@/app/irish-curriculum/online-math-tutor/page';

export default function IEMathsTutorPage() {
  const { navigateTo } = useAppNavigate();
  
  return <IEMathTutorContent onNavigate={navigateTo} />;
}
