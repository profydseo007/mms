'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Trophy, CheckCircle2, ChevronDown, ChevronRight, CalendarClock, Scale, BookOpen, Calculator, Brain, Keyboard, Monitor, Percent } from 'lucide-react';

const FAQS = [
  { q: "What score does my child need for a particular school?", a: "Nobody outside the Department can tell you, because individual scores and placement ranks are not released to families and no official cut-offs are published. What you receive is a band per component. Any figure quoted online as the mark required for a named school is an estimate built from anecdote, not an official threshold, and should be read that way." },
  { q: "Has the weighting really changed?", a: "Yes, and it is the most consequential change for preparation. All four components now contribute equally at 25 per cent each. Previous schemes gave Thinking Skills greater weight and Writing considerably less, which shaped a generation of tutoring advice. Families still following that advice are underinvesting in a quarter of the test." },
  { q: "Does typing speed actually matter?", a: "It does now, because the Writing task is typed rather than handwritten. A student who composes well but types slowly will produce a shorter, thinner response than their ability warrants, and human markers assess idea development, structure, vocabulary and grammar on what is actually on the page. Typing practice is unglamorous preparation that reliably protects marks." },
  { q: "Can Thinking Skills be prepared for at all?", a: "Yes, though not by memorising content, since the section assumes no subject knowledge. It rewards pattern recognition, logical deduction and working quickly through abstract material, and all three improve measurably with structured practice. Students who meet abstract reasoning items for the first time on test day almost always underperform relative to their ability." },
  { q: "How much does the school assessment contribute?", a: "A moderated school component sits alongside the test results in the placement calculation, but the redesign substantially reduced its influence compared with the older system. The test itself now does most of the work. Students without a school assessment mark have their test results rescaled so they are not disadvantaged." },
  { q: "Can students from outside New South Wales apply?", a: "Eligibility rests on Year 6 enrolment and residency or citizenship criteria rather than school sector, so students from government, Catholic, independent and home-schooling backgrounds all apply. The practical constraint is that the test is sat in New South Wales, so interstate and overseas applicants must travel to sit it, and a placement means living within reach of the school." },
  { q: "What if my child does not receive an offer?", a: "It is the common outcome, given the number of applicants against available places, and it is worth framing that way beforehand. Reserve offers continue for some time after the initial round. Other routes include applying for entry in a later year, independent school scholarship testing, or a selective stream at a partially selective school. None of it reflects on the child." },
  { q: "When should preparation begin?", a: "Year 5 for the underlying skills, Term 1 of Year 6 for format familiarity. The distinction matters: reading comprehension and mathematical reasoning develop over months, while navigating a digital test and typing an essay under time pressure can be learned in weeks. Families who reverse that order tend to arrive well-drilled and under-prepared." }
];

