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
    { title: "Online Maths Tutors", icon: "functions", slug: "online-math-tutor", cta: "View maths tutoring", points: ["KS1\u20132 number, fractions & times tables", "GCSE Foundation & Higher tier", "A-Level Maths & Further Maths"] },
    { title: "Online English Tutors", icon: "menu_book", slug: "online-english-tutor", cta: "View English tutoring", points: ["Reading comprehension & inference", "GCSE English Language & Literature", "Essay technique & unseen texts"] },
    { title: "Online Science Tutors", icon: "science", slug: "online-science-tutor", cta: "View science tutoring", points: ["KS3 working scientifically", "Combined Science (Trilogy & Synergy)", "Required practicals & six-mark questions"] },
    { title: "Online Physics Tutors", icon: "rocket_launch", slug: "online-physics-tutor", cta: "View physics tutoring", points: ["Forces, energy, waves & electricity", "GCSE Physics & Combined Science", "A-Level Physics and the maths behind it"] },
    { title: "Online Chemistry Tutors", icon: "experiment", slug: "online-chemistry-tutor", cta: "View chemistry tutoring", points: ["Atomic structure & bonding", "Moles, titrations & rates of reaction", "A-Level organic and physical chemistry"] },
    { title: "Online Biology Tutors", icon: "biotech", slug: "online-biology-tutor", cta: "View biology tutoring", points: ["Cells, organisation & infection", "Genetics, evolution & ecology", "A-Level Biology and practical endorsement"] }
];

const REGIONS = [
    { name: "Key Stage 1 : Years 1\u20132, phonics, early number and reading fluency" },
    { name: "Key Stage 2 : Years 3\u20136, SATs preparation and the move to secondary" },
    { name: "Key Stage 3 : Years 7\u20139, where the gaps that cost GCSE grades open up" },
    { name: "GCSE : Years 10\u201311, tiering decisions and the grade 4/5 boundary" },
    { name: "A-Level : Years 12\u201313, coursework, practicals and UCAS requirements" },
    { name: "Scotland : National 5, Higher and Advanced Higher" },
    { name: "Wales : Curriculum for Wales and Made-for-Wales GCSEs" },
    { name: "Entrance : 11+, 13+, Common Entrance and scholarship papers" }
];

const FAQS = [
    {
      q: "Do you follow the National Curriculum?",
      a: "In England, yes, and we also cover the other three nations properly. Scotland follows Curriculum for Excellence with National 5, Higher and Advanced Higher rather than GCSEs. Wales teaches the Curriculum for Wales and is introducing reformed Made-for-Wales GCSEs. Northern Ireland uses CCEA. Tell us where your child goes to school and we match accordingly, because these are genuinely different systems rather than regional variations on one.",
    },
    {
      q: "Which exam boards do your tutors cover?",
      a: "AQA, Edexcel (Pearson), OCR, WJEC and Eduqas, and CCEA in Northern Ireland. This matters more than most families realise. The content overlaps heavily but the question styles, mark schemes and required practicals differ, and a tutor drilling the wrong board&apos;s past papers is preparing your child for an exam they will not sit.",
    },
    {
      q: "What year groups do you tutor?",
      a: "Year 1 through to Year 13, covering Key Stages 1 to 5. The stage where families see the biggest return is usually Key Stage 3, Years 7 to 9, precisely because nothing is formally examined there. Gaps open quietly, nobody notices until Year 10, and by then the repair work has to compete with GCSE content.",
    },
    {
      q: "Should my child sit Foundation or Higher tier maths?",
      a: "It depends on recent mock performance and the grade they actually need next. Foundation caps at grade 5; Higher runs 9 down to 4 with a narrow allowance below. The instinct is to push for Higher, but a student comfortably scoring at the top of Foundation frequently ends up with a better grade than one struggling at the bottom of Higher, where the paper assumes content they have not secured. It is worth revisiting after each set of mocks.",
    },
    {
      q: "What is the difference between a grade 4 and a grade 5?",
      a: "A grade 4 is a standard pass and a grade 5 is a strong pass, which is why some sixth forms and employers specify a 5 even though 4 technically passes. The distinction bites hardest in maths and English, because students who do not reach a grade 4 in those subjects normally have to continue studying them post-16. If your child is sitting around a 3 or 4, that boundary is usually where tutoring returns the most.",
    },
    {
      q: "Can you help with 11+ and independent school entrance exams?",
      a: "Yes, including GL and CEM style papers, Common Entrance at 13+, and individual school scholarship papers. Entrance exams test reasoning and speed under time pressure rather than the school curriculum, so they need their own preparation rather than simply more of the same schoolwork.",
    },
    {
      q: "How are lessons conducted?",
      a: "Live, one-to-one, by video call, using a shared interactive whiteboard built for mathematical notation and screen sharing for working through past papers together. Every lesson is recorded to your account, which matters during revision: a student revisiting how a method was set up will usually learn more than from re-reading a finished answer.",
    },
    {
      q: "Is there a free trial lesson?",
      a: "Yes, and no card details are needed. The first session is a genuine assessment: the tutor establishes where your child sits against their year group, identifies what is actually causing the difficulty, and tells you honestly what would help. If you decide not to continue, that is the end of it.",
    }
];

