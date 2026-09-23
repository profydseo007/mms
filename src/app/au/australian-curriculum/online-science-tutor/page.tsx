'use client';

import { useAppNavigate } from '@/lib/useAppNavigate';
import AUScienceTutorContent from '@/app/australian-curriculum/online-science-tutor/page';

export default function AUScienceTutorPage() {
  const { navigateTo } = useAppNavigate();
  
  return <AUScienceTutorContent onNavigate={navigateTo} />;
}