export default function AUSelectiveTestPage() {
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
                <Trophy size={16} strokeWidth={2.25} aria-hidden="true" />
                Year 6 entry · Computer-based
              </div>
              <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-charcoal leading-tight font-bold">
                Selective School Test <span className="text-royal-purple">Preparation Online</span>
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
                Online tutors for selective school test preparation. The New South Wales placement test is now fully computer-based with all four components equally weighted, which has changed what effective preparation looks like.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button onClick={() => router.push('/free-trial')} className="bg-royal-purple text-white px-8 py-4 rounded-xl font-headline-md font-bold hover:shadow-xl transition-all cursor-pointer">Book a Free Assessment</button>
                <button onClick={() => { const el = document.getElementById('structure'); if (el) el.scrollIntoView({ behavior: 'smooth' }); }} className="border-2 border-royal-purple text-royal-purple px-8 py-4 rounded-xl font-headline-md font-bold hover:bg-royal-purple/5 transition-all cursor-pointer">See the Four Components</button>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img className="w-full h-[440px] object-cover" alt="A Year 6 student preparing for the selective high school placement test online" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBIC2148RcAcfRXxnZOcCNJC2Yr32DtyHa7d1TOD82ZBuHm5-qZ-Hfyjuic-1MLI6po5tOU8XT7FUpGqvgdHGzRwEInHX72mGWsxX-9nVAlOqT4sbH-gqYAG5YfaLbivq9Je_ZI7ity8vsit3aPnhFxzYCZ7Vd3uaU5jtItj5k130NViqjkJsMWfhwBn54qZk6DOAoC1XqgTsCbUlAYR6O8_Q9eb3Xz1j99Ujc64cOxRy0f-IOnZz3fvw" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Structure */}
      <section className="py-24 bg-soft-gray" id="structure">
        <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="text-center mb-16">
            <h2 className="font-headline-lg text-headline-lg text-charcoal font-bold mb-4">The Four Components</h2>
            <p className="text-on-surface-variant font-body-md max-w-2xl mx-auto">Sat in Year 6 at designated test centres on department-supplied computers, with all four sections completed in one sitting.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-8 rounded-[2rem] shadow-[0px_4px_20px_rgba(0,0,0,0.05)] border border-transparent hover:border-royal-purple/30 transition-all group">
              <div className="w-16 h-16 bg-primary-fixed rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <BookOpen size={30} strokeWidth={2} className="text-royal-purple" aria-hidden="true" />
              </div>
              <h3 className="font-headline-md text-headline-md text-charcoal font-bold">Reading</h3>
              <p className="font-label-md text-label-md text-royal-purple font-semibold mt-1 mb-4">25% of the test</p>
              <ul className="space-y-2"><li key="Comprehension across text types" className="flex items-start gap-2 text-label-md text-on-surface-variant"><CheckCircle2 size={15} className="text-lime-green shrink-0 mt-1" aria-hidden="true" />Comprehension across text types</li><li key="Vocabulary cloze items" className="flex items-start gap-2 text-label-md text-on-surface-variant"><CheckCircle2 size={15} className="text-lime-green shrink-0 mt-1" aria-hidden="true" />Vocabulary cloze items</li><li key="On-screen scrolling passages" className="flex items-start gap-2 text-label-md text-on-surface-variant"><CheckCircle2 size={15} className="text-lime-green shrink-0 mt-1" aria-hidden="true" />On-screen scrolling passages</li></ul>
            </div>
            <div className="bg-white p-8 rounded-[2rem] shadow-[0px_4px_20px_rgba(0,0,0,0.05)] border border-transparent hover:border-royal-purple/30 transition-all group">
              <div className="w-16 h-16 bg-secondary-container rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Calculator size={30} strokeWidth={2} className="text-secondary" aria-hidden="true" />
              </div>
              <h3 className="font-headline-md text-headline-md text-charcoal font-bold">Mathematical Reasoning</h3>
              <p className="font-label-md text-label-md text-royal-purple font-semibold mt-1 mb-4">25% of the test</p>
              <ul className="space-y-2"><li key="Multi-step problem solving" className="flex items-start gap-2 text-label-md text-on-surface-variant"><CheckCircle2 size={15} className="text-lime-green shrink-0 mt-1" aria-hidden="true" />Multi-step problem solving</li><li key="Applied reasoning" className="flex items-start gap-2 text-label-md text-on-surface-variant"><CheckCircle2 size={15} className="text-lime-green shrink-0 mt-1" aria-hidden="true" />Applied reasoning</li><li key="Speed under time pressure" className="flex items-start gap-2 text-label-md text-on-surface-variant"><CheckCircle2 size={15} className="text-lime-green shrink-0 mt-1" aria-hidden="true" />Speed under time pressure</li></ul>
            </div>
            <div className="bg-white p-8 rounded-[2rem] shadow-[0px_4px_20px_rgba(0,0,0,0.05)] border border-transparent hover:border-royal-purple/30 transition-all group">
              <div className="w-16 h-16 bg-lime-green/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Brain size={30} strokeWidth={2} className="text-secondary" aria-hidden="true" />
              </div>
              <h3 className="font-headline-md text-headline-md text-charcoal font-bold">Thinking Skills</h3>
              <p className="font-label-md text-label-md text-royal-purple font-semibold mt-1 mb-4">25% of the test</p>
              <ul className="space-y-2"><li key="Verbal and logical reasoning" className="flex items-start gap-2 text-label-md text-on-surface-variant"><CheckCircle2 size={15} className="text-lime-green shrink-0 mt-1" aria-hidden="true" />Verbal and logical reasoning</li><li key="Abstract and non-verbal items" className="flex items-start gap-2 text-label-md text-on-surface-variant"><CheckCircle2 size={15} className="text-lime-green shrink-0 mt-1" aria-hidden="true" />Abstract and non-verbal items</li><li key="No prior subject knowledge needed" className="flex items-start gap-2 text-label-md text-on-surface-variant"><CheckCircle2 size={15} className="text-lime-green shrink-0 mt-1" aria-hidden="true" />No prior subject knowledge needed</li></ul>
            </div>
            <div className="bg-white p-8 rounded-[2rem] shadow-[0px_4px_20px_rgba(0,0,0,0.05)] border border-transparent hover:border-royal-purple/30 transition-all group">
              <div className="w-16 h-16 bg-royal-purple/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Keyboard size={30} strokeWidth={2} className="text-royal-purple" aria-hidden="true" />
              </div>
              <h3 className="font-headline-md text-headline-md text-charcoal font-bold">Writing</h3>
              <p className="font-label-md text-label-md text-royal-purple font-semibold mt-1 mb-4">25% of the test</p>
              <ul className="space-y-2"><li key="One typed extended response" className="flex items-start gap-2 text-label-md text-on-surface-variant"><CheckCircle2 size={15} className="text-lime-green shrink-0 mt-1" aria-hidden="true" />One typed extended response</li><li key="Marked by human assessors" className="flex items-start gap-2 text-label-md text-on-surface-variant"><CheckCircle2 size={15} className="text-lime-green shrink-0 mt-1" aria-hidden="true" />Marked by human assessors</li><li key="Idea development and structure" className="flex items-start gap-2 text-label-md text-on-surface-variant"><CheckCircle2 size={15} className="text-lime-green shrink-0 mt-1" aria-hidden="true" />Idea development and structure</li></ul>
            </div>
          </div>
        </div>
      </section>

      {/* Key points */}
      <section className="py-24 bg-white">
        <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="text-center mb-16">
            <h2 className="font-headline-lg text-headline-lg text-charcoal font-bold mb-4">What Changed, and Why It Matters</h2>
            <p className="text-on-surface-variant font-body-md max-w-2xl mx-auto">The test was redesigned, and preparation strategies built around the older format now misallocate effort.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-8 bg-soft-gray rounded-2xl border border-outline-variant/30">
              <div className="w-12 h-12 rounded-xl bg-royal-purple/10 flex items-center justify-center mb-6">
                <Percent size={22} className="text-royal-purple" aria-hidden="true" />
              </div>
              <h3 className="font-headline-md text-charcoal font-bold mb-3">Writing Now Carries Equal Weight</h3>
              <p className="text-on-surface-variant font-body-md">All four components contribute 25 per cent. Under earlier schemes Thinking Skills carried more and Writing less, so families who deprioritise Writing are working from outdated advice.</p>
            </div>
            <div className="p-8 bg-soft-gray rounded-2xl border border-outline-variant/30">
              <div className="w-12 h-12 rounded-xl bg-royal-purple/10 flex items-center justify-center mb-6">
                <Monitor size={22} className="text-royal-purple" aria-hidden="true" />
              </div>
              <h3 className="font-headline-md text-charcoal font-bold mb-3">Fully Computer-Based</h3>
              <p className="text-on-surface-variant font-body-md">Delivered digitally at external test centres on supplied devices. Reading passages scroll on screen, and navigating between text and questions is a skill in itself.</p>
            </div>
            <div className="p-8 bg-soft-gray rounded-2xl border border-outline-variant/30">
              <div className="w-12 h-12 rounded-xl bg-royal-purple/10 flex items-center justify-center mb-6">
                <Keyboard size={22} className="text-royal-purple" aria-hidden="true" />
              </div>
              <h3 className="font-headline-md text-charcoal font-bold mb-3">The Writing Task Is Typed</h3>
              <p className="text-on-surface-variant font-body-md">Handwriting speed no longer matters; typing speed does. A child who composes fluently by hand but hunts for keys will lose marks that have nothing to do with their writing ability.</p>
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
                <span>How Placement Works</span>
              </div>
              <h2 className="font-headline-lg text-headline-lg text-charcoal font-bold mb-6">Bands, Not Scores</h2>
              <p className="text-on-surface-variant font-body-md mb-8">Families are not given a mark or a rank, which surprises almost everyone and makes third-party claims about required scores worth treating sceptically.</p>
              <div className="bg-white rounded-2xl p-8 border border-outline-variant/30">
                <div className="pb-4 mb-4 border-b border-outline-variant/60 last:border-0 last:pb-0 last:mb-0">
                  <p className="font-label-md text-charcoal font-semibold mb-1">What you receive</p>
                  <p className="text-on-surface-variant font-body-md">A band per component: top 10 per cent, next 15, next 25, or lowest 50</p>
                </div>
                <div className="pb-4 mb-4 border-b border-outline-variant/60 last:border-0 last:pb-0 last:mb-0">
                  <p className="font-label-md text-charcoal font-semibold mb-1">What you do not receive</p>
                  <p className="text-on-surface-variant font-body-md">An exact score, a placement rank, or an official cut-off for any school</p>
                </div>
                <div className="pb-4 mb-4 border-b border-outline-variant/60 last:border-0 last:pb-0 last:mb-0">
                  <p className="font-label-md text-charcoal font-semibold mb-1">Placement score</p>
                  <p className="text-on-surface-variant font-body-md">Combines the scaled test components with a moderated school assessment contribution</p>
                </div>
                <div className="pb-4 mb-4 border-b border-outline-variant/60 last:border-0 last:pb-0 last:mb-0">
                  <p className="font-label-md text-charcoal font-semibold mb-1">Preferences</p>
                  <p className="text-on-surface-variant font-body-md">Families nominate schools in order; one offer is made against the highest qualifying preference</p>
                </div>
                <div className="pb-4 mb-4 border-b border-outline-variant/60 last:border-0 last:pb-0 last:mb-0">
                  <p className="font-label-md text-charcoal font-semibold mb-1">Where it is sat</p>
                  <p className="text-on-surface-variant font-body-md">Designated test centres in New South Wales, on department-provided computers</p>
                </div>
                <div className="pb-4 mb-4 border-b border-outline-variant/60 last:border-0 last:pb-0 last:mb-0">
                  <p className="font-label-md text-charcoal font-semibold mb-1">Competition</p>
                  <p className="text-on-surface-variant font-body-md">Roughly 4,000 Year 7 places against a far larger field of applicants</p>
                </div>
              </div>
              <p className="text-on-surface-variant font-label-md italic mt-6">Test structure, weighting and placement processes are set by the NSW Department of Education and are revised periodically. Anyone quoting an exact score required for a named school is estimating rather than citing.</p>
            </div>
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-royal-purple/10 text-royal-purple font-label-md text-sm font-semibold mb-6">
                <CalendarClock size={16} aria-hidden="true" />
                <span>Planning Ahead</span>
              </div>
              <h2 className="font-headline-lg text-headline-lg text-charcoal font-bold mb-6">A Year 5 to Year 6 Project</h2>
              <p className="text-on-surface-variant font-body-md mb-8">Preparation compressed into the final term rarely produces the reasoning fluency the test rewards.</p>
              <div className="mt-4">
                <div className="relative pl-12 pb-10 border-l-2 border-outline-variant last:border-l-0 last:pb-0">
                  <div className="absolute -left-[13px] top-0 w-6 h-6 rounded-full bg-royal-purple flex items-center justify-center">
                    <span className="text-white text-[11px] font-bold">1</span>
                  </div>
                  <h3 className="font-headline-md text-charcoal font-bold mb-2">Year 5</h3>
                  <p className="text-on-surface-variant font-body-md">Build reading volume and mathematical fluency. Thinking Skills rewards reasoning that develops slowly, and cannot be crammed in a term.</p>
                </div>
                <div className="relative pl-12 pb-10 border-l-2 border-outline-variant last:border-l-0 last:pb-0">
                  <div className="absolute -left-[13px] top-0 w-6 h-6 rounded-full bg-royal-purple flex items-center justify-center">
                    <span className="text-white text-[11px] font-bold">2</span>
                  </div>
                  <h3 className="font-headline-md text-charcoal font-bold mb-2">Early Year 6</h3>
                  <p className="text-on-surface-variant font-body-md">Applications open and close months before the test. Missing the deadline ends the process regardless of ability.</p>
                </div>
                <div className="relative pl-12 pb-10 border-l-2 border-outline-variant last:border-l-0 last:pb-0">
                  <div className="absolute -left-[13px] top-0 w-6 h-6 rounded-full bg-royal-purple flex items-center justify-center">
                    <span className="text-white text-[11px] font-bold">3</span>
                  </div>
                  <h3 className="font-headline-md text-charcoal font-bold mb-2">Term 1</h3>
                  <p className="text-on-surface-variant font-body-md">Format familiarisation on the official practice materials, including typing practice for the Writing component.</p>
                </div>
                <div className="relative pl-12 pb-10 border-l-2 border-outline-variant last:border-l-0 last:pb-0">
                  <div className="absolute -left-[13px] top-0 w-6 h-6 rounded-full bg-royal-purple flex items-center justify-center">
                    <span className="text-white text-[11px] font-bold">4</span>
                  </div>
                  <h3 className="font-headline-md text-charcoal font-bold mb-2">Test day</h3>
                  <p className="text-on-surface-variant font-body-md">All four components in one sitting at a designated centre. Outcomes follow several months later, with an appeals window afterwards.</p>
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
            <p className="text-on-surface-variant font-body-md max-w-2xl mx-auto">What families ask us most often about selective placement and preparation.</p>
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
          <h2 className="font-headline-lg text-headline-lg font-bold">Prepare for the test as it is now</h2>
          <p className="font-body-lg text-body-lg opacity-90 max-w-xl mx-auto">Book a free assessment lesson and we will show you where your child currently sits across all four components, including the one most families neglect.</p>
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