export default function CurriculumUK({ onNavigate }: CurriculumProps) {
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
              Four Nations, Every Exam Board
            </span>
            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-charcoal mb-6 leading-tight font-bold">
              Online Tutoring for the UK Curriculum
            </h1>
            <p className="font-body-lg text-on-surface-variant mb-10 max-w-xl">
              One-to-one online tutoring across the UK curriculum in maths, English and science, from Key Stage 1 through to A-Level. Britain runs four separate education systems, so every tutor is matched to your child&apos;s nation and to the exam board their school actually enters them for.
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
                    alt="UK curriculum tutor"
                  />
                </div>
                <div className="w-8 h-8 rounded-full bg-slate-300 border-2 border-white overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCrfy2VDzuas8JI7_Nc_lgFtDUBGaKBwYUAhIgRczApCaSXYrEV2QsJp7ZilvbDIj-JTYgaf4Z5CAxWjTKeOdP-Xew7mlBfgftkQSaB9vfp9pimw1kFUFlB1TepNnR3YcFAVouYpEE--o6gzvDCCEvNFw68t44lVdXKoy3QA_oZ6BixAGA7c3G90gyMoG0SzuROLNi07G9rU3TGE0J1WjYzaadaiJZKwmlnWWKtYWAdwl2Y71XLs_Sp_A"
                    alt="UK curriculum tutor"
                  />
                </div>
                <div className="w-8 h-8 rounded-full bg-slate-400 border-2 border-white overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBaEzIf4xmjrSsmMQsxn3xNvophay-XtLbJvWVo1gLfT7ENY6m9qmuYGA2_6vVdeP6_GyFYCKJ5zYsLqtnMllqrblzpeR_9pXfhLphLBz6J5Cze73zy0lWPot3wmxqmWjgaEIn-7O-mSXZt3XmjLQKc1EeXx4yO9XitwegeSlCY-RAfCSxl8lYPboqc7adxcFOMczEvH5jmafgRCaVIpdS1YJOOptHV2l5z1Muo2rPZt6_HuqUoXGRAWg"
                    alt="UK curriculum tutor"
                  />
                </div>
              </div>
              <span className="font-medium">Serving families in England, Scotland, Wales and Northern Ireland</span>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-lime-green opacity-20 blur-[100px] rounded-full"></div>
            <div className="relative z-10 bg-white rounded-[32px] p-4 shadow-ambient">
              <div className="rounded-[24px] overflow-hidden bg-surface-container relative aspect-video">
                <img
                  alt="A student studying the UK curriculum online with a laptop"
                  className="w-full h-full object-cover rounded-[24px] aspect-video"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDbShOGL08hxuZBe5aIC7NBDDPvIDPGbOX0ChbZ6SwDPm9FvLdz9WGVdvgQ-EYBb3ZyoQ3wNeAntcdUmlXdyroun3oKuqhGIH4MqbXlZMZVS45wv_da5cE_lK-QoPFzp4sjXP2Q9BFdz7qT7iqbWAxSJd9_3MFjCl6l-yDiwJiHhXPAWen_J7AS25n2SVfhJXpg3gWigxail5i8bTfbU3bdoCt3vGYG5zG9tBIclAgoNPtSU3-Mr0lJ1dki8WCFMGMWdQbkX9dFFgS96bk"
                />
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl flex items-center gap-4 max-w-xs animate-bounce-subtle">
                  <div className="w-10 h-10 rounded-full bg-lime-green flex items-center justify-center flex-shrink-0">
                    <MaterialIcon name="trending_up" className="text-charcoal text-xl" />
                  </div>
                  <div>
                    <p className="font-label-sm text-charcoal font-bold">Board-Matched</p>
                    <p className="text-[10px] text-on-surface-variant font-medium">AQA, Edexcel, OCR, WJEC or CCEA</p>
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
            <h2 className="font-headline-lg text-headline-lg text-charcoal mb-4 font-bold">Understanding the UK Curriculum</h2>
            <p className="font-body-md text-on-surface-variant max-w-2xl mx-auto">
              There is no single British curriculum. Education is devolved, which means four nations each set their own standards, qualifications and regulators, and the differences are larger than most families outside the system expect.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-3xl text-center shadow-ambient hover-lift">
              <p className="font-headline-md text-royal-purple mb-2 font-bold">England</p>
              <p className="font-label-md text-on-surface-variant font-medium">National Curriculum, Key Stages 1&ndash;4, GCSE and A-Level</p>
            </div>
            <div className="bg-white p-8 rounded-3xl text-center shadow-ambient hover-lift">
              <p className="font-headline-md text-royal-purple mb-2 font-bold">Scotland</p>
              <p className="font-label-md text-on-surface-variant font-medium">Curriculum for Excellence, National 5, Higher, Advanced Higher</p>
            </div>
            <div className="bg-white p-8 rounded-3xl text-center shadow-ambient hover-lift">
              <p className="font-headline-md text-royal-purple mb-2 font-bold">Wales</p>
              <p className="font-label-md text-on-surface-variant font-medium">Curriculum for Wales and the reformed Made-for-Wales GCSEs</p>
            </div>
            <div className="bg-white p-8 rounded-3xl text-center shadow-ambient hover-lift">
              <p className="font-headline-md text-royal-purple mb-2 font-bold">N. Ireland</p>
              <p className="font-label-md text-on-surface-variant font-medium">CCEA curriculum, GCSEs and A-Levels under CCEA grading</p>
            </div>
          </div>
          <p className="text-center font-body-md text-on-surface-variant max-w-3xl mx-auto mt-12">
            Two of the four are mid-reform right now. Scotland&apos;s qualifications are now awarded by Qualifications Scotland, which replaced the SQA, and Wales is partway through introducing its reformed GCSEs. Tutoring that treats Britain as one system will be wrong for roughly a fifth of UK families before it starts.
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
            <span>Every Stage, Every Board</span>
          </div>
          <h2 className="font-headline-lg text-headline-lg text-charcoal mb-4 font-semibold">Tutoring Matched to Your Key Stage and Exam Board</h2>
          <p className="text-body-lg text-on-surface-variant max-w-xl mx-auto mb-12">
            An AQA GCSE Maths paper and an Edexcel one reward different things, and a tutor who knows the mark scheme is worth considerably more than one who simply knows the maths. We match on nation, key stage and awarding body.
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
            Not sure which board your child sits? Check the front of any past paper they have been set, or ask us during the free trial lesson and we will work it out with you.
          </p>
        </div>
      </section>

      {/* Subject Specialisms */}
      <section className="px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto py-24">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="font-headline-lg text-headline-lg text-charcoal mb-4 font-bold">Subject Specialisms</h2>
            <p className="font-body-md text-on-surface-variant">
              Subject specialist teachers across the whole UK curriculum, from Key Stage 1 through to A-Level and Further Maths. Follow any subject through to its own page for tutor profiles and full topic coverage.
            </p>
          </div>
          <button
            onClick={() => router.push('/uk-curriculum/online-math-tutor')}
            className="text-primary font-bold flex items-center gap-2 hover:underline cursor-pointer"
          >
            Explore all subjects
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SUBJECTS.map((subject) => (
            <div
              key={subject.slug}
              onClick={() => router.push(`/uk-curriculum/${subject.slug}`)}
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
            <h2 className="font-headline-lg text-headline-lg text-charcoal mb-4 font-bold">How the UK Curriculum Progresses</h2>
            <p className="font-body-md text-on-surface-variant max-w-2xl mx-auto">
              Terminology differs across the four nations, but the underlying shape is similar. These are the stages where students most often lose ground, and what tends to be behind it.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-8 rounded-3xl shadow-ambient">
              <h3 className="font-headline-md mb-3 font-bold text-charcoal">Key Stage 1 &amp; 2, Years 1&ndash;6</h3>
              <p className="font-body-md text-on-surface-variant">
                Phonics, number bonds, times tables, fractions and reading fluency, with KS2 SATs at the end of Year 6. Fractions are the single most common source of difficulty later on, and they are almost always the real problem when GCSE algebra goes wrong.
              </p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-ambient">
              <h3 className="font-headline-md mb-3 font-bold text-charcoal">Key Stage 3, Years 7&ndash;9</h3>
              <p className="font-body-md text-on-surface-variant">
                Algebraic thinking, ratio and proportion, and the transition to subject-specific science. This is the most overlooked stage in the whole system: nothing is formally examined, so gaps open quietly and only surface in Year 10.
              </p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-ambient">
              <h3 className="font-headline-md mb-3 font-bold text-charcoal">Key Stage 4, Years 10&ndash;11</h3>
              <p className="font-body-md text-on-surface-variant">
                GCSE content across nine or ten subjects, with tier decisions in maths and science. Course grades now matter for sixth form entry, and students who do not reach a grade 4 in maths and English normally continue studying them post-16.
              </p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-ambient">
              <h3 className="font-headline-md mb-3 font-bold text-charcoal">Key Stage 5, Years 12&ndash;13</h3>
              <p className="font-body-md text-on-surface-variant">
                A-Levels, coursework and practical endorsements, alongside UCAS applications. Three or four subjects studied in far greater depth, where the step up from GCSE catches out even strong students in the first term.
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
            <h2 className="font-headline-lg text-headline-lg text-charcoal mb-6 font-bold">Exams We Prepare Students For</h2>
            <p className="font-body-md text-on-surface-variant mb-6">
              Knowing the content and knowing how to earn marks for it are two different abilities. Our tutors work through mark scheme strategy, timed past papers and the specific question styles each board favours, alongside the underlying subject content.
            </p>
            <p className="font-body-md text-on-surface-variant mb-8">
              One thing worth knowing about tiering: Foundation tier caps the available grade at 5, while Higher runs from 9 down to 4. Pushing a struggling student onto Higher often produces a worse result than the top of Foundation, and the decision is worth revisiting after each set of mocks rather than settling it once in Year 10.
            </p>
            <button
              onClick={() => onNavigate('trial')}
              className="bg-royal-purple text-white px-8 py-4 rounded-xl font-headline-md font-bold hover:bg-primary transition-all shadow-lg active:scale-95 inline-flex items-center gap-2 cursor-pointer"
            >
              Book a Free Trial Lesson
            </button>
          </div>
          <div className="bg-surface-container-low p-10 rounded-[32px] border border-surface-container">
            <h3 className="font-headline-md mb-6 font-bold text-charcoal">Exams &amp; Boards We Cover</h3>
            <ul className="space-y-4 font-body-md text-on-surface-variant">
              <li className="flex gap-3"><MaterialIcon name="check_circle" className="text-lime-green text-sm" /> GCSE and IGCSE across AQA, Edexcel, OCR, WJEC and CCEA</li>
              <li className="flex gap-3"><MaterialIcon name="check_circle" className="text-lime-green text-sm" /> A-Level, AS-Level and Further Maths</li>
              <li className="flex gap-3"><MaterialIcon name="check_circle" className="text-lime-green text-sm" /> National 5, Higher and Advanced Higher in Scotland</li>
              <li className="flex gap-3"><MaterialIcon name="check_circle" className="text-lime-green text-sm" /> KS2 SATs and the Year 6 transition</li>
              <li className="flex gap-3"><MaterialIcon name="check_circle" className="text-lime-green text-sm" /> 11+, 13+, Common Entrance and independent school scholarships</li>
              <li className="flex gap-3"><MaterialIcon name="check_circle" className="text-lime-green text-sm" /> GCSE resits in maths and English</li>
            </ul>
            <p className="font-label-md text-on-surface-variant mt-6 italic">
              Specifications and grade boundaries are set by the awarding bodies and change periodically. Check current requirements with your child&apos;s school before making decisions on them.
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
              <h2 className="font-headline-lg text-headline-lg mb-8 font-bold text-white">How Math Make Smart Supports the UK Curriculum</h2>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <MaterialIcon name="location_on" className="text-xl" />
                  </div>
                  <div>
                    <h3 className="font-headline-md text-body-lg mb-1 font-bold">Matched to Nation and Board</h3>
                    <p className="text-on-primary-container opacity-80">
                      Tutors are assessed on the specification your child is actually examined against, whether that is an AQA GCSE in Manchester, a CCEA paper in Belfast or a Higher in Glasgow.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <MaterialIcon name="edit_note" className="text-xl" />
                  </div>
                  <div>
                    <h3 className="font-headline-md text-body-lg mb-1 font-bold">Marks, Not Just Method</h3>
                    <p className="text-on-primary-container opacity-80">
                      Examiners award marks for working, not only for answers. We teach students how marks are actually allocated, which for many is worth more than additional content revision.
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
                      Written summaries after every session and a fortnightly report showing topics mastered and topics still needing work, in the language of the specification.
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
                <span className="font-display-lg text-lime-green mb-2 font-bold">KS1â€“5</span>
                <span className="font-label-md font-medium">Plus Entrance Exams</span>
              </div>
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-3xl aspect-square flex flex-col justify-center items-center text-center -mt-12">
                <span className="font-display-lg text-lime-green mb-2 font-bold">4</span>
                <span className="font-label-md font-medium">Nations Covered</span>
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
          <h2 className="text-headline-lg font-display text-charcoal mb-4 text-center font-bold">FAQs About UK Curriculum Tutoring</h2>
          <p className="font-body-md text-on-surface-variant max-w-2xl mx-auto mb-12 text-center">
            The questions British parents ask us most often about key stages, exam boards, tiering and getting started.
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
              Whether your child needs help catching up at Key Stage 3, pushing for a grade 7 at GCSE, or preparing for A-Level exams, our UK curriculum specialists are here to help. Book a free trial lesson today, no credit card required.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button
                onClick={() => onNavigate('trial')}
                className="bg-royal-purple text-white px-10 py-5 rounded-2xl font-headline-md font-bold hover:bg-primary transition-all shadow-lg active:scale-95 cursor-pointer"
              >
                Start Free Trial
              </button>
              <button
                onClick={() => router.push('/uk-curriculum/online-math-tutor')}
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