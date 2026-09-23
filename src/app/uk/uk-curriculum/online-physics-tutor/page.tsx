'use client';

import { useAppNavigate } from '@/lib/useAppNavigate';
import UKPhysicsTutorContent from '@/app/uk-curriculum/online-physics-tutor/page';

export default function UKPhysicsTutorPage() {
  const { navigateTo } = useAppNavigate();
  
  return <UKPhysicsTutorContent onNavigate={navigateTo} />;
}
