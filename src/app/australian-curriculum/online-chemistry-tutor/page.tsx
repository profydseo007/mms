'use client';

import React from 'react';
import type { ActivePage } from '@/lib/types';
import { Check, CheckCircle2, Clock3, DollarSign, Star } from 'lucide-react';

type LigatureIconName = 'Clock' | 'DollarSign' | 'Star' | 'CheckCircle' | 'Check';

interface LigatureIconProps {
  name: LigatureIconName;
  className?: string;
}

function LigatureIcon({ name, className = '' }: LigatureIconProps) {
  const Icon = {
    Clock: Clock3,
    DollarSign: DollarSign,
    Star,
    CheckCircle: CheckCircle2,
    Check,
  }[name];

  return <Icon aria-hidden="true" className={className} />;
}

interface SubjectComponentProps {
  onNavigate: (page: ActivePage, subjectTitle?: string) => void;
}

export default function AUChemistryTutorContent({ onNavigate }: SubjectComponentProps) {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-primary-fixed">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-white text-royal-purple text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
                Senior Chemistry &amp; ATAR Specialists
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-on-primary-fixed mb-6 leading-tight">
                Online Chemistry Tutor <br className="hidden md:block" />in Australia
              </h1>
              <p className="text-lg text-on-primary-fixed/80 mb-8 max-w-xl">
                Get past the wall with an expert <strong className="font-semibold">Online Chemistry Tutor</strong> matched to your state certificate. From Year 10 reactions through to Units 3 and 4 equilibrium and organic chemistry, lessons work to the criteria your child is assessed against.
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
                src="https://images.unsplash.com/photo-1554475901-4538ddfbccc2?w=800&q=80"
                alt="Australian student working through chemistry calculations during an online lesson"
                className="rounded-2xl shadow-2xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-16 md:py-20">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4 text-center">Chemistry Tutoring for Years 11 and 12</h2>
          <p className="text-on-surface-variant text-center max-w-2xl mx-auto mb-12">
            Chemistry is the subject most capable students abandon first, and rarely for the reason they assume. <span className="font-semibold text-charcoal">Chemistry tutoring in Australia</span> should begin by working out whether the problem is chemistry or the ratios underneath it.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-surface-container-low rounded-2xl p-8">
              <div className="w-12 h-12 bg-lime-green rounded-xl flex items-center justify-center mb-5">
                <LigatureIcon name="Clock" className="w-6 h-6 text-charcoal" />
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-3">Sessions Around Assessment Dates</h3>
              <p className="text-on-surface-variant">Support scheduled around school and practicals nationwide, with intensive availability before SACs, internal assessments and final examinations.</p>
            </div>
            <div className="bg-surface-container-low rounded-2xl p-8">
              <div className="w-12 h-12 bg-lime-green rounded-xl flex items-center justify-center mb-5">
                <LigatureIcon name="DollarSign" className="w-6 h-6 text-charcoal" />
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-3">Transparent AUD Rates</h3>
              <p className="text-on-surface-variant">Billed in Australian dollars with no enrolment fee and no lock-in contract. A single plan can stretch across chemistry and either maths or biology, whichever is pulling hardest.</p>
            </div>
            <div className="bg-surface-container-low rounded-2xl p-8">
              <div className="w-12 h-12 bg-lime-green rounded-xl flex items-center justify-center mb-5">
                <LigatureIcon name="Star" className="w-6 h-6 text-charcoal" />
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-3">Concept First, Then Calculation</h3>
              <p className="text-on-surface-variant">A memorised procedure collapses the moment a question is worded differently. We build the reasoning first, then practise applying it, which is what makes it hold under exam conditions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Focus */}
      <section className="py-16 md:py-20 bg-surface-container-low">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4 text-center">Senior Chemistry <br className="hidden md:block" />Across Every State Certificate</h2>
          <p className="text-on-surface-variant text-center max-w-2xl mx-auto mb-12">
            Covering senior chemistry under VCE Units 1 to 4, HSC Chemistry in New South Wales, QCE Chemistry in Queensland, and the WACE, SACE, TCE and NTCET equivalents.
          </p>
          <div className="grid md:grid-cols-12 gap-6">
            <div className="md:col-span-4 space-y-4">
              <div className="bg-white rounded-xl p-5 flex items-center gap-4">
                <span className="w-8 h-8 rounded-full bg-tertiary-fixed flex items-center justify-center font-bold text-sm flex-shrink-0">1</span>
                <span className="font-semibold text-charcoal">Year 10 Science Foundations</span>
              </div>
              <div className="bg-white rounded-xl p-5 flex items-center gap-4">
                <span className="w-8 h-8 rounded-full bg-tertiary-fixed flex items-center justify-center font-bold text-sm flex-shrink-0">2</span>
                <span className="font-semibold text-charcoal">Units 1 &amp; 2 Chemistry (Year 11)</span>
              </div>
              <div className="bg-white rounded-xl p-5 flex items-center gap-4">
                <span className="w-8 h-8 rounded-full bg-tertiary-fixed flex items-center justify-center font-bold text-sm flex-shrink-0">3</span>
                <span className="font-semibold text-charcoal">Units 3 &amp; 4 Chemistry (Year 12)</span>
              </div>
            </div>
            <div className="md:col-span-8 grid sm:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 border border-outline-variant">
                <h4 className="font-bold text-charcoal mb-2">Matter, Bonding &amp; Reactions</h4>
                <p className="text-sm text-on-surface-variant">How atoms are built, why the periodic table is arranged as it is, how bonds form, and how to write an equation that balances.</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-outline-variant">
                <h4 className="font-bold text-charcoal mb-2">Quantitative Chemistry</h4>
                <p className="text-sm text-on-surface-variant">The mole concept, concentration, titration calculations and the stoichiometry that senior chemistry depends on entirely.</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-outline-variant">
                <h4 className="font-bold text-charcoal mb-2">Equilibrium, Organic &amp; Redox</h4>
                <p className="text-sm text-on-surface-variant">Reaction rates, chemical equilibrium, acids and bases, organic chemistry and electrochemistry in Year 12.</p>
              </div>
              <div className="bg-secondary-fixed-dim rounded-xl p-6 col-span-full flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <h4 className="font-bold text-white text-lg mb-1">Stoichiometry Is Where Most Students Come Unstuck</h4>
                  <p className="text-white/80 text-sm">It is nearly always a ratios problem rather than a chemistry problem, and it is the highest-return topic to fix early in Year 11 rather than late in Year 12.</p>
                </div>
                <button onClick={() => onNavigate('trial')} className="bg-white text-royal-purple px-6 py-2.5 rounded-full font-semibold whitespace-nowrap">Learn More</button>
              </div>
              <div className="col-span-full flex flex-wrap gap-2">
                {['VCE Chemistry Units 3 &amp; 4', 'HSC Chemistry', 'QCE Chemistry', 'Titration calculations', 'Organic chemistry'].map((tag) => (
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
            Our <span className="font-semibold text-charcoal">online chemistry tutoring</span> builds in sequence, because Year 12 chemistry assumes the quantitative fluency established in Year 11.
          </p>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">Year 10 Foundations</h4>
              <p className="text-sm text-on-surface-variant mb-4">Chemical reactions, the periodic table and basic equations within general science. Formulae and equations become a language of their own at this point, and students who never quite learn to read it struggle later.</p>
              <ul className="space-y-1 text-sm font-medium text-charcoal border-t border-outline-variant pt-3">
                <li className="flex items-center gap-2"><LigatureIcon name="Check" className="w-4 h-4 text-royal-purple" /> Reactions &amp; equations</li>
                <li className="flex items-center gap-2"><LigatureIcon name="Check" className="w-4 h-4 text-royal-purple" /> Periodic table basics</li>
              </ul>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">Year 11, Units 1 &amp; 2</h4>
              <p className="text-sm text-on-surface-variant mb-4">Atomic structure, bonding, materials and the arrival of quantitative chemistry. The mole concept is introduced and becomes the usual first hurdle.</p>
              <ul className="space-y-1 text-sm font-medium text-charcoal border-t border-outline-variant pt-3">
                <li className="flex items-center gap-2"><LigatureIcon name="Check" className="w-4 h-4 text-royal-purple" /> The mole &amp; stoichiometry</li>
                <li className="flex items-center gap-2"><LigatureIcon name="Check" className="w-4 h-4 text-royal-purple" /> Bonding &amp; materials</li>
              </ul>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">Year 12, Units 3 &amp; 4</h4>
              <p className="text-sm text-on-surface-variant mb-4">Equilibrium, acids and bases, organic chemistry, redox and energy, with internal assessment running alongside the final external examination.</p>
              <ul className="space-y-1 text-sm font-medium text-charcoal border-t border-outline-variant pt-3">
                <li className="flex items-center gap-2"><LigatureIcon name="Check" className="w-4 h-4 text-royal-purple" /> Equilibrium &amp; acid-base</li>
                <li className="flex items-center gap-2"><LigatureIcon name="Check" className="w-4 h-4 text-royal-purple" /> Organic chemistry &amp; redox</li>
              </ul>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">ATAR &amp; University</h4>
              <p className="text-sm text-on-surface-variant mb-4">Senior chemistry is a prerequisite or assumed knowledge for health sciences, medicine, pharmacy, engineering and many science degrees across Australia.</p>
              <ul className="space-y-1 text-sm font-medium text-charcoal border-t border-outline-variant pt-3">
                <li className="flex items-center gap-2"><LigatureIcon name="Check" className="w-4 h-4 text-royal-purple" /> Health &amp; science prerequisites</li>
                <li className="flex items-center gap-2"><LigatureIcon name="Check" className="w-4 h-4 text-royal-purple" /> Exam problem-solving technique</li>
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
            <span className="inline-block bg-lime-green text-charcoal font-bold px-4 py-1.5 rounded-full mb-4">Certificate Matched</span>
            <h2 className="text-3xl font-bold text-charcoal mb-6">Chemistry Tutors Matched to Your State Certificate</h2>
            <p className="text-on-surface-variant mb-6 leading-relaxed">
              Our chemistry tutors hold degrees in chemistry or a closely related science and are matched to the senior certificate your child is enrolled in. No tutor takes a student without a current Working with Children Check for their state.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <LigatureIcon name="CheckCircle" className="w-5 h-5 text-royal-purple mt-0.5" />
                <span className="text-on-surface-variant">Current Working with Children Check</span>
              </li>
              <li className="flex items-start gap-3">
                <LigatureIcon name="CheckCircle" className="w-5 h-5 text-royal-purple mt-0.5" />
                <span className="text-on-surface-variant">Degree-qualified in chemistry or a related science</span>
              </li>
              <li className="flex items-start gap-3">
                <LigatureIcon name="CheckCircle" className="w-5 h-5 text-royal-purple mt-0.5" />
                <span className="text-on-surface-variant">Matched to VCE, HSC, QCE, WACE or SACE chemistry</span>
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
              <p className="text-on-surface-variant text-sm">Because it is not really a chemistry problem. Stoichiometry asks students to move confidently between ratios, units and proportional relationships, and anyone whose proportional reasoning was never fully secured in Years 7 and 8 hits a wall the moment mole calculations begin. Fixing the ratios usually fixes the chemistry.</p>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">Does my child need Units 1 and 2 before Units 3 and 4?</h4>
              <p className="text-on-surface-variant text-sm">Yes, and the dependency is stronger here than in almost any other subject. Year 12 chemistry assumes complete fluency with the mole concept, balancing equations and solution calculations. A student who scraped through Year 11 without securing quantitative chemistry will struggle across the whole of Year 12, not in one unit.</p>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">My child understands it in class but loses marks on arithmetic in tests. Is that fixable?</h4>
              <p className="text-on-surface-variant text-sm">Yes, and faster than most families expect. Most lost marks come from unit errors, dropped significant figures or steps skipped mentally under time pressure rather than from misunderstanding. A consistent layout cuts slips dramatically, and markers award working even where the final number is wrong.</p>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">Which degrees require senior chemistry?</h4>
              <p className="text-on-surface-variant text-sm">Medicine, pharmacy, nursing, veterinary science, chemical and materials engineering and most biomedical and general science degrees expect it, frequently alongside biology or maths. Requirements vary by university and course, so confirm with the institutions being considered, but students on a health pathway should plan on taking it.</p>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">Is organic chemistry as hard as students say?</h4>
              <p className="text-on-surface-variant text-sm">It is different rather than harder. Where earlier units rewarded careful arithmetic, organic chemistry rewards spotting that two unfamiliar molecules behave the same way. Learn it reaction by reaction and it becomes unmanageable. Learn the families and mechanisms behind it and most students find it kinder than equilibrium.</p>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">How is senior chemistry assessed in my state?</h4>
              <p className="text-on-surface-variant text-sm">It differs meaningfully. Victoria uses School-Assessed Coursework alongside an end-of-year examination. Queensland combines internal assessment across Units 3 and 4 with an external assessment that carries greater weight in science subjects. New South Wales moderates school assessment against the cohort&rsquo;s HSC performance. We confirm which model applies before planning anything.</p>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">My child takes both chemistry and biology. Do they overlap?</h4>
              <p className="text-on-surface-variant text-sm">
                Considerably in Year 12. Molecular biology and metabolism both assume a student can already picture how bonds form and break, which is why those units punish weak chemistry so heavily. Taking chemistry together with{' '}
                <button
                  onClick={() => onNavigate('subject', 'Biology')}
                  className="text-royal-purple font-bold underline underline-offset-2 cursor-pointer"
                >
                  biology tutoring
                </button>
                {' '}is the usual pairing for anyone aiming at medicine, nursing or biomedical science.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* Related Subjects */}
      <section className="py-16 md:py-20">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4 text-center">Related Subjects</h2>
          <p className="text-on-surface-variant text-center max-w-2xl mx-auto mb-10">Chemistry feeds straight into biology and rests on maths underneath. These are the subjects most often taken with it.</p>
          <div className="grid sm:grid-cols-3 gap-6">
            <button
              onClick={() => onNavigate('subject', 'Biology')}
              className="border border-outline-variant rounded-xl p-6 text-left hover:border-royal-purple transition-colors"
            >
              <h4 className="font-bold text-charcoal mb-1">Online Biology Tutor in Australia</h4>
              <span className="text-royal-purple font-semibold text-sm underline underline-offset-2">Biology tutoring</span>
            </button>
            <button
              onClick={() => onNavigate('subject', 'Physics')}
              className="border border-outline-variant rounded-xl p-6 text-left hover:border-royal-purple transition-colors"
            >
              <h4 className="font-bold text-charcoal mb-1">Online Physics Tutor in Australia</h4>
              <span className="text-royal-purple font-semibold text-sm underline underline-offset-2">Physics tutoring</span>
            </button>
            <button
              onClick={() => onNavigate('subject', 'Maths')}
              className="border border-outline-variant rounded-xl p-6 text-left hover:border-royal-purple transition-colors"
            >
              <h4 className="font-bold text-charcoal mb-1">Online Maths Tutor in Australia</h4>
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
            Tell us your child&rsquo;s year level, state and chemistry units, and we will match them with a specialist tutor for a free first lesson.
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
            <p className="text-white/80 mb-8 max-w-xl mx-auto">From Year 11 stoichiometry to Year 12 equilibrium and organic chemistry, our certificate-matched tutors are ready to help.</p>
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