'use client';

import React, { useState } from 'react';
import { useAppNavigate } from '@/lib/useAppNavigate';
import { Monitor, FileEdit, Pen, FolderOpen, CalendarDays, CheckCircle2, ChevronDown } from 'lucide-react';

export default function USApPage() {
  const { navigateTo } = useAppNavigate();
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ fullName: '', phone: '', email: '', targetScore: "3 – Qualified", message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.fullName && formData.email) setFormSubmitted(true);
  };

  const faqs = [
    { q: "Are all AP exams digital now?", a: "Not all, but most. Twenty-eight exams run through the Bluebook app: sixteen fully digital, where everything including free response is typed on screen, and twelve hybrid, where multiple choice is digital but free response is handwritten in a paper booklet. A handful of subjects, mainly world languages, remain on paper or use audio components. Confirm your child's specific format with their AP coordinator, since it determines how they should practise." },
    { q: "Which subjects use the hybrid format?", a: "The maths and science subjects, broadly, because they need students to show working with equations and diagrams. That includes Calculus AB and BC, Statistics, Precalculus, Biology, Chemistry, the Physics courses, and Macroeconomics and Microeconomics. If your child is taking one of these, they will be reading questions on a screen while writing answers on paper, which is worth rehearsing rather than meeting cold." },
    { q: "What score do I need for college credit?", a: "There is no universal answer, which catches families out. A 3 is often described as qualified, but individual universities set their own policies: some award credit at 3, many selective institutions require 4 or 5, and some grant placement into a higher course without credit hours. Check the published AP credit policy of each college on your list, because the difference can be worth a full semester of tuition." },
    { q: "How many AP courses should my child take?", a: "Fewer, done well, beats more done thinly. Admissions officers look at whether a student challenged themselves within what their school offers, not at a raw count. Three strong scores in subjects relevant to an intended major generally read better than six mediocre ones spread across unrelated fields, and the workload of a badly chosen AP can pull down the GPA that matters more." },
    { q: "When are the 2026 exams and when do scores arrive?", a: "AP exams run over two weeks in May, and scores are released in July following the administration, rolling out by region over several days. Registration is the part families miss most often: it now closes in the autumn, typically early to mid November, rather than in the spring. Missing that deadline can mean late fees or not testing at all." },
    { q: "Does the AP exam replace the course grade?", a: "No, they are entirely separate. The AP score goes to colleges for credit and placement decisions; the course grade goes on the transcript and into the GPA. Both matter, and they can diverge sharply. A student can earn an A in the class and a 3 on the exam, which usually points to a gap between classroom assessment and exam technique rather than to a knowledge problem." },
    { q: "Can my child take an AP exam without taking the course?", a: "Yes, and homeschooled students do it regularly. Registration usually needs to be arranged through a local school willing to administer it, and the deadlines are the same. Self-studying an AP is realistic for a motivated student in a subject they already have strong foundations in, though it is considerably harder in lab sciences where practical work is assumed." },
    { q: "When should we start AP preparation?", a: "For most students, work that builds through the spring beats an intensive push in April. AP exams test a full year of college-level material and cannot be crammed the way a shorter standardised test sometimes can. Starting around January gives room to consolidate earlier units while newer ones are still being taught." }
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
                AP exam preparation online with <span className="text-royal-purple">subject specialists</span>
              </h1>
              <p className="text-on-surface-variant font-body-lg text-body-lg max-w-xl">
                AP exams are college-level assessments taken each May, scored 1 to 5, and used for college credit and placement. Most are now delivered through the Bluebook app, and preparing for the platform matters almost as much as preparing for the content.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button onClick={() => navigateTo('trial')} className="bg-royal-purple text-on-primary px-8 py-4 rounded-xl font-headline-md hover:shadow-xl transition-all cursor-pointer font-medium">Book a Free Trial</button>
                <button onClick={() => { const el = document.getElementById('test-sections'); if (el) el.scrollIntoView({ behavior: 'smooth' }); }} className="border-2 border-royal-purple text-royal-purple px-8 py-4 rounded-xl font-headline-md hover:bg-royal-purple/5 transition-all cursor-pointer font-medium">View Exam Formats</button>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img className="w-full h-[480px] object-cover" alt="A student preparing for AP exams with an online tutor" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBIC2148RcAcfRXxnZOcCNJC2Yr32DtyHa7d1TOD82ZBuHm5-qZ-Hfyjuic-1MLI6po5tOU8XT7FUpGqvgdHGzRwEInHX72mGWsxX-9nVAlOqT4sbH-gqYAG5YfaLbivq9Je_ZI7ity8vsit3aPnhFxzYCZ7Vd3uaU5jtItj5k130NViqjkJsMWfhwBn54qZk6DOAoC1XqgTsCbUlAYR6O8_Q9eb3Xz1j99Ujc64cOxRy0f-IOnZz3fvw" />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl max-w-xs border border-outline-variant/30">
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-10 h-10 rounded-full bg-lime-green flex items-center justify-center"><CalendarDays size={20} className="text-charcoal" /></div>
                  <span className="font-headline-md text-charcoal font-bold">Two Weeks in May</span>
                </div>
                <p className="text-on-surface-variant text-label-md">AP exams run across two weeks each May, with registration usually closing the previous November.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Format */}
      <section className="py-24 bg-soft-gray">
        <div className="container mx-auto px-margin-mobile md:px-margin-desktop max-w-max-width">
          <div className="text-center mb-16">
            <h2 className="font-headline-lg text-headline-lg text-charcoal font-bold mb-4">How AP Exams Are Delivered</h2>
            <p className="text-on-surface-variant font-body-md max-w-2xl mx-auto">Twenty-eight AP exams now run through Bluebook, split between fully digital and hybrid delivery. Which category your subject falls into changes how you should practise.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" id="test-sections">
            {[
              { Icon: Monitor, color: "bg-primary-fixed", iconColor: "text-royal-purple", title: "Fully Digital", time: "16 exams", items: ["Multiple choice and free response in Bluebook", "All answers typed on screen", "Common for humanities and social sciences"] },
              { Icon: FileEdit, color: "bg-secondary-container", iconColor: "text-secondary", title: "Hybrid Digital", time: "12 exams", items: ["Multiple choice on screen in Bluebook", "Free response handwritten in a booklet", "Used where diagrams and working matter"] },
              { Icon: Pen, color: "bg-lime-green/20", iconColor: "text-secondary", title: "Paper & Audio", time: "Remaining subjects", items: ["Most world language exams", "Digital audio components retained", "Confirm format with your AP coordinator"] },
              { Icon: FolderOpen, color: "bg-royal-purple/10", iconColor: "text-royal-purple", title: "Portfolio & Task", time: "Selected courses", items: ["AP Art and Design portfolios", "Seminar, Research and CS Principles tasks", "Submitted digitally before the exam window"] },
            ].map((section) => (
              <div key={section.title} className="p-8 bg-white rounded-2xl shadow-[0px_4px_20px_rgba(0,0,0,0.05)] border border-transparent hover:border-royal-purple/20 transition-all group">
                <div className={`w-14 h-14 ${section.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}><section.Icon size={24} className={section.iconColor} /></div>
                <h3 className="font-headline-md text-charcoal font-bold mb-1">{section.title}</h3>
                <p className="text-label-sm text-royal-purple font-semibold mb-4">{section.time}</p>
                <ul className="space-y-2">{section.items.map((item) => <li key={item} className="flex items-start gap-2 text-label-md text-on-surface-variant"><CheckCircle2 size={16} className="text-lime-green  mt-0.5" />{item}</li>)}</ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What changed */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-margin-mobile md:px-margin-desktop max-w-max-width">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-gutter items-center">
            <div className="space-y-6">
              <span className="inline-block px-4 py-1.5 rounded-full bg-lime-green/20 text-secondary font-label-md text-label-md uppercase tracking-wider font-semibold">Digital Since 2025</span>
              <h2 className="font-headline-lg text-headline-lg text-charcoal font-bold">Preparing for the Platform as Well as the Subject</h2>
              <p className="text-on-surface-variant font-body-md">Since May 2025 the majority of AP exams have run through Bluebook, the same app used for the digital SAT. Sixteen are fully digital and twelve are hybrid, with multiple choice on screen and free response handwritten in a paper booklet.</p>
              <p className="text-on-surface-variant font-body-md">Hybrid delivery is used deliberately for subjects where working needs to be shown, which is why Calculus, Physics, Chemistry, Biology, Statistics and Precalculus fall into that group. Students should know which format their subject uses well before May, because practising the wrong one wastes preparation.</p>
            </div>
            <div className="bg-soft-gray p-10 rounded-[2rem] border border-outline-variant/30">
              <h3 className="font-headline-md text-charcoal font-bold mb-6">What Changed Recently</h3>
              <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle2 size={16} className="text-lime-green  mt-1" />
                <span className="text-body-md text-on-surface-variant">28 exams delivered through the Bluebook app</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 size={16} className="text-lime-green  mt-1" />
                <span className="text-body-md text-on-surface-variant">16 fully digital, 12 hybrid with handwritten free response</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 size={16} className="text-lime-green  mt-1" />
                <span className="text-body-md text-on-surface-variant">A built-in Desmos calculator in Bluebook where calculators are allowed</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 size={16} className="text-lime-green  mt-1" />
                <span className="text-body-md text-on-surface-variant">AP English Language and Literature moved from five answer choices to four</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 size={16} className="text-lime-green  mt-1" />
                <span className="text-body-md text-on-surface-variant">Registration now closes in the autumn rather than the spring</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 size={16} className="text-lime-green  mt-1" />
                <span className="text-body-md text-on-surface-variant">Scoring remains on the familiar 1 to 5 scale</span>
              </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Scoring */}
      <section className="py-24 bg-soft-gray">
        <div className="container mx-auto px-margin-mobile md:px-margin-desktop max-w-max-width">
          <div className="text-center mb-16">
            <h2 className="font-headline-lg text-headline-lg text-charcoal font-bold mb-4">How AP Scoring and Credit Work</h2>
            <p className="text-on-surface-variant font-body-md max-w-2xl mx-auto">The score scale is simple. What it earns you is not, and it varies far more between institutions than most families expect.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-8 bg-white rounded-2xl border border-outline-variant/30">
              <p className="font-display-lg text-royal-purple font-bold mb-2">1–5</p>
              <h3 className="font-headline-md text-charcoal font-bold mb-3">The Score Scale</h3>
              <p className="text-on-surface-variant font-body-md">Every AP exam is scored 1 to 5. A 3 is commonly described as qualified, but that word does not guarantee anything at any particular college.</p>
            </div>
            <div className="p-8 bg-white rounded-2xl border border-outline-variant/30">
              <p className="font-display-lg text-royal-purple font-bold mb-2">Varies</p>
              <h3 className="font-headline-md text-charcoal font-bold mb-3">Credit Policies</h3>
              <p className="text-on-surface-variant font-body-md">Some universities award credit at 3, others require 4 or 5, and some grant placement without credit. Check the policy of each college on your list rather than assuming a national standard.</p>
            </div>
            <div className="p-8 bg-white rounded-2xl border border-outline-variant/30">
              <p className="font-display-lg text-royal-purple font-bold mb-2">July</p>
              <h3 className="font-headline-md text-charcoal font-bold mb-3">Score Release</h3>
              <p className="text-on-surface-variant font-body-md">Scores are released in July following the May administration, arriving by region over several days rather than all at once.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How we prepare */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-margin-mobile md:px-margin-desktop max-w-max-width">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-gutter items-start">
            <div className="space-y-6">
              <h2 className="font-headline-lg text-headline-lg text-charcoal font-bold">How We Prepare Students for AP Exams</h2>
              <p className="text-on-surface-variant font-body-md">AP exams reward depth rather than test tricks. The work is genuinely subject teaching, with exam craft layered on top.</p>
              <button onClick={() => navigateTo('trial')} className="bg-royal-purple text-on-primary px-8 py-4 rounded-xl font-headline-md hover:shadow-xl transition-all cursor-pointer font-medium">Book a Free Diagnostic</button>
            </div>
            <div className="space-y-8">
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-royal-purple text-white rounded-full flex items-center justify-center font-bold text-lg">1</div>
              <div>
                <h3 className="font-headline-md text-charcoal font-bold mb-2">Match the Tutor to the Subject</h3>
                <p className="text-on-surface-variant font-body-md">AP Calculus BC and AP US History demand entirely different expertise. Students work with a specialist in their actual exam, not a generalist covering several.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-royal-purple text-white rounded-full flex items-center justify-center font-bold text-lg">2</div>
              <div>
                <h3 className="font-headline-md text-charcoal font-bold mb-2">Practise Free Response Properly</h3>
                <p className="text-on-surface-variant font-body-md">Free response sections separate a 3 from a 5 more often than multiple choice does. We work through official rubrics so students learn where points are genuinely awarded rather than writing everything they know.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-royal-purple text-white rounded-full flex items-center justify-center font-bold text-lg">3</div>
              <div>
                <h3 className="font-headline-md text-charcoal font-bold mb-2">Rehearse the Right Format</h3>
                <p className="text-on-surface-variant font-body-md">A student sitting a hybrid exam needs to practise handwriting free response under time while reading questions on screen. That combination feels unfamiliar the first time, and exam day is the wrong moment to discover it.</p>
              </div>
            </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-soft-gray">
        <div className="container mx-auto px-margin-mobile md:px-margin-desktop max-w-max-width">
          <div className="text-center mb-16"><h2 className="font-headline-lg text-headline-lg text-charcoal font-bold mb-4">AP Exam Preparation Questions, Answered</h2>
          <p className="text-on-surface-variant font-body-md max-w-2xl mx-auto">The questions American families ask us most often about digital delivery, scoring, credit and choosing subjects.</p></div>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-surface-container-highest rounded-2xl overflow-hidden bg-white">
                <button className="w-full flex items-center justify-between p-6 text-left hover:bg-soft-gray transition-colors font-headline-md text-[18px] font-bold cursor-pointer gap-4" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  <span>{faq.q}</span><ChevronDown size={22} className={`shrink-0 transition-transform duration-300 ${openFaq === i ? 'rotate-180 text-royal-purple' : ''}`} />
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
              <p className="text-on-surface-variant font-body-lg">We start by identifying which format your child's exam uses and where their free response marks are actually being lost. You will have a clear plan before the second session.</p>
              <div className="space-y-4">{["Subject specialist matching", "Free response rubric work", "Digital and hybrid format practice"].map((pt) => <div key={pt} className="flex items-center gap-4"><CheckCircle2 size={20} className="text-royal-purple" /><span className="text-charcoal font-headline-md font-bold">{pt}</span></div>)}</div>
            </div>
            <div className="lg:w-1/2 p-12 lg:p-20 bg-white">
              {formSubmitted ? (
                <div className="text-center py-12 space-y-4">
                  <CheckCircle2 size={20} className="text-lime-green" />
                  <h3 className="font-headline-md text-charcoal font-bold">Request Submitted!</h3>
                  <p className="text-on-surface-variant">Thank you <strong>{formData.fullName}</strong>. We&apos;ll be in touch to arrange your AP trial lesson.</p>
                  <button onClick={() => setFormSubmitted(false)} className="bg-royal-purple text-on-primary px-6 py-2.5 rounded-xl font-medium cursor-pointer mt-4">Submit Another</button>
                </div>
              ) : (
                <form className="grid grid-cols-1 gap-6" onSubmit={handleSubmit}>
                  <div className="space-y-2"><label className="font-label-md text-charcoal font-medium">Full Name</label><input required value={formData.fullName} onChange={(e) => setFormData({ ...formData, fullName: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-outline-variant focus:ring-2 focus:ring-royal-purple outline-none transition-all" placeholder="Student&apos;s full name" type="text" /></div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2"><label className="font-label-md text-charcoal font-medium">Phone</label><input required value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-outline-variant focus:ring-2 focus:ring-royal-purple outline-none transition-all" placeholder="+1" type="tel" /></div>
                    <div className="space-y-2"><label className="font-label-md text-charcoal font-medium">Email</label><input required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-outline-variant focus:ring-2 focus:ring-royal-purple outline-none transition-all" placeholder="email@example.com" type="email" /></div>
                  </div>
                  <div className="space-y-2"><label className="font-label-md text-charcoal font-medium">Target AP Score</label><select value={formData.targetScore} onChange={(e) => setFormData({ ...formData, targetScore: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-outline-variant focus:ring-2 focus:ring-royal-purple outline-none transition-all bg-white">{["3 – Qualified", "4 – Well Qualified", "5 – Extremely Well Qualified"].map((s) => <option key={s}>{s}</option>)}</select></div>
                  <div className="space-y-2"><label className="font-label-md text-charcoal font-medium">Additional Message</label><textarea value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-outline-variant focus:ring-2 focus:ring-royal-purple outline-none transition-all" placeholder="Which AP subjects, exam date, current grade..." rows={3} /></div>
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