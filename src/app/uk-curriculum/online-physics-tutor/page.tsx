'use client';

import React from 'react';
import type { ActivePage } from '@/lib/types';
import GradeLessonPlans from '@/components/subjects/GradeLessonPlans';
import { CheckCircle2, Clock3, DollarSign, Star } from 'lucide-react';
import { FreeTrialForm } from '@/components/FreeTrial';

type LigatureIconName = 'Clock' | 'DollarSign' | 'Star' | 'CheckCircle';

interface LigatureIconProps {
  name: LigatureIconName;
  className?: string;
}

function LigatureIcon({ name, className = '' }: LigatureIconProps) {
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

export default function UKPhysicsTutorContent({ onNavigate }: SubjectComponentProps) {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-primary-fixed">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-white text-royal-purple text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
                Subject Tutoring
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-on-primary-fixed mb-6 leading-tight">
                Online Physics Tutor <br className="hidden md:block" />in the UK
              </h1>
              <p className="text-lg text-on-primary-fixed/80 mb-8 max-w-xl">
                Get the physics support you need right now from an expert <strong>Online Physics Tutor in the UK</strong>. Whether your child is working through Key Stage 3 topics, preparing for GCSE Physics (Foundation or Higher tier) with AQA, Edexcel or OCR, or tackling A-Level Physics, our one-to-one tutoring builds real understanding of forces and motion, electricity and circuits, and waves — not just exam tricks. Many families also use us as an <strong>Online Tutor for Homework and Test preparation</strong> between full topic blocks, so no lesson gets left behind.
              </p>
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => onNavigate('trial')}
                  className="bg-charcoal text-white px-8 py-3.5 rounded-full font-semibold hover:bg-charcoal/90 transition-colors"
                >
                  Book a Free Trial Lesson
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
                alt="Online physics tutor teaching a UK student"
                className="rounded-2xl shadow-2xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-16 md:py-20">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4 text-center">Why Choose Math Make Smart for UK Physics?</h2>
          <p className="text-on-surface-variant text-center max-w-2xl mx-auto mb-12">Stop stressing over tricky calculations and required practicals. We provide dedicated online physics tutoring customised for the UK national curriculum and every major exam board.</p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-surface-container-low rounded-2xl p-8">
              <div className="w-12 h-12 bg-lime-green rounded-xl flex items-center justify-center mb-5">
                <LigatureIcon name="Clock" className="w-6 h-6 text-charcoal" />
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-3">Flexible Timings &amp; Scheduling</h3>
              <p className="text-on-surface-variant">Book live interactive sessions around school clubs, revision timetables, or weekend study blocks — wherever you are in the UK.</p>
            </div>
            <div className="bg-surface-container-low rounded-2xl p-8">
              <div className="w-12 h-12 bg-lime-green rounded-xl flex items-center justify-center mb-5">
                <LigatureIcon name="DollarSign" className="w-6 h-6 text-charcoal" />
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-3">Affordable Rates &amp; Packages</h3>
              <p className="text-on-surface-variant">High-grade private physics tutor UK sessions without the steep hourly fees of local tuition centres.</p>
            </div>
            <div className="bg-surface-container-low rounded-2xl p-8">
              <div className="w-12 h-12 bg-lime-green rounded-xl flex items-center justify-center mb-5">
                <LigatureIcon name="Star" className="w-6 h-6 text-charcoal" />
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-3">Certified Physics Experts</h3>
              <p className="text-on-surface-variant">Work with verified STEM specialists who know exactly how to break down free-body diagrams, circuit analysis, and wave equations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Focus */}
      <section className="py-16 md:py-20 bg-surface-container-low">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4 text-center">UK National Curriculum <br className="hidden md:block" />Key Stage 3 to A-Level Physics</h2>
          <p className="text-on-surface-variant text-center max-w-2xl mx-auto mb-12">From foundational Key Stage 3 physics through to rigorous A-Level exam preparation, our syllabus follows the AQA, Edexcel and OCR specifications used across the UK.</p>
          <div className="grid md:grid-cols-12 gap-6">
            <div className="md:col-span-4 space-y-4">
              <div className="bg-white rounded-xl p-5 flex items-center gap-4">
                <span className="w-8 h-8 rounded-full bg-tertiary-fixed flex items-center justify-center font-bold text-sm flex-shrink-0">1</span>
                <span className="font-semibold text-charcoal">KS3 Physics Foundations (Years 7-9)</span>
              </div>
              <div className="bg-white rounded-xl p-5 flex items-center gap-4">
                <span className="w-8 h-8 rounded-full bg-tertiary-fixed flex items-center justify-center font-bold text-sm flex-shrink-0">2</span>
                <span className="font-semibold text-charcoal">GCSE Physics — Foundation &amp; Higher Tier (Years 10-11)</span>
              </div>
              <div className="bg-white rounded-xl p-5 flex items-center gap-4">
                <span className="w-8 h-8 rounded-full bg-tertiary-fixed flex items-center justify-center font-bold text-sm flex-shrink-0">3</span>
                <span className="font-semibold text-charcoal">A-Level Physics (Years 12-13)</span>
              </div>
            </div>
            <div className="md:col-span-8 grid sm:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 border border-outline-variant">
                <h4 className="font-bold text-charcoal mb-2">Forces &amp; Motion</h4>
                <p className="text-sm text-on-surface-variant">Newton's laws, resultant forces, moments, momentum, and interpreting distance-time and velocity-time graphs.</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-outline-variant">
                <h4 className="font-bold text-charcoal mb-2">Electricity &amp; Circuits</h4>
                <p className="text-sm text-on-surface-variant">Series and parallel circuits, current-voltage relationships, resistance, and practical circuit-building skills.</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-outline-variant">
                <h4 className="font-bold text-charcoal mb-2">Waves &amp; Radiation</h4>
                <p className="text-sm text-on-surface-variant">Wave properties, reflection and refraction, the electromagnetic spectrum, and an introduction to radioactive decay.</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-outline-variant">
                <h4 className="font-bold text-charcoal mb-2">Energy, Space &amp; Magnetism</h4>
                <p className="text-sm text-on-surface-variant">Energy resources and transfers, magnetism and electromagnetism, the particle model of matter, atomic structure and space physics.</p>
              </div>
              <div className="bg-secondary-fixed-dim rounded-xl p-6 col-span-full flex flex-col sm:flex-row items-center justify-between gap-4">
                <h4 className="font-bold text-white text-lg">Ace Your GCSE or A-Level Physics Exam</h4>
                <button onClick={() => onNavigate('trial')} className="bg-white text-royal-purple px-6 py-2.5 rounded-full font-semibold whitespace-nowrap">Get Started</button>
              </div>
              <div className="col-span-full flex flex-wrap gap-2">
                {['Energy Resources', 'Magnetism & Electromagnetism', 'Particle Model of Matter', 'Atomic Structure', 'Space Physics', 'Required Practicals'].map((tag) => (
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
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-12 text-center">UK Key Stage &amp; A-Level Physics Lesson Plans</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">Years 7-9: KS3 Physics</h4>
              <p className="text-sm text-on-surface-variant">A broad introduction to physics — forces, energy stores and transfers, simple circuits, and the basics of space — that lays the groundwork for everything students meet at GCSE.</p>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">GCSE Physics: Foundation Tier</h4>
              <p className="text-sm text-on-surface-variant">Covers the full Foundation tier specification across AQA, Edexcel and OCR at a steady pace, with a strong focus on core equations and required practicals. Ideal for students building confidence toward grades 4-5.</p>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">GCSE Physics: Higher Tier</h4>
              <p className="text-sm text-on-surface-variant">Tackles the full specification in greater mathematical depth, including harder calculation questions and extended-response answers. Best suited to students aiming for grade 6 and above.</p>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">Years 12-13: A-Level Physics</h4>
              <p className="text-sm text-on-surface-variant">Moves into calculus-based mechanics, fields, and nuclear and quantum physics, with far more rigorous derivations than GCSE. A-Level Physics is also a common gateway subject for students heading toward engineering and physical-sciences degrees.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Quality */}
      <section className="py-16 md:py-20 bg-surface-container-low">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop grid md:grid-cols-2 gap-12 items-center">
          <img src="https://images.unsplash.com/photo-1577896851231-70ef18881754?w=800&q=80" alt="UK Physics tutor conducting an interactive online tutoring session" className="rounded-2xl shadow-xl w-full h-auto object-cover" />
          <div>
            <span className="inline-block bg-lime-green text-charcoal font-bold px-4 py-1.5 rounded-full mb-4">99% Satisfaction Rate</span>
            <h2 className="text-3xl font-bold text-charcoal mb-6">Trusted by Families Across the UK</h2>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3"><LigatureIcon name="CheckCircle" className="w-5 h-5 text-royal-purple mt-0.5" /><span className="text-on-surface-variant">Fully DBS-Checked &amp; Background-Screened Tutors</span></li>
              <li className="flex items-start gap-3"><LigatureIcon name="CheckCircle" className="w-5 h-5 text-royal-purple mt-0.5" /><span className="text-on-surface-variant">Graduates from Leading UK Universities</span></li>
              <li className="flex items-start gap-3"><LigatureIcon name="CheckCircle" className="w-5 h-5 text-royal-purple mt-0.5" /><span className="text-on-surface-variant">Specialists in GCSE and A-Level Physics Across Every Exam Board</span></li>
            </ul>
            <button onClick={() => onNavigate('about')} className="bg-charcoal text-white px-8 py-3.5 rounded-full font-semibold">Learn More About Us</button>
          </div>
        </div>
      </section>

      <GradeLessonPlans
        onNavigate={onNavigate}
        subject="Physics"
        description="Explore UK physics lesson plans aligned with local year groups, courses and exams."
        plans={[
          { grade: 'Years 7–9', band: 'Key Stage 3' },
          { grade: 'GCSE Physics', band: 'GCSE' },
          { grade: 'A-level Physics', band: 'A-level' },
          { grade: 'A-level Mechanics', band: 'A-level' },
        ]}
      />

      {/* FAQs */}
      <section className="py-16 md:py-20">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-12 text-center">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">What's the actual difference between Foundation and Higher tier GCSE Physics?</h4>
              <p className="text-on-surface-variant text-sm">Foundation tier caps out at a grade 5, while Higher tier opens the door up to a grade 9 but brings noticeably harder maths and trickier multi-step questions. We'll talk through your child's current working grade and target university or sixth-form pathway before recommending a tier — and we can switch focus later if their trajectory changes.</p>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">How do you cover required practicals when tutoring is online?</h4>
              <p className="text-on-surface-variant text-sm">We can't literally wire up a circuit together over a screen, but exam boards test practicals through written questions far more than hands-on assessment. Your tutor walks through the method, the equipment, common sources of error, and how to write up results and conclusions the way examiners actually mark them — using diagrams, recorded practical footage, and real past-paper questions on each required practical.</p>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">What does A-Level Physics add on top of GCSE?</h4>
              <p className="text-on-surface-variant text-sm">The jump is bigger than most students expect. A-Level brings in calculus-based mechanics, more demanding algebra, and derivations you're expected to reproduce rather than just apply. Topics like fields, quantum phenomena, and nuclear physics also go far deeper than their GCSE introductions, so we spend real time bridging that gap in the first few sessions rather than assuming it clicks automatically.</p>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">Can A-Level Physics tutoring help with university admissions tests too?</h4>
              <p className="text-on-surface-variant text-sm">Yes — for students applying to engineering or physical sciences courses, A-Level Physics content overlaps heavily with what's tested on admissions exams such as the ESAT. Once the core specification is solid, we can shift sessions toward that kind of{' '}
                <button onClick={() => onNavigate('test-prep', 'university-admissions-tests')} className="text-royal-purple font-semibold underline">university admissions test preparation</button>
                {' '}so students walk into their application cycle already comfortable with the format.</p>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">My child is only stuck on one topic, like circuits or forces — can you just work on that?</h4>
              <p className="text-on-surface-variant text-sm">Definitely. Plenty of families come to us with one specific weak spot rather than a whole-syllabus problem. We'll run a quick diagnostic in the first session, identify exactly where the misunderstanding sits, and build a short, focused block around it instead of dragging your child back through topics they've already mastered.</p>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">How are tutors matched to students by year group and exam board?</h4>
              <p className="text-on-surface-variant text-sm">During your initial consultation, we ask about current year group, exam board (AQA, Edexcel or OCR), tier where relevant, and target grade, then pair your child with a tutor who genuinely specialises in that specification rather than physics in general.</p>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">Is there a free trial lesson available?</h4>
              <p className="text-on-surface-variant text-sm">Yes. You can book a complimentary trial lesson with one of our expert physics tutors, with no upfront payment and no long-term commitment required.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Book Your Free Trial Lesson */}
      <section className="py-16 md:py-20 bg-surface-container-low">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4 text-center">Book Your Free Trial Lesson</h2>
          <p className="text-on-surface-variant text-center max-w-2xl mx-auto mb-10">Fill in a few details below and one of our physics specialists will be in touch to arrange your free trial lesson at a time that suits you.</p>
          <FreeTrialForm />
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-20">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="bg-royal-purple rounded-3xl p-10 md:p-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Build Real Physics Understanding Today!</h2>
            <p className="text-white/80 mb-8 max-w-xl mx-auto">Master forces, circuits and waves with real confidence, and walk into your next exam ready for whatever the paper throws at you. Join students across the UK reaching their full potential in physics.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <button onClick={() => onNavigate('trial')} className="bg-white text-royal-purple px-8 py-3.5 rounded-full font-semibold">Book a Free Trial Lesson</button>
              <button onClick={() => onNavigate('pricing')} className="border-2 border-white text-white px-8 py-3.5 rounded-full font-semibold">View Pricing</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
