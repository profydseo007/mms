'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  Compass,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  CalendarClock,
  Scale,
  ClipboardList,
  BookMarked,
  Landmark,
  MapPin,
  PenLine,
  AlertCircle,
} from 'lucide-react';

const CERTIFICATES = [
  {
    title: 'WACE',
    region: 'Western Australia · SCSA',
    icon: BookMarked,
    color: 'bg-primary-fixed',
    iconColor: 'text-royal-purple',
    points: [
      'ATAR course examinations',
      'General and Foundation courses',
      'OLNA literacy and numeracy standard',
    ],
  },
  {
    title: 'SACE',
    region: 'South Australia · SACE Board',
    icon: ClipboardList,
    color: 'bg-secondary-container',
    iconColor: 'text-secondary',
    points: [
      'Stage 1 and Stage 2 subjects',
      'Compulsory capability subjects',
      'Credit-based completion',
    ],
  },
  {
    title: 'TCE',
    region: 'Tasmania · TASC',
    icon: Landmark,
    color: 'bg-lime-green/20',
    iconColor: 'text-secondary',
    points: [
      'Level 3 and 4 TASC courses',
      'Everyday adult standards',
      'External assessment components',
    ],
  },
  {
    title: 'NTCET',
    region: 'Northern Territory',
    icon: MapPin,
    color: 'bg-royal-purple/10',
    iconColor: 'text-royal-purple',
    points: [
      'Delivered under SACE arrangements',
      'Literacy and numeracy credit rules',
      'Stage 2 credit requirements',
    ],
  },
  {
    title: 'ACT Senior Secondary',
    region: 'Canberra · BSSS',
    icon: PenLine,
    color: 'bg-primary-fixed',
    iconColor: 'text-royal-purple',
    points: [
      'Course-based unit scores',
      'ACT Scaling Test preparation',
      'Tertiary and accredited packages',
    ],
  },
];

const KEY_POINTS = [
  {
    icon: Scale,
    title: 'Completion Rules Come First',
    body: 'These certificates are credit or unit based. Before any mark matters, a student has to satisfy completion requirements, and students occasionally fall short on a technicality rather than on ability.',
  },
  {
    icon: AlertCircle,
    title: 'Separate Literacy and Numeracy Gates',
    body: 'Western Australia and the Northern Territory both attach standalone literacy and numeracy conditions to the certificate. Passing your subjects does not automatically satisfy them.',
  },
  {
    icon: Compass,
    title: 'Different Routes to an ATAR',
    body: 'An ATAR is produced differently in each of these jurisdictions. The ACT scales through an aptitude test; Western Australia runs course examinations; South Australia and the Territory work through SATAC.',
  },
];

const REQUIREMENTS = [
  ['WACE completion', 'A minimum number of units across Years 11 and 12, which may include VET and endorsed programs'],
  ['WACE literacy & numeracy', 'Met by pre-qualifying through Year 9 NAPLAN, or by passing the OLNA components'],
  ['OLNA attempts', 'Sat across Years 10, 11 and 12, with multiple opportunities each year'],
  ['SACE and NTCET', 'Credit-based, with compulsory literacy and numeracy credits and required Stage 2 credits'],
  ['Satisfactory achievement', 'Defined by grade thresholds that differ between Stage 1 and Stage 2'],
  ['ACT ATAR', 'Course scores moderated using the ACT Scaling Test, which assesses aptitude rather than syllabus content'],
];

const TIMELINE = [
  ['Year 9', 'NAPLAN results can pre-qualify a Western Australian student against the WACE literacy and numeracy standard, removing the need to sit the corresponding OLNA component later.'],
  ['Year 10', 'Subject selection for the senior years, and the first OLNA opportunities in WA. In South Australia and the Territory, Stage 1 planning begins.'],
  ['Year 11', 'Stage 1 in SACE and NTCET, Year 11 units in WA and Tasmania. Further OLNA sittings for any component not yet met.'],
  ['Year 12', 'Stage 2 subjects, ATAR course examinations in WA, the ACT Scaling Test in Canberra, and final credit checks everywhere.'],
];

