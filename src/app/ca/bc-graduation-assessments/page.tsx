'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { BookMarked, CheckCircle2, ChevronDown, ChevronRight, CalendarClock, Scale, Calculator, PenLine, Repeat, Lightbulb } from 'lucide-react';

const FAQS = [
  { q: "What happens if my child does not do well on a graduation assessment?", a: "They can write it again. Because these assessments are not attached to a course, a retake does not involve repeating a class or losing credits. The important point is that a second attempt without different preparation usually produces a similar result, since the assessment tests applied reasoning rather than recalled content. Understanding why the first attempt went the way it did is the part that changes the outcome." },
  { q: "How do you prepare for something with no textbook?", a: "By practising the thinking rather than memorising material. Numeracy 10 asks students to interpret a situation, choose an approach, work it through, analyse the result and explain the reasoning. Each of those is a trainable skill. Most students who struggle are not short of mathematical knowledge; they are unused to being asked to justify a decision in writing, and that improves quickly with practice." },
  { q: "Is Numeracy 10 a maths test?", a: "Not in the way students expect. It draws on mathematical thinking developed from Kindergarten onward and presents it through real-world problems, rather than testing a Grade 10 course. Students who are strong at procedural mathematics sometimes find it harder than expected, because the challenge lies in deciding what to do rather than in executing a method once chosen." },
  { q: "Why is there a literacy assessment in both Grade 10 and Grade 12?", a: "They sit at different stages and set different expectations. The Grade 10 assessment establishes literacy proficiency partway through the graduation programme; the Grade 12 assessment does so in the graduating year, with more demanding texts and extended response. Both are graduation requirements, and completing one does not remove the need for the other." },
  { q: "Do these assessments affect university admission?", a: "BC universities admit primarily on Grade 12 course marks rather than on graduation assessment results. Their relevance to admission is indirect but real: they are required to graduate, and graduation is required to take up an offer. Treat them as a gate to clear rather than a score to maximise." },
  { q: "What is the proficiency scale, and what should we aim for?", a: "Results are reported across four levels rather than as a percentage, running from Emerging through to Extending. Parents used to numerical marks often find this unhelpfully vague. The practical translation is that the middle levels indicate a student is meeting expectations, and the aim is to complete the requirement comfortably rather than to chase the top band for its own sake." },
  { q: "When should preparation begin?", a: "For most students, a few weeks of familiarisation in Grade 10 is proportionate. Where numeracy has been a persistent difficulty, earlier is considerably better, because the assessment draws on reasoning built up over many years and that cannot be assembled in a fortnight. Grade 8 and 9 is the comfortable window for that work." },
  { q: "Does the Foundation Skills Assessment matter for graduation?", a: "No. The FSA is written in Grades 4 and 7 and provides an early system-level picture of reading, writing and numeracy. It carries no graduation consequence and no individual stakes. It is useful to parents as an early signal, and that is all it is intended to be." }
];

