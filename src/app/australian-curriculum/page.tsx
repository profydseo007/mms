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
    { title: "Online Maths Tutors", icon: "functions", slug: "online-maths-tutor", cta: "View maths tutoring", points: ["F\u20136 number, measurement & geometry", "Years 7\u201310 algebra and probability", "Methods, Specialist and General Maths"] },
    { title: "Online English Tutors", icon: "menu_book", slug: "online-english-tutor", cta: "View English tutoring", points: ["Language, Literature and Literacy strands", "Text response and analytical writing", "Years 11\u201312 English and Literature"] },
    { title: "Online Science Tutors", icon: "science", slug: "online-science-tutor", cta: "View science tutoring", points: ["Science Understanding across four sub-strands", "Science Inquiry Skills", "Years 7\u201310 cells, atoms and energy"] },
    { title: "Online Physics Tutors", icon: "rocket_launch", slug: "online-physics-tutor", cta: "View physics tutoring", points: ["Motion, energy and electricity", "Units 1\u20134 senior physics", "The maths that underpins the physics"] },
    { title: "Online Chemistry Tutors", icon: "experiment", slug: "online-chemistry-tutor", cta: "View chemistry tutoring", points: ["Atomic structure and bonding", "Stoichiometry and equilibrium", "Units 1\u20134 senior chemistry"] },
    { title: "Online Biology Tutors", icon: "biotech", slug: "online-biology-tutor", cta: "View biology tutoring", points: ["Cells, systems and genetics", "Ecosystems and evolution", "Units 1\u20134 senior biology"] }
];

const REGIONS = [
    { name: "New South Wales : NESA syllabuses, the HSC and Bands 1 to 6" },
    { name: "Victoria : Victorian Curriculum F\u201310, VCE study designs and SACs" },
    { name: "Queensland : ACiQ, the QCE and external assessment" },
    { name: "Western Australia : SCSA curriculum, WACE and ATAR courses" },
    { name: "South Australia : SACE, including the Research Project" },
    { name: "Tasmania : TASC and the Tasmanian Certificate of Education" },
    { name: "ACT & NT : BSSS certificate and the NTCET" },
    { name: "NAPLAN : Years 3, 5, 7 and 9 in March each year" }
];

const FAQS = [
    {
      q: "Do you follow the Australian Curriculum or my state&apos;s syllabus?",
      a: "Both, because they are not quite the same thing. ACARA sets the national framework for Foundation to Year 10, but each state delivers it through its own authority: NESA in New South Wales, the VCAA in Victoria, the QCAA in Queensland, SCSA in Western Australia. Victoria teaches the Victorian Curriculum F\u201310, which incorporates much of the national curriculum but differs in places. We match tutors to the syllabus your child&apos;s school actually names.",
    },
    {
      q: "Should my child pick Methods, Specialist or General Maths?",
      a: "It depends on what they want to study after school, and the decision matters more than most families realise because reversing it is difficult. Methods is a prerequisite or assumed knowledge for most engineering, science, commerce and computing degrees, and Specialist sits on top of it for the most mathematical of those pathways. General or Essential keeps an ATAR pathway open but closes some university doors. Higher-level maths subjects also tend to scale more favourably. Make the call on the degree your child is aiming at, not on one difficult term in Year 10.",
    },
    {
      q: "Can you help with NAPLAN preparation?",
      a: "Yes, though it is worth being clear about what NAPLAN is. It runs in Years 3, 5, 7 and 9, in March since the 2023 reforms, covering reading, writing, language conventions and numeracy, and results are reported against four proficiency levels rather than as a pass or fail. The most useful preparation is familiarity with the online adaptive format and shoring up genuine numeracy gaps, not drilling practice papers. We treat a NAPLAN result as the starting point for a plan.",
    },
    {
      q: "Do you support Years 11 and 12 across every state?",
      a: "Yes. VCE, HSC, QCE, WACE, SACE, TCE, NTCET and the ACT certificate are all covered, and tutors are matched to the specific one your child is enrolled in. Senior assessment structures differ substantially between states, so a tutor who knows SACs is not automatically the right fit for a student sitting HSC trials.",
    },
    {
      q: "Can you help with selective school and scholarship exams?",
      a: "Yes. We prepare students for selective high school placement tests, opportunity class tests in New South Wales, and independent school scholarship exams. These sit outside the school curriculum and test reasoning and speed under time pressure, so they need their own preparation rather than more of the same schoolwork.",
    },
    {
      q: "Which year levels do you cover?",
      a: "Foundation, sometimes called Prep or Kindy depending on your state, through to Year 12. The most valuable and most overlooked stage is Years 7 to 9, where the groundwork for senior maths is laid and where nothing external is assessed, so gaps open quietly.",
    },
    {
      q: "How are lessons conducted?",
      a: "Live, one-to-one, by video call, using a shared interactive whiteboard built for maths notation and screen sharing for working through problems together. Lessons are recorded to your account so your child can replay an explanation the night before a SAC or trial exam.",
    },
    {
      q: "Is there a free trial lesson?",
      a: "Yes, and no card details are required. The first session establishes where your child stands against their year level and what is genuinely causing the difficulty. If you decide not to continue, that is the end of it.",
    }
];

