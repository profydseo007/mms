import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Grade 11 Science Lesson Plan & Curriculum Map | US Curriculum | MMS',
  description:
    'Comprehensive Grade 11 Science lesson plan and pacing guide aligned to the US Curriculum. Weekly curriculum map with flexible scheduling for 1, 2, 3, or 5 days per week. One-to-one online science tutoring for Grade 11 students.',
  keywords: 'Grade 11 Science lesson plan, Grade 11 Science curriculum, science pacing guide grade 11, US Curriculum science, online science tutor grade 11, Grade 11 science worksheets, science curriculum map',
  alternates: {
    canonical: 'https://mathmakesmart.com/us-curriculum/online-science-tutor/lesson-plan-for-grade-eleven',
  },
  openGraph: {
    title: 'Grade 11 Science Lesson Plan & Curriculum Map | US Curriculum | MMS',
    description:
      'Comprehensive Grade 11 Science lesson plan and pacing guide aligned to the US Curriculum. Weekly curriculum map with flexible scheduling for 1, 2, 3, or 5 days per week. One-to-one online science tutoring for Grade 11 students.',
    url: 'https://mathmakesmart.com/us-curriculum/online-science-tutor/lesson-plan-for-grade-eleven',
    type: 'website',
  },
};

export default function LessonPlanScienceGrade11Layout({ children }: { children: React.ReactNode }) {
  return children;
}
