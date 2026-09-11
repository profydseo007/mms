'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { MapPinned, CheckCircle2, ChevronDown, ChevronRight, CalendarClock, Scale, BookOpen, Layers, Route, Compass } from 'lucide-react';

const FAQS = [
  { q: "Do you teach the Ontario curriculum specifically?", a: "Yes, and we match to the course code at senior level rather than the subject alone. A student taking MCV4U works with a tutor who has taught MCV4U, because Calculus and Vectors covers a defined set of expectations and differs from a general calculus course. At elementary level we work to the Ontario curriculum expectations for the relevant grade and strand." },
  { q: "What if my child changes province mid-year?", a: "We map the gap before teaching anything. The overlap between provincial curricula is large but the ordering is not, so a student can arrive having already covered what their new class is doing while missing something it completed two years earlier. That pattern is invisible on a report card and only surfaces when an assessment lands. Identifying it early is the most valuable thing tutoring does in a move." },
  { q: "Are the Western provinces\u2019 curricula similar to each other?", a: "They share more common ground than they do with Ontario or Quebec, having been developed through a shared framework, but each province has since revised independently and the differences have grown. Practically, a tutor familiar with Alberta\u2019s programs of study will be closer to Saskatchewan than to Ontario, but we still match to the specific province rather than assuming transferability." },
  { q: "Do you support the Qu\u00e9bec Education Program?", a: "Yes, including preparation for the ministerial examinations and the CEGEP pathway, which has no equivalent elsewhere in Canada. Quebec students finish secondary school a year earlier than the rest of the country and then complete CEGEP before university, so the timeline and the pressure points sit in different places." },
  { q: "How do you know which curriculum my child follows?", a: "We ask during booking, and confirm during the free assessment lesson by looking at what is actually being covered in class. Report cards and course outlines usually make it obvious. If a family is uncertain, the assessment lesson resolves it, since the material a student recognises tells us more than the school name does." },
  { q: "Do you cover French-language school boards?", a: "We support students in French immersion and in francophone programs studying mathematics and science through French. Where difficulty appears, the first task is separating a language obstacle from a subject one, because the two produce similar report card comments and require entirely different responses." },
  { q: "Which grades do you cover?", a: "Kindergarten through Grade 12 across every province, including senior university-preparation courses. The stage where tutoring returns most is usually Grades 6 to 9, where proportional reasoning and algebra are established and where nothing high-stakes is yet at risk." },
  { q: "Is there a free trial lesson?", a: "Yes, with no credit card required. The session establishes where your child sits against their provincial grade expectations and confirms which curriculum and course they are actually following. If you decide not to continue, that is the end of it." }
];

