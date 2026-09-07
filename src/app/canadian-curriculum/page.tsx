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

const SUBJECTS = [
    { title: "Online Math Tutors", icon: "functions", slug: "online-math-tutor", cta: "View math tutoring", points: ["Number sense, patterning & algebra", "Grade 9\u201310 academic and applied streams", "MHF4U, MCV4U and Math 30-1"] },
    { title: "Online English Tutors", icon: "menu_book", slug: "online-english-tutor", cta: "View English tutoring", points: ["Oral communication & media literacy", "Essay writing and literary analysis", "ENG4U and Grade 12 ELA"] },
    { title: "Online Science Tutors", icon: "science", slug: "online-science-tutor", cta: "View science tutoring", points: ["Life systems, matter & energy", "Grade 9\u201310 integrated science", "Inquiry skills and lab reporting"] },
    { title: "Online Physics Tutors", icon: "rocket_launch", slug: "online-physics-tutor", cta: "View physics tutoring", points: ["Kinematics, forces & energy", "SPH3U and SPH4U", "Physics 20 and 30 in Alberta"] },
    { title: "Online Chemistry Tutors", icon: "experiment", slug: "online-chemistry-tutor", cta: "View chemistry tutoring", points: ["Atomic structure & bonding", "SCH3U and SCH4U", "Quantitative relationships & titrations"] },
    { title: "Online Biology Tutors", icon: "biotech", slug: "online-biology-tutor", cta: "View biology tutoring", points: ["Cell biology, genetics & evolution", "SBI3U and SBI4U", "Biology 30 Diploma preparation"] }
];

const REGIONS = [
    { name: "Ontario : Ontario curriculum, EQAO, OSSLT and the OSSD" },
    { name: "Alberta : Programs of Study, PATs and Grade 12 Diploma Exams" },
    { name: "British Columbia : redesigned curriculum, Big Ideas and Graduation Assessments" },
    { name: "Quebec : Qu\u00e9bec Education Program and CEGEP preparation" },
    { name: "Manitoba : provincial curriculum and Grade 12 departmental exams" },
    { name: "Saskatchewan : provincial curriculum and Grade 12 requirements" },
    { name: "Atlantic Canada : Nova Scotia, New Brunswick, PEI and Newfoundland" },
    { name: "Territories : Yukon, Northwest Territories and Nunavut" }
];

const FAQS = [
    {
      q: "Do you follow provincial curricula or a generic Canadian program?",
      a: "Province-specific, always. We ask which province and school board your child attends before the first lesson, and match accordingly. This matters more in Canada than in most countries: there is no national curriculum, and a tutor working from generic North American material will introduce topics in an order your child&apos;s classroom does not follow.",
    },
    {
      q: "Do you support Ontario course codes like MHF4U and MCV4U?",
      a: "Yes, and these are among our most requested courses. Advanced Functions (MHF4U), Calculus and Vectors (MCV4U) and Grade 12 English (ENG4U) are prerequisites for most Ontario university programs, which makes them high-stakes in a way earlier courses are not. We match students to tutors who have taught the specific code rather than the general subject.",
    },
    {
      q: "Can you help with Alberta Diploma Exams?",
      a: "Yes. Math 30-1 and 30-2, Biology 30, Chemistry 30, Physics 30 and English 30-1 are all covered. Diploma Exams carry significant weight in the final course mark, so a student can be doing well in class and still see their grade fall on results day. Timed practice under exam conditions is the part that most reliably moves the outcome.",
    },
    {
      q: "Can you help with EQAO assessments?",
      a: "Yes, for Grades 3, 6 and 9 mathematics, and for the Grade 10 OSSLT literacy test. Worth knowing: EQAO is diagnostic rather than pass-or-fail at the elementary grades, and a weak result is best read as a signal about where support is needed rather than as a verdict on your child.",
    },
    {
      q: "Do you support French immersion students?",
      a: "Yes. Students in immersion programs are learning math and science concepts in their second language, and difficulty there is often a language problem wearing a math costume. Establishing which of the two is actually causing trouble is part of what the free assessment lesson is for, and it changes what the tutoring should target.",
    },
    {
      q: "Which grades and streams do you cover?",
      a: "Grade 1 through Grade 12, across academic, applied and university-preparation streams. We also support students moving between provinces mid-schooling, which is more disruptive than most families expect because sequencing and course names differ even where the underlying content matches.",
    },
    {
      q: "How are lessons conducted?",
      a: "Live, one-on-one, by video call, with a shared interactive whiteboard built for mathematical notation and screen sharing for working through problems together. Lessons are recorded to your account, so a method taught in October can be replayed before a June exam.",
    },
    {
      q: "Is there a free trial lesson?",
      a: "Yes, and no credit card is required. The session establishes where your child stands against their provincial grade expectations and what is genuinely causing the difficulty. If you choose not to continue, that is the end of it.",
    }
];

