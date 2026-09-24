'use client';

import { BookOpen } from 'lucide-react';
import { ActivePage } from '@/lib/types';

interface GradeLessonPlansProps {
  onNavigate: (page: ActivePage, subjectTitle?: string) => void;
  subject: string;
  description: string;
  plans: { grade: string; band: string }[];
}

export default function GradeLessonPlans({ onNavigate, subject, description, plans }: GradeLessonPlansProps) {
  return (
    <section className="py-20 md:py-24 bg-surface">
      <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="space-y-4">
            <h2 className="font-headline-lg text-headline-lg text-charcoal font-bold">{subject} Lesson Plans For Each Grade</h2>
            <p className="text-on-surface-variant max-w-xl">{description}</p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {plans.map((item) => (
            <button
              key={item.grade}
              type="button"
              onClick={() => onNavigate('trial')}
              className="group cursor-pointer text-center bg-soft-gray p-8 rounded-3xl border border-transparent hover:border-royal-purple hover:bg-white transition-all duration-300"
            >
              <BookOpen size={22} className="text-royal-purple mx-auto mb-3 opacity-70 group-hover:opacity-100 transition-opacity" />
              <span className="block font-headline-md text-headline-md text-royal-purple mb-2 font-bold">{item.grade}</span>
              <span className="text-body-md text-on-surface-variant">{item.band}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
