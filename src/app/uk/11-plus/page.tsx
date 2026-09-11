'use client';

import React, { useState } from 'react';
import LigatureIcon from '@/components/LigatureIcon';
import { BookOpen, Brain, CalendarDays, Calculator, CheckCircle2, ChevronDown, ClipboardCheck, Map, Puzzle, School, SmilePlus } from 'lucide-react';
import { useAppNavigate } from '@/lib/useAppNavigate';

const FAQS = [
  {
    q: 'When should my child start preparing for the 11+?',
    a: "Most families begin structured preparation at the start of Year 5, giving 12 to 18 months to build up English, Maths, Verbal Reasoning and Non-Verbal Reasoning skills without last-minute cramming. Starting earlier isn't necessary and can lead to burnout — the priority is steady, consistent practice rather than an early start."
  },
  {
    q: "What's the difference between GL Assessment and CEM-style tests?",
    a: "GL Assessment is used by the majority of grammar schools and typically splits the exam into separate English, Maths, Verbal Reasoning and Non-Verbal Reasoning papers, often with a mix of multiple-choice and standard-format questions. CEM-style papers (still used by some consortia even after CEM itself stopped setting 11+ tests) tend to blend English and Verbal Reasoning together and lean more heavily on vocabulary and comprehension under tighter time pressure. Some areas, including several Buckinghamshire schools, now use bespoke tests set independently of either model, so it's essential to confirm the exact format your target school uses."
  },
  {
    q: 'Does my child need to sit the Verbal and Non-Verbal Reasoning papers?',
    a: "It depends on the region and school. Areas such as Kent and parts of Essex include Verbal Reasoning alongside English and Maths, while some grammar school consortia also test Non-Verbal Reasoning. Since neither subject is taught as standard in primary school, they're usually the two areas where dedicated 11+ tuition makes the biggest difference."
  },
  {
    q: 'How many mock exams should my child sit before the real thing?',
    a: 'A good rule of thumb is one full mock under timed, exam-hall conditions roughly every two to three weeks in the final two terms before the test, building up to weekly mocks in the last month. This builds the stamina, pacing and composure needed for a real 11+ sitting, which can run to two or more hours across separate papers.'
  },
  {
    q: 'What happens if my child sits tests for more than one region or consortium?',
    a: "It's common for families near county borders to sit more than one 11+ test — for example a Kent Test alongside a neighbouring grammar school's own entrance exam. Each has its own format, registration window and pass mark, so preparation needs to cover every format your child will actually face rather than a single generic paper."
  },
  {
    q: 'What if my child doesn’t get a grammar school place?',
    a: "Grammar school places are genuinely oversubscribed in most areas, so a strong, well-prepared child can still miss out simply on numbers. Many families put their child's name on a waiting list, which does move as offers are declined, while others find their child thrives just as well at a good comprehensive or independent school. Either way, the reasoning, comprehension and problem-solving skills built during 11+ preparation carry straight through into Key Stage 3 and, later, GCSE study."
  },
  {
    q: 'Can Math Make Smart help after the 11+, once my child is in Year 7?',
    a: "Yes. Many families continue with us for ongoing support through secondary school, and our tutors carry that same knowledge of your child's strengths and gaps forward into Key Stage 3 and eventual GCSE preparation, so there's no need to start again with someone new.",
    linkLabel: 'See our GCSE preparation support',
  },
];

