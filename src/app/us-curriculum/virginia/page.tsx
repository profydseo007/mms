'use client';

import React from 'react';

import { ActivePage } from '@/lib/types';
import MaterialIcon from '@/components/MaterialIcon';

interface CurriculumProps {
  onNavigate: (page: ActivePage, subjectTitle?: string) => void;
}

export default function CurriculumVA({ onNavigate }: CurriculumProps) {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 md:pt-24 pb-16 px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="z-10">
            <span className="inline-block curriculum-chip px-4 py-1.5 rounded-full font-label-sm font-bold mb-6 uppercase tracking-wider">
              SOL Specialists
            </span>
            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-charcoal mb-6 leading-tight font-bold">
              Online Tutoring for the Virginia Curriculum
            </h1>
            <p className="font-body-lg text-on-surface-variant mb-10 max-w-xl">
              One-to-one tutoring built around the Virginia Standards of Learning, from kindergarten through AP
              coursework. Virginia writes its own standards and revised its mathematics SOL in 2023, so every
              tutor is matched to the current standards your child is actually taught and tested on.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => onNavigate('trial')}
                className="bg-royal-purple text-white px-8 py-4 rounded-xl font-headline-md font-bold hover:bg-primary transition-all shadow-lg active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
              >
                Book a Virginia Tutor
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
                    alt="Virginia tutor" 
                  />
                </div>
                <div className="w-8 h-8 rounded-full bg-slate-300 border-2 border-white overflow-hidden">
                  <img 
                    className="w-full h-full object-cover" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCrfy2VDzuas8JI7_Nc_lgFtDUBGaKBwYUAhIgRczApCaSXYrEV2QsJp7ZilvbDIj-JTYgaf4Z5CAxWjTKeOdP-Xew7mlBfgftkQSaB9vfp9pimw1kFUFlB1TepNnR3YcFAVouYpEE--o6gzvDCCEvNFw68t44lVdXKoy3QA_oZ6BixAGA7c3G90gyMoG0SzuROLNi07G9rU3TGE0J1WjYzaadaiJZKwmlnWWKtYWAdwl2Y71XLs_Sp_A" 
                    alt="Virginia tutor" 
                  />
                </div>
                <div className="w-8 h-8 rounded-full bg-slate-400 border-2 border-white overflow-hidden">
                  <img 
                    className="w-full h-full object-cover" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBaEzIf4xmjrSsmMQsxn3xNvophay-XtLbJvWVo1gLfT7ENY6m9qmuYGA2_6vVdeP6_GyFYCKJ5zYsLqtnMllqrblzpeR_9pXfhLphLBz6J5Cze73zy0lWPot3wmxqmWjgaEIn-7O-mSXZt3XmjLQKc1EeXx4yO9XitwegeSlCY-RAfCSxl8lYPboqc7adxcFOMczEvH5jmafgRCaVIpdS1YJOOptHV2l5z1Muo2rPZt6_HuqUoXGRAWg" 
                    alt="Virginia tutor" 
                  />
                </div>
              </div>
              <span className="font-medium">Supporting families from Arlington to Virginia Beach</span>
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
                    <p className="font-label-sm text-charcoal font-bold">SOL-Aligned</p>
                    <p className="text-[10px] text-on-surface-variant font-medium">2023 Mathematics standards in every lesson</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Virginia Actually Tests */}
      <section className="py-24 bg-soft-gray border-y border-surface-container">
        <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="text-center mb-16">
            <h2 className="font-headline-lg text-headline-lg text-charcoal mb-4 font-bold">What Virginia Actually Tests</h2>
            <p className="font-body-md text-on-surface-variant max-w-2xl mx-auto">
              Virginia assesses through the Standards of Learning, with SOL tests in the elementary and middle
              grades and end-of-course tests in high school. The high school tests carry weight beyond the
              report card, because they earn verified credits.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-3xl text-center shadow-ambient hover-lift">
              <p className="font-headline-md text-royal-purple mb-2 font-bold">SOL</p>
              <p className="font-label-md text-on-surface-variant font-medium">Virginia Standards of Learning, K&ndash;12</p>
            </div>
            <div className="bg-white p-8 rounded-3xl text-center shadow-ambient hover-lift">
              <p className="font-headline-md text-royal-purple mb-2 font-bold">Grades 3&ndash;8</p>
              <p className="font-label-md text-on-surface-variant font-medium">Reading &amp; mathematics, plus science and history</p>
            </div>
            <div className="bg-white p-8 rounded-3xl text-center shadow-ambient hover-lift">
              <p className="font-headline-md text-royal-purple mb-2 font-bold">EOC Tests</p>
              <p className="font-label-md text-on-surface-variant font-medium">Algebra I, Geometry, Algebra II, Biology and more</p>
            </div>
            <div className="bg-white p-8 rounded-3xl text-center shadow-ambient hover-lift">
              <p className="font-headline-md text-royal-purple mb-2 font-bold">Growth</p>
              <p className="font-label-md text-on-surface-variant font-medium">Fall and winter Growth Assessments, grades 3&ndash;8</p>
            </div>
          </div>
          <p className="text-center font-body-md text-on-surface-variant max-w-3xl mx-auto mt-12">
            Virginia also runs Growth Assessments in the autumn and winter for reading and mathematics in grades
            3&ndash;8. These are diagnostic rather than accountability measures, which makes them the most
            useful early warning a parent gets. A weak autumn Growth Assessment is a signal to act, not a
            result to worry about.
          </p>
        </div>
      </section>

      {/* The Cut Score Change */}
      <section className="px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto py-24">
        <div className="bg-surface-container-low rounded-[40px] p-10 md:p-16 border border-surface-container">
          <div className="max-w-3xl">
            <span className="inline-block curriculum-chip px-4 py-1.5 rounded-full font-label-sm font-bold mb-6 uppercase tracking-wider">
              Changing From 2026&ndash;27
            </span>
            <h2 className="font-headline-lg text-headline-lg text-charcoal mb-6 font-bold">Why SOL Scores Are About to Look Different</h2>
            <p className="font-body-md text-on-surface-variant mb-6">
              Virginia rewrote its standards. The 2023 Mathematics Standards of Learning were approved in August
              2023 and fully implemented in 2024&ndash;25, and the 2024 English Standards of Learning followed.
              The first SOL tests aligned to those new standards were administered in spring 2025.
            </p>
            <p className="font-body-md text-on-surface-variant mb-6">
              The cut scores are now catching up. The thresholds in place through the 2025&ndash;26 school year,
              under which a scaled score of 400 was the pass/proficient mark, were set against the older 2016
              mathematics and 2017 English standards. Following a standard-setting process in 2025, the Board of
              Education is phasing in higher cut scores beginning in the 2026&ndash;27 school year, with the aim of
              aligning Virginia&apos;s definition of proficiency more closely with the &ldquo;proficient&rdquo; level on the
              National Assessment of Educational Progress rather than the lower &ldquo;basic&rdquo; level most states use.
            </p>
            <p className="font-body-md text-on-surface-variant">
              The consequence deserves stating plainly, because it will worry a great many families next year: a
              student can perform exactly as well as the year before and still see a lower reported performance
              level. The bar is moving, not the child. What it does mean is that students who cleared the old
              threshold comfortably may sit closer to the new one, so it is worth knowing where your child
              actually stands rather than relying on last year&apos;s label.
            </p>
          </div>
        </div>
      </section>

      {/* Verified Credits */}
      <section className="px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto py-24">
        <div className="bg-surface-container-low rounded-[40px] p-10 md:p-16 border border-surface-container">
          <div className="max-w-3xl">
            <span className="inline-block curriculum-chip px-4 py-1.5 rounded-full font-label-sm font-bold mb-6 uppercase tracking-wider">
              Virginia&apos;s Distinctive Rule
            </span>
            <h2 className="font-headline-lg text-headline-lg text-charcoal mb-6 font-bold">Verified Credits: Passing the Class Is Not Enough</h2>
            <p className="font-body-md text-on-surface-variant mb-6">
              This is the part of the Virginia system that surprises families moving in from other states. To
              graduate, students need standard credits, earned by passing the course, and a set number of
              verified credits, earned by passing the course <em>and</em> the associated SOL end-of-course test.
              A student can pass Algebra I with a comfortable grade and still not hold the verified credit if
              the SOL test does not go their way.
            </p>
            <p className="font-body-md text-on-surface-variant mb-6">
              The practical consequence is that the SOL end-of-course test is not a formality to be revised for
              in the final fortnight. It is a graduation requirement in its own right, and it is assessed against
              the full year of content rather than the most recent unit.
            </p>
            <p className="font-body-md text-on-surface-variant">
              Algebra I is the one that matters most, because it is the mathematics verified credit most students
              rely on, and because the 2023 standards raised the level of rigour in that course specifically.
              Students who do not pass can retake the test, but retakes cost time in a year that is already full.
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
                Algebra I, Geometry &amp; Algebra II SOL
              </li>
              <li className="flex items-center gap-2">
                <MaterialIcon name="check_circle" className="text-lime-green text-sm" />
                2023 Mathematics SOL, grades 3&ndash;8
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
                End-of-course Reading &amp; Writing SOL
              </li>
              <li className="flex items-center gap-2">
                <MaterialIcon name="check_circle" className="text-lime-green text-sm" />
                Grades 3&ndash;8 reading assessments
              </li>
              <li className="flex items-center gap-2">
                <MaterialIcon name="check_circle" className="text-lime-green text-sm" />
                Short paper &amp; extended writing
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
                Grades 5 &amp; 8 Science SOL
              </li>
              <li className="flex items-center gap-2">
                <MaterialIcon name="check_circle" className="text-lime-green text-sm" />
                Earth Science SOL
              </li>
              <li className="flex items-center gap-2">
                <MaterialIcon name="check_circle" className="text-lime-green text-sm" />
                Scientific investigation &amp; reasoning
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
                Physics &amp; Physics Honors
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
                Chemistry SOL &amp; Chemistry Honors
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
                Biology SOL &mdash; a verified credit option
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
              Difficulties rarely appear where they are first noticed. These are the stages where Virginia
              students most often lose ground, and what tends to be behind it.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-8 rounded-3xl shadow-ambient">
              <h3 className="font-headline-md mb-3 font-bold text-charcoal">Grades K&ndash;2</h3>
              <p className="font-body-md text-on-surface-variant">
                Number sense, place value and reading fluency. Virginia schools keep mathematics achievement
                records in these years precisely because what happens here shapes the grade 3 SOL result.
              </p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-ambient">
              <h3 className="font-headline-md mb-3 font-bold text-charcoal">Grades 3&ndash;5</h3>
              <p className="font-body-md text-on-surface-variant">
                The first SOL years, plus autumn and winter Growth Assessments. Fractions are the usual sticking
                point in mathematics, and grade 5 brings the first science SOL.
              </p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-ambient">
              <h3 className="font-headline-md mb-3 font-bold text-charcoal">Grades 6&ndash;8</h3>
              <p className="font-body-md text-on-surface-variant">
                Ratios, proportional reasoning and algebraic thinking. This is also where strong SOL mathematics
                performance can open an advanced pathway, and where a weak result quietly closes one.
              </p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-ambient">
              <h3 className="font-headline-md mb-3 font-bold text-charcoal">Grades 9&ndash;12</h3>
              <p className="font-body-md text-on-surface-variant">
                End-of-course SOL tests, verified credits, and the Standard versus Advanced Studies diploma
                decision. Earlier gaps become expensive here, because a failed EOC costs a retake as well as a grade.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Diplomas & Advanced Math */}
      <section className="px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block curriculum-chip px-4 py-1.5 rounded-full font-label-sm font-bold mb-6 uppercase tracking-wider">
              Diploma &amp; Pathway
            </span>
            <h2 className="font-headline-lg text-headline-lg text-charcoal mb-6 font-bold">Standard, Advanced Studies and Automatic Enrolment</h2>
            <p className="font-body-md text-on-surface-variant mb-6">
              Virginia offers a Standard Diploma and an Advanced Studies Diploma, with the Advanced Studies
              route requiring more credits and a broader course sequence. Mathematics is usually the subject
              that decides which one a student ends up with, because the advanced sequence has the least room
              for a difficult year.
            </p>
            <p className="font-body-md text-on-surface-variant mb-8">
              There is also a development worth knowing about. Under recent Virginia legislation, school
              divisions use SOL mathematics performance to automatically enrol high-achieving students into
              advanced mathematics courses, with statewide upper quartile scores published to guide placement.
              In other words, a strong SOL mathematics score no longer just records achievement, it can open a
              door. That makes the middle school years a genuinely high-leverage time to address gaps.
            </p>
            <button 
              onClick={() => onNavigate('subject', 'Math')}
              className="bg-royal-purple text-white px-8 py-4 rounded-xl font-headline-md font-bold hover:bg-primary transition-all shadow-lg active:scale-95 inline-flex items-center gap-2 cursor-pointer"
            >
              Explore Math Tutoring
            </button>
          </div>
          <div className="bg-surface-container-low p-10 rounded-[32px] border border-surface-container">
            <h3 className="font-headline-md mb-6 font-bold text-charcoal">Common SOL End-of-Course Tests</h3>
            <ul className="space-y-4 font-body-md text-on-surface-variant">
              <li className="flex gap-3"><MaterialIcon name="check_circle" className="text-lime-green text-sm" /> Algebra I, Geometry, Algebra II</li>
              <li className="flex gap-3"><MaterialIcon name="check_circle" className="text-lime-green text-sm" /> End-of-course Reading and Writing</li>
              <li className="flex gap-3"><MaterialIcon name="check_circle" className="text-lime-green text-sm" /> Biology, Chemistry, Earth Science</li>
              <li className="flex gap-3"><MaterialIcon name="check_circle" className="text-lime-green text-sm" /> World History I and II</li>
              <li className="flex gap-3"><MaterialIcon name="check_circle" className="text-lime-green text-sm" /> Virginia and United States History</li>
            </ul>
            <p className="font-label-md text-on-surface-variant mt-6 italic">
              Diploma, credit and assessment requirements are set by the Virginia Board of Education and are
              periodically revised. Always confirm current requirements with your school counselor.
            </p>
          </div>
        </div>
      </section>

      {/* Why we work for Virginia students */}
      <section className="py-24 bg-primary-container text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-white blur-3xl transform rotate-12"></div>
        </div>
        <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop py-margin-desktop relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-headline-lg text-headline-lg mb-8 font-bold text-white">Why Math Make Smart Works for Virginia Students</h2>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <MaterialIcon name="location_on" className="text-xl" />
                  </div>
                  <div>
                    <h4 className="font-headline-md text-body-lg mb-1 font-bold">SOL, Not Common Core</h4>
                    <p className="text-on-primary-container opacity-80">
                      Virginia never adopted the Common Core and writes its own Standards of Learning, revised
                      for mathematics in 2023. Tutors are assessed on the current Virginia standards, because
                      national materials sequence topics differently.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <MaterialIcon name="edit_note" className="text-xl" />
                  </div>
                  <div>
                    <h4 className="font-headline-md text-body-lg mb-1 font-bold">Built for Verified Credits</h4>
                    <p className="text-on-primary-container opacity-80">
                      Because an EOC test can decide a verified credit regardless of the course grade, we work
                      across the full year of content rather than the current unit, and we cover the
                      technology-enhanced item formats the SOL tests use.
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
                      been mastered and which still need attention, in the language of the SOL curriculum framework.
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
                <span className="font-display-lg text-lime-green mb-2 font-bold">2023</span>
                <span className="font-label-md font-medium">Math SOL Aligned</span>
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
          <h2 className="font-headline-lg text-headline-lg text-charcoal mb-4 font-bold">Virginia Curriculum Questions, Answered</h2>
          <p className="font-body-md text-on-surface-variant max-w-2xl mx-auto">
            The questions Virginia parents ask us most often about the SOL, verified credits and diplomas.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <div className="bg-white border border-surface-variant p-8 rounded-3xl shadow-ambient">
            <h3 className="font-headline-md mb-3 font-bold text-charcoal">My child passed the course but failed the SOL. What happens?</h3>
            <p className="font-body-md text-on-surface-variant">
              They keep the standard credit for passing the course, but they do not earn the verified credit
              that the SOL test carries, and verified credits are required to graduate. Students can retake the
              test, and there are expedited retake provisions in some circumstances. This is the single most
              important thing to understand about the Virginia system, and it is why a strong report card is
              not by itself evidence that a student is on track.
            </p>
          </div>
          <div className="bg-white border border-surface-variant p-8 rounded-3xl shadow-ambient">
            <h3 className="font-headline-md mb-3 font-bold text-charcoal">Why does the math look different from what I remember?</h3>
            <p className="font-body-md text-on-surface-variant">
              Because it changed. The Virginia Board of Education approved the 2023 Mathematics Standards of
              Learning on 31 August 2023, the first major revision since 2016, and they were fully implemented
              during the 2024&ndash;25 school year. The revision raised expectations, built stronger vertical
              connections between grades, and increased rigour in Algebra I in particular. Practice materials
              written for the 2016 standards no longer match the tests your child sits.
            </p>
          </div>
          <div className="bg-white border border-surface-variant p-8 rounded-3xl shadow-ambient">
            <h3 className="font-headline-md mb-3 font-bold text-charcoal">What are Growth Assessments, and do they count?</h3>
            <p className="font-body-md text-on-surface-variant">
              They are autumn and winter assessments in reading and mathematics for grades 3&ndash;8, and they
              are diagnostic rather than accountability measures. They do not determine a school rating or a
              student&apos;s promotion. What they do offer is early information, months before the spring SOL. A
              disappointing autumn Growth Assessment is the most useful signal a Virginia parent gets all year,
              because there is still most of a school year in which to act on it.
            </p>
          </div>
          <div className="bg-white border border-surface-variant p-8 rounded-3xl shadow-ambient">
            <h3 className="font-headline-md mb-3 font-bold text-charcoal">Can a good SOL score get my child into advanced math?</h3>
            <p className="font-body-md text-on-surface-variant">
              In effect, yes. Virginia divisions now use SOL mathematics performance to automatically enrol
              high-achieving students into advanced mathematics courses, with the state publishing upper
              quartile scores to guide placement. The point for families is that a middle school SOL result is
              no longer just a record of the year gone by. It can determine the course a student is placed in
              next, which shapes the whole high school mathematics sequence.
            </p>
          </div>
          <div className="bg-white border border-surface-variant p-8 rounded-3xl shadow-ambient">
            <h3 className="font-headline-md mb-3 font-bold text-charcoal">Why might my child&apos;s SOL score drop next year?</h3>
            <p className="font-body-md text-on-surface-variant">
              Most likely because the passing threshold is changing, not because your child has gone backwards.
              The cut scores used through 2025&ndash;26, under which 400 was the pass/proficient mark, were set
              against Virginia&apos;s older standards. After a standard-setting process in 2025, higher cut scores
              are being phased in from 2026&ndash;27, intended to bring Virginia&apos;s definition of proficiency
              closer to the NAEP &ldquo;proficient&rdquo; level. Expect reported results across the state to look weaker
              for a period. What matters for your child is the underlying work, not the label attached to it.
            </p>
          </div>
          <div className="bg-white border border-surface-variant p-8 rounded-3xl shadow-ambient">
            <h3 className="font-headline-md mb-3 font-bold text-charcoal">Does Virginia use the Common Core?</h3>
            <p className="font-body-md text-on-surface-variant">
              No. Virginia has always maintained its own Standards of Learning and never adopted the Common Core
              State Standards. The SOL are written and revised by the Virginia Board of Education, and the
              current mathematics standards date from 2023. This matters practically rather than politically:
              national tutoring materials and workbooks built around Common Core sequencing will introduce
              topics in a different order and to a different depth than your child&apos;s classroom, which is why
              we match tutors to the Virginia standards and to the specific SOL test a student will sit.
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
              Ready to build real confidence in the Virginia curriculum?
            </h2>
            <p className="font-body-lg text-on-surface-variant mb-10 max-w-2xl mx-auto">
              Start with a free assessment. We&apos;ll find out where your child actually stands against the
              Standards of Learning and match them with a tutor who knows the SOL tests their school runs.
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