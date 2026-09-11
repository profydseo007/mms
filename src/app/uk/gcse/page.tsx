'use client';

import React, { useState } from 'react';
import LigatureIcon from '@/components/LigatureIcon';
import { BookOpen, Brain, CalendarDays, Calculator, CheckCircle2, ChevronDown, ClipboardCheck, FlaskConical, Map, School, SmilePlus } from 'lucide-react';
import { useAppNavigate } from '@/lib/useAppNavigate';

const FAQS = [
  {
    q: 'What does the GCSE 9-1 grading scale actually mean?',
    a: 'Grades run from 9 (the highest) down to 1, replacing the old A*-G scale to spread out the top end of achievement. Roughly speaking, a grade 7 lines up with the old grade A, a grade 4 with the old grade C, and a grade 1 with the old grade G — but grade 9 has no direct equivalent, since it was introduced to single out the very strongest candidates in each subject.',
  },
  {
    q: 'What is the difference between a grade 4 and a grade 5?',
    a: "Grade 4 is described as a 'standard pass' and grade 5 as a 'strong pass'. A grade 4 satisfies most general entry requirements and the post-16 condition of funding for English and Maths, but many sixth forms, colleges and specific A-Level courses ask for a grade 5 or higher, especially in the subject a student wants to continue studying. It's worth checking the exact requirement at your child's target sixth form rather than assuming a 4 is always enough.",
  },
  {
    q: "What's the difference between Combined Science and Triple Science?",
    a: 'Combined Science (sometimes called Double Award) is examined as two GCSEs and results in a double grade such as 7-6, covering biology, chemistry and physics but at a reduced depth. Triple Science is assessed as three separate GCSEs — one each in Biology, Chemistry and Physics — with longer papers and more content in each subject. Triple Science suits students who enjoy science and are likely to continue with a science A-Level, while Combined Science leaves room in the timetable for an additional option subject.',
  },
  {
    q: 'What happens if my child doesn’t get a grade 4 in English or Maths?',
    a: "They won't be prevented from starting sixth form or college, but under the post-16 condition of funding they'll need to keep studying English and/or Maths alongside their other courses, usually working towards a GCSE resit or a stepping-stone qualification such as Functional Skills. Continuing to study the subject is the actual requirement — a resit exam isn't automatically compulsory, though most colleges do enter students for one as the most direct route to a grade 4.",
  },
  {
    q: "Does it matter which exam board my child's school uses?",
    a: "Yes, in terms of how they should revise, though not in terms of the qualification's value — a grade 7 from AQA carries the same weight as a grade 7 from Pearson Edexcel or OCR. What differs is question style and paper structure: AQA is widely used for English, Science and Humanities and is known for detailed mark schemes; Edexcel, run by Pearson, is common for Maths and often uses clearly scaffolded questions; OCR has a strong following for Computer Science and History. We check which board and tier your child is entered for and tailor practice papers accordingly.",
  },
  {
    q: 'What is Foundation tier versus Higher tier, and which one should my child take?',
    a: "Maths and some Science papers are 'tiered'. Foundation tier covers grades 1 to 5, while Higher tier covers grades 4 to 9 (with a grade 3 safety net for students who narrowly miss the grade 4 boundary). Higher tier is the only route to grades 6 and above, but a student entered for Higher who is not secure on the harder content risks scoring lower than they would have on Foundation. We use mock results and topic-by-topic tracking to help schools and families make this call with real evidence rather than guesswork.",
  },
  {
    q: 'How many GCSEs does my child actually need to take?',
    a: 'There is no single legal minimum, but most state schools enter students for eight to ten GCSEs: English Language, English Literature, Maths, Combined or Triple Science, and a handful of option subjects such as a language, a humanity and a creative or technical subject. What matters most for progression is not the total count but achieving at least a grade 4, and ideally a grade 5, in English and Maths specifically, since these are the two subjects most consistently checked by sixth forms, colleges and employers.',
  },
];

