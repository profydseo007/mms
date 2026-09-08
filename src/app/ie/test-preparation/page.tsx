'use client';

import { useRouter } from 'next/navigation';

const TEST_TYPES = [
  {
    slug: 'junior-cycle',
    title: 'Junior Cycle',
    subtitle: 'First to Third Year — JCFE',
    icon: 'menu_book',
    description: 'Preparation for the Junior Cycle Final Examinations, Classroom-Based Assessments, and the full Junior Cycle Profile of Achievement.',
    color: 'bg-primary-fixed',
    iconColor: 'text-royal-purple',
  },
  {
    slug: 'leaving-certificate',
    title: 'Leaving Certificate',
    subtitle: 'Fifth & Sixth Year — CAO Entry',
    icon: 'emoji_events',
    description: 'Subject-specialist tutoring at Higher and Ordinary level across all Leaving Cert subjects. Oral coaching for Irish and Modern Foreign Languages included.',
    color: 'bg-secondary-container',
    iconColor: 'text-secondary',
  },
];

export default function IETestPreparationPage() {
  const router = useRouter();

  return (
    <div className="bg-background text-on-surface font-body-md overflow-x-hidden">
      {/* Hero */}
      <section className="relative py-24 bg-white overflow-hidden">
        <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-royal-purple/10 text-royal-purple rounded-full font-label-sm mb-6">
            <span className="material-symbols-outlined text-[16px]">verified</span>
            Irish Test Preparation Specialists
          </div>
          <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-charcoal leading-tight font-bold mb-6">
            Test Preparation <span className="text-royal-purple">for Irish Students</span>
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
            One-to-one online tutoring built around the Irish curriculum — from the Junior Cycle to the Leaving Cert. Choose your stage below.
          </p>
        </div>
      </section>

      {/* Cards */}
      <section className="py-24 bg-soft-gray">
        <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {TEST_TYPES.map((item) => (
              <button
                key={item.slug}
                onClick={() => router.push(`/ie/test-preparation/${item.slug}`)}
                className="group bg-white p-10 rounded-[2rem] shadow-[0px_4px_20px_rgba(0,0,0,0.05)] border border-transparent hover:border-royal-purple/30 hover:shadow-xl transition-all text-left"
              >
                <div className={`w-16 h-16 ${item.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <span className={`material-symbols-outlined text-3xl ${item.iconColor}`}>{item.icon}</span>
                </div>
                <div className="mb-4">
                  <h2 className="font-headline-lg text-headline-lg text-charcoal font-bold">{item.title}</h2>
                  <p className="font-label-md text-label-md text-royal-purple font-semibold mt-1">{item.subtitle}</p>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant mb-6">{item.description}</p>
                <span className="inline-flex items-center gap-2 text-royal-purple font-bold font-label-md group-hover:underline">
                  View preparation
                  <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Why Irish curriculum */}
      <section className="py-24 bg-white">
        <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="text-center mb-16">
            <h2 className="font-headline-lg text-headline-lg text-charcoal font-bold mb-4">Why Irish-curriculum tutoring matters</h2>
            <p className="text-on-surface-variant font-body-md max-w-2xl mx-auto">Ireland runs its own curriculum, examination system, and grading scales — entirely separate from the UK. Our tutors are matched to the Irish syllabus, SEC marking schemes, and CAO points system.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: 'assignment_turned_in', color: 'bg-primary-fixed text-royal-purple', title: 'SEC Exam-Matched', desc: 'Every session is built around the State Examinations Commission marking schemes and question formats.' },
              { icon: 'star_rate', color: 'bg-lime-green/20 text-secondary', title: 'CAO Points Focus', desc: 'We teach the grade bands that matter — H1 through H7 — and the strategies to move between them.' },
              { icon: 'record_voice_over', color: 'bg-primary-fixed text-royal-purple', title: 'Oral Exam Coaching', desc: 'Irish oral (Scrúdú Béil) and Modern Foreign Language orals are a major part of our preparation.' },
            ].map((item) => (
              <div key={item.title} className="bg-soft-gray p-8 rounded-2xl text-center">
                <div className={`w-14 h-14 ${item.color} rounded-full flex items-center justify-center mx-auto mb-6`}>
                  <span className="material-symbols-outlined text-2xl">{item.icon}</span>
                </div>
                <h3 className="font-headline-md text-charcoal font-bold mb-3">{item.title}</h3>
                <p className="text-on-surface-variant font-body-md">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-royal-purple text-white">
        <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop text-center space-y-6">
          <h2 className="font-headline-lg text-headline-lg font-bold">Not sure which stage to prepare for?</h2>
          <p className="font-body-lg text-body-lg opacity-90 max-w-xl mx-auto">
            Book a free trial lesson and we&apos;ll assess your child&apos;s level and recommend the right preparation path.
          </p>
          <button
            onClick={() => router.push('/free-trial')}
            className="inline-flex items-center gap-2 bg-white text-royal-purple px-8 py-4 rounded-xl font-headline-md font-bold hover:bg-soft-gray transition-all shadow-lg active:scale-95 cursor-pointer"
          >
            Book a Free Trial
            <span className="material-symbols-outlined">arrow_forward</span>
          </button>
        </div>
      </section>
    </div>
  );
}
