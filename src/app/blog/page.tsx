'use client';

import Blogs from '@/components/Blogs';
import { useAppNavigate } from '@/lib/useAppNavigate';

export default function Page() {
  const { navigateTo } = useAppNavigate();
  return <Blogs onNavigate={navigateTo} />;
}