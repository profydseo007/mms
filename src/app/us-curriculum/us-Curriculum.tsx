'use client';

import React, { useState } from 'react';

import { ActivePage } from '@/lib/types';
import { useRouter } from 'next/navigation';
import MaterialIcon from '@/components/MaterialIcon';
import { Globe, MapPin } from 'lucide-react';
import LigatureIcon from '@/components/LigatureIcon';
interface CurriculumProps {
  onNavigate: (page: ActivePage, subjectTitle?: string) => void;
}

export default function CurriculumUS({ onNavigate }: CurriculumProps) {
  const router = useRouter();
  const faqs = [
  {
    q: "Do you follow the Common Core standards?",
    a: "Where your state uses them, yes. Our tutors are well versed in the Common Core State Standards for mathematics and English language arts, and in NGSS for science. But we do not assume Common Core everywhere, because several states never adopted it or have replaced it since. In Texas we teach the TEKS, in Florida the B.E.S.T. Standards, in Virginia the Standards of Learning. We align to your child's actual school curriculum rather than to a national default."
  },
  {
    q: "Which grades do you support?",
    a: "Kindergarten through Grade 12, including Honors, AP and college-prep courses. The stages where families most often see the largest gains are middle school mathematics, where readiness for Algebra 1 is established, and the first year of a high school science course, where the jump in abstraction catches many students out."
  },
  {
    q: "Can you help with SAT and ACT preparation?",
    a: "Yes. Our tutors specialize in SAT Math, SAT Reading and Writing, and ACT preparation. The two tests reward different things: the ACT runs four sections including science and rewards pace, while the digital SAT is adaptive, so early accuracy within a section shapes the difficulty of what follows. We prepare students for the specific test they are sitting rather than treating them as interchangeable."
  },
  {
    q: "How are the lessons conducted?",
    a: "All sessions are live and one-to-one by video call, using an interactive whiteboard built for mathematical notation and screen sharing for working through problems together. Lessons are recorded to your account so your child can review them at any time, and you can see exactly what was covered."
  },
  {
    q: "Do you support specific state curricula?",
    a: "Yes, and this is central to how we match tutors. We support Texas TEKS, California standards, Florida B.E.S.T., New York's Next Generation Learning Standards, Virginia SOL, Illinois, Georgia, Massachusetts and others. Course names differ too, not just standards: a tested high school mathematics course might be Algebra I in one state, Integrated Math 1 in another, and Algebra: Concepts and Connections in Georgia. We match to what your school actually runs."
  },
  {
    q: "Is there a free trial lesson?",
    a: "Yes. Every new student gets a completely free trial lesson with no credit card required. It exists so we can assess where your child actually stands against their grade-level standards, and so you can watch a tutor work with them, before anyone commits to anything."
  },
  {
    q: "How quickly can we start?",
    a: "You can book a free trial lesson within minutes, and we usually match students with a suitable tutor quickly. If you are working towards a specific test date, it is worth starting earlier than feels necessary: exam technique improves quickly, but rebuilding missing subject knowledge takes longer and is the thing that most often limits a result."
  },
  {
    q: "What if my child doesn't like the tutor?",
    a: "We offer free tutor replacement until you find the right match. Personality fit matters as much as subject expertise, and it is not always right the first time. Rematching is routine, costs nothing, and does not use up a session."
  },
];
// Inside your component, above the return statement:
const [activeFaq, setActiveFaq] = useState<number | null>(null);

const toggleFaq = (idx: number) => {
  setActiveFaq(activeFaq === idx ? null : idx);
};
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 md:pt-24 pb-16 px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="z-10">
            <span className="inline-block curriculum-chip px-4 py-1.5 rounded-full font-label-sm font-bold mb-6 uppercase tracking-wider">
              All 50 States
            </span>
            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-charcoal mb-6 leading-tight font-bold">
              US Curriculum Tutoring for Grades K&ndash;12
            </h1>
            <p className="font-body-lg text-on-surface-variant mb-10 max-w-xl">
              Professional one-to-one online tutoring across the US curriculum in math, English and science,
              including physics, chemistry, biology and SAT math. There is no single national curriculum in
              America, so every tutor is matched to the standards your child&apos;s own state actually uses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => onNavigate('trial')}
                className="bg-royal-purple text-white px-8 py-4 rounded-xl font-headline-md font-bold hover:bg-primary transition-all shadow-lg active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
              >
                Free Trial Lesson
                <MaterialIcon name="arrow_forward" />
              </button>
              <button 
                onClick={() => onNavigate('pricing')}
                className="bg-white border-2 border-royal-purple text-royal-purple px-8 py-4 rounded-xl font-headline-md font-bold hover:bg-soft-gray transition-all active:scale-95 text-center cursor-pointer"
              >
                View Subjects &amp; Pricing
              </button>
            </div>
            <div className="mt-8 flex items-center gap-4 text-on-surface-variant font-label-md">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-slate-200 border-2 border-white overflow-hidden">
                  <img 
                    className="w-full h-full object-cover" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuC8oMCoDMs3hmKGgujPB9bLuN6wyxLrANpuugrOAiYwgm96ZH-Js2Ytipvqf5tdLSgAIsKW7LtWXyxTAcLQU-DGAeB9qNfd7Fn2HqNj1Rh9El5ibPMoAdoxT9zJUSCGMFWbS-OzXGeLqaoTSlErKUqonN0WPd7uFqlWO2TkeEIlL6xGPP8Q8-zx6KFBlgRjP6NXNbGmPgUN451fBdqV5UyLHscxizBQur5Y27at1OoeF6_Q2MlIdOkOBw" 
                    alt="US tutor" 
                  />
                </div>
                <div className="w-8 h-8 rounded-full bg-slate-300 border-2 border-white overflow-hidden">
                  <img 
                    className="w-full h-full object-cover" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCrfy2VDzuas8JI7_Nc_lgFtDUBGaKBwYUAhIgRczApCaSXYrEV2QsJp7ZilvbDIj-JTYgaf4Z5CAxWjTKeOdP-Xew7mlBfgftkQSaB9vfp9pimw1kFUFlB1TepNnR3YcFAVouYpEE--o6gzvDCCEvNFw68t44lVdXKoy3QA_oZ6BixAGA7c3G90gyMoG0SzuROLNi07G9rU3TGE0J1WjYzaadaiJZKwmlnWWKtYWAdwl2Y71XLs_Sp_A" 
                    alt="US tutor" 
                  />
                </div>
                <div className="w-8 h-8 rounded-full bg-slate-400 border-2 border-white overflow-hidden">
                  <img 
                    className="w-full h-full object-cover" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBaEzIf4xmjrSsmMQsxn3xNvophay-XtLbJvWVo1gLfT7ENY6m9qmuYGA2_6vVdeP6_GyFYCKJ5zYsLqtnMllqrblzpeR_9pXfhLphLBz6J5Cze73zy0lWPot3wmxqmWjgaEIn-7O-mSXZt3XmjLQKc1EeXx4yO9XitwegeSlCY-RAfCSxl8lYPboqc7adxcFOMczEvH5jmafgRCaVIpdS1YJOOptHV2l5z1Muo2rPZt6_HuqUoXGRAWg" 
                    alt="US tutor" 
                  />
                </div>
              </div>
              <span className="font-medium">Serving students across all 50 states</span>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-lime-green opacity-20 blur-[100px] rounded-full"></div>
            <div className="relative z-10 bg-white rounded-[32px] p-4 shadow-ambient">
              <div className="rounded-[24px] overflow-hidden bg-surface-container relative aspect-video">
                <img 
                  alt="A student studying online with a laptop" 
                  className="w-full h-full object-cover rounded-[24px] aspect-video" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDbShOGL08hxuZBe5aIC7NBDDPvIDPGbOX0ChbZ6SwDPm9FvLdz9WGVdvgQ-EYBb3ZyoQ3wNeAntcdUmlXdyroun3oKuqhGIH4MqbXlZMZVS45wv_da5cE_lK-QoPFzp4sjXP2Q9BFdz7qT7iqbWAxSJd9_3MFjCl6l-yDiwJiHhXPAWen_J7AS25n2SVfhJXpg3gWigxail5i8bTfbU3bdoCt3vGYG5zG9tBIclAgoNPtSU3-Mr0lJ1dki8WCFMGMWdQbkX9dFFgS96bk" 
                />
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl flex items-center gap-4 max-w-xs animate-bounce-subtle">
                  <div className="w-10 h-10 rounded-full bg-lime-green flex items-center justify-center flex-shrink-0">
                    <MaterialIcon name="trending_up" className="text-charcoal text-xl" />
                  </div>
                  <div>
                    <p className="font-label-sm text-charcoal font-bold">State-Matched</p>
                    <p className="text-[10px] text-on-surface-variant font-medium">Your standards, not a generic syllabus</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Understanding the US K-12 Curriculum */}
      <section className="py-24 bg-soft-gray border-y border-surface-container">
        <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="text-center mb-16">
            <h2 className="font-headline-lg text-headline-lg text-charcoal mb-4 font-bold">Understanding the US K&ndash;12 Curriculum</h2>
            <p className="font-body-md text-on-surface-variant max-w-2xl mx-auto">
              Education in the United States is run at state level. Two widely used frameworks shape most
              classrooms, but neither is universal, and knowing which applies to your child is where useful
              tutoring begins.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-3xl text-center shadow-ambient hover-lift">
              <p className="font-headline-md text-royal-purple mb-2 font-bold">CCSS</p>
              <p className="font-label-md text-on-surface-variant font-medium">Common Core, mathematics and English language arts</p>
            </div>
            <div className="bg-white p-8 rounded-3xl text-center shadow-ambient hover-lift">
              <p className="font-headline-md text-royal-purple mb-2 font-bold">NGSS</p>
              <p className="font-label-md text-on-surface-variant font-medium">Next Generation Science Standards</p>
            </div>
            <div className="bg-white p-8 rounded-3xl text-center shadow-ambient hover-lift">
              <p className="font-headline-md text-royal-purple mb-2 font-bold">State</p>
              <p className="font-label-md text-on-surface-variant font-medium">TEKS, B.E.S.T., SOL and other state frameworks</p>
            </div>
            <div className="bg-white p-8 rounded-3xl text-center shadow-ambient hover-lift">
              <p className="font-headline-md text-royal-purple mb-2 font-bold">Testing</p>
              <p className="font-label-md text-on-surface-variant font-medium">State assessments, plus SAT, ACT and AP</p>
            </div>
          </div>
          <p className="text-center font-body-md text-on-surface-variant max-w-3xl mx-auto mt-12">
            A point worth being clear about, because a lot of tutoring sites gloss over it: most states teach to
            Common Core-aligned standards, but several do not. Texas, Florida, Virginia and others either never
            adopted Common Core or have since replaced it, and states such as Georgia have rewritten their
            standards recently. Saying &ldquo;we teach Common Core&rdquo; is simply inaccurate for a large share of
            American families, which is why we match tutors by state.
          </p>
        </div>
      </section>

      {/* USA Curriculums */}
      <section className="py-24 bg-surface-container-lowest relative overflow-hidden border-y border-surface-container/60">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none opacity-25 md:opacity-35">
          <div className="relative w-[480px] h-[480px] md:w-[680px] md:h-[680px]">
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-royal-purple/20 via-primary-container/15 to-lime-green/15 blur-3xl transform scale-95"></div>
            
            <svg viewBox="0 0 500 500" className="w-full h-full text-royal-purple stroke-current fill-none animate-spin-slow" style={{ animationDuration: '100s' }}>
              <circle cx="250" cy="250" r="230" strokeWidth="1.5" strokeDasharray="6 6" />
              <circle cx="250" cy="250" r="210" strokeWidth="1" opacity="0.6" />
              
              <line x1="20" y1="250" x2="480" y2="250" strokeWidth="1.5" opacity="0.7" />
              <ellipse cx="250" cy="250" rx="230" ry="160" strokeWidth="1" opacity="0.4" />
              <ellipse cx="250" cy="250" rx="230" ry="90" strokeWidth="1" opacity="0.4" />
              
              <line x1="250" y1="20" x2="250" y2="480" strokeWidth="1.5" opacity="0.7" />
              <ellipse cx="250" cy="250" rx="160" ry="230" strokeWidth="1" opacity="0.4" />
              <ellipse cx="250" cy="250" rx="90" ry="230" strokeWidth="1" opacity="0.4" />

              <path d="M 110 130 Q 130 110 160 120 T 180 160 T 150 200 T 100 170 Z" strokeWidth="1.5" className="fill-royal-purple/10" opacity="0.7" />
              <path d="M 160 230 Q 180 250 170 290 T 150 340 T 130 280 Z" strokeWidth="1.5" className="fill-royal-purple/10" opacity="0.7" />
              <path d="M 230 120 Q 260 110 270 140 T 250 180 Z" strokeWidth="1.5" className="fill-royal-purple/10" opacity="0.7" />
              <path d="M 240 190 Q 280 200 270 270 T 230 310 T 220 240 Z" strokeWidth="1.5" className="fill-royal-purple/10" opacity="0.7" />
              <path d="M 280 110 Q 360 100 380 160 T 320 210 T 270 150 Z" strokeWidth="1.5" className="fill-royal-purple/10" opacity="0.7" />
              <path d="M 340 280 Q 380 280 370 320 T 330 330 Z" strokeWidth="1.5" className="fill-royal-purple/10" opacity="0.7" />

              <circle cx="150" cy="150" r="5" className="fill-royal-purple" />
              <circle cx="250" cy="130" r="5" className="fill-royal-purple" />
              <circle cx="250" cy="230" r="5" className="fill-royal-purple" />
              <circle cx="350" cy="160" r="5" className="fill-royal-purple" />
              <circle cx="350" cy="300" r="5" className="fill-royal-purple" />
              
              <path d="M 150 150 Q 200 100 250 130" strokeWidth="1" strokeDasharray="3 3" opacity="0.8" />
              <path d="M 250 130 Q 300 110 350 160" strokeWidth="1" strokeDasharray="3 3" opacity="0.8" />
              <path d="M 350 160 Q 380 230 350 300" strokeWidth="1" strokeDasharray="3 3" opacity="0.8" />
            </svg>
          </div>
        </div>

        <div className="relative z-10 max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-royal-purple/10 text-royal-purple rounded-full font-label-md text-sm font-semibold mb-4">
            <Globe className="w-4 h-4" />
            <span>Every State, Every Standard</span>
          </div>
          <h2 className="font-headline-lg text-headline-lg text-charcoal mb-4 font-semibold">Tutoring Matched to Your State&apos;s Standards</h2>
          <p className="text-body-lg text-on-surface-variant max-w-xl mx-auto mb-12">
            There is no national curriculum in the United States. Standards, assessments and graduation
            requirements are set state by state, and a tutor who doesn&apos;t know yours is a tutor learning on your
            time. We staff by state, so every student works with someone who knows the standards they&apos;re taught
            to and the test they&apos;ll actually sit.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 sm:gap-8">
            {[
              { name: 'California : California Common Core State Standards; CAASPP and Smarter Balanced assessments', slug: 'california' },
              { name: 'Texas : Texas Essential Knowledge and Skills (TEKS); STAAR end-of-course exams', slug: 'texas' },
              { name: 'Florida : B.E.S.T. Standards; FAST progress monitoring', slug: 'florida' },
              { name: 'New York : Next Generation Learning Standards; Regents examinations', slug: 'newyork' },
              { name: 'Virginia : Virginia Standards of Learning; SOL end-of-course tests', slug: 'virginia' },
              { name: 'Illinois : Illinois Learning Standards; Illinois Assessment of Readiness', slug: 'illinois' },
              { name: 'Georgia : Georgia Standards of Excellence; Georgia Milestones', slug: 'georgia' },
              { name: 'Massachusetts : Massachusetts Curriculum Frameworks; MCAS', slug: 'massachusetts' }
            ].map((state) => (
              <div key={state.name} onClick={() => router.push(`/${state.slug}`)} className="flex flex-col items-center gap-4 group cursor-pointer">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center border border-surface-container group-hover:bg-royal-purple group-hover:border-royal-purple group-hover:text-white transition-all duration-300 shadow-sm group-hover:shadow-lg group-hover:-translate-y-1">
                  <MapPin className="w-6 h-6 text-royal-purple group-hover:text-white transition-colors" />
                </div>
                <span className="font-label-md text-label-md text-on-surface-variant group-hover:text-royal-purple font-medium transition-colors">{state.name}</span>
              </div>
            ))}
          </div>
          <p className="text-body-md text-on-surface-variant max-w-2xl mx-auto mt-12">
            Not listed? We tutor students in every state. These are simply the ones with dedicated curriculum
            pages so far.
          </p>
        </div>
      </section>

      {/* Subject Specialisms */}
      <section className="px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto py-24">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="font-headline-lg text-headline-lg text-charcoal mb-4 font-bold">Subject Specialisms</h2>
            <p className="font-body-md text-on-surface-variant">
              Subject specialist teachers across the whole US curriculum, from kindergarten through AP and
              college-prep coursework. Each subject links to a dedicated page with tutor profiles and topics covered.
            </p>
          </div>
          <button 
            onClick={() => onNavigate('subject', 'Math')} 
            className="text-primary font-bold flex items-center gap-2 hover:underline cursor-pointer"
          >
            Explore all subjects
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Math */}
          <div 
            onClick={() => router.push('/us-curriculum/online-math-tutor')}
            className="bg-white border border-surface-variant p-8 rounded-3xl shadow-ambient hover:border-royal-purple transition-all group cursor-pointer"
          >
            <div className="w-14 h-14 bg-royal-purple/10 text-royal-purple rounded-2xl flex items-center justify-center mb-6 group-hover:bg-royal-purple group-hover:text-white transition-all">
              <MaterialIcon name="functions" className="text-3xl" />
            </div>
            <h3 className="font-headline-md mb-4 font-bold text-charcoal">Online Math Tutors</h3>
            <ul className="space-y-3 font-body-md text-on-surface-variant">
              <li className="flex items-center gap-2">
                <MaterialIcon name="check_circle" className="text-lime-green text-sm" />
                K&ndash;5 number sense, fractions &amp; measurement
              </li>
              <li className="flex items-center gap-2">
                <MaterialIcon name="check_circle" className="text-lime-green text-sm" />
                Algebra 1, Geometry &amp; Algebra 2
              </li>
              <li className="flex items-center gap-2">
                <MaterialIcon name="check_circle" className="text-lime-green text-sm" />
                Precalculus, Calculus &amp; SAT math
              </li>
            </ul>
            <span className="mt-6 inline-flex items-center gap-1 text-primary font-bold text-sm group-hover:underline">
              View math tutoring
            </span>
          </div>

          {/* English */}
          <div 
            onClick={() => router.push('/us-curriculum/online-english-tutor')}
            className="bg-white border border-surface-variant p-8 rounded-3xl shadow-ambient hover:border-royal-purple transition-all group cursor-pointer"
          >
            <div className="w-14 h-14 bg-royal-purple/10 text-royal-purple rounded-2xl flex items-center justify-center mb-6 group-hover:bg-royal-purple group-hover:text-white transition-all">
              <MaterialIcon name="menu_book" className="text-3xl" />
            </div>
            <h3 className="font-headline-md mb-4 font-bold text-charcoal">Online English Tutors</h3>
            <ul className="space-y-3 font-body-md text-on-surface-variant">
              <li className="flex items-center gap-2">
                <MaterialIcon name="check_circle" className="text-lime-green text-sm" />
                Reading comprehension &amp; complex texts
              </li>
              <li className="flex items-center gap-2">
                <MaterialIcon name="check_circle" className="text-lime-green text-sm" />
                Argumentative, informative &amp; narrative writing
              </li>
              <li className="flex items-center gap-2">
                <MaterialIcon name="check_circle" className="text-lime-green text-sm" />
                Grammar, vocabulary &amp; evidence-based analysis
              </li>
            </ul>
            <span className="mt-6 inline-flex items-center gap-1 text-primary font-bold text-sm group-hover:underline">
              View English tutoring
            </span>
          </div>

          {/* Science */}
          <div 
            onClick={() => router.push('/us-curriculum/online-science-tutor')}
            className="bg-white border border-surface-variant p-8 rounded-3xl shadow-ambient hover:border-royal-purple transition-all group cursor-pointer"
          >
            <div className="w-14 h-14 bg-royal-purple/10 text-royal-purple rounded-2xl flex items-center justify-center mb-6 group-hover:bg-royal-purple group-hover:text-white transition-all">
              <MaterialIcon name="science" className="text-3xl" />
            </div>
            <h3 className="font-headline-md mb-4 font-bold text-charcoal">Online Science Tutors</h3>
            <ul className="space-y-3 font-body-md text-on-surface-variant">
              <li className="flex items-center gap-2">
                <MaterialIcon name="check_circle" className="text-lime-green text-sm" />
                Disciplinary core ideas across K&ndash;12
              </li>
              <li className="flex items-center gap-2">
                <MaterialIcon name="check_circle" className="text-lime-green text-sm" />
                Science &amp; engineering practices
              </li>
              <li className="flex items-center gap-2">
                <MaterialIcon name="check_circle" className="text-lime-green text-sm" />
                State science assessments
              </li>
            </ul>
            <span className="mt-6 inline-flex items-center gap-1 text-primary font-bold text-sm group-hover:underline">
              View science tutoring
            </span>
          </div>

          {/* Physics */}
          <div 
            onClick={() => router.push('/us-curriculum/online-physics-tutor')}
            className="bg-white border border-surface-variant p-8 rounded-3xl shadow-ambient hover:border-royal-purple transition-all group cursor-pointer"
          >
            <div className="w-14 h-14 bg-royal-purple/10 text-royal-purple rounded-2xl flex items-center justify-center mb-6 group-hover:bg-royal-purple group-hover:text-white transition-all">
              <MaterialIcon name="rocket_launch" className="text-3xl" />
            </div>
            <h3 className="font-headline-md mb-4 font-bold text-charcoal">Online Physics Tutors</h3>
            <ul className="space-y-3 font-body-md text-on-surface-variant">
              <li className="flex items-center gap-2">
                <MaterialIcon name="check_circle" className="text-lime-green text-sm" />
                Mechanics, electricity &amp; waves
              </li>
              <li className="flex items-center gap-2">
                <MaterialIcon name="check_circle" className="text-lime-green text-sm" />
                Modern physics
              </li>
              <li className="flex items-center gap-2">
                <MaterialIcon name="check_circle" className="text-lime-green text-sm" />
                AP Physics 1, 2 &amp; C
              </li>
            </ul>
            <span className="mt-6 inline-flex items-center gap-1 text-primary font-bold text-sm group-hover:underline">
              View physics tutoring
            </span>
          </div>

          {/* Chemistry */}
          <div 
            onClick={() => router.push('/us-curriculum/online-chemistry-tutor')}
            className="bg-white border border-surface-variant p-8 rounded-3xl shadow-ambient hover:border-royal-purple transition-all group cursor-pointer"
          >
            <div className="w-14 h-14 bg-royal-purple/10 text-royal-purple rounded-2xl flex items-center justify-center mb-6 group-hover:bg-royal-purple group-hover:text-white transition-all">
              <MaterialIcon name="experiment" className="text-3xl" />
            </div>
            <h3 className="font-headline-md mb-4 font-bold text-charcoal">Online Chemistry Tutors</h3>
            <ul className="space-y-3 font-body-md text-on-surface-variant">
              <li className="flex items-center gap-2">
                <MaterialIcon name="check_circle" className="text-lime-green text-sm" />
                Atomic structure &amp; chemical reactions
              </li>
              <li className="flex items-center gap-2">
                <MaterialIcon name="check_circle" className="text-lime-green text-sm" />
                Stoichiometry &amp; equilibrium
              </li>
              <li className="flex items-center gap-2">
                <MaterialIcon name="check_circle" className="text-lime-green text-sm" />
                Organic chemistry &amp; AP Chemistry
              </li>
            </ul>
            <span className="mt-6 inline-flex items-center gap-1 text-primary font-bold text-sm group-hover:underline">
              View chemistry tutoring
            </span>
          </div>

          {/* Biology */}
          <div 
            onClick={() => router.push('/us-curriculum/online-biology-tutor')}
            className="bg-white border border-surface-variant p-8 rounded-3xl shadow-ambient hover:border-royal-purple transition-all group cursor-pointer"
          >
            <div className="w-14 h-14 bg-royal-purple/10 text-royal-purple rounded-2xl flex items-center justify-center mb-6 group-hover:bg-royal-purple group-hover:text-white transition-all">
              <MaterialIcon name="biotech" className="text-3xl" />
            </div>
            <h3 className="font-headline-md mb-4 font-bold text-charcoal">Online Biology Tutors</h3>
            <ul className="space-y-3 font-body-md text-on-surface-variant">
              <li className="flex items-center gap-2">
                <MaterialIcon name="check_circle" className="text-lime-green text-sm" />
                Cell biology &amp; genetics
              </li>
              <li className="flex items-center gap-2">
                <MaterialIcon name="check_circle" className="text-lime-green text-sm" />
                Ecology &amp; human physiology
              </li>
              <li className="flex items-center gap-2">
                <MaterialIcon name="check_circle" className="text-lime-green text-sm" />
                AP Biology
              </li>
            </ul>
            <span className="mt-6 inline-flex items-center gap-1 text-primary font-bold text-sm group-hover:underline">
              View biology tutoring
            </span>
          </div>
        </div>
      </section>

