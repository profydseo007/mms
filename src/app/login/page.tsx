'use client';

import Login from '@/components/Login';
import { useAppNavigate } from '@/lib/useAppNavigate';

export default function Page() {
  const { navigateTo } = useAppNavigate();
  return <Login onNavigate={navigateTo} />;
}
