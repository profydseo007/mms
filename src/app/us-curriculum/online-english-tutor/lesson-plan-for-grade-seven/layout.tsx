import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Grade 7 English Lesson Plan & Curriculum Map | US Curriculum | MMS',
  description:
    'Comprehensive Grade 7 English lesson plan and pacing guide aligned to the US Curriculum. Weekly curriculum map with flexible scheduling for 1, 2, 3, or 5 days per week. One-to-one online english tutoring for Grade 7 students.',
  keywords: 'Grade 7 English lesson plan, Grade 7 English curriculum, english pacing guide grade 7, US Curriculum english, online english tutor grade 7, Grade 7 english worksheets, english curriculum map',
  alternates: {
    canonical: 'https://mathmakesmart.com/us-curriculum/online-english-tutor/lesson-plan-for-grade-seven',
  },
  openGraph: {
    title: 'Grade 7 English Lesson Plan & Curriculum Map | US Curriculum | MMS',
    description:
      'Comprehensive Grade 7 English lesson plan and pacing guide aligned to the US Curriculum. Weekly curriculum map with flexible scheduling for 1, 2, 3, or 5 days per week. One-to-one online english tutoring for Grade 7 students.',
    url: 'https://mathmakesmart.com/us-curriculum/online-english-tutor/lesson-plan-for-grade-seven',
    type: 'website',
  },
};

export default function LessonPlanEnglishGrade7Layout({ children }: { children: React.ReactNode }) {
  return children;
}