{/* Online Tutoring Routes */}
<section className="px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto py-24">
  <h2 className="font-headline-lg text-headline-lg text-charcoal mb-4 font-bold">Online Tutoring</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    <div onClick={() => router.push('/us-curriculum')} className="bg-white border border-surface-variant p-8 rounded-3xl shadow-ambient hover:border-royal-purple transition-all group cursor-pointer">
      <div className="w-14 h-14 bg-royal-purple/10 text-royal-purple rounded-2xl flex items-center justify-center mb-6 group-hover:bg-royal-purple group-hover:text-white transition-all">
        <MaterialIcon name="school" className="text-3xl" />
      </div>
      <h3 className="font-headline-md mb-4 font-bold text-charcoal">US Curriculum</h3>
    </div>
    <div onClick={() => router.push('/online-math-tutor')} className="bg-white border border-surface-variant p-8 rounded-3xl shadow-ambient hover:border-royal-purple transition-all group cursor-pointer">
      <div className="w-14 h-14 bg-royal-purple/10 text-royal-purple rounded-2xl flex items-center justify-center mb-6 group-hover:bg-royal-purple group-hover:text-white transition-all">
        <MaterialIcon name="functions" className="text-3xl" />
      </div>
      <h3 className="font-headline-md mb-4 font-bold text-charcoal">Online Math Tutor</h3>
    </div>
    <div onClick={() => router.push('/us-curriculum/online-english-tutor')} className="bg-white border border-surface-variant p-8 rounded-3xl shadow-ambient hover:border-royal-purple transition-all group cursor-pointer">
      <div className="w-14 h-14 bg-royal-purple/10 text-royal-purple rounded-2xl flex items-center justify-center mb-6 group-hover:bg-royal-purple group-hover:text-white transition-all">
        <MaterialIcon name="menu_book" className="text-3xl" />
      </div>
      <h3 className="font-headline-md mb-4 font-bold text-charcoal">Online English Tutor</h3>
    </div>
    <div onClick={() => router.push('/us-curriculum/online-science-tutor')} className="bg-white border border-surface-variant p-8 rounded-3xl shadow-ambient hover:border-royal-purple transition-all group cursor-pointer">
      <div className="w-14 h-14 bg-royal-purple/10 text-royal-purple rounded-2xl flex items-center justify-center mb-6 group-hover:bg-royal-purple group-hover:text-white transition-all">
        <MaterialIcon name="science" className="text-3xl" />
      </div>
      <h3 className="font-headline-md mb-4 font-bold text-charcoal">Online Science Tutor</h3>
    </div>
    <div onClick={() => router.push('/us-curriculum/online-physics-tutor')} className="bg-white border border-surface-variant p-8 rounded-3xl shadow-ambient hover:border-royal-purple transition-all group cursor-pointer">
      <div className="w-14 h-14 bg-royal-purple/10 text-royal-purple rounded-2xl flex items-center justify-center mb-6 group-hover:bg-royal-purple group-hover:text-white transition-all">
        <MaterialIcon name="rocket_launch" className="text-3xl" />
      </div>
      <h3 className="font-headline-md mb-4 font-bold text-charcoal">Online Physics Tutor</h3>
    </div>
    <div onClick={() => router.push('/us-curriculum/online-chemistry-tutor')} className="bg-white border border-surface-variant p-8 rounded-3xl shadow-ambient hover:border-royal-purple transition-all group cursor-pointer">
      <div className="w-14 h-14 bg-royal-purple/10 text-royal-purple rounded-2xl flex items-center justify-center mb-6 group-hover:bg-royal-purple group-hover:text-white transition-all">
        <MaterialIcon name="experiment" className="text-3xl" />
      </div>
      <h3 className="font-headline-md mb-4 font-bold text-charcoal">Online Chemistry Tutor</h3>
    </div>
    <div onClick={() => router.push('/us-curriculum/online-biology-tutor')} className="bg-white border border-surface-variant p-8 rounded-3xl shadow-ambient hover:border-royal-purple transition-all group cursor-pointer">
      <div className="w-14 h-14 bg-royal-purple/10 text-royal-purple rounded-2xl flex items-center justify-center mb-6 group-hover:bg-royal-purple group-hover:text-white transition-all">
        <MaterialIcon name="biotech" className="text-3xl" />
      </div>
      <h3 className="font-headline-md mb-4 font-bold text-charcoal">Online Biology Tutor</h3>
    </div>
  </div>
