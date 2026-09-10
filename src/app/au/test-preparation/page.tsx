'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation'; 
import {
  ClipboardCheck,
  Trophy,
  ScrollText,
  BookMarked,
  Landmark,
  Compass,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  CalendarClock,
  Scale,
  TrendingUp,
} from 'lucide-react';

import TrustpilotWidget from '@/components/TrustpilotWidget';

const TEST_TYPES = [
  {
    slug: 'naplan',
    title: 'NAPLAN',
    subtitle: 'Years 3, 5, 7 and 9 · March',
    icon: ClipboardCheck,
    description:
      'National assessments in reading, writing, language conventions and numeracy, delivered online in an adaptive format and reported against four proficiency levels.',
    color: 'bg-primary-fixed',
    iconColor: 'text-royal-purple',
    points: ['Adaptive online delivery', 'Four proficiency levels', 'Diagnostic, not pass or fail'],
  },
  {
    slug: 'selective-school-tests',
    title: 'Selective & OC Tests',
    subtitle: 'Years 4 to 6 · Entry testing',
    icon: Trophy,
    description:
      'Preparation for selective high school placement, opportunity class entry in New South Wales, and academic scholarship examinations at independent schools.',
    color: 'bg-secondary-container',
    iconColor: 'text-secondary',
    points: ['Reading and thinking skills', 'Mathematical reasoning', 'Speed under time pressure'],
  },
  {
    slug: 'hsc',
    title: 'HSC',
    subtitle: 'New South Wales · Years 11–12',
    icon: ScrollText,
    description:
      'Higher School Certificate preparation across NESA syllabuses, covering internal assessment tasks, trial examinations and the external HSC papers themselves.',
    color: 'bg-lime-green/20',
    iconColor: 'text-secondary',
    points: ['Bands 1 to 6 explained', 'Trials and internal ranking', 'NESA syllabus outcomes'],
  },
  {
    slug: 'vce',
    title: 'VCE',
    subtitle: 'Victoria · Units 1–4',
    icon: BookMarked,
    description:
      'Victorian Certificate of Education preparation built around VCAA study designs, School-Assessed Coursework and the end-of-year examinations that follow.',
    color: 'bg-royal-purple/10',
    iconColor: 'text-royal-purple',
    points: ['SACs and study scores', 'Units 3 and 4 sequences', 'Study design outcomes'],
  },
  {
    slug: 'qce',
    title: 'QCE',
    subtitle: 'Queensland · Years 11–12',
    icon: Landmark,
    description:
      'Queensland Certificate of Education preparation across QCAA General subjects, including internal assessment instruments and the external assessment component.',
    color: 'bg-primary-fixed',
    iconColor: 'text-royal-purple',
    points: ['Internal assessment instruments', 'External assessment weighting', 'ACiQ alignment'],
  },
  {
    slug: 'wace-sace-tce',
    title: 'WACE, SACE & More',
    subtitle: 'WA, SA, Tasmania, ACT & NT',
    icon: Compass,
    description:
      'Preparation for the remaining senior certificates, including WACE ATAR courses in Western Australia and the SACE Research Project in South Australia.',
    color: 'bg-secondary-container',
    iconColor: 'text-secondary',
    points: ['WACE ATAR course examinations', 'SACE and the Research Project', 'TCE and NTCET pathways'],
  },
];

const REASONS = [
  {
    icon: 'school',
    color: 'bg-primary-fixed text-royal-purple',
    title: 'Matched to Your State Authority',
    desc: 'NESA, the VCAA, the QCAA and SCSA each assess differently. A tutor who knows SACs is not automatically the right fit for a student sitting HSC trials, and we match accordingly.',
  },
  {
    icon: 'balance',
    color: 'bg-lime-green/20 text-secondary',
    title: 'Internal Marks Count Too',
    desc: 'In most states a substantial share of the senior result is decided before the final examinations. Assessment tasks through the year deserve the same attention as the exam period.',
  },
  {
    icon: 'trending_up',
    color: 'bg-primary-fixed text-royal-purple',
    title: 'Subject Choice Shapes the ATAR',
    desc: 'Because subject results are scaled before they become an ATAR, the courses chosen in Year 10 affect the final rank as much as the marks earned in them.',
  },
];

const TIMELINE = [
  ['Years 3 and 5', 'First NAPLAN sittings, held in March. Useful as an early signal on numeracy and literacy, and worth acting on rather than filing away.'],
  ['Years 4 to 6', 'Opportunity class and selective school testing windows in New South Wales, alongside independent school scholarship examinations elsewhere.'],
  ['Years 7 and 9', 'The final NAPLAN sittings. Year 9 results also give a reasonably honest read on whether senior mathematics is realistic.'],
  ['Year 10', 'Subject selection for Years 11 and 12. Because of scaling and prerequisites, this is the most consequential academic decision of the whole schooling.'],
  ['Years 11 and 12', 'Internal assessment through the year, then trials or externals depending on the state, and finally the ATAR that follows from all of it.'],
];

