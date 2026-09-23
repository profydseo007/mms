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

export default function IEChemistryTutorContent({ onNavigate }: SubjectComponentProps) {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-primary-fixed">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-white text-royal-purple text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
                Leaving Cert Chemistry Grinds
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-on-primary-fixed mb-6 leading-tight">
                Online Chemistry Tutor <br className="hidden md:block" />in Ireland
              </h1>
              <p className="text-lg text-on-primary-fixed/80 mb-8 max-w-xl">
                Get chemistry under control with an expert <strong className="font-semibold">Online Chemistry Tutor</strong> who knows the Leaving Cert course and marking scheme. From moles and volumetric analysis to organic chemistry and the new coursework component, our grinds focus on the topics that cost students the most marks.
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
                src="https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?w=800&q=80"
                alt="Irish student doing a titration during an online Leaving Cert chemistry grind"
                className="rounded-2xl shadow-2xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-16 md:py-20">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4 text-center">Chemistry Grinds for Fifth and Sixth Year</h2>
          <p className="text-on-surface-variant text-center max-w-2xl mx-auto mb-12">
            The mole is where many good students first get stuck. <span className="font-semibold text-charcoal">Chemistry tutoring in Ireland</span> should start by finding out whether the problem is the chemistry or the calculations behind it.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-surface-container-low rounded-2xl p-8">
              <div className="w-12 h-12 bg-lime-green rounded-xl flex items-center justify-center mb-5">
                <LigatureIcon name="Clock" className="w-6 h-6 text-charcoal" />
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-3">Support Before Every Deadline</h3>
              <p className="text-on-surface-variant">Grinds fitted around school, with extra time ahead of experiment write-ups, mocks and the Leaving Cert chemistry exam in June.</p>
            </div>
            <div className="bg-surface-container-low rounded-2xl p-8">
              <div className="w-12 h-12 bg-lime-green rounded-xl flex items-center justify-center mb-5">
                <LigatureIcon name="DollarSign" className="w-6 h-6 text-charcoal" />
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-3">Clear Euro Rates</h3>
              <p className="text-on-surface-variant">No registration fee and no long contract. Chemistry can share a monthly plan with biology or maths if both need support.</p>
            </div>
            <div className="bg-surface-container-low rounded-2xl p-8">
              <div className="w-12 h-12 bg-lime-green rounded-xl flex items-center justify-center mb-5">
                <LigatureIcon name="Star" className="w-6 h-6 text-charcoal" />
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-3">Calculations Made Clear</h3>
              <p className="text-on-surface-variant">We lay out every mole and titration calculation the same way, so students stop dropping marks through small slips and earn method marks even when an answer goes wrong.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Focus */}
      <section className="py-16 md:py-20 bg-surface-container-low">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4 text-center">Leaving Cert Chemistry <br className="hidden md:block" />Higher and Ordinary Level</h2>
          <p className="text-on-surface-variant text-center max-w-2xl mx-auto mb-12">
            Grinds follow the Leaving Certificate Chemistry course and the Senior Cycle redevelopment, including the mandatory experiments and the Additional Assessment Component for new cohorts.
          </p>
          <div className="grid md:grid-cols-12 gap-6">
            <div className="md:col-span-4 space-y-4">
              <div className="bg-white rounded-xl p-5 flex items-center gap-4">
                <span className="w-8 h-8 rounded-full bg-tertiary-fixed flex items-center justify-center font-bold text-sm flex-shrink-0">1</span>
                <span className="font-semibold text-charcoal">Junior Cycle Chemical World</span>
              </div>
              <div className="bg-white rounded-xl p-5 flex items-center gap-4">
                <span className="w-8 h-8 rounded-full bg-tertiary-fixed flex items-center justify-center font-bold text-sm flex-shrink-0">2</span>
                <span className="font-semibold text-charcoal">5th Year Chemistry</span>
              </div>
              <div className="bg-white rounded-xl p-5 flex items-center gap-4">
                <span className="w-8 h-8 rounded-full bg-tertiary-fixed flex items-center justify-center font-bold text-sm flex-shrink-0">3</span>
                <span className="font-semibold text-charcoal">6th Year Chemistry &amp; Exam</span>
              </div>
            </div>
            <div className="md:col-span-8 grid sm:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 border border-outline-variant">
                <h4 className="font-bold text-charcoal mb-2">Atomic Structure &amp; Bonding</h4>
                <p className="text-sm text-on-surface-variant">The periodic table, electron arrangement, bonding and shapes of molecules, which underpin the rest of the course.</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-outline-variant">
                <h4 className="font-bold text-charcoal mb-2">Stoichiometry &amp; Volumetric Analysis</h4>
                <p className="text-sm text-on-surface-variant">The mole, chemical equations, titrations and concentration calculations, a large part of every exam paper.</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-outline-variant">
                <h4 className="font-bold text-charcoal mb-2">Organic Chemistry &amp; Equilibrium</h4>
                <p className="text-sm text-on-surface-variant">Hydrocarbons, functional groups and reaction types, plus rates of reaction, equilibrium and acids and bases.</p>
              </div>
              <div className="bg-secondary-fixed-dim rounded-xl p-6 col-span-full flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <h4 className="font-bold text-white text-lg mb-1">Chemistry Now Includes a Coursework Component</h4>
                  <p className="text-white/80 text-sm">New Leaving Cert chemistry cohorts complete an Additional Assessment Component worth at least 40%, so steady work through Fifth Year now pays off directly.</p>
                </div>
                <button onClick={() => onNavigate('trial')} className="bg-white text-royal-purple px-6 py-2.5 rounded-full font-semibold whitespace-nowrap">Learn More</button>
              </div>
              <div className="col-span-full flex flex-wrap gap-2">
                {['Leaving Cert Chemistry', 'The mole &amp; stoichiometry', 'Volumetric analysis', 'Organic chemistry', 'Mandatory experiments'].map((tag) => (
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
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4 text-center">Your Child&rsquo;s Chemistry Roadmap</h2>
          <p className="text-on-surface-variant text-center max-w-2xl mx-auto mb-12">
            Our <span className="font-semibold text-charcoal">online chemistry tutoring</span> builds from Junior Cycle foundations, because the mole and bonding come back in almost every Leaving Cert topic.
          </p>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">Junior Cycle Foundations</h4>
              <p className="text-sm text-on-surface-variant mb-4">Atoms, the periodic table, acids and bases and simple reactions from the Chemical World strand, the base the Leaving Cert course builds on.</p>
              <ul className="space-y-1 text-sm font-medium text-charcoal border-t border-outline-variant pt-3">
                <li className="flex items-center gap-2"><LigatureIcon name="Check" className="w-4 h-4 text-royal-purple" /> Atoms &amp; the periodic table</li>
                <li className="flex items-center gap-2"><LigatureIcon name="Check" className="w-4 h-4 text-royal-purple" /> Simple reactions</li>
              </ul>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">5th Year</h4>
              <p className="text-sm text-on-surface-variant mb-4">Bonding, the mole, stoichiometry and volumetric analysis. This is where students most often fall behind, so early support matters.</p>
              <ul className="space-y-1 text-sm font-medium text-charcoal border-t border-outline-variant pt-3">
                <li className="flex items-center gap-2"><LigatureIcon name="Check" className="w-4 h-4 text-royal-purple" /> The mole &amp; equations</li>
                <li className="flex items-center gap-2"><LigatureIcon name="Check" className="w-4 h-4 text-royal-purple" /> Titration calculations</li>
              </ul>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">6th Year</h4>
              <p className="text-sm text-on-surface-variant mb-4">Organic chemistry, rates, equilibrium and environmental chemistry, plus full past-paper practice and experiment revision.</p>
              <ul className="space-y-1 text-sm font-medium text-charcoal border-t border-outline-variant pt-3">
                <li className="flex items-center gap-2"><LigatureIcon name="Check" className="w-4 h-4 text-royal-purple" /> Organic chemistry</li>
                <li className="flex items-center gap-2"><LigatureIcon name="Check" className="w-4 h-4 text-royal-purple" /> Equilibrium &amp; rates</li>
              </ul>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">College Entry</h4>
              <p className="text-sm text-on-surface-variant mb-4">Chemistry is often required or recommended for medicine, pharmacy, nursing, veterinary and many science courses. Always check the CAO requirements.</p>
              <ul className="space-y-1 text-sm font-medium text-charcoal border-t border-outline-variant pt-3">
                <li className="flex items-center gap-2"><LigatureIcon name="Check" className="w-4 h-4 text-royal-purple" /> Health science routes</li>
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
            src="https://images.unsplash.com/photo-1576319155264-99536e0be1ee?w=800&q=80"
            alt="Chemistry tutor explaining molecular structure during an online grind"
            className="rounded-2xl shadow-xl w-full h-auto object-cover"
          />
          <div>
            <span className="inline-block bg-lime-green text-charcoal font-bold px-4 py-1.5 rounded-full mb-4">Garda Vetted Tutors</span>
            <h2 className="text-3xl font-bold text-charcoal mb-6">Chemistry Tutors Who Know the Marking Scheme</h2>
            <p className="text-on-surface-variant mb-6 leading-relaxed">
              Our chemistry tutors hold degrees in chemistry or a closely related science and are assessed on the Leaving Cert course. All are Garda vetted, and every grind is recorded for revision.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <LigatureIcon name="CheckCircle" className="w-5 h-5 text-royal-purple mt-0.5" />
                <span className="text-on-surface-variant">Garda vetted before their first grind</span>
              </li>
              <li className="flex items-start gap-3">
                <LigatureIcon name="CheckCircle" className="w-5 h-5 text-royal-purple mt-0.5" />
                <span className="text-on-surface-variant">Degree-qualified in chemistry or a related science</span>
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

      {/* FAQs */}
      <section className="py-16 md:py-20">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-12 text-center">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">Why do so many students struggle with the mole?</h4>
              <p className="text-on-surface-variant text-sm">Because it is really a ratio and proportion topic dressed up as chemistry. Students who were never fully confident with ratios in Junior Cycle maths find mole calculations confusing straight away. Once the ratio thinking is fixed, the chemistry usually falls into place quickly.</p>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">What is the Additional Assessment Component in chemistry?</h4>
              <p className="text-on-surface-variant text-sm">Leaving Cert chemistry is among the first subjects redeveloped under Senior Cycle reform, with an Additional Assessment Component worth at least 40% of the final grade and a written exam for the rest. It applies to students who began Fifth Year from September 2025, so practical and investigative work now counts directly towards the result.</p>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">How important are the mandatory experiments?</h4>
              <p className="text-on-surface-variant text-sm">Very. Experiment questions come up on the paper every year and ask about procedure, results and errors. Students who understand why each step is done, rather than just memorising it, pick up these marks far more reliably.</p>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">Is chemistry needed for medicine or pharmacy?</h4>
              <p className="text-on-surface-variant text-sm">Chemistry is commonly required or strongly recommended for medicine, pharmacy, veterinary and several health and science courses, often alongside a minimum grade. Requirements differ between colleges, so check the CAO minimum entry requirements for each course your child is considering.</p>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">My child understands the theory but loses marks on calculations. Can grinds help?</h4>
              <p className="text-on-surface-variant text-sm">Yes, and quickly. Most lost marks come from missing units, rounding too early or skipping steps. We practise a consistent layout for every calculation, which cuts errors and earns method marks even when the final answer is off.</p>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">Is the free trial grind really free?</h4>
              <p className="text-on-surface-variant text-sm">Yes. No card, no contract and no sales call afterwards. It is a full grind that shows exactly where your child stands in chemistry and what to tackle first.</p>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">My child takes chemistry and biology. Do they connect?</h4>
              <p className="text-on-surface-variant text-sm">
                More than most students expect. Biochemistry, enzymes and metabolism in biology all rely on understanding bonds and reactions, so a shaky chemistry base makes those biology topics harder. Many families pair chemistry with{' '}
                <button
                  onClick={() => onNavigate('subject', 'Biology')}
                  className="text-royal-purple font-bold underline underline-offset-2 cursor-pointer"
                >
                  biology grinds
                </button>
                {' '}especially when the goal is a health or life science course.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* Related Subjects */}
      <section className="py-16 md:py-20">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4 text-center">Related Subjects</h2>
          <p className="text-on-surface-variant text-center max-w-2xl mx-auto mb-10">Chemistry links to biology and relies on maths. Explore the subjects that go with it.</p>
          <div className="grid sm:grid-cols-3 gap-6">
            <button
              onClick={() => onNavigate('subject', 'Biology')}
              className="border border-outline-variant rounded-xl p-6 text-left hover:border-royal-purple transition-colors"
            >
              <h4 className="font-bold text-charcoal mb-1">Online Biology Tutor in Ireland</h4>
              <span className="text-royal-purple font-semibold text-sm underline underline-offset-2">Biology grinds</span>
            </button>
            <button
              onClick={() => onNavigate('subject', 'Physics')}
              className="border border-outline-variant rounded-xl p-6 text-left hover:border-royal-purple transition-colors"
            >
              <h4 className="font-bold text-charcoal mb-1">Online Physics Tutor in Ireland</h4>
              <span className="text-royal-purple font-semibold text-sm underline underline-offset-2">Physics grinds</span>
            </button>
            <button
              onClick={() => onNavigate('subject', 'Maths')}
              className="border border-outline-variant rounded-xl p-6 text-left hover:border-royal-purple transition-colors"
            >
              <h4 className="font-bold text-charcoal mb-1">Online Maths Tutor in Ireland</h4>
              <span className="text-royal-purple font-semibold text-sm underline underline-offset-2">Maths grinds</span>
            </button>
          </div>
        </div>
      </section>

      {/* Book Your Free Trial Lesson */}
      <section className="py-16 md:py-20 bg-surface-container-low">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4 text-center">Book Your Free Trial Lesson</h2>
          <p className="text-on-surface-variant text-center max-w-2xl mx-auto mb-10">
            Tell us your child&rsquo;s year, level and the topics they find hardest, and we will match them with a chemistry tutor for a free first grind. No payment details needed.
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Get Chemistry Working for You</h2>
            <p className="text-white/80 mb-8 max-w-xl mx-auto">From Fifth Year moles and titrations to Sixth Year organic chemistry, our chemistry tutors are ready to help.</p>
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