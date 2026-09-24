'use client';

import type { ActivePage } from '@/lib/types';
import GradeLessonPlans from '@/components/subjects/GradeLessonPlans';
import LigatureIcon from '@/components/import { FreeTrialForm } from '@/components/FreeTrial';
LigatureIcon';

interface SubjectComponentProps {
  onNavigate: (page: ActivePage, subjectTitle?: string) => void;
}

export default function CAChemistryTutorContent({ onNavigate }: SubjectComponentProps) {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-primary-fixed">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-white text-royal-purple text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
                SCH3U, SCH4U &amp; Chemistry 30 Specialists
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-on-primary-fixed mb-6 leading-tight">
                Online Chemistry Tutor <br className="hidden md:block" />in Canada
              </h1>
              <p className="text-lg text-on-primary-fixed/80 mb-8 max-w-xl">
                Get past the wall with an expert <strong className="font-semibold">Online Chemistry Tutor</strong> matched to your province. From Grade 11 stoichiometry through to SCH4U equilibrium, Chemistry 30 and Chemistry 12, lessons follow the course your child is enrolled in.
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
                  View Canadian Pricing
                </button>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1554475901-4538ddfbccc2?w=800&q=80"
                alt="Canadian student working through chemistry equations during an online lesson"
                className="rounded-2xl shadow-2xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-16 md:py-20">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4 text-center">Chemistry Tutoring for Grades 11 and 12</h2>
          <p className="text-on-surface-variant text-center max-w-2xl mx-auto mb-12">
            Chemistry is where many capable students hit their first real difficulty. <span className="font-semibold text-charcoal">Chemistry tutoring in Canada</span> should start by finding out whether the problem is chemistry or the ratios underneath it.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-surface-container-low rounded-2xl p-8">
              <div className="w-12 h-12 bg-lime-green rounded-xl flex items-center justify-center mb-5">
                <LigatureIcon name="Clock" className="w-6 h-6 text-charcoal" />
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-3">Support When You Need It</h3>
              <p className="text-on-surface-variant">Sessions arranged around school and labs in every Canadian time zone, including intensive support ahead of unit tests and final examinations.</p>
            </div>
            <div className="bg-surface-container-low rounded-2xl p-8">
              <div className="w-12 h-12 bg-lime-green rounded-xl flex items-center justify-center mb-5">
                <LigatureIcon name="DollarSign" className="w-6 h-6 text-charcoal" />
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-3">Transparent CAD Pricing</h3>
              <p className="text-on-surface-variant">Rates in Canadian dollars with no registration fee and no contract. Chemistry can be combined with math or physics on a single shared plan.</p>
            </div>
            <div className="bg-surface-container-low rounded-2xl p-8">
              <div className="w-12 h-12 bg-lime-green rounded-xl flex items-center justify-center mb-5">
                <LigatureIcon name="Star" className="w-6 h-6 text-charcoal" />
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-3">Concept First, Then Calculation</h3>
              <p className="text-on-surface-variant">Students who memorise procedures stall the moment a question is phrased unfamiliarly. We teach why a method works before drilling it, which is what makes it transfer.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Focus */}
      <section className="py-16 md:py-20 bg-surface-container-low">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4 text-center">Senior Chemistry Courses <br className="hidden md:block" />Across Every Province</h2>
          <p className="text-on-surface-variant text-center max-w-2xl mx-auto mb-12">
            Covering Ontario SCH3U and SCH4U, Alberta Chemistry 20 and Chemistry 30 with its Diploma Exam, and BC Chemistry 11 and Chemistry 12, alongside equivalent courses elsewhere in Canada.
          </p>
          <div className="grid md:grid-cols-12 gap-6">
            <div className="md:col-span-4 space-y-4">
              <div className="bg-white rounded-xl p-5 flex items-center gap-4">
                <span className="w-8 h-8 rounded-full bg-tertiary-fixed flex items-center justify-center font-bold text-sm flex-shrink-0">1</span>
                <span className="font-semibold text-charcoal">Grade 10 Science Foundations</span>
              </div>
              <div className="bg-white rounded-xl p-5 flex items-center gap-4">
                <span className="w-8 h-8 rounded-full bg-tertiary-fixed flex items-center justify-center font-bold text-sm flex-shrink-0">2</span>
                <span className="font-semibold text-charcoal">Grade 11 Chemistry (SCH3U, Chemistry 20, Chemistry 11)</span>
              </div>
              <div className="bg-white rounded-xl p-5 flex items-center gap-4">
                <span className="w-8 h-8 rounded-full bg-tertiary-fixed flex items-center justify-center font-bold text-sm flex-shrink-0">3</span>
                <span className="font-semibold text-charcoal">Grade 12 Chemistry (SCH4U, Chemistry 30, Chemistry 12)</span>
              </div>
            </div>
            <div className="md:col-span-8 grid sm:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 border border-outline-variant">
                <h4 className="font-bold text-charcoal mb-2">Matter, Bonding &amp; Reactions</h4>
                <p className="text-sm text-on-surface-variant">Atomic structure, periodic trends, ionic and covalent bonding, and classifying and balancing chemical reactions.</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-outline-variant">
                <h4 className="font-bold text-charcoal mb-2">Stoichiometry &amp; Solutions</h4>
                <p className="text-sm text-on-surface-variant">The mole concept, quantitative relationships, concentration and solution chemistry, including titration calculations.</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-outline-variant">
                <h4 className="font-bold text-charcoal mb-2">Equilibrium, Energy &amp; Organic</h4>
                <p className="text-sm text-on-surface-variant">Reaction rates, chemical equilibrium, acids and bases, thermochemistry and the organic chemistry introduced in Grade 12 courses.</p>
              </div>
              <div className="bg-secondary-fixed-dim rounded-xl p-6 col-span-full flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <h4 className="font-bold text-white text-lg mb-1">Stoichiometry Is Where Most Students Come Unstuck</h4>
                  <p className="text-white/80 text-sm">It is almost always a ratios problem rather than a chemistry problem, and it is the single highest-return topic to fix early in Grade 11.</p>
                </div>
                <button onClick={() => onNavigate('trial')} className="bg-white text-royal-purple px-6 py-2.5 rounded-full font-semibold whitespace-nowrap">Learn More</button>
              </div>
              <div className="col-span-full flex flex-wrap gap-2">
                {['SCH3U', 'SCH4U', 'Chemistry 30 Diploma', 'Chemistry 12', 'Titration calculations'].map((tag) => (
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
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4 text-center">Your Child&rsquo;s Chemistry Roadmap, Grade by Grade</h2>
          <p className="text-on-surface-variant text-center max-w-2xl mx-auto mb-12">
            Our <span className="font-semibold text-charcoal">online chemistry tutoring</span> builds in sequence, because Grade 12 chemistry assumes the quantitative fluency established in Grade 11.
          </p>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">Grade 10 Foundations</h4>
              <p className="text-sm text-on-surface-variant mb-4">Chemical reactions, the periodic table and basic equations within integrated science. This is where the vocabulary and symbolic language of chemistry begin.</p>
              <ul className="space-y-1 text-sm font-medium text-charcoal border-t border-outline-variant pt-3">
                <li className="flex items-center gap-2"><LigatureIcon name="Check" className="w-4 h-4 text-royal-purple" /> Chemical reactions &amp; equations</li>
                <li className="flex items-center gap-2"><LigatureIcon name="Check" className="w-4 h-4 text-royal-purple" /> Periodic table basics</li>
              </ul>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">Grade 11 Chemistry</h4>
              <p className="text-sm text-on-surface-variant mb-4">SCH3U, Chemistry 20 and Chemistry 11. Matter and bonding, quantitative relationships, solutions and gases. Stoichiometry arrives and is the usual first hurdle.</p>
              <ul className="space-y-1 text-sm font-medium text-charcoal border-t border-outline-variant pt-3">
                <li className="flex items-center gap-2"><LigatureIcon name="Check" className="w-4 h-4 text-royal-purple" /> Stoichiometry &amp; the mole</li>
                <li className="flex items-center gap-2"><LigatureIcon name="Check" className="w-4 h-4 text-royal-purple" /> Bonding &amp; solutions</li>
              </ul>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">Grade 12 Chemistry</h4>
              <p className="text-sm text-on-surface-variant mb-4">SCH4U, Chemistry 30 and Chemistry 12. Organic chemistry, energy changes, rates of reaction, equilibrium and electrochemistry, with a Diploma Exam in Alberta.</p>
              <ul className="space-y-1 text-sm font-medium text-charcoal border-t border-outline-variant pt-3">
                <li className="flex items-center gap-2"><LigatureIcon name="Check" className="w-4 h-4 text-royal-purple" /> Equilibrium &amp; acid-base</li>
                <li className="flex items-center gap-2"><LigatureIcon name="Check" className="w-4 h-4 text-royal-purple" /> Organic chemistry &amp; thermochemistry</li>
              </ul>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">University Preparation</h4>
              <p className="text-sm text-on-surface-variant mb-4">Senior chemistry is a prerequisite for health sciences, engineering, pharmacy and life sciences programs, and the Grade 12 mark feeds the admission average.</p>
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
            alt="Chemistry tutor working through equations during an online session"
            className="rounded-2xl shadow-xl w-full h-auto object-cover"
          />
          <div>
            <span className="inline-block bg-lime-green text-charcoal font-bold px-4 py-1.5 rounded-full mb-4">Course-Code Matched</span>
            <h2 className="text-3xl font-bold text-charcoal mb-6">Chemistry Tutors Matched to Your Course</h2>
            <p className="text-on-surface-variant mb-6 leading-relaxed">
              Our chemistry tutors hold degrees in chemistry or a closely related science and are matched to the specific senior course your child is taking. No tutor takes a student until criminal record and vulnerable sector screening has cleared.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <LigatureIcon name="CheckCircle" className="w-5 h-5 text-royal-purple mt-0.5" />
                <span className="text-on-surface-variant">Criminal record and vulnerable sector checked</span>
              </li>
              <li className="flex items-start gap-3">
                <LigatureIcon name="CheckCircle" className="w-5 h-5 text-royal-purple mt-0.5" />
                <span className="text-on-surface-variant">Degree-qualified in chemistry or a related science</span>
              </li>
              <li className="flex items-start gap-3">
                <LigatureIcon name="CheckCircle" className="w-5 h-5 text-royal-purple mt-0.5" />
                <span className="text-on-surface-variant">Matched to SCH3U, SCH4U, Chemistry 30 or Chemistry 12</span>
              </li>
            </ul>
            <button onClick={() => onNavigate('about')} className="bg-charcoal text-white px-8 py-3.5 rounded-full font-semibold">Learn More About Our Tutors</button>
          </div>
        </div>
      </section>

      <GradeLessonPlans
        onNavigate={onNavigate}
        subject="Chemistry"
        description="Explore Canada chemistry lesson plans aligned with local year groups, courses and exams."
        plans={[
          { grade: 'Grades 7–8 Science', band: 'Middle School' },
          { grade: 'Grades 9–10 Science', band: 'Secondary' },
          { grade: 'SCH3U Chemistry', band: 'Ontario Grade 11' },
          { grade: 'SCH4U Chemistry', band: 'Ontario Grade 12' },
          { grade: 'Chemistry 30', band: 'Alberta Grade 12' },
        ]}
      />

      {/* FAQs */}
      <section className="py-16 md:py-20">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-12 text-center">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">Why is stoichiometry so difficult for so many students?</h4>
              <p className="text-on-surface-variant text-sm">Because it is not really a chemistry problem. Stoichiometry asks students to move confidently between ratios, units and proportional relationships, and students whose proportional reasoning was never fully secured in middle school hit a wall the moment mole calculations begin. Fixing the ratios usually fixes the chemistry.</p>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">Does my child need Grade 11 chemistry before Grade 12?</h4>
              <p className="text-on-surface-variant text-sm">Yes, and the dependency is stronger than in most subjects. SCH4U, Chemistry 30 and Chemistry 12 assume fluency with the mole concept, balancing equations and solution calculations from the Grade 11 course. A student who scraped through Grade 11 without securing stoichiometry will struggle throughout Grade 12 rather than in one unit.</p>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">Which university programs require senior chemistry?</h4>
              <p className="text-on-surface-variant text-sm">Most health sciences, nursing, pharmacy, life sciences, chemical and materials engineering programs, and many general science degrees. Requirements vary by institution and program, so confirm with the specific university, but students considering anything health or science related should plan on taking it.</p>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">How should we prepare for the Alberta Chemistry 30 Diploma Exam?</h4>
              <p className="text-on-surface-variant text-sm">With timed practice across the whole course rather than the most recent unit, because the examination samples broadly by design. It blends with the school-awarded mark to produce the final grade, so a strong classroom performance provides a cushion but not immunity. Starting practice examinations in the autumn rather than the spring is the single most useful change most students can make.</p>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">My child understands the theory but makes calculation errors. What helps?</h4>
              <p className="text-on-surface-variant text-sm">Structured working, and it is more teachable than it sounds. Most lost marks come from unit errors, dropped significant figures or skipping steps mentally under time pressure. We work on laying out calculations consistently, which both reduces errors and earns method marks even when a final answer goes astray.</p>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">Is organic chemistry as hard as students say?</h4>
              <p className="text-on-surface-variant text-sm">It is different rather than harder. Organic chemistry rewards pattern recognition across functional groups and reaction types, where earlier units rewarded calculation. Students who try to memorise every reaction individually struggle; students who learn the underlying patterns generally find it more manageable than the equilibrium unit.</p>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">My child is taking both chemistry and biology. Do they overlap?</h4>
              <p className="text-on-surface-variant text-sm">
                Considerably, especially in Grade 12. Biochemistry, metabolic processes and molecular genetics all assume chemistry that students without a solid grasp of bonding and reactions find difficult, so pairing chemistry with{' '}
                <button
                  onClick={() => onNavigate('subject', 'Biology')}
                  className="text-royal-purple font-bold underline underline-offset-2 cursor-pointer"
                >
                  biology tutoring
                </button>
                {' '}is a common and effective combination for students heading toward health sciences.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* Related Subjects */}
      <section className="py-16 md:py-20">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4 text-center">Related Subjects</h2>
          <p className="text-on-surface-variant text-center max-w-2xl mx-auto mb-10">Chemistry connects directly to biology and depends on math. Explore the related subjects.</p>
          <div className="grid sm:grid-cols-3 gap-6">
            <button
              onClick={() => onNavigate('subject', 'Biology')}
              className="border border-outline-variant rounded-xl p-6 text-left hover:border-royal-purple transition-colors"
            >
              <h4 className="font-bold text-charcoal mb-1">Online Biology Tutor in Canada</h4>
              <span className="text-royal-purple font-semibold text-sm underline underline-offset-2">Biology tutoring</span>
            </button>
            <button
              onClick={() => onNavigate('subject', 'Physics')}
              className="border border-outline-variant rounded-xl p-6 text-left hover:border-royal-purple transition-colors"
            >
              <h4 className="font-bold text-charcoal mb-1">Online Physics Tutor in Canada</h4>
              <span className="text-royal-purple font-semibold text-sm underline underline-offset-2">Physics tutoring</span>
            </button>
            <button
              onClick={() => onNavigate('subject', 'Math')}
              className="border border-outline-variant rounded-xl p-6 text-left hover:border-royal-purple transition-colors"
            >
              <h4 className="font-bold text-charcoal mb-1">Online Math Tutor in Canada</h4>
              <span className="text-royal-purple font-semibold text-sm underline underline-offset-2">Math tutoring</span>
            </button>
          </div>
        </div>
      </section>

      {/* Book Your Free Trial Lesson */}
      <section className="py-16 md:py-20 bg-surface-container-low">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4 text-center">Book Your Free Trial Lesson</h2>
          <p className="text-on-surface-variant text-center max-w-2xl mx-auto mb-10">
            Tell us your child&rsquo;s grade, province and chemistry course, and we will match them with a specialist tutor for a free first lesson. No payment details needed.
          </p>
          <FreeTrialForm />
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-20">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="bg-royal-purple rounded-3xl p-10 md:p-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Get Chemistry Working Again</h2>
            <p className="text-white/80 mb-8 max-w-xl mx-auto">From Grade 11 stoichiometry to Grade 12 equilibrium and Diploma Exam preparation, our course-matched chemistry tutors are ready.</p>
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
