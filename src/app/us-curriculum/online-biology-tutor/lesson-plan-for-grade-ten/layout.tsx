import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Grade 10 Biology Lesson Plan & Curriculum Map | US Curriculum | MMS',
  description:
    'Comprehensive Grade 10 Biology lesson plan and pacing guide aligned to the US Curriculum. Weekly curriculum map with flexible scheduling for 1, 2, 3, or 5 days per week. One-to-one online biology tutoring for Grade 10 students.',
  keywords: 'Grade 10 Biology lesson plan, Grade 10 Biology curriculum, biology pacing guide grade 10, US Curriculum biology, online biology tutor grade 10, Grade 10 biology worksheets, biology curriculum map',
  alternates: {
    canonical: 'https://mathmakesmart.com/us-curriculum/online-biology-tutor/lesson-plan-for-grade-ten',
  },
  openGraph: {
    title: 'Grade 10 Biology Lesson Plan & Curriculum Map | US Curriculum | MMS',
    description:
      'Comprehensive Grade 10 Biology lesson plan and pacing guide aligned to the US Curriculum. Weekly curriculum map with flexible scheduling for 1, 2, 3, or 5 days per week. One-to-one online biology tutoring for Grade 10 students.',
    url: 'https://mathmakesmart.com/us-curriculum/online-biology-tutor/lesson-plan-for-grade-ten',
    type: 'website',
  },
};

export default function LessonPlanBiologyGrade10Layout({ children }: { children: React.ReactNode }) {
  return children;
}
