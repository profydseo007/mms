'use client';
import { useState } from 'react';
import { BadgeCheck, Brain, Check, CheckCircle2, FileText, FlaskConical, MailCheck, PenTool, PlayCircle } from 'lucide-react';
import { FreeTrialForm } from '@/components/FreeTrial';

const subject = 'Math';
const grade = 7;
const topics = ["Ratios and proportional reasoning", "Rational numbers and equations", "Geometry and measurement", "Statistics and probability"];
const terms = ['Quarter 1 · Sep–Nov', 'Quarter 2 · Dec–Feb', 'Quarter 3 · Mar–May', 'Quarter 4 · Jun–Aug'];

/* ────────── Full-year pacing guide data ────────── */

type WeekRow = { week: string; topic: string; one: string; two: string; three: string; five: string };
type MonthUnit = { month: string; chapterLabel: string; rows: WeekRow[] };

const pacingGuide: Record<number, MonthUnit[]> = {
  /* ── Quarter 1: Sep – Nov ── */
  0: [
    {
      month: 'September', chapterLabel: 'Scale & Ratios',
      rows: [
        { week: 'September 1st week', topic: 'Scale & Ratios', one: 'Scale\n1: Understanding Scale', two: 'Scale\n1: Understanding Scale\n2: Scale Drawings', three: 'Scale\n1: Understanding Scale\n2: Scale Drawings\n3: Chapter Review & Quiz', five: 'Scale\n1: Understanding Scale\n2: Scale Drawings\n3: Chapter Review & Quiz\nRatios\n1: Understanding Ratios\n2: Equivalent Ratios' },
        { week: 'September 2nd week', topic: 'Scale & Ratios', one: 'Scale\n2: Scale Drawings', two: 'Scale\n3: Chapter Review & Quiz\nRatios\n1: Understanding Ratios', three: 'Ratios\n1: Understanding Ratios\n2: Equivalent Ratios\n3: Chapter Review & Quiz', five: 'Ratios\n3: Chapter Review & Quiz' },
        { week: 'September 3rd week', topic: 'Scale & Ratios', one: 'Scale\n3: Chapter Review & Quiz', two: 'Ratios\n2: Equivalent Ratios\n3: Chapter Review & Quiz', three: 'R: Cumulative Review Worksheets & Quiz', five: 'R: Cumulative Review Worksheets & Quiz' },
        { week: 'September 4th week', topic: 'Scale & Ratios', one: 'Ratios\n1: Understanding Ratios', two: 'R: Cumulative Review Worksheets & Quiz', three: 'E: Enrichment Activities & Cumulative Practice', five: 'E: Enrichment Activities & Cumulative Practice' },
      ],
    },
    {
      month: 'October', chapterLabel: 'Rational Number Conversions & Operations',
      rows: [
        { week: 'October 1st week', topic: 'Rational Number Conversions & Operations', one: 'Rational Number Conversions\n1: Converting Fractions, Decimals, and Percents', two: 'Rational Number Conversions\n1: Converting Fractions, Decimals, and Percents\n2: Terminating and Repeating Decimals', three: 'Rational Number Conversions\n1: Converting Fractions, Decimals, and Percents\n2: Terminating and Repeating Decimals\n3: Chapter Review & Quiz', five: 'Rational Number Conversions\n1: Converting Fractions, Decimals, and Percents\n2: Terminating and Repeating Decimals\n3: Chapter Review & Quiz\nRational Number Operations\n1: Adding and Subtracting Rational Numbers\n2: Multiplying and Dividing Rational Numbers' },
        { week: 'October 2nd week', topic: 'Rational Number Conversions & Operations', one: 'Rational Number Conversions\n2: Terminating and Repeating Decimals', two: 'Rational Number Conversions\n3: Chapter Review & Quiz\nRational Number Operations\n1: Adding and Subtracting Rational Numbers', three: 'Rational Number Operations\n1: Adding and Subtracting Rational Numbers\n2: Multiplying and Dividing Rational Numbers\n3: Chapter Review & Quiz', five: 'Rational Number Operations\n3: Chapter Review & Quiz' },
        { week: 'October 3rd week', topic: 'Rational Number Conversions & Operations', one: 'Rational Number Conversions\n3: Chapter Review & Quiz', two: 'Rational Number Operations\n2: Multiplying and Dividing Rational Numbers\n3: Chapter Review & Quiz', three: 'R: Cumulative Review Worksheets & Quiz', five: 'R: Cumulative Review Worksheets & Quiz' },
        { week: 'October 4th week', topic: 'Rational Number Conversions & Operations', one: 'Rational Number Operations\n1: Adding and Subtracting Rational Numbers', two: 'R: Cumulative Review Worksheets & Quiz', three: 'E: Enrichment Activities & Cumulative Practice', five: 'E: Enrichment Activities & Cumulative Practice' },
      ],
    },
    {
      month: 'November', chapterLabel: 'Plotting Points & Unit Rate/Reasoning',
      rows: [
        { week: 'November 1st week', topic: 'Plotting Points & Unit Rate/Reasoning', one: 'Plotting Points\n1: Plotting Points on the Coordinate Plane', two: 'Plotting Points\n1: Plotting Points on the Coordinate Plane\n2: The Four Quadrants', three: 'Plotting Points\n1: Plotting Points on the Coordinate Plane\n2: The Four Quadrants\n3: Chapter Review & Quiz', five: 'Plotting Points\n1: Plotting Points on the Coordinate Plane\n2: The Four Quadrants\n3: Chapter Review & Quiz\nUnit Rate / Reasoning\n1: Finding Unit Rates\n2: Using Unit Rates to Solve Problems' },
        { week: 'November 2nd week', topic: 'Plotting Points & Unit Rate/Reasoning', one: 'Plotting Points\n2: The Four Quadrants', two: 'Plotting Points\n3: Chapter Review & Quiz\nUnit Rate / Reasoning\n1: Finding Unit Rates', three: 'Unit Rate / Reasoning\n1: Finding Unit Rates\n2: Using Unit Rates to Solve Problems\n3: Chapter Review & Quiz', five: 'Unit Rate / Reasoning\n3: Chapter Review & Quiz' },
        { week: 'November 3rd week', topic: 'Plotting Points & Unit Rate/Reasoning', one: 'Plotting Points\n3: Chapter Review & Quiz', two: 'Unit Rate / Reasoning\n2: Using Unit Rates to Solve Problems\n3: Chapter Review & Quiz', three: 'R: Cumulative Review Worksheets & Quiz', five: 'R: Cumulative Review Worksheets & Quiz' },
        { week: 'November 4th week', topic: 'Plotting Points & Unit Rate/Reasoning', one: 'Unit Rate / Reasoning\n1: Finding Unit Rates', two: 'R: Cumulative Review Worksheets & Quiz', three: 'E: Enrichment Activities & Cumulative Practice', five: 'E: Enrichment Activities & Cumulative Practice' },
      ],
    },
  ],

  /* ── Quarter 2: Dec – Feb ── */
  1: [
    {
      month: 'December', chapterLabel: 'Proportional Representations & Basic Percents',
      rows: [
        { week: 'December 1st week', topic: 'Proportional Representations & Basic Percents', one: 'Proportional Representations\n1: Tables of Proportional Relationships', two: 'Proportional Representations\n1: Tables of Proportional Relationships\n2: Graphs of Proportional Relationships', three: 'Proportional Representations\n1: Tables of Proportional Relationships\n2: Graphs of Proportional Relationships\n3: Equations of Proportional Relationships', five: 'Proportional Representations\n1: Tables of Proportional Relationships\n2: Graphs of Proportional Relationships\n3: Equations of Proportional Relationships\n4: Chapter Review & Quiz\nBasic Percents\n1: Understanding Percents' },
        { week: 'December 2nd week', topic: 'Proportional Representations & Basic Percents', one: 'Proportional Representations\n2: Graphs of Proportional Relationships', two: 'Proportional Representations\n3: Equations of Proportional Relationships\n4: Chapter Review & Quiz', three: 'Proportional Representations\n4: Chapter Review & Quiz\nBasic Percents\n1: Understanding Percents\n2: Finding a Percent of a Number', five: 'Basic Percents\n2: Finding a Percent of a Number\n3: Chapter Review & Quiz' },
        { week: 'December 3rd week', topic: 'Proportional Representations & Basic Percents', one: 'Proportional Representations\n3: Equations of Proportional Relationships', two: 'Basic Percents\n1: Understanding Percents\n2: Finding a Percent of a Number', three: 'Basic Percents\n3: Chapter Review & Quiz', five: 'R: Cumulative Review Worksheets & Quiz' },
        { week: 'December 4th week', topic: 'Proportional Representations & Basic Percents', one: 'Proportional Representations\n4: Chapter Review & Quiz', two: 'Basic Percents\n3: Chapter Review & Quiz', three: 'R: Cumulative Review Worksheets & Quiz', five: 'E: Enrichment Activities & Cumulative Practice' },
      ],
    },
    {
      month: 'January', chapterLabel: 'Percent More or Less & Interpretation of Signed Numbers',
      rows: [
        { week: 'January 1st week', topic: 'Percent More or Less & Interpretation of Signed Numbers', one: 'Percent More or Less\n1: Percent Increase', two: 'Percent More or Less\n1: Percent Increase\n2: Percent Decrease', three: 'Percent More or Less\n1: Percent Increase\n2: Percent Decrease\n3: Chapter Review & Quiz', five: 'Percent More or Less\n1: Percent Increase\n2: Percent Decrease\n3: Chapter Review & Quiz\nInterpretation of Signed Numbers\n1: Signed Numbers in Context\n2: Comparing Signed Numbers' },
        { week: 'January 2nd week', topic: 'Percent More or Less & Interpretation of Signed Numbers', one: 'Percent More or Less\n2: Percent Decrease', two: 'Percent More or Less\n3: Chapter Review & Quiz\nInterpretation of Signed Numbers\n1: Signed Numbers in Context', three: 'Interpretation of Signed Numbers\n1: Signed Numbers in Context\n2: Comparing Signed Numbers\n3: Chapter Review & Quiz', five: 'Interpretation of Signed Numbers\n3: Chapter Review & Quiz' },
        { week: 'January 3rd week', topic: 'Percent More or Less & Interpretation of Signed Numbers', one: 'Percent More or Less\n3: Chapter Review & Quiz', two: 'Interpretation of Signed Numbers\n2: Comparing Signed Numbers\n3: Chapter Review & Quiz', three: 'R: Cumulative Review Worksheets & Quiz', five: 'R: Cumulative Review Worksheets & Quiz' },
        { week: 'January 4th week', topic: 'Percent More or Less & Interpretation of Signed Numbers', one: 'Interpretation of Signed Numbers\n1: Signed Numbers in Context', two: 'R: Cumulative Review Worksheets & Quiz', three: 'E: Enrichment Activities & Cumulative Practice', five: 'E: Enrichment Activities & Cumulative Practice' },
      ],
    },
    {
      month: 'February', chapterLabel: 'Signed Number Operations',
      rows: [
        { week: 'February 1st week', topic: 'Signed Number Operations', one: 'Signed Number Operations (Concept)\n1: Modeling Addition of Signed Numbers', two: 'Signed Number Operations (Concept)\n1: Modeling Addition of Signed Numbers\n2: Modeling Subtraction of Signed Numbers', three: 'Signed Number Operations (Concept)\n1: Modeling Addition of Signed Numbers\n2: Modeling Subtraction of Signed Numbers\n3: Chapter Review & Quiz', five: 'Signed Number Operations (Concept)\n1: Modeling Addition of Signed Numbers\n2: Modeling Subtraction of Signed Numbers\n3: Chapter Review & Quiz\nSigned Number Operations\n1: Adding Signed Numbers\n2: Subtracting Signed Numbers' },
        { week: 'February 2nd week', topic: 'Signed Number Operations', one: 'Signed Number Operations (Concept)\n2: Modeling Subtraction of Signed Numbers', two: 'Signed Number Operations (Concept)\n3: Chapter Review & Quiz\nSigned Number Operations\n1: Adding Signed Numbers', three: 'Signed Number Operations\n1: Adding Signed Numbers\n2: Subtracting Signed Numbers\n3: Multiplying and Dividing Signed Numbers', five: 'Signed Number Operations\n3: Multiplying and Dividing Signed Numbers\n4: Chapter Review & Quiz' },
        { week: 'February 3rd week', topic: 'Signed Number Operations', one: 'Signed Number Operations (Concept)\n3: Chapter Review & Quiz', two: 'Signed Number Operations\n2: Subtracting Signed Numbers\n3: Multiplying and Dividing Signed Numbers', three: 'Signed Number Operations\n4: Chapter Review & Quiz', five: 'R: Cumulative Review Worksheets & Quiz' },
        { week: 'February 4th week', topic: 'Signed Number Operations', one: 'Signed Number Operations\n1: Adding Signed Numbers', two: 'Signed Number Operations\n4: Chapter Review & Quiz', three: 'R: Cumulative Review Worksheets & Quiz', five: 'E: Enrichment Activities & Cumulative Practice' },
      ],
    },
  ],

  /* ── Quarter 3: Mar – May ── */
  2: [
    {
      month: 'March', chapterLabel: 'Algebraic Expressions & Solving Equations',
      rows: [
        { week: 'March 1st week', topic: 'Algebraic Expressions & Solving Equations', one: 'Algebraic Expressions\n1: Writing Algebraic Expressions', two: 'Algebraic Expressions\n1: Writing Algebraic Expressions\n2: Evaluating Expressions', three: 'Algebraic Expressions\n1: Writing Algebraic Expressions\n2: Evaluating Expressions\n3: Simplifying Expressions', five: 'Algebraic Expressions\n1: Writing Algebraic Expressions\n2: Evaluating Expressions\n3: Simplifying Expressions\n4: Chapter Review & Quiz\nSolving Equations\n1: Solving One-Step Equations' },
        { week: 'March 2nd week', topic: 'Algebraic Expressions & Solving Equations', one: 'Algebraic Expressions\n2: Evaluating Expressions', two: 'Algebraic Expressions\n3: Simplifying Expressions\n4: Chapter Review & Quiz', three: 'Algebraic Expressions\n4: Chapter Review & Quiz\nSolving Equations\n1: Solving One-Step Equations\n2: Solving Two-Step Equations', five: 'Solving Equations\n2: Solving Two-Step Equations\n3: Solving Multi-Step Equations\n4: Chapter Review & Quiz' },
        { week: 'March 3rd week', topic: 'Algebraic Expressions & Solving Equations', one: 'Algebraic Expressions\n3: Simplifying Expressions', two: 'Solving Equations\n1: Solving One-Step Equations\n2: Solving Two-Step Equations', three: 'Solving Equations\n3: Solving Multi-Step Equations\n4: Chapter Review & Quiz', five: 'R: Cumulative Review Worksheets & Quiz' },
        { week: 'March 4th week', topic: 'Algebraic Expressions & Solving Equations', one: 'Algebraic Expressions\n4: Chapter Review & Quiz', two: 'Solving Equations\n3: Solving Multi-Step Equations\n4: Chapter Review & Quiz', three: 'R: Cumulative Review Worksheets & Quiz', five: 'E: Enrichment Activities & Cumulative Practice' },
      ],
    },
    {
      month: 'April', chapterLabel: 'Understand Equations / Context',
      rows: [
        { week: 'April 1st week', topic: 'Understand Equations / Context', one: 'Understand Equations / Context\n1: Writing Equations from Word Problems', two: 'Understand Equations / Context\n1: Writing Equations from Word Problems\n2: Interpreting Solutions in Context', three: 'Understand Equations / Context\n1: Writing Equations from Word Problems\n2: Interpreting Solutions in Context\n3: Chapter Review & Quiz', five: 'Understand Equations / Context\n1: Writing Equations from Word Problems\n2: Interpreting Solutions in Context\n3: Chapter Review & Quiz' },
        { week: 'April 2nd week', topic: 'Understand Equations / Context', one: 'Understand Equations / Context\n2: Interpreting Solutions in Context', two: 'Understand Equations / Context\n3: Chapter Review & Quiz', three: 'R: Cumulative Review Worksheets & Quiz', five: 'R: Cumulative Review Worksheets & Quiz' },
        { week: 'April 3rd week', topic: 'Understand Equations / Context', one: 'Understand Equations / Context\n3: Chapter Review & Quiz', two: 'R: Cumulative Review Worksheets & Quiz', three: 'E: Enrichment Activities & Cumulative Practice', five: 'E: Enrichment Activities & Cumulative Practice' },
        { week: 'April 4th week', topic: 'Understand Equations / Context', one: 'R: Cumulative Review Worksheets & Quiz', two: 'E: Enrichment Activities & Cumulative Practice', three: 'E: Enrichment Activities & Cumulative Practice', five: 'E: Enrichment Activities & Cumulative Practice' },
      ],
    },
    {
      month: 'May', chapterLabel: 'Inequalities & Probability/Counting',
      rows: [
        { week: 'May 1st week', topic: 'Inequalities & Probability/Counting', one: 'Inequalities\n1: Writing Inequalities', two: 'Inequalities\n1: Writing Inequalities\n2: Solving Inequalities', three: 'Inequalities\n1: Writing Inequalities\n2: Solving Inequalities\n3: Graphing Inequalities', five: 'Inequalities\n1: Writing Inequalities\n2: Solving Inequalities\n3: Graphing Inequalities\n4: Chapter Review & Quiz\nProbability / Counting\n1: Understanding Probability' },
        { week: 'May 2nd week', topic: 'Inequalities & Probability/Counting', one: 'Inequalities\n2: Solving Inequalities', two: 'Inequalities\n3: Graphing Inequalities\n4: Chapter Review & Quiz', three: 'Inequalities\n4: Chapter Review & Quiz\nProbability / Counting\n1: Understanding Probability\n2: Theoretical and Experimental Probability', five: 'Probability / Counting\n2: Theoretical and Experimental Probability\n3: Counting Outcomes\n4: Chapter Review & Quiz' },
        { week: 'May 3rd week', topic: 'Inequalities & Probability/Counting', one: 'Inequalities\n3: Graphing Inequalities', two: 'Probability / Counting\n1: Understanding Probability\n2: Theoretical and Experimental Probability', three: 'Probability / Counting\n3: Counting Outcomes\n4: Chapter Review & Quiz', five: 'R: Cumulative Review Worksheets & Quiz' },
        { week: 'May 4th week', topic: 'Inequalities & Probability/Counting', one: 'Inequalities\n4: Chapter Review & Quiz', two: 'Probability / Counting\n3: Counting Outcomes\n4: Chapter Review & Quiz', three: 'R: Cumulative Review Worksheets & Quiz', five: 'E: Enrichment Activities & Cumulative Practice' },
      ],
    },
  ],

  /* ── Quarter 4: Jun – Aug ── */
  3: [
    {
      month: 'June', chapterLabel: 'Angle/Segment Relationships & Circles, Perimeter, Area',
      rows: [
        { week: 'June 1st week', topic: 'Angle/Segment Relationships & Circles, Perimeter, Area', one: 'Angle / Segment Relationships\n1: Complementary and Supplementary Angles', two: 'Angle / Segment Relationships\n1: Complementary and Supplementary Angles\n2: Vertical Angles', three: 'Angle / Segment Relationships\n1: Complementary and Supplementary Angles\n2: Vertical Angles\n3: Angle Relationships in Triangles', five: 'Angle / Segment Relationships\n1: Complementary and Supplementary Angles\n2: Vertical Angles\n3: Angle Relationships in Triangles\n4: Chapter Review & Quiz\nCircles, Perimeter, Area\n1: Circumference of a Circle' },
        { week: 'June 2nd week', topic: 'Angle/Segment Relationships & Circles, Perimeter, Area', one: 'Angle / Segment Relationships\n2: Vertical Angles', two: 'Angle / Segment Relationships\n3: Angle Relationships in Triangles\n4: Chapter Review & Quiz', three: 'Angle / Segment Relationships\n4: Chapter Review & Quiz\nCircles, Perimeter, Area\n1: Circumference of a Circle\n2: Area of a Circle', five: 'Circles, Perimeter, Area\n2: Area of a Circle\n3: Perimeter and Area of Composite Figures\n4: Chapter Review & Quiz' },
        { week: 'June 3rd week', topic: 'Angle/Segment Relationships & Circles, Perimeter, Area', one: 'Angle / Segment Relationships\n3: Angle Relationships in Triangles', two: 'Circles, Perimeter, Area\n1: Circumference of a Circle\n2: Area of a Circle', three: 'Circles, Perimeter, Area\n3: Perimeter and Area of Composite Figures\n4: Chapter Review & Quiz', five: 'R: Cumulative Review Worksheets & Quiz' },
        { week: 'June 4th week', topic: 'Angle/Segment Relationships & Circles, Perimeter, Area', one: 'Angle / Segment Relationships\n4: Chapter Review & Quiz', two: 'Circles, Perimeter, Area\n3: Perimeter and Area of Composite Figures\n4: Chapter Review & Quiz', three: 'R: Cumulative Review Worksheets & Quiz', five: 'E: Enrichment Activities & Cumulative Practice' },
      ],
    },
    {
      month: 'July', chapterLabel: 'Quadrilaterals and Solids',
      rows: [
        { week: 'July 1st week', topic: 'Quadrilaterals and Solids', one: 'Quadrilaterals and Solids\n1: Classifying Quadrilaterals', two: 'Quadrilaterals and Solids\n1: Classifying Quadrilaterals\n2: Cross-Sections of Solids', three: 'Quadrilaterals and Solids\n1: Classifying Quadrilaterals\n2: Cross-Sections of Solids\n3: Surface Area and Volume', five: 'Quadrilaterals and Solids\n1: Classifying Quadrilaterals\n2: Cross-Sections of Solids\n3: Surface Area and Volume\n4: Chapter Review & Quiz' },
        { week: 'July 2nd week', topic: 'Quadrilaterals and Solids', one: 'Quadrilaterals and Solids\n2: Cross-Sections of Solids', two: 'Quadrilaterals and Solids\n3: Surface Area and Volume\n4: Chapter Review & Quiz', three: 'Quadrilaterals and Solids\n4: Chapter Review & Quiz', five: 'R: Cumulative Review Worksheets & Quiz' },
        { week: 'July 3rd week', topic: 'Quadrilaterals and Solids', one: 'Quadrilaterals and Solids\n3: Surface Area and Volume', two: 'R: Cumulative Review Worksheets & Quiz', three: 'R: Cumulative Review Worksheets & Quiz', five: 'E: Enrichment Activities & Cumulative Practice' },
        { week: 'July 4th week', topic: 'Quadrilaterals and Solids', one: 'Quadrilaterals and Solids\n4: Chapter Review & Quiz', two: 'E: Enrichment Activities & Cumulative Practice', three: 'E: Enrichment Activities & Cumulative Practice', five: 'E: Enrichment Activities & Cumulative Practice' },
      ],
    },
    {
      month: 'August', chapterLabel: 'Statistics & Mental Math',
      rows: [
        { week: 'August 1st week', topic: 'Statistics & Mental Math', one: 'Statistics\n1: Measures of Central Tendency', two: 'Statistics\n1: Measures of Central Tendency\n2: Measures of Variability', three: 'Statistics\n1: Measures of Central Tendency\n2: Measures of Variability\n3: Comparing Data Sets', five: 'Statistics\n1: Measures of Central Tendency\n2: Measures of Variability\n3: Comparing Data Sets\n4: Chapter Review & Quiz\nMental Math\n1: Mental Math Strategies' },
        { week: 'August 2nd week', topic: 'Statistics & Mental Math', one: 'Statistics\n2: Measures of Variability', two: 'Statistics\n3: Comparing Data Sets\n4: Chapter Review & Quiz', three: 'Statistics\n4: Chapter Review & Quiz\nMental Math\n1: Mental Math Strategies\n2: Estimation Strategies', five: 'Mental Math\n2: Estimation Strategies\n3: Chapter Review & Quiz' },
        { week: 'August 3rd week', topic: 'Statistics & Mental Math', one: 'Statistics\n3: Comparing Data Sets', two: 'Mental Math\n1: Mental Math Strategies\n2: Estimation Strategies', three: 'Mental Math\n3: Chapter Review & Quiz', five: 'R: Cumulative Review Worksheets & Quiz' },
        { week: 'August 4th week', topic: 'Statistics & Mental Math', one: 'Statistics\n4: Chapter Review & Quiz', two: 'Mental Math\n3: Chapter Review & Quiz', three: 'R: Cumulative Review Worksheets & Quiz', five: 'E: Enrichment Activities & Cumulative Practice' },
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
