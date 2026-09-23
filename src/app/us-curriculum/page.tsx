'use client';

import Curriculum from './us-Curriculum';
import { useAppNavigate } from '@/lib/useAppNavigate';

export default function Page() {
  const { navigateTo } = useAppNavigate();
  return <Curriculum onNavigate={navigateTo} />;
}
