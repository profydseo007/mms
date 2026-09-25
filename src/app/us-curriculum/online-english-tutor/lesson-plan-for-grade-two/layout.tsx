import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Grade 2 English Lesson Plan & Curriculum Map | US Curriculum | MMS',
  description:
    'Comprehensive Grade 2 English lesson plan and pacing guide aligned to the US Curriculum. Weekly curriculum map with flexible scheduling for 1, 2, 3, or 5 days per week. One-to-one online english tutoring for Grade 2 students.',
  keywords: 'Grade 2 English lesson plan, Grade 2 English curriculum, english pacing guide grade 2, US Curriculum english, online english tutor grade 2, Grade 2 english worksheets, english curriculum map',
  alternates: {
    canonical: 'https://mathmakesmart.com/us-curriculum/online-english-tutor/lesson-plan-for-grade-two',
  },
  openGraph: {
    title: 'Grade 2 English Lesson Plan & Curriculum Map | US Curriculum | MMS',
    description:
      'Comprehensive Grade 2 English lesson plan and pacing guide aligned to the US Curriculum. Weekly curriculum map with flexible scheduling for 1, 2, 3, or 5 days per week. One-to-one online english tutoring for Grade 2 students.',
    url: 'https://mathmakesmart.com/us-curriculum/online-english-tutor/lesson-plan-for-grade-two',
    type: 'website',
  },
};

export default function LessonPlanEnglishGrade2Layout({ children }: { children: React.ReactNode }) {
  return children;
}
