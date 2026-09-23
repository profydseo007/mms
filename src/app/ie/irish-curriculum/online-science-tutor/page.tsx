'use client';

import { useAppNavigate } from '@/lib/useAppNavigate';
import IEScienceTutorContent from '@/app/irish-curriculum/online-science-tutor/page';

export default function IEScienceTutorPage() {
  const { navigateTo } = useAppNavigate();
  
  return <IEScienceTutorContent onNavigate={navigateTo} />;
}
