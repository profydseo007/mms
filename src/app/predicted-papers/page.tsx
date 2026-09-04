'use client';

import PredictedPapers from '@/components/PredictedPapers';
import { useAppNavigate } from '@/lib/useAppNavigate';

export default function Page() {
  const { navigateTo } = useAppNavigate();
  return <PredictedPapers onNavigate={navigateTo} />;
}
