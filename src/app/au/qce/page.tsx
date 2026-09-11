'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Landmark, CheckCircle2, ChevronDown, ChevronRight, CalendarClock, Scale, Calculator, FlaskConical, BookOpen, ClipboardList, Layers, Target } from 'lucide-react';

const FAQS = [
  { q: "How much does the external assessment count?", a: "It depends on the subject, which is the detail most families miss. In most General subjects the external assessment contributes a smaller share than the combined internal instruments, while in mathematics and science subjects it carries substantially more weight. That difference should change how a student allocates their time: the same preparation strategy across all subjects will over-invest in some and under-invest in others." },
  { q: "Do Units 1 and 2 count towards my child\u2019s result?", a: "Not towards the subject result, which leads a lot of students to treat Year 11 as low stakes. That is a misreading with consequences. Units 3 and 4 assume the content and skills developed in Units 1 and 2, so a student who coasted arrives in Unit 3 learning new material on a shaky base while assessment is already counting. The marks do not carry forward; the understanding does." },
  { q: "What is an internal assessment instrument?", a: "A specified assessment task set by the school against QCAA conditions, which may be an examination, an investigation, a project or an extended response depending on the syllabus. Each has defined conditions and a marking guide setting out what each criterion requires. Students frequently lose marks not through weak understanding but through failing to address a criterion the guide asks for explicitly." },
  { q: "How is the QCE different from an ATAR?", a: "They are separate things and students can earn one without the other. The QCE is a credit-based senior certificate with its own completion, literacy and numeracy requirements, achievable through General subjects, Applied subjects, VET qualifications or a combination. The ATAR is a rank calculated by QTAC from results in a set number of General subjects, used for tertiary admission." },
  { q: "Which mathematics subject should my child choose?", a: "It follows the intended university course rather than perceived difficulty. Mathematical Methods is a prerequisite or assumed knowledge for most science, engineering, commerce and computing degrees, with Specialist Mathematics sitting alongside it for the most mathematical pathways. General Mathematics supports an ATAR but closes some doors. Essential Mathematics is an Applied subject and does not contribute to an ATAR in the same way." },
  { q: "Can students still get an ATAR through Applied subjects?", a: "Only in limited combination. ATAR eligibility rests largely on completing a set number of General subjects, though a limited contribution from Applied subjects or VET qualifications is possible within the rules. Families relying on this should check the specific requirements with the school early, because discovering an eligibility problem in Year 12 leaves very little room to correct it." },
  { q: "When should QCE preparation start?", a: "Units 1 and 2 for the underlying content, and the beginning of Unit 3 at the latest, since assessment starts contributing immediately. Waiting for a disappointing first internal result is common but means working against an established pattern. The most useful early work is usually understanding how the marking guides are structured, which improves results across every subject simultaneously." },
  { q: "Do you match tutors to QCAA syllabuses specifically?", a: "Yes. The Queensland system is distinct enough that experience elsewhere does not transfer cleanly. A tutor who has taught VCE mathematics knows the mathematics but not the assessment instruments, conditions or marking guides a Queensland student is measured against, and in a system where technique against criteria carries this much weight, that gap is not trivial." }
];

