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

export default function AUEnglishTutorPage({ onNavigate }: SubjectComponentProps) {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-primary-fixed">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-white text-royal-purple text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
                ACARA English &amp; Senior Certificate Specialists
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-on-primary-fixed mb-6 leading-tight">
                Online English Tutor <br className="hidden md:block" />in Australia
              </h1>
              <p className="text-lg text-on-primary-fixed/80 mb-8 max-w-xl">
                Strengthen reading, writing and analysis with an expert <strong className="font-semibold">Online English Tutor</strong> who works to the Australian Curriculum. From early literacy through to VCE text response, HSC modules and QCE analytical essays, lessons target what your child is assessed on.
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
                src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&q=80"
                alt="Australian student writing an English essay during an online tutoring session"
                className="rounded-2xl shadow-2xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-16 md:py-20">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4 text-center">English Tutoring for Australian School Success</h2>
          <p className="text-on-surface-variant text-center max-w-2xl mx-auto mb-12">
            This is the English your child is graded on at school, not English for new arrivals or migrants. <span className="font-semibold text-charcoal">English tutoring in Australia</span> means text analysis, essay structure and the writing technique senior certificates reward.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-surface-container-low rounded-2xl p-8">
              <div className="w-12 h-12 bg-lime-green rounded-xl flex items-center justify-center mb-5">
                <LigatureIcon name="Clock" className="w-6 h-6 text-charcoal" />
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-3">Scheduling Around Your Term</h3>
              <p className="text-on-surface-variant">Sessions booked around school and activities nationwide, with extra availability during assessment weeks and the run-up to trials and final examinations.</p>
            </div>
            <div className="bg-surface-container-low rounded-2xl p-8">
              <div className="w-12 h-12 bg-lime-green rounded-xl flex items-center justify-center mb-5">
                <LigatureIcon name="DollarSign" className="w-6 h-6 text-charcoal" />
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-3">Clear Australian Pricing</h3>
              <p className="text-on-surface-variant">Priced in Australian dollars, with nothing charged to enrol and no term you are tied into. Two children can draw on the same plan, or one student can split it between English and a second subject.</p>
            </div>
            <div className="bg-surface-container-low rounded-2xl p-8">
              <div className="w-12 h-12 bg-lime-green rounded-xl flex items-center justify-center mb-5">
                <LigatureIcon name="Star" className="w-6 h-6 text-charcoal" />
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-3">Marked Against Real Criteria</h3>
              <p className="text-on-surface-variant">Written work is assessed against the marking guidelines or study design criteria your child&rsquo;s teacher uses, so feedback translates into marks rather than general encouragement.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Focus */}
      <section className="py-16 md:py-20 bg-surface-container-low">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4 text-center">Australian Curriculum English <br className="hidden md:block" />Foundation Through Year 12</h2>
          <p className="text-on-surface-variant text-center max-w-2xl mx-auto mb-12">
            Covering ACARA&rsquo;s Language, Literature and Literacy strands to Year 10, then the senior English subjects of your state certificate, whether that is VCE, the HSC, QCE, WACE or SACE.
          </p>
          <div className="grid md:grid-cols-12 gap-6">
            <div className="md:col-span-4 space-y-4">
              <div className="bg-white rounded-xl p-5 flex items-center gap-4">
                <span className="w-8 h-8 rounded-full bg-tertiary-fixed flex items-center justify-center font-bold text-sm flex-shrink-0">1</span>
                <span className="font-semibold text-charcoal">Early Literacy (Foundation&ndash;Year 6)</span>
              </div>
              <div className="bg-white rounded-xl p-5 flex items-center gap-4">
                <span className="w-8 h-8 rounded-full bg-tertiary-fixed flex items-center justify-center font-bold text-sm flex-shrink-0">2</span>
                <span className="font-semibold text-charcoal">Middle Years English (Years 7&ndash;10)</span>
              </div>
              <div className="bg-white rounded-xl p-5 flex items-center gap-4">
                <span className="w-8 h-8 rounded-full bg-tertiary-fixed flex items-center justify-center font-bold text-sm flex-shrink-0">3</span>
                <span className="font-semibold text-charcoal">Senior English &amp; ATAR (Years 11&ndash;12)</span>
              </div>
            </div>
            <div className="md:col-span-8 grid sm:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 border border-outline-variant">
                <h4 className="font-bold text-charcoal mb-2">Language &amp; Literacy</h4>
                <p className="text-sm text-on-surface-variant">Phonics and fluency in the early years, developing into vocabulary, grammar, and the control of written expression that senior marking rewards.</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-outline-variant">
                <h4 className="font-bold text-charcoal mb-2">Literature &amp; Text Analysis</h4>
                <p className="text-sm text-on-surface-variant">Reading and responding to literary, persuasive and multimodal texts, building the analytical vocabulary senior English assumes.</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-outline-variant">
                <h4 className="font-bold text-charcoal mb-2">Writing &amp; Composition</h4>
                <p className="text-sm text-on-surface-variant">Narrative, persuasive and analytical writing, including the text response and comparative essays that dominate senior assessment.</p>
              </div>
              <div className="bg-secondary-fixed-dim rounded-xl p-6 col-span-full flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <h4 className="font-bold text-white text-lg mb-1">English Is Compulsory in Every Australian Senior Certificate</h4>
                  <p className="text-white/80 text-sm">A student cannot avoid it, and in most states an English result is required for an ATAR, which makes it the one subject worth protecting above all others.</p>
                </div>
                <button onClick={() => onNavigate('trial')} className="bg-white text-royal-purple px-6 py-2.5 rounded-full font-semibold whitespace-nowrap">Learn More</button>
              </div>
              <div className="col-span-full flex flex-wrap gap-2">
                {['VCE text response', 'HSC Common Module', 'QCE analytical essay', 'NAPLAN writing', 'Persuasive &amp; comparative writing'].map((tag) => (
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
            Our <span className="font-semibold text-charcoal">online English tutoring</span> builds reading stamina and essay technique steadily, rather than cramming both into Year 12.
          </p>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">Foundation to Year 6</h4>
              <p className="text-sm text-on-surface-variant mb-4">Phonics, fluency and comprehension, moving from decoding words to understanding whole texts. NAPLAN assesses reading, writing and language conventions in Years 3 and 5.</p>
              <ul className="space-y-1 text-sm font-medium text-charcoal border-t border-outline-variant pt-3">
                <li className="flex items-center gap-2"><LigatureIcon name="Check" className="w-4 h-4 text-royal-purple" /> Reading fluency</li>
                <li className="flex items-center gap-2"><LigatureIcon name="Check" className="w-4 h-4 text-royal-purple" /> Paragraph &amp; narrative writing</li>
              </ul>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">Years 7 &amp; 8</h4>
              <p className="text-sm text-on-surface-variant mb-4">Inference, textual evidence and structured paragraphs. This is where students learn to support a point with quotation rather than retell what happened in the story.</p>
              <ul className="space-y-1 text-sm font-medium text-charcoal border-t border-outline-variant pt-3">
                <li className="flex items-center gap-2"><LigatureIcon name="Check" className="w-4 h-4 text-royal-purple" /> Inference &amp; evidence</li>
                <li className="flex items-center gap-2"><LigatureIcon name="Check" className="w-4 h-4 text-royal-purple" /> Structured paragraphs</li>
              </ul>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">Years 9 &amp; 10</h4>
              <p className="text-sm text-on-surface-variant mb-4">Extended analytical writing, persuasive technique and close study of set texts, plus the final NAPLAN writing task in Year 9.</p>
              <ul className="space-y-1 text-sm font-medium text-charcoal border-t border-outline-variant pt-3">
                <li className="flex items-center gap-2"><LigatureIcon name="Check" className="w-4 h-4 text-royal-purple" /> Analytical essay structure</li>
                <li className="flex items-center gap-2"><LigatureIcon name="Check" className="w-4 h-4 text-royal-purple" /> Persuasive &amp; language analysis</li>
              </ul>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">Years 11 &amp; 12</h4>
              <p className="text-sm text-on-surface-variant mb-4">Senior English under your state certificate: text response, comparative and language analysis in VCE, the Common Module and electives in the HSC, analytical essays in QCE.</p>
              <ul className="space-y-1 text-sm font-medium text-charcoal border-t border-outline-variant pt-3">
                <li className="flex items-center gap-2"><LigatureIcon name="Check" className="w-4 h-4 text-royal-purple" /> Text response &amp; comparative</li>
                <li className="flex items-center gap-2"><LigatureIcon name="Check" className="w-4 h-4 text-royal-purple" /> Exam essay technique</li>
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
              Our English tutors hold degrees in English, literature or a closely related field and work to your state&rsquo;s marking criteria. A current Working with Children Check is required before any tutor takes a student.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <LigatureIcon name="CheckCircle" className="w-5 h-5 text-royal-purple mt-0.5" />
                <span className="text-on-surface-variant">Current Working with Children Check</span>
              </li>
              <li className="flex items-start gap-3">
                <LigatureIcon name="CheckCircle" className="w-5 h-5 text-royal-purple mt-0.5" />
                <span className="text-on-surface-variant">Degree-qualified in English or a related discipline</span>
              </li>
              <li className="flex items-start gap-3">
                <LigatureIcon name="CheckCircle" className="w-5 h-5 text-royal-purple mt-0.5" />
                <span className="text-on-surface-variant">Experienced with VCE, HSC, QCE, WACE and SACE English</span>
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
              <h4 className="font-bold text-charcoal mb-2">Is English compulsory for the ATAR?</h4>
              <p className="text-on-surface-variant text-sm">In most states an English subject is required to receive an ATAR, and English is compulsory within every senior certificate in some form. That makes it unusual: a student can drop maths or science, but not English. It also means a weak English result affects an ATAR in a way that a weak result in an optional subject does not.</p>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">What is the difference between text response and language analysis?</h4>
              <p className="text-on-surface-variant text-sm">Text response asks students to argue an interpretation of a studied text using evidence from it. Language analysis asks them to examine how a writer or speaker positions an audience through argument and persuasive technique. They are genuinely different skills, and students often perform well in one while struggling in the other, which is worth diagnosing rather than assuming general weakness.</p>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">How do you actually improve essay marks?</h4>
              <p className="text-on-surface-variant text-sm">By fixing structure and argument before style. Most marks are lost not through weak vocabulary but through essays that summarise rather than analyse, or that never directly answer the question set. We mark against the criteria your child&rsquo;s teacher is using, so feedback maps onto how the work is genuinely scored.</p>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">My child reads well but writes poorly. Is that common?</h4>
              <p className="text-on-surface-variant text-sm">Extremely, and the two are separate skills. Strong readers absorb ideas but may never have been taught to plan an argument, build a paragraph around a single point, or integrate quotations smoothly. That is explicit, teachable technique, and it usually improves faster than reading comprehension.</p>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">Should we prepare for the NAPLAN writing task?</h4>
              <p className="text-on-surface-variant text-sm">A little familiarity helps, since the task is timed and students write to either a narrative or persuasive prompt. Beyond knowing the format and practising planning quickly, extended drilling adds little. NAPLAN reports against proficiency levels rather than a pass mark and carries no consequence for the individual student.</p>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">Do you support students in Years 11 and 12 across different states?</h4>
              <p className="text-on-surface-variant text-sm">Yes. VCE, HSC, QCE, WACE, SACE, TCE and the NTCET are all covered, with tutors matched to the specific certificate. Senior English differs substantially between states in both set texts and assessment structure, so a tutor who knows VCE text response is not automatically suited to an HSC Common Module essay.</p>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">Is slow reading holding back results in subjects other than English?</h4>
              <p className="text-on-surface-variant text-sm">
                Frequently, and it often goes unnoticed. Word problems in maths, extended response questions in science and source analysis in humanities all depend on reading comprehension, so a slow reader underperforms across the board. Where we see that we look at English alongside{' '}
                <button
                  onClick={() => onNavigate('subject', 'Maths')}
                  className="text-royal-purple font-bold underline underline-offset-2 cursor-pointer"
                >
                  maths tutoring
                </button>
                {' '}because the same comprehension gap is usually showing up in both places at once.
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
              <h4 className="font-bold text-charcoal mb-1">Online Maths Tutor in Australia</h4>
              <span className="text-royal-purple font-semibold text-sm underline underline-offset-2">Maths tutoring</span>
            </button>
            <button
              onClick={() => onNavigate('subject', 'Science')}
              className="border border-outline-variant rounded-xl p-6 text-left hover:border-royal-purple transition-colors"
            >
              <h4 className="font-bold text-charcoal mb-1">Online Science Tutor in Australia</h4>
              <span className="text-royal-purple font-semibold text-sm underline underline-offset-2">Science tutoring</span>
            </button>
            <button
              onClick={() => onNavigate('subject', 'Biology')}
              className="border border-outline-variant rounded-xl p-6 text-left hover:border-royal-purple transition-colors"
            >
              <h4 className="font-bold text-charcoal mb-1">Online Biology Tutor in Australia</h4>
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
            Tell us your child&rsquo;s year level, state and the English subject they are taking, and we will match them with a tutor for a free first lesson. No payment details needed.
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Turn Strong Ideas Into Strong Marks</h2>
            <p className="text-white/80 mb-8 max-w-xl mx-auto">From early reading fluency to senior text response and exam essay technique, our Australian English tutors help students write with clarity and confidence.</p>
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