</section>

      {/* Grade Band Progression */}
      <section className="py-24 bg-soft-gray border-y border-surface-container">
        <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="text-center mb-16">
            <h2 className="font-headline-lg text-headline-lg text-charcoal mb-4 font-bold">How the US Curriculum Progresses</h2>
            <p className="font-body-md text-on-surface-variant max-w-2xl mx-auto">
              Course names and sequencing vary by state and district, but the underlying progression is broadly
              consistent. These are the stages where students most often lose ground.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-8 rounded-3xl shadow-ambient">
              <h3 className="font-headline-md mb-3 font-bold text-charcoal">Elementary, Grades K&ndash;5</h3>
              <p className="font-body-md text-on-surface-variant">
                Number sense, arithmetic operations, fractions, decimals, geometry and measurement, alongside
                reading fluency and basic life, physical and earth sciences. Fractions are the single most
                common source of later difficulty.
              </p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-ambient">
              <h3 className="font-headline-md mb-3 font-bold text-charcoal">Middle School, Grades 6&ndash;8</h3>
              <p className="font-body-md text-on-surface-variant">
                Ratios, proportional relationships, expressions, equations, functions, geometry and statistics,
                with integrated or discipline-specific science. This is where readiness for Algebra 1 is decided.
              </p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-ambient">
              <h3 className="font-headline-md mb-3 font-bold text-charcoal">High School, Grades 9&ndash;12</h3>
              <p className="font-body-md text-on-surface-variant">
                Algebra 1, Geometry, Algebra 2, Precalculus, Calculus, Statistics and advanced modeling, with
                Biology, Chemistry and Physics or an integrated sequence. Course grades now follow students to
                college applications.
              </p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-ambient">
              <h3 className="font-headline-md mb-3 font-bold text-charcoal">College Preparation</h3>
              <p className="font-body-md text-on-surface-variant">
                Honors and AP coursework, SAT and ACT preparation, and state graduation requirements. The
                specifics differ by state, which is why our state pages set out what applies where.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Test Preparation */}
      <section className="px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block curriculum-chip px-4 py-1.5 rounded-full font-label-sm font-bold mb-6 uppercase tracking-wider">
              Test Preparation
            </span>
            <h2 className="font-headline-lg text-headline-lg text-charcoal mb-6 font-bold">Exams We Prepare Students For</h2>
            <p className="font-body-md text-on-surface-variant mb-6">
              Exam technique is a separate skill from knowing the material. Our tutors cover timed practice,
              scoring strategy and the specific question styles each test uses, alongside the underlying content.
            </p>
            <p className="font-body-md text-on-surface-variant mb-8">
              One thing worth knowing about the SAT: it is now digital and adaptive, so the second module adjusts
              in difficulty based on how a student performs in the first. That changes preparation. Consistency
              early in each section matters more than it did on the old paper test, and pacing has to be
              practised rather than assumed.
            </p>
            <button 
              onClick={() => onNavigate('subject', 'Math')}
              className="bg-royal-purple text-white px-8 py-4 rounded-xl font-headline-md font-bold hover:bg-primary transition-all shadow-lg active:scale-95 inline-flex items-center gap-2 cursor-pointer"
            >
              Explore Math Tutoring
            </button>
          </div>
          <div className="bg-surface-container-low p-10 rounded-[32px] border border-surface-container">
            <h3 className="font-headline-md mb-6 font-bold text-charcoal">Tests We Support</h3>
            <ul className="space-y-4 font-body-md text-on-surface-variant">
              <li className="flex gap-3"><MaterialIcon name="check_circle" className="text-lime-green text-sm" /> SAT and PSAT</li>
              <li className="flex gap-3"><MaterialIcon name="check_circle" className="text-lime-green text-sm" /> ACT</li>
              <li className="flex gap-3"><MaterialIcon name="check_circle" className="text-lime-green text-sm" /> AP exams, including Calculus, Biology, Chemistry, Physics and English</li>
              <li className="flex gap-3"><MaterialIcon name="check_circle" className="text-lime-green text-sm" /> State assessments and end-of-course tests</li>
              <li className="flex gap-3"><MaterialIcon name="check_circle" className="text-lime-green text-sm" /> School placement tests</li>
            </ul>
            <p className="font-label-md text-on-surface-variant mt-6 italic">
              Requirements and formats are set by state education agencies and testing organisations and change
              periodically. Always confirm current details with your school counselor.
            </p>
          </div>
        </div>
      </section>

      {/* How we support the US curriculum */}
      <section className="py-24 bg-primary-container text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-white blur-3xl transform rotate-12"></div>
        </div>
        <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop py-margin-desktop relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-headline-lg text-headline-lg mb-8 font-bold text-white">How Math Make Smart Supports the US Curriculum</h2>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <MaterialIcon name="location_on" className="text-xl" />
                  </div>
                  <div>
                    <h4 className="font-headline-md text-body-lg mb-1 font-bold">Matched to Your State</h4>
                    <p className="text-on-primary-container opacity-80">
                      Tutors are assessed on the standards your child is actually taught, whether that is a
                      Common Core-aligned framework, the TEKS in Texas, B.E.S.T. in Florida or the SOL in
                      Virginia, and on the state test they will sit.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <MaterialIcon name="edit_note" className="text-xl" />
                  </div>
                  <div>
                    <h4 className="font-headline-md text-body-lg mb-1 font-bold">Live, Recorded, Reviewable</h4>
                    <p className="text-on-primary-container opacity-80">
                      Sessions run live with an interactive whiteboard and screen sharing, and every lesson is
                      recorded to your account so your child can revisit an explanation during revision.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <MaterialIcon name="query_stats" className="text-xl" />
                  </div>
                  <div>
                    <h4 className="font-headline-md text-body-lg mb-1 font-bold">Personalized Learning Plans</h4>
                    <p className="text-on-primary-container opacity-80">
                      A plan built around your child&apos;s school curriculum and goals, with written summaries
                      after every session, and flexible scheduling across all US time zones.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-3xl aspect-square flex flex-col justify-center items-center text-center">
                <span className="font-display-lg text-lime-green mb-2 font-bold">1:1</span>
                <span className="font-label-md font-medium">Every Session</span>
              </div>
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-3xl aspect-square flex flex-col justify-center items-center text-center mt-12">
                <span className="font-display-lg text-lime-green mb-2 font-bold">K&ndash;12</span>
                <span className="font-label-md font-medium">Plus AP Courses</span>
              </div>
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-3xl aspect-square flex flex-col justify-center items-center text-center -mt-12">
                <span className="font-display-lg text-lime-green mb-2 font-bold">50</span>
                <span className="font-label-md font-medium">States Served</span>
              </div>
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-3xl aspect-square flex flex-col justify-center items-center text-center">
                <span className="font-display-lg text-lime-green mb-2 font-bold">Free</span>
                <span className="font-label-md font-medium">First Session</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Educational FAQ */}
      {/* <section className="px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto py-24">
        <div className="text-center mb-16">
          <h2 className="font-headline-lg text-headline-lg text-charcoal mb-4 font-bold">FAQs About the US Curriculum</h2>
          <p className="font-body-md text-on-surface-variant max-w-2xl mx-auto">
            The questions American parents ask us most often about standards, grades, testing and getting started.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <div className="bg-white border border-surface-variant p-8 rounded-3xl shadow-ambient">
            <h3 className="font-headline-md mb-3 font-bold text-charcoal">Do you follow the Common Core standards?</h3>
            <p className="font-body-md text-on-surface-variant">
              Where your state uses them, yes. Our tutors are well versed in the Common Core State Standards for
              mathematics and English language arts, and in NGSS for science. But we do not assume Common Core
              everywhere, because several states never adopted it or have replaced it since. In Texas we teach
              the TEKS, in Florida the B.E.S.T. Standards, in Virginia the Standards of Learning. We align to
              your child&apos;s actual school curriculum rather than to a national default.
            </p>
          </div>
          <div className="bg-white border border-surface-variant p-8 rounded-3xl shadow-ambient">
            <h3 className="font-headline-md mb-3 font-bold text-charcoal">Which grades do you support?</h3>
            <p className="font-body-md text-on-surface-variant">
              Kindergarten through Grade 12, including Honors, AP and college-prep courses. The stages where
              families most often see the largest gains are middle school mathematics, where readiness for
              Algebra 1 is established, and the first year of a high school science course, where the jump in
              abstraction catches many students out.
            </p>
          </div>
          <div className="bg-white border border-surface-variant p-8 rounded-3xl shadow-ambient">
            <h3 className="font-headline-md mb-3 font-bold text-charcoal">Can you help with SAT and ACT preparation?</h3>
            <p className="font-body-md text-on-surface-variant">
              Yes. Our tutors specialize in SAT Math, SAT Reading and Writing, and ACT preparation. The two tests
              reward different things: the ACT runs four sections including science and rewards pace, while the
              digital SAT is adaptive, so early accuracy within a section shapes the difficulty of what follows.
              We prepare students for the specific test they are sitting rather than treating them as
              interchangeable.
            </p>
          </div>
          <div className="bg-white border border-surface-variant p-8 rounded-3xl shadow-ambient">
            <h3 className="font-headline-md mb-3 font-bold text-charcoal">How are the lessons conducted?</h3>
            <p className="font-body-md text-on-surface-variant">
              All sessions are live and one-to-one by video call, using an interactive whiteboard built for
              mathematical notation and screen sharing for working through problems together. Lessons are
              recorded to your account so your child can review them at any time, and you can see exactly what
              was covered.
            </p>
          </div>
          <div className="bg-white border border-surface-variant p-8 rounded-3xl shadow-ambient">
            <h3 className="font-headline-md mb-3 font-bold text-charcoal">Do you support specific state curricula?</h3>
            <p className="font-body-md text-on-surface-variant">
              Yes, and this is central to how we match tutors. We support Texas TEKS, California standards,
              Florida B.E.S.T., New York&apos;s Next Generation Learning Standards, Virginia SOL, Illinois,
              Georgia, Massachusetts and others. Course names differ too, not just standards: a tested high
              school mathematics course might be Algebra I in one state, Integrated Math 1 in another, and
              Algebra: Concepts and Connections in Georgia. We match to what your school actually runs.
            </p>
          </div>
          <div className="bg-white border border-surface-variant p-8 rounded-3xl shadow-ambient">
            <h3 className="font-headline-md mb-3 font-bold text-charcoal">Is there a free trial lesson?</h3>
            <p className="font-body-md text-on-surface-variant">
              Yes. Every new student gets a completely free trial lesson with no credit card required. It exists
              so we can assess where your child actually stands against their grade-level standards, and so you
              can watch a tutor work with them, before anyone commits to anything.
            </p>
          </div>
          <div className="bg-white border border-surface-variant p-8 rounded-3xl shadow-ambient">
            <h3 className="font-headline-md mb-3 font-bold text-charcoal">How quickly can we start?</h3>
            <p className="font-body-md text-on-surface-variant">
              You can book a free trial lesson within minutes, and we usually match students with a suitable
              tutor quickly. If you are working towards a specific test date, it is worth starting earlier than
              feels necessary: exam technique improves quickly, but rebuilding missing subject knowledge takes
              longer and is the thing that most often limits a result.
            </p>
          </div>
          <div className="bg-white border border-surface-variant p-8 rounded-3xl shadow-ambient">
            <h3 className="font-headline-md mb-3 font-bold text-charcoal">What if my child doesn&apos;t like the tutor?</h3>
            <p className="font-body-md text-on-surface-variant">
              We offer free tutor replacement until you find the right match. Personality fit matters as much as
              subject expertise, and it is not always right the first time. Rematching is routine, costs nothing,
              and does not use up a session.
            </p>
          </div>
        </div>
      </section> */}
{/* Educational FAQ */}
<section className="py-24 bg-white border-t border-surface-container">
  <div className="learning-lane px-margin-mobile max-w-max-width mx-auto md:px-margin-desktop">
    <h3 className="text-headline-lg font-display text-charcoal mb-12 text-center font-bold">Frequently Asked Questions -  FAQs</h3>
    <div className="max-w-3xl mx-auto space-y-4">
      {faqs.map((faq, idx) => (
        <div 
          key={idx} 
          className={`accordion-item bg-soft-gray rounded-2xl border transition-all cursor-pointer ${
            activeFaq === idx ? 'border-royal-purple shadow-ambient' : 'border-outline-variant/30'
          }`}
          onClick={() => toggleFaq(idx)}
        >
          <div className="flex justify-between items-center p-6">
            <h4 className="text-body-lg font-bold text-charcoal">{faq.q}</h4>
            <LigatureIcon name="expand_more" className={`transition-transform duration-200 ${activeFaq === idx ? 'rotate-180 text-primary' : 'text-charcoal'}`} />
                       </div>
          {activeFaq === idx && (
            <div className="px-6 pb-6 text-on-surface-variant text-body-md animate-fade-in">
              {faq.a}
            </div>
          )}
        </div>
      ))}
    </div>
  </div>
