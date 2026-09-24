'use client';

import React, { useState } from 'react';
import LigatureIcon from '@/components/LigatureIcon';
import { BookOpen, Brain, CalendarDays, Calculator, CheckCircle2, ChevronDown, ClipboardCheck, FlaskConical, Map, School, SmilePlus } from 'lucide-react';
import { useAppNavigate } from '@/lib/useAppNavigate';
import { FreeTrialForm } from '@/components/FreeTrial';

const FAQS = [
  {
    q: 'How many A-Levels should my child take?',
    a: "Most students in England take three A-Levels through Year 12 and 13, and this is what the majority of university courses expect. A small number of students add a fourth subject or an EPQ alongside three A-Levels, but depth usually serves an application better than breadth — three strong grades tend to open more doors than four stretched ones.",
  },
  {
    q: 'Does the AS-Level still count towards the final A-Level grade?',
    a: "Not in most subjects. Since the 2015 reforms, A-Levels in England became linear qualifications assessed by exams at the end of Year 13, and AS-Level was decoupled into a standalone qualification that no longer contributes to the full A-Level grade. Some schools still enter students for AS exams at the end of Year 12 as an internal checkpoint, but it's the Year 13 exams that determine the final A*-E grade.",
  },
  {
    q: 'How do UCAS points work for A-Levels?',
    a: "Each A-Level grade converts into a UCAS Tariff points score, which some universities use alongside — or instead of — grade-based offers. In practice, most competitive courses still make offers in specific grades (such as AAB or A*AA) rather than a points total alone, so we help students understand both systems and target the exact combination their chosen universities ask for.",
  },
  {
    q: 'What is the EPQ, and is it worth doing alongside A-Levels?',
    a: "The Extended Project Qualification is an optional, independently researched project — an extended essay, artefact, or investigation — assessed separately from your A-Levels and worth UCAS points on its own. Universities, including several highly selective ones, often view it favourably because it demonstrates independent research and time-management skills that a taught A-Level syllabus doesn't always show. It's not compulsory, but for a student applying to a competitive course it can strengthen an application meaningfully.",
  },
  {
    q: "Is one A-Level exam board easier than the others?",
    a: "No single board is reliably easier across every subject — AQA, Edexcel, and OCR each structure their specifications, question wording, and mark schemes differently, and a student can find one style suits them better without either being objectively harder. What matters far more is preparing with the right past papers and specification for the board your child is actually sitting, which is why we match tutoring materials to the exact exam board from day one.",
  },
  {
    q: 'When should A-Level tutoring start?',
    a: "The start of Year 12 is the ideal time, since it lets a tutor build strong subject foundations before the jump in difficulty from GCSE becomes overwhelming. That said, plenty of families come to us in Year 13 ahead of mock exams or final papers, and a focused revision programme in those final months can still make a real difference to the outcome.",
  },
];

