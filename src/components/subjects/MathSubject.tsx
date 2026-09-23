'use client';

import React, { useState } from 'react';
import LigatureIcon from '../LigatureIcon';
import { ActivePage } from '@/lib/types';
import { CheckCircle2, Clock, DollarSign, Star, Zap, Check, Timer, GraduationCap } from 'lucide-react';

interface SubjectComponentProps {
  onNavigate: (page: ActivePage, subjectTitle?: string) => void;
}

const GRADE_TOPICS: { grade: string; band: string; topics: string[] }[] = [
  {
    grade: 'Grade 1',
    band: 'Elementary',
    topics: ['Counting and skip counting', 'Number bonds and fact families', 'Addition and subtraction', 'Basic shapes', 'Time and money', 'Word problems'],
  },
  {
    grade: 'Grade 2',
    band: 'Elementary',
    topics: ['Number sense and patterns', 'Addition and subtraction strategies', 'Comparing and ordering numbers', '2D and 3D shapes', 'Measurement', 'Word problems'],
  },
  {
    grade: 'Grade 3',
    band: 'Elementary',
    topics: ['Place value', 'Multiplication and division facts', 'Introduction to fractions', 'Area and perimeter', 'Bar graphs and line plots', 'Word problems'],
  },
  {
    grade: 'Grade 4',
    band: 'Elementary',
    topics: ['Fractions and decimals', 'Multi-digit multiplication', 'Factors and multiples', 'Angles and lines', 'Data and graphing', 'Multi-step word problems'],
  },
  {
    grade: 'Grade 5',
    band: 'Elementary',
    topics: ['Operations with fractions', 'Decimal operations', 'Volume', 'Coordinate plane', 'Order of operations', 'Measurement conversions'],
  },
  {
    grade: 'Grade 6',
    band: 'Middle School',
    topics: ['Ratios and unit rates', 'Dividing fractions', 'Negative numbers', 'Expressions and equations', 'Area, surface area and volume', 'Statistical thinking'],
  },
  {
    grade: 'Grade 7',
    band: 'Middle School',
    topics: ['Proportional relationships', 'Operations with rational numbers', 'Linear expressions', 'Scale drawings', 'Probability', 'Circles, area and circumference'],
  },
  {
    grade: 'Grade 8',
    band: 'Middle School',
    topics: ['Linear equations and slope', 'Functions', 'Systems of equations', 'Exponents and scientific notation', 'Pythagorean theorem', 'Transformations and congruence'],
  },
  {
    grade: 'Algebra 1',
    band: 'High School',
    topics: ['Linear equations and inequalities', 'Systems of equations', 'Quadratic functions and factoring', 'Exponential functions', 'Polynomials', 'Data and regression'],
  },
  {
    grade: 'Geometry',
    band: 'High School',
    topics: ['Proofs and logical reasoning', 'Congruence and similarity', 'Right triangle trigonometry', 'Circles', 'Coordinate geometry', 'Volume and solids'],
  },
  {
    grade: 'Algebra 2',
    band: 'High School',
    topics: ['Polynomial and rational functions', 'Logarithms and exponentials', 'Complex numbers', 'Sequences and series', 'Trigonometric functions', 'Probability and statistics'],
  },
  {
    grade: 'Precalculus & Calculus',
    band: 'High School',
    topics: ['Trigonometric identities', 'Vectors and matrices', 'Limits and continuity', 'Derivatives and applications', 'Integrals', 'AP Calculus AB and BC'],
  },
];

