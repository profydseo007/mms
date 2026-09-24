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

export default function IEMathTutorContent({ onNavigate }: SubjectComponentProps) {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-primary-fixed">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-white text-royal-purple text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
                Junior Cycle &amp; Leaving Cert Maths Grinds
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-on-primary-fixed mb-6 leading-tight">
                Online Maths Tutor <br className="hidden md:block" />in Ireland
              </h1>
              <p className="text-lg text-on-primary-fixed/80 mb-8 max-w-xl">
                Get proper help from an expert <strong className="font-semibold">Online Maths Tutor</strong> who knows the NCCA specification inside out. From First Year algebra to Leaving Cert Higher Level calculus and the 25 bonus CAO points, our one-to-one maths grinds follow the course your child&rsquo;s school actually teaches.
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
                src="https://images.unsplash.com/photo-1453733190371-0a9bedd82893?w=800&q=80"
                alt="Irish secondary student working through Leaving Cert maths during an online grind"
                className="rounded-2xl shadow-2xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-16 md:py-20">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4 text-center">Why Irish Families Choose Math Make Smart</h2>
          <p className="text-on-surface-variant text-center max-w-2xl mx-auto mb-12">
            <span className="font-semibold text-charcoal">Maths tutoring in Ireland</span> is only worth paying for when the tutor teaches to the SEC marking scheme, not just the maths. That is the standard every grind here is held to.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-surface-container-low rounded-2xl p-8">
              <div className="w-12 h-12 bg-lime-green rounded-xl flex items-center justify-center mb-5">
                <LigatureIcon name="Clock" className="w-6 h-6 text-charcoal" />
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-3">Evenings, Weekends &amp; Midterm</h3>
              <p className="text-on-surface-variant">Grinds fitted around school, GAA training and part-time jobs, with extra slots over Christmas, midterm and Easter when mock and revision pressure peaks.</p>
            </div>
            <div className="bg-surface-container-low rounded-2xl p-8">
              <div className="w-12 h-12 bg-lime-green rounded-xl flex items-center justify-center mb-5">
                <LigatureIcon name="DollarSign" className="w-6 h-6 text-charcoal" />
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-3">Priced in Euro, No Contract</h3>
              <p className="text-on-surface-variant">Pay per grind or take a monthly plan to lower the cost. There is no registration fee, and siblings can share one plan between them.</p>
            </div>
            <div className="bg-surface-container-low rounded-2xl p-8">
              <div className="w-12 h-12 bg-lime-green rounded-xl flex items-center justify-center mb-5">
                <LigatureIcon name="Star" className="w-6 h-6 text-charcoal" />
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-3">Taught to the Marking Scheme</h3>
              <p className="text-on-surface-variant">Tutors show students where the marks actually sit on an SEC paper, so a correct method earns credit even when a final answer slips.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Focus */}
      <section className="py-16 md:py-20 bg-surface-container-low">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4 text-center">The Irish Maths Curriculum <br className="hidden md:block" />First Year Through Sixth Year</h2>
          <p className="text-on-surface-variant text-center max-w-2xl mx-auto mb-12">
            Grinds follow the NCCA specifications for Junior Cycle Mathematics and the Leaving Certificate Mathematics syllabus, at Higher, Ordinary and Foundation Level.
          </p>
          <div className="grid md:grid-cols-12 gap-6">
            <div className="md:col-span-4 space-y-4">
              <div className="bg-white rounded-xl p-5 flex items-center gap-4">
                <span className="w-8 h-8 rounded-full bg-tertiary-fixed flex items-center justify-center font-bold text-sm flex-shrink-0">1</span>
                <span className="font-semibold text-charcoal">Junior Cycle Maths (1st&ndash;3rd Year)</span>
              </div>
              <div className="bg-white rounded-xl p-5 flex items-center gap-4">
                <span className="w-8 h-8 rounded-full bg-tertiary-fixed flex items-center justify-center font-bold text-sm flex-shrink-0">2</span>
                <span className="font-semibold text-charcoal">Transition Year Maths</span>
              </div>
              <div className="bg-white rounded-xl p-5 flex items-center gap-4">
                <span className="w-8 h-8 rounded-full bg-tertiary-fixed flex items-center justify-center font-bold text-sm flex-shrink-0">3</span>
                <span className="font-semibold text-charcoal">Leaving Cert Maths (5th &amp; 6th Year)</span>
              </div>
            </div>
            <div className="md:col-span-8 grid sm:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 border border-outline-variant">
                <h4 className="font-bold text-charcoal mb-2">Algebra &amp; Functions</h4>
                <p className="text-sm text-on-surface-variant">Expressions, equations, inequalities and functions, running from First Year through to Leaving Cert Higher Level.</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-outline-variant">
                <h4 className="font-bold text-charcoal mb-2">Geometry &amp; Trigonometry</h4>
                <p className="text-sm text-on-surface-variant">Constructions, theorems, coordinate geometry of the line and circle, and trigonometry in two and three dimensions.</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-outline-variant">
                <h4 className="font-bold text-charcoal mb-2">Statistics, Probability &amp; Calculus</h4>
                <p className="text-sm text-on-surface-variant">Data handling, probability and inferential statistics, plus the differential and integral calculus that anchors Leaving Cert Paper 1.</p>
              </div>
              <div className="bg-secondary-fixed-dim rounded-xl p-6 col-span-full flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <h4 className="font-bold text-white text-lg mb-1">A H6 at Higher Level Earns 25 Extra CAO Points</h4>
                  <p className="text-white/80 text-sm">That bonus can make a modest Higher result worth more than a strong Ordinary one, so the decision to drop a level deserves careful arithmetic first.</p>
                </div>
                <button onClick={() => onNavigate('trial')} className="bg-white text-royal-purple px-6 py-2.5 rounded-full font-semibold whitespace-nowrap">Learn More</button>
              </div>
              <div className="col-span-full flex flex-wrap gap-2">
                {['Leaving Cert Higher Level', 'Junior Cycle Maths', 'Project Maths', 'Paper 1 &amp; Paper 2', 'Mock exam preparation'].map((tag) => (
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
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4 text-center">Your Child&rsquo;s Maths Roadmap, Year by Year</h2>
          <p className="text-on-surface-variant text-center max-w-2xl mx-auto mb-12">
            Our <span className="font-semibold text-charcoal">online maths tutoring</span> tracks the Irish sequence, so each year&rsquo;s grinds build on the last instead of patching holes in Sixth Year.
          </p>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">1st &amp; 2nd Year</h4>
              <p className="text-sm text-on-surface-variant mb-4">Number, algebra and early geometry across the Junior Cycle strands. The habits formed here decide whether Higher Level is realistic three years later.</p>
              <ul className="space-y-1 text-sm font-medium text-charcoal border-t border-outline-variant pt-3">
                <li className="flex items-center gap-2"><LigatureIcon name="Check" className="w-4 h-4 text-royal-purple" /> Algebra foundations</li>
                <li className="flex items-center gap-2"><LigatureIcon name="Check" className="w-4 h-4 text-royal-purple" /> Number &amp; ratio</li>
              </ul>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">3rd Year</h4>
              <p className="text-sm text-on-surface-variant mb-4">Junior Cycle Final Examination at Higher or Ordinary Level. A secure result here is the clearest single predictor of Leaving Cert maths performance.</p>
              <ul className="space-y-1 text-sm font-medium text-charcoal border-t border-outline-variant pt-3">
                <li className="flex items-center gap-2"><LigatureIcon name="Check" className="w-4 h-4 text-royal-purple" /> JCFE exam technique</li>
                <li className="flex items-center gap-2"><LigatureIcon name="Check" className="w-4 h-4 text-royal-purple" /> Geometry &amp; trigonometry</li>
              </ul>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">Transition Year</h4>
              <p className="text-sm text-on-surface-variant mb-4">No state exam, and maths fluency quietly fades. An hour a week keeps Higher Level within reach when Fifth Year starts in September.</p>
              <ul className="space-y-1 text-sm font-medium text-charcoal border-t border-outline-variant pt-3">
                <li className="flex items-center gap-2"><LigatureIcon name="Check" className="w-4 h-4 text-royal-purple" /> Keeping skills active</li>
                <li className="flex items-center gap-2"><LigatureIcon name="Check" className="w-4 h-4 text-royal-purple" /> Bridging to Senior Cycle</li>
              </ul>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">5th &amp; 6th Year</h4>
              <p className="text-sm text-on-surface-variant mb-4">Leaving Cert Paper 1 and Paper 2, the Higher or Ordinary decision, and the bonus points that make Higher Level maths uniquely valuable for CAO.</p>
              <ul className="space-y-1 text-sm font-medium text-charcoal border-t border-outline-variant pt-3">
                <li className="flex items-center gap-2"><LigatureIcon name="Check" className="w-4 h-4 text-royal-purple" /> Calculus &amp; complex numbers</li>
                <li className="flex items-center gap-2"><LigatureIcon name="Check" className="w-4 h-4 text-royal-purple" /> Probability &amp; statistics</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Quality */}
      <section className="py-16 md:py-20 bg-surface-container-low">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop grid md:grid-cols-2 gap-12 items-center">
          <img
            src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80"
            alt="Maths tutor explaining a Leaving Cert exam question during an online grind"
            className="rounded-2xl shadow-xl w-full h-auto object-cover"
          />
          <div>
            <span className="inline-block bg-lime-green text-charcoal font-bold px-4 py-1.5 rounded-full mb-4">Garda Vetted Tutors</span>
            <h2 className="text-3xl font-bold text-charcoal mb-6">Maths Tutors Who Know the SEC Papers</h2>
            <p className="text-on-surface-variant mb-6 leading-relaxed">
              Our tutors hold maths or maths-heavy degrees and are assessed on the Irish specification before they take a student. Every tutor is Garda vetted, and each grind is recorded so your child can replay it before a test.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <LigatureIcon name="CheckCircle" className="w-5 h-5 text-royal-purple mt-0.5" />
                <span className="text-on-surface-variant">Garda vetted before their first grind</span>
              </li>
              <li className="flex items-start gap-3">
                <LigatureIcon name="CheckCircle" className="w-5 h-5 text-royal-purple mt-0.5" />
                <span className="text-on-surface-variant">Degree-qualified in maths or a related field</span>
              </li>
              <li className="flex items-start gap-3">
                <LigatureIcon name="CheckCircle" className="w-5 h-5 text-royal-purple mt-0.5" />
                <span className="text-on-surface-variant">Experienced at Higher, Ordinary and Foundation Level</span>
              </li>
            </ul>
            <button onClick={() => onNavigate('about')} className="bg-charcoal text-white px-8 py-3.5 rounded-full font-semibold">Learn More About Our Tutors</button>
          </div>
        </div>
      </section>

      <GradeLessonPlans
        onNavigate={onNavigate}
        subject="Math"
        description="Explore Ireland math lesson plans aligned with local year groups, courses and exams."
        plans={[
          { grade: '1st–6th Class', band: 'Primary' },
          { grade: 'Junior Cycle Maths', band: 'Junior Cycle' },
          { grade: 'Leaving Cert Ordinary Level', band: 'Leaving Certificate' },
          { grade: 'Leaving Cert Higher Level', band: 'Leaving Certificate' },
          { grade: 'Applied Maths', band: 'Leaving Certificate' },
        ]}
      />

      {/* FAQs */}
      <section className="py-16 md:py-20">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-12 text-center">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">Should my child stay at Higher Level maths or drop to Ordinary?</h4>
              <p className="text-on-surface-variant text-sm">Work out the points before deciding. A H6 or better at Higher Level brings 25 extra CAO points on top of the grade points, so an H6 can outscore a solid O2. Dropping down is sometimes the right call, particularly if maths is dragging down other subjects, but it should follow the numbers and the CAO requirements of the courses being considered, not one bad Christmas test.</p>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">What is on Leaving Cert maths Paper 1 and Paper 2?</h4>
              <p className="text-on-surface-variant text-sm">Broadly, Paper 1 covers algebra, functions, number, complex numbers and calculus, while Paper 2 covers geometry, trigonometry, coordinate geometry, probability and statistics. Many students are strong on one paper and weak on the other, which is worth identifying early because it points directly to where grinds will make the biggest difference.</p>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">Is Transition Year a good time for maths grinds?</h4>
              <p className="text-on-surface-variant text-sm">Often it is the best time. TY has no state exam, so maths gets put aside, and fluency fades faster than students expect. A weekly grind through TY usually costs far less than rebuilding the same skills in Fifth Year while new Leaving Cert content is arriving every week.</p>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">How important is the Junior Cycle maths result?</h4>
              <p className="text-on-surface-variant text-sm">It matters less as a grade and more as a signal. A student who scrapes through Junior Cycle Higher Level is likely to find Leaving Cert Higher Level very demanding, while a secure result suggests they can handle it. The honest reading of third-year performance is the best guide to which level to aim for later.</p>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">Do you give grinds through Irish?</h4>
              <p className="text-on-surface-variant text-sm">Yes. We support students in Gaelscoileanna and Gaeltacht schools who study maths through Irish. When a student is struggling in that setting, the first job is working out whether the difficulty is the maths itself or the mathematical vocabulary in Irish, because the fix is completely different.</p>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">Is the free trial grind really free?</h4>
              <p className="text-on-surface-variant text-sm">Yes, with no card needed and no follow-up sales call. It is a full grind that tells you where your child stands against the specification and what is actually holding them back, so you can decide with real information.</p>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">My child finds Leaving Cert physics hard too. Is that linked to maths?</h4>
              <p className="text-on-surface-variant text-sm">
                Very often. Physics calculations lean on rearranging formulae and trigonometry, so a student struggling with the physics is frequently struggling with the maths inside it. In that case we look at maths alongside{' '}
                <button
                  onClick={() => onNavigate('subject', 'Physics')}
                  className="text-royal-purple font-bold underline underline-offset-2 cursor-pointer"
                >
                  physics grinds
                </button>
                {' '}so the same underlying gap is fixed once rather than twice.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* Related Subjects */}
      <section className="py-16 md:py-20">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4 text-center">Related Subjects</h2>
          <p className="text-on-surface-variant text-center max-w-2xl mx-auto mb-10">Maths sits underneath the Leaving Cert sciences, so it pairs naturally with them.</p>
          <div className="grid sm:grid-cols-3 gap-6">
            <button
              onClick={() => onNavigate('subject', 'Science')}
              className="border border-outline-variant rounded-xl p-6 text-left hover:border-royal-purple transition-colors"
            >
              <h4 className="font-bold text-charcoal mb-1">Online Science Tutor in Ireland</h4>
              <span className="text-royal-purple font-semibold text-sm underline underline-offset-2">Science grinds</span>
            </button>
            <button
              onClick={() => onNavigate('subject', 'Physics')}
              className="border border-outline-variant rounded-xl p-6 text-left hover:border-royal-purple transition-colors"
            >
              <h4 className="font-bold text-charcoal mb-1">Online Physics Tutor in Ireland</h4>
              <span className="text-royal-purple font-semibold text-sm underline underline-offset-2">Physics grinds</span>
            </button>
            <button
              onClick={() => onNavigate('subject', 'Chemistry')}
              className="border border-outline-variant rounded-xl p-6 text-left hover:border-royal-purple transition-colors"
            >
              <h4 className="font-bold text-charcoal mb-1">Online Chemistry Tutor in Ireland</h4>
              <span className="text-royal-purple font-semibold text-sm underline underline-offset-2">Chemistry grinds</span>
            </button>
          </div>
        </div>
      </section>

      {/* Book Your Free Trial Lesson */}
      <section className="py-16 md:py-20 bg-surface-container-low">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4 text-center">Book Your Free Trial Lesson</h2>
          <p className="text-on-surface-variant text-center max-w-2xl mx-auto mb-10">
            Tell us your child&rsquo;s year, level and school, and we will match them with a maths tutor for a free first grind. No payment details needed.
          </p>
          <FreeTrialForm />
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-20">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="bg-royal-purple rounded-3xl p-10 md:p-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Build Real Maths Confidence</h2>
            <p className="text-white/80 mb-8 max-w-xl mx-auto">Whether it is First Year algebra, the Junior Cycle exam or Leaving Cert Higher Level calculus, our specification-matched maths tutors are ready to help.</p>
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
