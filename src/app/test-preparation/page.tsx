'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAppNavigate } from '@/lib/useAppNavigate';
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
  type LucideIcon,
} from 'lucide-react';
import TrustpilotWidget from '@/components/TrustpilotWidget';

const TESTS: { slug: string; name: string; tag: string; icon: LucideIcon; accent: string; iconColor: string; summary: string; points: string[] }[] = [
  {
    slug: 'psat',
    name: 'PSAT/NMSQT',
    tag: 'Grade 11 · October',
    icon: Award,
    accent: 'bg-lime-green/20',
    iconColor: 'text-secondary',
    summary:
      'The only sitting that qualifies a junior for National Merit. Same adaptive format as the SAT, scored 320 to 1520, so preparing for it prepares for both.',
    points: ['One shot, junior year only', 'Selection Index decides National Merit', 'Doubles as SAT practice'],
  },
  {
    slug: 'sat',
    name: 'SAT',
    tag: 'Grades 11–12',
    icon: FilePenLine,
    accent: 'bg-royal-purple/10',
    iconColor: 'text-royal-purple',
    summary:
      'Fully digital and adaptive, delivered through Bluebook in 2 hours 14 minutes. Two sections, four modules, scored 400 to 1600, with a built-in Desmos calculator throughout Math.',
    points: ['Adaptive: Module 1 sets Module 2', 'Shorter passages, tighter pacing', 'Retake runway in senior fall'],
  },
  {
    slug: 'act',
    name: 'ACT',
    tag: 'Grades 11–12',
    icon: Timer,
    accent: 'bg-primary/10',
    iconColor: 'text-primary',
    summary:
      'Now the Enhanced ACT: three core sections in roughly two hours, with Science optional and excluded from the 1 to 36 composite. Linear rather than adaptive.',
    points: ['131 core questions, down from 215', 'Science reported separately', 'Composite from English, Math, Reading'],
  },
  {
    slug: 'ap',
    name: 'AP Exams',
    tag: 'Grades 10–12 · May',
    icon: School,
    accent: 'bg-secondary-container/20',
    iconColor: 'text-secondary',
    summary:
      'Course-specific exams scored 1 to 5, sat each May. Strong scores can earn college credit or advanced placement, and the coursework itself signals rigour on an application.',
    points: ['Scored 1 to 5 per subject', 'Credit policies vary by college', 'Coursework grade matters too'],
  },
];

const FAQS = [
  {
    q: 'Should my child take the SAT or the ACT?',
    a: 'Colleges treat them equally, so the honest answer is whichever one your child scores better on, and the only reliable way to find that out is a timed practice test of each. Two structural differences usually decide it. The digital SAT is adaptive, meaning performance in the first module determines the difficulty of the second, which rewards careful, accurate work early. The Enhanced ACT is linear and faster paced, and since Science left the composite, English and Reading now carry two-thirds of the score. Students who read quickly and confidently often favour the ACT; students who prefer time to think per question often favour the SAT.',
  },
  {
    q: 'When should we start preparing?',
    a: 'Earlier than most families do, though not for the reason they expect. Exam technique, pacing and question familiarity improve quickly, often within weeks. What takes longer is repairing gaps in the underlying maths or reading comprehension, and that is what usually caps a score. Starting in sophomore year or early junior year leaves room to do both. Starting six weeks out means you can only work on technique, which still helps but has a ceiling.',
  },
  {
    q: 'Does the PSAT actually matter, or is it just practice?',
    a: 'Both, and the second part is worth real money. The PSAT/NMSQT taken in eleventh grade is the only sitting that qualifies a student for the National Merit Scholarship Program, and eligibility runs off a Selection Index with cutoffs that vary by state and year. Miss that October date in junior year and the opportunity is gone for good. It also uses the same adaptive digital format as the SAT, so preparation is never wasted.',
  },
  {
    q: 'Are AP exams worth taking if colleges are test-optional?',
    a: 'Test-optional policies apply to admissions tests such as the SAT and ACT, not to AP. AP exams do something different: they can convert into college credit or advanced standing, which shortens time to a degree and reduces tuition cost. Credit policies differ by institution and by score, so check your target colleges rather than assuming a 4 is universally accepted. Separately, taking AP courses at all signals academic rigour on a transcript, independent of the exam score.',
  },
  {
    q: 'How many times should a student sit the SAT or ACT?',
    a: 'Two or three sittings is the usual sweet spot. The first establishes a real baseline under genuine conditions, which practice tests only approximate. The second, after focused work on identified weaknesses, is where most of the improvement shows. A third can help if something specific went wrong. Beyond that, returns flatten quickly and the time is better spent on grades and applications. Many colleges superscore, combining the best section results across sittings, which makes a second attempt more valuable than it first appears.',
  },
  {
    q: 'What is a good score to aim for?',
    a: 'A good score is one that clears the range published by the colleges your child is actually applying to, not a national average. Look up the middle 50 per cent range for admitted students at each target school and aim for the upper half of it. This matters because "good" varies enormously: a score that is competitive for a large state university may sit below the range at a highly selective one, and chasing an arbitrary number wastes months that could have gone into essays or grades.',
  },
  {
    q: 'Do you prepare students for state assessments as well?',
    a: 'Yes. Alongside the national admissions tests, we support state end-of-course exams and graduation assessments, which differ substantially by state. Texas students sit STAAR end-of-course exams, Florida students take the B.E.S.T. EOCs, New York students sit Regents examinations, and Virginia uses SOL tests. These carry graduation consequences that admissions tests do not, and they are worth taking as seriously.',
  },
  {
    q: 'How are the tutoring sessions structured?',
    a: 'Live and one-to-one by video call, beginning with a diagnostic so the plan targets actual weaknesses rather than a generic syllabus. Sessions mix content review with timed practice under real conditions, because pacing is a separate skill from knowledge and has to be trained deliberately. Every lesson is recorded to your account, which is particularly useful when reviewing why a method works the night before a test.',
  },
];