export default function CurriculumCanada({ onNavigate }: CurriculumProps) {
  const router = useRouter();
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const toggleFaq = (idx: number) => setActiveFaq(activeFaq === idx ? null : idx);

  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 md:pt-24 pb-16 px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="z-10">
            <span className="inline-block curriculum-chip px-4 py-1.5 rounded-full font-label-sm font-bold mb-6 uppercase tracking-wider">
              All Provinces & Territories
            </span>
            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-charcoal mb-6 leading-tight font-bold">
              Online Tutoring for the Canadian Curriculum
            </h1>
            <p className="font-body-lg text-on-surface-variant mb-10 max-w-xl">
              One-on-one online tutoring across the Canadian curriculum in math, English and science, Grades 1 to 12. Canada has no national curriculum, so every tutor is matched to your province&apos;s ministry expectations and to the course codes your child&apos;s school actually runs.
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
                    alt="Canadian curriculum tutor"
                  />
                </div>
                <div className="w-8 h-8 rounded-full bg-slate-300 border-2 border-white overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCrfy2VDzuas8JI7_Nc_lgFtDUBGaKBwYUAhIgRczApCaSXYrEV2QsJp7ZilvbDIj-JTYgaf4Z5CAxWjTKeOdP-Xew7mlBfgftkQSaB9vfp9pimw1kFUFlB1TepNnR3YcFAVouYpEE--o6gzvDCCEvNFw68t44lVdXKoy3QA_oZ6BixAGA7c3G90gyMoG0SzuROLNi07G9rU3TGE0J1WjYzaadaiJZKwmlnWWKtYWAdwl2Y71XLs_Sp_A"
                    alt="Canadian curriculum tutor"
                  />
                </div>
                <div className="w-8 h-8 rounded-full bg-slate-400 border-2 border-white overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBaEzIf4xmjrSsmMQsxn3xNvophay-XtLbJvWVo1gLfT7ENY6m9qmuYGA2_6vVdeP6_GyFYCKJ5zYsLqtnMllqrblzpeR_9pXfhLphLBz6J5Cze73zy0lWPot3wmxqmWjgaEIn-7O-mSXZt3XmjLQKc1EeXx4yO9XitwegeSlCY-RAfCSxl8lYPboqc7adxcFOMczEvH5jmafgRCaVIpdS1YJOOptHV2l5z1Muo2rPZt6_HuqUoXGRAWg"
                    alt="Canadian curriculum tutor"
                  />
                </div>
              </div>
              <span className="font-medium">Supporting families in every province and territory</span>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-lime-green opacity-20 blur-[100px] rounded-full"></div>
            <div className="relative z-10 bg-white rounded-[32px] p-4 shadow-ambient">
              <div className="rounded-[24px] overflow-hidden bg-surface-container relative aspect-video">
                <img
                  alt="A student studying the Canadian curriculum online with a laptop"
                  className="w-full h-full object-cover rounded-[24px] aspect-video"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDbShOGL08hxuZBe5aIC7NBDDPvIDPGbOX0ChbZ6SwDPm9FvLdz9WGVdvgQ-EYBb3ZyoQ3wNeAntcdUmlXdyroun3oKuqhGIH4MqbXlZMZVS45wv_da5cE_lK-QoPFzp4sjXP2Q9BFdz7qT7iqbWAxSJd9_3MFjCl6l-yDiwJiHhXPAWen_J7AS25n2SVfhJXpg3gWigxail5i8bTfbU3bdoCt3vGYG5zG9tBIclAgoNPtSU3-Mr0lJ1dki8WCFMGMWdQbkX9dFFgS96bk"
                />
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl flex items-center gap-4 max-w-xs animate-bounce-subtle">
                  <div className="w-10 h-10 rounded-full bg-lime-green flex items-center justify-center flex-shrink-0">
                    <MaterialIcon name="trending_up" className="text-charcoal text-xl" />
                  </div>
                  <div>
                    <p className="font-label-sm text-charcoal font-bold">Province-Matched</p>
                    <p className="text-[10px] text-on-surface-variant font-medium">Ontario, Alberta, BC, Quebec and beyond</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Understanding the curriculum */}
      <section className="py-24 bg-soft-gray border-y border-surface-container">
        <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="text-center mb-16">
            <h2 className="font-headline-lg text-headline-lg text-charcoal mb-4 font-bold">Understanding the Canadian Curriculum</h2>
            <p className="font-body-md text-on-surface-variant max-w-2xl mx-auto">
              Education in Canada is a provincial and territorial responsibility. Thirteen jurisdictions each write their own curriculum, set their own assessments and issue their own graduation requirements, which makes provincial matching the single most important thing a Canadian tutoring provider does.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-3xl text-center shadow-ambient hover-lift">
              <p className="font-headline-md text-royal-purple mb-2 font-bold">Ontario</p>
              <p className="font-label-md text-on-surface-variant font-medium">Ontario curriculum, EQAO assessments and OSSD credits</p>
            </div>
            <div className="bg-white p-8 rounded-3xl text-center shadow-ambient hover-lift">
              <p className="font-headline-md text-royal-purple mb-2 font-bold">WNCP</p>
              <p className="font-label-md text-on-surface-variant font-medium">Western and Northern protocol shared by BC, AB, SK, MB and the territories</p>
            </div>
            <div className="bg-white p-8 rounded-3xl text-center shadow-ambient hover-lift">
              <p className="font-headline-md text-royal-purple mb-2 font-bold">Alberta</p>
              <p className="font-label-md text-on-surface-variant font-medium">Programs of Study, PATs and Grade 12 Diploma Exams</p>
            </div>
            <div className="bg-white p-8 rounded-3xl text-center shadow-ambient hover-lift">
              <p className="font-headline-md text-royal-purple mb-2 font-bold">Quebec</p>
              <p className="font-label-md text-on-surface-variant font-medium">Qu&eacute;bec Education Program and the CEGEP pathway</p>
            </div>
          </div>
          <p className="text-center font-body-md text-on-surface-variant max-w-3xl mx-auto mt-12">
            The core progression is broadly aligned across provinces at the elementary level, but course names and codes diverge sharply in high school. Grade 12 Advanced Functions is MHF4U in Ontario and has no direct equivalent name in Alberta, where the comparable course is Mathematics 30-1.
          </p>
        </div>
      </section>

      {/* Regions / stages */}
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
            <span>Thirteen Curricula, One Standard of Teaching</span>
          </div>
          <h2 className="font-headline-lg text-headline-lg text-charcoal mb-4 font-semibold">Tutoring Matched to Your Province</h2>
          <p className="text-body-lg text-on-surface-variant max-w-xl mx-auto mb-12">
            A tutor who learned the Ontario program of study cannot assume the same expectations apply in Calgary or Vancouver. We staff by province, so every student works with someone who knows the curriculum documents and the assessments they will actually sit.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 sm:gap-8">
            {REGIONS.map((region) => (
              <div key={region.name} className="flex flex-col items-center gap-4 group">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center border border-surface-container group-hover:bg-royal-purple group-hover:border-royal-purple transition-all duration-300 shadow-sm group-hover:shadow-lg group-hover:-translate-y-1">
                  <MapPin className="w-6 h-6 text-royal-purple group-hover:text-white transition-colors" />
                </div>
                <span className="font-label-md text-label-md text-on-surface-variant group-hover:text-royal-purple font-medium transition-colors">{region.name}</span>
              </div>
            ))}
          </div>
          <p className="text-body-md text-on-surface-variant max-w-2xl mx-auto mt-12">
            Tell us your province and school board when you book, and we match before the first lesson rather than after it.
          </p>
        </div>
      </section>

      {/* Subject Specialisms */}
      <section className="px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto py-24">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="font-headline-lg text-headline-lg text-charcoal mb-4 font-bold">Subject Specialisms</h2>
            <p className="font-body-md text-on-surface-variant">
              Subject specialist teachers across the full Canadian curriculum, from Grade 1 through to Grade 12 university-preparation courses. Every subject opens onto its own page listing tutors, course codes and topics.
            </p>
          </div>
          <button
            onClick={() => router.push('/canadian-curriculum/online-math-tutor')}
            className="text-primary font-bold flex items-center gap-2 hover:underline cursor-pointer"
          >
            Explore all subjects
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SUBJECTS.map((subject) => (
            <div
              key={subject.slug}
              onClick={() => router.push(`/canadian-curriculum/${subject.slug}`)}
              className="bg-white border border-surface-variant p-8 rounded-3xl shadow-ambient hover:border-royal-purple transition-all group cursor-pointer"
            >
              <div className="w-14 h-14 bg-royal-purple/10 text-royal-purple rounded-2xl flex items-center justify-center mb-6 group-hover:bg-royal-purple group-hover:text-white transition-all">
                <MaterialIcon name={subject.icon} className="text-3xl" />
              </div>
              <h3 className="font-headline-md mb-4 font-bold text-charcoal">{subject.title}</h3>
              <ul className="space-y-3 font-body-md text-on-surface-variant">
                {subject.points.map((point) => (
                  <li key={point} className="flex items-center gap-2">
                    <MaterialIcon name="check_circle" className="text-lime-green text-sm" />
                    {point}
                  </li>
                ))}
              </ul>
              <span className="mt-6 inline-flex items-center gap-1 text-primary font-bold text-sm group-hover:underline">
                {subject.cta}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Progression */}
      <section className="py-24 bg-soft-gray border-y border-surface-container">
        <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="text-center mb-16">
            <h2 className="font-headline-lg text-headline-lg text-charcoal mb-4 font-bold">How the Canadian Curriculum Progresses</h2>
            <p className="font-body-md text-on-surface-variant max-w-2xl mx-auto">
              Grade bands vary slightly between provinces, but the underlying sequence is consistent. These are the stages where Canadian students most often lose ground.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-8 rounded-3xl shadow-ambient">
              <h3 className="font-headline-md mb-3 font-bold text-charcoal">Elementary, Grades 1&ndash;6</h3>
              <p className="font-body-md text-on-surface-variant">
                Number sense and numeration, measurement, geometry, patterning and data management, alongside oral communication, reading and writing. Fractions are where later difficulty most often originates, and they resurface years afterwards inside Grade 11 rational expressions.
              </p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-ambient">
              <h3 className="font-headline-md mb-3 font-bold text-charcoal">Middle Years, Grades 7&ndash;9</h3>
              <p className="font-body-md text-on-surface-variant">
                Ratios, proportional reasoning, integers and the move into algebraic thinking, with subject-specific science beginning. How securely this lands determines whether Grade 9 and 10 math goes well, and in Ontario it also shapes stream selection.
              </p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-ambient">
              <h3 className="font-headline-md mb-3 font-bold text-charcoal">Senior Grades 10&ndash;11</h3>
              <p className="font-body-md text-on-surface-variant">
                Quadratics, trigonometry and analytic geometry, then functions. Course selection here decides which Grade 12 courses remain available, and therefore which post-secondary programs stay reachable. It is the least reversible decision in Canadian high school.
              </p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-ambient">
              <h3 className="font-headline-md mb-3 font-bold text-charcoal">Grade 12 and Beyond</h3>
              <p className="font-body-md text-on-surface-variant">
                University-preparation courses such as MHF4U, MCV4U and ENG4U in Ontario, or Math 30-1 and English 30-1 in Alberta. Marks in a handful of these courses become the admission average that universities assess.
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
              Exam Preparation
            </span>
            <h2 className="font-headline-lg text-headline-lg text-charcoal mb-6 font-bold">Assessments We Prepare Students For</h2>
            <p className="font-body-md text-on-surface-variant mb-6">
              Mastering the course and performing under exam conditions are separate skills. Our tutors cover timed practice, marking rubrics and the specific question formats each provincial assessment uses, alongside the underlying course content.
            </p>
            <p className="font-body-md text-on-surface-variant mb-8">
              Alberta families should note the weighting: Grade 12 Diploma Exams count toward a substantial share of the final course mark, which means a strong classroom performance can still be pulled down by a weak exam. That makes timed practice under exam conditions more valuable in Alberta than almost anywhere else in Canada.
            </p>
            <button
              onClick={() => onNavigate('trial')}
              className="bg-royal-purple text-white px-8 py-4 rounded-xl font-headline-md font-bold hover:bg-primary transition-all shadow-lg active:scale-95 inline-flex items-center gap-2 cursor-pointer"
            >
              Book a Free Trial Lesson
            </button>
          </div>
          <div className="bg-surface-container-low p-10 rounded-[32px] border border-surface-container">
            <h3 className="font-headline-md mb-6 font-bold text-charcoal">Assessments We Cover</h3>
            <ul className="space-y-4 font-body-md text-on-surface-variant">
              <li className="flex gap-3"><MaterialIcon name="check_circle" className="text-lime-green text-sm" /> EQAO in Ontario, Grades 3, 6 and 9, plus the OSSLT</li>
              <li className="flex gap-3"><MaterialIcon name="check_circle" className="text-lime-green text-sm" /> Alberta Diploma Exams in Math, Biology, Chemistry, Physics and English</li>
              <li className="flex gap-3"><MaterialIcon name="check_circle" className="text-lime-green text-sm" /> Provincial Achievement Tests in Alberta, Grades 6 and 9</li>
              <li className="flex gap-3"><MaterialIcon name="check_circle" className="text-lime-green text-sm" /> BC Graduation Numeracy and Literacy Assessments</li>
              <li className="flex gap-3"><MaterialIcon name="check_circle" className="text-lime-green text-sm" /> AP exams for students taking Advanced Placement courses</li>
              <li className="flex gap-3"><MaterialIcon name="check_circle" className="text-lime-green text-sm" /> SAT and ACT for students applying to US universities</li>
            </ul>
            <p className="font-label-md text-on-surface-variant mt-6 italic">
              Curriculum documents, assessments and graduation requirements are set by provincial ministries of education and are periodically revised. Verify current requirements with your school board, since provinces revise them independently.
            </p>
          </div>
        </div>
      </section>

      {/* How we support */}
      <section className="py-24 bg-primary-container text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-white blur-3xl transform rotate-12"></div>
        </div>
        <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop py-margin-desktop relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-headline-lg text-headline-lg mb-8 font-bold text-white">How Math Make Smart Supports the Canadian Curriculum</h2>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <MaterialIcon name="location_on" className="text-xl" />
                  </div>
                  <div>
                    <h3 className="font-headline-md text-body-lg mb-1 font-bold">Matched by Province and Course Code</h3>
                    <p className="text-on-primary-container opacity-80">
                      Tutors are assessed on your provincial curriculum, and we match to the exact course code where one applies, so an MCV4U student works with an MCV4U specialist.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <MaterialIcon name="edit_note" className="text-xl" />
                  </div>
                  <div>
                    <h3 className="font-headline-md text-body-lg mb-1 font-bold">Screened and Accountable</h3>
                    <p className="text-on-primary-container opacity-80">
                      Every tutor clears a criminal record and vulnerable sector check before taking a student. Every session is saved to your account, and all contact stays inside the platform.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <MaterialIcon name="query_stats" className="text-xl" />
                  </div>
                  <div>
                    <h3 className="font-headline-md text-body-lg mb-1 font-bold">Progress You Can Read</h3>
                    <p className="text-on-primary-container opacity-80">
                      A written summary after every session and a bi-weekly report showing expectations met and those still needing work, in the language of your child&apos;s provincial report card.
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
                <span className="font-display-lg text-lime-green mb-2 font-bold">1–12</span>
                <span className="font-label-md font-medium">Grades Covered</span>
              </div>
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-3xl aspect-square flex flex-col justify-center items-center text-center -mt-12">
                <span className="font-display-lg text-lime-green mb-2 font-bold">13</span>
                <span className="font-label-md font-medium">Curricula Supported</span>
              </div>
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-3xl aspect-square flex flex-col justify-center items-center text-center">
                <span className="font-display-lg text-lime-green mb-2 font-bold">Free</span>
                <span className="font-label-md font-medium">First Session</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-white border-t border-surface-container">
        <div className="learning-lane px-margin-mobile max-w-max-width mx-auto md:px-margin-desktop">
          <h2 className="text-headline-lg font-display text-charcoal mb-4 text-center font-bold">FAQs About Canadian Curriculum Tutoring</h2>
          <p className="font-body-md text-on-surface-variant max-w-2xl mx-auto mb-12 text-center">
            The questions Canadian parents ask us most often about provinces, course codes, diploma exams and getting started.
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
                <div className="flex justify-between items-center p-6 gap-4">
                  <h3 className="text-body-lg font-bold text-charcoal">{faq.q}</h3>
                  <LigatureIcon name="expand_more" className={`shrink-0 transition-transform duration-200 ${activeFaq === idx ? 'rotate-180 text-primary' : 'text-charcoal'}`} />
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

      {/* CTA */}
      <section className="px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto py-24">
        <div className="bg-surface-container rounded-[40px] p-12 md:p-20 text-center relative overflow-hidden shadow-sm">
          <div className="absolute top-0 right-0 w-64 h-64 bg-royal-purple/5 -translate-y-1/2 translate-x-1/2 rounded-full"></div>
          <div className="relative z-10">
            <h2 className="font-display-lg text-display-lg-mobile md:text-headline-lg text-charcoal mb-6 font-bold">
              Ready to give your child the best academic support?
            </h2>
            <p className="font-body-lg text-on-surface-variant mb-10 max-w-2xl mx-auto">
              Whether your child needs help with Ontario Grade 10 math, Alberta Diploma Exam preparation, BC&apos;s redesigned curriculum or day-to-day homework in any province, our Canadian curriculum specialists are here. Book a free trial lesson today, no credit card required.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button
                onClick={() => onNavigate('trial')}
                className="bg-royal-purple text-white px-10 py-5 rounded-2xl font-headline-md font-bold hover:bg-primary transition-all shadow-lg active:scale-95 cursor-pointer"
              >
                Start Free Trial
              </button>
              <button
                onClick={() => router.push('/canadian-curriculum/online-math-tutor')}
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