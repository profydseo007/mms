'use client';

import React, { useState } from 'react';
import { useAppNavigate } from '@/lib/useAppNavigate';
import {
  TrendingUp, ClipboardList, HelpCircle, BarChart2, GraduationCap,
  FunctionSquare, BookOpen, FlaskConical, BookMarked, Briefcase, Brain,
  CheckCircle2,
} from 'lucide-react';

export default function AUQcePage() {
  const { navigateTo } = useAppNavigate();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ fullName: '', phone: '', email: '', subject: 'Mathematics', message: '' });

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
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-label-md text-label-md uppercase tracking-wider font-semibold">Queensland Certificate of Education</span>
              <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-charcoal leading-tight font-bold">
                QCE preparation by <span className="text-royal-purple">expert tutors</span>
              </h1>
              <p className="text-on-surface-variant font-body-lg text-body-lg max-w-xl">
                The QCE replaced the OP system in 2020 with a new ATAR based on external examinations and internal assessment. Our Queensland curriculum specialists prepare students for every assessment type the new system demands.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button onClick={() => navigateTo('trial')} className="bg-royal-purple text-on-primary px-8 py-4 rounded-xl font-headline-md hover:shadow-xl transition-all cursor-pointer font-medium">Book a Free Trial</button>
                <button onClick={() => navigateTo('pricing')} className="border-2 border-royal-purple text-royal-purple px-8 py-4 rounded-xl font-headline-md hover:bg-royal-purple/5 transition-all cursor-pointer font-medium">View Pricing</button>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img className="w-full h-[480px] object-cover" alt="QCE student studying" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBIC2148RcAcfRXxnZOcCNJC2Yr32DtyHa7d1TOD82ZBuHm5-qZ-Hfyjuic-1MLI6po5tOU8XT7FUpGqvgdHGzRwEInHX72mGWsxX-9nVAlOqT4sbH-gqYAG5YfaLbivq9Je_ZI7ity8vsit3aPnhFxzYCZ7Vd3uaU5jtItj5k130NViqjkJsMWfhwBn54qZk6DOAoC1XqgTsCbUlAYR6O8_Q9eb3Xz1j99Ujc64cOxRy0f-IOnZz3fvw" />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl max-w-xs border border-outline-variant/30">
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-10 h-10 rounded-full bg-lime-green flex items-center justify-center"><TrendingUp size={20} className="text-charcoal" /></div>
                  <span className="font-headline-md text-charcoal font-bold">ATAR Boost</span>
                </div>
                <p className="text-on-surface-variant text-label-md">Students improve by an average of 6 ATAR points within 10 weeks.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How QCE works */}
      <section className="py-24 bg-soft-gray">
        <div className="container mx-auto px-margin-mobile md:px-margin-desktop max-w-max-width">
          <div className="text-center mb-16">
            <h2 className="font-headline-lg text-headline-lg text-charcoal font-bold mb-4">The new QCE system</h2>
            <p className="text-on-surface-variant font-body-lg max-w-3xl mx-auto">Since 2020, Queensland students are assessed through a combination of school-based internal assessments and external QCAA examinations — producing an ATAR for the first time.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { Icon: ClipboardList, color: 'bg-primary-fixed text-royal-purple', label: 'Internal Assessment', text: '3 school-based tasks per subject (75% of overall result). We prepare for every IA type including research investigations, problem-solving tasks, and extended responses.' },
              { Icon: HelpCircle, color: 'bg-secondary-container text-secondary', label: 'External Examination', text: 'QCAA-set exams in October–November (25% of overall result). We use official QCAA past papers and marking guides to maximise external marks.' },
              { Icon: BarChart2, color: 'bg-lime-green/20 text-secondary', label: 'Overall Position (OP)', text: 'Subject result scaled to a position between 1 (highest) and 25. Scaling depends on subject cohort performance — we advise on subject selection.' },
              { Icon: GraduationCap, color: 'bg-royal-purple/10 text-royal-purple', label: 'ATAR', text: 'Queensland ATAR calculated from best five scaled results. We focus preparation where the ATAR impact is greatest for each individual student.' },
            ].map((item) => (
              <div key={item.label} className="bg-white p-6 rounded-2xl shadow-ambient">
                <div className={`w-12 h-12 ${item.color} rounded-xl flex items-center justify-center mb-4`}><item.Icon size={22} /></div>
                <p className="text-label-sm font-bold text-primary mb-2 uppercase">{item.label}</p>
                <p className="text-body-md text-on-surface-variant">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subjects */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-margin-mobile md:px-margin-desktop max-w-max-width">
          <div className="text-center mb-16">
            <h2 className="font-headline-lg text-headline-lg text-charcoal font-bold mb-4">Subjects We Cover</h2>
            <p className="text-on-surface-variant font-body-md max-w-2xl mx-auto">All General (ATAR-eligible) and Applied subjects, matched to current QCAA syllabuses.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { Icon: FunctionSquare, title: 'Maths', subs: ['General Mathematics', 'Mathematical Methods', 'Specialist Mathematics', 'Essential Mathematics'] },
              { Icon: BookOpen, title: 'English', subs: ['English', 'Literature', 'English & Literature Extension', 'Essential English'] },
              { Icon: FlaskConical, title: 'Sciences', subs: ['Biology', 'Chemistry', 'Physics', 'Earth & Environmental Science'] },
              { Icon: BookMarked, title: 'Humanities', subs: ['Modern History', 'Ancient History', 'Geography', 'Legal Studies'] },
              { Icon: Briefcase, title: 'Business', subs: ['Accounting', 'Business', 'Economics', 'Tourism'] },
              { Icon: Brain, title: 'Social Science', subs: ['Psychology', 'Sociology', 'Philosophy & Reason', 'Health'] },
            ].map((subject) => (
              <div key={subject.title} className="group bg-white p-8 rounded-2xl shadow-[0px_4px_20px_rgba(0,0,0,0.05)] border border-transparent hover:border-royal-purple/20 transition-all">
                <div className="w-14 h-14 bg-royal-purple text-white rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform"><subject.Icon size={24} /></div>
                <h3 className="font-headline-md text-charcoal font-bold mb-4">{subject.title}</h3>
                <ul className="space-y-2">{subject.subs.map((s) => <li key={s} className="flex items-center gap-2 text-label-md text-on-surface-variant"><CheckCircle2 size={14} className="text-lime-green shrink-0" />{s}</li>)}</ul>
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
              <p className="text-on-surface-variant font-body-lg">One session, no obligation. We&apos;ll identify which internal assessments and exam skills need the most work.</p>
              <div className="space-y-4">{['QCAA syllabus-matched', 'IA & external exam prep', 'All General subjects covered'].map((pt) => <div key={pt} className="flex items-center gap-4"><CheckCircle2 size={20} className="text-royal-purple" /><span className="text-charcoal font-headline-md font-bold">{pt}</span></div>)}</div>
            </div>
            <div className="lg:w-1/2 p-12 lg:p-20 bg-white">
              {formSubmitted ? (
                <div className="text-center py-12 space-y-4">
                  <CheckCircle2 size={56} className="text-lime-green mx-auto" />
                  <h3 className="font-headline-md text-charcoal font-bold">Request Submitted!</h3>
                  <p className="text-on-surface-variant">Thank you <strong>{formData.fullName}</strong>. We&apos;ll be in touch to arrange your QCE trial lesson.</p>
                  <button onClick={() => setFormSubmitted(false)} className="bg-royal-purple text-on-primary px-6 py-2.5 rounded-xl font-medium hover:bg-primary transition-all cursor-pointer mt-4">Submit Another</button>
                </div>
              ) : (
                <form className="grid grid-cols-1 gap-6" onSubmit={handleSubmit}>
                  <div className="space-y-2"><label className="font-label-md text-charcoal font-medium">Full Name</label><input required value={formData.fullName} onChange={(e) => setFormData({ ...formData, fullName: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-outline-variant focus:ring-2 focus:ring-royal-purple outline-none transition-all" placeholder="Student's full name" type="text" /></div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2"><label className="font-label-md text-charcoal font-medium">Phone</label><input required value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-outline-variant focus:ring-2 focus:ring-royal-purple outline-none transition-all" placeholder="+61" type="tel" /></div>
                    <div className="space-y-2"><label className="font-label-md text-charcoal font-medium">Email</label><input required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-outline-variant focus:ring-2 focus:ring-royal-purple outline-none transition-all" placeholder="email@example.com" type="email" /></div>
                  </div>
                  <div className="space-y-2"><label className="font-label-md text-charcoal font-medium">Subject</label><select value={formData.subject} onChange={(e) => setFormData({ ...formData, subject: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-outline-variant focus:ring-2 focus:ring-royal-purple outline-none transition-all bg-white">{['Mathematical Methods', 'Specialist Mathematics', 'General Mathematics', 'English', 'Literature', 'Biology', 'Chemistry', 'Physics', 'Modern History', 'Economics', 'Accounting', 'Psychology'].map((s) => <option key={s}>{s}</option>)}</select></div>
                  <div className="space-y-2"><label className="font-label-md text-charcoal font-medium">Additional Message</label><textarea value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-outline-variant focus:ring-2 focus:ring-royal-purple outline-none transition-all" placeholder="Year 11 or 12, target ATAR, upcoming IA..." rows={3} /></div>
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