const TIMELINE = [
  ['Grades 9–10', 'Build the foundations that scores rest on. Algebra, grammar and reading stamina are what set a score ceiling later. Sophomores can sit the PSAT 10 for a low-stakes baseline.'],
  ['Grade 11, Autumn', 'Sit the PSAT/NMSQT in October. This is the National Merit qualifying sitting and it does not come round again. Start structured SAT or ACT prep off a diagnostic.'],
  ['Grade 11, Spring', 'First real SAT or ACT sitting, typically March through June. Grades are settled, AP exams are close but not yet on top, and there is still a retake runway ahead.'],
  ['Grade 11–12, May', 'AP exams. Scores can convert to college credit, and the courses themselves strengthen a transcript regardless of the outcome.'],
  ['Grade 12, Autumn', 'Retake window. August and October dates align cleanly with Early Decision and Early Action deadlines in early November, with December as a last option for Regular Decision.'],
];

export default function USTestPrepHub() {
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
                PSAT · SAT · ACT · AP
              </span>
              <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-charcoal leading-tight font-bold">
                Online Test Preparation for <span className="text-royal-purple">US Students</span>
              </h1>
              <p className="text-on-surface-variant font-body-lg text-body-lg max-w-xl">
                One-to-one online exam preparation for every test that shapes a US college application, from the
                PSAT in junior autumn through to AP exams in May. Every plan starts from a diagnostic, not a
                generic syllabus.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => navigateTo('trial')}
                  className="bg-royal-purple text-on-primary px-8 py-4 rounded-xl font-headline-md hover:shadow-xl transition-all cursor-pointer font-medium"
                >
                  Book a Free Diagnostic
                </button>
                <button
                  onClick={() => {
                    const el = document.getElementById('tests');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="border-2 border-royal-purple text-royal-purple px-8 py-4 rounded-xl font-headline-md hover:bg-royal-purple/5 transition-all cursor-pointer font-medium"
                >
                  Compare the Tests
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
                  alt="A high school student preparing for college admissions tests online"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBIC2148RcAcfRXxnZOcCNJC2Yr32DtyHa7d1TOD82ZBuHm5-qZ-Hfyjuic-1MLI6po5tOU8XT7FUpGqvgdHGzRwEInHX72mGWsxX-9nVAlOqT4sbH-gqYAG5YfaLbivq9Je_ZI7ity8vsit3aPnhFxzYCZ7Vd3uaU5jtItj5k130NViqjkJsMWfhwBn54qZk6DOAoC1XqgTsCbUlAYR6O8_Q9eb3Xz1j99Ujc64cOxRy0f-IOnZz3fvw"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl max-w-xs border border-outline-variant/30">
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-10 h-10 rounded-full bg-lime-green flex items-center justify-center">
                    <Compass size={20} className="text-charcoal" />
                  </div>
                  <span className="font-headline-md text-charcoal font-bold">Start With a Baseline</span>
                </div>
                <p className="text-on-surface-variant text-label-md">
                  Every useful prep plan begins with one honest timed test.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The four tests */}
      <section className="py-24 bg-soft-gray" id="tests">
        <div className="container mx-auto px-margin-mobile md:px-margin-desktop max-w-max-width">
          <div className="text-center mb-16">
            <h2 className="font-headline-lg text-headline-lg text-charcoal font-bold mb-4">The Four Tests That Matter Most</h2>
            <p className="text-on-surface-variant font-body-md max-w-2xl mx-auto">
              Each does a different job in a college application. Knowing which one is doing what saves months of
              misdirected effort.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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

      {/* SAT vs ACT */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-margin-mobile md:px-margin-desktop max-w-max-width">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-royal-purple/10 text-royal-purple font-label-md text-sm font-semibold mb-6">
                <Target size={16} />
                <span>Choosing Between Them</span>
              </div>
              <h2 className="font-headline-lg text-headline-lg text-charcoal font-bold mb-6">SAT or ACT? Let the Diagnostic Decide</h2>
              <p className="text-on-surface-variant font-body-md mb-6">
                Colleges accept both without preference, so the useful question is not which test is better but
                which one suits how your child thinks under time pressure. Guessing at that wastes a semester.
                Sitting one timed practice test of each answers it in a weekend.
              </p>
              <p className="text-on-surface-variant font-body-md mb-6">
                The two tests now differ more than they used to. The digital SAT adapts between modules, so
                careful accuracy early opens access to harder questions and a higher ceiling. The Enhanced ACT
                stays linear but moves faster, and with Science removed from the composite, reading-heavy
                sections carry two-thirds of the score.
              </p>
              <p className="text-on-surface-variant font-body-md">
                In practice, students who read quickly and trust their first instinct tend to prefer the ACT.
                Students who work more deliberately and dislike time pressure tend to score better on the SAT.
                Neither preference says anything about ability.
              </p>
            </div>
            <div className="bg-soft-gray rounded-2xl p-8 border border-outline-variant/30">
              <h3 className="font-headline-md text-charcoal font-bold mb-6">Side by Side</h3>
              <div className="space-y-5">
                {[
                  ['Format', 'SAT adapts between modules · ACT is linear'],
                  ['Length', 'SAT 2 hrs 14 min · ACT core about 2 hrs'],
                  ['Scoring', 'SAT 400–1600 · ACT 1–36 composite'],
                  ['Science', 'No SAT science · ACT science optional, scored separately'],
                  ['Calculator', 'Desmos built in for all SAT maths · permitted on ACT maths'],
                  ['Pacing', 'ACT allows less time per question overall'],
                ].map(([label, value]) => (
                  <div key={label} className="pb-4 border-b border-outline-variant/60 last:border-0 last:pb-0">
                    <p className="font-label-md text-charcoal font-semibold mb-1">{label}</p>
                    <p className="text-on-surface-variant font-body-md">{value}</p>
                  </div>
                ))}
              </div>
              <p className="text-on-surface-variant font-label-md italic mt-6">
                Formats and policies are set by ACT and the College Board and change periodically. Confirm current
                details before registering.
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
            <h2 className="font-headline-lg text-headline-lg text-charcoal font-bold mb-4">When Each Test Falls</h2>
            <p className="text-on-surface-variant font-body-md max-w-2xl mx-auto">
              These tests are not independent of each other. Sequenced properly, preparation for one feeds
              directly into the next.
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
            <h2 className="font-headline-lg text-headline-lg text-charcoal font-bold mb-4">How We Prepare Students</h2>
            <p className="text-on-surface-variant font-body-md max-w-2xl mx-auto">
              Score gains come from fixing specific weaknesses, not from working through a course front to back.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-8 bg-soft-gray rounded-2xl border border-outline-variant/30">
              <div className="w-12 h-12 rounded-xl bg-royal-purple/10 flex items-center justify-center mb-6">
                <BarChart3 size={22} className="text-royal-purple" />
              </div>
              <h3 className="font-headline-md text-charcoal font-bold mb-3">Diagnose Before Teaching</h3>
              <p className="text-on-surface-variant font-body-md">
                A full timed test first, marked question by question. Two students with identical scores usually
                need completely different plans, and a course built before that is a guess.
              </p>
            </div>
            <div className="p-8 bg-soft-gray rounded-2xl border border-outline-variant/30">
              <div className="w-12 h-12 rounded-xl bg-royal-purple/10 flex items-center justify-center mb-6">
                <Timer size={22} className="text-royal-purple" />
              </div>
              <h3 className="font-headline-md text-charcoal font-bold mb-3">Train Pacing Separately</h3>
              <p className="text-on-surface-variant font-body-md">
                Most lost marks are on questions the student could answer, given time. Pacing is a trainable
                skill in its own right, and it is usually the fastest available gain.
              </p>
            </div>
            <div className="p-8 bg-soft-gray rounded-2xl border border-outline-variant/30">
              <div className="w-12 h-12 rounded-xl bg-royal-purple/10 flex items-center justify-center mb-6">
                <GraduationCap size={22} className="text-royal-purple" />
              </div>
              <h3 className="font-headline-md text-charcoal font-bold mb-3">Fix the Foundation</h3>
              <p className="text-on-surface-variant font-body-md">
                Where a score is capped by missing algebra or weak reading comprehension, technique alone will
                not move it. We rebuild the underlying skill, which is slower and considerably more durable.
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
              What American families ask us most often about choosing tests, timing them and preparing well.
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

      {/* CTA */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-margin-mobile md:px-margin-desktop max-w-max-width">
          <div className="bg-royal-purple rounded-[2.5rem] p-12 md:p-20 text-center relative overflow-hidden">
            <div className="absolute -top-16 -left-16 w-64 h-64 bg-lime-green/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            <div className="relative z-10 max-w-2xl mx-auto space-y-8">
              <Award size={44} className="text-lime-green mx-auto" />
              <h2 className="font-display-lg text-display-lg-mobile md:text-display-lg text-white font-bold">
                Find Out Where Your Child Actually Stands
              </h2>
              <p className="text-white/85 font-body-lg">
                The free session is a genuine diagnostic. We identify what is capping the score, recommend which
                test suits your child, and tell you honestly how much work it will take.
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
                  View Pricing
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