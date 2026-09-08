'use client';

import React, { useState } from 'react';
import { useAppNavigate } from '@/lib/useAppNavigate';
import {
  TrendingUp, CalendarDays, School, Monitor, BarChart2,
  BookOpen, PenLine, SpellCheck2, FunctionSquare,
  User, Cpu, LineChart, Smile,
  CheckCircle2, ChevronDown,
} from 'lucide-react';

export default function AUNaplanPage() {
  const { navigateTo } = useAppNavigate();
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    year: 'Year 3',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.fullName && formData.email) setFormSubmitted(true);
  };

  const faqs = [
    {
      q: 'What year levels sit NAPLAN?',
      a: 'NAPLAN is sat by students in Years 3, 5, 7, and 9 across Australia. It is administered online in March each year (typically a two-week window).',
    },
    {
      q: 'What does NAPLAN test?',
      a: 'NAPLAN assesses Reading, Writing, Language Conventions (spelling, grammar, and punctuation), and Numeracy. The online test adapts in difficulty based on student responses.',
    },
    {
      q: 'How are NAPLAN results reported?',
      a: 'Since 2023, NAPLAN results are reported as four proficiency levels: Exceeding, Strong, Developing, and Needs Additional Support — replacing the previous band 1–10 scale.',
    },
    {
      q: 'Do NAPLAN results affect school progression?',
      a: 'NAPLAN results do not directly determine promotion or grades, but are used by schools to identify students who may benefit from additional support. Some selective school applications also factor in NAPLAN performance.',
    },
    {
      q: 'How far in advance should we start preparing?',
      a: 'We recommend starting 8–12 weeks before the NAPLAN window. This gives enough time for a diagnostic assessment, targeted skill building, and at least two full practice sessions under timed conditions.',
    },
  ];

  return (
    <div className="bg-background text-on-surface font-body-md overflow-x-hidden">
      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-center py-16 overflow-hidden bg-white">
        <div className="container mx-auto px-margin-mobile md:px-margin-desktop max-w-max-width relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-gutter items-center">
            <div className="space-y-8">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-label-md text-label-md uppercase tracking-wider font-semibold">
                National Assessment Program
              </span>
              <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-charcoal leading-tight font-bold">
                NAPLAN preparation by <span className="text-royal-purple">expert tutors</span>
              </h1>
              <p className="text-on-surface-variant font-body-lg text-body-lg max-w-xl">
                NAPLAN tests every Australian student in Years 3, 5, 7, and 9. We target the exact adaptive question formats, build the literacy and numeracy skills that matter, and make sure your child arrives confident.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => navigateTo('trial')}
                  className="bg-royal-purple text-on-primary px-8 py-4 rounded-xl font-headline-md text-headline-md hover:shadow-xl transition-all cursor-pointer font-medium"
                >
                  Book a Free Trial Lesson
                </button>
                <button
                  onClick={() => { const el = document.getElementById('naplan-tests'); if (el) el.scrollIntoView({ behavior: 'smooth' }); }}
                  className="border-2 border-royal-purple text-royal-purple px-8 py-4 rounded-xl font-headline-md text-headline-md hover:bg-royal-purple/5 transition-all cursor-pointer font-medium"
                >
                  View Test Details
                </button>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img
                  className="w-full h-[480px] object-cover"
                  alt="Australian primary school students sitting a test"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCot5dXwzWPE9Qa-FfwoAPnDVTHq5J8Svg3B-YNge07dQMsT2Au8TlIwTgRJxdhK5TnFiJ-gEspkVgbdmLSFxStv1n1erNn5R6euukMdOqyenO9h6Xuqb9XrtzWO3fQbhaKlHrFS29QJNIhSdj6UBjJxtmiMiR_DUoNdzEL_5SypQ8qMjJfheFFqRJdnt5--77dxNNbVLWh8aJM0f4mvV4j9FzXCp6_sFZzD9FQrbW_Tji_4tfQ-vL8dUXYHE9nX0j8tUmmgRE7-0TmftE"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl max-w-xs border border-outline-variant/30">
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-10 h-10 rounded-full bg-lime-green flex items-center justify-center">
                    <TrendingUp size={20} className="text-charcoal" />
                  </div>
                  <span className="font-headline-md text-charcoal font-bold">Proven Results</span>
                </div>
                <p className="text-on-surface-variant text-label-md">Students move up at least one proficiency level within 8 weeks.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is NAPLAN */}
      <section className="py-24 bg-soft-gray">
        <div className="container mx-auto px-margin-mobile md:px-margin-desktop max-w-max-width">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="font-headline-lg text-headline-lg text-charcoal font-bold">What is NAPLAN?</h2>
              <p className="text-on-surface-variant font-body-lg leading-relaxed">
                The National Assessment Program — Literacy and Numeracy (NAPLAN) is a national standardised test taken by all Australian students in Years 3, 5, 7, and 9. It provides a consistent national benchmark of student achievement in Reading, Writing, Language Conventions, and Numeracy.
              </p>
              <p className="text-on-surface-variant font-body-md leading-relaxed">
                Since moving online, NAPLAN uses adaptive technology — the difficulty of each question adjusts based on prior answers. This means preparation must go beyond memorising formats and focus on genuine skill mastery.
              </p>
            </div>
            <div className="bg-white p-10 rounded-[32px] shadow-ambient space-y-6">
              <h3 className="font-headline-md text-charcoal font-bold">Key Facts</h3>
              {[
                { Icon: CalendarDays, label: 'When', value: 'March each year — two-week testing window' },
                { Icon: School, label: 'Year levels', value: 'Years 3, 5, 7, and 9' },
                { Icon: Monitor, label: 'Format', value: 'Online adaptive test (tailored question difficulty)' },
                { Icon: BarChart2, label: 'Reporting', value: 'Exceeding / Strong / Developing / Needs Additional Support' },
              ].map((fact) => (
                <div key={fact.label} className="flex gap-4">
                  <div className="w-10 h-10 bg-primary-fixed rounded-xl flex items-center justify-center flex-shrink-0 text-royal-purple">
                    <fact.Icon size={18} />
                  </div>
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

      {/* Test domains */}
      <section className="py-24 bg-white" id="naplan-tests">
        <div className="container mx-auto px-margin-mobile md:px-margin-desktop max-w-max-width">
          <div className="text-center mb-16">
            <h2 className="font-headline-lg text-headline-lg text-charcoal font-bold mb-4">Four Test Domains</h2>
            <p className="text-on-surface-variant font-body-md max-w-2xl mx-auto">Our preparation covers all four NAPLAN domains, with sessions tailored to the year level your child is sitting.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { Icon: BookOpen, color: 'bg-primary-fixed', iconColor: 'text-royal-purple', title: 'Reading', desc: 'Comprehension of narrative, persuasive, and informative texts. Inference, vocabulary, and text structure.' },
              { Icon: PenLine, color: 'bg-secondary-container', iconColor: 'text-secondary', title: 'Writing', desc: 'Persuasive or narrative writing assessed on audience, text structure, vocabulary, and sentence fluency.' },
              { Icon: SpellCheck2, color: 'bg-lime-green/20', iconColor: 'text-secondary', title: 'Language Conventions', desc: 'Spelling, grammar, and punctuation — adaptive multiple-choice and short answer questions.' },
              { Icon: FunctionSquare, color: 'bg-royal-purple/10', iconColor: 'text-royal-purple', title: 'Numeracy', desc: 'Number, algebra, measurement, geometry, and statistics. Calculator and non-calculator sections.' },
            ].map((item) => (
              <div key={item.title} className="group p-8 bg-white rounded-2xl shadow-[0px_4px_20px_rgba(0,0,0,0.05)] border border-transparent hover:border-royal-purple/20 transition-all">
                <div className={`w-14 h-14 ${item.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <item.Icon size={24} className={item.iconColor} />
                </div>
                <h3 className="font-headline-md text-charcoal font-bold mb-3">{item.title}</h3>
                <p className="text-on-surface-variant font-body-md">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How we prepare */}
      <section className="py-24 bg-soft-gray">
        <div className="container mx-auto px-margin-mobile md:px-margin-desktop max-w-max-width">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="font-headline-lg text-headline-lg text-charcoal font-bold">Our preparation approach</h2>
              <p className="text-on-surface-variant font-body-lg">Because NAPLAN is adaptive, drilling past paper formats is not enough. We build the underlying skills so students can handle any difficulty level the test throws at them.</p>
              <div className="space-y-4">
                {[
                  { step: '01', title: 'Diagnostic session', desc: 'Practice NAPLAN questions to establish current level across all four domains.' },
                  { step: '02', title: 'Targeted skill building', desc: 'Focused sessions on the specific sub-skills where your child needs the most improvement.' },
                  { step: '03', title: 'Adaptive practice', desc: 'Online practice sets that replicate NAPLAN\'s adaptive difficulty, building confidence at every level.' },
                  { step: '04', title: 'Full timed mock', desc: 'A complete timed practice test under real NAPLAN conditions 2–3 weeks before the window.' },
                ].map((s) => (
                  <div key={s.step} className="flex gap-4">
                    <div className="w-10 h-10 bg-royal-purple text-white rounded-xl flex items-center justify-center flex-shrink-0 font-bold font-label-md">{s.step}</div>
                    <div>
                      <h4 className="font-headline-md text-charcoal font-bold">{s.title}</h4>
                      <p className="text-on-surface-variant font-body-md">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { Icon: User, color: 'text-royal-purple', bg: 'bg-primary-fixed', title: 'One-on-One', desc: 'Every session tailored to your child\'s year level and specific gaps.' },
                { Icon: Cpu, color: 'text-secondary', bg: 'bg-lime-green/20', title: 'Adaptive Practice', desc: 'Online practice tools that mirror the real NAPLAN adaptive engine.' },
                { Icon: LineChart, color: 'text-royal-purple', bg: 'bg-primary-fixed', title: 'Progress Tracking', desc: 'Clear reporting showing movement across proficiency levels.' },
                { Icon: Smile, color: 'text-secondary', bg: 'bg-secondary-container', title: 'Confidence First', desc: 'Reducing test anxiety so students perform at their true level.' },
              ].map((item) => (
                <div key={item.title} className="bg-white p-6 rounded-2xl shadow-ambient text-center">
                  <div className={`w-12 h-12 ${item.bg} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <item.Icon size={22} className={item.color} />
                  </div>
                  <h4 className="font-headline-md text-charcoal font-bold mb-2">{item.title}</h4>
                  <p className="text-on-surface-variant font-body-md text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-margin-mobile md:px-margin-desktop max-w-max-width">
          <div className="text-center mb-16">
            <h2 className="font-headline-lg text-headline-lg text-charcoal font-bold mb-4">Frequently Asked Questions</h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-surface-container-highest rounded-2xl overflow-hidden">
                <button className="w-full flex items-center justify-between p-6 text-left hover:bg-soft-gray transition-colors font-headline-md text-[18px] font-bold cursor-pointer gap-4" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  <span>{faq.q}</span>
                  <ChevronDown size={22} className={`shrink-0 transition-transform duration-300 ${openFaq === i ? 'rotate-180 text-royal-purple' : ''}`} />
                </button>
                {openFaq === i && <div className="bg-soft-gray p-6 text-on-surface-variant font-body-md border-t border-surface-container-highest">{faq.a}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA & Form */}
      <section className="py-24 bg-royal-purple overflow-hidden">
        <div className="container mx-auto px-margin-mobile md:px-margin-desktop max-w-max-width relative z-10">
          <div className="bg-white rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col lg:flex-row">
            <div className="lg:w-1/2 p-12 lg:p-20 space-y-8 bg-surface">
              <h2 className="font-display-lg text-headline-lg md:text-display-lg text-charcoal font-bold">Book a Free Trial Lesson</h2>
              <p className="text-on-surface-variant font-body-lg">Start with a diagnostic session. We&apos;ll identify exactly where your child sits and build a clear preparation plan from there.</p>
              <div className="space-y-4">
                {['Australian curriculum specialists', 'Adaptive practice tools', 'All four NAPLAN domains covered'].map((pt) => (
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
                  <p className="text-on-surface-variant">Thank you <strong>{formData.fullName}</strong>. We&apos;ll be in touch shortly to arrange your NAPLAN trial lesson.</p>
                  <button onClick={() => setFormSubmitted(false)} className="bg-royal-purple text-on-primary px-6 py-2.5 rounded-xl font-medium hover:bg-primary transition-all cursor-pointer mt-4">Submit Another Request</button>
                </div>
              ) : (
                <form className="grid grid-cols-1 gap-6" onSubmit={handleSubmit}>
                  <div className="space-y-2">
                    <label className="font-label-md text-charcoal font-medium">Full Name</label>
                    <input required value={formData.fullName} onChange={(e) => setFormData({ ...formData, fullName: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-outline-variant focus:ring-2 focus:ring-royal-purple focus:border-royal-purple outline-none transition-all" placeholder="Student's full name" type="text" />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="font-label-md text-charcoal font-medium">Phone Number</label>
                      <input required value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-outline-variant focus:ring-2 focus:ring-royal-purple focus:border-royal-purple outline-none transition-all" placeholder="+61" type="tel" />
                    </div>
                    <div className="space-y-2">
                      <label className="font-label-md text-charcoal font-medium">Email Address</label>
                      <input required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-outline-variant focus:ring-2 focus:ring-royal-purple focus:border-royal-purple outline-none transition-all" placeholder="email@example.com" type="email" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="font-label-md text-charcoal font-medium">Year Level</label>
                    <select value={formData.year} onChange={(e) => setFormData({ ...formData, year: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-outline-variant focus:ring-2 focus:ring-royal-purple focus:border-royal-purple outline-none transition-all bg-white">
                      {['Year 3', 'Year 5', 'Year 7', 'Year 9'].map((y) => <option key={y}>{y}</option>)}
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="font-label-md text-charcoal font-medium">Additional Message</label>
                    <textarea value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-outline-variant focus:ring-2 focus:ring-royal-purple focus:border-royal-purple outline-none transition-all" placeholder="Tell us about your child's goals..." rows={3} />
                  </div>
                  <button className="w-full bg-royal-purple text-on-primary font-headline-md py-4 rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-95 transition-all cursor-pointer font-bold" type="submit">Send Request</button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
