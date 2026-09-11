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
    { title: "Online Maths Grinds", icon: "functions", slug: "online-math-tutor", cta: "View maths grinds", points: ["Junior Cycle number, algebra & geometry", "Leaving Cert Project Maths", "Higher Level and the 25-point bonus"] },
    { title: "Online English Grinds", icon: "menu_book", slug: "online-english-tutor", cta: "View English grinds", points: ["Comparative Study & studied texts", "Unseen and prescribed poetry", "Paper 1 comprehension & composition"] },
    { title: "Online Science Grinds", icon: "science", slug: "online-science-tutor", cta: "View science grinds", points: ["Junior Cycle four strands", "Classroom-Based Assessments", "Additional Assessment Components"] },
    { title: "Online Physics Grinds", icon: "rocket_launch", slug: "online-physics-tutor", cta: "View physics grinds", points: ["Mechanics, electricity & waves", "Modern physics and experiments", "Higher and Ordinary Level papers"] },
    { title: "Online Chemistry Grinds", icon: "experiment", slug: "online-chemistry-tutor", cta: "View chemistry grinds", points: ["Atomic theory & the periodic table", "Organic chemistry & volumetric analysis", "Mandatory experiments"] },
    { title: "Online Biology Grinds", icon: "biotech", slug: "online-biology-tutor", cta: "View biology grinds", points: ["Cells, genetics & human biology", "Ecology and the ecology study", "Mandatory activities & exam technique"] }
];

const REGIONS = [
    { name: "Primary : 1st to 6th Class, numeracy, literacy and the move to secondary" },
    { name: "Junior Cycle : 1st to 3rd Year, CBAs and the Junior Cycle Profile of Achievement" },
    { name: "Transition Year : keeping maths sharp before Higher Level decisions" },
    { name: "Fifth Year : where the Higher or Ordinary decision is really made" },
    { name: "Sixth Year : full Leaving Cert preparation, mocks and orals" },
    { name: "Higher Level : H1 to H8 grading and the 25-point maths bonus" },
    { name: "Ordinary Level : O1 to O8, and moving up a level where it is realistic" },
    { name: "CAO : points planning, subject choice and course requirements" }
];

const FAQS = [
    {
      q: "Do you follow the NCCA curriculum?",
      a: "Yes. Every tutor works to the NCCA specifications and the SEC marking schemes, and we match to your child&apos;s exact year, subject and level. We also ask which school they attend and what textbook is being used, so lessons line up with what is happening in class rather than running parallel to it.",
    },
    {
      q: "Should my child stay at Higher Level Maths?",
      a: "It depends on the CAO courses they are considering, but the bonus points are worth understanding before deciding. A H6 or better at Higher Level Maths carries 25 additional CAO points on top of the points for the grade, which means a H6 in Higher can outscore a strong Ordinary result. Dropping down is occasionally the right call, but it should be a decision made on the arithmetic rather than on one difficult term.",
    },
    {
      q: "What is the Additional Assessment Component and how should we prepare?",
      a: "Under Senior Cycle Redevelopment, Leaving Certificate subjects are being redeveloped in tranches, each with an Additional Assessment Component worth at least 40% of the marks and a written exam worth the remaining 60%. Biology, Chemistry and Physics were among the first group, introduced for Fifth Years in September 2025. Practically, it means preparation can no longer be back-loaded into a Sixth Year cram: coursework and practical work now carry real weight and fall due across both years.",
    },
    {
      q: "Do you cover Junior Cycle as well as Leaving Cert?",
      a: "Yes, and Junior Cycle is often where the most valuable work happens. The gaps that surface in Fifth Year Higher Level Maths almost always trace back to First and Second Year, and they are considerably easier to fix before the Leaving Cert timetable closes in. We also support Classroom-Based Assessments, which many families overlook until they are due.",
    },
    {
      q: "Can you help with Irish and subjects taught through Irish?",
      a: "Yes. We provide grinds in Gaeilge at Junior Cycle and Leaving Certificate, including oral preparation, and we support students in Gaelscoileanna and Gaeltacht schools studying maths and science through Irish. Difficulty in those settings is sometimes a language issue rather than a subject one, and working out which it is changes what the grinds should focus on.",
    },
    {
      q: "What is the difference between grinds and regular tutoring?",
      a: "In practice, very little, though grinds carry a reputation for being exam cramming and a lot of them are. The difference between a grind that lifts a grade and one that fills an hour is whether the tutor teaches the underlying idea or simply works through past papers. We do the former, then apply it to the papers.",
    },
    {
      q: "How are lessons conducted?",
      a: "Live, one-to-one, by video call, using an interactive whiteboard built for maths notation and screen sharing for working through exam papers together. Lessons are recorded to your account so your child can review a method before the mocks or the Leaving Cert itself.",
    },
    {
      q: "Is there a free trial lesson?",
      a: "Yes, with no card details required. The first session establishes where your child actually stands against the specification and what is causing the difficulty. Walk away afterwards with nothing owed and nothing to cancel.",
    }
];

