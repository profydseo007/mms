'use client';

import React, { useState } from 'react';
import { useAppNavigate } from '@/lib/useAppNavigate';

export default function USApPage() {
  const { navigateTo } = useAppNavigate();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ fullName: '', phone: '', email: '', subject: 'AP Calculus AB', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.fullName && formData.email) setFormSubmitted(true);
  };

  const subjects = [
    { icon: 'functions', title: 'AP Mathematics', courses: ['AP Calculus AB', 'AP Calculus BC', 'AP Statistics', 'AP Precalculus'] },
    { icon: 'auto_stories', title: 'AP English', courses: ['AP English Language & Composition', 'AP English Literature & Composition'] },
    { icon: 'science', title: 'AP Sciences', courses: ['AP Biology', 'AP Chemistry', 'AP Physics 1 & 2', 'AP Physics C', 'AP Environmental Science'] },
    { icon: 'history_edu', title: 'AP History', courses: ['AP US History', 'AP World History', 'AP European History', 'AP US Gov & Politics'] },
    { icon: 'business_center', title: 'AP Social Sciences', courses: ['AP Macroeconomics', 'AP Microeconomics', 'AP Psychology', 'AP Human Geography'] },
    { icon: 'language', title: 'AP Languages', courses: ['AP Spanish Language', 'AP French Language', 'AP Chinese Language', 'AP Latin'] },
  ];

  return (
    <div className="bg-background text-on-surface font-body-md overflow-x-hidden">
      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-center py-16 overflow-hidden bg-white">
        <div className="container mx-auto px-margin-mobile md:px-margin-desktop max-w-max-width relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-gutter items-center">
            <div className="space-y-8">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-label-md text-label-md uppercase tracking-wider font-semibold">Advanced Placement</span>
              <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-charcoal leading-tight font-bold">
                AP preparation by <span className="text-royal-purple">expert tutors</span>
              </h1>
              <p className="text-on-surface-variant font-body-lg text-body-lg max-w-xl">
                AP courses are college-level classes taken in high school. A score of 3, 4, or 5 on the May exam can earn college credit — saving thousands in tuition. We tutor all major AP subjects, matching content depth with exam technique.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button onClick={() => navigateTo('trial')} className="bg-royal-purple text-on-primary px-8 py-4 rounded-xl font-headline-md hover:shadow-xl transition-all cursor-pointer font-medium">Book a Free Trial</button>
                <button onClick={() => { const el = document.getElementById('ap-subjects'); if (el) el.scrollIntoView({ behavior: 'smooth' }); }} className="border-2 border-royal-purple text-royal-purple px-8 py-4 rounded-xl font-headline-md hover:bg-royal-purple/5 transition-all cursor-pointer font-medium">View Subjects</button>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img className="w-full h-[480px] object-cover" alt="High school student working on AP coursework" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBKFULzrEYorE6hCWiEBJn1TAZnxrAUAipRfNLUUslKf6XWRr7THwe01NAnq9-RrCZBBJCEYyOue8m5OciPD1Dm79leh4sW3Dw-V2BEHmCrf6H2DibwGzK2oyxooxjp2MzFv38bv2AQbl03eWxk4BAPxHUzByF9re5NbIV9uOT8PHDKMls3xyyJCkuKKNJSB-g4EcWN4s21WU_7SLV3T9Azho9tjoJftVM_4S6oTpHLROn3xZMjf8Zd7A" />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl max-w-xs border border-outline-variant/30">
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-10 h-10 rounded-full bg-lime-green flex items-center justify-center"><span className="material-symbols-outlined text-charcoal">school</span></div>
                  <span className="font-headline-md text-charcoal font-bold">College Credit</span>
                </div>
                <p className="text-on-surface-variant text-label-md">A score of 3–5 earns college credit at most US universities.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why AP matters */}
      <section className="py-24 bg-soft-gray">
        <div className="container mx-auto px-margin-mobile md:px-margin-desktop max-w-max-width">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="font-headline-lg text-headline-lg text-charcoal font-bold mb-4">Why AP scores matter</h2>
            <p className="text-on-surface-variant font-body-lg">AP exams are scored 1–5. A 3 is "qualified", 4 is "well qualified", and 5 is "extremely well qualified". Most selective colleges accept a 4 or 5 for credit. Each credit earned can save $3,000–$6,000 in tuition.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 max-w-3xl mx-auto">
            {[
              { score: '5', label: 'Extremely Qualified', color: 'bg-lime-green text-charcoal' },
              { score: '4', label: 'Well Qualified', color: 'bg-primary-fixed text-royal-purple' },
              { score: '3', label: 'Qualified', color: 'bg-secondary-container text-secondary' },
              { score: '2', label: 'Possibly Qualified', color: 'bg-soft-gray text-on-surface-variant' },
              { score: '1', label: 'No Recommendation', color: 'bg-surface-container text-on-surface-variant' },
            ].map((item) => (
              <div key={item.score} className="text-center p-4 rounded-2xl bg-white shadow-ambient">
                <span className={`inline-block w-12 h-12 rounded-xl flex items-center justify-center font-bold text-xl mb-2 ${item.color}`}>{item.score}</span>
                <p className="text-label-sm text-on-surface-variant font-medium">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subjects */}
      <section className="py-24 bg-white" id="ap-subjects">
        <div className="container mx-auto px-margin-mobile md:px-margin-desktop max-w-max-width">
          <div className="text-center mb-16">
            <h2 className="font-headline-lg text-headline-lg text-charcoal font-bold mb-4">AP Subjects We Cover</h2>
            <p className="text-on-surface-variant font-body-md max-w-2xl mx-auto">All major AP courses, matched to the current College Board curriculum framework and exam format.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {subjects.map((subject) => (
              <div key={subject.title} className="group bg-white p-8 rounded-2xl shadow-[0px_4px_20px_rgba(0,0,0,0.05)] border border-transparent hover:border-royal-purple/20 transition-all">
                <div className="w-14 h-14 bg-royal-purple text-white rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform"><span className="material-symbols-outlined text-2xl">{subject.icon}</span></div>
                <h3 className="font-headline-md text-charcoal font-bold mb-4">{subject.title}</h3>
                <ul className="space-y-2">{subject.courses.map((c) => <li key={c} className="flex items-center gap-2 text-label-md text-on-surface-variant"><span className="material-symbols-outlined text-lime-green text-sm" style={{ fontVariationSettings: '"FILL" 1' }}>check_circle</span>{c}</li>)}</ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What we offer */}
      <section className="py-24 bg-soft-gray">
        <div className="container mx-auto px-margin-mobile md:px-margin-desktop max-w-max-width">
          <div className="text-center mb-16"><h2 className="font-headline-lg text-headline-lg text-charcoal font-bold mb-4">What we offer</h2></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: 'person', color: 'text-royal-purple bg-primary-fixed', title: 'Subject-Specialist Tutors', desc: 'Every AP tutor has deep expertise in their specific subject — not a generalist covering every AP.' },
              { icon: 'quiz', color: 'text-secondary bg-lime-green/20', title: 'FRQ & MCQ Mastery', desc: 'AP exams blend multiple-choice and free-response. We build the exact skills each format demands.' },
              { icon: 'analytics', color: 'text-royal-purple bg-primary-fixed', title: 'Curriculum-Framework Aligned', desc: 'Every session follows the current College Board curriculum framework and key concept outline.' },
            ].map((item) => (
              <div key={item.title} className="bg-white p-8 rounded-2xl shadow-ambient text-center">
                <div className={`w-14 h-14 ${item.color} rounded-full flex items-center justify-center mx-auto mb-6`}><span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: '"FILL" 1' }}>{item.icon}</span></div>
                <h3 className="font-headline-md text-charcoal font-bold mb-3">{item.title}</h3>
                <p className="text-on-surface-variant font-body-md">{item.desc}</p>
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
              <p className="text-on-surface-variant font-body-lg">Tell us your AP subject and exam date and we&apos;ll match you with the right specialist tutor.</p>
              <div className="space-y-4">{['College Board curriculum-aligned', 'FRQ & MCQ exam technique', 'All major AP subjects covered'].map((pt) => <div key={pt} className="flex items-center gap-4"><span className="material-symbols-outlined text-royal-purple">check_circle</span><span className="text-charcoal font-headline-md font-bold">{pt}</span></div>)}</div>
            </div>
            <div className="lg:w-1/2 p-12 lg:p-20 bg-white">
              {formSubmitted ? (
                <div className="text-center py-12 space-y-4">
                  <span className="material-symbols-outlined text-lime-green text-6xl">check_circle</span>
                  <h3 className="font-headline-md text-charcoal font-bold">Request Submitted!</h3>
                  <p className="text-on-surface-variant">Thank you <strong>{formData.fullName}</strong>. We&apos;ll be in touch to arrange your AP trial lesson.</p>
                  <button onClick={() => setFormSubmitted(false)} className="bg-royal-purple text-on-primary px-6 py-2.5 rounded-xl font-medium cursor-pointer mt-4">Submit Another</button>
                </div>
              ) : (
                <form className="grid grid-cols-1 gap-6" onSubmit={handleSubmit}>
                  <div className="space-y-2"><label className="font-label-md text-charcoal font-medium">Full Name</label><input required value={formData.fullName} onChange={(e) => setFormData({ ...formData, fullName: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-outline-variant focus:ring-2 focus:ring-royal-purple outline-none transition-all" placeholder="Student's full name" type="text" /></div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2"><label className="font-label-md text-charcoal font-medium">Phone</label><input required value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-outline-variant focus:ring-2 focus:ring-royal-purple outline-none transition-all" placeholder="+1" type="tel" /></div>
                    <div className="space-y-2"><label className="font-label-md text-charcoal font-medium">Email</label><input required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-outline-variant focus:ring-2 focus:ring-royal-purple outline-none transition-all" placeholder="email@example.com" type="email" /></div>
                  </div>
                  <div className="space-y-2"><label className="font-label-md text-charcoal font-medium">AP Subject</label><select value={formData.subject} onChange={(e) => setFormData({ ...formData, subject: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-outline-variant focus:ring-2 focus:ring-royal-purple outline-none transition-all bg-white">{['AP Calculus AB', 'AP Calculus BC', 'AP Statistics', 'AP English Language', 'AP English Literature', 'AP Biology', 'AP Chemistry', 'AP Physics 1', 'AP Physics 2', 'AP Physics C', 'AP US History', 'AP World History', 'AP Psychology', 'AP Macroeconomics', 'AP Microeconomics', 'AP Spanish Language', 'AP French Language'].map((s) => <option key={s}>{s}</option>)}</select></div>
                  <div className="space-y-2"><label className="font-label-md text-charcoal font-medium">Additional Message</label><textarea value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-outline-variant focus:ring-2 focus:ring-royal-purple outline-none transition-all" placeholder="Current grade, exam date, target score..." rows={3} /></div>
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
