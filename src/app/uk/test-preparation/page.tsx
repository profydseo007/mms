'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAppNavigate } from '@/lib/usimport { FreeTrialForm } from '@/components/FreeTrial';
eAppNavigate';
import {
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  Target,
  CalendarClock,
  BarChart3,
  GraduationCap,
  Award,
  Timer,
  Compass,
  FilePenLine,
  School,
  Globe,
  Landmark,
  type LucideIcon,
} from 'lucide-react';
import TrustpilotWidget from '@/components/TrustpilotWidget';

const TESTS: { slug: string; name: string; tag: string; icon: LucideIcon; accent: string; iconColor: string; summary: string; points: string[] }[] = [
  {
    slug: '11-plus',
    name: '11 Plus',
    tag: 'Year 5–6 · Grammar Entry',
    icon: Award,
    accent: 'bg-royal-purple/10',
    iconColor: 'text-royal-purple',
    summary:
      'The entrance exam for grammar schools and many selective independents, sat in Year 6. Formats vary by region — GL Assessment, CEM-style and school-set papers all test different things.',
    points: ['English, Maths, Verbal & Non-Verbal Reasoning', 'Format depends on your local authority', 'Best started in Year 5'],
  },
  {
    slug: '13-plus',
    name: '13 Plus',
    tag: 'Year 6–8 · Senior Independent',
    icon: School,
    accent: 'bg-lime-green/20',
    iconColor: 'text-secondary',
    summary:
      'The route from prep school into independent senior schools, run by the ISEB rather than a national exam board. Covers the Common Pre-Test and Common Entrance in turn.',
    points: ['ISEB Common Pre-Test, then Common Entrance', 'Compulsory English, Maths & Science', 'Scholarship papers for stronger candidates'],
  },
  {
    slug: 'gcse',
    name: 'GCSE',
    tag: 'Year 10–11 · Key Stage 4',
    icon: FilePenLine,
    accent: 'bg-primary/10',
    iconColor: 'text-primary',
    summary:
      'Sat by almost every UK student at 16, graded 9-1 across AQA, Edexcel and OCR. A grade 4 is a standard pass and a grade 5 a strong pass, with Foundation and Higher tiers in Maths and Science.',
    points: ['9-1 grading across all boards', 'Foundation vs. Higher tier decisions', 'Combined vs. Triple Science'],
  },
  {
    slug: 'igcse',
    name: 'iGCSE',
    tag: 'Year 10–11 · Independent Schools',
    icon: Globe,
    accent: 'bg-secondary-container/20',
    iconColor: 'text-secondary',
    summary:
      'The International GCSE sits alongside standard GCSE at UK independent schools, set by Cambridge International or Pearson Edexcel International, and assessed almost entirely by final written exams.',
    points: ['Cambridge (A*-G) or Edexcel International (9-1)', 'Little to no coursework component', 'Fully recognised by UK universities'],
  },
  {
    slug: 'a-levels',
    name: 'A-Levels',
    tag: 'Year 12–13 · Sixth Form',
    icon: GraduationCap,
    accent: 'bg-royal-purple/10',
    iconColor: 'text-royal-purple',
    summary:
      'Two-year linear qualifications that carry the most weight in a UK university application. Most students take three subjects, with A*-E grades converting into UCAS Tariff points.',
    points: ['Linear exams at the end of Year 13', 'AQA, Edexcel & OCR specifications', 'UCAS points feed university offers'],
  },
  {
    slug: 'university-admissions-tests',
    name: 'University Admissions Tests',
    tag: 'Year 12–13 · Pre-UCAS',
    icon: Landmark,
    accent: 'bg-lime-green/20',
    iconColor: 'text-secondary',
    summary:
      'A separate hurdle many competitive courses add on top of A-Levels. Medicine and Law each have their own test, and several Russell Group universities now use the newer UAT-UK suite for STEM and humanities.',
    points: ['UCAT for Medicine & Dentistry', 'LNAT for Law', 'TMUA, ESAT & TARA for STEM & humanities'],
  },
];

