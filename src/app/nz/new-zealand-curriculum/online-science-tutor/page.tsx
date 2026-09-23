'use client';

import { useAppNavigate } from '@/lib/useAppNavigate';
import NZScienceTutorContent from '@/app/new-zealand-curriculum/online-science-tutor/page';

export default function NZScienceTutorPage() {
  const { navigateTo } = useAppNavigate();
  
  return <NZScienceTutorContent onNavigate={navigateTo} />;
}
