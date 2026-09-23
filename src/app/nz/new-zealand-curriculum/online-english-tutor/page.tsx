'use client';

import { useAppNavigate } from '@/lib/useAppNavigate';
import NZEnglishTutorContent from '@/app/new-zealand-curriculum/online-english-tutor/page';

export default function NZEnglishTutorPage() {
  const { navigateTo } = useAppNavigate();
  
  return <NZEnglishTutorContent onNavigate={navigateTo} />;
}
