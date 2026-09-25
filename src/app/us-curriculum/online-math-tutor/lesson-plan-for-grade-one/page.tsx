'use client';
import { useState } from 'react';
import { BadgeCheck, Brain, Check, CheckCircle2, FileText, FlaskConical, MailCheck, PenTool, PlayCircle } from 'lucide-react';
import { FreeTrialForm } from '@/components/FreeTrial';

const subject = 'Math';
const grade = 1;
const topics = ["Number sense and place value", "Addition, subtraction and multiplication", "Fractions, measurement and geometry", "Patterns, data and problem solving"];
const terms = ['Quarter 1 · Sep–Nov', 'Quarter 2 · Dec–Feb', 'Quarter 3 · Mar–May', 'Quarter 4 · Jun–Aug'];

/* ────────── Full-year pacing guide data ────────── */

type WeekRow = { week: string; topic: string; one: string; two: string; three: string; five: string };
type MonthUnit = { month: string; chapterLabel: string; rows: WeekRow[] };

const pacingGuide: Record<number, MonthUnit[]> = {
  /* ── Quarter 1: Sep – Nov ── */
  0: [
    {
      month: 'September', chapterLabel: 'Number Charts & Counting',
      rows: [
        { week: 'September 1st week', topic: 'Number Charts & Counting', one: 'Number Charts & Counting\n1: Counting to 100', two: 'Number Charts & Counting\n1: Counting to 100\n2: Using Number Charts', three: 'Number Charts & Counting\n1: Counting to 100\n2: Using Number Charts\n3: Skip Counting', five: 'Number Charts & Counting\n1: Counting to 100\n2: Using Number Charts\n3: Skip Counting\n4: Chapter Review & Quiz' },
        { week: 'September 2nd week', topic: 'Number Charts & Counting', one: 'Number Charts & Counting\n2: Using Number Charts', two: 'Number Charts & Counting\n3: Skip Counting\n4: Chapter Review & Quiz', three: 'Number Charts & Counting\n4: Chapter Review & Quiz', five: 'R: Cumulative Review Worksheets & Quiz' },
        { week: 'September 3rd week', topic: 'Number Charts & Counting', one: 'Number Charts & Counting\n3: Skip Counting', two: 'R: Cumulative Review Worksheets & Quiz', three: 'R: Cumulative Review Worksheets & Quiz', five: 'E: Enrichment Activities & Cumulative Practice' },
        { week: 'September 4th week', topic: 'Number Charts & Counting', one: 'Number Charts & Counting\n4: Chapter Review & Quiz', two: 'E: Enrichment Activities & Cumulative Practice', three: 'E: Enrichment Activities & Cumulative Practice', five: 'E: Enrichment Activities & Cumulative Practice' },
      ],
    },
    {
      month: 'October', chapterLabel: 'Number Patterns',
      rows: [
        { week: 'October 1st week', topic: 'Number Patterns', one: 'Number Patterns\n1: Identifying Number Patterns', two: 'Number Patterns\n1: Identifying Number Patterns\n2: Extending Number Patterns', three: 'Number Patterns\n1: Identifying Number Patterns\n2: Extending Number Patterns\n3: Chapter Review & Quiz', five: 'Number Patterns\n1: Identifying Number Patterns\n2: Extending Number Patterns\n3: Chapter Review & Quiz' },
        { week: 'October 2nd week', topic: 'Number Patterns', one: 'Number Patterns\n2: Extending Number Patterns', two: 'Number Patterns\n3: Chapter Review & Quiz', three: 'R: Cumulative Review Worksheets & Quiz', five: 'R: Cumulative Review Worksheets & Quiz' },
        { week: 'October 3rd week', topic: 'Number Patterns', one: 'Number Patterns\n3: Chapter Review & Quiz', two: 'R: Cumulative Review Worksheets & Quiz', three: 'E: Enrichment Activities & Cumulative Practice', five: 'E: Enrichment Activities & Cumulative Practice' },
        { week: 'October 4th week', topic: 'Number Patterns', one: 'R: Cumulative Review Worksheets & Quiz', two: 'E: Enrichment Activities & Cumulative Practice', three: 'E: Enrichment Activities & Cumulative Practice', five: 'E: Enrichment Activities & Cumulative Practice' },
      ],
    },
    {
      month: 'November', chapterLabel: 'Comparing Numbers',
      rows: [
        { week: 'November 1st week', topic: 'Comparing Numbers', one: 'Comparing Numbers\n1: Comparing Numbers Using Greater Than and Less Than', two: 'Comparing Numbers\n1: Comparing Numbers Using Greater Than and Less Than\n2: Ordering Numbers', three: 'Comparing Numbers\n1: Comparing Numbers Using Greater Than and Less Than\n2: Ordering Numbers\n3: Chapter Review & Quiz', five: 'Comparing Numbers\n1: Comparing Numbers Using Greater Than and Less Than\n2: Ordering Numbers\n3: Chapter Review & Quiz' },
        { week: 'November 2nd week', topic: 'Comparing Numbers', one: 'Comparing Numbers\n2: Ordering Numbers', two: 'Comparing Numbers\n3: Chapter Review & Quiz', three: 'R: Cumulative Review Worksheets & Quiz', five: 'R: Cumulative Review Worksheets & Quiz' },
        { week: 'November 3rd week', topic: 'Comparing Numbers', one: 'Comparing Numbers\n3: Chapter Review & Quiz', two: 'R: Cumulative Review Worksheets & Quiz', three: 'E: Enrichment Activities & Cumulative Practice', five: 'E: Enrichment Activities & Cumulative Practice' },
        { week: 'November 4th week', topic: 'Comparing Numbers', one: 'R: Cumulative Review Worksheets & Quiz', two: 'E: Enrichment Activities & Cumulative Practice', three: 'E: Enrichment Activities & Cumulative Practice', five: 'E: Enrichment Activities & Cumulative Practice' },
      ],
    },
  ],

  /* ── Quarter 2: Dec – Feb ── */
  1: [
    {
      month: 'December', chapterLabel: 'Base 10 Blocks & Place Value',
      rows: [
        { week: 'December 1st week', topic: 'Base 10 Blocks & Place Value', one: 'Base 10 Blocks\n1: Representing Numbers with Base 10 Blocks', two: 'Base 10 Blocks\n1: Representing Numbers with Base 10 Blocks\n2: Tens and Ones', three: 'Base 10 Blocks\n1: Representing Numbers with Base 10 Blocks\n2: Tens and Ones\n3: Chapter Review & Quiz', five: 'Base 10 Blocks\n1: Representing Numbers with Base 10 Blocks\n2: Tens and Ones\n3: Chapter Review & Quiz\nPlace Value\n1: Understanding Place Value\n2: Reading and Writing Two-Digit Numbers' },
        { week: 'December 2nd week', topic: 'Base 10 Blocks & Place Value', one: 'Base 10 Blocks\n2: Tens and Ones', two: 'Base 10 Blocks\n3: Chapter Review & Quiz\nPlace Value\n1: Understanding Place Value', three: 'Place Value\n1: Understanding Place Value\n2: Reading and Writing Two-Digit Numbers\n3: Chapter Review & Quiz', five: 'Place Value\n3: Chapter Review & Quiz' },
        { week: 'December 3rd week', topic: 'Base 10 Blocks & Place Value', one: 'Base 10 Blocks\n3: Chapter Review & Quiz', two: 'Place Value\n2: Reading and Writing Two-Digit Numbers\n3: Chapter Review & Quiz', three: 'R: Cumulative Review Worksheets & Quiz', five: 'R: Cumulative Review Worksheets & Quiz' },
        { week: 'December 4th week', topic: 'Base 10 Blocks & Place Value', one: 'Place Value\n1: Understanding Place Value', two: 'R: Cumulative Review Worksheets & Quiz', three: 'E: Enrichment Activities & Cumulative Practice', five: 'E: Enrichment Activities & Cumulative Practice' },
      ],
    },
    {
      month: 'January', chapterLabel: 'Addition',
      rows: [
        { week: 'January 1st week', topic: 'Addition', one: 'Addition\n1: Addition Facts to 10', two: 'Addition\n1: Addition Facts to 10\n2: Addition Facts to 20', three: 'Addition\n1: Addition Facts to 10\n2: Addition Facts to 20\n3: Adding Two-Digit Numbers', five: 'Addition\n1: Addition Facts to 10\n2: Addition Facts to 20\n3: Adding Two-Digit Numbers\n4: Chapter Review & Quiz' },
        { week: 'January 2nd week', topic: 'Addition', one: 'Addition\n2: Addition Facts to 20', two: 'Addition\n3: Adding Two-Digit Numbers\n4: Chapter Review & Quiz', three: 'Addition\n4: Chapter Review & Quiz', five: 'R: Cumulative Review Worksheets & Quiz' },
        { week: 'January 3rd week', topic: 'Addition', one: 'Addition\n3: Adding Two-Digit Numbers', two: 'R: Cumulative Review Worksheets & Quiz', three: 'R: Cumulative Review Worksheets & Quiz', five: 'E: Enrichment Activities & Cumulative Practice' },
        { week: 'January 4th week', topic: 'Addition', one: 'Addition\n4: Chapter Review & Quiz', two: 'E: Enrichment Activities & Cumulative Practice', three: 'E: Enrichment Activities & Cumulative Practice', five: 'E: Enrichment Activities & Cumulative Practice' },
      ],
    },
    {
      month: 'February', chapterLabel: 'Subtraction',
      rows: [
        { week: 'February 1st week', topic: 'Subtraction', one: 'Subtraction\n1: Subtraction Facts to 10', two: 'Subtraction\n1: Subtraction Facts to 10\n2: Subtraction Facts to 20', three: 'Subtraction\n1: Subtraction Facts to 10\n2: Subtraction Facts to 20\n3: Subtracting Two-Digit Numbers', five: 'Subtraction\n1: Subtraction Facts to 10\n2: Subtraction Facts to 20\n3: Subtracting Two-Digit Numbers\n4: Chapter Review & Quiz' },
        { week: 'February 2nd week', topic: 'Subtraction', one: 'Subtraction\n2: Subtraction Facts to 20', two: 'Subtraction\n3: Subtracting Two-Digit Numbers\n4: Chapter Review & Quiz', three: 'Subtraction\n4: Chapter Review & Quiz', five: 'R: Cumulative Review Worksheets & Quiz' },
        { week: 'February 3rd week', topic: 'Subtraction', one: 'Subtraction\n3: Subtracting Two-Digit Numbers', two: 'R: Cumulative Review Worksheets & Quiz', three: 'R: Cumulative Review Worksheets & Quiz', five: 'E: Enrichment Activities & Cumulative Practice' },
        { week: 'February 4th week', topic: 'Subtraction', one: 'Subtraction\n4: Chapter Review & Quiz', two: 'E: Enrichment Activities & Cumulative Practice', three: 'E: Enrichment Activities & Cumulative Practice', five: 'E: Enrichment Activities & Cumulative Practice' },
      ],
    },
  ],

  /* ── Quarter 3: Mar – May ── */
  2: [
    {
      month: 'March', chapterLabel: 'Fractions',
      rows: [
        { week: 'March 1st week', topic: 'Fractions', one: 'Fractions\n1: Understanding Halves and Fourths', two: 'Fractions\n1: Understanding Halves and Fourths\n2: Equal Parts of a Whole', three: 'Fractions\n1: Understanding Halves and Fourths\n2: Equal Parts of a Whole\n3: Chapter Review & Quiz', five: 'Fractions\n1: Understanding Halves and Fourths\n2: Equal Parts of a Whole\n3: Chapter Review & Quiz' },
        { week: 'March 2nd week', topic: 'Fractions', one: 'Fractions\n2: Equal Parts of a Whole', two: 'Fractions\n3: Chapter Review & Quiz', three: 'R: Cumulative Review Worksheets & Quiz', five: 'R: Cumulative Review Worksheets & Quiz' },
        { week: 'March 3rd week', topic: 'Fractions', one: 'Fractions\n3: Chapter Review & Quiz', two: 'R: Cumulative Review Worksheets & Quiz', three: 'E: Enrichment Activities & Cumulative Practice', five: 'E: Enrichment Activities & Cumulative Practice' },
        { week: 'March 4th week', topic: 'Fractions', one: 'R: Cumulative Review Worksheets & Quiz', two: 'E: Enrichment Activities & Cumulative Practice', three: 'E: Enrichment Activities & Cumulative Practice', five: 'E: Enrichment Activities & Cumulative Practice' },
      ],
    },
    {
      month: 'April', chapterLabel: 'Measurement',
      rows: [
        { week: 'April 1st week', topic: 'Measurement', one: 'Measurement\n1: Comparing Length', two: 'Measurement\n1: Comparing Length\n2: Measuring with Non-standard Units', three: 'Measurement\n1: Comparing Length\n2: Measuring with Non-standard Units\n3: Chapter Review & Quiz', five: 'Measurement\n1: Comparing Length\n2: Measuring with Non-standard Units\n3: Chapter Review & Quiz' },
        { week: 'April 2nd week', topic: 'Measurement', one: 'Measurement\n2: Measuring with Non-standard Units', two: 'Measurement\n3: Chapter Review & Quiz', three: 'R: Cumulative Review Worksheets & Quiz', five: 'R: Cumulative Review Worksheets & Quiz' },
        { week: 'April 3rd week', topic: 'Measurement', one: 'Measurement\n3: Chapter Review & Quiz', two: 'R: Cumulative Review Worksheets & Quiz', three: 'E: Enrichment Activities & Cumulative Practice', five: 'E: Enrichment Activities & Cumulative Practice' },
        { week: 'April 4th week', topic: 'Measurement', one: 'R: Cumulative Review Worksheets & Quiz', two: 'E: Enrichment Activities & Cumulative Practice', three: 'E: Enrichment Activities & Cumulative Practice', five: 'E: Enrichment Activities & Cumulative Practice' },
      ],
    },
    {
      month: 'May', chapterLabel: 'Counting Money',
      rows: [
        { week: 'May 1st week', topic: 'Counting Money', one: 'Counting Money\n1: Identifying Coins', two: 'Counting Money\n1: Identifying Coins\n2: Counting Coins', three: 'Counting Money\n1: Identifying Coins\n2: Counting Coins\n3: Chapter Review & Quiz', five: 'Counting Money\n1: Identifying Coins\n2: Counting Coins\n3: Chapter Review & Quiz' },
        { week: 'May 2nd week', topic: 'Counting Money', one: 'Counting Money\n2: Counting Coins', two: 'Counting Money\n3: Chapter Review & Quiz', three: 'R: Cumulative Review Worksheets & Quiz', five: 'R: Cumulative Review Worksheets & Quiz' },
        { week: 'May 3rd week', topic: 'Counting Money', one: 'Counting Money\n3: Chapter Review & Quiz', two: 'R: Cumulative Review Worksheets & Quiz', three: 'E: Enrichment Activities & Cumulative Practice', five: 'E: Enrichment Activities & Cumulative Practice' },
        { week: 'May 4th week', topic: 'Counting Money', one: 'R: Cumulative Review Worksheets & Quiz', two: 'E: Enrichment Activities & Cumulative Practice', three: 'E: Enrichment Activities & Cumulative Practice', five: 'E: Enrichment Activities & Cumulative Practice' },
      ],
    },
  ],

  /* ── Quarter 4: Jun – Aug ── */
  3: [
    {
      month: 'June', chapterLabel: 'Telling Time',
      rows: [
        { week: 'June 1st week', topic: 'Telling Time', one: 'Telling Time\n1: Telling Time to the Hour', two: 'Telling Time\n1: Telling Time to the Hour\n2: Telling Time to the Half Hour', three: 'Telling Time\n1: Telling Time to the Hour\n2: Telling Time to the Half Hour\n3: Chapter Review & Quiz', five: 'Telling Time\n1: Telling Time to the Hour\n2: Telling Time to the Half Hour\n3: Chapter Review & Quiz' },
        { week: 'June 2nd week', topic: 'Telling Time', one: 'Telling Time\n2: Telling Time to the Half Hour', two: 'Telling Time\n3: Chapter Review & Quiz', three: 'R: Cumulative Review Worksheets & Quiz', five: 'R: Cumulative Review Worksheets & Quiz' },
        { week: 'June 3rd week', topic: 'Telling Time', one: 'Telling Time\n3: Chapter Review & Quiz', two: 'R: Cumulative Review Worksheets & Quiz', three: 'E: Enrichment Activities & Cumulative Practice', five: 'E: Enrichment Activities & Cumulative Practice' },
        { week: 'June 4th week', topic: 'Telling Time', one: 'R: Cumulative Review Worksheets & Quiz', two: 'E: Enrichment Activities & Cumulative Practice', three: 'E: Enrichment Activities & Cumulative Practice', five: 'E: Enrichment Activities & Cumulative Practice' },
      ],
    },
    {
      month: 'July', chapterLabel: 'Geometry & Data/Graphing',
      rows: [
        { week: 'July 1st week', topic: 'Geometry & Data/Graphing', one: 'Geometry\n1: Identifying 2-D Shapes', two: 'Geometry\n1: Identifying 2-D Shapes\n2: Identifying 3-D Shapes', three: 'Geometry\n1: Identifying 2-D Shapes\n2: Identifying 3-D Shapes\n3: Chapter Review & Quiz', five: 'Geometry\n1: Identifying 2-D Shapes\n2: Identifying 3-D Shapes\n3: Chapter Review & Quiz\nData & Graphing\n1: Reading Picture Graphs\n2: Making Picture Graphs' },
        { week: 'July 2nd week', topic: 'Geometry & Data/Graphing', one: 'Geometry\n2: Identifying 3-D Shapes', two: 'Geometry\n3: Chapter Review & Quiz\nData & Graphing\n1: Reading Picture Graphs', three: 'Data & Graphing\n1: Reading Picture Graphs\n2: Making Picture Graphs\n3: Chapter Review & Quiz', five: 'Data & Graphing\n3: Chapter Review & Quiz' },
        { week: 'July 3rd week', topic: 'Geometry & Data/Graphing', one: 'Geometry\n3: Chapter Review & Quiz', two: 'Data & Graphing\n2: Making Picture Graphs\n3: Chapter Review & Quiz', three: 'R: Cumulative Review Worksheets & Quiz', five: 'R: Cumulative Review Worksheets & Quiz' },
        { week: 'July 4th week', topic: 'Geometry & Data/Graphing', one: 'Data & Graphing\n1: Reading Picture Graphs', two: 'R: Cumulative Review Worksheets & Quiz', three: 'E: Enrichment Activities & Cumulative Practice', five: 'E: Enrichment Activities & Cumulative Practice' },
      ],
    },
    {
      month: 'August', chapterLabel: 'Word Problems',
      rows: [
        { week: 'August 1st week', topic: 'Word Problems', one: 'Word Problems\n1: Addition Word Problems', two: 'Word Problems\n1: Addition Word Problems\n2: Subtraction Word Problems', three: 'Word Problems\n1: Addition Word Problems\n2: Subtraction Word Problems\n3: Chapter Review & Quiz', five: 'Word Problems\n1: Addition Word Problems\n2: Subtraction Word Problems\n3: Chapter Review & Quiz' },
        { week: 'August 2nd week', topic: 'Word Problems', one: 'Word Problems\n2: Subtraction Word Problems', two: 'Word Problems\n3: Chapter Review & Quiz', three: 'R: Cumulative Review Worksheets & Quiz', five: 'R: Cumulative Review Worksheets & Quiz' },
        { week: 'August 3rd week', topic: 'Word Problems', one: 'Word Problems\n3: Chapter Review & Quiz', two: 'R: Cumulative Review Worksheets & Quiz', three: 'E: Enrichment Activities & Cumulative Practice', five: 'E: Enrichment Activities & Cumulative Practice' },
        { week: 'August 4th week', topic: 'Word Problems', one: 'R: Cumulative Review Worksheets & Quiz', two: 'E: Enrichment Activities & Cumulative Practice', three: 'E: Enrichment Activities & Cumulative Practice', five: 'E: Enrichment Activities & Cumulative Practice' },
      ],
    },
  ],
};

