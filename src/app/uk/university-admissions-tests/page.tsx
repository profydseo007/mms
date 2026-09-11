'use client';

import React, { useState } from 'react';
import LigatureIcon from '@/components/LigatureIcon';
import { Brain, Calculator, CalendarDays, CheckCircle2, ChevronDown, ClipboardCheck, FlaskConical, HeartPulse, Landmark, Map, Scale, SmilePlus } from 'lucide-react';
import { useAppNavigate } from '@/lib/useAppNavigate';

const FAQS = [
  {
    q: "What's the difference between the UCAT and the LNAT?",
    a: "Both are aptitude tests rather than knowledge tests, but they assess very different things. The UCAT (University Clinical Aptitude Test) is sat by Medicine and Dentistry applicants and covers verbal reasoning, decision making, quantitative reasoning and situational judgement, used by more than 40 UK universities. The LNAT (National Admissions Test for Law) is sat by Law applicants at nine universities including Oxford, Cambridge and LSE, and combines multiple-choice reading comprehension with a timed essay. Neither requires prior medical or legal knowledge — both are designed to test how a candidate thinks under pressure.",
  },
  {
    q: 'Which universities ask for the TMUA, and which ask for the ESAT?',
    a: "The Test of Mathematics for University Admission (TMUA) is used by Cambridge, Imperial College London, LSE, Warwick, Durham and UCL for Mathematics, Economics and Computer Science applicants. The Engineering and Science Admissions Test (ESAT) is used by Imperial, Cambridge and UCL for Engineering and Science-based courses, including biomedical sciences. Both are set by Pearson VUE as part of the newer UAT-UK admissions test suite, and requirements can differ by course even within the same university, so we always confirm the exact test list for each family's target courses.",
  },
  {
    q: 'I heard Oxford changed its admissions tests — what actually happened?',
    a: "Oxford is retiring several of its own in-house tests, including the Thinking Skills Assessment, the Mathematics Admissions Test and the Physics Admissions Test, in favour of the same UAT-UK suite several other universities already use. From the 2026 application cycle, for 2027 entry, Mathematics and Computer Science applicants sit the TMUA in place of the MAT, Physics and Engineering Science applicants sit the ESAT in place of the PAT, and humanities courses such as PPE and Economics move to a new test called TARA (Test of Academic Reasoning for Admissions) in place of the TSA. Medicine and Law applicants are unaffected and continue with the UCAT and LNAT as before. Because this changed recently, it's worth double-checking the current requirement for your child's specific course before assuming an older guide is still accurate.",
  },
  {
    q: 'When should my child start preparing for university admissions tests?',
    a: "The summer before Year 13 is the ideal starting point, since most of these tests are sat in October or November of Year 13, shortly before the UCAS submission deadline. Starting then gives enough time to build genuine technique through timed practice papers without eating into A-Level revision during the exam period itself. Families who come to us later in the fall term can still make real progress, but the plan becomes more compressed and focused purely on exam technique rather than deeper skill-building.",
  },
  {
    q: 'Do we need to prepare differently for an aptitude test compared to A-Level exams?',
    a: "Yes, quite differently. A-Levels reward recalled subject knowledge applied under moderate time pressure. Admissions tests like the UCAT, LNAT, TMUA and ESAT assume no extra subject knowledge beyond GCSE or A-Level and instead test raw reasoning speed and accuracy under severe time constraints, often under a minute per question. Preparation here is mostly about pattern recognition, timing strategy and building stamina through full-length timed mocks, rather than content revision.",
  },
  {
    q: 'Can admissions test preparation run alongside A-Level revision?',
    a: "It can, and for most students it should, since the two overlap in the skills they draw on, particularly for TMUA and ESAT candidates whose maths and science A-Levels feed directly into test technique. The main challenge is scheduling: admissions tests fall in October and November, right when A-Level coursework and early mock exams are also demanding attention. We build a combined plan for these students so admissions test practice reinforces A-Level content instead of competing with it for the same hours. Families still working through A-Level choices can find that support on our",
    linkLabel: 'A-Level preparation page',
  },
  {
    q: 'Do you also prepare students for the GAMSAT, for graduate entry medicine?',
    a: "Yes. The Graduate Australian Medical School Admissions Test (GAMSAT) is used by around 15 UK universities, including Imperial College London and St Andrews, for applicants who already hold a degree and are applying to Graduate Entry Medicine. It covers reasoning in humanities and social sciences, written communication, and reasoning in biological and physical sciences, and we tailor sessions to whichever of the three sections a candidate needs most support with.",
  },
];

