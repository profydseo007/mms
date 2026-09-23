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
    { title: "Online Maths Tutors", icon: "functions", slug: "online-maths-tutor", cta: "View maths tutoring", points: ["Number, algebra and measurement", "NCEA Levels 1 to 3 achievement standards", "Level 3 Calculus and Statistics"] },
    { title: "Online English Tutors", icon: "menu_book", slug: "online-english-tutor", cta: "View English tutoring", points: ["Close reading and text analysis", "Formal and creative writing standards", "Externals and portfolio internals"] },
    { title: "Online Science Tutors", icon: "science", slug: "online-science-tutor", cta: "View science tutoring", points: ["Nature of Science strand", "Years 9\u201310 preparation for NCEA", "Practical investigations and reporting"] },
    { title: "Online Physics Tutors", icon: "rocket_launch", slug: "online-physics-tutor", cta: "View physics tutoring", points: ["Mechanics, waves and electricity", "Level 2 and 3 achievement standards", "The maths behind the physics"] },
    { title: "Online Chemistry Tutors", icon: "experiment", slug: "online-chemistry-tutor", cta: "View chemistry tutoring", points: ["Atomic structure and bonding", "Stoichiometry and equilibrium", "Level 2 and 3 internals and externals"] },
    { title: "Online Biology Tutors", icon: "biotech", slug: "online-biology-tutor", cta: "View biology tutoring", points: ["Cells, genetics and evolution", "Ecology and human biology", "Level 2 and 3 achievement standards"] }
];

const REGIONS = [
    { name: "Years 1 to 6 : numeracy and literacy foundations in primary school" },
    { name: "Years 7 and 8 : intermediate, and the step up to secondary" },
    { name: "Years 9 and 10 : where the gaps that later derail NCEA maths open up" },
    { name: "Year 11 : NCEA Level 1 and the literacy and numeracy co-requisite" },
    { name: "Year 12 : NCEA Level 2, subject choice and pathway planning" },
    { name: "Year 13 : NCEA Level 3, University Entrance and Scholarship" },
    { name: "Co-requisite : standalone reading, writing and numeracy assessments" },
    { name: "Kura & immersion : support for students learning through te reo M\u0101ori" }
];

const FAQS = [
    {
      q: "NCEA is being replaced. What does that mean for my child?",
      a: "Which cohort your child is in decides whether it affects them at all. NCEA Level 1 is removed in 2028 and replaced by a Foundational Award recognising literacy and numeracy at Year 11 level. A New Zealand Certificate of Education follows for Year 12 in 2029, and an Advanced Certificate for Year 13 in 2030. The Ministry has said no student will need to switch between NCEA and the new system partway through their schooling. If your child is currently in Year 11, 12 or 13, they finish under NCEA as it stands.",
    },
    {
      q: "What is the literacy and numeracy co-requisite?",
      a: "A standalone requirement sitting alongside NCEA that students must meet to gain the qualification at any level. It is assessed independently of subject standards, so a student can be performing well in class and still not have met it. Credits earned towards the co-requisite cannot also count towards the 60 credits needed for NCEA itself, which surprises a great many families. If your child has not yet passed the numeracy component, that is usually the first thing we address.",
    },
    {
      q: "How does the new grading compare with Achieved, Merit and Excellence?",
      a: "The new qualifications move to a subject-based structure with a six-point scale running from A+ to E, replacing Not Achieved, Achieved, Merit and Excellence. Students study at least five subjects a year and need to pass three to gain the qualification, with an endorsement for passing all five. The practical shift is that accumulating credits across unrelated standards goes away, so consistent performance across a whole subject matters more than assembling credits late in the year.",
    },
    {
      q: "Do you help with University Entrance?",
      a: "Yes. UE requires NCEA Level 3, a set number of credits across approved subjects, and the literacy and numeracy co-requisite. It is entirely possible to gain Level 3 and still miss UE, usually because of the approved-subject rules, and that is a painful discovery to make in December. We work backwards from the degree your child is aiming at, since some courses carry their own maths or science prerequisites on top of UE.",
    },
    {
      q: "Which years and levels do you cover?",
      a: "Years 1 through 13, including NCEA Levels 1 to 3 and NZQA Scholarship. The stage families most often overlook is Years 9 and 10, where no credits are at stake and gaps therefore open unnoticed. Most Level 2 maths difficulties trace directly back there.",
    },
    {
      q: "Can you support students learning through te reo M\u0101ori?",
      a: "Yes. We support \u0101konga in kura and immersion settings working through maths and science in te reo M\u0101ori. As with any immersion context, difficulty is sometimes a language matter rather than a subject one, and establishing which it is changes what the tutoring should focus on.",
    },
    {
      q: "How are lessons conducted?",
      a: "Live, one-to-one, by video call, with a shared interactive whiteboard built for maths notation and screen sharing for working through standards together. Lessons are recorded to your account so your child can replay an explanation before an internal or an external.",
    },
    {
      q: "Is there a free trial lesson?",
      a: "Yes, with no card details needed. The first session establishes where your child stands against their year level and what is actually causing the difficulty. Choose not to carry on and nothing further is owed.",
    }
];

