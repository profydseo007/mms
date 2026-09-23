'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  BookOpenCheck,
  GraduationCap,
  ClipboardList,
  Compass,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  CalendarClock,
  Mic,
  Calculator,
  Award,
  Star,
} from 'lucide-react';

const TEST_TYPES = [
  {
    slug: 'entrance-assessments',
    title: 'Entrance & Standardised Tests',
    subtitle: 'Sixth Class into First Year',
    icon: ClipboardList,
    description:
      'Preparation for the assessments many secondary schools use on entry, alongside the standardised tests sat in primary school. These often influence class placement, which shapes the next three years.',
    color: 'bg-primary-fixed',
    iconColor: 'text-royal-purple',
    points: ['Entrance and placement assessments', 'Reasoning and numeracy practice', 'Settling into First Year'],
  },
  {
    slug: 'junior-cycle',
    title: 'Junior Cycle',
    subtitle: 'First to Third Year — JCFE',
    icon: BookOpenCheck,
    description:
      'Preparation for the Junior Cycle Final Examinations and the Classroom-Based Assessments that feed the Junior Cycle Profile of Achievement, across all core subjects.',
    color: 'bg-secondary-container',
    iconColor: 'text-secondary',
    points: ['CBAs and Assessment Tasks', 'Common Level and Higher Level', 'Foundations for Senior Cycle'],
  },
  {
    slug: 'transition-year',
    title: 'Transition Year',
    subtitle: 'The year with no exam',
    icon: Compass,
    description:
      'Keeping maths and languages sharp through a year with no state examination, so Fifth Year Higher Level does not arrive as a shock in September.',
    color: 'bg-lime-green/20',
    iconColor: 'text-secondary',
    points: ['Maintaining maths fluency', 'Bridging into Senior Cycle', 'Subject choice guidance'],
  },
  {
    slug: 'leaving-certificate',
    title: 'Leaving Certificate',
    subtitle: 'Fifth & Sixth Year — CAO Entry',
    icon: GraduationCap,
    description:
      'Subject-specialist grinds at Higher and Ordinary Level across the full Leaving Cert, including orals, coursework and the Additional Assessment Components now carrying real weight.',
    color: 'bg-royal-purple/10',
    iconColor: 'text-royal-purple',
    points: ['Higher, Ordinary and Foundation', 'Orals and practical components', 'CAO points planning'],
  },
];

const REASONS = [
  {
    icon: ClipboardList,
    color: 'bg-primary-fixed text-royal-purple',
    title: 'Built Around SEC Marking Schemes',
    desc: 'Sessions work from State Examinations Commission marking schemes and past papers, because knowing how marks are awarded is a separate skill from knowing the subject.',
  },
  {
    icon: Star,
    color: 'bg-lime-green/20 text-secondary',
    title: 'Grade Bands, Not Vague Targets',
    desc: 'We work in the language of the results: H1 to H8 and O1 to O8, and what genuinely separates one band from the next in each subject.',
  },
  {
    icon: Mic,
    color: 'bg-primary-fixed text-royal-purple',
    title: 'Oral Exams Taken Seriously',
    desc: 'The Scrúdú Béil and modern language orals carry a substantial share of the marks and are sat months before the written papers. Preparation has to start accordingly.',
  },
];

const TIMELINE = [
  ['Sixth Class', 'Standardised and entrance assessments, plus the step up to secondary. Placement decisions made here can shape which levels are available later.'],
  ['First to Third Year', 'Junior Cycle, with Classroom-Based Assessments running alongside coursework. This is where the foundations for Leaving Cert maths are quietly built or missed.'],
  ['Transition Year', 'No state exam, which cuts both ways. Students who keep maths ticking over return ready; those who put it down often struggle with Higher Level in September.'],
  ['Fifth Year', 'The Higher or Ordinary Level decision is genuinely made here, not in Sixth Year. Coursework and Additional Assessment Components also begin falling due.'],
  ['Sixth Year', 'Mocks in the spring, orals before Easter, then the Leaving Certificate itself in June. CAO points from these results decide third-level entry.'],
];

