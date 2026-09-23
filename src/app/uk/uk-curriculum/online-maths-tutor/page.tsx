'use client';

import { useAppNavigate } from '@/lib/useAppNavigate';
import UKMathTutorContent from '@/app/uk-curriculum/online-math-tutor/page';

export default function UKMathsTutorPage() {
  const { navigateTo } = useAppNavigate();
  
  return <UKMathTutorContent onNavigate={navigateTo} />;
}