export default function CurriculumNZ({ onNavigate }: CurriculumProps) {
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
              Years 1 to 13
            </span>
            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-charcoal mb-6 leading-tight font-bold">
              Online Tutoring for the New Zealand Curriculum
            </h1>
            <p className="font-body-lg text-on-surface-variant mb-10 max-w-xl">
              One-to-one online tutoring across the New Zealand Curriculum in maths, science and English, Years 1 to 13. Every tutor understands NCEA internals and externals, the literacy and numeracy co-requisite, and the qualification changes now underway.
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
                    alt="New Zealand curriculum tutor"
                  />
                </div>
                <div className="w-8 h-8 rounded-full bg-slate-300 border-2 border-white overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCrfy2VDzuas8JI7_Nc_lgFtDUBGaKBwYUAhIgRczApCaSXYrEV2QsJp7ZilvbDIj-JTYgaf4Z5CAxWjTKeOdP-Xew7mlBfgftkQSaB9vfp9pimw1kFUFlB1TepNnR3YcFAVouYpEE--o6gzvDCCEvNFw68t44lVdXKoy3QA_oZ6BixAGA7c3G90gyMoG0SzuROLNi07G9rU3TGE0J1WjYzaadaiJZKwmlnWWKtYWAdwl2Y71XLs_Sp_A"
                    alt="New Zealand curriculum tutor"
                  />
                </div>
                <div className="w-8 h-8 rounded-full bg-slate-400 border-2 border-white overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBaEzIf4xmjrSsmMQsxn3xNvophay-XtLbJvWVo1gLfT7ENY6m9qmuYGA2_6vVdeP6_GyFYCKJ5zYsLqtnMllqrblzpeR_9pXfhLphLBz6J5Cze73zy0lWPot3wmxqmWjgaEIn-7O-mSXZt3XmjLQKc1EeXx4yO9XitwegeSlCY-RAfCSxl8lYPboqc7adxcFOMczEvH5jmafgRCaVIpdS1YJOOptHV2l5z1Muo2rPZt6_HuqUoXGRAWg"
                    alt="New Zealand curriculum tutor"
                  />
                </div>
              </div>
              <span className="font-medium">Supporting Äkonga from Kaitaia to Invercargill</span>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-lime-green opacity-20 blur-[100px] rounded-full"></div>
            <div className="relative z-10 bg-white rounded-[32px] p-4 shadow-ambient">
              <div className="rounded-[24px] overflow-hidden bg-surface-container relative aspect-video">
                <img
                  alt="A student studying the New Zealand curriculum online with a laptop"
                  className="w-full h-full object-cover rounded-[24px] aspect-video"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDbShOGL08hxuZBe5aIC7NBDDPvIDPGbOX0ChbZ6SwDPm9FvLdz9WGVdvgQ-EYBb3ZyoQ3wNeAntcdUmlXdyroun3oKuqhGIH4MqbXlZMZVS45wv_da5cE_lK-QoPFzp4sjXP2Q9BFdz7qT7iqbWAxSJd9_3MFjCl6l-yDiwJiHhXPAWen_J7AS25n2SVfhJXpg3gWigxail5i8bTfbU3bdoCt3vGYG5zG9tBIclAgoNPtSU3-Mr0lJ1dki8WCFMGMWdQbkX9dFFgS96bk"
                />
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl flex items-center gap-4 max-w-xs animate-bounce-subtle">
                  <div className="w-10 h-10 rounded-full bg-lime-green flex items-center justify-center flex-shrink-0">
                    <MaterialIcon name="trending_up" className="text-charcoal text-xl" />
                  </div>
                  <div>
                    <p className="font-label-sm text-charcoal font-bold">NCEA Ready</p>
                    <p className="text-[10px] text-on-surface-variant font-medium">Levels 1 to 3, plus the co-requisite</p>
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
            <h2 className="font-headline-lg text-headline-lg text-charcoal mb-4 font-bold">Understanding the New Zealand Curriculum</h2>
            <p className="font-body-md text-on-surface-variant max-w-2xl mx-auto">
              New Zealand runs one national curriculum with NCEA administered by NZQA. It is also a system in transition, and which cohort your child sits in determines whether the coming changes affect them at all.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-3xl text-center shadow-ambient hover-lift">
              <p className="font-headline-md text-royal-purple mb-2 font-bold">NZ Curriculum</p>
              <p className="font-label-md text-on-surface-variant font-medium">The national curriculum framework for Years 1 to 13</p>
            </div>
            <div className="bg-white p-8 rounded-3xl text-center shadow-ambient hover-lift">
              <p className="font-headline-md text-royal-purple mb-2 font-bold">NZQA</p>
              <p className="font-label-md text-on-surface-variant font-medium">Administers NCEA, achievement standards and Scholarship</p>
            </div>
            <div className="bg-white p-8 rounded-3xl text-center shadow-ambient hover-lift">
              <p className="font-headline-md text-royal-purple mb-2 font-bold">Co-requisite</p>
              <p className="font-label-md text-on-surface-variant font-medium">Standalone literacy and numeracy, required at every NCEA level</p>
            </div>
            <div className="bg-white p-8 rounded-3xl text-center shadow-ambient hover-lift">
              <p className="font-headline-md text-royal-purple mb-2 font-bold">UE</p>
              <p className="font-label-md text-on-surface-variant font-medium">University Entrance, requiring Level 3 credits in approved subjects</p>
            </div>
          </div>
          <p className="text-center font-body-md text-on-surface-variant max-w-3xl mx-auto mt-12">
            NCEA is being replaced in phases. Level 1 is removed in 2028 and replaced by a Foundational Award, with a new New Zealand Certificate of Education for Year 12 in 2029 and an Advanced Certificate for Year 13 in 2030. No student will switch systems partway through their schooling.
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
            <span>Every Year, Every Level</span>
          </div>
          <h2 className="font-headline-lg text-headline-lg text-charcoal mb-4 font-semibold">Tutoring Matched to Your Child&apos;s Year and Level</h2>
          <p className="text-body-lg text-on-surface-variant max-w-xl mx-auto mb-12">
            What a student needs changes completely between Year 9 and Year 13. We match tutors by year and level as well as by subject, so nobody is taught Level 3 technique when what they are actually missing is Year 10 foundations.
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
            Nationwide coverage, from Auckland and Wellington to Christchurch, Hamilton, Tauranga, Dunedin and rural Aotearoa.
          </p>
        </div>
      </section>

      {/* Subject Specialisms */}
      <section className="px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto py-24">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="font-headline-lg text-headline-lg text-charcoal mb-4 font-bold">Subject Specialisms</h2>
            <p className="font-body-md text-on-surface-variant">
              Subject specialist teachers across the full New Zealand Curriculum, from Year 1 through to Level 3 and Scholarship. Open a subject to see its tutors, the standards covered and how they are assessed.
            </p>
          </div>
          <button
            onClick={() => router.push('/new-zealand-curriculum/online-maths-tutor')}
            className="text-primary font-bold flex items-center gap-2 hover:underline cursor-pointer"
          >
            Explore all subjects
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SUBJECTS.map((subject) => (
            <div
              key={subject.slug}
              onClick={() => router.push(`/new-zealand-curriculum/${subject.slug}`)}
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
            <h2 className="font-headline-lg text-headline-lg text-charcoal mb-4 font-bold">How the New Zealand Curriculum Progresses</h2>
            <p className="font-body-md text-on-surface-variant max-w-2xl mx-auto">
              Thirteen years, with the qualification pressure concentrated in the last three. These are the stages where New Zealand students most often lose ground.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-8 rounded-3xl shadow-ambient">
              <h3 className="font-headline-md mb-3 font-bold text-charcoal">Years 1 to 6, Primary</h3>
              <p className="font-body-md text-on-surface-variant">
                Number knowledge, basic facts, measurement and reading fluency. Nothing is nationally examined, which is exactly why difficulties formed here can travel undetected for years before anyone identifies them.
              </p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-ambient">
              <h3 className="font-headline-md mb-3 font-bold text-charcoal">Years 7 and 8, Intermediate</h3>
              <p className="font-body-md text-on-surface-variant">
                Fractions, decimals, percentages and proportional reasoning, plus the social step up to a larger school. Fractions are the most common single source of later trouble, and they resurface inside Level 2 algebra.
              </p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-ambient">
              <h3 className="font-headline-md mb-3 font-bold text-charcoal">Years 9 and 10</h3>
              <p className="font-body-md text-on-surface-variant">
                Algebraic thinking, geometry and the first structured science. The most overlooked stage in the New Zealand system: no NCEA credits are at stake, so gaps open quietly and only become visible when Level 1 begins.
              </p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-ambient">
              <h3 className="font-headline-md mb-3 font-bold text-charcoal">Years 11 to 13, NCEA</h3>
              <p className="font-body-md text-on-surface-variant">
                Achievement standards assessed through internals and externals, graded Not Achieved, Achieved, Merit and Excellence, alongside the literacy and numeracy co-requisite. Level 3 credits in approved subjects determine University Entrance.
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
              Meeting an achievement standard demands more than understanding the topic behind it. Our tutors cover assessment schedule strategy, timed external practice, internal preparation, and the subject selection decisions that shape University Entrance long before Year 13.
            </p>
            <p className="font-body-md text-on-surface-variant mb-8">
              The co-requisite deserves particular attention. It sits alongside NCEA as a standalone requirement, must be met to gain the qualification at any level, and credits earned towards it cannot also count towards the 60 credits needed for NCEA itself. A student can be doing well in class and still not have met it, which catches families out every year.
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
              <li className="flex gap-3"><MaterialIcon name="check_circle" className="text-lime-green text-sm" /> NCEA Levels 1, 2 and 3, internals and externals</li>
              <li className="flex gap-3"><MaterialIcon name="check_circle" className="text-lime-green text-sm" /> The literacy and numeracy co-requisite</li>
              <li className="flex gap-3"><MaterialIcon name="check_circle" className="text-lime-green text-sm" /> University Entrance, including approved subject requirements</li>
              <li className="flex gap-3"><MaterialIcon name="check_circle" className="text-lime-green text-sm" /> NZQA Scholarship examinations</li>
              <li className="flex gap-3"><MaterialIcon name="check_circle" className="text-lime-green text-sm" /> Years 9 and 10 preparation before NCEA begins</li>
              <li className="flex gap-3"><MaterialIcon name="check_circle" className="text-lime-green text-sm" /> Subject and pathway planning for Years 11 to 13</li>
            </ul>
            <p className="font-label-md text-on-surface-variant mt-6 italic">
              NCEA requirements, standards and the qualification changes now underway are set by NZQA and the Ministry of Education, and are being revised. Check the current position with your child&apos;s school, as the changes are still rolling out.
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
              <h2 className="font-headline-lg text-headline-lg mb-8 font-bold text-white">How Math Make Smart Supports the New Zealand Curriculum</h2>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <MaterialIcon name="location_on" className="text-xl" />
                  </div>
                  <div>
                    <h3 className="font-headline-md text-body-lg mb-1 font-bold">Matched by Year and Level</h3>
                    <p className="text-on-primary-container opacity-80">
                      Tutors are assessed on the achievement standards your child is marked against, and know how Merit and Excellence are actually awarded rather than only the material itself.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <MaterialIcon name="edit_note" className="text-xl" />
                  </div>
                  <div>
                    <h3 className="font-headline-md text-body-lg mb-1 font-bold">Police Vetted, Recorded, Reviewable</h3>
                    <p className="text-on-primary-container opacity-80">
                      Every tutor is police vetted under the Children&apos;s Act before taking a student. Sessions are recorded to your account so an explanation can be replayed before an internal.
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
                      A written summary after every session and a fortnightly report showing standards achieved and topics still needing work, in the language of the curriculum.
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
                <span className="font-display-lg text-lime-green mb-2 font-bold">1â€“13</span>
                <span className="font-label-md font-medium">Years Covered</span>
              </div>
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-3xl aspect-square flex flex-col justify-center items-center text-center -mt-12">
                <span className="font-display-lg text-lime-green mb-2 font-bold">1â€“3</span>
                <span className="font-label-md font-medium">NCEA Levels</span>
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
          <h2 className="text-headline-lg font-display text-charcoal mb-4 text-center font-bold">FAQs About New Zealand Curriculum Tutoring</h2>
          <p className="font-body-md text-on-surface-variant max-w-2xl mx-auto mb-12 text-center">
            The questions New Zealand parents ask us most often about NCEA, the co-requisite, University Entrance and the coming qualification changes.
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
              Whether your child needs help in Year 9, is chasing Excellence endorsements at Level 2, or is working towards University Entrance, our New Zealand curriculum specialists are here. Book a free trial lesson today, no credit card required.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button
                onClick={() => onNavigate('trial')}
                className="bg-royal-purple text-white px-10 py-5 rounded-2xl font-headline-md font-bold hover:bg-primary transition-all shadow-lg active:scale-95 cursor-pointer"
              >
                Start Free Trial
              </button>
              <button
                onClick={() => router.push('/new-zealand-curriculum/online-maths-tutor')}
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