const FAQS = [
  {
    q: 'Which math courses do you cover?',
    a: "Grade 1 through Grade 12, following the sequence US schools actually use. That means elementary number sense and fractions, middle school ratios and proportional reasoning, then Algebra 1, Geometry, Algebra 2, Precalculus and Calculus at high school level. We also cover Integrated Math 1, 2 and 3 for districts using that pathway, along with AP Calculus AB and BC, AP Statistics, and SAT and ACT math.",
  },
  {
    q: 'Do you follow Common Core math standards?',
    a: "Where your state uses them, yes. Most states teach to Common Core-aligned math standards, but not all: Texas follows the TEKS, Florida the B.E.S.T. Standards, and Virginia the Standards of Learning. Because we match tutors by state, your child works with someone who knows the sequence their classroom actually follows rather than a national default.",
  },
  {
    q: 'My child is behind. Where should we start?',
    a: "Almost never at the topic they are currently failing. Math is cumulative, so a student struggling with Algebra 1 usually has an unresolved gap in fractions, negative numbers or proportional reasoning from middle school. The free trial lesson exists partly to find that gap. Fixing the foundation is slower at first and considerably faster overall than re-teaching the current chapter.",
  },
  {
    q: 'Should my child take Algebra 1 in Grade 8?',
    a: "Only if the Grade 6 to 8 material is genuinely secure, particularly ratios, proportional reasoning and operations with rational numbers. Accelerating a student who has not consolidated those produces a shaky Algebra 1 year and weakens everything built on top of it. Taking Algebra 1 in Grade 9 still leaves a full pathway through Precalculus and Calculus before graduation.",
  },
  {
    q: 'Can you help with SAT and ACT math?',
    a: "Yes, and the two need different preparation. The digital SAT is adaptive, so accuracy early in a module shapes the difficulty of what follows, and it allows a calculator throughout. The ACT math section is longer, faster paced and reaches slightly further into trigonometry. We prepare students for the specific test they are sitting rather than treating them as interchangeable.",
  },
  {
    q: 'How are lessons conducted?',
    a: "Live, one-to-one, by video call, using an interactive whiteboard built for mathematical notation so working can be shown step by step rather than described. Lessons are recorded to your account, which matters more in math than most subjects: a student revisiting how a method was set up will usually learn more than from re-reading a finished answer.",
  },
  {
    q: 'Is there a free trial lesson?',
    a: "Yes. The first session is free and no credit card is required. We use it to establish where your child actually stands against their grade-level standards and to check the tutor is a good fit. If you decide not to continue, that is the end of it.",
  },
  {
    q: 'What if my child does not get on with the tutor?',
    a: "We rematch at no charge. In math especially, the fit matters: a student who has lost confidence needs a different approach from one who is bored and racing ahead. Rematching is routine, costs nothing, and does not use up a session.",
  },
];

