'use client';

import React, { useState } from 'react';
import { ActivePage } from '@/lib/types';
import {
  GraduationCap,
  ArrowRight,
  Clock,
  ArrowUpRight,
  Wallet,
  ShieldCheck,
  FlaskConical,
  CheckCircle2,
  BarChart3,
  Brain,
  Rocket,
  Sun,
  Atom,
  Star,
  CalendarClock,
  Users,
  Route,
  Target,
  ChevronDown,
  BookOpen,
  HelpCircle,
} from 'lucide-react';

interface SubjectComponentProps {
  onNavigate: (page: ActivePage, subjectTitle?: string) => void;
}

export default function USAPhysicsSubject({ onNavigate }: SubjectComponentProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      question: 'How do your online physics lessons align with US state and national standards?',
      answer:
        'Our online physics tutoring program fully incorporates Next Generation Science Standards (NGSS) and College Board frameworks. Whether your child attends a public, private, or homeschool program, our customized lesson plans match their exact school syllabus and state curriculum.',
    },
    {
      question: 'Can an Online Physics Tutor in USA help with AP Physics 1, 2, and AP Physics C?',
      answer:
        'Yes! We specialize in Advanced Placement (AP) Physics courses. Our tutors guide high school students through vector kinematics, rotational dynamics, electromagnetism, calculus-based mechanics, and AP exam practice free-response questions.',
    },
    {
      question: 'What grades and age levels do you support for US students?',
      answer:
        'We cover Middle School Physical Science (Grades 6–8), High School Physics (Grades 9–12), Honors Physics, AP Physics, as well as Physics sections covered in SAT Subject Prep and ACT Science.',
    },
    {
      question: 'How are the live 1-on-1 tutoring sessions conducted?',
      answer:
        'Sessions are held live via interactive video software equipped with digital whiteboards, real-time equation editors, and virtual lab simulations. Students can share homework problems directly and receive step-by-step guidance.',
    },
    {
      question: 'Is the initial demo session completely free?',
      answer:
        'Absolutely. We offer a 100% free trial lesson with no credit card required so you can experience our personalized teaching methodology before committing.',
    },
  ];

  return (
    <div className="bg-background text-on-surface font-body-md selection:bg-primary-fixed selection:text-on-primary-fixed">
      {/* Hero Section */}
      <section className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-16 md:py-24">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary-fixed text-on-primary-fixed-variant rounded-full text-label-sm font-semibold">
            <GraduationCap size={16} />
            US CURRICULUM &amp; NGSS SPECIALISTS
          </div>
          <h1 className="font-headline-lg text-[40px] md:text-[56px] leading-[1.1] text-charcoal font-bold">
            Online Physics Tutor <br />
            <span className="text-royal-purple">in USA</span>
          </h1>
          <p className="text-body-lg text-on-surface-variant max-w-lg font-sans">
            Master fundamental physical concepts and excel in AP Physics with an expert <strong>online physics tutor in USA</strong>. Personalized 1-on-1 guidance tailored to NGSS, Honors tracks, and College Board exam prep.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <button
              onClick={() => onNavigate('trial')}
              className="bg-royal-purple text-on-primary px-8 py-4 rounded-xl font-label-md hover:shadow-lg transition-all flex items-center gap-2 group font-bold cursor-pointer"
            >
              Book Free Trial Lesson
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => onNavigate('a-levels')}
              className="border-2 border-royal-purple text-royal-purple px-8 py-4 rounded-xl font-label-md hover:bg-primary-fixed transition-all font-bold cursor-pointer"
            >
              View Pricing
            </button>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -top-12 -right-12 w-64 h-64 bg-lime-green/20 rounded-full blur-3xl -z-10"></div>
          <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-royal-purple/10 rounded-full blur-3xl -z-10"></div>
          <div className="rounded-3xl overflow-hidden shadow-2xl transform hover:scale-[1.01] transition-transform duration-500">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB5NmJhPcbJ0sJ8woPXgWNIeoBpV1Q98W72ZpjSys5mMVXWRkPsnPpuuDK9U9kuVpp_vOUMVv0TAz08XlxnhTfYdWNQbSHKXVqDM4RJlGT3IujqUM8w3r0BBRwbzQy1cgtXSk_3H8OThqac14yyDVqY0pOuMPf8yb0RoIoyv86FHKtsAdyvPQDUZCpNq1nuhGm6rgQ07iy55CZadr9lXt-9S4lq-pPUTXLcBxT_ORuZZFFQSAIyxLRJoQ"
              alt="High school student studying physics during an online tutoring video call"
            />
          </div>
        </div>
      </section>

      {/* What We Offer - Features Grid */}
      <section className="bg-soft-gray py-20 md:py-24">
        <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="text-center mb-16 space-y-4">
            <h2 className="font-headline-lg text-charcoal font-bold">What We Offer</h2>
            <div className="h-1 w-20 bg-royal-purple mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {/* Feature 1 */}
            <div className="bg-surface-container-lowest p-8 rounded-3xl card-elevation group hover:-translate-y-2 transition-transform duration-300">
              <div className="w-14 h-14 bg-primary-fixed rounded-2xl flex items-center justify-center mb-6 text-primary group-hover:bg-royal-purple group-hover:text-white transition-colors">
                <Clock size={28} />
              </div>
              <h3 className="font-headline-md mb-4 text-charcoal font-bold">Flexible US Time Zones</h3>
              <p className="text-on-surface-variant mb-6">
                Convenient scheduling across EST, CST, MST, and PST. Easily coordinate sessions around extracurriculars and school routines.
              </p>
              <button
                onClick={() => onNavigate('curriculum')}
                className="text-royal-purple font-label-md flex items-center gap-1 hover:underline font-bold cursor-pointer"
              >
                All Subjects <ArrowUpRight size={16} />
              </button>
            </div>
            {/* Feature 2 */}
            <div className="bg-surface-container-lowest p-8 rounded-3xl card-elevation group hover:-translate-y-2 transition-transform duration-300">
              <div className="w-14 h-14 bg-secondary-fixed rounded-2xl flex items-center justify-center mb-6 text-secondary group-hover:bg-lime-green group-hover:text-charcoal transition-colors">
                <Wallet size={28} />
              </div>
              <h3 className="font-headline-md mb-4 text-charcoal font-bold">Affordable Rates</h3>
              <p className="text-on-surface-variant mb-6">
                Transparent pricing with flexible packages. Get top-tier science education without contracts or hidden fees.
              </p>
              <button
                onClick={() => onNavigate('a-levels')}
                className="text-royal-purple font-label-md flex items-center gap-1 hover:underline font-bold cursor-pointer"
              >
                Fee Structure <ArrowUpRight size={16} />
              </button>
            </div>
            {/* Feature 3 */}
            <div className="bg-surface-container-lowest p-8 rounded-3xl card-elevation group hover:-translate-y-2 transition-transform duration-300">
              <div className="w-14 h-14 bg-tertiary-fixed rounded-2xl flex items-center justify-center mb-6 text-tertiary group-hover:bg-tertiary-container group-hover:text-white transition-colors">
                <ShieldCheck size={28} />
              </div>
              <h3 className="font-headline-md mb-4 text-charcoal font-bold">Proven Academic Excellence</h3>
              <p className="text-on-surface-variant mb-6">
                Targeted homework help, AP exam preparation, and conceptual mastery to raise GPA and standardized test scores.
              </p>
              <button
                onClick={() => onNavigate('trial')}
                className="text-royal-purple font-label-md flex items-center gap-1 hover:underline font-bold cursor-pointer"
              >
                Sign up now <ArrowUpRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Physics Lesson Plans & Grade-Level Tracks */}
      <section className="py-20 md:py-24 max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-4 text-left">
          <div className="space-y-1 text-left">
            <span className="text-royal-purple font-label-md tracking-widest uppercase font-bold block text-left">US Curriculum Progression</span>
            <h2 className="font-headline-lg text-charcoal font-bold text-left">Physics Grade Levels &amp; Lesson Plans</h2>
          </div>
          <p className="text-on-surface-variant max-w-md text-left">
            Comprehensive coverage aligned with NGSS benchmarks from Middle School Physical Science through Advanced Placement (AP) Physics.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
          {/* Middle School Card */}
          <div className="md:col-span-4 bg-primary-container text-on-primary-container p-8 rounded-[32px] flex flex-col h-full relative overflow-hidden group">
            <FlaskConical size={120} className="absolute -right-4 -bottom-4 opacity-10 group-hover:scale-110 transition-transform" />
            <div className="mb-auto">
              <div className="bg-white/20 backdrop-blur-sm w-fit px-4 py-1 rounded-full text-label-sm mb-6 font-semibold">Grades 6–8</div>
              <h3 className="text-3xl font-bold mb-6">Middle School Physical Science</h3>
              <ul className="space-y-3 font-medium">
                <li className="flex items-center gap-3"><CheckCircle2 className="text-lime-green" size={20} fill="currentColor" stroke="white" /> Forces, Motion &amp; Gravity</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="text-lime-green" size={20} fill="currentColor" stroke="white" /> Kinetic &amp; Potential Energy</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="text-lime-green" size={20} fill="currentColor" stroke="white" /> Light &amp; Sound Waves</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="text-lime-green" size={20} fill="currentColor" stroke="white" /> Simple Electrical Circuits</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="text-lime-green" size={20} fill="currentColor" stroke="white" /> Earth &amp; Space Physics</li>
              </ul>
            </div>
          </div>

          {/* High School Physics Card */}
          <div className="md:col-span-8 bg-surface-container-low border border-outline-variant p-8 rounded-[32px] flex flex-col md:flex-row gap-8 group">
            <div className="flex-1 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-royal-purple rounded-xl flex items-center justify-center text-white">
                  <BarChart3 size={22} />
                </div>
                <h3 className="text-2xl font-bold text-charcoal">High School Physics (Grades 9–11)</h3>
              </div>
              <p className="text-on-surface-variant">
                Core physics concepts for high school credit, strengthening problem-solving techniques, mathematical derivations, and laboratory reasoning.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
                <span className="px-3 py-1 bg-white rounded-lg text-label-sm border border-outline-variant font-medium">Newtonian Mechanics</span>
                <span className="px-3 py-1 bg-white rounded-lg text-label-sm border border-outline-variant font-medium">Work, Energy &amp; Power</span>
                <span className="px-3 py-1 bg-white rounded-lg text-label-sm border border-outline-variant font-medium">Electromagnetism</span>
                <span className="px-3 py-1 bg-white rounded-lg text-label-sm border border-outline-variant font-medium">Wave Optics &amp; Acoustics</span>
                <span className="px-3 py-1 bg-white rounded-lg text-label-sm border border-outline-variant font-medium">Thermal Dynamics</span>
                <span className="px-3 py-1 bg-white rounded-lg text-label-sm border border-outline-variant font-medium">Atomic &amp; Nuclear Principles</span>
              </div>
            </div>
            <div className="md:w-1/3 rounded-2xl overflow-hidden relative min-h-[200px] flex items-center justify-center bg-royal-purple/5 p-6 border border-outline-variant">
              <div className="text-center space-y-2">
                <BookOpen size={48} className="mx-auto text-royal-purple" />
                <h4 className="font-bold text-charcoal">Interactive Whiteboards</h4>
                <p className="text-xs text-on-surface-variant">Real-time formula solving &amp; visual lab experiments.</p>
              </div>
            </div>
          </div>

          {/* AP Physics & College Track Card */}
          <div className="md:col-span-12 bg-white border border-outline-variant p-8 md:p-10 rounded-[40px] shadow-sm relative overflow-hidden group">
            <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block bg-primary-fixed text-primary px-4 py-1.5 rounded-full text-label-sm font-bold mb-6">AP &amp; Honors Physics Specialists</div>
                <h3 className="text-3xl md:text-4xl font-bold text-charcoal mb-6">Advanced College Prep (Grades 11–12)</h3>
                <p className="text-on-surface-variant text-lg mb-8">
                  Rigorous preparation for College Board examinations (AP Physics 1, AP Physics 2, and AP Physics C Mechanics/E&amp;M) to secure top grades and college credit.
                </p>
                <div className="flex flex-wrap gap-3">
                  <div className="flex items-center gap-2 bg-soft-gray px-4 py-2 rounded-full border border-outline-variant">
                    <Brain size={20} className="text-primary" />
                    <span className="font-label-md font-medium">Rotational Dynamics</span>
                  </div>
                  <div className="flex items-center gap-2 bg-soft-gray px-4 py-2 rounded-full border border-outline-variant">
                    <Rocket size={20} className="text-primary" />
                    <span className="font-label-md font-medium">Calculus Kinematics</span>
                  </div>
                  <div className="flex items-center gap-2 bg-soft-gray px-4 py-2 rounded-full border border-outline-variant">
                    <Sun size={20} className="text-primary" />
                    <span className="font-label-md font-medium">Quantum &amp; Fluids</span>
                  </div>
                  <div className="flex items-center gap-2 bg-soft-gray px-4 py-2 rounded-full border border-outline-variant">
                    <Atom size={20} className="text-primary" />
                    <span className="font-label-md font-medium">Electromagnetic Induction</span>
                  </div>
                </div>
              </div>
              <div className="bg-soft-gray p-8 rounded-3xl border border-outline-variant space-y-4">
                <h4 className="text-xl font-bold text-charcoal">Lesson Plan Highlights for AP Success</h4>
                <ul className="space-y-3 text-on-surface-variant font-medium text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={18} className="text-royal-purple flex-shrink-0 mt-0.5" />
                    <span>Free-Response Question (FRQ) step-by-step breakdown</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={18} className="text-royal-purple flex-shrink-0 mt-0.5" />
                    <span>Vector calculations &amp; calculus application</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={18} className="text-royal-purple flex-shrink-0 mt-0.5" />
                    <span>Data analysis and experimental design mastery</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={18} className="text-royal-purple flex-shrink-0 mt-0.5" />
                    <span>Targeted practice tests to achieve a 5 on AP exams</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-charcoal text-white py-20 md:py-24 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-royal-purple/5 -skew-x-12"></div>
        <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
          <div className="max-w-2xl mb-16">
            <h2 className="font-headline-lg mb-6 font-bold">Why Online Physics Tutoring with Math Make Smart Stands Unique</h2>
            <p className="text-surface-dim text-lg">
              We bridge the gap between complex mathematical equations and real-world application through interactive virtual learning designed for American students.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-lime-green">
                <CalendarClock size={24} />
              </div>
              <h4 className="text-xl font-bold">Flexible US Hours</h4>
              <p className="text-outline-variant text-sm">Schedule lessons during evenings or weekends across Eastern, Central, Mountain, or Pacific time zones.</p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-lime-green">
                <Users size={24} />
              </div>
              <h4 className="text-xl font-bold">Dedicated Tutors</h4>
              <p className="text-outline-variant text-sm">Learn from patient educators experienced in breaking down challenging physics theories into clear steps.</p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-lime-green">
                <Route size={24} />
              </div>
              <h4 className="text-xl font-bold">Customized Roadmaps</h4>
              <p className="text-outline-variant text-sm">Tailored study schedules created specifically around your school district’s goals and textbook materials.</p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-lime-green">
                <Target size={24} />
              </div>
              <h4 className="text-xl font-bold">Exam Strategies</h4>
              <p className="text-outline-variant text-sm">Focus on high-yield test topics, AP free-response strategies, and SAT/ACT quantitative reasoning techniques.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted Tutors */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="text-center mb-16">
            <h2 className="font-headline-lg text-charcoal font-bold">Meet Our Physics Educators</h2>
            <p className="text-on-surface-variant font-medium">Qualified specialists in US physical science standards and AP curriculum tracks.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {/* Tutor 1 */}
            <div className="bg-soft-gray p-8 rounded-[40px] flex flex-col md:flex-row gap-8 items-center text-center md:text-left card-elevation">
              <div className="w-32 h-32 rounded-3xl overflow-hidden flex-shrink-0 border-4 border-white shadow-sm flex items-center justify-center bg-royal-purple/10 text-royal-purple font-bold text-3xl">
                MR
              </div>
              <div>
                <h4 className="text-2xl font-bold text-charcoal mb-1">Marcus Reed</h4>
                <span className="text-royal-purple font-label-md mb-4 block font-semibold">AP &amp; Honors Physics Specialist</span>
                <p className="text-on-surface-variant text-sm leading-relaxed mb-4">
                  "I focus on connecting vector calculus and classical mechanics to real-life applications so students feel confident taking AP exams."
                </p>
                <div className="flex gap-1 justify-center md:justify-start">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} size={16} className="text-lime-green" fill="currentColor" stroke="none" />
                  ))}
                </div>
              </div>
            </div>
            {/* Tutor 2 */}
            <div className="bg-soft-gray p-8 rounded-[40px] flex flex-col md:flex-row gap-8 items-center text-center md:text-left card-elevation">
              <div className="w-32 h-32 rounded-3xl overflow-hidden flex-shrink-0 border-4 border-white shadow-sm flex items-center justify-center bg-lime-green/20 text-charcoal font-bold text-3xl">
                EC
              </div>
              <div>
                <h4 className="text-2xl font-bold text-charcoal mb-1">Emily Chen</h4>
                <span className="text-royal-purple font-label-md mb-4 block font-semibold">NGSS &amp; High School Physics Tutor</span>
                <p className="text-on-surface-variant text-sm leading-relaxed mb-4">
                  "Helping students break down complex formulas into easy, visual steps makes physical science enjoyable and straightforward."
                </p>
                <div className="flex gap-1 justify-center md:justify-start">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} size={16} className="text-lime-green" fill="currentColor" stroke="none" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions (FAQ) Section */}
      <section className="bg-soft-gray py-20 md:py-24 border-t border-outline-variant">
        <div className="max-w-4xl mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="text-center mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary-fixed text-on-primary-fixed-variant rounded-full text-label-sm font-semibold">
              <HelpCircle size={16} />
              GOT QUESTIONS?
            </div>
            <h2 className="font-headline-lg text-charcoal font-bold">Frequently Asked Questions</h2>
            <p className="text-on-surface-variant">Find answers regarding our online physics tutoring services in the USA.</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl border border-outline-variant overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left p-6 font-bold text-lg text-charcoal flex justify-between items-center gap-4 hover:bg-soft-gray/50 transition-colors cursor-pointer"
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    size={20}
                    className={`text-royal-purple transition-transform duration-300 ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6 text-on-surface-variant leading-relaxed text-base border-t border-outline-variant/30 pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Banner */}
      <section className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop py-20 md:py-24">
        <div className="bg-royal-purple rounded-[48px] p-10 md:p-20 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute -top-24 -left-24 w-96 h-96 border-4 border-white rounded-full"></div>
            <div className="absolute -bottom-24 -right-24 w-64 h-64 border-4 border-white rounded-full"></div>
          </div>
          <div className="relative z-10 max-w-3xl mx-auto space-y-8">
            <h2 className="font-display-lg text-white font-bold text-display-lg-mobile md:text-display-lg">
              Boost Your Physics Grades Today!
            </h2>
            <p className="text-primary-fixed text-lg">
              Book a free trial session with an expert <strong>online physics tutor in USA</strong>. Experience custom 1-on-1 instruction tailored to your school goals with zero commitment.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6 pt-4">
              <button
                onClick={() => onNavigate('trial')}
                className="bg-white text-royal-purple px-10 py-5 rounded-2xl font-bold hover:bg-soft-gray transition-all shadow-xl hover:shadow-2xl active:scale-95 cursor-pointer"
              >
                Book Free Trial
              </button>
              <button
                onClick={() => onNavigate('about')}
                className="border-2 border-white/40 text-white px-10 py-5 rounded-2xl font-bold hover:bg-white/10 transition-all active:scale-95 cursor-pointer"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}