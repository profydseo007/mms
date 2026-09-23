'use client';

import { useAppNavigate } from '@/lib/useAppNavigate';
import AUEnglishTutorContent from '@/app/australian-curriculum/online-english-tutor/page';

export default function AUEnglishTutorPage() {
  const { navigateTo } = useAppNavigate();
  
  return <AUEnglishTutorContent onNavigate={navigateTo} />;
}
