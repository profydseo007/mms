'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ClipboardCheck, CheckCircle2, ChevronDown, ChevronRight, CalendarClock, Scale, PenLine, BookOpen, GraduationCap, AlertCircle } from 'lucide-react';

const FAQS = [
  { q: "Can my child fail EQAO?", a: "Not at Grades 3, 6 or 9. Those assessments report achievement against provincial standards and are used for school and board planning. There is no pass mark for the individual student and no consequence for progressing to the next grade. The Grade 10 literacy test is different: meeting the literacy requirement is a condition of graduating in Ontario." },
  { q: "What happens if my child does not meet the OSSLT requirement?", a: "There are two routes. They can sit the test again at a later administration, or complete the Ontario Secondary School Literacy Course, which satisfies the requirement through coursework instead. Neither route is unusual and neither prevents graduation on its own. What matters is addressing the underlying reading or writing difficulty rather than simply resitting with the same preparation." },
  { q: "How should we prepare for the Grade 3 assessment?", a: "Lightly, and mostly by removing surprise. A nine-year-old sitting an unfamiliar formal assessment often underperforms because of the format rather than the content. A few practice questions so the layout and instructions look familiar is genuinely useful. Intensive drilling is not, and can make an anxious child more anxious about something that carries no consequence for them." },
  { q: "Why does the Grade 9 assessment matter if it is diagnostic?", a: "Because of what it reveals rather than what it counts for. Grade 9 is where algebraic thinking is consolidated, and a weak result is an early, reliable signal that senior mathematics will be difficult. Acting on it in Grade 9 or 10 is straightforward. Discovering the same gap in Grade 11 functions, with university prerequisites at stake, is considerably harder." },
  { q: "What does the OSSLT actually test?", a: "Reading comprehension and writing across a range of everyday and informational texts, rather than knowledge from any particular subject. That is why studying course content does not help much, and why students who read confidently tend to pass without preparation while students who avoid reading struggle regardless of their grades. The useful work is on comprehension strategy and structured written response." },
  { q: "Are EQAO questions different from classroom tests?", a: "In format, yes. Open-response questions ask students to explain reasoning and justify an answer rather than simply produce one, and the mathematics assessments are delivered digitally. Students who know the material but are unused to explaining their thinking in writing lose marks they should not, and that is a quick, teachable fix." },
  { q: "Does EQAO affect university admission?", a: "No. Ontario universities admit on Grade 12 course marks, not on EQAO results, which do not appear on a transcript. The exception is the literacy requirement, which must be met to receive the diploma, and the diploma is required. So the OSSLT matters to admission only in the sense that graduating does." },
  { q: "When should preparation start?", a: "For the OSSLT, the autumn of Grade 10 is comfortable, and earlier if reading has been a persistent difficulty. For the diagnostic assessments, a couple of weeks of format familiarity is proportionate. If a report card already flags reading or mathematics concerns, the assessment is not the reason to act, but it is a reasonable prompt." }
];

