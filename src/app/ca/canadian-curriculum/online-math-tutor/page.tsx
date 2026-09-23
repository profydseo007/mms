'use client';

import { useAppNavigate } from '@/lib/useAppNavigate';
import CAMathTutorContent from '@/app/canadian-curriculum/online-math-tutor/page';

export default function CAMathTutorPage() {
  const { navigateTo } = useAppNavigate();
  
  return <CAMathTutorContent onNavigate={navigateTo} />;
}