export default function UK11PlusPage() {
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
                <span className="font-label-sm text-label-sm uppercase tracking-wider font-semibold">Top Rated UK Tutoring</span>
              </div>
              <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-charcoal leading-tight font-bold">
                11+ Preparation Online with <span className="text-royal-purple">Expert UK Tutors</span>
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
                Grammar school places are more competitive than ever, and the 11 Plus rewards children who've practised the right skills, not just the right subjects. Our online 11 Plus preparation builds real ability in English, Maths, Verbal Reasoning and Non-Verbal Reasoning, ready for Year 6 exam day.
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
                  Explore What We Cover
                </a>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute -inset-4 bg-lime-green/20 rounded-[2rem] blur-2xl group-hover:bg-lime-green/30 transition-all"></div>
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white">
                <img
                  className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                  alt="A young UK student preparing for the 11 Plus exam with a tutor"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3k0vu8Tg3YUMNFs4pRgue5UNIQWPgpMyoQYwplh0zysRdVH48wM9XHcQph5Zgva9c60ifDYUb87JsC_GUn1R7iw601Lwtr3zrjoqsYXcqZMVlfPt4ke1xUG3jboqxzHyoL7sfSBeK1SASSJ_j8LpLXEZFI61x-AKLxyCgik1K6p7ktNMrzBTamBcp-xQE0BIolbmoBejxeUqzsAVl980BvvDz816xje9HVyTobd2Z4ahPLUgSp9GBKA"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is the 11+ Section */}
      <section className="py-24 bg-soft-gray">
        <div className="learning-lane px-margin-mobile md:px-0 text-center max-w-max-width mx-auto">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="font-headline-lg text-headline-lg text-charcoal font-bold">Understanding the 11+ Journey</h2>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              The 11 Plus (11+) is the entrance exam that decides admission to grammar schools and many selective independent schools across the UK, sat by children in Year 6 as they move from primary to secondary school. Because it draws on skills that go well beyond the Year 6 classroom, families who prepare early and consistently tend to walk into the exam hall with far less stress. At Math Make Smart, we build a plan around the specific test your child will actually sit.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12">
              {[
                { icon: CalendarDays, color: 'bg-royal-purple/10 text-royal-purple', title: 'Year 5-6', desc: 'The two-year runway most families use to build skills before the Year 6 exam sitting.' },
                { icon: Puzzle, color: 'bg-lime-green/20 text-secondary', title: 'Test Formats', desc: 'GL Assessment, CEM-style and school-set papers each reward slightly different techniques.' },
                { icon: ClipboardCheck, color: 'bg-royal-purple/10 text-royal-purple', title: 'Grammar Places', desc: 'A limited number of places against high demand makes thorough preparation essential.' },
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

      {/* What We Prepare Your Child For */}
      <section className="py-24" id="subjects-section">
        <div className="learning-lane px-margin-mobile md:px-0 max-w-max-width mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-headline-lg text-headline-lg text-charcoal mb-4 font-bold">What We Prepare Your Child For</h2>
            <p className="font-body-md text-body-md text-on-surface-variant">Every component of the 11 Plus, taught by tutors who know how each region tests it.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Calculator, title: 'Maths',
                items: ['KS2 curriculum plus reasoning under time pressure', 'Multiple-choice and standard-format practice', 'Quick mental arithmetic techniques'],
                nav: () => navigateTo('subject', 'Maths'),
              },
              {
                icon: BookOpen, title: 'English',
                items: ['Comprehension and inference skills', 'Vocabulary building for unfamiliar texts', 'Creative and continuous writing tasks'],
                nav: () => navigateTo('subject', 'English'),
              },
              {
                icon: Brain, title: 'Verbal Reasoning',
                items: ['Word-based logic and code-breaking puzzles', 'Building the vocabulary these questions rely on', 'Working through all common question types'],
              },
              {
                icon: Puzzle, title: 'Non-Verbal Reasoning',
                items: ['Shape, pattern and sequence recognition', 'Spatial awareness most children haven’t met before', 'Timed practice to build speed and accuracy'],
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
                {subject.nav && (
                  <button onClick={subject.nav} className="text-royal-purple font-bold flex items-center gap-2 group-hover:translate-x-1 transition-transform cursor-pointer">
                    Learn more <LigatureIcon name="arrow_forward" className="text-sm" />
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prepared for Every 11+ Format */}
      <section className="py-24 bg-royal-purple text-white">
        <div className="learning-lane px-margin-mobile md:px-0 max-w-max-width mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2">
            <h2 className="font-headline-lg text-headline-lg mb-6 font-bold">Prepared for Every 11+ Format</h2>
            <p className="font-body-lg text-body-lg opacity-90 leading-relaxed">
              Unlike the GCSE, the 11 Plus has no single national exam board, and the format your child sits depends entirely on where you live. Our tutors work across GL Assessment, CEM-style and independently set regional and school-specific papers, so your child practises with question styles that genuinely match the test ahead, whether that's the Kent Test, a CSSE-style Essex paper, or a consortium exam elsewhere in the UK.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-3 sm:gap-6 md:w-1/2 w-full">
            {['GL ASSESSMENT', 'CEM-STYLE', 'REGIONAL TESTS'].map((format) => (
              <div key={format} className="bg-white/10 backdrop-blur-md p-4 sm:p-6 rounded-2xl border border-white/20 flex items-center justify-center min-h-[80px]">
                <span className="font-bold text-lg sm:text-xl lg:text-2xl text-white tracking-wider uppercase text-center">{format}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Families Trust Us */}
      <section className="py-24">
        <div className="learning-lane px-margin-mobile md:px-0 max-w-max-width mx-auto">
          <div className="text-center mb-20">
            <h2 className="font-headline-lg text-headline-lg text-charcoal mb-4 font-bold">Why Families Choose Online Tutors for 11 Plus Preparation</h2>
            <p className="font-body-md text-body-md text-on-surface-variant">The pillars of our patient and professional approach to eleven plus tutoring.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Brain, color: 'bg-lime-green/20 text-secondary', title: 'Reasoning Specialists', desc: 'Dedicated coaching in Verbal and Non-Verbal Reasoning, the two skills schools never teach.' },
              { icon: Map, color: 'bg-royal-purple/10 text-royal-purple', title: 'Gap Analysis', desc: 'A diagnostic assessment pinpoints exactly where each child needs to focus before the exam.' },
              { icon: ClipboardCheck, color: 'bg-lime-green/20 text-secondary', title: '11+ Mock Exams', desc: 'Full-length mocks under real exam-hall conditions to build stamina and pacing.' },
              { icon: SmilePlus, color: 'bg-royal-purple/10 text-royal-purple', title: 'Exam-Day Confidence', desc: 'Practical strategies for managing nerves so preparation shows up fully on the day.' },
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
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-soft-gray" id="faq-section">
        <div className="learning-lane px-margin-mobile md:px-0 max-w-max-width mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-headline-lg text-headline-lg text-charcoal mb-4 font-bold">11+ Specific FAQs</h2>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto">Straight answers to the questions UK parents ask most often about preparing for the 11 Plus.</p>
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
                  <div className="px-6 pb-6 text-on-surface-variant text-body-md space-y-3">
                    <p>{faq.a}</p>
                    {faq.linkLabel && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          navigateTo('test-prep', 'GCSE');
                        }}
                        className="text-royal-purple font-bold inline-flex items-center gap-2 hover:translate-x-1 transition-transform cursor-pointer"
                      >
                        {faq.linkLabel} <LigatureIcon name="arrow_forward" className="text-sm" />
                      </button>
                    )}
                  </div>
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
                <h2 className="font-headline-lg text-headline-lg text-charcoal mb-4 font-bold">Secure Your Free 11+ Trial Lesson</h2>
                <p className="text-on-surface-variant text-body-lg">No obligations. Just a chance for your child to experience how our online 11 Plus preparation actually works.</p>
              </div>

           <div id="ghl-form-wrap" >
              <iframe className="w-full h-[700px] border-none rounded-xl"
                id="ghl-dynamic-form"
                src="https://api.leadconnectorhq.com/widget/form/KoegIzV5zV9qvxp4I6O7?notrack=true"

                data-layout="{'id':'INLINE'}"
                data-form-name="Contact Us"
                data-height="543"
                data-layout-iframe-id="ghl-dynamic-form"
                data-form-id="KoegIzV5zV9qvxp4I6O7"
                title="Contact Us">
              </iframe>
            </div>

            </div>
            <div className="hidden lg:block lg:w-1/2 relative">
              <img className="absolute inset-0 w-full h-full object-cover" alt="A focused young UK student preparing for grammar school entrance exams" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCYCUJcXhUtMGJ8kHDhchbqDVkwOw6byBigwop3E66ulr1f-GizLPnqPgDBUlgq5LtL6FMF8Vu8kqiEy67WDdI-B31rpVERMrPmDwc8BTfVYXie5y7H_HJbPdV6xbwHrSk3Gkr1AefBybqpzAgrjyZnOcn2XtSTLIBizH1If_FNb_vLbusmYDVxTejk_GazgmYPFcMw6507M0U5A-_2dJdRhpGEwxQsxsaTKrCIUQiu9f8XxmPSUuI54g" />
              <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-transparent"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}