export default function CAEqaoOssltPage() {
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
                Ontario · Grades 3, 6, 9 and 10
              </div>
              <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-charcoal leading-tight font-bold">
                EQAO & OSSLT <span className="text-royal-purple">Preparation Online</span>
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
                Online tutors for EQAO and OSSLT preparation across Ontario. The Grade 3, 6 and 9 assessments report on progress; the Grade 10 literacy test sits behind a graduation requirement. Preparation should reflect that difference, and ours does.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button onClick={() => router.push('/free-trial')} className="bg-royal-purple text-white px-8 py-4 rounded-xl font-headline-md font-bold hover:shadow-xl transition-all cursor-pointer">Book a Free Assessment</button>
                <button onClick={() => { const el = document.getElementById('structure'); if (el) el.scrollIntoView({ behavior: 'smooth' }); }} className="border-2 border-royal-purple text-royal-purple px-8 py-4 rounded-xl font-headline-md font-bold hover:bg-royal-purple/5 transition-all cursor-pointer">See What Each Assessment Does</button>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img className="w-full h-[440px] object-cover" alt="An Ontario student preparing for EQAO assessments online" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBIC2148RcAcfRXxnZOcCNJC2Yr32DtyHa7d1TOD82ZBuHm5-qZ-Hfyjuic-1MLI6po5tOU8XT7FUpGqvgdHGzRwEInHX72mGWsxX-9nVAlOqT4sbH-gqYAG5YfaLbivq9Je_ZI7ity8vsit3aPnhFxzYCZ7Vd3uaU5jtItj5k130NViqjkJsMWfhwBn54qZk6DOAoC1XqgTsCbUlAYR6O8_Q9eb3Xz1j99Ujc64cOxRy0f-IOnZz3fvw" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Structure */}
      <section className="py-24 bg-soft-gray" id="structure">
        <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="text-center mb-16">
            <h2 className="font-headline-lg text-headline-lg text-charcoal font-bold mb-4">The Four Ontario Assessments</h2>
            <p className="text-on-surface-variant font-body-md max-w-2xl mx-auto">Administered by the Education Quality and Accountability Office, an agency of the province, at four points in a student’s schooling.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-8 bg-white rounded-2xl shadow-[0px_4px_20px_rgba(0,0,0,0.05)] border border-transparent hover:border-royal-purple/20 transition-all group">
              <div className="w-14 h-14 bg-primary-fixed rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <BookOpen size={26} strokeWidth={2} className="text-royal-purple" aria-hidden="true" />
              </div>
              <h3 className="font-headline-md text-charcoal font-bold mb-1">Grade 3</h3>
              <p className="text-label-sm text-royal-purple font-semibold mb-4">Primary Division</p>
              <ul className="space-y-2"><li key="Reading and writing" className="flex items-start gap-2 text-label-md text-on-surface-variant"><CheckCircle2 size={15} className="text-lime-green shrink-0 mt-1" aria-hidden="true" />Reading and writing</li><li key="Mathematics" className="flex items-start gap-2 text-label-md text-on-surface-variant"><CheckCircle2 size={15} className="text-lime-green shrink-0 mt-1" aria-hidden="true" />Mathematics</li><li key="Four-level achievement scale" className="flex items-start gap-2 text-label-md text-on-surface-variant"><CheckCircle2 size={15} className="text-lime-green shrink-0 mt-1" aria-hidden="true" />Four-level achievement scale</li></ul>
            </div>
            <div className="p-8 bg-white rounded-2xl shadow-[0px_4px_20px_rgba(0,0,0,0.05)] border border-transparent hover:border-royal-purple/20 transition-all group">
              <div className="w-14 h-14 bg-secondary-container rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <PenLine size={26} strokeWidth={2} className="text-secondary" aria-hidden="true" />
              </div>
              <h3 className="font-headline-md text-charcoal font-bold mb-1">Grade 6</h3>
              <p className="text-label-sm text-royal-purple font-semibold mb-4">Junior Division</p>
              <ul className="space-y-2"><li key="Reading and writing" className="flex items-start gap-2 text-label-md text-on-surface-variant"><CheckCircle2 size={15} className="text-lime-green shrink-0 mt-1" aria-hidden="true" />Reading and writing</li><li key="Mathematics" className="flex items-start gap-2 text-label-md text-on-surface-variant"><CheckCircle2 size={15} className="text-lime-green shrink-0 mt-1" aria-hidden="true" />Mathematics</li><li key="Open-response questions" className="flex items-start gap-2 text-label-md text-on-surface-variant"><CheckCircle2 size={15} className="text-lime-green shrink-0 mt-1" aria-hidden="true" />Open-response questions</li></ul>
            </div>
            <div className="p-8 bg-white rounded-2xl shadow-[0px_4px_20px_rgba(0,0,0,0.05)] border border-transparent hover:border-royal-purple/20 transition-all group">
              <div className="w-14 h-14 bg-lime-green/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <ClipboardCheck size={26} strokeWidth={2} className="text-secondary" aria-hidden="true" />
              </div>
              <h3 className="font-headline-md text-charcoal font-bold mb-1">Grade 9</h3>
              <p className="text-label-sm text-royal-purple font-semibold mb-4">Mathematics</p>
              <ul className="space-y-2"><li key="Grade 9 math assessment" className="flex items-start gap-2 text-label-md text-on-surface-variant"><CheckCircle2 size={15} className="text-lime-green shrink-0 mt-1" aria-hidden="true" />Grade 9 math assessment</li><li key="Taken within the course" className="flex items-start gap-2 text-label-md text-on-surface-variant"><CheckCircle2 size={15} className="text-lime-green shrink-0 mt-1" aria-hidden="true" />Taken within the course</li><li key="Digital, adaptive format" className="flex items-start gap-2 text-label-md text-on-surface-variant"><CheckCircle2 size={15} className="text-lime-green shrink-0 mt-1" aria-hidden="true" />Digital, adaptive format</li></ul>
            </div>
            <div className="p-8 bg-white rounded-2xl shadow-[0px_4px_20px_rgba(0,0,0,0.05)] border border-transparent hover:border-royal-purple/20 transition-all group">
              <div className="w-14 h-14 bg-royal-purple/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <GraduationCap size={26} strokeWidth={2} className="text-royal-purple" aria-hidden="true" />
              </div>
              <h3 className="font-headline-md text-charcoal font-bold mb-1">Grade 10 OSSLT</h3>
              <p className="text-label-sm text-royal-purple font-semibold mb-4">Graduation requirement</p>
              <ul className="space-y-2"><li key="Reading and writing tasks" className="flex items-start gap-2 text-label-md text-on-surface-variant"><CheckCircle2 size={15} className="text-lime-green shrink-0 mt-1" aria-hidden="true" />Reading and writing tasks</li><li key="Minimum score required to pass" className="flex items-start gap-2 text-label-md text-on-surface-variant"><CheckCircle2 size={15} className="text-lime-green shrink-0 mt-1" aria-hidden="true" />Minimum score required to pass</li><li key="Retake or OSSLC alternative" className="flex items-start gap-2 text-label-md text-on-surface-variant"><CheckCircle2 size={15} className="text-lime-green shrink-0 mt-1" aria-hidden="true" />Retake or OSSLC alternative</li></ul>
            </div>
          </div>
        </div>
      </section>

      {/* Key points */}
      <section className="py-24 bg-white">
        <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="text-center mb-16">
            <h2 className="font-headline-lg text-headline-lg text-charcoal font-bold mb-4">The Distinction That Changes Everything</h2>
            <p className="text-on-surface-variant font-body-md max-w-2xl mx-auto">EQAO and OSSLT are usually spoken about together, but they do fundamentally different jobs.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-8 bg-soft-gray rounded-2xl border border-outline-variant/30">
              <div className="w-12 h-12 rounded-xl bg-royal-purple/10 flex items-center justify-center mb-6">
                <ClipboardCheck size={22} className="text-royal-purple" aria-hidden="true" />
              </div>
              <h3 className="font-headline-md text-charcoal font-bold mb-3">Grades 3, 6 and 9 Are Diagnostic</h3>
              <p className="text-on-surface-variant font-body-md">They report achievement against provincial standards and inform school planning. A student does not pass or fail, and a weak result carries no consequence for moving up a grade.</p>
            </div>
            <div className="p-8 bg-soft-gray rounded-2xl border border-outline-variant/30">
              <div className="w-12 h-12 rounded-xl bg-royal-purple/10 flex items-center justify-center mb-6">
                <GraduationCap size={22} className="text-royal-purple" aria-hidden="true" />
              </div>
              <h3 className="font-headline-md text-charcoal font-bold mb-3">The OSSLT Is a Requirement</h3>
              <p className="text-on-surface-variant font-body-md">Meeting the Ontario literacy requirement is a condition of receiving the diploma. Students who do not meet it can retake the test or complete the Ontario Secondary School Literacy Course instead.</p>
            </div>
            <div className="p-8 bg-soft-gray rounded-2xl border border-outline-variant/30">
              <div className="w-12 h-12 rounded-xl bg-royal-purple/10 flex items-center justify-center mb-6">
                <AlertCircle size={22} className="text-royal-purple" aria-hidden="true" />
              </div>
              <h3 className="font-headline-md text-charcoal font-bold mb-3">Prepare Proportionately</h3>
              <p className="text-on-surface-variant font-body-md">Families routinely over-prepare for Grade 3 and under-prepare for Grade 10. Familiarity with the format is enough for the early assessments; the OSSLT deserves genuine, structured work.</p>
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
              <h2 className="font-headline-lg text-headline-lg text-charcoal font-bold mb-6">Reading an EQAO Result</h2>
              <p className="text-on-surface-variant font-body-md mb-8">The reporting language differs between the diagnostic assessments and the literacy test, which is part of why the two are so often confused.</p>
              <div className="bg-white rounded-2xl p-8 border border-outline-variant/30">
              <div className="pb-4 border-b border-outline-variant/60 last:border-0 last:pb-0">
                <p className="font-label-md text-charcoal font-semibold mb-1">Grades 3 and 6</p>
                <p className="text-on-surface-variant font-body-md">Four achievement levels, with Level 3 representing the provincial standard</p>
              </div>
              <div className="pb-4 border-b border-outline-variant/60 last:border-0 last:pb-0">
                <p className="font-label-md text-charcoal font-semibold mb-1">Grade 9 mathematics</p>
                <p className="text-on-surface-variant font-body-md">Reported against the same four-level scale, taken during the course</p>
              </div>
              <div className="pb-4 border-b border-outline-variant/60 last:border-0 last:pb-0">
                <p className="font-label-md text-charcoal font-semibold mb-1">OSSLT</p>
                <p className="text-on-surface-variant font-body-md">A minimum score is required to meet the literacy requirement</p>
              </div>
              <div className="pb-4 border-b border-outline-variant/60 last:border-0 last:pb-0">
                <p className="font-label-md text-charcoal font-semibold mb-1">If the OSSLT is not met</p>
                <p className="text-on-surface-variant font-body-md">Retake in a later administration, or complete the OSSLC</p>
              </div>
              </div>
              <p className="text-on-surface-variant font-label-md italic mt-6">EQAO administration, formats and the literacy requirement are set by EQAO and the Ontario Ministry of Education, and are revised periodically. Confirm current details with your school.</p>
            </div>
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-royal-purple/10 text-royal-purple font-label-md text-sm font-semibold mb-6">
                <CalendarClock size={16} aria-hidden="true" />
                <span>Planning Ahead</span>
              </div>
              <h2 className="font-headline-lg text-headline-lg text-charcoal font-bold mb-6">When Each Assessment Falls</h2>
              <p className="text-on-surface-variant font-body-md mb-8">Spread across seven years, with only the last carrying a consequence attached to the individual student.</p>
              <div className="mt-4">
            <div className="relative pl-12 pb-10 border-l-2 border-outline-variant last:border-l-0 last:pb-0">
              <div className="absolute -left-[13px] top-0 w-6 h-6 rounded-full bg-royal-purple flex items-center justify-center">
                <span className="text-white text-[11px] font-bold">1</span>
              </div>
              <h3 className="font-headline-md text-charcoal font-bold mb-2">Grade 3</h3>
              <p className="text-on-surface-variant font-body-md">First province-wide assessment, in reading, writing and mathematics. Useful as an early signal, not as a verdict on a nine-year-old.</p>
            </div>
            <div className="relative pl-12 pb-10 border-l-2 border-outline-variant last:border-l-0 last:pb-0">
              <div className="absolute -left-[13px] top-0 w-6 h-6 rounded-full bg-royal-purple flex items-center justify-center">
                <span className="text-white text-[11px] font-bold">2</span>
              </div>
              <h3 className="font-headline-md text-charcoal font-bold mb-2">Grade 6</h3>
              <p className="text-on-surface-variant font-body-md">The same three areas, at the end of the junior division. A drop between Grade 3 and Grade 6 is worth investigating properly.</p>
            </div>
            <div className="relative pl-12 pb-10 border-l-2 border-outline-variant last:border-l-0 last:pb-0">
              <div className="absolute -left-[13px] top-0 w-6 h-6 rounded-full bg-royal-purple flex items-center justify-center">
                <span className="text-white text-[11px] font-bold">3</span>
              </div>
              <h3 className="font-headline-md text-charcoal font-bold mb-2">Grade 9</h3>
              <p className="text-on-surface-variant font-body-md">Mathematics only, taken during the course. Also the year Ontario students begin building credits toward the diploma.</p>
            </div>
            <div className="relative pl-12 pb-10 border-l-2 border-outline-variant last:border-l-0 last:pb-0">
              <div className="absolute -left-[13px] top-0 w-6 h-6 rounded-full bg-royal-purple flex items-center justify-center">
                <span className="text-white text-[11px] font-bold">4</span>
              </div>
              <h3 className="font-headline-md text-charcoal font-bold mb-2">Grade 10</h3>
              <p className="text-on-surface-variant font-body-md">The OSSLT. This is the one with a graduation requirement behind it, and the one worth preparing for deliberately.</p>
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
            <p className="text-on-surface-variant font-body-md max-w-2xl mx-auto">What Ontario parents ask us most often about EQAO results and the literacy test.</p>
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
          <h2 className="font-headline-lg text-headline-lg font-bold">Know which assessment actually matters</h2>
          <p className="font-body-lg text-body-lg opacity-90 max-w-xl mx-auto">Book a free assessment lesson and we will tell you honestly how much preparation your child’s upcoming EQAO or OSSLT deserves, and where the effort is better spent.</p>
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