const FAQS = [
  {
    q: 'How many subjects count towards CAO points?',
    a: 'Points are calculated from a student\u2019s six best subjects in a single sitting of the Leaving Certificate. That has a practical consequence families often miss: a seventh subject cannot lower a points total, but it can lift it if it outperforms one of the others. It also means a single disappointing result is less catastrophic than it feels on results day, provided six other subjects held up.',
  },
  {
    q: 'Are the mock exams worth taking seriously?',
    a: 'Yes, but not for the reason most students assume. Mocks rarely predict the final grade accurately, and a poor mock in February is a long way from a poor Leaving Cert in June. Their real value is diagnostic: they are usually the first full-length paper a student has sat under genuine time pressure, and they expose pacing problems and topic gaps while there is still a term to fix them. Treat the mark as information rather than a verdict.',
  },
  {
    q: 'When should oral exam preparation start?',
    a: 'Earlier than most families expect. The Irish and modern language orals are typically held around Easter, well before the written papers, and they account for a significant proportion of the total marks in those subjects. Because fluency builds slowly and cannot be crammed, students who begin conversational practice in the autumn of Sixth Year consistently perform better than those who start after the mocks. It is one of the few areas where starting early reliably changes the grade.',
  },
  {
    q: 'What are Classroom-Based Assessments and do they affect the final grade?',
    a: 'CBAs are completed during Second and Third Year and are reported on the Junior Cycle Profile of Achievement rather than folded into the JCFE grade itself. Students also complete a written Assessment Task linked to the second CBA, which does contribute to the subject result. The practical point is that CBAs arrive during normal school terms, often when nobody is thinking about examinations, and students who leave them to the last week tend to produce work well below what they are capable of.',
  },
  {
    q: 'Is Transition Year a good time for grinds?',
    a: 'For maths and languages, frequently yes. TY is valuable for the reasons schools offer it, but a full year without formal examination can leave maths fluency noticeably rusty, and Fifth Year Higher Level assumes it is intact. An hour a week through TY is usually enough to hold the line, and it is far cheaper in both time and money than trying to rebuild in Fifth Year while new content is arriving.',
  },
  {
    q: 'Can a student move between Higher and Ordinary Level?',
    a: 'Yes, and the decision is made formally when examination entries are confirmed, though schools set their own internal deadlines earlier. The honest advice is that the choice should follow evidence rather than nerves: recent test performance, the CAO requirements of the courses being considered, and in maths, the bonus points available at Higher Level. Moving down after one difficult term is a decision students sometimes regret in August.',
  },
  {
    q: 'Do you prepare students for entrance and standardised assessments?',
    a: 'Yes. Many secondary schools run assessments on entry, and primary schools use standardised tests through Sixth Class. These are not curriculum examinations, so they reward reasoning, comprehension and working accurately under time pressure rather than memorised content. Familiarity with the format removes most of the anxiety, which for a twelve-year-old is often the largest single factor in the result.',
  },
  {
    q: 'How soon before an exam should preparation begin?',
    a: 'For technique, six to eight weeks is often enough to make a visible difference. For subject knowledge, considerably longer. The distinction matters because most students who fall short do so on content they never fully secured rather than on exam craft, and no amount of paper practice fixes that in a fortnight. If a specific weakness is already known, starting a full year out is neither excessive nor unusual.',
  },
];

