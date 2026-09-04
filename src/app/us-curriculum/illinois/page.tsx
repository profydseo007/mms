'use client';

import React from 'react';

import { ActivePage } from '@/lib/types';
import MaterialIcon from '@/components/MaterialIcon';

interface CurriculumProps {
  onNavigate: (page: ActivePage, subjectTitle?: string) => void;
}

export default function CurriculumIL({ onNavigate }: CurriculumProps) {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 md:pt-24 pb-16 px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="z-10">
            <span className="inline-block curriculum-chip px-4 py-1.5 rounded-full font-label-sm font-bold mb-6 uppercase tracking-wider">
              Illinois Standards Specialists
            </span>
            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-charcoal mb-6 leading-tight font-bold">
              Online Tutoring for the Illinois Curriculum
            </h1>
            <p className="font-body-lg text-on-surface-variant mb-10 max-w-xl">
              One-to-one tutoring built around the Illinois Learning Standards, from kindergarten through AP
              coursework. Every tutor is matched to what your child is actually assessed on, including the
              Illinois Assessment of Readiness, the Illinois Science Assessment and the ACT in grade 11.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => onNavigate('trial')}
                className="bg-royal-purple text-white px-8 py-4 rounded-xl font-headline-md font-bold hover:bg-primary transition-all shadow-lg active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
              >
                Book an Illinois Tutor
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
                    alt="Illinois tutor" 
                  />
                </div>
                <div className="w-8 h-8 rounded-full bg-slate-300 border-2 border-white overflow-hidden">
                  <img 
                    className="w-full h-full object-cover" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCrfy2VDzuas8JI7_Nc_lgFtDUBGaKBwYUAhIgRczApCaSXYrEV2QsJp7ZilvbDIj-JTYgaf4Z5CAxWjTKeOdP-Xew7mlBfgftkQSaB9vfp9pimw1kFUFlB1TepNnR3YcFAVouYpEE--o6gzvDCCEvNFw68t44lVdXKoy3QA_oZ6BixAGA7c3G90gyMoG0SzuROLNi07G9rU3TGE0J1WjYzaadaiJZKwmlnWWKtYWAdwl2Y71XLs_Sp_A" 
                    alt="Illinois tutor" 
                  />
                </div>
                <div className="w-8 h-8 rounded-full bg-slate-400 border-2 border-white overflow-hidden">
                  <img 
                    className="w-full h-full object-cover" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBaEzIf4xmjrSsmMQsxn3xNvophay-XtLbJvWVo1gLfT7ENY6m9qmuYGA2_6vVdeP6_GyFYCKJ5zYsLqtnMllqrblzpeR_9pXfhLphLBz6J5Cze73zy0lWPot3wmxqmWjgaEIn-7O-mSXZt3XmjLQKc1EeXx4yO9XitwegeSlCY-RAfCSxl8lYPboqc7adxcFOMczEvH5jmafgRCaVIpdS1YJOOptHV2l5z1Muo2rPZt6_HuqUoXGRAWg" 
                    alt="Illinois tutor" 
                  />
                </div>
              </div>
              <span className="font-medium">Supporting families from Chicago to Carbondale</span>
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
                    <p className="font-label-sm text-charcoal font-bold">Standards-Aligned</p>
                    <p className="text-[10px] text-on-surface-variant font-medium">IAR, ISA and ACT preparation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Illinois Actually Tests */}
      <section className="py-24 bg-soft-gray border-y border-surface-container">
        <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="text-center mb-16">
            <h2 className="font-headline-lg text-headline-lg text-charcoal mb-4 font-bold">What Illinois Actually Tests</h2>
            <p className="font-body-md text-on-surface-variant max-w-2xl mx-auto">
              Illinois assesses through three separate instruments across a student&apos;s school career. They
              measure different things and are prepared for differently, so knowing which applies when is the
              starting point for any useful tutoring plan.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-3xl text-center shadow-ambient hover-lift">
              <p className="font-headline-md text-royal-purple mb-2 font-bold">ILS</p>
              <p className="font-label-md text-on-surface-variant font-medium">Illinois Learning Standards, K&ndash;12</p>
            </div>
            <div className="bg-white p-8 rounded-3xl text-center shadow-ambient hover-lift">
              <p className="font-headline-md text-royal-purple mb-2 font-bold">IAR</p>
              <p className="font-label-md text-on-surface-variant font-medium">ELA &amp; mathematics, grades 3&ndash;8</p>
            </div>
            <div className="bg-white p-8 rounded-3xl text-center shadow-ambient hover-lift">
              <p className="font-headline-md text-royal-purple mb-2 font-bold">ISA</p>
              <p className="font-label-md text-on-surface-variant font-medium">Illinois Science Assessment, grades 5 and 8</p>
            </div>
            <div className="bg-white p-8 rounded-3xl text-center shadow-ambient hover-lift">
              <p className="font-headline-md text-royal-purple mb-2 font-bold">ACT</p>
              <p className="font-label-md text-on-surface-variant font-medium">Grade 11 accountability assessment</p>
            </div>
          </div>
          <p className="text-center font-body-md text-on-surface-variant max-w-3xl mx-auto mt-12">
            The IAR reports five performance levels, with Level 4 indicating a student has met expectations for
            their grade. It grew out of the PARCC assessment, which is why the question style leans towards
            multi-step reasoning and extended written responses rather than straightforward recall.
          </p>
        </div>
      </section>

      {/* The ACT Switch */}
      <section className="px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto py-24">
        <div className="bg-surface-container-low rounded-[40px] p-10 md:p-16 border border-surface-container">
          <div className="max-w-3xl">
            <span className="inline-block curriculum-chip px-4 py-1.5 rounded-full font-label-sm font-bold mb-6 uppercase tracking-wider">
              Changed in 2025
            </span>
            <h2 className="font-headline-lg text-headline-lg text-charcoal mb-6 font-bold">Illinois Junior Year Now Means the ACT</h2>
            <p className="font-body-md text-on-surface-variant mb-6">
              Illinois has switched its high school accountability assessment from the SAT to the ACT. The
              State Board announced the change in May 2024, awarding a six-year contract to ACT, and the first
              statewide administration took place in spring 2025. Illinois had used the SAT since 2016, and
              before that the ACT for around fifteen years, so this is a return rather than a novelty. Juniors
              sit it free during the school day.
            </p>
            <p className="font-body-md text-on-surface-variant mb-6">
              The two tests are genuinely different, and preparation should follow the format. The ACT runs four
              multiple-choice sections covering English, mathematics, reading and science, scored on a 36-point
              scale, with roughly 215 questions in under three hours. The SAT used two sections scored between
              400 and 1600 over a longer period per question. In practice the ACT rewards pace and confident
              recall more than the SAT did, so timing practice matters more than it used to.
            </p>
            <p className="font-body-md text-on-surface-variant">
              The ACT also includes a science section, which the SAT did not. For families this means science
              reasoning now forms part of the state assessment at high school level rather than sitting only in
              earlier grades. Students can still take the SAT independently at their own expense if a particular
              university asks for it.
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
              credit coursework. Each subject links to a dedicated page with tutor profiles and topics covered.
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
                IAR mathematics, grades 3&ndash;8
              </li>
              <li className="flex items-center gap-2">
                <MaterialIcon name="check_circle" className="text-lime-green text-sm" />
                Algebra I, Geometry &amp; Algebra II
              </li>
              <li className="flex items-center gap-2">
                <MaterialIcon name="check_circle" className="text-lime-green text-sm" />
                ACT mathematics &amp; AP Calculus
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
                IAR English language arts
              </li>
              <li className="flex items-center gap-2">
                <MaterialIcon name="check_circle" className="text-lime-green text-sm" />
                ACT English &amp; reading sections
              </li>
              <li className="flex items-center gap-2">
                <MaterialIcon name="check_circle" className="text-lime-green text-sm" />
                Extended written response
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
                ISA preparation, grades 5 and 8
              </li>
              <li className="flex items-center gap-2">
                <MaterialIcon name="check_circle" className="text-lime-green text-sm" />
                NGSS three-dimensional learning
              </li>
              <li className="flex items-center gap-2">
                <MaterialIcon name="check_circle" className="text-lime-green text-sm" />
                ACT science reasoning
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
                High school physics &amp; NGSS practices
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
                High school chemistry
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
                High school biology
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
              Difficulties rarely appear where they are first noticed. These are the stages where Illinois
              students most often lose ground, and what tends to be behind it.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-8 rounded-3xl shadow-ambient">
              <h3 className="font-headline-md mb-3 font-bold text-charcoal">Grades K&ndash;2</h3>
              <p className="font-body-md text-on-surface-variant">
                Number sense, place value and reading fluency. No state testing yet, which is exactly why gaps
                at this stage go unnoticed until the IAR begins in grade 3.
              </p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-ambient">
              <h3 className="font-headline-md mb-3 font-bold text-charcoal">Grades 3&ndash;5</h3>
              <p className="font-body-md text-on-surface-variant">
                The first IAR years. Fractions are the usual sticking point in mathematics, and grade 5 brings
                the first Illinois Science Assessment, which rewards reasoning over recall.
              </p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-ambient">
              <h3 className="font-headline-md mb-3 font-bold text-charcoal">Grades 6&ndash;8</h3>
              <p className="font-body-md text-on-surface-variant">
                Ratios, proportional reasoning and algebraic thinking, plus the grade 8 ISA. How securely this
                lands determines whether Algebra I goes well, and Algebra I sets up the whole high school sequence.
              </p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-ambient">
              <h3 className="font-headline-md mb-3 font-bold text-charcoal">Grades 9&ndash;12</h3>
              <p className="font-body-md text-on-surface-variant">
                Coursework, the grade 11 ACT, and AP or dual credit classes. Earlier gaps become expensive here,
                because the ACT is both a state requirement and a college admissions test.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Two Tests, One Score */}
      <section className="px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block curriculum-chip px-4 py-1.5 rounded-full font-label-sm font-bold mb-6 uppercase tracking-wider">
              College Pathway
            </span>
            <h2 className="font-headline-lg text-headline-lg text-charcoal mb-6 font-bold">One Test, Two Purposes</h2>
            <p className="font-body-md text-on-surface-variant mb-6">
              Illinois juniors sit a single ACT that serves as both the state accountability assessment and a
              genuine college admissions score. That dual role is unusual and it changes the stakes: the same
              sitting that satisfies a graduation requirement also produces a number a university will see.
            </p>
            <p className="font-body-md text-on-surface-variant mb-8">
              Since 2021, Illinois public universities and community colleges have been required to operate
              test-optional admissions, so a score is not compulsory for application. But a strong result is
              still worth having, particularly for scholarship consideration, and mathematics is where most
              students gain or lose the most ground. Preparation that starts in sophomore year rather than the
              spring of junior year consistently produces better outcomes.
            </p>
            <button 
              onClick={() => onNavigate('subject', 'Math')}
              className="bg-royal-purple text-white px-8 py-4 rounded-xl font-headline-md font-bold hover:bg-primary transition-all shadow-lg active:scale-95 inline-flex items-center gap-2 cursor-pointer"
            >
              Explore Math Tutoring
            </button>
          </div>
          <div className="bg-surface-container-low p-10 rounded-[32px] border border-surface-container">
            <h3 className="font-headline-md mb-6 font-bold text-charcoal">The Four ACT Sections</h3>
            <ul className="space-y-4 font-body-md text-on-surface-variant">
              <li className="flex gap-3"><MaterialIcon name="check_circle" className="text-lime-green text-sm" /> English &mdash; usage, mechanics, rhetoric</li>
              <li className="flex gap-3"><MaterialIcon name="check_circle" className="text-lime-green text-sm" /> Mathematics &mdash; through Algebra II and basic trigonometry</li>
              <li className="flex gap-3"><MaterialIcon name="check_circle" className="text-lime-green text-sm" /> Reading &mdash; comprehension under time pressure</li>
              <li className="flex gap-3"><MaterialIcon name="check_circle" className="text-lime-green text-sm" /> Science &mdash; data interpretation, not memorised content</li>
            </ul>
            <p className="font-label-md text-on-surface-variant mt-6 italic">
              Assessment and graduation requirements are set by the Illinois State Board of Education and are
              periodically updated. Always confirm current requirements with your school counselor.
            </p>
          </div>
        </div>
      </section>

      {/* Why we work for Illinois students */}
      <section className="py-24 bg-primary-container text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-white blur-3xl transform rotate-12"></div>
        </div>
        <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop py-margin-desktop relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-headline-lg text-headline-lg mb-8 font-bold text-white">Why Math Make Smart Works for Illinois Students</h2>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <MaterialIcon name="location_on" className="text-xl" />
                  </div>
                  <div>
                    <h4 className="font-headline-md text-body-lg mb-1 font-bold">Matched to the Right Assessment</h4>
                    <p className="text-on-primary-container opacity-80">
                      IAR reasoning, ISA science practices and ACT pacing are three different skills. Tutors are
                      matched to the assessment your child is actually preparing for rather than to a generic
                      subject syllabus.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <MaterialIcon name="edit_note" className="text-xl" />
                  </div>
                  <div>
                    <h4 className="font-headline-md text-body-lg mb-1 font-bold">Pace as Well as Content</h4>
                    <p className="text-on-primary-container opacity-80">
                      The ACT asks around 215 questions in under three hours, so timing is part of the skill.
                      We build that in deliberately rather than treating it as something students pick up on
                      their own.
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
                <span className="font-display-lg text-lime-green mb-2 font-bold">ACT</span>
                <span className="font-label-md font-medium">Format Ready</span>
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
          <h2 className="font-headline-lg text-headline-lg text-charcoal mb-4 font-bold">Illinois Curriculum Questions, Answered</h2>
          <p className="font-body-md text-on-surface-variant max-w-2xl mx-auto">
            The questions Illinois parents ask us most often about the standards, the IAR and the move to the ACT.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <div className="bg-white border border-surface-variant p-8 rounded-3xl shadow-ambient">
            <h3 className="font-headline-md mb-3 font-bold text-charcoal">Does my child take the SAT or the ACT?</h3>
            <p className="font-body-md text-on-surface-variant">
              The ACT. Illinois switched its statewide high school assessment from the SAT to the ACT, with the
              first administration in spring 2025, and juniors take it free during the school day. Students may
              still sit the SAT independently at their own cost if a particular university prefers it. One
              wrinkle worth checking locally: some districts held separate College Board arrangements during the
              transition, so if your school has mentioned both tests, ask which one they are administering this year.
            </p>
          </div>
          <div className="bg-white border border-surface-variant p-8 rounded-3xl shadow-ambient">
            <h3 className="font-headline-md mb-3 font-bold text-charcoal">Why did the proficiency percentages change?</h3>
            <p className="font-body-md text-on-surface-variant">
              Illinois updated its cut scores for the IAR, ISA and ACT beginning in 2025&ndash;26. The State
              Board&apos;s reasoning was that Illinois had been applying one of the strictest proficiency
              definitions in the country, even though Illinois students performed above the national average on
              NAEP, which made results look worse than the underlying learning warranted. The practical effect
              is that more students now fall into proficient categories. Be careful comparing this year&apos;s
              numbers with previous years: the measurement changed, and the switch from SAT to ACT means there
              is no clean high school baseline either.
            </p>
          </div>
          <div className="bg-white border border-surface-variant p-8 rounded-3xl shadow-ambient">
            <h3 className="font-headline-md mb-3 font-bold text-charcoal">What does an IAR Level 4 mean?</h3>
            <p className="font-body-md text-on-surface-variant">
              The IAR reports five levels, and Level 4 means a student has met expectations for their grade.
              Level 3 is approaching expectations, which is the one worth paying attention to, because it often
              reads to families as a near miss when it usually signals a specific gap rather than general
              weakness. The IAR descends from PARCC, so questions favour multi-step reasoning and written
              explanation. A student who understands the content but cannot show their thinking will
              underperform relative to what they know.
            </p>
          </div>
          <div className="bg-white border border-surface-variant p-8 rounded-3xl shadow-ambient">
            <h3 className="font-headline-md mb-3 font-bold text-charcoal">How should we prepare for the ACT science section?</h3>
            <p className="font-body-md text-on-surface-variant">
              Not by memorising science content, which is the most common mistake. The ACT science section tests
              whether a student can read graphs, tables and experimental descriptions quickly and draw correct
              conclusions from them. It rewards data interpretation and pace far more than recall. Students who
              are strong in biology or chemistry class sometimes score poorly here simply because they are
              reading too carefully. It is a skill that responds well to focused practice.
            </p>
          </div>
          <div className="bg-white border border-surface-variant p-8 rounded-3xl shadow-ambient md:col-span-2">
            <h3 className="font-headline-md mb-3 font-bold text-charcoal">Are the Illinois Learning Standards the same as Common Core?</h3>
            <p className="font-body-md text-on-surface-variant">
              Largely, yes, in English language arts and mathematics, and this is where Illinois differs from
              states such as Texas, Florida and Virginia. Illinois adopted the Common Core State Standards into
              its Illinois Learning Standards, and for science it adopted the Next Generation Science Standards.
              That makes nationally produced materials a reasonable starting point in Illinois in a way they are
              not everywhere. What still needs matching is the assessment: IAR question style, ISA science
              practices and ACT pacing are specific to Illinois students, and that is where preparation should
              be targeted.
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
              Ready to build real confidence in the Illinois curriculum?
            </h2>
            <p className="font-body-lg text-on-surface-variant mb-10 max-w-2xl mx-auto">
              Start with a free assessment. We&apos;ll find out where your child actually stands against the
              Illinois Learning Standards and match them with a tutor who knows the assessment they are preparing for.
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