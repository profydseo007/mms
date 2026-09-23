'use client';

import { useAppNavigate } from '@/lib/useAppNavigate';
import CAScienceTutorContent from '@/app/canadian-curriculum/online-science-tutor/page';

export default function CAScienceTutorPage() {
  const { navigateTo } = useAppNavigate();
  
  return <CAScienceTutorContent onNavigate={navigateTo} />;
}
