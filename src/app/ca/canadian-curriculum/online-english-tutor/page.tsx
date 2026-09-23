'use client';

import { useAppNavigate } from '@/lib/useAppNavigate';
import CAEnglishTutorContent from '@/app/canadian-curriculum/online-english-tutor/page';

export default function CAEnglishTutorPage() {
  const { navigateTo } = useAppNavigate();
  
  return <CAEnglishTutorContent onNavigate={navigateTo} />;
}
