'use client';

import { useAppNavigate } from '@/lib/useAppNavigate';
import UKEnglishTutorContent from '@/app/uk-curriculum/online-english-tutor/page';

export default function UKEnglishTutorPage() {
  const { navigateTo } = useAppNavigate();
  
  return <UKEnglishTutorContent onNavigate={navigateTo} />;
}
