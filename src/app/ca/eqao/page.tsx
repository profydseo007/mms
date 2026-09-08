'use client';

import React, { useState } from 'react';
import { useAppNavigate } from '@/lib/useAppNavigate';
import {
  TrendingUp, School, CalendarDays, BarChart2, BadgeCheck,
  GraduationCap, BookOpen, FunctionSquare, ChevronDown, CheckCircle2
} from 'lucide-react';

export default function CAEQAOPage() {
  const { navigateTo } = useAppNavigate();
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    grade: 'Grade 3',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.fullName && formData.email) setFormSubmitted(true);
  };

  const faqs = [
    {
      q: 'What grades sit the EQAO assessments?',
      a: 'EQAO assessments are administered in Grade 3 and Grade 6 (Primary and Junior literacy and numeracy), and Grade 9 (math). The OSSLT is taken in Grade 10.',
    },
    {
      q: 'Do EQAO results affect report card marks?',
      a: 'EQAO results do not directly affect a student\'s report card grade, but they are used by schools and the province to track progress and identify students who may need additional support.',
    },
    {
      q: 'What subjects does EQAO test?',
      a: 'EQAO tests Reading, Writing, and Mathematics in Grades 3 and 6. The Grade 9 assessment covers Mathematics only. The OSSLT tests reading and writing skills at the Grade 10 level.',
    },
    {
      q: 'Is the OSSLT compulsory for graduation?',
      a: 'Yes. Ontario students must successfully complete the OSSLT as one of the requirements for the Ontario Secondary School Diploma (OSSD). Students who are unsuccessful can re-take it or complete an alternative course.',
    },
    {
      q: 'How can tutoring help with EQAO preparation?',
      a: 'Our tutors work through released EQAO questions, identify gaps in understanding, and develop the specific skills tested — open-response writing, multi-step math problems, and reading comprehension strategies — well before the assessment date.',
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
                Ontario Province-Wide Assessment
              </span>
              <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-charcoal leading-tight font-bold">
                EQAO Preparation by <span className="text-royal-purple">expert tutors</span>
              </h1>
              <p className="text-on-surface-variant font-body-lg text-body-lg max-w-xl">
                The Education Quality and Accountability Office (EQAO) assessments benchmark every Ontario student in literacy and numeracy. We turn those benchmarks into stepping stones — not stumbling blocks.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => navigateTo('trial')}
                  className="bg-royal-purple text-on-primary px-8 py-4 rounded-xl font-headline-md text-headline-md hover:shadow-xl transition-all cursor-pointer font-medium"
                >
                  Book a Free Trial Lesson
                </button>
                <button
                  onClick={() => {
                    const el = document.getElementById('eqao-assessments');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="border-2 border-royal-purple text-royal-purple px-8 py-4 rounded-xl font-headline-md text-headline-md hover:bg-royal-purple/5 transition-all cursor-pointer font-medium"
                >
                  View Assessments
                </button>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img
                  className="w-full h-[480px] object-cover"
                  alt="Ontario student working on an assessment"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBIC2148RcAcfRXxnZOcCNJC2Yr32DtyHa7d1TOD82ZBuHm5-qZ-Hfyjuic-1MLI6po5tOU8XT7FUpGqvgdHGzRwEInHX72mGWsxX-9nVAlOqT4sbH-gqYAG5YfaLbivq9Je_ZI7ity8vsit3aPnhFxzYCZ7Vd3uaU5jtItj5k130NViqjkJsMWfhwBn54qZk6DOAoC1XqgTsCbUlAYR6O8_Q9eb3Xz1j99Ujc64cOxRy0f-IOnZz3fvw"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl max-w-xs border border-outline-variant/30">
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-10 h-10 rounded-full bg-lime-green flex items-center justify-center">
                    <TrendingUp size={24} className="text-charcoal" />
                  </div>
                  <span className="font-headline-md text-charcoal font-bold">Proven Results</span>
                </div>
                <p className="text-on-surface-variant text-label-md">Students improve by an average of one performance level within 8 weeks.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is EQAO */}
      <section className="py-24 bg-soft-gray">
        <div className="container mx-auto px-margin-mobile md:px-margin-desktop max-w-max-width">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="font-headline-lg text-headline-lg text-charcoal font-bold">What is EQAO?</h2>
              <p className="text-on-surface-variant font-body-lg leading-relaxed">
                EQAO is an independent provincial agency that develops and administers standardized assessments across Ontario. Results are reported on a four-level scale and provide families, schools, and the province with an objective picture of student achievement against the Ontario Curriculum.
              </p>
              <p className="text-on-surface-variant font-body-md leading-relaxed">
                Unlike classroom tests, EQAO uses open-response questions that demand extended written explanations — a format many students encounter for the first time. Our tutors build that specific skill set before the assessment window opens.
              </p>
            </div>
            <div className="bg-white p-10 rounded-[32px] shadow-ambient space-y-6">
              <h3 className="font-headline-md text-charcoal font-bold">Key Facts</h3>
              {[
                { Icon: School, label: 'Administered by', value: 'EQAO — independent provincial agency' },
                { Icon: CalendarDays, label: 'Assessment windows', value: 'Spring (primary, junior, OSSLT) & Fall (Gr. 9 math)' },
                { Icon: BarChart2, label: 'Reporting scale', value: 'Levels 1–4 (Level 3 = grade-level standard)' },
                { Icon: BadgeCheck, label: 'OSSLT requirement', value: 'Compulsory for Ontario Secondary School Diploma' },
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

      {/* Assessments Breakdown */}
      <section className="py-24 bg-white" id="eqao-assessments">
        <div className="container mx-auto px-margin-mobile md:px-margin-desktop max-w-max-width">
          <div className="text-center mb-16">
            <h2 className="font-headline-lg text-headline-lg text-charcoal font-bold mb-4">EQAO Assessments We Prepare For</h2>
            <p className="text-on-surface-variant font-body-md max-w-2xl mx-auto">Each assessment tests different skills. Our tutors tailor preparation to the exact format and question types your child will face.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                grade: 'Grade 3',
                name: 'Primary Assessment',
                color: 'bg-primary-fixed',
                iconColor: 'text-royal-purple',
                Icon: GraduationCap,
                subjects: ['Reading', 'Writing', 'Mathematics'],
                detail: 'Measures achievement of Grade 1–3 Ontario Curriculum expectations.',
              },
              {
                grade: 'Grade 6',
                name: 'Junior Assessment',
                color: 'bg-secondary-container',
                iconColor: 'text-secondary',
                Icon: BookOpen,
                subjects: ['Reading', 'Writing', 'Mathematics'],
                detail: 'Measures achievement of Grade 4–6 Ontario Curriculum expectations.',
              },
              {
                grade: 'Grade 9',
                name: 'Math Assessment',
                color: 'bg-lime-green/20',
                iconColor: 'text-secondary',
                Icon: FunctionSquare,
                subjects: ['Number', 'Algebra', 'Data & Financial Literacy'],
                detail: 'Online adaptive test aligned to the new Grade 9 destreamed math course.',
              },
              {
                grade: 'Grade 10',
                name: 'OSSLT',
                color: 'bg-royal-purple/10',
                iconColor: 'text-royal-purple',
                Icon: BookOpen,
                subjects: ['Reading', 'Writing'],
                detail: 'Ontario Secondary School Literacy Test. Required for OSSD graduation.',
              },
            ].map((item) => (
              <div key={item.grade} className="group p-8 bg-white rounded-2xl shadow-[0px_4px_20px_rgba(0,0,0,0.05)] border border-transparent hover:border-royal-purple/20 transition-all">
                <div className={`w-14 h-14 ${item.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <item.Icon size={24} className={item.iconColor} />
                </div>
                <p className="text-label-sm font-bold text-royal-purple uppercase tracking-wider mb-1">{item.grade}</p>
                <h3 className="font-headline-md text-charcoal font-bold mb-3">{item.name}</h3>
                <p className="text-body-md text-on-surface-variant mb-4">{item.detail}</p>
                <ul className="space-y-1">
                  {item.subjects.map((s) => (
                    <li key={s} className="flex items-center gap-2 text-label-md text-on-surface-variant">
                      <CheckCircle2 size={16} className="text-lime-green shrink-0" />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Prepare */}
      <section className="py-24 bg-soft-gray">
        <div className="container mx-auto px-margin-mobile md:px-margin-desktop max-w-max-width">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="font-headline-lg text-headline-lg text-charcoal font-bold">How we prepare your child</h2>
              <p className="text-on-surface-variant font-body-lg">Our EQAO preparation is structured, not generic. Each programme starts with a diagnostic assessment using released EQAO questions to pinpoint exactly where your child sits on the four-level scale — and what it takes to reach Level 3 or 4.</p>
              <div className="space-y-4">
                {[
                  { step: '01', title: 'Diagnostic assessment', desc: 'Released EQAO questions to establish current level and identify specific gaps.' },
                  { step: '02', title: 'Targeted skill building', desc: 'Focused sessions on open-response writing, multi-step problem solving, and reading strategies.' },
                  { step: '03', title: 'Full practice assessments', desc: 'Timed mock assessments under real EQAO conditions to build familiarity and reduce anxiety.' },
                  { step: '04', title: 'Review & consolidate', desc: 'Detailed feedback on practice responses with model answers and marking guidance.' },
                ].map((s) => (
                  <div key={s.step} className="flex gap-4">
                    <div className="w-10 h-10 bg-royal-purple text-white rounded-xl flex items-center justify-center flex-shrink-0 font-bold font-label-md">
                      {s.step}
                    </div>
                    <div>
                      <h4 className="font-headline-md text-charcoal font-bold">{s.title}</h4>
                      <p className="text-on-surface-variant font-body-md">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white p-10 rounded-[32px] shadow-ambient space-y-6">
              <h3 className="font-headline-md text-charcoal font-bold text-center">Performance Levels</h3>
              {[
                { level: 'Level 4', desc: 'Exceeds the provincial standard', color: 'bg-lime-green text-charcoal' },
                { level: 'Level 3', desc: 'Meets the provincial standard', color: 'bg-primary-fixed text-royal-purple' },
                { level: 'Level 2', desc: 'Approaching the provincial standard', color: 'bg-secondary-container text-secondary' },
                { level: 'Level 1', desc: 'Below the provincial standard', color: 'bg-soft-gray text-on-surface-variant' },
              ].map((lv) => (
                <div key={lv.level} className="flex items-center gap-4">
                  <span className={`px-3 py-1 rounded-full text-label-sm font-bold ${lv.color}`}>{lv.level}</span>
                  <span className="font-body-md text-on-surface-variant">{lv.desc}</span>
                </div>
              ))}
              <p className="text-label-sm text-on-surface-variant italic pt-2">Level 3 represents the grade-level standard expected of all Ontario students.</p>
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
                <button
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-soft-gray transition-colors font-headline-md text-[18px] font-bold cursor-pointer"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span>{faq.q}</span>
                  <ChevronDown size={24} className={`transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === i && (
                  <div className="bg-soft-gray p-6 text-on-surface-variant font-body-md border-t border-surface-container-highest">
                    {faq.a}
                  </div>
                )}
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
              <h2 className="font-display-lg text-headline-lg md:text-display-lg text-charcoal font-bold">Start EQAO Preparation Today</h2>
              <p className="text-on-surface-variant font-body-lg">No commitment — just an honest assessment of where your child stands and a clear plan to move them forward.</p>
              <div className="space-y-4">
                {['Ontario curriculum specialists', 'Released EQAO question practice', 'Flexible online scheduling'].map((pt) => (
                  <div key={pt} className="flex items-center gap-4">
                    <CheckCircle2 size={24} className="text-royal-purple" />
                    <span className="text-charcoal font-headline-md font-bold">{pt}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 p-12 lg:p-20 bg-white">
              {formSubmitted ? (
                <div className="text-center py-12 space-y-4">
                  <CheckCircle2 size={64} className="text-lime-green mx-auto" />
                  <h3 className="font-headline-md text-charcoal font-bold">Request Submitted!</h3>
                  <p className="text-on-surface-variant">Thank you <strong>{formData.fullName}</strong>. We will be in touch shortly to set up your EQAO trial lesson.</p>
                  <button onClick={() => setFormSubmitted(false)} className="bg-royal-purple text-on-primary px-6 py-2.5 rounded-xl font-medium hover:bg-primary transition-all cursor-pointer mt-4">
                    Submit Another Request
                  </button>
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
                      <input required value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-outline-variant focus:ring-2 focus:ring-royal-purple focus:border-royal-purple outline-none transition-all" placeholder="+1" type="tel" />
                    </div>
                    <div className="space-y-2">
                      <label className="font-label-md text-charcoal font-medium">Email Address</label>
                      <input required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-outline-variant focus:ring-2 focus:ring-royal-purple focus:border-royal-purple outline-none transition-all" placeholder="email@example.com" type="email" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="font-label-md text-charcoal font-medium">Assessment Grade</label>
                    <select value={formData.grade} onChange={(e) => setFormData({ ...formData, grade: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-outline-variant focus:ring-2 focus:ring-royal-purple focus:border-royal-purple outline-none transition-all bg-white">
                      <option>Grade 3 — Primary Assessment</option>
                      <option>Grade 6 — Junior Assessment</option>
                      <option>Grade 9 — Math Assessment</option>
                      <option>Grade 10 — OSSLT</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="font-label-md text-charcoal font-medium">Additional Message</label>
                    <textarea value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-outline-variant focus:ring-2 focus:ring-royal-purple focus:border-royal-purple outline-none transition-all" placeholder="Tell us about your child's goals..." rows={3} />
                  </div>
                  <button className="w-full bg-royal-purple text-on-primary font-headline-md py-4 rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-95 transition-all cursor-pointer font-bold" type="submit">
                    Send Request
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
