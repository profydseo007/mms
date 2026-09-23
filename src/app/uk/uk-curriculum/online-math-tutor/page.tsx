'use client';

import { useAppNavigate } from '@/lib/useAppNavigate';
import UKMathTutorContent from '@/app/uk-curriculum/online-math-tutor/page';

export default function UKMathTutorPage() {
  const { navigateTo } = useAppNavigate();
  
  return <UKMathTutorContent onNavigate={navigateTo} />;
}
