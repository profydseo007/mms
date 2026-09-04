'use client';

import React from 'react';

import { ActivePage } from '@/lib/types';
import MaterialIcon from '@/components/MaterialIcon';

interface CurriculumProps {
  onNavigate: (page: ActivePage, subjectTitle?: string) => void;
}

export default function CurriculumGA({ onNavigate }: CurriculumProps) {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 md:pt-24 pb-16 px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="z-10">
            <span className="inline-block curriculum-chip px-4 py-1.5 rounded-full font-label-sm font-bold mb-6 uppercase tracking-wider">
              Georgia Standards Specialists
            </span>
            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-charcoal mb-6 leading-tight font-bold">
              Online Tutoring for the Georgia Curriculum
            </h1>
            <p className="font-body-lg text-on-surface-variant mb-10 max-w-xl">
              One-to-one tutoring built around Georgia&apos;s current content standards, from kindergarten
              through AP coursework. Georgia has rewritten both its mathematics and English standards in recent
              years, so every tutor is matched to what your child is being taught now, not to an older framework.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => onNavigate('trial')}
                className="bg-royal-purple text-white px-8 py-4 rounded-xl font-headline-md font-bold hover:bg-primary transition-all shadow-lg active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
              >
                Book a Georgia Tutor
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
                    alt="Georgia tutor" 
                  />
                </div>
                <div className="w-8 h-8 rounded-full bg-slate-300 border-2 border-white overflow-hidden">
                  <img 
                    className="w-full h-full object-cover" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCrfy2VDzuas8JI7_Nc_lgFtDUBGaKBwYUAhIgRczApCaSXYrEV2QsJp7ZilvbDIj-JTYgaf4Z5CAxWjTKeOdP-Xew7mlBfgftkQSaB9vfp9pimw1kFUFlB1TepNnR3YcFAVouYpEE--o6gzvDCCEvNFw68t44lVdXKoy3QA_oZ6BixAGA7c3G90gyMoG0SzuROLNi07G9rU3TGE0J1WjYzaadaiJZKwmlnWWKtYWAdwl2Y71XLs_Sp_A" 
                    alt="Georgia tutor" 
                  />
                </div>
                <div className="w-8 h-8 rounded-full bg-slate-400 border-2 border-white overflow-hidden">
                  <img 
                    className="w-full h-full object-cover" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBaEzIf4xmjrSsmMQsxn3xNvophay-XtLbJvWVo1gLfT7ENY6m9qmuYGA2_6vVdeP6_GyFYCKJ5zYsLqtnMllqrblzpeR_9pXfhLphLBz6J5Cze73zy0lWPot3wmxqmWjgaEIn-7O-mSXZt3XmjLQKc1EeXx4yO9XitwegeSlCY-RAfCSxl8lYPboqc7adxcFOMczEvH5jmafgRCaVIpdS1YJOOptHV2l5z1Muo2rPZt6_HuqUoXGRAWg" 
                    alt="Georgia tutor" 
                  />
                </div>
              </div>
              <span className="font-medium">Supporting families from Savannah to Dalton</span>
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
                    <p className="text-[10px] text-on-surface-variant font-medium">New math &amp; ELA standards in every lesson</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Georgia Actually Tests */}
      <section className="py-24 bg-soft-gray border-y border-surface-container">
        <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="text-center mb-16">
            <h2 className="font-headline-lg text-headline-lg text-charcoal mb-4 font-bold">What Georgia Actually Tests</h2>
            <p className="font-body-md text-on-surface-variant max-w-2xl mx-auto">
              Georgia assesses through the Georgia Milestones Assessment System, which splits into end-of-grade
              tests in elementary and middle school and end-of-course tests in identified high school subjects.
              The two work quite differently, and that changes how you prepare for them.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-3xl text-center shadow-ambient hover-lift">
              <p className="font-headline-md text-royal-purple mb-2 font-bold">GMAS</p>
              <p className="font-label-md text-on-surface-variant font-medium">Georgia Milestones Assessment System</p>
            </div>
            <div className="bg-white p-8 rounded-3xl text-center shadow-ambient hover-lift">
              <p className="font-headline-md text-royal-purple mb-2 font-bold">EOG</p>
              <p className="font-label-md text-on-surface-variant font-medium">End-of-grade tests, grades 3&ndash;8</p>
            </div>
            <div className="bg-white p-8 rounded-3xl text-center shadow-ambient hover-lift">
              <p className="font-headline-md text-royal-purple mb-2 font-bold">EOC</p>
              <p className="font-label-md text-on-surface-variant font-medium">End-of-course tests in identified subjects</p>
            </div>
            <div className="bg-white p-8 rounded-3xl text-center shadow-ambient hover-lift">
              <p className="font-headline-md text-royal-purple mb-2 font-bold">Science</p>
              <p className="font-label-md text-on-surface-variant font-medium">Once per grade band: 3&ndash;5, 6&ndash;8 and 9&ndash;12</p>
            </div>
          </div>
          <p className="text-center font-body-md text-on-surface-variant max-w-3xl mx-auto mt-12">
            Milestones results are reported across four achievement levels: Beginning, Developing, Proficient
            and Distinguished Learner. Beginning Learner indicates a student will need substantial support to be
            ready for the next grade or course, while Developing Learner indicates partial proficiency. Note
            that science is only assessed once in each grade band rather than annually, so a science result
            carries three years of learning rather than one.
          </p>
        </div>
      </section>

      {/* The Standards Rewrite */}
      <section className="px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto py-24">
        <div className="bg-surface-container-low rounded-[40px] p-10 md:p-16 border border-surface-container">
          <div className="max-w-3xl">
            <span className="inline-block curriculum-chip px-4 py-1.5 rounded-full font-label-sm font-bold mb-6 uppercase tracking-wider">
              Recently Rewritten
            </span>
            <h2 className="font-headline-lg text-headline-lg text-charcoal mb-6 font-bold">Georgia Replaced Its Standards. Twice.</h2>
            <p className="font-body-md text-on-surface-variant mb-6">
              This is the part that catches families out, particularly those who have moved to Georgia or who
              have an older child who went through school under a different framework. Georgia has replaced the
              Georgia Standards of Excellence in both of its core subjects. The new K-12 Mathematics Standards
              came first, with Milestones mathematics assessments aligned to them from the 2023&ndash;24 school
              year. The new K-12 English Language Arts Standards followed, taking effect for 2025&ndash;26.
              The Department of Education has described both as replacing the previous Common Core standards.
            </p>
            <p className="font-body-md text-on-surface-variant mb-6">
              The mathematics rewrite also changed course names at high school level, which is why your child&apos;s
              transcript may not look like an older sibling&apos;s. The tested high school mathematics course is now
              Algebra: Concepts &amp; Connections rather than the earlier titles. Tutoring materials still
              organised around the old course structure will not line up cleanly with what is being taught.
            </p>
            <p className="font-body-md text-on-surface-variant">
              The English rewrite has a particular emphasis worth knowing about: a dedicated foundations strand
              covering phonics and the science of reading, and clearer learning progressions from grade to
              grade. For a student who has struggled with reading, that structure makes it easier to identify
              exactly where the gap sits rather than treating reading difficulty as one undifferentiated problem.
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
                Algebra: Concepts &amp; Connections EOC
              </li>
              <li className="flex items-center gap-2">
                <MaterialIcon name="check_circle" className="text-lime-green text-sm" />
                EOG mathematics, grades 3&ndash;8
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
                New K-12 ELA Standards
              </li>
              <li className="flex items-center gap-2">
                <MaterialIcon name="check_circle" className="text-lime-green text-sm" />
                Reading foundations &amp; phonics
              </li>
              <li className="flex items-center gap-2">
                <MaterialIcon name="check_circle" className="text-lime-green text-sm" />
                American Literature EOC
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
                Grade 5 &amp; grade 8 science EOG
              </li>
              <li className="flex items-center gap-2">
                <MaterialIcon name="check_circle" className="text-lime-green text-sm" />
                Physical science &amp; earth systems
              </li>
              <li className="flex items-center gap-2">
                <MaterialIcon name="check_circle" className="text-lime-green text-sm" />
                Three-year grade band review
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
                High school physics
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
                Biology EOC preparation
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
              Difficulties rarely appear where they are first noticed. These are the stages where Georgia
              students most often lose ground, and what tends to be behind it.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-8 rounded-3xl shadow-ambient">
              <h3 className="font-headline-md mb-3 font-bold text-charcoal">Grades K&ndash;2</h3>
              <p className="font-body-md text-on-surface-variant">
                Number sense and early reading. The new ELA standards put real weight on phonics here, and no
                Milestones testing happens yet, which is why gaps at this stage surface only in grade 3.
              </p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-ambient">
              <h3 className="font-headline-md mb-3 font-bold text-charcoal">Grades 3&ndash;5</h3>
              <p className="font-body-md text-on-surface-variant">
                The first EOG years. Fractions are the usual sticking point in mathematics, and grade 5 carries
                the science assessment for the whole 3&ndash;5 band rather than for that year alone.
              </p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-ambient">
              <h3 className="font-headline-md mb-3 font-bold text-charcoal">Grades 6&ndash;8</h3>
              <p className="font-body-md text-on-surface-variant">
                Ratios, proportional reasoning and algebraic thinking, plus the grade 8 science assessment.
                How securely this lands decides whether the Algebra EOC goes well in high school.
              </p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-ambient">
              <h3 className="font-headline-md mb-3 font-bold text-charcoal">Grades 9&ndash;12</h3>
              <p className="font-body-md text-on-surface-variant">
                End-of-course tests that count towards the course grade, plus AP and dual enrollment. Earlier
                gaps become expensive here, because the grade and the test result are now the same conversation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* EOC Weighting */}
      <section className="px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block curriculum-chip px-4 py-1.5 rounded-full font-label-sm font-bold mb-6 uppercase tracking-wider">
              High School Stakes
            </span>
            <h2 className="font-headline-lg text-headline-lg text-charcoal mb-6 font-bold">The EOC Is Also the Final Exam</h2>
            <p className="font-body-md text-on-surface-variant mb-6">
              In Georgia, the end-of-course Milestones assessment is not a separate accountability test sitting
              alongside the course. It serves as the final exam and contributes a defined share of the student&apos;s
              grade for that course, commonly twenty percent, though districts confirm the exact weighting each
              year. That is unusually direct: the state test and the transcript are the same conversation.
            </p>
            <p className="font-body-md text-on-surface-variant mb-8">
              The practical consequence is that a weak EOC does more than produce a disappointing score report.
              It pulls down the course grade, which affects GPA, which in turn affects HOPE Scholarship
              eligibility and college applications. That chain is why Georgia families who treat the EOC as
              seriously as a final exam, and prepare accordingly, tend to do better than those who treat it as
              just another state test.
            </p>
            <button 
              onClick={() => onNavigate('subject', 'Math')}
              className="bg-royal-purple text-white px-8 py-4 rounded-xl font-headline-md font-bold hover:bg-primary transition-all shadow-lg active:scale-95 inline-flex items-center gap-2 cursor-pointer"
            >
              Explore Math Tutoring
            </button>
          </div>
          <div className="bg-surface-container-low p-10 rounded-[32px] border border-surface-container">
            <h3 className="font-headline-md mb-6 font-bold text-charcoal">The High School EOC Subjects</h3>
            <ul className="space-y-4 font-body-md text-on-surface-variant">
              <li className="flex gap-3"><MaterialIcon name="check_circle" className="text-lime-green text-sm" /> Algebra: Concepts &amp; Connections</li>
              <li className="flex gap-3"><MaterialIcon name="check_circle" className="text-lime-green text-sm" /> Biology</li>
              <li className="flex gap-3"><MaterialIcon name="check_circle" className="text-lime-green text-sm" /> American Literature and Composition, listed by some districts as Literature &amp; Composition II</li>
              <li className="flex gap-3"><MaterialIcon name="check_circle" className="text-lime-green text-sm" /> US History</li>
            </ul>
            <p className="font-label-md text-on-surface-variant mt-6 italic">
              Tested courses, weighting and graduation requirements are set by the Georgia Department of
              Education and applied by districts, and are periodically updated. Always confirm current
              requirements with your school counselor.
            </p>
          </div>
        </div>
      </section>

      {/* Why we work for Georgia students */}
      <section className="py-24 bg-primary-container text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-white blur-3xl transform rotate-12"></div>
        </div>
        <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop py-margin-desktop relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-headline-lg text-headline-lg mb-8 font-bold text-white">Why Math Make Smart Works for Georgia Students</h2>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <MaterialIcon name="location_on" className="text-xl" />
                  </div>
                  <div>
                    <h4 className="font-headline-md text-body-lg mb-1 font-bold">Current Standards, Not Old Ones</h4>
                    <p className="text-on-primary-container opacity-80">
                      Georgia has replaced both its mathematics and English standards within the last three
                      years, and course names changed with them. Tutors are matched to what your child is being
                      taught this year rather than to the framework their older sibling had.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <MaterialIcon name="edit_note" className="text-xl" />
                  </div>
                  <div>
                    <h4 className="font-headline-md text-body-lg mb-1 font-bold">Course Grade and Test Together</h4>
                    <p className="text-on-primary-container opacity-80">
                      Because the EOC doubles as the final exam, we work towards the course grade and the state
                      test as one goal rather than two, which is how Georgia high school actually operates.
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
                <span className="font-display-lg text-lime-green mb-2 font-bold">EOG</span>
                <span className="font-label-md font-medium">&amp; EOC Prepared</span>
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
          <h2 className="font-headline-lg text-headline-lg text-charcoal mb-4 font-bold">Georgia Curriculum Questions, Answered</h2>
          <p className="font-body-md text-on-surface-variant max-w-2xl mx-auto">
            The questions Georgia parents ask us most often about the standards, Milestones and score reports.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <div className="bg-white border border-surface-variant p-8 rounded-3xl shadow-ambient">
            <h3 className="font-headline-md mb-3 font-bold text-charcoal">Why did we not receive an ELA Milestones score?</h3>
            <p className="font-body-md text-on-surface-variant">
              Because 2025&ndash;26 was the first year the English Language Arts assessments were tied to
              Georgia&apos;s new K-12 ELA Standards. When an assessment is aligned to new standards for the first
              time, the state has to complete additional test development and standard-setting work before
              scores can be calculated, so ELA results were delayed while mathematics, science and social
              studies were released on the usual timetable. It is a scoring timetable issue, not a reflection of
              your child&apos;s performance, and results are expected later in the year.
            </p>
          </div>
          <div className="bg-white border border-surface-variant p-8 rounded-3xl shadow-ambient">
            <h3 className="font-headline-md mb-3 font-bold text-charcoal">What do the four achievement levels mean?</h3>
            <p className="font-body-md text-on-surface-variant">
              Milestones reports Beginning, Developing, Proficient and Distinguished Learner. Beginning Learner
              means a student has not yet demonstrated proficiency and will need substantial support for the
              next grade or course. Developing Learner means partial proficiency, and it is the level worth
              watching, because families often read it as a near pass when it usually points to specific
              identifiable gaps. Proficient is the level that indicates readiness for what comes next.
            </p>
          </div>
          <div className="bg-white border border-surface-variant p-8 rounded-3xl shadow-ambient">
            <h3 className="font-headline-md mb-3 font-bold text-charcoal">Does the EOC really affect my child&apos;s grade?</h3>
            <p className="font-body-md text-on-surface-variant">
              Yes. In Georgia the end-of-course Milestones assessment serves as the final exam for that course
              and contributes a set share of the final grade, commonly twenty percent, with districts confirming
              the exact figure. That means the EOC feeds into GPA, and GPA feeds into HOPE Scholarship
              eligibility and college applications. Confirm your district&apos;s current weighting, but treat the
              EOC as a final exam rather than an optional state test.
            </p>
          </div>
          <div className="bg-white border border-surface-variant p-8 rounded-3xl shadow-ambient">
            <h3 className="font-headline-md mb-3 font-bold text-charcoal">Why is science only tested some years?</h3>
            <p className="font-body-md text-on-surface-variant">
              Federal rules require science testing once per grade band rather than annually, so Georgia
              assesses science in grades 5 and 8 and once during high school. This has a practical implication
              most families miss: the grade 5 science assessment covers material taught across grades 3, 4 and
              5, and the grade 8 test spans grades 6 to 8. Preparation therefore needs to reach back further
              than a single year&apos;s content, which is why science gaps can go unnoticed for two years before
              surfacing suddenly.
            </p>
          </div>
          <div className="bg-white border border-surface-variant p-8 rounded-3xl shadow-ambient md:col-span-2">
            <h3 className="font-headline-md mb-3 font-bold text-charcoal">Does Georgia still teach Common Core?</h3>
            <p className="font-body-md text-on-surface-variant">
              No. The Georgia Department of Education has described its new K-12 Mathematics and English
              Language Arts Standards as replacing the previous Common Core standards. The mathematics standards
              took effect first, with Milestones assessments aligned from 2023&ndash;24, and the ELA standards
              followed for 2025&ndash;26. This matters practically: nationally produced workbooks and tutoring
              materials built around Common Core sequencing introduce topics in a different order and under
              different course names than Georgia now uses, which is why we match tutors to Georgia&apos;s current
              standards and to the specific EOG or EOC your child will sit.
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
              Ready to build real confidence in the Georgia curriculum?
            </h2>
            <p className="font-body-lg text-on-surface-variant mb-10 max-w-2xl mx-auto">
              Start with a free assessment. We&apos;ll find out where your child actually stands against
              Georgia&apos;s current standards and match them with a tutor who knows the courses their school runs.
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