export default function CurriculumAU({ onNavigate }: CurriculumProps) {
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
              Foundation to Year 12
            </span>
            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-charcoal mb-6 leading-tight font-bold">
              Online Tutoring for the Australian Curriculum
            </h1>
            <p className="font-body-lg text-on-surface-variant mb-10 max-w-xl">
              One-to-one online tutoring across the Australian Curriculum in maths, science and English, Foundation to Year 12. Australia has one national framework and eight different ways of finishing school, so every tutor is matched to your state&apos;s syllabus and senior certificate.
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
                    alt="Australian curriculum tutor"
                  />
                </div>
                <div className="w-8 h-8 rounded-full bg-slate-300 border-2 border-white overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCrfy2VDzuas8JI7_Nc_lgFtDUBGaKBwYUAhIgRczApCaSXYrEV2QsJp7ZilvbDIj-JTYgaf4Z5CAxWjTKeOdP-Xew7mlBfgftkQSaB9vfp9pimw1kFUFlB1TepNnR3YcFAVouYpEE--o6gzvDCCEvNFw68t44lVdXKoy3QA_oZ6BixAGA7c3G90gyMoG0SzuROLNi07G9rU3TGE0J1WjYzaadaiJZKwmlnWWKtYWAdwl2Y71XLs_Sp_A"
                    alt="Australian curriculum tutor"
                  />
                </div>
                <div className="w-8 h-8 rounded-full bg-slate-400 border-2 border-white overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBaEzIf4xmjrSsmMQsxn3xNvophay-XtLbJvWVo1gLfT7ENY6m9qmuYGA2_6vVdeP6_GyFYCKJ5zYsLqtnMllqrblzpeR_9pXfhLphLBz6J5Cze73zy0lWPot3wmxqmWjgaEIn-7O-mSXZt3XmjLQKc1EeXx4yO9XitwegeSlCY-RAfCSxl8lYPboqc7adxcFOMczEvH5jmafgRCaVIpdS1YJOOptHV2l5z1Muo2rPZt6_HuqUoXGRAWg"
                    alt="Australian curriculum tutor"
                  />
                </div>
              </div>
              <span className="font-medium">Supporting students in every state and territory</span>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-lime-green opacity-20 blur-[100px] rounded-full"></div>
            <div className="relative z-10 bg-white rounded-[32px] p-4 shadow-ambient">
              <div className="rounded-[24px] overflow-hidden bg-surface-container relative aspect-video">
                <img
                  alt="A student studying the Australian curriculum online with a laptop"
                  className="w-full h-full object-cover rounded-[24px] aspect-video"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDbShOGL08hxuZBe5aIC7NBDDPvIDPGbOX0ChbZ6SwDPm9FvLdz9WGVdvgQ-EYBb3ZyoQ3wNeAntcdUmlXdyroun3oKuqhGIH4MqbXlZMZVS45wv_da5cE_lK-QoPFzp4sjXP2Q9BFdz7qT7iqbWAxSJd9_3MFjCl6l-yDiwJiHhXPAWen_J7AS25n2SVfhJXpg3gWigxail5i8bTfbU3bdoCt3vGYG5zG9tBIclAgoNPtSU3-Mr0lJ1dki8WCFMGMWdQbkX9dFFgS96bk"
                />
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl flex items-center gap-4 max-w-xs animate-bounce-subtle">
                  <div className="w-10 h-10 rounded-full bg-lime-green flex items-center justify-center flex-shrink-0">
                    <MaterialIcon name="trending_up" className="text-charcoal text-xl" />
                  </div>
                  <div>
                    <p className="font-label-sm text-charcoal font-bold">Syllabus-Matched</p>
                    <p className="text-[10px] text-on-surface-variant font-medium">ACARA F–10 plus VCE, HSC, QCE and WACE</p>
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
            <h2 className="font-headline-lg text-headline-lg text-charcoal mb-4 font-bold">Understanding the Australian Curriculum</h2>
            <p className="font-body-md text-on-surface-variant max-w-2xl mx-auto">
              Australia runs a national curriculum for Foundation to Year 10, developed by ACARA, and eight separate senior secondary systems for Years 11 and 12. Both halves matter, and they are governed by different authorities.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-3xl text-center shadow-ambient hover-lift">
              <p className="font-headline-md text-royal-purple mb-2 font-bold">ACARA</p>
              <p className="font-label-md text-on-surface-variant font-medium">The national Australian Curriculum, Foundation to Year 10</p>
            </div>
            <div className="bg-white p-8 rounded-3xl text-center shadow-ambient hover-lift">
              <p className="font-headline-md text-royal-purple mb-2 font-bold">State Syllabus</p>
              <p className="font-label-md text-on-surface-variant font-medium">NESA, VCAA, QCAA and SCSA deliver it their own way</p>
            </div>
            <div className="bg-white p-8 rounded-3xl text-center shadow-ambient hover-lift">
              <p className="font-headline-md text-royal-purple mb-2 font-bold">Senior Certificates</p>
              <p className="font-label-md text-on-surface-variant font-medium">VCE, HSC, QCE, WACE, SACE, TCE, NTCET and the ACT certificate</p>
            </div>
            <div className="bg-white p-8 rounded-3xl text-center shadow-ambient hover-lift">
              <p className="font-headline-md text-royal-purple mb-2 font-bold">ATAR</p>
              <p className="font-label-md text-on-surface-variant font-medium">The rank used for tertiary admission, with subject scaling applied</p>
            </div>
          </div>
          <p className="text-center font-body-md text-on-surface-variant max-w-3xl mx-auto mt-12">
            The national framework is not delivered identically everywhere. Victoria teaches the Victorian Curriculum F&ndash;10, New South Wales works through NESA syllabuses, and Queensland uses ACiQ. A tutor who only knows the ACARA documents will be approximately right and specifically wrong.
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
            <span>Every State, Every Syllabus</span>
          </div>
          <h2 className="font-headline-lg text-headline-lg text-charcoal mb-4 font-semibold">Tutoring Matched to Your State&apos;s Syllabus</h2>
          <p className="text-body-lg text-on-surface-variant max-w-xl mx-auto mb-12">
            Your child is taught, assessed and graded under a state authority, and the certificate they finish with differs in every state and territory. We match by state as well as subject, so nobody is taught VCE technique for an HSC exam.
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
            Moving interstate mid-schooling? Tell us and we will map where the syllabuses diverge, because the gaps are rarely where families expect them.
          </p>
        </div>
      </section>

      {/* Subject Specialisms */}
      <section className="px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto py-24">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="font-headline-lg text-headline-lg text-charcoal mb-4 font-bold">Subject Specialisms</h2>
            <p className="font-body-md text-on-surface-variant">
              Subject specialist teachers across the full Australian Curriculum, from Foundation through to Year 12 ATAR subjects. Each subject opens onto a dedicated page with tutor profiles and unit-by-unit coverage.
            </p>
          </div>
          <button
            onClick={() => router.push('/australian-curriculum/online-maths-tutor')}
            className="text-primary font-bold flex items-center gap-2 hover:underline cursor-pointer"
          >
            Explore all subjects
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SUBJECTS.map((subject) => (
            <div
              key={subject.slug}
              onClick={() => router.push(`/australian-curriculum/${subject.slug}`)}
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
            <h2 className="font-headline-lg text-headline-lg text-charcoal mb-4 font-bold">How the Australian Curriculum Progresses</h2>
            <p className="font-body-md text-on-surface-variant max-w-2xl mx-auto">
              The national curriculum sets the shape for Foundation to Year 10, then each state takes over. These are the stages where Australian students most often lose ground.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-8 rounded-3xl shadow-ambient">
              <h3 className="font-headline-md mb-3 font-bold text-charcoal">Foundation to Year 2</h3>
              <p className="font-body-md text-on-surface-variant">
                Counting, number recognition, simple addition and subtraction, shapes and early measurement, alongside living things, weather and everyday materials in science. Nothing is externally assessed yet, so difficulties here surface only when NAPLAN arrives in Year 3.
              </p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-ambient">
              <h3 className="font-headline-md mb-3 font-bold text-charcoal">Years 3 to 6</h3>
              <p className="font-body-md text-on-surface-variant">
                Multiplication, division, fractions and decimals, area and volume, with the first NAPLAN tests in Years 3 and 5. Fractions are the usual sticking point, and they are the root of a surprising share of Year 9 algebra problems.
              </p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-ambient">
              <h3 className="font-headline-md mb-3 font-bold text-charcoal">Years 7 to 10</h3>
              <p className="font-body-md text-on-surface-variant">
                Algebra, linear equations, geometry, statistics, probability and financial maths, with science splitting into cells, atoms, energy and genetics. This is where readiness for senior Maths Methods is genuinely decided.
              </p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-ambient">
              <h3 className="font-headline-md mb-3 font-bold text-charcoal">Years 11 and 12</h3>
              <p className="font-body-md text-on-surface-variant">
                Mathematical Methods, Specialist, General and Essential Maths, plus senior sciences, all under your state&apos;s certificate. Subject selection here determines university prerequisites, and scaling means the choice affects the ATAR as well as the marks.
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
              Knowing the content is one thing; meeting the marking guidelines is another. Our tutors cover marking guidelines, timed papers, SACs and internal assessment, alongside the subject selection decisions that shape an ATAR long before Year 12 begins.
            </p>
            <p className="font-body-md text-on-surface-variant mb-8">
              On NAPLAN, it is worth being clear about what it is. Since the 2023 reforms it runs in March for Years 3, 5, 7 and 9, covering reading, writing, language conventions and numeracy, and results are reported against four proficiency levels. It is diagnostic rather than pass-or-fail, and familiarity with the online adaptive format matters more than drilling practice papers.
            </p>
            <button
              onClick={() => onNavigate('trial')}
              className="bg-royal-purple text-white px-8 py-4 rounded-xl font-headline-md font-bold hover:bg-primary transition-all shadow-lg active:scale-95 inline-flex items-center gap-2 cursor-pointer"
            >
              Book a Free Trial Lesson
            </button>
          </div>
          <div className="bg-surface-container-low p-10 rounded-[32px] border border-surface-container">
            <h3 className="font-headline-md mb-6 font-bold text-charcoal">Exams &amp; Assessments We Cover</h3>
            <ul className="space-y-4 font-body-md text-on-surface-variant">
              <li className="flex gap-3"><MaterialIcon name="check_circle" className="text-lime-green text-sm" /> NAPLAN in Years 3, 5, 7 and 9</li>
              <li className="flex gap-3"><MaterialIcon name="check_circle" className="text-lime-green text-sm" /> VCE in Victoria, including SACs and study scores</li>
              <li className="flex gap-3"><MaterialIcon name="check_circle" className="text-lime-green text-sm" /> HSC in New South Wales, including trials and Bands 1 to 6</li>
              <li className="flex gap-3"><MaterialIcon name="check_circle" className="text-lime-green text-sm" /> QCE, WACE, SACE, TCE and NTCET</li>
              <li className="flex gap-3"><MaterialIcon name="check_circle" className="text-lime-green text-sm" /> ATAR subject selection and scaling advice</li>
              <li className="flex gap-3"><MaterialIcon name="check_circle" className="text-lime-green text-sm" /> Selective school tests, OC tests and scholarship exams</li>
            </ul>
            <p className="font-label-md text-on-surface-variant mt-6 italic">
              Syllabuses, assessment structures and certificate requirements are set by ACARA and the state curriculum authorities, and are periodically revised. Confirm the current position with your child&apos;s school, since states revise independently.
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
              <h2 className="font-headline-lg text-headline-lg mb-8 font-bold text-white">How Math Make Smart Supports the Australian Curriculum</h2>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <MaterialIcon name="location_on" className="text-xl" />
                  </div>
                  <div>
                    <h3 className="font-headline-md text-body-lg mb-1 font-bold">Matched by State and Syllabus</h3>
                    <p className="text-on-primary-container opacity-80">
                      Tutors are assessed on the syllabus your child is examined against, whether that is a NESA syllabus in Sydney or a VCAA study design in Melbourne. The difference is not cosmetic.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <MaterialIcon name="edit_note" className="text-xl" />
                  </div>
                  <div>
                    <h3 className="font-headline-md text-body-lg mb-1 font-bold">Working with Children Checked</h3>
                    <p className="text-on-primary-container opacity-80">
                      Every tutor holds a current Working with Children Check for their state before taking a student. Lessons are stored in your account, and contact never moves off the platform.
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
                      A written summary after every session and a fortnightly report showing topics mastered and topics still needing work, in the language of the syllabus.
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
                <span className="font-display-lg text-lime-green mb-2 font-bold">F–12</span>
                <span className="font-label-md font-medium">Year Levels Covered</span>
              </div>
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-3xl aspect-square flex flex-col justify-center items-center text-center -mt-12">
                <span className="font-display-lg text-lime-green mb-2 font-bold">8</span>
                <span className="font-label-md font-medium">Senior Certificates</span>
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
          <h2 className="text-headline-lg font-display text-charcoal mb-4 text-center font-bold">FAQs About Australian Curriculum Tutoring</h2>
          <p className="font-body-md text-on-surface-variant max-w-2xl mx-auto mb-12 text-center">
            The questions Australian parents ask us most often about ACARA, state syllabuses, NAPLAN and senior subject choice.
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
              Whether your child needs help catching up in Year 8, preparing for NAPLAN, or working towards a VCE study score or HSC band, our Australian curriculum specialists are here. Book a free trial lesson today, no credit card required.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button
                onClick={() => onNavigate('trial')}
                className="bg-royal-purple text-white px-10 py-5 rounded-2xl font-headline-md font-bold hover:bg-primary transition-all shadow-lg active:scale-95 cursor-pointer"
              >
                Start Free Trial
              </button>
              <button
                onClick={() => router.push('/free-trial')}
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