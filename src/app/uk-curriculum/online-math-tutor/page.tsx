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
    Star: Star,
    CheckCircle: CheckCircle2,
    Check: Check,
  }[name];

  return <Icon aria-hidden="true" className={className} />;
}

interface SubjectComponentProps {
  onNavigate: (page: ActivePage, subjectTitle?: string) => void;
}

export default function UKMathTutorContent({ onNavigate }: SubjectComponentProps) {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-primary-fixed">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-white text-royal-purple text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
                Top-Rated UK Maths Experts &amp; Educators
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-on-primary-fixed mb-6 leading-tight">
                Online Math Tutor <br className="hidden md:block" />in the UK
              </h1>
              <p className="text-lg text-on-primary-fixed/80 mb-8 max-w-xl">
                Get the maths support you need right now from an expert <strong className="font-semibold">Online Math Tutor in the UK</strong>. From mental arithmetic in Key Stage 2 through to algebra, geometry, trigonometry and statistics at GCSE and A-Level, our one-to-one lessons follow the UK national curriculum, from Key Stage 2 through to A-Level.
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
                  View UK Pricing
                </button>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1509228468518-180dd4864904?w=800&q=80"
                alt="Online maths tutoring session for UK students"
                className="rounded-2xl shadow-2xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-16 md:py-20">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4 text-center">Why Choose Math Make Smart for UK Maths?</h2>
          <p className="text-on-surface-variant text-center max-w-2xl mx-auto mb-12">
            Stop stressing over algebra, geometry and exam technique. We provide a dedicated <span className="font-semibold text-charcoal">online tutor for homework and test preparation</span>, customised for the UK national curriculum and every major exam board.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-surface-container-low rounded-2xl p-8">
              <div className="w-12 h-12 bg-lime-green rounded-xl flex items-center justify-center mb-5">
                <LigatureIcon name="Clock" className="w-6 h-6 text-charcoal" />
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-3">Flexible Timings &amp; Scheduling</h3>
              <p className="text-on-surface-variant">Book live interactive sessions around school, clubs and family commitments across the UK, with weekday evening and weekend slots that fit around GCSE revision timetables.</p>
            </div>
            <div className="bg-surface-container-low rounded-2xl p-8">
              <div className="w-12 h-12 bg-lime-green rounded-xl flex items-center justify-center mb-5">
                <LigatureIcon name="DollarSign" className="w-6 h-6 text-charcoal" />
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-3">Affordable Rates &amp; Packages</h3>
              <p className="text-on-surface-variant">High-grade <span className="font-semibold text-charcoal">private maths lessons</span> without the hourly rates charged by local tuition centres. Book a private maths tutor session by session or commit to a term-long package.</p>
            </div>
            <div className="bg-surface-container-low rounded-2xl p-8">
              <div className="w-12 h-12 bg-lime-green rounded-xl flex items-center justify-center mb-5">
                <LigatureIcon name="Star" className="w-6 h-6 text-charcoal" />
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-3">Certified Maths Experts</h3>
              <p className="text-on-surface-variant">Work with verified maths specialists who know how to make algebra, geometry, trigonometry and statistics click, whatever exam board your school follows.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Focus */}
      <section className="py-16 md:py-20 bg-surface-container-low">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4 text-center">UK National Curriculum <br className="hidden md:block" />Key Stage 2 to A-Level</h2>
          <p className="text-on-surface-variant text-center max-w-2xl mx-auto mb-12">
            From consolidating number and algebra basics in Key Stage 2 to rigorous A-Level Maths and Further Maths exam preparation, our syllabus is mapped to the UK national curriculum and every major exam board, including AQA, Edexcel and OCR.
          </p>
          <div className="grid md:grid-cols-12 gap-6">
            <div className="md:col-span-4 space-y-4">
              <div className="bg-white rounded-xl p-5 flex items-center gap-4">
                <span className="w-8 h-8 rounded-full bg-tertiary-fixed flex items-center justify-center font-bold text-sm flex-shrink-0">1</span>
                <span className="font-semibold text-charcoal">Key Stage 2 &amp; 3 Foundations (Years 3-9)</span>
              </div>
              <div className="bg-white rounded-xl p-5 flex items-center gap-4">
                <span className="w-8 h-8 rounded-full bg-tertiary-fixed flex items-center justify-center font-bold text-sm flex-shrink-0">2</span>
                <span className="font-semibold text-charcoal">GCSE Maths — Foundation &amp; Higher Tier (Years 10-11)</span>
              </div>
              <div className="bg-white rounded-xl p-5 flex items-center gap-4">
                <span className="w-8 h-8 rounded-full bg-tertiary-fixed flex items-center justify-center font-bold text-sm flex-shrink-0">3</span>
                <span className="font-semibold text-charcoal">A-Level Maths &amp; Further Maths (Years 12-13)</span>
              </div>
            </div>
            <div className="md:col-span-8 grid sm:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 border border-outline-variant">
                <h4 className="font-bold text-charcoal mb-2">Number &amp; Algebra</h4>
                <p className="text-sm text-on-surface-variant">Place value, fractions and ratio through to expanding brackets, factorising and solving linear and quadratic equations.</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-outline-variant">
                <h4 className="font-bold text-charcoal mb-2">Geometry &amp; Trigonometry</h4>
                <p className="text-sm text-on-surface-variant">Angle facts, area and volume, Pythagoras' theorem, and trigonometric ratios (SOHCAHTOA) across 2D and 3D shapes.</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-outline-variant">
                <h4 className="font-bold text-charcoal mb-2">Statistics &amp; Probability</h4>
                <p className="text-sm text-on-surface-variant">Averages, data representation, probability trees, and the statistical analysis skills carried through into A-Level.</p>
              </div>
              <div className="bg-secondary-fixed-dim rounded-xl p-6 col-span-full flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <h4 className="font-bold text-white text-lg mb-1">Ace Your GCSE or A-Level Maths Exam</h4>
                  <p className="text-white/80 text-sm">Exam board-matched past papers and mark-scheme walkthroughs designed to push Foundation students past grade 5 and Higher and A-Level students toward grade 9 or A*.</p>
                </div>
                <button onClick={() => onNavigate('trial')} className="bg-white text-royal-purple px-6 py-2.5 rounded-full font-semibold whitespace-nowrap">Learn More</button>
              </div>
              <div className="col-span-full flex flex-wrap gap-2">
                {['Algebraic Manipulation', 'Calculus (Differentiation & Integration)', 'Vectors', 'Sequences & Series', 'Mechanics & Statistics'].map((tag) => (
                  <span key={tag} className="bg-white border border-outline-variant text-charcoal text-sm px-4 py-2 rounded-full">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grade-by-Grade Lesson Plans */}
      <section className="py-16 md:py-20">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4 text-center">Your Child's UK Maths Roadmap, Year by Year</h2>
          <p className="text-on-surface-variant text-center max-w-2xl mx-auto mb-12">
            Our <span className="font-semibold text-charcoal">online maths tutoring</span> follows a structured path built around the Key Stage system and GCSE tiering, so skills compound instead of being relearned from scratch.
          </p>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">Key Stage 3 (Years 7-9)</h4>
              <p className="text-sm text-on-surface-variant mb-4">Pupils move from primary-level arithmetic into formal algebra, ratio and basic geometry, building the number fluency that GCSE maths depends on.</p>
              <ul className="space-y-1 text-sm font-medium text-charcoal border-t border-outline-variant pt-3">
                <li className="flex items-center gap-2"><LigatureIcon name="Check" className="w-4 h-4 text-royal-purple" /> Algebra &amp; sequences</li>
                <li className="flex items-center gap-2"><LigatureIcon name="Check" className="w-4 h-4 text-royal-purple" /> Ratio, proportion &amp; geometry</li>
              </ul>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">GCSE Foundation Tier (Years 10-11)</h4>
              <p className="text-sm text-on-surface-variant mb-4">Foundation tier covers grades 1 to 5 and focuses on solid, exam-ready technique across number, algebra, geometry and statistics rather than the hardest content on the specification.</p>
              <ul className="space-y-1 text-sm font-medium text-charcoal border-t border-outline-variant pt-3">
                <li className="flex items-center gap-2"><LigatureIcon name="Check" className="w-4 h-4 text-royal-purple" /> Core number &amp; algebra skills</li>
                <li className="flex items-center gap-2"><LigatureIcon name="Check" className="w-4 h-4 text-royal-purple" /> Foundation-level past papers</li>
              </ul>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">GCSE Higher Tier (Years 10-11)</h4>
              <p className="text-sm text-on-surface-variant mb-4">Higher tier targets grades 4 to 9, with a grade 3 safety net, and adds trigonometry, more advanced algebra and multi-step problem solving on top of the Foundation content.</p>
              <ul className="space-y-1 text-sm font-medium text-charcoal border-t border-outline-variant pt-3">
                <li className="flex items-center gap-2"><LigatureIcon name="Check" className="w-4 h-4 text-royal-purple" /> Advanced algebra &amp; trigonometry</li>
                <li className="flex items-center gap-2"><LigatureIcon name="Check" className="w-4 h-4 text-royal-purple" /> Multi-step exam-style questions</li>
              </ul>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">A-Level Maths &amp; Further Maths (Years 12-13)</h4>
              <p className="text-sm text-on-surface-variant mb-4">Pupils build on GCSE algebra to tackle calculus, vectors, mechanics and statistics, with Further Maths adding complex numbers, matrices and further pure content for the strongest mathematicians.</p>
              <ul className="space-y-1 text-sm font-medium text-charcoal border-t border-outline-variant pt-3">
                <li className="flex items-center gap-2"><LigatureIcon name="Check" className="w-4 h-4 text-royal-purple" /> Differentiation &amp; integration</li>
                <li className="flex items-center gap-2"><LigatureIcon name="Check" className="w-4 h-4 text-royal-purple" /> Mechanics, statistics &amp; further pure</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Quality */}
      <section className="py-16 md:py-20 bg-surface-container-low">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop grid md:grid-cols-2 gap-12 items-center">
          <img
            src="https://images.unsplash.com/photo-1509869175650-a1d97972541a?w=800&q=80"
            alt="UK maths tutor running an interactive online tutoring session"
            className="rounded-2xl shadow-xl w-full h-auto object-cover"
          />
          <div>
            <span className="inline-block bg-lime-green text-charcoal font-bold px-4 py-1.5 rounded-full mb-4">99% Student Satisfaction</span>
            <h2 className="text-3xl font-bold text-charcoal mb-6">Qualified UK Maths Tutors Trusted by Parents Across the UK</h2>
            <p className="text-on-surface-variant mb-6 leading-relaxed">
              Our tutors are maths specialists, many with backgrounds in engineering, physics or pure mathematics from leading UK universities. Every tutor is DBS-checked and trained to explain a stuck concept two or three different ways until it actually lands.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <LigatureIcon name="CheckCircle" className="w-5 h-5 text-royal-purple mt-0.5" />
                <span className="text-on-surface-variant">Fully DBS-Checked &amp; Background-Screened Educators</span>
              </li>
              <li className="flex items-start gap-3">
                <LigatureIcon name="CheckCircle" className="w-5 h-5 text-royal-purple mt-0.5" />
                <span className="text-on-surface-variant">Graduates from Leading UK Universities</span>
              </li>
              <li className="flex items-start gap-3">
                <LigatureIcon name="CheckCircle" className="w-5 h-5 text-royal-purple mt-0.5" />
                <span className="text-on-surface-variant">Specialists in Key Stage 3, GCSE and A-Level Mathematics</span>
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
              <h4 className="font-bold text-charcoal mb-2">How do online one-to-one maths tutoring sessions actually work?</h4>
              <p className="text-on-surface-variant text-sm">Each session runs on a shared digital whiteboard where your tutor can write out working, sketch graphs, and pull up past paper questions in real time. Lessons can be recorded on request, so a student can go back over a tricky method after the call ends.</p>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">What's the difference between Foundation and Higher tier, and how do you know which one is right?</h4>
              <p className="text-on-surface-variant text-sm">Foundation tier caps out at grade 5 and sticks to core number, algebra and geometry skills, while Higher tier runs from grade 4 to grade 9 and brings in trigonometry and tougher problem-solving. We usually base the decision on recent mock results and how a student handles multi-step questions under time pressure, then revisit that choice again closer to the final entry deadline.</p>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">Does it matter whether my child's school teaches AQA, Edexcel or OCR?</h4>
              <p className="text-on-surface-variant text-sm">The three boards cover almost identical content, so a tutor experienced with one can teach any of them competently. What changes is question style and formula sheet layout, so once we know which board a student sits, we pull past papers from that exact board for the final few months of revision.</p>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">My son is doing A-Level Maths but struggling specifically with mechanics — can a tutor help with just that topic?</h4>
              <p className="text-on-surface-variant text-sm">Plenty of families book us for a single weak spot rather than ongoing weekly tutoring. If mechanics is the issue, a tutor will spend the first session working out exactly where the misunderstanding starts, whether that's resolving forces, SUVAT equations or moments, then build a short, focused plan around it rather than re-teaching the whole A-Level syllabus.</p>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">Can online maths tutoring help with the 11+ as well as school work?</h4>
              <p className="text-on-surface-variant text-sm">
                It can — several of our tutors specialise in{' '}
                <button
                  onClick={() => onNavigate('test-prep', '11-plus')}
                  className="text-royal-purple font-bold underline underline-offset-2 cursor-pointer"
                >
                  11+ Maths preparation
                </button>
                {' '}alongside a child's regular Key Stage 2 schoolwork, building the speed and accuracy under timed conditions that the exam demands without piling extra pressure on at home.
              </p>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">Is the free trial lesson genuinely free, with no obligation?</h4>
              <p className="text-on-surface-variant text-sm">There's no card required and no follow-up call trying to lock you into a package. It's a full lesson with one of our maths tutors so you can see how they explain things and whether the pace suits your child before deciding on anything longer term.</p>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">How do you decide between fixing one weak topic and revising the whole syllabus?</h4>
              <p className="text-on-surface-variant text-sm">We start with a short diagnostic covering the main strands of the specification — number, algebra, geometry, statistics — to see where marks are actually being lost. A student six months from their GCSEs usually needs structured full-syllabus revision with regular past papers, while someone mid-year with one exam behind them is often better served by drilling the specific topic holding their grade back.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Book Your Free Trial Lesson */}
      <section className="py-16 md:py-20 bg-surface-container-low">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4 text-center">Book Your Free Trial Lesson</h2>
          <p className="text-on-surface-variant text-center max-w-2xl mx-auto mb-10">
            Tell us a little about your child's year group and target grade, and we'll match them with a maths tutor for a complimentary first lesson — no payment details needed.
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Start Your Maths Journey Today</h2>
            <p className="text-white/80 mb-8 max-w-xl mx-auto">Build real number confidence and stronger exam technique. Join hundreds of UK students already working with our maths tutors to reach their target grade.</p>
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