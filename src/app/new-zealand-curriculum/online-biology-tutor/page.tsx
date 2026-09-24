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

export default function NZBiologyTutorContent({ onNavigate }: SubjectComponentProps) {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-primary-fixed">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-white text-royal-purple text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
                NCEA Level 2 &amp; 3 Biology Specialists
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-on-primary-fixed mb-6 leading-tight">
                Online Biology Tutor <br className="hidden md:block" />in New Zealand
              </h1>
              <p className="text-lg text-on-primary-fixed/80 mb-8 max-w-xl">
                Move beyond memorising with an expert <strong className="font-semibold">Online Biology Tutor</strong> matched to your child&rsquo;s NCEA standards. From Level 1 life processes through to Level 3 genetics and evolution, lessons target the criteria that separate Achieved from Excellence.
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
                src="https://images.unsplash.com/photo-1530026186672-2cd00ffc50fe?w=800&q=80"
                alt="New Zealand student studying biology diagrams during an online tutoring session"
                className="rounded-2xl shadow-2xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-16 md:py-20">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4 text-center">Biology Tutoring for NCEA Levels 1 to 3</h2>
          <p className="text-on-surface-variant text-center max-w-2xl mx-auto mb-12">
            Biology looks like a memorisation subject until Level 3, when it stops being one. <span className="font-semibold text-charcoal">Biology tutoring in New Zealand</span> should prepare students for that shift before it arrives.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-surface-container-low rounded-2xl p-8">
              <div className="w-12 h-12 bg-lime-green rounded-xl flex items-center justify-center mb-5">
                <LigatureIcon name="Clock" className="w-6 h-6 text-charcoal" />
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-3">Flexible Session Times</h3>
              <p className="text-on-surface-variant">Biology support scheduled around school nationwide, with additional availability ahead of internal assessments, field work and end-of-year externals.</p>
            </div>
            <div className="bg-surface-container-low rounded-2xl p-8">
              <div className="w-12 h-12 bg-lime-green rounded-xl flex items-center justify-center mb-5">
                <LigatureIcon name="DollarSign" className="w-6 h-6 text-charcoal" />
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-3">Simple New Zealand Pricing</h3>
              <p className="text-on-surface-variant">Rates billed in NZD, no enrolment fee and no contract. One plan can cover biology and chemistry together, which is how most health science students study.</p>
            </div>
            <div className="bg-surface-container-low rounded-2xl p-8">
              <div className="w-12 h-12 bg-lime-green rounded-xl flex items-center justify-center mb-5">
                <LigatureIcon name="Star" className="w-6 h-6 text-charcoal" />
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-3">Explanation Over Recall</h3>
              <p className="text-on-surface-variant">Excellence in NCEA biology is awarded for explaining and linking processes, not for listing them. We build that reasoning rather than expanding the list of terms to learn.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Focus */}
      <section className="py-16 md:py-20 bg-surface-container-low">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4 text-center">NCEA Biology <br className="hidden md:block" />Levels 1, 2 and 3</h2>
          <p className="text-on-surface-variant text-center max-w-2xl mx-auto mb-12">
            Covering NCEA biology achievement standards across Levels 1 to 3, including internal assessments, field investigations and the external examinations that follow.
          </p>
          <div className="grid md:grid-cols-12 gap-6">
            <div className="md:col-span-4 space-y-4">
              <div className="bg-white rounded-xl p-5 flex items-center gap-4">
                <span className="w-8 h-8 rounded-full bg-tertiary-fixed flex items-center justify-center font-bold text-sm flex-shrink-0">1</span>
                <span className="font-semibold text-charcoal">Junior Science Foundations (Years 9&ndash;10)</span>
              </div>
              <div className="bg-white rounded-xl p-5 flex items-center gap-4">
                <span className="w-8 h-8 rounded-full bg-tertiary-fixed flex items-center justify-center font-bold text-sm flex-shrink-0">2</span>
                <span className="font-semibold text-charcoal">NCEA Level 1 &amp; 2 Biology (Years 11&ndash;12)</span>
              </div>
              <div className="bg-white rounded-xl p-5 flex items-center gap-4">
                <span className="w-8 h-8 rounded-full bg-tertiary-fixed flex items-center justify-center font-bold text-sm flex-shrink-0">3</span>
                <span className="font-semibold text-charcoal">NCEA Level 3 Biology &amp; Scholarship (Year 13)</span>
              </div>
            </div>
            <div className="md:col-span-8 grid sm:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 border border-outline-variant">
                <h4 className="font-bold text-charcoal mb-2">Cells &amp; Life Processes</h4>
                <p className="text-sm text-on-surface-variant">Cell structure and function, transport, photosynthesis and respiration, building the foundation for senior biology.</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-outline-variant">
                <h4 className="font-bold text-charcoal mb-2">Genetics &amp; Evolution</h4>
                <p className="text-sm text-on-surface-variant">Inheritance, DNA and protein synthesis, genetic variation, speciation and the evolutionary processes assessed at Level 3.</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-outline-variant">
                <h4 className="font-bold text-charcoal mb-2">Ecology &amp; Human Biology</h4>
                <p className="text-sm text-on-surface-variant">Ecological relationships, adaptation, population studies and human body systems, including the field work assessed internally.</p>
              </div>
              <div className="bg-secondary-fixed-dim rounded-xl p-6 col-span-full flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <h4 className="font-bold text-white text-lg mb-1">Level 3 Biology Is Not a Memorisation Course</h4>
                  <p className="text-white/80 text-sm">Excellence is awarded for explaining mechanisms and linking processes together, which catches out students who did well at Level 2 through recall alone.</p>
                </div>
                <button onClick={() => onNavigate('trial')} className="bg-white text-royal-purple px-6 py-2.5 rounded-full font-semibold whitespace-nowrap">Learn More</button>
              </div>
              <div className="col-span-full flex flex-wrap gap-2">
                {['Level 1 life processes', 'Level 2 genetics', 'Level 3 evolution', 'Ecology field work', 'NZQA Scholarship Biology'].map((tag) => (
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
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4 text-center">Your Child&rsquo;s Biology Roadmap, Year by Year</h2>
          <p className="text-on-surface-variant text-center max-w-2xl mx-auto mb-12">
            Our <span className="font-semibold text-charcoal">online biology tutoring</span> prepares students for the shift from describing to explaining that defines Level 3 biology.
          </p>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">Years 9 &amp; 10</h4>
              <p className="text-sm text-on-surface-variant mb-4">Cells, body systems and ecosystems within general science. The vocabulary and basic cell biology built here support everything in the senior standards.</p>
              <ul className="space-y-1 text-sm font-medium text-charcoal border-t border-outline-variant pt-3">
                <li className="flex items-center gap-2"><LigatureIcon name="Check" className="w-4 h-4 text-royal-purple" /> Cells &amp; body systems</li>
                <li className="flex items-center gap-2"><LigatureIcon name="Check" className="w-4 h-4 text-royal-purple" /> Ecosystem fundamentals</li>
              </ul>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">NCEA Level 1</h4>
              <p className="text-sm text-on-surface-variant mb-4">Life processes, genetic variation and biological ideas, assessed through internals and externals against NZQA criteria for the first time.</p>
              <ul className="space-y-1 text-sm font-medium text-charcoal border-t border-outline-variant pt-3">
                <li className="flex items-center gap-2"><LigatureIcon name="Check" className="w-4 h-4 text-royal-purple" /> Life processes</li>
                <li className="flex items-center gap-2"><LigatureIcon name="Check" className="w-4 h-4 text-royal-purple" /> Internal assessment technique</li>
              </ul>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">NCEA Level 2</h4>
              <p className="text-sm text-on-surface-variant mb-4">Cell processes, genetic variation, ecology and adaptation, still taught largely descriptively. Strong recall carries many students comfortably through this year.</p>
              <ul className="space-y-1 text-sm font-medium text-charcoal border-t border-outline-variant pt-3">
                <li className="flex items-center gap-2"><LigatureIcon name="Check" className="w-4 h-4 text-royal-purple" /> Cell processes &amp; genetics</li>
                <li className="flex items-center gap-2"><LigatureIcon name="Check" className="w-4 h-4 text-royal-purple" /> Ecological field work</li>
              </ul>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">NCEA Level 3</h4>
              <p className="text-sm text-on-surface-variant mb-4">Genetics, evolutionary processes, plant and animal responses, and speciation, plus Scholarship. Explanation and linking replace recall as the main demand.</p>
              <ul className="space-y-1 text-sm font-medium text-charcoal border-t border-outline-variant pt-3">
                <li className="flex items-center gap-2"><LigatureIcon name="Check" className="w-4 h-4 text-royal-purple" /> Evolution &amp; speciation</li>
                <li className="flex items-center gap-2"><LigatureIcon name="Check" className="w-4 h-4 text-royal-purple" /> Explaining processes fully</li>
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
            <span className="inline-block bg-lime-green text-charcoal font-bold px-4 py-1.5 rounded-full mb-4">Standards Matched</span>
            <h2 className="text-3xl font-bold text-charcoal mb-6">Biology Tutors Matched to Your Child&rsquo;s Standards</h2>
            <p className="text-on-surface-variant mb-6 leading-relaxed">
              Our biology tutors hold degrees in biology or a related life science and work to the specific NCEA standards your child is entered for. Screening through police vetting under the Children&rsquo;s Act is completed for every tutor we assign.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <LigatureIcon name="CheckCircle" className="w-5 h-5 text-royal-purple mt-0.5" />
                <span className="text-on-surface-variant">Police vetted under the Children&rsquo;s Act</span>
              </li>
              <li className="flex items-start gap-3">
                <LigatureIcon name="CheckCircle" className="w-5 h-5 text-royal-purple mt-0.5" />
                <span className="text-on-surface-variant">Degree-qualified in biology or a life science</span>
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

      <GradeLessonPlans
        onNavigate={onNavigate}
        subject="Biology"
        description="Explore New Zealand biology lesson plans aligned with local year groups, courses and exams."
        plans={[
          { grade: 'Years 9–10 Science', band: 'Junior Secondary' },
          { grade: 'NCEA Level 1 Science', band: 'NCEA' },
          { grade: 'NCEA Level 2 Biology', band: 'NCEA' },
          { grade: 'NCEA Level 3 Biology', band: 'NCEA' },
        ]}
      />

      {/* FAQs */}
      <section className="py-16 md:py-20">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-12 text-center">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">Why did my child do well at Level 2 biology but struggle at Level 3?</h4>
              <p className="text-on-surface-variant text-sm">Because the two levels reward different things. Level 2 is largely descriptive and rewards careful recall, while Level 3 asks students to explain mechanisms, link processes and justify conclusions. Students who succeeded through memorisation find that strategy stops working, and it reads as a sudden drop in ability when it is a change in what is being assessed.</p>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">What actually separates Achieved from Excellence in biology?</h4>
              <p className="text-on-surface-variant text-sm">Rarely more content. Achieved usually requires describing a process correctly; Merit requires explaining how or why it happens; Excellence requires linking ideas together and justifying with evidence. Students frequently know enough for Excellence and write at Achieved level simply because nobody has shown them what the higher criteria are asking for.</p>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">Does Level 3 biology require chemistry?</h4>
              <p className="text-on-surface-variant text-sm">Not always as a formal prerequisite, but it helps considerably. Cellular processes and biochemistry assume some comfort with bonding and reactions, and students taking senior biology without chemistry often find those topics the hardest part of the course. Most health science pathways expect both regardless.</p>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">How is biology assessed at NCEA level?</h4>
              <p className="text-on-surface-variant text-sm">Through internal assessments completed during the year, often including ecological field work or a practical investigation, and external examinations at the end. Which standards a student sits varies between schools, so we confirm exactly which internals and externals they are entered for before planning.</p>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">Is biology useful for nursing or health science degrees?</h4>
              <p className="text-on-surface-variant text-sm">It is usually expected, alongside chemistry, for nursing, health sciences, physiotherapy and most biomedical pathways. Requirements differ between universities, so confirm with the institutions being considered, but students on a health pathway should treat Level 3 biology as essential rather than optional.</p>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">Can you help with ecology field work reports?</h4>
              <p className="text-on-surface-variant text-sm">Yes. Internally assessed field investigations carry real credit weight, and students commonly lose marks on the analysis and discussion rather than on collecting the data. We work through sampling method, presenting results, and writing a discussion that links findings back to ecological principles.</p>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">Should my child take chemistry alongside biology?</h4>
              <p className="text-on-surface-variant text-sm">
                For anyone heading towards health sciences, almost certainly. Level 3 biology leans on chemistry for cellular and biochemical processes, and most nursing and health programmes expect both, so many families pair biology with{' '}
                <button
                  onClick={() => onNavigate('subject', 'Chemistry')}
                  className="text-royal-purple font-bold underline underline-offset-2 cursor-pointer"
                >
                  chemistry tutoring
                </button>
                {' '}rather than discovering the dependency partway through Year 13.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* Related Subjects */}
      <section className="py-16 md:py-20">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4 text-center">Related Subjects</h2>
          <p className="text-on-surface-variant text-center max-w-2xl mx-auto mb-10">Senior biology draws on chemistry, and most health pathways expect both. These are the subjects studied alongside it.</p>
          <div className="grid sm:grid-cols-3 gap-6">
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
            <button
              onClick={() => onNavigate('subject', 'English')}
              className="border border-outline-variant rounded-xl p-6 text-left hover:border-royal-purple transition-colors"
            >
              <h4 className="font-bold text-charcoal mb-1">Online English Tutor in New Zealand</h4>
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
            Tell us your child&rsquo;s year level and the biology standards they are entered for, and we will match them with a specialist tutor for a free first lesson.
          </p>
          <FreeTrialForm />
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-20">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="bg-royal-purple rounded-3xl p-10 md:p-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Understand Biology, Do Not Just Memorise It</h2>
            <p className="text-white/80 mb-8 max-w-xl mx-auto">From Level 2 genetics to Level 3 evolution and Scholarship preparation, our standards-matched biology tutors are ready to help.</p>
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
