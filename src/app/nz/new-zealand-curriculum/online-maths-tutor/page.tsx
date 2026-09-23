'use client';

import { useAppNavigate } from '@/lib/useAppNavigate';
import NZMathsTutorContent from '@/app/new-zealand-curriculum/online-maths-tutor/page';

export default function NZMathsTutorPage() {
  const { navigateTo } = useAppNavigate();
  
  return <NZMathsTutorContent onNavigate={navigateTo} />;
}
