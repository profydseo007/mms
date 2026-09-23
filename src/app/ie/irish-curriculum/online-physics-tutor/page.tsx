'use client';

import { useAppNavigate } from '@/lib/useAppNavigate';
import IEPhysicsTutorContent from '@/app/irish-curriculum/online-physics-tutor/page';

export default function IEPhysicsTutorPage() {
  const { navigateTo } = useAppNavigate();
  
  return <IEPhysicsTutorContent onNavigate={navigateTo} />;
}
