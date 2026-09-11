'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  ClipboardCheck,
  MapPinned,
  FileBadge,
  BookMarked,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  CalendarClock,
  AlertCircle,
  Scale,
} from 'lucide-react';
import TrustpilotWidget from '@/components/TrustpilotWidget';

const TEST_TYPES = [
  {
    slug: 'provincial-curricula',
    title: 'Provincial Curricula',
    subtitle: 'Grades K–12, every province',
    icon: MapPinned,
    description:
      'Tutoring matched to your province\u2019s own curriculum, learning outcomes and course codes, whether that is Ontario, British Columbia, Alberta, Quebec or the Atlantic provinces.',
    color: 'bg-primary-fixed',
    iconColor: 'text-royal-purple',
    points: ['Matched by province and grade', 'Course-code specific at senior level', 'Report card language in progress notes'],
  },
  {
    slug: 'eqao',
    title: 'EQAO & OSSLT',
    subtitle: 'Ontario · Grades 3, 6, 9 and 10',
    icon: ClipboardCheck,
    description:
      'Ontario\u2019s province-wide assessments in reading, writing and mathematics, plus the Grade 10 literacy test that carries a graduation requirement behind it.',
    color: 'bg-secondary-container',
    iconColor: 'text-secondary',
    points: ['Open-response question formats', 'Four-level achievement scale', 'OSSLT literacy preparation'],
  },
  {
    slug: 'alberta-diploma-exams',
    title: 'Alberta Diploma Exams',
    subtitle: 'Grade 12 · Highest stakes in Canada',
    icon: FileBadge,
    description:
      'Grade 12 provincial examinations that count directly toward the final course mark, which means a strong classroom performance can still be pulled down on results day.',
    color: 'bg-lime-green/20',
    iconColor: 'text-secondary',
    points: ['Math 30-1 and 30-2', 'Biology, Chemistry and Physics 30', 'English Language Arts 30-1'],
  },
  {
    slug: 'bc-graduation-assessments',
    title: 'BC Graduation Assessments',
    subtitle: 'British Columbia · Numeracy & Literacy',
    icon: BookMarked,
    description:
      'Provincial assessments sat separately from any single course, and required for graduation in British Columbia. Students may attempt them more than once.',
    color: 'bg-royal-purple/10',
    iconColor: 'text-royal-purple',
    points: ['Numeracy assessment', 'Literacy assessments', 'Retake opportunities available'],
  },
];

const REASONS = [
  {
    icon: 'map',
    color: 'bg-primary-fixed text-royal-purple',
    title: 'Matched by Province, Not by Country',
    desc: 'Canada has thirteen curricula and no national one. Tutors are assigned on the province your child attends school in, because "Canadian curriculum" on its own describes nothing specific.',
  },
  {
    icon: 'fact_check',
    color: 'bg-lime-green/20 text-secondary',
    title: 'Written to the Ministry Outcomes',
    desc: 'Sessions follow the learning outcomes published by your provincial ministry, and at senior level the specific course code, so the sequencing matches what is happening in class.',
  },
  {
    icon: 'quiz',
    color: 'bg-primary-fixed text-royal-purple',
    title: 'The Right Assessment, Not a Generic One',
    desc: 'An EQAO open-response question, an Alberta Diploma written section and a BC numeracy task reward different things. We prepare for the one your child will actually sit.',
  },
];

const TIMELINE = [
  ['Grades 3 and 6', 'First province-wide assessments in Ontario. These are diagnostic rather than pass-or-fail, and the sensible response to a weak result is a plan, not alarm.'],
  ['Grades 6 and 9', 'Alberta Provincial Achievement Tests, alongside Ontario\u2019s Grade 9 mathematics assessment. Also the window where readiness for senior maths is genuinely decided.'],
  ['Grade 10', 'The OSSLT in Ontario, which sits behind a graduation requirement rather than simply reporting a score. In BC, the numeracy assessment is typically first attempted around this stage.'],
  ['Grades 11 and 12', 'Course selection narrows post-secondary options, then Grade 12 provincial examinations arrive in Alberta and elsewhere. Marks here become the admission average.'],
];

