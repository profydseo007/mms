'use client';

import React from 'react';
import type { ActivePage } from '@/lib/types';
import GradeLessonPlans from '@/components/subjects/GradeLessonPlans';
import { FreeTrialForm } from '@/components/FreeTrial';

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

export default function IEPhysicsTutorContent({ onNavigate }: SubjectComponentProps) {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-primary-fixed">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-white text-royal-purple text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
                Leaving Cert Physics Grinds
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-on-primary-fixed mb-6 leading-tight">
                Online Physics Tutor <br className="hidden md:block" />in Ireland
              </h1>
              <p className="text-lg text-on-primary-fixed/80 mb-8 max-w-xl">
                Understand the physics and the calculations behind it with an expert <strong className="font-semibold">Online Physics Tutor</strong>. Our grinds cover the Leaving Cert physics course, the mandatory experiments and the new Additional Assessment Component, taught in a way that finally makes the formulae make sense.
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
                  View Irish Pricing
                </button>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?w=800&q=80"
                alt="Irish Leaving Cert student setting up a physics experiment during an online grind"
                className="rounded-2xl shadow-2xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-16 md:py-20">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4 text-center">Physics Grinds for Fifth and Sixth Year</h2>
          <p className="text-on-surface-variant text-center max-w-2xl mx-auto mb-12">
            Physics is where the maths stops being optional. <span className="font-semibold text-charcoal">Physics tutoring in Ireland</span> works best when tutors fix the formula work and the physics at the same time.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-surface-container-low rounded-2xl p-8">
              <div className="w-12 h-12 bg-lime-green rounded-xl flex items-center justify-center mb-5">
                <LigatureIcon name="Clock" className="w-6 h-6 text-charcoal" />
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-3">Grinds Around Your Timetable</h3>
              <p className="text-on-surface-variant">Sessions after school and at weekends, with more availability before mocks, experiment write-ups and the June Leaving Cert exams.</p>
            </div>
            <div className="bg-surface-container-low rounded-2xl p-8">
              <div className="w-12 h-12 bg-lime-green rounded-xl flex items-center justify-center mb-5">
                <LigatureIcon name="DollarSign" className="w-6 h-6 text-charcoal" />
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-3">Euro Pricing, No Lock-In</h3>
              <p className="text-on-surface-variant">Pay per grind or take a monthly plan. No sign-up fee, and physics can be combined with maths on a single plan when both need work.</p>
            </div>
            <div className="bg-surface-container-low rounded-2xl p-8">
              <div className="w-12 h-12 bg-lime-green rounded-xl flex items-center justify-center mb-5">
                <LigatureIcon name="Star" className="w-6 h-6 text-charcoal" />
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-3">Formulae Explained, Not Memorised</h3>
              <p className="text-on-surface-variant">We show where each formula comes from and when to use it, so students can handle unfamiliar exam questions instead of freezing when the wording changes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Focus */}
      <section className="py-16 md:py-20 bg-surface-container-low">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4 text-center">Leaving Cert Physics <br className="hidden md:block" />Higher and Ordinary Level</h2>
          <p className="text-on-surface-variant text-center max-w-2xl mx-auto mb-12">
            Grinds follow the Leaving Certificate Physics course and the Senior Cycle redevelopment now underway, including practical work and the Additional Assessment Component for new cohorts.
          </p>
          <div className="grid md:grid-cols-12 gap-6">
            <div className="md:col-span-4 space-y-4">
              <div className="bg-white rounded-xl p-5 flex items-center gap-4">
                <span className="w-8 h-8 rounded-full bg-tertiary-fixed flex items-center justify-center font-bold text-sm flex-shrink-0">1</span>
                <span className="font-semibold text-charcoal">Junior Cycle Physical World</span>
              </div>
              <div className="bg-white rounded-xl p-5 flex items-center gap-4">
                <span className="w-8 h-8 rounded-full bg-tertiary-fixed flex items-center justify-center font-bold text-sm flex-shrink-0">2</span>
                <span className="font-semibold text-charcoal">5th Year Physics</span>
              </div>
              <div className="bg-white rounded-xl p-5 flex items-center gap-4">
                <span className="w-8 h-8 rounded-full bg-tertiary-fixed flex items-center justify-center font-bold text-sm flex-shrink-0">3</span>
                <span className="font-semibold text-charcoal">6th Year Physics &amp; Exam</span>
              </div>
            </div>
            <div className="md:col-span-8 grid sm:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 border border-outline-variant">
                <h4 className="font-bold text-charcoal mb-2">Mechanics &amp; Motion</h4>
                <p className="text-sm text-on-surface-variant">Velocity, acceleration, Newton&rsquo;s laws, momentum, circular motion and gravitation, with plenty of calculation practice.</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-outline-variant">
                <h4 className="font-bold text-charcoal mb-2">Waves, Light &amp; Sound</h4>
                <p className="text-sm text-on-surface-variant">Wave behaviour, reflection and refraction, lenses, diffraction and the sound and light experiments that appear on the paper.</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-outline-variant">
                <h4 className="font-bold text-charcoal mb-2">Electricity &amp; Modern Physics</h4>
                <p className="text-sm text-on-surface-variant">Circuits, electromagnetism and the atomic and nuclear physics that close out the course.</p>
              </div>
              <div className="bg-secondary-fixed-dim rounded-xl p-6 col-span-full flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <h4 className="font-bold text-white text-lg mb-1">Physics Now Has an Additional Assessment Component</h4>
                  <p className="text-white/80 text-sm">Under Senior Cycle redevelopment, new physics cohorts complete coursework worth at least 40% of the grade, so the work starts counting well before June.</p>
                </div>
                <button onClick={() => onNavigate('trial')} className="bg-white text-royal-purple px-6 py-2.5 rounded-full font-semibold whitespace-nowrap">Learn More</button>
              </div>
              <div className="col-span-full flex flex-wrap gap-2">
                {['Leaving Cert Physics', 'Mandatory experiments', 'Additional Assessment Component', 'Higher Level calculations', 'Past paper practice'].map((tag) => (
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
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4 text-center">Your Child&rsquo;s Physics Roadmap</h2>
          <p className="text-on-surface-variant text-center max-w-2xl mx-auto mb-12">
            Our <span className="font-semibold text-charcoal">online physics tutoring</span> starts from Junior Cycle foundations and builds steadily through to the Leaving Cert.
          </p>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">Junior Cycle Foundations</h4>
              <p className="text-sm text-on-surface-variant mb-4">Forces, energy and electricity from the Physical World strand. Weak spots here show up quickly once Fifth Year physics begins.</p>
              <ul className="space-y-1 text-sm font-medium text-charcoal border-t border-outline-variant pt-3">
                <li className="flex items-center gap-2"><LigatureIcon name="Check" className="w-4 h-4 text-royal-purple" /> Forces &amp; energy</li>
                <li className="flex items-center gap-2"><LigatureIcon name="Check" className="w-4 h-4 text-royal-purple" /> Basic circuits</li>
              </ul>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">5th Year</h4>
              <p className="text-sm text-on-surface-variant mb-4">Mechanics, heat and waves, with the maths of physics coming in properly. Rearranging formulae becomes an everyday skill.</p>
              <ul className="space-y-1 text-sm font-medium text-charcoal border-t border-outline-variant pt-3">
                <li className="flex items-center gap-2"><LigatureIcon name="Check" className="w-4 h-4 text-royal-purple" /> Mechanics &amp; motion</li>
                <li className="flex items-center gap-2"><LigatureIcon name="Check" className="w-4 h-4 text-royal-purple" /> Formula rearranging</li>
              </ul>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">6th Year</h4>
              <p className="text-sm text-on-surface-variant mb-4">Electricity, electromagnetism and modern physics, full past-paper practice and exam timing for the June paper.</p>
              <ul className="space-y-1 text-sm font-medium text-charcoal border-t border-outline-variant pt-3">
                <li className="flex items-center gap-2"><LigatureIcon name="Check" className="w-4 h-4 text-royal-purple" /> Electricity &amp; modern physics</li>
                <li className="flex items-center gap-2"><LigatureIcon name="Check" className="w-4 h-4 text-royal-purple" /> Exam timing</li>
              </ul>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">College Entry</h4>
              <p className="text-sm text-on-surface-variant mb-4">Leaving Cert physics supports engineering, physical science and many technology courses. Check CAO requirements for the courses you are considering.</p>
              <ul className="space-y-1 text-sm font-medium text-charcoal border-t border-outline-variant pt-3">
                <li className="flex items-center gap-2"><LigatureIcon name="Check" className="w-4 h-4 text-royal-purple" /> Engineering &amp; science routes</li>
                <li className="flex items-center gap-2"><LigatureIcon name="Check" className="w-4 h-4 text-royal-purple" /> CAO requirements</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Quality */}
      <section className="py-16 md:py-20 bg-surface-container-low">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop grid md:grid-cols-2 gap-12 items-center">
          <img
            src="https://images.unsplash.com/photo-1628595351029-c2bf17511435?w=800&q=80"
            alt="Physics tutor working through a mechanics problem during an online grind"
            className="rounded-2xl shadow-xl w-full h-auto object-cover"
          />
          <div>
            <span className="inline-block bg-lime-green text-charcoal font-bold px-4 py-1.5 rounded-full mb-4">Garda Vetted Tutors</span>
            <h2 className="text-3xl font-bold text-charcoal mb-6">Physics Tutors Who Make the Maths Click</h2>
            <p className="text-on-surface-variant mb-6 leading-relaxed">
              Our physics tutors hold physics or engineering degrees and know the Leaving Cert course and marking scheme well. Every tutor is Garda vetted, and grinds are recorded for later revision.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <LigatureIcon name="CheckCircle" className="w-5 h-5 text-royal-purple mt-0.5" />
                <span className="text-on-surface-variant">Garda vetted before their first grind</span>
              </li>
              <li className="flex items-start gap-3">
                <LigatureIcon name="CheckCircle" className="w-5 h-5 text-royal-purple mt-0.5" />
                <span className="text-on-surface-variant">Degree-qualified in physics or engineering</span>
              </li>
              <li className="flex items-start gap-3">
                <LigatureIcon name="CheckCircle" className="w-5 h-5 text-royal-purple mt-0.5" />
                <span className="text-on-surface-variant">Experienced with mandatory experiments</span>
              </li>
            </ul>
            <button onClick={() => onNavigate('about')} className="bg-charcoal text-white px-8 py-3.5 rounded-full font-semibold">Learn More About Our Tutors</button>
          </div>
        </div>
      </section>

      <GradeLessonPlans
        onNavigate={onNavigate}
        subject="Physics"
        description="Explore Ireland physics lesson plans aligned with local year groups, courses and exams."
        plans={[
          { grade: 'Junior Cycle Science', band: 'Junior Cycle' },
          { grade: 'Leaving Cert Physics', band: 'Leaving Certificate' },
          { grade: 'Higher Level Physics', band: 'Leaving Certificate' },
        ]}
      />

      {/* FAQs */}
      <section className="py-16 md:py-20">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-12 text-center">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">Why does my child understand physics in class but struggle in tests?</h4>
              <p className="text-on-surface-variant text-sm">Usually because of the calculations. Many students follow the ideas in class but lose confidence when they have to pick the right formula, rearrange it and handle units under time pressure. That is a maths skill as much as a physics one, and it improves quickly with focused practice.</p>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">What is the Additional Assessment Component in physics?</h4>
              <p className="text-on-surface-variant text-sm">Under Senior Cycle redevelopment, Leaving Cert physics is among the first subjects to include an Additional Assessment Component worth at least 40% of the final grade, with the written exam making up the rest. It applies to students who started Fifth Year from September 2025. The practical effect is that effort across both years now counts, not only the June paper.</p>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">How much do the mandatory experiments matter?</h4>
              <p className="text-on-surface-variant text-sm">A lot. Experiment questions appear on the paper every year, asking students to describe method, results and sources of error. Students who have only watched an experiment rather than understood it tend to lose easy marks, so we go through each one step by step.</p>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">Is physics needed for engineering courses in Ireland?</h4>
              <p className="text-on-surface-variant text-sm">Many engineering courses value physics, and some list it or a laboratory science among their requirements, usually alongside a minimum maths grade. Requirements vary by college and course, so check the CAO entry requirements directly, but physics is a sensible choice for anyone considering engineering.</p>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">Can you help with just one topic?</h4>
              <p className="text-on-surface-variant text-sm">Yes. If electricity or modern physics is the sticking point, the first grind pins down exactly where the confusion begins and we build a short plan around that topic rather than starting the whole course again.</p>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">Is the free trial grind really free?</h4>
              <p className="text-on-surface-variant text-sm">Yes. There are no payment details, no commitment and no follow-up sales call. It is a proper grind to find out where your child is and what will help most.</p>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">Should my child get maths grinds as well as physics?</h4>
              <p className="text-on-surface-variant text-sm">
                If the calculations are the problem, often yes. Physics depends on rearranging formulae, trigonometry and graph work, so strengthening those through{' '}
                <button
                  onClick={() => onNavigate('subject', 'Maths')}
                  className="text-royal-purple font-bold underline underline-offset-2 cursor-pointer"
                >
                  maths grinds
                </button>
                {' '}alongside physics usually lifts both results faster than working on either alone.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* Related Subjects */}
      <section className="py-16 md:py-20">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4 text-center">Related Subjects</h2>
          <p className="text-on-surface-variant text-center max-w-2xl mx-auto mb-10">Physics works hand in hand with maths. These subjects are commonly taken with it.</p>
          <div className="grid sm:grid-cols-3 gap-6">
            <button
              onClick={() => onNavigate('subject', 'Maths')}
              className="border border-outline-variant rounded-xl p-6 text-left hover:border-royal-purple transition-colors"
            >
              <h4 className="font-bold text-charcoal mb-1">Online Maths Tutor in Ireland</h4>
              <span className="text-royal-purple font-semibold text-sm underline underline-offset-2">Maths grinds</span>
            </button>
            <button
              onClick={() => onNavigate('subject', 'Chemistry')}
              className="border border-outline-variant rounded-xl p-6 text-left hover:border-royal-purple transition-colors"
            >
              <h4 className="font-bold text-charcoal mb-1">Online Chemistry Tutor in Ireland</h4>
              <span className="text-royal-purple font-semibold text-sm underline underline-offset-2">Chemistry grinds</span>
            </button>
            <button
              onClick={() => onNavigate('subject', 'Science')}
              className="border border-outline-variant rounded-xl p-6 text-left hover:border-royal-purple transition-colors"
            >
              <h4 className="font-bold text-charcoal mb-1">Online Science Tutor in Ireland</h4>
              <span className="text-royal-purple font-semibold text-sm underline underline-offset-2">Science grinds</span>
            </button>
          </div>
        </div>
      </section>

      {/* Book Your Free Trial Lesson */}
      <section className="py-16 md:py-20 bg-surface-container-low">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4 text-center">Book Your Free Trial Lesson</h2>
          <p className="text-on-surface-variant text-center max-w-2xl mx-auto mb-10">
            Tell us your child&rsquo;s year, level and which topics feel hardest, and we will match them with a physics tutor for a free first grind. No payment details needed.
          </p>
          <FreeTrialForm />
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-20">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="bg-royal-purple rounded-3xl p-10 md:p-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Make Physics Make Sense</h2>
            <p className="text-white/80 mb-8 max-w-xl mx-auto">From Fifth Year mechanics to Sixth Year modern physics and the June exam, our physics tutors are ready to help.</p>
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
