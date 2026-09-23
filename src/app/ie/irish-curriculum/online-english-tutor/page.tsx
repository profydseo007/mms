'use client';

import { useAppNavigate } from '@/lib/useAppNavigate';
import IEEnglishTutorContent from '@/app/irish-curriculum/online-english-tutor/page';

export default function IEEnglishTutorPage() {
  const { navigateTo } = useAppNavigate();
  
  return <IEEnglishTutorContent onNavigate={navigateTo} />;
}
