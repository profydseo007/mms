'use client';

import React, { useState } from 'react';
import { useAppNavigate } from '@/lib/useAppNavigate';

export default function USActPage() {
  const { navigateTo } = useAppNavigate();
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ fullName: '', phone: '', email: '', targetScore: '30+', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.fullName && formData.email) setFormSubmitted(true);
  };

  const faqs = [
    { q: 'What is the difference between the SAT and ACT?', a: 'Both are accepted by all US colleges. The ACT includes a Science section (data interpretation and reasoning, not factual recall) and tests slightly more advanced math through trigonometry. The SAT is adaptive; the ACT is not. Students who prefer a fixed, predictable format often score better on the ACT.' },
    { q: 'Is the ACT moving to a digital format?', a: 'ACT Inc. is rolling out a digital option at some test centres. The content remains the same — the transition is from paper to screen, not a change in test structure or adaptive difficulty like the digital SAT.' },
    { q: 'How is the ACT scored?', a: 'Each of the four sections (English, Math, Reading, Science) is scored on a scale of 1–36. The composite score is the average of the four sections, rounded to the nearest whole number. The optional Writing test is scored separately (2–12) and does not affect the composite.' },
    { q: 'Do I need the ACT Writing section?', a: 'Most colleges do not require the ACT with Writing. However, some selective universities and a handful of states for college placement still request or require it. Check the requirements of the specific colleges on your list.' },
    { q: 'What is a good ACT score?', a: 'The national average composite is around 20. Highly selective colleges typically look for 33–36. Most four-year colleges consider 24–28 competitive. A 30+ puts you in the top 7% nationally.' },
  ];

  return (
    <div className="bg-background text-on-surface font-body-md overflow-x-hidden">
      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-center py-16 overflow-hidden bg-white">
        <div className="container mx-auto px-margin-mobile md:px-margin-desktop max-w-max-width relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-gutter items-center">
            <div className="space-y-8">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-label-md text-label-md uppercase tracking-wider font-semibold">American College Testing</span>
              <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-charcoal leading-tight font-bold">
                ACT preparation by <span className="text-royal-purple">expert tutors</span>
              </h1>
              <p className="text-on-surface-variant font-body-lg text-body-lg max-w-xl">
                The ACT is accepted by every US college and university. With four timed sections — English, Math, Reading, and Science — it rewards students who master time management as much as content. We prepare for both.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button onClick={() => navigateTo('trial')} className="bg-royal-purple text-on-primary px-8 py-4 rounded-xl font-headline-md hover:shadow-xl transition-all cursor-pointer font-medium">Book a Free Trial</button>
                <button onClick={() => { const el = document.getElementById('act-sections'); if (el) el.scrollIntoView({ behavior: 'smooth' }); }} className="border-2 border-royal-purple text-royal-purple px-8 py-4 rounded-xl font-headline-md hover:bg-royal-purple/5 transition-all cursor-pointer font-medium">View Test Sections</button>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img className="w-full h-[480px] object-cover" alt="Student studying for the ACT" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBIC2148RcAcfRXxnZOcCNJC2Yr32DtyHa7d1TOD82ZBuHm5-qZ-Hfyjuic-1MLI6po5tOU8XT7FUpGqvgdHGzRwEInHX72mGWsxX-9nVAlOqT4sbH-gqYAG5YfaLbivq9Je_ZI7ity8vsit3aPnhFxzYCZ7Vd3uaU5jtItj5k130NViqjkJsMWfhwBn54qZk6DOAoC1XqgTsCbUlAYR6O8_Q9eb3Xz1j99Ujc64cOxRy0f-IOnZz3fvw" />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl max-w-xs border border-outline-variant/30">
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-10 h-10 rounded-full bg-lime-green flex items-center justify-center"><span className="material-symbols-outlined text-charcoal">trending_up</span></div>
                  <span className="font-headline-md text-charcoal font-bold">Score Improvement</span>
                </div>
                <p className="text-on-surface-variant text-label-md">Students improve by an average of 4+ composite points within 10 weeks.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Four sections */}
      <section className="py-24 bg-soft-gray">
        <div className="container mx-auto px-margin-mobile md:px-margin-desktop max-w-max-width">
          <div className="text-center mb-16">
            <h2 className="font-headline-lg text-headline-lg text-charcoal font-bold mb-4">Four Test Sections</h2>
            <p className="text-on-surface-variant font-body-md max-w-2xl mx-auto">Every section is strictly timed. Pacing strategy is as important as content — we train both simultaneously.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" id="act-sections">
            {[
              { icon: 'spellcheck', color: 'bg-primary-fixed', iconColor: 'text-royal-purple', title: 'English', time: '45 min · 75 questions', items: ['Usage & Mechanics (punctuation, grammar)', 'Rhetorical Skills (style, strategy, organisation)'] },
              { icon: 'functions', color: 'bg-secondary-container', iconColor: 'text-secondary', title: 'Math', time: '60 min · 60 questions', items: ['Pre-Algebra through Trigonometry', 'No formula sheet provided'] },
              { icon: 'menu_book', color: 'bg-lime-green/20', iconColor: 'text-secondary', title: 'Reading', time: '35 min · 40 questions', items: ['4 passages across 4 genres', 'Main idea, inference, evidence'] },
              { icon: 'science', color: 'bg-royal-purple/10', iconColor: 'text-royal-purple', title: 'Science', time: '35 min · 40 questions', items: ['Data interpretation & graphs', 'Conflicting viewpoints — no recall needed'] },
            ].map((section) => (
              <div key={section.title} className="p-8 bg-white rounded-2xl shadow-[0px_4px_20px_rgba(0,0,0,0.05)] border border-transparent hover:border-royal-purple/20 transition-all group">
                <div className={`w-14 h-14 ${section.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}><span className={`material-symbols-outlined text-2xl ${section.iconColor}`}>{section.icon}</span></div>
                <h3 className="font-headline-md text-charcoal font-bold mb-1">{section.title}</h3>
                <p className="text-label-sm text-royal-purple font-semibold mb-4">{section.time}</p>
                <ul className="space-y-2">{section.items.map((item) => <li key={item} className="flex items-start gap-2 text-label-md text-on-surface-variant"><span className="material-symbols-outlined text-lime-green text-sm mt-0.5" style={{ fontVariationSettings: '"FILL" 1' }}>check_circle</span>{item}</li>)}</ul>
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
                  <span>{faq.q}</span><span className={`material-symbols-outlined transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`}>expand_more</span>
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
              <p className="text-on-surface-variant font-body-lg">We start with a full diagnostic. You&apos;ll know your section scores and composite potential before the second session.</p>
              <div className="space-y-4">{['All four ACT sections', 'Pacing & time strategy', 'Full mock tests with composite score'].map((pt) => <div key={pt} className="flex items-center gap-4"><span className="material-symbols-outlined text-royal-purple">check_circle</span><span className="text-charcoal font-headline-md font-bold">{pt}</span></div>)}</div>
            </div>
            <div className="lg:w-1/2 p-12 lg:p-20 bg-white">
              {formSubmitted ? (
                <div className="text-center py-12 space-y-4">
                  <span className="material-symbols-outlined text-lime-green text-6xl">check_circle</span>
                  <h3 className="font-headline-md text-charcoal font-bold">Request Submitted!</h3>
                  <p className="text-on-surface-variant">Thank you <strong>{formData.fullName}</strong>. We&apos;ll be in touch to arrange your ACT trial lesson.</p>
                  <button onClick={() => setFormSubmitted(false)} className="bg-royal-purple text-on-primary px-6 py-2.5 rounded-xl font-medium cursor-pointer mt-4">Submit Another</button>
                </div>
              ) : (
                <form className="grid grid-cols-1 gap-6" onSubmit={handleSubmit}>
                  <div className="space-y-2"><label className="font-label-md text-charcoal font-medium">Full Name</label><input required value={formData.fullName} onChange={(e) => setFormData({ ...formData, fullName: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-outline-variant focus:ring-2 focus:ring-royal-purple outline-none transition-all" placeholder="Student's full name" type="text" /></div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2"><label className="font-label-md text-charcoal font-medium">Phone</label><input required value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-outline-variant focus:ring-2 focus:ring-royal-purple outline-none transition-all" placeholder="+1" type="tel" /></div>
                    <div className="space-y-2"><label className="font-label-md text-charcoal font-medium">Email</label><input required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-outline-variant focus:ring-2 focus:ring-royal-purple outline-none transition-all" placeholder="email@example.com" type="email" /></div>
                  </div>
                  <div className="space-y-2"><label className="font-label-md text-charcoal font-medium">Target Composite Score</label><select value={formData.targetScore} onChange={(e) => setFormData({ ...formData, targetScore: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-outline-variant focus:ring-2 focus:ring-royal-purple outline-none transition-all bg-white">{['20–23', '24–27', '28–30', '31–33', '34–36'].map((s) => <option key={s}>{s}</option>)}</select></div>
                  <div className="space-y-2"><label className="font-label-md text-charcoal font-medium">Additional Message</label><textarea value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-outline-variant focus:ring-2 focus:ring-royal-purple outline-none transition-all" placeholder="Current score, test date, weakest section..." rows={3} /></div>
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
