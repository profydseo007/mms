'use client';

import { useAppNavigate } from '@/lib/useAppNavigate';
import AUMathTutorContent from '@/app/australian-curriculum/online-math-tutor/page';

export default function AUMathsTutorPage() {
  const { navigateTo } = useAppNavigate();
  
  return <AUMathTutorContent onNavigate={navigateTo} />;
}
