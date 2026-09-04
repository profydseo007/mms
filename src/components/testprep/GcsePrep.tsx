'use client';

import React, { useState } from 'react';
import LigatureIcon from '../LigatureIcon';
import { ActivePage } from '@/lib/types';

interface TestPrepProps {
  onNavigate: (page: ActivePage, subjectTitle?: string) => void;
}

export default function GcsePrep({ onNavigate }: TestPrepProps) {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'Mathematics',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      setFormSubmitted(true);
    }
  };

  return (
    <div className="bg-background text-on-surface font-body-md overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="learning-lane px-margin-mobile md:px-0 max-w-max-width mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-royal-purple/10 text-royal-purple rounded-full">
                <span className="material-symbols-outlined text-[18px]">verified</span>
                <span className="font-label-sm text-label-sm uppercase tracking-wider font-semibold">Top Rated UK Tutoring</span>
              </div>
              <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-charcoal leading-tight font-bold">
                GCSE Test Preparation by <span className="text-royal-purple">Expert Tutors</span> in the UK
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
                Master the core subjects, conquer exam anxiety, and secure the top grades you need for your future. Tailored learning paths designed for success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button
                  onClick={() => onNavigate('trial')}
                  className="bg-royal-purple text-white px-8 py-4 rounded-full font-medium text-lg text-center hover:shadow-lg transition-all active:scale-95 cursor-pointer"
                >
                  Book a Free Trial Lesson
                </button>
                <a
                  href="#subjects-section"
                  className="border-2 border-royal-purple text-royal-purple px-8 py-4 rounded-full font-medium text-lg text-center hover:bg-royal-purple/5 transition-all cursor-pointer inline-block"
                >
                  Explore Subjects
                </a>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute -inset-4 bg-lime-green/20 rounded-[2rem] blur-2xl group-hover:bg-lime-green/30 transition-all"></div>
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white">
                <img
                  className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                  alt="A professional tutor helping a student in a UK classroom setting"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3k0vu8Tg3YUMNFs4pRgue5UNIQWPgpMyoQYwplh0zysRdVH48wM9XHcQph5Zgva9c60ifDYUb87JsC_GUn1R7iw601Lwtr3zrjoqsYXcqZMVlfPt4ke1xUG3jboqxzHyoL7sfSBeK1SASSJ_j8LpLXEZFI61x-AKLxyCgik1K6p7ktNMrzBTamBcp-xQE0BIolbmoBejxeUqzsAVl980BvvDz816xje9HVyTobd2Z4ahPLUgSp9GBKA"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is GCSE Section */}
      <section className="py-24 bg-soft-gray">
        <div className="learning-lane px-margin-mobile md:px-0 text-center max-w-max-width mx-auto">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="font-headline-lg text-headline-lg text-charcoal font-bold">Understanding the GCSE Journey</h2>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              The General Certificate of Secondary Education (GCSE) marks a pivotal moment for students in Year 10 and 11 across the UK. These qualifications are the baseline for further education, apprenticeships, and university admissions. At Math Make Smart, we simplify the complexity of the curriculum, ensuring every student feels prepared for their final assessments.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12">
              <div className="bg-white p-8 rounded-xl shadow-[0px_4px_20px_rgba(0,0,0,0.05)] text-center">
                <div className="w-12 h-12 bg-royal-purple/10 text-royal-purple rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="material-symbols-outlined">calendar_today</span>
                </div>
                <h3 className="font-headline-md text-headline-md mb-2 font-bold text-charcoal">Year 10-11</h3>
                <p className="text-on-surface-variant">The critical two-year cycle of intensive study and preparation.</p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-[0px_4px_20px_rgba(0,0,0,0.05)] text-center">
                <div className="w-12 h-12 bg-lime-green/20 text-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="material-symbols-outlined">school</span>
                </div>
                <h3 className="font-headline-md text-headline-md mb-2 font-bold text-charcoal">9-1 Grading</h3>
                <p className="text-on-surface-variant">Mastering the numerical grading system introduced to differentiate excellence.</p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-[0px_4px_20px_rgba(0,0,0,0.05)] text-center">
                <div className="w-12 h-12 bg-royal-purple/10 text-royal-purple rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="material-symbols-outlined">assignment_turned_in</span>
                </div>
                <h3 className="font-headline-md text-headline-md mb-2 font-bold text-charcoal">Final Exams</h3>
                <p className="text-on-surface-variant">Comprehensive assessments that test knowledge, application, and skill.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Subjects We Master */}
      <section className="py-24" id="subjects-section">
        <div className="learning-lane px-margin-mobile md:px-0 max-w-max-width mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-headline-lg text-headline-lg text-charcoal mb-4 font-bold">Core Subjects We Master</h2>
            <p className="font-body-md text-body-md text-on-surface-variant">Comprehensive support across the pillars of the GCSE curriculum.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Maths Card */}
            <div className="group bg-white p-10 rounded-[2rem] shadow-[0px_4px_20px_rgba(0,0,0,0.05)] border border-transparent hover:border-royal-purple/20 transition-all duration-300">
              <div className="w-16 h-16 bg-royal-purple text-white rounded-2xl flex items-center justify-center mb-8 transform group-hover:rotate-6 transition-transform">
                <span className="material-symbols-outlined text-3xl">calculate</span>
              </div>
              <h3 className="font-headline-md text-headline-md mb-4 text-charcoal font-bold">Mathematics</h3>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-lime-green text-[20px]" style={{ fontVariationSettings: '"FILL" 1' }}>check_circle</span>
                  <span className="text-on-surface-variant">Higher &amp; Foundation Tier Mastery</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-lime-green text-[20px]" style={{ fontVariationSettings: '"FILL" 1' }}>check_circle</span>
                  <span className="text-on-surface-variant">Algebra, Geometry &amp; Statistics</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-lime-green text-[20px]" style={{ fontVariationSettings: '"FILL" 1' }}>check_circle</span>
                  <span className="text-on-surface-variant">Non-Calculator Technique</span>
                </li>
              </ul>
              <button
                onClick={() => onNavigate('subject', 'Maths')}
                className="text-royal-purple font-bold flex items-center gap-2 group-hover:translate-x-1 transition-transform cursor-pointer"
              >
                Learn more <LigatureIcon name="arrow_forward" className="text-sm" />
              </button>
            </div>
            {/* English Card */}
            <div className="group bg-white p-10 rounded-[2rem] shadow-[0px_4px_20px_rgba(0,0,0,0.05)] border border-transparent hover:border-royal-purple/20 transition-all duration-300">
              <div className="w-16 h-16 bg-royal-purple text-white rounded-2xl flex items-center justify-center mb-8 transform group-hover:rotate-6 transition-transform">
                <span className="material-symbols-outlined text-3xl">auto_stories</span>
              </div>
              <h3 className="font-headline-md text-headline-md mb-4 text-charcoal font-bold">English</h3>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-lime-green text-[20px]" style={{ fontVariationSettings: '"FILL" 1' }}>check_circle</span>
                  <span className="text-on-surface-variant">Language &amp; Literature Prep</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-lime-green text-[20px]" style={{ fontVariationSettings: '"FILL" 1' }}>check_circle</span>
                  <span className="text-on-surface-variant">Analytical Essay Writing</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-lime-green text-[20px]" style={{ fontVariationSettings: '"FILL" 1' }}>check_circle</span>
                  <span className="text-on-surface-variant">Creative Writing &amp; Poetry</span>
                </li>
              </ul>
              <button
                onClick={() => onNavigate('subject', 'English')}
                className="text-royal-purple font-bold flex items-center gap-2 group-hover:translate-x-1 transition-transform cursor-pointer"
              >
                Learn more <LigatureIcon name="arrow_forward" className="text-sm" />
              </button>
            </div>
            {/* Science Card */}
            <div className="group bg-white p-10 rounded-[2rem] shadow-[0px_4px_20px_rgba(0,0,0,0.05)] border border-transparent hover:border-royal-purple/20 transition-all duration-300">
              <div className="w-16 h-16 bg-royal-purple text-white rounded-2xl flex items-center justify-center mb-8 transform group-hover:rotate-6 transition-transform">
                <span className="material-symbols-outlined text-3xl">biotech</span>
              </div>
              <h3 className="font-headline-md text-headline-md mb-4 text-charcoal font-bold">Science</h3>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-lime-green text-[20px]" style={{ fontVariationSettings: '"FILL" 1' }}>check_circle</span>
                  <span className="text-on-surface-variant">Combined &amp; Triple Science</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-lime-green text-[20px]" style={{ fontVariationSettings: '"FILL" 1' }}>check_circle</span>
                  <span className="text-on-surface-variant">Biology, Chemistry &amp; Physics</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-lime-green text-[20px]" style={{ fontVariationSettings: '"FILL" 1' }}>check_circle</span>
                  <span className="text-on-surface-variant">Experimental Skills &amp; Data</span>
                </li>
              </ul>
              <button
                onClick={() => onNavigate('subject', 'Science')}
                className="text-royal-purple font-bold flex items-center gap-2 group-hover:translate-x-1 transition-transform cursor-pointer"
              >
                Learn more <LigatureIcon name="arrow_forward" className="text-sm" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Exam Board Expertise */}
      <section className="py-24 bg-royal-purple text-white">
        <div className="learning-lane px-margin-mobile md:px-0 max-w-max-width mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2">
            <h2 className="font-headline-lg text-headline-lg mb-6 font-bold">Expertise Across All UK Boards</h2>
            <p className="font-body-lg text-body-lg opacity-90 leading-relaxed">
              Every exam board has its own quirks and specific marking criteria. Our tutors are specialists in the nuances of AQA, Edexcel, and OCR, ensuring your child practices with the exact question styles they'll face in the exam hall.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-3 sm:gap-6 md:w-1/2 w-full">
            <div className="bg-white/10 backdrop-blur-md p-4 sm:p-6 rounded-2xl border border-white/20 flex items-center justify-center text-center min-h-[80px]">
              <span className="font-bold text-lg sm:text-xl lg:text-2xl text-white tracking-wider uppercase text-center whitespace-nowrap">
                AQA
              </span>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-4 sm:p-6 rounded-2xl border border-white/20 flex items-center justify-center text-center min-h-[80px]">
              <span className="font-bold text-lg sm:text-xl lg:text-2xl text-white tracking-wider uppercase text-center whitespace-nowrap">
                EDEXCEL
              </span>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-4 sm:p-6 rounded-2xl border border-white/20 flex items-center justify-center text-center min-h-[80px]">
              <span className="font-bold text-lg sm:text-xl lg:text-2xl text-white tracking-wider uppercase text-center whitespace-nowrap">
                OCR
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Math Make Smart? */}
      <section className="py-24">
        <div className="learning-lane px-margin-mobile md:px-0 max-w-max-width mx-auto">
          <div className="text-center mb-20">
            <h2 className="font-headline-lg text-headline-lg text-charcoal mb-4 font-bold">Why Families Trust Math Make Smart</h2>
            <p className="font-body-md text-body-md text-on-surface-variant">The pillars of our patient and professional approach.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 space-y-4">
              <div className="w-20 h-20 bg-lime-green/20 text-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="material-symbols-outlined text-3xl">psychology</span>
              </div>
              <h4 className="font-headline-md text-headline-md text-charcoal font-bold">Expert Tutors</h4>
              <p className="text-on-surface-variant font-body-md">Hand-picked educators with proven track records in secondary education.</p>
            </div>
            <div className="text-center p-6 space-y-4">
              <div className="w-20 h-20 bg-royal-purple/10 text-royal-purple rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="material-symbols-outlined text-3xl">map</span>
              </div>
              <h4 className="font-headline-md text-headline-md text-charcoal font-bold">Tailored Plans</h4>
              <p className="text-on-surface-variant font-body-md">Personalized learning tracks focusing on specific knowledge gaps.</p>
            </div>
            <div className="text-center p-6 space-y-4">
              <div className="w-20 h-20 bg-lime-green/20 text-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="material-symbols-outlined text-3xl">quiz</span>
              </div>
              <h4 className="font-headline-md text-headline-md text-charcoal font-bold">Mock Mastery</h4>
              <p className="text-on-surface-variant font-body-md">Timed practice and intensive feedback to build exam resilience.</p>
            </div>
            <div className="text-center p-6 space-y-4">
              <div className="w-20 h-20 bg-royal-purple/10 text-royal-purple rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="material-symbols-outlined text-3xl">sentiment_very_satisfied</span>
              </div>
              <h4 className="font-headline-md text-headline-md text-charcoal font-bold">Confidence Building</h4>
              <p className="text-on-surface-variant font-body-md">Empowering students with techniques to handle high-pressure moments.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Book a Free Trial Section */}
      <section className="py-24 bg-soft-gray overflow-hidden relative" id="book-trial">
        <div className="learning-lane px-margin-mobile md:px-0 max-w-max-width mx-auto">
          <div className="bg-white rounded-[3rem] shadow-xl overflow-hidden flex flex-col lg:flex-row">
            <div className="lg:w-1/2 p-12 lg:p-20 space-y-8">
              <div>
                <h2 className="font-headline-lg text-headline-lg text-charcoal mb-4 font-bold">Secure Your Free Trial Lesson</h2>
                <p className="text-on-surface-variant text-body-lg">No obligations. Just a chance for your child to experience the Math Make Smart difference.</p>
              </div>
              {formSubmitted ? (
                <div className="text-center py-8 space-y-4 bg-soft-gray p-6 rounded-2xl">
                  <span className="material-symbols-outlined text-lime-green text-5xl">check_circle</span>
                  <h3 className="font-headline-md text-charcoal font-bold">Trial Lesson Booked!</h3>
                  <p className="text-on-surface-variant text-sm">Thank you <strong>{formData.name}</strong>. We will reach out shortly regarding your GCSE {formData.subject} session.</p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="bg-royal-purple text-white px-6 py-2.5 rounded-full font-medium hover:bg-primary transition-all cursor-pointer text-sm"
                  >
                    Book Another Trial
                  </button>
                </div>
              ) : (
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="font-label-md text-label-md text-charcoal block font-medium">Student Name</label>
                      <input
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-6 py-4 rounded-xl border border-outline-variant focus:border-royal-purple focus:ring-2 focus:ring-royal-purple/20 outline-none transition-all"
                        placeholder="Full Name"
                        type="text"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="font-label-md text-label-md text-charcoal block font-medium">Phone Number</label>
                      <input
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-6 py-4 rounded-xl border border-outline-variant focus:border-royal-purple focus:ring-2 focus:ring-royal-purple/20 outline-none transition-all"
                        placeholder="+44 7000 000000"
                        type="tel"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="font-label-md text-label-md text-charcoal block font-medium">Email Address</label>
                    <input
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-6 py-4 rounded-xl border border-outline-variant focus:border-royal-purple focus:ring-2 focus:ring-royal-purple/20 outline-none transition-all"
                      placeholder="example@email.com"
                      type="email"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="font-label-md text-label-md text-charcoal block font-medium">Subject of Interest</label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-6 py-4 rounded-xl border border-outline-variant focus:border-royal-purple focus:ring-2 focus:ring-royal-purple/20 outline-none transition-all bg-white"
                    >
                      <option value="Mathematics">Mathematics</option>
                      <option value="English Language">English Language</option>
                      <option value="English Literature">English Literature</option>
                      <option value="Combined Science">Combined Science</option>
                      <option value="Triple Science">Triple Science</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="font-label-md text-label-md text-charcoal block font-medium">Message (Optional)</label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-6 py-4 rounded-xl border border-outline-variant focus:border-royal-purple focus:ring-2 focus:ring-royal-purple/20 outline-none transition-all"
                      placeholder="Tell us about your learning goals..."
                      rows={3}
                    />
                  </div>
                  <button
                    className="w-full bg-royal-purple text-white py-5 rounded-full font-bold text-lg shadow-lg hover:shadow-xl hover:bg-primary active:scale-95 transition-all cursor-pointer"
                    type="submit"
                  >
                    Book Now
                  </button>
                </form>
              )}
            </div>
            <div className="hidden lg:block lg:w-1/2 relative">
              <img
                className="absolute inset-0 w-full h-full object-cover"
                alt="A focused female student studying in the UK"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCYCUJcXhUtMGJ8kHDhchbqDVkwOw6byBigwop3E66ulr1f-GizLPnqPgDBUlgq5LtL6FMF8Vu8kqiEy67WDdI-B31rpVERMrPmDwc8BTfVYXie5y7H_HJbPdV6xbwHrSk3Gkr1AefBybqpzAgrjyZnOcn2XtSTLIBizH1If_FNb_vLbusmYDVxTejk_GazgmYPFcMw6507M0U5A-_2dJdRhpGEwxQsxsaTKrCIUQiu9f8XxmPSUuI54g"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-transparent"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
