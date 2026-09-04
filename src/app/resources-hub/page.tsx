'use client';

import ResourcesHub from '@/components/ResourcesHub';
import { useAppNavigate } from '@/lib/useAppNavigate';

export default function Page() {
  const { navigateTo } = useAppNavigate();
  return <ResourcesHub onNavigate={navigateTo} />;
}
