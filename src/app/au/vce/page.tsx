'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { BookMarked, CheckCircle2, ChevronDown, ChevronRight, CalendarClock, Scale, Calculator, FlaskConical, BookOpen, ClipboardList, TrendingUp, Target } from 'lucide-react';

const FAQS = [
  { q: "What is a study score and how is it different from a percentage?", a: "A study score describes how a student performed in one subject relative to everyone else in Victoria who studied it, on a scale where the middle of the cohort sits around the average. It is comparative rather than absolute, which is why it cannot be read as a percentage. It is also subject-level: a strong study score in one subject does not produce a strong ATAR on its own, since the ATAR draws on several scaled scores." },
  { q: "Do SACs really matter that much?", a: "Yes, and underestimating them is the most common VCE error we see. School-Assessed Coursework contributes directly to the study score in each subject, and it accumulates from early in Unit 3. Students who plan to start working properly after the mid-year break have already given away marks they cannot recover, because internal ranking within the cohort is largely settled by then." },
  { q: "How does moderation actually work?", a: "The VCAA adjusts a school\u2019s SAC marks using how that school\u2019s cohort performed in the external examination for the subject. The school\u2019s ranking of its own students is preserved; what changes is the spread of marks. The practical implication is clear enough: a student controls their position within the cohort, not the adjustment, so protecting rank from the first SAC is what counts." },
  { q: "Should my child choose subjects that scale up?", a: "It is a popular strategy and it usually disappoints. Scaling exists precisely to account for the strength of each subject\u2019s cohort, so it is not a loophole. A strong result in a subject a student engages with generally beats a mediocre result in one chosen for its scaling reputation. Prerequisites for the intended course should drive the decision, with genuine interest a close second." },
  { q: "Do Units 1 and 2 count?", a: "Not towards the study score, which leads some students to treat them as optional. That is a costly misreading. Units 3 and 4 assume fluency built in Units 1 and 2, particularly in Mathematical Methods and the sciences, and students who coasted through the first half arrive in Unit 3 trying to learn new content on an unstable base. The marks do not count; the learning does." },
  { q: "What is the difference between Methods, Specialist and General?", a: "They lead to different places. Mathematical Methods is a prerequisite or assumed knowledge for most science, engineering, commerce and computing degrees. Specialist Mathematics sits on top of Methods for the most mathematical pathways and is normally taken alongside it. General Mathematics keeps an ATAR pathway open but closes several university doors. The choice should follow the intended degree." },
  { q: "When should VCE tutoring start?", a: "Ideally during Units 1 and 2, which is when gaps can still be closed without competing against assessed content. Starting at the beginning of Unit 3 is workable. Starting after a disappointing first SAC is common but means working uphill, since ranking is already partly established. The earlier the start, the more of the work can be genuinely remedial rather than reactive." },
  { q: "Do you match tutors to the specific study design?", a: "Yes. VCAA study designs are revised on a cycle, and outcomes, assessment structures and set texts change with them. A tutor working from a superseded study design will prepare a student for material that is no longer assessed, which is a genuine risk in subjects that have recently been updated." }
];

