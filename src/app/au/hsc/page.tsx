'use client';

import React, { useState } from 'react';
import LigatureIcon from '@/components/LigatureIcon';
import { useAppNavigate } from '@/lib/useAppNavigate';

export default function AUHscPage() {
  const { navigateTo } = useAppNavigate();
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ fullName: '', phone: '', email: '', subject: 'Mathematics', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.fullName && formData.email) setFormSubmitted(true);
  };

  const subjects = [
    { title: 'Mathematics', icon: 'functions', content: (<div className="py-4"><p className="text-on-surface-variant mb-4">Standard, Advanced, Extension 1, and Extension 2 — four levels catering from foundation skills to university-level content. HSC marks contribute directly to ATAR.</p><div className="grid md:grid-cols-4 gap-3">{['Standard', 'Advanced', 'Ext 1', 'Ext 2'].map((l) => <div key={l} className="bg-surface-container p-3 rounded-xl text-center"><p className="font-bold text-charcoal text-sm">{l}</p></div>)}</div></div>) },
    { title: 'English', icon: 'auto_stories', content: (<div className="py-4"><p className="text-on-surface-variant mb-4">Standard, Advanced, Extension 1, and Extension 2. Paper 1 covers common module texts; Paper 2 covers elective modules. Creative and analytical writing both assessed.</p></div>) },
    { title: 'Sciences', icon: 'science', content: (<div className="py-4"><p className="text-on-surface-variant mb-4">Biology, Chemistry, Physics, and Earth &amp; Environmental Science — each with a practical investigation component worth 20% of the final HSC mark.</p><div className="flex flex-wrap gap-2">{['Biology', 'Chemistry', 'Physics', 'Earth Science'].map((s) => <span key={s} className="bg-surface-container px-3 py-1 rounded-full text-label-sm font-semibold text-charcoal">{s}</span>)}</div></div>) },
    { title: 'Humanities', icon: 'history_edu', content: (<div className="py-4"><p className="text-on-surface-variant mb-4">Modern History, Ancient History, Geography, Economics, Business Studies, and Legal Studies. Essay technique and source analysis are the critical skills we develop.</p></div>) },
  ];

  return (
    <div className="bg-background text-on-surface font-body-md overflow-x-hidden">
      {/* Hero */}
      <section className="relative overflow-hidden py-24 bg-white">
        <div className="learning-lane px-margin-mobile md:px-margin-desktop grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-max-width mx-auto">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary-container text-on-secondary-container rounded-full text-label-sm font-label-sm mb-6">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
              NSW Higher School Certificate
            </div>
            <h1 className="text-display-lg-mobile md:text-display-lg font-display-lg text-charcoal mb-6 font-bold">
              HSC preparation by <span className="text-royal-purple">expert tutors</span>
            </h1>
            <p className="text-body-lg font-body-lg text-on-surface-variant mb-10 max-w-lg">
              The HSC is the gateway to university in NSW. We provide subject-specialist tutoring matched to the exact NESA syllabus, marking guidelines, and ATAR scaling that will determine your final result.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button onClick={() => navigateTo('trial')} className="bg-royal-purple text-on-primary px-8 py-4 rounded-xl font-headline-md hover:bg-primary transition-colors shadow-ambient cursor-pointer font-medium">Book a Free Trial</button>
              <button onClick={() => navigateTo('pricing')} className="border-2 border-royal-purple text-royal-purple px-8 py-4 rounded-xl font-headline-md hover:bg-soft-gray transition-colors cursor-pointer font-medium">View Pricing</button>
            </div>
          </div>
          <div className="relative hidden md:block">
            <div className="absolute -top-12 -right-12 w-96 h-96 bg-primary-fixed rounded-full blur-3xl opacity-30"></div>
            <div className="relative z-10 rounded-[32px] overflow-hidden shadow-dropdown border-8 border-white">
              <img alt="HSC student studying" className="w-full aspect-[4/3] object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBKFULzrEYorE6hCWiEBJn1TAZnxrAUAipRfNLUUslKf6XWRr7THwe01NAnq9-RrCZBBJCEYyOue8m5OciPD1Dm79leh4sW3Dw-V2BEHmCrf6H2DibwGzK2oyxooxjp2MzFv38bv2AQbl03eWxk4BAPxHUzByF9re5NbIV9uOT8PHDKMls3xyyJCkuKKNJSB-g4EcWN4s21WU_7SLV3T9Azho9tjoJftVM_4S6oTpHLROn3xZMjf8Zd7A" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-dropdown border border-outline-variant z-20 max-w-[200px]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-lime-green rounded-lg flex items-center justify-center text-charcoal"><span className="material-symbols-outlined" style={{ fontVariationSettings: '"FILL" 1' }}>trending_up</span></div>
                <div>
                  <p className="text-label-sm font-label-sm text-on-surface-variant uppercase font-semibold">ATAR Boost</p>
                  <p className="text-body-md font-bold text-charcoal">Avg. +5.2 points</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key facts */}
      <section className="py-24 bg-soft-gray">
        <div className="learning-lane px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: 'STATE', text: 'New South Wales (NESA)' },
              { label: 'YEAR LEVELS', text: 'Years 11 & 12' },
              { label: 'EXAM PERIOD', text: 'October – November, Year 12' },
              { label: 'OUTCOME', text: 'ATAR for university entry' },
            ].map((item) => (
              <div key={item.label} className="bg-white p-6 rounded-2xl shadow-ambient">
                <p className="text-label-sm font-bold text-primary mb-2">{item.label}</p>
                <p className="text-body-md text-charcoal">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subjects accordion */}
      <section className="py-24 bg-white">
        <div className="learning-lane px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-headline-lg font-display-lg text-charcoal mb-4 font-bold">Subjects We Cover</h2>
            <p className="text-body-lg text-on-surface-variant max-w-2xl mx-auto">All major HSC subjects at every level — from Standard to Extension 2.</p>
          </div>
          <div className="max-w-4xl mx-auto space-y-4">
            {subjects.map((sub, idx) => (
              <div key={idx} className={`bg-white rounded-2xl border transition-all ${activeAccordion === idx ? 'border-royal-purple shadow-md' : 'border-outline-variant'}`}>
                <div className="flex justify-between items-center p-6 cursor-pointer" onClick={() => setActiveAccordion(activeAccordion === idx ? null : idx)}>
                  <div className="flex items-center gap-4">
                    <span className="material-symbols-outlined text-royal-purple text-2xl">{sub.icon}</span>
                    <h4 className="text-headline-md font-bold text-charcoal">{sub.title}</h4>
                  </div>
                  <LigatureIcon name="expand_more" className={`transition-transform duration-200 ${activeAccordion === idx ? 'rotate-180 text-primary' : ''}`} />
                </div>
                {activeAccordion === idx && <div className="px-6 pb-6 text-on-surface-variant border-t border-surface-container pt-4">{sub.content}</div>}
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
              <p className="text-on-surface-variant font-body-lg">One session, no obligation. We&apos;ll establish exactly where you stand against the NESA marking guidelines.</p>
              <div className="space-y-4">
                {['NESA syllabus-matched sessions', 'Marking guideline technique', 'All levels Standard → Ext 2'].map((pt) => (
                  <div key={pt} className="flex items-center gap-4"><span className="material-symbols-outlined text-royal-purple">check_circle</span><span className="text-charcoal font-headline-md font-bold">{pt}</span></div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 p-12 lg:p-20 bg-white">
              {formSubmitted ? (
                <div className="text-center py-12 space-y-4">
                  <span className="material-symbols-outlined text-lime-green text-6xl">check_circle</span>
                  <h3 className="font-headline-md text-charcoal font-bold">Request Submitted!</h3>
                  <p className="text-on-surface-variant">Thank you <strong>{formData.fullName}</strong>. We&apos;ll be in touch to arrange your HSC trial lesson.</p>
                  <button onClick={() => setFormSubmitted(false)} className="bg-royal-purple text-on-primary px-6 py-2.5 rounded-xl font-medium hover:bg-primary transition-all cursor-pointer mt-4">Submit Another</button>
                </div>
              ) : (
                <form className="grid grid-cols-1 gap-6" onSubmit={handleSubmit}>
                  <div className="space-y-2"><label className="font-label-md text-charcoal font-medium">Full Name</label><input required value={formData.fullName} onChange={(e) => setFormData({ ...formData, fullName: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-outline-variant focus:ring-2 focus:ring-royal-purple outline-none transition-all" placeholder="Student's full name" type="text" /></div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2"><label className="font-label-md text-charcoal font-medium">Phone</label><input required value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-outline-variant focus:ring-2 focus:ring-royal-purple outline-none transition-all" placeholder="+61" type="tel" /></div>
                    <div className="space-y-2"><label className="font-label-md text-charcoal font-medium">Email</label><input required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-outline-variant focus:ring-2 focus:ring-royal-purple outline-none transition-all" placeholder="email@example.com" type="email" /></div>
                  </div>
                  <div className="space-y-2"><label className="font-label-md text-charcoal font-medium">Subject</label><select value={formData.subject} onChange={(e) => setFormData({ ...formData, subject: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-outline-variant focus:ring-2 focus:ring-royal-purple outline-none transition-all bg-white">{['Mathematics', 'Mathematics Advanced', 'Mathematics Extension 1', 'Mathematics Extension 2', 'English Standard', 'English Advanced', 'English Extension', 'Biology', 'Chemistry', 'Physics', 'Modern History', 'Economics', 'Business Studies', 'Legal Studies'].map((s) => <option key={s}>{s}</option>)}</select></div>
                  <div className="space-y-2"><label className="font-label-md text-charcoal font-medium">Additional Message</label><textarea value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-outline-variant focus:ring-2 focus:ring-royal-purple outline-none transition-all" placeholder="Year 11 or 12, target ATAR, specific topics..." rows={3} /></div>
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
