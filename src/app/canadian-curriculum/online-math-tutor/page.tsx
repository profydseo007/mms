'use client';

import React, { useState } from 'react';
import type { ActivePage } from '@/lib/types';
import GradeLessonPlans from '@/components/subjects/GradeLessonPlans';
import LigatureIcon from '@/components/LigatureIcon';
import { ChevronDown } from 'lucide-react';
import { FreeTrialForm } from '@/components/FreeTrial';

interface SubjectComponentProps {
  onNavigate: (page: ActivePage, subjectTitle?: string) => void;
}

export default function CAMathTutorContent({ onNavigate }: SubjectComponentProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-primary-fixed">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-white text-royal-purple text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
                Ontario, Alberta &amp; BC Curriculum Specialists
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-on-primary-fixed mb-6 leading-tight">
                Online Math Tutor <br className="hidden md:block" />in Canada
              </h1>
              <p className="text-lg text-on-primary-fixed/80 mb-8 max-w-xl">
                Get the help your child needs from an expert <strong className="font-semibold">Online Math Tutor</strong> matched to your province. From number sense in the elementary grades through to MCV4U, Math 30-1 and Pre-Calculus 12, every lesson follows the curriculum your child&rsquo;s school actually teaches.
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
                src="https://images.unsplash.com/photo-1509228468518-180dd4864904?w=800&q=80"
                alt="Online math tutoring session for a Canadian student"
                className="rounded-2xl shadow-2xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-16 md:py-20">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4 text-center">Why Canadian Families Choose Math Make Smart</h2>
          <p className="text-on-surface-variant text-center max-w-2xl mx-auto mb-12">
            Canada has no national curriculum. <span className="font-semibold text-charcoal">Math tutoring in Canada</span> only works when the tutor knows your province&rsquo;s course codes, sequencing and provincial assessments.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-surface-container-low rounded-2xl p-8">
              <div className="w-12 h-12 bg-lime-green rounded-xl flex items-center justify-center mb-5">
                <LigatureIcon name="Clock" className="w-6 h-6 text-charcoal" />
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-3">Every Time Zone Covered</h3>
              <p className="text-on-surface-variant">Sessions booked around school, hockey and family life, from Newfoundland through to British Columbia. Evening and weekend slots that work across all six Canadian time zones.</p>
            </div>
            <div className="bg-surface-container-low rounded-2xl p-8">
              <div className="w-12 h-12 bg-lime-green rounded-xl flex items-center justify-center mb-5">
                <LigatureIcon name="DollarSign" className="w-6 h-6 text-charcoal" />
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-3">Clear Rates in Canadian Dollars</h3>
              <p className="text-on-surface-variant">Billed in CAD with no registration fee and no contract. Book session by session or lower the per-lesson cost with a monthly plan shared across siblings.</p>
            </div>
            <div className="bg-surface-container-low rounded-2xl p-8">
              <div className="w-12 h-12 bg-lime-green rounded-xl flex items-center justify-center mb-5">
                <LigatureIcon name="Star" className="w-6 h-6 text-charcoal" />
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-3">Matched by Province and Course Code</h3>
              <p className="text-on-surface-variant">An MCV4U student works with an MCV4U specialist, not a general math tutor. We match on the exact course your child is enrolled in, whatever province they sit in.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Focus */}
      <section className="py-16 md:py-20 bg-surface-container-low">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4 text-center">Provincial Math Curricula <br className="hidden md:block" />Grade 1 Through Grade 12</h2>
          <p className="text-on-surface-variant text-center max-w-2xl mx-auto mb-12">
            From elementary number sense to senior calculus, lessons map to the Ontario curriculum, Alberta programs of study, the BC redesigned curriculum, the Qu&eacute;bec Education Program and the Prairie and Atlantic curricula.
          </p>
          <div className="grid md:grid-cols-12 gap-6">
            <div className="md:col-span-4 space-y-4">
              <div className="bg-white rounded-xl p-5 flex items-center gap-4">
                <span className="w-8 h-8 rounded-full bg-tertiary-fixed flex items-center justify-center font-bold text-sm flex-shrink-0">1</span>
                <span className="font-semibold text-charcoal">Elementary Foundations (Grades 1&ndash;6)</span>
              </div>
              <div className="bg-white rounded-xl p-5 flex items-center gap-4">
                <span className="w-8 h-8 rounded-full bg-tertiary-fixed flex items-center justify-center font-bold text-sm flex-shrink-0">2</span>
                <span className="font-semibold text-charcoal">Middle Years &amp; Grade 9&ndash;10 (Grades 7&ndash;10)</span>
              </div>
              <div className="bg-white rounded-xl p-5 flex items-center gap-4">
                <span className="w-8 h-8 rounded-full bg-tertiary-fixed flex items-center justify-center font-bold text-sm flex-shrink-0">3</span>
                <span className="font-semibold text-charcoal">Senior Math &amp; University Prep (Grades 11&ndash;12)</span>
              </div>
            </div>
            <div className="md:col-span-8 grid sm:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 border border-outline-variant">
                <h4 className="font-bold text-charcoal mb-2">Number &amp; Algebra</h4>
                <p className="text-sm text-on-surface-variant">Place value, fractions and proportional reasoning through to expanding, factoring and solving linear and quadratic equations.</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-outline-variant">
                <h4 className="font-bold text-charcoal mb-2">Geometry &amp; Measurement</h4>
                <p className="text-sm text-on-surface-variant">Angle relationships, area and volume, the Pythagorean theorem, similar triangles and right-triangle trigonometry.</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-outline-variant">
                <h4 className="font-bold text-charcoal mb-2">Data, Probability &amp; Financial Literacy</h4>
                <p className="text-sm text-on-surface-variant">Data management, probability, and the financial literacy strand that Ontario and other provinces now build into elementary and middle years math.</p>
              </div>
              <div className="bg-secondary-fixed-dim rounded-xl p-6 col-span-full flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <h4 className="font-bold text-white text-lg mb-1">Prepare for EQAO, PATs and Diploma Exams</h4>
                  <p className="text-white/80 text-sm">Province-matched practice for Ontario EQAO, Alberta Provincial Achievement Tests and Grade 12 Diploma Exams, and the BC Grade 10 Numeracy Assessment.</p>
                </div>
                <button onClick={() => onNavigate('trial')} className="bg-white text-royal-purple px-6 py-2.5 rounded-full font-semibold whitespace-nowrap">Learn More</button>
              </div>
              <div className="col-span-full flex flex-wrap gap-2">
                {['Advanced Functions (MHF4U)', 'Calculus &amp; Vectors (MCV4U)', 'Math 30-1', 'Pre-Calculus 12', 'Data Management (MDM4U)'].map((tag) => (
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
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4 text-center">Your Child&rsquo;s Math Roadmap, Grade by Grade</h2>
          <p className="text-on-surface-variant text-center max-w-2xl mx-auto mb-12">
            Our <span className="font-semibold text-charcoal">online math tutoring</span> follows the sequence your province actually uses, so skills compound instead of being relearned each September.
          </p>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">Elementary (Grades 1&ndash;6)</h4>
              <p className="text-sm text-on-surface-variant mb-4">Number sense, operations, fractions and early measurement. Ontario students sit EQAO in Grades 3 and 6; fractions are where later difficulty most often begins.</p>
              <ul className="space-y-1 text-sm font-medium text-charcoal border-t border-outline-variant pt-3">
                <li className="flex items-center gap-2"><LigatureIcon name="Check" className="w-4 h-4 text-royal-purple" /> Number sense &amp; operations</li>
                <li className="flex items-center gap-2"><LigatureIcon name="Check" className="w-4 h-4 text-royal-purple" /> Fractions &amp; early measurement</li>
              </ul>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">Middle Years (Grades 7&ndash;8)</h4>
              <p className="text-sm text-on-surface-variant mb-4">Ratios, rates, integers and proportional reasoning, plus the move into algebraic thinking. How securely this lands decides whether Grade 9 math goes well.</p>
              <ul className="space-y-1 text-sm font-medium text-charcoal border-t border-outline-variant pt-3">
                <li className="flex items-center gap-2"><LigatureIcon name="Check" className="w-4 h-4 text-royal-purple" /> Proportional reasoning</li>
                <li className="flex items-center gap-2"><LigatureIcon name="Check" className="w-4 h-4 text-royal-purple" /> Introduction to algebra</li>
              </ul>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">Grades 9&ndash;10</h4>
              <p className="text-sm text-on-surface-variant mb-4">Ontario Grade 9 is de-streamed, followed by MPM2D. Alberta runs Math 10C, and BC offers Foundations and Pre-Calculus 10. Quadratics and linear relations dominate.</p>
              <ul className="space-y-1 text-sm font-medium text-charcoal border-t border-outline-variant pt-3">
                <li className="flex items-center gap-2"><LigatureIcon name="Check" className="w-4 h-4 text-royal-purple" /> Linear relations &amp; quadratics</li>
                <li className="flex items-center gap-2"><LigatureIcon name="Check" className="w-4 h-4 text-royal-purple" /> Analytic geometry</li>
              </ul>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">Grades 11&ndash;12</h4>
              <p className="text-sm text-on-surface-variant mb-4">Functions, then Advanced Functions and Calculus &amp; Vectors in Ontario, Math 20-1 and 30-1 in Alberta, Pre-Calculus 11 and 12 in BC. Marks here form the admission average.</p>
              <ul className="space-y-1 text-sm font-medium text-charcoal border-t border-outline-variant pt-3">
                <li className="flex items-center gap-2"><LigatureIcon name="Check" className="w-4 h-4 text-royal-purple" /> Functions, logarithms &amp; trigonometry</li>
                <li className="flex items-center gap-2"><LigatureIcon name="Check" className="w-4 h-4 text-royal-purple" /> Calculus, vectors &amp; statistics</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Quality */}
      <section className="py-16 md:py-20 bg-surface-container-low">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop grid md:grid-cols-2 gap-12 items-center">
          <img
            src="https://images.unsplash.com/photo-1596495578065-6e0763fa1178?w=800&q=80"
            alt="A Canadian math tutor running an interactive online lesson"
            className="rounded-2xl shadow-xl w-full h-auto object-cover"
          />
          <div>
            <span className="inline-block bg-lime-green text-charcoal font-bold px-4 py-1.5 rounded-full mb-4">Province-Matched Tutors</span>
            <h2 className="text-3xl font-bold text-charcoal mb-6">Math Tutors Who Know Your Province&rsquo;s Curriculum</h2>
            <p className="text-on-surface-variant mb-6 leading-relaxed">
              Our tutors hold degrees in mathematics or closely related fields, and every one is assessed on the provincial curriculum they teach. All tutors clear a criminal record and vulnerable sector check before working with a student.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <LigatureIcon name="CheckCircle" className="w-5 h-5 text-royal-purple mt-0.5" />
                <span className="text-on-surface-variant">Criminal record and vulnerable sector checked</span>
              </li>
              <li className="flex items-start gap-3">
                <LigatureIcon name="CheckCircle" className="w-5 h-5 text-royal-purple mt-0.5" />
                <span className="text-on-surface-variant">Matched to Ontario, Alberta, BC, Quebec and Atlantic curricula</span>
              </li>
              <li className="flex items-start gap-3">
                <LigatureIcon name="CheckCircle" className="w-5 h-5 text-royal-purple mt-0.5" />
                <span className="text-on-surface-variant">Specialists in senior courses including MHF4U, MCV4U and Math 30-1</span>
              </li>
            </ul>
            <button onClick={() => onNavigate('about')} className="bg-charcoal text-white px-8 py-3.5 rounded-full font-semibold">Learn More About Our Tutors</button>
          </div>
        </div>
      </section>

      <GradeLessonPlans
        onNavigate={onNavigate}
        subject="Math"
        description="Explore Canada math lesson plans aligned with local year groups, courses and exams."
        plans={[
          { grade: 'Grades 1–8', band: 'Elementary' },
          { grade: 'Grades 9–10 Mathematics', band: 'Secondary' },
          { grade: 'MHF4U Advanced Functions', band: 'Ontario Grade 12' },
          { grade: 'MCV4U Calculus & Vectors', band: 'Ontario Grade 12' },
          { grade: 'Math 30-1', band: 'Alberta Grade 12' },
        ]}
      />

      {/* FAQs */}
      <section className="py-16 md:py-20">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-12 text-center">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {([
              {
                q: 'Do you teach the Ontario curriculum specifically, or a generic Canadian one?',
                a: 'Province-specific, always. There is no national curriculum in Canada, so we ask which province and school board your child attends before the first lesson. At the senior level we match to the exact course code, because MCV4U covers a defined set of expectations and differs from a general calculus course.',
              },
              {
                q: 'What is the difference between MHF4U and MCV4U?',
                a: 'Advanced Functions (MHF4U) covers polynomial, rational, logarithmic and trigonometric functions, and is normally the prerequisite for Calculus and Vectors (MCV4U), which introduces rates of change, derivatives and vector geometry. Most Ontario engineering and science programs expect both, and students frequently take them in the same year.',
              },
              {
                q: 'How much does the Alberta Diploma Exam count toward my child\u2019s final mark?',
                a: 'The final course mark blends the school-awarded grade with the diploma examination result, weighted toward coursework, and a combined mark of at least 50 per cent is required to pass. A strong year in class provides a cushion but not immunity, which is why timed practice under exam conditions matters more in Alberta than almost anywhere else in Canada.',
              },
              {
                q: 'Can my child fail EQAO?',
                a: 'Not at Grades 3, 6 or 9. Those assessments report achievement against provincial standards and inform school planning, with no pass mark for the individual student. The Grade 10 literacy test is different, because meeting the literacy requirement is a condition of graduating in Ontario.',
              },
              {
                q: 'We are moving provinces mid-year. What should we expect?',
                a: 'More disruption than most families anticipate, and rarely where they expect it. The content overlaps heavily between provinces but the sequencing does not, so a student can arrive having covered a topic their new class finished last term while missing something it completed two years earlier. The first thing we do is map that gap rather than assume it.',
              },
              {
                q: 'Is the free trial lesson genuinely free?',
                a: 'There are no card details required and no follow-up call trying to lock you into a package. It is a full lesson with a math tutor, used to establish where your child actually stands against their provincial grade expectations before anyone commits to anything.',
              },
              {
                q: 'My child needs help with the math inside physics and chemistry too. Can you help with both?',
                a: (
                  <>
                    Very often the difficulty in senior sciences is mathematical rather than scientific. Students struggling with kinematics or stoichiometry are usually struggling with rearranging equations and ratios, so we look at both together and can pair math support with{' '}
                    <button onClick={() => onNavigate('subject', 'Physics')} className="text-royal-purple font-bold underline underline-offset-2 cursor-pointer">physics tutoring</button>
                    {' '}or chemistry so the same underlying gap is not addressed twice in isolation.
                  </>
                ),
              },
            ] as { q: string; a: React.ReactNode }[]).map((faq, idx) => (
              <div
                key={idx}
                className={`bg-soft-gray rounded-2xl border transition-all cursor-pointer ${
                  openFaq === idx ? 'border-royal-purple shadow-ambient' : 'border-outline-variant/30'
                }`}
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
              >
                <div className="flex justify-between items-center p-6 gap-4">
                  <h3 className="text-body-lg font-bold text-charcoal">{faq.q}</h3>
                  <ChevronDown
                    size={22}
                    aria-hidden="true"
                    className={`shrink-0 transition-transform duration-300 ${
                      openFaq === idx ? 'rotate-180 text-royal-purple' : 'text-charcoal'
                    }`}
                  />
                </div>
                {openFaq === idx && (
                  <div className="px-6 pb-6 text-on-surface-variant text-body-md border-t border-outline-variant/20 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Related Subjects */}
      <section className="py-16 md:py-20">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4 text-center">Related Subjects</h2>
          <p className="text-on-surface-variant text-center max-w-2xl mx-auto mb-10">Math underpins the senior sciences, so families often pair it with another subject.</p>
          <div className="grid sm:grid-cols-3 gap-6">
            <button
              onClick={() => onNavigate('subject', 'Science')}
              className="border border-outline-variant rounded-xl p-6 text-left hover:border-royal-purple transition-colors"
            >
              <h4 className="font-bold text-charcoal mb-1">Online Science Tutor in Canada</h4>
              <span className="text-royal-purple font-semibold text-sm underline underline-offset-2">Science tutoring</span>
            </button>
            <button
              onClick={() => onNavigate('subject', 'Physics')}
              className="border border-outline-variant rounded-xl p-6 text-left hover:border-royal-purple transition-colors"
            >
              <h4 className="font-bold text-charcoal mb-1">Online Physics Tutor in Canada</h4>
              <span className="text-royal-purple font-semibold text-sm underline underline-offset-2">Physics tutoring</span>
            </button>
            <button
              onClick={() => onNavigate('subject', 'Chemistry')}
              className="border border-outline-variant rounded-xl p-6 text-left hover:border-royal-purple transition-colors"
            >
              <h4 className="font-bold text-charcoal mb-1">Online Chemistry Tutor in Canada</h4>
              <span className="text-royal-purple font-semibold text-sm underline underline-offset-2">Chemistry tutoring</span>
            </button>
          </div>
        </div>
      </section>

      {/* Book Your Free Trial Lesson */}
      <section className="py-16 md:py-20 bg-surface-container-low">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4 text-center">Book Your Free Trial Lesson</h2>
          <p className="text-on-surface-variant text-center max-w-2xl mx-auto mb-10">
            Tell us your child&rsquo;s grade, province and the course they are taking, and we will match them with a math tutor for a free first lesson. No payment details needed.
          </p>
          <FreeTrialForm />
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-20">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="bg-royal-purple rounded-3xl p-10 md:p-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Start Building Real Math Confidence</h2>
            <p className="text-white/80 mb-8 max-w-xl mx-auto">Whether your child needs help with Grade 6 fractions, the Grade 9 assessment, or Calculus and Vectors, our province-matched math tutors are ready.</p>
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