const FAQS = [
  {
    q: 'How is the ATAR actually calculated?',
    a: 'The ATAR is a rank rather than a mark. It places a student relative to their age cohort, which is why a percentage in a subject and an ATAR are not comparable numbers. Subject results are also scaled before they contribute, to account for the fact that some courses attract stronger cohorts than others. The practical consequence is that identical raw marks in two different subjects can contribute differently, and this is decided by the state tertiary admissions body rather than by the school.',
  },
  {
    q: 'Should my child pick easier subjects to protect their ATAR?',
    a: 'It is a popular theory and it usually backfires. Scaling exists precisely to prevent an easy subject from producing an inflated contribution, so the strategy tends to cost more than it gains. The stronger approach is to choose subjects your child will engage with and perform well in, while keeping any prerequisites their intended degree requires. A poor mark in a favourably scaled subject beats nothing, but a good mark in a subject they actually enjoy beats both.',
  },
  {
    q: 'What is a VCE study score and how does it relate to the ATAR?',
    a: 'A study score reports how a student performed in a single VCE subject relative to everyone else who studied it, on a scale where the middle of the cohort sits around the average. It is a subject-level result, not an overall one. The ATAR is then calculated from a combination of scaled study scores across several subjects, which is why a strong score in one subject does not by itself produce a strong ATAR, and why the balance across four or five subjects matters more than any single result.',
  },
  {
    q: 'What do HSC bands mean?',
    a: 'HSC results are reported in performance bands, with the top band representing the highest level of achievement against the syllabus outcomes for that course. Bands describe performance against a standard rather than a rank, which makes them different in kind from the ATAR that follows. Something families often miss is that internal school assessment contributes alongside the external examination, and internal ranking within the school affects how those marks are moderated.',
  },
  {
    q: 'How much does external assessment count in Queensland?',
    a: 'In QCAA General subjects, the final result combines internal assessment completed through Units 3 and 4 with an external assessment at the end. The external component carries a defined weighting that is higher in mathematics and science subjects than in most others. Because internal assessment makes up the larger share in most courses, students who treat Year 12 as a single examination period rather than a year of assessment tend to leave marks behind before the external paper arrives.',
  },
  {
    q: 'Does NAPLAN affect selective school entry?',
    a: 'Not directly. Selective and opportunity class placement is decided through separate entry testing, and NAPLAN results are not the mechanism. Where NAPLAN is genuinely useful is as an honest early read on whether a child is likely to be competitive in that kind of testing, since both reward reading comprehension and mathematical reasoning under time pressure. Treat a strong NAPLAN result as encouragement to sit the placement test, not as a substitute for preparing for it.',
  },
  {
    q: 'We are moving interstate during senior school. What happens?',
    a: 'It is more disruptive in Years 11 and 12 than at any other stage, because the certificates are not interchangeable and the assessment models differ substantially. A student partway through VCE Units 3 and 4 cannot simply continue into the HSC. Transfers are handled through the receiving state authority and often involve recognition of completed units rather than direct substitution. Speak to both schools early, because the timing of the move can matter as much as the move itself.',
  },
  {
    q: 'When should senior preparation realistically begin?',
    a: 'Year 10 is the honest answer, for two reasons. Subject selection happens then, and it is the least reversible academic decision a student makes. Second, senior courses assume fluency in material covered in Years 9 and 10, and repairing that assumed knowledge is far easier before Units 1 and 2 begin than during them. Starting in Year 12 restricts you to exam technique, which helps but has a ceiling.',
  },
];

