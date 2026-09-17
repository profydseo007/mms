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

export default function NZChemistryTutorPage({ onNavigate }: SubjectComponentProps) {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-primary-fixed">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-white text-royal-purple text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
                NCEA Level 2 &amp; 3 Chemistry Specialists
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-on-primary-fixed mb-6 leading-tight">
                Online Chemistry Tutor <br className="hidden md:block" />in New Zealand
              </h1>
              <p className="text-lg text-on-primary-fixed/80 mb-8 max-w-xl">
                Get past the wall with an expert <strong className="font-semibold">Online Chemistry Tutor</strong> matched to your child&rsquo;s NCEA standards. From Level 1 reactions through to Level 3 equilibrium and organic chemistry, lessons work to the criteria they are actually assessed against.
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
                src="https://images.unsplash.com/photo-1554475901-4538ddfbccc2?w=800&q=80"
                alt="New Zealand student working through chemistry equations during an online lesson"
                className="rounded-2xl shadow-2xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-16 md:py-20">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4 text-center">Chemistry Tutoring for NCEA Levels 1 to 3</h2>
          <p className="text-on-surface-variant text-center max-w-2xl mx-auto mb-12">
            Chemistry is the subject most able students abandon first, and rarely for the reason they think. <span className="font-semibold text-charcoal">Chemistry tutoring in New Zealand</span> should start by working out whether the problem is chemistry or the ratios underneath it.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-surface-container-low rounded-2xl p-8">
              <div className="w-12 h-12 bg-lime-green rounded-xl flex items-center justify-center mb-5">
                <LigatureIcon name="Clock" className="w-6 h-6 text-charcoal" />
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-3">Sessions Around Assessment Dates</h3>
              <p className="text-on-surface-variant">Support scheduled around school and practical work nationwide, with intensive availability before internals and the end-of-year externals.</p>
            </div>
            <div className="bg-surface-container-low rounded-2xl p-8">
              <div className="w-12 h-12 bg-lime-green rounded-xl flex items-center justify-center mb-5">
                <LigatureIcon name="DollarSign" className="w-6 h-6 text-charcoal" />
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-3">Transparent NZD Rates</h3>
              <p className="text-on-surface-variant">Billed in New Zealand dollars with no enrolment fee and no contract. Chemistry can be combined with maths or biology on one shared plan.</p>
            </div>
            <div className="bg-surface-container-low rounded-2xl p-8">
              <div className="w-12 h-12 bg-lime-green rounded-xl flex items-center justify-center mb-5">
                <LigatureIcon name="Star" className="w-6 h-6 text-charcoal" />
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-3">Concept First, Then Calculation</h3>
              <p className="text-on-surface-variant">A memorised procedure collapses as soon as a standard asks the question a different way. We build the reasoning first, then practise applying it, which is what carries a student to Excellence.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Focus */}
      <section className="py-16 md:py-20 bg-surface-container-low">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4 text-center">NCEA Chemistry <br className="hidden md:block" />Levels 1, 2 and 3</h2>
          <p className="text-on-surface-variant text-center max-w-2xl mx-auto mb-12">
            Covering NCEA chemistry achievement standards across Levels 1 to 3, including internal assessments, practical investigations and external examinations.
          </p>
          <div className="grid md:grid-cols-12 gap-6">
            <div className="md:col-span-4 space-y-4">
              <div className="bg-white rounded-xl p-5 flex items-center gap-4">
                <span className="w-8 h-8 rounded-full bg-tertiary-fixed flex items-center justify-center font-bold text-sm flex-shrink-0">1</span>
                <span className="font-semibold text-charcoal">Junior Science Foundations (Years 9&ndash;10)</span>
              </div>
              <div className="bg-white rounded-xl p-5 flex items-center gap-4">
                <span className="w-8 h-8 rounded-full bg-tertiary-fixed flex items-center justify-center font-bold text-sm flex-shrink-0">2</span>
                <span className="font-semibold text-charcoal">NCEA Level 1 &amp; 2 Chemistry (Years 11&ndash;12)</span>
              </div>
              <div className="bg-white rounded-xl p-5 flex items-center gap-4">
                <span className="w-8 h-8 rounded-full bg-tertiary-fixed flex items-center justify-center font-bold text-sm flex-shrink-0">3</span>
                <span className="font-semibold text-charcoal">NCEA Level 3 Chemistry &amp; Scholarship (Year 13)</span>
              </div>
            </div>
            <div className="md:col-span-8 grid sm:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 border border-outline-variant">
                <h4 className="font-bold text-charcoal mb-2">Matter, Bonding &amp; Reactions</h4>
                <p className="text-sm text-on-surface-variant">Atomic structure, the periodic table, bonding and writing and balancing chemical equations.</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-outline-variant">
                <h4 className="font-bold text-charcoal mb-2">Quantitative Chemistry</h4>
                <p className="text-sm text-on-surface-variant">The mole concept, concentration, titration calculations and the stoichiometry that senior chemistry depends on.</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-outline-variant">
                <h4 className="font-bold text-charcoal mb-2">Equilibrium, Organic &amp; Redox</h4>
                <p className="text-sm text-on-surface-variant">Reaction rates, chemical equilibrium, acids and bases, organic chemistry and oxidation-reduction at Level 3.</p>
              </div>
              <div className="bg-secondary-fixed-dim rounded-xl p-6 col-span-full flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <h4 className="font-bold text-white text-lg mb-1">Stoichiometry Is Where Most Students Come Unstuck</h4>
                  <p className="text-white/80 text-sm">It is nearly always a ratios problem rather than a chemistry problem, and it is the highest-return topic to fix early rather than late.</p>
                </div>
                <button onClick={() => onNavigate('trial')} className="bg-white text-royal-purple px-6 py-2.5 rounded-full font-semibold whitespace-nowrap">Learn More</button>
              </div>
              <div className="col-span-full flex flex-wrap gap-2">
                {['Level 1 chemical reactions', 'Level 2 quantitative chemistry', 'Level 3 equilibrium', 'Organic chemistry', 'Titration calculations'].map((tag) => (
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
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4 text-center">Your Child&rsquo;s Chemistry Roadmap, Year by Year</h2>
          <p className="text-on-surface-variant text-center max-w-2xl mx-auto mb-12">
            Our <span className="font-semibold text-charcoal">online chemistry tutoring</span> builds in sequence, because Level 3 chemistry assumes the quantitative fluency established at Level 2.
          </p>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">Years 9 &amp; 10</h4>
              <p className="text-sm text-on-surface-variant mb-4">Chemical change, the periodic table and simple equations within general science. This is where the symbolic language of chemistry begins and where confusion often starts.</p>
              <ul className="space-y-1 text-sm font-medium text-charcoal border-t border-outline-variant pt-3">
                <li className="flex items-center gap-2"><LigatureIcon name="Check" className="w-4 h-4 text-royal-purple" /> Chemical change &amp; equations</li>
                <li className="flex items-center gap-2"><LigatureIcon name="Check" className="w-4 h-4 text-royal-purple" /> Periodic table basics</li>
              </ul>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">NCEA Level 1</h4>
              <p className="text-sm text-on-surface-variant mb-4">Reactions, atomic structure and the properties of matter, assessed through internals and externals against NZQA criteria for the first time.</p>
              <ul className="space-y-1 text-sm font-medium text-charcoal border-t border-outline-variant pt-3">
                <li className="flex items-center gap-2"><LigatureIcon name="Check" className="w-4 h-4 text-royal-purple" /> Reactions &amp; atomic structure</li>
                <li className="flex items-center gap-2"><LigatureIcon name="Check" className="w-4 h-4 text-royal-purple" /> Internal assessment technique</li>
              </ul>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">NCEA Level 2</h4>
              <p className="text-sm text-on-surface-variant mb-4">Quantitative chemistry arrives properly: the mole, concentration and titration calculations. This is the usual first hurdle and the most common reason students drop chemistry.</p>
              <ul className="space-y-1 text-sm font-medium text-charcoal border-t border-outline-variant pt-3">
                <li className="flex items-center gap-2"><LigatureIcon name="Check" className="w-4 h-4 text-royal-purple" /> The mole &amp; stoichiometry</li>
                <li className="flex items-center gap-2"><LigatureIcon name="Check" className="w-4 h-4 text-royal-purple" /> Bonding &amp; solutions</li>
              </ul>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">NCEA Level 3</h4>
              <p className="text-sm text-on-surface-variant mb-4">Equilibrium, acids and bases, organic chemistry and redox, plus Scholarship for the strongest students. Level 3 chemistry is expected for health and science degrees.</p>
              <ul className="space-y-1 text-sm font-medium text-charcoal border-t border-outline-variant pt-3">
                <li className="flex items-center gap-2"><LigatureIcon name="Check" className="w-4 h-4 text-royal-purple" /> Equilibrium &amp; acid-base</li>
                <li className="flex items-center gap-2"><LigatureIcon name="Check" className="w-4 h-4 text-royal-purple" /> Organic chemistry</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Quality */}
      <section className="py-16 md:py-20 bg-surface-container-low">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop grid md:grid-cols-2 gap-12 items-center">
          <img
            src="https://images.unsplash.com/photo-1532634922-8fe0b757fb13?w=800&q=80"
            alt="Chemistry tutor working through calculations during an online session"
            className="rounded-2xl shadow-xl w-full h-auto object-cover"
          />
          <div>
            <span className="inline-block bg-lime-green text-charcoal font-bold px-4 py-1.5 rounded-full mb-4">Standards Matched</span>
            <h2 className="text-3xl font-bold text-charcoal mb-6">Chemistry Tutors Matched to Your Child&rsquo;s Standards</h2>
            <p className="text-on-surface-variant mb-6 leading-relaxed">
              Our chemistry tutors hold degrees in chemistry or a closely related science and work to the specific NCEA standards your child is entered for. No tutor takes a student until police vetting under the Children&rsquo;s Act has cleared.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <LigatureIcon name="CheckCircle" className="w-5 h-5 text-royal-purple mt-0.5" />
                <span className="text-on-surface-variant">Police vetted under the Children&rsquo;s Act</span>
              </li>
              <li className="flex items-start gap-3">
                <LigatureIcon name="CheckCircle" className="w-5 h-5 text-royal-purple mt-0.5" />
                <span className="text-on-surface-variant">Degree-qualified in chemistry or a related science</span>
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
              <h4 className="font-bold text-charcoal mb-2">Why is stoichiometry so difficult for so many students?</h4>
              <p className="text-on-surface-variant text-sm">Because it is not really a chemistry problem. Stoichiometry asks students to move confidently between ratios, units and proportional relationships, and anyone whose proportional reasoning was never fully secured at intermediate level hits a wall the moment mole calculations begin. Fixing the ratios usually fixes the chemistry.</p>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">Does my child need Level 2 chemistry before Level 3?</h4>
              <p className="text-on-surface-variant text-sm">Yes, and more so than in almost any other subject. Level 3 standards assume fluency with the mole concept, balancing equations and solution calculations. A student who passed Level 2 without securing quantitative chemistry will struggle throughout Level 3 rather than in a single topic.</p>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">Which degrees require Level 3 chemistry?</h4>
              <p className="text-on-surface-variant text-sm">Most health sciences, medicine, pharmacy, nursing, veterinary science and many general science degrees expect it, often alongside biology. Requirements vary by university and programme, so confirm with the institutions being considered, but students on a health pathway should plan on taking it.</p>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">My child gets the concepts but keeps slipping up in the working. Can that be fixed?</h4>
              <p className="text-on-surface-variant text-sm">Structured working, which is more teachable than it sounds. Most lost marks come from unit errors, dropped significant figures or steps skipped mentally under time pressure. Laying calculations out consistently reduces errors and earns credit for method even when a final answer goes astray.</p>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">Is organic chemistry as hard as students say?</h4>
              <p className="text-on-surface-variant text-sm">It is different rather than harder. Organic chemistry rewards recognising patterns across functional groups and reaction types, where earlier topics rewarded calculation. Students who try to memorise every reaction individually struggle; those who learn the underlying patterns usually find it more manageable than equilibrium.</p>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">How are chemistry standards assessed?</h4>
              <p className="text-on-surface-variant text-sm">Through a combination of internal assessments during the year, frequently practical investigations, and external examinations at the end. Which standards a student sits differs between schools, so we confirm the exact internals and externals your child is entered for before building any plan.</p>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">My child takes both chemistry and biology. Do they overlap?</h4>
              <p className="text-on-surface-variant text-sm">
                Considerably at Level 3. Biochemistry, metabolic processes and cellular chemistry all assume an understanding of bonding and reactions, so students without solid chemistry find those topics disproportionately hard. Pairing chemistry with{' '}
                <button
                  onClick={() => onNavigate('subject', 'Biology')}
                  className="text-royal-purple font-bold underline underline-offset-2 cursor-pointer"
                >
                  biology tutoring
                </button>
                {' '}is a common and effective combination for students heading towards health sciences.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* Related Subjects */}
      <section className="py-16 md:py-20">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4 text-center">Related Subjects</h2>
          <p className="text-on-surface-variant text-center max-w-2xl mx-auto mb-10">Chemistry connects directly to biology and depends on maths. Explore the related subjects.</p>
          <div className="grid sm:grid-cols-3 gap-6">
            <button
              onClick={() => onNavigate('subject', 'Biology')}
              className="border border-outline-variant rounded-xl p-6 text-left hover:border-royal-purple transition-colors"
            >
              <h4 className="font-bold text-charcoal mb-1">Online Biology Tutor in New Zealand</h4>
              <span className="text-royal-purple font-semibold text-sm underline underline-offset-2">Biology tutoring</span>
            </button>
            <button
              onClick={() => onNavigate('subject', 'Physics')}
              className="border border-outline-variant rounded-xl p-6 text-left hover:border-royal-purple transition-colors"
            >
              <h4 className="font-bold text-charcoal mb-1">Online Physics Tutor in New Zealand</h4>
              <span className="text-royal-purple font-semibold text-sm underline underline-offset-2">Physics tutoring</span>
            </button>
            <button
              onClick={() => onNavigate('subject', 'Maths')}
              className="border border-outline-variant rounded-xl p-6 text-left hover:border-royal-purple transition-colors"
            >
              <h4 className="font-bold text-charcoal mb-1">Online Maths Tutor in New Zealand</h4>
              <span className="text-royal-purple font-semibold text-sm underline underline-offset-2">Maths tutoring</span>
            </button>
          </div>
        </div>
      </section>

      {/* Book Your Free Trial Lesson */}
      <section className="py-16 md:py-20 bg-surface-container-low">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4 text-center">Book Your Free Trial Lesson</h2>
          <p className="text-on-surface-variant text-center max-w-2xl mx-auto mb-10">
            Tell us your child&rsquo;s year level and the chemistry standards they are entered for, and we will match them with a specialist tutor for a free first lesson.
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Get Chemistry Working Again</h2>
            <p className="text-white/80 mb-8 max-w-xl mx-auto">From Level 2 stoichiometry to Level 3 equilibrium and organic chemistry, our standards-matched tutors are ready to help.</p>
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