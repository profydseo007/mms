'use client';
import { useState } from 'react';
import { BadgeCheck, Brain, Check, CheckCircle2, FileText, FlaskConical, MailCheck, PenTool, PlayCircle } from 'lucide-react';
import { FreeTrialForm } from '@/components/FreeTrial';

const subject = 'Math';
const grade = 2;
const topics = ["Number sense and place value", "Addition, subtraction and multiplication", "Fractions, measurement and geometry", "Patterns, data and problem solving"];
const terms = ['Quarter 1 · Sep–Nov', 'Quarter 2 · Dec–Feb', 'Quarter 3 · Mar–May', 'Quarter 4 · Jun–Aug'];

/* ────────── Full-year pacing guide data ────────── */

type WeekRow = { week: string; topic: string; one: string; two: string; three: string; five: string };
type MonthUnit = { month: string; chapterLabel: string; rows: WeekRow[] };

const pacingGuide: Record<number, MonthUnit[]> = {
  /* ── Quarter 1: Sep – Nov ── */
  0: [
    {
      month: 'September', chapterLabel: 'Skip Counting',
      rows: [
        { week: 'September 1st week', topic: 'Skip Counting', one: 'Skip Counting\n1: Skip Counting by 2s and 5s', two: 'Skip Counting\n1: Skip Counting by 2s and 5s\n2: Skip Counting by 10s', three: 'Skip Counting\n1: Skip Counting by 2s and 5s\n2: Skip Counting by 10s\n3: Chapter Review & Quiz', five: 'Skip Counting\n1: Skip Counting by 2s and 5s\n2: Skip Counting by 10s\n3: Chapter Review & Quiz' },
        { week: 'September 2nd week', topic: 'Skip Counting', one: 'Skip Counting\n2: Skip Counting by 10s', two: 'Skip Counting\n3: Chapter Review & Quiz', three: 'R: Cumulative Review Worksheets & Quiz', five: 'R: Cumulative Review Worksheets & Quiz' },
        { week: 'September 3rd week', topic: 'Skip Counting', one: 'Skip Counting\n3: Chapter Review & Quiz', two: 'R: Cumulative Review Worksheets & Quiz', three: 'E: Enrichment Activities & Cumulative Practice', five: 'E: Enrichment Activities & Cumulative Practice' },
        { week: 'September 4th week', topic: 'Skip Counting', one: 'R: Cumulative Review Worksheets & Quiz', two: 'E: Enrichment Activities & Cumulative Practice', three: 'E: Enrichment Activities & Cumulative Practice', five: 'E: Enrichment Activities & Cumulative Practice' },
      ],
    },
    {
      month: 'October', chapterLabel: 'Place Value & Rounding',
      rows: [
        { week: 'October 1st week', topic: 'Place Value & Rounding', one: 'Place Value & Rounding\n1: Place Value to Hundreds', two: 'Place Value & Rounding\n1: Place Value to Hundreds\n2: Expanded Form', three: 'Place Value & Rounding\n1: Place Value to Hundreds\n2: Expanded Form\n3: Rounding to the Nearest Ten', five: 'Place Value & Rounding\n1: Place Value to Hundreds\n2: Expanded Form\n3: Rounding to the Nearest Ten\n4: Chapter Review & Quiz' },
        { week: 'October 2nd week', topic: 'Place Value & Rounding', one: 'Place Value & Rounding\n2: Expanded Form', two: 'Place Value & Rounding\n3: Rounding to the Nearest Ten\n4: Chapter Review & Quiz', three: 'Place Value & Rounding\n4: Chapter Review & Quiz', five: 'R: Cumulative Review Worksheets & Quiz' },
        { week: 'October 3rd week', topic: 'Place Value & Rounding', one: 'Place Value & Rounding\n3: Rounding to the Nearest Ten', two: 'R: Cumulative Review Worksheets & Quiz', three: 'R: Cumulative Review Worksheets & Quiz', five: 'E: Enrichment Activities & Cumulative Practice' },
        { week: 'October 4th week', topic: 'Place Value & Rounding', one: 'Place Value & Rounding\n4: Chapter Review & Quiz', two: 'E: Enrichment Activities & Cumulative Practice', three: 'E: Enrichment Activities & Cumulative Practice', five: 'E: Enrichment Activities & Cumulative Practice' },
      ],
    },
    {
      month: 'November', chapterLabel: 'Addition',
      rows: [
        { week: 'November 1st week', topic: 'Addition', one: 'Addition\n1: Addition Facts to 20', two: 'Addition\n1: Addition Facts to 20\n2: Adding Two-Digit Numbers', three: 'Addition\n1: Addition Facts to 20\n2: Adding Two-Digit Numbers\n3: Adding Three-Digit Numbers', five: 'Addition\n1: Addition Facts to 20\n2: Adding Two-Digit Numbers\n3: Adding Three-Digit Numbers\n4: Chapter Review & Quiz' },
        { week: 'November 2nd week', topic: 'Addition', one: 'Addition\n2: Adding Two-Digit Numbers', two: 'Addition\n3: Adding Three-Digit Numbers\n4: Chapter Review & Quiz', three: 'Addition\n4: Chapter Review & Quiz', five: 'R: Cumulative Review Worksheets & Quiz' },
        { week: 'November 3rd week', topic: 'Addition', one: 'Addition\n3: Adding Three-Digit Numbers', two: 'R: Cumulative Review Worksheets & Quiz', three: 'R: Cumulative Review Worksheets & Quiz', five: 'E: Enrichment Activities & Cumulative Practice' },
        { week: 'November 4th week', topic: 'Addition', one: 'Addition\n4: Chapter Review & Quiz', two: 'E: Enrichment Activities & Cumulative Practice', three: 'E: Enrichment Activities & Cumulative Practice', five: 'E: Enrichment Activities & Cumulative Practice' },
      ],
    },
  ],

  /* ── Quarter 2: Dec – Feb ── */
  1: [
    {
      month: 'December', chapterLabel: 'Subtraction',
      rows: [
        { week: 'December 1st week', topic: 'Subtraction', one: 'Subtraction\n1: Subtraction Facts to 20', two: 'Subtraction\n1: Subtraction Facts to 20\n2: Subtracting Two-Digit Numbers', three: 'Subtraction\n1: Subtraction Facts to 20\n2: Subtracting Two-Digit Numbers\n3: Subtracting Three-Digit Numbers', five: 'Subtraction\n1: Subtraction Facts to 20\n2: Subtracting Two-Digit Numbers\n3: Subtracting Three-Digit Numbers\n4: Chapter Review & Quiz' },
        { week: 'December 2nd week', topic: 'Subtraction', one: 'Subtraction\n2: Subtracting Two-Digit Numbers', two: 'Subtraction\n3: Subtracting Three-Digit Numbers\n4: Chapter Review & Quiz', three: 'Subtraction\n4: Chapter Review & Quiz', five: 'R: Cumulative Review Worksheets & Quiz' },
        { week: 'December 3rd week', topic: 'Subtraction', one: 'Subtraction\n3: Subtracting Three-Digit Numbers', two: 'R: Cumulative Review Worksheets & Quiz', three: 'R: Cumulative Review Worksheets & Quiz', five: 'E: Enrichment Activities & Cumulative Practice' },
        { week: 'December 4th week', topic: 'Subtraction', one: 'Subtraction\n4: Chapter Review & Quiz', two: 'E: Enrichment Activities & Cumulative Practice', three: 'E: Enrichment Activities & Cumulative Practice', five: 'E: Enrichment Activities & Cumulative Practice' },
      ],
    },
    {
      month: 'January', chapterLabel: 'Multiplication',
      rows: [
        { week: 'January 1st week', topic: 'Multiplication', one: 'Multiplication\n1: Understanding Multiplication as Repeated Addition', two: 'Multiplication\n1: Understanding Multiplication as Repeated Addition\n2: Multiplication Facts', three: 'Multiplication\n1: Understanding Multiplication as Repeated Addition\n2: Multiplication Facts\n3: Chapter Review & Quiz', five: 'Multiplication\n1: Understanding Multiplication as Repeated Addition\n2: Multiplication Facts\n3: Chapter Review & Quiz' },
        { week: 'January 2nd week', topic: 'Multiplication', one: 'Multiplication\n2: Multiplication Facts', two: 'Multiplication\n3: Chapter Review & Quiz', three: 'R: Cumulative Review Worksheets & Quiz', five: 'R: Cumulative Review Worksheets & Quiz' },
        { week: 'January 3rd week', topic: 'Multiplication', one: 'Multiplication\n3: Chapter Review & Quiz', two: 'R: Cumulative Review Worksheets & Quiz', three: 'E: Enrichment Activities & Cumulative Practice', five: 'E: Enrichment Activities & Cumulative Practice' },
        { week: 'January 4th week', topic: 'Multiplication', one: 'R: Cumulative Review Worksheets & Quiz', two: 'E: Enrichment Activities & Cumulative Practice', three: 'E: Enrichment Activities & Cumulative Practice', five: 'E: Enrichment Activities & Cumulative Practice' },
      ],
    },
    {
      month: 'February', chapterLabel: 'Fractions',
      rows: [
        { week: 'February 1st week', topic: 'Fractions', one: 'Fractions\n1: Understanding Halves, Thirds, and Fourths', two: 'Fractions\n1: Understanding Halves, Thirds, and Fourths\n2: Comparing Fractions', three: 'Fractions\n1: Understanding Halves, Thirds, and Fourths\n2: Comparing Fractions\n3: Chapter Review & Quiz', five: 'Fractions\n1: Understanding Halves, Thirds, and Fourths\n2: Comparing Fractions\n3: Chapter Review & Quiz' },
        { week: 'February 2nd week', topic: 'Fractions', one: 'Fractions\n2: Comparing Fractions', two: 'Fractions\n3: Chapter Review & Quiz', three: 'R: Cumulative Review Worksheets & Quiz', five: 'R: Cumulative Review Worksheets & Quiz' },
        { week: 'February 3rd week', topic: 'Fractions', one: 'Fractions\n3: Chapter Review & Quiz', two: 'R: Cumulative Review Worksheets & Quiz', three: 'E: Enrichment Activities & Cumulative Practice', five: 'E: Enrichment Activities & Cumulative Practice' },
        { week: 'February 4th week', topic: 'Fractions', one: 'R: Cumulative Review Worksheets & Quiz', two: 'E: Enrichment Activities & Cumulative Practice', three: 'E: Enrichment Activities & Cumulative Practice', five: 'E: Enrichment Activities & Cumulative Practice' },
      ],
    },
  ],

  /* ── Quarter 3: Mar – May ── */
  2: [
    {
      month: 'March', chapterLabel: 'Measurement',
      rows: [
        { week: 'March 1st week', topic: 'Measurement', one: 'Measurement\n1: Measuring Length in Inches and Centimetres', two: 'Measurement\n1: Measuring Length in Inches and Centimetres\n2: Estimating Length', three: 'Measurement\n1: Measuring Length in Inches and Centimetres\n2: Estimating Length\n3: Chapter Review & Quiz', five: 'Measurement\n1: Measuring Length in Inches and Centimetres\n2: Estimating Length\n3: Chapter Review & Quiz' },
        { week: 'March 2nd week', topic: 'Measurement', one: 'Measurement\n2: Estimating Length', two: 'Measurement\n3: Chapter Review & Quiz', three: 'R: Cumulative Review Worksheets & Quiz', five: 'R: Cumulative Review Worksheets & Quiz' },
        { week: 'March 3rd week', topic: 'Measurement', one: 'Measurement\n3: Chapter Review & Quiz', two: 'R: Cumulative Review Worksheets & Quiz', three: 'E: Enrichment Activities & Cumulative Practice', five: 'E: Enrichment Activities & Cumulative Practice' },
        { week: 'March 4th week', topic: 'Measurement', one: 'R: Cumulative Review Worksheets & Quiz', two: 'E: Enrichment Activities & Cumulative Practice', three: 'E: Enrichment Activities & Cumulative Practice', five: 'E: Enrichment Activities & Cumulative Practice' },
      ],
    },
    {
      month: 'April', chapterLabel: 'Counting Money',
      rows: [
        { week: 'April 1st week', topic: 'Counting Money', one: 'Counting Money\n1: Identifying Coins and Bills', two: 'Counting Money\n1: Identifying Coins and Bills\n2: Counting Mixed Coins', three: 'Counting Money\n1: Identifying Coins and Bills\n2: Counting Mixed Coins\n3: Making Change', five: 'Counting Money\n1: Identifying Coins and Bills\n2: Counting Mixed Coins\n3: Making Change\n4: Chapter Review & Quiz' },
        { week: 'April 2nd week', topic: 'Counting Money', one: 'Counting Money\n2: Counting Mixed Coins', two: 'Counting Money\n3: Making Change\n4: Chapter Review & Quiz', three: 'Counting Money\n4: Chapter Review & Quiz', five: 'R: Cumulative Review Worksheets & Quiz' },
        { week: 'April 3rd week', topic: 'Counting Money', one: 'Counting Money\n3: Making Change', two: 'R: Cumulative Review Worksheets & Quiz', three: 'R: Cumulative Review Worksheets & Quiz', five: 'E: Enrichment Activities & Cumulative Practice' },
        { week: 'April 4th week', topic: 'Counting Money', one: 'Counting Money\n4: Chapter Review & Quiz', two: 'E: Enrichment Activities & Cumulative Practice', three: 'E: Enrichment Activities & Cumulative Practice', five: 'E: Enrichment Activities & Cumulative Practice' },
      ],
    },
    {
      month: 'May', chapterLabel: 'Telling Time',
      rows: [
        { week: 'May 1st week', topic: 'Telling Time', one: 'Telling Time\n1: Telling Time to the Hour and Half Hour', two: 'Telling Time\n1: Telling Time to the Hour and Half Hour\n2: Telling Time to Five Minutes', three: 'Telling Time\n1: Telling Time to the Hour and Half Hour\n2: Telling Time to Five Minutes\n3: Chapter Review & Quiz', five: 'Telling Time\n1: Telling Time to the Hour and Half Hour\n2: Telling Time to Five Minutes\n3: Chapter Review & Quiz' },
        { week: 'May 2nd week', topic: 'Telling Time', one: 'Telling Time\n2: Telling Time to Five Minutes', two: 'Telling Time\n3: Chapter Review & Quiz', three: 'R: Cumulative Review Worksheets & Quiz', five: 'R: Cumulative Review Worksheets & Quiz' },
        { week: 'May 3rd week', topic: 'Telling Time', one: 'Telling Time\n3: Chapter Review & Quiz', two: 'R: Cumulative Review Worksheets & Quiz', three: 'E: Enrichment Activities & Cumulative Practice', five: 'E: Enrichment Activities & Cumulative Practice' },
        { week: 'May 4th week', topic: 'Telling Time', one: 'R: Cumulative Review Worksheets & Quiz', two: 'E: Enrichment Activities & Cumulative Practice', three: 'E: Enrichment Activities & Cumulative Practice', five: 'E: Enrichment Activities & Cumulative Practice' },
      ],
    },
  ],

  /* ── Quarter 4: Jun – Aug ── */
  3: [
    {
      month: 'June', chapterLabel: 'Geometry',
      rows: [
        { week: 'June 1st week', topic: 'Geometry', one: 'Geometry\n1: Identifying 2-D Shapes', two: 'Geometry\n1: Identifying 2-D Shapes\n2: Identifying 3-D Shapes', three: 'Geometry\n1: Identifying 2-D Shapes\n2: Identifying 3-D Shapes\n3: Partitioning Shapes', five: 'Geometry\n1: Identifying 2-D Shapes\n2: Identifying 3-D Shapes\n3: Partitioning Shapes\n4: Chapter Review & Quiz' },
        { week: 'June 2nd week', topic: 'Geometry', one: 'Geometry\n2: Identifying 3-D Shapes', two: 'Geometry\n3: Partitioning Shapes\n4: Chapter Review & Quiz', three: 'Geometry\n4: Chapter Review & Quiz', five: 'R: Cumulative Review Worksheets & Quiz' },
        { week: 'June 3rd week', topic: 'Geometry', one: 'Geometry\n3: Partitioning Shapes', two: 'R: Cumulative Review Worksheets & Quiz', three: 'R: Cumulative Review Worksheets & Quiz', five: 'E: Enrichment Activities & Cumulative Practice' },
        { week: 'June 4th week', topic: 'Geometry', one: 'Geometry\n4: Chapter Review & Quiz', two: 'E: Enrichment Activities & Cumulative Practice', three: 'E: Enrichment Activities & Cumulative Practice', five: 'E: Enrichment Activities & Cumulative Practice' },
      ],
    },
    {
      month: 'July', chapterLabel: 'Data & Graphing',
      rows: [
        { week: 'July 1st week', topic: 'Data & Graphing', one: 'Data & Graphing\n1: Reading Bar Graphs', two: 'Data & Graphing\n1: Reading Bar Graphs\n2: Making Picture Graphs', three: 'Data & Graphing\n1: Reading Bar Graphs\n2: Making Picture Graphs\n3: Chapter Review & Quiz', five: 'Data & Graphing\n1: Reading Bar Graphs\n2: Making Picture Graphs\n3: Chapter Review & Quiz' },
        { week: 'July 2nd week', topic: 'Data & Graphing', one: 'Data & Graphing\n2: Making Picture Graphs', two: 'Data & Graphing\n3: Chapter Review & Quiz', three: 'R: Cumulative Review Worksheets & Quiz', five: 'R: Cumulative Review Worksheets & Quiz' },
        { week: 'July 3rd week', topic: 'Data & Graphing', one: 'Data & Graphing\n3: Chapter Review & Quiz', two: 'R: Cumulative Review Worksheets & Quiz', three: 'E: Enrichment Activities & Cumulative Practice', five: 'E: Enrichment Activities & Cumulative Practice' },
        { week: 'July 4th week', topic: 'Data & Graphing', one: 'R: Cumulative Review Worksheets & Quiz', two: 'E: Enrichment Activities & Cumulative Practice', three: 'E: Enrichment Activities & Cumulative Practice', five: 'E: Enrichment Activities & Cumulative Practice' },
      ],
    },
    {
      month: 'August', chapterLabel: 'Word Problems',
      rows: [
        { week: 'August 1st week', topic: 'Word Problems', one: 'Word Problems\n1: Addition and Subtraction Word Problems', two: 'Word Problems\n1: Addition and Subtraction Word Problems\n2: Multi-Step Word Problems', three: 'Word Problems\n1: Addition and Subtraction Word Problems\n2: Multi-Step Word Problems\n3: Chapter Review & Quiz', five: 'Word Problems\n1: Addition and Subtraction Word Problems\n2: Multi-Step Word Problems\n3: Chapter Review & Quiz' },
        { week: 'August 2nd week', topic: 'Word Problems', one: 'Word Problems\n2: Multi-Step Word Problems', two: 'Word Problems\n3: Chapter Review & Quiz', three: 'R: Cumulative Review Worksheets & Quiz', five: 'R: Cumulative Review Worksheets & Quiz' },
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
    <section className="py-12" aria-label={`${terms[activeTerm]} weekly curriculum`}><div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop space-y-8">{units.map((unit) => <article key={unit.month} className="bg-white rounded-2xl p-5 md:p-8 shadow-sm border border-outline-variant/30"><div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5"><div><span className="text-sm text-royal-purple font-bold">{unit.month} · {unit.chapterLabel}</span><h3 className="text-xl md:text-2xl font-bold text-charcoal mt-1">Grade {grade} {subject} — Pacing Guide — {unit.month}</h3></div><span className="text-sm px-3 py-1 rounded-full bg-soft-gray text-on-surface-variant">USA Curriculum</span></div><div className="overflow-x-auto"><table className="w-full min-w-[760px] text-left"><thead><tr className="bg-surface-container-low text-charcoal"><th className="py-3 px-4">Week</th><th className="py-3 px-4">1 Day/Week</th><th className="py-3 px-4">2 Day/Week</th><th className="py-3 px-4">3 Day/Week</th><th className="py-3 px-4">5 Day/Week</th></tr></thead><tbody className="divide-y divide-outline-variant/30 text-sm text-on-surface-variant">{unit.rows.map(r => <tr key={r.week}><td className="py-4 px-4 font-semibold text-charcoal whitespace-nowrap">{r.week}<br /><span className="text-xs font-normal text-on-surface-variant">({r.topic})</span></td><td className="py-4 px-4 whitespace-pre-line">{r.one}</td><td className="py-4 px-4 whitespace-pre-line">{r.two}</td><td className="py-4 px-4 whitespace-pre-line">{r.three}</td><td className="py-4 px-4 whitespace-pre-line">{r.five}</td></tr>)}</tbody></table></div></article>)}</div></section>
    <section className="py-16 lg:py-20 bg-surface-container-low"><div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop"><div className="text-center max-w-2xl mx-auto mb-10"><span className="text-sm uppercase tracking-wide text-royal-purple font-bold">The learning framework</span><h2 className="text-3xl font-bold text-charcoal mt-2">Anatomy of a focused lesson</h2><p className="text-on-surface-variant mt-3">Each session moves from a clear question to guided exploration and a check for understanding.</p></div><div className="grid md:grid-cols-3 gap-6">{[{ icon: Brain, time: '10 minutes', title: 'Wonder and question', text: `Start with a real-world ${subject.toLowerCase()} question and connect it to what the student already knows.` }, { icon: PenTool, time: '25 minutes', title: 'Explore together', text: 'Work through examples, diagrams, investigations, or writing with tutor guidance and student participation.' }, { icon: BadgeCheck, time: '10 minutes', title: 'Check for mastery', text: 'Use a short practice task to identify what is secure and what should come next.' }].map(({ icon: Icon, time, title, text }) => <article key={title} className="bg-white rounded-2xl p-7 shadow-sm"><Icon className="text-royal-purple mb-4" size={28} /><p className="text-sm text-secondary font-bold">{time}</p><h3 className="text-xl font-bold text-charcoal mt-2 mb-3">{title}</h3><p className="text-on-surface-variant">{text}</p></article>)}</div></div></section>
    <section className="py-16"><div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop"><div className="text-center max-w-2xl mx-auto mb-10"><span className="text-sm uppercase tracking-wide text-royal-purple font-bold">Student learning toolkit</span><h2 className="text-3xl font-bold text-charcoal mt-2">Resources for Grade {grade} {subject}</h2></div><div className="grid grid-cols-2 lg:grid-cols-4 gap-4">{[{ icon: PlayCircle, title: 'Concept lessons', text: `Short explanations of key Grade ${grade} ${subject.toLowerCase()} ideas.` }, { icon: FileText, title: 'Practice materials', text: 'Guided questions and independent practice matched to the weekly focus.' }, { icon: FlaskConical, title: 'Applied activities', text: 'Hands-on tasks, worked examples, or text analysis to make learning stick.' }, { icon: MailCheck, title: 'Progress notes', text: 'A clear record of strengths, next steps, and topics to revisit.' }].map(({ icon: Icon, title, text }) => <article key={title} className="bg-white p-5 md:p-6 rounded-xl border border-outline-variant/30"><Icon className="text-royal-purple mb-4" size={26} /><h3 className="font-bold text-charcoal mb-2">{title}</h3><p className="text-sm text-on-surface-variant">{text}</p></article>)}</div></div></section>
    <section className="py-16 lg:py-20 bg-surface-container-low" id="book-trial"><div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop"><div className="bg-white rounded-3xl p-7 md:p-12 shadow-sm grid lg:grid-cols-2 gap-10"><div><span className="inline-flex items-center gap-2 text-secondary font-semibold"><Check size={18} /> Free first lesson</span><h2 className="text-3xl md:text-4xl font-bold text-charcoal mt-4 mb-4">Build a plan for Grade {grade} {subject}</h2><p className="text-on-surface-variant mb-6">Tell us where the student is up to and we'll shape the first session around their goals, schoolwork, and preferred pace.</p><ul className="space-y-3 text-on-surface-variant"><li className="flex gap-2"><CheckCircle2 className="text-secondary shrink-0" size={20} />No credit card required</li><li className="flex gap-2"><CheckCircle2 className="text-secondary shrink-0" size={20} />A one-to-one session with a subject tutor</li><li className="flex gap-2"><CheckCircle2 className="text-secondary shrink-0" size={20} />A recommended next-step study plan</li></ul></div><FreeTrialForm /></div></div></section>
  </main>;
}
