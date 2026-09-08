'use client';

import { useRouter } from 'next/navigation';
import { Award, ArrowRight, BadgeCheck, ClipboardCheck, ClipboardList, GraduationCap, HelpCircle, Map, Medal, Trophy } from 'lucide-react';

const TEST_TYPES = [
  {
    slug: 'naplan',
    title: 'NAPLAN',
    subtitle: 'Years 3, 5, 7 & 9 — National Assessment',
    icon: ClipboardCheck,
    description: 'National literacy and numeracy benchmarking. Adaptive online test covering Reading, Writing, Language Conventions, and Numeracy.',
    color: 'bg-primary-fixed',
    iconColor: 'text-royal-purple',
  },
  {
    slug: 'selective-school-test',
    title: 'Selective School Test',
    subtitle: 'NSW · VIC · QLD · SA — Competitive Entry',
    icon: Medal,
    description: 'State-specific selective and opportunity-class entry examinations. Reasoning speed and accuracy under exam conditions.',
    color: 'bg-secondary-container',
    iconColor: 'text-secondary',
  },
  {
    slug: 'hsc',
    title: 'HSC',
    subtitle: 'NSW Years 11 & 12 — ATAR',
    icon: GraduationCap,
    description: 'Higher School Certificate — NESA syllabus-matched tutoring from Standard to Extension 2. Marking guideline technique for every subject.',
    color: 'bg-tertiary-fixed',
    iconColor: 'text-tertiary',
  },
  {
    slug: 'vce',
    title: 'VCE',
    subtitle: 'VIC Years 11 & 12 — ATAR',
    icon: Trophy,
    description: 'Victorian Certificate of Education — VCAA study-design matched sessions covering SAC preparation and external exam strategy.',
    color: 'bg-lime-green/20',
    iconColor: 'text-secondary',
  },
  {
    slug: 'qce',
    title: 'QCE',
    subtitle: 'QLD Years 11 & 12 — ATAR',
    icon: Award,
    description: 'Queensland Certificate of Education — Internal assessment (IA) and external QCAA exam preparation across all General subjects.',
    color: 'bg-royal-purple/10',
    iconColor: 'text-royal-purple',
  },
];

export default function AUTestPreparationPage() {
  const router = useRouter();

  return (
    <div className="bg-background text-on-surface font-body-md overflow-x-hidden">
      {/* Hero */}
      <section className="relative py-24 bg-white overflow-hidden">
        <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-royal-purple/10 text-royal-purple rounded-full font-label-sm mb-6">
            <BadgeCheck size={16} strokeWidth={2.25} aria-hidden="true" />
            Australian Test Preparation Specialists
          </div>
          <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-charcoal leading-tight font-bold mb-6">
            Test Preparation <span className="text-royal-purple">for Australian Students</span>
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
            One-to-one online tutoring built around Australia&apos;s national and state-based assessments. Choose the test you are preparing for below.
          </p>
        </div>
      </section>

      {/* Cards */}
      <section className="py-24 bg-soft-gray">
        <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TEST_TYPES.map((item) => {
              const Icon = item.icon;

              return (
              <button
                key={item.slug}
                onClick={() => router.push(`/au/test-preparation/${item.slug}`)}
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
                  <ArrowRight size={18} strokeWidth={2.25} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                </span>
              </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why AU tutoring */}
      <section className="py-24 bg-white">
        <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="text-center mb-16">
            <h2 className="font-headline-lg text-headline-lg text-charcoal font-bold mb-4">Why Australian-specific preparation matters</h2>
            <p className="text-on-surface-variant font-body-md max-w-2xl mx-auto">
              HSC, VCE, and QCE are entirely separate systems with different syllabuses, internal assessment structures, and ATAR calculations. A tutor who doesn&apos;t know your state&apos;s curriculum will cost you marks.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { Icon: Map, color: 'bg-primary-fixed text-royal-purple', title: 'State-matched', desc: 'Tutors matched to NSW NESA, VCAA, or QCAA — whichever system your school uses.' },
              { Icon: ClipboardList, color: 'bg-lime-green/20 text-secondary', title: 'Syllabus-aligned', desc: 'Every session follows the current study design or syllabus document for your subject.' },
              { Icon: HelpCircle, color: 'bg-primary-fixed text-royal-purple', title: 'Exam-specific', desc: 'Past papers, marking guides, and exam technique matched to each specific test format.' },
            ].map((item) => (
              <div key={item.title} className="bg-soft-gray p-8 rounded-2xl text-center">
                <div className={`w-14 h-14 ${item.color} rounded-full flex items-center justify-center mx-auto mb-6`}>
                  <item.Icon size={24} aria-hidden="true" />
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
          <h2 className="font-headline-lg text-headline-lg font-bold">Not sure which test to prepare for?</h2>
          <p className="font-body-lg text-body-lg opacity-90 max-w-xl mx-auto">
            Book a free trial lesson and we&apos;ll recommend the right preparation path for your state and year level.
          </p>
          <button
            onClick={() => router.push('/free-trial')}
            className="inline-flex items-center gap-2 bg-white text-royal-purple px-8 py-4 rounded-xl font-headline-md font-bold hover:bg-soft-gray transition-all shadow-lg active:scale-95 cursor-pointer"
          >
            Book a Free Trial
            <ArrowRight size={20} strokeWidth={2.25} aria-hidden="true" />
          </button>
        </div>
      </section>
    </div>
  );
}
