'use client';

import React, { useState } from 'react';
import LigatureIcon from './LigatureIcon';
import { ActivePage } from '@/lib/types';
import { Star, School, Award, ChevronDown, CheckCircle, HelpCircle, Activity, FileText, Settings, ShieldAlert, GraduationCap, Calendar, Mail, Users } from 'lucide-react';

interface ALevelsProps {
  onNavigate: (page: ActivePage, subjectTitle?: string) => void;
}

export default function ALevels({ onNavigate }: ALevelsProps) {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormdata] = useState({ name: '', email: '', subject: 'Mathematics' });

  const toggleAccordion = (index: number) => {
    if (activeAccordion === index) {
      setActiveAccordion(null);
    } else {
      setActiveAccordion(index);
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      setFormSubmitted(true);
    }
  };

  const subjects = [
    {
      title: 'English Language & Literature',
      icon: 'history_edu',
      content: (
        <div className="grid md:grid-cols-2 gap-8 py-4">
          <div>
            <h5 className="font-bold text-primary mb-2">English Language</h5>
            <ul className="list-disc list-inside text-on-surface-variant space-y-1 text-sm font-sans">
              <li>Language &amp; individual context</li>
              <li>Dialect &amp; variations</li>
              <li>Child language development</li>
              <li>Analytical &amp; Writing skills</li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold text-primary mb-2">English Literature</h5>
            <ul className="list-disc list-inside text-on-surface-variant space-y-1 text-sm font-sans">
              <li>Prose, Drama &amp; Poetry</li>
              <li>Shakespeare &amp; Pre-1900 works</li>
              <li>Modern fictions (Gatsby, etc.)</li>
              <li>Critical thinking &amp; Essay skills</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      title: 'Mathematics',
      icon: 'functions',
      content: (
        <div className="py-4 space-y-4">
          <p className="text-on-surface-variant text-sm font-sans">Split into Pure Mathematics, Mechanics, and Statistics. Usually 3 papers of 2 hours each.</p>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="bg-surface-container p-4 rounded-xl font-bold text-charcoal text-sm">Pure Math</div>
            <div className="bg-surface-container p-4 rounded-xl font-bold text-charcoal text-sm">Mechanics</div>
            <div className="bg-surface-container p-4 rounded-xl font-bold text-charcoal text-sm">Statistics</div>
          </div>
        </div>
      )
    },
    {
      title: 'Physics',
      icon: 'precision_manufacturing',
      content: (
        <div className="py-4 space-y-4">
          <p className="text-on-surface-variant text-sm font-sans">Exploring laws governing the universe. Assessment: 3 Papers (2hrs each).</p>
          <div className="flex flex-wrap gap-2">
            {['Motion & Forces', 'Electricity', 'Nuclear Physics', 'Quantum Physics'].map((tag) => (
              <span key={tag} className="bg-surface-container px-3 py-1 rounded-full text-xs font-semibold text-charcoal">
                {tag}
              </span>
            ))}
          </div>
        </div>
      )
    },
    {
      title: 'Chemistry',
      icon: 'science',
      content: (
        <div className="py-4 grid md:grid-cols-2 gap-4">
          <div>
            <h5 className="font-bold text-primary mb-2">Physical &amp; Inorganic</h5>
            <p className="text-xs text-on-surface-variant font-sans">Atomic structure, kinetics, energetics, periodic table, transition metals.</p>
          </div>
          <div>
            <h5 className="font-bold text-primary mb-2">Organic Chemistry</h5>
            <p className="text-xs text-on-surface-variant font-sans">Alkanes, Alkenes, Polymers, Amino Acids, Proteins &amp; DNA.</p>
          </div>
        </div>
      )
    },
    {
      title: 'Biology',
      icon: 'biotech',
      content: (
        <div className="py-4 space-y-4">
          <p className="text-on-surface-variant text-sm font-sans">Study of living organisms, ecosystems, genes, and cells. Focus on core biological principles.</p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-on-surface-variant list-disc list-inside font-sans">
            <li>Cell structure &amp; function</li>
            <li>Genetics &amp; inheritance</li>
            <li>Evolution &amp; ecosystems</li>
            <li>Ecology &amp; biodiversity</li>
          </ul>
        </div>
      )
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 bg-white">
        <div className="learning-lane px-margin-mobile md:px-margin-desktop grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative z-10 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary-container text-on-secondary-container rounded-full text-label-sm font-label-sm">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
              UK A-Level Specialization
            </div>
            <h1 className="text-display-lg-mobile md:text-display-lg font-display text-charcoal mb-6 leading-tight font-bold">
              A-Levels Test Preparation by <span className="text-royal-purple font-extrabold">expert tutors</span>
            </h1>
            <p className="text-body-lg font-body-lg text-on-surface-variant mb-10 max-w-lg font-sans">
              A Levels is a crucial milestone for students in the UK. Secure your place at prestigious universities with personalized tutoring, tailored study plans, and proven success strategies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => onNavigate('trial')}
                className="bg-royal-purple text-on-primary px-8 py-4 rounded-xl font-bold text-headline-md hover:bg-primary transition-colors shadow-ambient cursor-pointer text-center"
              >
                Book a Free Trial
              </button>
              <button 
                onClick={() => onNavigate('curriculum')}
                className="border-2 border-royal-purple text-royal-purple px-8 py-4 rounded-xl font-bold text-headline-md hover:bg-soft-gray transition-colors cursor-pointer text-center"
              >
                View Curriculum
              </button>
            </div>
          </div>
          <div className="relative hidden lg:block">
            <div className="absolute -top-12 -right-12 w-96 h-96 bg-primary-fixed rounded-full blur-3xl opacity-30"></div>
            <div className="relative z-10 rounded-[32px] overflow-hidden shadow-dropdown border-8 border-white">
              <img 
                className="w-full aspect-[4/3] object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBKFULzrEYorE6hCWiEBJn1TAZnxrAUAipRfNLUUslKf6XWRr7THwe01NAnq9-RrCZBBJCEYyOue8m5OciPD1Dm79leh4sW3Dw-V2BEHmCrf6H2DibwGzK2oyxooxjp2MzFv38bv2AQbl03eWxk4BAPxHUzByF9re5NbIV9uOT8PHDKMls3xyyJCkuKKNJSB-g4EcWN4s21WU_7SLV3T9Azho9tjoJftVM_4S6oTpHLROn3xZMjf8Zd7A"
                alt="A-Levels student studying with a tutor"
              />
            </div>
            {/* Floating Stat Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-dropdown border border-outline-variant/30 z-20 max-w-[200px]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-lime-green rounded-lg flex items-center justify-center text-charcoal">
                  <span className="material-symbols-outlined text-charcoal font-bold">trending_up</span>
                </div>
                <div>
                  <p className="text-[10px] font-semibold text-on-surface-variant uppercase tracking-wider">Improvement</p>
                  <p className="text-sm font-bold text-charcoal">94% Success Rate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="py-24 bg-soft-gray border-y border-surface-container">
        <div className="learning-lane px-margin-mobile md:px-margin-desktop">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-headline-lg md:text-display-lg-mobile font-display text-charcoal font-bold">What We Offer</h2>
            <p className="text-body-lg text-on-surface-variant max-w-2xl mx-auto">Expert A-Level tutoring designed to replace exhausting in-person classes with flexible, high-quality online learning.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Flexible Timings */}
            <div className="bg-white p-8 rounded-[24px] shadow-ambient border border-outline-variant hover:-translate-y-1 transition-transform duration-300">
              <div className="w-14 h-14 bg-primary-container rounded-2xl flex items-center justify-center text-white mb-6">
                <Calendar className="w-6 h-6" />
              </div>
              <h3 className="text-headline-md font-bold mb-4 text-charcoal font-display">Flexible Timings</h3>
              <ul className="space-y-3 font-body-md text-on-surface-variant">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span>Customize Timings</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span>Easy Schedule</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span>Simple Reschedule</span>
                </li>
              </ul>
            </div>
            {/* Affordable Rates */}
            <div className="bg-white p-8 rounded-[24px] shadow-ambient border border-outline-variant hover:-translate-y-1 transition-transform duration-300">
              <div className="w-14 h-14 bg-lime-green rounded-2xl flex items-center justify-center text-charcoal mb-6">
                <Award className="w-6 h-6 text-charcoal" />
              </div>
              <h3 className="text-headline-md font-bold mb-4 text-charcoal font-display">Affordable Rates</h3>
              <ul className="space-y-3 font-body-md text-on-surface-variant">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span>Free Trial Session</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span>Discount Packages</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span>Standard Refund Policy</span>
                </li>
              </ul>
            </div>
            {/* Superior Quality */}
            <div className="bg-white p-8 rounded-[24px] shadow-ambient border border-outline-variant hover:-translate-y-1 transition-transform duration-300">
              <div className="w-14 h-14 bg-royal-purple rounded-2xl flex items-center justify-center text-white mb-6">
                <School className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-headline-md font-bold mb-4 text-charcoal font-display">Superior Quality</h3>
              <ul className="space-y-3 font-body-md text-on-surface-variant">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span>Basic Study Skills</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span>Comprehension Experts</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span>Homework Efficiency</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How MMS Helps Section */}
      <section className="py-24 bg-white">
        <div className="learning-lane px-margin-mobile md:px-margin-desktop grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-headline-lg md:text-display-lg-mobile font-display text-charcoal font-bold">How MMS Helps in A-Levels Success</h2>
            <div className="space-y-6 text-body-lg text-on-surface-variant font-sans leading-relaxed">
              <p>Our online A-level tutors are experts in the UK curriculum with years of experience helping students reach their full potential. We provide a structured approach covering the entire syllabus with regular assessments.</p>
              <p>MMS classes offer a flexible learning experience tailored to address your specific challenges. We focus on exam techniques and personalized study plans to ensure you achieve the best possible grades for university admission.</p>
              <div className="bg-surface-container-low p-6 rounded-2xl border-l-4 border-royal-purple">
                <p className="italic text-charcoal font-medium">"Online A-Level classes provide students with the opportunity to customize schedules according to their ease and needs, addressing individual learning gaps."</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-primary-container/10 p-8 rounded-[32px] text-center shadow-sm">
              <School className="w-10 h-10 text-primary mx-auto mb-4" />
              <h4 className="font-bold text-charcoal text-sm">Syllabus Coverage</h4>
            </div>
            <div className="bg-lime-green/10 p-8 rounded-[32px] text-center shadow-sm">
              <CheckCircle className="w-10 h-10 text-secondary mx-auto mb-4" />
              <h4 className="font-bold text-charcoal text-sm">Regular Assessments</h4>
            </div>
            <div className="bg-secondary-container/10 p-8 rounded-[32px] text-center shadow-sm">
              <Award className="w-10 h-10 text-secondary mx-auto mb-4" />
              <h4 className="font-bold text-charcoal text-sm">Exam Techniques</h4>
            </div>
            <div className="bg-royal-purple/10 p-8 rounded-[32px] text-center shadow-sm">
              <Users className="w-10 h-10 text-royal-purple mx-auto mb-4" />
              <h4 className="font-bold text-charcoal text-sm">Tailored Study Plans</h4>
            </div>
          </div>
        </div>
      </section>

      {/* Exam Details & Subjects Section */}
      <section className="py-24 bg-soft-gray border-y border-surface-container overflow-hidden">
        <div className="learning-lane px-margin-mobile md:px-margin-desktop">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-headline-lg md:text-display-lg-mobile font-display text-charcoal font-bold">Exam Details &amp; Subjects</h2>
            <p className="text-body-lg text-on-surface-variant max-w-xl mx-auto">A comprehensive guide to the A-Level structure and our subject specialisms.</p>
          </div>
          {/* Exam Overview Info Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-white p-6 rounded-2xl shadow-ambient border border-surface-container">
              <p className="text-[10px] font-bold text-primary mb-2 uppercase tracking-wider">DURATION</p>
              <p className="text-body-md text-charcoal font-medium">Normally taken over 2 years (Year 12 &amp; 13).</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-ambient border border-surface-container">
              <p className="text-[10px] font-bold text-primary mb-2 uppercase tracking-wider">STRUCTURE</p>
              <p className="text-body-md text-charcoal font-medium">AS Level (Year 1) &amp; A2 Level (Year 2).</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-ambient border border-surface-container">
              <p className="text-[10px] font-bold text-primary mb-2 uppercase tracking-wider">EXAM PERIODS</p>
              <p className="text-body-md text-charcoal font-medium">Main: May-June | Re-sits: Oct-Nov</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-ambient border border-surface-container">
              <p className="text-[10px] font-bold text-primary mb-2 uppercase tracking-wider">RESULTS</p>
              <p className="text-body-md text-charcoal font-medium">Announced in mid-August (June session).</p>
            </div>
          </div>
          {/* Subjects Accordion */}
          <div className="max-w-4xl mx-auto space-y-4">
            {subjects.map((sub, idx) => (
              <div 
                key={idx} 
                className={`accordion-item bg-white rounded-2xl border transition-all cursor-pointer ${
                  activeAccordion === idx ? 'border-royal-purple shadow-ambient' : 'border-outline-variant/30'
                }`}
                onClick={() => toggleAccordion(idx)}
              >
                <div className="flex justify-between items-center p-6">
                  <div className="flex items-center gap-4">
                    <span className="material-symbols-outlined text-royal-purple text-2xl" style={{ fontSize: '28px' }}>
                      {sub.icon}
                    </span>
                    <h4 className="text-body-lg font-bold text-charcoal">{sub.title}</h4>
                  </div>
                  <LigatureIcon name="expand_more" className={`transition-transform duration-200 ${activeAccordion === idx ? 'rotate-180 text-primary' : 'text-charcoal'}`} />
                </div>
                {activeAccordion === idx && (
                  <div className="px-6 pb-6 text-on-surface-variant text-body-md animate-fade-in border-t border-surface-container/50">
                    {sub.content}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="py-24 bg-white">
        <div className="learning-lane px-margin-mobile md:px-margin-desktop">
          <div className="bg-surface-container-low rounded-[40px] p-8 md:p-16 flex flex-col lg:flex-row gap-12 items-center border border-surface-container">
            <div className="lg:w-1/2 space-y-6">
              <h2 className="text-display-lg-mobile md:text-headline-lg font-display text-charcoal font-semibold">Ready to secure your grades?</h2>
              <p className="text-body-lg text-on-surface-variant font-sans">Join thousands of students who have transformed their A-Level performance. Your first 30-minute trial session is free.</p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-lime-green" />
                  <span className="font-medium text-charcoal">Expert UK-curriculum tutors</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-lime-green" />
                  <span className="font-medium text-charcoal">Personalized evaluation included</span>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 w-full">
              <div className="bg-white p-8 md:p-10 rounded-[32px] shadow-dropdown border border-outline-variant/30">
                {formSubmitted ? (
                  <div className="text-center py-12 space-y-4">
                    <CheckCircle className="w-16 h-16 text-lime-green mx-auto" />
                    <h3 className="font-headline-md text-charcoal">Free Trial Requested!</h3>
                    <p className="text-on-surface-variant">We have sent a trial booking request for <strong>{formData.name}</strong> to study <strong>A-Level {formData.subject}</strong>. A confirmation email was sent to <strong>{formData.email}</strong>.</p>
                    <button 
                      onClick={() => setFormSubmitted(false)}
                      className="bg-royal-purple text-on-primary px-6 py-2.5 rounded-lg font-medium hover:bg-primary transition-all cursor-pointer"
                    >
                      Book Another Subject
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-6">
                    <div>
                      <label className="block text-label-md font-label-md text-charcoal mb-2">Full Name</label>
                      <input 
                        required
                        value={formData.name}
                        onChange={(e) => setFormdata({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-outline-variant focus:border-royal-purple focus:ring-2 focus:ring-royal-purple/20 outline-none transition-all" 
                        placeholder="John Doe" 
                        type="text"
                      />
                    </div>
                    <div>
                      <label className="block text-label-md font-label-md text-charcoal mb-2">Email Address</label>
                      <input 
                        required
                        value={formData.email}
                        onChange={(e) => setFormdata({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-outline-variant focus:border-royal-purple focus:ring-2 focus:ring-royal-purple/20 outline-none transition-all" 
                        placeholder="email@example.com" 
                        type="email"
                      />
                    </div>
                    <div>
                      <label className="block text-label-md font-label-md text-charcoal mb-2">A-Level Subject</label>
                      <select 
                        value={formData.subject}
                        onChange={(e) => setFormdata({ ...formData, subject: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-outline-variant focus:border-royal-purple focus:ring-2 focus:ring-royal-purple/20 outline-none transition-all"
                      >
                        <option value="Mathematics">Mathematics</option>
                        <option value="English Language & Literature">English Language &amp; Literature</option>
                        <option value="Physics">Physics</option>
                        <option value="Chemistry">Chemistry</option>
                        <option value="Biology">Biology</option>
                      </select>
                    </div>
                    <button 
                      className="w-full bg-royal-purple text-on-primary py-4 rounded-xl font-bold text-body-lg shadow-ambient hover:bg-primary transition-all active:scale-95 cursor-pointer" 
                      type="submit"
                    >
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
