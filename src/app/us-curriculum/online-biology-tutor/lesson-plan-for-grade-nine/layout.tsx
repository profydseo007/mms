import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Grade 9 Biology Lesson Plan & Curriculum Map | US Curriculum | MMS',
  description:
    'Comprehensive Grade 9 Biology lesson plan and pacing guide aligned to the US Curriculum. Weekly curriculum map with flexible scheduling for 1, 2, 3, or 5 days per week. One-to-one online biology tutoring for Grade 9 students.',
  keywords: 'Grade 9 Biology lesson plan, Grade 9 Biology curriculum, biology pacing guide grade 9, US Curriculum biology, online biology tutor grade 9, Grade 9 biology worksheets, biology curriculum map',
  alternates: {
    canonical: 'https://mathmakesmart.com/us-curriculum/online-biology-tutor/lesson-plan-for-grade-nine',
  },
  openGraph: {
    title: 'Grade 9 Biology Lesson Plan & Curriculum Map | US Curriculum | MMS',
    description:
      'Comprehensive Grade 9 Biology lesson plan and pacing guide aligned to the US Curriculum. Weekly curriculum map with flexible scheduling for 1, 2, 3, or 5 days per week. One-to-one online biology tutoring for Grade 9 students.',
    url: 'https://mathmakesmart.com/us-curriculum/online-biology-tutor/lesson-plan-for-grade-nine',
    type: 'website',
  },
};

export default function LessonPlanBiologyGrade9Layout({ children }: { children: React.ReactNode }) {
  return children;
}
