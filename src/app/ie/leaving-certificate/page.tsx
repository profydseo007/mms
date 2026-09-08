'use client';

import React, { useState } from 'react';
import LigatureIcon from '@/components/LigatureIcon';
import { useAppNavigate } from '@/lib/useAppNavigate';

export default function IELeavingCertPage() {
  const { navigateTo } = useAppNavigate();
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);
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

  const accordionSubjects = [
    {
      title: 'Mathematics',
      icon: 'functions',
      content: (
        <div className="py-4">
          <p className="text-on-surface-variant mb-4">Available at Higher, Ordinary, and Foundation level. Higher Level Maths carries bonus CAO points. Usually 2 papers of 2.5 hours each.</p>
          <div className="grid md:grid-cols-3 gap-4 text-center">
            {['Algebra & Functions', 'Trigonometry & Geometry', 'Statistics & Probability'].map((t) => (
              <div key={t} className="bg-surface-container p-4 rounded-xl"><p className="font-bold text-charcoal text-sm">{t}</p></div>
            ))}
          </div>
        </div>
      ),
    },
    {
      title: 'English',
      icon: 'auto_stories',
      content: (
        <div className="grid md:grid-cols-2 gap-8 py-4">
          <div>
            <h5 className="font-bold text-primary mb-2">Paper 1 — Language</h5>
            <ul className="list-disc list-inside text-on-surface-variant space-y-1 text-sm">
              <li>Comprehension texts</li>
              <li>Functional writing tasks</li>
              <li>Composition (personal, narrative, discursive)</li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold text-primary mb-2">Paper 2 — Literature</h5>
            <ul className="list-disc list-inside text-on-surface-variant space-y-1 text-sm">
              <li>Single text (novel or play)</li>
              <li>Comparative study (3 texts)</li>
              <li>Unseen poetry & studied poetry</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      title: 'Science Subjects',
      icon: 'science',
      content: (
        <div className="py-4">
          <p className="text-on-surface-variant mb-4">Biology, Chemistry, and Physics — each with Higher and Ordinary levels and mandatory coursework (practical notebooks).</p>
          <div className="flex flex-wrap gap-2">
            {['Cell Biology', 'Organic Chemistry', 'Mechanics', 'Genetics', 'Thermodynamics', 'Ecology'].map((tag) => (
              <span key={tag} className="bg-surface-container px-3 py-1 rounded-full text-label-sm font-semibold text-charcoal">{tag}</span>
            ))}
          </div>
        </div>
      ),
    },
    {
      title: 'Irish',
      icon: 'translate',
      content: (
        <div className="py-4">
          <p className="text-on-surface-variant mb-4">Compulsory for most students. Oral (Scrúdú Béil) worth 40% — a major focus of our preparation.</p>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h5 className="font-bold text-primary mb-2">Oral — 40%</h5>
              <p className="text-sm text-on-surface-variant">Scrúdú Béil: conversation, reading aloud, prepared topic.</p>
            </div>
            <div>
              <h5 className="font-bold text-primary mb-2">Written — 60%</h5>
              <p className="text-sm text-on-surface-variant">Comprehension, essay (aiste), story (scéal), and questions.</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: 'Business & Economics',
      icon: 'business_center',
      content: (
        <div className="py-4">
          <p className="text-on-surface-variant mb-4">Accounting, Business, and Economics — highly popular LC subjects with structured marking schemes.</p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-on-surface-variant list-disc list-inside">
            <li>Financial statements & ratios</li>
            <li>Business management theory</li>
            <li>Supply, demand & markets</li>
            <li>Irish & European economic policy</li>
          </ul>
        </div>
      ),
    },
  ];

  return (
    <div className="bg-background text-on-surface font-body-md overflow-x-hidden">
      {/* Hero */}
      <section className="relative overflow-hidden py-24 bg-white">
        <div className="learning-lane px-margin-mobile md:px-margin-desktop grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-max-width mx-auto">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary-container text-on-secondary-container rounded-full text-label-sm font-label-sm mb-6">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
              Irish Leaving Certificate
            </div>
            <h1 className="text-display-lg-mobile md:text-display-lg font-display-lg text-charcoal mb-6 font-bold">
              Leaving Certificate preparation by <span className="text-royal-purple">expert tutors</span>
            </h1>
            <p className="text-body-lg font-body-lg text-on-surface-variant mb-10 max-w-lg">
              The Leaving Cert is Ireland&apos;s most important exam — the gateway to CAO college entry. We provide subject-specialist, level-matched tutoring for every student from Fifth Year through to exam week.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button onClick={() => navigateTo('trial')} className="bg-royal-purple text-on-primary px-8 py-4 rounded-xl font-headline-md text-headline-md hover:bg-primary transition-colors shadow-ambient cursor-pointer font-medium">
                Book a Free Trial
              </button>
              <button onClick={() => navigateTo('pricing')} className="border-2 border-royal-purple text-royal-purple px-8 py-4 rounded-xl font-headline-md text-headline-md hover:bg-soft-gray transition-colors cursor-pointer font-medium">
                View Pricing
              </button>
            </div>
          </div>
          <div className="relative hidden md:block">
            <div className="absolute -top-12 -right-12 w-96 h-96 bg-primary-fixed rounded-full blur-3xl opacity-30"></div>
            <div className="relative z-10 rounded-[32px] overflow-hidden shadow-dropdown border-8 border-white">
              <img
                alt="Leaving Certificate student studying"
                className="w-full aspect-[4/3] object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBKFULzrEYorE6hCWiEBJn1TAZnxrAUAipRfNLUUslKf6XWRr7THwe01NAnq9-RrCZBBJCEYyOue8m5OciPD1Dm79leh4sW3Dw-V2BEHmCrf6H2DibwGzK2oyxooxjp2MzFv38bv2AQbl03eWxk4BAPxHUzByF9re5NbIV9uOT8PHDKMls3xyyJCkuKKNJSB-g4EcWN4s21WU_7SLV3T9Azho9tjoJftVM_4S6oTpHLROn3xZMjf8Zd7A"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-dropdown border border-outline-variant z-20 max-w-[200px]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-lime-green rounded-lg flex items-center justify-center text-charcoal">
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: '"FILL" 1' }}>trending_up</span>
                </div>
                <div>
                  <p className="text-label-sm font-label-sm text-on-surface-variant uppercase tracking-wider font-semibold">CAO Points</p>
                  <p className="text-body-md font-bold text-charcoal">Avg. +42 points</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-24 bg-soft-gray">
        <div className="learning-lane px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-headline-lg md:text-display-lg font-display-lg text-charcoal mb-4 font-bold">What We Offer</h2>
            <p className="text-body-lg text-on-surface-variant max-w-2xl mx-auto">Everything a Leaving Cert student needs — from First Year to exam week.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: 'calendar_today', color: 'bg-primary-container', iconColor: 'text-white', title: 'Flexible Timings', items: ['Evening & weekend sessions', 'Easy rescheduling', 'Intensive exam-season blocks'] },
              { icon: 'payments', color: 'bg-lime-green', iconColor: 'text-charcoal', title: 'Affordable Rates', items: ['Free trial session', 'Discount packages', 'Standard refund policy'] },
              { icon: 'school', color: 'bg-royal-purple', iconColor: 'text-white', title: 'Subject Specialists', items: ['Matched to your subject & level', 'Higher & Ordinary level', 'Oral exam coaching (Irish & MFL)'] },
            ].map((card) => (
              <div key={card.title} className="bg-white p-8 rounded-[24px] shadow-ambient border border-outline-variant hover:-translate-y-1 transition-transform">
                <div className={`w-14 h-14 ${card.color} rounded-2xl flex items-center justify-center ${card.iconColor} mb-6`}>
                  <span className="material-symbols-outlined text-3xl">{card.icon}</span>
                </div>
                <h3 className="text-headline-md font-bold mb-4 text-charcoal">{card.title}</h3>
                <ul className="space-y-3">
                  {card.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-on-surface-variant">
                      <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Exam Details */}
      <section className="py-24 bg-soft-gray overflow-hidden">
        <div className="learning-lane px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-headline-lg md:text-display-lg font-display-lg text-charcoal mb-4 font-bold">Exam Details &amp; Subjects</h2>
            <p className="text-body-lg text-on-surface-variant">A guide to the Leaving Cert structure and our subject specialisms.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { label: 'DURATION', text: 'Fifth and Sixth Year (2 years)' },
              { label: 'LEVELS', text: 'Higher, Ordinary, and Foundation' },
              { label: 'EXAM PERIOD', text: 'June — written papers & orals' },
              { label: 'CAO POINTS', text: 'H1 = 100 pts · O1 = 56 pts (max)' },
            ].map((item) => (
              <div key={item.label} className="bg-white p-6 rounded-2xl shadow-ambient">
                <p className="text-label-sm font-bold text-primary mb-2">{item.label}</p>
                <p className="text-body-md text-charcoal">{item.text}</p>
              </div>
            ))}
          </div>
          <div className="max-w-4xl mx-auto space-y-4">
            {accordionSubjects.map((sub, idx) => (
              <div key={idx} className={`bg-white rounded-2xl border transition-all ${activeAccordion === idx ? 'border-royal-purple shadow-md' : 'border-outline-variant'}`}>
                <div className="flex justify-between items-center p-6 cursor-pointer" onClick={() => setActiveAccordion(activeAccordion === idx ? null : idx)}>
                  <div className="flex items-center gap-4">
                    <span className="material-symbols-outlined text-royal-purple text-2xl">{sub.icon}</span>
                    <h4 className="text-headline-md font-bold text-charcoal">{sub.title}</h4>
                  </div>
                  <LigatureIcon name="expand_more" className={`transition-transform duration-200 ${activeAccordion === idx ? 'rotate-180 text-primary' : ''}`} />
                </div>
                {activeAccordion === idx && (
                  <div className="px-6 pb-6 text-on-surface-variant border-t border-surface-container pt-4">
                    {sub.content}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-24 bg-white">
        <div className="learning-lane px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto">
          <div className="bg-surface-container-low rounded-[40px] p-8 md:p-16 flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <h2 className="text-display-lg font-display-lg text-charcoal mb-6 font-bold">Ready to secure your CAO points?</h2>
              <p className="text-body-lg text-on-surface-variant mb-8">Join thousands of Irish students who have improved their Leaving Cert grades with Math Make Smart. Your first 30-minute trial session is free.</p>
              <div className="space-y-4">
                {['Irish curriculum specialists', 'Higher & Ordinary level', 'Oral exam coaching available'].map((point) => (
                  <div key={point} className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-lime-green" style={{ fontVariationSettings: '"FILL" 1' }}>check_circle</span>
                    <span className="font-medium text-charcoal">{point}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="md:w-1/2 w-full">
              <div className="bg-white p-8 md:p-10 rounded-[32px] shadow-dropdown border border-outline-variant">
                {formSubmitted ? (
                  <div className="text-center py-12 space-y-4">
                    <span className="material-symbols-outlined text-lime-green text-6xl">check_circle</span>
                    <h3 className="font-headline-md text-charcoal font-bold">Trial Session Requested!</h3>
                    <p className="text-on-surface-variant">Thank you <strong>{formData.fullName}</strong>. We&apos;ll reach out shortly to arrange your Leaving Cert {formData.subject} session.</p>
                    <button onClick={() => setFormSubmitted(false)} className="bg-royal-purple text-on-primary px-6 py-2.5 rounded-xl font-medium hover:bg-primary transition-all cursor-pointer mt-4">
                      Book Another Trial
                    </button>
                  </div>
                ) : (
                  <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="space-y-2">
                      <label className="block text-label-md font-label-md text-charcoal mb-2 font-medium">Full Name</label>
                      <input required value={formData.fullName} onChange={(e) => setFormData({ ...formData, fullName: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-outline-variant focus:border-royal-purple focus:ring-2 focus:ring-royal-purple/20 outline-none transition-all" placeholder="Student's full name" type="text" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="block text-label-md font-label-md text-charcoal mb-2 font-medium">Phone Number</label>
                        <input required value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-outline-variant focus:border-royal-purple focus:ring-2 focus:ring-royal-purple/20 outline-none transition-all" placeholder="+353" type="tel" />
                      </div>
                      <div className="space-y-2">
                        <label className="block text-label-md font-label-md text-charcoal mb-2 font-medium">Email Address</label>
                        <input required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-outline-variant focus:border-royal-purple focus:ring-2 focus:ring-royal-purple/20 outline-none transition-all" placeholder="email@example.com" type="email" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="block text-label-md font-label-md text-charcoal mb-2 font-medium">Subject</label>
                      <select value={formData.subject} onChange={(e) => setFormData({ ...formData, subject: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-outline-variant focus:border-royal-purple focus:ring-2 focus:ring-royal-purple/20 outline-none transition-all bg-white">
                        {['Mathematics', 'English', 'Irish', 'Biology', 'Chemistry', 'Physics', 'French', 'Spanish', 'Business', 'Economics', 'Accounting'].map((s) => (
                          <option key={s}>{s}</option>
                        ))}
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="block text-label-md font-label-md text-charcoal mb-2 font-medium">Additional Message</label>
                      <textarea value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-outline-variant focus:border-royal-purple focus:ring-2 focus:ring-royal-purple/20 outline-none transition-all" placeholder="Tell us about your goals..." rows={3} />
                    </div>
                    <button className="w-full bg-royal-purple text-on-primary py-4 rounded-xl font-bold text-headline-md shadow-ambient hover:bg-primary transition-all active:scale-95 cursor-pointer" type="submit">
                      Book a Free Trial
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
