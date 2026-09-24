'use client';

import React, { useState } from 'react';
import LigatureIcon from '@/components/LigatureIcon';
import { BookOpen, Brain, CalendarDays, Calculator, CheckCircle2, ChevronDown, ClipboardCheck, FlaskConical, Map, School, SmilePlus } from 'lucide-react';
import { useAppNavigate } from '@/lib/useAppNavigate';
import { FreeTrialForm } from '@/components/FreeTrial';

const FAQS = [
  {
    q: "What's the difference between the ISEB Common Pre-Test and Common Entrance?",
    a: "The ISEB Common Pre-Test is an adaptive, computer-based assessment covering English, Maths, Verbal Reasoning and Non-Verbal Reasoning, usually sat in Year 6 or Year 7 as part of the senior school application process. Common Entrance (CE) is the traditional written exam sat later, in Year 8, and is used to confirm a place already offered rather than to select between candidates. Many families preparing for 13+ entry will meet both in turn: the pre-test first, then CE papers in the final year of prep school.",
  },
  {
    q: "Which subjects are compulsory for Common Entrance at 13+?",
    a: "English, Mathematics and Science are compulsory for every candidate sitting CE at 13+. Beyond that, pupils typically also sit a range of optional papers chosen from subjects such as French, Geography, History, Latin, German, Spanish, Classical Greek, Classical Civilisations and Theology, Philosophy and Religion (TPR) — the exact combination depends on what the receiving senior school asks for, so we check each family's target schools before building a study plan.",
  },
  {
    q: "When should we start preparing for 13+ entry?",
    a: "Most families begin building foundations from Year 6, since the ISEB Common Pre-Test can arrive as early as Year 6 or 7 depending on the senior school. From there, preparation continues through Year 7 and into Year 8 as the compulsory and optional Common Entrance papers come into focus. Starting early means the workload stays manageable rather than compressed into a stressful final term.",
  },
  {
    q: "How do scholarship papers differ from standard 13+ papers?",
    a: "Scholarship papers are set at a noticeably higher level than standard CE papers and are designed to stretch the strongest candidates — some schools use the ISEB Common Academic Scholarship, others set their own. Art, music, sport and drama scholarships add a separate practical assessment alongside academic work. Awards usually bring a partial reduction in fees rather than a full waiver, so they're worth pursuing for the challenge and recognition as much as the discount.",
  },
  {
    q: "Does my child need to sit exams for every subject their senior school offers?",
    a: "No. Schools generally expect candidates to offer a sensible spread — often Geography, History, TPR and a modern language alongside the compulsory core — but the system is flexible enough to accommodate prep schools that don't teach the full traditional range. We help families confirm exactly which papers their chosen senior school actually requires, so tutoring time isn't spent on subjects that won't be assessed.",
  },
  {
    q: "Can tutoring help if my child is also being considered for a scholarship?",
    a: "Yes. Scholarship-track pupils need the same solid grounding in English, Maths and Science as every other candidate, plus targeted extension work — harder problem-solving, wider reading, and past scholarship papers — layered on top. Our tutors adjust pacing so scholarship candidates are stretched without the core CE papers being neglected.",
  },
  {
    q: "My younger child isn't ready for 13+ yet — do you support the 11+ route too?",
    a: "Yes, many of our families have children on different school entry timelines. If a younger sibling is instead working towards 11+ entry, we run a dedicated preparation programme for that stage as well, so both children can be supported without switching tutoring providers.",
  },
];