export default function CABcGraduationPage() {
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
                British Columbia · Grades 10 and 12
              </div>
              <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-charcoal leading-tight font-bold">
                BC Graduation Assessment <span className="text-royal-purple">Preparation Online</span>
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
                Online tutors for BC Graduation Assessment preparation. Numeracy and literacy are assessed separately from any single course, and completing them is required to graduate under the B.C. Graduation Program.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button onClick={() => router.push('/free-trial')} className="bg-royal-purple text-white px-8 py-4 rounded-xl font-headline-md font-bold hover:shadow-xl transition-all cursor-pointer">Book a Free Assessment</button>
                <button onClick={() => { const el = document.getElementById('structure'); if (el) el.scrollIntoView({ behavior: 'smooth' }); }} className="border-2 border-royal-purple text-royal-purple px-8 py-4 rounded-xl font-headline-md font-bold hover:bg-royal-purple/5 transition-all cursor-pointer">See the Three Assessments</button>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img className="w-full h-[440px] object-cover" alt="A British Columbia student preparing for graduation assessments online" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBIC2148RcAcfRXxnZOcCNJC2Yr32DtyHa7d1TOD82ZBuHm5-qZ-Hfyjuic-1MLI6po5tOU8XT7FUpGqvgdHGzRwEInHX72mGWsxX-9nVAlOqT4sbH-gqYAG5YfaLbivq9Je_ZI7ity8vsit3aPnhFxzYCZ7Vd3uaU5jtItj5k130NViqjkJsMWfhwBn54qZk6DOAoC1XqgTsCbUlAYR6O8_Q9eb3Xz1j99Ujc64cOxRy0f-IOnZz3fvw" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Structure */}
      <section className="py-24 bg-soft-gray" id="structure">
        <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="text-center mb-16">
            <h2 className="font-headline-lg text-headline-lg text-charcoal font-bold mb-4">The Three Graduation Assessments</h2>
            <p className="text-on-surface-variant font-body-md max-w-2xl mx-auto">Sat outside individual courses, and required for graduation rather than contributing to a course grade.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-8 bg-white rounded-2xl shadow-[0px_4px_20px_rgba(0,0,0,0.05)] border border-transparent hover:border-royal-purple/20 transition-all group">
              <div className="w-14 h-14 bg-primary-fixed rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Calculator size={26} strokeWidth={2} className="text-royal-purple" aria-hidden="true" />
              </div>
              <h3 className="font-headline-md text-charcoal font-bold mb-1">Numeracy 10</h3>
              <p className="text-label-sm text-royal-purple font-semibold mb-4">Grade 10 · Graduation requirement</p>
              <ul className="space-y-2"><li key="Applied problem solving" className="flex items-start gap-2 text-label-md text-on-surface-variant"><CheckCircle2 size={15} className="text-lime-green shrink-0 mt-1" aria-hidden="true" />Applied problem solving</li><li key="Interpret, apply, solve, analyse, communicate" className="flex items-start gap-2 text-label-md text-on-surface-variant"><CheckCircle2 size={15} className="text-lime-green shrink-0 mt-1" aria-hidden="true" />Interpret, apply, solve, analyse, communicate</li><li key="Draws on learning from K to Grade 10" className="flex items-start gap-2 text-label-md text-on-surface-variant"><CheckCircle2 size={15} className="text-lime-green shrink-0 mt-1" aria-hidden="true" />Draws on learning from K to Grade 10</li></ul>
            </div>
            <div className="p-8 bg-white rounded-2xl shadow-[0px_4px_20px_rgba(0,0,0,0.05)] border border-transparent hover:border-royal-purple/20 transition-all group">
              <div className="w-14 h-14 bg-secondary-container rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <PenLine size={26} strokeWidth={2} className="text-secondary" aria-hidden="true" />
              </div>
              <h3 className="font-headline-md text-charcoal font-bold mb-1">Literacy 10</h3>
              <p className="text-label-sm text-royal-purple font-semibold mb-4">Grade 10 · Graduation requirement</p>
              <ul className="space-y-2"><li key="Comprehension across texts" className="flex items-start gap-2 text-label-md text-on-surface-variant"><CheckCircle2 size={15} className="text-lime-green shrink-0 mt-1" aria-hidden="true" />Comprehension across texts</li><li key="Constructing written response" className="flex items-start gap-2 text-label-md text-on-surface-variant"><CheckCircle2 size={15} className="text-lime-green shrink-0 mt-1" aria-hidden="true" />Constructing written response</li><li key="Communicating ideas clearly" className="flex items-start gap-2 text-label-md text-on-surface-variant"><CheckCircle2 size={15} className="text-lime-green shrink-0 mt-1" aria-hidden="true" />Communicating ideas clearly</li></ul>
            </div>
            <div className="p-8 bg-white rounded-2xl shadow-[0px_4px_20px_rgba(0,0,0,0.05)] border border-transparent hover:border-royal-purple/20 transition-all group">
              <div className="w-14 h-14 bg-lime-green/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <BookMarked size={26} strokeWidth={2} className="text-secondary" aria-hidden="true" />
              </div>
              <h3 className="font-headline-md text-charcoal font-bold mb-1">Literacy 12</h3>
              <p className="text-label-sm text-royal-purple font-semibold mb-4">Grade 12 · Graduation requirement</p>
              <ul className="space-y-2"><li key="Extended text analysis" className="flex items-start gap-2 text-label-md text-on-surface-variant"><CheckCircle2 size={15} className="text-lime-green shrink-0 mt-1" aria-hidden="true" />Extended text analysis</li><li key="Higher-level written response" className="flex items-start gap-2 text-label-md text-on-surface-variant"><CheckCircle2 size={15} className="text-lime-green shrink-0 mt-1" aria-hidden="true" />Higher-level written response</li><li key="Completed in the graduating year" className="flex items-start gap-2 text-label-md text-on-surface-variant"><CheckCircle2 size={15} className="text-lime-green shrink-0 mt-1" aria-hidden="true" />Completed in the graduating year</li></ul>
            </div>
          </div>
        </div>
      </section>

      {/* Key points */}
      <section className="py-24 bg-white">
        <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="text-center mb-16">
            <h2 className="font-headline-lg text-headline-lg text-charcoal font-bold mb-4">Why These Assessments Surprise Strong Students</h2>
            <p className="text-on-surface-variant font-body-md max-w-2xl mx-auto">They do not test a syllabus, which is exactly why revising a textbook does not help.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-8 bg-soft-gray rounded-2xl border border-outline-variant/30">
              <div className="w-12 h-12 rounded-xl bg-royal-purple/10 flex items-center justify-center mb-6">
                <Lightbulb size={22} className="text-royal-purple" aria-hidden="true" />
              </div>
              <h3 className="font-headline-md text-charcoal font-bold mb-3">Cross-Curricular by Design</h3>
              <p className="text-on-surface-variant font-body-md">Numeracy 10 draws on mathematical thinking developed from Kindergarten onward and presents it in real-world contexts. There is no single course to revise, which unsettles students used to studying a unit.</p>
            </div>
            <div className="p-8 bg-soft-gray rounded-2xl border border-outline-variant/30">
              <div className="w-12 h-12 rounded-xl bg-royal-purple/10 flex items-center justify-center mb-6">
                <Calculator size={22} className="text-royal-purple" aria-hidden="true" />
              </div>
              <h3 className="font-headline-md text-charcoal font-bold mb-3">Process Over Answer</h3>
              <p className="text-on-surface-variant font-body-md">The numeracy assessment is built around interpreting a situation, applying an approach, solving, analysing and communicating the reasoning. Marks follow the thinking, not simply the final figure.</p>
            </div>
            <div className="p-8 bg-soft-gray rounded-2xl border border-outline-variant/30">
              <div className="w-12 h-12 rounded-xl bg-royal-purple/10 flex items-center justify-center mb-6">
                <Repeat size={22} className="text-royal-purple" aria-hidden="true" />
              </div>
              <h3 className="font-headline-md text-charcoal font-bold mb-3">Retakes Are Permitted</h3>
              <p className="text-on-surface-variant font-body-md">Because the assessments sit outside any course, a student can attempt them again without repeating a class. Sitting them again unchanged rarely helps, but a targeted second attempt often does.</p>
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
                <span>How Results Are Reported</span>
              </div>
              <h2 className="font-headline-lg text-headline-lg text-charcoal font-bold mb-6">Proficiency, Not Percentages</h2>
              <p className="text-on-surface-variant font-body-md mb-8">BC reports these assessments on a proficiency scale rather than as a mark out of one hundred, which takes some getting used to.</p>
              <div className="bg-white rounded-2xl p-8 border border-outline-variant/30">
              <div className="pb-4 border-b border-outline-variant/60 last:border-0 last:pb-0">
                <p className="font-label-md text-charcoal font-semibold mb-1">Reporting scale</p>
                <p className="text-on-surface-variant font-body-md">Four levels running from Emerging through to Extending</p>
              </div>
              <div className="pb-4 border-b border-outline-variant/60 last:border-0 last:pb-0">
                <p className="font-label-md text-charcoal font-semibold mb-1">Numeracy 10</p>
                <p className="text-on-surface-variant font-body-md">Taken in the Grade 10 year, required for graduation</p>
              </div>
              <div className="pb-4 border-b border-outline-variant/60 last:border-0 last:pb-0">
                <p className="font-label-md text-charcoal font-semibold mb-1">Literacy 10</p>
                <p className="text-on-surface-variant font-body-md">Taken in the Grade 10 year, required for graduation</p>
              </div>
              <div className="pb-4 border-b border-outline-variant/60 last:border-0 last:pb-0">
                <p className="font-label-md text-charcoal font-semibold mb-1">Literacy 12</p>
                <p className="text-on-surface-variant font-body-md">Taken in the graduating year, required for graduation</p>
              </div>
              </div>
              <p className="text-on-surface-variant font-label-md italic mt-6">Assessment requirements, sittings and reporting are set by the B.C. Ministry of Education and Child Care and are revised periodically. Confirm current details with your school.</p>
            </div>
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-royal-purple/10 text-royal-purple font-label-md text-sm font-semibold mb-6">
                <CalendarClock size={16} aria-hidden="true" />
                <span>Planning Ahead</span>
              </div>
              <h2 className="font-headline-lg text-headline-lg text-charcoal font-bold mb-6">Preparing Without a Syllabus</h2>
              <p className="text-on-surface-variant font-body-md mb-8">The absence of a textbook makes these assessments feel unpreparable. They are not, but the preparation looks different.</p>
              <div className="mt-4">
            <div className="relative pl-12 pb-10 border-l-2 border-outline-variant last:border-l-0 last:pb-0">
              <div className="absolute -left-[13px] top-0 w-6 h-6 rounded-full bg-royal-purple flex items-center justify-center">
                <span className="text-white text-[11px] font-bold">1</span>
              </div>
              <h3 className="font-headline-md text-charcoal font-bold mb-2">Grades 8 to 9</h3>
              <p className="text-on-surface-variant font-body-md">Numeracy 10 draws on years of accumulated reasoning. Gaps in fractions, ratio and proportional thinking surface here, and this is the comfortable time to close them.</p>
            </div>
            <div className="relative pl-12 pb-10 border-l-2 border-outline-variant last:border-l-0 last:pb-0">
              <div className="absolute -left-[13px] top-0 w-6 h-6 rounded-full bg-royal-purple flex items-center justify-center">
                <span className="text-white text-[11px] font-bold">2</span>
              </div>
              <h3 className="font-headline-md text-charcoal font-bold mb-2">Early Grade 10</h3>
              <p className="text-on-surface-variant font-body-md">Work through sample assessments so the format, the length and the expectation to explain reasoning are all familiar before the real sitting.</p>
            </div>
            <div className="relative pl-12 pb-10 border-l-2 border-outline-variant last:border-l-0 last:pb-0">
              <div className="absolute -left-[13px] top-0 w-6 h-6 rounded-full bg-royal-purple flex items-center justify-center">
                <span className="text-white text-[11px] font-bold">3</span>
              </div>
              <h3 className="font-headline-md text-charcoal font-bold mb-2">Grade 10 sitting</h3>
              <p className="text-on-surface-variant font-body-md">Numeracy and literacy assessments completed during the Grade 10 year.</p>
            </div>
            <div className="relative pl-12 pb-10 border-l-2 border-outline-variant last:border-l-0 last:pb-0">
              <div className="absolute -left-[13px] top-0 w-6 h-6 rounded-full bg-royal-purple flex items-center justify-center">
                <span className="text-white text-[11px] font-bold">4</span>
              </div>
              <h3 className="font-headline-md text-charcoal font-bold mb-2">Grade 12</h3>
              <p className="text-on-surface-variant font-body-md">The Literacy 12 assessment, completed in the graduating year alongside course work and post-secondary applications.</p>
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
            <p className="text-on-surface-variant font-body-md max-w-2xl mx-auto">What BC families ask us most often about graduation assessments.</p>
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
          <h2 className="font-headline-lg text-headline-lg font-bold">Prepare for the thinking, not the textbook</h2>
          <p className="font-body-lg text-body-lg opacity-90 max-w-xl mx-auto">Book a free assessment lesson and we will show you exactly which reasoning skills your child needs for the numeracy and literacy assessments, and how far off they currently are.</p>
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