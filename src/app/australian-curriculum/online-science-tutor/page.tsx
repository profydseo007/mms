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

export default function AUScienceTutorPage({ onNavigate }: SubjectComponentProps) {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-primary-fixed">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-white text-royal-purple text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
                Australian Curriculum Science Specialists
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-on-primary-fixed mb-6 leading-tight">
                Online Science Tutor <br className="hidden md:block" />in Australia
              </h1>
              <p className="text-lg text-on-primary-fixed/80 mb-8 max-w-xl">
                Build genuine understanding with an expert <strong className="font-semibold">Online Science Tutor</strong> who works to the Australian Curriculum. From Foundation investigations through to Year 10 chemistry and physics foundations, lessons cover Science Understanding and Science Inquiry Skills together.
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
                src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&q=80"
                alt="Australian student exploring science concepts during an online lesson"
                className="rounded-2xl shadow-2xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-16 md:py-20">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4 text-center">Science Tutoring Built for Australian Classrooms</h2>
          <p className="text-on-surface-variant text-center max-w-2xl mx-auto mb-12">
            <span className="font-semibold text-charcoal">Science tutoring in Australia</span> means working across all four Science Understanding sub-strands and the inquiry skills assessed alongside them, not just covering topics from a textbook.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-surface-container-low rounded-2xl p-8">
              <div className="w-12 h-12 bg-lime-green rounded-xl flex items-center justify-center mb-5">
                <LigatureIcon name="Clock" className="w-6 h-6 text-charcoal" />
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-3">Flexible Scheduling Nationwide</h3>
              <p className="text-on-surface-variant">Sessions arranged around the school day in every Australian time zone, with evening and weekend availability through assessment periods and term breaks.</p>
            </div>
            <div className="bg-surface-container-low rounded-2xl p-8">
              <div className="w-12 h-12 bg-lime-green rounded-xl flex items-center justify-center mb-5">
                <LigatureIcon name="DollarSign" className="w-6 h-6 text-charcoal" />
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-3">Straightforward AUD Pricing</h3>
              <p className="text-on-surface-variant">Rates in Australian dollars with no enrolment fee and no minimum term. One plan stretches across science and whichever other subject needs the attention that term.</p>
            </div>
            <div className="bg-surface-container-low rounded-2xl p-8">
              <div className="w-12 h-12 bg-lime-green rounded-xl flex items-center justify-center mb-5">
                <LigatureIcon name="Star" className="w-6 h-6 text-charcoal" />
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-3">Inquiry Skills, Not Just Content</h3>
              <p className="text-on-surface-variant">The Australian Curriculum assesses Science Inquiry Skills alongside Science Understanding. We teach students to plan, analyse and explain rather than memorise definitions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Focus */}
      <section className="py-16 md:py-20 bg-surface-container-low">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4 text-center">Australian Curriculum Science <br className="hidden md:block" />Foundation Through Year 10</h2>
          <p className="text-on-surface-variant text-center max-w-2xl mx-auto mb-12">
            Covering ACARA&rsquo;s four Science Understanding sub-strands, Science as a Human Endeavour and Science Inquiry Skills, delivered through your state&rsquo;s syllabus and preparing students for senior science subjects.
          </p>
          <div className="grid md:grid-cols-12 gap-6">
            <div className="md:col-span-4 space-y-4">
              <div className="bg-white rounded-xl p-5 flex items-center gap-4">
                <span className="w-8 h-8 rounded-full bg-tertiary-fixed flex items-center justify-center font-bold text-sm flex-shrink-0">1</span>
                <span className="font-semibold text-charcoal">Primary Science (Foundation&ndash;Year 6)</span>
              </div>
              <div className="bg-white rounded-xl p-5 flex items-center gap-4">
                <span className="w-8 h-8 rounded-full bg-tertiary-fixed flex items-center justify-center font-bold text-sm flex-shrink-0">2</span>
                <span className="font-semibold text-charcoal">Middle Years Science (Years 7&ndash;8)</span>
              </div>
              <div className="bg-white rounded-xl p-5 flex items-center gap-4">
                <span className="w-8 h-8 rounded-full bg-tertiary-fixed flex items-center justify-center font-bold text-sm flex-shrink-0">3</span>
                <span className="font-semibold text-charcoal">Years 9 &amp; 10 Science</span>
              </div>
            </div>
            <div className="md:col-span-8 grid sm:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 border border-outline-variant">
                <h4 className="font-bold text-charcoal mb-2">Biological &amp; Chemical Sciences</h4>
                <p className="text-sm text-on-surface-variant">Living things, cells, ecosystems, the particle model, chemical reactions and the atomic structure that senior chemistry assumes.</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-outline-variant">
                <h4 className="font-bold text-charcoal mb-2">Physical &amp; Earth Sciences</h4>
                <p className="text-sm text-on-surface-variant">Forces, energy, electricity and motion, alongside Earth systems, geological change and the distinctive Australian environment.</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-outline-variant">
                <h4 className="font-bold text-charcoal mb-2">Science Inquiry Skills</h4>
                <p className="text-sm text-on-surface-variant">Questioning and predicting, planning investigations, processing and analysing data, evaluating and communicating findings.</p>
              </div>
              <div className="bg-secondary-fixed-dim rounded-xl p-6 col-span-full flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <h4 className="font-bold text-white text-lg mb-1">Years 9 and 10 Decide Which Senior Sciences Are Realistic</h4>
                  <p className="text-white/80 text-sm">Chemistry, physics and biology all separate in Year 11, and the foundations laid in Years 9 and 10 determine which of them a student can genuinely attempt.</p>
                </div>
                <button onClick={() => onNavigate('trial')} className="bg-white text-royal-purple px-6 py-2.5 rounded-full font-semibold whitespace-nowrap">Learn More</button>
              </div>
              <div className="col-span-full flex flex-wrap gap-2">
                {['Science Understanding', 'Science Inquiry Skills', 'Year 9 NAPLAN readiness', 'Practical investigations', 'Senior subject preparation'].map((tag) => (
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
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4 text-center">Your Child&rsquo;s Science Roadmap, Year by Year</h2>
          <p className="text-on-surface-variant text-center max-w-2xl mx-auto mb-12">
            Our <span className="font-semibold text-charcoal">online science tutoring</span> follows the national sequence, laying proper foundations before students specialise into biology, chemistry and physics.
          </p>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">Foundation to Year 6</h4>
              <p className="text-sm text-on-surface-variant mb-4">Plants and animals, everyday materials, pushes and pulls, and the weather and sky above them, all explored by doing rather than reading. The habit of asking why starts here.</p>
              <ul className="space-y-1 text-sm font-medium text-charcoal border-t border-outline-variant pt-3">
                <li className="flex items-center gap-2"><LigatureIcon name="Check" className="w-4 h-4 text-royal-purple" /> Living things &amp; materials</li>
                <li className="flex items-center gap-2"><LigatureIcon name="Check" className="w-4 h-4 text-royal-purple" /> Simple forces &amp; Earth systems</li>
              </ul>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">Years 7 &amp; 8</h4>
              <p className="text-sm text-on-surface-variant mb-4">Cells, classification, mixtures and separation, forces and energy, with formal investigation method introduced and fair testing taught properly.</p>
              <ul className="space-y-1 text-sm font-medium text-charcoal border-t border-outline-variant pt-3">
                <li className="flex items-center gap-2"><LigatureIcon name="Check" className="w-4 h-4 text-royal-purple" /> Cells &amp; classification</li>
                <li className="flex items-center gap-2"><LigatureIcon name="Check" className="w-4 h-4 text-royal-purple" /> Planning fair tests</li>
              </ul>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">Year 9</h4>
              <p className="text-sm text-on-surface-variant mb-4">Body systems, ecosystems, chemical reactions, electricity and waves. The content becomes noticeably more abstract, and gaps here surface quickly in Year 11.</p>
              <ul className="space-y-1 text-sm font-medium text-charcoal border-t border-outline-variant pt-3">
                <li className="flex items-center gap-2"><LigatureIcon name="Check" className="w-4 h-4 text-royal-purple" /> Chemical reactions &amp; electricity</li>
                <li className="flex items-center gap-2"><LigatureIcon name="Check" className="w-4 h-4 text-royal-purple" /> Body systems &amp; ecosystems</li>
              </ul>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">Year 10</h4>
              <p className="text-sm text-on-surface-variant mb-4">Genetics, evolution, the periodic table, motion and global systems. The last shared science year before students choose senior subjects.</p>
              <ul className="space-y-1 text-sm font-medium text-charcoal border-t border-outline-variant pt-3">
                <li className="flex items-center gap-2"><LigatureIcon name="Check" className="w-4 h-4 text-royal-purple" /> Genetics &amp; evolution</li>
                <li className="flex items-center gap-2"><LigatureIcon name="Check" className="w-4 h-4 text-royal-purple" /> Motion &amp; the periodic table</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Quality */}
      <section className="py-16 md:py-20 bg-surface-container-low">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop grid md:grid-cols-2 gap-12 items-center">
          <img
            src="https://images.unsplash.com/photo-1567168544813-cc03465b4fa8?w=800&q=80"
            alt="Science tutor explaining an investigation during an online session"
            className="rounded-2xl shadow-xl w-full h-auto object-cover"
          />
          <div>
            <span className="inline-block bg-lime-green text-charcoal font-bold px-4 py-1.5 rounded-full mb-4">Inquiry Focused</span>
            <h2 className="text-3xl font-bold text-charcoal mb-6">Science Tutors Who Teach Reasoning, Not Recall</h2>
            <p className="text-on-surface-variant mb-6 leading-relaxed">
              Every science tutor holds a degree in a science discipline and works to the Australian Curriculum and your state syllabus. A current Working with Children Check is held by every tutor before they take a student.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <LigatureIcon name="CheckCircle" className="w-5 h-5 text-royal-purple mt-0.5" />
                <span className="text-on-surface-variant">Current Working with Children Check</span>
              </li>
              <li className="flex items-start gap-3">
                <LigatureIcon name="CheckCircle" className="w-5 h-5 text-royal-purple mt-0.5" />
                <span className="text-on-surface-variant">Degree-qualified in a science discipline</span>
              </li>
              <li className="flex items-start gap-3">
                <LigatureIcon name="CheckCircle" className="w-5 h-5 text-royal-purple mt-0.5" />
                <span className="text-on-surface-variant">Matched to your state&rsquo;s science syllabus</span>
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
              <h4 className="font-bold text-charcoal mb-2">When does science split into biology, chemistry and physics in Australia?</h4>
              <p className="text-on-surface-variant text-sm">In Year 11, when students move into their state certificate. Until then they study an integrated science course covering biological, chemical, physical and Earth sciences together, which is why a student can look strong in science overall and still find one senior subject unexpectedly difficult.</p>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">What are Science Inquiry Skills and why do they matter?</h4>
              <p className="text-on-surface-variant text-sm">They are a strand of the Australian Curriculum assessed alongside content: questioning and predicting, planning and conducting investigations, processing and analysing data, evaluating and communicating. Students who know the content but have never been taught to interpret an unfamiliar graph or justify a conclusion lose marks that have nothing to do with their knowledge.</p>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">My child revises hard but still loses marks in science tests. Why?</h4>
              <p className="text-on-surface-variant text-sm">Usually on the extended response and data questions rather than the recall ones. Australian science assessment asks students to explain a process, interpret unfamiliar results or evaluate a method, and a memorised definition answers none of those. That reasoning is teachable and typically improves faster than content knowledge does.</p>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">How important are Years 9 and 10 science really?</h4>
              <p className="text-on-surface-variant text-sm">They are the most consequential years in the whole science pathway and the easiest to coast through. Students arrive in Year 11 chemistry or physics with gaps in the particle model, chemical equations or motion that nobody spotted, and the resulting difficulty is often mistaken for a lack of aptitude when it is simply missing groundwork.</p>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">Can you help with practical investigations and reports?</h4>
              <p className="text-on-surface-variant text-sm">Yes, and it is worth asking for. Practical work carries real weight in senior assessment, and students commonly lose marks in the analysis and evaluation rather than in the experiment itself. We work through variables, method, data handling, sources of error and writing conclusions that argue from the evidence.</p>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">Does science appear in NAPLAN?</h4>
              <p className="text-on-surface-variant text-sm">No. NAPLAN assesses reading, writing, language conventions and numeracy only, in Years 3, 5, 7 and 9. Science is assessed through school-based work rather than nationally, which means a science difficulty can go unnoticed for years because no external report ever flags it.</p>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">My child wants to take chemistry in Year 11. What should we do now?</h4>
              <p className="text-on-surface-variant text-sm">
                Focus on the chemical sciences sub-strand and the maths underneath it. The particle model, writing equations and proportional reasoning all carry directly into senior chemistry, so building those in Year 10 makes the transition into{' '}
                <button
                  onClick={() => onNavigate('subject', 'Chemistry')}
                  className="text-royal-purple font-bold underline underline-offset-2 cursor-pointer"
                >
                  chemistry tutoring
                </button>
                {' '}considerably smoother than trying to catch up once assessment has already started counting.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* Related Subjects */}
      <section className="py-16 md:py-20">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4 text-center">Related Subjects</h2>
          <p className="text-on-surface-variant text-center max-w-2xl mx-auto mb-10">Science separates into distinct subjects in Year 11. Explore the senior courses your child is heading towards.</p>
          <div className="grid sm:grid-cols-3 gap-6">
            <button
              onClick={() => onNavigate('subject', 'Biology')}
              className="border border-outline-variant rounded-xl p-6 text-left hover:border-royal-purple transition-colors"
            >
              <h4 className="font-bold text-charcoal mb-1">Online Biology Tutor in Australia</h4>
              <span className="text-royal-purple font-semibold text-sm underline underline-offset-2">Biology tutoring</span>
            </button>
            <button
              onClick={() => onNavigate('subject', 'Chemistry')}
              className="border border-outline-variant rounded-xl p-6 text-left hover:border-royal-purple transition-colors"
            >
              <h4 className="font-bold text-charcoal mb-1">Online Chemistry Tutor in Australia</h4>
              <span className="text-royal-purple font-semibold text-sm underline underline-offset-2">Chemistry tutoring</span>
            </button>
            <button
              onClick={() => onNavigate('subject', 'Physics')}
              className="border border-outline-variant rounded-xl p-6 text-left hover:border-royal-purple transition-colors"
            >
              <h4 className="font-bold text-charcoal mb-1">Online Physics Tutor in Australia</h4>
              <span className="text-royal-purple font-semibold text-sm underline underline-offset-2">Physics tutoring</span>
            </button>
          </div>
        </div>
      </section>

      {/* Book Your Free Trial Lesson */}
      <section className="py-16 md:py-20 bg-surface-container-low">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4 text-center">Book Your Free Trial Lesson</h2>
          <p className="text-on-surface-variant text-center max-w-2xl mx-auto mb-10">
            Tell us your child&rsquo;s year level and state, and we will pair them with a science tutor for a free first lesson. No payment details required.
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Build Scientific Confidence That Lasts</h2>
            <p className="text-white/80 mb-8 max-w-xl mx-auto">From primary curiosity through to Year 10 preparation for senior sciences, our Australian science tutors are ready to help.</p>
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