export default function IETestPreparationPage() {
  const router = useRouter();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="bg-background text-on-surface font-body-md overflow-x-hidden">
      {/* Hero */}
      <section className="relative py-24 bg-white overflow-hidden">
        <div className="absolute top-0 right-0 w-[520px] h-[520px] bg-royal-purple/5 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3"></div>
        <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-royal-purple/10 text-royal-purple rounded-full font-label-sm mb-6">
            <Award size={16} strokeWidth={2.25} aria-hidden="true" />
            Junior Cycle to Leaving Cert
          </div>
          <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-charcoal leading-tight font-bold mb-6">
            Online Test Preparation <span className="text-royal-purple">for Irish Students</span>
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
            One-to-one online exam preparation built around the Irish system, from entrance assessments in Sixth
            Class through to the Leaving Certificate and CAO points. Every plan starts from where your child
            actually stands against the specification.
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
                const el = document.getElementById('stages');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="border-2 border-royal-purple text-royal-purple px-8 py-4 rounded-xl font-headline-md font-bold hover:bg-royal-purple/5 transition-all cursor-pointer"
            >
              Choose Your Stage
            </button>
          </div>
        </div>
      </section>

      {/* Cards */}
      <section className="py-24 bg-soft-gray" id="stages">
        <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="text-center mb-16">
            <h2 className="font-headline-lg text-headline-lg text-charcoal font-bold mb-4">Preparation at Every Stage</h2>
            <p className="text-on-surface-variant font-body-md max-w-2xl mx-auto">
              Four points in an Irish school career where preparation genuinely changes the outcome. Pick the one
              your child is approaching.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {TEST_TYPES.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.slug}
                  onClick={() => router.push(`/ie/test-preparation/${item.slug}`)}
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

      {/* Why Irish curriculum */}
      <section className="py-24 bg-white">
        <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="text-center mb-16">
            <h2 className="font-headline-lg text-headline-lg text-charcoal font-bold mb-4">Why Irish-Curriculum Preparation Matters</h2>
            <p className="text-on-surface-variant font-body-md max-w-2xl mx-auto">
              Ireland runs its own curriculum, its own examinations and its own grading scales, entirely separate
              from the UK system it is often confused with. Tutoring built for GCSEs will not serve a student
              sitting the Leaving Cert.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {REASONS.map((item) => {
              const Icon = item.icon;
              return (
              <div key={item.title} className="bg-soft-gray p-8 rounded-2xl text-center">
                <div className={`w-14 h-14 ${item.color} rounded-full flex items-center justify-center mx-auto mb-6`}>
                  <Icon size={24} aria-hidden="true" />
                </div>
                <h3 className="font-headline-md text-charcoal font-bold mb-3">{item.title}</h3>
                <p className="text-on-surface-variant font-body-md">{item.desc}</p>
              </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Maths bonus points */}
      <section className="py-24 bg-soft-gray">
        <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-royal-purple/10 text-royal-purple font-label-md text-sm font-semibold mb-6">
                <Calculator size={16} aria-hidden="true" />
                <span>The Maths Decision</span>
              </div>
              <h2 className="font-headline-lg text-headline-lg text-charcoal font-bold mb-6">Do the Arithmetic Before Dropping Down</h2>
              <p className="text-on-surface-variant font-body-md mb-6">
                Students who sit Higher Level Maths and achieve a H6 or better receive 25 additional CAO points on
                top of the points for the grade itself. That single rule changes the calculation more than most
                families realise, and it is worth working through properly rather than reacting to one bad result.
              </p>
              <p className="text-on-surface-variant font-body-md mb-8">
                A modest grade at Higher Level can therefore outscore a strong one at Ordinary. Dropping down is
                sometimes exactly the right call, particularly where the workload is damaging performance in other
                subjects. But it should be a decision taken on the numbers, with the CAO requirements of the
                target courses in front of you, rather than in the week after a difficult Christmas test.
              </p>
              <button
                onClick={() => router.push('/free-trial')}
                className="bg-royal-purple text-white px-8 py-4 rounded-xl font-headline-md font-bold hover:bg-primary transition-all shadow-lg active:scale-95 cursor-pointer"
              >
                Talk It Through With a Tutor
              </button>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-outline-variant/30">
              <h3 className="font-headline-md text-charcoal font-bold mb-6">Grading at a Glance</h3>
              <div className="space-y-5">
                {[
                  ['Higher Level', 'H1 to H8, with H1 the top band'],
                  ['Ordinary Level', 'O1 to O8, awarded on a separate scale'],
                  ['Maths bonus', '25 extra CAO points for H6 or better at Higher'],
                  ['Points basis', 'Calculated from the six best subjects in one sitting'],
                  ['Coursework', 'Additional Assessment Components worth at least 40% in redeveloped subjects'],
                ].map(([label, value]) => (
                  <div key={label} className="pb-4 border-b border-outline-variant/60 last:border-0 last:pb-0">
                    <p className="font-label-md text-charcoal font-semibold mb-1">{label}</p>
                    <p className="text-on-surface-variant font-body-md">{value}</p>
                  </div>
                ))}
              </div>
              <p className="text-on-surface-variant font-label-md italic mt-6">
                Grading, points and coursework weightings are set by the SEC, the NCCA and the CAO and are revised
                periodically. Confirm current details with your child&apos;s school.
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
            <h2 className="font-headline-lg text-headline-lg text-charcoal font-bold mb-4">How the Irish Exam Years Unfold</h2>
            <p className="text-on-surface-variant font-body-md max-w-2xl mx-auto">
              The pressure concentrates in Sixth Year, but the results are largely determined by what happened
              in the four years before it.
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
            <Mic size={26} className="text-royal-purple shrink-0 mt-1" aria-hidden="true" />
            <p className="text-on-surface-variant font-body-md">
              One date families routinely overlook: the Irish and modern language orals fall around Easter, months
              ahead of the written papers. Students who plan their revision around June alone arrive at the orals
              underprepared, having spent no time on the one component that cannot be crammed.
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
              What Irish parents ask us most often about CBAs, mocks, orals, levels and CAO points.
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
          <h2 className="font-headline-lg text-headline-lg font-bold">Not sure which stage to prepare for?</h2>
          <p className="font-body-lg text-body-lg opacity-90 max-w-xl mx-auto">
            Book a free assessment lesson. The tutor will establish where your child sits against the
            specification, say plainly what would help, and recommend the level worth aiming at.
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