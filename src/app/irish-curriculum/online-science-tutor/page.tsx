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

export default function IEScienceTutorContent({ onNavigate }: SubjectComponentProps) {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-primary-fixed">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-white text-royal-purple text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
                Junior Cycle Science Specialists
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-on-primary-fixed mb-6 leading-tight">
                Online Science Tutor <br className="hidden md:block" />in Ireland
              </h1>
              <p className="text-lg text-on-primary-fixed/80 mb-8 max-w-xl">
                Give your child a strong science foundation with an expert <strong className="font-semibold">Online Science Tutor</strong> who teaches the Junior Cycle specification properly. Our grinds cover all four contextual strands and the Nature of Science, plus the Classroom-Based Assessments that run alongside the exam.
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
                src="https://images.unsplash.com/photo-1507413245164-6160d8298b31?w=800&q=80"
                alt="Irish Junior Cycle student carrying out a science investigation at home during an online grind"
                className="rounded-2xl shadow-2xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-16 md:py-20">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4 text-center">Science Grinds Built Around the Junior Cycle</h2>
          <p className="text-on-surface-variant text-center max-w-2xl mx-auto mb-12">
            Junior Cycle science is one integrated subject covering four strands. <span className="font-semibold text-charcoal">Science tutoring in Ireland</span> at this stage should build understanding across all of them before students specialise at Leaving Cert.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-surface-container-low rounded-2xl p-8">
              <div className="w-12 h-12 bg-lime-green rounded-xl flex items-center justify-center mb-5">
                <LigatureIcon name="Clock" className="w-6 h-6 text-charcoal" />
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-3">Grinds That Suit Your Week</h3>
              <p className="text-on-surface-variant">Sessions after school, at weekends and during midterm breaks, with extra time available in the run-up to CBAs and the Junior Cycle Final Examination.</p>
            </div>
            <div className="bg-surface-container-low rounded-2xl p-8">
              <div className="w-12 h-12 bg-lime-green rounded-xl flex items-center justify-center mb-5">
                <LigatureIcon name="DollarSign" className="w-6 h-6 text-charcoal" />
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-3">Straightforward Euro Pricing</h3>
              <p className="text-on-surface-variant">Pay as you go or save with a monthly plan. No registration fee, and a single plan can cover science alongside maths for the same student.</p>
            </div>
            <div className="bg-surface-container-low rounded-2xl p-8">
              <div className="w-12 h-12 bg-lime-green rounded-xl flex items-center justify-center mb-5">
                <LigatureIcon name="Star" className="w-6 h-6 text-charcoal" />
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-3">Investigation Skills Included</h3>
              <p className="text-on-surface-variant">The Nature of Science strand asks students to plan, carry out and explain investigations. We teach those skills directly, not just the facts that go with them.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Focus */}
      <section className="py-16 md:py-20 bg-surface-container-low">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4 text-center">Junior Cycle Science <br className="hidden md:block" />First Year Through Third Year</h2>
          <p className="text-on-surface-variant text-center max-w-2xl mx-auto mb-12">
            Grinds follow the NCCA Junior Cycle Science specification, with its unifying Nature of Science strand and four contextual strands, preparing students for both the exam and their Leaving Cert subject choices.
          </p>
          <div className="grid md:grid-cols-12 gap-6">
            <div className="md:col-span-4 space-y-4">
              <div className="bg-white rounded-xl p-5 flex items-center gap-4">
                <span className="w-8 h-8 rounded-full bg-tertiary-fixed flex items-center justify-center font-bold text-sm flex-shrink-0">1</span>
                <span className="font-semibold text-charcoal">First Year Science</span>
              </div>
              <div className="bg-white rounded-xl p-5 flex items-center gap-4">
                <span className="w-8 h-8 rounded-full bg-tertiary-fixed flex items-center justify-center font-bold text-sm flex-shrink-0">2</span>
                <span className="font-semibold text-charcoal">Second Year &amp; the CBAs</span>
              </div>
              <div className="bg-white rounded-xl p-5 flex items-center gap-4">
                <span className="w-8 h-8 rounded-full bg-tertiary-fixed flex items-center justify-center font-bold text-sm flex-shrink-0">3</span>
                <span className="font-semibold text-charcoal">Third Year &amp; the JCFE</span>
              </div>
            </div>
            <div className="md:col-span-8 grid sm:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 border border-outline-variant">
                <h4 className="font-bold text-charcoal mb-2">Biological World &amp; Earth and Space</h4>
                <p className="text-sm text-on-surface-variant">Living things, cells, ecology and human biology, alongside the Earth, the solar system and space.</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-outline-variant">
                <h4 className="font-bold text-charcoal mb-2">Chemical World</h4>
                <p className="text-sm text-on-surface-variant">Particles, atoms, the periodic table, acids and bases, and chemical reactions, building towards Leaving Cert chemistry.</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-outline-variant">
                <h4 className="font-bold text-charcoal mb-2">Physical World</h4>
                <p className="text-sm text-on-surface-variant">Forces, energy, electricity, light and sound, the groundwork for Leaving Cert physics and applied maths.</p>
              </div>
              <div className="bg-secondary-fixed-dim rounded-xl p-6 col-span-full flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <h4 className="font-bold text-white text-lg mb-1">Science Choices at Leaving Cert Start Here</h4>
                  <p className="text-white/80 text-sm">Junior Cycle science is the only science most students take before choosing Biology, Chemistry or Physics, so gaps now shape the options available later.</p>
                </div>
                <button onClick={() => onNavigate('trial')} className="bg-white text-royal-purple px-6 py-2.5 rounded-full font-semibold whitespace-nowrap">Learn More</button>
              </div>
              <div className="col-span-full flex flex-wrap gap-2">
                {['Junior Cycle Science', 'Nature of Science', 'Classroom-Based Assessments', 'Higher &amp; Ordinary Level', 'Investigation reports'].map((tag) => (
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
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4 text-center">Your Child&rsquo;s Science Roadmap, Year by Year</h2>
          <p className="text-on-surface-variant text-center max-w-2xl mx-auto mb-12">
            Our <span className="font-semibold text-charcoal">online science tutoring</span> follows the Junior Cycle sequence and prepares students to choose their Leaving Cert sciences with confidence.
          </p>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">First Year</h4>
              <p className="text-sm text-on-surface-variant mb-4">A first look at all four strands, the language of science and basic lab skills. Curiosity and good habits built now carry through the whole cycle.</p>
              <ul className="space-y-1 text-sm font-medium text-charcoal border-t border-outline-variant pt-3">
                <li className="flex items-center gap-2"><LigatureIcon name="Check" className="w-4 h-4 text-royal-purple" /> Scientific vocabulary</li>
                <li className="flex items-center gap-2"><LigatureIcon name="Check" className="w-4 h-4 text-royal-purple" /> Basic lab skills</li>
              </ul>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">Second Year</h4>
              <p className="text-sm text-on-surface-variant mb-4">Deeper content across the strands and the first Classroom-Based Assessment, the Extended Experimental Investigation, which rewards careful planning.</p>
              <ul className="space-y-1 text-sm font-medium text-charcoal border-t border-outline-variant pt-3">
                <li className="flex items-center gap-2"><LigatureIcon name="Check" className="w-4 h-4 text-royal-purple" /> Extended Experimental Investigation</li>
                <li className="flex items-center gap-2"><LigatureIcon name="Check" className="w-4 h-4 text-royal-purple" /> Chemical &amp; physical world</li>
              </ul>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">Third Year</h4>
              <p className="text-sm text-on-surface-variant mb-4">The second CBA, Science in Society, and its Assessment Task, then the Junior Cycle Final Examination covering the full specification.</p>
              <ul className="space-y-1 text-sm font-medium text-charcoal border-t border-outline-variant pt-3">
                <li className="flex items-center gap-2"><LigatureIcon name="Check" className="w-4 h-4 text-royal-purple" /> Science in Society Investigation</li>
                <li className="flex items-center gap-2"><LigatureIcon name="Check" className="w-4 h-4 text-royal-purple" /> JCFE exam technique</li>
              </ul>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">Choosing Senior Sciences</h4>
              <p className="text-sm text-on-surface-variant mb-4">Deciding between Biology, Chemistry, Physics and Agricultural Science for Leaving Cert, with an eye on the CAO requirements of likely college courses.</p>
              <ul className="space-y-1 text-sm font-medium text-charcoal border-t border-outline-variant pt-3">
                <li className="flex items-center gap-2"><LigatureIcon name="Check" className="w-4 h-4 text-royal-purple" /> Leaving Cert subject choice</li>
                <li className="flex items-center gap-2"><LigatureIcon name="Check" className="w-4 h-4 text-royal-purple" /> CAO course requirements</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Quality */}
      <section className="py-16 md:py-20 bg-surface-container-low">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop grid md:grid-cols-2 gap-12 items-center">
          <img
            src="https://images.unsplash.com/photo-1614935151651-0bea6508db6b?w=800&q=80"
            alt="Science tutor demonstrating a concept during an online grind with an Irish student"
            className="rounded-2xl shadow-xl w-full h-auto object-cover"
          />
          <div>
            <span className="inline-block bg-lime-green text-charcoal font-bold px-4 py-1.5 rounded-full mb-4">Garda Vetted Tutors</span>
            <h2 className="text-3xl font-bold text-charcoal mb-6">Science Tutors Who Teach How Science Works</h2>
            <p className="text-on-surface-variant mb-6 leading-relaxed">
              Each science tutor holds a science degree and is assessed on the Junior Cycle specification before taking a student. All tutors are Garda vetted, and grinds are recorded for revision.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <LigatureIcon name="CheckCircle" className="w-5 h-5 text-royal-purple mt-0.5" />
                <span className="text-on-surface-variant">Garda vetted before their first grind</span>
              </li>
              <li className="flex items-start gap-3">
                <LigatureIcon name="CheckCircle" className="w-5 h-5 text-royal-purple mt-0.5" />
                <span className="text-on-surface-variant">Degree-qualified in a science subject</span>
              </li>
              <li className="flex items-start gap-3">
                <LigatureIcon name="CheckCircle" className="w-5 h-5 text-royal-purple mt-0.5" />
                <span className="text-on-surface-variant">Experienced with CBAs and the JCFE</span>
              </li>
            </ul>
            <button onClick={() => onNavigate('about')} className="bg-charcoal text-white px-8 py-3.5 rounded-full font-semibold">Learn More About Our Tutors</button>
          </div>
        </div>
      </section>

      <GradeLessonPlans
        onNavigate={onNavigate}
        subject="Science"
        description="Explore Ireland science lesson plans aligned with local year groups, courses and exams."
        plans={[
          { grade: '1st–6th Class', band: 'Primary' },
          { grade: 'Junior Cycle Science', band: 'Junior Cycle' },
          { grade: 'Leaving Cert Biology', band: 'Leaving Certificate' },
          { grade: 'Leaving Cert Chemistry', band: 'Leaving Certificate' },
          { grade: 'Leaving Cert Physics', band: 'Leaving Certificate' },
        ]}
      />

      {/* FAQs */}
      <section className="py-16 md:py-20">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-12 text-center">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">Is Junior Cycle science one subject or three?</h4>
              <p className="text-on-surface-variant text-sm">One. Junior Cycle science is a single integrated subject covering the Biological, Chemical and Physical Worlds plus Earth and Space, all linked by the Nature of Science strand. Students only split into separate Biology, Chemistry and Physics at Leaving Cert, which is why a weak area in Junior Cycle can affect which senior sciences look realistic.</p>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">What are the science Classroom-Based Assessments?</h4>
              <p className="text-on-surface-variant text-sm">There are two. The Extended Experimental Investigation is done in Second Year, and the Science in Society Investigation follows in Third Year with a written Assessment Task linked to it. They are reported on the Junior Cycle Profile of Achievement, and they reward planning and clear write-ups, which students often underestimate.</p>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">My child learns the facts but still loses marks. Why?</h4>
              <p className="text-on-surface-variant text-sm">Usually on the questions that ask them to explain, predict or interpret data rather than recall. The Nature of Science strand is assessed throughout, so students need to describe how an experiment works and what results mean. Those are learnable skills, and they tend to improve quickly once practised on purpose.</p>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">Which science should my child pick for the Leaving Cert?</h4>
              <p className="text-on-surface-variant text-sm">It depends on the college courses they might apply for. Health and life science courses usually want Biology and often Chemistry, engineering generally values Physics and Chemistry, and some courses accept any laboratory science. Check the CAO minimum requirements for the courses being considered before Third Year subject choices close.</p>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">Can you help with CBA write-ups?</h4>
              <p className="text-on-surface-variant text-sm">Yes, within the rules. We help students understand how to plan an investigation, record results and structure a report, so the work they produce is their own but much better organised. We do not write the CBA for them, which would be both against the rules and no help at all in the exam.</p>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">Is the free trial grind really free?</h4>
              <p className="text-on-surface-variant text-sm">It is. No card details, no commitment and no sales call afterwards. The grind shows you exactly where your child stands against the Junior Cycle specification and what would help most.</p>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">My child is leaning towards biology for the Leaving Cert. Should we start now?</h4>
              <p className="text-on-surface-variant text-sm">
                The Biological World strand is a good place to build from, and strengthening it in Third Year makes Fifth Year noticeably easier. Once subject choices are made, it is worth moving on to dedicated{' '}
                <button
                  onClick={() => onNavigate('subject', 'Biology')}
                  className="text-royal-purple font-bold underline underline-offset-2 cursor-pointer"
                >
                  biology grinds
                </button>
                {' '}so the Leaving Cert course starts on firm ground.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* Related Subjects */}
      <section className="py-16 md:py-20">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4 text-center">Related Subjects</h2>
          <p className="text-on-surface-variant text-center max-w-2xl mx-auto mb-10">Junior Cycle science leads into separate Leaving Cert subjects. See the ones your child may choose.</p>
          <div className="grid sm:grid-cols-3 gap-6">
            <button
              onClick={() => onNavigate('subject', 'Biology')}
              className="border border-outline-variant rounded-xl p-6 text-left hover:border-royal-purple transition-colors"
            >
              <h4 className="font-bold text-charcoal mb-1">Online Biology Tutor in Ireland</h4>
              <span className="text-royal-purple font-semibold text-sm underline underline-offset-2">Biology grinds</span>
            </button>
            <button
              onClick={() => onNavigate('subject', 'Chemistry')}
              className="border border-outline-variant rounded-xl p-6 text-left hover:border-royal-purple transition-colors"
            >
              <h4 className="font-bold text-charcoal mb-1">Online Chemistry Tutor in Ireland</h4>
              <span className="text-royal-purple font-semibold text-sm underline underline-offset-2">Chemistry grinds</span>
            </button>
            <button
              onClick={() => onNavigate('subject', 'Physics')}
              className="border border-outline-variant rounded-xl p-6 text-left hover:border-royal-purple transition-colors"
            >
              <h4 className="font-bold text-charcoal mb-1">Online Physics Tutor in Ireland</h4>
              <span className="text-royal-purple font-semibold text-sm underline underline-offset-2">Physics grinds</span>
            </button>
          </div>
        </div>
      </section>

      {/* Book Your Free Trial Lesson */}
      <section className="py-16 md:py-20 bg-surface-container-low">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4 text-center">Book Your Free Trial Lesson</h2>
          <p className="text-on-surface-variant text-center max-w-2xl mx-auto mb-10">
            Tell us your child&rsquo;s year and what they find difficult, and we will match them with a science tutor for a free first grind. No payment details needed.
          </p>
          <FreeTrialForm />
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-20">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="bg-royal-purple rounded-3xl p-10 md:p-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Build Science Understanding That Lasts</h2>
            <p className="text-white/80 mb-8 max-w-xl mx-auto">From First Year investigations to the Junior Cycle Final Examination, our specification-matched science tutors are ready to help.</p>
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
