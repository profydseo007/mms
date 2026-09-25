import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Grade 3 Science Lesson Plan & Curriculum Map | US Curriculum | MMS',
  description:
    'Comprehensive Grade 3 Science lesson plan and pacing guide aligned to the US Curriculum. Weekly curriculum map with flexible scheduling for 1, 2, 3, or 5 days per week. One-to-one online science tutoring for Grade 3 students.',
  keywords: 'Grade 3 Science lesson plan, Grade 3 Science curriculum, science pacing guide grade 3, US Curriculum science, online science tutor grade 3, Grade 3 science worksheets, science curriculum map',
  alternates: {
    canonical: 'https://mathmakesmart.com/us-curriculum/online-science-tutor/lesson-plan-for-grade-three',
  },
  openGraph: {
    title: 'Grade 3 Science Lesson Plan & Curriculum Map | US Curriculum | MMS',
    description:
      'Comprehensive Grade 3 Science lesson plan and pacing guide aligned to the US Curriculum. Weekly curriculum map with flexible scheduling for 1, 2, 3, or 5 days per week. One-to-one online science tutoring for Grade 3 students.',
    url: 'https://mathmakesmart.com/us-curriculum/online-science-tutor/lesson-plan-for-grade-three',
    type: 'website',
  },
};

export default function LessonPlanScienceGrade3Layout({ children }: { children: React.ReactNode }) {
  return children;
}
