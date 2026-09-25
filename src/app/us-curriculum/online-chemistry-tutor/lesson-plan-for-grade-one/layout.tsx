import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Grade 1 Chemistry Lesson Plan & Curriculum Map | US Curriculum | MMS',
  description:
    'Comprehensive Grade 1 Chemistry lesson plan and pacing guide aligned to the US Curriculum. Weekly curriculum map with flexible scheduling for 1, 2, 3, or 5 days per week. One-to-one online chemistry tutoring for Grade 1 students.',
  keywords: 'Grade 1 Chemistry lesson plan, Grade 1 Chemistry curriculum, chemistry pacing guide grade 1, US Curriculum chemistry, online chemistry tutor grade 1, Grade 1 chemistry worksheets, chemistry curriculum map',
  alternates: {
    canonical: 'https://mathmakesmart.com/us-curriculum/online-chemistry-tutor/lesson-plan-for-grade-one',
  },
  openGraph: {
    title: 'Grade 1 Chemistry Lesson Plan & Curriculum Map | US Curriculum | MMS',
    description:
      'Comprehensive Grade 1 Chemistry lesson plan and pacing guide aligned to the US Curriculum. Weekly curriculum map with flexible scheduling for 1, 2, 3, or 5 days per week. One-to-one online chemistry tutoring for Grade 1 students.',
    url: 'https://mathmakesmart.com/us-curriculum/online-chemistry-tutor/lesson-plan-for-grade-one',
    type: 'website',
  },
};

export default function LessonPlanChemistryGrade1Layout({ children }: { children: React.ReactNode }) {
  return children;
}
