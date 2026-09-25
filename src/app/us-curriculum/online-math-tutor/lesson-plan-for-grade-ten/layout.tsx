import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Grade 10 Math Lesson Plan & Curriculum Map | US Curriculum | MMS',
  description:
    'Comprehensive Grade 10 Math lesson plan and pacing guide aligned to the US Curriculum. Weekly curriculum map with flexible scheduling for 1, 2, 3, or 5 days per week. One-to-one online math tutoring for Grade 10 students.',
  keywords: 'Grade 10 Math lesson plan, Grade 10 Math curriculum, math pacing guide grade 10, US Curriculum math, online math tutor grade 10, Grade 10 math worksheets, math curriculum map',
  alternates: {
    canonical: 'https://mathmakesmart.com/us-curriculum/online-math-tutor/lesson-plan-for-grade-ten',
  },
  openGraph: {
    title: 'Grade 10 Math Lesson Plan & Curriculum Map | US Curriculum | MMS',
    description:
      'Comprehensive Grade 10 Math lesson plan and pacing guide aligned to the US Curriculum. Weekly curriculum map with flexible scheduling for 1, 2, 3, or 5 days per week. One-to-one online math tutoring for Grade 10 students.',
    url: 'https://mathmakesmart.com/us-curriculum/online-math-tutor/lesson-plan-for-grade-ten',
    type: 'website',
  },
};

export default function LessonPlanMathGrade10Layout({ children }: { children: React.ReactNode }) {
  return children;
}
