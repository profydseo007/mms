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

export default function NZScienceTutorContent({ onNavigate }: SubjectComponentProps) {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-primary-fixed">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-white text-royal-purple text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
                NZ Curriculum Science Specialists
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-on-primary-fixed mb-6 leading-tight">
                Online Science Tutor <br className="hidden md:block" />in New Zealand
              </h1>
              <p className="text-lg text-on-primary-fixed/80 mb-8 max-w-xl">
                Build genuine understanding with an expert <strong className="font-semibold">Online Science Tutor</strong> who works to the New Zealand Curriculum. From primary investigations through to Year 11 NCEA science, lessons focus on the Nature of Science strand your child is actually assessed against.
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
                src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&q=80"
                alt="New Zealand student exploring science concepts during an online lesson"
                className="rounded-2xl shadow-2xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-16 md:py-20">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4 text-center">Science Tutoring Built for New Zealand Classrooms</h2>
          <p className="text-on-surface-variant text-center max-w-2xl mx-auto mb-12">
            <span className="font-semibold text-charcoal">Science tutoring in New Zealand</span> means working to the Nature of Science strand and the achievement standards, not just covering topics from a textbook.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-surface-container-low rounded-2xl p-8">
              <div className="w-12 h-12 bg-lime-green rounded-xl flex items-center justify-center mb-5">
                <LigatureIcon name="Clock" className="w-6 h-6 text-charcoal" />
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-3">Flexible Scheduling Nationwide</h3>
              <p className="text-on-surface-variant">Sessions arranged around the school day, from Auckland to Southland, with evening and weekend availability through internal assessment periods.</p>
            </div>
            <div className="bg-surface-container-low rounded-2xl p-8">
              <div className="w-12 h-12 bg-lime-green rounded-xl flex items-center justify-center mb-5">
                <LigatureIcon name="DollarSign" className="w-6 h-6 text-charcoal" />
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-3">Straightforward NZD Pricing</h3>
              <p className="text-on-surface-variant">Rates in New Zealand dollars with no enrolment fee and no minimum term. A single plan can cover science alongside maths or English.</p>
            </div>
            <div className="bg-surface-container-low rounded-2xl p-8">
              <div className="w-12 h-12 bg-lime-green rounded-xl flex items-center justify-center mb-5">
                <LigatureIcon name="Star" className="w-6 h-6 text-charcoal" />
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-3">Investigation Skills, Not Just Facts</h3>
              <p className="text-on-surface-variant">The Nature of Science strand runs through the whole curriculum. We teach students to plan, carry out and interpret investigations rather than memorise definitions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Focus */}
      <section className="py-16 md:py-20 bg-surface-container-low">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4 text-center">New Zealand Curriculum Science <br className="hidden md:block" />Year 1 Through Year 11</h2>
          <p className="text-on-surface-variant text-center max-w-2xl mx-auto mb-12">
            Covering the science learning area of the New Zealand Curriculum, its contextual strands, and the Level 1 NCEA science standards that follow in Year 11.
          </p>
          <div className="grid md:grid-cols-12 gap-6">
            <div className="md:col-span-4 space-y-4">
              <div className="bg-white rounded-xl p-5 flex items-center gap-4">
                <span className="w-8 h-8 rounded-full bg-tertiary-fixed flex items-center justify-center font-bold text-sm flex-shrink-0">1</span>
                <span className="font-semibold text-charcoal">Primary Science (Years 1&ndash;6)</span>
              </div>
              <div className="bg-white rounded-xl p-5 flex items-center gap-4">
                <span className="w-8 h-8 rounded-full bg-tertiary-fixed flex items-center justify-center font-bold text-sm flex-shrink-0">2</span>
                <span className="font-semibold text-charcoal">Intermediate Science (Years 7&ndash;8)</span>
              </div>
              <div className="bg-white rounded-xl p-5 flex items-center gap-4">
                <span className="w-8 h-8 rounded-full bg-tertiary-fixed flex items-center justify-center font-bold text-sm flex-shrink-0">3</span>
                <span className="font-semibold text-charcoal">Junior Secondary &amp; NCEA Level 1 (Years 9&ndash;11)</span>
              </div>
            </div>
            <div className="md:col-span-8 grid sm:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 border border-outline-variant">
                <h4 className="font-bold text-charcoal mb-2">Living World</h4>
                <p className="text-sm text-on-surface-variant">Life processes, ecology, evolution and biodiversity, building the foundation for senior biology.</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-outline-variant">
                <h4 className="font-bold text-charcoal mb-2">Material &amp; Physical World</h4>
                <p className="text-sm text-on-surface-variant">Properties and changes of matter, chemistry basics, energy, forces and electricity across the junior years.</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-outline-variant">
                <h4 className="font-bold text-charcoal mb-2">Planet Earth &amp; Beyond</h4>
                <p className="text-sm text-on-surface-variant">Earth systems, astronomical systems and the interacting systems that shape Aotearoa&rsquo;s distinctive geology and climate.</p>
              </div>
              <div className="bg-secondary-fixed-dim rounded-xl p-6 col-span-full flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <h4 className="font-bold text-white text-lg mb-1">Years 9 and 10 Decide What Comes Next</h4>
                  <p className="text-white/80 text-sm">Nothing is formally at stake, which is exactly why gaps open here and only become visible when NCEA Level 1 credits start counting in Year 11.</p>
                </div>
                <button onClick={() => onNavigate('trial')} className="bg-white text-royal-purple px-6 py-2.5 rounded-full font-semibold whitespace-nowrap">Learn More</button>
              </div>
              <div className="col-span-full flex flex-wrap gap-2">
                {['Nature of Science', 'Living World', 'Physical World', 'NCEA Level 1 science', 'Investigation reports'].map((tag) => (
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
            Our <span className="font-semibold text-charcoal">online science tutoring</span> follows the New Zealand sequence, laying proper foundations before students specialise into biology, chemistry and physics.
          </p>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">Primary (Years 1&ndash;6)</h4>
              <p className="text-sm text-on-surface-variant mb-4">Living things, materials, forces and Earth systems explored through hands-on investigation. Curiosity and scientific vocabulary built here carry a long way.</p>
              <ul className="space-y-1 text-sm font-medium text-charcoal border-t border-outline-variant pt-3">
                <li className="flex items-center gap-2"><LigatureIcon name="Check" className="w-4 h-4 text-royal-purple" /> Living things &amp; habitats</li>
                <li className="flex items-center gap-2"><LigatureIcon name="Check" className="w-4 h-4 text-royal-purple" /> Materials &amp; simple forces</li>
              </ul>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">Intermediate (Years 7&ndash;8)</h4>
              <p className="text-sm text-on-surface-variant mb-4">Cells, ecosystems, chemical change and energy, with formal investigation skills introduced and fair testing taught properly for the first time.</p>
              <ul className="space-y-1 text-sm font-medium text-charcoal border-t border-outline-variant pt-3">
                <li className="flex items-center gap-2"><LigatureIcon name="Check" className="w-4 h-4 text-royal-purple" /> Cells &amp; ecosystems</li>
                <li className="flex items-center gap-2"><LigatureIcon name="Check" className="w-4 h-4 text-royal-purple" /> Planning investigations</li>
              </ul>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">Years 9 &amp; 10</h4>
              <p className="text-sm text-on-surface-variant mb-4">Structured science across all strands, with the first real laboratory work. The groundwork for senior subjects is laid here, largely unassessed and easily missed.</p>
              <ul className="space-y-1 text-sm font-medium text-charcoal border-t border-outline-variant pt-3">
                <li className="flex items-center gap-2"><LigatureIcon name="Check" className="w-4 h-4 text-royal-purple" /> Integrated science strands</li>
                <li className="flex items-center gap-2"><LigatureIcon name="Check" className="w-4 h-4 text-royal-purple" /> Practical &amp; lab skills</li>
              </ul>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">Year 11, NCEA Level 1</h4>
              <p className="text-sm text-on-surface-variant mb-4">Science achievement standards assessed through internals and externals, alongside the literacy and numeracy co-requisite that sits outside subject credits.</p>
              <ul className="space-y-1 text-sm font-medium text-charcoal border-t border-outline-variant pt-3">
                <li className="flex items-center gap-2"><LigatureIcon name="Check" className="w-4 h-4 text-royal-purple" /> Level 1 achievement standards</li>
                <li className="flex items-center gap-2"><LigatureIcon name="Check" className="w-4 h-4 text-royal-purple" /> Internal assessment technique</li>
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
            <span className="inline-block bg-lime-green text-charcoal font-bold px-4 py-1.5 rounded-full mb-4">Nature of Science Focus</span>
            <h2 className="text-3xl font-bold text-charcoal mb-6">Science Tutors Who Teach Reasoning, Not Recall</h2>
            <p className="text-on-surface-variant mb-6 leading-relaxed">
              Every science tutor holds a degree in a science discipline and works to the New Zealand Curriculum and NZQA standards. Police vetting under the Children&rsquo;s Act is completed before any tutor takes a student.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <LigatureIcon name="CheckCircle" className="w-5 h-5 text-royal-purple mt-0.5" />
                <span className="text-on-surface-variant">Police vetted under the Children&rsquo;s Act</span>
              </li>
              <li className="flex items-start gap-3">
                <LigatureIcon name="CheckCircle" className="w-5 h-5 text-royal-purple mt-0.5" />
                <span className="text-on-surface-variant">Degree-qualified in a science discipline</span>
              </li>
              <li className="flex items-start gap-3">
                <LigatureIcon name="CheckCircle" className="w-5 h-5 text-royal-purple mt-0.5" />
                <span className="text-on-surface-variant">Experienced with NCEA Level 1 science standards</span>
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
              <h4 className="font-bold text-charcoal mb-2">When does science split into biology, chemistry and physics in New Zealand?</h4>
              <p className="text-on-surface-variant text-sm">Generally at Level 2, in Year 12. Until then students take a broad science programme covering the living, material, physical and Earth strands together, which is why a student can seem strong in science overall and still find one senior subject difficult. Some schools begin separating subjects in Year 11 depending on the standards offered.</p>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">What is the Nature of Science strand?</h4>
              <p className="text-on-surface-variant text-sm">It is the overarching strand of the New Zealand Curriculum science learning area, covering how science works: investigating, communicating, and understanding science in context. It is not a separate topic to revise but the thing being assessed alongside content, which is why students who can recite definitions still lose marks on explanation and interpretation questions.</p>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">Is science externally assessed at Level 1?</h4>
              <p className="text-on-surface-variant text-sm">Level 1 science typically combines internal achievement standards assessed during the year with external examinations at the end of it. Which standards a student is entered for varies between schools, so the first thing we establish is exactly which internals and externals your child is sitting rather than assuming a standard programme.</p>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">My child revises hard but still misses Merit. What is going wrong?</h4>
              <p className="text-on-surface-variant text-sm">Almost always on the explanation and investigation questions. New Zealand science asks students to interpret unfamiliar data, justify a conclusion or link cause to effect, and a memorised definition does not answer any of those. That reasoning is teachable and usually improves faster than the content knowledge itself.</p>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">How important are Years 9 and 10 really?</h4>
              <p className="text-on-surface-variant text-sm">They are the most valuable stage in the whole science pathway and the easiest to overlook, because no NCEA credits are at risk. Students arrive in Year 11 with gaps in chemical change or energy that nobody spotted, and the difficulty is then mistaken for a lack of aptitude when it is simply missing groundwork.</p>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">Can you help with investigation reports and practical work?</h4>
              <p className="text-on-surface-variant text-sm">Yes, and it is worth asking for. Practical work carries real weight in internal assessment, and students commonly lose marks in the analysis and conclusion rather than in the experiment itself. We work through method, variables, data handling and writing conclusions that argue from the evidence collected.</p>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">My child wants to take biology next year. What should we focus on now?</h4>
              <p className="text-on-surface-variant text-sm">
                The Living World strand and investigation skills, since both carry straight into senior biology. Students who can plan a fair test and interpret data comfortably find Level 2 considerably easier, so it is worth building those before moving into{' '}
                <button
                  onClick={() => onNavigate('subject', 'Biology')}
                  className="text-royal-purple font-bold underline underline-offset-2 cursor-pointer"
                >
                  biology tutoring
                </button>
                {' '}rather than trying to catch up once credits are already counting.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* Related Subjects */}
      <section className="py-16 md:py-20">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4 text-center">Related Subjects</h2>
          <p className="text-on-surface-variant text-center max-w-2xl mx-auto mb-10">Science separates into distinct subjects at NCEA Level 2. Explore the senior standards your child is heading towards.</p>
          <div className="grid sm:grid-cols-3 gap-6">
            <button
              onClick={() => onNavigate('subject', 'Biology')}
              className="border border-outline-variant rounded-xl p-6 text-left hover:border-royal-purple transition-colors"
            >
              <h4 className="font-bold text-charcoal mb-1">Online Biology Tutor in New Zealand</h4>
              <span className="text-royal-purple font-semibold text-sm underline underline-offset-2">Biology tutoring</span>
            </button>
            <button
              onClick={() => onNavigate('subject', 'Chemistry')}
              className="border border-outline-variant rounded-xl p-6 text-left hover:border-royal-purple transition-colors"
            >
              <h4 className="font-bold text-charcoal mb-1">Online Chemistry Tutor in New Zealand</h4>
              <span className="text-royal-purple font-semibold text-sm underline underline-offset-2">Chemistry tutoring</span>
            </button>
            <button
              onClick={() => onNavigate('subject', 'Physics')}
              className="border border-outline-variant rounded-xl p-6 text-left hover:border-royal-purple transition-colors"
            >
              <h4 className="font-bold text-charcoal mb-1">Online Physics Tutor in New Zealand</h4>
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
            Tell us your child&rsquo;s year level and what they are finding difficult, and we will pair them with a science tutor for a free first lesson. No payment details required.
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
            <p className="text-white/80 mb-8 max-w-xl mx-auto">From primary curiosity through to NCEA Level 1 standards, our New Zealand science tutors are ready to help your child understand rather than memorise.</p>
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