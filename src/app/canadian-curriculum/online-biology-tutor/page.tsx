'use client';

import React from 'react';
import type { ActivePage } from '@/lib/types';

interface LigatureIconProps {
  name: string;
  className?: string;
}

function LigatureIcon({ name, className = '' }: LigatureIconProps) {
  return (
    <span aria-hidden="true" className={`material-symbols-rounded ${className}`}>
      {name}
    </span>
  );
}

interface SubjectComponentProps {
  onNavigate: (page: ActivePage, subjectTitle?: string) => void;
}

export default function CABiologyTutorPage({ onNavigate }: SubjectComponentProps) {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-primary-fixed">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-white text-royal-purple text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
                SBI3U, SBI4U &amp; Biology 30 Specialists
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-on-primary-fixed mb-6 leading-tight">
                Online Biology Tutor <br className="hidden md:block" />in Canada
              </h1>
              <p className="text-lg text-on-primary-fixed/80 mb-8 max-w-xl">
                Move beyond memorising with an expert <strong className="font-semibold">Online Biology Tutor</strong> matched to your province. From Grade 11 cell biology through to SBI4U genetics, Biology 30 and Anatomy and Physiology 12, lessons follow your child&rsquo;s actual course.
              </p>
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => onNavigate('trial')}
                  className="bg-charcoal text-white px-8 py-3.5 rounded-full font-semibold hover:bg-charcoal/90 transition-colors"
                >
                  Book Free Trial Lesson
                </button>
                <button
                  onClick={() => onNavigate('pricing')}
                  className="bg-white text-royal-purple px-8 py-3.5 rounded-full font-semibold hover:bg-soft-gray transition-colors"
                >
                  View Canadian Pricing
                </button>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1530026186672-2cd00ffc50fe?w=800&q=80"
                alt="Canadian student studying biology diagrams during an online tutoring session"
                className="rounded-2xl shadow-2xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-16 md:py-20">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4 text-center">Biology Tutoring for Grades 11 and 12</h2>
          <p className="text-on-surface-variant text-center max-w-2xl mx-auto mb-12">
            Biology looks like a memorisation subject until Grade 12, when it stops being one. <span className="font-semibold text-charcoal">Biology tutoring in Canada</span> should prepare students for that shift before it arrives.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-surface-container-low rounded-2xl p-8">
              <div className="w-12 h-12 bg-lime-green rounded-xl flex items-center justify-center mb-5">
                <LigatureIcon name="Clock" className="w-6 h-6 text-charcoal" />
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-3">Flexible Session Times</h3>
              <p className="text-on-surface-variant">Biology support scheduled around school in every Canadian time zone, with additional availability ahead of unit tests, labs and final examinations.</p>
            </div>
            <div className="bg-surface-container-low rounded-2xl p-8">
              <div className="w-12 h-12 bg-lime-green rounded-xl flex items-center justify-center mb-5">
                <LigatureIcon name="DollarSign" className="w-6 h-6 text-charcoal" />
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-3">Simple Canadian Pricing</h3>
              <p className="text-on-surface-variant">Rates billed in Canadian dollars, no registration fee and no contract. Biology can share a plan with chemistry, which suits most health science pathways.</p>
            </div>
            <div className="bg-surface-container-low rounded-2xl p-8">
              <div className="w-12 h-12 bg-lime-green rounded-xl flex items-center justify-center mb-5">
                <LigatureIcon name="Star" className="w-6 h-6 text-charcoal" />
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-3">Process Over Recall</h3>
              <p className="text-on-surface-variant">Senior biology rewards explaining mechanisms and interpreting unfamiliar data. We build that reasoning rather than expanding the list of terms to memorise.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Focus */}
      <section className="py-16 md:py-20 bg-surface-container-low">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4 text-center">Senior Biology Courses <br className="hidden md:block" />Across Every Province</h2>
          <p className="text-on-surface-variant text-center max-w-2xl mx-auto mb-12">
            Covering Ontario SBI3U and SBI4U, Alberta Biology 20 and Biology 30 with its Diploma Exam, and BC Life Sciences 11 and Anatomy and Physiology 12, plus equivalent courses elsewhere.
          </p>
          <div className="grid md:grid-cols-12 gap-6">
            <div className="md:col-span-4 space-y-4">
              <div className="bg-white rounded-xl p-5 flex items-center gap-4">
                <span className="w-8 h-8 rounded-full bg-tertiary-fixed flex items-center justify-center font-bold text-sm flex-shrink-0">1</span>
                <span className="font-semibold text-charcoal">Grade 10 Science Foundations</span>
              </div>
              <div className="bg-white rounded-xl p-5 flex items-center gap-4">
                <span className="w-8 h-8 rounded-full bg-tertiary-fixed flex items-center justify-center font-bold text-sm flex-shrink-0">2</span>
                <span className="font-semibold text-charcoal">Grade 11 Biology (SBI3U, Biology 20, Life Sciences 11)</span>
              </div>
              <div className="bg-white rounded-xl p-5 flex items-center gap-4">
                <span className="w-8 h-8 rounded-full bg-tertiary-fixed flex items-center justify-center font-bold text-sm flex-shrink-0">3</span>
                <span className="font-semibold text-charcoal">Grade 12 Biology (SBI4U, Biology 30, Anatomy &amp; Physiology 12)</span>
              </div>
            </div>
            <div className="md:col-span-8 grid sm:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 border border-outline-variant">
                <h4 className="font-bold text-charcoal mb-2">Cells, Genetics &amp; Molecular Biology</h4>
                <p className="text-sm text-on-surface-variant">Cell structure and processes, DNA, protein synthesis, inheritance and the molecular genetics that dominates Grade 12 courses.</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-outline-variant">
                <h4 className="font-bold text-charcoal mb-2">Human Systems &amp; Homeostasis</h4>
                <p className="text-sm text-on-surface-variant">Body systems, feedback mechanisms and the homeostatic regulation that anchors senior human biology units.</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-outline-variant">
                <h4 className="font-bold text-charcoal mb-2">Ecology, Evolution &amp; Populations</h4>
                <p className="text-sm text-on-surface-variant">Ecosystems, biodiversity, natural selection and population dynamics, including the quantitative work students often underestimate.</p>
              </div>
              <div className="bg-secondary-fixed-dim rounded-xl p-6 col-span-full flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <h4 className="font-bold text-white text-lg mb-1">Grade 12 Biology Is Not a Memorisation Course</h4>
                  <p className="text-white/80 text-sm">SBI4U, Biology 30 and Anatomy and Physiology 12 ask students to explain mechanisms and interpret unfamiliar data, which catches out strong Grade 11 students.</p>
                </div>
                <button onClick={() => onNavigate('trial')} className="bg-white text-royal-purple px-6 py-2.5 rounded-full font-semibold whitespace-nowrap">Learn More</button>
              </div>
              <div className="col-span-full flex flex-wrap gap-2">
                {['SBI3U', 'SBI4U', 'Biology 30 Diploma', 'Anatomy &amp; Physiology 12', 'Molecular genetics'].map((tag) => (
                  <span key={tag} className="bg-white border border-outline-variant text-charcoal text-sm px-4 py-2 rounded-full">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grade-by-Grade Roadmap */}
      <section className="py-16 md:py-20">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4 text-center">Your Child&rsquo;s Biology Roadmap, Grade by Grade</h2>
          <p className="text-on-surface-variant text-center max-w-2xl mx-auto mb-12">
            Our <span className="font-semibold text-charcoal">online biology tutoring</span> prepares students for the shift from description to explanation that defines senior biology in every province.
          </p>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">Grade 10 Foundations</h4>
              <p className="text-sm text-on-surface-variant mb-4">Cells, body systems and ecosystems within integrated science. The vocabulary and basic cell biology built here support everything in the senior courses.</p>
              <ul className="space-y-1 text-sm font-medium text-charcoal border-t border-outline-variant pt-3">
                <li className="flex items-center gap-2"><LigatureIcon name="Check" className="w-4 h-4 text-royal-purple" /> Cell basics &amp; body systems</li>
                <li className="flex items-center gap-2"><LigatureIcon name="Check" className="w-4 h-4 text-royal-purple" /> Ecosystem fundamentals</li>
              </ul>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">Grade 11 Biology</h4>
              <p className="text-sm text-on-surface-variant mb-4">SBI3U, Biology 20 and Life Sciences 11. Diversity of living things, evolution, genetics, plants and animal systems, taught largely descriptively.</p>
              <ul className="space-y-1 text-sm font-medium text-charcoal border-t border-outline-variant pt-3">
                <li className="flex items-center gap-2"><LigatureIcon name="Check" className="w-4 h-4 text-royal-purple" /> Diversity &amp; evolution</li>
                <li className="flex items-center gap-2"><LigatureIcon name="Check" className="w-4 h-4 text-royal-purple" /> Genetics &amp; plant systems</li>
              </ul>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">Grade 12 Biology</h4>
              <p className="text-sm text-on-surface-variant mb-4">SBI4U, Biology 30 and Anatomy and Physiology 12. Biochemistry, metabolic processes, molecular genetics, homeostasis and population dynamics.</p>
              <ul className="space-y-1 text-sm font-medium text-charcoal border-t border-outline-variant pt-3">
                <li className="flex items-center gap-2"><LigatureIcon name="Check" className="w-4 h-4 text-royal-purple" /> Molecular genetics &amp; homeostasis</li>
                <li className="flex items-center gap-2"><LigatureIcon name="Check" className="w-4 h-4 text-royal-purple" /> Metabolic processes</li>
              </ul>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">University Preparation</h4>
              <p className="text-sm text-on-surface-variant mb-4">Senior biology is a prerequisite for life sciences, nursing, kinesiology and most health programs, and the Grade 12 mark forms part of the admission average.</p>
              <ul className="space-y-1 text-sm font-medium text-charcoal border-t border-outline-variant pt-3">
                <li className="flex items-center gap-2"><LigatureIcon name="Check" className="w-4 h-4 text-royal-purple" /> Health science prerequisites</li>
                <li className="flex items-center gap-2"><LigatureIcon name="Check" className="w-4 h-4 text-royal-purple" /> Data interpretation technique</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Quality */}
      <section className="py-16 md:py-20 bg-surface-container-low">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop grid md:grid-cols-2 gap-12 items-center">
          <img
            src="https://images.unsplash.com/photo-1576086213369-97a306d36557?w=800&q=80"
            alt="Biology tutor explaining cell processes during an online lesson"
            className="rounded-2xl shadow-xl w-full h-auto object-cover"
          />
          <div>
            <span className="inline-block bg-lime-green text-charcoal font-bold px-4 py-1.5 rounded-full mb-4">Course-Code Matched</span>
            <h2 className="text-3xl font-bold text-charcoal mb-6">Biology Tutors Matched to Your Course</h2>
            <p className="text-on-surface-variant mb-6 leading-relaxed">
              Our biology tutors hold degrees in biology or a related life science and are matched to the specific senior course your child is enrolled in. Screening through a criminal record and vulnerable sector check is completed for every tutor we assign.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <LigatureIcon name="CheckCircle" className="w-5 h-5 text-royal-purple mt-0.5" />
                <span className="text-on-surface-variant">Criminal record and vulnerable sector checked</span>
              </li>
              <li className="flex items-start gap-3">
                <LigatureIcon name="CheckCircle" className="w-5 h-5 text-royal-purple mt-0.5" />
                <span className="text-on-surface-variant">Degree-qualified in biology or a life science</span>
              </li>
              <li className="flex items-start gap-3">
                <LigatureIcon name="CheckCircle" className="w-5 h-5 text-royal-purple mt-0.5" />
                <span className="text-on-surface-variant">Matched to SBI3U, SBI4U, Biology 30 or Anatomy &amp; Physiology 12</span>
              </li>
            </ul>
            <button onClick={() => onNavigate('about')} className="bg-charcoal text-white px-8 py-3.5 rounded-full font-semibold">Learn More About Our Tutors</button>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 md:py-20">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-12 text-center">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">Why did my child do well in Grade 11 biology but struggle in Grade 12?</h4>
              <p className="text-on-surface-variant text-sm">Because the courses reward different things. Grade 11 biology is largely descriptive and rewards careful memorisation, while Grade 12 asks students to explain mechanisms, trace processes and interpret unfamiliar data. Students who succeeded through memorisation alone find that strategy stops working, and it reads as a sudden drop in ability when it is a change in what is being assessed.</p>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">Does Grade 12 biology require chemistry?</h4>
              <p className="text-on-surface-variant text-sm">Not always as a formal prerequisite, but in practice it helps enormously. The biochemistry and metabolic processes units assume comfort with bonding, functional groups and reactions, and students taking senior biology without chemistry often find those units the hardest part of the course. Most health science pathways require both anyway.</p>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">How much does the Alberta Biology 30 Diploma Exam count?</h4>
              <p className="text-on-surface-variant text-sm">It blends with the school-awarded mark to produce the final course grade on the transcript, weighted toward coursework, with a combined mark of at least 50 per cent required to pass. Since Alberta universities admit on those final marks, the exam matters more than its share of the grade implies.</p>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">What is the difference between BC Life Sciences 11 and Anatomy and Physiology 12?</h4>
              <p className="text-on-surface-variant text-sm">Life Sciences 11 surveys the diversity of living things, evolution and biological classification, while Anatomy and Physiology 12 focuses on human body systems in considerably more depth. The Grade 12 course is the one most commonly required for health science and nursing programs, and it is noticeably more demanding.</p>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">My child memorises everything and still loses marks. Why?</h4>
              <p className="text-on-surface-variant text-sm">Almost always on the explanation questions. Senior biology asks students to describe how a process works or predict what happens when a variable changes, and a memorised definition does not answer either. That reasoning is teachable, and improvement tends to come quickly once a student sees what the question is really asking for.</p>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">Is biology useful if my child wants to study nursing or kinesiology?</h4>
              <p className="text-on-surface-variant text-sm">It is usually required, alongside chemistry, for nursing, kinesiology, life sciences and most health programs across Canada. Requirements differ by institution, so confirm with the universities being considered, but students on a health pathway should treat senior biology as essential rather than optional.</p>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">Should my child take chemistry alongside biology?</h4>
              <p className="text-on-surface-variant text-sm">
                For anyone heading toward health sciences, almost certainly. Grade 12 biology leans heavily on chemistry for biochemistry and metabolic processes, and most nursing and life science programs require both, so many families pair biology with{' '}
                <button
                  onClick={() => onNavigate('subject', 'Chemistry')}
                  className="text-royal-purple font-bold underline underline-offset-2 cursor-pointer"
                >
                  chemistry tutoring
                </button>
                {' '}rather than discovering the dependency partway through the year.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* Related Subjects */}
      <section className="py-16 md:py-20">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4 text-center">Related Subjects</h2>
          <p className="text-on-surface-variant text-center max-w-2xl mx-auto mb-10">Biology leans on chemistry, and health pathways usually need both. Explore related subjects.</p>
          <div className="grid sm:grid-cols-3 gap-6">
            <button
              onClick={() => onNavigate('subject', 'Chemistry')}
              className="border border-outline-variant rounded-xl p-6 text-left hover:border-royal-purple transition-colors"
            >
              <h4 className="font-bold text-charcoal mb-1">Online Chemistry Tutor in Canada</h4>
              <span className="text-royal-purple font-semibold text-sm underline underline-offset-2">Chemistry tutoring</span>
            </button>
            <button
              onClick={() => onNavigate('subject', 'Science')}
              className="border border-outline-variant rounded-xl p-6 text-left hover:border-royal-purple transition-colors"
            >
              <h4 className="font-bold text-charcoal mb-1">Online Science Tutor in Canada</h4>
              <span className="text-royal-purple font-semibold text-sm underline underline-offset-2">Science tutoring</span>
            </button>
            <button
              onClick={() => onNavigate('subject', 'English')}
              className="border border-outline-variant rounded-xl p-6 text-left hover:border-royal-purple transition-colors"
            >
              <h4 className="font-bold text-charcoal mb-1">Online English Tutor in Canada</h4>
              <span className="text-royal-purple font-semibold text-sm underline underline-offset-2">English tutoring</span>
            </button>
          </div>
        </div>
      </section>

      {/* Book Your Free Trial Lesson */}
      <section className="py-16 md:py-20 bg-surface-container-low">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4 text-center">Book Your Free Trial Lesson</h2>
          <p className="text-on-surface-variant text-center max-w-2xl mx-auto mb-10">
            Tell us your child&rsquo;s grade, province and biology course, and we will match them with a specialist tutor for a free first lesson. No payment details needed.
          </p>
          <div id="ghl-form-wrap" >
            <iframe className="w-full h-[700px] border-none rounded-xl"
                    id="ghl-dynamic-form"
                    src="https://api.leadconnectorhq.com/widget/form/KoegIzV5zV9qvxp4I6O7?notrack=true"
                    data-layout="{'id':'INLINE'}"
                    data-form-name="Contact Us"
                    data-height="543"
                    data-layout-iframe-id="ghl-dynamic-form"
                    data-form-id="KoegIzV5zV9qvxp4I6O7"
                    title="Contact Us">
            </iframe>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-20">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="bg-royal-purple rounded-3xl p-10 md:p-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Understand Biology, Do Not Just Memorise It</h2>
            <p className="text-white/80 mb-8 max-w-xl mx-auto">From Grade 11 genetics to Grade 12 molecular biology and Diploma Exam preparation, our course-matched biology tutors are ready to help.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <button onClick={() => onNavigate('trial')} className="bg-white text-royal-purple px-8 py-3.5 rounded-full font-semibold">Book Free Trial</button>
              <button onClick={() => onNavigate('about')} className="border-2 border-white text-white px-8 py-3.5 rounded-full font-semibold">Contact Us</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}