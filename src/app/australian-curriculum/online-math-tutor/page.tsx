'use client';

import React from 'react';
import type { ActivePage } from '@/lib/types';
import { Check, CheckCircle2, Clock3, DollarSign, Star } from 'lucide-react';

type LigatureIconName = 'Clock' | 'DollarSign' | 'Star' | 'CheckCircle' | 'Check';

interface LigatureIconProps {
  name: LigatureIconName;
  className?: string;
}

function LigatureIcon({ name, className = '' }: LigatureIconProps) {
  const Icon = {
    Clock: Clock3,
    DollarSign: DollarSign,
    Star,
    CheckCircle: CheckCircle2,
    Check,
  }[name];

  return <Icon aria-hidden="true" className={className} />;
}

interface SubjectComponentProps {
  onNavigate: (page: ActivePage, subjectTitle?: string) => void;
}

export default function AUMathTutorContent({ onNavigate }: SubjectComponentProps) {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-primary-fixed">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-white text-royal-purple text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
                ACARA &amp; State Syllabus Specialists
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-on-primary-fixed mb-6 leading-tight">
                Online Maths Tutor <br className="hidden md:block" />in Australia
              </h1>
              <p className="text-lg text-on-primary-fixed/80 mb-8 max-w-xl">
                Get the help your child needs from an expert <strong className="font-semibold">Online Maths Tutor</strong> matched to your state. From Foundation number sense through to VCE Mathematical Methods, HSC Extension and QCE Specialist Maths, every lesson follows the syllabus their school actually teaches.
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
                  View Australian Pricing
                </button>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1509228468518-180dd4864904?w=800&q=80"
                alt="Australian student working through maths problems in an online tutoring session"
                className="rounded-2xl shadow-2xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-16 md:py-20">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4 text-center">Why Australian Families Choose Math Make Smart</h2>
          <p className="text-on-surface-variant text-center max-w-2xl mx-auto mb-12">
            Australia has one national curriculum to Year 10 and eight different ways of finishing school. <span className="font-semibold text-charcoal">Maths tutoring in Australia</span> only works when the tutor knows which one applies to your child.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-surface-container-low rounded-2xl p-8">
              <div className="w-12 h-12 bg-lime-green rounded-xl flex items-center justify-center mb-5">
                <LigatureIcon name="Clock" className="w-6 h-6 text-charcoal" />
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-3">Every Time Zone Covered</h3>
              <p className="text-on-surface-variant">Sessions booked around school, training and family life, from Perth through to Brisbane. Evening and weekend slots across AEST, ACST and AWST, including during school holidays.</p>
            </div>
            <div className="bg-surface-container-low rounded-2xl p-8">
              <div className="w-12 h-12 bg-lime-green rounded-xl flex items-center justify-center mb-5">
                <LigatureIcon name="DollarSign" className="w-6 h-6 text-charcoal" />
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-3">Clear Rates in Australian Dollars</h3>
              <p className="text-on-surface-variant">Billed in AUD with no enrolment fee and no lock-in contract. Book session by session, or lower the per-lesson cost with a monthly plan shared between siblings.</p>
            </div>
            <div className="bg-surface-container-low rounded-2xl p-8">
              <div className="w-12 h-12 bg-lime-green rounded-xl flex items-center justify-center mb-5">
                <LigatureIcon name="Star" className="w-6 h-6 text-charcoal" />
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-3">Matched to Your State Syllabus</h3>
              <p className="text-on-surface-variant">A NESA syllabus in Sydney and a VCAA study design in Melbourne are different documents. Tutors are matched to the one your child is actually assessed against.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Focus */}
      <section className="py-16 md:py-20 bg-surface-container-low">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4 text-center">The Australian Curriculum <br className="hidden md:block" />Foundation Through Year 12</h2>
          <p className="text-on-surface-variant text-center max-w-2xl mx-auto mb-12">
            Lessons follow ACARA&rsquo;s Australian Curriculum from Foundation to Year 10, then your state&rsquo;s senior syllabus: VCE in Victoria, the HSC in New South Wales, QCE in Queensland, WACE in Western Australia and SACE in South Australia.
          </p>
          <div className="grid md:grid-cols-12 gap-6">
            <div className="md:col-span-4 space-y-4">
              <div className="bg-white rounded-xl p-5 flex items-center gap-4">
                <span className="w-8 h-8 rounded-full bg-tertiary-fixed flex items-center justify-center font-bold text-sm flex-shrink-0">1</span>
                <span className="font-semibold text-charcoal">Primary Maths (Foundation&ndash;Year 6)</span>
              </div>
              <div className="bg-white rounded-xl p-5 flex items-center gap-4">
                <span className="w-8 h-8 rounded-full bg-tertiary-fixed flex items-center justify-center font-bold text-sm flex-shrink-0">2</span>
                <span className="font-semibold text-charcoal">Secondary Maths (Years 7&ndash;10)</span>
              </div>
              <div className="bg-white rounded-xl p-5 flex items-center gap-4">
                <span className="w-8 h-8 rounded-full bg-tertiary-fixed flex items-center justify-center font-bold text-sm flex-shrink-0">3</span>
                <span className="font-semibold text-charcoal">Senior Maths &amp; ATAR (Years 11&ndash;12)</span>
              </div>
            </div>
            <div className="md:col-span-8 grid sm:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 border border-outline-variant">
                <h4 className="font-bold text-charcoal mb-2">Number &amp; Algebra</h4>
                <p className="text-sm text-on-surface-variant">Place value, fractions and proportional reasoning through to expanding, factorising and solving linear and quadratic equations.</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-outline-variant">
                <h4 className="font-bold text-charcoal mb-2">Measurement &amp; Space</h4>
                <p className="text-sm text-on-surface-variant">Units and conversions, area and volume, Pythagoras and the trigonometry that senior maths depends on.</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-outline-variant">
                <h4 className="font-bold text-charcoal mb-2">Statistics &amp; Probability</h4>
                <p className="text-sm text-on-surface-variant">Data representation and interpretation, probability, and the statistical reasoning assessed throughout NAPLAN and senior courses.</p>
              </div>
              <div className="bg-secondary-fixed-dim rounded-xl p-6 col-span-full flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <h4 className="font-bold text-white text-lg mb-1">Subject Selection in Year 10 Shapes the ATAR</h4>
                  <p className="text-white/80 text-sm">Methods, Specialist and General lead to different university pathways, and because results are scaled, the choice affects the final rank as much as the marks do.</p>
                </div>
                <button onClick={() => onNavigate('trial')} className="bg-white text-royal-purple px-6 py-2.5 rounded-full font-semibold whitespace-nowrap">Learn More</button>
              </div>
              <div className="col-span-full flex flex-wrap gap-2">
                {['Mathematical Methods', 'Specialist Mathematics', 'General Mathematics', 'NAPLAN numeracy', 'Selective &amp; OC tests'].map((tag) => (
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
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4 text-center">Your Child&rsquo;s Maths Roadmap, Year by Year</h2>
          <p className="text-on-surface-variant text-center max-w-2xl mx-auto mb-12">
            Our <span className="font-semibold text-charcoal">online maths tutoring</span> follows the national curriculum then your state&rsquo;s senior syllabus, so skills build rather than being relearned each year.
          </p>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">Foundation to Year 6</h4>
              <p className="text-sm text-on-surface-variant mb-4">Counting, place value, fractions and early measurement. NAPLAN arrives in Years 3 and 5, and fractions are where later difficulty most often begins.</p>
              <ul className="space-y-1 text-sm font-medium text-charcoal border-t border-outline-variant pt-3">
                <li className="flex items-center gap-2"><LigatureIcon name="Check" className="w-4 h-4 text-royal-purple" /> Number sense &amp; place value</li>
                <li className="flex items-center gap-2"><LigatureIcon name="Check" className="w-4 h-4 text-royal-purple" /> Fractions &amp; measurement</li>
              </ul>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">Years 7 &amp; 8</h4>
              <p className="text-sm text-on-surface-variant mb-4">Ratios, rates, integers and the move into algebraic thinking, with NAPLAN again in Year 7. How securely this lands decides how Year 9 and 10 maths go.</p>
              <ul className="space-y-1 text-sm font-medium text-charcoal border-t border-outline-variant pt-3">
                <li className="flex items-center gap-2"><LigatureIcon name="Check" className="w-4 h-4 text-royal-purple" /> Proportional reasoning</li>
                <li className="flex items-center gap-2"><LigatureIcon name="Check" className="w-4 h-4 text-royal-purple" /> Introduction to algebra</li>
              </ul>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">Years 9 &amp; 10</h4>
              <p className="text-sm text-on-surface-variant mb-4">Linear and quadratic relationships, trigonometry and statistics, plus the final NAPLAN in Year 9. Readiness for senior Methods is genuinely decided here.</p>
              <ul className="space-y-1 text-sm font-medium text-charcoal border-t border-outline-variant pt-3">
                <li className="flex items-center gap-2"><LigatureIcon name="Check" className="w-4 h-4 text-royal-purple" /> Quadratics &amp; trigonometry</li>
                <li className="flex items-center gap-2"><LigatureIcon name="Check" className="w-4 h-4 text-royal-purple" /> Senior subject readiness</li>
              </ul>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">Years 11 &amp; 12</h4>
              <p className="text-sm text-on-surface-variant mb-4">Methods, Specialist and General Maths under your state certificate, with internal assessment running alongside external examinations and feeding the ATAR.</p>
              <ul className="space-y-1 text-sm font-medium text-charcoal border-t border-outline-variant pt-3">
                <li className="flex items-center gap-2"><LigatureIcon name="Check" className="w-4 h-4 text-royal-purple" /> Calculus &amp; functions</li>
                <li className="flex items-center gap-2"><LigatureIcon name="Check" className="w-4 h-4 text-royal-purple" /> Internal assessment &amp; exams</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Quality */}
      <section className="py-16 md:py-20 bg-surface-container-low">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop grid md:grid-cols-2 gap-12 items-center">
          <img
            src="https://images.unsplash.com/photo-1596495578065-6e0763fa1178?w=800&q=80"
            alt="Maths tutor running an interactive online lesson for an Australian student"
            className="rounded-2xl shadow-xl w-full h-auto object-cover"
          />
          <div>
            <span className="inline-block bg-lime-green text-charcoal font-bold px-4 py-1.5 rounded-full mb-4">Syllabus Matched</span>
            <h2 className="text-3xl font-bold text-charcoal mb-6">Maths Tutors Who Know Your State&rsquo;s Syllabus</h2>
            <p className="text-on-surface-variant mb-6 leading-relaxed">
              Our tutors hold degrees in mathematics or a closely related field and are assessed on the syllabus they teach, whether that is a NESA syllabus, a VCAA study design or the QCAA General subjects. Every tutor holds a current Working with Children Check for their state.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <LigatureIcon name="CheckCircle" className="w-5 h-5 text-royal-purple mt-0.5" />
                <span className="text-on-surface-variant">Current Working with Children Check</span>
              </li>
              <li className="flex items-start gap-3">
                <LigatureIcon name="CheckCircle" className="w-5 h-5 text-royal-purple mt-0.5" />
                <span className="text-on-surface-variant">Degree-qualified in mathematics or a related field</span>
              </li>
              <li className="flex items-start gap-3">
                <LigatureIcon name="CheckCircle" className="w-5 h-5 text-royal-purple mt-0.5" />
                <span className="text-on-surface-variant">Experienced across VCE, HSC, QCE, WACE and SACE</span>
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
              <h4 className="font-bold text-charcoal mb-2">Should my child choose Methods, Specialist or General Maths?</h4>
              <p className="text-on-surface-variant text-sm">It depends entirely on what they want to study after school, and the decision matters more than most families realise because reversing it is difficult. Methods is a prerequisite or assumed knowledge for most engineering, science, commerce and computing degrees, and Specialist sits on top of it for the most mathematical pathways. General keeps an ATAR pathway open but closes some university doors. Decide on the degree, not on which subject looks easier in Year 10.</p>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">Do you follow the Australian Curriculum or my state&rsquo;s syllabus?</h4>
              <p className="text-on-surface-variant text-sm">Both, because they are not the same thing. ACARA sets the national framework to Year 10, but each state delivers it through its own authority, and Victoria teaches the Victorian Curriculum rather than the national document directly. From Year 11 the state certificate takes over entirely. We match tutors to whichever syllabus your child&rsquo;s school actually names.</p>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">Is it worth preparing for NAPLAN numeracy?</h4>
              <p className="text-on-surface-variant text-sm">Lightly, and mostly by removing surprise. NAPLAN runs in March for Years 3, 5, 7 and 9 and reports against four proficiency levels rather than a pass mark, so it carries no consequence for the individual student. Familiarity with the online adaptive format helps; extended drilling does not, and for anxious children it usually makes the day worse.</p>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">How does scaling affect my child&rsquo;s ATAR?</h4>
              <p className="text-on-surface-variant text-sm">Subject results are scaled before contributing to the ATAR, which adjusts for the fact that different subjects attract different cohorts. It is why choosing an easier subject to protect a rank usually backfires, and why improving across several subjects moves an ATAR further than a large gain in one. In practice, the weakest subject is often the best place to start.</p>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">My child is in Year 9 and coping. Is tutoring worth it now?</h4>
              <p className="text-on-surface-variant text-sm">Years 9 and 10 are the most valuable window in the whole system, precisely because the pressure has not arrived yet. This is where readiness for Methods is decided, and fixing algebra fluency now is straightforward. Fixing it in Year 11, while new content is arriving weekly, is considerably harder and more expensive.</p>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">Is the free trial lesson genuinely free?</h4>
              <p className="text-on-surface-variant text-sm">Nothing is charged, no card is taken, and nobody rings afterwards to sell you a term of lessons. It is a full lesson with a maths tutor, used to establish where your child actually sits against their year level and the senior subjects they are heading towards.</p>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">My child is struggling with physics too. Are the two connected?</h4>
              <p className="text-on-surface-variant text-sm">
                Very often, and the root is usually mathematical rather than conceptual. Kinematics depends on rearranging equations and trigonometry, so students finding senior physics hard are frequently hitting a maths gap. Where that pattern shows we look at maths alongside{' '}
                <button
                  onClick={() => onNavigate('subject', 'Physics')}
                  className="text-royal-purple font-bold underline underline-offset-2 cursor-pointer"
                >
                  physics tutoring
                </button>
                {' '}instead of treating the same weakness twice in two different subjects.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* Related Subjects */}
      <section className="py-16 md:py-20">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4 text-center">Related Subjects</h2>
          <p className="text-on-surface-variant text-center max-w-2xl mx-auto mb-10">Nearly every senior science leans on maths, which is why families rarely book it alone.</p>
          <div className="grid sm:grid-cols-3 gap-6">
            <button
              onClick={() => onNavigate('subject', 'Science')}
              className="border border-outline-variant rounded-xl p-6 text-left hover:border-royal-purple transition-colors"
            >
              <h4 className="font-bold text-charcoal mb-1">Online Science Tutor in Australia</h4>
              <span className="text-royal-purple font-semibold text-sm underline underline-offset-2">Science tutoring</span>
            </button>
            <button
              onClick={() => onNavigate('subject', 'Physics')}
              className="border border-outline-variant rounded-xl p-6 text-left hover:border-royal-purple transition-colors"
            >
              <h4 className="font-bold text-charcoal mb-1">Online Physics Tutor in Australia</h4>
              <span className="text-royal-purple font-semibold text-sm underline underline-offset-2">Physics tutoring</span>
            </button>
            <button
              onClick={() => onNavigate('subject', 'Chemistry')}
              className="border border-outline-variant rounded-xl p-6 text-left hover:border-royal-purple transition-colors"
            >
              <h4 className="font-bold text-charcoal mb-1">Online Chemistry Tutor in Australia</h4>
              <span className="text-royal-purple font-semibold text-sm underline underline-offset-2">Chemistry tutoring</span>
            </button>
          </div>
        </div>
      </section>

      {/* Book Your Free Trial Lesson */}
      <section className="py-16 md:py-20 bg-surface-container-low">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4 text-center">Book Your Free Trial Lesson</h2>
          <p className="text-on-surface-variant text-center max-w-2xl mx-auto mb-10">
            Tell us your child&rsquo;s year level, state and the maths subject they are taking, and we will match them with a tutor for a free first lesson. No payment details needed.
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Build Real Maths Confidence</h2>
            <p className="text-white/80 mb-8 max-w-xl mx-auto">Whether your child needs Year 7 fractions, NAPLAN numeracy practice or VCE Methods support, our syllabus-matched maths tutors are ready to help.</p>
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