import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Grade 10 English Lesson Plan & Curriculum Map | US Curriculum | MMS',
  description:
    'Comprehensive Grade 10 English lesson plan and pacing guide aligned to the US Curriculum. Weekly curriculum map with flexible scheduling for 1, 2, 3, or 5 days per week. One-to-one online english tutoring for Grade 10 students.',
  keywords: 'Grade 10 English lesson plan, Grade 10 English curriculum, english pacing guide grade 10, US Curriculum english, online english tutor grade 10, Grade 10 english worksheets, english curriculum map',
  alternates: {
    canonical: 'https://mathmakesmart.com/us-curriculum/online-english-tutor/lesson-plan-for-grade-ten',
  },
  openGraph: {
    title: 'Grade 10 English Lesson Plan & Curriculum Map | US Curriculum | MMS',
    description:
      'Comprehensive Grade 10 English lesson plan and pacing guide aligned to the US Curriculum. Weekly curriculum map with flexible scheduling for 1, 2, 3, or 5 days per week. One-to-one online english tutoring for Grade 10 students.',
    url: 'https://mathmakesmart.com/us-curriculum/online-english-tutor/lesson-plan-for-grade-ten',
    type: 'website',
  },
};

export default function LessonPlanEnglishGrade10Layout({ children }: { children: React.ReactNode }) {
  return children;
}