const GCSE_VS_IGCSE: [string, string][] = [
  ['Set by', 'GCSE: AQA, Edexcel or OCR · iGCSE: Cambridge International or Pearson Edexcel International'],
  ['Grading', 'GCSE: 9-1 nationally · iGCSE: Cambridge stays A*-G, Edexcel International uses 9-1'],
  ['Assessment style', 'GCSE mixes exams with some non-exam assessment · iGCSE is almost entirely exam-based'],
  ['Who typically sits it', 'State schools and most independents sit GCSE · Many UK independent and international schools sit iGCSE'],
  ['University recognition', 'Both are treated as directly equivalent by UK universities and UCAS'],
];

const TIMELINE: [string, string][] = [
  ['Year 5–6', 'Structured 11+ preparation for grammar school and selective independent entry, building English, Maths and the reasoning skills primary school doesn\'t normally teach.'],
  ['Year 6–8', '13+ families sit the ISEB Common Pre-Test first, then work through Common Entrance papers in Year 8 to confirm a place at their chosen senior school.'],
  ['Year 9–11', 'Foundations for GCSE or iGCSE are laid in Year 9, with focused revision building through Year 10 and 11 toward final exams sat under AQA, Edexcel, OCR, Cambridge International or Pearson Edexcel International.'],
  ['Year 12–13', 'A-Level study deepens across two linear years, with UCAS predicted grades, personal statements and, for some courses, the EPQ running alongside the syllabus itself.'],
  ['Year 13, Autumn', 'University admissions tests — UCAT, LNAT, TMUA, ESAT or TARA depending on the course — usually sit in October or November, timed to land before UCAS deadlines.'],
];

const FAQS = [
  {
    q: 'Which UK exam should I start preparing my child for first?',
    a: "It depends entirely on their year group and school pathway. Families aiming for grammar school start 11+ preparation in Year 5. Those applying to independent senior schools begin 13+ preparation from Year 6, ahead of the ISEB Common Pre-Test. Everyone reaches GCSE or iGCSE by Year 9 or 10, and A-Level preparation typically starts at the beginning of Year 12. Because we cover every stage under one roof, families don't need to switch tutoring providers as their child moves from one exam to the next.",
  },
  {
    q: "What's the real difference between GCSE and iGCSE?",
    a: "They sit at the same level and carry equal weight with UK universities, but they're set by different bodies. GCSE is regulated by Ofqual and examined by AQA, Edexcel or OCR. The International GCSE is set independently by Cambridge International or Pearson Edexcel International, sits outside the national curriculum, and is assessed almost entirely through final written exams rather than a mix of exams and coursework. Many UK independent schools choose iGCSE specifically for that exam-only structure, since it mirrors A-Level assessment more closely.",
  },
  {
    q: 'Do UK universities still require separate admissions tests beyond A-Levels?',
    a: "For a number of competitive courses, yes. Medicine and dentistry applicants sit the UCAT, and Law applicants sit the LNAT, at more than 40 and 9 universities respectively. Beyond that, the landscape has shifted recently — Oxford is retiring several of its own in-house tests (including the Thinking Skills Assessment) in favour of the newer UAT-UK suite, so Mathematics, Computer Science and Economics applicants increasingly sit the TMUA, while Engineering and Science applicants sit the ESAT and humanities applicants sit the new TARA test. Requirements vary by university and course, so we always check the current specification for each family's target universities before building a plan.",
  },
  {
    q: 'Is online exam preparation as effective as sitting with a tutor in person?',
    a: "It can be, provided the online format keeps what actually makes tutoring work: a live, qualified human tutor, a consistent pairing over time, and a plan built from a genuine diagnostic rather than a generic syllabus. Where online preparation adds real value is flexibility and access to a tutor who specialises in your child's exact exam — a GL Assessment 11+ specialist or an ISEB 13+ specialist, say — rather than whoever happens to be available locally.",
  },
  {
    q: 'Can one tutor support my child from 11+ all the way through to A-Levels?',
    a: "In many cases, yes. A good number of our families stay with the same tutor, or the same small team, right across a child's school career, which means less time re-explaining strengths and gaps every time a new exam comes into view. That said, subject specialism matters more at A-Level, so we sometimes bring in a second tutor for a specific subject once a student moves into sixth form.",
  },
  {
    q: 'How far in advance should we start preparing for GCSEs or iGCSEs?',
    a: "Year 9 is the ideal starting point for building the foundations that GCSE and iGCSE content sits on, particularly in Maths and the Sciences where topics build cumulatively. Families who come to us in Year 10 or even Year 11 still see real progress — the plan simply becomes more targeted, focusing on the specific grade boundary a student needs to cross rather than covering the whole specification from scratch.",
  },
  {
    q: 'Does Math Make Smart prepare students for independent school and international curriculum exams, or just state school exams?',
    a: "All three. We tutor for the state grammar school route (11+ under GL Assessment or CEM-style papers), the independent senior school route (13+ under the ISEB), and the international curriculum route (iGCSE under Cambridge International or Pearson Edexcel International), alongside standard GCSE and A-Level. Tell us which school and exam board your child is working towards, and we'll match tutoring materials to that exact specification.",
  },
];

