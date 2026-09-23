'use client';

import { useAppNavigate } from '@/lib/useAppNavigate';
import AUPhysicsTutorContent from '@/app/australian-curriculum/online-physics-tutor/page';

export default function AUPhysicsTutorPage() {
  const { navigateTo } = useAppNavigate();
  
  return <AUPhysicsTutorContent onNavigate={navigateTo} />;
}
