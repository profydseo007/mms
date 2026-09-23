'use client';

import { useAppNavigate } from '@/lib/useAppNavigate';
import NZPhysicsTutorContent from '@/app/new-zealand-curriculum/online-physics-tutor/page';

export default function NZPhysicsTutorPage() {
  const { navigateTo } = useAppNavigate();
  
  return <NZPhysicsTutorContent onNavigate={navigateTo} />;
}
