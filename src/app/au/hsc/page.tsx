'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ScrollText, CheckCircle2, ChevronDown, ChevronRight, CalendarClock, Scale, BookOpen, Calculator, FlaskConical, Users, Award, TrendingUp } from 'lucide-react';

const FAQS = [
  { q: "How much does internal assessment count?", a: "In each course the final mark combines school-based assessment with the external examination. The part families underestimate is moderation: internal marks are adjusted against the cohort\u2019s external performance, which means a student\u2019s position within their school matters enormously. Being ranked first internally in a strong cohort is worth considerably more than a high raw mark in a weak one." },
  { q: "What is the difference between a band and an ATAR?", a: "They answer different questions. A band describes how well a student performed against the syllabus outcomes for a course, so two students in different schools earning the same band achieved a comparable standard. The ATAR is a rank showing where a student sits relative to their age cohort overall, calculated afterwards from scaled marks. A strong band in one subject does not by itself produce a strong ATAR." },
  { q: "Do trial examinations matter?", a: "Considerably. Trials are usually the single heaviest internal assessment task, so they carry real weight in the internal mark and rank. They are also the last full rehearsal under examination conditions, which makes them the most reliable diagnostic available before the externals. A poor trial is recoverable, but only if the reason for it is identified rather than assumed." },
  { q: "Should my child take Extension courses?", a: "Only where genuine interest and capability align, and with an eye on how the units contribute. Extension courses are demanding and can absorb time that would otherwise lift results in other subjects. They suit students who are already strong in the underlying course, and they are a poor way to rescue a mark. The decision should rest on performance in the Preliminary year rather than on ambition alone." },
  { q: "What actually separates a Band 5 from a Band 6?", a: "Rarely additional content knowledge. In extended response subjects it is usually sustained argument, precise use of terminology and direct engagement with the question asked rather than the question rehearsed. In mathematics and the sciences it is accuracy under pressure and complete working. Both are trainable, and both respond faster than trying to learn more material." },
  { q: "Is it too late to start in Year 12?", a: "Not too late, but the options narrow. Exam technique, response structure and targeted content repair all still shift marks within a term. What cannot be rebuilt quickly is a weak Preliminary foundation, particularly in mathematics and the sciences where each topic assumes the last. Starting in Year 11 leaves room to do both; starting in Year 12 usually means choosing." },
  { q: "How does moderation work in practice?", a: "NESA adjusts a school\u2019s internal assessment marks so they align with how that school\u2019s cohort performed in the external examination. The school\u2019s ranking of its students is preserved; the spread of marks is adjusted. The practical consequence is that internal rank is what a student controls, and it is worth protecting from the first assessment task of the course." },
  { q: "Do you match tutors to specific NESA courses?", a: "Yes, at course level rather than subject level. Mathematics Advanced and Mathematics Standard 2 are different courses with different syllabuses and different examinations, and a tutor who has taught one is not automatically suited to the other. The same applies across English and the sciences." }
];

