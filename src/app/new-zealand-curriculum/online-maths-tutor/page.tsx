'use client';

import React from 'react';
import type { ActivePage } from '@/lib/types';
import GradeLessonPlans from '@/components/subjects/Gradimport { FreeTrialForm } from '@/components/FreeTrial';
eLessonPlans';

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

export default function NZMathsTutorContent({ onNavigate }: SubjectComponentProps) {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-primary-fixed">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-white text-royal-purple text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
                NZ Curriculum &amp; NCEA Maths Specialists
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-on-primary-fixed mb-6 leading-tight">
                Online Maths Tutor <br className="hidden md:block" />in New Zealand
              </h1>
              <p className="text-lg text-on-primary-fixed/80 mb-8 max-w-xl">
                Get the help your child needs from an expert <strong className="font-semibold">Online Maths Tutor</strong> who knows the New Zealand Curriculum. From counting in Year 1 through to NCEA Level 3 Calculus and Statistics, every lesson is built around the achievement standards they will actually be assessed on.
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
                  View NZ Pricing
                </button>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1509228468518-180dd4864904?w=800&q=80"
                alt="New Zealand student working through maths problems in an online tutoring session"
                className="rounded-2xl shadow-2xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-16 md:py-20">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4 text-center">Why Kiwi Families Choose Math Make Smart</h2>
          <p className="text-on-surface-variant text-center max-w-2xl mx-auto mb-12">
            <span className="font-semibold text-charcoal">Maths tutoring in New Zealand</span> only works when the tutor understands internals, externals and the numeracy co-requisite, not just the maths itself.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-surface-container-low rounded-2xl p-8">
              <div className="w-12 h-12 bg-lime-green rounded-xl flex items-center justify-center mb-5">
                <LigatureIcon name="Clock" className="w-6 h-6 text-charcoal" />
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-3">Sessions That Fit Around School</h3>
              <p className="text-on-surface-variant">Lessons booked around school, sport and whānau commitments, with evening and weekend slots. Students anywhere from Kaitaia to Invercargill get the same tutor availability.</p>
            </div>
            <div className="bg-surface-container-low rounded-2xl p-8">
              <div className="w-12 h-12 bg-lime-green rounded-xl flex items-center justify-center mb-5">
                <LigatureIcon name="DollarSign" className="w-6 h-6 text-charcoal" />
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-3">Clear Rates in New Zealand Dollars</h3>
              <p className="text-on-surface-variant">Billed in NZD with no enrolment fee and no contract. Book session by session, or bring the per-lesson cost down with a monthly plan shared between siblings.</p>
            </div>
            <div className="bg-surface-container-low rounded-2xl p-8">
              <div className="w-12 h-12 bg-lime-green rounded-xl flex items-center justify-center mb-5">
                <LigatureIcon name="Star" className="w-6 h-6 text-charcoal" />
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-3">Matched to Achievement Standards</h3>
              <p className="text-on-surface-variant">Tutors work to the specific internal and external standards your child is entered for, because Merit and Excellence are awarded against defined criteria rather than a percentage.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Focus */}
      <section className="py-16 md:py-20 bg-surface-container-low">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4 text-center">The New Zealand Curriculum <br className="hidden md:block" />Year 1 Through NCEA Level 3</h2>
          <p className="text-on-surface-variant text-center max-w-2xl mx-auto mb-12">
            From the numeracy foundations of the primary years to NCEA Level 3 Calculus and Statistics, lessons follow the New Zealand Curriculum and the NZQA achievement standards your child&rsquo;s school has entered them for.
          </p>
          <div className="grid md:grid-cols-12 gap-6">
            <div className="md:col-span-4 space-y-4">
              <div className="bg-white rounded-xl p-5 flex items-center gap-4">
                <span className="w-8 h-8 rounded-full bg-tertiary-fixed flex items-center justify-center font-bold text-sm flex-shrink-0">1</span>
                <span className="font-semibold text-charcoal">Primary Maths (Years 1&ndash;6)</span>
              </div>
              <div className="bg-white rounded-xl p-5 flex items-center gap-4">
                <span className="w-8 h-8 rounded-full bg-tertiary-fixed flex items-center justify-center font-bold text-sm flex-shrink-0">2</span>
                <span className="font-semibold text-charcoal">Intermediate &amp; Junior Secondary (Years 7&ndash;10)</span>
              </div>
              <div className="bg-white rounded-xl p-5 flex items-center gap-4">
                <span className="w-8 h-8 rounded-full bg-tertiary-fixed flex items-center justify-center font-bold text-sm flex-shrink-0">3</span>
                <span className="font-semibold text-charcoal">NCEA Levels 1 to 3 (Years 11&ndash;13)</span>
              </div>
            </div>
            <div className="md:col-span-8 grid sm:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 border border-outline-variant">
                <h4 className="font-bold text-charcoal mb-2">Number &amp; Algebra</h4>
                <p className="text-sm text-on-surface-variant">Basic facts, place value and fractions through to expanding, factorising and solving linear and quadratic equations.</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-outline-variant">
                <h4 className="font-bold text-charcoal mb-2">Geometry &amp; Measurement</h4>
                <p className="text-sm text-on-surface-variant">Shape, position and transformation, measurement and units, Pythagoras and right-angled trigonometry.</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-outline-variant">
                <h4 className="font-bold text-charcoal mb-2">Statistics &amp; Probability</h4>
                <p className="text-sm text-on-surface-variant">The statistical enquiry cycle, data display and interpretation, and probability, which carries real weight at NCEA level.</p>
              </div>
              <div className="bg-secondary-fixed-dim rounded-xl p-6 col-span-full flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <h4 className="font-bold text-white text-lg mb-1">The Numeracy Co-requisite Is a Separate Hurdle</h4>
                  <p className="text-white/80 text-sm">It sits alongside NCEA, must be met to gain the qualification at any level, and its credits cannot also count towards the 60 credits needed for NCEA itself.</p>
                </div>
                <button onClick={() => onNavigate('trial')} className="bg-white text-royal-purple px-6 py-2.5 rounded-full font-semibold whitespace-nowrap">Learn More</button>
              </div>
              <div className="col-span-full flex flex-wrap gap-2">
                {['NCEA Level 1 maths', 'Level 2 algebra &amp; calculus', 'Level 3 Calculus', 'Level 3 Statistics', 'Numeracy co-requisite'].map((tag) => (
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
            Our <span className="font-semibold text-charcoal">online maths tutoring</span> follows the New Zealand sequence, so skills compound instead of being rebuilt each year.
          </p>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">Primary (Years 1&ndash;6)</h4>
              <p className="text-sm text-on-surface-variant mb-4">Basic facts, place value, fractions and early measurement. Nothing is nationally examined here, which is exactly why difficulties formed at this stage can travel undetected for years.</p>
              <ul className="space-y-1 text-sm font-medium text-charcoal border-t border-outline-variant pt-3">
                <li className="flex items-center gap-2"><LigatureIcon name="Check" className="w-4 h-4 text-royal-purple" /> Basic facts &amp; place value</li>
                <li className="flex items-center gap-2"><LigatureIcon name="Check" className="w-4 h-4 text-royal-purple" /> Fractions &amp; measurement</li>
              </ul>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">Intermediate (Years 7&ndash;8)</h4>
              <p className="text-sm text-on-surface-variant mb-4">Fractions, decimals, percentages and proportional reasoning, alongside the step up to a larger school. These two years are where most later maths trouble originates.</p>
              <ul className="space-y-1 text-sm font-medium text-charcoal border-t border-outline-variant pt-3">
                <li className="flex items-center gap-2"><LigatureIcon name="Check" className="w-4 h-4 text-royal-purple" /> Proportional reasoning</li>
                <li className="flex items-center gap-2"><LigatureIcon name="Check" className="w-4 h-4 text-royal-purple" /> Decimals &amp; percentages</li>
              </ul>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">Years 9 &amp; 10</h4>
              <p className="text-sm text-on-surface-variant mb-4">Algebraic thinking, geometry and statistics. The most overlooked stage in the system: no NCEA credits are at stake, so gaps open quietly and surface in Level 1.</p>
              <ul className="space-y-1 text-sm font-medium text-charcoal border-t border-outline-variant pt-3">
                <li className="flex items-center gap-2"><LigatureIcon name="Check" className="w-4 h-4 text-royal-purple" /> Algebra &amp; linear relationships</li>
                <li className="flex items-center gap-2"><LigatureIcon name="Check" className="w-4 h-4 text-royal-purple" /> Preparation for NCEA</li>
              </ul>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">NCEA Levels 1&ndash;3</h4>
              <p className="text-sm text-on-surface-variant mb-4">Achievement standards assessed through internals and externals, graded Not Achieved, Achieved, Merit and Excellence, plus the numeracy co-requisite and Level 3 Calculus or Statistics.</p>
              <ul className="space-y-1 text-sm font-medium text-charcoal border-t border-outline-variant pt-3">
                <li className="flex items-center gap-2"><LigatureIcon name="Check" className="w-4 h-4 text-royal-purple" /> Internals &amp; externals</li>
                <li className="flex items-center gap-2"><LigatureIcon name="Check" className="w-4 h-4 text-royal-purple" /> Level 3 Calculus or Statistics</li>
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
            alt="Maths tutor running an interactive online lesson for a New Zealand student"
            className="rounded-2xl shadow-xl w-full h-auto object-cover"
          />
          <div>
            <span className="inline-block bg-lime-green text-charcoal font-bold px-4 py-1.5 rounded-full mb-4">NZQA Standards Matched</span>
            <h2 className="text-3xl font-bold text-charcoal mb-6">Maths Tutors Who Know How Merit and Excellence Are Awarded</h2>
            <p className="text-on-surface-variant mb-6 leading-relaxed">
              Our tutors hold degrees in mathematics or a closely related field and are assessed on the New Zealand Curriculum and the NCEA standards they teach to. Every tutor is police vetted under the Children&rsquo;s Act before working with a student.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <LigatureIcon name="CheckCircle" className="w-5 h-5 text-royal-purple mt-0.5" />
                <span className="text-on-surface-variant">Police vetted under the Children&rsquo;s Act</span>
              </li>
              <li className="flex items-start gap-3">
                <LigatureIcon name="CheckCircle" className="w-5 h-5 text-royal-purple mt-0.5" />
                <span className="text-on-surface-variant">Degree-qualified in mathematics or a related field</span>
              </li>
              <li className="flex items-start gap-3">
                <LigatureIcon name="CheckCircle" className="w-5 h-5 text-royal-purple mt-0.5" />
                <span className="text-on-surface-variant">Experienced across NCEA Levels 1, 2 and 3</span>
              </li>
            </ul>
            <button onClick={() => onNavigate('about')} className="bg-charcoal text-white px-8 py-3.5 rounded-full font-semibold">Learn More About Our Tutors</button>
          </div>
        </div>
      </section>

      <GradeLessonPlans
        onNavigate={onNavigate}
        subject="Maths"
        description="Explore New Zealand maths lesson plans aligned with local year groups, courses and exams."
        plans={[
          { grade: 'Years 1–8', band: 'Primary' },
          { grade: 'Years 9–10', band: 'Junior Secondary' },
          { grade: 'NCEA Level 1 Mathematics', band: 'NCEA' },
          { grade: 'NCEA Level 2 Mathematics', band: 'NCEA' },
          { grade: 'NCEA Level 3 Calculus & Statistics', band: 'NCEA' },
        ]}
      />

      {/* FAQs */}
      <section className="py-16 md:py-20">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-12 text-center">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">What is the literacy and numeracy co-requisite, and does my child have to meet it?</h4>
              <p className="text-on-surface-variant text-sm">Yes, at every level. It is a standalone requirement sitting alongside NCEA, assessed separately from subject standards, and it must be met to gain the qualification. The part that catches families out is that credits earned towards the co-requisite cannot also count towards the 60 credits needed for NCEA itself. A student can be doing well in maths class and still not have met it.</p>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">What is the difference between internals and externals?</h4>
              <p className="text-on-surface-variant text-sm">Internals are assessed at school during the year against NZQA standards; externals are the end-of-year examinations. Both contribute credits towards NCEA. Because internals are spread across the year, a student who treats Term 4 as the only period that matters has usually given away credits well before the examinations arrive.</p>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">Should my child take Calculus or Statistics at Level 3?</h4>
              <p className="text-on-surface-variant text-sm">It depends on where they are heading. Level 3 Calculus is the prerequisite or assumed knowledge for engineering, physical sciences and many commerce degrees, while Statistics suits social sciences, health and business pathways. Some students take both. The decision should follow the degree they are aiming at rather than which one looks easier in Year 12.</p>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">NCEA is changing. Does that affect my child?</h4>
              <p className="text-on-surface-variant text-sm">Which cohort they are in decides that. NCEA Level 1 is being removed in 2028 and replaced by a Foundational Award, with a New Zealand Certificate of Education following for Year 12 in 2029 and an Advanced Certificate for Year 13 in 2030. The Ministry has said no student will switch systems partway through their schooling. Students currently in Years 11, 12 or 13 finish under NCEA as it stands.</p>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">My child is in Year 9 and their maths seems fine. Is tutoring worth it?</h4>
              <p className="text-on-surface-variant text-sm">Years 9 and 10 are the most valuable and most overlooked window in the whole system, precisely because nothing is formally at stake. Gaps open quietly, nobody notices, and they surface in Level 1 when credits are on the line. Fixing algebra fluency in Year 9 is straightforward; fixing it in Year 12 while new content arrives is considerably harder.</p>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">Is the free trial lesson genuinely free?</h4>
              <p className="text-on-surface-variant text-sm">No card details are needed and there is no follow-up call pushing a package. It is a full lesson with a maths tutor, used to establish where your child actually stands against their year level and the standards ahead of them.</p>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">My child is struggling in physics as well. Are the two connected?</h4>
              <p className="text-on-surface-variant text-sm">
                Very often, and the root is usually mathematical. Kinematics depends on rearranging equations and trigonometry, so students who find Level 2 physics hard are frequently hitting a maths gap rather than a physics one. Where that pattern appears we look at maths alongside{' '}
                <button
                  onClick={() => onNavigate('subject', 'Physics')}
                  className="text-royal-purple font-bold underline underline-offset-2 cursor-pointer"
                >
                  physics tutoring
                </button>
                {' '}rather than treating the same weakness twice in two subjects.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* Related Subjects */}
      <section className="py-16 md:py-20">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4 text-center">Related Subjects</h2>
          <p className="text-on-surface-variant text-center max-w-2xl mx-auto mb-10">Maths underpins the senior sciences, so families often pair it with another subject.</p>
          <div className="grid sm:grid-cols-3 gap-6">
            <button
              onClick={() => onNavigate('subject', 'Science')}
              className="border border-outline-variant rounded-xl p-6 text-left hover:border-royal-purple transition-colors"
            >
              <h4 className="font-bold text-charcoal mb-1">Online Science Tutor in New Zealand</h4>
              <span className="text-royal-purple font-semibold text-sm underline underline-offset-2">Science tutoring</span>
            </button>
            <button
              onClick={() => onNavigate('subject', 'Physics')}
              className="border border-outline-variant rounded-xl p-6 text-left hover:border-royal-purple transition-colors"
            >
              <h4 className="font-bold text-charcoal mb-1">Online Physics Tutor in New Zealand</h4>
              <span className="text-royal-purple font-semibold text-sm underline underline-offset-2">Physics tutoring</span>
            </button>
            <button
              onClick={() => onNavigate('subject', 'Chemistry')}
              className="border border-outline-variant rounded-xl p-6 text-left hover:border-royal-purple transition-colors"
            >
              <h4 className="font-bold text-charcoal mb-1">Online Chemistry Tutor in New Zealand</h4>
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
            Tell us your child&rsquo;s year level and the standards they are working towards, and we will match them with a maths tutor for a free first lesson. No payment details needed.
          </p>
          <FreeTrialForm />
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-20">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="bg-royal-purple rounded-3xl p-10 md:p-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Build Real Maths Confidence</h2>
            <p className="text-white/80 mb-8 max-w-xl mx-auto">Whether your child needs Year 8 fractions, the numeracy co-requisite, or Level 3 Calculus, our NCEA-matched maths tutors are ready to help.</p>
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
