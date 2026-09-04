'use client';

import React from 'react';
import LigatureIcon from '../LigatureIcon';
import { ActivePage } from '@/lib/types';
import { CheckCircle2, Clock, DollarSign, Star, Check, GraduationCap } from 'lucide-react';

interface SubjectComponentProps {
  onNavigate: (page: ActivePage, subjectTitle?: string) => void;
}

export default function BiologySubjectUSA({ onNavigate }: SubjectComponentProps) {
  return (
    <div className="bg-background text-on-surface font-body-md selection:bg-primary-fixed selection:text-on-primary-fixed">
      {/* Hero Section */}
      <section className="relative py-20 md:py-24 overflow-hidden">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-gutter items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-fixed text-on-primary-fixed rounded-full font-label-md text-label-md font-semibold">
                <Check size={18} />
                Top-Rated US Biology Experts &amp; Educators
              </div>
              <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-charcoal leading-tight font-bold">
                Online Biology Tutor <br />
                <span className="text-royal-purple">in the USA</span>
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl font-sans">
                Get the biology help you need right now from an expert <strong className="font-semibold text-charcoal">Online Biology Tutor in USA</strong>. Master AP Biology, cellular structures, genetics, and ecology through personalized 1-on-1 private tutoring aligned with American high school curricula (Grades 9 to 12).
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <button
                  onClick={() => onNavigate('trial')}
                  className="px-8 py-4 bg-royal-purple text-white rounded-xl font-headline-md text-body-md hover:shadow-lg transition-all active:scale-95 font-bold cursor-pointer"
                >
                  Book Free Trial Lesson
                </button>
                <button
                  onClick={() => onNavigate('a-levels')}
                  className="px-8 py-4 border-2 border-royal-purple text-royal-purple rounded-xl font-headline-md text-body-md hover:bg-soft-gray transition-all active:scale-95 font-bold cursor-pointer"
                >
                  View US Pricing
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-lime-green opacity-10 rounded-full blur-3xl"></div>
              <div className="rounded-[32px] overflow-hidden shadow-2xl relative">
                <img
                  className="w-full h-auto object-cover aspect-[4/3]"
                  alt="Online biology tutoring session for US high school students"
                  src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=800&q=80"
                />
                <div className="absolute bottom-6 left-6 right-6 bg-white/80 backdrop-blur-md p-6 rounded-2xl flex items-center gap-4 border border-white/40 shadow-lg">
                  <div className="flex -space-x-3">
                    <div className="w-10 h-10 rounded-full border-2 border-white bg-surface-container"></div>
                    <div className="w-10 h-10 rounded-full border-2 border-white bg-surface-container"></div>
                    <div className="w-10 h-10 rounded-full border-2 border-white bg-surface-container"></div>
                  </div>
                  <p className="text-label-md font-label-md text-charcoal font-semibold">Joined by 600+ US students this month</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="py-20 md:py-24 bg-soft-gray">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="text-center mb-16 space-y-4">
            <h2 className="font-headline-lg text-headline-lg text-charcoal font-bold">Why Choose Math Make Smart for US Biology?</h2>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto">
              Stop stressing over complex biological concepts and memorization. We provide dedicated <span className="font-semibold text-charcoal">virtual biology tutoring</span> customized for American academic standards.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {/* Flexible Timings */}
            <div className="bg-white p-10 rounded-[24px] shadow-[0px_4px_20px_rgba(0,0,0,0.05)] hover:translate-y-[-8px] transition-transform duration-300 border border-outline-variant/30">
              <div className="w-14 h-14 bg-primary-fixed flex items-center justify-center rounded-2xl mb-8">
                <Clock size={32} className="text-primary" />
              </div>
              <h3 className="font-headline-md text-headline-md mb-4 text-charcoal font-bold">Flexible Timings &amp; Scheduling</h3>
              <p className="text-on-surface-variant font-body-md leading-relaxed">Book live interactive sessions around your after-school sports, extracurriculars, or weekend study blocks across all US time zones.</p>
            </div>
            {/* Affordable Rates */}
            <div className="bg-white p-10 rounded-[24px] shadow-[0px_4px_20px_rgba(0,0,0,0.05)] hover:translate-y-[-8px] transition-transform duration-300 border border-outline-variant/30">
              <div className="w-14 h-14 bg-secondary-fixed-dim/20 flex items-center justify-center rounded-2xl mb-8">
                <DollarSign size={32} className="text-secondary" />
              </div>
              <h3 className="font-headline-md text-headline-md mb-4 text-charcoal font-bold">Affordable Rates &amp; Packages</h3>
              <p className="text-on-surface-variant font-body-md leading-relaxed">High-grade <span className="font-semibold text-charcoal">private biology lessons</span> without the exorbitant hourly fees of local private tutoring centers.</p>
            </div>
            {/* Superior Tutoring */}
            <div className="bg-white p-10 rounded-[24px] shadow-[0px_4px_20px_rgba(0,0,0,0.05)] hover:translate-y-[-8px] transition-transform duration-300 border border-outline-variant/30">
              <div className="w-14 h-14 bg-tertiary-fixed flex items-center justify-center rounded-2xl mb-8">
                <Star size={32} className="text-tertiary" />
              </div>
              <h3 className="font-headline-md text-headline-md mb-4 text-charcoal font-bold">Certified Biology Experts</h3>
              <p className="text-on-surface-variant font-body-md leading-relaxed">Work with verified STEM professionals specialized in breaking down molecular pathways, cellular respiration, and genetics.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Focus Section */}
      <section className="py-24 bg-white">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4 space-y-6">
              <h2 className="font-headline-lg text-headline-lg text-charcoal leading-tight font-bold">
                American Curriculum <br />
                <span className="text-royal-purple">Grades 9 to 12 &amp; AP</span>
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant">From general high school biology to rigorous AP Biology exam prep, our syllabus is tailored to US state and national standards.</p>
              <div className="space-y-4 pt-6">
                <div className="flex items-center gap-4 p-4 rounded-xl bg-surface-container-low border-l-4 border-royal-purple">
                  <span className="font-bold text-royal-purple">01</span>
                  <span className="font-label-md text-charcoal font-semibold">High School Biology (Grade 9-10)</span>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-xl hover:bg-surface-container-low transition-colors group">
                  <span className="font-bold text-outline-variant group-hover:text-royal-purple">02</span>
                  <span className="font-label-md text-on-surface-variant group-hover:text-charcoal font-medium">Honors &amp; Anatomy / Physiology (Grade 11)</span>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-xl hover:bg-surface-container-low transition-colors group">
                  <span className="font-bold text-outline-variant group-hover:text-royal-purple">03</span>
                  <span className="font-label-md text-on-surface-variant group-hover:text-charcoal font-medium">Advanced Placement (AP) Biology (Grade 12)</span>
                </div>
              </div>
            </div>
            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="p-8 bg-surface-container-low rounded-[24px] border border-outline-variant/20 hover:border-royal-purple/30 transition-all">
                  <div className="font-label-sm text-royal-purple uppercase tracking-widest mb-4 font-semibold">Core Module</div>
                  <h4 className="font-headline-md text-headline-md mb-2 font-bold text-charcoal">Cellular Structure &amp; Function</h4>
                  <p className="font-body-md text-on-surface-variant">Organelles, membrane transport, osmosis, and cellular energetics (ATP production).</p>
                </div>
                <div className="p-8 bg-surface-container-low rounded-[24px] border border-outline-variant/20 hover:border-royal-purple/30 transition-all">
                  <div className="font-label-sm text-royal-purple uppercase tracking-widest mb-4 font-semibold">Core Module</div>
                  <h4 className="font-headline-md text-headline-md mb-2 font-bold text-charcoal">Genetics &amp; Heredity</h4>
                  <p className="font-body-md text-on-surface-variant">DNA replication, transcription, translation, Mendelian genetics, and gene expression.</p>
                </div>
                <div className="p-8 bg-surface-container-low rounded-[24px] border border-outline-variant/20 hover:border-royal-purple/30 transition-all">
                  <div className="font-label-sm text-royal-purple uppercase tracking-widest mb-4 font-semibold">Core Module</div>
                  <h4 className="font-headline-md text-headline-md mb-2 font-bold text-charcoal">Ecology &amp; Ecosystems</h4>
                  <p className="font-body-md text-on-surface-variant">Energy flow, population dynamics, biodiversity, and environmental interdependence.</p>
                </div>
                <div className="p-8 bg-royal-purple text-white rounded-[24px] shadow-lg flex flex-col justify-between">
                  <div>
                    <h4 className="font-headline-md text-headline-md mb-4 font-bold">Ace Your AP Biology Exam</h4>
                    <p className="opacity-90">Targeted practice questions and concept mapping designed to secure a score of 4 or 5.</p>
                  </div>
                  <button
                    onClick={() => onNavigate('trial')}
                    className="inline-flex items-center gap-2 mt-6 font-label-md group font-bold text-white cursor-pointer"
                  >
                    Learn More 
                    <LigatureIcon name="arrow_forward" className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
                <div className="p-8 bg-surface-container-low rounded-[24px] border border-outline-variant/20 sm:col-span-2 flex flex-wrap gap-4">
                  {['Evolutionary Biology', 'Human Anatomy', 'Photosynthesis & Respiration', 'Biochemistry', 'Molecular Biology'].map((mod) => (
                    <span key={mod} className="px-4 py-2 bg-white rounded-full text-label-md font-label-md text-royal-purple border border-royal-purple/10 font-medium">
                      {mod}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grade-by-Grade Biology Lesson Plans Section */}
      <section className="py-20 md:py-24 bg-surface-container-low">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="text-center mb-16 space-y-4">
            <h2 className="font-headline-lg text-headline-lg text-charcoal font-bold">US Grade-Wise Biology Lesson Plans</h2>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto">
              Our <span className="font-semibold text-charcoal">online biology tutoring</span> follows structured grade paths to build compounding scientific mastery.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-[24px] border border-outline-variant/20 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-royal-purple/10 text-royal-purple rounded-xl flex items-center justify-center font-bold mb-6">G9</div>
                <h3 className="font-headline-md text-headline-md mb-3 font-bold text-charcoal">Grade 9: General Biology</h3>
                <p className="text-on-surface-variant font-body-md mb-6">Introduction to life sciences, scientific method, basic cell structure, and simple ecological interactions.</p>
              </div>
              <ul className="space-y-2 text-label-md text-charcoal font-medium border-t border-outline-variant/20 pt-4">
                <li className="flex items-center gap-2"><Check size={16} className="text-royal-purple" /> Cell theory &amp; organelles</li>
                <li className="flex items-center gap-2"><Check size={16} className="text-royal-purple" /> Basic metabolism</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-[24px] border border-outline-variant/20 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-royal-purple/10 text-royal-purple rounded-xl flex items-center justify-center font-bold mb-6">G10</div>
                <h3 className="font-headline-md text-headline-md mb-3 font-bold text-charcoal">Grade 10: Genetics &amp; Evolution</h3>
                <p className="text-on-surface-variant font-body-md mb-6">Deep dive into DNA, RNA, protein synthesis, Mendelian genetics, natural selection, and population shifts.</p>
              </div>
              <ul className="space-y-2 text-label-md text-charcoal font-medium border-t border-outline-variant/20 pt-4">
                <li className="flex items-center gap-2"><Check size={16} className="text-royal-purple" /> Punnett squares &amp; DNA</li>
                <li className="flex items-center gap-2"><Check size={16} className="text-royal-purple" /> Mechanisms of evolution</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-[24px] border border-outline-variant/20 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-royal-purple/10 text-royal-purple rounded-xl flex items-center justify-center font-bold mb-6">G11</div>
                <h3 className="font-headline-md text-headline-md mb-3 font-bold text-charcoal">Grade 11: Anatomy &amp; Physiology</h3>
                <p className="text-on-surface-variant font-body-md mb-6">Comprehensive review of human body systems: cardiovascular, nervous, endocrine, and immune responses.</p>
              </div>
              <ul className="space-y-2 text-label-md text-charcoal font-medium border-t border-outline-variant/20 pt-4">
                <li className="flex items-center gap-2"><Check size={16} className="text-royal-purple" /> Organ systems integration</li>
                <li className="flex items-center gap-2"><Check size={16} className="text-royal-purple" /> Homeostasis &amp; feedback</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-[24px] border border-outline-variant/20 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-royal-purple/10 text-royal-purple rounded-xl flex items-center justify-center font-bold mb-6">G12</div>
                <h3 className="font-headline-md text-headline-md mb-3 font-bold text-charcoal">Grade 12: AP Biology</h3>
                <p className="text-on-surface-variant font-body-md mb-6">College-level curriculum preparation focusing on free-response questions (FRQs) and lab investigation data analysis.</p>
              </div>
              <ul className="space-y-2 text-label-md text-charcoal font-medium border-t border-outline-variant/20 pt-4">
                <li className="flex items-center gap-2"><Check size={16} className="text-royal-purple" /> Advanced biochemical pathways</li>
                <li className="flex items-center gap-2"><Check size={16} className="text-royal-purple" /> AP exam test-taking strategies</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Quality Section */}
      <section className="py-20 md:py-24 bg-white relative overflow-hidden">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 order-2 lg:order-1">
              <div className="relative">
                <img
                  className="rounded-[32px] shadow-xl w-full h-auto object-cover"
                  alt="US Biology tutor conducting an interactive online tutoring session"
                  src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=80"
                />
                <div className="absolute -bottom-8 -right-8 p-6 bg-white rounded-2xl shadow-lg border border-outline-variant flex items-center gap-4">
                  <div className="w-12 h-12 bg-lime-green rounded-full flex items-center justify-center">
                    <CheckCircle2 size={24} className="text-white" />
                  </div>
                  <div>
                    <div className="font-headline-md text-headline-md font-bold text-charcoal">99%</div>
                    <div className="text-label-sm text-on-surface-variant uppercase tracking-tighter font-semibold">Student Satisfaction</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 order-1 lg:order-2 space-y-8">
              <h2 className="font-headline-lg text-headline-lg text-charcoal font-bold">
                Qualified US Biology Tutors <br />
                <span className="text-royal-purple">Trusted by Parents Nationwide</span>
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed font-sans">
                Our educators are subject matter experts from top-tier universities. Each tutor undergoes rigorous background screening and pedagogical training to ensure engaging, confidence-building virtual instruction.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={24} className="text-lime-green mt-1" />
                  <span className="font-body-md text-charcoal font-medium">Fully Background Checked &amp; Screened Educators</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={24} className="text-lime-green mt-1" />
                  <span className="font-body-md text-charcoal font-medium">Graduates from Premier US Higher Education Institutions</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={24} className="text-lime-green mt-1" />
                  <span className="font-body-md text-charcoal font-medium">Specialists in State Standards, SAT Subject Tests &amp; AP Biology</span>
                </li>
              </ul>
              <div className="pt-4">
                <button
                  onClick={() => onNavigate('about')}
                  className="px-10 py-5 bg-royal-purple text-white rounded-2xl shadow-lg hover:shadow-xl transition-all font-headline-md font-bold cursor-pointer"
                >
                  Learn More About Our Tutors
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-20 md:py-24 bg-soft-gray">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="text-center mb-16 space-y-4">
            <h2 className="font-headline-lg text-headline-lg text-charcoal font-bold">Frequently Asked Questions</h2>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-xl mx-auto">Got questions about our online biology tutoring program in the USA? We have straightforward answers.</p>
          </div>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white p-8 rounded-[24px] border border-outline-variant/20 shadow-sm">
              <h3 className="font-headline-md text-headline-md font-bold text-charcoal mb-3">How do online 1-on-1 biology tutoring sessions work?</h3>
              <p className="font-body-md text-on-surface-variant">Sessions are conducted over our secure interactive platform equipped with digital whiteboards, real-time diagram sharing, and custom problem-solving exercises tailored to your US high school curriculum.</p>
            </div>
            <div className="bg-white p-8 rounded-[24px] border border-outline-variant/20 shadow-sm">
              <h3 className="font-headline-md text-headline-md font-bold text-charcoal mb-3">Can my child get help specifically for AP Biology exam prep?</h3>
              <p className="font-body-md text-on-surface-variant">Yes! Our experienced AP Biology tutors focus intensely on free-response question (FRQ) practice, lab data interpretation, and core test-taking strategies to help students secure top scores.</p>
            </div>
            <div className="bg-white p-8 rounded-[24px] border border-outline-variant/20 shadow-sm">
              <h3 className="font-headline-md text-headline-md font-bold text-charcoal mb-3">How are tutors matched with US students?</h3>
              <p className="font-body-md text-on-surface-variant">We assess your student's current grade level, academic goals, learning pace, and schedule availability during the initial consultation to pair them with the ideal subject specialist.</p>
            </div>
            <div className="bg-white p-8 rounded-[24px] border border-outline-variant/20 shadow-sm">
              <h3 className="font-headline-md text-headline-md font-bold text-charcoal mb-3">Is there a free trial lesson available?</h3>
              <p className="font-body-md text-on-surface-variant">Absolutely. You can book a complimentary demo lesson with one of our expert biology tutors with zero upfront payment or long-term commitment required.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 md:py-24 relative overflow-hidden bg-white">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="bg-royal-purple rounded-[48px] p-10 md:p-20 text-center relative overflow-hidden shadow-2xl">
            <div className="relative z-10 space-y-8">
              <h2 className="font-display-lg text-display-lg-mobile md:text-display-lg text-white font-bold">Start Your Biology Journey Today!</h2>
              <p className="font-body-lg text-body-lg text-white/80 max-w-2xl mx-auto font-sans">
                Master complex scientific principles and boost your GPA. Join hundreds of high-achieving students across the USA reaching their full academic potential.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 pt-6">
                <button
                  onClick={() => onNavigate('trial')}
                  className="px-12 py-5 bg-lime-green text-charcoal rounded-2xl font-headline-md hover:shadow-xl hover:scale-105 transition-all font-bold cursor-pointer"
                >
                  Book Free Trial
                </button>
                <button
                  onClick={() => onNavigate('about')}
                  className="px-12 py-5 border-2 border-white text-white rounded-2xl font-headline-md hover:bg-white/10 hover:scale-105 transition-all font-bold cursor-pointer"
                >
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}