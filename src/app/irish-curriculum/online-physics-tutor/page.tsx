'use client';

import PhysicsSubject from '@/components/subjects/PhysicsSubject';
import { useAppNavigate } from '@/lib/useAppNavigate';

export default function Page() {
  const { navigateTo } = useAppNavigate();
  return <PhysicsSubject onNavigate={navigateTo} />;
}