</section>
      {/* CTA Section */}
      <section className="px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto pb-24">
        <div className="bg-surface-container rounded-[40px] p-12 md:p-20 text-center relative overflow-hidden shadow-sm">
          <div className="absolute top-0 right-0 w-64 h-64 bg-royal-purple/5 -translate-y-1/2 translate-x-1/2 rounded-full"></div>
          <div className="relative z-10">
            <h2 className="font-display-lg text-display-lg-mobile md:text-headline-lg text-charcoal mb-6 font-bold">
              Ready to give your child the best academic support?
            </h2>
            <p className="font-body-lg text-on-surface-variant mb-10 max-w-2xl mx-auto">
              Whether your child needs help catching up, maintaining top grades, or preparing for college
              entrance exams, our expert US curriculum tutors are here to help. Book a free trial lesson today,
              no credit card required.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button 
                onClick={() => onNavigate('trial')}
                className="bg-royal-purple text-white px-10 py-5 rounded-2xl font-headline-md font-bold hover:bg-primary transition-all shadow-lg active:scale-95 cursor-pointer"
              >
                Start Free Trial
              </button>
              <button
                onClick={() => onNavigate('subject', 'Math')}
                className="text-royal-purple font-bold flex items-center gap-2 group cursor-pointer"
              >
                <span className="w-10 h-10 rounded-full border border-royal-purple flex items-center justify-center group-hover:bg-royal-purple group-hover:text-white transition-all">
                  <MaterialIcon name="arrow_forward" className="text-sm" />
                </span>
                Browse Subject Tutors
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}