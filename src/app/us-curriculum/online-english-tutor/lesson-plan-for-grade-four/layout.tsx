import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Grade 4 English Lesson Plan & Curriculum Map | US Curriculum | MMS',
  description:
    'Comprehensive Grade 4 English lesson plan and pacing guide aligned to the US Curriculum. Weekly curriculum map with flexible scheduling for 1, 2, 3, or 5 days per week. One-to-one online english tutoring for Grade 4 students.',
  keywords: 'Grade 4 English lesson plan, Grade 4 English curriculum, english pacing guide grade 4, US Curriculum english, online english tutor grade 4, Grade 4 english worksheets, english curriculum map',
  alternates: {
    canonical: 'https://mathmakesmart.com/us-curriculum/online-english-tutor/lesson-plan-for-grade-four',
  },
  openGraph: {
    title: 'Grade 4 English Lesson Plan & Curriculum Map | US Curriculum | MMS',
    description:
      'Comprehensive Grade 4 English lesson plan and pacing guide aligned to the US Curriculum. Weekly curriculum map with flexible scheduling for 1, 2, 3, or 5 days per week. One-to-one online english tutoring for Grade 4 students.',
    url: 'https://mathmakesmart.com/us-curriculum/online-english-tutor/lesson-plan-for-grade-four',
    type: 'website',
  },
};

export default function LessonPlanEnglishGrade4Layout({ children }: { children: React.ReactNode }) {
  return children;
}
