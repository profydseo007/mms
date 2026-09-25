import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Grade 2 Math Lesson Plan & Curriculum Map | US Curriculum | MMS',
  description:
    'Comprehensive Grade 2 Math lesson plan and pacing guide aligned to the US Curriculum. Weekly curriculum map with flexible scheduling for 1, 2, 3, or 5 days per week. One-to-one online math tutoring for Grade 2 students.',
  keywords: 'Grade 2 Math lesson plan, Grade 2 Math curriculum, math pacing guide grade 2, US Curriculum math, online math tutor grade 2, Grade 2 math worksheets, math curriculum map',
  alternates: {
    canonical: 'https://mathmakesmart.com/us-curriculum/online-math-tutor/lesson-plan-for-grade-two',
  },
  openGraph: {
    title: 'Grade 2 Math Lesson Plan & Curriculum Map | US Curriculum | MMS',
    description:
      'Comprehensive Grade 2 Math lesson plan and pacing guide aligned to the US Curriculum. Weekly curriculum map with flexible scheduling for 1, 2, 3, or 5 days per week. One-to-one online math tutoring for Grade 2 students.',
    url: 'https://mathmakesmart.com/us-curriculum/online-math-tutor/lesson-plan-for-grade-two',
    type: 'website',
  },
};

export default function LessonPlanMathGrade2Layout({ children }: { children: React.ReactNode }) {
  return children;
}