export default function UKALevelsPage() {
  const { navigateTo } = useAppNavigate();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'Mathematics',
    message: ''
  });
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const toggleFaq = (idx: number) => setActiveFaq(activeFaq === idx ? null : idx);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      setFormSubmitted(true);
    }
  };

  return (
    <div className="bg-background text-on-surface font-body-md overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="learning-lane px-margin-mobile md:px-0 max-w-max-width mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-royal-purple/10 text-royal-purple rounded-full">
                <span className="material-symbols-outlined text-[18px]">verified</span>
                <span className="font-label-sm text-label-sm uppercase tracking-wider font-semibold">Top Rated UK Sixth-Form Tutoring</span>
              </div>
              <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-charcoal leading-tight font-bold">
                A-Levels Preparation Online with <span className="text-royal-purple">Expert UK Tutors</span>
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
                Whether your child is starting Year 12 or heading into final exams, our A-Levels preparation online lessons are built around their exact subject choices, exam board, and UCAS ambitions — not a generic revision pack.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button
                  onClick={() => navigateTo('trial')}
                  className="bg-royal-purple text-white px-8 py-4 rounded-full font-medium text-lg text-center hover:shadow-lg transition-all active:scale-95 cursor-pointer"
                >
                  Book a Free Trial Lesson
                </button>
                <a
                  href="#subjects-section"
                  className="border-2 border-royal-purple text-royal-purple px-8 py-4 rounded-full font-medium text-lg text-center hover:bg-royal-purple/5 transition-all cursor-pointer inline-block"
                >
                  Explore Subjects
                </a>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute -inset-4 bg-lime-green/20 rounded-[2rem] blur-2xl group-hover:bg-lime-green/30 transition-all"></div>
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white">
                <img
                  className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                  alt="A sixth-form tutor guiding an A-Level student through exam technique in the UK"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3k0vu8Tg3YUMNFs4pRgue5UNIQWPgpMyoQYwplh0zysRdVH48wM9XHcQph5Zgva9c60ifDYUb87JsC_GUn1R7iw601Lwtr3zrjoqsYXcqZMVlfPt4ke1xUG3jboqxzHyoL7sfSBeK1SASSJ_j8LpLXEZFI61x-AKLxyCgik1K6p7ktNMrzBTamBcp-xQE0BIolbmoBejxeUqzsAVl980BvvDz816xje9HVyTobd2Z4ahPLUgSp9GBKA"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is A-Level Section */}
      <section className="py-24 bg-soft-gray">
        <div className="learning-lane px-margin-mobile md:px-0 text-center max-w-max-width mx-auto">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="font-headline-lg text-headline-lg text-charcoal font-bold">Understanding the A-Level Journey</h2>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              A-Levels are the two-year qualifications studied in sixth form or college, typically between the ages of 16 and 18, and they carry far more weight for university admissions than GCSEs. Since the 2015 reforms, most A-Levels have become linear qualifications assessed almost entirely by exams sat at the end of Year 13, with AS-Level now a separate, standalone qualification in most subjects rather than a stepping stone toward the final grade. At Math Make Smart, we help students navigate this narrower, deeper style of study — one where subject choice, exam board, and UCAS timing all matter.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12">
              {[
                { icon: CalendarDays, color: 'bg-royal-purple/10 text-royal-purple', title: 'Year 12-13', desc: 'Two years of self-directed, subject-specialist study that culminates in linear exams rather than modular assessments.' },
                { icon: School, color: 'bg-lime-green/20 text-secondary', title: 'A*-E & UCAS Points', desc: 'Grades convert into UCAS Tariff points, which sit alongside grade-specific offers from universities.' },
                { icon: ClipboardCheck, color: 'bg-royal-purple/10 text-royal-purple', title: 'University Applications', desc: 'Predicted grades, personal statements, and UCAS deadlines run in parallel with the coursework itself.' },
              ].map((item) => (
                <div key={item.title} className="bg-white p-8 rounded-xl shadow-[0px_4px_20px_rgba(0,0,0,0.05)] text-center">
                  <div className={`w-12 h-12 ${item.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <item.icon size={24} aria-hidden="true" />
                  </div>
                  <h3 className="font-headline-md text-headline-md mb-2 font-bold text-charcoal">{item.title}</h3>
                  <p className="text-on-surface-variant">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Subjects */}
      <section className="py-24" id="subjects-section">
        <div className="learning-lane px-margin-mobile md:px-0 max-w-max-width mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-headline-lg text-headline-lg text-charcoal mb-4 font-bold">Core Subjects We Master</h2>
            <p className="font-body-md text-body-md text-on-surface-variant">Our online tutors for A-Levels preparation focus where the numbers matter most: maths, the sciences, and the subjects that support them.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Calculator, title: 'Mathematics & Further Maths',
                items: ['Pure, Mechanics & Statistics content', 'Further Maths for STEM applicants', 'Exam board-specific formula booklets & technique'],
                nav: () => navigateTo('subject', 'Maths'),
              },
              {
                icon: FlaskConical, title: 'Sciences',
                items: ['Biology, Chemistry & Physics A-Level', 'Practical endorsement and CPAC skills', 'Long-answer and data-response exam technique'],
                nav: () => navigateTo('subject', 'Science'),
              },
              {
                icon: Map, title: 'Economics & Social Sciences',
                items: ['Economics, Business & Psychology', 'Extended-response and essay planning', 'Applying theory to real-world case studies'],
                nav: () => navigateTo('subject', 'Economics'),
              },
            ].map((subject) => (
              <div key={subject.title} className="group bg-white p-10 rounded-[2rem] shadow-[0px_4px_20px_rgba(0,0,0,0.05)] border border-transparent hover:border-royal-purple/20 transition-all duration-300">
                <div className="w-16 h-16 bg-royal-purple text-white rounded-2xl flex items-center justify-center mb-8 transform group-hover:rotate-6 transition-transform">
                  <subject.icon size={30} aria-hidden="true" />
                </div>
                <h3 className="font-headline-md text-headline-md mb-4 text-charcoal font-bold">{subject.title}</h3>
                <ul className="space-y-4 mb-8">
                  {subject.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 size={20} className="text-lime-green" aria-hidden="true" />
                      <span className="text-on-surface-variant">{item}</span>
                    </li>
                  ))}
                </ul>
                <button onClick={subject.nav} className="text-royal-purple font-bold flex items-center gap-2 group-hover:translate-x-1 transition-transform cursor-pointer">
                  Learn more <LigatureIcon name="arrow_forward" className="text-sm" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Exam Board Expertise */}
      <section className="py-24 bg-royal-purple text-white">
        <div className="learning-lane px-margin-mobile md:px-0 max-w-max-width mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2">
            <h2 className="font-headline-lg text-headline-lg mb-6 font-bold">Expertise Across All UK A-Level Boards</h2>
            <p className="font-body-lg text-body-lg opacity-90 leading-relaxed">
              At A-Level, exam board choice shapes far more than the reading list. AQA, Edexcel, and OCR each write their own mark schemes, question phrasing, and formula sheets, and a past paper from one board rarely prepares a student well for another. Our tutors work from your child's actual specification, matching every practice paper and mock exam to the board they will really sit.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-3 sm:gap-6 md:w-1/2 w-full">
            {['AQA', 'EDEXCEL', 'OCR'].map((board) => (
              <div key={board} className="bg-white/10 backdrop-blur-md p-4 sm:p-6 rounded-2xl border border-white/20 flex items-center justify-center min-h-[80px]">
                <span className="font-bold text-lg sm:text-xl lg:text-2xl text-white tracking-wider uppercase">{board}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Families Trust Us */}
      <section className="py-24">
        <div className="learning-lane px-margin-mobile md:px-0 max-w-max-width mx-auto">
          <div className="text-center mb-20">
            <h2 className="font-headline-lg text-headline-lg text-charcoal mb-4 font-bold">Why Families Choose Online Tutors for A-Levels Preparation</h2>
            <p className="font-body-md text-body-md text-on-surface-variant">The pillars of our patient and professional approach to sixth-form tutoring.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Brain, color: 'bg-lime-green/20 text-secondary', title: 'Specification Specialists', desc: "Tutors who teach the actual AQA, Edexcel, and OCR specifications day in, day out — not generalists reading a syllabus for the first time." },
              { icon: Map, color: 'bg-royal-purple/10 text-royal-purple', title: 'UCAS & University Guidance', desc: 'Our university application support covers subject-combination advice and personal statement feedback, aligned to real UCAS offers.' },
              { icon: ClipboardCheck, color: 'bg-lime-green/20 text-secondary', title: 'Mock Exam Mastery', desc: 'Timed A-Level mock exams, NEA support, and detailed feedback build the stamina final papers demand.' },
              { icon: SmilePlus, color: 'bg-royal-purple/10 text-royal-purple', title: 'Confidence Building', desc: 'We help students manage the step up in difficulty from GCSE, so independent study feels manageable rather than daunting.' },
            ].map((item) => (
              <div key={item.title} className="text-center p-6 space-y-4">
                <div className={`w-20 h-20 ${item.color} rounded-full flex items-center justify-center mx-auto mb-6`}>
                  <item.icon size={30} aria-hidden="true" />
                </div>
                <h4 className="font-headline-md text-headline-md text-charcoal font-bold">{item.title}</h4>
                <p className="text-on-surface-variant font-body-md">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-16">
            <p className="text-on-surface-variant font-body-md max-w-2xl mx-auto">
              Coming up from Year 10 or 11? A strong grounding from{' '}
              <button
                onClick={() => navigateTo('test-prep', 'GCSE')}
                className="text-royal-purple font-bold underline underline-offset-2 cursor-pointer"
              >
                GCSE preparation
              </button>{' '}
              makes the step up to A-Level far less daunting, and our tutors are just as happy to start working with your child before sixth form begins.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-soft-gray" id="faq-section">
        <div className="learning-lane px-margin-mobile md:px-0 max-w-max-width mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-headline-lg text-headline-lg text-charcoal mb-4 font-bold">A-Level-Specific FAQs</h2>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto">Honest answers to the questions UK parents ask us most before starting A-Level tutoring.</p>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {FAQS.map((faq, idx) => (
              <div
                key={idx}
                className={`bg-white rounded-2xl border transition-all cursor-pointer ${
                  activeFaq === idx ? 'border-royal-purple shadow-lg' : 'border-transparent shadow-[0px_4px_20px_rgba(0,0,0,0.05)]'
                }`}
                onClick={() => toggleFaq(idx)}
              >
                <div className="flex justify-between items-center p-6 gap-4">
                  <h3 className="text-body-lg font-bold text-charcoal">{faq.q}</h3>
                  <ChevronDown
                    size={22}
                    className={`shrink-0 transition-transform duration-200 ${activeFaq === idx ? 'rotate-180 text-royal-purple' : 'text-charcoal'}`}
                  />
                </div>
                {activeFaq === idx && (
                  <div className="px-6 pb-6 text-on-surface-variant text-body-md">{faq.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Book a Free Trial */}
      <section className="py-24 bg-soft-gray overflow-hidden relative" id="book-trial">
        <div className="learning-lane px-margin-mobile md:px-0 max-w-max-width mx-auto">
          <div className="bg-white rounded-[3rem] shadow-xl overflow-hidden flex flex-col lg:flex-row">
            <div className="lg:w-1/2 p-12 lg:p-20 space-y-8">
              <div>
                <h2 className="font-headline-lg text-headline-lg text-charcoal mb-4 font-bold">Secure Your Free A-Level Trial Lesson</h2>
                <p className="text-on-surface-variant text-body-lg">No obligations. Just a chance for your child to experience how focused, exam board-specific A-Level tutoring feels.</p>
              </div>

           <FreeTrialForm />

            </div>
            <div className="hidden lg:block lg:w-1/2 relative">
              <img className="absolute inset-0 w-full h-full object-cover" alt="A focused sixth-form student revising for A-Levels in the UK" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCYCUJcXhUtMGJ8kHDhchbqDVkwOw6byBigwop3E66ulr1f-GizLPnqPgDBUlgq5LtL6FMF8Vu8kqiEy67WDdI-B31rpVERMrPmDwc8BTfVYXie5y7H_HJbPdV6xbwHrSk3Gkr1AefBybqpzAgrjyZnOcn2XtSTLIBizH1If_FNb_vLbusmYDVxTejk_GazgmYPFcMw6507M0U5A-_2dJdRhpGEwxQsxsaTKrCIUQiu9f8XxmPSUuI54g" />
              <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-transparent"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}