const FAQS = [
  {
    q: 'What is the OLNA and does my child have to sit it?',
    a: 'The Online Literacy and Numeracy Assessment is how Western Australian students demonstrate the minimum literacy and numeracy standard required for the WACE. Not every student sits it. Those who achieve the required band in the Year 9 NAPLAN reading, writing and numeracy tests pre-qualify for the corresponding component and are considered to have met that standard already. Students who do not pre-qualify need to demonstrate the standard through the OLNA instead, and they must satisfy each component to be eligible for the certificate.',
  },
  {
    q: 'How many chances does a student get at the OLNA?',
    a: 'Several. The assessment runs across Years 10, 11 and 12, with more than one opportunity in each of those years, so a student who does not meet a component at the first attempt has genuine room to recover. That said, the assessments test applied everyday literacy and numeracy rather than recalled course content, so simply resitting without changing the preparation rarely changes the outcome. Understanding which component was missed, and why, is the part that matters.',
  },
  {
    q: 'Can a student complete WACE without doing ATAR courses?',
    a: 'Yes. The certificate can be completed through General courses, VET qualifications, endorsed programs, or a combination, and many students do exactly that. ATAR courses are the pathway for university admission through the state tertiary admissions centre, so they are necessary only if that is the intended destination. Choosing a non-ATAR pathway is a legitimate route to the certificate, not a lesser version of it, though it does close the direct university door.',
  },
  {
    q: 'Is the SACE Research Project still part of the certificate?',
    a: 'South Australia has been reforming its compulsory capability subjects, and the arrangements have changed in recent years. Exploring Identities and Futures now sits as a compulsory Stage 1 subject, and the Stage 2 capability requirement has been revised from the Research Project that many parents will remember. Because this has moved recently, and because requirements differ slightly for NTCET students, confirm what applies to your child\u2019s cohort with their school rather than relying on older guidance.',
  },
  {
    q: 'How does the NTCET differ from the SACE?',
    a: 'The Northern Territory Certificate of Education and Training is delivered under SACE Board arrangements, so the structure is closely aligned: the same credit-based model, comparable literacy and numeracy requirements met through English and mathematics subjects, and defined Stage 2 credit thresholds. In practice, tutoring for one prepares a student for the other. What differs are some local recognition and flexible-learning provisions, which schools administer directly.',
  },
  {
    q: 'What is the ACT Scaling Test and can it be prepared for?',
    a: 'The AST is used in the Australian Capital Territory to scale and moderate course scores between colleges when ATARs are calculated. It is deliberately an aptitude test rather than a syllabus examination, covering multiple choice, short answer and an extended writing task. That means content revision does not help much, but familiarity certainly does. Students who have practised the question styles and, in particular, the timed writing task perform noticeably better than those meeting the format for the first time on the day.',
  },
  {
    q: 'We are moving between these states mid-senior school. What happens?',
    a: 'It is manageable but needs handling early, because the certificates are credit or unit based and not directly interchangeable. Receiving authorities generally grant recognition for completed study rather than substituting it one-for-one, and separate literacy and numeracy conditions may still need to be met in the new jurisdiction. Contact both schools before the move rather than after, since the timing within the school year often determines how cleanly the credits transfer.',
  },
  {
    q: 'When should preparation for these certificates begin?',
    a: 'Year 10 for most families, and earlier in Western Australia if literacy or numeracy has been a persistent difficulty. The reasoning is practical: subject selection happens in Year 10 and shapes everything after it, and the OLNA opportunities begin in the same year. A student who leaves the literacy standard unmet into Year 12 is carrying an avoidable risk into their most demanding year.',
  },
];

