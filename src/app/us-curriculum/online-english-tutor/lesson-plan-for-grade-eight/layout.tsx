import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Grade 8 English Lesson Plan & Curriculum Map | US Curriculum | MMS',
  description:
    'Comprehensive Grade 8 English lesson plan and pacing guide aligned to the US Curriculum. Weekly curriculum map with flexible scheduling for 1, 2, 3, or 5 days per week. One-to-one online english tutoring for Grade 8 students.',
  keywords: 'Grade 8 English lesson plan, Grade 8 English curriculum, english pacing guide grade 8, US Curriculum english, online english tutor grade 8, Grade 8 english worksheets, english curriculum map',
  alternates: {
    canonical: 'https://mathmakesmart.com/us-curriculum/online-english-tutor/lesson-plan-for-grade-eight',
  },
  openGraph: {
    title: 'Grade 8 English Lesson Plan & Curriculum Map | US Curriculum | MMS',
    description:
      'Comprehensive Grade 8 English lesson plan and pacing guide aligned to the US Curriculum. Weekly curriculum map with flexible scheduling for 1, 2, 3, or 5 days per week. One-to-one online english tutoring for Grade 8 students.',
    url: 'https://mathmakesmart.com/us-curriculum/online-english-tutor/lesson-plan-for-grade-eight',
    type: 'website',
  },
};

export default function LessonPlanEnglishGrade8Layout({ children }: { children: React.ReactNode }) {
  return children;
}
