'use client';

import { useAppNavigate } from '@/lib/useAppNavigate';
import CAPhysicsTutorContent from '@/app/canadian-curriculum/online-physics-tutor/page';

export default function CAPhysicsTutorPage() {
  const { navigateTo } = useAppNavigate();
  
  return <CAPhysicsTutorContent onNavigate={navigateTo} />;
}
