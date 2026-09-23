'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function YearOneMathLessonPlan() {
  const [activeTerm, setActiveTerm] = useState('autumn');

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const checkInput = (form.elements.namedItem('mathCheck') as HTMLInputElement).value;
    
    if (parseInt(checkInput) !== 15) {
      alert('Please solve the verification math check correctly (13 + 2 = 15).');
      return;
    }

    const btn = document.getElementById('submit-btn');
    const msg = document.getElementById('form-msg');
    
    if (btn && msg) {
      (btn as HTMLButtonElement).disabled = true;
      btn.innerHTML = 'Submitting Request...';
      
      setTimeout(() => {
        btn.classList.add('hidden');
        msg.classList.remove('hidden');
      }, 600);
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="w-full py-16 lg:py-24 bg-surface">
        <div className="max-w-max-width mx-auto px-margin-mobile lg:px-margin-desktop">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
            {/* Left Column */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              <div className="inline-flex items-center gap-2 self-start px-3.5 py-1.5 rounded-full bg-secondary-container/30 text-secondary font-label-sm text-label-sm">
                <span className="material-symbols-outlined text-[16px] text-secondary">verified</span>
                <span>Australian Curriculum • Year 1 Mathematics</span>
              </div>
              <h1 className="font-display-lg text-display-lg-mobile lg:text-display-lg text-charcoal tracking-tight">
                Year 1 Math Lesson Plan & Curriculum Map
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
                Comprehensive, mastery-focused mathematics roadmap for Year 1 learners. Covering Number & Algebra, Measurement & Geometry, and Statistics & Probability with flexible 1 to 5 day weekly pacing designed for lifelong numeracy.
              </p>
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button 
                  className="inline-flex items-center justify-center px-7 py-3.5 rounded-full font-label-md text-label-md bg-royal-purple text-on-primary shadow-sm hover:bg-primary transition-colors" 
                  onClick={() => document.getElementById('curriculum-table')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Explore Lesson Maps
                </button>
                <button 
                  className="inline-flex items-center justify-center px-7 py-3.5 rounded-full font-label-md text-label-md text-royal-purple bg-surface-container hover:bg-surface-container-high transition-colors" 
                  onClick={() => document.getElementById('book-trial')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Book Free Trial
                </button>
              </div>
              {/* Key Metrics */}
              <div className="grid grid-cols-3 gap-4 pt-6 mt-4">
                <div className="flex flex-col gap-1 p-4 rounded-xl bg-surface-container-low shadow-sm">
                  <span className="font-headline-md text-headline-md text-royal-purple">100%</span>
                  <span className="font-label-sm text-label-sm text-on-surface-variant">Australian Curriculum Aligned</span>
                </div>
                <div className="flex flex-col gap-1 p-4 rounded-xl bg-surface-container-low shadow-sm">
                  <span className="font-headline-md text-headline-md text-royal-purple">36</span>
                  <span className="font-label-sm text-label-sm text-on-surface-variant">Weeks Covered In Depth</span>
                </div>
                <div className="flex flex-col gap-1 p-4 rounded-xl bg-surface-container-low shadow-sm">
                  <span className="font-headline-md text-headline-md text-royal-purple">1-on-1</span>
                  <span className="font-label-sm text-label-sm text-on-surface-variant">Expert Math Tutors</span>
                </div>
              </div>
            </div>
            {/* Right Column: Preview Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl bg-surface-container-lowest p-8 shadow-xl flex flex-col gap-6">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-royal-purple bg-primary-fixed px-3 py-1 rounded-full">Year 1 Mastery Track</span>
                  <span className="flex items-center gap-1 font-label-sm text-label-sm text-secondary font-semibold">
                    <span className="w-2.5 h-2.5 rounded-full bg-lime-green inline-block animate-pulse"></span>
                    Active Intake
                  </span>
                </div>
                <div className="flex flex-col gap-2">
                  <h2 className="font-headline-md text-headline-md text-charcoal">Year 1 Mathematics Journey</h2>
                  <p className="font-body-md text-body-md text-on-surface-variant">Systematic progression from concrete counting to abstract number concepts and spatial reasoning.</p>
                </div>
                {/* Focus Modules */}
                <div className="flex flex-col gap-3">
                  {[
                    { icon: 'calculate', bg: 'bg-royal-purple', title: 'Number & Place Value', desc: 'Counting to 100, addition, subtraction' },
                    { icon: 'straighten', bg: 'bg-secondary', title: 'Measurement & Geometry', desc: 'Length, mass, time, shapes, patterns' },
                    { icon: 'bar_chart', bg: 'bg-charcoal', title: 'Statistics & Probability', desc: 'Data collection, simple graphs, chance' }
                  ].map((module, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-3 rounded-xl bg-surface-container-low">
                      <div className={`w-10 h-10 rounded-lg ${module.bg} text-on-primary flex items-center justify-center shrink-0`}>
                        <span className="material-symbols-outlined text-[20px]">{module.icon}</span>
                      </div>
                      <div className="flex flex-col min-w-0">
                        <span className="font-label-md text-label-md text-charcoal truncate">{module.title}</span>
                        <span className="font-label-sm text-label-sm text-on-surface-variant">{module.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>
                {/* Retention Indicator */}
                <div className="p-4 rounded-xl bg-soft-gray flex flex-col gap-2">
                  <div className="flex items-center justify-between font-label-md text-label-md">
                    <span className="text-charcoal font-semibold">Mastery Achievement Rate</span>
                    <span className="text-secondary font-bold">97.2%</span>
                  </div>
                  <div className="w-full bg-surface-container-highest h-2.5 rounded-full overflow-hidden">
                    <div className="bg-secondary h-full rounded-full" style={{width: '97.2%'}}></div>
                  </div>
                  <span className="font-label-sm text-label-sm text-on-surface-variant">Based on weekly checkpoints & adaptive problem-solving tasks.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Term Selector */}
      <section className="w-full py-12 bg-surface-container-low" id="curriculum-table">
        <div className="max-w-max-width mx-auto px-margin-mobile lg:px-margin-desktop flex flex-col items-center gap-6">
          <div className="text-center max-w-2xl flex flex-col gap-2">
            <span className="font-label-sm text-label-sm text-royal-purple uppercase tracking-wider font-semibold">Interactive Curriculum Browser</span>
            <h2 className="font-headline-lg text-headline-lg text-charcoal">Comprehensive Weekly Math Curriculum Map</h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Explore weekly topic progressions calibrated precisely for Year 1 developmental stages.
            </p>
          </div>
          {/* Term Tabs */}
          <div className="inline-flex p-1.5 rounded-full bg-surface-container-high shadow-inner gap-1 flex-wrap justify-center">
            {[
              { id: 'autumn', label: 'Term 1 (Feb – Apr)' },
              { id: 'spring', label: 'Term 2 & 3 (Apr – Sep)' },
              { id: 'summer', label: 'Term 4 (Oct – Dec)' }
            ].map(term => (
              <button
                key={term.id}
                className={`px-6 py-2.5 rounded-full font-label-md text-label-md transition-all duration-200 ${
                  activeTerm === term.id 
                    ? 'bg-royal-purple text-on-primary shadow-sm' 
                    : 'text-on-surface-variant hover:text-charcoal'
                }`}
                onClick={() => setActiveTerm(term.id)}
              >
                {term.label}
              </button>
            ))}
          </div>
          {/* Pacing Pills */}
          <div className="flex flex-wrap items-center justify-center gap-3 text-center px-4 py-2 rounded-full bg-surface-container-lowest shadow-sm">
            <span className="font-label-sm text-label-sm text-charcoal font-semibold">Available Tracks:</span>
            <span className="px-2.5 py-1 rounded-full font-label-sm text-label-sm bg-surface-container text-on-surface-variant">1 Day/Wk (Core)</span>
            <span className="px-2.5 py-1 rounded-full font-label-sm text-label-sm bg-surface-container text-on-surface-variant">2 Days/Wk (Reinforced)</span>
            <span className="px-2.5 py-1 rounded-full font-label-sm text-label-sm bg-surface-container text-on-surface-variant">3 Days/Wk (Advanced)</span>
            <span className="px-2.5 py-1 rounded-full font-label-sm text-label-sm bg-secondary-container/40 text-secondary font-bold">5 Days/Wk (Daily Mastery)</span>
          </div>
        </div>
      </section>

      {/* Curriculum Tables */}
      <section className="w-full py-12 bg-surface">
        <div className="max-w-max-width mx-auto px-margin-mobile lg:px-margin-desktop flex flex-col gap-12">
          {/* Term 1 - Autumn */}
          {activeTerm === 'autumn' && (
            <div className="flex flex-col gap-10">
              {/* February-March: Number Foundations */}
              <div className="bg-surface-container-lowest rounded-2xl p-6 lg:p-8 shadow-sm flex flex-col gap-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span className="w-10 h-10 rounded-full bg-royal-purple/10 text-royal-purple font-headline-md text-headline-md flex items-center justify-center font-bold">01</span>
                    <div>
                      <h3 className="font-headline-md text-headline-md text-charcoal">Feb-Mar: Number Foundations</h3>
                      <p className="font-body-md text-body-md text-on-surface-variant">Counting, Place Value & Basic Addition/Subtraction</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-secondary-container/30 text-secondary font-label-sm text-label-sm">Number & Algebra</span>
                    <button 
                      className="px-4 py-2 rounded-full font-label-sm text-label-sm text-royal-purple bg-primary-fixed hover:bg-primary-fixed-dim transition-colors"
                      onClick={() => document.getElementById('book-trial')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                      Book Diagnostic
                    </button>
                  </div>
                </div>
                {/* Table */}
                <div className="overflow-x-auto">
                  <table className="w-full text-left font-body-md text-body-md">
                    <thead>
                      <tr className="bg-surface-container-low text-charcoal font-headline-md text-label-md">
                        <th className="py-3 px-4 rounded-l-lg w-1/5">Pacing Timeline</th>
                        <th className="py-3 px-4 w-1/5">1 Day / Wk</th>
                        <th className="py-3 px-4 w-1/5">2 Days / Wk</th>
                        <th className="py-3 px-4 w-1/5">3 Days / Wk</th>
                        <th className="py-3 px-4 rounded-r-lg w-1/5">5 Days / Wk (Full Mastery)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-transparent text-on-surface-variant">
                      <tr className="hover:bg-surface-container-low/50 transition-colors">
                        <td className="py-4 px-4 font-semibold text-charcoal">
                          Week 1-2 <span className="block font-label-sm text-label-sm text-royal-purple font-normal">Counting to 20</span>
                        </td>
                        <td className="py-4 px-4 font-label-md text-label-md">Count & Order Numbers</td>
                        <td className="py-4 px-4 font-label-md text-label-md">1: Counting Objects<br/>2: Number Order & Patterns</td>
                        <td className="py-4 px-4 font-label-md text-label-md">1: Counting Objects<br/>2: Number Order<br/>3: Before/After Numbers</td>
                        <td className="py-4 px-4 font-label-md text-label-md text-charcoal font-medium">
                          1: Counting Objects<br/>2: Number Order<br/>3: Before/After<br/>4: Skip Counting by 2s<br/>5: Review & Games
                        </td>
                      </tr>
                      <tr className="hover:bg-surface-container-low/50 transition-colors">
                        <td className="py-4 px-4 font-semibold text-charcoal">
                          Week 3-4 <span className="block font-label-sm text-label-sm text-royal-purple font-normal">Addition Concepts</span>
                        </td>
                        <td className="py-4 px-4 font-label-md text-label-md">Addition with Objects</td>
                        <td className="py-4 px-4 font-label-md text-label-md">Addition with Objects + Number Sentences</td>
                        <td className="py-4 px-4 font-label-md text-label-md">Objects + Sentences + Word Problems</td>
                        <td className="py-4 px-4 font-label-md text-label-md text-charcoal font-medium">
                          Concrete + Pictorial + Abstract Addition + Story Problems + Mental Math
                        </td>
                      </tr>
                      <tr className="hover:bg-surface-container-low/50 transition-colors">
                        <td className="py-4 px-4 font-semibold text-charcoal">
                          Week 5-6 <span className="block font-label-sm text-label-sm text-royal-purple font-normal">Subtraction Concepts</span>
                        </td>
                        <td className="py-4 px-4 font-label-md text-label-md">Taking Away Objects</td>
                        <td className="py-4 px-4 font-label-md text-label-md">Taking Away + Subtraction Sentences</td>
                        <td className="py-4 px-4 font-label-md text-label-md">Taking Away + Sentences + Word Problems</td>
                        <td className="py-4 px-4 font-label-md text-label-md text-charcoal font-medium">
                          Concrete + Pictorial + Abstract Subtraction + Story Problems + Mental Math
                        </td>
                      </tr>
                      <tr className="hover:bg-surface-container-low/50 transition-colors">
                        <td className="py-4 px-4 font-semibold text-charcoal">
                          Week 7-8 <span className="block font-label-sm text-label-sm text-royal-purple font-normal">Place Value to 20</span>
                        </td>
                        <td className="py-4 px-4 font-label-md text-label-md">Tens & Ones</td>
                        <td className="py-4 px-4 font-label-md text-label-md">Tens & Ones + Expanded Form</td>
                        <td className="py-4 px-4 font-label-md text-label-md">Tens/Ones + Expanded Form + Comparing</td>
                        <td className="py-4 px-4 font-label-md text-label-md text-charcoal font-medium">
                          Full Place Value Mastery + Number Lines + Assessment
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* April: Measurement Basics */}
              <div className="bg-surface-container-lowest rounded-2xl p-6 lg:p-8 shadow-sm flex flex-col gap-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span className="w-10 h-10 rounded-full bg-royal-purple/10 text-royal-purple font-headline-md text-headline-md flex items-center justify-center font-bold">02</span>
                    <div>
                      <h3 className="font-headline-md text-headline-md text-charcoal">April: Measurement & Time</h3>
                      <p className="font-body-md text-body-md text-on-surface-variant">Length, Mass, Capacity & Time Concepts</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-secondary-container/30 text-secondary font-label-sm text-label-sm self-start md:self-auto">Measurement & Geometry</span>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left font-body-md text-body-md">
                    <thead>
                      <tr className="bg-surface-container-low text-charcoal font-headline-md text-label-md">
                        <th className="py-3 px-4 rounded-l-lg w-1/5">Timeline</th>
                        <th className="py-3 px-4 w-1/5">1 Day / Wk</th>
                        <th className="py-3 px-4 w-1/5">2 Days / Wk</th>
                        <th className="py-3 px-4 w-1/5">3 Days / Wk</th>
                        <th className="py-3 px-4 rounded-r-lg w-1/5">5 Days / Wk</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-transparent text-on-surface-variant">
                      <tr className="hover:bg-surface-container-low/50 transition-colors">
                        <td className="py-4 px-4 font-semibold text-charcoal">Week 9-10 (Length)</td>
                        <td className="py-4 px-4 font-label-md text-label-md">Comparing Lengths</td>
                        <td className="py-4 px-4 font-label-md text-label-md">Comparing + Ordering Lengths</td>
                        <td className="py-4 px-4 font-label-md text-label-md">Compare + Order + Informal Units</td>
                        <td className="py-4 px-4 font-label-md text-label-md text-charcoal font-medium">Full Length Module + Hands-On Activities</td>
                      </tr>
                      <tr className="hover:bg-surface-container-low/50 transition-colors">
                        <td className="py-4 px-4 font-semibold text-charcoal">Week 11-12 (Time)</td>
                        <td className="py-4 px-4 font-label-md text-label-md">Days of the Week</td>
                        <td className="py-4 px-4 font-label-md text-label-md">Days + Months of Year</td>
                        <td className="py-4 px-4 font-label-md text-label-md">Days + Months + O'clock Times</td>
                        <td className="py-4 px-4 font-label-md text-label-md text-charcoal font-medium">Complete Time Concepts + Reading Clocks</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* Term 2 & 3 */}
          {activeTerm === 'spring' && (
            <div className="bg-surface-container-lowest rounded-2xl p-6 lg:p-8 shadow-sm flex flex-col gap-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="w-10 h-10 rounded-full bg-royal-purple/10 text-royal-purple font-headline-md text-headline-md flex items-center justify-center font-bold">03</span>
                  <div>
                    <h3 className="font-headline-md text-headline-md text-charcoal">Term 2 & 3: Advanced Number & Geometry</h3>
                    <p className="font-body-md text-body-md text-on-surface-variant">Counting to 100, 2D/3D Shapes, Patterns & Data</p>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full bg-secondary-container/30 text-secondary font-label-sm text-label-sm self-start md:self-auto">All Strands</span>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left font-body-md text-body-md">
                  <thead>
                    <tr className="bg-surface-container-low text-charcoal font-headline-md text-label-md">
                      <th className="py-3 px-4 rounded-l-lg w-1/5">Module</th>
                      <th className="py-3 px-4 w-1/5">1 Day / Wk</th>
                      <th className="py-3 px-4 w-1/5">2 Days / Wk</th>
                      <th className="py-3 px-4 w-1/5">3 Days / Wk</th>
                      <th className="py-3 px-4 rounded-r-lg w-1/5">5 Days / Wk</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-transparent text-on-surface-variant">
                    <tr className="hover:bg-surface-container-low/50 transition-colors">
                      <td className="py-4 px-4 font-semibold text-charcoal">Numbers to 100</td>
                      <td className="py-4 px-4 font-label-md text-label-md">Skip Counting</td>
                      <td className="py-4 px-4 font-label-md text-label-md">Skip Counting + Place Value</td>
                      <td className="py-4 px-4 font-label-md text-label-md">Full Counting + Place Value + Comparison</td>
                      <td className="py-4 px-4 font-label-md text-label-md text-charcoal font-medium">Comprehensive Number Sense to 100</td>
                    </tr>
                    <tr className="hover:bg-surface-container-low/50 transition-colors">
                      <td className="py-4 px-4 font-semibold text-charcoal">2D & 3D Shapes</td>
                      <td className="py-4 px-4 font-label-md text-label-md">Naming Shapes</td>
                      <td className="py-4 px-4 font-label-md text-label-md">Naming + Properties</td>
                      <td className="py-4 px-4 font-label-md text-label-md">Names + Properties + Sorting</td>
                      <td className="py-4 px-4 font-label-md text-label-md text-charcoal font-medium">Complete Shape Geometry + Real-World</td>
                    </tr>
                    <tr className="hover:bg-surface-container-low/50 transition-colors">
                      <td className="py-4 px-4 font-semibold text-charcoal">Patterns & Data</td>
                      <td className="py-4 px-4 font-label-md text-label-md">Pattern Recognition</td>
                      <td className="py-4 px-4 font-label-md text-label-md">Patterns + Simple Graphs</td>
                      <td className="py-4 px-4 font-label-md text-label-md">Patterns + Graphs + Data Collection</td>
                      <td className="py-4 px-4 font-label-md text-label-md text-charcoal font-medium">Full Statistics & Probability Foundation</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Term 4 */}
          {activeTerm === 'summer' && (
            <div className="bg-surface-container-lowest rounded-2xl p-6 lg:p-8 shadow-sm flex flex-col gap-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="w-10 h-10 rounded-full bg-royal-purple/10 text-royal-purple font-headline-md text-headline-md flex items-center justify-center font-bold">04</span>
                  <div>
                    <h3 className="font-headline-md text-headline-md text-charcoal">Term 4: Consolidation & Enrichment</h3>
                    <p className="font-body-md text-body-md text-on-surface-variant">Review, Challenge Tasks & Year 2 Readiness</p>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full bg-secondary-container/30 text-secondary font-label-sm text-label-sm self-start md:self-auto">Integration</span>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left font-body-md text-body-md">
                  <thead>
                    <tr className="bg-surface-container-low text-charcoal font-headline-md text-label-md">
                      <th className="py-3 px-4 rounded-l-lg w-1/5">Focus Area</th>
                      <th className="py-3 px-4 w-1/5">1 Day / Wk</th>
                      <th className="py-3 px-4 w-1/5">2 Days / Wk</th>
                      <th className="py-3 px-4 w-1/5">3 Days / Wk</th>
                      <th className="py-3 px-4 rounded-r-lg w-1/5">5 Days / Wk</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-transparent text-on-surface-variant">
                    <tr className="hover:bg-surface-container-low/50 transition-colors">
                      <td className="py-4 px-4 font-semibold text-charcoal">Number Review</td>
                      <td className="py-4 px-4 font-label-md text-label-md">Add & Subtract Revision</td>
                      <td className="py-4 px-4 font-label-md text-label-md">Operations + Word Problems</td>
                      <td className="py-4 px-4 font-label-md text-label-md">Full Number Operations Review</td>
                      <td className="py-4 px-4 font-label-md text-label-md text-charcoal font-medium">Complete Year 1 Number Consolidation</td>
                    </tr>
                    <tr className="hover:bg-surface-container-low/50 transition-colors">
                      <td className="py-4 px-4 font-semibold text-charcoal">Challenge & Extension</td>
                      <td className="py-4 px-4 font-label-md text-label-md">Problem Solving</td>
                      <td className="py-4 px-4 font-label-md text-label-md">Problem Solving + Logic Puzzles</td>
                      <td className="py-4 px-4 font-label-md text-label-md">Problem Solving + Puzzles + Games</td>
                      <td className="py-4 px-4 font-label-md text-label-md text-charcoal font-medium">Year 2 Preview + Advanced Challenges</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Lesson Anatomy */}
      <section className="w-full py-16 lg:py-24 bg-surface-container-low">
        <div className="max-w-max-width mx-auto px-margin-mobile lg:px-margin-desktop flex flex-col gap-12">
          <div className="text-center max-w-2xl mx-auto flex flex-col gap-2">
            <span className="font-label-sm text-label-sm text-royal-purple uppercase tracking-wider font-semibold">The Mastery Learning Method</span>
            <h2 className="font-headline-lg text-headline-lg text-charcoal">Anatomy of a 45-Minute Math Lesson</h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Designed for optimal Year 1 engagement. Each session follows the Concrete-Pictorial-Abstract approach for deep understanding.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { num: '1', color: 'bg-royal-purple', time: '10 Minutes • Mental Warm-Up', title: 'Number Fluency', desc: 'Quick counting games, number bonds, and mental math exercises to activate mathematical thinking.', icon: 'psychology', iconColor: 'text-royal-purple', footer: 'Builds automaticity' },
              { num: '2', color: 'bg-royal-purple', time: '25 Minutes • Concept Learning', title: 'Concrete to Abstract', desc: 'Hands-on manipulatives, visual models, then symbolic notation. Students construct their own understanding.', icon: 'lightbulb', iconColor: 'text-royal-purple', footer: 'Multi-sensory approach' },
              { num: '3', color: 'bg-secondary', time: '10 Minutes • Practice & Check', title: 'Independent Application', desc: 'Guided practice problems, instant feedback, and parent report with next steps.', icon: 'verified', iconColor: 'text-secondary', footer: 'Mastery confirmation' }
            ].map((step, idx) => (
              <div key={idx} className="bg-surface-container-lowest rounded-2xl p-8 shadow-sm flex flex-col gap-4">
                <div className={`w-12 h-12 rounded-xl ${step.color} text-on-primary flex items-center justify-center font-headline-md text-headline-md`}>
                  {step.num}
                </div>
                <span className={`font-label-sm text-label-sm font-semibold ${step.color === 'bg-secondary' ? 'text-secondary' : 'text-royal-purple'}`}>{step.time}</span>
                <h3 className="font-headline-md text-headline-md text-charcoal">{step.title}</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">{step.desc}</p>
                <div className="mt-auto pt-4 flex items-center gap-2 text-charcoal font-label-sm text-label-sm">
                  <span className={`material-symbols-outlined text-[18px] ${step.iconColor}`}>{step.icon}</span>
                  <span>{step.footer}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="w-full py-16 bg-surface">
        <div className="max-w-max-width mx-auto px-margin-mobile lg:px-margin-desktop flex flex-col gap-12">
          <div className="text-center max-w-2xl mx-auto flex flex-col gap-2">
            <span className="font-label-sm text-label-sm text-royal-purple uppercase tracking-wider font-semibold">Learning Resources</span>
            <h2 className="font-headline-lg text-headline-lg text-charcoal">Curated Year 1 Math Materials</h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Every learner receives continuous access to our comprehensive mathematics resource library.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
            {[
              { icon: 'play_circle', title: 'Video Lessons', desc: 'Animated explanations of key mathematical concepts.' },
              { icon: 'description', title: 'Practice Worksheets', desc: 'Printable exercises aligned to each lesson topic.' },
              { icon: 'extension', title: 'Math Manipulatives', desc: 'Virtual and physical tools for hands-on learning.' },
              { icon: 'assignment_turned_in', title: 'Progress Reports', desc: 'Weekly updates showing mastery and growth areas.' }
            ].map((resource, idx) => (
              <div key={idx} className="bg-surface-container-lowest p-6 rounded-xl shadow-sm flex flex-col gap-3">
                <div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center text-royal-purple">
                  <span className="material-symbols-outlined text-[26px]">{resource.icon}</span>
                </div>
                <h3 className="font-headline-md text-label-md text-charcoal font-semibold">{resource.title}</h3>
                <p className="font-body-md text-label-sm text-on-surface-variant">{resource.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA & Booking */}
      <section className="w-full py-16 lg:py-24 bg-surface-container-low" id="book-trial">
        <div className="max-w-max-width mx-auto px-margin-mobile lg:px-margin-desktop">
          <div className="bg-surface-container-lowest rounded-3xl p-8 lg:p-14 shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Left Column */}
              <div className="lg:col-span-6 flex flex-col gap-6">
                <div className="inline-flex items-center gap-2 self-start px-3.5 py-1.5 rounded-full bg-secondary-container/30 text-secondary font-label-sm text-label-sm">
                  <span className="material-symbols-outlined text-[16px]">check_circle</span>
                  <span>Risk-Free Trial Lesson</span>
                </div>
                <h2 className="font-display-lg text-headline-lg lg:text-display-lg text-charcoal tracking-tight">
                  Ready to Experience Year 1 Math Excellence?
                </h2>
                <p className="font-body-lg text-body-lg text-on-surface-variant">
                  Free trial lessons let you experience our expert tutors and proven teaching methodology firsthand.
                </p>
                <div className="flex flex-col gap-3 pt-2">
                  {[
                    'No credit card or commitment required',
                    'Includes 1-on-1 complimentary diagnostic assessment',
                    'Flexible pacing: 1 to 5 days per week options'
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-secondary text-[20px]">done</span>
                      <span className="font-body-md text-body-md text-charcoal">{item}</span>
                    </div>
                  ))}
                </div>
                {/* Contact Numbers */}
                <div className="pt-6 border-t border-surface-container flex flex-col gap-2">
                  <span className="font-label-md text-label-md text-charcoal font-semibold">Immediate Assistance Lines:</span>
                  <div className="grid grid-cols-2 gap-2 font-label-sm text-label-sm text-on-surface-variant">
                    <span>USA: +1 347 491 4870</span>
                    <span>UK: +44 740 001 8383</span>
                    <span>CA: +1 647 492 5264</span>
                    <span>AUS: +61 48 089 0005</span>
                  </div>
                </div>
              </div>
              {/* Right Column: Form */}
              <div className="lg:col-span-6 bg-surface-container-low p-8 rounded-2xl shadow-sm flex flex-col gap-6">
                <div>
                  <h3 className="font-headline-md text-headline-md text-charcoal">Book Your Free Trial Lesson</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">Select availability • Takes 60 seconds</p>
                </div>
                <form className="flex flex-col gap-4" onSubmit={handleFormSubmit}>
                  <div>
                    <label className="block font-label-md text-label-md text-charcoal mb-1" htmlFor="student-name">Student Full Name</label>
                    <input 
                      className="w-full px-4 py-3 rounded-xl bg-surface-container-lowest text-charcoal font-body-md text-body-md outline-none focus:ring-2 focus:ring-royal-purple transition-all placeholder:text-outline-variant" 
                      id="student-name" 
                      name="studentName"
                      placeholder="e.g., Oliver Smith" 
                      required 
                      type="text"
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-label-md text-label-md text-charcoal mb-1" htmlFor="student-grade">Target Year Level</label>
                      <select 
                        className="w-full px-4 py-3 rounded-xl bg-surface-container-lowest text-charcoal font-body-md text-body-md outline-none focus:ring-2 focus:ring-royal-purple transition-all" 
                        id="student-grade"
                        name="studentGrade"
                      >
                        <option value="Year 1">Year 1 (Age 6-7)</option>
                        <option value="Prep/Kindergarten">Prep/Kindergarten</option>
                        <option value="Year 2">Year 2</option>
                      </select>
                    </div>
                    <div>
                      <label className="block font-label-md text-label-md text-charcoal mb-1" htmlFor="subject-field">Subject Focus</label>
                      <input 
                        className="w-full px-4 py-3 rounded-xl bg-surface-container text-on-surface-variant font-body-md text-body-md outline-none cursor-not-allowed" 
                        id="subject-field" 
                        readOnly 
                        type="text" 
                        value="Year 1 Mathematics"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block font-label-md text-label-md text-charcoal mb-1" htmlFor="parent-email">Parent Email Address</label>
                    <input 
                      className="w-full px-4 py-3 rounded-xl bg-surface-container-lowest text-charcoal font-body-md text-body-md outline-none focus:ring-2 focus:ring-royal-purple transition-all placeholder:text-outline-variant" 
                      id="parent-email" 
                      name="parentEmail"
                      placeholder="parent@example.com" 
                      required 
                      type="email"
                    />
                  </div>
                  <div>
                    <label className="block font-label-md text-label-md text-charcoal mb-1" htmlFor="phone-number">Phone Number (with country code)</label>
                    <input 
                      className="w-full px-4 py-3 rounded-xl bg-surface-container-lowest text-charcoal font-body-md text-body-md outline-none focus:ring-2 focus:ring-royal-purple transition-all placeholder:text-outline-variant" 
                      id="phone-number" 
                      name="phoneNumber"
                      placeholder="+61 412 345 678" 
                      type="tel"
                    />
                  </div>
                  <div>
                    <label className="block font-label-md text-label-md text-charcoal mb-1" htmlFor="math-check">Quick Verification: 13 + 2 = ?</label>
                    <input 
                      className="w-full px-4 py-3 rounded-xl bg-surface-container-lowest text-charcoal font-body-md text-body-md outline-none focus:ring-2 focus:ring-royal-purple transition-all placeholder:text-outline-variant" 
                      id="math-check" 
                      name="mathCheck"
                      placeholder="15" 
                      required 
                      type="number"
                    />
                  </div>
                  <button 
                    className="w-full mt-2 py-4 rounded-full font-label-md text-label-md bg-royal-purple text-on-primary font-semibold hover:bg-primary transition-colors shadow-md flex items-center justify-center gap-2" 
                    id="submit-btn" 
                    type="submit"
                  >
                    <span>Book Free Trial Now</span>
                    <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                  </button>
                  <p className="hidden text-center font-label-sm text-label-sm text-secondary font-medium" id="form-msg">
                    Thank you! Your trial request has been submitted. A student advisor will confirm your timeslot via email within 2 hours.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
