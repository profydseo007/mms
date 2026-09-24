'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import { BadgeCheck, Brain, Check, CheckCircle2, FileText, FlaskConical, MailCheck, PenTool, PlayCircle } from 'lucide-react';
import { FreeTrialForm } from '@/components/FreeTrial';

type LessonPlanSubject = 'Science' | 'Biology' | 'Chemistry' | 'Physics' | 'Maths' | 'English';

interface CurriculumLessonPlanProps {
  region: string;
  subject: LessonPlanSubject;
  year: number;
}

const AU_TERM_NAMES = ['Term 1 · Feb–Apr', 'Term 2 · Apr–Jun', 'Term 3 · Jul–Sep', 'Term 4 · Oct–Dec'];
const US_TERM_NAMES = ['Autumn · Sep–Nov', 'Winter · Dec–Feb', 'Spring · Mar–May', 'Summer · Jun–Aug'];
const TOPICS: Record<LessonPlanSubject, Record<'primary' | 'middle' | 'secondary' | 'senior', string[]>> = {
  Science: {
    primary: ['Living things and their needs', 'Weather and seasonal patterns', 'Materials and their properties', 'Forces, light and sound'],
    middle: ['Cells and body systems', 'Earth and space sciences', 'Particles, mixtures and reactions', 'Energy, forces and ecosystems'],
    secondary: ['Biological systems and ecology', 'Atomic structure and chemical change', 'Motion, energy and waves', 'Scientific data and investigation'],
    senior: ['Biology course foundations', 'Chemistry course foundations', 'Physics course foundations', 'Research, practicals and exam skills'],
  },
  Biology: {
    primary: ['Living things and their needs', 'Plant and animal life cycles', 'Habitats and survival features', 'Local biodiversity and caring for life'],
    middle: ['Cells and classification', 'Body systems and health', 'Reproduction and inheritance', 'Ecosystems and interdependence'],
    secondary: ['Cellular processes and systems', 'Genetics and inheritance', 'Evolution and population change', 'Ecology, evidence and data'],
    senior: ['Cells, organisms and ecosystems', 'Gene expression and heredity', 'Evolution and contemporary biology', 'Practical investigations and exam responses'],
  },
  Chemistry: {
    primary: ['Materials in everyday life', 'Solids, liquids and gases', 'Changes to materials', 'Safe observation and fair testing'],
    middle: ['Particles and states of matter', 'Elements, compounds and mixtures', 'Chemical reactions and conservation', 'Acids, bases and material properties'],
    secondary: ['Atomic structure and periodic patterns', 'Bonding and chemical formulae', 'Moles, equations and stoichiometry', 'Reaction rates, acids and equilibrium'],
    senior: ['Structure, properties and reactions', 'Quantitative chemistry and solutions', 'Equilibrium, acids and redox', 'Organic chemistry and practical analysis'],
  },
  Physics: {
    primary: ['Pushes, pulls and movement', 'Light, shadows and vision', 'Sound and vibration', 'Heat, electricity and simple circuits'],
    middle: ['Motion, speed and forces', 'Energy transfer and efficiency', 'Waves, light and sound', 'Electricity and magnetism'],
    secondary: ['Kinematics and Newton’s laws', 'Work, energy and momentum', 'Waves, optics and circuits', 'Fields, data and practical modelling'],
    senior: ['Mechanics and energy', 'Electricity and fields', 'Waves and modern physics', 'Practical investigations and exam problems'],
  },
  Maths: {
    primary: ['Number sense and place value', 'Addition, subtraction and multiplication', 'Measurement, shape and space', 'Patterns, data and problem solving'],
    middle: ['Fractions, decimals and percentages', 'Ratios, rates and proportional thinking', 'Algebra, equations and graphs', 'Geometry, measurement and statistics'],
    secondary: ['Functions, algebra and modelling', 'Geometry, measurement and trigonometry', 'Statistics and probability', 'Exam problems and mathematical reasoning'],
    senior: ['Functions, calculus and rates of change', 'Probability, statistics and data', 'Methods, Specialist and General pathways', 'Applied modelling and exam technique'],
  },
  English: {
    primary: ['Reading fluency and comprehension', 'Vocabulary, grammar and sentence craft', 'Narrative and imaginative writing', 'Speaking, listening and response'],
    middle: ['Close reading and inference', 'Text structures and language choices', 'Persuasive and analytical writing', 'Discussion, evidence and editing'],
    secondary: ['Analysing texts and contexts', 'Argument, interpretation and evidence', 'Creative and persuasive composition', 'Timed responses and revision'],
    senior: ['State certificate text study', 'Analytical essays and evidence', 'Language, audience and context', 'Exam planning, drafting and refinement'],
  },
};

function getBand(year: number): 'primary' | 'middle' | 'secondary' | 'senior' {
  if (year <= 6) return 'primary';
  if (year <= 8) return 'middle';
  if (year <= 10) return 'secondary';
  return 'senior';
}

