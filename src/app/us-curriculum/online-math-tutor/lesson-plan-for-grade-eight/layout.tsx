import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Grade 8 Math Lesson Plan & Curriculum Map | US Curriculum | MMS',
  description:
    'Comprehensive Grade 8 Math lesson plan and pacing guide aligned to the US Curriculum. Weekly curriculum map with flexible scheduling for 1, 2, 3, or 5 days per week. One-to-one online math tutoring for Grade 8 students.',
  keywords: 'Grade 8 Math lesson plan, Grade 8 Math curriculum, math pacing guide grade 8, US Curriculum math, online math tutor grade 8, Grade 8 math worksheets, math curriculum map',
  alternates: {
    canonical: 'https://mathmakesmart.com/us-curriculum/online-math-tutor/lesson-plan-for-grade-eight',
  },
  openGraph: {
    title: 'Grade 8 Math Lesson Plan & Curriculum Map | US Curriculum | MMS',
    description:
      'Comprehensive Grade 8 Math lesson plan and pacing guide aligned to the US Curriculum. Weekly curriculum map with flexible scheduling for 1, 2, 3, or 5 days per week. One-to-one online math tutoring for Grade 8 students.',
    url: 'https://mathmakesmart.com/us-curriculum/online-math-tutor/lesson-plan-for-grade-eight',
    type: 'website',
  },
};

export default function LessonPlanMathGrade8Layout({ children }: { children: React.ReactNode }) {
  return children;
}