export default function AUVcePage() {
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
                <BookMarked size={16} strokeWidth={2.25} aria-hidden="true" />
                Victoria · Units 1 to 4
              </div>
              <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-charcoal leading-tight font-bold">
                VCE Preparation <span className="text-royal-purple">Online</span>
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
                Online tutors for VCE preparation built around VCAA study designs. School-Assessed Coursework accumulates through Units 3 and 4 and feeds the study score, so the work that decides a result starts well before the November examinations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button onClick={() => router.push('/free-trial')} className="bg-royal-purple text-white px-8 py-4 rounded-xl font-headline-md font-bold hover:shadow-xl transition-all cursor-pointer">Book a Free Assessment</button>
                <button onClick={() => { const el = document.getElementById('structure'); if (el) el.scrollIntoView({ behavior: 'smooth' }); }} className="border-2 border-royal-purple text-royal-purple px-8 py-4 rounded-xl font-headline-md font-bold hover:bg-royal-purple/5 transition-all cursor-pointer">See the Subjects</button>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img className="w-full h-[440px] object-cover" alt="A Victorian student preparing for VCE examinations online" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBIC2148RcAcfRXxnZOcCNJC2Yr32DtyHa7d1TOD82ZBuHm5-qZ-Hfyjuic-1MLI6po5tOU8XT7FUpGqvgdHGzRwEInHX72mGWsxX-9nVAlOqT4sbH-gqYAG5YfaLbivq9Je_ZI7ity8vsit3aPnhFxzYCZ7Vd3uaU5jtItj5k130NViqjkJsMWfhwBn54qZk6DOAoC1XqgTsCbUlAYR6O8_Q9eb3Xz1j99Ujc64cOxRy0f-IOnZz3fvw" />
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
            <p className="text-on-surface-variant font-body-md max-w-2xl mx-auto">Matched to the VCAA study design and the specific unit sequence your child is enrolled in.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-8 rounded-[2rem] shadow-[0px_4px_20px_rgba(0,0,0,0.05)] border border-transparent hover:border-royal-purple/30 transition-all group">
              <div className="w-16 h-16 bg-primary-fixed rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Calculator size={30} strokeWidth={2} className="text-royal-purple" aria-hidden="true" />
              </div>
              <h3 className="font-headline-md text-headline-md text-charcoal font-bold">Mathematics</h3>
              <p className="font-label-md text-label-md text-royal-purple font-semibold mt-1 mb-4">Methods, Specialist, General</p>
              <ul className="space-y-2"><li key="Mathematical Methods Units 1–4" className="flex items-start gap-2 text-label-md text-on-surface-variant"><CheckCircle2 size={15} className="text-lime-green shrink-0 mt-1" aria-hidden="true" />Mathematical Methods Units 1–4</li><li key="Specialist Mathematics" className="flex items-start gap-2 text-label-md text-on-surface-variant"><CheckCircle2 size={15} className="text-lime-green shrink-0 mt-1" aria-hidden="true" />Specialist Mathematics</li><li key="General Mathematics" className="flex items-start gap-2 text-label-md text-on-surface-variant"><CheckCircle2 size={15} className="text-lime-green shrink-0 mt-1" aria-hidden="true" />General Mathematics</li></ul>
            </div>
            <div className="bg-white p-8 rounded-[2rem] shadow-[0px_4px_20px_rgba(0,0,0,0.05)] border border-transparent hover:border-royal-purple/30 transition-all group">
              <div className="w-16 h-16 bg-secondary-container rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <BookOpen size={30} strokeWidth={2} className="text-secondary" aria-hidden="true" />
              </div>
              <h3 className="font-headline-md text-headline-md text-charcoal font-bold">English</h3>
              <p className="font-label-md text-label-md text-royal-purple font-semibold mt-1 mb-4">Compulsory for the VCE</p>
              <ul className="space-y-2"><li key="Text response and comparative" className="flex items-start gap-2 text-label-md text-on-surface-variant"><CheckCircle2 size={15} className="text-lime-green shrink-0 mt-1" aria-hidden="true" />Text response and comparative</li><li key="Argument analysis" className="flex items-start gap-2 text-label-md text-on-surface-variant"><CheckCircle2 size={15} className="text-lime-green shrink-0 mt-1" aria-hidden="true" />Argument analysis</li><li key="English Language and Literature" className="flex items-start gap-2 text-label-md text-on-surface-variant"><CheckCircle2 size={15} className="text-lime-green shrink-0 mt-1" aria-hidden="true" />English Language and Literature</li></ul>
            </div>
            <div className="bg-white p-8 rounded-[2rem] shadow-[0px_4px_20px_rgba(0,0,0,0.05)] border border-transparent hover:border-royal-purple/30 transition-all group">
              <div className="w-16 h-16 bg-lime-green/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <FlaskConical size={30} strokeWidth={2} className="text-secondary" aria-hidden="true" />
              </div>
              <h3 className="font-headline-md text-headline-md text-charcoal font-bold">Sciences</h3>
              <p className="font-label-md text-label-md text-royal-purple font-semibold mt-1 mb-4">Biology, Chemistry, Physics</p>
              <ul className="space-y-2"><li key="Units 3 and 4 outcomes" className="flex items-start gap-2 text-label-md text-on-surface-variant"><CheckCircle2 size={15} className="text-lime-green shrink-0 mt-1" aria-hidden="true" />Units 3 and 4 outcomes</li><li key="Practical investigations" className="flex items-start gap-2 text-label-md text-on-surface-variant"><CheckCircle2 size={15} className="text-lime-green shrink-0 mt-1" aria-hidden="true" />Practical investigations</li><li key="Extended response technique" className="flex items-start gap-2 text-label-md text-on-surface-variant"><CheckCircle2 size={15} className="text-lime-green shrink-0 mt-1" aria-hidden="true" />Extended response technique</li></ul>
            </div>
            <div className="bg-white p-8 rounded-[2rem] shadow-[0px_4px_20px_rgba(0,0,0,0.05)] border border-transparent hover:border-royal-purple/30 transition-all group">
              <div className="w-16 h-16 bg-royal-purple/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <ClipboardList size={30} strokeWidth={2} className="text-royal-purple" aria-hidden="true" />
              </div>
              <h3 className="font-headline-md text-headline-md text-charcoal font-bold">SAC Preparation</h3>
              <p className="font-label-md text-label-md text-royal-purple font-semibold mt-1 mb-4">Across every subject</p>
              <ul className="space-y-2"><li key="School-Assessed Coursework" className="flex items-start gap-2 text-label-md text-on-surface-variant"><CheckCircle2 size={15} className="text-lime-green shrink-0 mt-1" aria-hidden="true" />School-Assessed Coursework</li><li key="Internal ranking within the cohort" className="flex items-start gap-2 text-label-md text-on-surface-variant"><CheckCircle2 size={15} className="text-lime-green shrink-0 mt-1" aria-hidden="true" />Internal ranking within the cohort</li><li key="Timed task technique" className="flex items-start gap-2 text-label-md text-on-surface-variant"><CheckCircle2 size={15} className="text-lime-green shrink-0 mt-1" aria-hidden="true" />Timed task technique</li></ul>
            </div>
          </div>
        </div>
      </section>

      {/* Key points */}
      <section className="py-24 bg-white">
        <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="text-center mb-16">
            <h2 className="font-headline-lg text-headline-lg text-charcoal font-bold mb-4">How a Study Score Is Built</h2>
            <p className="text-on-surface-variant font-body-md max-w-2xl mx-auto">Three mechanisms decide a VCE result, and only one of them happens in November.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-8 bg-soft-gray rounded-2xl border border-outline-variant/30">
              <div className="w-12 h-12 rounded-xl bg-royal-purple/10 flex items-center justify-center mb-6">
                <ClipboardList size={22} className="text-royal-purple" aria-hidden="true" />
              </div>
              <h3 className="font-headline-md text-charcoal font-bold mb-3">SACs Count Through the Year</h3>
              <p className="text-on-surface-variant font-body-md">School-Assessed Coursework contributes to the study score in each subject. Students who treat SACs as practice for the real thing have misunderstood which part is the real thing.</p>
            </div>
            <div className="p-8 bg-soft-gray rounded-2xl border border-outline-variant/30">
              <div className="w-12 h-12 rounded-xl bg-royal-purple/10 flex items-center justify-center mb-6">
                <Target size={22} className="text-royal-purple" aria-hidden="true" />
              </div>
              <h3 className="font-headline-md text-charcoal font-bold mb-3">Ranking Drives Moderation</h3>
              <p className="text-on-surface-variant font-body-md">A school’s SAC marks are moderated against the cohort’s external examination performance. The school’s ranking of students is preserved, so internal position is what a student controls.</p>
            </div>
            <div className="p-8 bg-soft-gray rounded-2xl border border-outline-variant/30">
              <div className="w-12 h-12 rounded-xl bg-royal-purple/10 flex items-center justify-center mb-6">
                <TrendingUp size={22} className="text-royal-purple" aria-hidden="true" />
              </div>
              <h3 className="font-headline-md text-charcoal font-bold mb-3">Scaling Comes Afterwards</h3>
              <p className="text-on-surface-variant font-body-md">Study scores are scaled by VTAC before contributing to an ATAR, which is why choosing subjects on perceived difficulty is unreliable and prerequisites matter more.</p>
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
                <span>Understanding the Study Score</span>
              </div>
              <h2 className="font-headline-lg text-headline-lg text-charcoal font-bold mb-6">A Subject-Level Result, Not an Overall One</h2>
              <p className="text-on-surface-variant font-body-md mb-8">The study score describes performance in one subject relative to everyone who studied it. The ATAR is assembled from several scaled study scores afterwards, which is why balance across subjects matters more than a single standout.</p>
              <div className="bg-white rounded-2xl p-8 border border-outline-variant/30">
                <div className="pb-4 mb-4 border-b border-outline-variant/60 last:border-0 last:pb-0 last:mb-0">
                  <p className="font-label-md text-charcoal font-semibold mb-1">Study score</p>
                  <p className="text-on-surface-variant font-body-md">Reported per subject, describing performance relative to the state cohort</p>
                </div>
                <div className="pb-4 mb-4 border-b border-outline-variant/60 last:border-0 last:pb-0 last:mb-0">
                  <p className="font-label-md text-charcoal font-semibold mb-1">Graded assessments</p>
                  <p className="text-on-surface-variant font-body-md">SACs and examinations combine to produce the study score</p>
                </div>
                <div className="pb-4 mb-4 border-b border-outline-variant/60 last:border-0 last:pb-0 last:mb-0">
                  <p className="font-label-md text-charcoal font-semibold mb-1">Moderation</p>
                  <p className="text-on-surface-variant font-body-md">SAC marks adjusted against cohort examination performance; school ranking preserved</p>
                </div>
                <div className="pb-4 mb-4 border-b border-outline-variant/60 last:border-0 last:pb-0 last:mb-0">
                  <p className="font-label-md text-charcoal font-semibold mb-1">Units 1 and 2</p>
                  <p className="text-on-surface-variant font-body-md">Foundational, and not directly contributing to the study score</p>
                </div>
                <div className="pb-4 mb-4 border-b border-outline-variant/60 last:border-0 last:pb-0 last:mb-0">
                  <p className="font-label-md text-charcoal font-semibold mb-1">Units 3 and 4</p>
                  <p className="text-on-surface-variant font-body-md">The sequence that counts, taken together across the year</p>
                </div>
                <div className="pb-4 mb-4 border-b border-outline-variant/60 last:border-0 last:pb-0 last:mb-0">
                  <p className="font-label-md text-charcoal font-semibold mb-1">ATAR</p>
                  <p className="text-on-surface-variant font-body-md">Calculated by VTAC from scaled study scores across a set number of subjects</p>
                </div>
              </div>
              <p className="text-on-surface-variant font-label-md italic mt-6">Study designs, assessment structures and scaling are set by the VCAA and VTAC and are revised periodically. Confirm current details with your child’s school.</p>
            </div>
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-royal-purple/10 text-royal-purple font-label-md text-sm font-semibold mb-6">
                <CalendarClock size={16} aria-hidden="true" />
                <span>Planning Ahead</span>
              </div>
              <h2 className="font-headline-lg text-headline-lg text-charcoal font-bold mb-6">The VCE Year</h2>
              <p className="text-on-surface-variant font-body-md mb-8">Units 3 and 4 run as a sequence, and the first SAC lands earlier than most families expect.</p>
              <div className="mt-4">
                <div className="relative pl-12 pb-10 border-l-2 border-outline-variant last:border-l-0 last:pb-0">
                  <div className="absolute -left-[13px] top-0 w-6 h-6 rounded-full bg-royal-purple flex items-center justify-center">
                    <span className="text-white text-[11px] font-bold">1</span>
                  </div>
                  <h3 className="font-headline-md text-charcoal font-bold mb-2">Units 1 and 2</h3>
                  <p className="text-on-surface-variant font-body-md">Do not count towards the study score, but establish the fluency Units 3 and 4 assume. Coasting here is the most common avoidable mistake in the VCE.</p>
                </div>
                <div className="relative pl-12 pb-10 border-l-2 border-outline-variant last:border-l-0 last:pb-0">
                  <div className="absolute -left-[13px] top-0 w-6 h-6 rounded-full bg-royal-purple flex items-center justify-center">
                    <span className="text-white text-[11px] font-bold">2</span>
                  </div>
                  <h3 className="font-headline-md text-charcoal font-bold mb-2">Unit 3, Term 1</h3>
                  <p className="text-on-surface-variant font-body-md">SACs begin almost immediately. An early weak result is difficult to offset later because ranking within the cohort is established quickly.</p>
                </div>
                <div className="relative pl-12 pb-10 border-l-2 border-outline-variant last:border-l-0 last:pb-0">
                  <div className="absolute -left-[13px] top-0 w-6 h-6 rounded-full bg-royal-purple flex items-center justify-center">
                    <span className="text-white text-[11px] font-bold">3</span>
                  </div>
                  <h3 className="font-headline-md text-charcoal font-bold mb-2">Unit 4, mid-year</h3>
                  <p className="text-on-surface-variant font-body-md">Content continues while SACs accumulate. Balancing both is the actual skill Year 12 tests.</p>
                </div>
                <div className="relative pl-12 pb-10 border-l-2 border-outline-variant last:border-l-0 last:pb-0">
                  <div className="absolute -left-[13px] top-0 w-6 h-6 rounded-full bg-royal-purple flex items-center justify-center">
                    <span className="text-white text-[11px] font-bold">4</span>
                  </div>
                  <h3 className="font-headline-md text-charcoal font-bold mb-2">October and November</h3>
                  <p className="text-on-surface-variant font-body-md">End-of-year examinations, then study scores and the ATAR. By this point most of the outcome is already determined.</p>
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
            <p className="text-on-surface-variant font-body-md max-w-2xl mx-auto">What Victorian families ask us most often about study scores, SACs and scaling.</p>
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
          <h2 className="font-headline-lg text-headline-lg font-bold">The SACs have already started counting</h2>
          <p className="font-body-lg text-body-lg opacity-90 max-w-xl mx-auto">Book a free assessment lesson and we will establish where your child sits in their cohort, which outcomes are weakest, and what would most improve the study score.</p>
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