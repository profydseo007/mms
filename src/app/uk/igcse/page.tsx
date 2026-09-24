'use client';

import React, { useState } from 'react';
import LigatureIcon from '@/components/LigatureIcon';
import { BookOpen, Brain, CalendarDays, Calculator, CheckCircle2, ChevronDown, ClipboardCheck, FlaskConical, Map, School, SmilePlus } from 'lucide-react';
import { useAppNavigate } from '@/lib/useAppNavigate';
import { FreeTrialForm } from '@/components/FreeTrial';

const FAQS = [
  {
    q: "What's the actual difference between iGCSE and GCSE?",
    a: "Both sit at the same level and are taken around age 14-16, but they're set by different bodies. Standard GCSEs are regulated by Ofqual for schools in England. The International GCSE (iGCSE) is set by Cambridge International or Pearson Edexcel International and used by UK independent schools and international schools worldwide. The biggest practical difference is assessment: most iGCSE subjects are marked almost entirely on final written exams, with little or none of the grade coming from coursework or controlled assessment.",
  },
  {
    q: 'Is the iGCSE recognised by UK universities?',
    a: "Yes. UK universities and UCAS treat iGCSE grades as equivalent to GCSE grades when assessing applications, and independent schools have been entering pupils for Cambridge and Edexcel International qualifications for decades. It's also recognised internationally, which matters if your family may relocate or your child is applying to schools or universities outside the UK.",
  },
  {
    q: "Does my child's iGCSE use A*-G or 9-1 grades?",
    a: 'It depends on the exam board, so it is worth checking your school\'s syllabus rather than assuming. Cambridge International IGCSEs are still reported on the traditional A*-G scale. Pearson Edexcel International GCSEs, on the other hand, have moved fully to the 9-1 numerical scale to mirror reformed UK GCSEs. Universities and schools treat both scales as directly comparable, and our tutors work with whichever grading system your child\'s specification uses.',
  },
  {
    q: 'Why do UK independent schools choose iGCSE over standard GCSE?',
    a: "Many independent schools moved to iGCSE because it sits outside the national curriculum and Ofqual's coursework rules, which gives schools more freedom over how subjects are taught and assessed. Historically this meant fewer controlled assessments (particularly valued in subjects like Maths and Sciences) and syllabuses schools felt prepared pupils more rigorously for A-Level study. Some schools use iGCSE across the board; others mix iGCSE and GCSE subject by subject.",
  },
  {
    q: 'Is iGCSE Science still practical, or is it all written exams?',
    a: "Practical skills are still part of the specification, but they're typically assessed differently to standard GCSE. Rather than a series of assessed coursework practicals throughout Year 10 and 11, most iGCSE Science routes examine practical technique through dedicated written papers - questions on method, data handling, and experimental design - alongside the theory papers. We make sure students have actually seen and understood the practicals the exam expects them to reason about, not just memorised the theory.",
  },
  {
    q: 'Which exam board does Math Make Smart tutor for - Cambridge or Edexcel?',
    a: "Both. Our tutors work across Cambridge International (CAIE) and Pearson Edexcel International specifications for Maths, English, and the Sciences, and can support OxfordAQA International GCSE syllabuses as well. Tell us which board your child's school follows and we'll build sessions around that exact specification, using the matching past papers and mark schemes.",
  },
  {
    q: 'Can iGCSE tutoring help my child prepare for A-Levels afterwards?',
    a: "Yes - it's one of the reasons independent schools favour iGCSE in the first place, as the exam-only format is closer in style to A-Level assessment than continuous coursework. We build study habits and exam technique during iGCSE prep that carry straight into sixth form, and we're happy to talk through progression planning for A-Levels once your child's iGCSE results are in.",
  },
];

