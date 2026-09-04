'use client';

import { use } from 'react';
import { notFound } from 'next/navigation';
import GcseMathsPredicted from '@/components/subjects/GcseMathsPredicted';
import GcsePhysicsPredicted from '@/components/subjects/GcsePhysicsPredicted';
import GcseChemistryPredicted from '@/components/subjects/GcseChemistryPredicted';
import GcseBiologyPredicted from '@/components/subjects/GcseBiologyPredicted';
import GcseCombinedSciencePredicted from '@/components/subjects/GcseCombinedSciencePredicted';
import ALevelMathsPredicted from '@/components/subjects/ALevelMathsPredicted';
import ALevelPhysicsPredicted from '@/components/subjects/ALevelPhysicsPredicted';
import ALevelChemistryPredicted from '@/components/subjects/ALevelChemistryPredicted';
import ALevelBiologyPredicted from '@/components/subjects/ALevelBiologyPredicted';
import { useAppNavigate } from '@/lib/useAppNavigate';
import { ActivePage } from '@/lib/types';

const COMPONENT_MAP: Record<string, React.ComponentType<{ onNavigate: (page: ActivePage, subjectTitle?: string) => void }>> = {
  'gcse-maths': GcseMathsPredicted,
  'gcse-physics': GcsePhysicsPredicted,
  'gcse-chemistry': GcseChemistryPredicted,
  'gcse-biology': GcseBiologyPredicted,
  'gcse-combined-science': GcseCombinedSciencePredicted,
  'alevel-maths': ALevelMathsPredicted,
  'alevel-physics': ALevelPhysicsPredicted,
  'alevel-chemistry': ALevelChemistryPredicted,
  'alevel-biology': ALevelBiologyPredicted,
};

export default function Page({ params }: { params: Promise<{ subject: string }> }) {
  const { subject } = use(params);
  const { navigateTo } = useAppNavigate();

  const PredictedComponent = COMPONENT_MAP[subject];
  if (!PredictedComponent) {
    notFound();
  }

  return <PredictedComponent onNavigate={navigateTo} />;
}
