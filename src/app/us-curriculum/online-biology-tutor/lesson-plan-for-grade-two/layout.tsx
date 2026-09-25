import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Grade 2 Biology Lesson Plan & Curriculum Map | US Curriculum | MMS',
  description:
    'Comprehensive Grade 2 Biology lesson plan and pacing guide aligned to the US Curriculum. Weekly curriculum map with flexible scheduling for 1, 2, 3, or 5 days per week. One-to-one online biology tutoring for Grade 2 students.',
  keywords: 'Grade 2 Biology lesson plan, Grade 2 Biology curriculum, biology pacing guide grade 2, US Curriculum biology, online biology tutor grade 2, Grade 2 biology worksheets, biology curriculum map',
  alternates: {
    canonical: 'https://mathmakesmart.com/us-curriculum/online-biology-tutor/lesson-plan-for-grade-two',
  },
  openGraph: {
    title: 'Grade 2 Biology Lesson Plan & Curriculum Map | US Curriculum | MMS',
    description:
      'Comprehensive Grade 2 Biology lesson plan and pacing guide aligned to the US Curriculum. Weekly curriculum map with flexible scheduling for 1, 2, 3, or 5 days per week. One-to-one online biology tutoring for Grade 2 students.',
    url: 'https://mathmakesmart.com/us-curriculum/online-biology-tutor/lesson-plan-for-grade-two',
    type: 'website',
  },
};

export default function LessonPlanBiologyGrade2Layout({ children }: { children: React.ReactNode }) {
  return children;
}
