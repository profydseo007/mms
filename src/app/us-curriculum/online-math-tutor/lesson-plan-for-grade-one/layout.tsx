import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Grade 1 Math Lesson Plan & Curriculum Map | US Curriculum | MMS',
  description:
    'Comprehensive Grade 1 Math lesson plan and pacing guide aligned to the US Curriculum. Weekly curriculum map with flexible scheduling for 1, 2, 3, or 5 days per week. One-to-one online math tutoring for Grade 1 students.',
  keywords: 'Grade 1 Math lesson plan, Grade 1 Math curriculum, math pacing guide grade 1, US Curriculum math, online math tutor grade 1, Grade 1 math worksheets, math curriculum map',
  alternates: {
    canonical: 'https://mathmakesmart.com/us-curriculum/online-math-tutor/lesson-plan-for-grade-one',
  },
  openGraph: {
    title: 'Grade 1 Math Lesson Plan & Curriculum Map | US Curriculum | MMS',
    description:
      'Comprehensive Grade 1 Math lesson plan and pacing guide aligned to the US Curriculum. Weekly curriculum map with flexible scheduling for 1, 2, 3, or 5 days per week. One-to-one online math tutoring for Grade 1 students.',
    url: 'https://mathmakesmart.com/us-curriculum/online-math-tutor/lesson-plan-for-grade-one',
    type: 'website',
  },
};

export default function LessonPlanMathGrade1Layout({ children }: { children: React.ReactNode }) {
  return children;
}
