'use client';

import React from 'react';

import { ActivePage } from '@/lib/types';
import MaterialIcon from '@/components/MaterialIcon';

interface CurriculumProps {
  onNavigate: (page: ActivePage, subjectTitle?: string) => void;
}

export default function CurriculumNY({ onNavigate }: CurriculumProps) {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 md:pt-24 pb-16 px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="z-10">
            <span className="inline-block curriculum-chip px-4 py-1.5 rounded-full font-label-sm font-bold mb-6 uppercase tracking-wider">
              Regents Specialists
            </span>
            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-charcoal mb-6 leading-tight font-bold">
              Online Tutoring for the New York Curriculum
            </h1>
            <p className="font-body-lg text-on-surface-variant mb-10 max-w-xl">
              One-to-one tutoring built around New York&apos;s Next Generation Learning Standards, from
              elementary through AP coursework. Every tutor is matched to the Regents examination your child will
              actually sit, including the newly redesigned science exams.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => onNavigate('trial')}
                className="bg-royal-purple text-white px-8 py-4 rounded-xl font-headline-md font-bold hover:bg-primary transition-all shadow-lg active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
              >
                Book a New York Tutor
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
                    alt="New York tutor" 
                  />
                </div>
                <div className="w-8 h-8 rounded-full bg-slate-300 border-2 border-white overflow-hidden">
                  <img 
                    className="w-full h-full object-cover" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCrfy2VDzuas8JI7_Nc_lgFtDUBGaKBwYUAhIgRczApCaSXYrEV2QsJp7ZilvbDIj-JTYgaf4Z5CAxWjTKeOdP-Xew7mlBfgftkQSaB9vfp9pimw1kFUFlB1TepNnR3YcFAVouYpEE--o6gzvDCCEvNFw68t44lVdXKoy3QA_oZ6BixAGA7c3G90gyMoG0SzuROLNi07G9rU3TGE0J1WjYzaadaiJZKwmlnWWKtYWAdwl2Y71XLs_Sp_A" 
                    alt="New York tutor" 
                  />
                </div>
                <div className="w-8 h-8 rounded-full bg-slate-400 border-2 border-white overflow-hidden">
                  <img 
                    className="w-full h-full object-cover" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBaEzIf4xmjrSsmMQsxn3xNvophay-XtLbJvWVo1gLfT7ENY6m9qmuYGA2_6vVdeP6_GyFYCKJ5zYsLqtnMllqrblzpeR_9pXfhLphLBz6J5Cze73zy0lWPot3wmxqmWjgaEIn-7O-mSXZt3XmjLQKc1EeXx4yO9XitwegeSlCY-RAfCSxl8lYPboqc7adxcFOMczEvH5jmafgRCaVIpdS1YJOOptHV2l5z1Muo2rPZt6_HuqUoXGRAWg" 
                    alt="New York tutor" 
                  />
                </div>
              </div>
              <span className="font-medium">Supporting families from Buffalo to Brooklyn</span>
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
                    <p className="font-label-sm text-charcoal font-bold">Regents-Ready</p>
                    <p className="text-[10px] text-on-surface-variant font-medium">Next Generation Standards in every lesson</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What New York Actually Tests */}
      <section className="py-24 bg-soft-gray border-y border-surface-container">
        <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="text-center mb-16">
            <h2 className="font-headline-lg text-headline-lg text-charcoal mb-4 font-bold">What New York Actually Tests</h2>
            <p className="font-body-md text-on-surface-variant max-w-2xl mx-auto">
              New York runs state assessments in grades 3&ndash;8 and Regents examinations in high school.
              The Regents are course-specific rather than grade-specific, which changes how preparation should work.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-3xl text-center shadow-ambient hover-lift">
              <p className="font-headline-md text-royal-purple mb-2 font-bold">Next Gen</p>
              <p className="font-label-md text-on-surface-variant font-medium">Next Generation Learning Standards, ELA &amp; math</p>
            </div>
            <div className="bg-white p-8 rounded-3xl text-center shadow-ambient hover-lift">
              <p className="font-headline-md text-royal-purple mb-2 font-bold">Grades 3&ndash;8</p>
              <p className="font-label-md text-on-surface-variant font-medium">Annual ELA and mathematics assessments</p>
            </div>
            <div className="bg-white p-8 rounded-3xl text-center shadow-ambient hover-lift">
              <p className="font-headline-md text-royal-purple mb-2 font-bold">Regents</p>
              <p className="font-label-md text-on-surface-variant font-medium">Math, ELA, science and social studies exams</p>
            </div>
            <div className="bg-white p-8 rounded-3xl text-center shadow-ambient hover-lift">
              <p className="font-headline-md text-royal-purple mb-2 font-bold">NYSSLS</p>
              <p className="font-label-md text-on-surface-variant font-medium">NY State P-12 Science Learning Standards</p>
            </div>
          </div>
          <p className="text-center font-body-md text-on-surface-variant max-w-3xl mx-auto mt-12">
            A Regents examination is tied to a course, not a school year, so a student sits Algebra I whenever
            they take Algebra I, whether that is grade 8 or grade 9. Scores run to 100, with 65 the conventional
            passing threshold and 85 generally treated as the mastery mark for distinctions and scholarship
            consideration.
          </p>
        </div>
      </section>

      {/* The Science Regents Redesign */}
      <section className="px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto py-24">
        <div className="bg-surface-container-low rounded-[40px] p-10 md:p-16 border border-surface-container">
          <div className="max-w-3xl">
            <span className="inline-block curriculum-chip px-4 py-1.5 rounded-full font-label-sm font-bold mb-6 uppercase tracking-wider">
              Recently Changed
            </span>
            <h2 className="font-headline-lg text-headline-lg text-charcoal mb-6 font-bold">The Science Regents Have Been Rewritten</h2>
            <p className="font-body-md text-on-surface-variant mb-6">
              New York has replaced its science Regents examinations with new exams aligned to the New York State
              P-12 Science Learning Standards. Earth and Space Sciences and Life Science: Biology were first
              administered in June 2025. Physical Science: Chemistry and Physical Science: Physics were first
              administered in June 2026. These replace the long-running Living Environment and Physical Setting
              examinations.
            </p>
            <p className="font-body-md text-on-surface-variant mb-6">
              This is not a cosmetic renaming. The NYSSLS are an adaptation of the Next Generation Science
              Standards, which assess science differently: students are asked to interpret unfamiliar phenomena,
              analyse data and construct explanations, rather than recall content. The new exams also carry
              required laboratory investigations. A student who prepares by memorising the old reference tables
              and drilling past Physical Setting papers will be well prepared for an exam that no longer exists.
            </p>
            <p className="font-body-md text-on-surface-variant">
              Because the transition included an overlap period so that students could sit the exam matching the
              instruction they received, it is worth confirming with your child&apos;s school which version applies
              to them. We match tutors to the specific examination your child is entered for.
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
              Targeted support across every core subject, from elementary foundations through AP and college-level
              coursework. Each subject links to a dedicated page with tutor profiles and topics covered.
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
                Algebra I, Geometry &amp; Algebra II Regents
              </li>
              <li className="flex items-center gap-2">
                <MaterialIcon name="check_circle" className="text-lime-green text-sm" />
                Grades 3&ndash;8 state assessments
              </li>
              <li className="flex items-center gap-2">
                <MaterialIcon name="check_circle" className="text-lime-green text-sm" />
                Precalculus &amp; AP Calculus
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
                ELA Regents examination
              </li>
              <li className="flex items-center gap-2">
                <MaterialIcon name="check_circle" className="text-lime-green text-sm" />
                Argument &amp; text-analysis essays
              </li>
              <li className="flex items-center gap-2">
                <MaterialIcon name="check_circle" className="text-lime-green text-sm" />
                Next Generation ELA Standards
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
                Earth &amp; Space Sciences Regents
              </li>
              <li className="flex items-center gap-2">
                <MaterialIcon name="check_circle" className="text-lime-green text-sm" />
                NYSSLS phenomena-based questions
              </li>
              <li className="flex items-center gap-2">
                <MaterialIcon name="check_circle" className="text-lime-green text-sm" />
                Required lab investigations
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
                Physical Science: Physics Regents
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
                Physical Science: Chemistry Regents
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
                Life Science: Biology Regents
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
              Difficulties rarely appear where they are first noticed. These are the stages where New York
              students most often lose ground, and what tends to be behind it.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-8 rounded-3xl shadow-ambient">
              <h3 className="font-headline-md mb-3 font-bold text-charcoal">Grades K&ndash;2</h3>
              <p className="font-body-md text-on-surface-variant">
                Number sense, place value and reading fluency. Nothing is formally tested yet, which is exactly
                why gaps at this stage go unnoticed until the grade 3 assessments begin.
              </p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-ambient">
              <h3 className="font-headline-md mb-3 font-bold text-charcoal">Grades 3&ndash;5</h3>
              <p className="font-body-md text-on-surface-variant">
                The first years of state ELA and mathematics assessments. Fractions are the usual sticking point,
                and the shift from decoding words to analysing texts is the one in ELA.
              </p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-ambient">
              <h3 className="font-headline-md mb-3 font-bold text-charcoal">Grades 6&ndash;8</h3>
              <p className="font-body-md text-on-surface-variant">
                Ratios, proportional reasoning and algebraic thinking. This determines whether a student takes
                Algebra I in grade 8, which is the point at which Regents examinations begin for many students.
              </p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-ambient">
              <h3 className="font-headline-md mb-3 font-bold text-charcoal">Grades 9&ndash;12</h3>
              <p className="font-body-md text-on-surface-variant">
                The Regents sequence, diploma type decisions, and the 85-plus scores that matter for distinctions
                and scholarships. Earlier gaps become expensive here.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Diplomas */}
      <section className="px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block curriculum-chip px-4 py-1.5 rounded-full font-label-sm font-bold mb-6 uppercase tracking-wider">
              Diploma Pathway
            </span>
            <h2 className="font-headline-lg text-headline-lg text-charcoal mb-6 font-bold">Local, Regents and Advanced Regents</h2>
            <p className="font-body-md text-on-surface-variant mb-6">
              New York issues more than one kind of diploma, and the difference is decided by Regents
              performance. The Advanced Regents diploma requires a broader set of examinations, typically
              including three mathematics Regents and two sciences plus a language requirement. It is the
              recognised marker of a full college-preparatory programme.
            </p>
            <p className="font-body-md text-on-surface-variant mb-8">
              Mathematics is usually the deciding subject. A student who struggles through Algebra II often
              steps back from the Advanced Regents pathway, and that decision is made quietly in grade 10 or 11
              rather than deliberately. It is the single place where tutoring most often changes which diploma a
              New York student leaves with.
            </p>
            <button 
              onClick={() => onNavigate('subject', 'Math')}
              className="bg-royal-purple text-white px-8 py-4 rounded-xl font-headline-md font-bold hover:bg-primary transition-all shadow-lg active:scale-95 inline-flex items-center gap-2 cursor-pointer"
            >
              Explore Math Tutoring
            </button>
          </div>
          <div className="bg-surface-container-low p-10 rounded-[32px] border border-surface-container">
            <h3 className="font-headline-md mb-6 font-bold text-charcoal">Common Regents Examinations</h3>
            <ul className="space-y-4 font-body-md text-on-surface-variant">
              <li className="flex gap-3"><MaterialIcon name="check_circle" className="text-lime-green text-sm" /> Algebra I, Geometry, Algebra II</li>
              <li className="flex gap-3"><MaterialIcon name="check_circle" className="text-lime-green text-sm" /> English Language Arts</li>
              <li className="flex gap-3"><MaterialIcon name="check_circle" className="text-lime-green text-sm" /> Life Science: Biology</li>
              <li className="flex gap-3"><MaterialIcon name="check_circle" className="text-lime-green text-sm" /> Earth and Space Sciences</li>
              <li className="flex gap-3"><MaterialIcon name="check_circle" className="text-lime-green text-sm" /> Chemistry and Physics</li>
              <li className="flex gap-3"><MaterialIcon name="check_circle" className="text-lime-green text-sm" /> Global History and US History</li>
            </ul>
            <p className="font-label-md text-on-surface-variant mt-6 italic">
              Diploma and assessment requirements are set by the New York State Education Department and the
              Board of Regents, and are currently under revision. Always confirm current requirements with your
              school counselor.
            </p>
          </div>
        </div>
      </section>

      {/* Why we work for New York students */}
      <section className="py-24 bg-primary-container text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-white blur-3xl transform rotate-12"></div>
        </div>
        <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop py-margin-desktop relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-headline-lg text-headline-lg mb-8 font-bold text-white">Why Math Make Smart Works for New York Students</h2>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <MaterialIcon name="location_on" className="text-xl" />
                  </div>
                  <div>
                    <h4 className="font-headline-md text-body-lg mb-1 font-bold">Matched to the Right Exam</h4>
                    <p className="text-on-primary-container opacity-80">
                      With the science Regents newly rewritten, the exam a student sits depends on when they took
                      the course. Tutors are matched to the specific examination your child is entered for, not to
                      a generic subject.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <MaterialIcon name="edit_note" className="text-xl" />
                  </div>
                  <div>
                    <h4 className="font-headline-md text-body-lg mb-1 font-bold">Rubrics, Not Just Content</h4>
                    <p className="text-on-primary-container opacity-80">
                      Regents scoring rewards method and explanation, and constructed-response questions carry
                      partial credit. We teach students how marks are actually awarded, which is often worth more
                      than additional content review.
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
                      been mastered and which still need attention, in the language of the Regents syllabus.
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
                <span className="font-display-lg text-lime-green mb-2 font-bold">New</span>
                <span className="font-label-md font-medium">Science Regents Ready</span>
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
          <h2 className="font-headline-lg text-headline-lg text-charcoal mb-4 font-bold">New York Curriculum Questions, Answered</h2>
          <p className="font-body-md text-on-surface-variant max-w-2xl mx-auto">
            The questions New York parents ask us most often about the Regents, standards and diplomas.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <div className="bg-white border border-surface-variant p-8 rounded-3xl shadow-ambient">
            <h3 className="font-headline-md mb-3 font-bold text-charcoal">Are the Regents exams being phased out?</h3>
            <p className="font-body-md text-on-surface-variant">
              The requirement to pass them in order to graduate is changing, but the exams themselves are not
              simply disappearing. New York is moving toward a broader set of ways for students to demonstrate
              readiness, and the graduating class of 2027 is expected to be the last cohort required to pass
              Regents examinations to earn a diploma. The exams are still being administered, and federal law
              still requires testing in mathematics, English and science. In practice, a student in high school
              now should prepare exactly as before, and the change matters most for families with children
              currently in middle school.
            </p>
          </div>
          <div className="bg-white border border-surface-variant p-8 rounded-3xl shadow-ambient">
            <h3 className="font-headline-md mb-3 font-bold text-charcoal">Why is my child sitting a different science Regents than their older sibling did?</h3>
            <p className="font-body-md text-on-surface-variant">
              Because the exams were replaced. Earth and Space Sciences and Life Science: Biology were first
              administered in June 2025, and Physical Science: Chemistry and Physical Science: Physics in June
              2026, all aligned to the New York State P-12 Science Learning Standards. They take the place of
              Living Environment and the Physical Setting examinations. Past papers from the old exams are of
              limited use, because the question style has changed rather than just the content.
            </p>
          </div>
          <div className="bg-white border border-surface-variant p-8 rounded-3xl shadow-ambient">
            <h3 className="font-headline-md mb-3 font-bold text-charcoal">What score should we actually be aiming for?</h3>
            <p className="font-body-md text-on-surface-variant">
              Sixty-five is the conventional passing mark, but 85 is the number worth planning around. It is
              widely treated as the mastery threshold and carries weight for diploma distinctions and
              scholarship consideration. The gap between a 78 and an 85 is usually a small number of
              constructed-response marks rather than a large body of missing knowledge, which makes it one of
              the most achievable targets in the whole system.
            </p>
          </div>
          <div className="bg-white border border-surface-variant p-8 rounded-3xl shadow-ambient">
            <h3 className="font-headline-md mb-3 font-bold text-charcoal">Should my child take Algebra I in grade 8?</h3>
            <p className="font-body-md text-on-surface-variant">
              Only if the grade 6&ndash;8 material is genuinely secure, because in New York this decision means
              sitting a Regents examination a year early. Accelerating a student who has not consolidated ratios
              and proportional reasoning tends to produce a weak Algebra I result that then sits on their record.
              Taking Algebra I in grade 9 still leaves a full pathway to Algebra II, Precalculus and Calculus.
            </p>
          </div>
          <div className="bg-white border border-surface-variant p-8 rounded-3xl shadow-ambient md:col-span-2">
            <h3 className="font-headline-md mb-3 font-bold text-charcoal">Does New York still teach Common Core?</h3>
            <p className="font-body-md text-on-surface-variant">
              Not under that name. New York revised its standards and adopted the Next Generation Learning
              Standards for English language arts and mathematics, which are now what state assessments are
              built on. Science follows the New York State P-12 Science Learning Standards, an adaptation of the
              Next Generation Science Standards. The practical consequence is the same one that applies across
              the country: national tutoring materials sequence topics differently, so tutors need to be matched
              to New York&apos;s standards and to the specific Regents examination a student is entered for.
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
              Ready to build real confidence in the New York curriculum?
            </h2>
            <p className="font-body-lg text-on-surface-variant mb-10 max-w-2xl mx-auto">
              Start with a free assessment. We&apos;ll find out where your child actually stands against the
              Next Generation Learning Standards and match them with a tutor who knows the exact Regents
              examination they are preparing for.
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