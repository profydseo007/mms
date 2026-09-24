'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import type { ActivePage } from '@/lib/types';
import { BookOpen, Check, CheckCircle2, ChevronDown, Clock3, DollarSign, Star } from 'lucide-react';
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
    Star,
    CheckCircle: CheckCircle2,
    Check,
  }[name];

  return <Icon aria-hidden="true" className={className} />;
}

interface SubjectComponentProps {
  onNavigate: (page: ActivePage, subjectTitle?: string) => void;
}

export default function AUBiologyTutorContent({ onNavigate }: SubjectComponentProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-primary-fixed">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-white text-royal-purple text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
                Senior Biology &amp; ATAR Specialists
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-on-primary-fixed mb-6 leading-tight">
                Online Biology Tutor <br className="hidden md:block" />in Australia
              </h1>
              <p className="text-lg text-on-primary-fixed/80 mb-8 max-w-xl">
                Move beyond memorising with an expert <strong className="font-semibold">Online Biology Tutor</strong> matched to your state certificate. From Year 10 genetics through to Units 3 and 4 molecular biology and immunity, lessons target what separates a good answer from a top one.
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
                src="https://images.unsplash.com/photo-1530026186672-2cd00ffc50fe?w=800&q=80"
                alt="Australian student studying biology diagrams during an online tutoring session"
                className="rounded-2xl shadow-2xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-16 md:py-20">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4 text-center">Biology Tutoring for Years 11 and 12</h2>
          <p className="text-on-surface-variant text-center max-w-2xl mx-auto mb-12">
            Biology looks like a memorisation subject until Year 12, when it stops being one. <span className="font-semibold text-charcoal">Biology tutoring in Australia</span> should prepare students for that shift before it arrives.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-surface-container-low rounded-2xl p-8">
              <div className="w-12 h-12 bg-lime-green rounded-xl flex items-center justify-center mb-5">
                <LigatureIcon name="Clock" className="w-6 h-6 text-charcoal" />
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-3">Flexible Session Times</h3>
              <p className="text-on-surface-variant">Biology support scheduled around school nationwide, with additional availability ahead of SACs, internal assessments, fieldwork and final examinations.</p>
            </div>
            <div className="bg-surface-container-low rounded-2xl p-8">
              <div className="w-12 h-12 bg-lime-green rounded-xl flex items-center justify-center mb-5">
                <LigatureIcon name="DollarSign" className="w-6 h-6 text-charcoal" />
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-3">Simple Australian Pricing</h3>
              <p className="text-on-surface-variant">Rates billed in AUD, no enrolment fee and no lock-in contract. Biology and chemistry run comfortably off one plan, which is how most students aiming at health courses end up working.</p>
            </div>
            <div className="bg-surface-container-low rounded-2xl p-8">
              <div className="w-12 h-12 bg-lime-green rounded-xl flex items-center justify-center mb-5">
                <LigatureIcon name="Star" className="w-6 h-6 text-charcoal" />
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-3">Explanation Over Recall</h3>
              <p className="text-on-surface-variant">Top marks in senior biology are awarded for explaining and linking processes, not for listing them. So we work on the reasoning rather than handing over yet another glossary.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Focus */}
      <section className="py-16 md:py-20 bg-surface-container-low">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4 text-center">Senior Biology <br className="hidden md:block" />Across Every State Certificate</h2>
          <p className="text-on-surface-variant text-center max-w-2xl mx-auto mb-12">
            Covering senior biology under VCE Units 1 to 4, HSC Biology in New South Wales, QCE Biology in Queensland, and the WACE, SACE, TCE and NTCET equivalents.
          </p>
          <div className="grid md:grid-cols-12 gap-6">
            <div className="md:col-span-4 space-y-4">
              <div className="bg-white rounded-xl p-5 flex items-center gap-4">
                <span className="w-8 h-8 rounded-full bg-tertiary-fixed flex items-center justify-center font-bold text-sm flex-shrink-0">1</span>
                <span className="font-semibold text-charcoal">Year 10 Science Foundations</span>
              </div>
              <div className="bg-white rounded-xl p-5 flex items-center gap-4">
                <span className="w-8 h-8 rounded-full bg-tertiary-fixed flex items-center justify-center font-bold text-sm flex-shrink-0">2</span>
                <span className="font-semibold text-charcoal">Units 1 &amp; 2 Biology (Year 11)</span>
              </div>
              <div className="bg-white rounded-xl p-5 flex items-center gap-4">
                <span className="w-8 h-8 rounded-full bg-tertiary-fixed flex items-center justify-center font-bold text-sm flex-shrink-0">3</span>
                <span className="font-semibold text-charcoal">Units 3 &amp; 4 Biology (Year 12)</span>
              </div>
            </div>
            <div className="md:col-span-8 grid sm:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 border border-outline-variant">
                <h4 className="font-bold text-charcoal mb-2">Cells &amp; Biological Systems</h4>
                <p className="text-sm text-on-surface-variant">Cell structure and function, transport, photosynthesis and respiration, and the body systems that senior units build on.</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-outline-variant">
                <h4 className="font-bold text-charcoal mb-2">Genetics &amp; Molecular Biology</h4>
                <p className="text-sm text-on-surface-variant">Inheritance, DNA structure, protein synthesis, biotechnology and the molecular content that dominates Year 12.</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-outline-variant">
                <h4 className="font-bold text-charcoal mb-2">Evolution, Ecology &amp; Immunity</h4>
                <p className="text-sm text-on-surface-variant">Natural selection, speciation, ecological relationships and the immune response assessed in senior units.</p>
              </div>
              <div className="bg-secondary-fixed-dim rounded-xl p-6 col-span-full flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <h4 className="font-bold text-white text-lg mb-1">Year 12 Biology Is Not a Memorisation Course</h4>
                  <p className="text-white/80 text-sm">Top marks are awarded for explaining mechanisms and linking processes together, which catches out students who did well in Year 11 through recall alone.</p>
                </div>
                <button onClick={() => onNavigate('trial')} className="bg-white text-royal-purple px-6 py-2.5 rounded-full font-semibold whitespace-nowrap">Learn More</button>
              </div>
              <div className="col-span-full flex flex-wrap gap-2">
                {['VCE Biology Units 3 &amp; 4', 'HSC Biology', 'QCE Biology', 'Molecular genetics', 'Practical investigations'].map((tag) => (
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
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4 text-center">Your Child&rsquo;s Biology Roadmap, Year by Year</h2>
          <p className="text-on-surface-variant text-center max-w-2xl mx-auto mb-12">
            Our <span className="font-semibold text-charcoal">online biology tutoring</span> prepares students for the shift from describing to explaining that defines Year 12 biology.
          </p>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">Year 10 Foundations</h4>
              <p className="text-sm text-on-surface-variant mb-4">Cells, genetics, evolution and body systems within general science. The vocabulary and basic cell biology built here support everything in the senior units.</p>
              <ul className="space-y-1 text-sm font-medium text-charcoal border-t border-outline-variant pt-3">
                <li className="flex items-center gap-2"><LigatureIcon name="Check" className="w-4 h-4 text-royal-purple" /> Cells &amp; body systems</li>
                <li className="flex items-center gap-2"><LigatureIcon name="Check" className="w-4 h-4 text-royal-purple" /> Genetics &amp; evolution basics</li>
              </ul>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">Year 11, Units 1 &amp; 2</h4>
              <p className="text-sm text-on-surface-variant mb-4">Cell structure and function, organism systems and ecology, taught largely descriptively. A good memory is generally enough to do well across these units.</p>
              <ul className="space-y-1 text-sm font-medium text-charcoal border-t border-outline-variant pt-3">
                <li className="flex items-center gap-2"><LigatureIcon name="Check" className="w-4 h-4 text-royal-purple" /> Cell structure &amp; function</li>
                <li className="flex items-center gap-2"><LigatureIcon name="Check" className="w-4 h-4 text-royal-purple" /> Ecology &amp; organism systems</li>
              </ul>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">Year 12, Units 3 &amp; 4</h4>
              <p className="text-sm text-on-surface-variant mb-4">Molecular biology, protein synthesis, immunity and evolutionary change, with internal assessment alongside the final external examination.</p>
              <ul className="space-y-1 text-sm font-medium text-charcoal border-t border-outline-variant pt-3">
                <li className="flex items-center gap-2"><LigatureIcon name="Check" className="w-4 h-4 text-royal-purple" /> Molecular genetics &amp; immunity</li>
                <li className="flex items-center gap-2"><LigatureIcon name="Check" className="w-4 h-4 text-royal-purple" /> Evolutionary change</li>
              </ul>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">ATAR &amp; University</h4>
              <p className="text-sm text-on-surface-variant mb-4">Senior biology is expected for nursing, health sciences, biomedical science and many life science degrees, and the result is scaled before contributing to the ATAR.</p>
              <ul className="space-y-1 text-sm font-medium text-charcoal border-t border-outline-variant pt-3">
                <li className="flex items-center gap-2"><LigatureIcon name="Check" className="w-4 h-4 text-royal-purple" /> Health science prerequisites</li>
                <li className="flex items-center gap-2"><LigatureIcon name="Check" className="w-4 h-4 text-royal-purple" /> Data interpretation technique</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Quality */}
      <section className="py-16 md:py-20 bg-surface-container-low">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop grid md:grid-cols-2 gap-12 items-center">
          <img
            src="https://images.unsplash.com/photo-1576086213369-97a306d36557?w=800&q=80"
            alt="Biology tutor explaining cell processes during an online lesson"
            className="rounded-2xl shadow-xl w-full h-auto object-cover"
          />
          <div>
            <span className="inline-block bg-lime-green text-charcoal font-bold px-4 py-1.5 rounded-full mb-4">Certificate Matched</span>
            <h2 className="text-3xl font-bold text-charcoal mb-6">Biology Tutors Matched to Your State Certificate</h2>
            <p className="text-on-surface-variant mb-6 leading-relaxed">
              Our biology tutors hold degrees in biology or a related life science and are matched to the senior certificate your child is enrolled in. A current Working with Children Check is held by every tutor we assign.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <LigatureIcon name="CheckCircle" className="w-5 h-5 text-royal-purple mt-0.5" />
                <span className="text-on-surface-variant">Current Working with Children Check</span>
              </li>
              <li className="flex items-start gap-3">
                <LigatureIcon name="CheckCircle" className="w-5 h-5 text-royal-purple mt-0.5" />
                <span className="text-on-surface-variant">Degree-qualified in biology or a life science</span>
              </li>
              <li className="flex items-start gap-3">
                <LigatureIcon name="CheckCircle" className="w-5 h-5 text-royal-purple mt-0.5" />
                <span className="text-on-surface-variant">Matched to VCE, HSC, QCE, WACE or SACE biology</span>
              </li>
            </ul>
            <button onClick={() => onNavigate('about')} className="bg-charcoal text-white px-8 py-3.5 rounded-full font-semibold">Learn More About Our Tutors</button>
          </div>
        </div>
      </section>


    <section className="py-20 md:py-24 bg-surface">
  <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
      <div className="space-y-4">
        <h2 className="font-headline-lg text-headline-lg text-charcoal font-bold">
          Biology Lesson Plans For Each Year
        </h2>
        <p className="text-on-surface-variant max-w-xl">
          Explore Australian biology lesson plans aligned with the topics students study at each year level.
        </p>
      </div>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
      {[
        { grade: 'Year 1', band: 'Primary' },
        { grade: 'Year 2', band: 'Primary' },
        { grade: 'Year 3', band: 'Primary' },
        { grade: 'Year 4', band: 'Primary' },
        { grade: 'Year 5', band: 'Primary' },
        { grade: 'Year 6', band: 'Primary' },
        { grade: 'Year 7', band: 'Secondary' },
        { grade: 'Year 8', band: 'Secondary' },
        { grade: 'Year 9', band: 'Secondary' },
        { grade: 'Year 10', band: 'Secondary' },
        { grade: 'Year 11', band: 'Senior Secondary' },
        { grade: 'Year 12', band: 'Senior Secondary' },
      ].map((item) => {
        const year = Number(item.grade.replace('Year ', ''));
        const yearWords = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve'];
        const href = `/au/australian-curriculum/online-biology-tutor/lesson-plan-for-year-${yearWords[year]}`;
        const card = (
          <>
            <BookOpen size={22} className="text-royal-purple mx-auto mb-3 opacity-100 transition-opacity" />
            <span className="block text-sm font-semibold text-charcoal mb-1">Lesson Plan For</span>
            <span className="block font-headline-md text-headline-md text-royal-purple mb-2 font-bold">{item.grade}</span>
          </>
        );
        const className = "group block cursor-pointer text-center bg-white p-8 rounded-3xl border border-royal-purple/30 hover:border-royal-purple hover:shadow-lg hover:scale-[1.02] transition-all duration-300";

        return (
          <Link
            key={item.grade}
            href={href}
            className={className}
          >
            {card}
          </Link>
        );
      })}
    </div>
  </div>
</section>
      {/* FAQs */}
      <section className="py-16 md:py-20">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-12 text-center">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {([
              {
                q: 'Why did my child do well in Year 11 biology but struggle in Year 12?',
                a: 'Because the two years reward different things. Year 11 is largely descriptive and rewards careful recall, while Year 12 asks students to explain mechanisms, link processes and justify conclusions from data. The memorisation that worked all through Year 11 simply stops paying, and from the outside it looks like a student has got worse when in fact the question type has changed.',
              },
              {
                q: 'What separates a top biology answer from an average one?',
                a: 'Rarely more content. An average answer describes a process correctly; a strong one explains how and why it happens and links it to the specific context in the question. Students frequently know enough for full marks and write at a lower level simply because nobody has shown them what the higher criteria are asking for.',
              },
              {
                q: 'Does Year 12 biology require chemistry?',
                a: 'Not usually as a stated prerequisite, though the students who have it are noticeably better off. Molecular biology and biochemistry assume some comfort with bonding, molecules and reactions, and students taking senior biology without chemistry often find those topics the hardest part of the course. Most health science pathways expect both regardless.',
              },
              {
                q: 'Does my child actually need biology for nursing or allied health?',
                a: 'It is usually expected, alongside chemistry, for nursing, health sciences, physiotherapy, biomedical science and most allied health pathways. Requirements differ between universities and states, so confirm with the institutions being considered, but students on a health pathway should treat senior biology as essential rather than optional.',
              },
              {
                q: 'Can you help with practical investigations and fieldwork?',
                a: 'Yes. Internally assessed investigations carry real weight, and students commonly lose marks on the analysis and discussion rather than on collecting the data. We work through method, controlling variables, presenting results and writing a discussion that links findings back to biological principles.',
              },
              {
                q: 'How is senior biology assessed in my state?',
                a: 'It varies. Victoria combines School-Assessed Coursework with an end-of-year examination. Queensland combines internal assessment across Units 3 and 4 with an external assessment. New South Wales moderates internal assessment against the cohort\u2019s HSC results. Knowing which model applies changes how a student should distribute their effort across the year.',
              },
              {
                q: 'Should my child take chemistry alongside biology?',
                a: (
                  <>
                    If medicine, nursing or biomedical science is the goal, then yes. Year 12 biology leans on chemistry for molecular and biochemical processes, and most nursing and health courses expect both, so many families pair biology with{' '}
                    <button onClick={() => onNavigate('subject', 'Chemistry')} className="text-royal-purple font-bold underline underline-offset-2 cursor-pointer">chemistry tutoring</button>
                    {' '}rather than discovering the dependency partway through Year 12.
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
          <p className="text-on-surface-variant text-center max-w-2xl mx-auto mb-10">Senior biology draws on chemistry, and health pathways expect both. These are the subjects studied alongside it.</p>
          <div className="grid sm:grid-cols-3 gap-6">
            <button
              onClick={() => onNavigate('subject', 'Chemistry')}
              className="border border-outline-variant rounded-xl p-6 text-left hover:border-royal-purple transition-colors"
            >
              <h4 className="font-bold text-charcoal mb-1">Online Chemistry Tutor in Australia</h4>
              <span className="text-royal-purple font-semibold text-sm underline underline-offset-2">Chemistry tutoring</span>
            </button>
            <button
              onClick={() => onNavigate('subject', 'Science')}
              className="border border-outline-variant rounded-xl p-6 text-left hover:border-royal-purple transition-colors"
            >
              <h4 className="font-bold text-charcoal mb-1">Online Science Tutor in Australia</h4>
              <span className="text-royal-purple font-semibold text-sm underline underline-offset-2">Science tutoring</span>
            </button>
            <button
              onClick={() => onNavigate('subject', 'English')}
              className="border border-outline-variant rounded-xl p-6 text-left hover:border-royal-purple transition-colors"
            >
              <h4 className="font-bold text-charcoal mb-1">Online English Tutor in Australia</h4>
              <span className="text-royal-purple font-semibold text-sm underline underline-offset-2">English tutoring</span>
            </button>
          </div>
        </div>
      </section>

      {/* Book Your Free Trial Lesson */}
      <section className="py-16 md:py-20 bg-surface-container-low">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4 text-center">Book Your Free Trial Lesson</h2>
          <p className="text-on-surface-variant text-center max-w-2xl mx-auto mb-10">
            Tell us your child&rsquo;s year level, state and biology units, and we will match them with a specialist tutor for a free first lesson.
          </p>
          <FreeTrialForm />
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-20">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="bg-royal-purple rounded-3xl p-10 md:p-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Understand Biology, Do Not Just Memorise It</h2>
            <p className="text-white/80 mb-8 max-w-xl mx-auto">From Year 11 cell biology to Year 12 molecular genetics and final exam preparation, our certificate-matched biology tutors are ready.</p>
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