const FAQS = [
  {
    q: 'Is EQAO something my child can fail?',
    a: 'The Grade 3, 6 and 9 assessments are diagnostic. They report against a four-level achievement scale and inform school and board planning, but a student does not pass or fail them and a weak result carries no consequence for progressing to the next grade. The Grade 10 literacy test is the exception and sits in a different category entirely, because meeting the literacy requirement is a condition of graduating in Ontario.',
  },
  {
    q: 'How much do Alberta Diploma Exams count toward the final mark?',
    a: 'A defined share of the final course grade, blended with the school-awarded mark rather than replacing it. That blend is why Alberta students can be performing solidly in class and still see their grade move on results day, and it is the single strongest argument for timed practice under exam conditions in that province. Confirm the current weighting with your school, since the proportion has been revised before.',
  },
  {
    q: 'What happens if a BC student does not meet a graduation assessment?',
    a: 'They can attempt it again. The BC numeracy and literacy assessments sit outside any individual course, so a student is not repeating a class in order to retry, and multiple attempts are permitted. That said, the assessments test applied reasoning rather than recalled course content, so simply sitting them again without changing the preparation rarely changes the outcome.',
  },
  {
    q: 'We are moving province mid-schooling. What should we expect?',
    a: 'More disruption than most families anticipate, and rarely where they expect it. The content overlaps heavily between provinces, but the sequencing does not, so a student can arrive having covered a topic their new class finished last term while missing something it covered two years ago. Senior course names diverge as well: Ontario runs codes such as MHF4U and MCV4U with no identically named counterpart elsewhere. The first thing we do is map the gap rather than assume it.',
  },
  {
    q: 'Which marks actually matter for Canadian university admission?',
    a: 'For most programs, the average of a small number of Grade 12 courses, with specific prerequisites depending on the degree. That concentration is worth understanding early, because it means a handful of senior courses carry disproportionate weight while earlier grades largely do not appear. It also means a few percentage points in one subject can change which offers arrive, which is why Grade 11 is a better time to intervene than Grade 12.',
  },
  {
    q: 'Should we prepare for provincial assessments at all, or just focus on class?',
    a: 'For the diagnostic ones, class work is broadly the right focus, with some familiarity work on the question format so the paper itself is not the obstacle. For the assessments carrying graduation or grade consequences, deliberate preparation earns its keep. The distinction is worth drawing clearly, because families frequently over-prepare for Grade 3 EQAO and under-prepare for a Grade 12 diploma examination.',
  },
  {
    q: 'When is the right time to start preparing?',
    a: 'That depends on what is being prepared for. Format familiarity and exam technique respond quickly, often inside a few weeks. Rebuilding an underlying gap in fractions, algebra or reading comprehension takes considerably longer, and it is usually the real reason a result disappoints. Where a specific weakness is already visible in report cards, starting a full year ahead of the assessment is neither excessive nor unusual.',
  },
];

