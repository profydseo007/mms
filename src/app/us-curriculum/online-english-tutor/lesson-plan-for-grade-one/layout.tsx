import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Grade 1 English Lesson Plan & Curriculum Map | US Curriculum | MMS',
  description:
    'Comprehensive Grade 1 English lesson plan and pacing guide aligned to the US Curriculum. Weekly curriculum map with flexible scheduling for 1, 2, 3, or 5 days per week. One-to-one online english tutoring for Grade 1 students.',
  keywords: 'Grade 1 English lesson plan, Grade 1 English curriculum, english pacing guide grade 1, US Curriculum english, online english tutor grade 1, Grade 1 english worksheets, english curriculum map',
  alternates: {
    canonical: 'https://mathmakesmart.com/us-curriculum/online-english-tutor/lesson-plan-for-grade-one',
  },
  openGraph: {
    title: 'Grade 1 English Lesson Plan & Curriculum Map | US Curriculum | MMS',
    description:
      'Comprehensive Grade 1 English lesson plan and pacing guide aligned to the US Curriculum. Weekly curriculum map with flexible scheduling for 1, 2, 3, or 5 days per week. One-to-one online english tutoring for Grade 1 students.',
    url: 'https://mathmakesmart.com/us-curriculum/online-english-tutor/lesson-plan-for-grade-one',
    type: 'website',
  },
};

export default function LessonPlanEnglishGrade1Layout({ children }: { children: React.ReactNode }) {
  return children;
}