export default function UKUniversityAdmissionsTestsPage() {
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
                University Admissions Tests Preparation Online with <span className="text-royal-purple">Expert UK Tutors</span>
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
                A-Level grades alone no longer decide many of the most competitive UK university places. Our university admissions tests preparation online covers the UCAT, LNAT, TMUA, ESAT and TARA, building the timed reasoning technique each test actually rewards, alongside a UCAS timeline that keeps everything on schedule.
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
                  Explore Which Test Applies
                </a>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute -inset-4 bg-lime-green/20 rounded-[2rem] blur-2xl group-hover:bg-lime-green/30 transition-all"></div>
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white">
                <img
                  className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                  alt="A UK sixth-form student preparing for a university admissions test with a tutor"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3k0vu8Tg3YUMNFs4pRgue5UNIQWPgpMyoQYwplh0zysRdVH48wM9XHcQph5Zgva9c60ifDYUb87JsC_GUn1R7iw601Lwtr3zrjoqsYXcqZMVlfPt4ke1xUG3jboqxzHyoL7sfSBeK1SASSJ_j8LpLXEZFI61x-AKLxyCgik1K6p7ktNMrzBTamBcp-xQE0BIolbmoBejxeUqzsAVl980BvvDz816xje9HVyTobd2Z4ahPLUgSp9GBKA"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Are University Admissions Tests Section */}
      <section className="py-24 bg-soft-gray">
        <div className="learning-lane px-margin-mobile md:px-0 text-center max-w-max-width mx-auto">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="font-headline-lg text-headline-lg text-charcoal font-bold">Understanding University Admissions Tests</h2>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              University admissions tests are separate, aptitude-based exams that a growing number of competitive UK courses require on top of A-Level grades, usually sat in October or November of Year 13. Unlike A-Levels, they don't reward recalled subject content — they measure reasoning speed and accuracy under real time pressure, which means they respond well to the right kind of focused, technique-driven preparation. At Math Make Smart, we build a plan around the exact test your child's target universities actually require.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12">
              {[
                { icon: CalendarDays, color: 'bg-royal-purple/10 text-royal-purple', title: 'Year 13, Autumn', desc: 'Most sittings fall in October or November, just ahead of the UCAS submission deadline.' },
                { icon: Landmark, color: 'bg-lime-green/20 text-secondary', title: 'Course-Specific Tests', desc: 'Medicine, Law, Maths, Computer Science and Engineering each require a different test.' },
                { icon: ClipboardCheck, color: 'bg-royal-purple/10 text-royal-purple', title: 'Highly Competitive', desc: 'A strong score can be the deciding factor once every applicant already holds excellent predicted grades.' },
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
            <h2 className="font-headline-lg text-headline-lg text-charcoal mb-4 font-bold">Which Test Does Your Child Need?</h2>
            <p className="font-body-md text-body-md text-on-surface-variant">The four most widely required UK university admissions tests, taught by tutors who know each format inside out.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: HeartPulse, title: 'UCAT',
                items: ['Medicine & Dentistry, 40+ universities', 'Verbal, decision & quantitative reasoning', 'Situational judgement under strict timing'],
              },
              {
                icon: Scale, title: 'LNAT',
                items: ['Law, including Oxford, Cambridge & LSE', 'Multiple-choice reading comprehension', 'Timed persuasive essay writing'],
              },
              {
                icon: Calculator, title: 'TMUA',
                items: ['Maths, Economics & Computer Science', 'Cambridge, Imperial, LSE, Warwick, Durham & UCL', 'Mathematical thinking beyond A-Level content'],
                nav: () => navigateTo('subject', 'Maths'),
              },
              {
                icon: FlaskConical, title: 'ESAT',
                items: ['Engineering & Science-based courses', 'Imperial, Cambridge & UCL', 'Maths, Physics, Chemistry & Biology modules'],
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

      {/* Prepared for Every Admissions Test Format */}
      <section className="py-24 bg-royal-purple text-white">
        <div className="learning-lane px-margin-mobile md:px-0 max-w-max-width mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2">
            <h2 className="font-headline-lg text-headline-lg mb-6 font-bold">Prepared for Every Admissions Test Format</h2>
            <p className="font-body-lg text-body-lg opacity-90 leading-relaxed">
              Unlike A-Levels, admissions tests aren't set by AQA, Edexcel or OCR — most now run through Pearson VUE's UAT-UK suite, alongside the standalone UCAT and LNAT. Oxford has recently retired several of its own in-house tests, including the Thinking Skills Assessment, in favour of this same suite, so our tutors work directly from current, board-confirmed practice papers rather than outdated guides.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-3 sm:gap-6 md:w-1/2 w-full">
            {['UCAT & GAMSAT', 'LNAT', 'TMUA, ESAT & TARA'].map((format) => (
              <div key={format} className="bg-white/10 backdrop-blur-md p-4 sm:p-6 rounded-2xl border border-white/20 flex items-center justify-center min-h-[80px]">
                <span className="font-bold text-base sm:text-xl lg:text-2xl text-white tracking-wider uppercase text-center">{format}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Families Trust Us */}
      <section className="py-24">
        <div className="learning-lane px-margin-mobile md:px-0 max-w-max-width mx-auto">
          <div className="text-center mb-20">
            <h2 className="font-headline-lg text-headline-lg text-charcoal mb-4 font-bold">Why Families Choose Online Tutors for University Admissions Tests Preparation</h2>
            <p className="font-body-md text-body-md text-on-surface-variant">The pillars of our patient and professional approach to admissions test tutoring.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Brain, color: 'bg-lime-green/20 text-secondary', title: 'Reasoning Specialists', desc: 'Dedicated coaching in the timed reasoning skills these tests reward, distinct from A-Level content revision.' },
              { icon: Map, color: 'bg-royal-purple/10 text-royal-purple', title: 'Course-Matched Plans', desc: 'A plan built around the exact test, or combination of tests, your child\'s target universities actually require.' },
              { icon: ClipboardCheck, color: 'bg-lime-green/20 text-secondary', title: 'Full Timed Mocks', desc: 'Complete practice sittings under real exam-hall time limits to build speed and composure.' },
              { icon: SmilePlus, color: 'bg-royal-purple/10 text-royal-purple', title: 'UCAS-Ready Confidence', desc: 'Preparation scheduled around A-Level workload, so results land in good time for UCAS submission.' },
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
            <h2 className="font-headline-lg text-headline-lg text-charcoal mb-4 font-bold">University Admissions Tests FAQs</h2>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto">Straight answers to the questions UK parents ask most often about the UCAT, LNAT, TMUA, ESAT and TARA.</p>
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
                    <p>
                      {faq.a}
                      {faq.linkLabel && ' '}
                      {faq.linkLabel && (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            navigateTo('test-prep', 'A-Levels');
                          }}
                          className="text-royal-purple font-bold underline underline-offset-2 cursor-pointer"
                        >
                          {faq.linkLabel}
                        </button>
                      )}
                      {faq.linkLabel && '.'}
                    </p>
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
                <h2 className="font-headline-lg text-headline-lg text-charcoal mb-4 font-bold">Secure Your Free Admissions Test Trial Lesson</h2>
                <p className="text-on-surface-variant text-body-lg">No obligations. Just a chance for your child to experience how focused, test-specific admissions preparation works, whichever test their course requires.</p>
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
              <img className="absolute inset-0 w-full h-full object-cover" alt="A focused UK sixth-form student revising for a university admissions test" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCYCUJcXhUtMGJ8kHDhchbqDVkwOw6byBigwop3E66ulr1f-GizLPnqPgDBUlgq5LtL6FMF8Vu8kqiEy67WDdI-B31rpVERMrPmDwc8BTfVYXie5y7H_HJbPdV6xbwHrSk3Gkr1AefBybqpzAgrjyZnOcn2XtSTLIBizH1If_FNb_vLbusmYDVxTejk_GazgmYPFcMw6507M0U5A-_2dJdRhpGEwxQsxsaTKrCIUQiu9f8XxmPSUuI54g" />
              <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-transparent"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}