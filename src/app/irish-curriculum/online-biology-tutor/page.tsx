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

export default function IEBiologyTutorContent({ onNavigate }: SubjectComponentProps) {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-primary-fixed">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-white text-royal-purple text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
                Leaving Cert Biology Grinds
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-on-primary-fixed mb-6 leading-tight">
                Online Biology Tutor <br className="hidden md:block" />in Ireland
              </h1>
              <p className="text-lg text-on-primary-fixed/80 mb-8 max-w-xl">
                Turn hard work into higher grades with an expert <strong className="font-semibold">Online Biology Tutor</strong> who knows how the Leaving Cert biology paper is marked. From the cell and genetics to ecology and the new coursework component, our grinds help students write answers that match the marking scheme.
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
                src="https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=800&q=80"
                alt="Irish student examining a sample under a microscope during an online biology grind"
                className="rounded-2xl shadow-2xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-16 md:py-20">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4 text-center">Biology Grinds for Fifth and Sixth Year</h2>
          <p className="text-on-surface-variant text-center max-w-2xl mx-auto mb-12">
            Leaving Cert biology is a huge course, and marks are given for specific points. <span className="font-semibold text-charcoal">Biology tutoring in Ireland</span> should teach students what examiners are looking for, not just more facts.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-surface-container-low rounded-2xl p-8">
              <div className="w-12 h-12 bg-lime-green rounded-xl flex items-center justify-center mb-5">
                <LigatureIcon name="Clock" className="w-6 h-6 text-charcoal" />
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-3">Grinds That Fit Your Week</h3>
              <p className="text-on-surface-variant">Sessions after school and at weekends, with extra availability before mocks, ecology write-ups and the June biology exam.</p>
            </div>
            <div className="bg-surface-container-low rounded-2xl p-8">
              <div className="w-12 h-12 bg-lime-green rounded-xl flex items-center justify-center mb-5">
                <LigatureIcon name="DollarSign" className="w-6 h-6 text-charcoal" />
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-3">Simple Euro Pricing</h3>
              <p className="text-on-surface-variant">Pay per grind or save with a monthly plan, with no registration fee. Biology and chemistry can share one plan for health science students.</p>
            </div>
            <div className="bg-surface-container-low rounded-2xl p-8">
              <div className="w-12 h-12 bg-lime-green rounded-xl flex items-center justify-center mb-5">
                <LigatureIcon name="Star" className="w-6 h-6 text-charcoal" />
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-3">Answers That Hit the Marking Scheme</h3>
              <p className="text-on-surface-variant">Biology answers earn marks point by point. We teach students to write clear, precise points in the right order, which often lifts grades faster than extra study.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Focus */}
      <section className="py-16 md:py-20 bg-surface-container-low">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4 text-center">Leaving Cert Biology <br className="hidden md:block" />Higher and Ordinary Level</h2>
          <p className="text-on-surface-variant text-center max-w-2xl mx-auto mb-12">
            Grinds follow the Leaving Certificate Biology course and the Senior Cycle redevelopment, including the mandatory activities, the ecology study and the Additional Assessment Component for new cohorts.
          </p>
          <div className="grid md:grid-cols-12 gap-6">
            <div className="md:col-span-4 space-y-4">
              <div className="bg-white rounded-xl p-5 flex items-center gap-4">
                <span className="w-8 h-8 rounded-full bg-tertiary-fixed flex items-center justify-center font-bold text-sm flex-shrink-0">1</span>
                <span className="font-semibold text-charcoal">Junior Cycle Biological World</span>
              </div>
              <div className="bg-white rounded-xl p-5 flex items-center gap-4">
                <span className="w-8 h-8 rounded-full bg-tertiary-fixed flex items-center justify-center font-bold text-sm flex-shrink-0">2</span>
                <span className="font-semibold text-charcoal">5th Year Biology</span>
              </div>
              <div className="bg-white rounded-xl p-5 flex items-center gap-4">
                <span className="w-8 h-8 rounded-full bg-tertiary-fixed flex items-center justify-center font-bold text-sm flex-shrink-0">3</span>
                <span className="font-semibold text-charcoal">6th Year Biology &amp; Exam</span>
              </div>
            </div>
            <div className="md:col-span-8 grid sm:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 border border-outline-variant">
                <h4 className="font-bold text-charcoal mb-2">The Cell &amp; Genetics</h4>
                <p className="text-sm text-on-surface-variant">Cell structure, enzymes, photosynthesis, respiration, DNA and genetic crosses, a large part of every paper.</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-outline-variant">
                <h4 className="font-bold text-charcoal mb-2">The Organism</h4>
                <p className="text-sm text-on-surface-variant">Human systems including digestion, circulation, the nervous and endocrine systems, and plant structure and response.</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-outline-variant">
                <h4 className="font-bold text-charcoal mb-2">Ecology &amp; the Study of Life</h4>
                <p className="text-sm text-on-surface-variant">Ecosystems, food chains, the ecology field study and the characteristics of living things that open the course.</p>
              </div>
              <div className="bg-secondary-fixed-dim rounded-xl p-6 col-span-full flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <h4 className="font-bold text-white text-lg mb-1">Biology Now Has a Coursework Component Too</h4>
                  <p className="text-white/80 text-sm">New Leaving Cert biology cohorts complete an Additional Assessment Component worth at least 40%, so consistent work across both years now counts towards the final grade.</p>
                </div>
                <button onClick={() => onNavigate('trial')} className="bg-white text-royal-purple px-6 py-2.5 rounded-full font-semibold whitespace-nowrap">Learn More</button>
              </div>
              <div className="col-span-full flex flex-wrap gap-2">
                {['Leaving Cert Biology', 'Genetics &amp; the cell', 'Human biology', 'Ecology field study', 'Mandatory activities'].map((tag) => (
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
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4 text-center">Your Child&rsquo;s Biology Roadmap</h2>
          <p className="text-on-surface-variant text-center max-w-2xl mx-auto mb-12">
            Our <span className="font-semibold text-charcoal">online biology tutoring</span> spreads the large Leaving Cert course sensibly across both years so nothing is left to the last few weeks.
          </p>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">Junior Cycle Foundations</h4>
              <p className="text-sm text-on-surface-variant mb-4">Cells, living things, human biology and ecology from the Biological World strand, a helpful head start on the Leaving Cert course.</p>
              <ul className="space-y-1 text-sm font-medium text-charcoal border-t border-outline-variant pt-3">
                <li className="flex items-center gap-2"><LigatureIcon name="Check" className="w-4 h-4 text-royal-purple" /> Cells &amp; living things</li>
                <li className="flex items-center gap-2"><LigatureIcon name="Check" className="w-4 h-4 text-royal-purple" /> Basic human biology</li>
              </ul>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">5th Year</h4>
              <p className="text-sm text-on-surface-variant mb-4">The cell, enzymes, photosynthesis, respiration and the ecology study. Building good note-taking and answer habits now saves stress later.</p>
              <ul className="space-y-1 text-sm font-medium text-charcoal border-t border-outline-variant pt-3">
                <li className="flex items-center gap-2"><LigatureIcon name="Check" className="w-4 h-4 text-royal-purple" /> Cell biology &amp; enzymes</li>
                <li className="flex items-center gap-2"><LigatureIcon name="Check" className="w-4 h-4 text-royal-purple" /> Ecology field study</li>
              </ul>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">6th Year</h4>
              <p className="text-sm text-on-surface-variant mb-4">Genetics, human systems and plant biology, followed by past-paper practice and revision of every mandatory activity.</p>
              <ul className="space-y-1 text-sm font-medium text-charcoal border-t border-outline-variant pt-3">
                <li className="flex items-center gap-2"><LigatureIcon name="Check" className="w-4 h-4 text-royal-purple" /> Genetics &amp; human systems</li>
                <li className="flex items-center gap-2"><LigatureIcon name="Check" className="w-4 h-4 text-royal-purple" /> Past paper practice</li>
              </ul>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">College Entry</h4>
              <p className="text-sm text-on-surface-variant mb-4">Biology supports nursing, health sciences, medicine and many life science courses. Check the CAO requirements for the courses your child is considering.</p>
              <ul className="space-y-1 text-sm font-medium text-charcoal border-t border-outline-variant pt-3">
                <li className="flex items-center gap-2"><LigatureIcon name="Check" className="w-4 h-4 text-royal-purple" /> Health &amp; life science routes</li>
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
            src="https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&q=80"
            alt="Biology tutor explaining a diagram of the human body during an online grind"
            className="rounded-2xl shadow-xl w-full h-auto object-cover"
          />
          <div>
            <span className="inline-block bg-lime-green text-charcoal font-bold px-4 py-1.5 rounded-full mb-4">Garda Vetted Tutors</span>
            <h2 className="text-3xl font-bold text-charcoal mb-6">Biology Tutors Who Teach Exam Technique</h2>
            <p className="text-on-surface-variant mb-6 leading-relaxed">
              Our biology tutors hold degrees in biology or a related life science and know the Leaving Cert course and marking scheme. Every tutor is Garda vetted, and grinds are recorded so students can revise from them.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <LigatureIcon name="CheckCircle" className="w-5 h-5 text-royal-purple mt-0.5" />
                <span className="text-on-surface-variant">Garda vetted before their first grind</span>
              </li>
              <li className="flex items-start gap-3">
                <LigatureIcon name="CheckCircle" className="w-5 h-5 text-royal-purple mt-0.5" />
                <span className="text-on-surface-variant">Degree-qualified in biology or a life science</span>
              </li>
              <li className="flex items-start gap-3">
                <LigatureIcon name="CheckCircle" className="w-5 h-5 text-royal-purple mt-0.5" />
                <span className="text-on-surface-variant">Experienced with the ecology study and mandatory activities</span>
              </li>
            </ul>
            <button onClick={() => onNavigate('about')} className="bg-charcoal text-white px-8 py-3.5 rounded-full font-semibold">Learn More About Our Tutors</button>
          </div>
        </div>
      </section>

      <GradeLessonPlans
        onNavigate={onNavigate}
        subject="Biology"
        description="Explore Ireland biology lesson plans aligned with local year groups, courses and exams."
        plans={[
          { grade: 'Junior Cycle Science', band: 'Junior Cycle' },
          { grade: 'Leaving Cert Biology', band: 'Leaving Certificate' },
          { grade: 'Higher Level Biology', band: 'Leaving Certificate' },
        ]}
      />

      {/* FAQs */}
      <section className="py-16 md:py-20">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-12 text-center">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">Why does my child study hard but still lose marks in biology?</h4>
              <p className="text-on-surface-variant text-sm">Often because the answers are too general. The marking scheme gives marks for specific, precise points, so a long answer that circles the topic can score less than a short one with the right terms. Teaching students to write clear points that match the marking scheme usually lifts results quickly.</p>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">What is the Additional Assessment Component in biology?</h4>
              <p className="text-on-surface-variant text-sm">Leaving Cert biology is among the first subjects redeveloped under Senior Cycle reform, with an Additional Assessment Component worth at least 40% of the final grade and a written exam for the rest. It applies to students who began Fifth Year from September 2025, so investigative work now counts directly, not only the June paper.</p>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">How do the mandatory activities come up in the exam?</h4>
              <p className="text-on-surface-variant text-sm">Questions on the mandatory activities appear every year and ask about method, results and why certain steps are taken. Students who understand the reasons behind each activity, rather than memorising a list of steps, score far more consistently on these questions.</p>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">Is biology useful for nursing or medicine in Ireland?</h4>
              <p className="text-on-surface-variant text-sm">Biology is widely taken by students heading for nursing, health sciences and medicine, and some courses require a laboratory science. Entry rules differ between colleges, so check the CAO minimum requirements for each course, and note that medicine also involves the HPAT.</p>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">The biology course is huge. How do we cover it all?</h4>
              <p className="text-on-surface-variant text-sm">By planning it across both years. We map the course against the months left before June, focus first on the high-mark areas like genetics and human biology, and revisit each section so nothing is learnt once and forgotten. Starting in Fifth Year makes this much more manageable.</p>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">Is the free trial grind really free?</h4>
              <p className="text-on-surface-variant text-sm">It is. No payment details, no commitment and no sales call. It is a proper grind to find out where your child stands and what will make the biggest difference.</p>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">Should my child take chemistry alongside biology?</h4>
              <p className="text-on-surface-variant text-sm">
                For students aiming at health or life science courses, it is often a good idea. Parts of biology such as enzymes and metabolism make more sense with a chemistry background, and many health courses expect a laboratory science. Some families add{' '}
                <button
                  onClick={() => onNavigate('subject', 'Chemistry')}
                  className="text-royal-purple font-bold underline underline-offset-2 cursor-pointer"
                >
                  chemistry grinds
                </button>
                {' '}so both subjects support each other through Fifth and Sixth Year.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* Related Subjects */}
      <section className="py-16 md:py-20">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4 text-center">Related Subjects</h2>
          <p className="text-on-surface-variant text-center max-w-2xl mx-auto mb-10">Biology connects to chemistry, and good writing helps every answer. See related grinds.</p>
          <div className="grid sm:grid-cols-3 gap-6">
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
            <button
              onClick={() => onNavigate('subject', 'English')}
              className="border border-outline-variant rounded-xl p-6 text-left hover:border-royal-purple transition-colors"
            >
              <h4 className="font-bold text-charcoal mb-1">Online English Tutor in Ireland</h4>
              <span className="text-royal-purple font-semibold text-sm underline underline-offset-2">English grinds</span>
            </button>
          </div>
        </div>
      </section>

      {/* Book Your Free Trial Lesson */}
      <section className="py-16 md:py-20 bg-surface-container-low">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4 text-center">Book Your Free Trial Lesson</h2>
          <p className="text-on-surface-variant text-center max-w-2xl mx-auto mb-10">
            Tell us your child&rsquo;s year, level and the topics they find hardest, and we will match them with a biology tutor for a free first grind. No payment details needed.
          </p>
          <FreeTrialForm />
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-20">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="bg-royal-purple rounded-3xl p-10 md:p-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Score the Marks Your Hard Work Deserves</h2>
            <p className="text-white/80 mb-8 max-w-xl mx-auto">From Fifth Year cell biology to Sixth Year genetics and the June exam, our biology tutors are ready to help.</p>
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
