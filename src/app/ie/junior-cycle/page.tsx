'use client';

import React, { useState } from 'react';
import { useAppNavigate } from '@/lib/useAppNavigate';
import {
  BarChart3,
  BookOpen,
  Calculator,
  CalendarDays,
  CheckCircle2,
  ChevronDown,
  ClipboardList,
  FlaskConical,
  Globe2,
  GraduationCap,
  History,
  Languages,
  Smile,
  TrendingUp,
  UserRound,
} from 'lucide-react';

export default function IEJuniorCyclePage() {
  const { navigateTo } = useAppNavigate();
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    subject: 'Mathematics',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.fullName && formData.email) setFormSubmitted(true);
  };

  const faqs = [
    {
      q: 'What years does the Junior Cycle cover?',
      a: 'The Junior Cycle covers the first three years of secondary school in Ireland — First Year, Second Year, and Third Year (ages 12–15). It culminates in the Junior Cycle Final Examinations (JCFE) at the end of Third Year.',
    },
    {
      q: 'What are the Junior Cycle Final Examinations (JCFE)?',
      a: 'The JCFE are state examinations set by the State Examinations Commission (SEC). Most subjects are examined at two levels — Higher and Ordinary. Results are reported on a Distinction, Merit, Achievement, or Below Achievement scale.',
    },
    {
      q: 'How is the Junior Cycle graded?',
      a: 'Grades are reported as Distinction (90–100%), Merit (75–89%), Achievement (55–74%), and Achieved Below (40–54%). Classroom-Based Assessments (CBAs) also contribute to the overall profile of achievement.',
    },
    {
      q: 'What are Classroom-Based Assessments (CBAs)?',
      a: 'CBAs are school-assessed tasks completed in Second and Third Year. They are not graded by the SEC but feed into the Junior Cycle Profile of Achievement (JCPA). Our tutors help students prepare strong, well-structured CBA submissions.',
    },
    {
      q: 'Which subjects do you tutor at Junior Cycle?',
      a: 'We cover all core subjects including Mathematics, English, Irish, Science, History, Geography, French, Spanish, Business Studies, and Art. Subject availability depends on tutor matching.',
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
                Irish Junior Cycle
              </span>
              <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-charcoal leading-tight font-bold">
                Junior Cycle preparation by <span className="text-royal-purple">expert tutors</span>
              </h1>
              <p className="text-on-surface-variant font-body-lg text-body-lg max-w-xl">
                First to Third Year support matched to the current Irish Junior Cycle framework. We cover the Junior Cycle Final Examinations, Classroom-Based Assessments, and every subject in between.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => navigateTo('trial')}
                  className="bg-royal-purple text-on-primary px-8 py-4 rounded-xl font-headline-md text-headline-md hover:shadow-xl transition-all cursor-pointer font-medium"
                >
                  Book a Free Trial Lesson
                </button>
                <button
                  onClick={() => { const el = document.getElementById('jc-subjects'); if (el) el.scrollIntoView({ behavior: 'smooth' }); }}
                  className="border-2 border-royal-purple text-royal-purple px-8 py-4 rounded-xl font-headline-md text-headline-md hover:bg-royal-purple/5 transition-all cursor-pointer font-medium"
                >
                  View Subjects
                </button>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img
                  className="w-full h-[480px] object-cover"
                  alt="Irish secondary school students studying"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3k0vu8Tg3YUMNFs4pRgue5UNIQWPgpMyoQYwplh0zysRdVH48wM9XHcQph5Zgva9c60ifDYUb87JsC_GUn1R7iw601Lwtr3zrjoqsYXcqZMVlfPt4ke1xUG3jboqxzHyoL7sfSBeK1SASSJ_j8LpLXEZFI61x-AKLxyCgik1K6p7ktNMrzBTamBcp-xQE0BIolbmoBejxeUqzsAVl980BvvDz816xje9HVyTobd2Z4ahPLUgSp9GBKA"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl max-w-xs border border-outline-variant/30">
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-10 h-10 rounded-full bg-lime-green flex items-center justify-center">
                    <TrendingUp size={20} aria-hidden="true" />
                  </div>
                  <span className="font-headline-md text-charcoal font-bold">Proven Results</span>
                </div>
                <p className="text-on-surface-variant text-label-md">Students move up a full grade band within 8 weeks on average.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is the Junior Cycle */}
      <section className="py-24 bg-soft-gray">
        <div className="container mx-auto px-margin-mobile md:px-margin-desktop max-w-max-width">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="font-headline-lg text-headline-lg text-charcoal font-bold">What is the Junior Cycle?</h2>
              <p className="text-on-surface-variant font-body-lg leading-relaxed">
                The Junior Cycle is the first stage of Irish secondary education, running from First to Third Year. It is designed around a framework of key skills and learning outcomes rather than a content-heavy syllabus. Subjects are assessed through a mix of state examinations and school-based assessments.
              </p>
              <p className="text-on-surface-variant font-body-md leading-relaxed">
                The Junior Cycle Profile of Achievement (JCPA) is issued to every student at the end of Third Year, recording both examination results and CBA descriptors.
              </p>
            </div>
            <div className="bg-white p-10 rounded-[32px] shadow-ambient space-y-6">
              <h3 className="font-headline-md text-charcoal font-bold">Key Facts</h3>
              {[
                { icon: CalendarDays, label: 'Duration', value: '3 years — First, Second, Third Year' },
                { icon: GraduationCap, label: 'Final exams', value: 'Junior Cycle Final Examinations (JCFE) — State Examinations Commission' },
                { icon: BarChart3, label: 'Grade scale', value: 'Distinction / Merit / Achievement / Below Achievement' },
                { icon: ClipboardList, label: 'CBAs', value: 'Two Classroom-Based Assessments per subject — school assessed' },
              ].map((fact) => (
                <div key={fact.label} className="flex gap-4">
                  <div className="w-10 h-10 bg-primary-fixed rounded-xl flex items-center justify-center flex-shrink-0 text-royal-purple">
                    <fact.icon size={18} aria-hidden="true" />
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

      {/* Subjects */}
      <section className="py-24 bg-white" id="jc-subjects">
        <div className="container mx-auto px-margin-mobile md:px-margin-desktop max-w-max-width">
          <div className="text-center mb-16">
            <h2 className="font-headline-lg text-headline-lg text-charcoal font-bold mb-4">Subjects We Cover</h2>
            <p className="text-on-surface-variant font-body-md max-w-2xl mx-auto">Full coverage across the Junior Cycle curriculum — Higher and Ordinary level for all examined subjects.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Calculator, title: 'Mathematics', level: 'Higher & Ordinary', points: ['Number, algebra & geometry', 'Statistics & probability', 'Problem-solving & proofs'] },
              { icon: BookOpen, title: 'English', level: 'Higher & Ordinary', points: ['Reading & comprehension', 'Personal writing & poetry', 'Oral communication'] },
              { icon: FlaskConical, title: 'Science', level: 'Higher & Ordinary', points: ['Biology, Chemistry, Physics', 'Laboratory investigations', 'CBAs & written exam'] },
              { icon: Languages, title: 'Irish', level: 'Higher & Ordinary', points: ['Oral Irish (Scrúdú Béil)', 'Reading comprehension', 'Written expression'] },
              { icon: Globe2, title: 'Modern Languages', level: 'French & Spanish', points: ['Listening & reading', 'Written production', 'Oral assessment'] },
              { icon: History, title: 'History & Geography', level: 'Higher & Ordinary', points: ['Source-based questions', 'Case studies & essays', 'Map & data skills'] },
            ].map((subject) => (
              <div key={subject.title} className="group bg-white p-8 rounded-2xl shadow-[0px_4px_20px_rgba(0,0,0,0.05)] border border-transparent hover:border-royal-purple/20 transition-all">
                <div className="w-14 h-14 bg-royal-purple text-white rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform">
                  <subject.icon size={24} aria-hidden="true" />
                </div>
                <h3 className="font-headline-md text-charcoal font-bold mb-1">{subject.title}</h3>
                <p className="text-label-sm text-royal-purple font-semibold mb-4">{subject.level}</p>
                <ul className="space-y-2">
                  {subject.points.map((pt) => (
                    <li key={pt} className="flex items-center gap-2 text-label-md text-on-surface-variant">
                      <CheckCircle2 size={16} className="text-lime-green" aria-hidden="true" />
                      {pt}
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
          <div className="text-center mb-16">
            <h2 className="font-headline-lg text-headline-lg text-charcoal font-bold mb-4">Why Choose Math Make Smart?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {[
              { icon: UserRound, color: 'text-royal-purple', title: 'One-on-One Attention', desc: 'Every session is tailored to the student\'s subject, level, and specific gaps — not a generic class.' },
              { icon: BarChart3, color: 'text-lime-green', title: 'CBA & Exam Prep', desc: 'We help students structure CBA projects and master the open-ended question formats the JCFE demands.' },
              { icon: Smile, color: 'text-royal-purple', title: 'Confidence Building', desc: 'Junior Cycle is many students\' first experience of state exams. We make sure they arrive prepared, not anxious.' },
            ].map((item) => (
              <div key={item.title} className="text-center space-y-4 px-6">
                <div className={`mx-auto w-16 h-16 bg-soft-gray rounded-full flex items-center justify-center ${item.color} mb-4 border border-surface-container`}>
                  <item.icon size={30} aria-hidden="true" />
                </div>
                <h4 className="font-headline-lg text-charcoal font-bold">{item.title}</h4>
                <p className="text-on-surface-variant font-body-md">{item.desc}</p>
              </div>
            ))}
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
                  <ChevronDown size={20} className={`transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`} aria-hidden="true" />
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
              <h2 className="font-display-lg text-headline-lg md:text-display-lg text-charcoal font-bold">Book a Free Trial Lesson</h2>
              <p className="text-on-surface-variant font-body-lg">Start your Junior Cycle journey with a no-obligation expert assessment.</p>
              <div className="space-y-4">
                {['Irish curriculum specialists', 'Higher & Ordinary level', 'CBA guidance included'].map((pt) => (
                  <div key={pt} className="flex items-center gap-4">
                    <CheckCircle2 size={20} className="text-royal-purple" aria-hidden="true" />
                    <span className="text-charcoal font-headline-md font-bold">{pt}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 p-12 lg:p-20 bg-white">
              {formSubmitted ? (
                <div className="text-center py-12 space-y-4">
                  <CheckCircle2 size={60} className="text-lime-green mx-auto" aria-hidden="true" />
                  <h3 className="font-headline-md text-charcoal font-bold">Request Submitted!</h3>
                  <p className="text-on-surface-variant">Thank you <strong>{formData.fullName}</strong>. We&apos;ll be in touch shortly to arrange your Junior Cycle trial lesson.</p>
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
                      <input required value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-outline-variant focus:ring-2 focus:ring-royal-purple focus:border-royal-purple outline-none transition-all" placeholder="+353" type="tel" />
                    </div>
                    <div className="space-y-2">
                      <label className="font-label-md text-charcoal font-medium">Email Address</label>
                      <input required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-outline-variant focus:ring-2 focus:ring-royal-purple focus:border-royal-purple outline-none transition-all" placeholder="email@example.com" type="email" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="font-label-md text-charcoal font-medium">Subject</label>
                    <select value={formData.subject} onChange={(e) => setFormData({ ...formData, subject: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-outline-variant focus:ring-2 focus:ring-royal-purple focus:border-royal-purple outline-none transition-all bg-white">
                      {['Mathematics', 'English', 'Irish', 'Science', 'French', 'Spanish', 'History', 'Geography', 'Business Studies'].map((s) => (
                        <option key={s}>{s}</option>
                      ))}
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
