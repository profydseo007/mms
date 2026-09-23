'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ClipboardCheck, CheckCircle2, ChevronDown, ChevronRight, CalendarClock, Scale, BookOpen, Calculator, PenLine, Languages, TrendingUp, Gauge } from 'lucide-react';

const FAQS = [
  { q: "Can my child fail NAPLAN?", a: "No. There is no pass mark and no consequence attached to the result for the individual student. NAPLAN reports progress against national expectations and informs school and system planning. It does not affect progression to the next year, school reports or selective school entry. If your child is anxious about it, that reassurance is accurate and worth giving them plainly." },
  { q: "Why did my child say the test got harder as they went?", a: "Because it did, and that is usually a good sign. The online assessments are adaptive: as a student answers correctly, the questions presented become more demanding, which allows the test to locate their ability more precisely. A child who found it easy throughout may simply have been routed along an easier path. Comparing perceived difficulty between friends tells you nothing useful." },
  { q: "What happened to the old NAPLAN bands?", a: "Reporting changed from 2023. Results are now described using four proficiency levels rather than the ten-band scale, and the time of year moved from May to March. The two systems are not directly comparable, so placing a current report next to an older sibling\u2019s will produce a misleading picture. Read the current report on its own terms." },
  { q: "Should we do practice papers?", a: "A little, and for one reason only: familiarity with the online format. Knowing how to navigate between questions, flag items and manage an on-screen reading passage removes a genuine source of lost marks. Beyond that, extended drilling does not improve the underlying skills NAPLAN measures, and for anxious children it often makes the day worse rather than better." },
  { q: "Does NAPLAN affect selective school entry?", a: "Not in New South Wales, where placement is decided through a separate selective test. Western Australia is the notable exception to the general rule: strong Year 9 NAPLAN results can pre-qualify a student against the WACE literacy and numeracy standard, sparing them the OLNA later. That is the one place where a NAPLAN result carries a direct downstream consequence." },
  { q: "My child scored Developing. What should we do?", a: "Treat it as information rather than a verdict, then look at which domain. Developing in numeracy means something different from Developing in language conventions, and the responses are not interchangeable. The useful next step is establishing what specifically is missing, which is what a diagnostic assessment lesson does, rather than starting general tutoring and hoping it lands on the gap." },
  { q: "Is Year 9 NAPLAN worth taking seriously?", a: "More than the earlier sittings, for two reasons. It gives a reasonably honest read on whether senior mathematics is realistic, at exactly the point where subject selection is approaching. And in Western Australia it can pre-qualify a student against the WACE literacy and numeracy standard. Elsewhere it carries no formal consequence, but it is the last system-wide signal before senior schooling." },
  { q: "How long before the test should preparation start?", a: "For format familiarity, two or three weeks is ample. For an actual skills gap, NAPLAN is the wrong deadline to work to, because the assessment is a snapshot of years of learning rather than a syllabus. If a report card has already flagged a difficulty, address the difficulty; the NAPLAN result will follow." }
];