export default function AUTestPreparationPage() {
  const router = useRouter();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="bg-background text-on-surface font-body-md overflow-x-hidden">
      {/* Hero */}
      <section className="relative py-24 bg-white overflow-hidden">
        <div className="absolute top-0 right-0 w-[520px] h-[520px] bg-royal-purple/5 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3"></div>
        <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-royal-purple/10 text-royal-purple rounded-full font-label-sm mb-6">
            <ScrollText size={16} strokeWidth={2.25} aria-hidden="true" />
            NAPLAN to ATAR
          </div>
          <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-charcoal leading-tight font-bold mb-6">
            Online Test Preparation <span className="text-royal-purple">for Australian Students</span>
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
            One-to-one online exam preparation across the Australian system, from NAPLAN in Year 3 through
            selective entry testing to the senior certificate your state awards. Matched to your state authority,
            not to a generic national syllabus.
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
                const el = document.getElementById('exams');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="border-2 border-royal-purple text-royal-purple px-8 py-4 rounded-xl font-headline-md font-bold hover:bg-royal-purple/5 transition-all cursor-pointer"
            >
              Find Your Exam
            </button>
          </div>
          {/* Trustpilot  */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
            <h4 className="font-body-md text-on-surface-variant">We are recommended by parents &amp; students</h4>
            <TrustpilotWidget/>
          </div>
        </div>
      </section>

      {/* Cards */}
      <section className="py-24 bg-soft-gray" id="exams">
        <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="text-center mb-16">
            <h2 className="font-headline-lg text-headline-lg text-charcoal font-bold mb-4">Every Australian Assessment, Covered</h2>
            <p className="text-on-surface-variant font-body-md max-w-2xl mx-auto">
              One national assessment, one entry-testing pathway, and eight different ways of finishing school.
              Choose the one your child is working towards.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TEST_TYPES.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.slug}
                  onClick={() => router.push(`/au/test-preparation/${item.slug}`)}
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
        </div>
      </section>

      {/* Why state-specific */}
      <section className="py-24 bg-white">
        <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="text-center mb-16">
            <h2 className="font-headline-lg text-headline-lg text-charcoal font-bold mb-4">Why State-Specific Preparation Matters</h2>
            <p className="text-on-surface-variant font-body-md max-w-2xl mx-auto">
              Australia shares a national curriculum to Year 10 and then splits into eight senior systems, each
              with its own authority, assessment model and certificate. Generic senior tutoring misses in ways
              that only appear when marks are released.
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

      {/* Scaling explainer */}
      <section className="py-24 bg-soft-gray">
        <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-royal-purple/10 text-royal-purple font-label-md text-sm font-semibold mb-6">
                <TrendingUp size={16} aria-hidden="true" />
                <span>Understanding the ATAR</span>
              </div>
              <h2 className="font-headline-lg text-headline-lg text-charcoal font-bold mb-6">A Rank, Not a Mark</h2>
              <p className="text-on-surface-variant font-body-md mb-6">
                More confusion surrounds the ATAR than any other part of Australian schooling, and most of it
                comes from treating it as a score. It is a rank: it describes where a student sits relative to
                their age cohort. That is why an ATAR and a subject percentage cannot be sensibly compared, and
                why a student can improve their marks and still see their rank move differently than expected.
              </p>
              <p className="text-on-surface-variant font-body-md mb-6">
                Subject results are also scaled before contributing, which adjusts for the fact that different
                courses attract different cohorts. This is why choosing subjects purely on perceived difficulty
                is unreliable advice, and why prerequisites and genuine interest are better guides.
              </p>
              <p className="text-on-surface-variant font-body-md">
                The practical takeaway for families is simple enough: improvement across several subjects moves an
                ATAR far more than a large gain in one, which makes the weakest subject usually the best place to
                start rather than the strongest.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-outline-variant/30">
              <h3 className="font-headline-md text-charcoal font-bold mb-6">How Senior Results Are Built</h3>
              <div className="space-y-5">
                {[
                  ['New South Wales', 'HSC performance bands, combining internal school assessment with external examinations'],
                  ['Victoria', 'VCE study scores per subject, drawn from School-Assessed Coursework and end-of-year examinations'],
                  ['Queensland', 'QCE results combining internal assessment across Units 3 and 4 with an external assessment'],
                  ['Western Australia', 'WACE, with ATAR course examinations sitting alongside school-based assessment'],
                  ['South Australia', 'SACE, including the compulsory Research Project alongside subject results'],
                  ['The ATAR', 'Calculated by the state tertiary admissions body from scaled subject results'],
                ].map(([label, value]) => (
                  <div key={label} className="pb-4 border-b border-outline-variant/60 last:border-0 last:pb-0">
                    <p className="font-label-md text-charcoal font-semibold mb-1">{label}</p>
                    <p className="text-on-surface-variant font-body-md">{value}</p>
                  </div>
                ))}
              </div>
              <p className="text-on-surface-variant font-label-md italic mt-6">
                Assessment structures and ATAR calculation are set by state curriculum authorities and tertiary
                admissions centres, and are revised periodically. Confirm current details with your school.
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
              <span>Sequencing</span>
            </div>
            <h2 className="font-headline-lg text-headline-lg text-charcoal font-bold mb-4">When Australian Assessments Fall</h2>
            <p className="text-on-surface-variant font-body-md max-w-2xl mx-auto">
              Diagnostic in the early years, consequential from Year 10 onwards.
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
            <Scale size={26} className="text-royal-purple shrink-0 mt-1" aria-hidden="true" />
            <p className="text-on-surface-variant font-body-md">
              The moment that matters most is not an examination at all. Subject selection in Year 10 determines
              which senior courses are available, which prerequisites are satisfied, and how the eventual ATAR is
              built. Families who treat it as a timetabling exercise rather than a decision usually regret it.
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
              What Australian parents ask us most often about the ATAR, scaling, state certificates and NAPLAN.
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
          <h2 className="font-headline-lg text-headline-lg font-bold">Not sure where to focus?</h2>
          <p className="font-body-lg text-body-lg opacity-90 max-w-xl mx-auto">
            Book a free assessment lesson. We will confirm which assessments apply in your state and year level,
            establish where your child currently sits, and say plainly which subject would repay the effort first.
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