export default function AUHscPage() {
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
                <ScrollText size={16} strokeWidth={2.25} aria-hidden="true" />
                New South Wales · Years 11 and 12
              </div>
              <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-charcoal leading-tight font-bold">
                HSC Preparation <span className="text-royal-purple">Online</span>
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
                Online tutors for HSC preparation across NESA syllabuses. Half the work happens before the external papers, because internal assessment and your child’s rank within their school both feed into the final mark.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button onClick={() => router.push('/free-trial')} className="bg-royal-purple text-white px-8 py-4 rounded-xl font-headline-md font-bold hover:shadow-xl transition-all cursor-pointer">Book a Free Assessment</button>
                <button onClick={() => { const el = document.getElementById('structure'); if (el) el.scrollIntoView({ behavior: 'smooth' }); }} className="border-2 border-royal-purple text-royal-purple px-8 py-4 rounded-xl font-headline-md font-bold hover:bg-royal-purple/5 transition-all cursor-pointer">See the Subjects</button>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img className="w-full h-[440px] object-cover" alt="A New South Wales student preparing for HSC examinations online" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBIC2148RcAcfRXxnZOcCNJC2Yr32DtyHa7d1TOD82ZBuHm5-qZ-Hfyjuic-1MLI6po5tOU8XT7FUpGqvgdHGzRwEInHX72mGWsxX-9nVAlOqT4sbH-gqYAG5YfaLbivq9Je_ZI7ity8vsit3aPnhFxzYCZ7Vd3uaU5jtItj5k130NViqjkJsMWfhwBn54qZk6DOAoC1XqgTsCbUlAYR6O8_Q9eb3Xz1j99Ujc64cOxRy0f-IOnZz3fvw" />
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
            <p className="text-on-surface-variant font-body-md max-w-2xl mx-auto">Across the NESA syllabuses, matched to the specific course your child is enrolled in rather than the subject in general.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-8 rounded-[2rem] shadow-[0px_4px_20px_rgba(0,0,0,0.05)] border border-transparent hover:border-royal-purple/30 transition-all group">
              <div className="w-16 h-16 bg-primary-fixed rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Calculator size={30} strokeWidth={2} className="text-royal-purple" aria-hidden="true" />
              </div>
              <h3 className="font-headline-md text-headline-md text-charcoal font-bold">Mathematics</h3>
              <p className="font-label-md text-label-md text-royal-purple font-semibold mt-1 mb-4">Standard, Advanced, Extension</p>
              <ul className="space-y-2"><li key="Mathematics Standard 1 and 2" className="flex items-start gap-2 text-label-md text-on-surface-variant"><CheckCircle2 size={15} className="text-lime-green shrink-0 mt-1" aria-hidden="true" />Mathematics Standard 1 and 2</li><li key="Mathematics Advanced" className="flex items-start gap-2 text-label-md text-on-surface-variant"><CheckCircle2 size={15} className="text-lime-green shrink-0 mt-1" aria-hidden="true" />Mathematics Advanced</li><li key="Extension 1 and Extension 2" className="flex items-start gap-2 text-label-md text-on-surface-variant"><CheckCircle2 size={15} className="text-lime-green shrink-0 mt-1" aria-hidden="true" />Extension 1 and Extension 2</li></ul>
            </div>
            <div className="bg-white p-8 rounded-[2rem] shadow-[0px_4px_20px_rgba(0,0,0,0.05)] border border-transparent hover:border-royal-purple/30 transition-all group">
              <div className="w-16 h-16 bg-secondary-container rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <BookOpen size={30} strokeWidth={2} className="text-secondary" aria-hidden="true" />
              </div>
              <h3 className="font-headline-md text-headline-md text-charcoal font-bold">English</h3>
              <p className="font-label-md text-label-md text-royal-purple font-semibold mt-1 mb-4">Compulsory for the HSC</p>
              <ul className="space-y-2"><li key="Standard and Advanced" className="flex items-start gap-2 text-label-md text-on-surface-variant"><CheckCircle2 size={15} className="text-lime-green shrink-0 mt-1" aria-hidden="true" />Standard and Advanced</li><li key="Common Module and modules A to C" className="flex items-start gap-2 text-label-md text-on-surface-variant"><CheckCircle2 size={15} className="text-lime-green shrink-0 mt-1" aria-hidden="true" />Common Module and modules A to C</li><li key="Extension English" className="flex items-start gap-2 text-label-md text-on-surface-variant"><CheckCircle2 size={15} className="text-lime-green shrink-0 mt-1" aria-hidden="true" />Extension English</li></ul>
            </div>
            <div className="bg-white p-8 rounded-[2rem] shadow-[0px_4px_20px_rgba(0,0,0,0.05)] border border-transparent hover:border-royal-purple/30 transition-all group">
              <div className="w-16 h-16 bg-lime-green/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <FlaskConical size={30} strokeWidth={2} className="text-secondary" aria-hidden="true" />
              </div>
              <h3 className="font-headline-md text-headline-md text-charcoal font-bold">Sciences</h3>
              <p className="font-label-md text-label-md text-royal-purple font-semibold mt-1 mb-4">Biology, Chemistry, Physics</p>
              <ul className="space-y-2"><li key="Depth studies" className="flex items-start gap-2 text-label-md text-on-surface-variant"><CheckCircle2 size={15} className="text-lime-green shrink-0 mt-1" aria-hidden="true" />Depth studies</li><li key="Working scientifically skills" className="flex items-start gap-2 text-label-md text-on-surface-variant"><CheckCircle2 size={15} className="text-lime-green shrink-0 mt-1" aria-hidden="true" />Working scientifically skills</li><li key="Extended response technique" className="flex items-start gap-2 text-label-md text-on-surface-variant"><CheckCircle2 size={15} className="text-lime-green shrink-0 mt-1" aria-hidden="true" />Extended response technique</li></ul>
            </div>
            <div className="bg-white p-8 rounded-[2rem] shadow-[0px_4px_20px_rgba(0,0,0,0.05)] border border-transparent hover:border-royal-purple/30 transition-all group">
              <div className="w-16 h-16 bg-royal-purple/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Users size={30} strokeWidth={2} className="text-royal-purple" aria-hidden="true" />
              </div>
              <h3 className="font-headline-md text-headline-md text-charcoal font-bold">HSC Skills</h3>
              <p className="font-label-md text-label-md text-royal-purple font-semibold mt-1 mb-4">Across every subject</p>
              <ul className="space-y-2"><li key="Trial examination technique" className="flex items-start gap-2 text-label-md text-on-surface-variant"><CheckCircle2 size={15} className="text-lime-green shrink-0 mt-1" aria-hidden="true" />Trial examination technique</li><li key="Internal assessment tasks" className="flex items-start gap-2 text-label-md text-on-surface-variant"><CheckCircle2 size={15} className="text-lime-green shrink-0 mt-1" aria-hidden="true" />Internal assessment tasks</li><li key="Band 6 response structure" className="flex items-start gap-2 text-label-md text-on-surface-variant"><CheckCircle2 size={15} className="text-lime-green shrink-0 mt-1" aria-hidden="true" />Band 6 response structure</li></ul>
            </div>
          </div>
        </div>
      </section>

      {/* Key points */}
      <section className="py-24 bg-white">
        <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="text-center mb-16">
            <h2 className="font-headline-lg text-headline-lg text-charcoal font-bold mb-4">Where HSC Marks Are Actually Won</h2>
            <p className="text-on-surface-variant font-body-md max-w-2xl mx-auto">Students who treat the HSC as a single examination period are competing against students who did not.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-8 bg-soft-gray rounded-2xl border border-outline-variant/30">
              <div className="w-12 h-12 rounded-xl bg-royal-purple/10 flex items-center justify-center mb-6">
                <Users size={22} className="text-royal-purple" aria-hidden="true" />
              </div>
              <h3 className="font-headline-md text-charcoal font-bold mb-3">Your School Rank Matters</h3>
              <p className="text-on-surface-variant font-body-md">Internal assessment marks are moderated using the cohort’s external performance, which means a student’s rank within their school directly shapes the internal mark they ultimately receive.</p>
            </div>
            <div className="p-8 bg-soft-gray rounded-2xl border border-outline-variant/30">
              <div className="w-12 h-12 rounded-xl bg-royal-purple/10 flex items-center justify-center mb-6">
                <Award size={22} className="text-royal-purple" aria-hidden="true" />
              </div>
              <h3 className="font-headline-md text-charcoal font-bold mb-3">Bands Describe Standards</h3>
              <p className="text-on-surface-variant font-body-md">HSC results are reported in performance bands against syllabus outcomes, rather than as a rank. Knowing what separates one band from the next in a given course is more useful than chasing a percentage.</p>
            </div>
            <div className="p-8 bg-soft-gray rounded-2xl border border-outline-variant/30">
              <div className="w-12 h-12 rounded-xl bg-royal-purple/10 flex items-center justify-center mb-6">
                <TrendingUp size={22} className="text-royal-purple" aria-hidden="true" />
              </div>
              <h3 className="font-headline-md text-charcoal font-bold mb-3">The ATAR Is Separate</h3>
              <p className="text-on-surface-variant font-body-md">Bands describe achievement; the ATAR is a rank calculated afterwards from scaled marks. Improving across several subjects moves it further than a large gain in one.</p>
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
                <span>How the HSC Mark Is Built</span>
              </div>
              <h2 className="font-headline-lg text-headline-lg text-charcoal font-bold mb-6">Internal and External, Combined</h2>
              <p className="text-on-surface-variant font-body-md mb-8">The final mark in each course draws on both school-based assessment and the external examination, which is why the year matters as much as the exam period.</p>
              <div className="bg-white rounded-2xl p-8 border border-outline-variant/30">
                <div className="pb-4 mb-4 border-b border-outline-variant/60 last:border-0 last:pb-0 last:mb-0">
                  <p className="font-label-md text-charcoal font-semibold mb-1">Internal assessment</p>
                  <p className="text-on-surface-variant font-body-md">School-based tasks across the course, contributing to the final mark</p>
                </div>
                <div className="pb-4 mb-4 border-b border-outline-variant/60 last:border-0 last:pb-0 last:mb-0">
                  <p className="font-label-md text-charcoal font-semibold mb-1">Moderation</p>
                  <p className="text-on-surface-variant font-body-md">Internal marks are adjusted using the school cohort’s external results, so internal rank is critical</p>
                </div>
                <div className="pb-4 mb-4 border-b border-outline-variant/60 last:border-0 last:pb-0 last:mb-0">
                  <p className="font-label-md text-charcoal font-semibold mb-1">External examination</p>
                  <p className="text-on-surface-variant font-body-md">The HSC papers sat at the end of Year 12</p>
                </div>
                <div className="pb-4 mb-4 border-b border-outline-variant/60 last:border-0 last:pb-0 last:mb-0">
                  <p className="font-label-md text-charcoal font-semibold mb-1">Reporting</p>
                  <p className="text-on-surface-variant font-body-md">Performance bands describing achievement against syllabus outcomes</p>
                </div>
                <div className="pb-4 mb-4 border-b border-outline-variant/60 last:border-0 last:pb-0 last:mb-0">
                  <p className="font-label-md text-charcoal font-semibold mb-1">Trials</p>
                  <p className="text-on-surface-variant font-body-md">School trial examinations, typically the largest single internal task</p>
                </div>
                <div className="pb-4 mb-4 border-b border-outline-variant/60 last:border-0 last:pb-0 last:mb-0">
                  <p className="font-label-md text-charcoal font-semibold mb-1">The ATAR</p>
                  <p className="text-on-surface-variant font-body-md">Calculated separately by UAC from scaled marks across units</p>
                </div>
              </div>
              <p className="text-on-surface-variant font-label-md italic mt-6">HSC assessment requirements, syllabuses and reporting are set by NESA, and ATAR calculation by UAC. Both are revised periodically. Confirm current details with your child’s school.</p>
            </div>
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-royal-purple/10 text-royal-purple font-label-md text-sm font-semibold mb-6">
                <CalendarClock size={16} aria-hidden="true" />
                <span>Planning Ahead</span>
              </div>
              <h2 className="font-headline-lg text-headline-lg text-charcoal font-bold mb-6">The HSC Year</h2>
              <p className="text-on-surface-variant font-body-md mb-8">Preliminary courses begin the sequence, and internal tasks start counting long before the exam period.</p>
              <div className="mt-4">
                <div className="relative pl-12 pb-10 border-l-2 border-outline-variant last:border-l-0 last:pb-0">
                  <div className="absolute -left-[13px] top-0 w-6 h-6 rounded-full bg-royal-purple flex items-center justify-center">
                    <span className="text-white text-[11px] font-bold">1</span>
                  </div>
                  <h3 className="font-headline-md text-charcoal font-bold mb-2">Year 11 Preliminary</h3>
                  <p className="text-on-surface-variant font-body-md">Foundational content that HSC courses assume. Weakness here is carried forward rather than left behind.</p>
                </div>
                <div className="relative pl-12 pb-10 border-l-2 border-outline-variant last:border-l-0 last:pb-0">
                  <div className="absolute -left-[13px] top-0 w-6 h-6 rounded-full bg-royal-purple flex items-center justify-center">
                    <span className="text-white text-[11px] font-bold">2</span>
                  </div>
                  <h3 className="font-headline-md text-charcoal font-bold mb-2">Term 4 to Term 1</h3>
                  <p className="text-on-surface-variant font-body-md">HSC courses begin. Early internal tasks establish a rank that is difficult to shift later in the year.</p>
                </div>
                <div className="relative pl-12 pb-10 border-l-2 border-outline-variant last:border-l-0 last:pb-0">
                  <div className="absolute -left-[13px] top-0 w-6 h-6 rounded-full bg-royal-purple flex items-center justify-center">
                    <span className="text-white text-[11px] font-bold">3</span>
                  </div>
                  <h3 className="font-headline-md text-charcoal font-bold mb-2">Mid-year</h3>
                  <p className="text-on-surface-variant font-body-md">Internal assessment continues. Consistency across tasks does more for a final rank than one outstanding result.</p>
                </div>
                <div className="relative pl-12 pb-10 border-l-2 border-outline-variant last:border-l-0 last:pb-0">
                  <div className="absolute -left-[13px] top-0 w-6 h-6 rounded-full bg-royal-purple flex items-center justify-center">
                    <span className="text-white text-[11px] font-bold">4</span>
                  </div>
                  <h3 className="font-headline-md text-charcoal font-bold mb-2">Trials, then externals</h3>
                  <p className="text-on-surface-variant font-body-md">Trial examinations, usually the heaviest internal task, followed by the external HSC papers and the ATAR.</p>
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
            <p className="text-on-surface-variant font-body-md max-w-2xl mx-auto">What New South Wales families ask us most often about HSC marks, ranks and bands.</p>
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
          <h2 className="font-headline-lg text-headline-lg font-bold">Protect the rank, not just the exam</h2>
          <p className="font-body-lg text-body-lg opacity-90 max-w-xl mx-auto">Book a free assessment lesson and we will look at where your child sits in their cohort, which internal tasks are coming, and what would most improve the final mark.</p>
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