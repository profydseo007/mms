'use client';

import React, { useState } from 'react';
import { ActivePage } from '@/lib/types';

interface TestPrepProps {
  onNavigate: (page: ActivePage, subjectTitle?: string) => void;
}

export default function IgcsePrep({ onNavigate }: TestPrepProps) {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    subject: 'Mathematics',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.fullName && formData.email) {
      setFormSubmitted(true);
    }
  };

  return (
    <div className="bg-surface text-on-surface selection:bg-lime-green/30 selection:text-royal-purple overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden bg-surface px-5 md:px-20 py-24">
        <div className="max-w-max-width mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
          <div className="space-y-8">
            <span className="inline-block bg-royal-purple/10 text-royal-purple px-4 py-1.5 rounded-full font-label-md text-label-md uppercase tracking-wider font-semibold">
              UK IGCSE Experts
            </span>
            <h1 className="font-display-lg text-display-lg md:text-display-lg text-charcoal leading-tight font-bold">
              IGCSE Test Preparation by <span className="text-royal-purple">Expert Tutors</span>
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
              Global standards, personalized learning. Master the IGCSE curriculum and secure top grades for your future with our world-class educational framework.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => onNavigate('trial')}
                className="bg-royal-purple text-on-primary px-8 py-4 rounded-xl font-label-md text-label-md font-bold shadow-lg hover:shadow-xl transition-all scale-100 active:scale-95 cursor-pointer"
              >
                Book a Free Trial
              </button>
              <button
                onClick={() => onNavigate('curriculum')}
                className="border-2 border-royal-purple text-royal-purple px-8 py-4 rounded-xl font-label-md text-label-md font-bold hover:bg-royal-purple/5 transition-all cursor-pointer"
              >
                Explore Subjects
              </button>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute -inset-4 bg-lime-green/20 rounded-[2rem] blur-2xl group-hover:bg-lime-green/30 transition-all"></div>
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white aspect-[4/3]">
              <img
                className="w-full h-full object-cover"
                alt="A focused high school student studying with tablet"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBIC2148RcAcfRXxnZOcCNJC2Yr32DtyHa7d1TOD82ZBuHm5-qZ-Hfyjuic-1MLI6po5tOU8XT7FUpGqvgdHGzRwEInHX72mGWsxX-9nVAlOqT4sbH-gqYAG5YfaLbivq9Je_ZI7ity8vsit3aPnhFxzYCZ7Vd3uaU5jtItj5k130NViqjkJsMWfhwBn54qZk6DOAoC1XqgTsCbUlAYR6O8_Q9eb3Xz1j99Ujc64cOxRy0f-IOnZz3fvw"
              />
            </div>
            {/* Stats Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-white/50 hidden lg:block">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-lime-green flex items-center justify-center">
                  <span className="material-symbols-outlined text-charcoal font-bold">trending_up</span>
                </div>
                <div>
                  <p className="font-headline-md text-headline-md text-charcoal font-bold">98%</p>
                  <p className="font-label-sm text-label-sm text-on-surface-variant font-medium">Success Rate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section: Understanding IGCSE */}
      <section className="py-24 bg-soft-gray">
        <div className="max-w-max-width mx-auto px-5 md:px-20 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="font-headline-lg text-headline-lg text-charcoal font-bold">Understanding the IGCSE</h2>
            <div className="h-1.5 w-20 bg-lime-green mx-auto rounded-full"></div>
            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
              International GCSEs (IGCSE) are a globally recognized alternative to the standard GCSE, offering a broader perspective and accepted by top universities worldwide. At Math Make Smart, we bridge the gap between curriculum requirements and student potential, fostering independent thought and global citizenship.
            </p>
          </div>
        </div>
      </section>

      {/* Feature Bento Grid */}
      <section className="py-24 px-5 md:px-20">
        <div className="max-w-max-width mx-auto">
          <h2 className="font-headline-lg text-headline-lg text-charcoal mb-12 text-center font-bold">Why Choose IGCSE Tutoring?</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter h-auto md:h-[500px]">
            {/* Large Card */}
            <div className="md:col-span-2 bg-white p-10 rounded-[2rem] shadow-[0px_4px_20px_rgba(0,0,0,0.05)] flex flex-col justify-between hover:translate-y-[-8px] transition-transform duration-300">
              <div className="space-y-4">
                <div className="w-14 h-14 bg-royal-purple/10 rounded-2xl flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-royal-purple text-3xl">public</span>
                </div>
                <h3 className="font-headline-md text-headline-md text-charcoal font-bold">Global Recognition</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">Your gateway to the world's most prestigious universities. Our program is designed to meet and exceed international benchmarks.</p>
              </div>
              <img
                className="w-full h-32 object-contain mt-4 opacity-50"
                alt="Minimalist globe rendering"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC2qVzriiNJ84l-j3e_FP556ftEr1pJCaGs4U0MNflpiocZnbOMKrzy-0f2imqk_00EIDJoQKaNxYma2P5UMhYmKfDSeo55LtnJpWk8cb-AyDi0qJTqpyh32tCakkVRHLACdPwIDDW1rAr4QRrNAtb9vlmJFlzOLJGot-J-8B1G2TTRhM46ThHdWjMBM5-2vsHW6sJdG3XBy3Gipjk5ICHa2Gs--mjhBKAk-7zYkp4YUhjcNgqHwn1nEA"
              />
            </div>
            {/* Small Cards Column */}
            <div className="grid grid-rows-2 gap-gutter md:col-span-1">
              <div className="bg-white p-8 rounded-[2rem] shadow-[0px_4px_20px_rgba(0,0,0,0.05)] hover:translate-y-[-8px] transition-transform duration-300">
                <div className="w-12 h-12 bg-lime-green/20 rounded-xl flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined text-secondary">verified</span>
                </div>
                <h3 className="font-label-md text-label-md text-charcoal font-bold mb-2 uppercase">Rigorous Standards</h3>
                <p className="font-label-sm text-label-sm text-on-surface-variant">High-stakes preparation for high-stakes results.</p>
              </div>
              <div className="bg-white p-8 rounded-[2rem] shadow-[0px_4px_20px_rgba(0,0,0,0.05)] hover:translate-y-[-8px] transition-transform duration-300 border-2 border-transparent hover:border-royal-purple/20">
                <div className="w-12 h-12 bg-royal-purple/10 rounded-xl flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined text-royal-purple">tune</span>
                </div>
                <h3 className="font-label-md text-label-md text-charcoal font-bold mb-2 uppercase">Flexible Choice</h3>
                <p className="font-label-sm text-label-sm text-on-surface-variant">Choose the subjects that align with your future career path.</p>
              </div>
            </div>
            {/* Final Card */}
            <div className="md:col-span-1 bg-royal-purple p-8 rounded-[2rem] shadow-xl flex flex-col justify-center items-center text-center text-on-primary">
              <span className="material-symbols-outlined text-6xl mb-6 opacity-80" style={{ fontVariationSettings: '"FILL" 1' }}>psychology</span>
              <h3 className="font-headline-md text-headline-md mb-4 font-bold">Focused Academic Support</h3>
              <p className="font-body-md text-body-md opacity-90">1-on-1 sessions tailored to your unique learning style.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Subject Breakdown: Cards with Details */}
      <section className="py-24 bg-surface-container-low overflow-hidden md:px-20">
        <div className="max-w-max-width mx-auto px-5 md:px-20">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="font-headline-lg text-headline-lg text-charcoal mb-4 font-bold">Core IGCSE Subjects</h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant">We don't just teach the syllabus; we build the foundational skills required for future academic mastery.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {/* Subject 1 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm group hover:shadow-xl transition-all duration-500">
              <div className="h-48 relative overflow-hidden">
                <img
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  alt="Mathematical equations"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBmN2ZzbsB5k_IDPqf9BxKEcTHwC_Ytov44L9DxrleBETTwCNat-XdJRIJoUV0qaslGRYbHi-aC30Z7YpFefRbfx0KdTx318LEF9xG99ax84A_MIn5ZQNX8V0v33pPakK0rfM2ZMFwaqpWdoYBMjHuIfyqir1u4B7Mdx1m0rNAy0kAxFbcDhU5Ld_sGvNzbT_XPgvKUz7LVCvH1-COgmVGsklhg-gsR2xLrL5vQy6MXdVR-ySA72DfvhA"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 to-transparent"></div>
                <span className="absolute bottom-4 left-6 text-white font-headline-md text-headline-md font-bold">Mathematics</span>
              </div>
              <div className="p-8 space-y-4">
                <p className="font-body-md text-body-md text-on-surface-variant">Focus on advanced problem-solving, algebraic manipulation, and logical proofing essential for STEM pathways.</p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-3 text-label-md font-label-md text-charcoal">
                    <span className="material-symbols-outlined text-lime-green text-lg">check_circle</span> Structured Logic Training
                  </li>
                  <li className="flex items-center gap-3 text-label-md font-label-md text-charcoal">
                    <span className="material-symbols-outlined text-lime-green text-lg">check_circle</span> Calculus Fundamentals
                  </li>
                </ul>
              </div>
            </div>
            {/* Subject 2 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm group hover:shadow-xl transition-all duration-500">
              <div className="h-48 relative overflow-hidden">
                <img
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  alt="Classic literature books and fountain pen"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDg73zwQFdIPKX3zMqP5Tu5DOYpQ-78yPiXkgpYTodKMU7OAWmakgkjGDx7wC5q13ruNQ9qCC2SNRHbSu9tg_55j_4PCZwOnaC6uw5Jtk98NlYK11RZ7EECwl2I2ZIur1_22t_WOpcVC77XwxxRcJ_SGazAORtoArF0r9C1JxhWzy5ASHfowOiQonJOd5LO1ErDnrOECUIEG7k9Nrh42uzqXVreEyBApxJcGv4SannOvAdqs-hIlryKfA"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 to-transparent"></div>
                <span className="absolute bottom-4 left-6 text-white font-headline-md text-headline-md font-bold">English Language</span>
              </div>
              <div className="p-8 space-y-4">
                <p className="font-body-md text-body-md text-on-surface-variant">Developing analytical writing and critical appreciation for English literature and persuasive communication.</p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-3 text-label-md font-label-md text-charcoal">
                    <span className="material-symbols-outlined text-lime-green text-lg">check_circle</span> Critical Text Analysis
                  </li>
                  <li className="flex items-center gap-3 text-label-md font-label-md text-charcoal">
                    <span className="material-symbols-outlined text-lime-green text-lg">check_circle</span> Narrative Development
                  </li>
                </ul>
              </div>
            </div>
            {/* Subject 3 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm group hover:shadow-xl transition-all duration-500">
              <div className="h-48 relative overflow-hidden">
                <img
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  alt="Modern high tech science lab"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAwee4rDEHE9trl5lsH6eFvBgnaZJsffSb06RDGdZ2u3hToewRWuvnE0XxXhlv-GaNLCCUMKrmrAuufn5XRpY086OP6YXFbBUnk0v1biWzKj5K1fjiKI8Shd6rDCOlvj4bj9o1is66MyIYEotbSVOGWxFxO8rGJlQWA7YHrIoaKci3aPlHvCyOUIs2KBWty70HJMZhhhyyBB1SLZWdLOmYjZq-UBT8BDTxR2Ndex7qW6Gng17fBrjuXvA"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 to-transparent"></div>
                <span className="absolute bottom-4 left-6 text-white font-headline-md text-headline-md font-bold">The Sciences</span>
              </div>
              <div className="p-8 space-y-4">
                <p className="font-body-md text-body-md text-on-surface-variant">From experimental investigation techniques to complex theory in Biology, Chemistry, and Physics.</p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-3 text-label-md font-label-md text-charcoal">
                    <span className="material-symbols-outlined text-lime-green text-lg">check_circle</span> Investigative Methodology
                  </li>
                  <li className="flex items-center gap-3 text-label-md font-label-md text-charcoal">
                    <span className="material-symbols-outlined text-lime-green text-lg">check_circle</span> Triple Science Depth
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Exam Board Expertise Section */}
      <section className="py-24 px-5 md:px-20 relative bg-surface overflow-hidden">
        <div className="max-w-max-width mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <img
              className="rounded-[2.5rem] shadow-2xl w-full"
              alt="Tutoring session between educator and student"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD4HGgsHjfHllECK6wrbPrHiAArDKkmsMqHWSs0bdvjNVq4jXexgK1BH_77hneqqaHzUkbBgyOp5flU8-IZoizdehAQFvO7h2QcOizrH5E_ZI7I2ygDJ7RUaKIIm0nO4qipHWsPqLfjsJBlR2ZR_6WrMm-06qi43yMDuq7IfA5jrUypFQCHWyK1FEh3rWb1YQTlPitVxbbBhZX9aLqOarwu0eNF-PpIXiznXRTIfUyXf-eXKMKC0TaXGw"
            />
          </div>
          <div className="order-1 md:order-2 space-y-8">
            <h2 className="font-headline-lg text-headline-lg text-charcoal font-bold">Mastering CIE and Pearson Edexcel</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              Our tutors are experts in the specific marking schemes of International Boards. We don't just teach content; we teach how to demonstrate knowledge for maximum credit.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-6 bg-white rounded-2xl border-l-4 border-royal-purple shadow-sm">
                <h4 className="font-label-md text-label-md font-bold text-charcoal mb-2 uppercase">Marking Mastery</h4>
                <p className="font-label-sm text-label-sm text-on-surface-variant">Analysis of past papers and mark schemes to perfect student responses.</p>
              </div>
              <div className="p-6 bg-white rounded-2xl border-l-4 border-lime-green shadow-sm">
                <h4 className="font-label-md text-label-md font-bold text-charcoal mb-2 uppercase">Board-Specific Strategies</h4>
                <p className="font-label-sm text-label-sm text-on-surface-variant">Tailored tactics for the unique phrasing of CIE and Edexcel exams.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust/Value Section */}
      <section className="py-24 bg-charcoal text-on-primary md:px-20">
        <div className="max-w-max-width mx-auto px-5 md:px-20 text-center mb-16">
          <h2 className="font-headline-lg text-headline-lg mb-6 font-bold">Why Families Trust Math Make Smart</h2>
          <div className="h-1 w-24 bg-lime-green mx-auto mb-8"></div>
        </div>
        <div className="max-w-max-width mx-auto px-5 md:px-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter">
          <div className="text-center group">
            <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-lime-green group-hover:text-charcoal transition-all">
              <span className="material-symbols-outlined text-3xl">school</span>
            </div>
            <h3 className="font-headline-md text-headline-md mb-2 font-bold">Expert Tutors</h3>
            <p className="font-body-md text-body-md opacity-70">Top 5% educators from elite global institutions.</p>
          </div>
          <div className="text-center group">
            <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-lime-green group-hover:text-charcoal transition-all">
              <span className="material-symbols-outlined text-3xl">edit_note</span>
            </div>
            <h3 className="font-headline-md text-headline-md mb-2 font-bold">Tailored Plans</h3>
            <p className="font-body-md text-body-md opacity-70">Curriculums adapted to your specific strengths.</p>
          </div>
          <div className="text-center group">
            <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-lime-green group-hover:text-charcoal transition-all">
              <span className="material-symbols-outlined text-3xl">task_alt</span>
            </div>
            <h3 className="font-headline-md text-headline-md mb-2 font-bold">Mock Mastery</h3>
            <p className="font-body-md text-body-md opacity-70">Intensive exam simulations for real-world readiness.</p>
          </div>
          <div className="text-center group">
            <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-lime-green group-hover:text-charcoal transition-all">
              <span className="material-symbols-outlined text-3xl">rocket_launch</span>
            </div>
            <h3 className="font-headline-md text-headline-md mb-2 font-bold">Confidence Building</h3>
            <p className="font-body-md text-body-md opacity-70">Fostering a growth mindset for long-term success.</p>
          </div>
        </div>
      </section>

      {/* Conversion Form Section */}
      <section className="py-24 px-5 md:px-20 bg-surface">
        <div className="max-w-max-width mx-auto flex flex-col lg:flex-row bg-white rounded-[2.5rem] shadow-2xl overflow-hidden">
          <div className="lg:w-2/5 bg-royal-purple p-12 lg:p-20 text-on-primary flex flex-col justify-between">
            <div className="space-y-6">
              <h2 className="font-display-lg text-display-lg-mobile md:text-headline-lg leading-tight font-bold">Secure Your Free Trial Lesson</h2>
              <p className="font-body-lg text-body-lg opacity-80">Join the elite community of Math Make Smart students today and transform your academic trajectory.</p>
            </div>
            <div className="mt-12 space-y-4">
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined">call</span>
                <span className="font-label-md text-label-md">+44 (0) 20 7946 0958</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined">mail</span>
                <span className="font-label-md text-label-md">admissions@mathmakesmart.com</span>
              </div>
            </div>
          </div>
          <div className="lg:w-3/5 p-12 lg:p-20">
            {formSubmitted ? (
              <div className="text-center py-12 space-y-4">
                <span className="material-symbols-outlined text-lime-green text-6xl">check_circle</span>
                <h3 className="font-headline-md text-charcoal font-bold">Free Session Requested!</h3>
                <p className="text-on-surface-variant">Thank you <strong>{formData.fullName}</strong>. We have received your IGCSE trial request and will contact you within 2 business hours.</p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="bg-royal-purple text-on-primary px-6 py-2.5 rounded-xl font-medium hover:bg-primary transition-all cursor-pointer mt-4"
                >
                  Submit Another Request
                </button>
              </div>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="font-label-md text-label-md text-charcoal font-medium">Full Name</label>
                    <input
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-4 py-4 rounded-xl bg-soft-gray border-transparent focus:border-royal-purple focus:ring-0 transition-all outline-none"
                      placeholder="John Doe"
                      type="text"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="font-label-md text-label-md text-charcoal font-medium">Phone Number</label>
                    <input
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-4 rounded-xl bg-soft-gray border-transparent focus:border-royal-purple focus:ring-0 transition-all outline-none"
                      placeholder="+44 7000 000 000"
                      type="tel"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="font-label-md text-label-md text-charcoal font-medium">Email Address</label>
                    <input
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-4 rounded-xl bg-soft-gray border-transparent focus:border-royal-purple focus:ring-0 transition-all outline-none"
                      placeholder="john@example.com"
                      type="email"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="font-label-md text-label-md text-charcoal font-medium">Primary Subject</label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-4 rounded-xl bg-soft-gray border-transparent focus:border-royal-purple focus:ring-0 transition-all outline-none appearance-none"
                    >
                      <option value="Mathematics">Mathematics</option>
                      <option value="English Language">English Language</option>
                      <option value="The Sciences">The Sciences</option>
                      <option value="Humanities">Humanities</option>
                    </select>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="font-label-md text-label-md text-charcoal font-medium">Your Message</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-4 rounded-xl bg-soft-gray border-transparent focus:border-royal-purple focus:ring-0 transition-all outline-none resize-none"
                    placeholder="Tell us about your learning goals..."
                    rows={4}
                  />
                </div>
                <button
                  className="w-full bg-royal-purple text-on-primary py-5 rounded-xl font-headline-md text-headline-md font-bold shadow-lg hover:shadow-xl transition-all cursor-pointer"
                  type="submit"
                >
                  Request My Free Session
                </button>
                <p className="text-center font-label-sm text-label-sm text-on-surface-variant">We typically respond within 2 business hours.</p>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
