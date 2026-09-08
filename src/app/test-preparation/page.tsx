'use client';

import { useRouter } from 'next/navigation';

const TEST_TYPES = [
  {
    slug: 'sat',
    title: 'SAT',
    subtitle: 'Digital Adaptive · Score 400–1600',
    icon: 'quiz',
    description: 'The digital SAT uses an adaptive two-module format. We build both the content knowledge and the module-routing strategy that unlocks scores above 1400.',
    color: 'bg-primary-fixed',
    iconColor: 'text-royal-purple',
  },
  {
    slug: 'act',
    title: 'ACT',
    subtitle: 'Composite Score 1–36 · Four Sections',
    icon: 'assignment_turned_in',
    description: 'English, Math, Reading, and Science — all strictly timed. We prepare students for both content and the pacing discipline the ACT demands.',
    color: 'bg-secondary-container',
    iconColor: 'text-secondary',
  },
  {
    slug: 'ap',
    title: 'AP',
    subtitle: 'Advanced Placement · Scores 1–5',
    icon: 'emoji_events',
    description: 'College-level courses in high school. A score of 3–5 earns college credit. We cover all major AP subjects matched to the current College Board curriculum framework.',
    color: 'bg-lime-green/20',
    iconColor: 'text-secondary',
  },
];

export default function TestPreparationPage() {
  const router = useRouter();

  return (
    <div className="bg-background text-on-surface font-body-md overflow-x-hidden">
      {/* Hero */}
      <section className="relative py-24 bg-white overflow-hidden">
        <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-royal-purple/10 text-royal-purple rounded-full font-label-sm mb-6">
            <span className="material-symbols-outlined text-[16px]">verified</span>
            US Test Preparation Specialists
          </div>
          <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-charcoal leading-tight font-bold mb-6">
            Test Preparation <span className="text-royal-purple">for US Students</span>
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
            One-to-one online tutoring for the SAT, ACT, and AP exams. Choose your test below to get started.
          </p>
        </div>
      </section>

      {/* Cards */}
      <section className="py-24 bg-soft-gray">
        <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {TEST_TYPES.map((item) => (
              <button
                key={item.slug}
                onClick={() => router.push(`/test-preparation/${item.slug}`)}
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

      {/* SAT vs ACT */}
      <section className="py-24 bg-white">
        <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="text-center mb-16">
            <h2 className="font-headline-lg text-headline-lg text-charcoal font-bold mb-4">SAT vs ACT — which should you take?</h2>
            <p className="text-on-surface-variant font-body-md max-w-2xl mx-auto">Both are accepted everywhere. The right choice depends on your strengths. We offer a free diagnostic session to help you decide.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-primary-fixed p-8 rounded-2xl text-center">
              <h3 className="font-headline-md text-charcoal font-bold mb-3">SAT may suit you if…</h3>
              <ul className="space-y-2 text-left">{['You prefer adaptive difficulty', 'Strong at reading carefully', 'Want calculator use throughout Math'].map((pt) => <li key={pt} className="flex items-start gap-2 text-label-md text-on-surface-variant"><span className="material-symbols-outlined text-lime-green text-sm mt-0.5" style={{ fontVariationSettings: '"FILL" 1' }}>check_circle</span>{pt}</li>)}</ul>
            </div>
            <div className="bg-secondary-container p-8 rounded-2xl text-center">
              <h3 className="font-headline-md text-charcoal font-bold mb-3">ACT may suit you if…</h3>
              <ul className="space-y-2 text-left">{['You prefer a fixed format', 'Strong in science reasoning', 'Want a predictable time-per-question pace'].map((pt) => <li key={pt} className="flex items-start gap-2 text-label-md text-on-surface-variant"><span className="material-symbols-outlined text-lime-green text-sm mt-0.5" style={{ fontVariationSettings: '"FILL" 1' }}>check_circle</span>{pt}</li>)}</ul>
            </div>
            <div className="bg-soft-gray p-8 rounded-2xl text-center">
              <h3 className="font-headline-md text-charcoal font-bold mb-3">Not sure yet?</h3>
              <p className="text-on-surface-variant font-body-md mb-6">Take one free diagnostic for each. Your scores will tell you which test gives you the better ATAR equivalent percentile rank.</p>
              <button onClick={() => router.push('/free-trial')} className="bg-royal-purple text-white px-6 py-3 rounded-xl font-label-md font-bold hover:bg-primary transition-all cursor-pointer">Book a Diagnostic</button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-royal-purple text-white">
        <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop text-center space-y-6">
          <h2 className="font-headline-lg text-headline-lg font-bold">Ready to start preparing?</h2>
          <p className="font-body-lg text-body-lg opacity-90 max-w-xl mx-auto">Book a free trial lesson. We&apos;ll run a diagnostic and tell you exactly where to focus to hit your target score.</p>
          <button onClick={() => router.push('/free-trial')} className="inline-flex items-center gap-2 bg-white text-royal-purple px-8 py-4 rounded-xl font-headline-md font-bold hover:bg-soft-gray transition-all shadow-lg active:scale-95 cursor-pointer">
            Book a Free Trial
            <span className="material-symbols-outlined">arrow_forward</span>
          </button>
        </div>
      </section>
    </div>
  );
}
