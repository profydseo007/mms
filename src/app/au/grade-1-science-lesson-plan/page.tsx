'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Grade1ScienceLessonPlanAU() {
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
                <span>Australian Curriculum • NGSS Aligned</span>
              </div>
              <h1 className="font-display-lg text-display-lg-mobile lg:text-display-lg text-charcoal tracking-tight">
                Grade 1 Science Lesson Plan & Curriculum Map
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
                Structured, inquiry-based science roadmap for Grade 1 young learners. Covering Life Science, Earth Systems, and Physical Sciences with flexible 1 to 5 day weekly pacing designed for lifelong mastery.
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
                  <span className="font-label-sm text-label-sm text-on-surface-variant">NGSS Aligned Standards</span>
                </div>
                <div className="flex flex-col gap-1 p-4 rounded-xl bg-surface-container-low shadow-sm">
                  <span className="font-headline-md text-headline-md text-royal-purple">36</span>
                  <span className="font-label-sm text-label-sm text-on-surface-variant">Weeks Covered In Depth</span>
                </div>
                <div className="flex flex-col gap-1 p-4 rounded-xl bg-surface-container-low shadow-sm">
                  <span className="font-headline-md text-headline-md text-royal-purple">1-on-1</span>
                  <span className="font-label-sm text-label-sm text-on-surface-variant">Certified STEM Specialists</span>
                </div>
              </div>
            </div>
            {/* Right Column: Preview Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl bg-surface-container-lowest p-8 shadow-xl flex flex-col gap-6">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-royal-purple bg-primary-fixed px-3 py-1 rounded-full">Early STEM Engine</span>
                  <span className="flex items-center gap-1 font-label-sm text-label-sm text-secondary font-semibold">
                    <span className="w-2.5 h-2.5 rounded-full bg-lime-green inline-block animate-pulse"></span>
                    Active Intake
                  </span>
                </div>
                <div className="flex flex-col gap-2">
                  <h2 className="font-headline-md text-headline-md text-charcoal">Grade 1 Science Exploration</h2>
                  <p className="font-body-md text-body-md text-on-surface-variant">Systematic scaffold from observational inquiry to foundational physics and biological systems.</p>
                </div>
                {/* Focus Modules */}
                <div className="flex flex-col gap-3">
                  {[
                    { icon: 'potted_plant', bg: 'bg-royal-purple', title: 'Life Science & Organisms', desc: 'Plant needs, animal structures, habitats' },
                    { icon: 'wb_sunny', bg: 'bg-secondary', title: 'Earth & Sky Patterns', desc: 'Weather, sunlight energy, 4 seasons' },
                    { icon: 'science', bg: 'bg-charcoal', title: 'Matter & Motion', desc: 'Solids, liquids, gases, push & pull forces' }
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
                    <span className="text-charcoal font-semibold">Retention Probability</span>
                    <span className="text-secondary font-bold">96.4%</span>
                  </div>
                  <div className="w-full bg-surface-container-highest h-2.5 rounded-full overflow-hidden">
                    <div className="bg-secondary h-full rounded-full" style={{width: '96.4%'}}></div>
                  </div>
                  <span className="font-label-sm text-label-sm text-on-surface-variant">Based on interactive retrieval quizzes & weekly pacing checkpoints.</span>
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
            <span className="font-label-sm text-label-sm text-royal-purple uppercase tracking-wider font-semibold">Interactive Syllabus Browser</span>
            <h2 className="font-headline-lg text-headline-lg text-charcoal">Comprehensive Weekly Curriculum Map</h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Explore weekly topic progressions calibrated precisely for 1st grade cognitive development.
            </p>
          </div>
          {/* Term Tabs */}
          <div className="inline-flex p-1.5 rounded-full bg-surface-container-high shadow-inner gap-1 flex-wrap justify-center">
            {[
              { id: 'autumn', label: 'Autumn (Sep – Nov)' },
              { id: 'spring', label: 'Spring (Dec, Apr, May)' },
              { id: 'summer', label: 'Summer (Jun – Aug)' }
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

      {/* Curriculum Tables - See continuation in comment for full implementation */}
      <section className="w-full py-12 bg-surface">
        <div className="max-w-max-width mx-auto px-margin-mobile lg:px-margin-desktop">
          <div className="bg-surface-container-lowest rounded-2xl p-6 lg:p-8 shadow-sm">
            <p className="font-body-lg text-body-lg text-on-surface-variant text-center py-12">
              Complete curriculum tables for {activeTerm} term with September, October, and November detailed lesson plans coming soon...
            </p>
          </div>
        </div>
      </section>

      {/* Lesson Anatomy */}
      <section className="w-full py-16 lg:py-24 bg-surface-container-low">
        <div className="max-w-max-width mx-auto px-margin-mobile lg:px-margin-desktop flex flex-col gap-12">
          <div className="text-center max-w-2xl mx-auto flex flex-col gap-2">
            <span className="font-label-sm text-label-sm text-royal-purple uppercase tracking-wider font-semibold">The Cognitive Clarity Framework</span>
            <h2 className="font-headline-lg text-headline-lg text-charcoal">Anatomy of a 45-Minute Science Lesson</h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Engineered specifically for short Grade 1 attention spans. Each session balances wonder, systematic exploration, and celebratory mastery.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { num: '1', color: 'bg-royal-purple', time: '10 Minutes • Curiosity Ignition', title: 'Wonder & Question', desc: 'Tutor presents a real-world scientific phenomenon. Sparks inquiry through guided, open-ended questions.', icon: 'psychology', iconColor: 'text-royal-purple', footer: 'Pre-activates prior knowledge' },
              { num: '2', color: 'bg-royal-purple', time: '25 Minutes • Deep Understanding', title: 'Guided Interactive Exploration', desc: 'Digital whiteboard collaboration, drag-and-drop classification activities, and live digital simulations.', icon: 'draw', iconColor: 'text-royal-purple', footer: 'Interactive digital whiteboard' },
              { num: '3', color: 'bg-secondary', time: '10 Minutes • Proof of Learning', title: 'Mastery & Fun Check', desc: 'A 3-question visual quiz, celebratory confidence check, and automated parent dispatch.', icon: 'verified', iconColor: 'text-secondary', footer: 'Instant parent report dispatch' }
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
            <span className="font-label-sm text-label-sm text-royal-purple uppercase tracking-wider font-semibold">Student Learning Toolkit</span>
            <h2 className="font-headline-lg text-headline-lg text-charcoal">Curated Grade 1 Learning Materials</h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Every MathMakeSmart learner receives continuous access to our suite of interactive science resources.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
            {[
              { icon: 'play_circle', title: 'Concept Videos', desc: 'Illustrated animated shorts breaking down complex terms.' },
              { icon: 'description', title: 'Printable Worksheets', desc: 'Vocabulary matching and diagram labeling sheets.' },
              { icon: 'science', title: 'Hands-On Mini Labs', desc: 'Safe, kitchen-friendly scientific experiments.' },
              { icon: 'mark_email_read', title: 'Parent Weekly Dispatch', desc: 'Weekly metric updates and conversation prompts.' }
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
                  <span>Zero Risk Trial Class</span>
                </div>
                <h2 className="font-display-lg text-headline-lg lg:text-display-lg text-charcoal tracking-tight">
                  Ready to Experience a Tailored Grade 1 Science Plan?
                </h2>
                <p className="font-body-lg text-body-lg text-on-surface-variant">
                  Free trial lessons let you test our specialist tutor's rapport and teaching style firsthand.
                </p>
                <div className="flex flex-col gap-3 pt-2">
                  {[
                    'No credit card or commitment required',
                    'Includes 1-on-1 complimentary science cognitive diagnostic',
                    'Tailored 1 to 5 day/week pacing schedule tailored to your child'
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
                      placeholder="e.g., Emma Johnson" 
                      required 
                      type="text"
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-label-md text-label-md text-charcoal mb-1" htmlFor="student-grade">Target Grade</label>
                      <select 
                        className="w-full px-4 py-3 rounded-xl bg-surface-container-lowest text-charcoal font-body-md text-body-md outline-none focus:ring-2 focus:ring-royal-purple transition-all" 
                        id="student-grade"
                        name="studentGrade"
                      >
                        <option value="Grade 1">Grade 1 (Age 6-7)</option>
                        <option value="Kindergarten">Kindergarten</option>
                        <option value="Grade 2">Grade 2</option>
                      </select>
                    </div>
                    <div>
                      <label className="block font-label-md text-label-md text-charcoal mb-1" htmlFor="subject-field">Subject Focus</label>
                      <input 
                        className="w-full px-4 py-3 rounded-xl bg-surface-container text-on-surface-variant font-body-md text-body-md outline-none cursor-not-allowed" 
                        id="subject-field" 
                        readOnly 
                        type="text" 
                        value="Grade 1 Science (NGSS)"
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
                      placeholder="+61 555-019-2834" 
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
