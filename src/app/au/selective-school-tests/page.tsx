'use client';

import React, { useState } from 'react';
import { useAppNavigate } from '@/lib/useAppNavigate';
import {
  BadgeCheck, Timer, Brain, Trophy,
  Building2, Building, Palmtree, Mountain,
  CheckCircle2,
} from 'lucide-react';

export default function AUSelectiveSchoolTestPage() {
  const { navigateTo } = useAppNavigate();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ fullName: '', phone: '', email: '', state: 'NSW', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.fullName && formData.email) setFormSubmitted(true);
  };

  return (
    <div className="bg-background text-on-surface font-body-md overflow-x-hidden">
      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-center py-16 overflow-hidden bg-white">
        <div className="container mx-auto px-margin-mobile md:px-margin-desktop max-w-max-width relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-gutter items-center">
            <div className="space-y-8">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-label-md text-label-md uppercase tracking-wider font-semibold">
                NSW · VIC · QLD · SA
              </span>
              <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-charcoal leading-tight font-bold">
                Selective School Test preparation by <span className="text-royal-purple">expert tutors</span>
              </h1>
              <p className="text-on-surface-variant font-body-lg text-body-lg max-w-xl">
                Entry to Australia&apos;s selective and opportunity-class schools is among the most competitive academic assessments in the country. Our tutors know the exact format and reasoning skills each state requires.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button onClick={() => navigateTo('trial')} className="bg-royal-purple text-on-primary px-8 py-4 rounded-xl font-headline-md hover:shadow-xl transition-all cursor-pointer font-medium">Book a Free Trial</button>
                <button onClick={() => { const el = document.getElementById('sst-states'); if (el) el.scrollIntoView({ behavior: 'smooth' }); }} className="border-2 border-royal-purple text-royal-purple px-8 py-4 rounded-xl font-headline-md hover:bg-royal-purple/5 transition-all cursor-pointer font-medium">View by State</button>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img className="w-full h-[480px] object-cover" alt="Students sitting selective school entrance exam" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBIC2148RcAcfRXxnZOcCNJC2Yr32DtyHa7d1TOD82ZBuHm5-qZ-Hfyjuic-1MLI6po5tOU8XT7FUpGqvgdHGzRwEInHX72mGWsxX-9nVAlOqT4sbH-gqYAG5YfaLbivq9Je_ZI7ity8vsit3aPnhFxzYCZ7Vd3uaU5jtItj5k130NViqjkJsMWfhwBn54qZk6DOAoC1XqgTsCbUlAYR6O8_Q9eb3Xz1j99Ujc64cOxRy0f-IOnZz3fvw" />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl max-w-xs border border-outline-variant/30">
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-10 h-10 rounded-full bg-lime-green flex items-center justify-center"><BadgeCheck size={20} className="text-charcoal" /></div>
                  <span className="font-headline-md text-charcoal font-bold">Proven Results</span>
                </div>
                <p className="text-on-surface-variant text-label-md">Over 85% of our selective school students receive an offer.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why it is hard */}
      <section className="py-24 bg-soft-gray">
        <div className="container mx-auto px-margin-mobile md:px-margin-desktop max-w-max-width text-center mb-16">
          <h2 className="font-headline-lg text-headline-lg text-charcoal font-bold mb-4">Why the Selective School Test is different</h2>
          <p className="text-on-surface-variant font-body-lg max-w-3xl mx-auto">Unlike school exams, selective tests measure reasoning ability under strict time pressure. Content knowledge alone is not enough — students need speed, strategy, and familiarity with every question type.</p>
        </div>
        <div className="container mx-auto px-margin-mobile md:px-margin-desktop max-w-max-width grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { Icon: Timer, color: 'bg-primary-fixed text-royal-purple', title: 'Time Pressure', desc: 'Most selective tests allow under 60 seconds per question. We train speed alongside accuracy.' },
            { Icon: Brain, color: 'bg-lime-green/20 text-secondary', title: 'Reasoning Focus', desc: 'Mathematical, verbal, and abstract reasoning — skills that must be explicitly taught and practised.' },
            { Icon: Trophy, color: 'bg-primary-fixed text-royal-purple', title: 'High Competition', desc: 'Thousands of students compete for limited places. Marginal improvements in score make a real difference.' },
          ].map((item) => (
            <div key={item.title} className="bg-white p-8 rounded-2xl shadow-[0px_4px_20px_rgba(0,0,0,0.05)] text-center">
              <div className={`w-14 h-14 ${item.color} rounded-full flex items-center justify-center mx-auto mb-6`}><item.Icon size={24} /></div>
              <h3 className="font-headline-md text-charcoal font-bold mb-3">{item.title}</h3>
              <p className="text-on-surface-variant font-body-md">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* State breakdown */}
      <section className="py-24 bg-white" id="sst-states">
        <div className="container mx-auto px-margin-mobile md:px-margin-desktop max-w-max-width">
          <div className="text-center mb-16">
            <h2 className="font-headline-lg text-headline-lg text-charcoal font-bold mb-4">Selective Tests by State</h2>
            <p className="text-on-surface-variant font-body-md max-w-2xl mx-auto">Each state runs its own selective entry process with different formats, subjects, and year-level entry points.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { state: 'NSW', name: 'Selective High School Placement Test', year: 'Year 7 entry', Icon: Building2, components: ['Reading', 'Mathematical Reasoning', 'Thinking Skills', 'Writing'] },
              { state: 'VIC', name: 'Selective Entry High School Examination', year: 'Year 9 entry', Icon: Building, components: ['Verbal Reasoning', 'Numerical Reasoning', 'Abstract Reasoning', 'Reading Comprehension'] },
              { state: 'QLD', name: 'Queensland Academies Aptitude Test', year: 'Year 10 entry', Icon: Palmtree, components: ['Verbal Reasoning', 'Numerical Reasoning', 'Abstract Reasoning', 'Written Expression'] },
              { state: 'SA', name: 'SASC Selective Entry Test', year: 'Year 8 entry', Icon: Mountain, components: ['General Ability', 'English', 'Mathematics'] },
            ].map((item) => (
              <div key={item.state} className="group p-8 bg-white rounded-2xl shadow-[0px_4px_20px_rgba(0,0,0,0.05)] border border-transparent hover:border-royal-purple/20 transition-all">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-primary-fixed rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <item.Icon size={24} className="text-royal-purple" />
                  </div>
                  <div>
                    <p className="text-label-sm font-bold text-royal-purple uppercase tracking-wider">{item.state} — {item.year}</p>
                    <h3 className="font-headline-md text-charcoal font-bold">{item.name}</h3>
                  </div>
                </div>
                <ul className="space-y-2 mt-4">
                  {item.components.map((c) => (
                    <li key={c} className="flex items-center gap-2 text-label-md text-on-surface-variant">
                      <CheckCircle2 size={16} className="text-lime-green shrink-0" style={{ fill: 'currentColor', color: '#84cc16' }} />{c}
                    </li>
                  ))}
                </ul>
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
              <p className="text-on-surface-variant font-body-lg">Tell us your state and target school and we&apos;ll match you with a tutor who knows that specific test inside out.</p>
              <div className="space-y-4">
                {['State-specific test formats', 'Reasoning & speed training', 'Mock tests under timed conditions'].map((pt) => (
                  <div key={pt} className="flex items-center gap-4">
                    <CheckCircle2 size={20} className="text-royal-purple" />
                    <span className="text-charcoal font-headline-md font-bold">{pt}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 p-12 lg:p-20 bg-white">
              {formSubmitted ? (
                <div className="text-center py-12 space-y-4">
                  <CheckCircle2 size={56} className="text-lime-green mx-auto" />
                  <h3 className="font-headline-md text-charcoal font-bold">Request Submitted!</h3>
                  <p className="text-on-surface-variant">Thank you <strong>{formData.fullName}</strong>. We&apos;ll be in touch to arrange your selective school prep trial.</p>
                  <button onClick={() => setFormSubmitted(false)} className="bg-royal-purple text-on-primary px-6 py-2.5 rounded-xl font-medium hover:bg-primary transition-all cursor-pointer mt-4">Submit Another</button>
                </div>
              ) : (
                <form className="grid grid-cols-1 gap-6" onSubmit={handleSubmit}>
                  <div className="space-y-2"><label className="font-label-md text-charcoal font-medium">Full Name</label><input required value={formData.fullName} onChange={(e) => setFormData({ ...formData, fullName: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-outline-variant focus:ring-2 focus:ring-royal-purple outline-none transition-all" placeholder="Student's full name" type="text" /></div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2"><label className="font-label-md text-charcoal font-medium">Phone</label><input required value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-outline-variant focus:ring-2 focus:ring-royal-purple outline-none transition-all" placeholder="+61" type="tel" /></div>
                    <div className="space-y-2"><label className="font-label-md text-charcoal font-medium">Email</label><input required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-outline-variant focus:ring-2 focus:ring-royal-purple outline-none transition-all" placeholder="email@example.com" type="email" /></div>
                  </div>
                  <div className="space-y-2"><label className="font-label-md text-charcoal font-medium">State</label><select value={formData.state} onChange={(e) => setFormData({ ...formData, state: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-outline-variant focus:ring-2 focus:ring-royal-purple outline-none transition-all bg-white">{['NSW', 'VIC', 'QLD', 'SA', 'WA', 'ACT'].map((s) => <option key={s}>{s}</option>)}</select></div>
                  <div className="space-y-2"><label className="font-label-md text-charcoal font-medium">Additional Message</label><textarea value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-outline-variant focus:ring-2 focus:ring-royal-purple outline-none transition-all" placeholder="Target school, current year level..." rows={3} /></div>
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
