import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Grade 6 English Lesson Plan & Curriculum Map | US Curriculum | MMS',
  description:
    'Comprehensive Grade 6 English lesson plan and pacing guide aligned to the US Curriculum. Weekly curriculum map with flexible scheduling for 1, 2, 3, or 5 days per week. One-to-one online english tutoring for Grade 6 students.',
  keywords: 'Grade 6 English lesson plan, Grade 6 English curriculum, english pacing guide grade 6, US Curriculum english, online english tutor grade 6, Grade 6 english worksheets, english curriculum map',
  alternates: {
    canonical: 'https://mathmakesmart.com/us-curriculum/online-english-tutor/lesson-plan-for-grade-six',
  },
  openGraph: {
    title: 'Grade 6 English Lesson Plan & Curriculum Map | US Curriculum | MMS',
    description:
      'Comprehensive Grade 6 English lesson plan and pacing guide aligned to the US Curriculum. Weekly curriculum map with flexible scheduling for 1, 2, 3, or 5 days per week. One-to-one online english tutoring for Grade 6 students.',
    url: 'https://mathmakesmart.com/us-curriculum/online-english-tutor/lesson-plan-for-grade-six',
    type: 'website',
  },
};

export default function LessonPlanEnglishGrade6Layout({ children }: { children: React.ReactNode }) {
  return children;
}
