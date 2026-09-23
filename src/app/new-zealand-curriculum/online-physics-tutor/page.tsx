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

export default function NZPhysicsTutorContent({ onNavigate }: SubjectComponentProps) {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-primary-fixed">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-white text-royal-purple text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
                NCEA Level 2 &amp; 3 Physics Specialists
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-on-primary-fixed mb-6 leading-tight">
                Online Physics Tutor <br className="hidden md:block" />in New Zealand
              </h1>
              <p className="text-lg text-on-primary-fixed/80 mb-8 max-w-xl">
                Make physics make sense with an expert <strong className="font-semibold">Online Physics Tutor</strong> matched to your child&rsquo;s NCEA standards. From Level 1 mechanics through to Level 3 fields and modern physics, we teach the maths underneath the physics at the same time.
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
                src="https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?w=800&q=80"
                alt="New Zealand student working through physics problems in an online session"
                className="rounded-2xl shadow-2xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-16 md:py-20">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4 text-center">Physics Tutoring for NCEA Levels 1 to 3</h2>
          <p className="text-on-surface-variant text-center max-w-2xl mx-auto mb-12">
            Senior physics is where the maths becomes unavoidable. <span className="font-semibold text-charcoal">Physics tutoring in New Zealand</span> works best when the algebra and trigonometry underneath are addressed alongside the physics itself.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-surface-container-low rounded-2xl p-8">
              <div className="w-12 h-12 bg-lime-green rounded-xl flex items-center justify-center mb-5">
                <LigatureIcon name="Clock" className="w-6 h-6 text-charcoal" />
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-3">Support When It Is Needed</h3>
              <p className="text-on-surface-variant">Sessions scheduled around school nationwide, with extra availability ahead of internal assessments, practical work and the end-of-year externals.</p>
            </div>
            <div className="bg-surface-container-low rounded-2xl p-8">
              <div className="w-12 h-12 bg-lime-green rounded-xl flex items-center justify-center mb-5">
                <LigatureIcon name="DollarSign" className="w-6 h-6 text-charcoal" />
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-3">Simple NZD Pricing</h3>
              <p className="text-on-surface-variant">No enrolment fee, no minimum term, and rates billed in New Zealand dollars. Physics can share a plan with maths, which is usually the more useful pairing.</p>
            </div>
            <div className="bg-surface-container-low rounded-2xl p-8">
              <div className="w-12 h-12 bg-lime-green rounded-xl flex items-center justify-center mb-5">
                <LigatureIcon name="Star" className="w-6 h-6 text-charcoal" />
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-3">The Maths Behind the Physics</h3>
              <p className="text-on-surface-variant">Most physics difficulty is mathematical. Tutors shore up rearranging equations, vectors and trigonometry alongside the physics rather than treating them as separate problems.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Focus */}
      <section className="py-16 md:py-20 bg-surface-container-low">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4 text-center">NCEA Physics <br className="hidden md:block" />Levels 1, 2 and 3</h2>
          <p className="text-on-surface-variant text-center max-w-2xl mx-auto mb-12">
            Covering NCEA physics achievement standards across Levels 1 to 3, including internal assessments, practical investigations and the end-of-year external examinations.
          </p>
          <div className="grid md:grid-cols-12 gap-6">
            <div className="md:col-span-4 space-y-4">
              <div className="bg-white rounded-xl p-5 flex items-center gap-4">
                <span className="w-8 h-8 rounded-full bg-tertiary-fixed flex items-center justify-center font-bold text-sm flex-shrink-0">1</span>
                <span className="font-semibold text-charcoal">Junior Science Foundations (Years 9&ndash;10)</span>
              </div>
              <div className="bg-white rounded-xl p-5 flex items-center gap-4">
                <span className="w-8 h-8 rounded-full bg-tertiary-fixed flex items-center justify-center font-bold text-sm flex-shrink-0">2</span>
                <span className="font-semibold text-charcoal">NCEA Level 1 &amp; 2 Physics (Years 11&ndash;12)</span>
              </div>
              <div className="bg-white rounded-xl p-5 flex items-center gap-4">
                <span className="w-8 h-8 rounded-full bg-tertiary-fixed flex items-center justify-center font-bold text-sm flex-shrink-0">3</span>
                <span className="font-semibold text-charcoal">NCEA Level 3 Physics &amp; Scholarship (Year 13)</span>
              </div>
            </div>
            <div className="md:col-span-8 grid sm:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 border border-outline-variant">
                <h4 className="font-bold text-charcoal mb-2">Mechanics</h4>
                <p className="text-sm text-on-surface-variant">Motion, forces, energy and momentum, including the vector work that trips up students meeting it for the first time.</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-outline-variant">
                <h4 className="font-bold text-charcoal mb-2">Waves, Light &amp; Sound</h4>
                <p className="text-sm text-on-surface-variant">Wave behaviour, reflection and refraction, interference and the optics standards assessed at Levels 2 and 3.</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-outline-variant">
                <h4 className="font-bold text-charcoal mb-2">Electricity, Magnetism &amp; Modern Physics</h4>
                <p className="text-sm text-on-surface-variant">Circuits, electromagnetic effects, and the atomic and nuclear physics introduced at Level 3.</p>
              </div>
              <div className="bg-secondary-fixed-dim rounded-xl p-6 col-span-full flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <h4 className="font-bold text-white text-lg mb-1">Level 3 Physics Assumes Level 2 Fluency</h4>
                  <p className="text-white/80 text-sm">Students who scraped through Level 2 mechanics without securing vectors and free-body diagrams find Level 3 fields and momentum considerably harder than expected.</p>
                </div>
                <button onClick={() => onNavigate('trial')} className="bg-white text-royal-purple px-6 py-2.5 rounded-full font-semibold whitespace-nowrap">Learn More</button>
              </div>
              <div className="col-span-full flex flex-wrap gap-2">
                {['Level 1 mechanics', 'Level 2 waves &amp; electricity', 'Level 3 fields', 'Practical investigations', 'NZQA Scholarship Physics'].map((tag) => (
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
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4 text-center">Your Child&rsquo;s Physics Roadmap, Year by Year</h2>
          <p className="text-on-surface-variant text-center max-w-2xl mx-auto mb-12">
            Our <span className="font-semibold text-charcoal">online physics tutoring</span> builds from junior science through to Level 3, because senior physics assumes fluency that is rarely revisited once missed.
          </p>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">Years 9 &amp; 10</h4>
              <p className="text-sm text-on-surface-variant mb-4">Forces, energy and electricity within general science. Weakness here surfaces immediately once Level 1 physics standards begin, and it is easily mistaken for a lack of aptitude.</p>
              <ul className="space-y-1 text-sm font-medium text-charcoal border-t border-outline-variant pt-3">
                <li className="flex items-center gap-2"><LigatureIcon name="Check" className="w-4 h-4 text-royal-purple" /> Forces &amp; energy basics</li>
                <li className="flex items-center gap-2"><LigatureIcon name="Check" className="w-4 h-4 text-royal-purple" /> Maths readiness</li>
              </ul>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">NCEA Level 1</h4>
              <p className="text-sm text-on-surface-variant mb-4">Mechanics, energy and electricity standards, assessed through internals and externals. The first year physics is graded against NZQA criteria rather than school tests.</p>
              <ul className="space-y-1 text-sm font-medium text-charcoal border-t border-outline-variant pt-3">
                <li className="flex items-center gap-2"><LigatureIcon name="Check" className="w-4 h-4 text-royal-purple" /> Mechanics &amp; energy</li>
                <li className="flex items-center gap-2"><LigatureIcon name="Check" className="w-4 h-4 text-royal-purple" /> Internal assessment technique</li>
              </ul>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">NCEA Level 2</h4>
              <p className="text-sm text-on-surface-variant mb-4">Mechanics extended, waves, electricity and magnetism. Vectors and trigonometry become unavoidable, and this is where most students either consolidate or fall behind.</p>
              <ul className="space-y-1 text-sm font-medium text-charcoal border-t border-outline-variant pt-3">
                <li className="flex items-center gap-2"><LigatureIcon name="Check" className="w-4 h-4 text-royal-purple" /> Vectors &amp; trigonometry</li>
                <li className="flex items-center gap-2"><LigatureIcon name="Check" className="w-4 h-4 text-royal-purple" /> Waves &amp; electricity</li>
              </ul>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">NCEA Level 3</h4>
              <p className="text-sm text-on-surface-variant mb-4">Fields, momentum, and modern physics, plus NZQA Scholarship for the strongest students. Level 3 physics is expected for engineering and physical science degrees.</p>
              <ul className="space-y-1 text-sm font-medium text-charcoal border-t border-outline-variant pt-3">
                <li className="flex items-center gap-2"><LigatureIcon name="Check" className="w-4 h-4 text-royal-purple" /> Fields &amp; momentum</li>
                <li className="flex items-center gap-2"><LigatureIcon name="Check" className="w-4 h-4 text-royal-purple" /> Scholarship preparation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Quality */}
      <section className="py-16 md:py-20 bg-surface-container-low">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop grid md:grid-cols-2 gap-12 items-center">
          <img
            src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&q=80"
            alt="Physics tutor explaining forces and motion during an online lesson"
            className="rounded-2xl shadow-xl w-full h-auto object-cover"
          />
          <div>
            <span className="inline-block bg-lime-green text-charcoal font-bold px-4 py-1.5 rounded-full mb-4">Standards Matched</span>
            <h2 className="text-3xl font-bold text-charcoal mb-6">Physics Tutors Matched to Your Child&rsquo;s Standards</h2>
            <p className="text-on-surface-variant mb-6 leading-relaxed">
              Our physics tutors hold degrees in physics, engineering or a closely related field and work to the specific NCEA standards your child is entered for. Police vetting under the Children&rsquo;s Act is completed before any tutor is assigned.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <LigatureIcon name="CheckCircle" className="w-5 h-5 text-royal-purple mt-0.5" />
                <span className="text-on-surface-variant">Police vetted under the Children&rsquo;s Act</span>
              </li>
              <li className="flex items-start gap-3">
                <LigatureIcon name="CheckCircle" className="w-5 h-5 text-royal-purple mt-0.5" />
                <span className="text-on-surface-variant">Degree-qualified in physics or engineering</span>
              </li>
              <li className="flex items-start gap-3">
                <LigatureIcon name="CheckCircle" className="w-5 h-5 text-royal-purple mt-0.5" />
                <span className="text-on-surface-variant">Matched to NCEA Levels 1, 2 and 3 standards</span>
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
              <h4 className="font-bold text-charcoal mb-2">Why is my child struggling in physics when they do well in other sciences?</h4>
              <p className="text-on-surface-variant text-sm">Usually because senior physics is far more mathematical than biology or junior science. Students arrive able to explain concepts but unused to rearranging equations, resolving vectors or working through multi-step calculations under time pressure. That is a maths gap wearing a physics costume, and it responds quickly once correctly identified.</p>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">Does my child need Level 2 physics before Level 3?</h4>
              <p className="text-on-surface-variant text-sm">In practice yes. Level 3 standards assume the mechanics, waves and electricity work from Level 2 and build directly on it. Students who passed Level 2 without securing vectors and free-body diagrams often find Level 3 fields and momentum much harder than their earlier results would suggest.</p>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">How are physics standards assessed?</h4>
              <p className="text-on-surface-variant text-sm">Through a mix of internal assessments completed during the year, often practical investigations, and external examinations at the end of it. Which standards a student sits varies between schools, so we confirm exactly which internals and externals your child is entered for before planning anything.</p>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">Is physics required for engineering in New Zealand?</h4>
              <p className="text-on-surface-variant text-sm">For essentially every engineering degree, yes, normally alongside Level 3 Calculus. Requirements vary by university and programme, so confirm with the institutions being considered, but a student aiming at engineering should treat Level 3 physics as necessary rather than optional.</p>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">Can you help with just one standard rather than the whole course?</h4>
              <p className="text-on-surface-variant text-sm">Plenty of families book exactly that way. If a particular internal or external standard is the problem, the first session works out precisely where the misunderstanding starts, then builds a short focused plan around it rather than re-teaching the entire year.</p>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">What is NZQA Scholarship Physics?</h4>
              <p className="text-on-surface-variant text-sm">An additional examination sat by Year 13 students, assessed well above Level 3 standard and carrying monetary awards. It rewards depth of understanding and the ability to apply physics to unfamiliar, extended problems. Preparation is quite different from Level 3 revision and generally suits students already performing at Excellence.</p>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">Should we work on maths at the same time as physics?</h4>
              <p className="text-on-surface-variant text-sm">
                In most cases yes, and it is usually the faster route to a better physics result. Mechanics depends on trigonometry, electricity on rearranging equations, and Level 3 fields on manipulating formulae confidently, so pairing physics with{' '}
                <button
                  onClick={() => onNavigate('subject', 'Maths')}
                  className="text-royal-purple font-bold underline underline-offset-2 cursor-pointer"
                >
                  maths tutoring
                </button>
                {' '}tends to lift both subjects at once rather than addressing the same weakness twice.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* Related Subjects */}
      <section className="py-16 md:py-20">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4 text-center">Related Subjects</h2>
          <p className="text-on-surface-variant text-center max-w-2xl mx-auto mb-10">Physics rarely sits on its own. These are the subjects most often studied alongside it.</p>
          <div className="grid sm:grid-cols-3 gap-6">
            <button
              onClick={() => onNavigate('subject', 'Maths')}
              className="border border-outline-variant rounded-xl p-6 text-left hover:border-royal-purple transition-colors"
            >
              <h4 className="font-bold text-charcoal mb-1">Online Maths Tutor in New Zealand</h4>
              <span className="text-royal-purple font-semibold text-sm underline underline-offset-2">Maths tutoring</span>
            </button>
            <button
              onClick={() => onNavigate('subject', 'Chemistry')}
              className="border border-outline-variant rounded-xl p-6 text-left hover:border-royal-purple transition-colors"
            >
              <h4 className="font-bold text-charcoal mb-1">Online Chemistry Tutor in New Zealand</h4>
              <span className="text-royal-purple font-semibold text-sm underline underline-offset-2">Chemistry tutoring</span>
            </button>
            <button
              onClick={() => onNavigate('subject', 'Science')}
              className="border border-outline-variant rounded-xl p-6 text-left hover:border-royal-purple transition-colors"
            >
              <h4 className="font-bold text-charcoal mb-1">Online Science Tutor in New Zealand</h4>
              <span className="text-royal-purple font-semibold text-sm underline underline-offset-2">Science tutoring</span>
            </button>
          </div>
        </div>
      </section>

      {/* Book Your Free Trial Lesson */}
      <section className="py-16 md:py-20 bg-surface-container-low">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4 text-center">Book Your Free Trial Lesson</h2>
          <p className="text-on-surface-variant text-center max-w-2xl mx-auto mb-10">
            Tell us your child&rsquo;s year level and the physics standards they are entered for, and we will match them with a specialist tutor for a free first lesson.
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Make Physics Click</h2>
            <p className="text-white/80 mb-8 max-w-xl mx-auto">From Level 1 mechanics to Level 3 fields and Scholarship preparation, our standards-matched physics tutors are ready to help.</p>
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