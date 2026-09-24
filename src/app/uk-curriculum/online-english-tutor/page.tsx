'use client';

import React from 'react';
import type { ActivePage } from '@/lib/types';
import GradeLessonPlans from '@/components/subjects/GradeLessonPlans';
import { Check, CheckCircle2, Clock3, DollarSign, Star } from 'lucide-react';
import { FreeTrialForm } from '@/components/FreeTrial';

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

export default function UKEnglishTutorContent({ onNavigate }: SubjectComponentProps) {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-primary-fixed">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-flex items-center gap-2 bg-white text-royal-purple text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
                <LigatureIcon name="Check" className="w-4 h-4" />
                Top-Rated UK English Specialists &amp; Educators
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-on-primary-fixed mb-6 leading-tight">
                Online English Tutor <br className="hidden md:block" />in the UK
              </h1>
              <p className="text-lg text-on-primary-fixed/80 mb-8 max-w-xl">
                Get the confidence and clarity your child needs from an expert <strong className="font-semibold text-on-primary-fixed">Online English Tutor in the UK</strong>. From phonics and comprehension through to Shakespeare, poetry anthologies and essay technique, our personalised 1-on-1 lessons are matched to the National Curriculum, GCSE and A-Level specifications — a trusted Online Tutor for Homework and Test preparation at every key stage.
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
                src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&q=80"
                alt="Online English tutoring session for UK students"
                className="rounded-2xl shadow-2xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-16 md:py-20">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4 text-center">Why Choose Math Make Smart for UK English?</h2>
          <p className="text-on-surface-variant text-center max-w-2xl mx-auto mb-12">
            Stop struggling over unseen texts, tricky quotations and essay structure alone. We provide dedicated <span className="font-semibold text-charcoal">virtual English tutoring</span> customised for UK exam boards and school standards.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-surface-container-low rounded-2xl p-8">
              <div className="w-12 h-12 bg-lime-green rounded-xl flex items-center justify-center mb-5">
                <LigatureIcon name="Clock" className="w-6 h-6 text-charcoal" />
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-3">Flexible Timings &amp; Scheduling</h3>
              <p className="text-on-surface-variant">Book live interactive sessions around clubs, homework and revision blocks, with lessons available evenings and weekends across every UK time zone.</p>
            </div>
            <div className="bg-surface-container-low rounded-2xl p-8">
              <div className="w-12 h-12 bg-lime-green rounded-xl flex items-center justify-center mb-5">
                <LigatureIcon name="DollarSign" className="w-6 h-6 text-charcoal" />
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-3">Affordable Rates &amp; Packages</h3>
              <p className="text-on-surface-variant">High-quality <span className="font-semibold text-charcoal">private English tutor UK</span> support without the steep hourly fees charged by local tuition centres.</p>
            </div>
            <div className="bg-surface-container-low rounded-2xl p-8">
              <div className="w-12 h-12 bg-lime-green rounded-xl flex items-center justify-center mb-5">
                <LigatureIcon name="Star" className="w-6 h-6 text-charcoal" />
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-3">Experienced English Specialists</h3>
              <p className="text-on-surface-variant">Work with verified subject specialists who know exactly how AQA, Edexcel and OCR examiners reward strong essay technique.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Focus */}
      <section className="py-16 md:py-20 bg-surface-container-low">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4 text-center">UK National Curriculum <br className="hidden md:block" />Key Stage 2 to A-Level English</h2>
          <p className="text-on-surface-variant text-center max-w-2xl mx-auto mb-12">From building solid reading and writing foundations through to A-Level literary analysis, our lessons follow the UK National Curriculum and every major exam board specification.</p>
          <div className="grid md:grid-cols-12 gap-6">
            <div className="md:col-span-4 space-y-4">
              <div className="bg-white rounded-xl p-5 flex items-center gap-4">
                <span className="w-8 h-8 rounded-full bg-tertiary-fixed flex items-center justify-center font-bold text-sm flex-shrink-0">1</span>
                <span className="font-semibold text-charcoal">KS2 &amp; KS3 Reading and Writing Foundations (Years 3-9)</span>
              </div>
              <div className="bg-white rounded-xl p-5 flex items-center gap-4">
                <span className="w-8 h-8 rounded-full bg-tertiary-fixed flex items-center justify-center font-bold text-sm flex-shrink-0">2</span>
                <span className="font-semibold text-charcoal">GCSE English Language &amp; Literature (Years 10-11)</span>
              </div>
              <div className="bg-white rounded-xl p-5 flex items-center gap-4">
                <span className="w-8 h-8 rounded-full bg-tertiary-fixed flex items-center justify-center font-bold text-sm flex-shrink-0">3</span>
                <span className="font-semibold text-charcoal">A-Level English Literature (Years 12-13)</span>
              </div>
            </div>
            <div className="md:col-span-8 grid sm:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 border border-outline-variant">
                <h4 className="font-bold text-charcoal mb-2">Reading Comprehension &amp; Inference</h4>
                <p className="text-sm text-on-surface-variant">Unpicking unseen fiction and non-fiction extracts, identifying explicit and implicit meaning, and answering exam questions with precision.</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-outline-variant">
                <h4 className="font-bold text-charcoal mb-2">Creative &amp; Transactional Writing</h4>
                <p className="text-sm text-on-surface-variant">Building vivid, well-structured narratives and descriptive pieces alongside letters, speeches and articles for GCSE writing papers.</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-outline-variant">
                <h4 className="font-bold text-charcoal mb-2">Shakespeare &amp; 19th-Century Prose</h4>
                <p className="text-sm text-on-surface-variant">Close analysis of language, form and structure, plus context and authorial intent for set-text essay questions.</p>
              </div>
              <div className="bg-secondary-fixed-dim rounded-xl p-6 col-span-full flex flex-col sm:flex-row items-center justify-between gap-4">
                <h4 className="font-bold text-white text-lg">Ace Your GCSE or A-Level English Exam</h4>
                <button onClick={() => onNavigate('trial')} className="bg-white text-royal-purple px-6 py-2.5 rounded-full font-semibold whitespace-nowrap">Get Started</button>
              </div>
              <div className="col-span-full flex flex-wrap gap-2">
                {['Unseen Poetry', 'Modern Texts', 'Spoken Language', 'Non-Fiction Analysis', 'Critical Essay Writing', 'Context & Authorial Intent'].map((tag) => (
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
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4 text-center">Key Stage &amp; Exam-Board English Lesson Plans</h2>
          <p className="text-on-surface-variant text-center max-w-2xl mx-auto mb-12">Our <span className="font-semibold text-charcoal">online English tutoring</span> follows structured pathways through each key stage so skills build year on year, right through to exam day.</p>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">KS3 English (Years 7-9)</h4>
              <p className="text-sm text-on-surface-variant mb-4">Widening vocabulary, sentence and paragraph control, and first encounters with Shakespeare, poetry and extended fiction.</p>
              <ul className="space-y-2 text-sm text-charcoal font-medium border-t border-outline-variant pt-4">
                <li className="flex items-center gap-2"><LigatureIcon name="Check" className="w-4 h-4 text-royal-purple" /> Grammar &amp; punctuation accuracy</li>
                <li className="flex items-center gap-2"><LigatureIcon name="Check" className="w-4 h-4 text-royal-purple" /> Character &amp; plot analysis</li>
              </ul>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">GCSE English Language (Years 10-11)</h4>
              <p className="text-sm text-on-surface-variant mb-4">Reading unfamiliar fiction and non-fiction extracts with confidence, and producing controlled creative and transactional writing under timed conditions.</p>
              <ul className="space-y-2 text-sm text-charcoal font-medium border-t border-outline-variant pt-4">
                <li className="flex items-center gap-2"><LigatureIcon name="Check" className="w-4 h-4 text-royal-purple" /> Language analysis &amp; inference</li>
                <li className="flex items-center gap-2"><LigatureIcon name="Check" className="w-4 h-4 text-royal-purple" /> Spoken language endorsement prep</li>
              </ul>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">GCSE English Literature (Years 10-11)</h4>
              <p className="text-sm text-on-surface-variant mb-4">In-depth study of set texts, typically a Shakespeare play, a 19th-century novel and a poetry anthology, with a strong focus on quotation-based essay writing.</p>
              <ul className="space-y-2 text-sm text-charcoal font-medium border-t border-outline-variant pt-4">
                <li className="flex items-center gap-2"><LigatureIcon name="Check" className="w-4 h-4 text-royal-purple" /> Set-text theme &amp; character tracking</li>
                <li className="flex items-center gap-2"><LigatureIcon name="Check" className="w-4 h-4 text-royal-purple" /> Unseen poetry comparison</li>
              </ul>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">A-Level English Literature (Years 12-13)</h4>
              <p className="text-sm text-on-surface-variant mb-4">University-style critical analysis across prose, poetry and drama, with close attention to context, literary theory and comparative essay writing.</p>
              <ul className="space-y-2 text-sm text-charcoal font-medium border-t border-outline-variant pt-4">
                <li className="flex items-center gap-2"><LigatureIcon name="Check" className="w-4 h-4 text-royal-purple" /> Comparative &amp; unseen critical essays</li>
                <li className="flex items-center gap-2"><LigatureIcon name="Check" className="w-4 h-4 text-royal-purple" /> Context &amp; critical viewpoints</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Quality */}
      <section className="py-16 md:py-20 bg-surface-container-low">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop grid md:grid-cols-2 gap-12 items-center">
          <img
            src="https://images.unsplash.com/photo-1577896851231-70ef18881754?w=800&q=80"
            alt="UK English tutor conducting an interactive online tutoring session"
            className="rounded-2xl shadow-xl w-full h-auto object-cover"
          />
          <div>
            <span className="inline-block bg-lime-green text-charcoal font-bold px-4 py-1.5 rounded-full mb-4">99% Student Satisfaction</span>
            <h2 className="text-3xl font-bold text-charcoal mb-6">Qualified UK English Tutors <br className="hidden md:block" />Trusted by Parents Nationwide</h2>
            <p className="text-on-surface-variant mb-6">Our tutors are experienced English specialists, many with teaching backgrounds in UK secondary schools. Each one undergoes rigorous background screening and pedagogical training to deliver engaging, confidence-building one-to-one tutoring.</p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <LigatureIcon name="CheckCircle" className="w-5 h-5 text-royal-purple mt-0.5" />
                <span className="text-on-surface-variant">Fully Background Checked &amp; Screened Educators</span>
              </li>
              <li className="flex items-start gap-3">
                <LigatureIcon name="CheckCircle" className="w-5 h-5 text-royal-purple mt-0.5" />
                <span className="text-on-surface-variant">Graduates from Leading UK Universities</span>
              </li>
              <li className="flex items-start gap-3">
                <LigatureIcon name="CheckCircle" className="w-5 h-5 text-royal-purple mt-0.5" />
                <span className="text-on-surface-variant">Specialists in GCSE and A-Level English Language &amp; Literature</span>
              </li>
            </ul>
            <button onClick={() => onNavigate('about')} className="bg-charcoal text-white px-8 py-3.5 rounded-full font-semibold">Learn More About Our Tutors</button>
          </div>
        </div>
      </section>

      <GradeLessonPlans
        onNavigate={onNavigate}
        subject="English"
        description="Explore UK english lesson plans aligned with local year groups, courses and exams."
        plans={[
          { grade: 'Years 1–6', band: 'Primary' },
          { grade: 'Years 7–9', band: 'Key Stage 3' },
          { grade: 'GCSE English Language', band: 'GCSE' },
          { grade: 'GCSE English Literature', band: 'GCSE' },
          { grade: 'A-level English', band: 'A-level' },
        ]}
      />

      {/* FAQs */}
      <section className="py-16 md:py-20">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-12 text-center">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">What&apos;s the actual difference between GCSE English Language and English Literature?</h4>
              <p className="text-on-surface-variant text-sm">They&apos;re both compulsory, but they test very different skills. Language is about how well your child can read unfamiliar fiction and non-fiction extracts and write their own creative or transactional pieces under timed conditions. Literature is about knowing a fixed set of texts inside out — usually a Shakespeare play, a 19th-century novel and a poetry anthology — and being able to write detailed, quotation-supported essays on them. A lot of families assume it&apos;s one subject with two papers; it&apos;s really two separate skill sets, and we tailor sessions to whichever one needs the most attention.</p>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">How does tutoring actually improve essay technique and exam timing?</h4>
              <p className="text-on-surface-variant text-sm">We work on the two things that quietly cost students the most marks: structure and the clock. Sessions cover how to build a PEEL or point-evidence-analysis paragraph that actually answers the question, then move on to timed practice so your child learns to pace themselves across a two-hour paper without running out of time on the final essay. Most improvement comes from repetition with feedback, not from memorising more content.</p>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">Does your tutoring cover the spoken language endorsement?</h4>
              <p className="text-on-surface-variant text-sm">Yes. While it&apos;s reported separately from the GCSE grade, the spoken language endorsement still causes real nerves for a lot of students. Our tutors help with planning a clear presentation, structuring answers to follow-up questions, and simply practising speaking about a topic out loud until it feels natural rather than daunting.</p>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">My child freezes up during creative writing tasks — can tutoring help with that?</h4>
              <p className="text-on-surface-variant text-sm">This is one of the most common things we hear from parents. Blank-page panic usually comes from not having a plan, not a lack of ideas. Tutors teach simple, reusable structures for openings, pacing and description, and give low-pressure practice so students build a bank of techniques they can reach for on exam day instead of starting from nothing every time.</p>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">We just need help with one set text, not the whole syllabus — is that possible?</h4>
              <p className="text-on-surface-variant text-sm">Completely. Some families come to us because a specific play or novel isn&apos;t clicking, while others want ongoing support across the full course. We shape sessions around whatever your child actually needs, whether that&apos;s a focused block on a single set text before a mock exam or steady, term-long support across both Language and Literature.</p>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">Can English tutoring help with the 11+ English paper too?</h4>
              <p className="text-on-surface-variant text-sm">
                Yes, comprehension, vocabulary and creative writing under time pressure are exactly what the 11+ English paper tests, and they&apos;re skills we build from KS2 upward anyway. If your child is preparing for grammar or independent school entry, take a look at our{' '}
                <button onClick={() => onNavigate('test-prep', '11-plus')} className="text-royal-purple font-semibold underline">
                  11+ English preparation
                </button>{' '}
                support alongside regular tutoring.
              </p>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">Is there a free trial lesson available?</h4>
              <p className="text-on-surface-variant text-sm">Yes. You can book a complimentary trial lesson with one of our expert English tutors with no upfront payment and no obligation to continue afterwards.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Book Your Free Trial Lesson */}
      <section className="py-16 md:py-20 bg-surface-container-low">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4 text-center">Book Your Free Trial Lesson</h2>
          <p className="text-on-surface-variant text-center max-w-2xl mx-auto mb-10">Tell us a little about your child&apos;s English needs and we&apos;ll match them with the right specialist tutor — no cost, no obligation.</p>
          <FreeTrialForm />
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-20">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="bg-royal-purple rounded-3xl p-10 md:p-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Start Your English Journey Today!</h2>
            <p className="text-white/80 mb-8 max-w-xl mx-auto">Build the reading, writing and analytical skills that carry through GCSE and A-Level. Join hundreds of confident students across the UK reaching their full potential in English.</p>
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