export default function UK13PlusPage() {
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
                <span className="font-label-sm text-label-sm uppercase tracking-wider font-semibold">Trusted by UK Prep School Families</span>
              </div>
              <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-charcoal leading-tight font-bold">
                13 Plus Preparation Online for <span className="text-royal-purple">Independent Senior Schools</span>
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
                From the ISEB Common Pre-Test in Year 6 or 7 through to Common Entrance papers in Year 8, our specialist tutors guide your child through every stage of 13+ preparation online, with a plan built around the senior schools they're actually applying to.
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
                  alt="A prep school pupil in the UK preparing for 13 Plus Common Entrance exams with a tutor"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3k0vu8Tg3YUMNFs4pRgue5UNIQWPgpMyoQYwplh0zysRdVH48wM9XHcQph5Zgva9c60ifDYUb87JsC_GUn1R7iw601Lwtr3zrjoqsYXcqZMVlfPt4ke1xUG3jboqxzHyoL7sfSBeK1SASSJ_j8LpLXEZFI61x-AKLxyCgik1K6p7ktNMrzBTamBcp-xQE0BIolbmoBejxeUqzsAVl980BvvDz816xje9HVyTobd2Z4ahPLUgSp9GBKA"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is 13+ Section */}
      <section className="py-24 bg-soft-gray">
        <div className="learning-lane px-margin-mobile md:px-0 text-center max-w-max-width mx-auto">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="font-headline-lg text-headline-lg text-charcoal font-bold">Understanding the 13+ Journey</h2>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              13+ entry is how most pupils move from prep school into independent senior schools at the end of Year 8, and the route there is set by the Independent Schools Examinations Board (ISEB) rather than a single national exam board. Families preparing for 13 plus online need to understand two distinct hurdles: the earlier Common Pre-Test that many schools use to make conditional offers, and the Common Entrance papers that confirm the place two years later. We help parents make sense of the timeline before we ever open a textbook.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12">
              {[
                { icon: CalendarDays, color: 'bg-royal-purple/10 text-royal-purple', title: 'Year 6-8 Timeline', desc: 'A two-to-three year process spanning the pre-test, ongoing prep school study, and final Common Entrance papers.' },
                { icon: School, color: 'bg-lime-green/20 text-secondary', title: 'Pre-Test vs. Common Entrance', desc: 'An adaptive online assessment sat early, followed by traditional written papers sat in Year 8 to confirm the offer.' },
                { icon: ClipboardCheck, color: 'bg-royal-purple/10 text-royal-purple', title: 'Scholarship Papers', desc: 'A higher-level tier of exams for pupils chasing academic, art, music, drama or sport awards.' },
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
            <p className="font-body-md text-body-md text-on-surface-variant">Rigorous, exam-board-accurate coverage of the compulsory Common Entrance papers, plus the optional subjects senior schools expect.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Calculator, title: 'Mathematics',
                items: ['Compulsory CE & Pre-Test paper', 'Problem-solving beyond Year 6 SATs level', 'Scholarship-level extension work'],
                nav: () => navigateTo('subject', 'Maths'),
              },
              {
                icon: BookOpen, title: 'English',
                items: ['Compulsory CE & Pre-Test paper', 'Comprehension, composition & précis skills', 'Preparation for verbal reasoning too'],
                nav: () => navigateTo('subject', 'English'),
              },
              {
                icon: FlaskConical, title: 'Science & Optional Papers',
                items: ['Compulsory Common Entrance Science', 'Support across French, Latin, Geography, History & TPR', 'Guidance on which optional papers your target school needs'],
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

      {/* 13+ Pathways */}
      <section className="py-24 bg-royal-purple text-white">
        <div className="learning-lane px-margin-mobile md:px-0 max-w-max-width mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2">
            <h2 className="font-headline-lg text-headline-lg mb-6 font-bold">Prepared for Every 13+ Pathway</h2>
            <p className="font-body-lg text-body-lg opacity-90 leading-relaxed">
              Unlike GCSEs, 13+ entry isn't set by AQA, Edexcel or OCR — it all runs through the ISEB. As online tutors for 13 Plus preparation, we know the pre-test's adaptive online format inside out, and we build our Common Entrance teaching directly from real ISEB past papers, so your child meets the actual question styles they'll face at each stage.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-3 sm:gap-6 md:w-1/2 w-full">
            {['ISEB PRE-TEST', 'COMMON ENTRANCE', 'SCHOLARSHIP'].map((board) => (
              <div key={board} className="bg-white/10 backdrop-blur-md p-4 sm:p-6 rounded-2xl border border-white/20 flex items-center justify-center min-h-[80px]">
                <span className="font-bold text-lg sm:text-xl lg:text-2xl text-white tracking-wider uppercase text-center">{board}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Families Trust Us */}
      <section className="py-24">
        <div className="learning-lane px-margin-mobile md:px-0 max-w-max-width mx-auto">
          <div className="text-center mb-20">
            <h2 className="font-headline-lg text-headline-lg text-charcoal mb-4 font-bold">Why Families Choose Online Tutors for 13 Plus Preparation</h2>
            <p className="font-body-md text-body-md text-on-surface-variant">The pillars of our patient and professional approach to 13+ preparation.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Brain, color: 'bg-lime-green/20 text-secondary', title: 'Breadth Across Papers', desc: 'Confident tutoring across the compulsory core and the optional CE papers your chosen school actually sets.' },
              { icon: Map, color: 'bg-royal-purple/10 text-royal-purple', title: 'Pacing From Year 6 to 8', desc: 'A study plan that adapts as your child moves from the pre-test through to final Common Entrance papers.' },
              { icon: ClipboardCheck, color: 'bg-lime-green/20 text-secondary', title: 'Scholarship Stretch', desc: 'Extension material and past scholarship papers layered in for pupils chasing academic or specialist awards.' },
              { icon: SmilePlus, color: 'bg-royal-purple/10 text-royal-purple', title: 'A Calm Transition', desc: 'Steady, encouraging sessions that ease the move from prep school routine to senior school expectations.' },
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
              Have a younger child sitting entrance tests sooner? We also run a dedicated{' '}
              <button
                onClick={() => navigateTo('test-prep', '11-plus')}
                className="text-royal-purple font-bold underline underline-offset-2 cursor-pointer"
              >
                11+ preparation programme
              </button>{' '}
              for siblings further behind on the journey.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-soft-gray" id="faq-section">
        <div className="learning-lane px-margin-mobile md:px-0 max-w-max-width mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-headline-lg text-headline-lg text-charcoal mb-4 font-bold">13+ Common Entrance FAQs</h2>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto">Straight answers to the questions UK parents ask us most about the ISEB Pre-Test, Common Entrance and scholarship routes.</p>
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
                <h2 className="font-headline-lg text-headline-lg text-charcoal mb-4 font-bold">Secure Your Free 13+ Trial Lesson</h2>
                <p className="text-on-surface-variant text-body-lg">No obligations. Just a chance for your child to experience how we prepare for 13 plus online, from pre-test practice through to Common Entrance papers.</p>
              </div>

           <FreeTrialForm />

            </div>
            <div className="hidden lg:block lg:w-1/2 relative">
              <img className="absolute inset-0 w-full h-full object-cover" alt="A focused female student in the UK preparing for 13 plus entrance exams" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCYCUJcXhUtMGJ8kHDhchbqDVkwOw6byBigwop3E66ulr1f-GizLPnqPgDBUlgq5LtL6FMF8Vu8kqiEy67WDdI-B31rpVERMrPmDwc8BTfVYXie5y7H_HJbPdV6xbwHrSk3Gkr1AefBybqpzAgrjyZnOcn2XtSTLIBizH1If_FNb_vLbusmYDVxTejk_GazgmYPFcMw6507M0U5A-_2dJdRhpGEwxQsxsaTKrCIUQiu9f8XxmPSUuI54g" />
              <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-transparent"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}