export default function UKiGCSEPage() {
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
                <span className="font-label-sm text-label-sm uppercase tracking-wider font-semibold">Specialists in Cambridge &amp; Edexcel International</span>
              </div>
              <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-charcoal leading-tight font-bold">
                iGCSE Preparation Online for <span className="text-royal-purple">UK Independent School</span> Students
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
                Our iGCSE preparation online is built for UK families whose children sit Cambridge International or Pearson Edexcel International exams instead of, or alongside, standard GCSE. Exam-only assessment rewards a different kind of preparation, and that's exactly what we specialise in.
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
                  alt="A tutor helping a UK independent school student prepare for iGCSE exams"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3k0vu8Tg3YUMNFs4pRgue5UNIQWPgpMyoQYwplh0zysRdVH48wM9XHcQph5Zgva9c60ifDYUb87JsC_GUn1R7iw601Lwtr3zrjoqsYXcqZMVlfPt4ke1xUG3jboqxzHyoL7sfSBeK1SASSJ_j8LpLXEZFI61x-AKLxyCgik1K6p7ktNMrzBTamBcp-xQE0BIolbmoBejxeUqzsAVl980BvvDz816xje9HVyTobd2Z4ahPLUgSp9GBKA"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is iGCSE Section */}
      <section className="py-24 bg-soft-gray">
        <div className="learning-lane px-margin-mobile md:px-0 text-center max-w-max-width mx-auto">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="font-headline-lg text-headline-lg text-charcoal font-bold">Understanding the iGCSE Journey</h2>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              The International GCSE sits at the same level as the UK GCSE but follows a different specification, set by Cambridge International or Pearson Edexcel International rather than Ofqual. Many UK independent schools and international schools choose it because it sits outside the national curriculum, giving them more flexibility over syllabus content and assessment style. At Math Make Smart, we tutor to the exact specification your child's school uses, not a generic revision guide.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12">
              {[
                { icon: CalendarDays, color: 'bg-royal-purple/10 text-royal-purple', title: 'Year 10-11', desc: 'A two-year cycle on the same UK school timeline, examined by an internationally benchmarked syllabus rather than the national curriculum.' },
                { icon: School, color: 'bg-lime-green/20 text-secondary', title: 'Grading Varies by Board', desc: 'Cambridge International IGCSE still reports A*-G, while Edexcel International GCSE has moved to the 9-1 scale — we\'ll confirm which applies to your child.' },
                { icon: ClipboardCheck, color: 'bg-royal-purple/10 text-royal-purple', title: 'Exam-Only Assessment', desc: 'Most subjects are graded almost entirely on final written papers, with little or no coursework contributing to the result.' },
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
            <p className="font-body-md text-body-md text-on-surface-variant">Our online tutors for iGCSE preparation focus on the three subjects UK independent schools most commonly sit under Cambridge and Edexcel International.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Calculator, title: 'Mathematics',
                items: ['Cambridge & Edexcel International specifications', 'Non-calculator and calculator paper technique', 'Exam-only structure — no coursework safety net'],
                nav: () => navigateTo('subject', 'Maths'),
              },
              {
                icon: BookOpen, title: 'English',
                items: ['First Language / English Language International syllabuses', 'Extended writing and composition practice', 'Comprehension and unseen text analysis by board'],
                nav: () => navigateTo('subject', 'English'),
              },
              {
                icon: FlaskConical, title: 'Science',
                items: ['Combined or Triple Science International routes', 'Practical technique for written practical-skills papers', 'Biology, Chemistry & Physics core content drilling'],
                nav: () => navigateTo('subject', 'Science'),
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
            <h2 className="font-headline-lg text-headline-lg mb-6 font-bold">Expertise Across Every iGCSE Board</h2>
            <p className="font-body-lg text-body-lg opacity-90 leading-relaxed">
              iGCSE isn't one single qualification — it's a family of specifications set by different boards, each with its own paper structure and grading scale. Our tutors work fluently across Cambridge International and Edexcel International syllabuses, so your child revises past papers and mark schemes that match exactly what they'll sit, rather than a generic international curriculum overview.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-3 sm:gap-6 md:w-1/2 w-full">
            {['CAMBRIDGE INTERNATIONAL', 'EDEXCEL INTERNATIONAL', 'OXFORDAQA'].map((board) => (
              <div key={board} className="bg-white/10 backdrop-blur-md p-4 sm:p-6 rounded-2xl border border-white/20 flex items-center justify-center min-h-[80px]">
                <span className="font-bold text-sm sm:text-lg lg:text-xl text-white tracking-wider uppercase text-center">{board}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Families Trust Us */}
      <section className="py-24">
        <div className="learning-lane px-margin-mobile md:px-0 max-w-max-width mx-auto">
          <div className="text-center mb-20">
            <h2 className="font-headline-lg text-headline-lg text-charcoal mb-4 font-bold">Why Families Choose Online Tutors for iGCSE Preparation</h2>
            <p className="font-body-md text-body-md text-on-surface-variant">The pillars of our patient and professional approach to iGCSE preparation online.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Brain, color: 'bg-lime-green/20 text-secondary', title: 'Exam-Only Technique', desc: 'With no coursework to fall back on, every mark comes from the final paper, so we drill the answering habits examiners actually reward.' },
              { icon: Map, color: 'bg-royal-purple/10 text-royal-purple', title: 'Board-Specific Practice', desc: 'Past papers and mark schemes matched to your child\'s exact Cambridge or Edexcel International specification.' },
              { icon: ClipboardCheck, color: 'bg-lime-green/20 text-secondary', title: 'Mock Mastery', desc: 'Timed, board-accurate mock exams that build the stamina a fully exam-based qualification demands.' },
              { icon: SmilePlus, color: 'bg-royal-purple/10 text-royal-purple', title: 'Confidence for What Comes Next', desc: 'Preparation aimed at your child\'s UK independent school benchmarks, with an eye on the step up to A-Levels.' },
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
          <div className="text-center mt-12">
            <p className="text-on-surface-variant font-body-md">
              Already looking further ahead? Read how we support the step up to{' '}
              <button
                onClick={() => navigateTo('test-prep', 'A-Levels')}
                className="text-royal-purple font-bold underline underline-offset-2 cursor-pointer"
              >
                A-Level study
              </button>{' '}
              once iGCSE results are in.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-soft-gray" id="faq-section">
        <div className="learning-lane px-margin-mobile md:px-0 max-w-max-width mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-headline-lg text-headline-lg text-charcoal mb-4 font-bold">iGCSE-Specific FAQs</h2>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto">Answers UK families ask us most often about Cambridge and Edexcel International iGCSE preparation.</p>
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
                <h2 className="font-headline-lg text-headline-lg text-charcoal mb-4 font-bold">Secure Your Free iGCSE Trial Lesson</h2>
                <p className="text-on-surface-variant text-body-lg">No obligations. Just a chance for your child to experience board-specific iGCSE preparation the Math Make Smart way.</p>
              </div>

           <FreeTrialForm />

            </div>
            <div className="hidden lg:block lg:w-1/2 relative">
              <img className="absolute inset-0 w-full h-full object-cover" alt="A focused female student in a UK independent school studying for her iGCSE exams" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCYCUJcXhUtMGJ8kHDhchbqDVkwOw6byBigwop3E66ulr1f-GizLPnqPgDBUlgq5LtL6FMF8Vu8kqiEy67WDdI-B31rpVERMrPmDwc8BTfVYXie5y7H_HJbPdV6xbwHrSk3Gkr1AefBybqpzAgrjyZnOcn2XtSTLIBizH1If_FNb_vLbusmYDVxTejk_GazgmYPFcMw6507M0U5A-_2dJdRhpGEwxQsxsaTKrCIUQiu9f8XxmPSUuI54g" />
              <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-transparent"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}