export default function AUNaplanPage() {
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
                <ClipboardCheck size={16} strokeWidth={2.25} aria-hidden="true" />
                Years 3, 5, 7 and 9 · March
              </div>
              <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-charcoal leading-tight font-bold">
                NAPLAN Preparation <span className="text-royal-purple">Online</span>
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
                Online tutors for NAPLAN preparation across Australia. The assessment moved to March and to an adaptive online format, and results are reported against proficiency levels rather than bands. Preparation should reflect what it actually measures.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button onClick={() => router.push('/free-trial')} className="bg-royal-purple text-white px-8 py-4 rounded-xl font-headline-md font-bold hover:shadow-xl transition-all cursor-pointer">Book a Free Assessment</button>
                <button onClick={() => { const el = document.getElementById('structure'); if (el) el.scrollIntoView({ behavior: 'smooth' }); }} className="border-2 border-royal-purple text-royal-purple px-8 py-4 rounded-xl font-headline-md font-bold hover:bg-royal-purple/5 transition-all cursor-pointer">See the Four Domains</button>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img className="w-full h-[440px] object-cover" alt="An Australian primary student sitting an online NAPLAN practice assessment" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBIC2148RcAcfRXxnZOcCNJC2Yr32DtyHa7d1TOD82ZBuHm5-qZ-Hfyjuic-1MLI6po5tOU8XT7FUpGqvgdHGzRwEInHX72mGWsxX-9nVAlOqT4sbH-gqYAG5YfaLbivq9Je_ZI7ity8vsit3aPnhFxzYCZ7Vd3uaU5jtItj5k130NViqjkJsMWfhwBn54qZk6DOAoC1XqgTsCbUlAYR6O8_Q9eb3Xz1j99Ujc64cOxRy0f-IOnZz3fvw" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Structure */}
      <section className="py-24 bg-soft-gray" id="structure">
        <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="text-center mb-16">
            <h2 className="font-headline-lg text-headline-lg text-charcoal font-bold mb-4">The Four NAPLAN Domains</h2>
            <p className="text-on-surface-variant font-body-md max-w-2xl mx-auto">Sat by students in Years 3, 5, 7 and 9, online and adaptively, with Year 3 writing the only component still completed on paper.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-8 rounded-[2rem] shadow-[0px_4px_20px_rgba(0,0,0,0.05)] border border-transparent hover:border-royal-purple/30 transition-all group">
              <div className="w-16 h-16 bg-primary-fixed rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <BookOpen size={30} strokeWidth={2} className="text-royal-purple" aria-hidden="true" />
              </div>
              <h3 className="font-headline-md text-headline-md text-charcoal font-bold">Reading</h3>
              <p className="font-label-md text-label-md text-royal-purple font-semibold mt-1 mb-4">All year levels</p>
              <ul className="space-y-2"><li key="Comprehension across text types" className="flex items-start gap-2 text-label-md text-on-surface-variant"><CheckCircle2 size={15} className="text-lime-green shrink-0 mt-1" aria-hidden="true" />Comprehension across text types</li><li key="Inference and interpretation" className="flex items-start gap-2 text-label-md text-on-surface-variant"><CheckCircle2 size={15} className="text-lime-green shrink-0 mt-1" aria-hidden="true" />Inference and interpretation</li><li key="Screen-based reading stamina" className="flex items-start gap-2 text-label-md text-on-surface-variant"><CheckCircle2 size={15} className="text-lime-green shrink-0 mt-1" aria-hidden="true" />Screen-based reading stamina</li></ul>
            </div>
            <div className="bg-white p-8 rounded-[2rem] shadow-[0px_4px_20px_rgba(0,0,0,0.05)] border border-transparent hover:border-royal-purple/30 transition-all group">
              <div className="w-16 h-16 bg-secondary-container rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <PenLine size={30} strokeWidth={2} className="text-secondary" aria-hidden="true" />
              </div>
              <h3 className="font-headline-md text-headline-md text-charcoal font-bold">Writing</h3>
              <p className="font-label-md text-label-md text-royal-purple font-semibold mt-1 mb-4">Narrative or persuasive</p>
              <ul className="space-y-2"><li key="One extended response" className="flex items-start gap-2 text-label-md text-on-surface-variant"><CheckCircle2 size={15} className="text-lime-green shrink-0 mt-1" aria-hidden="true" />One extended response</li><li key="Marked against a rubric" className="flex items-start gap-2 text-label-md text-on-surface-variant"><CheckCircle2 size={15} className="text-lime-green shrink-0 mt-1" aria-hidden="true" />Marked against a rubric</li><li key="Planning under time pressure" className="flex items-start gap-2 text-label-md text-on-surface-variant"><CheckCircle2 size={15} className="text-lime-green shrink-0 mt-1" aria-hidden="true" />Planning under time pressure</li></ul>
            </div>
            <div className="bg-white p-8 rounded-[2rem] shadow-[0px_4px_20px_rgba(0,0,0,0.05)] border border-transparent hover:border-royal-purple/30 transition-all group">
              <div className="w-16 h-16 bg-lime-green/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Languages size={30} strokeWidth={2} className="text-secondary" aria-hidden="true" />
              </div>
              <h3 className="font-headline-md text-headline-md text-charcoal font-bold">Language Conventions</h3>
              <p className="font-label-md text-label-md text-royal-purple font-semibold mt-1 mb-4">Spelling, grammar, punctuation</p>
              <ul className="space-y-2"><li key="Spelling in context" className="flex items-start gap-2 text-label-md text-on-surface-variant"><CheckCircle2 size={15} className="text-lime-green shrink-0 mt-1" aria-hidden="true" />Spelling in context</li><li key="Grammatical accuracy" className="flex items-start gap-2 text-label-md text-on-surface-variant"><CheckCircle2 size={15} className="text-lime-green shrink-0 mt-1" aria-hidden="true" />Grammatical accuracy</li><li key="Punctuation conventions" className="flex items-start gap-2 text-label-md text-on-surface-variant"><CheckCircle2 size={15} className="text-lime-green shrink-0 mt-1" aria-hidden="true" />Punctuation conventions</li></ul>
            </div>
            <div className="bg-white p-8 rounded-[2rem] shadow-[0px_4px_20px_rgba(0,0,0,0.05)] border border-transparent hover:border-royal-purple/30 transition-all group">
              <div className="w-16 h-16 bg-royal-purple/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Calculator size={30} strokeWidth={2} className="text-royal-purple" aria-hidden="true" />
              </div>
              <h3 className="font-headline-md text-headline-md text-charcoal font-bold">Numeracy</h3>
              <p className="font-label-md text-label-md text-royal-purple font-semibold mt-1 mb-4">Number, algebra, measurement</p>
              <ul className="space-y-2"><li key="Problem solving in context" className="flex items-start gap-2 text-label-md text-on-surface-variant"><CheckCircle2 size={15} className="text-lime-green shrink-0 mt-1" aria-hidden="true" />Problem solving in context</li><li key="Multi-step reasoning" className="flex items-start gap-2 text-label-md text-on-surface-variant"><CheckCircle2 size={15} className="text-lime-green shrink-0 mt-1" aria-hidden="true" />Multi-step reasoning</li><li key="Calculator and non-calculator items" className="flex items-start gap-2 text-label-md text-on-surface-variant"><CheckCircle2 size={15} className="text-lime-green shrink-0 mt-1" aria-hidden="true" />Calculator and non-calculator items</li></ul>
            </div>
          </div>
        </div>
      </section>

      {/* Key points */}
      <section className="py-24 bg-white">
        <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="text-center mb-16">
            <h2 className="font-headline-lg text-headline-lg text-charcoal font-bold mb-4">What NAPLAN Actually Measures</h2>
            <p className="text-on-surface-variant font-body-md max-w-2xl mx-auto">Understanding this prevents both unnecessary anxiety and misdirected preparation.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-8 bg-soft-gray rounded-2xl border border-outline-variant/30">
              <div className="w-12 h-12 rounded-xl bg-royal-purple/10 flex items-center justify-center mb-6">
                <Gauge size={22} className="text-royal-purple" aria-hidden="true" />
              </div>
              <h3 className="font-headline-md text-charcoal font-bold mb-3">It Is Diagnostic</h3>
              <p className="text-on-surface-variant font-body-md">NAPLAN reports how a student is progressing against national expectations. There is no pass mark, no consequence for the student, and no effect on school reports or entry to the following year.</p>
            </div>
            <div className="p-8 bg-soft-gray rounded-2xl border border-outline-variant/30">
              <div className="w-12 h-12 rounded-xl bg-royal-purple/10 flex items-center justify-center mb-6">
                <TrendingUp size={22} className="text-royal-purple" aria-hidden="true" />
              </div>
              <h3 className="font-headline-md text-charcoal font-bold mb-3">Adaptive by Design</h3>
              <p className="text-on-surface-variant font-body-md">The online tests adjust difficulty as a student answers, which means two children sitting the same assessment see different questions. A harder-looking test is often a sign of stronger performance.</p>
            </div>
            <div className="p-8 bg-soft-gray rounded-2xl border border-outline-variant/30">
              <div className="w-12 h-12 rounded-xl bg-royal-purple/10 flex items-center justify-center mb-6">
                <Scale size={22} className="text-royal-purple" aria-hidden="true" />
              </div>
              <h3 className="font-headline-md text-charcoal font-bold mb-3">Four Proficiency Levels</h3>
              <p className="text-on-surface-variant font-body-md">Since the 2023 reporting change, results are described against four proficiency levels rather than the ten-band scale many parents remember, and the two are not directly comparable.</p>
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
                <span>Reading the Report</span>
              </div>
              <h2 className="font-headline-lg text-headline-lg text-charcoal font-bold mb-6">Proficiency Levels, Not Bands</h2>
              <p className="text-on-surface-variant font-body-md mb-8">NAPLAN reporting changed, and the older band language still circulates widely. Comparing a current report against a sibling’s from several years ago will mislead you.</p>
              <div className="bg-white rounded-2xl p-8 border border-outline-variant/30">
                <div className="pb-4 mb-4 border-b border-outline-variant/60 last:border-0 last:pb-0 last:mb-0">
                  <p className="font-label-md text-charcoal font-semibold mb-1">Exceeding</p>
                  <p className="text-on-surface-variant font-body-md">Performance above the expectation for that year level</p>
                </div>
                <div className="pb-4 mb-4 border-b border-outline-variant/60 last:border-0 last:pb-0 last:mb-0">
                  <p className="font-label-md text-charcoal font-semibold mb-1">Strong</p>
                  <p className="text-on-surface-variant font-body-md">Performance meeting the challenging but reasonable expectation</p>
                </div>
                <div className="pb-4 mb-4 border-b border-outline-variant/60 last:border-0 last:pb-0 last:mb-0">
                  <p className="font-label-md text-charcoal font-semibold mb-1">Developing</p>
                  <p className="text-on-surface-variant font-body-md">Working towards the expectation, and likely to benefit from support</p>
                </div>
                <div className="pb-4 mb-4 border-b border-outline-variant/60 last:border-0 last:pb-0 last:mb-0">
                  <p className="font-label-md text-charcoal font-semibold mb-1">Needs additional support</p>
                  <p className="text-on-surface-variant font-body-md">Likely to need substantial help to progress</p>
                </div>
                <div className="pb-4 mb-4 border-b border-outline-variant/60 last:border-0 last:pb-0 last:mb-0">
                  <p className="font-label-md text-charcoal font-semibold mb-1">Timing</p>
                  <p className="text-on-surface-variant font-body-md">Held in March, moved forward from May so results arrive earlier in the school year</p>
                </div>
                <div className="pb-4 mb-4 border-b border-outline-variant/60 last:border-0 last:pb-0 last:mb-0">
                  <p className="font-label-md text-charcoal font-semibold mb-1">Comparability</p>
                  <p className="text-on-surface-variant font-body-md">Results from 2023 onwards are not comparable with the earlier band scale</p>
                </div>
              </div>
              <p className="text-on-surface-variant font-label-md italic mt-6">NAPLAN administration and reporting are set by ACARA and state authorities and are revised periodically. Confirm current arrangements with your child’s school.</p>
            </div>
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-royal-purple/10 text-royal-purple font-label-md text-sm font-semibold mb-6">
                <CalendarClock size={16} aria-hidden="true" />
                <span>Planning Ahead</span>
              </div>
              <h2 className="font-headline-lg text-headline-lg text-charcoal font-bold mb-6">Using the Result Well</h2>
              <p className="text-on-surface-variant font-body-md mb-8">The value of NAPLAN lies almost entirely in what you do with it afterwards.</p>
              <div className="mt-4">
                <div className="relative pl-12 pb-10 border-l-2 border-outline-variant last:border-l-0 last:pb-0">
                  <div className="absolute -left-[13px] top-0 w-6 h-6 rounded-full bg-royal-purple flex items-center justify-center">
                    <span className="text-white text-[11px] font-bold">1</span>
                  </div>
                  <h3 className="font-headline-md text-charcoal font-bold mb-2">Before the test</h3>
                  <p className="text-on-surface-variant font-body-md">A short period of format familiarisation, so the interface and question styles are not themselves the obstacle. Drilling past papers adds little beyond that.</p>
                </div>
                <div className="relative pl-12 pb-10 border-l-2 border-outline-variant last:border-l-0 last:pb-0">
                  <div className="absolute -left-[13px] top-0 w-6 h-6 rounded-full bg-royal-purple flex items-center justify-center">
                    <span className="text-white text-[11px] font-bold">2</span>
                  </div>
                  <h3 className="font-headline-md text-charcoal font-bold mb-2">March</h3>
                  <p className="text-on-surface-variant font-body-md">The assessment window. Year 3 writing is completed on paper; everything else runs online and adaptively.</p>
                </div>
                <div className="relative pl-12 pb-10 border-l-2 border-outline-variant last:border-l-0 last:pb-0">
                  <div className="absolute -left-[13px] top-0 w-6 h-6 rounded-full bg-royal-purple flex items-center justify-center">
                    <span className="text-white text-[11px] font-bold">3</span>
                  </div>
                  <h3 className="font-headline-md text-charcoal font-bold mb-2">Results</h3>
                  <p className="text-on-surface-variant font-body-md">Read the domain breakdown rather than the headline. A student can sit comfortably overall while a single domain quietly lags.</p>
                </div>
                <div className="relative pl-12 pb-10 border-l-2 border-outline-variant last:border-l-0 last:pb-0">
                  <div className="absolute -left-[13px] top-0 w-6 h-6 rounded-full bg-royal-purple flex items-center justify-center">
                    <span className="text-white text-[11px] font-bold">4</span>
                  </div>
                  <h3 className="font-headline-md text-charcoal font-bold mb-2">Acting on it</h3>
                  <p className="text-on-surface-variant font-body-md">A Developing result in numeracy at Year 5 is a genuine opportunity. The same gap discovered at Year 9 costs considerably more to close.</p>
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
            <p className="text-on-surface-variant font-body-md max-w-2xl mx-auto">What Australian parents ask us most often about NAPLAN results and preparation.</p>
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
          <h2 className="font-headline-lg text-headline-lg font-bold">Use the result, do not just receive it</h2>
          <p className="font-body-lg text-body-lg opacity-90 max-w-xl mx-auto">Book a free assessment lesson and we will read your child’s NAPLAN report with you, identify which domain actually needs work, and say plainly whether tutoring is warranted.</p>
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