export default function MathSubjectUS({ onNavigate }: SubjectComponentProps) {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const toggleFaq = (idx: number) => setActiveFaq(activeFaq === idx ? null : idx);

  return (
    <div className="bg-surface font-body-md text-on-surface selection:bg-primary-fixed selection:text-on-primary-fixed">
      {/* Hero Section */}
      <section className="hero-gradient pt-16 pb-24 overflow-hidden">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary-container/10 text-primary rounded-full border border-primary/20">
              <Check size={18} />
              <span className="font-label-sm text-label-sm font-semibold">Matched to Your State&apos;s Standards</span>
            </div>
            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface leading-tight font-bold">
              Online Math Tutor in USA
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl font-sans">
              One-to-one math tutoring for Grades 1&ndash;12, from counting and fractions through Algebra,
              Geometry, Precalculus and AP Calculus. Every tutor is matched to the math sequence your child&apos;s
              school actually runs, and to the state test they will sit.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => onNavigate('trial')}
                className="bg-royal-purple text-white px-8 py-4 rounded-xl font-headline-md text-headline-md shadow-lg flex items-center justify-center gap-2 hover:opacity-90 transition-all active:scale-95 font-bold cursor-pointer"
              >
                Book Free Trial Lesson
                <LigatureIcon name="arrow_forward" />
              </button>
              <button
                onClick={() => onNavigate('pricing')}
                className="border-2 border-royal-purple text-royal-purple px-8 py-4 rounded-xl font-headline-md text-headline-md flex items-center justify-center gap-2 hover:bg-royal-purple/5 transition-all font-bold cursor-pointer"
              >
                View Pricing
              </button>
            </div>
            <div className="flex items-center gap-6 pt-4">
              <div className="flex -space-x-3">
                <div
                  className="w-10 h-10 rounded-full border-2 border-white bg-surface-container-high bg-cover bg-center"
                  style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD72LQy8-SLD-w1P7LhkrZf5iWWMLEAIMRWsVgijIYKzVZgyinT8ax1kjOQppNcZk6AP_9IsVTJpJr8lYHobMR1jFrYEvMx-oGqR_qMEot5yCoLn7NRGRVVoNfCJUpl3z3s8bLNcq4a-7NqBdlfED1l4YDFO949FR3KtWJiPTs26kVVhKr4_roC0BYjTeHoNK1E3GapfaT2-dHPQkAJ0qKaYx4szxNUJtCmPQ6dNfR7ihrEr_QBEoW-LQ")' }}
                />
                <div
                  className="w-10 h-10 rounded-full border-2 border-white bg-surface-container-high bg-cover bg-center"
                  style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDsUGio5MIc9qJWBic4lfwiJ0TBGoIZWTvaI7MTfb7RuCxKGo7ELie9Y5VLGyjypQj6XnCU0LsE0oHoMknvgUo-ul01SVY0pK13Gc2kvCpOb1riPbkZ1xHqXmA9xuzjRkoGccElIl-ylNvMGVkwZJQSg2Lo7Z24pGCjIOJyza5AoVzVQOYqDE2oxXfHewtzer-lyW-o3o92pCOAf40ku0tZjbbIfLRgm4sXsqrxln-AIiHsHLU-BmFBaQ")' }}
                />
                <div
                  className="w-10 h-10 rounded-full border-2 border-white bg-surface-container-high bg-cover bg-center"
                  style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD3hGM0CB6WndWv0IHxLjB79y1g5ivOyYHbAqUEI5S-k2Lz02tQ3M_t4_fYwhSh1b_nvCmaAjlKtO0ByGqmEZktEbT4gAyi3b7j4RdJQkFU4kLqcxwZlLgwHiLqG3C2l27leo_O3impCsQ0VLPegRelyr0RQhi6HS1Z7233qFbdAtnVaAV3vi6VtBa0K2ys0ZByB8euvFqc_eTYU2B0b_EvNcyOUPdYHS7w59GxUADLuCfatMpCflIKug")' }}
                />
              </div>
              <p className="font-label-md text-label-md text-on-surface-variant font-medium">
                Serving families in <span className="font-bold text-on-surface">all 50 states</span>
              </p>
            </div>
          </div>
          <div className="flex-1 relative w-full">
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
              <img
                alt="A student working through math problems with an online tutor"
                className="w-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCxUe8AfNh5j6GE4SCY5PiIF8QFBu7_bPfxEGGehD2D4qSWXGySvJRi8layktwqTJ3jF-0nC8VVRUxRTSb7OownS0l1Kq5ub2qTuLfct_oh3bw6Jqe9x11Kuz4feu3QDsF8dRVXOPFO5KePXBai4ho8ksjPfKSZASvd1RfubQ3awIJmgKXLD4KnXdLUn8-ZgCTJ7GqyjCd4Wwp41873Ht2EQPOm9QHEhd0d2x5fcb57j1khPzQy-ilzvzTCASlyyrKbVa01-BFdgX_gJnQ"
              />
            </div>
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-lime-green rounded-full opacity-20 blur-2xl"></div>
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-royal-purple rounded-full opacity-10 blur-3xl"></div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-24 bg-surface">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="text-center mb-16 space-y-4">
            <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold">What We Offer</h2>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto">
              Searching for a math tutor near you? Online tutoring removes the geography problem entirely. Your
              child works with a specialist in their exact course, not whoever happens to be available locally.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-soft-gray p-10 rounded-[32px] card-elevation-1 floating-interaction space-y-6">
              <div className="w-14 h-14 bg-royal-purple/10 text-royal-purple rounded-2xl flex items-center justify-center">
                <Clock size={32} />
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface font-bold">Flexible Timings</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Sessions scheduled around school, sports and activities, with tutors available across every US
                time zone from Eastern to Pacific.
              </p>
              <ul className="space-y-3 pt-2">
                <li className="flex items-center gap-3 font-label-md text-label-md text-on-surface font-medium">
                  <CheckCircle2 className="text-lime-green shrink-0" size={20} fill="currentColor" stroke="white" />
                  Evening &amp; weekend slots
                </li>
                <li className="flex items-center gap-3 font-label-md text-label-md text-on-surface font-medium">
                  <CheckCircle2 className="text-lime-green shrink-0" size={20} fill="currentColor" stroke="white" />
                  Reschedule up to two hours ahead
                </li>
              </ul>
            </div>
            <div className="bg-soft-gray p-10 rounded-[32px] card-elevation-1 floating-interaction space-y-6">
              <div className="w-14 h-14 bg-royal-purple/10 text-royal-purple rounded-2xl flex items-center justify-center">
                <DollarSign size={32} />
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface font-bold">Affordable Rates</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Clear per-hour pricing in US dollars with discounted lesson bundles. No registration fee and no
                minimum contract.
              </p>
              <ul className="space-y-3 pt-2">
                <li className="flex items-center gap-3 font-label-md text-label-md text-on-surface font-medium">
                  <CheckCircle2 className="text-lime-green shrink-0" size={20} fill="currentColor" stroke="white" />
                  Free trial session
                </li>
                <li className="flex items-center gap-3 font-label-md text-label-md text-on-surface font-medium">
                  <CheckCircle2 className="text-lime-green shrink-0" size={20} fill="currentColor" stroke="white" />
                  Cancel anytime
                </li>
              </ul>
            </div>
            <div className="bg-soft-gray p-10 rounded-[32px] card-elevation-1 floating-interaction space-y-6">
              <div className="w-14 h-14 bg-royal-purple/10 text-royal-purple rounded-2xl flex items-center justify-center">
                <Star size={32} />
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface font-bold">Superior Quality</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Tutors hold a degree in mathematics or a closely related field and are assessed on the specific
                course and standards they teach.
              </p>
              <ul className="space-y-3 pt-2">
                <li className="flex items-center gap-3 font-label-md text-label-md text-on-surface font-medium">
                  <CheckCircle2 className="text-lime-green shrink-0" size={20} fill="currentColor" stroke="white" />
                  State standards specialists
                </li>
                <li className="flex items-center gap-3 font-label-md text-label-md text-on-surface font-medium">
                  <CheckCircle2 className="text-lime-green shrink-0" size={20} fill="currentColor" stroke="white" />
                  Personalized study plans
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Grade by Grade Coverage */}
      <section className="py-24 bg-surface-container-low">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            <div className="lg:w-1/3 lg:sticky lg:top-32 space-y-6">
              <span className="text-primary font-label-sm text-label-sm uppercase tracking-widest font-semibold">Curriculum focus</span>
              <h2 className="font-headline-lg text-display-lg-mobile text-on-surface font-bold">Math Coverage, Grade by Grade</h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                From counting in Grade 1 to derivatives in AP Calculus. High school math in the US is organised
                by course rather than by grade, so a student takes Algebra 1 whenever their school schedules it,
                whether that is Grade 8 or Grade 9.
              </p>
              <div className="pt-6">
                <div className="p-6 bg-white rounded-2xl card-elevation-1 space-y-4">
                  <div className="flex items-center gap-4">
                    <GraduationCap size={24} className="text-royal-purple" />
                    <span className="font-headline-md text-headline-md font-bold text-charcoal">Grades 1 &ndash; 12</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-royal-purple/5 text-royal-purple rounded-full font-label-sm text-label-sm font-semibold">Elementary</span>
                    <span className="px-3 py-1 bg-royal-purple/5 text-royal-purple rounded-full font-label-sm text-label-sm font-semibold">Middle School</span>
                    <span className="px-3 py-1 bg-royal-purple/5 text-royal-purple rounded-full font-label-sm text-label-sm font-semibold">High School</span>
                    <span className="px-3 py-1 bg-royal-purple/5 text-royal-purple rounded-full font-label-sm text-label-sm font-semibold">AP</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
              {GRADE_TOPICS.map((item) => (
                <div key={item.grade} className="p-6 bg-white rounded-2xl card-elevation-1 space-y-3">
                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className="font-headline-md text-headline-md text-on-surface font-bold">{item.grade}</h3>
                    <span className="font-label-sm text-label-sm text-primary font-semibold shrink-0">{item.band}</span>
                  </div>
                  <ul className="space-y-2">
                    {item.topics.map((topic) => (
                      <li key={topic} className="flex items-start gap-2 font-body-md text-body-md text-on-surface-variant">
                        <CheckCircle2 className="text-lime-green shrink-0 mt-1" size={16} fill="currentColor" stroke="white" />
                        {topic}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Where students lose ground */}
      <section className="py-24 bg-white">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="text-center mb-16 space-y-4">
            <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold">Where Students Actually Lose Ground</h2>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto">
              Math is cumulative, which means the topic a student is failing is rarely the topic that caused the
              problem. These are the three places gaps usually open.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-soft-gray p-10 rounded-[32px] card-elevation-1 space-y-4">
              <span className="font-label-sm text-label-sm text-primary uppercase tracking-widest font-semibold">Grades 3&ndash;5</span>
              <h3 className="font-headline-md text-headline-md text-on-surface font-bold">Fractions</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                The single most common source of later difficulty. A student who never fully understood
                equivalent fractions will struggle with rational expressions in Algebra 2 six years later, and
                the connection is rarely obvious to anyone involved.
              </p>
            </div>
            <div className="bg-soft-gray p-10 rounded-[32px] card-elevation-1 space-y-4">
              <span className="font-label-sm text-label-sm text-primary uppercase tracking-widest font-semibold">Grades 6&ndash;8</span>
              <h3 className="font-headline-md text-headline-md text-on-surface font-bold">Proportional Reasoning</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Ratios, rates and proportional relationships are what Algebra 1 is built on. Middle school is
                also where the Algebra 1 placement decision gets made, so an unnoticed gap here shapes the
                entire high school pathway.
              </p>
            </div>
            <div className="bg-soft-gray p-10 rounded-[32px] card-elevation-1 space-y-4">
              <span className="font-label-sm text-label-sm text-primary uppercase tracking-widest font-semibold">Algebra 1</span>
              <h3 className="font-headline-md text-headline-md text-on-surface font-bold">Abstraction</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                The jump from arithmetic to working with unknowns catches out capable students. Many arrive
                able to compute perfectly well but unused to reasoning about a quantity they cannot see, which
                reads as a sudden collapse in ability when it is nothing of the kind.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How we match you */}
      <section className="py-24 bg-soft-gray overflow-hidden">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 md:col-span-8 bg-royal-purple p-8 md:p-12 rounded-[40px] text-white flex flex-col justify-between min-h-[460px]">
              <div>
                <span className="font-label-sm text-label-sm uppercase tracking-[0.2em] opacity-80 font-semibold">How Matching Works</span>
                <h2 className="font-display-lg text-display-lg-mobile md:text-display-lg mt-4 leading-tight font-bold">We Connect You With the Right Math Tutor</h2>
              </div>
              <p className="font-body-lg text-body-lg max-w-xl opacity-90 my-6 font-sans">
                We assess where your child actually stands, then pair them on three things: the course they are
                taking, the standards their state uses, and how they learn. A strong mathematician is not
                automatically the right tutor for a student who has lost confidence, and we match for both.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="px-6 py-4 bg-white/10 backdrop-blur-md rounded-2xl">
                  <p className="font-headline-md text-headline-md font-bold">1:1</p>
                  <p className="font-label-sm text-label-sm opacity-70 font-medium">Every session</p>
                </div>
                <div className="px-6 py-4 bg-white/10 backdrop-blur-md rounded-2xl">
                  <p className="font-headline-md text-headline-md font-bold">Free</p>
                  <p className="font-label-sm text-label-sm opacity-70 font-medium">Rematch anytime</p>
                </div>
              </div>
            </div>
            <div className="col-span-12 md:col-span-4 bg-lime-green p-8 md:p-10 rounded-[40px] flex flex-col justify-center gap-6">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-secondary">
                <Zap size={40} />
              </div>
              <h3 className="font-headline-lg text-headline-lg text-secondary leading-tight font-bold">Concept First, Then Method</h3>
              <p className="font-body-md text-body-md text-on-secondary-fixed-variant">
                We teach why a method works before drilling it. Students who only memorise procedures stall the
                moment a problem is phrased unfamiliarly.
              </p>
            </div>
            <div className="col-span-12 md:col-span-4 bg-white p-8 md:p-10 rounded-[40px] card-elevation-1 space-y-6">
              <h3 className="font-headline-md text-headline-md text-on-surface font-bold">Digital Resources</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Worked examples, practice sets and recorded sessions, all saved to your account so a method can
                be revisited weeks later when it comes up again in class.
              </p>
              <div className="w-full h-32 bg-soft-gray rounded-2xl relative overflow-hidden">
                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #6158E9 1px, transparent 0)', backgroundSize: '20px 20px' }}></div>
              </div>
            </div>
            <div className="col-span-12 md:col-span-8 bg-surface-container-highest p-8 md:p-12 rounded-[40px] flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="space-y-6">
                <h3 className="font-headline-lg text-headline-lg text-on-surface font-bold">Progress Parents Can Follow</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  A written summary after every session setting out what was covered and what to practise, plus
                  a bi-weekly report showing which standards have been mastered and which still need attention.
                  You can also review any recorded lesson yourself.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-white border-t border-surface-container">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <h2 className="text-headline-lg font-display text-charcoal mb-4 text-center font-bold">Frequently Asked Questions</h2>
          <p className="font-body-md text-on-surface-variant max-w-2xl mx-auto mb-12 text-center">
            The questions American parents ask us most often about math tutoring, placement and test preparation.
          </p>
          <div className="max-w-3xl mx-auto space-y-4">
            {FAQS.map((faq, idx) => (
              <div
                key={idx}
                className={`accordion-item bg-soft-gray rounded-2xl border transition-all cursor-pointer ${
                  activeFaq === idx ? 'border-royal-purple shadow-ambient' : 'border-outline-variant/30'
                }`}
                onClick={() => toggleFaq(idx)}
              >
                <div className="flex justify-between items-center p-6">
                  <h3 className="text-body-lg font-bold text-charcoal">{faq.q}</h3>
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
      <section className="py-24 bg-surface-bright">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop text-center">
          <div className="bg-royal-purple rounded-[48px] p-10 md:p-16 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full -mr-32 -mt-32"></div>
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full -ml-48 -mb-48"></div>
            </div>
            <div className="relative z-10 space-y-8 max-w-2xl mx-auto">
              <h2 className="font-display-lg text-display-lg-mobile md:text-display-lg text-white font-bold">
                Let&rsquo;s Learn Together!
              </h2>
              <p className="font-body-lg text-body-lg text-white/80 font-sans">
                Book a free trial lesson, or ask us about lesson plans, pricing and scheduling for your
                child&apos;s grade and state.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <button
                  onClick={() => onNavigate('trial')}
                  className="bg-lime-green text-secondary px-10 py-5 rounded-2xl font-headline-md text-headline-md shadow-xl hover:scale-105 transition-transform font-bold cursor-pointer"
                >
                  Book Free Trial Now
                </button>
                <button
                  onClick={() => onNavigate('pricing')}
                  className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-10 py-5 rounded-2xl font-headline-md text-headline-md hover:bg-white/20 transition-all font-bold cursor-pointer"
                >
                  View Pricing
                </button>
              </div>
              <div className="pt-6">
                <p className="text-white/60 font-label-md text-label-md flex flex-wrap items-center justify-center gap-4">
                  <span className="flex items-center gap-1 font-medium">
                    <Check size={18} /> No credit card required
                  </span>
                  <span className="w-1 h-1 bg-white/40 rounded-full hidden sm:inline-block"></span>
                  <span className="flex items-center gap-1 font-medium">
                    <Timer size={18} /> 45 min session
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}