export default function CurriculumIE({ onNavigate }: CurriculumProps) {
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
              Primary to Leaving Cert
            </span>
            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-charcoal mb-6 leading-tight font-bold">
              Online Tutoring for the Irish Curriculum
            </h1>
            <p className="font-body-lg text-on-surface-variant mb-10 max-w-xl">
              Expert one-to-one online grinds across the Irish curriculum in maths, science and English, from Primary right through to Leaving Cert. Every tutor knows the NCCA specifications, the SEC marking schemes and what a H1 actually demands.
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
                    alt="Irish curriculum tutor"
                  />
                </div>
                <div className="w-8 h-8 rounded-full bg-slate-300 border-2 border-white overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCrfy2VDzuas8JI7_Nc_lgFtDUBGaKBwYUAhIgRczApCaSXYrEV2QsJp7ZilvbDIj-JTYgaf4Z5CAxWjTKeOdP-Xew7mlBfgftkQSaB9vfp9pimw1kFUFlB1TepNnR3YcFAVouYpEE--o6gzvDCCEvNFw68t44lVdXKoy3QA_oZ6BixAGA7c3G90gyMoG0SzuROLNi07G9rU3TGE0J1WjYzaadaiJZKwmlnWWKtYWAdwl2Y71XLs_Sp_A"
                    alt="Irish curriculum tutor"
                  />
                </div>
                <div className="w-8 h-8 rounded-full bg-slate-400 border-2 border-white overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBaEzIf4xmjrSsmMQsxn3xNvophay-XtLbJvWVo1gLfT7ENY6m9qmuYGA2_6vVdeP6_GyFYCKJ5zYsLqtnMllqrblzpeR_9pXfhLphLBz6J5Cze73zy0lWPot3wmxqmWjgaEIn-7O-mSXZt3XmjLQKc1EeXx4yO9XitwegeSlCY-RAfCSxl8lYPboqc7adxcFOMczEvH5jmafgRCaVIpdS1YJOOptHV2l5z1Muo2rPZt6_HuqUoXGRAWg"
                    alt="Irish curriculum tutor"
                  />
                </div>
              </div>
              <span className="font-medium">Grinds for students in every county in Ireland</span>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-lime-green opacity-20 blur-[100px] rounded-full"></div>
            <div className="relative z-10 bg-white rounded-[32px] p-4 shadow-ambient">
              <div className="rounded-[24px] overflow-hidden bg-surface-container relative aspect-video">
                <img
                  alt="A student studying the Irish curriculum online with a laptop"
                  className="w-full h-full object-cover rounded-[24px] aspect-video"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDbShOGL08hxuZBe5aIC7NBDDPvIDPGbOX0ChbZ6SwDPm9FvLdz9WGVdvgQ-EYBb3ZyoQ3wNeAntcdUmlXdyroun3oKuqhGIH4MqbXlZMZVS45wv_da5cE_lK-QoPFzp4sjXP2Q9BFdz7qT7iqbWAxSJd9_3MFjCl6l-yDiwJiHhXPAWen_J7AS25n2SVfhJXpg3gWigxail5i8bTfbU3bdoCt3vGYG5zG9tBIclAgoNPtSU3-Mr0lJ1dki8WCFMGMWdQbkX9dFFgS96bk"
                />
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl flex items-center gap-4 max-w-xs animate-bounce-subtle">
                  <div className="w-10 h-10 rounded-full bg-lime-green flex items-center justify-center flex-shrink-0">
                    <MaterialIcon name="trending_up" className="text-charcoal text-xl" />
                  </div>
                  <div>
                    <p className="font-label-sm text-charcoal font-bold">NCCA Aligned</p>
                    <p className="text-[10px] text-on-surface-variant font-medium">Junior Cycle and Leaving Cert specifications</p>
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
            <h2 className="font-headline-lg text-headline-lg text-charcoal mb-4 font-bold">Understanding the Irish Curriculum</h2>
            <p className="font-body-md text-on-surface-variant max-w-2xl mx-auto">
              Ireland runs one national curriculum, set by the NCCA and examined by the State Examinations Commission. What a student needs changes completely between Second Year and Sixth Year, which is why matching by stage matters as much as matching by subject.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-3xl text-center shadow-ambient hover-lift">
              <p className="font-headline-md text-royal-purple mb-2 font-bold">NCCA</p>
              <p className="font-label-md text-on-surface-variant font-medium">Sets the Primary Curriculum, Junior Cycle and Senior Cycle specifications</p>
            </div>
            <div className="bg-white p-8 rounded-3xl text-center shadow-ambient hover-lift">
              <p className="font-headline-md text-royal-purple mb-2 font-bold">SEC</p>
              <p className="font-label-md text-on-surface-variant font-medium">Runs the Junior Cert and Leaving Cert examinations and marking schemes</p>
            </div>
            <div className="bg-white p-8 rounded-3xl text-center shadow-ambient hover-lift">
              <p className="font-headline-md text-royal-purple mb-2 font-bold">Levels</p>
              <p className="font-label-md text-on-surface-variant font-medium">Higher, Ordinary and Foundation Level across core subjects</p>
            </div>
            <div className="bg-white p-8 rounded-3xl text-center shadow-ambient hover-lift">
              <p className="font-headline-md text-royal-purple mb-2 font-bold">CAO</p>
              <p className="font-label-md text-on-surface-variant font-medium">Points calculated from Leaving Cert grades determine third-level entry</p>
            </div>
          </div>
          <p className="text-center font-body-md text-on-surface-variant max-w-3xl mx-auto mt-12">
            Senior Cycle Redevelopment is changing the picture. Leaving Certificate subjects are being redeveloped in tranches, each carrying an Additional Assessment Component worth at least 40% of the marks, with Biology, Chemistry and Physics among the first group introduced for Fifth Years in September 2025.
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
            <span>Every Stage, Every Level</span>
          </div>
          <h2 className="font-headline-lg text-headline-lg text-charcoal mb-4 font-semibold">Grinds Matched to Your Child&apos;s Stage</h2>
          <p className="text-body-lg text-on-surface-variant max-w-xl mx-auto mb-12">
            A tutor who does not know the specification is a tutor learning on your time. We match by stage as well as subject, so nobody is taught Leaving Cert technique when what they are actually missing is Junior Cycle foundations.
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
            Unsure whether Higher Level is realistic for your child? That is exactly the sort of question the free assessment lesson is meant to answer honestly.
          </p>
        </div>
      </section>

      {/* Subject Specialisms */}
      <section className="px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto py-24">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="font-headline-lg text-headline-lg text-charcoal mb-4 font-bold">Subject Specialisms</h2>
            <p className="font-body-md text-on-surface-variant">
              Subject specialist grinds across the full Irish curriculum, from Primary through to Leaving Cert Higher Level. Open any subject for tutor profiles, level options and the topics covered in full.
            </p>
          </div>
          <button
            onClick={() => router.push('/irish-curriculum/online-math-tutor')}
            className="text-primary font-bold flex items-center gap-2 hover:underline cursor-pointer"
          >
            Explore all subjects
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SUBJECTS.map((subject) => (
            <div
              key={subject.slug}
              onClick={() => router.push(`/irish-curriculum/${subject.slug}`)}
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
            <h2 className="font-headline-lg text-headline-lg text-charcoal mb-4 font-bold">How the Irish Curriculum Progresses</h2>
            <p className="font-body-md text-on-surface-variant max-w-2xl mx-auto">
              Three stages, each with a different purpose. These are the points where Irish students most often lose ground, and what usually lies behind it.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-8 rounded-3xl shadow-ambient">
              <h3 className="font-headline-md mb-3 font-bold text-charcoal">Primary, 1st to 6th Class</h3>
              <p className="font-body-md text-on-surface-variant">
                Ages six to twelve. English, Irish, Mathematics and SESE, built around foundational literacy and numeracy through hands-on learning. Nothing is state-examined here, which is exactly why gaps formed at this stage go unnoticed until secondary.
              </p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-ambient">
              <h3 className="font-headline-md mb-3 font-bold text-charcoal">Junior Cycle, 1st to 3rd Year</h3>
              <p className="font-body-md text-on-surface-variant">
                Ages twelve to fifteen, leading to the Junior Certificate. Classroom-Based Assessments run alongside the final exams. This is where the foundations for Leaving Cert maths are laid, and where the most valuable remedial work usually happens.
              </p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-ambient">
              <h3 className="font-headline-md mb-3 font-bold text-charcoal">Transition Year</h3>
              <p className="font-body-md text-on-surface-variant">
                An optional year with no formal examination, which cuts both ways. Students who keep maths ticking over return to Fifth Year ready; students who put it down entirely often find Higher Level a struggle in September, having lost a year of fluency.
              </p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-ambient">
              <h3 className="font-headline-md mb-3 font-bold text-charcoal">Senior Cycle, 5th and 6th Year</h3>
              <p className="font-body-md text-on-surface-variant">
                The Leaving Certificate. Six or seven subjects, most offered at Ordinary and Higher Level, with coursework and Additional Assessment Components now carrying real weight. CAO points from these results determine third-level entry.
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
              Understanding a topic and answering an SEC paper well are not the same competence. Our tutors work through SEC marking schemes, timed papers, orals and practicals, alongside the coursework components that now carry a substantial share of the final grade.
            </p>
            <p className="font-body-md text-on-surface-variant mb-8">
              The Higher Level Maths decision deserves particular thought. Students who sit Higher Level and achieve a H6 or better receive 25 additional CAO points on top of the points for the grade itself, which means a H6 can be worth more than a strong Ordinary Level result. Dropping down is sometimes right, but it should be decided on the numbers rather than on one bad Christmas test.
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
              <li className="flex gap-3"><MaterialIcon name="check_circle" className="text-lime-green text-sm" /> Junior Certificate across Maths, Science, English and Irish</li>
              <li className="flex gap-3"><MaterialIcon name="check_circle" className="text-lime-green text-sm" /> Leaving Certificate at Higher, Ordinary and Foundation Level</li>
              <li className="flex gap-3"><MaterialIcon name="check_circle" className="text-lime-green text-sm" /> Higher Level Maths, including the 25-point CAO bonus</li>
              <li className="flex gap-3"><MaterialIcon name="check_circle" className="text-lime-green text-sm" /> Classroom-Based Assessments and Additional Assessment Components</li>
              <li className="flex gap-3"><MaterialIcon name="check_circle" className="text-lime-green text-sm" /> Oral Irish and Leaving Cert oral components</li>
              <li className="flex gap-3"><MaterialIcon name="check_circle" className="text-lime-green text-sm" /> Mock exams and CAO subject planning</li>
            </ul>
            <p className="font-label-md text-on-surface-variant mt-6 italic">
              Specifications, levels and CAO requirements are set by the NCCA, the SEC and the CAO, and are periodically revised. Confirm anything level-related with your child&apos;s school before acting on it.
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
              <h2 className="font-headline-lg text-headline-lg mb-8 font-bold text-white">How Math Make Smart Supports the Irish Curriculum</h2>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <MaterialIcon name="location_on" className="text-xl" />
                  </div>
                  <div>
                    <h3 className="font-headline-md text-body-lg mb-1 font-bold">Specification, Not Just Subject</h3>
                    <p className="text-on-primary-container opacity-80">
                      Tutors are assessed on the SEC specification your child is examined against, at Higher, Ordinary or Foundation Level. They know the marking scheme, not just the material.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <MaterialIcon name="edit_note" className="text-xl" />
                  </div>
                  <div>
                    <h3 className="font-headline-md text-body-lg mb-1 font-bold">Garda Vetted, Recorded, Reviewable</h3>
                    <p className="text-on-primary-container opacity-80">
                      Every tutor is Garda vetted before taking a student. Sessions are recorded to your account so your child can replay an explanation the night before a mock.
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
                      A written summary after every session and a fortnightly report showing topics mastered and topics still needing work, in the language of the specification.
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
                <span className="font-display-lg text-lime-green mb-2 font-bold">1stâ€“6th</span>
                <span className="font-label-md font-medium">Year Coverage</span>
              </div>
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-3xl aspect-square flex flex-col justify-center items-center text-center -mt-12">
                <span className="font-display-lg text-lime-green mb-2 font-bold">25</span>
                <span className="font-label-md font-medium">Bonus Points Explained</span>
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
          <h2 className="text-headline-lg font-display text-charcoal mb-4 text-center font-bold">FAQs About Irish Curriculum Grinds</h2>
          <p className="font-body-md text-on-surface-variant max-w-2xl mx-auto mb-12 text-center">
            The questions Irish parents ask us most often about levels, CAO points, the AAC and getting started.
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
              Whether your child needs Junior Cert preparation, Leaving Cert Higher Level grinds, or steady help with homework and coursework, our Irish curriculum specialists are here. Book a free trial lesson today, no credit card required.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button
                onClick={() => onNavigate('trial')}
                className="bg-royal-purple text-white px-10 py-5 rounded-2xl font-headline-md font-bold hover:bg-primary transition-all shadow-lg active:scale-95 cursor-pointer"
              >
                Start Free Trial
              </button>
              <button
                onClick={() => router.push('/irish-curriculum/online-math-tutor')}
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