export default function UKGcsePage() {
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
                GCSE Preparation Online with <span className="text-royal-purple">Expert UK Tutors</span>
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
                Our GCSE preparation online covers every Key Stage 4 subject, from Foundation and Higher tier Maths to Combined and Triple Science, with tutors who know exactly what a grade 4 standard pass and grade 5 strong pass actually require. Every session is built around the exam board and tier your child is entered for, so revision time goes on the content that will genuinely appear in the exam hall.
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
                  alt="A professional tutor helping a student in a UK classroom setting"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3k0vu8Tg3YUMNFs4pRgue5UNIQWPgpMyoQYwplh0zysRdVH48wM9XHcQph5Zgva9c60ifDYUb87JsC_GUn1R7iw601Lwtr3zrjoqsYXcqZMVlfPt4ke1xUG3jboqxzHyoL7sfSBeK1SASSJ_j8LpLXEZFI61x-AKLxyCgik1K6p7ktNMrzBTamBcp-xQE0BIolbmoBejxeUqzsAVl980BvvDz816xje9HVyTobd2Z4ahPLUgSp9GBKA"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is GCSE Section */}
      <section className="py-24 bg-soft-gray">
        <div className="learning-lane px-margin-mobile md:px-0 text-center max-w-max-width mx-auto">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="font-headline-lg text-headline-lg text-charcoal font-bold">Understanding the GCSE Journey</h2>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              The General Certificate of Secondary Education (GCSE) is sat at the end of Key Stage 4, across Year 10 and Year 11, and forms the qualification most sixth forms, colleges, apprenticeship providers and employers check first. Since the move to the 9-1 grading scale, a grade 9 sits above the old A*, a grade 7 lines up roughly with the old A, and a grade 4 — the 'standard pass' — is the threshold most post-16 routes look for, with many competitive courses asking for a grade 5 'strong pass' instead. At Math Make Smart, we build revision around the tier, exam board and specific grade target that matters for your child's next step.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12">
              {[
                { icon: CalendarDays, color: 'bg-royal-purple/10 text-royal-purple', title: 'Year 10-11', desc: 'Two years of Key Stage 4 study building towards final exams sat in May and June of Year 11.' },
                { icon: School, color: 'bg-lime-green/20 text-secondary', title: '9-1 Grading', desc: "Grade 4 is a standard pass and grade 5 a strong pass — the two thresholds that decide most sixth form and college offers." },
                { icon: ClipboardCheck, color: 'bg-royal-purple/10 text-royal-purple', title: 'Mocks & Finals', desc: 'School mock exams in Year 11 identify gaps early, well before the real papers under exam board conditions.' },
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
            <p className="font-body-md text-body-md text-on-surface-variant">Comprehensive GCSE revision across the compulsory pillars of the Key Stage 4 curriculum.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Calculator, title: 'Mathematics',
                items: ['Foundation tier (grades 1-5) and Higher tier (grades 4-9) mastery', 'Algebra, geometry, ratio and statistics topic coverage', 'Non-calculator technique and problem-solving under time pressure'],
                nav: () => navigateTo('subject', 'Maths'),
              },
              {
                icon: BookOpen, title: 'English',
                items: ['English Language and English Literature exam preparation', 'Analytical and comparative essay writing', 'Creative writing, poetry analysis and unseen text practice'],
                nav: () => navigateTo('subject', 'English'),
              },
              {
                icon: FlaskConical, title: 'Science',
                items: ['Combined Science (Double Award, 2 GCSEs) revision', 'Triple Science (Biology, Chemistry, Physics as 3 separate GCSEs)', 'Required practicals, data analysis and exam technique'],
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
            <h2 className="font-headline-lg text-headline-lg mb-6 font-bold">Expertise Across All UK Exam Boards</h2>
            <p className="font-body-lg text-body-lg opacity-90 leading-relaxed">
              A grade 7 means the same thing whichever board awards it, but the route to that grade looks different on paper. AQA papers are known for detailed mark schemes and are widely used for English, Science and Humanities; Pearson Edexcel, common for Maths and Business Studies, tends to scaffold questions more visibly; OCR has a strong following for Computer Science and History and structures its papers a little differently again. Formula sheets, tiering rules and question wording all vary by board, so our tutors match practice papers to the exact specification your child's school teaches rather than working from generic revision guides.
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
            <h2 className="font-headline-lg text-headline-lg text-charcoal mb-4 font-bold">Why Families Choose Online Tutors for GCSE Preparation</h2>
            <p className="font-body-md text-body-md text-on-surface-variant">The pillars of our patient, evidence-based approach to GCSE tutoring.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Brain, color: 'bg-lime-green/20 text-secondary', title: 'Subject-Specialist Tutors', desc: 'Tutors who teach one or two GCSE subjects in depth, not a generalist covering the whole curriculum thinly.' },
              { icon: Map, color: 'bg-royal-purple/10 text-royal-purple', title: 'Grade-Targeted Plans', desc: 'Revision built around the specific grade jump your child needs, from a grade 3 to a secure 4, or a 6 to a 7.' },
              { icon: ClipboardCheck, color: 'bg-lime-green/20 text-secondary', title: 'GCSE Mock Exams', desc: 'Timed past papers marked against real board grade boundaries, with detailed feedback on where marks were lost.' },
              { icon: SmilePlus, color: 'bg-royal-purple/10 text-royal-purple', title: 'Confidence Under Pressure', desc: 'Practical exam-hall technique for managing time, tricky wording and nerves once the paper is turned over.' },
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
            <h2 className="font-headline-lg text-headline-lg text-charcoal mb-4 font-bold">GCSE-Specific FAQs</h2>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto">Straight answers to the questions UK parents ask most often about GCSE grading, science options and exam boards.</p>
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
                    {idx === FAQS.length - 1 && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          navigateTo('test-prep', 'A-Levels');
                        }}
                        className="text-royal-purple font-bold inline-flex items-center gap-2 hover:translate-x-1 transition-transform cursor-pointer"
                      >
                        See our A-Level preparation support <LigatureIcon name="arrow_forward" className="text-sm" />
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
                <h2 className="font-headline-lg text-headline-lg text-charcoal mb-4 font-bold">Secure Your Free Trial Lesson</h2>
                <p className="text-on-surface-variant text-body-lg">No obligations. Just a chance for your child to experience how our GCSE preparation online actually works, with real exam board past papers from the first session.</p>
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
              <img className="absolute inset-0 w-full h-full object-cover" alt="A focused female student studying in the UK" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCYCUJcXhUtMGJ8kHDhchbqDVkwOw6byBigwop3E66ulr1f-GizLPnqPgDBUlgq5LtL6FMF8Vu8kqiEy67WDdI-B31rpVERMrPmDwc8BTfVYXie5y7H_HJbPdV6xbwHrSk3Gkr1AefBybqpzAgrjyZnOcn2XtSTLIBizH1If_FNb_vLbusmYDVxTejk_GazgmYPFcMw6507M0U5A-_2dJdRhpGEwxQsxsaTKrCIUQiu9f8XxmPSUuI54g" />
              <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-transparent"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}