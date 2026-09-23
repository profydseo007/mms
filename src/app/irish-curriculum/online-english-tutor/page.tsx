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

export default function IEEnglishTutorContent({ onNavigate }: SubjectComponentProps) {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-primary-fixed">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-white text-royal-purple text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
                Junior Cycle &amp; Leaving Cert English Grinds
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-on-primary-fixed mb-6 leading-tight">
                Online English Tutor <br className="hidden md:block" />in Ireland
              </h1>
              <p className="text-lg text-on-primary-fixed/80 mb-8 max-w-xl">
                Improve essays and exam answers with an expert <strong className="font-semibold">Online English Tutor</strong> who knows how the SEC marks English. From Junior Cycle writing through to Leaving Cert Paper 1 composing and the Paper 2 comparative study, our grinds target the marks your child is missing.
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
                src="https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&q=80"
                alt="Irish student drafting a Leaving Cert English essay by hand during an online grind"
                className="rounded-2xl shadow-2xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-16 md:py-20">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4 text-center">English Grinds for Irish Students</h2>
          <p className="text-on-surface-variant text-center max-w-2xl mx-auto mb-12">
            This is English as an exam subject, not English for new learners. <span className="font-semibold text-charcoal">English tutoring in Ireland</span> means sharper essays, better comprehension answers and a clear plan for every paper.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-surface-container-low rounded-2xl p-8">
              <div className="w-12 h-12 bg-lime-green rounded-xl flex items-center justify-center mb-5">
                <LigatureIcon name="Clock" className="w-6 h-6 text-charcoal" />
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-3">Help When Essays Are Due</h3>
              <p className="text-on-surface-variant">Grinds scheduled around school and extra availability ahead of mocks, orals season and the June exams, when writing practice matters most.</p>
            </div>
            <div className="bg-surface-container-low rounded-2xl p-8">
              <div className="w-12 h-12 bg-lime-green rounded-xl flex items-center justify-center mb-5">
                <LigatureIcon name="DollarSign" className="w-6 h-6 text-charcoal" />
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-3">Clear Euro Pricing</h3>
              <p className="text-on-surface-variant">No registration fee and no long contract. Pay per grind or share a monthly plan across English and another subject.</p>
            </div>
            <div className="bg-surface-container-low rounded-2xl p-8">
              <div className="w-12 h-12 bg-lime-green rounded-xl flex items-center justify-center mb-5">
                <LigatureIcon name="Star" className="w-6 h-6 text-charcoal" />
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-3">Marked Using PCLM</h3>
              <p className="text-on-surface-variant">Leaving Cert English is marked on Purpose, Coherence, Language and Mechanics. Every essay we review is marked the same way, so feedback turns straight into marks.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Focus */}
      <section className="py-16 md:py-20 bg-surface-container-low">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4 text-center">The Irish English Curriculum <br className="hidden md:block" />First Year Through Sixth Year</h2>
          <p className="text-on-surface-variant text-center max-w-2xl mx-auto mb-12">
            Grinds follow the NCCA Junior Cycle English specification and the Leaving Certificate English syllabus at Higher and Ordinary Level, including the prescribed texts for your child&rsquo;s exam year.
          </p>
          <div className="grid md:grid-cols-12 gap-6">
            <div className="md:col-span-4 space-y-4">
              <div className="bg-white rounded-xl p-5 flex items-center gap-4">
                <span className="w-8 h-8 rounded-full bg-tertiary-fixed flex items-center justify-center font-bold text-sm flex-shrink-0">1</span>
                <span className="font-semibold text-charcoal">Junior Cycle English (1st&ndash;3rd Year)</span>
              </div>
              <div className="bg-white rounded-xl p-5 flex items-center gap-4">
                <span className="w-8 h-8 rounded-full bg-tertiary-fixed flex items-center justify-center font-bold text-sm flex-shrink-0">2</span>
                <span className="font-semibold text-charcoal">Transition Year Writing</span>
              </div>
              <div className="bg-white rounded-xl p-5 flex items-center gap-4">
                <span className="w-8 h-8 rounded-full bg-tertiary-fixed flex items-center justify-center font-bold text-sm flex-shrink-0">3</span>
                <span className="font-semibold text-charcoal">Leaving Cert English (5th &amp; 6th Year)</span>
              </div>
            </div>
            <div className="md:col-span-8 grid sm:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 border border-outline-variant">
                <h4 className="font-bold text-charcoal mb-2">Paper 1: Comprehending &amp; Composing</h4>
                <p className="text-sm text-on-surface-variant">Reading comprehension questions and the long composition, where personal essays, speeches and short stories are all possible.</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-outline-variant">
                <h4 className="font-bold text-charcoal mb-2">Paper 2: The Single Text</h4>
                <p className="text-sm text-on-surface-variant">An in-depth answer on one prescribed text, showing detailed knowledge and a clear line of argument.</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-outline-variant">
                <h4 className="font-bold text-charcoal mb-2">Comparative Study &amp; Poetry</h4>
                <p className="text-sm text-on-surface-variant">Comparing texts across modes of comparison, plus prescribed and unseen poetry at Higher and Ordinary Level.</p>
              </div>
              <div className="bg-secondary-fixed-dim rounded-xl p-6 col-span-full flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <h4 className="font-bold text-white text-lg mb-1">English Counts in Almost Every CAO Calculation</h4>
                  <p className="text-white/80 text-sm">Because it is a core subject nearly every student sits, a strong English result is one of the most reliable ways to protect a points total.</p>
                </div>
                <button onClick={() => onNavigate('trial')} className="bg-white text-royal-purple px-6 py-2.5 rounded-full font-semibold whitespace-nowrap">Learn More</button>
              </div>
              <div className="col-span-full flex flex-wrap gap-2">
                {['Leaving Cert Paper 1', 'Comparative Study', 'Prescribed Poetry', 'Junior Cycle Oral Communication', 'PCLM marking'].map((tag) => (
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
            Our <span className="font-semibold text-charcoal">online English tutoring</span> builds essay skill and reading depth over time instead of cramming quotes in Sixth Year.
          </p>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">1st &amp; 2nd Year</h4>
              <p className="text-sm text-on-surface-variant mb-4">Reading for meaning, structured paragraphs and the first Classroom-Based Assessment, the Oral Communication task, completed in Second Year.</p>
              <ul className="space-y-1 text-sm font-medium text-charcoal border-t border-outline-variant pt-3">
                <li className="flex items-center gap-2"><LigatureIcon name="Check" className="w-4 h-4 text-royal-purple" /> Paragraph structure</li>
                <li className="flex items-center gap-2"><LigatureIcon name="Check" className="w-4 h-4 text-royal-purple" /> Oral Communication CBA</li>
              </ul>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">3rd Year</h4>
              <p className="text-sm text-on-surface-variant mb-4">The Collection of the Student&rsquo;s Texts CBA and its written task, then the Junior Cycle English exam at Higher or Ordinary Level.</p>
              <ul className="space-y-1 text-sm font-medium text-charcoal border-t border-outline-variant pt-3">
                <li className="flex items-center gap-2"><LigatureIcon name="Check" className="w-4 h-4 text-royal-purple" /> Collection of Texts CBA</li>
                <li className="flex items-center gap-2"><LigatureIcon name="Check" className="w-4 h-4 text-royal-purple" /> JCFE written answers</li>
              </ul>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">Transition Year</h4>
              <p className="text-sm text-on-surface-variant mb-4">A good window for reading widely and practising extended writing without exam pressure, which pays off heavily in Fifth Year.</p>
              <ul className="space-y-1 text-sm font-medium text-charcoal border-t border-outline-variant pt-3">
                <li className="flex items-center gap-2"><LigatureIcon name="Check" className="w-4 h-4 text-royal-purple" /> Wider reading</li>
                <li className="flex items-center gap-2"><LigatureIcon name="Check" className="w-4 h-4 text-royal-purple" /> Extended writing practice</li>
              </ul>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">5th &amp; 6th Year</h4>
              <p className="text-sm text-on-surface-variant mb-4">Leaving Cert Paper 1 and Paper 2, the single text, comparative study and poetry, all marked against PCLM criteria.</p>
              <ul className="space-y-1 text-sm font-medium text-charcoal border-t border-outline-variant pt-3">
                <li className="flex items-center gap-2"><LigatureIcon name="Check" className="w-4 h-4 text-royal-purple" /> Composing &amp; comprehension</li>
                <li className="flex items-center gap-2"><LigatureIcon name="Check" className="w-4 h-4 text-royal-purple" /> Single text &amp; comparative</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Quality */}
      <section className="py-16 md:py-20 bg-surface-container-low">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop grid md:grid-cols-2 gap-12 items-center">
          <img
            src="https://images.unsplash.com/photo-1519682337058-a94d519337bc?w=800&q=80"
            alt="English tutor reviewing an essay with an Irish student during an online grind"
            className="rounded-2xl shadow-xl w-full h-auto object-cover"
          />
          <div>
            <span className="inline-block bg-lime-green text-charcoal font-bold px-4 py-1.5 rounded-full mb-4">Detailed Essay Feedback</span>
            <h2 className="text-3xl font-bold text-charcoal mb-6">English Tutors Who Mark Like the SEC</h2>
            <p className="text-on-surface-variant mb-6 leading-relaxed">
              Our English tutors hold degrees in English or a related discipline and know the prescribed texts for the current exam years. All are Garda vetted before they teach, and every grind is recorded.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <LigatureIcon name="CheckCircle" className="w-5 h-5 text-royal-purple mt-0.5" />
                <span className="text-on-surface-variant">Garda vetted before their first grind</span>
              </li>
              <li className="flex items-start gap-3">
                <LigatureIcon name="CheckCircle" className="w-5 h-5 text-royal-purple mt-0.5" />
                <span className="text-on-surface-variant">Degree-qualified in English or a related field</span>
              </li>
              <li className="flex items-start gap-3">
                <LigatureIcon name="CheckCircle" className="w-5 h-5 text-royal-purple mt-0.5" />
                <span className="text-on-surface-variant">Familiar with current prescribed texts</span>
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
              <h4 className="font-bold text-charcoal mb-2">What does PCLM mean in Leaving Cert English?</h4>
              <p className="text-on-surface-variant text-sm">It stands for Purpose, Coherence, Language and Mechanics, the four criteria used to mark Leaving Cert English answers. Purpose and Coherence carry the most weight, so an essay that clearly answers the question and keeps a steady line of argument will score well even if the writing is not flashy. Most students lose marks on Purpose by drifting away from the question.</p>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">How should my child prepare for the comparative study?</h4>
              <p className="text-on-surface-variant text-sm">By learning to compare, not summarise. The comparative study asks students to set texts against each other under the modes of comparison for that year, and the strongest answers weave the texts together throughout. Students who write about each text separately and then add a comparison at the end rarely reach the top grades.</p>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">Can grinds help with the composition on Paper 1?</h4>
              <p className="text-on-surface-variant text-sm">Yes, and it is often where the biggest gains are. The composition carries a large share of the Paper 1 marks, and students who practise planning quickly and writing to a clear purpose can improve noticeably within a few months. We work on structure first, then style.</p>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">What are the Junior Cycle English CBAs?</h4>
              <p className="text-on-surface-variant text-sm">There are two. The Oral Communication task is completed in Second Year, and the Collection of the Student&rsquo;s Texts follows in Third Year with a written Assessment Task linked to it. They are reported on the Junior Cycle Profile of Achievement and reward students who plan ahead rather than leaving them to the last week.</p>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">Do you cover the prescribed texts for this year?</h4>
              <p className="text-on-surface-variant text-sm">Yes. The prescribed texts and poets change from year to year, and our tutors work from the list published for your child&rsquo;s exam year. It is worth confirming which single text and comparative texts your child&rsquo;s class has chosen, since schools pick from the list.</p>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">Is the free trial grind really free?</h4>
              <p className="text-on-surface-variant text-sm">Completely. No card is taken and nobody calls afterwards to sell you a package. The grind shows where your child&rsquo;s writing and reading currently stand and what would lift their marks fastest.</p>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">Could my child&rsquo;s reading be holding back other subjects?</h4>
              <p className="text-on-surface-variant text-sm">
                It often is. Long maths questions, science data questions and history sources all depend on careful reading, so a student who reads slowly or misses detail can lose marks right across the Leaving Cert. When we see that pattern we look at English alongside{' '}
                <button
                  onClick={() => onNavigate('subject', 'Maths')}
                  className="text-royal-purple font-bold underline underline-offset-2 cursor-pointer"
                >
                  maths grinds
                </button>
                {' '}because the same reading issue usually shows up in both.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* Related Subjects */}
      <section className="py-16 md:py-20">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4 text-center">Related Subjects</h2>
          <p className="text-on-surface-variant text-center max-w-2xl mx-auto mb-10">Strong reading helps across the whole Leaving Cert. These are the subjects families often add.</p>
          <div className="grid sm:grid-cols-3 gap-6">
            <button
              onClick={() => onNavigate('subject', 'Maths')}
              className="border border-outline-variant rounded-xl p-6 text-left hover:border-royal-purple transition-colors"
            >
              <h4 className="font-bold text-charcoal mb-1">Online Maths Tutor in Ireland</h4>
              <span className="text-royal-purple font-semibold text-sm underline underline-offset-2">Maths grinds</span>
            </button>
            <button
              onClick={() => onNavigate('subject', 'Science')}
              className="border border-outline-variant rounded-xl p-6 text-left hover:border-royal-purple transition-colors"
            >
              <h4 className="font-bold text-charcoal mb-1">Online Science Tutor in Ireland</h4>
              <span className="text-royal-purple font-semibold text-sm underline underline-offset-2">Science grinds</span>
            </button>
            <button
              onClick={() => onNavigate('subject', 'Biology')}
              className="border border-outline-variant rounded-xl p-6 text-left hover:border-royal-purple transition-colors"
            >
              <h4 className="font-bold text-charcoal mb-1">Online Biology Tutor in Ireland</h4>
              <span className="text-royal-purple font-semibold text-sm underline underline-offset-2">Biology grinds</span>
            </button>
          </div>
        </div>
      </section>

      {/* Book Your Free Trial Lesson */}
      <section className="py-16 md:py-20 bg-surface-container-low">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4 text-center">Book Your Free Trial Lesson</h2>
          <p className="text-on-surface-variant text-center max-w-2xl mx-auto mb-10">
            Tell us your child&rsquo;s year, level and the texts they are studying, and we will match them with an English tutor for a free first grind. No payment details needed.
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Write Answers That Earn the Marks</h2>
            <p className="text-white/80 mb-8 max-w-xl mx-auto">From Junior Cycle paragraphs to Leaving Cert Higher Level essays, our English tutors help students write with clarity and purpose.</p>
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