export default function CATestPreparationPage() {
  const router = useRouter();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="bg-background text-on-surface font-body-md overflow-x-hidden">
      {/* Hero */}
      <section className="relative py-24 bg-white overflow-hidden">
        <div className="absolute top-0 right-0 w-[520px] h-[520px] bg-royal-purple/5 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3"></div>
        <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-royal-purple/10 text-royal-purple rounded-full font-label-sm mb-6">
            <MapPinned size={16} strokeWidth={2.25} aria-hidden="true" />
            Thirteen Curricula, One Standard of Teaching
          </div>
          <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-charcoal leading-tight font-bold mb-6">
            Online Test Preparation <span className="text-royal-purple">for Canadian Students</span>
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
            One-on-one online exam preparation built around Canada&apos;s provincial assessments, from EQAO in
            Ontario to Alberta Diploma Exams and the BC graduation assessments. Every plan starts by identifying
            which test your child will actually sit.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <button
              onClick={() => router.push('/free-trial')}
              className="bg-royal-purple text-white px-8 py-4 rounded-xl font-headline-md font-bold hover:shadow-xl transition-all cursor-pointer"
            >
              Book a Free Assessment
            </button>
            <button
              onClick={() => {
                const el = document.getElementById('preparation-types');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="border-2 border-royal-purple text-royal-purple px-8 py-4 rounded-xl font-headline-md font-bold hover:bg-royal-purple/5 transition-all cursor-pointer"
            >
              Find Your Assessment
            </button>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
            <h4 className="font-body-md text-on-surface-variant">We are recommended by parents &amp; students</h4>
            <TrustpilotWidget />
          </div>

        </div>
      </section>

      {/* Cards */}
      <section className="py-24 bg-soft-gray" id="preparation-types">
        <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="text-center mb-16">
            <h2 className="font-headline-lg text-headline-lg text-charcoal font-bold mb-4">Test Preparation by Province and Assessment</h2>
            <p className="text-on-surface-variant font-body-md max-w-2xl mx-auto">
              Which assessments your child sits depends entirely on where they go to school. These are the four
              routes families ask about most.
            </p>


          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {TEST_TYPES.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.slug}
                  onClick={() => router.push(`/ca/test-preparation/${item.slug}`)}
                  className="group bg-white p-8 rounded-[2rem] shadow-[0px_4px_20px_rgba(0,0,0,0.05)] border border-transparent hover:border-royal-purple/30 hover:shadow-xl transition-all text-left flex flex-col"
                >
                  <div className={`w-16 h-16 ${item.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <Icon size={30} strokeWidth={2} className={item.iconColor} aria-hidden="true" />
                  </div>
                  <div className="mb-4">
                    <h3 className="font-headline-md text-headline-md text-charcoal font-bold">{item.title}</h3>
                    <p className="font-label-md text-label-md text-royal-purple font-semibold mt-1">{item.subtitle}</p>
                  </div>
                  <p className="font-body-md text-body-md text-on-surface-variant mb-6">{item.description}</p>
                  <ul className="space-y-2 mb-6">
                    {item.points.map((point) => (
                      <li key={point} className="flex items-start gap-2 text-label-md text-on-surface-variant">
                        <CheckCircle2 size={15} className="text-lime-green shrink-0 mt-1" aria-hidden="true" />
                        {point}
                      </li>
                    ))}
                  </ul>
                  <span className="inline-flex items-center gap-1 text-royal-purple font-bold font-label-md group-hover:underline mt-auto">
                    View preparation
                    <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                  </span>
                </button>
              );
            })}
          </div>
          <p className="text-center text-on-surface-variant font-body-md max-w-2xl mx-auto mt-12">
            Quebec, Manitoba, Saskatchewan and the Atlantic provinces run their own ministry examinations and
            departmental tests. We cover those too, and CEGEP preparation for Quebec students.
          </p>
        </div>
      </section>

      {/* Why province-specific */}
      <section className="py-24 bg-white">
        <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="text-center mb-16">
            <h2 className="font-headline-lg text-headline-lg text-charcoal font-bold mb-4">Why Province-Specific Preparation Matters</h2>
            <p className="text-on-surface-variant font-body-md max-w-2xl mx-auto">
              Education in Canada sits with the provinces and territories. A Grade 9 mathematics course in
              Toronto and one in Vancouver differ in outcomes, sequencing and how they are assessed, so generic
              preparation misses in ways that only surface on results day.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {REASONS.map((item) => (
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

      {/* Stakes explainer */}
      <section className="py-24 bg-soft-gray">
        <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-royal-purple/10 text-royal-purple font-label-md text-sm font-semibold mb-6">
                <Scale size={16} aria-hidden="true" />
                <span>Knowing the Stakes</span>
              </div>
              <h2 className="font-headline-lg text-headline-lg text-charcoal font-bold mb-6">Not Every Assessment Carries the Same Weight</h2>
              <p className="text-on-surface-variant font-body-md mb-6">
                This is the most useful thing a Canadian parent can understand about provincial testing, and it
                is rarely explained clearly. Some assessments report information. Others decide whether a student
                graduates, or feed directly into the grade a university will see.
              </p>
              <p className="text-on-surface-variant font-body-md mb-6">
                Treating all of them identically wastes effort in both directions. Families regularly lose sleep
                over a Grade 3 assessment that carries no consequence, then approach a Grade 12 provincial
                examination that blends into the final mark with the same energy they gave a class quiz.
              </p>
              <p className="text-on-surface-variant font-body-md">
                Knowing which category an assessment falls into tells you how much preparation it deserves. That
                is the first thing we establish, before any teaching begins.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-outline-variant/30">
              <h3 className="font-headline-md text-charcoal font-bold mb-6">What Each Assessment Actually Does</h3>
              <div className="space-y-5">
                {[
                  ['Diagnostic', 'EQAO Grades 3, 6 and 9, and Alberta PATs. Report achievement, inform planning, no consequence for the individual student.'],
                  ['Graduation requirement', 'The Ontario literacy requirement and the BC graduation assessments. Must be met to receive the diploma.'],
                  ['Counts toward the grade', 'Alberta Diploma Exams blend with the school-awarded mark to produce the final course grade.'],
                  ['Admission-facing', 'Grade 12 course marks form the average universities assess. Often the highest-stakes numbers of all.'],
                ].map(([label, value]) => (
                  <div key={label} className="pb-4 border-b border-outline-variant/60 last:border-0 last:pb-0">
                    <p className="font-label-md text-charcoal font-semibold mb-1">{label}</p>
                    <p className="text-on-surface-variant font-body-md">{value}</p>
                  </div>
                ))}
              </div>
              <p className="text-on-surface-variant font-label-md italic mt-6">
                Assessment structures and graduation requirements are set by provincial ministries and are
                revised periodically. Confirm current details with your school or board.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-white">
        <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-royal-purple/10 text-royal-purple font-label-md text-sm font-semibold mb-4">
              <CalendarClock size={16} aria-hidden="true" />
              <span>When Assessments Fall</span>
            </div>
            <h2 className="font-headline-lg text-headline-lg text-charcoal font-bold mb-4">The Canadian Assessment Timeline</h2>
            <p className="text-on-surface-variant font-body-md max-w-2xl mx-auto">
              Exact grades and dates vary by province, but the shape is consistent: diagnostic early, consequential later.
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
          <div className="max-w-3xl mx-auto mt-12 bg-soft-gray rounded-2xl p-8 flex gap-5 items-start">
            <AlertCircle size={26} className="text-royal-purple shrink-0 mt-1" aria-hidden="true" />
            <p className="text-on-surface-variant font-body-md">
              The stage families most often miss is Grade 11. By Grade 12 the courses that form the admission
              average are already underway, and there is limited room to repair a weak foundation while covering
              new material. Grade 11 is where that work still fits comfortably.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-soft-gray">
        <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="text-center mb-16">
            <h2 className="font-headline-lg text-headline-lg text-charcoal font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-on-surface-variant font-body-md max-w-2xl mx-auto">
              What Canadian parents ask us most often about provincial assessments, diploma exams and university admission.
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
                  <ChevronDown
                    size={22}
                    className={`shrink-0 transition-transform duration-300 ${openFaq === i ? 'rotate-180 text-royal-purple' : ''}`}
                    aria-hidden="true"
                  />
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
      <section className="py-24 bg-royal-purple text-white">
        <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop text-center space-y-6">
          <h2 className="font-headline-lg text-headline-lg font-bold">Not sure which preparation to choose?</h2>
          <p className="font-body-lg text-body-lg opacity-90 max-w-xl mx-auto">
            Book a free assessment lesson. We will confirm which provincial tests apply to your child&apos;s grade
            and province, establish where they currently stand, and recommend where the effort is best spent.
          </p>
          <button
            onClick={() => router.push('/free-trial')}
            className="inline-flex items-center gap-2 bg-white text-royal-purple px-8 py-4 rounded-xl font-headline-md font-bold hover:bg-soft-gray transition-all shadow-lg active:scale-95 cursor-pointer"
          >
            Book a Free Assessment
            <ChevronRight size={20} strokeWidth={2.25} aria-hidden="true" />
          </button>
          <p className="text-white/60 font-label-md">No credit card required</p>
        </div>
      </section>
    </div>
  );
}