'use client';

import React from 'react';
import type { ActivePage } from '@/lib/types';

interface LigatureIconProps {
  name: string;
  className?: string;
}

function LigatureIcon({ name, className }: LigatureIconProps) {
  const icon = name === 'CheckCircle'
    ? 'M9 12l2 2 4-4m5 2a8 8 0 11-16 0 8 8 0 0116 0z'
    : name === 'Clock'
      ? 'M12 6v6l4 2m5-2a9 9 0 11-18 0 9 9 0 0118 0z'
      : name === 'Star'
        ? 'M12 3l2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-3-5.6 3 1.1-6.2L3 9.6l6.2-.9L12 3z'
        : 'M12 3v18m-9-9h18';

  return (
    <svg aria-hidden="true" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d={icon} />
    </svg>
  );
}

interface SubjectComponentProps {
  onNavigate: (page: ActivePage, subjectTitle?: string) => void;
}

export default function UKChemistryTutorPage({ onNavigate }: SubjectComponentProps) {
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
                Online Chemistry Tutor <br className="hidden md:block" />in the UK
              </h1>
              <p className="text-lg text-on-primary-fixed/80 mb-8 max-w-xl">
                Looking for an <strong>Online Chemistry Tutor in the UK</strong>? We match Key Stage 3, GCSE and A-Level students with a dedicated private chemistry tutor UK families trust, for 1-to-1 chemistry tuition that builds real understanding, not just memorised answers.
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
                alt="Online chemistry tutor teaching a UK student"
                className="rounded-2xl shadow-2xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-16 md:py-20">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4 text-center">An Online Tutor for Homework and Test Preparation</h2>
          <p className="text-on-surface-variant text-center max-w-2xl mx-auto mb-12">Whether it's a tricky moles calculation due tomorrow or a full GCSE Chemistry exam revision plan, our tutors adapt to what your child actually needs.</p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-surface-container-low rounded-2xl p-8">
              <div className="w-12 h-12 bg-lime-green rounded-xl flex items-center justify-center mb-5">
                <LigatureIcon name="Clock" className="w-6 h-6 text-charcoal" />
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-3">Lessons That Fit Around School</h3>
              <p className="text-on-surface-variant">Book evening or weekend sessions around homework, mocks and extracurriculars — our online chemistry lessons UK families can schedule any day of the week.</p>
            </div>
            <div className="bg-surface-container-low rounded-2xl p-8">
              <div className="w-12 h-12 bg-lime-green rounded-xl flex items-center justify-center mb-5">
                <LigatureIcon name="DollarSign" className="w-6 h-6 text-charcoal" />
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-3">Fair, Transparent Pricing</h3>
              <p className="text-on-surface-variant">Focused 1-to-1 chemistry tuition priced sensibly for UK households, with no hidden fees or long lock-in contracts.</p>
            </div>
            <div className="bg-surface-container-low rounded-2xl p-8">
              <div className="w-12 h-12 bg-lime-green rounded-xl flex items-center justify-center mb-5">
                <LigatureIcon name="Star" className="w-6 h-6 text-charcoal" />
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-3">Exam-Board Fluent Tutors</h3>
              <p className="text-on-surface-variant">Every GCSE Chemistry tutor and A-Level Chemistry tutor on our team knows the AQA, Edexcel and OCR Chemistry specifications inside out.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Focus */}
      <section className="py-16 md:py-20 bg-surface-container-low">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4 text-center">UK National Curriculum <br className="hidden md:block" />Key Stage 3 to A-Level Chemistry</h2>
          <p className="text-on-surface-variant text-center max-w-2xl mx-auto mb-12">Mapped to the content your child is actually taught in the classroom, from Key Stage 3 Chemistry right through to full A-Level.</p>
          <div className="grid md:grid-cols-12 gap-6">
            <div className="md:col-span-4 space-y-4">
              <div className="bg-white rounded-xl p-5 flex items-center gap-4">
                <span className="w-8 h-8 rounded-full bg-tertiary-fixed flex items-center justify-center font-bold text-sm flex-shrink-0">1</span>
                <span className="font-semibold text-charcoal">KS3 Chemistry Foundations</span>
              </div>
              <div className="bg-white rounded-xl p-5 flex items-center gap-4">
                <span className="w-8 h-8 rounded-full bg-tertiary-fixed flex items-center justify-center font-bold text-sm flex-shrink-0">2</span>
                <span className="font-semibold text-charcoal">GCSE Chemistry (Foundation & Higher Tier)</span>
              </div>
              <div className="bg-white rounded-xl p-5 flex items-center gap-4">
                <span className="w-8 h-8 rounded-full bg-tertiary-fixed flex items-center justify-center font-bold text-sm flex-shrink-0">3</span>
                <span className="font-semibold text-charcoal">A-Level Chemistry</span>
              </div>
            </div>
            <div className="md:col-span-8 grid sm:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 border border-outline-variant">
                <h4 className="font-bold text-charcoal mb-2">Atomic Structure & the Periodic Table</h4>
                <p className="text-sm text-on-surface-variant">Atomic structure, electronic configuration, periodic trends, and ionic, covalent and metallic bonding.</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-outline-variant">
                <h4 className="font-bold text-charcoal mb-2">Chemical Changes & Quantitative Chemistry</h4>
                <p className="text-sm text-on-surface-variant">Reactivity series, acids, alkalis and salts, electrolysis, moles, stoichiometry and concentration calculations.</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-outline-variant">
                <h4 className="font-bold text-charcoal mb-2">Energy Changes & Rates of Reaction</h4>
                <p className="text-sm text-on-surface-variant">Exothermic and endothermic reactions, activation energy, collision theory and the role of catalysts.</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-outline-variant">
                <h4 className="font-bold text-charcoal mb-2">Organic Chemistry & Analysis</h4>
                <p className="text-sm text-on-surface-variant">Hydrocarbons, crude oil, polymers, and chemical analysis techniques including chromatography.</p>
              </div>
              <div className="bg-secondary-fixed-dim rounded-xl p-6 col-span-full flex flex-col sm:flex-row items-center justify-between gap-4">
                <h4 className="font-bold text-white text-lg">Ace Your GCSE or A-Level Chemistry Exam</h4>
                <button onClick={() => onNavigate('trial')} className="bg-white text-royal-purple px-6 py-2.5 rounded-full font-semibold whitespace-nowrap">Get Started</button>
              </div>
              <div className="col-span-full flex flex-wrap gap-2">
                {['Atomic Structure', 'Bonding', 'Quantitative Chemistry', 'Organic Chemistry', 'Chemical Analysis', 'Required Practicals', 'Equilibria (A-Level)', 'Transition Metals (A-Level)'].map((tag) => (
                  <span key={tag} className="bg-white border border-outline-variant text-charcoal text-sm px-4 py-2 rounded-full">{tag}</span>
                ))}
              </div>
            </div>
          </div>
          <p className="text-on-surface-variant text-sm max-w-3xl mx-auto mt-10 text-center">
            At A-Level, we cover all three strands of the specification: Physical Chemistry (atomic structure, bonding, energetics, kinetics, equilibria and thermodynamics), Inorganic Chemistry (periodic trends, group elements and transition metals), and Organic Chemistry (hydrocarbons, alcohols, carbonyl compounds, amines and polymers).
          </p>
        </div>
      </section>

      {/* Grade-by-Grade Lesson Plans */}
      <section className="py-16 md:py-20">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-12 text-center">UK Key Stage & A-Level Chemistry Lesson Plans</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">KS3 Chemistry (Years 7-9)</h4>
              <p className="text-sm text-on-surface-variant">States of matter, atomic structure, chemical reactions, acids & alkalis, the periodic table and energy changes — building strong foundations before GCSE.</p>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">GCSE Chemistry — Foundation Tier</h4>
              <p className="text-sm text-on-surface-variant">Core content (grades 1-5) across atomic structure, bonding, chemical changes, energy changes and quantitative chemistry.</p>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">GCSE Chemistry — Higher Tier</h4>
              <p className="text-sm text-on-surface-variant">The full specification (grades 4-9, with a grade-3 safety net), including tougher calculations, organic chemistry and chemical analysis, plus AQA, Edexcel and OCR exam-board-specific practice.</p>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">A-Level Chemistry</h4>
              <p className="text-sm text-on-surface-variant">Physical, Inorganic and Organic Chemistry, practical endorsement support, and guidance for university applications in chemistry, medicine, pharmacy and engineering.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Quality */}
      <section className="py-16 md:py-20 bg-surface-container-low">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop grid md:grid-cols-2 gap-12 items-center">
          <img src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=800&q=80" alt="Chemistry tutor working with a student online" className="rounded-2xl shadow-xl w-full h-auto object-cover" />
          <div>
            <span className="inline-block bg-lime-green text-charcoal font-bold px-4 py-1.5 rounded-full mb-4">99% Satisfaction Rate</span>
            <h2 className="text-3xl font-bold text-charcoal mb-6">Trusted by Families Across the UK</h2>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3"><LigatureIcon name="CheckCircle" className="w-5 h-5 text-royal-purple mt-0.5" /><span className="text-on-surface-variant">DBS-checked and safeguarding-trained educators</span></li>
              <li className="flex items-start gap-3"><LigatureIcon name="CheckCircle" className="w-5 h-5 text-royal-purple mt-0.5" /><span className="text-on-surface-variant">Specialists in GCSE and A-Level Chemistry across AQA, Edexcel & OCR</span></li>
              <li className="flex items-start gap-3"><LigatureIcon name="CheckCircle" className="w-5 h-5 text-royal-purple mt-0.5" /><span className="text-on-surface-variant">Proven track record improving grades and exam confidence</span></li>
            </ul>
            <button onClick={() => onNavigate('about')} className="bg-charcoal text-white px-8 py-3.5 rounded-full font-semibold">Learn More About Us</button>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 md:py-20">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-12 text-center">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">What's the difference between Foundation and Higher tier GCSE Chemistry?</h4>
              <p className="text-on-surface-variant text-sm">Foundation tier covers grades 1 to 5 and sticks to the core specification, while Higher tier runs from grade 4 to 9 (with a grade-3 safety net) and includes more demanding calculations and content. Our tutors help you pick the right tier based on mock results and confidence, not just guesswork.</p>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">Is GCSE Chemistry different from Combined Science?</h4>
              <p className="text-on-surface-variant text-sm">Yes — separate Chemistry GCSE goes deeper into topics like organic chemistry and quantitative analysis than the chemistry unit within Combined Science. If your child is on the Combined Science route, our <button onClick={() => onNavigate('subject', 'Science')} className="text-royal-purple font-semibold underline">Combined Science page</button> covers how a dedicated chemistry-focused tutor can still make a real difference to that overall science grade.</p>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">How does A-Level Chemistry differ from GCSE?</h4>
              <p className="text-on-surface-variant text-sm">A-Level moves well beyond GCSE depth, introducing organic mechanisms, equilibria calculations, and quantitative analysis that lean far more heavily on maths. Students often need a private chemistry tutor UK-wide simply to bridge that jump in the first term.</p>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">Do you help prepare for required practicals?</h4>
              <p className="text-on-surface-variant text-sm">Absolutely. We talk through the method, apparatus and likely exam questions for every required practical, from titrations to rates of reaction investigations, so students aren't caught out by practical-based exam questions.</p>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">How does online chemistry tutoring actually work?</h4>
              <p className="text-on-surface-variant text-sm">Lessons run live over video with a shared whiteboard, past papers and diagrams, so it feels much like sitting beside a tutor at the kitchen table. Sessions are recorded on request, making revision easier before mocks and final exams.</p>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">Does it matter which exam board my child studies — AQA, Edexcel or OCR?</h4>
              <p className="text-on-surface-variant text-sm">Not with us. Every tutor is trained across AQA, Edexcel and OCR Chemistry specifications, and we tailor homework help, practice questions and revision materials to your child's exact exam board.</p>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">How do I book a free trial lesson?</h4>
              <p className="text-on-surface-variant text-sm">Fill in the short form below or tap "Book a Free Trial Lesson" anywhere on this page. We'll ask about current grades and target grades, then match your child with a suitable GCSE or A-Level Chemistry tutor within a day or two.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Book Your Free Trial Lesson */}
      <section className="py-16 md:py-20 bg-surface-container-low">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4 text-center">Book Your Free Trial Chemistry Lesson</h2>
          <p className="text-on-surface-variant text-center max-w-2xl mx-auto mb-10">Tell us a little about your child's chemistry goals — whether it's climbing a grade boundary at GCSE or getting exam-ready for A-Level — and we'll pair them with the right tutor for a free trial session.</p>
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Boost Your Chemistry Grades?</h2>
            <p className="text-white/80 mb-8 max-w-xl mx-auto">Book a free trial lesson today and see what focused, exam-board-specific chemistry tuition can do for your grades.</p>
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