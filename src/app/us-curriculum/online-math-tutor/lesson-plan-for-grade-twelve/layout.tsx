import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Grade 12 Math Lesson Plan & Curriculum Map | US Curriculum | MMS',
  description:
    'Comprehensive Grade 12 Math lesson plan and pacing guide aligned to the US Curriculum. Weekly curriculum map with flexible scheduling for 1, 2, 3, or 5 days per week. One-to-one online math tutoring for Grade 12 students.',
  keywords: 'Grade 12 Math lesson plan, Grade 12 Math curriculum, math pacing guide grade 12, US Curriculum math, online math tutor grade 12, Grade 12 math worksheets, math curriculum map',
  alternates: {
    canonical: 'https://mathmakesmart.com/us-curriculum/online-math-tutor/lesson-plan-for-grade-twelve',
  },
  openGraph: {
    title: 'Grade 12 Math Lesson Plan & Curriculum Map | US Curriculum | MMS',
    description:
      'Comprehensive Grade 12 Math lesson plan and pacing guide aligned to the US Curriculum. Weekly curriculum map with flexible scheduling for 1, 2, 3, or 5 days per week. One-to-one online math tutoring for Grade 12 students.',
    url: 'https://mathmakesmart.com/us-curriculum/online-math-tutor/lesson-plan-for-grade-twelve',
    type: 'website',
  },
};

export default function LessonPlanMathGrade12Layout({ children }: { children: React.ReactNode }) {
  return children;
}
