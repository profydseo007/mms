'use client';

import React, { useState } from 'react';
import LigatureIcon from '../LigatureIcon';
import { ActivePage } from '@/lib/types';

interface GcsePhysicsMockProps {
  onNavigate: (page: ActivePage, subjectTitle?: string) => void;
}

export default function GcsePhysicsMock({ onNavigate }: GcsePhysicsMockProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="bg-background text-on-surface font-body-md overflow-x-hidden">
      {/* Hero Section */}
      <section className="py-24 px-margin-mobile md:px-margin-desktop overflow-hidden">
        <div className="max-w-max-width mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2 text-royal-purple font-label-md text-label-md tracking-widest uppercase font-bold">
              <span className="material-symbols-outlined text-[18px]">verified</span>
              Expert-Led Exam Prep
            </div>
            <h1 className="font-display-lg text-display-lg text-charcoal leading-tight font-bold">
              Physics GCSE <br /><span className="text-royal-purple">Mock Papers</span>
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
              Prepare for your GCSE Physics exams with our free AQA Higher Tier mock papers. Designed by specialists to mirror the style, format, and challenge of final exams.
            </p>
            <div className="flex flex-wrap gap-4 mt-4">
              <button
                onClick={() => {
                  const el = document.getElementById('available-papers');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-royal-purple text-on-primary px-8 py-4 rounded-xl font-label-md text-label-md font-bold flex items-center gap-2 hover:scale-105 transition-transform cursor-pointer"
              >
                Start Practising
                <span className="material-symbols-outlined">arrow_downward</span>
              </button>
              <div className="flex items-center gap-4 px-6 py-4 bg-white rounded-xl shadow-sm border border-outline-variant">
                <span className="material-symbols-outlined text-lime-green" style={{ fontVariationSettings: "'FILL' 1" }}>stars</span>
                <span className="text-label-md font-semibold text-charcoal">AQA Higher & Foundation</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-lime-green opacity-20 rounded-full blur-3xl"></div>
            <div className="relative bg-white p-4 rounded-3xl shadow-[0px_10px_30px_rgba(0,0,0,0.08)] border border-outline-variant transform lg:rotate-2">
              <img
                alt="GCSE Physics Illustration"
                className="w-full h-auto rounded-2xl object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAmzLmKEj-ntvMY_QfTdOr3of-q84JrkIJmu4aPY7XbqZRrrjPlXvfB1gdlvfaB0TcfNKGQUElxLDXxMfdB5dG4abH71-rMu6EfS4SCQzqJsNBihW-zpNSxO3bfBI4lZDRf7pvG2WzYNmDPWTIkfxcyKXo8JwdUV5DBNYEPzIAAqpnUcVe1HoPZUW5bQu8JWeFxwyvugC7Kmlc_DJN-MT3GyT4HDhnTiVkiFzd9sgFE6kxRjpKkz0DCnsisd3_e_xYq8iRn9W-7AH2x"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mock Papers Overview */}
      <section className="py-24 px-margin-mobile md:px-margin-desktop bg-white">
        <div className="max-w-max-width mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display-lg text-headline-lg text-charcoal mb-4 font-bold">Exam-Ready Insights</h2>
            <div className="h-1.5 w-24 bg-lime-green mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
            <div className="bg-soft-gray p-8 rounded-2xl border border-outline-variant hover:shadow-md transition-all group">
              <div className="w-12 h-12 bg-royal-purple rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined">menu_book</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-charcoal mb-3 font-bold">Spec-Aligned</h3>
              <p className="font-body-md text-on-surface-variant">Question styles perfectly aligned with current AQA GCSE Physics requirements.</p>
            </div>
            <div className="bg-soft-gray p-8 rounded-2xl border border-outline-variant hover:shadow-md transition-all group">
              <div className="w-12 h-12 bg-royal-purple rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined">timer</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-charcoal mb-3 font-bold">Timed Practice</h3>
              <p className="font-body-md text-on-surface-variant">Build exam stamina and confidence under realistic time constraints.</p>
            </div>
            <div className="bg-soft-gray p-8 rounded-2xl border border-outline-variant hover:shadow-md transition-all group">
              <div className="w-12 h-12 bg-royal-purple rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined">checklist_rtl</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-charcoal mb-3 font-bold">Mark Schemes</h3>
              <p className="font-body-md text-on-surface-variant">Comprehensive model solutions to identify knowledge gaps and errors.</p>
            </div>
            <div className="bg-soft-gray p-8 rounded-2xl border border-outline-variant hover:shadow-md transition-all group">
              <div className="w-12 h-12 bg-royal-purple rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined">trending_up</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-charcoal mb-3 font-bold">Proven Results</h3>
              <p className="font-body-md text-on-surface-variant">Designed to boost grade performance in the final run-up to exams.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Available Mock Papers Grid */}
      <section className="py-24 px-margin-mobile md:px-margin-desktop bg-soft-gray" id="available-papers">
        <div className="max-w-max-width mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <h2 className="font-display-lg text-headline-lg text-charcoal mb-2 font-bold">AQA Physics Resources</h2>
              <p className="text-on-surface-variant font-body-md">Paper 1 and Paper 2 available for Higher Tier.</p>
            </div>
            <div className="flex gap-4">
              <span className="bg-royal-purple/10 text-royal-purple px-4 py-2 rounded-full font-label-sm text-label-sm font-bold">Higher Tier</span>
              <span className="bg-lime-green/10 text-secondary px-4 py-2 rounded-full font-label-sm text-label-sm font-bold">Verified 2024/25</span>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Paper 1 Container */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-outline-variant">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-soft-gray rounded-2xl">
                  <span className="material-symbols-outlined text-royal-purple text-[32px]">science</span>
                </div>
                <h3 className="font-headline-lg text-headline-lg text-charcoal font-bold">Paper 1: Energy & Electricity</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-5 bg-soft-gray rounded-2xl hover:bg-white border border-transparent hover:border-royal-purple/30 transition-all group cursor-pointer">
                  <div className="flex items-center gap-4">
                    <span className="material-symbols-outlined text-royal-purple group-hover:rotate-12 transition-transform">picture_as_pdf</span>
                    <span className="font-label-md text-label-md text-charcoal font-semibold">Paper 1 – Mock Paper – AQA Physics GCSE Higher</span>
                  </div>
                  <span className="material-symbols-outlined text-royal-purple opacity-0 group-hover:opacity-100 transition-opacity">download</span>
                </div>
                <div className="flex items-center justify-between p-5 bg-soft-gray rounded-2xl hover:bg-white border border-transparent hover:border-lime-green/30 transition-all group cursor-pointer">
                  <div className="flex items-center gap-4">
                    <span className="material-symbols-outlined text-secondary group-hover:rotate-12 transition-transform">fact_check</span>
                    <span className="font-label-md text-label-md text-charcoal font-semibold">Paper 1 – Mark Scheme – AQA Physics GCSE Higher</span>
                  </div>
                  <span className="material-symbols-outlined text-secondary opacity-0 group-hover:opacity-100 transition-opacity">download</span>
                </div>
              </div>
            </div>

            {/* Paper 2 Container */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-outline-variant">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-soft-gray rounded-2xl">
                  <span className="material-symbols-outlined text-royal-purple text-[32px]">rocket_launch</span>
                </div>
                <h3 className="font-headline-lg text-headline-lg text-charcoal font-bold">Paper 2: Forces & Magnetism</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-5 bg-soft-gray rounded-2xl hover:bg-white border border-transparent hover:border-royal-purple/30 transition-all group cursor-pointer">
                  <div className="flex items-center gap-4">
                    <span className="material-symbols-outlined text-royal-purple group-hover:rotate-12 transition-transform">picture_as_pdf</span>
                    <span className="font-label-md text-label-md text-charcoal font-semibold">Paper 2 – Mock Paper – AQA Physics GCSE Higher</span>
                  </div>
                  <span className="material-symbols-outlined text-royal-purple opacity-0 group-hover:opacity-100 transition-opacity">download</span>
                </div>
                <div className="flex items-center justify-between p-5 bg-soft-gray rounded-2xl hover:bg-white border border-transparent hover:border-lime-green/30 transition-all group cursor-pointer">
                  <div className="flex items-center gap-4">
                    <span className="material-symbols-outlined text-secondary group-hover:rotate-12 transition-transform">fact_check</span>
                    <span className="font-label-md text-label-md text-charcoal font-semibold">Paper 2 – Mark Scheme – AQA Physics GCSE Higher</span>
                  </div>
                  <span className="material-symbols-outlined text-secondary opacity-0 group-hover:opacity-100 transition-opacity">download</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Banner */}
      <section className="py-20 px-margin-mobile md:px-margin-desktop bg-royal-purple text-on-primary overflow-hidden relative">
        <div className="max-w-max-width mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
          <div className="max-w-2xl text-center lg:text-left">
            <h2 className="font-display-lg text-display-lg font-bold mb-6 text-white">Master your GCSE Physics with expert resources.</h2>
            <p className="font-body-lg text-body-lg text-white/90">Get access to our full set of mock papers, progress tracking, and expert revision tips by creating a free account.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <button onClick={() => onNavigate('trial')} className="bg-white text-royal-purple px-10 py-5 rounded-2xl font-label-md text-headline-md font-bold hover:bg-soft-gray transition-all shadow-xl cursor-pointer">Create Free Account</button>
            <button onClick={() => onNavigate('mock-papers')} className="bg-transparent border-2 border-white text-white px-10 py-5 rounded-2xl font-label-md text-headline-md font-bold hover:bg-white/10 transition-all cursor-pointer">Browse All Hubs</button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-margin-mobile md:px-margin-desktop bg-soft-gray">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display-lg text-headline-lg text-charcoal mb-4 font-bold">Frequently Asked Questions</h2>
            <p className="text-on-surface-variant font-body-md">Everything you need to know about our Physics mock papers.</p>
          </div>
          <div className="space-y-4">
            {[
              {
                id: 1,
                q: 'Will using GCSE Physics mock papers improve my performance?',
                a: 'Using GCSE Physics mock papers helps you practise exam-style questions, build confidence under timed conditions, and highlight areas that need further revision, helping you focus your preparation more effectively.'
              },
              {
                id: 2,
                q: 'Are the GCSE Physics mock papers exam board-specific?',
                a: 'Yes – these GCSE Physics mock papers are designed to provide realistic exam-style practice. They are tailored to the AQA Higher Tier specification and reflect the structure, format, and question styles found in real exams.'
              },
              {
                id: 3,
                q: 'Can I use the equation sheet when completing the papers?',
                a: 'Yes – you should use the official equation sheet provided by your exam board when completing the mock papers. This ensures your practice reflects real exam conditions and helps you build confidence applying equations accurately.'
              },
              {
                id: 4,
                q: 'Are there worked solutions for the mock exams?',
                a: 'Yes – each GCSE Physics mock exam paper includes model solutions, so you can review your answers, identify areas for improvement, and build confidence in your responses.'
              }
            ].map(item => (
              <div key={item.id} className="bg-white rounded-2xl border border-outline-variant overflow-hidden">
                <button
                  className="w-full flex justify-between items-center p-6 cursor-pointer text-left font-bold"
                  onClick={() => setOpenFaq(openFaq === item.id ? null : item.id)}
                >
                  <span className="font-headline-md text-headline-md text-charcoal pr-6">{item.q}</span>
                  <LigatureIcon name="expand_more" className={`text-royal-purple transition-transform ${openFaq === item.id ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === item.id && (
                  <div className="p-6 pt-0 border-t border-outline-variant/30 text-on-surface-variant font-body-md">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
