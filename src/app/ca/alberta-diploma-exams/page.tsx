'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FileBadge, CheckCircle2, ChevronDown, ChevronRight, CalendarClock, Scale, Calculator, FlaskConical, BookOpen, AlertCircle } from 'lucide-react';

const FAQS = [
  { q: "How much does the diploma exam count toward my final mark?", a: "The final course mark is a blend of the school-awarded mark and the diploma examination result, weighted in favour of course work. A combined mark of at least 50 per cent is required to pass the course. The practical implication is that a strong year in class provides a cushion but not immunity, and a poor examination can pull a solid grade down noticeably. Confirm the current weighting with your school, since it has been changed before." },
  { q: "Can my child rewrite a diploma exam?", a: "Yes. Diploma examinations are offered in multiple sittings across the school year, so a student who is unwell or performs below expectation can write again. Rewriting is worth considering when there is a clear reason the first attempt went badly. Where the result reflects a genuine gap in understanding, the honest answer is that rewriting without changing the preparation rarely changes the outcome." },
  { q: "What happens if a student misses the exam?", a: "Alberta Education operates exemption and deferral processes for genuine circumstances such as illness. This became relevant recently: the January 2026 diploma examinations were cancelled, with affected students able to write in April or June instead, and those who chose not to write receiving their school-awarded mark with a transcript notation. Arrangements of this kind are decided centrally, so your school is the right source for what applies." },
  { q: "Which diploma subjects are hardest to prepare for?", a: "Mathematics 30-1 and the sciences tend to demand the most structured revision, because the content is cumulative and the examination samples across the whole course rather than the most recent unit. English Language Arts and Social Studies reward a different skill, being largely about constructing an argument under time pressure, which is trainable but takes longer to shift than filling a content gap." },
  { q: "When should diploma preparation begin?", a: "September of Grade 12 for the subjects that matter most to your child\u2019s post-secondary plans. That sounds early, but the reason is practical: diploma questions differ from classroom assessments, and students who sit their first past examination in April discover a format problem with no time left to fix it. A baseline in the autumn costs one afternoon and reshapes the entire year." },
  { q: "Do diploma results affect university admission?", a: "Yes, because the final blended mark is what appears on the transcript, and Alberta universities admit on those Grade 12 marks. This is why the examination carries more weight than its share of the grade suggests: it is not a separate score sitting beside the transcript, it is folded into the number admissions officers read." },
  { q: "Does the digital format make the exam harder?", a: "Not harder, but different, and the difference catches students out. Annotating a text, sketching a diagram or working through a calculation on screen is not the same as doing it on paper, and reading long passages digitally takes practice. Students who write practice examinations in the same format arrive without that adjustment cost." },
  { q: "Are Math 30-1 and 30-2 interchangeable?", a: "No. They are distinct courses with different content and different post-secondary destinations. Math 30-1 is the prerequisite for most science, engineering and commerce programs; 30-2 opens other pathways but closes those. The choice is made before Grade 12 and is difficult to reverse, so it deserves a conversation about the intended degree rather than about which course looks easier." }
];