export default function AUOtherCertificatesPage() {
  const router = useRouter();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="bg-background text-on-surface font-body-md overflow-x-hidden">
      {/* Hero */}
      <section className="relative py-24 bg-white overflow-hidden">
        <div className="absolute top-0 right-0 w-[520px] h-[520px] bg-royal-purple/5 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3"></div>
        <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-royal-purple/10 text-royal-purple rounded-full font-label-sm">
                <Compass size={16} strokeWidth={2.25} aria-hidden="true" />
                WA · SA · Tasmania · ACT · NT
              </div>
              <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-charcoal leading-tight font-bold">
                Online Preparation for <span className="text-royal-purple">WACE, SACE &amp; More</span>
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
                One-to-one tutoring for the senior certificates outside the eastern seaboard: the WACE in Western
                Australia, SACE in South Australia, the TCE in Tasmania, the NTCET in the Northern Territory and
                the ACT senior secondary certificate in Canberra.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => router.push('/free-trial')}
                  className="bg-royal-purple text-white px-8 py-4 rounded-xl font-headline-md font-bold hover:shadow-xl transition-all cursor-pointer"
                >
                  Book a Free Assessment
                </button>
                <button
                  onClick={() => {
                    const el = document.getElementById('certificates');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="border-2 border-royal-purple text-royal-purple px-8 py-4 rounded-xl font-headline-md font-bold hover:bg-royal-purple/5 transition-all cursor-pointer"
                >
                  Find Your Certificate
                </button>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img
                  className="w-full h-[440px] object-cover"
                  alt="An Australian senior secondary student preparing for certificate examinations online"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBIC2148RcAcfRXxnZOcCNJC2Yr32DtyHa7d1TOD82ZBuHm5-qZ-Hfyjuic-1MLI6po5tOU8XT7FUpGqvgdHGzRwEInHX72mGWsxX-9nVAlOqT4sbH-gqYAG5YfaLbivq9Je_ZI7ity8vsit3aPnhFxzYCZ7Vd3uaU5jtItj5k130NViqjkJsMWfhwBn54qZk6DOAoC1XqgTsCbUlAYR6O8_Q9eb3Xz1j99Ujc64cOxRy0f-IOnZz3fvw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certificates */}
      <section className="py-24 bg-soft-gray" id="certificates">
        <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="text-center mb-16">
            <h2 className="font-headline-lg text-headline-lg text-charcoal font-bold mb-4">Five Certificates, Five Sets of Rules</h2>
            <p className="text-on-surface-variant font-body-md max-w-2xl mx-auto">
              These jurisdictions are frequently treated as an afterthought behind the HSC, VCE and QCE. They
              are not variations on those systems, and preparation has to follow the certificate your child is
              actually enrolled in.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CERTIFICATES.map((cert) => {
              const Icon = cert.icon;
              return (
                <div
                  key={cert.title}
                  className="bg-white p-8 rounded-[2rem] shadow-[0px_4px_20px_rgba(0,0,0,0.05)] border border-transparent hover:border-royal-purple/30 transition-all group"
                >
                  <div className={`w-16 h-16 ${cert.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <Icon size={30} strokeWidth={2} className={cert.iconColor} aria-hidden="true" />
                  </div>
                  <h3 className="font-headline-md text-headline-md text-charcoal font-bold">{cert.title}</h3>
                  <p className="font-label-md text-label-md text-royal-purple font-semibold mt-1 mb-4">{cert.region}</p>
                  <ul className="space-y-2">
                    {cert.points.map((point) => (
                      <li key={point} className="flex items-start gap-2 text-label-md text-on-surface-variant">
                        <CheckCircle2 size={15} className="text-lime-green shrink-0 mt-1" aria-hidden="true" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Key points */}
      <section className="py-24 bg-white">
        <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="text-center mb-16">
            <h2 className="font-headline-lg text-headline-lg text-charcoal font-bold mb-4">What These Certificates Have in Common</h2>
            <p className="text-on-surface-variant font-body-md max-w-2xl mx-auto">
              Three features distinguish them from the eastern states, and each changes how a family should plan.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {KEY_POINTS.map((point) => {
              const Icon = point.icon;
              return (
                <div key={point.title} className="p-8 bg-soft-gray rounded-2xl border border-outline-variant/30">
                  <div className="w-12 h-12 rounded-xl bg-royal-purple/10 flex items-center justify-center mb-6">
                    <Icon size={22} className="text-royal-purple" aria-hidden="true" />
                  </div>
                  <h3 className="font-headline-md text-charcoal font-bold mb-3">{point.title}</h3>
                  <p className="text-on-surface-variant font-body-md">{point.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Requirements + timeline */}
      <section className="py-24 bg-soft-gray">
        <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-royal-purple/10 text-royal-purple font-label-md text-sm font-semibold mb-6">
                <Scale size={16} aria-hidden="true" />
                <span>Completion Rules</span>
              </div>
              <h2 className="font-headline-lg text-headline-lg text-charcoal font-bold mb-6">The Requirements Behind the Marks</h2>
              <p className="text-on-surface-variant font-body-md mb-8">
                In these systems a student can perform respectably in every subject and still not be awarded the
                certificate, because completion depends on structural conditions as well as results. Knowing
                those conditions early prevents a nasty surprise in Year 12.
              </p>
              <div className="bg-white rounded-2xl p-8 border border-outline-variant/30">
                {REQUIREMENTS.map(([label, value]) => (
                  <div key={label} className="pb-4 mb-4 border-b border-outline-variant/60 last:border-0 last:pb-0 last:mb-0">
                    <p className="font-label-md text-charcoal font-semibold mb-1">{label}</p>
                    <p className="text-on-surface-variant font-body-md">{value}</p>
                  </div>
                ))}
              </div>
              <p className="text-on-surface-variant font-label-md italic mt-6">
                Requirements are set by SCSA, the SACE Board, TASC and the ACT BSSS and are revised periodically.
                Confirm the rules that apply to your child&apos;s cohort with their school.
              </p>
            </div>
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-royal-purple/10 text-royal-purple font-label-md text-sm font-semibold mb-6">
                <CalendarClock size={16} aria-hidden="true" />
                <span>Planning Ahead</span>
              </div>
              <h2 className="font-headline-lg text-headline-lg text-charcoal font-bold mb-6">Four Years, Not One</h2>
              <p className="text-on-surface-variant font-body-md mb-8">
                Certificate requirements start accumulating well before Year 12, and in Western Australia the
                clock effectively starts in Year 9.
              </p>
              <div className="mt-4">
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
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-white">
        <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="text-center mb-16">
            <h2 className="font-headline-lg text-headline-lg text-charcoal font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-on-surface-variant font-body-md max-w-2xl mx-auto">
              What families in Western Australia, South Australia, Tasmania, the ACT and the Northern Territory
              ask us most often.
            </p>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {FAQS.map((faq, i) => (
              <div key={i} className="border border-surface-container-highest rounded-2xl overflow-hidden">
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
          <h2 className="font-headline-lg text-headline-lg font-bold">Check the requirements before Year 12 does it for you</h2>
          <p className="font-body-lg text-body-lg opacity-90 max-w-xl mx-auto">
            Book a free assessment lesson. We will confirm which certificate rules apply to your child, whether
            any literacy or numeracy condition is still outstanding, and where tutoring would make the most
            difference.
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