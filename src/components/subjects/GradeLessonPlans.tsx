'use client';

import Link from 'next/link';
import { BookOpen } from 'lucide-react';
import { ActivePage } from '@/lib/types';

interface GradeLessonPlansProps {
  onNavigate: (page: ActivePage, subjectTitle?: string) => void;
  subject: string;
  description: string;
  plans: { grade: string; band: string }[];
}

const numberWords = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve'];

export default function GradeLessonPlans({ subject, description }: GradeLessonPlansProps) {
  const grades = Array.from({ length: 12 }, (_, index) => ({
    grade: `Grade ${index + 1}`,
    band: index < 5 ? 'Elementary' : index < 8 ? 'Middle School' : 'High School',
  }));

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
          {grades.map((item) => {
            const grade = Number(item.grade.replace('Grade ', ''));
            return (
              <Link
                key={item.grade}
                href={`/us-curriculum/online-${subject.toLowerCase()}-tutor/lesson-plan-for-grade-${numberWords[grade]}`}
                className="group block cursor-pointer text-center bg-white p-8 rounded-3xl border border-royal-purple/30 hover:border-royal-purple hover:shadow-lg hover:scale-[1.02] transition-all duration-300"
              >
                <BookOpen size={22} className="text-royal-purple mx-auto mb-3 opacity-100 transition-opacity" />
                <span className="block text-sm font-semibold text-charcoal mb-1">{subject} Lesson Plan For</span>
                <span className="block font-headline-md text-headline-md text-royal-purple mb-2 font-bold">{item.grade}</span>
                <span className="text-body-md text-on-surface-variant">{item.band}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
