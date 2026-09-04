'use client';

import React, { useState } from 'react';
import LigatureIcon from '../LigatureIcon';
import { ActivePage } from '@/lib/types';

interface ALevelPhysicsMockProps {
  onNavigate: (page: ActivePage, subjectTitle?: string) => void;
}

export default function ALevelPhysicsMock({ onNavigate }: ALevelPhysicsMockProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="bg-background text-on-surface font-body-md antialiased">
      {/* Hero Section */}
      <section className="pt-16 pb-24 px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-royal-purple/10 text-royal-purple rounded-full">
              <span className="material-symbols-outlined text-[18px]">school</span>
              <span className="font-label-sm text-label-sm uppercase tracking-wider font-bold">A-Level Revision</span>
            </div>
            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-charcoal font-bold">Physics A-Level Mock Papers</h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
              Boost your A Level Physics revision with our free mock papers. Independently designed by subject specialists and examiners, these papers reflect the structure, style, and challenge of real exams to build your problem-solving confidence.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => {
                  const el = document.getElementById('resources');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-primary text-on-primary px-8 py-4 rounded-xl font-label-md text-label-md font-bold shadow-[0px_4px_20px_rgba(0,0,0,0.05)] hover:translate-y-[-2px] transition-all cursor-pointer"
              >
                Browse Papers
              </button>
              <button
                onClick={() => onNavigate('mock-papers')}
                className="border-2 border-primary text-primary px-8 py-4 rounded-xl font-label-md text-label-md font-bold hover:bg-primary/5 transition-all cursor-pointer"
              >
                View Study Guide
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-royal-purple/5 blur-3xl rounded-full"></div>
            <img
              className="relative z-10 w-full h-auto rounded-3xl shadow-[0px_10px_30px_rgba(0,0,0,0.08)] object-cover aspect-[4/3]"
              alt="Student focused on physics mock exam"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD5waV7ocy6zQzbbczCHZtuDU1YzspOhddm16XAnSU5JpkasoNH13F7KS4gnwJ0FAWyj36O9lmtNn1nkFJZb0vd6rO72lftN-zj5Fw6fW1dsIt82UDhkvoXND1udSrHG_lHWSJXl67sRDb0yGoFaOFLQU-d410NTHzqH8Fh17LRQGsP348Lo47ZHBnmdG1gkc3Z8zsCbnBQ5B_XCPqKikvShU89e2l5whCZ2J-Ho0nz-IhL1dDfvDPuYw"
            />
          </div>
        </div>
      </section>

      {/* Exam-Ready Insights */}
      <section className="py-24 bg-soft-gray/50">
        <div className="px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
            <div className="bg-surface p-8 rounded-2xl shadow-[0px_4px_20px_rgba(0,0,0,0.05)] border border-white/50 space-y-4">
              <div className="w-12 h-12 bg-royal-purple/10 text-royal-purple rounded-lg flex items-center justify-center">
                <span className="material-symbols-outlined">verified</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-charcoal font-bold">Spec-Aligned</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">Exam-style questions carefully mapped to AQA and OCR (A) specifications.</p>
            </div>
            <div className="bg-surface p-8 rounded-2xl shadow-[0px_4px_20px_rgba(0,0,0,0.05)] border border-white/50 space-y-4">
              <div className="w-12 h-12 bg-royal-purple/10 text-royal-purple rounded-lg flex items-center justify-center">
                <span className="material-symbols-outlined">timer</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-charcoal font-bold">Timed Practice</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">Designed for full-length sitting to master time management for the real thing.</p>
            </div>
            <div className="bg-surface p-8 rounded-2xl shadow-[0px_4px_20px_rgba(0,0,0,0.05)] border border-white/50 space-y-4">
              <div className="w-12 h-12 bg-royal-purple/10 text-royal-purple rounded-lg flex items-center justify-center">
                <span className="material-symbols-outlined">description</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-charcoal font-bold">Mark Schemes</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">Detailed model solutions to help you understand how marks are actually awarded.</p>
            </div>
            <div className="bg-surface p-8 rounded-2xl shadow-[0px_4px_20px_rgba(0,0,0,0.05)] border border-white/50 space-y-4">
              <div className="w-12 h-12 bg-lime-green/10 text-secondary rounded-lg flex items-center justify-center">
                <span className="material-symbols-outlined">trending_up</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-charcoal font-bold">Proven Results</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">Identify knowledge gaps and refine technique to secure higher grades.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Official Mock Resources */}
      <section className="py-24 px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto" id="resources">
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-headline-lg text-headline-lg text-charcoal font-bold">Official Mock Resources</h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">Select your exam board below to access our specialized Paper 1, 2, and 3 mock materials.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* AQA Board */}
          <div className="space-y-6">
            <div className="flex items-center gap-4 mb-2">
              <div className="w-1 h-8 bg-royal-purple rounded-full"></div>
              <h3 className="font-headline-lg text-headline-lg font-bold">AQA Physics</h3>
            </div>
            <div className="space-y-4">
              {/* Paper 1 */}
              <div className="bg-white p-6 rounded-2xl shadow-[0px_4px_20px_rgba(0,0,0,0.05)] border border-outline-variant/30 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h4 className="font-headline-md text-headline-md text-charcoal font-bold">Paper 1: Mechanics & Electricity</h4>
                  <p className="font-label-md text-label-md text-on-surface-variant">Includes Particles, Radiation, Waves and Optics.</p>
                </div>
                <div className="flex gap-2">
                  <button className="flex items-center gap-1 text-royal-purple font-label-md px-3 py-2 rounded-lg hover:bg-royal-purple/5 transition-all cursor-pointer font-bold">
                    <span className="material-symbols-outlined text-[20px]">download</span> PDF
                  </button>
                  <button className="bg-royal-purple text-on-primary px-4 py-2 rounded-lg font-label-md text-label-md font-bold cursor-pointer">Model Sol.</button>
                </div>
              </div>
              {/* Paper 2 */}
              <div className="bg-white p-6 rounded-2xl shadow-[0px_4px_20px_rgba(0,0,0,0.05)] border border-outline-variant/30 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h4 className="font-headline-md text-headline-md text-charcoal font-bold">Paper 2: Fields & Nuclear Physics</h4>
                  <p className="font-label-md text-label-md text-on-surface-variant">Advanced mechanics and further thermal properties.</p>
                </div>
                <div className="flex gap-2">
                  <button className="flex items-center gap-1 text-royal-purple font-label-md px-3 py-2 rounded-lg hover:bg-royal-purple/5 transition-all cursor-pointer font-bold">
                    <span className="material-symbols-outlined text-[20px]">download</span> PDF
                  </button>
                  <button className="bg-royal-purple text-on-primary px-4 py-2 rounded-lg font-label-md text-label-md font-bold cursor-pointer">Model Sol.</button>
                </div>
              </div>
              {/* Paper 3 */}
              <div className="bg-white p-6 rounded-2xl shadow-[0px_4px_20px_rgba(0,0,0,0.05)] border border-outline-variant/30 flex flex-col md:flex-row md:items-center justify-between gap-4 opacity-75">
                <div>
                  <h4 className="font-headline-md text-headline-md text-charcoal font-bold">Paper 3: Practical & General</h4>
                  <p className="font-label-md text-label-md text-on-surface-variant">Available for premium members only.</p>
                </div>
                <button className="bg-on-surface-variant text-on-primary px-4 py-2 rounded-lg font-label-md text-label-md font-bold cursor-pointer">Locked</button>
              </div>
            </div>
          </div>

          {/* OCR (A) Board */}
          <div className="space-y-6">
            <div className="flex items-center gap-4 mb-2">
              <div className="w-1 h-8 bg-lime-green rounded-full"></div>
              <h3 className="font-headline-lg text-headline-lg font-bold">OCR (A) Physics</h3>
            </div>
            <div className="space-y-4">
              {/* Paper 1 */}
              <div className="bg-white p-6 rounded-2xl shadow-[0px_4px_20px_rgba(0,0,0,0.05)] border border-outline-variant/30 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h4 className="font-headline-md text-headline-md text-charcoal font-bold">Paper 1: Modeling Physics</h4>
                  <p className="font-label-md text-label-md text-on-surface-variant">Core Newtonian mechanics and data analysis.</p>
                </div>
                <div className="flex gap-2">
                  <button className="flex items-center gap-1 text-royal-purple font-label-md px-3 py-2 rounded-lg hover:bg-royal-purple/5 transition-all cursor-pointer font-bold">
                    <span className="material-symbols-outlined text-[20px]">download</span> PDF
                  </button>
                  <button className="bg-royal-purple text-on-primary px-4 py-2 rounded-lg font-label-md text-label-md font-bold cursor-pointer">Model Sol.</button>
                </div>
              </div>
              {/* Paper 2 */}
              <div className="bg-white p-6 rounded-2xl shadow-[0px_4px_20px_rgba(0,0,0,0.05)] border border-outline-variant/30 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h4 className="font-headline-md text-headline-md text-charcoal font-bold">Paper 2: Exploring Physics</h4>
                  <p className="font-label-md text-label-md text-on-surface-variant">Astrophysics, particles and medical physics.</p>
                </div>
                <div className="flex gap-2">
                  <button className="flex items-center gap-1 text-royal-purple font-label-md px-3 py-2 rounded-lg hover:bg-royal-purple/5 transition-all cursor-pointer font-bold">
                    <span className="material-symbols-outlined text-[20px]">download</span> PDF
                  </button>
                  <button className="bg-royal-purple text-on-primary px-4 py-2 rounded-lg font-label-md text-label-md font-bold cursor-pointer">Model Sol.</button>
                </div>
              </div>
              {/* Paper 3 */}
              <div className="bg-white p-6 rounded-2xl shadow-[0px_4px_20px_rgba(0,0,0,0.05)] border border-outline-variant/30 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h4 className="font-headline-md text-headline-md text-charcoal font-bold">Paper 3: Unified Physics</h4>
                  <p className="font-label-md text-label-md text-on-surface-variant">Synoptic content coverage from across years.</p>
                </div>
                <div className="flex gap-2">
                  <button className="flex items-center gap-1 text-royal-purple font-label-md px-3 py-2 rounded-lg hover:bg-royal-purple/5 transition-all cursor-pointer font-bold">
                    <span className="material-symbols-outlined text-[20px]">download</span> PDF
                  </button>
                  <button className="bg-royal-purple text-on-primary px-4 py-2 rounded-lg font-label-md text-label-md font-bold cursor-pointer">Model Sol.</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conversion Banner */}
      <section className="py-16 px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto">
        <div className="bg-royal-purple p-12 rounded-[2rem] text-center text-on-primary shadow-[0px_10px_30px_rgba(0,0,0,0.08)] relative overflow-hidden">
          <div className="relative z-10 space-y-6">
            <h2 className="font-display-lg text-headline-lg md:text-display-lg font-bold text-white">Master your A-Level Physics with expert resources.</h2>
            <p className="font-body-lg text-body-lg text-white/90 max-w-2xl mx-auto">Join over 50,000 students using our platform to boost their grades and secure university places.</p>
            <button onClick={() => onNavigate('trial')} className="bg-white text-royal-purple px-10 py-4 rounded-xl font-headline-md text-headline-md font-bold hover:bg-soft-gray transition-all cursor-pointer">Create Free Account</button>
          </div>
        </div>
      </section>

      {/* FAQ Hub */}
      <section className="py-24 px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="font-headline-lg text-headline-lg text-charcoal font-bold">Frequently Asked Questions</h2>
            <p className="font-body-md text-body-md text-on-surface-variant">Everything you need to know about our mock resources.</p>
          </div>
          <div className="space-y-4">
            <div className="bg-white rounded-2xl shadow-[0px_4px_20px_rgba(0,0,0,0.05)] border border-outline-variant/30 overflow-hidden">
              <button
                className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-soft-gray transition-colors cursor-pointer"
                onClick={() => setOpenFaq(openFaq === 1 ? null : 1)}
              >
                <span className="font-headline-md text-headline-md text-charcoal font-bold">Do the A Level Physics mock papers include worked solutions?</span>
                <LigatureIcon name="expand_more" className={`transition-transform duration-300 ${openFaq === 1 ? 'rotate-180' : ''}`} />
              </button>
              {openFaq === 1 && (
                <div className="px-8 pb-6 text-on-surface-variant font-body-md">
                  Yes – each A Level Physics mock paper includes detailed model answers alongside the mark scheme. These show how to structure full responses and help you understand how marks are awarded in exam-style questions.
                </div>
              )}
            </div>
            <div className="bg-white rounded-2xl shadow-[0px_4px_20px_rgba(0,0,0,0.05)] border border-outline-variant/30 overflow-hidden">
              <button
                className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-soft-gray transition-colors cursor-pointer"
                onClick={() => setOpenFaq(openFaq === 2 ? null : 2)}
              >
                <span className="font-headline-md text-headline-md text-charcoal font-bold">Do I need a data sheet for the A Level Physics mock papers?</span>
                <LigatureIcon name="expand_more" className={`transition-transform duration-300 ${openFaq === 2 ? 'rotate-180' : ''}`} />
              </button>
              {openFaq === 2 && (
                <div className="px-8 pb-6 text-on-surface-variant font-body-md">
                  Yes. To mirror real exam conditions, you should use the official data sheet provided by your exam board when completing the mock papers. This also helps you become familiar with key formulas and constants.
                </div>
              )}
            </div>
            <div className="bg-white rounded-2xl shadow-[0px_4px_20px_rgba(0,0,0,0.05)] border border-outline-variant/30 overflow-hidden">
              <button
                className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-soft-gray transition-colors cursor-pointer"
                onClick={() => setOpenFaq(openFaq === 3 ? null : 3)}
              >
                <span className="font-headline-md text-headline-md text-charcoal font-bold">Are the mock papers specific to each exam board?</span>
                <LigatureIcon name="expand_more" className={`transition-transform duration-300 ${openFaq === 3 ? 'rotate-180' : ''}`} />
              </button>
              {openFaq === 3 && (
                <div className="px-8 pb-6 text-on-surface-variant font-body-md">
                  Our A Level Physics mock papers are specifically written for AQA and OCR (A), with each one following the structure and style of the relevant exam board, so you can practise under realistic exam conditions.
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
