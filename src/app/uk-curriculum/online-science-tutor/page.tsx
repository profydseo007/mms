'use client';

import React from 'react';
import type { ActivePage } from '@/lib/types';
import GradeLessonPlans from '@/components/subjects/GradeLessonPlans';
import { CheckCircle2, Clock3, DollarSign, Star } from 'lucide-react';
import { FreeTrialForm } from '@/components/FreeTrial';

type LigatureIconName = 'Clock' | 'DollarSign' | 'Star' | 'CheckCircle';

function LigatureIcon({ name, className }: { name: LigatureIconName; className?: string }) {
  const Icon = {
    Clock: Clock3,
    DollarSign: DollarSign,
    Star: Star,
    CheckCircle: CheckCircle2,
  }[name];

  return <Icon aria-hidden="true" className={className} />;
}

interface SubjectComponentProps {
  onNavigate: (page: ActivePage, subjectTitle?: string) => void;
}

export default function UKScienceTutorContent({ onNavigate }: SubjectComponentProps) {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-primary-fixed">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-white text-royal-purple text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
                Top-Rated UK Science Experts &amp; Educators
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-on-primary-fixed mb-6 leading-tight">
                Online Science Tutor <br className="hidden md:block" />in the UK
              </h1>
              <p className="text-lg text-on-primary-fixed/80 mb-8 max-w-xl">
                Get the science help you need right now from an expert <strong className="font-semibold">Online Science Tutor in the UK</strong>. We specialise in Key Stage 3 Science and GCSE Combined Science, building solid foundations in biology, chemistry and physics through one-to-one tutoring aligned with the AQA, Edexcel and OCR specifications used across England, Wales and Northern Ireland.
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
                  View UK Pricing
                </button>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&q=80"
                alt="Online science tutoring session for a UK secondary school student"
                className="rounded-2xl shadow-2xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-16 md:py-20">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4 text-center">Why Choose Math Make Smart for UK Science?</h2>
          <p className="text-on-surface-variant text-center max-w-2xl mx-auto mb-12">
            Stop stressing over required practicals, exam-board jargon and last-minute mock exams. We provide a dedicated online tutor for homework and test preparation, customised to the UK national curriculum and GCSE Combined Science specifications.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-surface-container-low rounded-2xl p-8">
              <div className="w-12 h-12 bg-lime-green rounded-xl flex items-center justify-center mb-5">
                <LigatureIcon name="Clock" className="w-6 h-6 text-charcoal" />
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-3">Flexible Timings &amp; Scheduling</h3>
              <p className="text-on-surface-variant">Book live interactive sessions around school hours, clubs, or weekend revision blocks in the run-up to mocks and GCSE exam season, wherever you are in the UK.</p>
            </div>
            <div className="bg-surface-container-low rounded-2xl p-8">
              <div className="w-12 h-12 bg-lime-green rounded-xl flex items-center justify-center mb-5">
                <LigatureIcon name="DollarSign" className="w-6 h-6 text-charcoal" />
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-3">Affordable Rates &amp; Packages</h3>
              <p className="text-on-surface-variant">Work with a genuinely dedicated private science tutor UK families trust, without paying the inflated hourly rates charged by many local tutoring centres.</p>
            </div>
            <div className="bg-surface-container-low rounded-2xl p-8">
              <div className="w-12 h-12 bg-lime-green rounded-xl flex items-center justify-center mb-5">
                <LigatureIcon name="Star" className="w-6 h-6 text-charcoal" />
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-3">Certified Science Specialists</h3>
              <p className="text-on-surface-variant">Work with verified STEM graduates who know how to teach working scientifically, required practicals, and exam technique across biology, chemistry and physics.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Focus */}
      <section className="py-16 md:py-20 bg-surface-container-low">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4 text-center">UK National Curriculum <br className="hidden md:block" />Key Stage 3 to GCSE Combined Science</h2>
          <p className="text-on-surface-variant text-center max-w-2xl mx-auto mb-12">
            From building strong Key Stage 3 Science foundations to full GCSE Combined Science exam preparation, our syllabus follows the AQA, Edexcel and OCR specifications used in UK schools.
          </p>
          <div className="grid md:grid-cols-12 gap-6">
            <div className="md:col-span-4 space-y-4">
              <div className="bg-white rounded-xl p-5 flex items-center gap-4">
                <span className="w-8 h-8 rounded-full bg-tertiary-fixed flex items-center justify-center font-bold text-sm flex-shrink-0">1</span>
                <span className="font-semibold text-charcoal">KS3 Science Foundations (Years 7-9)</span>
              </div>
              <div className="bg-white rounded-xl p-5 flex items-center gap-4">
                <span className="w-8 h-8 rounded-full bg-tertiary-fixed flex items-center justify-center font-bold text-sm flex-shrink-0">2</span>
                <span className="font-semibold text-charcoal">GCSE Combined Science — Foundation &amp; Higher Tier (Years 10-11)</span>
              </div>
              <div className="bg-white rounded-xl p-5 flex items-center gap-4">
                <span className="w-8 h-8 rounded-full bg-tertiary-fixed flex items-center justify-center font-bold text-sm flex-shrink-0">3</span>
                <span className="font-semibold text-charcoal">Progression to Triple Science &amp; A-Level</span>
              </div>
            </div>
            <div className="md:col-span-8 grid sm:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 border border-outline-variant">
                <h4 className="font-bold text-charcoal mb-2">Biology Strand: Cells, Organisation &amp; Genetics</h4>
                <p className="text-sm text-on-surface-variant">Cell structure, specialisation, human body systems, inheritance and the basics of variation and evolution.</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-outline-variant">
                <h4 className="font-bold text-charcoal mb-2">Physics Strand: Forces, Energy &amp; Electricity</h4>
                <p className="text-sm text-on-surface-variant">Motion and forces, energy stores and transfers, electrical circuits, and an introduction to waves and radioactivity.</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-outline-variant">
                <h4 className="font-bold text-charcoal mb-2">Chemistry Strand: Atomic Structure &amp; Chemical Changes</h4>
                <p className="text-sm text-on-surface-variant">Atomic structure and the periodic table, bonding, chemical reactions, and the maths that examiners expect in Combined Science.</p>
              </div>
              <div className="bg-secondary-fixed-dim rounded-xl p-6 col-span-full flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <h4 className="font-bold text-white text-lg mb-1">Build a Strong Science Foundation</h4>
                  <p className="text-white/80 text-sm">We focus on working scientifically and required-practical technique early, so students walk into GCSE assessments confident with data, graphs and lab-based questions.</p>
                </div>
                <button onClick={() => onNavigate('trial')} className="bg-white text-royal-purple px-6 py-2.5 rounded-full font-semibold whitespace-nowrap">Get Started</button>
              </div>
              <div className="col-span-full">
                <p className="text-on-surface-variant mb-4">Ready to go deeper into one subject? Once a student is sitting Triple Science or thinking ahead to A-Level, our dedicated specialists take it from here:</p>
                <div className="flex flex-wrap gap-3">
                  <button onClick={() => onNavigate('subject', 'Biology')} className="bg-white border border-outline-variant text-charcoal text-sm px-4 py-2 rounded-full hover:border-royal-purple">Biology Tutoring</button>
                  <button onClick={() => onNavigate('subject', 'Physics')} className="bg-white border border-outline-variant text-charcoal text-sm px-4 py-2 rounded-full hover:border-royal-purple">Physics Tutoring</button>
                  <button onClick={() => onNavigate('subject', 'Chemistry')} className="bg-white border border-outline-variant text-charcoal text-sm px-4 py-2 rounded-full hover:border-royal-purple">Chemistry Tutoring</button>
                </div>
              </div>
              <div className="col-span-full flex flex-wrap gap-2">
                {['Working Scientifically', 'Required Practicals', 'Ecosystems & Biodiversity', 'Atomic Structure', 'Forces & Motion', 'Electromagnetism', 'Chemical Reactions'].map((tag) => (
                  <span key={tag} className="bg-white border border-outline-variant text-charcoal text-sm px-4 py-2 rounded-full">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grade-by-Grade Lesson Plans */}
      <section className="py-16 md:py-20">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-12 text-center">Science Tutoring Pathways: KS3 to GCSE</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">KS3 Science (Years 7-9)</h4>
              <p className="text-sm text-on-surface-variant">Broad, balanced coverage of biology, chemistry and physics that prepares students for GCSE options while building confidence in the lab and with scientific method. Covers working scientifically, data skills, and foundations in cells, particles &amp; forces.</p>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">GCSE Combined Science — Foundation Tier</h4>
              <p className="text-sm text-on-surface-variant">Support built around the AQA, Edexcel and OCR Combined Science (Double Award) specifications, aimed at students working towards the Foundation tier grade range. Covers Foundation-tier exam technique and core required-practical recall.</p>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">GCSE Combined Science — Higher Tier</h4>
              <p className="text-sm text-on-surface-variant">Extra depth across all three sciences for students taking the Higher tier, with a stronger focus on the maths-in-science skills that Combined Science papers test. Covers Higher-tier problem solving and required-practical data analysis.</p>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">Bridging to Triple Science &amp; A-Level</h4>
              <p className="text-sm text-on-surface-variant">For students moving into separate GCSE Triple Science or thinking ahead to A-Level, we prepare the transition and then hand over to our dedicated Biology, Physics and Chemistry tutors, covering triple science subject foundations and a smooth handover to specialist tutors.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Quality */}
      <section className="py-16 md:py-20 bg-surface-container-low">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop grid md:grid-cols-2 gap-12 items-center">
          <img
            src="https://images.unsplash.com/photo-1577896851231-70ef18881754?w=800&q=80"
            alt="UK science tutor conducting an interactive online tutoring session"
            className="rounded-2xl shadow-xl w-full h-auto object-cover"
          />
          <div>
            <span className="inline-block bg-lime-green text-charcoal font-bold px-4 py-1.5 rounded-full mb-4">99% Student Satisfaction</span>
            <h2 className="text-3xl font-bold text-charcoal mb-6">Qualified UK Science Tutors Trusted by Parents Nationwide</h2>
            <p className="text-on-surface-variant mb-6">
              Our educators are science graduates and experienced teachers who understand the UK national curriculum inside out. Every tutor is DBS-checked and trained to deliver engaging, confidence-building one-to-one tutoring, whether online or via structured written feedback.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3"><LigatureIcon name="CheckCircle" className="w-5 h-5 text-royal-purple mt-0.5" /><span className="text-on-surface-variant">DBS-Checked &amp; Safeguarding-Trained Educators</span></li>
              <li className="flex items-start gap-3"><LigatureIcon name="CheckCircle" className="w-5 h-5 text-royal-purple mt-0.5" /><span className="text-on-surface-variant">Graduates from Leading UK Universities &amp; STEM Institutions</span></li>
              <li className="flex items-start gap-3"><LigatureIcon name="CheckCircle" className="w-5 h-5 text-royal-purple mt-0.5" /><span className="text-on-surface-variant">Specialists in AQA, Edexcel &amp; OCR GCSE Combined Science</span></li>
            </ul>
            <button onClick={() => onNavigate('about')} className="bg-charcoal text-white px-8 py-3.5 rounded-full font-semibold">Learn More About Our Tutors</button>
          </div>
        </div>
      </section>

      <GradeLessonPlans
        onNavigate={onNavigate}
        subject="Science"
        description="Explore UK science lesson plans aligned with local year groups, courses and exams."
        plans={[
          { grade: 'Years 1–6', band: 'Primary' },
          { grade: 'Years 7–9', band: 'Key Stage 3' },
          { grade: 'GCSE Combined Science', band: 'GCSE' },
          { grade: 'GCSE Biology', band: 'GCSE' },
          { grade: 'GCSE Chemistry', band: 'GCSE' },
          { grade: 'GCSE Physics', band: 'GCSE' },
        ]}
      />

      {/* FAQs */}
      <section className="py-16 md:py-20">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-12 text-center">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">What's the actual difference between GCSE Combined Science and Triple Science?</h4>
              <p className="text-on-surface-variant text-sm">Combined Science (sometimes called Double Award) results in two GCSE grades and covers biology, chemistry and physics in slightly less depth than Triple Science, which awards three separate GCSEs. Most students in England take Combined Science; Triple Science is usually an option offered to those aiming for the sciences at A-Level.</p>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">Will taking Combined Science limit my child's options later on?</h4>
              <p className="text-on-surface-variant text-sm">Not automatically. Plenty of students go on to study Biology, Chemistry or Physics at A-Level having taken Combined Science at GCSE. That said, some sixth forms prefer or require a grade 6 or above in the relevant Combined Science strand, and a few competitive courses may favour applicants with Triple Science. It's worth checking entry requirements at your child's intended sixth form early rather than assuming either way.</p>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">Is Key Stage 3 tutoring really worth it before GCSEs even start?</h4>
              <p className="text-on-surface-variant text-sm">Yes, more than most parents expect. GCSE Combined Science builds directly on KS3 topics like cells, particles, energy and forces, so a student who arrives at Year 10 with shaky foundations tends to spend the first term catching up rather than progressing. A bit of targeted KS3 Science support in Years 7-9 usually pays off later.</p>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">Can online tutoring actually help with required practicals?</h4>
              <p className="text-on-surface-variant text-sm">We can't run the practical in your kitchen, but we don't need to. Exam boards test required practicals through written questions about method, variables, apparatus and data analysis, and that's exactly where tutoring helps most — walking through diagrams, past-paper practical questions, and typical graph or table interpretation until it clicks.</p>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">Should we book general Science tutoring or go straight to a Biology, Physics or Chemistry specialist?</h4>
              <p className="text-on-surface-variant text-sm">If your child is in Key Stage 3 or working towards GCSE Combined Science, this page is the right starting point — one tutor covering all three sciences together. Once a student is sitting Triple Science or A-Level and needs to go deep into a single subject, it usually makes more sense to move to a dedicated <button onClick={() => onNavigate('subject', 'Biology')} className="text-royal-purple font-semibold underline">Biology tutor</button>, Physics tutor or Chemistry tutor. We're happy to advise during a free consultation if you're not sure which fits.</p>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">Which exam boards do your Science tutors cover?</h4>
              <p className="text-on-surface-variant text-sm">Our tutors are familiar with the AQA, Edexcel and OCR Combined Science specifications, which cover the vast majority of UK schools. Let us know which board your child sits during the initial consultation so lessons and practice questions match their actual exam.</p>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">Is there a free trial lesson available?</h4>
              <p className="text-on-surface-variant text-sm">Yes. You can book a complimentary trial lesson with one of our Science tutors, with no upfront payment and no obligation to continue afterwards.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Book Your Free Trial Lesson */}
      <section className="py-16 md:py-20 bg-surface-container-low">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4 text-center">Book Your Free Trial Lesson</h2>
          <p className="text-on-surface-variant text-center max-w-2xl mx-auto mb-10">Tell us a little about your child's Key Stage or GCSE exam board and we'll match them with the right Science tutor. No payment required to get started.</p>
          <FreeTrialForm />
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-20">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="bg-royal-purple rounded-3xl p-10 md:p-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Build Confidence in Science Today!</h2>
            <p className="text-white/80 mb-8 max-w-xl mx-auto">Master the core ideas across biology, chemistry and physics and walk into your GCSE Combined Science exams with confidence. Join students across the UK making sense of Key Stage 3 and GCSE Science with one-to-one tutoring.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <button onClick={() => onNavigate('trial')} className="bg-white text-royal-purple px-8 py-3.5 rounded-full font-semibold">Book Free Trial Lesson</button>
              <button onClick={() => onNavigate('about')} className="border-2 border-white text-white px-8 py-3.5 rounded-full font-semibold">Contact Us</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
