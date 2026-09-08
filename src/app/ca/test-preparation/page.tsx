'use client';

import { useRouter } from 'next/navigation';
import { ClipboardCheck, MapPinned } from 'lucide-react';

const TEST_TYPES = [
  {
    slug: 'provincial-curricula',
    title: 'Provincial Curricula',
    subtitle: 'Grades K–12 across all 10 provinces',
    icon: MapPinned,
    description: 'Tutoring matched to your province\'s exact curriculum, learning outcomes, and assessment style — Ontario, BC, Alberta, Quebec and more.',
    color: 'bg-primary-fixed',
    iconColor: 'text-royal-purple',
  },
  {
    slug: 'eqao',
    title: 'EQAO',
    subtitle: 'Grades 3, 6, 9 & OSSLT (Grade 10)',
    icon: ClipboardCheck,
    description: 'Ontario\'s province-wide standardised assessments in literacy and numeracy. We target the exact open-response format and four-level marking scale.',
    color: 'bg-secondary-container',
    iconColor: 'text-secondary',
  },
];

export default function CATestPreparationPage() {
  const router = useRouter();

  return (
    <div className="bg-background text-on-surface font-body-md overflow-x-hidden">
      {/* Hero */}
      <section className="relative py-24 bg-white overflow-hidden">
        <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-royal-purple/10 text-royal-purple rounded-full font-label-sm mb-6">
            <span className="material-symbols-outlined text-[16px]">verified</span>
            Canadian Test Preparation Specialists
          </div>
          <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-charcoal leading-tight font-bold mb-6">
            Test Preparation <span className="text-royal-purple">for Canadian Students</span>
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
            One-to-one online tutoring built around Canada&apos;s provincial curricula and standardised assessments. Choose your preparation type below.
          </p>
        </div>
      </section>

      {/* Cards */}
      <section className="py-24 bg-soft-gray">
        <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {TEST_TYPES.map((item) => {
              const Icon = item.icon;

              return (
              <button
                key={item.slug}
                onClick={() => router.push(`/ca/test-preparation/${item.slug}`)}
                className="group bg-white p-10 rounded-[2rem] shadow-[0px_4px_20px_rgba(0,0,0,0.05)] border border-transparent hover:border-royal-purple/30 hover:shadow-xl transition-all text-left"
              >
                <div className={`w-16 h-16 ${item.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <Icon size={32} strokeWidth={2} className={item.iconColor} aria-hidden="true" />
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
              );
            })}
          </div>
        </div>
      </section>

      {/* Why CA tutoring */}
      <section className="py-24 bg-white">
        <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="text-center mb-16">
            <h2 className="font-headline-lg text-headline-lg text-charcoal font-bold mb-4">Why province-specific preparation matters</h2>
            <p className="text-on-surface-variant font-body-md max-w-2xl mx-auto">
              Education in Canada is fully devolved to the provinces. An Ontario Grade 9 math course and a BC Grade 9 math course differ in outcomes, sequencing, and assessments. Generic tutoring won&apos;t cut it.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: 'map', color: 'bg-primary-fixed text-royal-purple', title: 'Province-matched', desc: 'Every tutor is matched to the province your child attends school — not just "Canadian curriculum."' },
              { icon: 'fact_check', color: 'bg-lime-green/20 text-secondary', title: 'Outcome-aligned', desc: 'Sessions follow the specific learning outcomes set by your provincial ministry of education.' },
              { icon: 'quiz', color: 'bg-primary-fixed text-royal-purple', title: 'Assessment-ready', desc: 'From EQAO in Ontario to Alberta PATs and BC provincials, we prepare for the right test.' },
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
          <h2 className="font-headline-lg text-headline-lg font-bold">Not sure which preparation to choose?</h2>
          <p className="font-body-lg text-body-lg opacity-90 max-w-xl mx-auto">
            Book a free trial lesson and we&apos;ll assess your child&apos;s level and recommend the right path for their province and grade.
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
