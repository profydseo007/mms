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

export default function NZEnglishTutorPage({ onNavigate }: SubjectComponentProps) {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-primary-fixed">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-white text-royal-purple text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
                NCEA English &amp; Literacy Specialists
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-on-primary-fixed mb-6 leading-tight">
                Online English Tutor <br className="hidden md:block" />in New Zealand
              </h1>
              <p className="text-lg text-on-primary-fixed/80 mb-8 max-w-xl">
                Strengthen reading, writing and analysis with an expert <strong className="font-semibold">Online English Tutor</strong> who works to the New Zealand Curriculum. From early literacy through to NCEA Level 3 English and University Entrance, lessons target the standards your child is entered for.
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
                src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&q=80"
                alt="New Zealand student writing an English essay during an online tutoring session"
                className="rounded-2xl shadow-2xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-16 md:py-20">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4 text-center">English Tutoring for New Zealand School Success</h2>
          <p className="text-on-surface-variant text-center max-w-2xl mx-auto mb-12">
            This is English as a school subject. <span className="font-semibold text-charcoal">English tutoring in New Zealand</span> means close reading, structured writing, and the literacy co-requisite that stands between a student and their qualification.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-surface-container-low rounded-2xl p-8">
              <div className="w-12 h-12 bg-lime-green rounded-xl flex items-center justify-center mb-5">
                <LigatureIcon name="Clock" className="w-6 h-6 text-charcoal" />
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-3">Scheduling Around Your Week</h3>
              <p className="text-on-surface-variant">Sessions booked around school and activities nationwide, with extra availability during internal assessment periods and the run-up to externals.</p>
            </div>
            <div className="bg-surface-container-low rounded-2xl p-8">
              <div className="w-12 h-12 bg-lime-green rounded-xl flex items-center justify-center mb-5">
                <LigatureIcon name="DollarSign" className="w-6 h-6 text-charcoal" />
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-3">Clear New Zealand Pricing</h3>
              <p className="text-on-surface-variant">Billed in NZD with no enrolment fee and no contract. Plans can be shared between siblings or split across English and another subject.</p>
            </div>
            <div className="bg-surface-container-low rounded-2xl p-8">
              <div className="w-12 h-12 bg-lime-green rounded-xl flex items-center justify-center mb-5">
                <LigatureIcon name="Star" className="w-6 h-6 text-charcoal" />
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-3">Marked Against NZQA Criteria</h3>
              <p className="text-on-surface-variant">Written work is assessed against the achievement standard criteria your child&rsquo;s teacher uses, so feedback translates into Merit and Excellence rather than general encouragement.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Focus */}
      <section className="py-16 md:py-20 bg-surface-container-low">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4 text-center">New Zealand English <br className="hidden md:block" />Year 1 Through NCEA Level 3</h2>
          <p className="text-on-surface-variant text-center max-w-2xl mx-auto mb-12">
            Covering the English learning area of the New Zealand Curriculum, the literacy co-requisite, NCEA English at Levels 1 to 3, and the University Entrance literacy requirement.
          </p>
          <div className="grid md:grid-cols-12 gap-6">
            <div className="md:col-span-4 space-y-4">
              <div className="bg-white rounded-xl p-5 flex items-center gap-4">
                <span className="w-8 h-8 rounded-full bg-tertiary-fixed flex items-center justify-center font-bold text-sm flex-shrink-0">1</span>
                <span className="font-semibold text-charcoal">Early Literacy (Years 1&ndash;6)</span>
              </div>
              <div className="bg-white rounded-xl p-5 flex items-center gap-4">
                <span className="w-8 h-8 rounded-full bg-tertiary-fixed flex items-center justify-center font-bold text-sm flex-shrink-0">2</span>
                <span className="font-semibold text-charcoal">Intermediate &amp; Junior Secondary (Years 7&ndash;10)</span>
              </div>
              <div className="bg-white rounded-xl p-5 flex items-center gap-4">
                <span className="w-8 h-8 rounded-full bg-tertiary-fixed flex items-center justify-center font-bold text-sm flex-shrink-0">3</span>
                <span className="font-semibold text-charcoal">NCEA English (Years 11&ndash;13)</span>
              </div>
            </div>
            <div className="md:col-span-8 grid sm:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 border border-outline-variant">
                <h4 className="font-bold text-charcoal mb-2">Reading &amp; Close Analysis</h4>
                <p className="text-sm text-on-surface-variant">Decoding and fluency in the early years, developing into close reading, inference and analysis of written and visual texts.</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-outline-variant">
                <h4 className="font-bold text-charcoal mb-2">Writing &amp; Crafting Texts</h4>
                <p className="text-sm text-on-surface-variant">Sentence and paragraph construction through to formal, creative and analytical writing at NCEA level.</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-outline-variant">
                <h4 className="font-bold text-charcoal mb-2">Speaking, Viewing &amp; Presenting</h4>
                <p className="text-sm text-on-surface-variant">Oral presentation, visual text analysis and the making-meaning strands assessed within NCEA English standards.</p>
              </div>
              <div className="bg-secondary-fixed-dim rounded-xl p-6 col-span-full flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <h4 className="font-bold text-white text-lg mb-1">The Literacy Co-requisite Is Not the Same as English</h4>
                  <p className="text-white/80 text-sm">It is assessed separately from subject standards and must be met to gain NCEA at any level, so a student can be passing English and still not have met it.</p>
                </div>
                <button onClick={() => onNavigate('trial')} className="bg-white text-royal-purple px-6 py-2.5 rounded-full font-semibold whitespace-nowrap">Learn More</button>
              </div>
              <div className="col-span-full flex flex-wrap gap-2">
                {['NCEA Level 1 English', 'Level 2 formal writing', 'Level 3 close reading', 'University Entrance literacy', 'Literacy co-requisite'].map((tag) => (
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
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4 text-center">Your Child&rsquo;s English Roadmap, Year by Year</h2>
          <p className="text-on-surface-variant text-center max-w-2xl mx-auto mb-12">
            Our <span className="font-semibold text-charcoal">online English tutoring</span> builds reading stamina and writing technique steadily, rather than cramming both into Year 13.
          </p>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">Primary (Years 1&ndash;6)</h4>
              <p className="text-sm text-on-surface-variant mb-4">Phonics, fluency and comprehension, moving from decoding words to understanding whole texts and writing in complete, connected paragraphs.</p>
              <ul className="space-y-1 text-sm font-medium text-charcoal border-t border-outline-variant pt-3">
                <li className="flex items-center gap-2"><LigatureIcon name="Check" className="w-4 h-4 text-royal-purple" /> Reading fluency</li>
                <li className="flex items-center gap-2"><LigatureIcon name="Check" className="w-4 h-4 text-royal-purple" /> Paragraph writing</li>
              </ul>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">Intermediate (Years 7&ndash;8)</h4>
              <p className="text-sm text-on-surface-variant mb-4">Inference, textual evidence and structured writing. This is where students learn to support a point with quotation rather than retell the plot.</p>
              <ul className="space-y-1 text-sm font-medium text-charcoal border-t border-outline-variant pt-3">
                <li className="flex items-center gap-2"><LigatureIcon name="Check" className="w-4 h-4 text-royal-purple" /> Inference &amp; evidence</li>
                <li className="flex items-center gap-2"><LigatureIcon name="Check" className="w-4 h-4 text-royal-purple" /> Structured writing</li>
              </ul>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">Years 9 &amp; 10</h4>
              <p className="text-sm text-on-surface-variant mb-4">Extended writing, close reading of unfamiliar texts, and the analytical vocabulary that NCEA English standards assume from Year 11 onwards.</p>
              <ul className="space-y-1 text-sm font-medium text-charcoal border-t border-outline-variant pt-3">
                <li className="flex items-center gap-2"><LigatureIcon name="Check" className="w-4 h-4 text-royal-purple" /> Analytical vocabulary</li>
                <li className="flex items-center gap-2"><LigatureIcon name="Check" className="w-4 h-4 text-royal-purple" /> Unfamiliar text practice</li>
              </ul>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">NCEA Levels 1&ndash;3</h4>
              <p className="text-sm text-on-surface-variant mb-4">Internals and externals across reading and writing standards, the literacy co-requisite, and the Level 3 credits required for University Entrance.</p>
              <ul className="space-y-1 text-sm font-medium text-charcoal border-t border-outline-variant pt-3">
                <li className="flex items-center gap-2"><LigatureIcon name="Check" className="w-4 h-4 text-royal-purple" /> Internals &amp; externals</li>
                <li className="flex items-center gap-2"><LigatureIcon name="Check" className="w-4 h-4 text-royal-purple" /> University Entrance literacy</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Quality */}
      <section className="py-16 md:py-20 bg-surface-container-low">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop grid md:grid-cols-2 gap-12 items-center">
          <img
            src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=800&q=80"
            alt="English tutor reviewing a student essay during an online lesson"
            className="rounded-2xl shadow-xl w-full h-auto object-cover"
          />
          <div>
            <span className="inline-block bg-lime-green text-charcoal font-bold px-4 py-1.5 rounded-full mb-4">Detailed Written Feedback</span>
            <h2 className="text-3xl font-bold text-charcoal mb-6">English Tutors Who Mark Like Assessors</h2>
            <p className="text-on-surface-variant mb-6 leading-relaxed">
              Our English tutors hold degrees in English, literature or a closely related field and work to NZQA achievement standard criteria. Every tutor is police vetted under the Children&rsquo;s Act before taking a student.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <LigatureIcon name="CheckCircle" className="w-5 h-5 text-royal-purple mt-0.5" />
                <span className="text-on-surface-variant">Police vetted under the Children&rsquo;s Act</span>
              </li>
              <li className="flex items-start gap-3">
                <LigatureIcon name="CheckCircle" className="w-5 h-5 text-royal-purple mt-0.5" />
                <span className="text-on-surface-variant">Degree-qualified in English or a related discipline</span>
              </li>
              <li className="flex items-start gap-3">
                <LigatureIcon name="CheckCircle" className="w-5 h-5 text-royal-purple mt-0.5" />
                <span className="text-on-surface-variant">Experienced with NCEA English Levels 1 to 3</span>
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
              <h4 className="font-bold text-charcoal mb-2">What is the literacy co-requisite and how is it different from English?</h4>
              <p className="text-on-surface-variant text-sm">It is a standalone requirement assessed separately from subject standards, and it must be met to gain NCEA at any level. English credits do not automatically satisfy it. This surprises a great many families, because a student can be performing perfectly well in English class and still have an outstanding co-requisite that blocks their qualification.</p>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">What does University Entrance actually require?</h4>
              <p className="text-on-surface-variant text-sm">NCEA Level 3, a set number of credits across approved subjects, and the literacy and numeracy co-requisite. It is entirely possible to gain Level 3 and still miss UE, usually because of the approved-subject rules, and that is a painful discovery to make in December. We work backwards from the degree your child is aiming at, since some courses carry their own requirements on top.</p>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">How do you improve a student&rsquo;s writing marks?</h4>
              <p className="text-on-surface-variant text-sm">By working on structure and argument before style. Most marks are lost not through weak vocabulary but through writing that retells rather than analyses, or that never directly addresses the question. We mark against the achievement standard criteria the teacher is using, so feedback maps onto how the work is genuinely assessed.</p>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">My child reads well but writes poorly. Is that normal?</h4>
              <p className="text-on-surface-variant text-sm">Very, and the two are genuinely separate skills. Strong readers absorb ideas but may never have been taught how to plan an argument, build a paragraph around one point, or integrate quotations smoothly. That is explicit technique, and it usually improves faster than reading comprehension does.</p>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">What is the difference between internals and externals in English?</h4>
              <p className="text-on-surface-variant text-sm">Internals are assessed at school across the year, often covering formal writing, creative writing or an oral presentation. Externals are the end-of-year examinations, usually unfamiliar text analysis and written text responses. Because internals accumulate through the year, students who wait for the exam period have already missed credits.</p>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">Is English required for university in New Zealand?</h4>
              <p className="text-on-surface-variant text-sm">The literacy co-requisite is required for NCEA itself, and University Entrance requires Level 3 credits across approved subjects. Many degrees also expect strong written communication regardless of discipline. Students focused on maths and science sometimes leave English until last and find it limiting their options rather than their marks.</p>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">Could weak reading be affecting my child&rsquo;s other subjects?</h4>
              <p className="text-on-surface-variant text-sm">
                Frequently, and it often goes unnoticed. Word problems in maths, data interpretation in science and source analysis in history all rest on reading comprehension, so a slow reader can underperform across the board. Where we see that pattern we look at English alongside{' '}
                <button
                  onClick={() => onNavigate('subject', 'Maths')}
                  className="text-royal-purple font-bold underline underline-offset-2 cursor-pointer"
                >
                  maths tutoring
                </button>
                {' '}because the same comprehension gap is usually showing up in both places.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* Related Subjects */}
      <section className="py-16 md:py-20">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4 text-center">Related Subjects</h2>
          <p className="text-on-surface-variant text-center max-w-2xl mx-auto mb-10">Reading comprehension affects every subject. Families often combine English with another area.</p>
          <div className="grid sm:grid-cols-3 gap-6">
            <button
              onClick={() => onNavigate('subject', 'Maths')}
              className="border border-outline-variant rounded-xl p-6 text-left hover:border-royal-purple transition-colors"
            >
              <h4 className="font-bold text-charcoal mb-1">Online Maths Tutor in New Zealand</h4>
              <span className="text-royal-purple font-semibold text-sm underline underline-offset-2">Maths tutoring</span>
            </button>
            <button
              onClick={() => onNavigate('subject', 'Science')}
              className="border border-outline-variant rounded-xl p-6 text-left hover:border-royal-purple transition-colors"
            >
              <h4 className="font-bold text-charcoal mb-1">Online Science Tutor in New Zealand</h4>
              <span className="text-royal-purple font-semibold text-sm underline underline-offset-2">Science tutoring</span>
            </button>
            <button
              onClick={() => onNavigate('subject', 'Biology')}
              className="border border-outline-variant rounded-xl p-6 text-left hover:border-royal-purple transition-colors"
            >
              <h4 className="font-bold text-charcoal mb-1">Online Biology Tutor in New Zealand</h4>
              <span className="text-royal-purple font-semibold text-sm underline underline-offset-2">Biology tutoring</span>
            </button>
          </div>
        </div>
      </section>

      {/* Book Your Free Trial Lesson */}
      <section className="py-16 md:py-20 bg-surface-container-low">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4 text-center">Book Your Free Trial Lesson</h2>
          <p className="text-on-surface-variant text-center max-w-2xl mx-auto mb-10">
            Tell us your child&rsquo;s year level and the standards they are working towards, and we will match them with an English tutor for a free first lesson. No payment details needed.
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Turn Strong Ideas Into Strong Grades</h2>
            <p className="text-white/80 mb-8 max-w-xl mx-auto">From early reading fluency to Level 3 close reading and University Entrance, our NZ English tutors help students write with clarity and confidence.</p>
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