export default function CAAlbertaDiplomaPage() {
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
                <FileBadge size={16} strokeWidth={2.25} aria-hidden="true" />
                Alberta · Grade 12
              </div>
              <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-charcoal leading-tight font-bold">
                Alberta Diploma Exam <span className="text-royal-purple">Preparation Online</span>
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
                Online tutors for Alberta Diploma Exam preparation. These are the highest-stakes provincial examinations in Canada: the exam mark is blended with the school-awarded mark to produce the final course grade that appears on the transcript.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button onClick={() => router.push('/free-trial')} className="bg-royal-purple text-white px-8 py-4 rounded-xl font-headline-md font-bold hover:shadow-xl transition-all cursor-pointer">Book a Free Assessment</button>
                <button onClick={() => { const el = document.getElementById('structure'); if (el) el.scrollIntoView({ behavior: 'smooth' }); }} className="border-2 border-royal-purple text-royal-purple px-8 py-4 rounded-xl font-headline-md font-bold hover:bg-royal-purple/5 transition-all cursor-pointer">See the Exam Subjects</button>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img className="w-full h-[440px] object-cover" alt="An Alberta Grade 12 student preparing for diploma examinations online" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBIC2148RcAcfRXxnZOcCNJC2Yr32DtyHa7d1TOD82ZBuHm5-qZ-Hfyjuic-1MLI6po5tOU8XT7FUpGqvgdHGzRwEInHX72mGWsxX-9nVAlOqT4sbH-gqYAG5YfaLbivq9Je_ZI7ity8vsit3aPnhFxzYCZ7Vd3uaU5jtItj5k130NViqjkJsMWfhwBn54qZk6DOAoC1XqgTsCbUlAYR6O8_Q9eb3Xz1j99Ujc64cOxRy0f-IOnZz3fvw" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Structure */}
      <section className="py-24 bg-soft-gray" id="structure">
        <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="text-center mb-16">
            <h2 className="font-headline-lg text-headline-lg text-charcoal font-bold mb-4">Diploma Exam Subjects</h2>
            <p className="text-on-surface-variant font-body-md max-w-2xl mx-auto">Written at the end of designated 30-level courses, in three sittings across the school year.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-8 bg-white rounded-2xl shadow-[0px_4px_20px_rgba(0,0,0,0.05)] border border-transparent hover:border-royal-purple/20 transition-all group">
              <div className="w-14 h-14 bg-primary-fixed rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Calculator size={26} strokeWidth={2} className="text-royal-purple" aria-hidden="true" />
              </div>
              <h3 className="font-headline-md text-charcoal font-bold mb-1">Mathematics</h3>
              <p className="text-label-sm text-royal-purple font-semibold mb-4">Math 30-1 and 30-2</p>
              <ul className="space-y-2"><li key="Relations and functions" className="flex items-start gap-2 text-label-md text-on-surface-variant"><CheckCircle2 size={15} className="text-lime-green shrink-0 mt-1" aria-hidden="true" />Relations and functions</li><li key="Trigonometry and logarithms" className="flex items-start gap-2 text-label-md text-on-surface-variant"><CheckCircle2 size={15} className="text-lime-green shrink-0 mt-1" aria-hidden="true" />Trigonometry and logarithms</li><li key="Permutations and probability" className="flex items-start gap-2 text-label-md text-on-surface-variant"><CheckCircle2 size={15} className="text-lime-green shrink-0 mt-1" aria-hidden="true" />Permutations and probability</li></ul>
            </div>
            <div className="p-8 bg-white rounded-2xl shadow-[0px_4px_20px_rgba(0,0,0,0.05)] border border-transparent hover:border-royal-purple/20 transition-all group">
              <div className="w-14 h-14 bg-secondary-container rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <FlaskConical size={26} strokeWidth={2} className="text-secondary" aria-hidden="true" />
              </div>
              <h3 className="font-headline-md text-charcoal font-bold mb-1">Sciences</h3>
              <p className="text-label-sm text-royal-purple font-semibold mb-4">Biology, Chemistry, Physics 30</p>
              <ul className="space-y-2"><li key="Written response sections" className="flex items-start gap-2 text-label-md text-on-surface-variant"><CheckCircle2 size={15} className="text-lime-green shrink-0 mt-1" aria-hidden="true" />Written response sections</li><li key="Data interpretation" className="flex items-start gap-2 text-label-md text-on-surface-variant"><CheckCircle2 size={15} className="text-lime-green shrink-0 mt-1" aria-hidden="true" />Data interpretation</li><li key="Applied problem solving" className="flex items-start gap-2 text-label-md text-on-surface-variant"><CheckCircle2 size={15} className="text-lime-green shrink-0 mt-1" aria-hidden="true" />Applied problem solving</li></ul>
            </div>
            <div className="p-8 bg-white rounded-2xl shadow-[0px_4px_20px_rgba(0,0,0,0.05)] border border-transparent hover:border-royal-purple/20 transition-all group">
              <div className="w-14 h-14 bg-lime-green/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <BookOpen size={26} strokeWidth={2} className="text-secondary" aria-hidden="true" />
              </div>
              <h3 className="font-headline-md text-charcoal font-bold mb-1">English</h3>
              <p className="text-label-sm text-royal-purple font-semibold mb-4">ELA 30-1 and 30-2</p>
              <ul className="space-y-2"><li key="Critical and personal response" className="flex items-start gap-2 text-label-md text-on-surface-variant"><CheckCircle2 size={15} className="text-lime-green shrink-0 mt-1" aria-hidden="true" />Critical and personal response</li><li key="Text analysis" className="flex items-start gap-2 text-label-md text-on-surface-variant"><CheckCircle2 size={15} className="text-lime-green shrink-0 mt-1" aria-hidden="true" />Text analysis</li><li key="Written composition" className="flex items-start gap-2 text-label-md text-on-surface-variant"><CheckCircle2 size={15} className="text-lime-green shrink-0 mt-1" aria-hidden="true" />Written composition</li></ul>
            </div>
            <div className="p-8 bg-white rounded-2xl shadow-[0px_4px_20px_rgba(0,0,0,0.05)] border border-transparent hover:border-royal-purple/20 transition-all group">
              <div className="w-14 h-14 bg-royal-purple/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <FileBadge size={26} strokeWidth={2} className="text-royal-purple" aria-hidden="true" />
              </div>
              <h3 className="font-headline-md text-charcoal font-bold mb-1">Social Studies</h3>
              <p className="text-label-sm text-royal-purple font-semibold mb-4">Social 30-1 and 30-2</p>
              <ul className="space-y-2"><li key="Source interpretation" className="flex items-start gap-2 text-label-md text-on-surface-variant"><CheckCircle2 size={15} className="text-lime-green shrink-0 mt-1" aria-hidden="true" />Source interpretation</li><li key="Position papers" className="flex items-start gap-2 text-label-md text-on-surface-variant"><CheckCircle2 size={15} className="text-lime-green shrink-0 mt-1" aria-hidden="true" />Position papers</li><li key="Ideological perspectives" className="flex items-start gap-2 text-label-md text-on-surface-variant"><CheckCircle2 size={15} className="text-lime-green shrink-0 mt-1" aria-hidden="true" />Ideological perspectives</li></ul>
            </div>
          </div>
        </div>
      </section>

      {/* Key points */}
      <section className="py-24 bg-white">
        <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="text-center mb-16">
            <h2 className="font-headline-lg text-headline-lg text-charcoal font-bold mb-4">Why Diploma Exams Deserve Real Preparation</h2>
            <p className="text-on-surface-variant font-body-md max-w-2xl mx-auto">Alberta is one of the last Canadian jurisdictions using a high-stakes graduation examination model, and the arithmetic is unforgiving.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-8 bg-soft-gray rounded-2xl border border-outline-variant/30">
              <div className="w-12 h-12 rounded-xl bg-royal-purple/10 flex items-center justify-center mb-6">
                <Scale size={22} className="text-royal-purple" aria-hidden="true" />
              </div>
              <h3 className="font-headline-md text-charcoal font-bold mb-3">The Exam Counts Toward the Grade</h3>
              <p className="text-on-surface-variant font-body-md">The final course mark blends the school-awarded mark with the diploma exam result. A student can be performing solidly all year and still see the transcript number move on results day.</p>
            </div>
            <div className="p-8 bg-soft-gray rounded-2xl border border-outline-variant/30">
              <div className="w-12 h-12 rounded-xl bg-royal-purple/10 flex items-center justify-center mb-6">
                <AlertCircle size={22} className="text-royal-purple" aria-hidden="true" />
              </div>
              <h3 className="font-headline-md text-charcoal font-bold mb-3">A Small Slice of a Large Course</h3>
              <p className="text-on-surface-variant font-body-md">A diploma exam samples a fraction of what was taught across a semester. That makes topic coverage uneven by design, and makes structured revision across the whole course more valuable than depth in favourites.</p>
            </div>
            <div className="p-8 bg-soft-gray rounded-2xl border border-outline-variant/30">
              <div className="w-12 h-12 rounded-xl bg-royal-purple/10 flex items-center justify-center mb-6">
                <Calculator size={22} className="text-royal-purple" aria-hidden="true" />
              </div>
              <h3 className="font-headline-md text-charcoal font-bold mb-3">Digital Delivery Changes Technique</h3>
              <p className="text-on-surface-variant font-body-md">Diploma exams are now written digitally, which alters how students annotate, work through problems and manage time. Practising in the format matters as much as practising the content.</p>
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
                <span>How the Final Mark Is Built</span>
              </div>
              <h2 className="font-headline-lg text-headline-lg text-charcoal font-bold mb-6">The Blend That Produces Your Transcript Grade</h2>
              <p className="text-on-surface-variant font-body-md mb-8">This is the part every Alberta family should understand before Grade 12 begins, because it changes how much a single day matters.</p>
              <div className="bg-white rounded-2xl p-8 border border-outline-variant/30">
              <div className="pb-4 border-b border-outline-variant/60 last:border-0 last:pb-0">
                <p className="font-label-md text-charcoal font-semibold mb-1">Course work</p>
                <p className="text-on-surface-variant font-body-md">The majority of the final mark comes from the school-awarded grade</p>
              </div>
              <div className="pb-4 border-b border-outline-variant/60 last:border-0 last:pb-0">
                <p className="font-label-md text-charcoal font-semibold mb-1">Diploma exam</p>
                <p className="text-on-surface-variant font-body-md">The balance comes from the provincial examination result</p>
              </div>
              <div className="pb-4 border-b border-outline-variant/60 last:border-0 last:pb-0">
                <p className="font-label-md text-charcoal font-semibold mb-1">To pass</p>
                <p className="text-on-surface-variant font-body-md">A combined final mark of at least 50 per cent is required</p>
              </div>
              <div className="pb-4 border-b border-outline-variant/60 last:border-0 last:pb-0">
                <p className="font-label-md text-charcoal font-semibold mb-1">Sittings</p>
                <p className="text-on-surface-variant font-body-md">Exams are offered across the school year, so a rewrite is possible</p>
              </div>
              </div>
              <p className="text-on-surface-variant font-label-md italic mt-6">Weightings, sittings and exemption rules are set by Alberta Education and have been revised before. Note that the January 2026 diploma examinations were cancelled, with affected students able to write in April or June. Confirm current arrangements with your school.</p>
            </div>
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-royal-purple/10 text-royal-purple font-label-md text-sm font-semibold mb-6">
                <CalendarClock size={16} aria-hidden="true" />
                <span>Planning Ahead</span>
              </div>
              <h2 className="font-headline-lg text-headline-lg text-charcoal font-bold mb-6">Preparing Across Grade 12</h2>
              <p className="text-on-surface-variant font-body-md mb-8">The students who do best treat the diploma as a year-long project rather than an examination period.</p>
              <div className="mt-4">
            <div className="relative pl-12 pb-10 border-l-2 border-outline-variant last:border-l-0 last:pb-0">
              <div className="absolute -left-[13px] top-0 w-6 h-6 rounded-full bg-royal-purple flex items-center justify-center">
                <span className="text-white text-[11px] font-bold">1</span>
              </div>
              <h3 className="font-headline-md text-charcoal font-bold mb-2">September to October</h3>
              <p className="text-on-surface-variant font-body-md">Establish a baseline on a past examination. Diploma questions are unlike most classroom tests, and finding that out in April is too late.</p>
            </div>
            <div className="relative pl-12 pb-10 border-l-2 border-outline-variant last:border-l-0 last:pb-0">
              <div className="absolute -left-[13px] top-0 w-6 h-6 rounded-full bg-royal-purple flex items-center justify-center">
                <span className="text-white text-[11px] font-bold">2</span>
              </div>
              <h3 className="font-headline-md text-charcoal font-bold mb-2">November to December</h3>
              <p className="text-on-surface-variant font-body-md">Work through the topics the course has covered so far while they are still fresh, rather than revisiting everything at once in spring.</p>
            </div>
            <div className="relative pl-12 pb-10 border-l-2 border-outline-variant last:border-l-0 last:pb-0">
              <div className="absolute -left-[13px] top-0 w-6 h-6 rounded-full bg-royal-purple flex items-center justify-center">
                <span className="text-white text-[11px] font-bold">3</span>
              </div>
              <h3 className="font-headline-md text-charcoal font-bold mb-2">January sitting</h3>
              <p className="text-on-surface-variant font-body-md">Some students write in January. Where that applies, preparation compresses accordingly and needs planning from the autumn.</p>
            </div>
            <div className="relative pl-12 pb-10 border-l-2 border-outline-variant last:border-l-0 last:pb-0">
              <div className="absolute -left-[13px] top-0 w-6 h-6 rounded-full bg-royal-purple flex items-center justify-center">
                <span className="text-white text-[11px] font-bold">4</span>
              </div>
              <h3 className="font-headline-md text-charcoal font-bold mb-2">April to June</h3>
              <p className="text-on-surface-variant font-body-md">Full timed practice under examination conditions, in the digital format, across the complete course.</p>
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
            <p className="text-on-surface-variant font-body-md max-w-2xl mx-auto">What Alberta families ask us most often about diploma exams and final marks.</p>
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
          <h2 className="font-headline-lg text-headline-lg font-bold">Start the diploma year with a baseline</h2>
          <p className="font-body-lg text-body-lg opacity-90 max-w-xl mx-auto">Book a free assessment lesson and find out where your child stands against an actual diploma examination, while there is still a full year to act on the answer.</p>
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