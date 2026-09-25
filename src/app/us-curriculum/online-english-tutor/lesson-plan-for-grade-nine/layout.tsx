import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Grade 9 English Lesson Plan & Curriculum Map | US Curriculum | MMS',
  description:
    'Comprehensive Grade 9 English lesson plan and pacing guide aligned to the US Curriculum. Weekly curriculum map with flexible scheduling for 1, 2, 3, or 5 days per week. One-to-one online english tutoring for Grade 9 students.',
  keywords: 'Grade 9 English lesson plan, Grade 9 English curriculum, english pacing guide grade 9, US Curriculum english, online english tutor grade 9, Grade 9 english worksheets, english curriculum map',
  alternates: {
    canonical: 'https://mathmakesmart.com/us-curriculum/online-english-tutor/lesson-plan-for-grade-nine',
  },
  openGraph: {
    title: 'Grade 9 English Lesson Plan & Curriculum Map | US Curriculum | MMS',
    description:
      'Comprehensive Grade 9 English lesson plan and pacing guide aligned to the US Curriculum. Weekly curriculum map with flexible scheduling for 1, 2, 3, or 5 days per week. One-to-one online english tutoring for Grade 9 students.',
    url: 'https://mathmakesmart.com/us-curriculum/online-english-tutor/lesson-plan-for-grade-nine',
    type: 'website',
  },
};

export default function LessonPlanEnglishGrade9Layout({ children }: { children: React.ReactNode }) {
  return children;
}
