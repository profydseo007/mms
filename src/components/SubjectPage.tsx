'use client';

import React from 'react';
import { ActivePage } from '@/lib/types';
import MathSubject from './subjects/MathSubject';
import PhysicsSubject from './subjects/PhysicsSubject';
import ScienceSubject from './subjects/ScienceSubject';
import EnglishSubject from './subjects/EnglishSubject';
import ChemistrySubject from './subjects/ChemistrySubject';
import BiologySubject from './subjects/BiologySubject';

interface SubjectPageProps {
  title: string;
  type: 'subject' | 'test-prep';
  onNavigate: (page: ActivePage, subjectTitle?: string) => void;
}

export default function SubjectPage({ title, type, onNavigate }: SubjectPageProps) {
  const normalizedTitle = (title || '').trim().toLowerCase();

  if (normalizedTitle.includes('physic')) {
    return <PhysicsSubject onNavigate={onNavigate} />;
  }

  if (normalizedTitle.includes('science')) {
    return <ScienceSubject onNavigate={onNavigate} />;
  }

  if (normalizedTitle.includes('english')) {
    return <EnglishSubject onNavigate={onNavigate} />;
  }

  if (normalizedTitle.includes('chemist')) {
    return <ChemistrySubject onNavigate={onNavigate} />;
  }

  if (normalizedTitle.includes('biolog')) {
    return <BiologySubject onNavigate={onNavigate} />;
  }

  // Default to Math Subject for Maths, Math, Mathematics, or general subjects
  return <MathSubject onNavigate={onNavigate} />;
}
