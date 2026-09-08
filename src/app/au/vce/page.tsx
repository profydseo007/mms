'use client';

import React, { useState } from 'react';
import { useAppNavigate } from '@/lib/useAppNavigate';
import {
  TrendingUp, ClipboardList, HelpCircle, BarChart2, GraduationCap,
  FunctionSquare, BookOpen, FlaskConical, BookMarked, Briefcase, Languages,
  CheckCircle2,
} from 'lucide-react';

export default function AUVcePage() {
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
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-label-md text-label-md uppercase tracking-wider font-semibold">Victorian Certificate of Education</span>
              <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-charcoal leading-tight font-bold">
                VCE preparation by <span className="text-royal-purple">expert tutors</span>
              </h1>
              <p className="text-on-surface-variant font-body-lg text-body-lg max-w-xl">
                The VCE determines your ATAR and your university pathway. Our tutors know every VCAA study design, School-Assessed Coursework (SAC) format, and external exam requirement for the subjects you are studying.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button onClick={() => navigateTo('trial')} className="bg-royal-purple text-on-primary px-8 py-4 rounded-xl font-headline-md hover:shadow-xl transition-all cursor-pointer font-medium">Book a Free Trial</button>
                <button onClick={() => navigateTo('pricing')} className="border-2 border-royal-purple text-royal-purple px-8 py-4 rounded-xl font-headline-md hover:bg-royal-purple/5 transition-all cursor-pointer font-medium">View Pricing</button>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img className="w-full h-[480px] object-cover" alt="VCE student at desk" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3k0vu8Tg3YUMNFs4pRgue5UNIQWPgpMyoQYwplh0zysRdVH48wM9XHcQph5Zgva9c60ifDYUb87JsC_GUn1R7iw601Lwtr3zrjoqsYXcqZMVlfPt4ke1xUG3jboqxzHyoL7sfSBeK1SASSJ_j8LpLXEZFI61x-AKLxyCgik1K6p7ktNMrzBTamBcp-xQE0BIolbmoBejxeUqzsAVl980BvvDz816xje9HVyTobd2Z4ahPLUgSp9GBKA" />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl max-w-xs border border-outline-variant/30">
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-10 h-10 rounded-full bg-lime-green flex items-center justify-center"><TrendingUp size={20} className="text-charcoal" /></div>
                  <span className="font-headline-md text-charcoal font-bold">ATAR Results</span>
                </div>
                <p className="text-on-surface-variant text-label-md">94% of our VCE students improve their study score within 6 weeks.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How VCE works */}
      <section className="py-24 bg-soft-gray">
        <div className="container mx-auto px-margin-mobile md:px-margin-desktop max-w-max-width">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="font-headline-lg text-headline-lg text-charcoal font-bold mb-4">How VCE assessment works</h2>
            <p className="text-on-surface-variant font-body-lg">Each VCE subject is assessed through a combination of School-Assessed Coursework (SAC) throughout the year and an external VCAA examination in November. Both components contribute to the final study score.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              { Icon: ClipboardList, color: 'bg-primary-fixed text-royal-purple', title: 'School-Assessed Coursework (SAC)', desc: 'Completed during the school year — tests, essays, investigations, and oral presentations depending on the subject. Our tutors prepare students for every SAC format.' },
              { Icon: HelpCircle, color: 'bg-secondary-container text-secondary', title: 'VCAA External Examination', desc: 'Sat in October–November. We use VCAA study designs and past exam papers with detailed marking guidance to maximise external exam scores.' },
              { Icon: BarChart2, color: 'bg-lime-green/20 text-secondary', title: 'Study Score & Scaling', desc: 'Raw marks are scaled to a study score out of 50. Some subjects scale up (e.g. Specialist Maths) — we advise on subject selection strategy.' },
              { Icon: GraduationCap, color: 'bg-royal-purple/10 text-royal-purple', title: 'ATAR Calculation', desc: 'Your ATAR is calculated from your best four study scores (plus a 10% bonus). We focus preparation where it has the highest ATAR impact.' },
            ].map((item) => (
              <div key={item.title} className="bg-white p-8 rounded-2xl shadow-[0px_4px_20px_rgba(0,0,0,0.05)]">
                <div className={`w-14 h-14 ${item.color} rounded-2xl flex items-center justify-center mb-6`}><item.Icon size={24} /></div>
                <h3 className="font-headline-md text-charcoal font-bold mb-3">{item.title}</h3>
                <p className="text-on-surface-variant font-body-md">{item.desc}</p>
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
            <p className="text-on-surface-variant font-body-md max-w-2xl mx-auto">All major VCE subjects across Units 1–4, matched to the current VCAA study design.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { Icon: FunctionSquare, title: 'Maths (All Levels)', subs: ['Foundation', 'General', 'Methods', 'Specialist Maths'] },
              { Icon: BookOpen, title: 'English', subs: ['English', 'English Language', 'Literature', 'EAL/D'] },
              { Icon: FlaskConical, title: 'Sciences', subs: ['Biology', 'Chemistry', 'Physics', 'Psychology'] },
              { Icon: BookMarked, title: 'Humanities', subs: ['History', 'Geography', 'Legal Studies', 'Politics'] },
              { Icon: Briefcase, title: 'Business', subs: ['Accounting', 'Business Management', 'Economics'] },
              { Icon: Languages, title: 'Languages', subs: ['French', 'Japanese', 'Indonesian', 'Chinese'] },
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
              <p className="text-on-surface-variant font-body-lg">Tell us your subject and units and we&apos;ll match you with a VCAA specialist tutor.</p>
              <div className="space-y-4">{['VCAA study design matched', 'SAC and exam preparation', 'Units 1–4 all subjects'].map((pt) => <div key={pt} className="flex items-center gap-4"><CheckCircle2 size={20} className="text-royal-purple" /><span className="text-charcoal font-headline-md font-bold">{pt}</span></div>)}</div>
            </div>
            <div className="lg:w-1/2 p-12 lg:p-20 bg-white">
              {formSubmitted ? (
                <div className="text-center py-12 space-y-4">
                  <CheckCircle2 size={56} className="text-lime-green mx-auto" />
                  <h3 className="font-headline-md text-charcoal font-bold">Request Submitted!</h3>
                  <p className="text-on-surface-variant">Thank you <strong>{formData.fullName}</strong>. We&apos;ll be in touch to arrange your VCE trial lesson.</p>
                  <button onClick={() => setFormSubmitted(false)} className="bg-royal-purple text-on-primary px-6 py-2.5 rounded-xl font-medium hover:bg-primary transition-all cursor-pointer mt-4">Submit Another</button>
                </div>
              ) : (
                <form className="grid grid-cols-1 gap-6" onSubmit={handleSubmit}>
                  <div className="space-y-2"><label className="font-label-md text-charcoal font-medium">Full Name</label><input required value={formData.fullName} onChange={(e) => setFormData({ ...formData, fullName: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-outline-variant focus:ring-2 focus:ring-royal-purple outline-none transition-all" placeholder="Student's full name" type="text" /></div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2"><label className="font-label-md text-charcoal font-medium">Phone</label><input required value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-outline-variant focus:ring-2 focus:ring-royal-purple outline-none transition-all" placeholder="+61" type="tel" /></div>
                    <div className="space-y-2"><label className="font-label-md text-charcoal font-medium">Email</label><input required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-outline-variant focus:ring-2 focus:ring-royal-purple outline-none transition-all" placeholder="email@example.com" type="email" /></div>
                  </div>
                  <div className="space-y-2"><label className="font-label-md text-charcoal font-medium">Subject</label><select value={formData.subject} onChange={(e) => setFormData({ ...formData, subject: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-outline-variant focus:ring-2 focus:ring-royal-purple outline-none transition-all bg-white">{['Mathematical Methods', 'Specialist Mathematics', 'General Mathematics', 'English', 'English Language', 'Literature', 'Biology', 'Chemistry', 'Physics', 'Psychology', 'Accounting', 'Economics', 'Legal Studies'].map((s) => <option key={s}>{s}</option>)}</select></div>
                  <div className="space-y-2"><label className="font-label-md text-charcoal font-medium">Additional Message</label><textarea value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-outline-variant focus:ring-2 focus:ring-royal-purple outline-none transition-all" placeholder="Units 1/2 or 3/4, target study score..." rows={3} /></div>
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