export default function Page() {
  const [activeTerm, setActiveTerm] = useState(0);
  const band = grade <= 5 ? 'Elementary School' : grade <= 8 ? 'Middle School' : 'High School';
  const units = pacingGuide[activeTerm];

  return <main className="w-full bg-surface font-body-md text-on-surface">
    <section className="py-16 lg:py-24"><div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
      <div className="lg:col-span-7 space-y-6"><span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary-container/30 text-secondary font-semibold"><BadgeCheck size={18} /> US Curriculum · Grade {grade} {subject}</span><h1 className="text-4xl md:text-5xl font-bold text-charcoal">Grade {grade} {subject} Lesson Plan &amp; Curriculum Map</h1><p className="text-lg text-on-surface-variant max-w-2xl">A flexible learning roadmap for Grade {grade}, with clear topic progression, one-to-one lesson pacing, and practical ways to check understanding. Lessons can be adapted to your state standards and student goals.</p>
        <div className="flex flex-wrap gap-4"><a href="#curriculum-map" className="rounded-full px-7 py-3.5 bg-royal-purple text-white font-semibold">Explore lesson map</a><a href="#book-trial" className="rounded-full px-7 py-3.5 text-royal-purple bg-white font-semibold">Book a free trial</a></div><div className="grid grid-cols-3 gap-3 pt-3">{[['4', 'Quarters'], ['48', 'Weekly checkpoints'], ['1-on-1', 'Tutor support']].map(([v, l]) => <div key={l} className="bg-white p-4 rounded-xl"><strong className="block text-royal-purple text-xl">{v}</strong><span className="text-sm text-on-surface-variant">{l}</span></div>)}</div></div>
      <aside className="lg:col-span-5 rounded-3xl bg-white p-8 shadow-sm border border-outline-variant/30"><p className="text-sm uppercase tracking-wide text-royal-purple font-bold mb-3">Grade {grade} learning focus · {band}</p><h2 className="text-2xl font-bold text-charcoal mb-5">{topics[0]}</h2><ul className="space-y-4">{topics.slice(1).map(t => <li key={t} className="flex gap-3 text-on-surface-variant"><CheckCircle2 size={20} className="text-royal-purple shrink-0" />{t}</li>)}</ul></aside>
    </div></section>
    <section className="py-12 bg-surface-container-low" id="curriculum-map"><div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop flex flex-col items-center gap-7"><div className="text-center max-w-2xl"><span className="text-sm uppercase tracking-wide text-royal-purple font-bold">Interactive curriculum browser</span><h2 className="text-3xl font-bold text-charcoal mt-2">Grade {grade} {subject} learning map</h2><p className="text-on-surface-variant mt-3">Choose a quarter, then compare a lighter weekly plan with a more intensive schedule.</p></div><div className="flex flex-wrap justify-center gap-2 p-1.5 rounded-full bg-white">{terms.map((term, i) => <button key={term} onClick={() => setActiveTerm(i)} type="button" className={`px-5 py-2.5 rounded-full font-semibold ${activeTerm === i ? 'bg-royal-purple text-white' : 'text-on-surface-variant hover:bg-soft-gray'}`}>{term}</button>)}</div><div className="flex flex-wrap justify-center gap-2 text-sm text-on-surface-variant"><span className="px-3 py-1 rounded-full bg-white">1 day/week · steady pace</span><span className="px-3 py-1 rounded-full bg-white">2–3 days/week · guided practice</span><span className="px-3 py-1 rounded-full bg-white">5 days/week · intensive mastery</span></div></div></section>
    <section className="py-12" aria-label={`${terms[activeTerm]} weekly curriculum`}><div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop space-y-8">{units.map((unit, ui) => <article key={unit.month} className="bg-white rounded-2xl p-5 md:p-8 shadow-sm border border-outline-variant/30"><div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5"><div><span className="text-sm text-royal-purple font-bold">{unit.month} · {unit.chapterLabel}</span><h3 className="text-xl md:text-2xl font-bold text-charcoal mt-1">Grade {grade} {subject} — Pacing Guide — {unit.month}</h3></div><span className="text-sm px-3 py-1 rounded-full bg-soft-gray text-on-surface-variant">USA Curriculum</span></div><div className="overflow-x-auto"><table className="w-full min-w-[760px] text-left"><thead><tr className="bg-surface-container-low text-charcoal"><th className="py-3 px-4">Week</th><th className="py-3 px-4">1 Day/Week</th><th className="py-3 px-4">2 Day/Week</th><th className="py-3 px-4">3 Day/Week</th><th className="py-3 px-4">5 Day/Week</th></tr></thead><tbody className="divide-y divide-outline-variant/30 text-sm text-on-surface-variant">{unit.rows.map(r => <tr key={r.week}><td className="py-4 px-4 font-semibold text-charcoal whitespace-nowrap">{r.week}<br /><span className="text-xs font-normal text-on-surface-variant">({r.topic})</span></td><td className="py-4 px-4 whitespace-pre-line">{r.one}</td><td className="py-4 px-4 whitespace-pre-line">{r.two}</td><td className="py-4 px-4 whitespace-pre-line">{r.three}</td><td className="py-4 px-4 whitespace-pre-line">{r.five}</td></tr>)}</tbody></table></div></article>)}</div></section>
    <section className="py-16 lg:py-20 bg-surface-container-low"><div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop"><div className="text-center max-w-2xl mx-auto mb-10"><span className="text-sm uppercase tracking-wide text-royal-purple font-bold">The learning framework</span><h2 className="text-3xl font-bold text-charcoal mt-2">Anatomy of a focused lesson</h2><p className="text-on-surface-variant mt-3">Each session moves from a clear question to guided exploration and a check for understanding.</p></div><div className="grid md:grid-cols-3 gap-6">{[{ icon: Brain, time: '10 minutes', title: 'Wonder and question', text: `Start with a real-world ${subject.toLowerCase()} question and connect it to what the student already knows.` }, { icon: PenTool, time: '25 minutes', title: 'Explore together', text: 'Work through examples, diagrams, investigations, or writing with tutor guidance and student participation.' }, { icon: BadgeCheck, time: '10 minutes', title: 'Check for mastery', text: 'Use a short practice task to identify what is secure and what should come next.' }].map(({ icon: Icon, time, title, text }) => <article key={title} className="bg-white rounded-2xl p-7 shadow-sm"><Icon className="text-royal-purple mb-4" size={28} /><p className="text-sm text-secondary font-bold">{time}</p><h3 className="text-xl font-bold text-charcoal mt-2 mb-3">{title}</h3><p className="text-on-surface-variant">{text}</p></article>)}</div></div></section>
    <section className="py-16"><div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop"><div className="text-center max-w-2xl mx-auto mb-10"><span className="text-sm uppercase tracking-wide text-royal-purple font-bold">Student learning toolkit</span><h2 className="text-3xl font-bold text-charcoal mt-2">Resources for Grade {grade} {subject}</h2></div><div className="grid grid-cols-2 lg:grid-cols-4 gap-4">{[{ icon: PlayCircle, title: 'Concept lessons', text: `Short explanations of key Grade ${grade} ${subject.toLowerCase()} ideas.` }, { icon: FileText, title: 'Practice materials', text: 'Guided questions and independent practice matched to the weekly focus.' }, { icon: FlaskConical, title: 'Applied activities', text: 'Hands-on tasks, worked examples, or text analysis to make learning stick.' }, { icon: MailCheck, title: 'Progress notes', text: 'A clear record of strengths, next steps, and topics to revisit.' }].map(({ icon: Icon, title, text }) => <article key={title} className="bg-white p-5 md:p-6 rounded-xl border border-outline-variant/30"><Icon className="text-royal-purple mb-4" size={26} /><h3 className="font-bold text-charcoal mb-2">{title}</h3><p className="text-sm text-on-surface-variant">{text}</p></article>)}</div></div></section>
    <section className="py-16 lg:py-20 bg-surface-container-low" id="book-trial"><div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop"><div className="bg-white rounded-3xl p-7 md:p-12 shadow-sm grid lg:grid-cols-2 gap-10"><div><span className="inline-flex items-center gap-2 text-secondary font-semibold"><Check size={18} /> Free first lesson</span><h2 className="text-3xl md:text-4xl font-bold text-charcoal mt-4 mb-4">Build a plan for Grade {grade} {subject}</h2><p className="text-on-surface-variant mb-6">Tell us where the student is up to and we'll shape the first session around their goals, schoolwork, and preferred pace.</p><ul className="space-y-3 text-on-surface-variant"><li className="flex gap-2"><CheckCircle2 className="text-secondary shrink-0" size={20} />No credit card required</li><li className="flex gap-2"><CheckCircle2 className="text-secondary shrink-0" size={20} />A one-to-one session with a subject tutor</li><li className="flex gap-2"><CheckCircle2 className="text-secondary shrink-0" size={20} />A recommended next-step study plan</li></ul></div><FreeTrialForm /></div></div></section>
  </main>;
}
