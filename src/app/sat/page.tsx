'use client';

import React, { useState } from 'react';
import { useAppNavigate } from '@/lib/useAppNavigate';

export default function USSatPage() {
  const { navigateTo } = useAppNavigate();
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ fullName: '', phone: '', email: '', targetScore: '1400+', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.fullName && formData.email) setFormSubmitted(true);
  };

  const faqs = [
    { q: 'What does the SAT test?', a: 'The current SAT (digital, since March 2024) tests Reading & Writing (one section, 64 questions) and Math (one section, 44 questions), for a total score of 400–1600. The test is adaptive — the difficulty of Module 2 is determined by your Module 1 performance.' },
    { q: 'How is the digital SAT different from the old paper SAT?', a: 'The digital SAT is shorter (2 hours 14 minutes vs over 3 hours), fully adaptive, and allows calculator use throughout the Math section. The passages in Reading & Writing are shorter and each question stands alone rather than referencing a shared passage.' },
    { q: 'How many times can I take the SAT?', a: 'There is no limit on how many times you can take the SAT. College Board offers the SAT seven times per year in the US. Most students take it in the spring of junior year, then again in the fall of senior year if needed.' },
    { q: 'What is a good SAT score?', a: 'The national average is around 1010. Highly selective universities typically look for 1450+. Most four-year colleges consider a 1100–1200 competitive. The right target depends on the specific schools on your list, which we help you identify.' },
    { q: 'How long should I prepare for the SAT?', a: 'Most students see meaningful improvement with 8–12 weeks of focused preparation. Students aiming for significant score gains (200+ points) typically benefit from 3–6 months of consistent work, ideally starting in sophomore or early junior year.' },
  ];

  return (
    <div className="bg-background text-on-surface font-body-md overflow-x-hidden">
      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-center py-16 overflow-hidden bg-white">
        <div className="container mx-auto px-margin-mobile md:px-margin-desktop max-w-max-width relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-gutter items-center">
            <div className="space-y-8">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-label-md text-label-md uppercase tracking-wider font-semibold">
                Scholastic Assessment Test
              </span>
              <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-charcoal leading-tight font-bold">
                SAT preparation by <span className="text-royal-purple">expert tutors</span>
              </h1>
              <p className="text-on-surface-variant font-body-lg text-body-lg max-w-xl">
                The SAT is one of the two major college admissions tests in the US. We prepare students for the digital SAT — the adaptive, two-section format that replaced the paper test in 2024 — and target the specific score range each college requires.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button onClick={() => navigateTo('trial')} className="bg-royal-purple text-on-primary px-8 py-4 rounded-xl font-headline-md hover:shadow-xl transition-all cursor-pointer font-medium">Book a Free Trial</button>
                <button onClick={() => { const el = document.getElementById('sat-sections'); if (el) el.scrollIntoView({ behavior: 'smooth' }); }} className="border-2 border-royal-purple text-royal-purple px-8 py-4 rounded-xl font-headline-md hover:bg-royal-purple/5 transition-all cursor-pointer font-medium">View Test Sections</button>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img className="w-full h-[480px] object-cover" alt="Student preparing for SAT on a laptop" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBIC2148RcAcfRXxnZOcCNJC2Yr32DtyHa7d1TOD82ZBuHm5-qZ-Hfyjuic-1MLI6po5tOU8XT7FUpGqvgdHGzRwEInHX72mGWsxX-9nVAlOqT4sbH-gqYAG5YfaLbivq9Je_ZI7ity8vsit3aPnhFxzYCZ7Vd3uaU5jtItj5k130NViqjkJsMWfhwBn54qZk6DOAoC1XqgTsCbUlAYR6O8_Q9eb3Xz1j99Ujc64cOxRy0f-IOnZz3fvw" />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl max-w-xs border border-outline-variant/30">
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-10 h-10 rounded-full bg-lime-green flex items-center justify-center"><span className="material-symbols-outlined text-charcoal">trending_up</span></div>
                  <span className="font-headline-md text-charcoal font-bold">Score Improvement</span>
                </div>
                <p className="text-on-surface-variant text-label-md">Students gain an average of 150+ points within 10 weeks.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Test structure */}
      <section className="py-24 bg-soft-gray">
        <div className="container mx-auto px-margin-mobile md:px-margin-desktop max-w-max-width">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="font-headline-lg text-headline-lg text-charcoal font-bold">The Digital SAT structure</h2>
              <p className="text-on-surface-variant font-body-lg leading-relaxed">Introduced in March 2024, the digital SAT uses a multistage adaptive model. Both the Reading &amp; Writing section and the Math section have two modules — the difficulty of Module 2 is set by your Module 1 performance. Getting into the harder Module 2 is critical for scores above 1400.</p>
              <p className="text-on-surface-variant font-body-md">Our tutors teach both the content and the adaptive strategy: how to pace Module 1 to guarantee the harder (higher-ceiling) Module 2.</p>
            </div>
            <div className="bg-white p-10 rounded-[32px] shadow-ambient space-y-6">
              <h3 className="font-headline-md text-charcoal font-bold">Key Facts</h3>
              {[
                { icon: 'timer', label: 'Total Time', value: '2 hours 14 minutes' },
                { icon: 'devices', label: 'Format', value: 'Digital adaptive (Bluebook app)' },
                { icon: 'bar_chart', label: 'Score Range', value: '400–1600 (800 per section)' },
                { icon: 'calendar_today', label: 'Test Dates', value: '7 times per year in the US' },
              ].map((fact) => (
                <div key={fact.label} className="flex gap-4">
                  <div className="w-10 h-10 bg-primary-fixed rounded-xl flex items-center justify-center flex-shrink-0 text-royal-purple"><span className="material-symbols-outlined text-sm">{fact.icon}</span></div>
                  <div>
                    <p className="text-label-sm text-on-surface-variant font-semibold uppercase tracking-wider">{fact.label}</p>
                    <p className="text-body-md text-charcoal font-medium">{fact.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Two sections */}
      <section className="py-24 bg-white" id="sat-sections">
        <div className="container mx-auto px-margin-mobile md:px-margin-desktop max-w-max-width">
          <div className="text-center mb-16">
            <h2 className="font-headline-lg text-headline-lg text-charcoal font-bold mb-4">Two Test Sections</h2>
            <p className="text-on-surface-variant font-body-md max-w-2xl mx-auto">The digital SAT has two sections. Each is split into two adaptive modules. We prepare students for every question type in both.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: 'auto_stories', color: 'bg-primary-fixed', iconColor: 'text-royal-purple',
                title: 'Reading & Writing', time: '64 min · 54 questions',
                items: ['Information & Ideas (comprehension, evidence)', 'Craft & Structure (vocabulary in context, text structure)', 'Expression of Ideas (rhetorical synthesis)', 'Standard English Conventions (grammar & usage)'],
              },
              {
                icon: 'functions', color: 'bg-secondary-container', iconColor: 'text-secondary',
                title: 'Math', time: '70 min · 44 questions',
                items: ['Algebra (linear equations, systems, inequalities)', 'Advanced Math (quadratics, polynomials, functions)', 'Problem-Solving & Data Analysis (ratios, statistics)', 'Geometry & Trigonometry (area, volume, SOH-CAH-TOA)'],
              },
            ].map((section) => (
              <div key={section.title} className="p-10 bg-white rounded-2xl shadow-[0px_4px_20px_rgba(0,0,0,0.05)] border border-transparent hover:border-royal-purple/20 transition-all">
                <div className={`w-14 h-14 ${section.color} rounded-2xl flex items-center justify-center mb-6`}><span className={`material-symbols-outlined text-2xl ${section.iconColor}`}>{section.icon}</span></div>
                <h3 className="font-headline-md text-charcoal font-bold mb-1">{section.title}</h3>
                <p className="text-label-sm text-royal-purple font-semibold mb-4">{section.time}</p>
                <ul className="space-y-3">{section.items.map((item) => <li key={item} className="flex items-start gap-2 text-label-md text-on-surface-variant"><span className="material-symbols-outlined text-lime-green text-sm mt-0.5" style={{ fontVariationSettings: '"FILL" 1' }}>check_circle</span>{item}</li>)}</ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How we prepare */}
      <section className="py-24 bg-soft-gray">
        <div className="container mx-auto px-margin-mobile md:px-margin-desktop max-w-max-width">
          <div className="text-center mb-16"><h2 className="font-headline-lg text-headline-lg text-charcoal font-bold mb-4">Our preparation approach</h2></div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Diagnostic test', desc: 'Full-length digital SAT practice test to establish your baseline score and identify error patterns.' },
              { step: '02', title: 'Targeted skill work', desc: 'Focused sessions on the specific question types and content areas causing the most point loss.' },
              { step: '03', title: 'Adaptive strategy', desc: 'Module 1 pacing, educated guessing protocols, and how to earn the harder Module 2.' },
              { step: '04', title: 'Full mocks', desc: 'Timed full-length tests every 2–3 weeks with detailed score reports and error analysis.' },
            ].map((s) => (
              <div key={s.step} className="bg-white p-6 rounded-2xl shadow-ambient text-center">
                <div className="w-12 h-12 bg-royal-purple text-white rounded-xl flex items-center justify-center mx-auto mb-4 font-bold font-label-md text-lg">{s.step}</div>
                <h4 className="font-headline-md text-charcoal font-bold mb-2">{s.title}</h4>
                <p className="text-on-surface-variant font-body-md text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-margin-mobile md:px-margin-desktop max-w-max-width">
          <div className="text-center mb-16"><h2 className="font-headline-lg text-headline-lg text-charcoal font-bold mb-4">Frequently Asked Questions</h2></div>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-surface-container-highest rounded-2xl overflow-hidden">
                <button className="w-full flex items-center justify-between p-6 text-left hover:bg-soft-gray transition-colors font-headline-md text-[18px] font-bold cursor-pointer" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  <span>{faq.q}</span>
                  <span className={`material-symbols-outlined transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`}>expand_more</span>
                </button>
                {openFaq === i && <div className="bg-soft-gray p-6 text-on-surface-variant font-body-md border-t border-surface-container-highest">{faq.a}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="py-24 bg-royal-purple overflow-hidden">
        <div className="container mx-auto px-margin-mobile md:px-margin-desktop max-w-max-width relative z-10">
          <div className="bg-white rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col lg:flex-row">
            <div className="lg:w-1/2 p-12 lg:p-20 space-y-8 bg-surface">
              <h2 className="font-display-lg text-headline-lg md:text-display-lg text-charcoal font-bold">Book a Free Trial Lesson</h2>
              <p className="text-on-surface-variant font-body-lg">Start with a full diagnostic. We&apos;ll pinpoint your exact score potential and build a custom preparation plan.</p>
              <div className="space-y-4">{['Digital SAT format specialists', 'Adaptive strategy coaching', 'Full mock tests with score reports'].map((pt) => <div key={pt} className="flex items-center gap-4"><span className="material-symbols-outlined text-royal-purple">check_circle</span><span className="text-charcoal font-headline-md font-bold">{pt}</span></div>)}</div>
            </div>
            <div className="lg:w-1/2 p-12 lg:p-20 bg-white">
              {formSubmitted ? (
                <div className="text-center py-12 space-y-4">
                  <span className="material-symbols-outlined text-lime-green text-6xl">check_circle</span>
                  <h3 className="font-headline-md text-charcoal font-bold">Request Submitted!</h3>
                  <p className="text-on-surface-variant">Thank you <strong>{formData.fullName}</strong>. We&apos;ll be in touch to arrange your SAT trial lesson.</p>
                  <button onClick={() => setFormSubmitted(false)} className="bg-royal-purple text-on-primary px-6 py-2.5 rounded-xl font-medium hover:bg-primary transition-all cursor-pointer mt-4">Submit Another</button>
                </div>
              ) : (
                <form className="grid grid-cols-1 gap-6" onSubmit={handleSubmit}>
                  <div className="space-y-2"><label className="font-label-md text-charcoal font-medium">Full Name</label><input required value={formData.fullName} onChange={(e) => setFormData({ ...formData, fullName: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-outline-variant focus:ring-2 focus:ring-royal-purple outline-none transition-all" placeholder="Student's full name" type="text" /></div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2"><label className="font-label-md text-charcoal font-medium">Phone</label><input required value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-outline-variant focus:ring-2 focus:ring-royal-purple outline-none transition-all" placeholder="+1" type="tel" /></div>
                    <div className="space-y-2"><label className="font-label-md text-charcoal font-medium">Email</label><input required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-outline-variant focus:ring-2 focus:ring-royal-purple outline-none transition-all" placeholder="email@example.com" type="email" /></div>
                  </div>
                  <div className="space-y-2"><label className="font-label-md text-charcoal font-medium">Target Score</label><select value={formData.targetScore} onChange={(e) => setFormData({ ...formData, targetScore: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-outline-variant focus:ring-2 focus:ring-royal-purple outline-none transition-all bg-white">{['1000–1100', '1100–1200', '1200–1300', '1300–1400', '1400–1500', '1500+'].map((s) => <option key={s}>{s}</option>)}</select></div>
                  <div className="space-y-2"><label className="font-label-md text-charcoal font-medium">Additional Message</label><textarea value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-outline-variant focus:ring-2 focus:ring-royal-purple outline-none transition-all" placeholder="Current score, test date, target schools..." rows={3} /></div>
                  <button className="w-full bg-royal-purple text-on-primary font-headline-md py-4 rounded-xl shadow-lg hover:shadow-xl active:scale-95 transition-all cursor-pointer font-bold" type="submit">Send Request</button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