export default function AUQcePage() {
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
                <Landmark size={16} strokeWidth={2.25} aria-hidden="true" />
                Queensland · Years 11 and 12
              </div>
              <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-charcoal leading-tight font-bold">
                QCE Preparation <span className="text-royal-purple">Online</span>
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
                Online tutors for QCE preparation across QCAA General subjects. Internal assessment through Units 3 and 4 combines with an external assessment, and the balance between them differs by subject in ways that shape how a student should prepare.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button onClick={() => router.push('/free-trial')} className="bg-royal-purple text-white px-8 py-4 rounded-xl font-headline-md font-bold hover:shadow-xl transition-all cursor-pointer">Book a Free Assessment</button>
                <button onClick={() => { const el = document.getElementById('structure'); if (el) el.scrollIntoView({ behavior: 'smooth' }); }} className="border-2 border-royal-purple text-royal-purple px-8 py-4 rounded-xl font-headline-md font-bold hover:bg-royal-purple/5 transition-all cursor-pointer">See the Subjects</button>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img className="w-full h-[440px] object-cover" alt="A Queensland student preparing for QCE assessment online" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBIC2148RcAcfRXxnZOcCNJC2Yr32DtyHa7d1TOD82ZBuHm5-qZ-Hfyjuic-1MLI6po5tOU8XT7FUpGqvgdHGzRwEInHX72mGWsxX-9nVAlOqT4sbH-gqYAG5YfaLbivq9Je_ZI7ity8vsit3aPnhFxzYCZ7Vd3uaU5jtItj5k130NViqjkJsMWfhwBn54qZk6DOAoC1XqgTsCbUlAYR6O8_Q9eb3Xz1j99Ujc64cOxRy0f-IOnZz3fvw" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Structure */}
      <section className="py-24 bg-soft-gray" id="structure">
        <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="text-center mb-16">
            <h2 className="font-headline-lg text-headline-lg text-charcoal font-bold mb-4">Subjects We Cover</h2>
            <p className="text-on-surface-variant font-body-md max-w-2xl mx-auto">Across QCAA General syllabuses, matched to the specific subject and unit your child is studying.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-8 rounded-[2rem] shadow-[0px_4px_20px_rgba(0,0,0,0.05)] border border-transparent hover:border-royal-purple/30 transition-all group">
              <div className="w-16 h-16 bg-primary-fixed rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Calculator size={30} strokeWidth={2} className="text-royal-purple" aria-hidden="true" />
              </div>
              <h3 className="font-headline-md text-headline-md text-charcoal font-bold">Mathematics</h3>
              <p className="font-label-md text-label-md text-royal-purple font-semibold mt-1 mb-4">General, Methods, Specialist</p>
              <ul className="space-y-2"><li key="General Mathematics" className="flex items-start gap-2 text-label-md text-on-surface-variant"><CheckCircle2 size={15} className="text-lime-green shrink-0 mt-1" aria-hidden="true" />General Mathematics</li><li key="Mathematical Methods" className="flex items-start gap-2 text-label-md text-on-surface-variant"><CheckCircle2 size={15} className="text-lime-green shrink-0 mt-1" aria-hidden="true" />Mathematical Methods</li><li key="Specialist Mathematics" className="flex items-start gap-2 text-label-md text-on-surface-variant"><CheckCircle2 size={15} className="text-lime-green shrink-0 mt-1" aria-hidden="true" />Specialist Mathematics</li></ul>
            </div>
            <div className="bg-white p-8 rounded-[2rem] shadow-[0px_4px_20px_rgba(0,0,0,0.05)] border border-transparent hover:border-royal-purple/30 transition-all group">
              <div className="w-16 h-16 bg-secondary-container rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <BookOpen size={30} strokeWidth={2} className="text-secondary" aria-hidden="true" />
              </div>
              <h3 className="font-headline-md text-headline-md text-charcoal font-bold">English</h3>
              <p className="font-label-md text-label-md text-royal-purple font-semibold mt-1 mb-4">Required for most pathways</p>
              <ul className="space-y-2"><li key="English and Essential English" className="flex items-start gap-2 text-label-md text-on-surface-variant"><CheckCircle2 size={15} className="text-lime-green shrink-0 mt-1" aria-hidden="true" />English and Essential English</li><li key="Analytical essays" className="flex items-start gap-2 text-label-md text-on-surface-variant"><CheckCircle2 size={15} className="text-lime-green shrink-0 mt-1" aria-hidden="true" />Analytical essays</li><li key="Extended responses" className="flex items-start gap-2 text-label-md text-on-surface-variant"><CheckCircle2 size={15} className="text-lime-green shrink-0 mt-1" aria-hidden="true" />Extended responses</li></ul>
            </div>
            <div className="bg-white p-8 rounded-[2rem] shadow-[0px_4px_20px_rgba(0,0,0,0.05)] border border-transparent hover:border-royal-purple/30 transition-all group">
              <div className="w-16 h-16 bg-lime-green/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <FlaskConical size={30} strokeWidth={2} className="text-secondary" aria-hidden="true" />
              </div>
              <h3 className="font-headline-md text-headline-md text-charcoal font-bold">Sciences</h3>
              <p className="font-label-md text-label-md text-royal-purple font-semibold mt-1 mb-4">Biology, Chemistry, Physics</p>
              <ul className="space-y-2"><li key="Student experiments" className="flex items-start gap-2 text-label-md text-on-surface-variant"><CheckCircle2 size={15} className="text-lime-green shrink-0 mt-1" aria-hidden="true" />Student experiments</li><li key="Research investigations" className="flex items-start gap-2 text-label-md text-on-surface-variant"><CheckCircle2 size={15} className="text-lime-green shrink-0 mt-1" aria-hidden="true" />Research investigations</li><li key="External assessment technique" className="flex items-start gap-2 text-label-md text-on-surface-variant"><CheckCircle2 size={15} className="text-lime-green shrink-0 mt-1" aria-hidden="true" />External assessment technique</li></ul>
            </div>
            <div className="bg-white p-8 rounded-[2rem] shadow-[0px_4px_20px_rgba(0,0,0,0.05)] border border-transparent hover:border-royal-purple/30 transition-all group">
              <div className="w-16 h-16 bg-royal-purple/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <ClipboardList size={30} strokeWidth={2} className="text-royal-purple" aria-hidden="true" />
              </div>
              <h3 className="font-headline-md text-headline-md text-charcoal font-bold">Assessment Skills</h3>
              <p className="font-label-md text-label-md text-royal-purple font-semibold mt-1 mb-4">Across every subject</p>
              <ul className="space-y-2"><li key="Internal assessment instruments" className="flex items-start gap-2 text-label-md text-on-surface-variant"><CheckCircle2 size={15} className="text-lime-green shrink-0 mt-1" aria-hidden="true" />Internal assessment instruments</li><li key="Marking guide alignment" className="flex items-start gap-2 text-label-md text-on-surface-variant"><CheckCircle2 size={15} className="text-lime-green shrink-0 mt-1" aria-hidden="true" />Marking guide alignment</li><li key="Timed external practice" className="flex items-start gap-2 text-label-md text-on-surface-variant"><CheckCircle2 size={15} className="text-lime-green shrink-0 mt-1" aria-hidden="true" />Timed external practice</li></ul>
            </div>
          </div>
        </div>
      </section>

      {/* Key points */}
      <section className="py-24 bg-white">
        <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="text-center mb-16">
            <h2 className="font-headline-lg text-headline-lg text-charcoal font-bold mb-4">How the QCE System Works</h2>
            <p className="text-on-surface-variant font-body-md max-w-2xl mx-auto">Queensland reformed senior assessment comparatively recently, and the model differs from both New South Wales and Victoria.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-8 bg-soft-gray rounded-2xl border border-outline-variant/30">
              <div className="w-12 h-12 rounded-xl bg-royal-purple/10 flex items-center justify-center mb-6">
                <Layers size={22} className="text-royal-purple" aria-hidden="true" />
              </div>
              <h3 className="font-headline-md text-charcoal font-bold mb-3">Internal Plus External</h3>
              <p className="text-on-surface-variant font-body-md">Results in General subjects combine internal assessment completed across Units 3 and 4 with an external assessment at the end, rather than resting on a single examination.</p>
            </div>
            <div className="p-8 bg-soft-gray rounded-2xl border border-outline-variant/30">
              <div className="w-12 h-12 rounded-xl bg-royal-purple/10 flex items-center justify-center mb-6">
                <Scale size={22} className="text-royal-purple" aria-hidden="true" />
              </div>
              <h3 className="font-headline-md text-charcoal font-bold mb-3">The Balance Differs by Subject</h3>
              <p className="text-on-surface-variant font-body-md">External assessment carries a greater share in mathematics and science subjects than in most others, which should change how a student allocates preparation time between the two.</p>
            </div>
            <div className="p-8 bg-soft-gray rounded-2xl border border-outline-variant/30">
              <div className="w-12 h-12 rounded-xl bg-royal-purple/10 flex items-center justify-center mb-6">
                <Target size={22} className="text-royal-purple" aria-hidden="true" />
              </div>
              <h3 className="font-headline-md text-charcoal font-bold mb-3">Instruments Have Specific Rules</h3>
              <p className="text-on-surface-variant font-body-md">Internal assessment instruments follow defined conditions and marking guides. Understanding what a criterion is actually asking for is often worth more than additional content revision.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Scoring + timeline */}
      <section className="py-24 bg-soft-gray">
        <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-royal-purple/10 text-royal-purple font-label-md text-sm font-semibold mb-6">
                <Scale size={16} aria-hidden="true" />
                <span>How Results Are Built</span>
              </div>
              <h2 className="font-headline-lg text-headline-lg text-charcoal font-bold mb-6">Units, Instruments and External Assessment</h2>
              <p className="text-on-surface-variant font-body-md mb-8">The QCE itself is a credit-based certificate; subject results are built separately from assessment across Units 3 and 4 plus the external component.</p>
              <div className="bg-white rounded-2xl p-8 border border-outline-variant/30">
                <div className="pb-4 mb-4 border-b border-outline-variant/60 last:border-0 last:pb-0 last:mb-0">
                  <p className="font-label-md text-charcoal font-semibold mb-1">Units 1 and 2</p>
                  <p className="text-on-surface-variant font-body-md">Foundational, and assessed by the school, but not contributing to the subject result</p>
                </div>
                <div className="pb-4 mb-4 border-b border-outline-variant/60 last:border-0 last:pb-0 last:mb-0">
                  <p className="font-label-md text-charcoal font-semibold mb-1">Units 3 and 4</p>
                  <p className="text-on-surface-variant font-body-md">The assessed sequence, with internal instruments completed across both</p>
                </div>
                <div className="pb-4 mb-4 border-b border-outline-variant/60 last:border-0 last:pb-0 last:mb-0">
                  <p className="font-label-md text-charcoal font-semibold mb-1">External assessment</p>
                  <p className="text-on-surface-variant font-body-md">Set and marked by the QCAA, weighted more heavily in mathematics and science</p>
                </div>
                <div className="pb-4 mb-4 border-b border-outline-variant/60 last:border-0 last:pb-0 last:mb-0">
                  <p className="font-label-md text-charcoal font-semibold mb-1">QCE requirements</p>
                  <p className="text-on-surface-variant font-body-md">A credit-based certificate with literacy and numeracy requirements alongside subject results</p>
                </div>
                <div className="pb-4 mb-4 border-b border-outline-variant/60 last:border-0 last:pb-0 last:mb-0">
                  <p className="font-label-md text-charcoal font-semibold mb-1">Subject results</p>
                  <p className="text-on-surface-variant font-body-md">Reported on a scale used by QTAC in calculating an ATAR</p>
                </div>
                <div className="pb-4 mb-4 border-b border-outline-variant/60 last:border-0 last:pb-0 last:mb-0">
                  <p className="font-label-md text-charcoal font-semibold mb-1">ATAR</p>
                  <p className="text-on-surface-variant font-body-md">Calculated by QTAC from scaled results across a set number of subjects</p>
                </div>
              </div>
              <p className="text-on-surface-variant font-label-md italic mt-6">Syllabuses, assessment weightings and QCE requirements are set by the QCAA, and ATAR calculation by QTAC. Both are revised periodically. Confirm current details with your child’s school.</p>
            </div>
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-royal-purple/10 text-royal-purple font-label-md text-sm font-semibold mb-6">
                <CalendarClock size={16} aria-hidden="true" />
                <span>Planning Ahead</span>
              </div>
              <h2 className="font-headline-lg text-headline-lg text-charcoal font-bold mb-6">Across Years 11 and 12</h2>
              <p className="text-on-surface-variant font-body-md mb-8">Units 1 and 2 do not count towards the subject result, which regularly misleads students about when to start working.</p>
              <div className="mt-4">
                <div className="relative pl-12 pb-10 border-l-2 border-outline-variant last:border-l-0 last:pb-0">
                  <div className="absolute -left-[13px] top-0 w-6 h-6 rounded-full bg-royal-purple flex items-center justify-center">
                    <span className="text-white text-[11px] font-bold">1</span>
                  </div>
                  <h3 className="font-headline-md text-charcoal font-bold mb-2">Units 1 and 2</h3>
                  <p className="text-on-surface-variant font-body-md">Not part of the subject result, but the content Units 3 and 4 build on. Treating them as a warm-up is the most common avoidable error.</p>
                </div>
                <div className="relative pl-12 pb-10 border-l-2 border-outline-variant last:border-l-0 last:pb-0">
                  <div className="absolute -left-[13px] top-0 w-6 h-6 rounded-full bg-royal-purple flex items-center justify-center">
                    <span className="text-white text-[11px] font-bold">2</span>
                  </div>
                  <h3 className="font-headline-md text-charcoal font-bold mb-2">Unit 3</h3>
                  <p className="text-on-surface-variant font-body-md">Internal assessment instruments begin contributing. Conditions and marking guides are specified, so technique matters from the first task.</p>
                </div>
                <div className="relative pl-12 pb-10 border-l-2 border-outline-variant last:border-l-0 last:pb-0">
                  <div className="absolute -left-[13px] top-0 w-6 h-6 rounded-full bg-royal-purple flex items-center justify-center">
                    <span className="text-white text-[11px] font-bold">3</span>
                  </div>
                  <h3 className="font-headline-md text-charcoal font-bold mb-2">Unit 4</h3>
                  <p className="text-on-surface-variant font-body-md">Remaining internal assessment alongside preparation for the external. Both run concurrently, which is the real difficulty of Year 12.</p>
                </div>
                <div className="relative pl-12 pb-10 border-l-2 border-outline-variant last:border-l-0 last:pb-0">
                  <div className="absolute -left-[13px] top-0 w-6 h-6 rounded-full bg-royal-purple flex items-center justify-center">
                    <span className="text-white text-[11px] font-bold">4</span>
                  </div>
                  <h3 className="font-headline-md text-charcoal font-bold mb-2">External assessment</h3>
                  <p className="text-on-surface-variant font-body-md">Set and marked externally by the QCAA at the end of Unit 4, then subject results and the ATAR.</p>
                </div>
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
            <p className="text-on-surface-variant font-body-md max-w-2xl mx-auto">What Queensland families ask us most often about internal assessment, externals and the QCE.</p>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {FAQS.map((faq, i) => (
              <div key={i} className="border border-surface-container-highest rounded-2xl overflow-hidden">
                <button className="w-full flex items-center justify-between gap-4 p-6 text-left hover:bg-soft-gray transition-colors font-headline-md text-[18px] font-bold cursor-pointer" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  <span>{faq.q}</span>
                  <ChevronDown size={22} className={`shrink-0 transition-transform duration-300 ${openFaq === i ? 'rotate-180 text-royal-purple' : ''}`} aria-hidden="true" />
                </button>
                {openFaq === i && <div className="bg-soft-gray p-6 text-on-surface-variant font-body-md border-t border-surface-container-highest">{faq.a}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-royal-purple text-white">
        <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop text-center space-y-6">
          <h2 className="font-headline-lg text-headline-lg font-bold">Know which half of the assessment matters most</h2>
          <p className="font-body-lg text-body-lg opacity-90 max-w-xl mx-auto">Book a free assessment lesson and we will confirm how your child’s subjects are weighted between internal and external assessment, and where their preparation time is best spent.</p>
          <button onClick={() => router.push('/free-trial')} className="inline-flex items-center gap-2 bg-white text-royal-purple px-8 py-4 rounded-xl font-headline-md font-bold hover:bg-soft-gray transition-all shadow-lg active:scale-95 cursor-pointer">
            Book a Free Assessment
            <ChevronRight size={20} strokeWidth={2.25} aria-hidden="true" />
          </button>
          <p className="text-white/60 font-label-md">No credit card required</p>
        </div>
      </section>
    </div>
  );
}