function CurriculumLessonPlan({ region, subject, year }: CurriculumLessonPlanProps) {
  const [activeTerm, setActiveTerm] = useState(0);
  const termNames = region === 'United States' ? US_TERM_NAMES : AU_TERM_NAMES;
  const band = getBand(year);
  const topics = TOPICS[subject][band];
  const units = Array.from({ length: 3 }, (_, unitIndex) => {
    const topic = topics[(activeTerm + unitIndex) % topics.length];
    return {
      title: `${['Foundations', 'Investigation', 'Application'][unitIndex]}: ${topic}`,
      rows: Array.from({ length: 4 }, (_, weekIndex) => {
        const week = weekIndex + 1;
        const focus = week === 1 ? topic : [
          `Key ideas: ${topic}`,
          `Guided practice: ${topic}`,
          `Review and apply: ${topic}`,
        ][weekIndex - 1];
        return {
          week: `Week ${week}`,
          one: focus,
          two: `${focus}\nWorked example and vocabulary` ,
          three: `${focus}\nGuided activity\nCheck for understanding`,
          five: `${focus}\nInvestigation or worked examples\nPractice set\nReview quiz`,
        };
      }),
    };
  });


  return (
    <main className="w-full bg-surface font-body-md text-on-surface">
      <section className="py-16 lg:py-24">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary-container/30 text-secondary font-semibold">
              <BadgeCheck size={18} /> {region} Curriculum · Year {year} {subject}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-charcoal">Year {year} {subject} Lesson Plan &amp; Curriculum Map</h1>
            <p className="text-lg text-on-surface-variant max-w-2xl">
              A flexible learning roadmap for Year {year}, with clear topic progression, one-to-one lesson pacing and practical ways to check understanding. {year >= 11 ? 'Senior course details can vary by state and territory.' : 'Activities build from core ideas to investigation and confident application.'}
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#curriculum-map" className="rounded-full px-7 py-3.5 bg-royal-purple text-white font-semibold hover:opacity-90">Explore lesson map</a>
              <a href="#book-trial" className="rounded-full px-7 py-3.5 text-royal-purple bg-white font-semibold hover:bg-soft-gray">Book a free trial</a>
            </div>
            <div className="grid grid-cols-3 gap-3 pt-3">
              {[['4', 'Terms'], ['12', 'Weekly checkpoints'], ['1-on-1', 'Tutor support']].map(([value, label]) => (
                <div key={label} className="bg-white p-4 rounded-xl"><strong className="block text-royal-purple text-xl">{value}</strong><span className="text-sm text-on-surface-variant">{label}</span></div>
              ))}
            </div>
          </div>
          <aside className="lg:col-span-5 rounded-3xl bg-white p-8 shadow-sm border border-outline-variant/30">
            <p className="text-sm uppercase tracking-wide text-royal-purple font-bold mb-3">Year {year} learning focus</p>
            <h2 className="text-2xl font-bold text-charcoal mb-5">{topics[0]}</h2>
            <ul className="space-y-4">
              {topics.slice(1).map((topic) => <li key={topic} className="flex gap-3 text-on-surface-variant"><CheckCircle2 size={20} className="text-royal-purple shrink-0" />{topic}</li>)}
            </ul>
          </aside>
        </div>
      </section>

      <section className="py-12 bg-surface-container-low" id="curriculum-map">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop flex flex-col items-center gap-7">
          <div className="text-center max-w-2xl"><span className="text-sm uppercase tracking-wide text-royal-purple font-bold">Interactive curriculum browser</span><h2 className="text-3xl font-bold text-charcoal mt-2">Year {year} {subject} learning map</h2><p className="text-on-surface-variant mt-3">Choose a school term, then compare a lighter weekly plan with a more intensive schedule.</p></div>
          <div className="flex flex-wrap justify-center gap-2 p-1.5 rounded-full bg-white">
            {termNames.map((term, index) => <button key={term} type="button" onClick={() => setActiveTerm(index)} className={`px-5 py-2.5 rounded-full font-semibold transition-colors ${activeTerm === index ? 'bg-royal-purple text-white' : 'text-on-surface-variant hover:bg-soft-gray'}`}>{term}</button>)}
          </div>
          <div className="flex flex-wrap justify-center gap-2 text-sm text-on-surface-variant"><span className="px-3 py-1 rounded-full bg-white">1 day/week · steady pace</span><span className="px-3 py-1 rounded-full bg-white">2–3 days/week · guided practice</span><span className="px-3 py-1 rounded-full bg-white">5 days/week · intensive mastery</span></div>
        </div>
      </section>

      <section className="py-12" aria-label={`${termNames[activeTerm]} weekly curriculum`}>
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop space-y-8">
          {units.map((unit, unitIndex) => (
            <article key={unit.title} className="bg-white rounded-2xl p-5 md:p-8 shadow-sm border border-outline-variant/30">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5"><div><span className="text-sm text-royal-purple font-bold">Unit {unitIndex + 1} · {termNames[activeTerm]}</span><h3 className="text-xl md:text-2xl font-bold text-charcoal mt-1">{unit.title}</h3></div><span className="text-sm px-3 py-1 rounded-full bg-soft-gray text-on-surface-variant">{subject} strand</span></div>
              <div className="overflow-x-auto"><table className="w-full min-w-[760px] text-left"><thead><tr className="bg-surface-container-low text-charcoal"><th className="py-3 px-4 rounded-l-lg">Week</th><th className="py-3 px-4">1 day / wk</th><th className="py-3 px-4">2 days / wk</th><th className="py-3 px-4">3 days / wk</th><th className="py-3 px-4 rounded-r-lg">5 days / wk</th></tr></thead><tbody className="divide-y divide-outline-variant/30 text-sm text-on-surface-variant">{unit.rows.map((row) => <tr key={row.week}><td className="py-4 px-4 font-semibold text-charcoal">{row.week}</td><td className="py-4 px-4">{row.one}</td><td className="py-4 px-4 whitespace-pre-line">{row.two}</td><td className="py-4 px-4 whitespace-pre-line">{row.three}</td><td className="py-4 px-4 whitespace-pre-line">{row.five}</td></tr>)}</tbody></table></div>
            </article>
          ))}
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-surface-container-low">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="text-center max-w-2xl mx-auto mb-10"><span className="text-sm uppercase tracking-wide text-royal-purple font-bold">The learning framework</span><h2 className="text-3xl font-bold text-charcoal mt-2">Anatomy of a focused lesson</h2><p className="text-on-surface-variant mt-3">Each session moves from a clear question to guided exploration and a check for understanding.</p></div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Brain, time: '10 minutes', title: 'Wonder and question', text: `Start with a real-world ${subject.toLowerCase()} question and connect it to what the student already knows.` },
              { icon: PenTool, time: '25 minutes', title: 'Explore together', text: 'Work through examples, diagrams, investigations or writing with tutor guidance and student participation.' },
              { icon: BadgeCheck, time: '10 minutes', title: 'Check for mastery', text: 'Use a short practice task to identify what is secure and what should come next.' },
            ].map(({ icon: Icon, time, title, text }) => <article key={title} className="bg-white rounded-2xl p-7 shadow-sm"><Icon className="text-royal-purple mb-4" size={28} /><p className="text-sm text-secondary font-bold">{time}</p><h3 className="text-xl font-bold text-charcoal mt-2 mb-3">{title}</h3><p className="text-on-surface-variant">{text}</p></article>)}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="text-center max-w-2xl mx-auto mb-10"><span className="text-sm uppercase tracking-wide text-royal-purple font-bold">Student learning toolkit</span><h2 className="text-3xl font-bold text-charcoal mt-2">Resources for Year {year} {subject}</h2></div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: PlayCircle, title: 'Concept lessons', text: `Short explanations of key Year ${year} ${subject.toLowerCase()} ideas.` },
              { icon: FileText, title: 'Practice materials', text: 'Guided questions and independent practice matched to the weekly focus.' },
              { icon: FlaskConical, title: 'Applied activities', text: 'Hands-on tasks, worked examples or text analysis to make learning stick.' },
              { icon: MailCheck, title: 'Progress notes', text: 'A clear record of strengths, next steps and topics to revisit.' },
            ].map(({ icon: Icon, title, text }) => <article key={title} className="bg-white p-5 md:p-6 rounded-xl border border-outline-variant/30"><Icon className="text-royal-purple mb-4" size={26} /><h3 className="font-bold text-charcoal mb-2">{title}</h3><p className="text-sm text-on-surface-variant">{text}</p></article>)}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-surface-container-low" id="book-trial">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="bg-white rounded-3xl p-7 md:p-12 shadow-sm grid lg:grid-cols-2 gap-10">
            <div><span className="inline-flex items-center gap-2 text-secondary font-semibold"><Check size={18} /> Free first lesson</span><h2 className="text-3xl md:text-4xl font-bold text-charcoal mt-4 mb-4">Build a plan for Year {year} {subject}</h2><p className="text-on-surface-variant mb-6">Tell us where the student is up to and we’ll shape the first session around their goals, schoolwork and preferred pace.</p><ul className="space-y-3 text-on-surface-variant"><li className="flex gap-2"><CheckCircle2 className="text-secondary shrink-0" size={20} />No credit card required</li><li className="flex gap-2"><CheckCircle2 className="text-secondary shrink-0" size={20} />A one-to-one session with a subject tutor</li><li className="flex gap-2"><CheckCircle2 className="text-secondary shrink-0" size={20} />A recommended next-step study plan</li></ul></div>
            <FreeTrialForm />
          </div>
        </div>
      </section>
    </main>
  );
}


const YEARS: Record<string, number> = {
  one: 1, two: 2, three: 3, four: 4, five: 5, six: 6,
  seven: 7, eight: 8, nine: 9, ten: 10, eleven: 11, twelve: 12,
};

export default function SubjectLessonArchivePage() {
  const { lessonSlug } = useParams<{ lessonSlug: string }>();
  const yearWord = lessonSlug.match(/^lesson-plan-for-year-(.+)$/)?.[1];
  const year = yearWord ? YEARS[yearWord] : undefined;
  if (!year) return null;
  return <CurriculumLessonPlan region="Australian" subject="Physics" year={year} />;
}