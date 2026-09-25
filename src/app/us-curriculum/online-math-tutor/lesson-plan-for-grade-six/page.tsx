'use client';
import { useState } from 'react';
import { BadgeCheck, Brain, Check, CheckCircle2, FileText, FlaskConical, MailCheck, PenTool, PlayCircle } from 'lucide-react';
import { FreeTrialForm } from '@/components/FreeTrial';

const subject = 'Math';
const grade = 6;
const topics = ["Fractions, decimals and percents", "Ratios and proportional reasoning", "Expressions, equations and graphs", "Geometry, statistics and probability"];
const terms = ['Quarter 1 · Sep–Nov', 'Quarter 2 · Dec–Feb', 'Quarter 3 · Mar–May', 'Quarter 4 · Jun–Aug'];

/* ────────── Full-year pacing guide data ────────── */

type WeekRow = { week: string; topic: string; one: string; two: string; three: string; five: string };
type MonthUnit = { month: string; chapterLabel: string; rows: WeekRow[] };

const pacingGuide: Record<number, MonthUnit[]> = {
  /* ── Quarter 1: Sep – Nov ── */
  0: [
    {
      month: 'September', chapterLabel: 'Place Value & Scientific Notation',
      rows: [
        { week: 'September 1st week', topic: 'Place Value & Scientific Notation', one: 'Place Value & Scientific Notation\n1: Place Value to Billions', two: 'Place Value & Scientific Notation\n1: Place Value to Billions\n2: Understanding Scientific Notation', three: 'Place Value & Scientific Notation\n1: Place Value to Billions\n2: Understanding Scientific Notation\n3: Converting to and from Scientific Notation', five: 'Place Value & Scientific Notation\n1: Place Value to Billions\n2: Understanding Scientific Notation\n3: Converting to and from Scientific Notation\n4: Chapter Review & Quiz' },
        { week: 'September 2nd week', topic: 'Place Value & Scientific Notation', one: 'Place Value & Scientific Notation\n2: Understanding Scientific Notation', two: 'Place Value & Scientific Notation\n3: Converting to and from Scientific Notation\n4: Chapter Review & Quiz', three: 'Place Value & Scientific Notation\n4: Chapter Review & Quiz', five: 'R: Cumulative Review Worksheets & Quiz' },
        { week: 'September 3rd week', topic: 'Place Value & Scientific Notation', one: 'Place Value & Scientific Notation\n3: Converting to and from Scientific Notation', two: 'R: Cumulative Review Worksheets & Quiz', three: 'R: Cumulative Review Worksheets & Quiz', five: 'E: Enrichment Activities & Cumulative Practice' },
        { week: 'September 4th week', topic: 'Place Value & Scientific Notation', one: 'Place Value & Scientific Notation\n4: Chapter Review & Quiz', two: 'E: Enrichment Activities & Cumulative Practice', three: 'E: Enrichment Activities & Cumulative Practice', five: 'E: Enrichment Activities & Cumulative Practice' },
      ],
    },
    {
      month: 'October', chapterLabel: 'Add & Subtract, Multiply & Divide',
      rows: [
        { week: 'October 1st week', topic: 'Add & Subtract, Multiply & Divide', one: 'Add & Subtract\n1: Adding Multi-Digit Numbers', two: 'Add & Subtract\n1: Adding Multi-Digit Numbers\n2: Subtracting Multi-Digit Numbers', three: 'Add & Subtract\n1: Adding Multi-Digit Numbers\n2: Subtracting Multi-Digit Numbers\n3: Chapter Review & Quiz', five: 'Add & Subtract\n1: Adding Multi-Digit Numbers\n2: Subtracting Multi-Digit Numbers\n3: Chapter Review & Quiz\nMultiply & Divide\n1: Multiplying Multi-Digit Numbers\n2: Dividing by Multi-Digit Divisors' },
        { week: 'October 2nd week', topic: 'Add & Subtract, Multiply & Divide', one: 'Add & Subtract\n2: Subtracting Multi-Digit Numbers', two: 'Add & Subtract\n3: Chapter Review & Quiz\nMultiply & Divide\n1: Multiplying Multi-Digit Numbers', three: 'Multiply & Divide\n1: Multiplying Multi-Digit Numbers\n2: Dividing by Multi-Digit Divisors\n3: Chapter Review & Quiz', five: 'Multiply & Divide\n3: Chapter Review & Quiz' },
        { week: 'October 3rd week', topic: 'Add & Subtract, Multiply & Divide', one: 'Add & Subtract\n3: Chapter Review & Quiz', two: 'Multiply & Divide\n2: Dividing by Multi-Digit Divisors\n3: Chapter Review & Quiz', three: 'R: Cumulative Review Worksheets & Quiz', five: 'R: Cumulative Review Worksheets & Quiz' },
        { week: 'October 4th week', topic: 'Add & Subtract, Multiply & Divide', one: 'Multiply & Divide\n1: Multiplying Multi-Digit Numbers', two: 'R: Cumulative Review Worksheets & Quiz', three: 'E: Enrichment Activities & Cumulative Practice', five: 'E: Enrichment Activities & Cumulative Practice' },
      ],
    },
    {
      month: 'November', chapterLabel: 'Fractions to/from Decimals',
      rows: [
        { week: 'November 1st week', topic: 'Fractions to/from Decimals', one: 'Fractions to/from Decimals\n1: Fractions as Decimals', two: 'Fractions to/from Decimals\n1: Fractions as Decimals\n2: Decimals as Fractions', three: 'Fractions to/from Decimals\n1: Fractions as Decimals\n2: Decimals as Fractions\n3: Chapter Review & Quiz', five: 'Fractions to/from Decimals\n1: Fractions as Decimals\n2: Decimals as Fractions\n3: Chapter Review & Quiz' },
        { week: 'November 2nd week', topic: 'Fractions to/from Decimals', one: 'Fractions to/from Decimals\n2: Decimals as Fractions', two: 'Fractions to/from Decimals\n3: Chapter Review & Quiz', three: 'R: Cumulative Review Worksheets & Quiz', five: 'R: Cumulative Review Worksheets & Quiz' },
        { week: 'November 3rd week', topic: 'Fractions to/from Decimals', one: 'Fractions to/from Decimals\n3: Chapter Review & Quiz', two: 'R: Cumulative Review Worksheets & Quiz', three: 'E: Enrichment Activities & Cumulative Practice', five: 'E: Enrichment Activities & Cumulative Practice' },
        { week: 'November 4th week', topic: 'Fractions to/from Decimals', one: 'R: Cumulative Review Worksheets & Quiz', two: 'E: Enrichment Activities & Cumulative Practice', three: 'E: Enrichment Activities & Cumulative Practice', five: 'E: Enrichment Activities & Cumulative Practice' },
      ],
    },
  ],

  /* ── Quarter 2: Dec – Feb ── */
  1: [
    {
      month: 'December', chapterLabel: 'Decimals: Add/Subtract & Multiply',
      rows: [
        { week: 'December 1st week', topic: 'Decimals: Add/Subtract & Multiply', one: 'Decimals - Add and Subtract\n1: Adding Decimals', two: 'Decimals - Add and Subtract\n1: Adding Decimals\n2: Subtracting Decimals', three: 'Decimals - Add and Subtract\n1: Adding Decimals\n2: Subtracting Decimals\n3: Chapter Review & Quiz', five: 'Decimals - Add and Subtract\n1: Adding Decimals\n2: Subtracting Decimals\n3: Chapter Review & Quiz\nDecimals - Multiply\n1: Multiplying Decimals by Whole Numbers\n2: Multiplying Decimals by Decimals' },
        { week: 'December 2nd week', topic: 'Decimals: Add/Subtract & Multiply', one: 'Decimals - Add and Subtract\n2: Subtracting Decimals', two: 'Decimals - Add and Subtract\n3: Chapter Review & Quiz\nDecimals - Multiply\n1: Multiplying Decimals by Whole Numbers', three: 'Decimals - Multiply\n1: Multiplying Decimals by Whole Numbers\n2: Multiplying Decimals by Decimals\n3: Chapter Review & Quiz', five: 'Decimals - Multiply\n3: Chapter Review & Quiz' },
        { week: 'December 3rd week', topic: 'Decimals: Add/Subtract & Multiply', one: 'Decimals - Add and Subtract\n3: Chapter Review & Quiz', two: 'Decimals - Multiply\n2: Multiplying Decimals by Decimals\n3: Chapter Review & Quiz', three: 'R: Cumulative Review Worksheets & Quiz', five: 'R: Cumulative Review Worksheets & Quiz' },
        { week: 'December 4th week', topic: 'Decimals: Add/Subtract & Multiply', one: 'Decimals - Multiply\n1: Multiplying Decimals by Whole Numbers', two: 'R: Cumulative Review Worksheets & Quiz', three: 'E: Enrichment Activities & Cumulative Practice', five: 'E: Enrichment Activities & Cumulative Practice' },
      ],
    },
    {
      month: 'January', chapterLabel: 'Decimals: Divide',
      rows: [
        { week: 'January 1st week', topic: 'Decimals: Divide', one: 'Decimals - Divide\n1: Dividing Decimals by Whole Numbers', two: 'Decimals - Divide\n1: Dividing Decimals by Whole Numbers\n2: Dividing Decimals by Decimals', three: 'Decimals - Divide\n1: Dividing Decimals by Whole Numbers\n2: Dividing Decimals by Decimals\n3: Chapter Review & Quiz', five: 'Decimals - Divide\n1: Dividing Decimals by Whole Numbers\n2: Dividing Decimals by Decimals\n3: Chapter Review & Quiz' },
        { week: 'January 2nd week', topic: 'Decimals: Divide', one: 'Decimals - Divide\n2: Dividing Decimals by Decimals', two: 'Decimals - Divide\n3: Chapter Review & Quiz', three: 'R: Cumulative Review Worksheets & Quiz', five: 'R: Cumulative Review Worksheets & Quiz' },
        { week: 'January 3rd week', topic: 'Decimals: Divide', one: 'Decimals - Divide\n3: Chapter Review & Quiz', two: 'R: Cumulative Review Worksheets & Quiz', three: 'E: Enrichment Activities & Cumulative Practice', five: 'E: Enrichment Activities & Cumulative Practice' },
        { week: 'January 4th week', topic: 'Decimals: Divide', one: 'R: Cumulative Review Worksheets & Quiz', two: 'E: Enrichment Activities & Cumulative Practice', three: 'E: Enrichment Activities & Cumulative Practice', five: 'E: Enrichment Activities & Cumulative Practice' },
      ],
    },
    {
      month: 'February', chapterLabel: 'Percents & Add/Subtract Fractions',
      rows: [
        { week: 'February 1st week', topic: 'Percents & Add/Subtract Fractions', one: 'Percents\n1: Understanding Percents', two: 'Percents\n1: Understanding Percents\n2: Percent, Fraction, and Decimal Conversions', three: 'Percents\n1: Understanding Percents\n2: Percent, Fraction, and Decimal Conversions\n3: Finding a Percent of a Number', five: 'Percents\n1: Understanding Percents\n2: Percent, Fraction, and Decimal Conversions\n3: Finding a Percent of a Number\n4: Chapter Review & Quiz\nAdd & Subtract Fractions\n1: Adding Fractions with Unlike Denominators' },
        { week: 'February 2nd week', topic: 'Percents & Add/Subtract Fractions', one: 'Percents\n2: Percent, Fraction, and Decimal Conversions', two: 'Percents\n3: Finding a Percent of a Number\n4: Chapter Review & Quiz', three: 'Percents\n4: Chapter Review & Quiz\nAdd & Subtract Fractions\n1: Adding Fractions with Unlike Denominators\n2: Subtracting Fractions with Unlike Denominators', five: 'Add & Subtract Fractions\n2: Subtracting Fractions with Unlike Denominators\n3: Adding and Subtracting Mixed Numbers\n4: Chapter Review & Quiz' },
        { week: 'February 3rd week', topic: 'Percents & Add/Subtract Fractions', one: 'Percents\n3: Finding a Percent of a Number', two: 'Add & Subtract Fractions\n1: Adding Fractions with Unlike Denominators\n2: Subtracting Fractions with Unlike Denominators', three: 'Add & Subtract Fractions\n3: Adding and Subtracting Mixed Numbers\n4: Chapter Review & Quiz', five: 'R: Cumulative Review Worksheets & Quiz' },
        { week: 'February 4th week', topic: 'Percents & Add/Subtract Fractions', one: 'Percents\n4: Chapter Review & Quiz', two: 'Add & Subtract Fractions\n3: Adding and Subtracting Mixed Numbers\n4: Chapter Review & Quiz', three: 'R: Cumulative Review Worksheets & Quiz', five: 'E: Enrichment Activities & Cumulative Practice' },
      ],
    },
  ],

  /* ── Quarter 3: Mar – May ── */
  2: [
    {
      month: 'March', chapterLabel: 'Multiply & Divide Fractions',
      rows: [
        { week: 'March 1st week', topic: 'Multiply & Divide Fractions', one: 'Multiply & Divide Fractions\n1: Multiplying Fractions', two: 'Multiply & Divide Fractions\n1: Multiplying Fractions\n2: Dividing Fractions', three: 'Multiply & Divide Fractions\n1: Multiplying Fractions\n2: Dividing Fractions\n3: Chapter Review & Quiz', five: 'Multiply & Divide Fractions\n1: Multiplying Fractions\n2: Dividing Fractions\n3: Chapter Review & Quiz' },
        { week: 'March 2nd week', topic: 'Multiply & Divide Fractions', one: 'Multiply & Divide Fractions\n2: Dividing Fractions', two: 'Multiply & Divide Fractions\n3: Chapter Review & Quiz', three: 'R: Cumulative Review Worksheets & Quiz', five: 'R: Cumulative Review Worksheets & Quiz' },
        { week: 'March 3rd week', topic: 'Multiply & Divide Fractions', one: 'Multiply & Divide Fractions\n3: Chapter Review & Quiz', two: 'R: Cumulative Review Worksheets & Quiz', three: 'E: Enrichment Activities & Cumulative Practice', five: 'E: Enrichment Activities & Cumulative Practice' },
        { week: 'March 4th week', topic: 'Multiply & Divide Fractions', one: 'R: Cumulative Review Worksheets & Quiz', two: 'E: Enrichment Activities & Cumulative Practice', three: 'E: Enrichment Activities & Cumulative Practice', five: 'E: Enrichment Activities & Cumulative Practice' },
      ],
    },
    {
      month: 'April', chapterLabel: 'Converting Fractions & Measurement',
      rows: [
        { week: 'April 1st week', topic: 'Converting Fractions & Measurement', one: 'Converting Fractions\n1: Simplifying Fractions', two: 'Converting Fractions\n1: Simplifying Fractions\n2: Converting Mixed Numbers and Improper Fractions', three: 'Converting Fractions\n1: Simplifying Fractions\n2: Converting Mixed Numbers and Improper Fractions\n3: Chapter Review & Quiz', five: 'Converting Fractions\n1: Simplifying Fractions\n2: Converting Mixed Numbers and Improper Fractions\n3: Chapter Review & Quiz\nMeasurement\n1: Converting Customary Units\n2: Converting Metric Units' },
        { week: 'April 2nd week', topic: 'Converting Fractions & Measurement', one: 'Converting Fractions\n2: Converting Mixed Numbers and Improper Fractions', two: 'Converting Fractions\n3: Chapter Review & Quiz\nMeasurement\n1: Converting Customary Units', three: 'Measurement\n1: Converting Customary Units\n2: Converting Metric Units\n3: Chapter Review & Quiz', five: 'Measurement\n3: Chapter Review & Quiz' },
        { week: 'April 3rd week', topic: 'Converting Fractions & Measurement', one: 'Converting Fractions\n3: Chapter Review & Quiz', two: 'Measurement\n2: Converting Metric Units\n3: Chapter Review & Quiz', three: 'R: Cumulative Review Worksheets & Quiz', five: 'R: Cumulative Review Worksheets & Quiz' },
        { week: 'April 4th week', topic: 'Converting Fractions & Measurement', one: 'Measurement\n1: Converting Customary Units', two: 'R: Cumulative Review Worksheets & Quiz', three: 'E: Enrichment Activities & Cumulative Practice', five: 'E: Enrichment Activities & Cumulative Practice' },
      ],
    },
    {
      month: 'May', chapterLabel: 'Geometry',
      rows: [
        { week: 'May 1st week', topic: 'Geometry', one: 'Geometry\n1: Classifying 2-D Shapes', two: 'Geometry\n1: Classifying 2-D Shapes\n2: Perimeter and Area', three: 'Geometry\n1: Classifying 2-D Shapes\n2: Perimeter and Area\n3: Volume', five: 'Geometry\n1: Classifying 2-D Shapes\n2: Perimeter and Area\n3: Volume\n4: Chapter Review & Quiz' },
        { week: 'May 2nd week', topic: 'Geometry', one: 'Geometry\n2: Perimeter and Area', two: 'Geometry\n3: Volume\n4: Chapter Review & Quiz', three: 'Geometry\n4: Chapter Review & Quiz', five: 'R: Cumulative Review Worksheets & Quiz' },
        { week: 'May 3rd week', topic: 'Geometry', one: 'Geometry\n3: Volume', two: 'R: Cumulative Review Worksheets & Quiz', three: 'R: Cumulative Review Worksheets & Quiz', five: 'E: Enrichment Activities & Cumulative Practice' },
        { week: 'May 4th week', topic: 'Geometry', one: 'Geometry\n4: Chapter Review & Quiz', two: 'E: Enrichment Activities & Cumulative Practice', three: 'E: Enrichment Activities & Cumulative Practice', five: 'E: Enrichment Activities & Cumulative Practice' },
      ],
    },
  ],

  /* ── Quarter 4: Jun – Aug ── */
  3: [
    {
      month: 'June', chapterLabel: 'Factoring',
      rows: [
        { week: 'June 1st week', topic: 'Factoring', one: 'Factoring\n1: Factors and Multiples', two: 'Factoring\n1: Factors and Multiples\n2: Greatest Common Factor (GCF)', three: 'Factoring\n1: Factors and Multiples\n2: Greatest Common Factor (GCF)\n3: Least Common Multiple (LCM)', five: 'Factoring\n1: Factors and Multiples\n2: Greatest Common Factor (GCF)\n3: Least Common Multiple (LCM)\n4: Chapter Review & Quiz' },
        { week: 'June 2nd week', topic: 'Factoring', one: 'Factoring\n2: Greatest Common Factor (GCF)', two: 'Factoring\n3: Least Common Multiple (LCM)\n4: Chapter Review & Quiz', three: 'Factoring\n4: Chapter Review & Quiz', five: 'R: Cumulative Review Worksheets & Quiz' },
        { week: 'June 3rd week', topic: 'Factoring', one: 'Factoring\n3: Least Common Multiple (LCM)', two: 'R: Cumulative Review Worksheets & Quiz', three: 'R: Cumulative Review Worksheets & Quiz', five: 'E: Enrichment Activities & Cumulative Practice' },
        { week: 'June 4th week', topic: 'Factoring', one: 'Factoring\n4: Chapter Review & Quiz', two: 'E: Enrichment Activities & Cumulative Practice', three: 'E: Enrichment Activities & Cumulative Practice', five: 'E: Enrichment Activities & Cumulative Practice' },
      ],
    },
    {
      month: 'July', chapterLabel: 'Exponents & Proportions',
      rows: [
        { week: 'July 1st week', topic: 'Exponents & Proportions', one: 'Exponents\n1: Understanding Exponents', two: 'Exponents\n1: Understanding Exponents\n2: Order of Operations with Exponents', three: 'Exponents\n1: Understanding Exponents\n2: Order of Operations with Exponents\n3: Chapter Review & Quiz', five: 'Exponents\n1: Understanding Exponents\n2: Order of Operations with Exponents\n3: Chapter Review & Quiz\nProportions\n1: Understanding Ratios\n2: Solving Proportions' },
        { week: 'July 2nd week', topic: 'Exponents & Proportions', one: 'Exponents\n2: Order of Operations with Exponents', two: 'Exponents\n3: Chapter Review & Quiz\nProportions\n1: Understanding Ratios', three: 'Proportions\n1: Understanding Ratios\n2: Solving Proportions\n3: Chapter Review & Quiz', five: 'Proportions\n3: Chapter Review & Quiz' },
        { week: 'July 3rd week', topic: 'Exponents & Proportions', one: 'Exponents\n3: Chapter Review & Quiz', two: 'Proportions\n2: Solving Proportions\n3: Chapter Review & Quiz', three: 'R: Cumulative Review Worksheets & Quiz', five: 'R: Cumulative Review Worksheets & Quiz' },
        { week: 'July 4th week', topic: 'Exponents & Proportions', one: 'Proportions\n1: Understanding Ratios', two: 'R: Cumulative Review Worksheets & Quiz', three: 'E: Enrichment Activities & Cumulative Practice', five: 'E: Enrichment Activities & Cumulative Practice' },
      ],
    },
    {
      month: 'August', chapterLabel: 'Integers',
      rows: [
        { week: 'August 1st week', topic: 'Integers', one: 'Integers\n1: Understanding Integers', two: 'Integers\n1: Understanding Integers\n2: Comparing and Ordering Integers', three: 'Integers\n1: Understanding Integers\n2: Comparing and Ordering Integers\n3: Adding and Subtracting Integers', five: 'Integers\n1: Understanding Integers\n2: Comparing and Ordering Integers\n3: Adding and Subtracting Integers\n4: Chapter Review & Quiz' },
        { week: 'August 2nd week', topic: 'Integers', one: 'Integers\n2: Comparing and Ordering Integers', two: 'Integers\n3: Adding and Subtracting Integers\n4: Chapter Review & Quiz', three: 'Integers\n4: Chapter Review & Quiz', five: 'R: Cumulative Review Worksheets & Quiz' },
        { week: 'August 3rd week', topic: 'Integers', one: 'Integers\n3: Adding and Subtracting Integers', two: 'R: Cumulative Review Worksheets & Quiz', three: 'R: Cumulative Review Worksheets & Quiz', five: 'E: Enrichment Activities & Cumulative Practice' },
        { week: 'August 4th week', topic: 'Integers', one: 'Integers\n4: Chapter Review & Quiz', two: 'E: Enrichment Activities & Cumulative Practice', three: 'E: Enrichment Activities & Cumulative Practice', five: 'E: Enrichment Activities & Cumulative Practice' },
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