export default function CAProvincialCurriculaPage() {
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
                <MapPinned size={16} strokeWidth={2.25} aria-hidden="true" />
                Thirteen Curricula, No National One
              </div>
              <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-charcoal leading-tight font-bold">
                Provincial Curriculum <span className="text-royal-purple">Preparation Online</span>
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
                Online tutors for provincial curriculum preparation across every Canadian province and territory. Your child is taught, assessed and graded under a provincial ministry, so we match tutors to that ministry’s outcomes rather than to a generic Canadian syllabus.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button onClick={() => router.push('/free-trial')} className="bg-royal-purple text-white px-8 py-4 rounded-xl font-headline-md font-bold hover:shadow-xl transition-all cursor-pointer">Book a Free Assessment</button>
                <button onClick={() => { const el = document.getElementById('structure'); if (el) el.scrollIntoView({ behavior: 'smooth' }); }} className="border-2 border-royal-purple text-royal-purple px-8 py-4 rounded-xl font-headline-md font-bold hover:bg-royal-purple/5 transition-all cursor-pointer">See Provincial Coverage</button>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img className="w-full h-[440px] object-cover" alt="A Canadian student working through provincial curriculum material online" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBIC2148RcAcfRXxnZOcCNJC2Yr32DtyHa7d1TOD82ZBuHm5-qZ-Hfyjuic-1MLI6po5tOU8XT7FUpGqvgdHGzRwEInHX72mGWsxX-9nVAlOqT4sbH-gqYAG5YfaLbivq9Je_ZI7ity8vsit3aPnhFxzYCZ7Vd3uaU5jtItj5k130NViqjkJsMWfhwBn54qZk6DOAoC1XqgTsCbUlAYR6O8_Q9eb3Xz1j99Ujc64cOxRy0f-IOnZz3fvw" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Structure */}
      <section className="py-24 bg-soft-gray" id="structure">
        <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="text-center mb-16">
            <h2 className="font-headline-lg text-headline-lg text-charcoal font-bold mb-4">Coverage Across the Provinces</h2>
            <p className="text-on-surface-variant font-body-md max-w-2xl mx-auto">Course names, sequencing and senior codes diverge sharply between provinces. These are the systems families ask us about most.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-8 bg-white rounded-2xl shadow-[0px_4px_20px_rgba(0,0,0,0.05)] border border-transparent hover:border-royal-purple/20 transition-all group">
              <div className="w-14 h-14 bg-primary-fixed rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <BookOpen size={26} strokeWidth={2} className="text-royal-purple" aria-hidden="true" />
              </div>
              <h3 className="font-headline-md text-charcoal font-bold mb-1">Ontario</h3>
              <p className="text-label-sm text-royal-purple font-semibold mb-4">Curriculum expectations & course codes</p>
              <ul className="space-y-2"><li key="Grades 1–8 expectations" className="flex items-start gap-2 text-label-md text-on-surface-variant"><CheckCircle2 size={15} className="text-lime-green shrink-0 mt-1" aria-hidden="true" />Grades 1–8 expectations</li><li key="De-streamed Grade 9 courses" className="flex items-start gap-2 text-label-md text-on-surface-variant"><CheckCircle2 size={15} className="text-lime-green shrink-0 mt-1" aria-hidden="true" />De-streamed Grade 9 courses</li><li key="MHF4U, MCV4U, SBI4U, ENG4U" className="flex items-start gap-2 text-label-md text-on-surface-variant"><CheckCircle2 size={15} className="text-lime-green shrink-0 mt-1" aria-hidden="true" />MHF4U, MCV4U, SBI4U, ENG4U</li></ul>
            </div>
            <div className="p-8 bg-white rounded-2xl shadow-[0px_4px_20px_rgba(0,0,0,0.05)] border border-transparent hover:border-royal-purple/20 transition-all group">
              <div className="w-14 h-14 bg-secondary-container rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Layers size={26} strokeWidth={2} className="text-secondary" aria-hidden="true" />
              </div>
              <h3 className="font-headline-md text-charcoal font-bold mb-1">Alberta</h3>
              <p className="text-label-sm text-royal-purple font-semibold mb-4">Programs of Study</p>
              <ul className="space-y-2"><li key="K–9 programs of study" className="flex items-start gap-2 text-label-md text-on-surface-variant"><CheckCircle2 size={15} className="text-lime-green shrink-0 mt-1" aria-hidden="true" />K–9 programs of study</li><li key="Math 10C, 20-1, 30-1 sequence" className="flex items-start gap-2 text-label-md text-on-surface-variant"><CheckCircle2 size={15} className="text-lime-green shrink-0 mt-1" aria-hidden="true" />Math 10C, 20-1, 30-1 sequence</li><li key="Diploma-track senior courses" className="flex items-start gap-2 text-label-md text-on-surface-variant"><CheckCircle2 size={15} className="text-lime-green shrink-0 mt-1" aria-hidden="true" />Diploma-track senior courses</li></ul>
            </div>
            <div className="p-8 bg-white rounded-2xl shadow-[0px_4px_20px_rgba(0,0,0,0.05)] border border-transparent hover:border-royal-purple/20 transition-all group">
              <div className="w-14 h-14 bg-lime-green/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Compass size={26} strokeWidth={2} className="text-secondary" aria-hidden="true" />
              </div>
              <h3 className="font-headline-md text-charcoal font-bold mb-1">British Columbia</h3>
              <p className="text-label-sm text-royal-purple font-semibold mb-4">Redesigned curriculum</p>
              <ul className="space-y-2"><li key="Big Ideas and competencies" className="flex items-start gap-2 text-label-md text-on-surface-variant"><CheckCircle2 size={15} className="text-lime-green shrink-0 mt-1" aria-hidden="true" />Big Ideas and competencies</li><li key="Grade 10–12 course pathways" className="flex items-start gap-2 text-label-md text-on-surface-variant"><CheckCircle2 size={15} className="text-lime-green shrink-0 mt-1" aria-hidden="true" />Grade 10–12 course pathways</li><li key="Applied Design and Skills" className="flex items-start gap-2 text-label-md text-on-surface-variant"><CheckCircle2 size={15} className="text-lime-green shrink-0 mt-1" aria-hidden="true" />Applied Design and Skills</li></ul>
            </div>
            <div className="p-8 bg-white rounded-2xl shadow-[0px_4px_20px_rgba(0,0,0,0.05)] border border-transparent hover:border-royal-purple/20 transition-all group">
              <div className="w-14 h-14 bg-royal-purple/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Route size={26} strokeWidth={2} className="text-royal-purple" aria-hidden="true" />
              </div>
              <h3 className="font-headline-md text-charcoal font-bold mb-1">Quebec & Beyond</h3>
              <p className="text-label-sm text-royal-purple font-semibold mb-4">QEP, Prairies and Atlantic</p>
              <ul className="space-y-2"><li key="Québec Education Program" className="flex items-start gap-2 text-label-md text-on-surface-variant"><CheckCircle2 size={15} className="text-lime-green shrink-0 mt-1" aria-hidden="true" />Québec Education Program</li><li key="Manitoba and Saskatchewan" className="flex items-start gap-2 text-label-md text-on-surface-variant"><CheckCircle2 size={15} className="text-lime-green shrink-0 mt-1" aria-hidden="true" />Manitoba and Saskatchewan</li><li key="Atlantic provinces and territories" className="flex items-start gap-2 text-label-md text-on-surface-variant"><CheckCircle2 size={15} className="text-lime-green shrink-0 mt-1" aria-hidden="true" />Atlantic provinces and territories</li></ul>
            </div>
          </div>
        </div>
      </section>

      {/* Key points */}
      <section className="py-24 bg-white">
        <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="text-center mb-16">
            <h2 className="font-headline-lg text-headline-lg text-charcoal font-bold mb-4">Why the Province Matters More Than the Country</h2>
            <p className="text-on-surface-variant font-body-md max-w-2xl mx-auto">“Canadian curriculum” describes nothing specific. These are the three places generic tutoring quietly goes wrong.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-8 bg-soft-gray rounded-2xl border border-outline-variant/30">
              <div className="w-12 h-12 rounded-xl bg-royal-purple/10 flex items-center justify-center mb-6">
                <Layers size={22} className="text-royal-purple" aria-hidden="true" />
              </div>
              <h3 className="font-headline-md text-charcoal font-bold mb-3">Sequencing Differs</h3>
              <p className="text-on-surface-variant font-body-md">The same topic appears in different grades across provinces. A tutor teaching to the wrong sequence will introduce material your child’s class covered last term, or has not reached yet.</p>
            </div>
            <div className="p-8 bg-soft-gray rounded-2xl border border-outline-variant/30">
              <div className="w-12 h-12 rounded-xl bg-royal-purple/10 flex items-center justify-center mb-6">
                <BookOpen size={22} className="text-royal-purple" aria-hidden="true" />
              </div>
              <h3 className="font-headline-md text-charcoal font-bold mb-3">Course Names Diverge</h3>
              <p className="text-on-surface-variant font-body-md">Ontario runs codes like MHF4U with no identically named equivalent elsewhere. Alberta’s comparable course is Math 30-1. Matching on the label alone gets it wrong surprisingly often.</p>
            </div>
            <div className="p-8 bg-soft-gray rounded-2xl border border-outline-variant/30">
              <div className="w-12 h-12 rounded-xl bg-royal-purple/10 flex items-center justify-center mb-6">
                <Scale size={22} className="text-royal-purple" aria-hidden="true" />
              </div>
              <h3 className="font-headline-md text-charcoal font-bold mb-3">Assessment Differs Too</h3>
              <p className="text-on-surface-variant font-body-md">Some provinces assess with high-stakes Grade 12 examinations, others with graduation assessments detached from any course. Preparation has to follow the model your child sits under.</p>
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
                <span>How Reporting Works</span>
              </div>
              <h2 className="font-headline-lg text-headline-lg text-charcoal font-bold mb-6">Reading a Canadian Report Card</h2>
              <p className="text-on-surface-variant font-body-md mb-8">Reporting varies between ministries, which makes comparing progress across a move genuinely difficult. These are the systems you are most likely to encounter.</p>
              <div className="bg-white rounded-2xl p-8 border border-outline-variant/30">
              <div className="pb-4 border-b border-outline-variant/60 last:border-0 last:pb-0">
                <p className="font-label-md text-charcoal font-semibold mb-1">Ontario</p>
                <p className="text-on-surface-variant font-body-md">Achievement levels 1 to 4, with Level 3 representing the provincial standard</p>
              </div>
              <div className="pb-4 border-b border-outline-variant/60 last:border-0 last:pb-0">
                <p className="font-label-md text-charcoal font-semibold mb-1">Alberta</p>
                <p className="text-on-surface-variant font-body-md">Percentage grades, with acceptable and standard of excellence benchmarks</p>
              </div>
              <div className="pb-4 border-b border-outline-variant/60 last:border-0 last:pb-0">
                <p className="font-label-md text-charcoal font-semibold mb-1">British Columbia</p>
                <p className="text-on-surface-variant font-body-md">Proficiency scale from Emerging through to Extending</p>
              </div>
              <div className="pb-4 border-b border-outline-variant/60 last:border-0 last:pb-0">
                <p className="font-label-md text-charcoal font-semibold mb-1">Senior grades</p>
                <p className="text-on-surface-variant font-body-md">Percentage marks that form the admission average universities assess</p>
              </div>
              </div>
              <p className="text-on-surface-variant font-label-md italic mt-6">Curriculum documents, course codes and reporting scales are set by provincial ministries and revised periodically. Confirm current details with your school or board.</p>
            </div>
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-royal-purple/10 text-royal-purple font-label-md text-sm font-semibold mb-6">
                <CalendarClock size={16} aria-hidden="true" />
                <span>Planning Ahead</span>
              </div>
              <h2 className="font-headline-lg text-headline-lg text-charcoal font-bold mb-6">Where Provincial Differences Bite Hardest</h2>
              <p className="text-on-surface-variant font-body-md mb-8">Most of the year passes without the province mattering much. Four moments are exceptions.</p>
              <div className="mt-4">
            <div className="relative pl-12 pb-10 border-l-2 border-outline-variant last:border-l-0 last:pb-0">
              <div className="absolute -left-[13px] top-0 w-6 h-6 rounded-full bg-royal-purple flex items-center justify-center">
                <span className="text-white text-[11px] font-bold">1</span>
              </div>
              <h3 className="font-headline-md text-charcoal font-bold mb-2">Moving province</h3>
              <p className="text-on-surface-variant font-body-md">The single biggest disruption. Content overlaps but sequencing does not, so gaps appear in places nobody thinks to check.</p>
            </div>
            <div className="relative pl-12 pb-10 border-l-2 border-outline-variant last:border-l-0 last:pb-0">
              <div className="absolute -left-[13px] top-0 w-6 h-6 rounded-full bg-royal-purple flex items-center justify-center">
                <span className="text-white text-[11px] font-bold">2</span>
              </div>
              <h3 className="font-headline-md text-charcoal font-bold mb-2">Grade 9 course selection</h3>
              <p className="text-on-surface-variant font-body-md">Stream and pathway choices open or close senior options, and the rules differ meaningfully between provinces.</p>
            </div>
            <div className="relative pl-12 pb-10 border-l-2 border-outline-variant last:border-l-0 last:pb-0">
              <div className="absolute -left-[13px] top-0 w-6 h-6 rounded-full bg-royal-purple flex items-center justify-center">
                <span className="text-white text-[11px] font-bold">3</span>
              </div>
              <h3 className="font-headline-md text-charcoal font-bold mb-2">Grade 10 to 11</h3>
              <p className="text-on-surface-variant font-body-md">Where prerequisites for Grade 12 courses are established. A weak result here narrows what is available next year.</p>
            </div>
            <div className="relative pl-12 pb-10 border-l-2 border-outline-variant last:border-l-0 last:pb-0">
              <div className="absolute -left-[13px] top-0 w-6 h-6 rounded-full bg-royal-purple flex items-center justify-center">
                <span className="text-white text-[11px] font-bold">4</span>
              </div>
              <h3 className="font-headline-md text-charcoal font-bold mb-2">Grade 12</h3>
              <p className="text-on-surface-variant font-body-md">Course marks become the admission average. At this point the province stops mattering and the number takes over.</p>
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
            <p className="text-on-surface-variant font-body-md max-w-2xl mx-auto">What Canadian families ask us most often about provincial curricula and matching.</p>
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
          <h2 className="font-headline-lg text-headline-lg font-bold">Matched to your province before the first lesson</h2>
          <p className="font-body-lg text-body-lg opacity-90 max-w-xl mx-auto">Tell us your province and grade, and we will pair your child with a tutor who knows the curriculum documents their school actually works from.</p>
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