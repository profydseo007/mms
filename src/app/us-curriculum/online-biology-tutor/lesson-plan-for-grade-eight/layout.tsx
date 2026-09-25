import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Grade 8 Biology Lesson Plan & Curriculum Map | US Curriculum | MMS',
  description:
    'Comprehensive Grade 8 Biology lesson plan and pacing guide aligned to the US Curriculum. Weekly curriculum map with flexible scheduling for 1, 2, 3, or 5 days per week. One-to-one online biology tutoring for Grade 8 students.',
  keywords: 'Grade 8 Biology lesson plan, Grade 8 Biology curriculum, biology pacing guide grade 8, US Curriculum biology, online biology tutor grade 8, Grade 8 biology worksheets, biology curriculum map',
  alternates: {
    canonical: 'https://mathmakesmart.com/us-curriculum/online-biology-tutor/lesson-plan-for-grade-eight',
  },
  openGraph: {
    title: 'Grade 8 Biology Lesson Plan & Curriculum Map | US Curriculum | MMS',
    description:
      'Comprehensive Grade 8 Biology lesson plan and pacing guide aligned to the US Curriculum. Weekly curriculum map with flexible scheduling for 1, 2, 3, or 5 days per week. One-to-one online biology tutoring for Grade 8 students.',
    url: 'https://mathmakesmart.com/us-curriculum/online-biology-tutor/lesson-plan-for-grade-eight',
    type: 'website',
  },
};

export default function LessonPlanBiologyGrade8Layout({ children }: { children: React.ReactNode }) {
  return children;
}
