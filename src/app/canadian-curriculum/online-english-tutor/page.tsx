'use client';

import type { ActivePage } from '@/lib/types';
import GradeLessonPlans from '@/components/subjects/GradeLessonPlans';
import LigatureIcon from '@/components/LigatureIcon';
import { FreeTrialForm } from '@/components/FreeTrial';

interface SubjectComponentProps {
  onNavigate: (page: ActivePage, subjectTitle?: string) => void;
}

export default function CAEnglishTutorContent({ onNavigate }: SubjectComponentProps) {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-primary-fixed">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-white text-royal-purple text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
                Reading, Writing &amp; Literacy Specialists
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-on-primary-fixed mb-6 leading-tight">
                Online English Tutor <br className="hidden md:block" />in Canada
              </h1>
              <p className="text-lg text-on-primary-fixed/80 mb-8 max-w-xl">
                Strengthen reading, writing and analysis with an expert <strong className="font-semibold">Online English Tutor</strong> matched to your province. From early literacy through to ENG4U, English Studies 12 and ELA 30-1, lessons follow the curriculum your child&rsquo;s school actually teaches.
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
                src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&q=80"
                alt="Canadian student working on an English essay during an online tutoring session"
                className="rounded-2xl shadow-2xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-16 md:py-20">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4 text-center">English Tutoring for Canadian School Success</h2>
          <p className="text-on-surface-variant text-center max-w-2xl mx-auto mb-12">
            This is English as a school subject, not English as a second language. <span className="font-semibold text-charcoal">English tutoring in Canada</span> means literary analysis, essay structure and the literacy requirements that stand between a student and their diploma.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-surface-container-low rounded-2xl p-8">
              <div className="w-12 h-12 bg-lime-green rounded-xl flex items-center justify-center mb-5">
                <LigatureIcon name="Clock" className="w-6 h-6 text-charcoal" />
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-3">Scheduling That Fits Your Week</h3>
              <p className="text-on-surface-variant">Sessions booked around school and activities in every Canadian time zone, with evening and weekend availability through essay season and exam periods.</p>
            </div>
            <div className="bg-surface-container-low rounded-2xl p-8">
              <div className="w-12 h-12 bg-lime-green rounded-xl flex items-center justify-center mb-5">
                <LigatureIcon name="DollarSign" className="w-6 h-6 text-charcoal" />
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-3">Straightforward Canadian Rates</h3>
              <p className="text-on-surface-variant">Billed in Canadian dollars with no registration fee and no contract. Plans can be shared between siblings or split across English and other subjects.</p>
            </div>
            <div className="bg-surface-container-low rounded-2xl p-8">
              <div className="w-12 h-12 bg-lime-green rounded-xl flex items-center justify-center mb-5">
                <LigatureIcon name="Star" className="w-6 h-6 text-charcoal" />
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-3">Essays Marked Against Real Criteria</h3>
              <p className="text-on-surface-variant">Written work is assessed against the rubrics your child&rsquo;s province actually uses, so feedback translates directly into marks rather than general encouragement.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Focus */}
      <section className="py-16 md:py-20 bg-surface-container-low">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4 text-center">Provincial English Curricula <br className="hidden md:block" />Grade 1 Through Grade 12</h2>
          <p className="text-on-surface-variant text-center max-w-2xl mx-auto mb-12">
            Covering the Ontario English curriculum through ENG4U, Alberta English Language Arts including ELA 30-1 and 30-2, English Studies 12 in British Columbia, and English Language Arts in the Qu&eacute;bec Education Program.
          </p>
          <div className="grid md:grid-cols-12 gap-6">
            <div className="md:col-span-4 space-y-4">
              <div className="bg-white rounded-xl p-5 flex items-center gap-4">
                <span className="w-8 h-8 rounded-full bg-tertiary-fixed flex items-center justify-center font-bold text-sm flex-shrink-0">1</span>
                <span className="font-semibold text-charcoal">Early Literacy &amp; Reading (Grades 1&ndash;6)</span>
              </div>
              <div className="bg-white rounded-xl p-5 flex items-center gap-4">
                <span className="w-8 h-8 rounded-full bg-tertiary-fixed flex items-center justify-center font-bold text-sm flex-shrink-0">2</span>
                <span className="font-semibold text-charcoal">Middle Years Writing &amp; Analysis (Grades 7&ndash;9)</span>
              </div>
              <div className="bg-white rounded-xl p-5 flex items-center gap-4">
                <span className="w-8 h-8 rounded-full bg-tertiary-fixed flex items-center justify-center font-bold text-sm flex-shrink-0">3</span>
                <span className="font-semibold text-charcoal">Senior English &amp; University Prep (Grades 10&ndash;12)</span>
              </div>
            </div>
            <div className="md:col-span-8 grid sm:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 border border-outline-variant">
                <h4 className="font-bold text-charcoal mb-2">Reading &amp; Comprehension</h4>
                <p className="text-sm text-on-surface-variant">Decoding and fluency in the early grades, developing into inference, close reading and analysis of increasingly complex texts.</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-outline-variant">
                <h4 className="font-bold text-charcoal mb-2">Writing &amp; Composition</h4>
                <p className="text-sm text-on-surface-variant">Sentence and paragraph construction through to the analytical and argumentative essays that senior English courses are built around.</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-outline-variant">
                <h4 className="font-bold text-charcoal mb-2">Oral Communication &amp; Media Literacy</h4>
                <p className="text-sm text-on-surface-variant">Speaking, listening and critical media analysis, all of which appear as assessed strands in Canadian provincial English curricula.</p>
              </div>
              <div className="bg-secondary-fixed-dim rounded-xl p-6 col-span-full flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <h4 className="font-bold text-white text-lg mb-1">Literacy Requirements Stand Between Students and a Diploma</h4>
                  <p className="text-white/80 text-sm">Ontario&rsquo;s Grade 10 literacy test and the BC graduation literacy assessments are conditions of graduating, not simply scores on a report card.</p>
                </div>
                <button onClick={() => onNavigate('trial')} className="bg-white text-royal-purple px-6 py-2.5 rounded-full font-semibold whitespace-nowrap">Learn More</button>
              </div>
              <div className="col-span-full flex flex-wrap gap-2">
                {['ENG4U essays', 'OSSLT literacy preparation', 'ELA 30-1 Diploma Exam', 'English Studies 12', 'Literary analysis'].map((tag) => (
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
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4 text-center">Your Child&rsquo;s English Roadmap, Grade by Grade</h2>
          <p className="text-on-surface-variant text-center max-w-2xl mx-auto mb-12">
            Our <span className="font-semibold text-charcoal">online English tutoring</span> follows the provincial sequence, building reading stamina and essay technique steadily rather than cramming both in Grade 12.
          </p>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">Elementary (Grades 1&ndash;6)</h4>
              <p className="text-sm text-on-surface-variant mb-4">Phonics, fluency and comprehension, moving from decoding words to understanding texts. Ontario assesses reading and writing through EQAO in Grades 3 and 6.</p>
              <ul className="space-y-1 text-sm font-medium text-charcoal border-t border-outline-variant pt-3">
                <li className="flex items-center gap-2"><LigatureIcon name="Check" className="w-4 h-4 text-royal-purple" /> Reading fluency &amp; comprehension</li>
                <li className="flex items-center gap-2"><LigatureIcon name="Check" className="w-4 h-4 text-royal-purple" /> Paragraph writing</li>
              </ul>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">Middle Years (Grades 7&ndash;9)</h4>
              <p className="text-sm text-on-surface-variant mb-4">Inference, textual evidence and structured writing. This is where students learn to support an argument with quotations rather than summarise what happened.</p>
              <ul className="space-y-1 text-sm font-medium text-charcoal border-t border-outline-variant pt-3">
                <li className="flex items-center gap-2"><LigatureIcon name="Check" className="w-4 h-4 text-royal-purple" /> Inference &amp; textual evidence</li>
                <li className="flex items-center gap-2"><LigatureIcon name="Check" className="w-4 h-4 text-royal-purple" /> Structured essay writing</li>
              </ul>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">Grade 10 &amp; Literacy Testing</h4>
              <p className="text-sm text-on-surface-variant mb-4">Ontario students sit the literacy test, and BC students complete a graduation literacy assessment. Both are graduation requirements rather than ordinary classroom assessments.</p>
              <ul className="space-y-1 text-sm font-medium text-charcoal border-t border-outline-variant pt-3">
                <li className="flex items-center gap-2"><LigatureIcon name="Check" className="w-4 h-4 text-royal-purple" /> Literacy test preparation</li>
                <li className="flex items-center gap-2"><LigatureIcon name="Check" className="w-4 h-4 text-royal-purple" /> Analytical writing</li>
              </ul>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">Grades 11&ndash;12</h4>
              <p className="text-sm text-on-surface-variant mb-4">ENG4U in Ontario, ELA 30-1 in Alberta and English Studies 12 in BC. Nearly every Canadian university program requires a senior English credit, whatever the degree.</p>
              <ul className="space-y-1 text-sm font-medium text-charcoal border-t border-outline-variant pt-3">
                <li className="flex items-center gap-2"><LigatureIcon name="Check" className="w-4 h-4 text-royal-purple" /> Independent literary analysis</li>
                <li className="flex items-center gap-2"><LigatureIcon name="Check" className="w-4 h-4 text-royal-purple" /> University-level essay technique</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Quality */}
      <section className="py-16 md:py-20 bg-surface-container-low">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop grid md:grid-cols-2 gap-12 items-center">
          <img
            src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=800&q=80"
            alt="English tutor reviewing a student essay during an online lesson"
            className="rounded-2xl shadow-xl w-full h-auto object-cover"
          />
          <div>
            <span className="inline-block bg-lime-green text-charcoal font-bold px-4 py-1.5 rounded-full mb-4">Detailed Written Feedback</span>
            <h2 className="text-3xl font-bold text-charcoal mb-6">English Tutors Who Mark Like Examiners</h2>
            <p className="text-on-surface-variant mb-6 leading-relaxed">
              Our English tutors hold degrees in English, literature or a closely related field, and are assessed on the provincial curriculum and rubrics they teach to. Every tutor is screened through a criminal record and vulnerable sector check before their first session.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <LigatureIcon name="CheckCircle" className="w-5 h-5 text-royal-purple mt-0.5" />
                <span className="text-on-surface-variant">Criminal record and vulnerable sector checked</span>
              </li>
              <li className="flex items-start gap-3">
                <LigatureIcon name="CheckCircle" className="w-5 h-5 text-royal-purple mt-0.5" />
                <span className="text-on-surface-variant">Degree-qualified in English or a related discipline</span>
              </li>
              <li className="flex items-start gap-3">
                <LigatureIcon name="CheckCircle" className="w-5 h-5 text-royal-purple mt-0.5" />
                <span className="text-on-surface-variant">Experienced with ENG4U, ELA 30-1 and English Studies 12</span>
              </li>
            </ul>
            <button onClick={() => onNavigate('about')} className="bg-charcoal text-white px-8 py-3.5 rounded-full font-semibold">Learn More About Our Tutors</button>
          </div>
        </div>
      </section>

      <GradeLessonPlans
        onNavigate={onNavigate}
        subject="English"
        description="Explore Canada english lesson plans aligned with local year groups, courses and exams."
        plans={[
          { grade: 'Grades 1–8', band: 'Elementary' },
          { grade: 'Grades 9–10 English', band: 'Secondary' },
          { grade: 'Grade 11 English', band: 'Secondary' },
          { grade: 'ENG4U English', band: 'Ontario Grade 12' },
          { grade: 'Grade 12 ELA', band: 'Alberta' },
        ]}
      />

      {/* FAQs */}
      <section className="py-16 md:py-20">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-12 text-center">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">Is this English tutoring or ESL support?</h4>
              <p className="text-on-surface-variant text-sm">This is English as a school subject: reading comprehension, literary analysis, essay writing and the literacy requirements your child is assessed on at school. It is aimed at students following the Canadian curriculum in English, rather than at learners studying English as an additional language.</p>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">What happens if my child does not meet the Ontario literacy requirement?</h4>
              <p className="text-on-surface-variant text-sm">There are two routes forward. They can sit the test again at a later administration, or complete the Ontario Secondary School Literacy Course, which satisfies the requirement through coursework instead. Neither is unusual, and neither prevents graduation on its own. What matters is addressing the underlying reading or writing difficulty rather than simply resitting with the same preparation.</p>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">Why is senior English required even for science and engineering programs?</h4>
              <p className="text-on-surface-variant text-sm">Because Canadian universities treat written communication as foundational regardless of discipline. ENG4U, ELA 30-1 or English Studies 12 appears on admission requirements for essentially every program, including engineering and computing. Students focused on math and science sometimes leave English until last and find it pulling their admission average down.</p>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">How do you actually improve a student&rsquo;s essay marks?</h4>
              <p className="text-on-surface-variant text-sm">By working on structure and argument before style. Most marks are lost not through weak vocabulary but through essays that summarise rather than argue, or that never directly answer the question asked. We mark against the rubric your child&rsquo;s teacher is using, so the feedback maps onto how the work is actually scored.</p>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">My child reads well but writes poorly. Is that common?</h4>
              <p className="text-on-surface-variant text-sm">Extremely, and the two are genuinely separate skills. Strong readers absorb ideas but may never have been taught how to plan an argument, build a paragraph around a single point, or integrate evidence smoothly. That is explicit, teachable technique, and it usually improves faster than reading comprehension does.</p>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">Do you help with the Alberta ELA Diploma Exam?</h4>
              <p className="text-on-surface-variant text-sm">Yes, for both ELA 30-1 and 30-2. The diploma blends with the school-awarded mark to produce the final course grade, and the written response components reward planning under time pressure as much as insight. Timed practice against the marking standards is the part that most reliably moves the result.</p>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">Does weak reading affect my child&rsquo;s other subjects too?</h4>
              <p className="text-on-surface-variant text-sm">
                Frequently, and it is often missed. Word problems in mathematics, data interpretation in science and source analysis in social studies all rest on reading comprehension, so a student who reads slowly can underperform across the board. Where that pattern appears we look at{' '}
                <button
                  onClick={() => onNavigate('subject', 'Math')}
                  className="text-royal-purple font-bold underline underline-offset-2 cursor-pointer"
                >
                  math tutoring
                </button>
                {' '}alongside English, since the comprehension gap shows up in both places at once.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* Related Subjects */}
      <section className="py-16 md:py-20">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4 text-center">Related Subjects</h2>
          <p className="text-on-surface-variant text-center max-w-2xl mx-auto mb-10">Reading comprehension affects every subject. Families often combine English with another area.</p>
          <div className="grid sm:grid-cols-3 gap-6">
            <button
              onClick={() => onNavigate('subject', 'Math')}
              className="border border-outline-variant rounded-xl p-6 text-left hover:border-royal-purple transition-colors"
            >
              <h4 className="font-bold text-charcoal mb-1">Online Math Tutor in Canada</h4>
              <span className="text-royal-purple font-semibold text-sm underline underline-offset-2">Math tutoring</span>
            </button>
            <button
              onClick={() => onNavigate('subject', 'Science')}
              className="border border-outline-variant rounded-xl p-6 text-left hover:border-royal-purple transition-colors"
            >
              <h4 className="font-bold text-charcoal mb-1">Online Science Tutor in Canada</h4>
              <span className="text-royal-purple font-semibold text-sm underline underline-offset-2">Science tutoring</span>
            </button>
            <button
              onClick={() => onNavigate('subject', 'Biology')}
              className="border border-outline-variant rounded-xl p-6 text-left hover:border-royal-purple transition-colors"
            >
              <h4 className="font-bold text-charcoal mb-1">Online Biology Tutor in Canada</h4>
              <span className="text-royal-purple font-semibold text-sm underline underline-offset-2">Biology tutoring</span>
            </button>
          </div>
        </div>
      </section>

      {/* Book Your Free Trial Lesson */}
      <section className="py-16 md:py-20 bg-surface-container-low">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4 text-center">Book Your Free Trial Lesson</h2>
          <p className="text-on-surface-variant text-center max-w-2xl mx-auto mb-10">
            Tell us your child&rsquo;s grade, province and the English course they are taking, and we will match them with a tutor for a free first lesson. No payment details needed.
          </p>
          <FreeTrialForm />
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-20">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="bg-royal-purple rounded-3xl p-10 md:p-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Turn Strong Ideas Into Strong Marks</h2>
            <p className="text-white/80 mb-8 max-w-xl mx-auto">From early reading fluency to university-level essay technique, our province-matched English tutors help students write with clarity and confidence.</p>
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
