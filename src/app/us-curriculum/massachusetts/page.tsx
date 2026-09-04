'use client';

import React from 'react';

import { ActivePage } from '@/lib/types';
import MaterialIcon from '@/components/MaterialIcon';

interface CurriculumProps {
  onNavigate: (page: ActivePage, subjectTitle?: string) => void;
}

export default function CurriculumMA({ onNavigate }: CurriculumProps) {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 md:pt-24 pb-16 px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="z-10">
            <span className="inline-block curriculum-chip px-4 py-1.5 rounded-full font-label-sm font-bold mb-6 uppercase tracking-wider">
              Massachusetts Frameworks Specialists
            </span>
            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-charcoal mb-6 leading-tight font-bold">
              Online Tutoring for the Massachusetts Curriculum
            </h1>
            <p className="font-body-lg text-on-surface-variant mb-10 max-w-xl">
              One-to-one tutoring built around the Massachusetts Curriculum Frameworks, from kindergarten
              through AP coursework. Graduation rules in the Commonwealth changed recently, and every tutor is
              matched both to the MCAS your child still sits and to the coursework that now earns their diploma.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => onNavigate('trial')}
                className="bg-royal-purple text-white px-8 py-4 rounded-xl font-headline-md font-bold hover:bg-primary transition-all shadow-lg active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
              >
                Book a Massachusetts Tutor
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
                    alt="Massachusetts tutor" 
                  />
                </div>
                <div className="w-8 h-8 rounded-full bg-slate-300 border-2 border-white overflow-hidden">
                  <img 
                    className="w-full h-full object-cover" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCrfy2VDzuas8JI7_Nc_lgFtDUBGaKBwYUAhIgRczApCaSXYrEV2QsJp7ZilvbDIj-JTYgaf4Z5CAxWjTKeOdP-Xew7mlBfgftkQSaB9vfp9pimw1kFUFlB1TepNnR3YcFAVouYpEE--o6gzvDCCEvNFw68t44lVdXKoy3QA_oZ6BixAGA7c3G90gyMoG0SzuROLNi07G9rU3TGE0J1WjYzaadaiJZKwmlnWWKtYWAdwl2Y71XLs_Sp_A" 
                    alt="Massachusetts tutor" 
                  />
                </div>
                <div className="w-8 h-8 rounded-full bg-slate-400 border-2 border-white overflow-hidden">
                  <img 
                    className="w-full h-full object-cover" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBaEzIf4xmjrSsmMQsxn3xNvophay-XtLbJvWVo1gLfT7ENY6m9qmuYGA2_6vVdeP6_GyFYCKJ5zYsLqtnMllqrblzpeR_9pXfhLphLBz6J5Cze73zy0lWPot3wmxqmWjgaEIn-7O-mSXZt3XmjLQKc1EeXx4yO9XitwegeSlCY-RAfCSxl8lYPboqc7adxcFOMczEvH5jmafgRCaVIpdS1YJOOptHV2l5z1Muo2rPZt6_HuqUoXGRAWg" 
                    alt="Massachusetts tutor" 
                  />
                </div>
              </div>
              <span className="font-medium">Supporting families from the Berkshires to the Cape</span>
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
                    <p className="font-label-sm text-charcoal font-bold">Frameworks-Aligned</p>
                    <p className="text-[10px] text-on-surface-variant font-medium">MCAS and coursework, together</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Massachusetts Actually Tests */}
      <section className="py-24 bg-soft-gray border-y border-surface-container">
        <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="text-center mb-16">
            <h2 className="font-headline-lg text-headline-lg text-charcoal mb-4 font-bold">What Massachusetts Actually Tests</h2>
            <p className="font-body-md text-on-surface-variant max-w-2xl mx-auto">
              The Commonwealth teaches to the Massachusetts Curriculum Frameworks and assesses through MCAS.
              What changed recently is not the testing but what the results are used for, and that distinction
              matters more than most families realise.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-3xl text-center shadow-ambient hover-lift">
              <p className="font-headline-md text-royal-purple mb-2 font-bold">Frameworks</p>
              <p className="font-label-md text-on-surface-variant font-medium">ELA/Literacy, Mathematics and STE</p>
            </div>
            <div className="bg-white p-8 rounded-3xl text-center shadow-ambient hover-lift">
              <p className="font-headline-md text-royal-purple mb-2 font-bold">MCAS 3&ndash;8</p>
              <p className="font-label-md text-on-surface-variant font-medium">ELA and mathematics every year</p>
            </div>
            <div className="bg-white p-8 rounded-3xl text-center shadow-ambient hover-lift">
              <p className="font-headline-md text-royal-purple mb-2 font-bold">Science</p>
              <p className="font-label-md text-on-surface-variant font-medium">Grades 5 and 8, plus a high school STE test</p>
            </div>
            <div className="bg-white p-8 rounded-3xl text-center shadow-ambient hover-lift">
              <p className="font-headline-md text-royal-purple mb-2 font-bold">Grade 10</p>
              <p className="font-label-md text-on-surface-variant font-medium">ELA and mathematics MCAS</p>
            </div>
          </div>
          <p className="text-center font-body-md text-on-surface-variant max-w-3xl mx-auto mt-12">
            MCAS reports four achievement levels: Exceeding Expectations, Meeting Expectations, Partially
            Meeting Expectations and Not Meeting Expectations. The high school science and
            technology/engineering test is taken in a subject the student has studied, most commonly Biology or
            Introductory Physics, which is why two students in the same year group can sit different papers.
          </p>
        </div>
      </section>

      {/* The Question 2 Change */}
      <section className="px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto py-24">
        <div className="bg-surface-container-low rounded-[40px] p-10 md:p-16 border border-surface-container">
          <div className="max-w-3xl">
            <span className="inline-block curriculum-chip px-4 py-1.5 rounded-full font-label-sm font-bold mb-6 uppercase tracking-wider">
              Graduation Rules Changed
            </span>
            <h2 className="font-headline-lg text-headline-lg text-charcoal mb-6 font-bold">MCAS No Longer Decides Whether Your Child Graduates</h2>
            <p className="font-body-md text-on-surface-variant mb-6">
              In November 2024, Massachusetts voters approved Question 2 by roughly fifty-nine percent, ending
              the requirement that students pass the grade 10 MCAS in English, mathematics and science to earn a
              diploma. That requirement had stood since a 1993 law. Students still sit the MCAS, and are still
              required to take it, but the results can no longer be used to withhold a diploma.
            </p>
            <p className="font-body-md text-on-surface-variant mb-6">
              The Board of Elementary and Secondary Education adopted replacement regulations in May 2025.
              Beginning with the class of 2026, the state Competency Determination is earned through coursework:
              two years of high school English language arts; one year each of Algebra I and Geometry, or two
              years of integrated mathematics; and one year of biology, physics, chemistry, technology or
              engineering. From the class of 2027, one year of US history is added. Districts were also required
              to submit their own local Competency Determination policies to the Department of Elementary and
              Secondary Education.
            </p>
            <p className="font-body-md text-on-surface-variant">
              Two things follow from this, and both are worth understanding. First, the requirements are
              explicitly temporary while a state council examines longer-term graduation standards, so this is
              an area still in motion. Second, and more immediately: because the diploma now rests on passing
              specific courses rather than on a single test with retake opportunities in grades 11 and 12, a
              failed course has become harder to recover from than a failed exam once was. The stakes have moved
              from the test to the transcript.
            </p>
          </div>
        </div>
      </section>

      {/* Subject Specialisms */}
      <section className="px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto py-24">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="font-headline-lg text-headline-lg text-charcoal mb-4 font-bold">Subject Specialisms</h2>
            <p className="font-body-md text-on-surface-variant">
              Targeted support across every core subject, from elementary foundations through AP and dual
              enrollment coursework. Each subject links to a dedicated page with tutor profiles and topics covered.
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
            onClick={() => onNavigate('subject', 'Math')}
            className="bg-white border border-surface-variant p-8 rounded-3xl shadow-ambient hover:border-royal-purple transition-all group cursor-pointer"
          >
            <div className="w-14 h-14 bg-royal-purple/10 text-royal-purple rounded-2xl flex items-center justify-center mb-6 group-hover:bg-royal-purple group-hover:text-white transition-all">
              <MaterialIcon name="functions" className="text-3xl" />
            </div>
            <h3 className="font-headline-md mb-4 font-bold text-charcoal">Online Math Tutors</h3>
            <ul className="space-y-3 font-body-md text-on-surface-variant">
              <li className="flex items-center gap-2">
                <MaterialIcon name="check_circle" className="text-lime-green text-sm" />
                Algebra I &amp; Geometry, required for the CD
              </li>
              <li className="flex items-center gap-2">
                <MaterialIcon name="check_circle" className="text-lime-green text-sm" />
                Integrated Math 1 &amp; 2
              </li>
              <li className="flex items-center gap-2">
                <MaterialIcon name="check_circle" className="text-lime-green text-sm" />
                Grade 10 MCAS &amp; AP Calculus
              </li>
            </ul>
            <span className="mt-6 inline-flex items-center gap-1 text-primary font-bold text-sm group-hover:underline">
              View math tutoring
            </span>
          </div>

          {/* English */}
          <div 
            onClick={() => onNavigate('subject', 'English')}
            className="bg-white border border-surface-variant p-8 rounded-3xl shadow-ambient hover:border-royal-purple transition-all group cursor-pointer"
          >
            <div className="w-14 h-14 bg-royal-purple/10 text-royal-purple rounded-2xl flex items-center justify-center mb-6 group-hover:bg-royal-purple group-hover:text-white transition-all">
              <MaterialIcon name="menu_book" className="text-3xl" />
            </div>
            <h3 className="font-headline-md mb-4 font-bold text-charcoal">Online English Tutors</h3>
            <ul className="space-y-3 font-body-md text-on-surface-variant">
              <li className="flex items-center gap-2">
                <MaterialIcon name="check_circle" className="text-lime-green text-sm" />
                Two required years of high school ELA
              </li>
              <li className="flex items-center gap-2">
                <MaterialIcon name="check_circle" className="text-lime-green text-sm" />
                ELA/Literacy Framework standards
              </li>
              <li className="flex items-center gap-2">
                <MaterialIcon name="check_circle" className="text-lime-green text-sm" />
                Grade 10 MCAS essay &amp; analysis
              </li>
            </ul>
            <span className="mt-6 inline-flex items-center gap-1 text-primary font-bold text-sm group-hover:underline">
              View English tutoring
            </span>
          </div>

          {/* Science */}
          <div 
            onClick={() => onNavigate('subject', 'Science')}
            className="bg-white border border-surface-variant p-8 rounded-3xl shadow-ambient hover:border-royal-purple transition-all group cursor-pointer"
          >
            <div className="w-14 h-14 bg-royal-purple/10 text-royal-purple rounded-2xl flex items-center justify-center mb-6 group-hover:bg-royal-purple group-hover:text-white transition-all">
              <MaterialIcon name="science" className="text-3xl" />
            </div>
            <h3 className="font-headline-md mb-4 font-bold text-charcoal">Online Science Tutors</h3>
            <ul className="space-y-3 font-body-md text-on-surface-variant">
              <li className="flex items-center gap-2">
                <MaterialIcon name="check_circle" className="text-lime-green text-sm" />
                Grade 5 &amp; grade 8 science MCAS
              </li>
              <li className="flex items-center gap-2">
                <MaterialIcon name="check_circle" className="text-lime-green text-sm" />
                Science &amp; Technology/Engineering Framework
              </li>
              <li className="flex items-center gap-2">
                <MaterialIcon name="check_circle" className="text-lime-green text-sm" />
                Engineering design practices
              </li>
            </ul>
            <span className="mt-6 inline-flex items-center gap-1 text-primary font-bold text-sm group-hover:underline">
              View science tutoring
            </span>
          </div>

          {/* Physics */}
          <div 
            onClick={() => onNavigate('subject', 'Physics')}
            className="bg-white border border-surface-variant p-8 rounded-3xl shadow-ambient hover:border-royal-purple transition-all group cursor-pointer"
          >
            <div className="w-14 h-14 bg-royal-purple/10 text-royal-purple rounded-2xl flex items-center justify-center mb-6 group-hover:bg-royal-purple group-hover:text-white transition-all">
              <MaterialIcon name="rocket_launch" className="text-3xl" />
            </div>
            <h3 className="font-headline-md mb-4 font-bold text-charcoal">Online Physics Tutors</h3>
            <ul className="space-y-3 font-body-md text-on-surface-variant">
              <li className="flex items-center gap-2">
                <MaterialIcon name="check_circle" className="text-lime-green text-sm" />
                Introductory Physics MCAS
              </li>
              <li className="flex items-center gap-2">
                <MaterialIcon name="check_circle" className="text-lime-green text-sm" />
                AP Physics 1, 2 &amp; C
              </li>
              <li className="flex items-center gap-2">
                <MaterialIcon name="check_circle" className="text-lime-green text-sm" />
                Math foundations for physics
              </li>
            </ul>
            <span className="mt-6 inline-flex items-center gap-1 text-primary font-bold text-sm group-hover:underline">
              View physics tutoring
            </span>
          </div>

          {/* Chemistry */}
          <div 
            onClick={() => onNavigate('subject', 'Chemistry')}
            className="bg-white border border-surface-variant p-8 rounded-3xl shadow-ambient hover:border-royal-purple transition-all group cursor-pointer"
          >
            <div className="w-14 h-14 bg-royal-purple/10 text-royal-purple rounded-2xl flex items-center justify-center mb-6 group-hover:bg-royal-purple group-hover:text-white transition-all">
              <MaterialIcon name="experiment" className="text-3xl" />
            </div>
            <h3 className="font-headline-md mb-4 font-bold text-charcoal">Online Chemistry Tutors</h3>
            <ul className="space-y-3 font-body-md text-on-surface-variant">
              <li className="flex items-center gap-2">
                <MaterialIcon name="check_circle" className="text-lime-green text-sm" />
                Chemistry, one of the CD science options
              </li>
              <li className="flex items-center gap-2">
                <MaterialIcon name="check_circle" className="text-lime-green text-sm" />
                Stoichiometry &amp; equilibrium
              </li>
              <li className="flex items-center gap-2">
                <MaterialIcon name="check_circle" className="text-lime-green text-sm" />
                AP Chemistry
              </li>
            </ul>
            <span className="mt-6 inline-flex items-center gap-1 text-primary font-bold text-sm group-hover:underline">
              View chemistry tutoring
            </span>
          </div>

          {/* Biology */}
          <div 
            onClick={() => onNavigate('subject', 'Biology')}
            className="bg-white border border-surface-variant p-8 rounded-3xl shadow-ambient hover:border-royal-purple transition-all group cursor-pointer"
          >
            <div className="w-14 h-14 bg-royal-purple/10 text-royal-purple rounded-2xl flex items-center justify-center mb-6 group-hover:bg-royal-purple group-hover:text-white transition-all">
              <MaterialIcon name="biotech" className="text-3xl" />
            </div>
            <h3 className="font-headline-md mb-4 font-bold text-charcoal">Online Biology Tutors</h3>
            <ul className="space-y-3 font-body-md text-on-surface-variant">
              <li className="flex items-center gap-2">
                <MaterialIcon name="check_circle" className="text-lime-green text-sm" />
                Biology MCAS, the most common STE test
              </li>
              <li className="flex items-center gap-2">
                <MaterialIcon name="check_circle" className="text-lime-green text-sm" />
                Genetics, ecology &amp; evolution
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

      {/* Grade Band Progression */}
      <section className="py-24 bg-soft-gray border-y border-surface-container">
        <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="text-center mb-16">
            <h2 className="font-headline-lg text-headline-lg text-charcoal mb-4 font-bold">Where Students Need Help, Grade by Grade</h2>
            <p className="font-body-md text-on-surface-variant max-w-2xl mx-auto">
              Difficulties rarely appear where they are first noticed. These are the stages where Massachusetts
              students most often lose ground, and what tends to be behind it.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-8 rounded-3xl shadow-ambient">
              <h3 className="font-headline-md mb-3 font-bold text-charcoal">Grades K&ndash;2</h3>
              <p className="font-body-md text-on-surface-variant">
                Number sense, place value and reading fluency. No MCAS yet, which is exactly why gaps at this
                stage go unnoticed until grade 3.
              </p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-ambient">
              <h3 className="font-headline-md mb-3 font-bold text-charcoal">Grades 3&ndash;5</h3>
              <p className="font-body-md text-on-surface-variant">
                The first MCAS years. Fractions are the usual sticking point in mathematics, and grade 5 brings
                the first science test, which rewards reasoning rather than recall.
              </p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-ambient">
              <h3 className="font-headline-md mb-3 font-bold text-charcoal">Grades 6&ndash;8</h3>
              <p className="font-body-md text-on-surface-variant">
                Ratios, proportional reasoning and algebraic thinking, plus the grade 8 science MCAS. How
                securely this lands decides whether Algebra I goes well, and Algebra I is now a graduation course.
              </p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-ambient">
              <h3 className="font-headline-md mb-3 font-bold text-charcoal">Grades 9&ndash;12</h3>
              <p className="font-body-md text-on-surface-variant">
                The courses that now carry the Competency Determination, the grade 10 MCAS, and AP work.
                Because the diploma rests on course completion, a failed year here is costly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why MCAS Still Matters */}
      <section className="px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block curriculum-chip px-4 py-1.5 rounded-full font-label-sm font-bold mb-6 uppercase tracking-wider">
              Still Worth Taking Seriously
            </span>
            <h2 className="font-headline-lg text-headline-lg text-charcoal mb-6 font-bold">Why the MCAS Still Matters</h2>
            <p className="font-body-md text-on-surface-variant mb-6">
              A reasonable conclusion after Question 2 would be that the MCAS no longer counts for anything.
              That is not quite right, and acting on it can be expensive. The test is still administered, still
              required, and still used for several things that affect individual students, even though it can no
              longer stand between a student and a diploma.
            </p>
            <p className="font-body-md text-on-surface-variant mb-8">
              Results continue to inform course placement decisions, identification for academic support, and
              school and district accountability reporting. Massachusetts has also historically linked its state
              scholarship programme for public higher education to strong MCAS performance, so a good grade 10
              result can carry financial value. Confirm current criteria with your school, since this is an area
              under review, but treat the test as consequential rather than optional.
            </p>
            <button 
              onClick={() => onNavigate('subject', 'Math')}
              className="bg-royal-purple text-white px-8 py-4 rounded-xl font-headline-md font-bold hover:bg-primary transition-all shadow-lg active:scale-95 inline-flex items-center gap-2 cursor-pointer"
            >
              Explore Math Tutoring
            </button>
          </div>
          <div className="bg-surface-container-low p-10 rounded-[32px] border border-surface-container">
            <h3 className="font-headline-md mb-6 font-bold text-charcoal">The Competency Determination Coursework</h3>
            <ul className="space-y-4 font-body-md text-on-surface-variant">
              <li className="flex gap-3"><MaterialIcon name="check_circle" className="text-lime-green text-sm" /> Two years of high school English language arts</li>
              <li className="flex gap-3"><MaterialIcon name="check_circle" className="text-lime-green text-sm" /> Algebra I and Geometry, or Integrated Math 1 and 2</li>
              <li className="flex gap-3"><MaterialIcon name="check_circle" className="text-lime-green text-sm" /> One year of biology, physics, chemistry, technology or engineering</li>
              <li className="flex gap-3"><MaterialIcon name="check_circle" className="text-lime-green text-sm" /> One year of US history, from the class of 2027</li>
            </ul>
            <p className="font-label-md text-on-surface-variant mt-6 italic">
              These requirements were adopted as temporary regulations and remain under review, and each
              district also sets its own local policy. Always confirm current requirements with your school
              counselor.
            </p>
          </div>
        </div>
      </section>

      {/* Why we work for Massachusetts students */}
      <section className="py-24 bg-primary-container text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-white blur-3xl transform rotate-12"></div>
        </div>
        <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop py-margin-desktop relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-headline-lg text-headline-lg mb-8 font-bold text-white">Why Math Make Smart Works for Massachusetts Students</h2>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <MaterialIcon name="location_on" className="text-xl" />
                  </div>
                  <div>
                    <h4 className="font-headline-md text-body-lg mb-1 font-bold">Course Grades and MCAS Together</h4>
                    <p className="text-on-primary-container opacity-80">
                      Since the diploma now depends on passing specific courses while the MCAS still shapes
                      placement and scholarships, both matter. We work towards the course grade and the test as
                      one plan rather than treating them separately.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <MaterialIcon name="edit_note" className="text-xl" />
                  </div>
                  <div>
                    <h4 className="font-headline-md text-body-lg mb-1 font-bold">Framework-Specific Tutors</h4>
                    <p className="text-on-primary-container opacity-80">
                      Massachusetts teaches to its own Curriculum Frameworks, including a distinctive Science and
                      Technology/Engineering strand that has no direct equivalent in most states. Tutors are
                      assessed on those frameworks rather than on generic national material.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <MaterialIcon name="query_stats" className="text-xl" />
                  </div>
                  <div>
                    <h4 className="font-headline-md text-body-lg mb-1 font-bold">Progress You Can Read</h4>
                    <p className="text-on-primary-container opacity-80">
                      Written summaries after every session and a bi-weekly report showing which standards have
                      been mastered and which still need attention, in the language of your child&apos;s score report.
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
                <span className="font-display-lg text-lime-green mb-2 font-bold">CD</span>
                <span className="font-label-md font-medium">Coursework Supported</span>
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
      <section className="px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto py-24">
        <div className="text-center mb-16">
          <h2 className="font-headline-lg text-headline-lg text-charcoal mb-4 font-bold">Massachusetts Curriculum Questions, Answered</h2>
          <p className="font-body-md text-on-surface-variant max-w-2xl mx-auto">
            The questions Massachusetts parents ask us most often about MCAS, the frameworks and graduation.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <div className="bg-white border border-surface-variant p-8 rounded-3xl shadow-ambient">
            <h3 className="font-headline-md mb-3 font-bold text-charcoal">Does my child still have to take the MCAS?</h3>
            <p className="font-body-md text-on-surface-variant">
              Yes. Question 2 removed the MCAS as a graduation requirement, but it did not remove the test.
              Students are still required to participate, and the assessments continue in grades 3 through 8 and
              in high school. What changed is the consequence: a low grade 10 score can no longer prevent a
              student from receiving a diploma. Federal law also continues to require statewide testing in
              English, mathematics and science, so the MCAS is not going away.
            </p>
          </div>
          <div className="bg-white border border-surface-variant p-8 rounded-3xl shadow-ambient">
            <h3 className="font-headline-md mb-3 font-bold text-charcoal">So what does my child need to graduate now?</h3>
            <p className="font-body-md text-on-surface-variant">
              Coursework, plus whatever your district requires on top. From the class of 2026 the state
              Competency Determination is earned by completing two years of high school English language arts,
              Algebra I and Geometry or two years of integrated mathematics, and one year of biology, physics,
              chemistry, technology or engineering. The class of 2027 adds a year of US history. Districts set
              their own additional requirements, so your school&apos;s policy is the document that matters most.
            </p>
          </div>
          <div className="bg-white border border-surface-variant p-8 rounded-3xl shadow-ambient">
            <h3 className="font-headline-md mb-3 font-bold text-charcoal">If MCAS no longer gates the diploma, does it still matter?</h3>
            <p className="font-body-md text-on-surface-variant">
              It does, and this is the most common misreading of the change. MCAS results still inform course
              placement, identification for academic support, and school accountability. Strong grade 10
              performance has also been the basis for the John and Abigail Adams Scholarship, which provides a
              tuition credit for undergraduate study at Massachusetts state universities and community colleges.
              A student who coasts through grade 10 on the assumption that the tests no longer count may forfeit
              it. Confirm the current criteria with your school, but treating the test as irrelevant is a
              mistake with financial consequences.
            </p>
          </div>
          <div className="bg-white border border-surface-variant p-8 rounded-3xl shadow-ambient">
            <h3 className="font-headline-md mb-3 font-bold text-charcoal">Has the risk to my child gone up or down?</h3>
            <p className="font-body-md text-on-surface-variant">
              It has moved rather than disappeared, and for some students it has gone up. Under the old system a
              student who failed the grade 10 MCAS could retake it in grades 11 and 12 and still graduate on
              time. Under the new system the diploma depends on passing required courses, and a failed course
              is harder to repair than a failed test: it usually means repeating the year&apos;s work or finding
              credit recovery. Getting help during a difficult course now matters more than it did.
            </p>
          </div>
          <div className="bg-white border border-surface-variant p-8 rounded-3xl shadow-ambient md:col-span-2">
            <h3 className="font-headline-md mb-3 font-bold text-charcoal">Are these graduation rules permanent?</h3>
            <p className="font-body-md text-on-surface-variant">
              No, and it is worth knowing that. The regulations adopted in 2025 were explicitly framed as a
              first step while a state council examines longer-term graduation standards, and proposals for what
              should replace them have been contested, including by the teachers union that campaigned for
              Question 2. For families the practical advice is stable even while the policy is not: complete the
              required courses with solid grades, take the MCAS seriously for placement and scholarship
              purposes, and check your district&apos;s current policy each year rather than relying on what applied
              to an older sibling.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto pb-24">
        <div className="bg-surface-container rounded-[40px] p-12 md:p-20 text-center relative overflow-hidden shadow-sm">
          <div className="absolute top-0 right-0 w-64 h-64 bg-royal-purple/5 -translate-y-1/2 translate-x-1/2 rounded-full"></div>
          <div className="relative z-10">
            <h2 className="font-display-lg text-display-lg-mobile md:text-headline-lg text-charcoal mb-6 font-bold">
              Ready to build real confidence in the Massachusetts curriculum?
            </h2>
            <p className="font-body-lg text-on-surface-variant mb-10 max-w-2xl mx-auto">
              Start with a free assessment. We&apos;ll find out where your child actually stands against the
              Massachusetts Curriculum Frameworks and match them with a tutor who knows the courses their school runs.
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