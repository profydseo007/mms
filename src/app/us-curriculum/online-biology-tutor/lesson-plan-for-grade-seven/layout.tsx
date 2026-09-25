import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Grade 7 Biology Lesson Plan & Curriculum Map | US Curriculum | MMS',
  description:
    'Comprehensive Grade 7 Biology lesson plan and pacing guide aligned to the US Curriculum. Weekly curriculum map with flexible scheduling for 1, 2, 3, or 5 days per week. One-to-one online biology tutoring for Grade 7 students.',
  keywords: 'Grade 7 Biology lesson plan, Grade 7 Biology curriculum, biology pacing guide grade 7, US Curriculum biology, online biology tutor grade 7, Grade 7 biology worksheets, biology curriculum map',
  alternates: {
    canonical: 'https://mathmakesmart.com/us-curriculum/online-biology-tutor/lesson-plan-for-grade-seven',
  },
  openGraph: {
    title: 'Grade 7 Biology Lesson Plan & Curriculum Map | US Curriculum | MMS',
    description:
      'Comprehensive Grade 7 Biology lesson plan and pacing guide aligned to the US Curriculum. Weekly curriculum map with flexible scheduling for 1, 2, 3, or 5 days per week. One-to-one online biology tutoring for Grade 7 students.',
    url: 'https://mathmakesmart.com/us-curriculum/online-biology-tutor/lesson-plan-for-grade-seven',
    type: 'website',
  },
};

export default function LessonPlanBiologyGrade7Layout({ children }: { children: React.ReactNode }) {
  return children;
}