export default function UKTestPrepHub() {
  const router = useRouter();
  const { navigateTo } = useAppNavigate();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="bg-background text-on-surface font-body-md overflow-x-hidden">
      {/* Hero */}
      <section className="relative py-20 lg:py-28 bg-white overflow-hidden">
        <div className="absolute top-0 right-0 w-[520px] h-[520px] bg-royal-purple/5 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3"></div>
        <div className="container mx-auto px-margin-mobile md:px-margin-desktop max-w-max-width relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-gutter items-center">
            <div className="space-y-8">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-label-md text-label-md uppercase tracking-wider font-semibold">
                11+ · 13+ · GCSE · iGCSE · A-Levels
              </span>
              <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-charcoal leading-tight font-bold">
                Online Test Preparation for <span className="text-royal-purple">UK Students</span>, From 11+ to A-Levels
              </h1>
              <p className="text-on-surface-variant font-body-lg text-body-lg max-w-xl">
                One-to-one online test preparation for every exam that shapes a UK school career, from grammar
                school entrance at 11 through to A-Levels and university admissions tests. Our online exam
                preparation always starts from a genuine diagnostic, matched to the exact board and format your
                child will actually sit.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => navigateTo('trial')}
                  className="bg-royal-purple text-on-primary px-8 py-4 rounded-xl font-headline-md hover:shadow-xl transition-all cursor-pointer font-medium"
                >
                  Book a Free Trial Lesson
                </button>
                <button
                  onClick={() => {
                    const el = document.getElementById('tests');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="border-2 border-royal-purple text-royal-purple px-8 py-4 rounded-xl font-headline-md hover:bg-royal-purple/5 transition-all cursor-pointer font-medium"
                >
                  Compare UK Exams
                </button>
              </div>
{/* Trustpilot widget */}
          <div>
            <h4 className="justify-center">We are recommended by parents &amp; students</h4>
            <p><TrustpilotWidget /></p>
          </div>


            </div>
            <div className="relative hidden lg:block">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img
                  className="w-full h-[460px] object-cover"
                  alt="A UK secondary school student preparing for exams with an online tutor"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBIC2148RcAcfRXxnZOcCNJC2Yr32DtyHa7d1TOD82ZBuHm5-qZ-Hfyjuic-1MLI6po5tOU8XT7FUpGqvgdHGzRwEInHX72mGWsxX-9nVAlOqT4sbH-gqYAG5YfaLbivq9Je_ZI7ity8vsit3aPnhFxzYCZ7Vd3uaU5jtItj5k130NViqjkJsMWfhwBn54qZk6DOAoC1XqgTsCbUlAYR6O8_Q9eb3Xz1j99Ujc64cOxRy0f-IOnZz3fvw"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl max-w-xs border border-outline-variant/30">
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-10 h-10 rounded-full bg-lime-green flex items-center justify-center">
                    <Compass size={20} className="text-charcoal" />
                  </div>
                  <span className="font-headline-md text-charcoal font-bold">Start With a Diagnostic</span>
                </div>
                <p className="text-on-surface-variant text-label-md">
                  Every effective plan for 11+, GCSE or A-Level starts with one honest assessment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The tests */}
      <section className="py-24 bg-soft-gray" id="tests">
        <div className="container mx-auto px-margin-mobile md:px-margin-desktop max-w-max-width">
          <div className="text-center mb-16">
            <h2 className="font-headline-lg text-headline-lg text-charcoal font-bold mb-4">The UK Exams That Matter Most</h2>
            <p className="text-on-surface-variant font-body-md max-w-2xl mx-auto">
              Each one plays a different role in a UK school career. Knowing which is which saves months of
              preparation aimed at the wrong thing.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TESTS.map((test) => {
              const Icon = test.icon;
              return (
              <div
                key={test.slug}
                onClick={() => router.push(`/test-preparation/${test.slug}`)}
                className="p-8 bg-white rounded-2xl shadow-[0px_4px_20px_rgba(0,0,0,0.05)] border border-transparent hover:border-royal-purple/30 transition-all group cursor-pointer flex flex-col"
              >
                <div className={`w-14 h-14 ${test.accent} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <Icon size={24} className={test.iconColor} aria-hidden="true" />
                </div>
                <h3 className="font-headline-md text-charcoal font-bold mb-1">{test.name}</h3>
                <p className="text-label-sm text-royal-purple font-semibold mb-4">{test.tag}</p>
                <p className="text-on-surface-variant font-body-md mb-6 flex-grow">{test.summary}</p>
                <ul className="space-y-2 mb-6">
                  {test.points.map((point) => (
                    <li key={point} className="flex items-start gap-2 text-label-md text-on-surface-variant">
                      <CheckCircle2 size={15} className="text-lime-green shrink-0 mt-1" />
                      {point}
                    </li>
                  ))}
                </ul>
                <span className="inline-flex items-center gap-1 text-primary font-bold text-sm group-hover:underline mt-auto">
                  {test.name} preparation
                  <ChevronRight size={16} />
                </span>
              </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* GCSE vs iGCSE */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-margin-mobile md:px-margin-desktop max-w-max-width">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-royal-purple/10 text-royal-purple font-label-md text-sm font-semibold mb-6">
                <Target size={16} />
                <span>Choosing Between Them</span>
              </div>
              <h2 className="font-headline-lg text-headline-lg text-charcoal font-bold mb-6">GCSE or iGCSE? Understanding the Choice</h2>
              <p className="text-on-surface-variant font-body-md mb-6">
                Most state school families never face this decision, since their school only offers standard
                GCSE. Independent school families often do, because a growing number of UK independent schools
                teach some or all subjects as the International GCSE instead.
              </p>
              <p className="text-on-surface-variant font-body-md mb-6">
                Both qualifications sit at the same level and both count equally with UK sixth forms, colleges
                and universities. The practical difference is in how each is assessed: GCSE blends final exams
                with a small amount of non-exam assessment in some subjects, while iGCSE is set by Cambridge
                International or Pearson Edexcel International and marked almost entirely on the final written
                papers.
              </p>
              <p className="text-on-surface-variant font-body-md">
                That exam-only structure is one reason independent schools favour iGCSE — it tends to prepare
                students well for the fully exam-based assessment style they'll meet again at A-Level.
              </p>
            </div>
            <div className="bg-soft-gray rounded-2xl p-8 border border-outline-variant/30">
              <h3 className="font-headline-md text-charcoal font-bold mb-6">Side by Side</h3>
              <div className="space-y-5">
                {GCSE_VS_IGCSE.map(([label, value]) => (
                  <div key={label} className="pb-4 border-b border-outline-variant/60 last:border-0 last:pb-0">
                    <p className="font-label-md text-charcoal font-semibold mb-1">{label}</p>
                    <p className="text-on-surface-variant font-body-md">{value}</p>
                  </div>
                ))}
              </div>
              <p className="text-on-surface-variant font-label-md italic mt-6">
                Specific grading and assessment rules are set by Ofqual, Cambridge International and Pearson —
                always confirm the current specification with your child's school.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-soft-gray">
        <div className="container mx-auto px-margin-mobile md:px-margin-desktop max-w-max-width">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-royal-purple/10 text-royal-purple font-label-md text-sm font-semibold mb-4">
              <CalendarClock size={16} />
              <span>Sequencing</span>
            </div>
            <h2 className="font-headline-lg text-headline-lg text-charcoal font-bold mb-4">The UK Exam Timeline, Year by Year</h2>
            <p className="text-on-surface-variant font-body-md max-w-2xl mx-auto">
              UK exams rarely stand alone — the habits and foundations built for one stage carry directly into
              the next.
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            {TIMELINE.map(([label, body], i) => (
              <div key={label} className="relative pl-12 pb-10 border-l-2 border-outline-variant last:border-l-0 last:pb-0">
                <div className="absolute -left-[13px] top-0 w-6 h-6 rounded-full bg-royal-purple flex items-center justify-center">
                  <span className="text-white text-[11px] font-bold">{i + 1}</span>
                </div>
                <h3 className="font-headline-md text-charcoal font-bold mb-2">{label}</h3>
                <p className="text-on-surface-variant font-body-md">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How we prepare */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-margin-mobile md:px-margin-desktop max-w-max-width">
          <div className="text-center mb-16">
            <h2 className="font-headline-lg text-headline-lg text-charcoal font-bold mb-4">How We Deliver Effective Online Exam Preparation</h2>
            <p className="text-on-surface-variant font-body-md max-w-2xl mx-auto">
              Score and grade improvements come from fixing specific gaps, not from working through a generic
              course from the front cover to the back.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-8 bg-soft-gray rounded-2xl border border-outline-variant/30">
              <div className="w-12 h-12 rounded-xl bg-royal-purple/10 flex items-center justify-center mb-6">
                <BarChart3 size={22} className="text-royal-purple" />
              </div>
              <h3 className="font-headline-md text-charcoal font-bold mb-3">Diagnose Before Teaching</h3>
              <p className="text-on-surface-variant font-body-md">
                A proper diagnostic assessment first, marked against the exact board and tier your child sits.
                Two students with the same predicted grade often need completely different plans.
              </p>
            </div>
            <div className="p-8 bg-soft-gray rounded-2xl border border-outline-variant/30">
              <div className="w-12 h-12 rounded-xl bg-royal-purple/10 flex items-center justify-center mb-6">
                <Timer size={22} className="text-royal-purple" />
              </div>
              <h3 className="font-headline-md text-charcoal font-bold mb-3">Board-Specific Past Papers</h3>
              <p className="text-on-surface-variant font-body-md">
                Mark schemes, question wording and formula sheets vary by exam board, so we drill from the
                actual GL Assessment, ISEB, AQA, Edexcel, OCR or Cambridge International papers your child faces.
              </p>
            </div>
            <div className="p-8 bg-soft-gray rounded-2xl border border-outline-variant/30">
              <div className="w-12 h-12 rounded-xl bg-royal-purple/10 flex items-center justify-center mb-6">
                <GraduationCap size={22} className="text-royal-purple" />
              </div>
              <h3 className="font-headline-md text-charcoal font-bold mb-3">Fix the Foundation</h3>
              <p className="text-on-surface-variant font-body-md">
                Where a grade is capped by an earlier gap in maths or comprehension, exam technique alone won't
                move it. We rebuild the underlying skill, which takes longer but lasts through every exam that follows.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-soft-gray">
        <div className="container mx-auto px-margin-mobile md:px-margin-desktop max-w-max-width">
          <div className="text-center mb-16">
            <h2 className="font-headline-lg text-headline-lg text-charcoal font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-on-surface-variant font-body-md max-w-2xl mx-auto">
              What UK families ask us most often about choosing exams, timing preparation and what to expect
              from online tutoring.
            </p>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {FAQS.map((faq, i) => (
              <div key={i} className="border border-surface-container-highest rounded-2xl overflow-hidden bg-white">
                <button
                  className="w-full flex items-center justify-between gap-4 p-6 text-left hover:bg-soft-gray transition-colors font-headline-md text-[18px] font-bold cursor-pointer"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span>{faq.q}</span>
                  <ChevronDown size={22} className={`shrink-0 transition-transform duration-300 ${openFaq === i ? 'rotate-180 text-royal-purple' : ''}`} />
                </button>
                {openFaq === i && (
                  <div className="bg-soft-gray p-6 text-on-surface-variant font-body-md border-t border-surface-container-highest">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Book a Free Trial (lead form) */}
      <section className="py-24 bg-white" id="book-trial">
        <div className="container mx-auto px-margin-mobile md:px-margin-desktop max-w-max-width">
          <div className="bg-soft-gray rounded-[2.5rem] shadow-xl overflow-hidden flex flex-col lg:flex-row border border-outline-variant/30">
            <div className="lg:w-1/2 p-12 lg:p-16 space-y-6">
              <div>
                <h2 className="font-headline-lg text-headline-lg text-charcoal font-bold mb-4">Book Your Free UK Trial Lesson</h2>
                <p className="text-on-surface-variant text-body-lg">
                  Tell us which exam your child is working towards — 11+, 13+, GCSE, iGCSE, A-Levels or a
                  university admissions test — and we'll match you with a UK curriculum specialist for a genuine,
                  no-obligation diagnostic session.
                </p>
              </div>

           <FreeTrialForm />

            </div>
            <div className="hidden lg:block lg:w-1/2 relative">
              <img className="absolute inset-0 w-full h-full object-cover" alt="A UK student in an online tutoring session preparing for exams" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCYCUJcXhUtMGJ8kHDhchbqDVkwOw6byBigwop3E66ulr1f-GizLPnqPgDBUlgq5LtL6FMF8Vu8kqiEy67WDdI-B31rpVERMrPmDwc8BTfVYXie5y7H_HJbPdV6xbwHrSk3Gkr1AefBybqpzAgrjyZnOcn2XtSTLIBizH1If_FNb_vLbusmYDVxTejk_GazgmYPFcMw6507M0U5A-_2dJdRhpGEwxQsxsaTKrCIUQiu9f8XxmPSUuI54g" />
              <div className="absolute inset-0 bg-gradient-to-r from-soft-gray via-transparent to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-margin-mobile md:px-margin-desktop max-w-max-width">
          <div className="bg-royal-purple rounded-[2.5rem] p-12 md:p-20 text-center relative overflow-hidden">
            <div className="absolute -top-16 -left-16 w-64 h-64 bg-lime-green/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            <div className="relative z-10 max-w-2xl mx-auto space-y-8">
              <Award size={44} className="text-lime-green mx-auto" />
              <h2 className="font-display-lg text-display-lg-mobile md:text-display-lg text-white font-bold">
                Find Out Exactly Where Your Child Stands
              </h2>
              <p className="text-white/85 font-body-lg">
                The free session is a genuine diagnostic. We identify what's holding a grade back, confirm which
                exam board and tier applies, and tell you honestly how much work getting there will take.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
                <button
                  onClick={() => navigateTo('trial')}
                  className="bg-lime-green text-charcoal px-10 py-5 rounded-2xl font-headline-md font-bold hover:scale-105 transition-transform cursor-pointer"
                >
                  Book a Free Diagnostic
                </button>
                <button
                  onClick={() => navigateTo('pricing')}
                  className="bg-white/10 backdrop-blur-md border border-white/25 text-white px-10 py-5 rounded-2xl font-headline-md font-bold hover:bg-white/20 transition-all cursor-pointer"
                >
                  View UK Pricing
                </button>
              </div>
              <p className="text-white/60 font-label-md pt-2">No credit card required</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}