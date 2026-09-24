'use client';

import type { ActivePage } from '@/lib/types';
import GradeLessonPlans from '@/components/subjects/GradeLessonPlans';
import LigatureIcon from '@/components/import { FreeTrialForm } from '@/components/FreeTrial';
LigatureIcon';

interface SubjectComponentProps {
  onNavigate: (page: ActivePage, subjectTitle?: string) => void;
}

export default function CAScienceTutorContent({ onNavigate }: SubjectComponentProps) {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-primary-fixed">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-white text-royal-purple text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
                Elementary Through Grade 10 Science Specialists
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-on-primary-fixed mb-6 leading-tight">
                Online Science Tutor <br className="hidden md:block" />in Canada
              </h1>
              <p className="text-lg text-on-primary-fixed/80 mb-8 max-w-xl">
                Build genuine scientific understanding with an expert <strong className="font-semibold">Online Science Tutor</strong> matched to your province. From elementary inquiry through Ontario&rsquo;s de-streamed Grade 9 course and Science 10, lessons follow the curriculum your child&rsquo;s school actually teaches.
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
                src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&q=80"
                alt="Canadian student exploring science concepts during an online tutoring session"
                className="rounded-2xl shadow-2xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-16 md:py-20">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4 text-center">Science Tutoring Built for Canadian Classrooms</h2>
          <p className="text-on-surface-variant text-center max-w-2xl mx-auto mb-12">
            Provincial science curricula differ in both content and sequencing. Effective <span className="font-semibold text-charcoal">science tutoring in Canada</span> starts by knowing which strands your child is actually being assessed on.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-surface-container-low rounded-2xl p-8">
              <div className="w-12 h-12 bg-lime-green rounded-xl flex items-center justify-center mb-5">
                <LigatureIcon name="Clock" className="w-6 h-6 text-charcoal" />
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-3">Flexible Scheduling Nationwide</h3>
              <p className="text-on-surface-variant">Sessions arranged around the school day in every Canadian time zone, with evening and weekend slots that fit around sport, music and family commitments.</p>
            </div>
            <div className="bg-surface-container-low rounded-2xl p-8">
              <div className="w-12 h-12 bg-lime-green rounded-xl flex items-center justify-center mb-5">
                <LigatureIcon name="DollarSign" className="w-6 h-6 text-charcoal" />
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-3">Transparent Canadian Pricing</h3>
              <p className="text-on-surface-variant">Rates billed in Canadian dollars with no registration fee and no minimum term. One plan can be shared between siblings or split across science and math.</p>
            </div>
            <div className="bg-surface-container-low rounded-2xl p-8">
              <div className="w-12 h-12 bg-lime-green rounded-xl flex items-center justify-center mb-5">
                <LigatureIcon name="Star" className="w-6 h-6 text-charcoal" />
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-3">Inquiry Skills, Not Just Facts</h3>
              <p className="text-on-surface-variant">Canadian science curricula assess scientific inquiry and investigation alongside content knowledge. We teach students to design, analyse and explain, not simply to recall definitions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Focus */}
      <section className="py-16 md:py-20 bg-surface-container-low">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4 text-center">Provincial Science Curricula <br className="hidden md:block" />Grade 1 Through Grade 10</h2>
          <p className="text-on-surface-variant text-center max-w-2xl mx-auto mb-12">
            Covering the Ontario science curriculum including the de-streamed Grade 9 course, Alberta&rsquo;s programs of study, the BC redesigned curriculum with its Big Ideas and curricular competencies, and the Qu&eacute;bec Education Program.
          </p>
          <div className="grid md:grid-cols-12 gap-6">
            <div className="md:col-span-4 space-y-4">
              <div className="bg-white rounded-xl p-5 flex items-center gap-4">
                <span className="w-8 h-8 rounded-full bg-tertiary-fixed flex items-center justify-center font-bold text-sm flex-shrink-0">1</span>
                <span className="font-semibold text-charcoal">Elementary Science (Grades 1&ndash;6)</span>
              </div>
              <div className="bg-white rounded-xl p-5 flex items-center gap-4">
                <span className="w-8 h-8 rounded-full bg-tertiary-fixed flex items-center justify-center font-bold text-sm flex-shrink-0">2</span>
                <span className="font-semibold text-charcoal">Middle Years Science (Grades 7&ndash;8)</span>
              </div>
              <div className="bg-white rounded-xl p-5 flex items-center gap-4">
                <span className="w-8 h-8 rounded-full bg-tertiary-fixed flex items-center justify-center font-bold text-sm flex-shrink-0">3</span>
                <span className="font-semibold text-charcoal">Grade 9 &amp; 10 Science (Ontario, Alberta, BC)</span>
              </div>
            </div>
            <div className="md:col-span-8 grid sm:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 border border-outline-variant">
                <h4 className="font-bold text-charcoal mb-2">Life Systems &amp; Biology</h4>
                <p className="text-sm text-on-surface-variant">Cells, body systems, ecosystems, sustainability and biodiversity, building toward senior biology courses.</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-outline-variant">
                <h4 className="font-bold text-charcoal mb-2">Matter &amp; Energy</h4>
                <p className="text-sm text-on-surface-variant">Properties of matter, chemical reactions, electricity, heat and energy transformation across the middle and senior years.</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-outline-variant">
                <h4 className="font-bold text-charcoal mb-2">Earth, Space &amp; Inquiry Skills</h4>
                <p className="text-sm text-on-surface-variant">Earth systems, space science, and the investigation and communication skills that provincial curricula assess alongside content.</p>
              </div>
              <div className="bg-secondary-fixed-dim rounded-xl p-6 col-span-full flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <h4 className="font-bold text-white text-lg mb-1">Grade 9 and 10 Science Sets Up Everything After It</h4>
                  <p className="text-white/80 text-sm">Ontario&rsquo;s de-streamed Grade 9 course, Alberta Science 10 and BC Science 10 decide whether senior Biology, Chemistry and Physics are realistic choices.</p>
                </div>
                <button onClick={() => onNavigate('trial')} className="bg-white text-royal-purple px-6 py-2.5 rounded-full font-semibold whitespace-nowrap">Learn More</button>
              </div>
              <div className="col-span-full flex flex-wrap gap-2">
                {['Ontario Grade 9 Science', 'Science 10', 'Scientific inquiry skills', 'Lab reports &amp; investigations', 'Grade 8 PAT preparation'].map((tag) => (
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
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4 text-center">Your Child&rsquo;s Science Roadmap, Grade by Grade</h2>
          <p className="text-on-surface-variant text-center max-w-2xl mx-auto mb-12">
            Our <span className="font-semibold text-charcoal">online science tutoring</span> follows the provincial sequence, so the foundations for senior Biology, Chemistry and Physics are laid properly rather than patched later.
          </p>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">Elementary (Grades 1&ndash;6)</h4>
              <p className="text-sm text-on-surface-variant mb-4">Living things, materials, structures, energy and Earth systems, taught through hands-on inquiry. Curiosity and vocabulary built here carry a long way.</p>
              <ul className="space-y-1 text-sm font-medium text-charcoal border-t border-outline-variant pt-3">
                <li className="flex items-center gap-2"><LigatureIcon name="Check" className="w-4 h-4 text-royal-purple" /> Living things &amp; habitats</li>
                <li className="flex items-center gap-2"><LigatureIcon name="Check" className="w-4 h-4 text-royal-purple" /> Materials, energy &amp; structures</li>
              </ul>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">Middle Years (Grades 7&ndash;8)</h4>
              <p className="text-sm text-on-surface-variant mb-4">Cells, ecosystems, fluids, heat and electricity, with formal investigation skills introduced. Alberta assesses science at Grade 8 through Provincial Achievement Tests.</p>
              <ul className="space-y-1 text-sm font-medium text-charcoal border-t border-outline-variant pt-3">
                <li className="flex items-center gap-2"><LigatureIcon name="Check" className="w-4 h-4 text-royal-purple" /> Cells &amp; ecosystems</li>
                <li className="flex items-center gap-2"><LigatureIcon name="Check" className="w-4 h-4 text-royal-purple" /> Investigation &amp; reporting skills</li>
              </ul>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">Grade 9</h4>
              <p className="text-sm text-on-surface-variant mb-4">Ontario now runs a de-streamed Grade 9 science course covering biology, chemistry, physics, Earth and space. Alberta and BC follow their own integrated Grade 9 programs.</p>
              <ul className="space-y-1 text-sm font-medium text-charcoal border-t border-outline-variant pt-3">
                <li className="flex items-center gap-2"><LigatureIcon name="Check" className="w-4 h-4 text-royal-purple" /> Integrated science strands</li>
                <li className="flex items-center gap-2"><LigatureIcon name="Check" className="w-4 h-4 text-royal-purple" /> Preparation for Grade 10</li>
              </ul>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">Grade 10</h4>
              <p className="text-sm text-on-surface-variant mb-4">The last integrated science year before students choose between Biology, Chemistry and Physics. Performance here shapes which senior courses remain realistic.</p>
              <ul className="space-y-1 text-sm font-medium text-charcoal border-t border-outline-variant pt-3">
                <li className="flex items-center gap-2"><LigatureIcon name="Check" className="w-4 h-4 text-royal-purple" /> Chemical reactions &amp; optics</li>
                <li className="flex items-center gap-2"><LigatureIcon name="Check" className="w-4 h-4 text-royal-purple" /> Choosing senior sciences</li>
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
            alt="Science tutor explaining an experiment during an online session"
            className="rounded-2xl shadow-xl w-full h-auto object-cover"
          />
          <div>
            <span className="inline-block bg-lime-green text-charcoal font-bold px-4 py-1.5 rounded-full mb-4">Inquiry-Focused Teaching</span>
            <h2 className="text-3xl font-bold text-charcoal mb-6">Science Tutors Who Teach Reasoning, Not Recall</h2>
            <p className="text-on-surface-variant mb-6 leading-relaxed">
              Every science tutor holds a degree in a science discipline and is assessed on the provincial curriculum they teach. All tutors clear a criminal record and vulnerable sector check before taking a student.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <LigatureIcon name="CheckCircle" className="w-5 h-5 text-royal-purple mt-0.5" />
                <span className="text-on-surface-variant">Criminal record and vulnerable sector checked</span>
              </li>
              <li className="flex items-start gap-3">
                <LigatureIcon name="CheckCircle" className="w-5 h-5 text-royal-purple mt-0.5" />
                <span className="text-on-surface-variant">Degree-qualified in a science discipline</span>
              </li>
              <li className="flex items-start gap-3">
                <LigatureIcon name="CheckCircle" className="w-5 h-5 text-royal-purple mt-0.5" />
                <span className="text-on-surface-variant">Matched to your province&rsquo;s science curriculum</span>
              </li>
            </ul>
            <button onClick={() => onNavigate('about')} className="bg-charcoal text-white px-8 py-3.5 rounded-full font-semibold">Learn More About Our Tutors</button>
          </div>
        </div>
      </section>

      <GradeLessonPlans
        onNavigate={onNavigate}
        subject="Science"
        description="Explore Canada science lesson plans aligned with local year groups, courses and exams."
        plans={[
          { grade: 'Grades 1–6', band: 'Elementary' },
          { grade: 'Grades 7–8 Science', band: 'Middle School' },
          { grade: 'Grade 9 Science', band: 'Secondary' },
          { grade: 'Grade 10 Science', band: 'Secondary' },
          { grade: 'Grade 11–12 Sciences', band: 'Secondary' },
        ]}
      />

      {/* FAQs */}
      <section className="py-16 md:py-20">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-12 text-center">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">When does science split into Biology, Chemistry and Physics in Canada?</h4>
              <p className="text-on-surface-variant text-sm">In most provinces, at the Grade 11 level. Until then students take an integrated science course covering all the strands together, which is why a student can appear strong in science generally and still find a specific senior discipline difficult. Ontario runs a de-streamed Grade 9 course, then Grade 10 science, before the split.</p>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">Why does my child know the content but still lose marks?</h4>
              <p className="text-on-surface-variant text-sm">Almost always because Canadian science curricula assess inquiry and communication alongside knowledge. Students are asked to interpret unfamiliar data, design an investigation or justify a conclusion from evidence, and those are separate skills from recalling a definition. They are also highly teachable, which is why science marks often improve faster than math marks.</p>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">Is science tested provincially?</h4>
              <p className="text-on-surface-variant text-sm">It depends where you live. Alberta assesses science through Provincial Achievement Tests at Grades 6 and 8, and Grade 12 Diploma Exams in Biology, Chemistry and Physics. Ontario does not run a province-wide science assessment. BC embeds science skills within its graduation assessment model rather than testing the subject separately.</p>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">How important is Grade 10 science really?</h4>
              <p className="text-on-surface-variant text-sm">More than families usually assume, because it is the last integrated year before senior specialisation. A student who reaches Grade 11 without a solid grasp of chemical reactions or energy concepts will struggle in Chemistry and Physics, and that difficulty is often mistaken for a lack of aptitude when it is a gap from the previous year.</p>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">Can you help with lab reports and investigations?</h4>
              <p className="text-on-surface-variant text-sm">Yes, and it is worth asking for. Lab work carries real weight in senior Canadian science courses, and it is where otherwise strong students lose marks, usually in the analysis and conclusion rather than in the practical itself. We work through experimental design, handling data, sources of error and building a conclusion from evidence.</p>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">Do you support French immersion science students?</h4>
              <p className="text-on-surface-variant text-sm">Yes. Students learning science through French face a double load: unfamiliar technical vocabulary in a second language on top of new concepts. The first task is establishing whether the obstacle is the science or the language, because the two look similar on a report card and need entirely different responses.</p>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">My child is heading into senior sciences next year. Where should we focus?</h4>
              <p className="text-on-surface-variant text-sm">
                Usually on the mathematics underneath them, which surprises most families. Stoichiometry and kinematics both fail more often on ratios and rearranging equations than on chemistry or physics itself, so strengthening{' '}
                <button
                  onClick={() => onNavigate('subject', 'Math')}
                  className="text-royal-purple font-bold underline underline-offset-2 cursor-pointer"
                >
                  math tutoring
                </button>
                {' '}alongside science in Grade 10 tends to pay off across every senior science course at once.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* Related Subjects */}
      <section className="py-16 md:py-20">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4 text-center">Related Subjects</h2>
          <p className="text-on-surface-variant text-center max-w-2xl mx-auto mb-10">Science splits into separate disciplines in Grade 11. Explore the senior courses your child is heading toward.</p>
          <div className="grid sm:grid-cols-3 gap-6">
            <button
              onClick={() => onNavigate('subject', 'Biology')}
              className="border border-outline-variant rounded-xl p-6 text-left hover:border-royal-purple transition-colors"
            >
              <h4 className="font-bold text-charcoal mb-1">Online Biology Tutor in Canada</h4>
              <span className="text-royal-purple font-semibold text-sm underline underline-offset-2">Biology tutoring</span>
            </button>
            <button
              onClick={() => onNavigate('subject', 'Chemistry')}
              className="border border-outline-variant rounded-xl p-6 text-left hover:border-royal-purple transition-colors"
            >
              <h4 className="font-bold text-charcoal mb-1">Online Chemistry Tutor in Canada</h4>
              <span className="text-royal-purple font-semibold text-sm underline underline-offset-2">Chemistry tutoring</span>
            </button>
            <button
              onClick={() => onNavigate('subject', 'Physics')}
              className="border border-outline-variant rounded-xl p-6 text-left hover:border-royal-purple transition-colors"
            >
              <h4 className="font-bold text-charcoal mb-1">Online Physics Tutor in Canada</h4>
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
            Tell us your child&rsquo;s grade and province, and we will pair them with a science tutor for a free first lesson. No payment details required.
          </p>
          <FreeTrialForm />
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-20">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="bg-royal-purple rounded-3xl p-10 md:p-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Build Scientific Confidence That Lasts</h2>
            <p className="text-white/80 mb-8 max-w-xl mx-auto">From elementary curiosity to Grade 10 preparation for senior sciences, our province-matched science tutors are ready to help.</p>
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
