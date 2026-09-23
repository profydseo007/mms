'use client';

import React, { useState } from 'react';
import LigatureIcon from '../LigatureIcon';
import { ActivePage } from '@/lib/types';

interface GcseBiologyPredictedProps {
  onNavigate: (page: ActivePage, subjectTitle?: string) => void;
}

export default function GcseBiologyPredicted({ onNavigate }: GcseBiologyPredictedProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <div className="bg-surface text-on-surface font-body-md overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 md:py-24 bg-surface">
        <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-fixed text-on-primary-fixed-variant">
                <span className="material-symbols-outlined text-[18px]">verified</span>
                <span className="font-label-sm text-label-sm font-bold">2026 EXAM BOARD PREDICTIONS</span>
              </div>
              <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-charcoal leading-tight font-bold">
                GCSE Biology <span className="text-royal-purple">Predicted Papers 2026</span>
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
                Prepare for your GCSE Biology exams with confidence. Our predicted papers for AQA and Edexcel Higher Tier mirror the structure, mark schemes, and challenge level of real 2026 papers.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <a
                  className="px-8 py-4 bg-royal-purple text-white rounded-xl font-label-md text-label-md font-bold shadow-md hover:shadow-lg transition-all flex items-center gap-2 cursor-pointer"
                  onClick={(e) => {
                    e.preventDefault();
                    const el = document.getElementById('papers');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  href="#papers"
                >
                  View Predicted Papers <span className="material-symbols-outlined">arrow_downward</span>
                </a>
                <button
                  onClick={() => onNavigate('trial')}
                  className="px-8 py-4 border-2 border-royal-purple text-royal-purple rounded-xl font-label-md text-label-md font-bold hover:bg-royal-purple/5 transition-all cursor-pointer"
                >
                  Free Trial Session
                </button>
              </div>
            </div>
            <div className="lg:col-span-5 relative">
              <div className="relative z-10 bg-white p-4 rounded-3xl shadow-[0px_4px_20px_rgba(0,0,0,0.05)] border border-outline-variant">
                <img
                  className="w-full h-auto rounded-2xl object-cover aspect-[4/3]"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB2yK0lZ45p-G4S622m71y0lA4f3o6iJ1A1aXqXmY2-bS1nF7S5T4U3R2Q1P0O9N8M7L6K5J4I3H2G1F0E9D8C7B6A"
                  alt="A student carrying out a biological investigation in a science laboratory"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Exam-Ready Insights */}
      <section className="py-16 bg-soft-gray">
        <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-[0px_4px_20px_rgba(0,0,0,0.05)] space-y-4">
              <div className="w-12 h-12 rounded-xl bg-royal-purple/10 text-royal-purple flex items-center justify-center">
                <span className="material-symbols-outlined">quiz</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-charcoal font-bold">Exam Board Alignment</h3>
              <p className="font-body-md text-on-surface-variant">Written specifically for AQA (8461) and Edexcel (1BI0) specifications by senior examiners.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-[0px_4px_20px_rgba(0,0,0,0.05)] space-y-4">
              <div className="w-12 h-12 rounded-xl bg-lime-green/20 text-secondary flex items-center justify-center">
                <span className="material-symbols-outlined">fact_check</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-charcoal font-bold">Mark Schemes & Models</h3>
              <p className="font-body-md text-on-surface-variant">Includes mark schemes and model answers highlighting keyword requirements.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-[0px_4px_20px_rgba(0,0,0,0.05)] space-y-4">
              <div className="w-12 h-12 rounded-xl bg-tertiary-fixed text-tertiary flex items-center justify-center">
                <span className="material-symbols-outlined">trending_up</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-charcoal font-bold">Grade-Boosting Trends</h3>
              <p className="font-body-md text-on-surface-variant">Incorporate recent examiner report feedback to address common student mistakes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Predicted Paper Grid */}
      <section className="py-24 bg-white" id="papers">
        <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="text-center mb-16 max-w-2xl mx-auto space-y-4">
            <h2 className="font-headline-lg text-headline-lg text-charcoal font-bold">2026 Predicted Papers Catalog</h2>
            <p className="font-body-md text-on-surface-variant">Select your exam board and paper below to download papers and mark schemes.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* AQA */}
            <div className="bg-soft-gray p-8 rounded-3xl space-y-8 border border-outline-variant">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-royal-purple text-white flex items-center justify-center font-bold">AQA</div>
                <div>
                  <h3 className="font-headline-md text-headline-md text-charcoal font-bold">AQA GCSE Biology (8461)</h3>
                  <p className="font-body-md text-on-surface-variant">Higher Tier Predictions</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-white p-6 rounded-2xl shadow-sm space-y-4">
                  <h4 className="font-headline-sm text-headline-sm text-charcoal font-bold">Paper 1 (Topics 1–4)</h4>
                  <div className="flex flex-wrap gap-3">
                    <button className="px-4 py-2 bg-royal-purple text-white rounded-lg font-label-md font-bold cursor-pointer hover:bg-primary transition-colors">Download Paper</button>
                    <button className="px-4 py-2 border border-royal-purple text-royal-purple rounded-lg font-label-md font-bold cursor-pointer hover:bg-royal-purple/5 transition-colors">Mark Scheme</button>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm space-y-4">
                  <h4 className="font-headline-sm text-headline-sm text-charcoal font-bold">Paper 2 (Topics 5–7)</h4>
                  <div className="flex flex-wrap gap-3">
                    <button className="px-4 py-2 bg-royal-purple text-white rounded-lg font-label-md font-bold cursor-pointer hover:bg-primary transition-colors">Download Paper</button>
                    <button className="px-4 py-2 border border-royal-purple text-royal-purple rounded-lg font-label-md font-bold cursor-pointer hover:bg-royal-purple/5 transition-colors">Mark Scheme</button>
                  </div>
                </div>
              </div>
            </div>

            {/* Edexcel */}
            <div className="bg-soft-gray p-8 rounded-3xl space-y-8 border border-outline-variant">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-lime-green text-charcoal flex items-center justify-center font-bold">Edexcel</div>
                <div>
                  <h3 className="font-headline-md text-headline-md text-charcoal font-bold">Edexcel GCSE Biology (1BI0)</h3>
                  <p className="font-body-md text-on-surface-variant">Higher Tier Predictions</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-white p-6 rounded-2xl shadow-sm space-y-4">
                  <h4 className="font-headline-sm text-headline-sm text-charcoal font-bold">Paper 1 (Key Concepts, Health, Genetics)</h4>
                  <div className="flex flex-wrap gap-3">
                    <button className="px-4 py-2 bg-royal-purple text-white rounded-lg font-label-md font-bold cursor-pointer hover:bg-primary transition-colors">Download Paper</button>
                    <button className="px-4 py-2 border border-royal-purple text-royal-purple rounded-lg font-label-md font-bold cursor-pointer hover:bg-royal-purple/5 transition-colors">Mark Scheme</button>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm space-y-4">
                  <h4 className="font-headline-sm text-headline-sm text-charcoal font-bold">Paper 2 (Key Concepts, Plant Structures, Homeostasis)</h4>
                  <div className="flex flex-wrap gap-3">
                    <button className="px-4 py-2 bg-royal-purple text-white rounded-lg font-label-md font-bold cursor-pointer hover:bg-primary transition-colors">Download Paper</button>
                    <button className="px-4 py-2 border border-royal-purple text-royal-purple rounded-lg font-label-md font-bold cursor-pointer hover:bg-royal-purple/5 transition-colors">Mark Scheme</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Hub */}
      <section className="py-24 bg-soft-gray">
        <div className="max-w-4xl mx-auto px-margin-mobile md:px-margin-desktop">
          <h2 className="font-headline-lg text-headline-lg text-charcoal mb-12 text-center font-bold">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              {
                id: 0,
                q: 'How are these GCSE Biology predicted papers created?',
                a: 'Our predicted papers are created by experienced science teachers and exam board specialists. They analyze past paper trends, spec coverage, and official examiner feedback to predict high-probability question formats.'
              },
              {
                id: 1,
                q: 'Are mark schemes included with the papers?',
                a: 'Yes, every predicted paper download comes with a mark scheme that provides clear guidance on mark allocation and key scientific vocabulary.'
              }
            ].map(item => (
              <div key={item.id} className="bg-white rounded-2xl border border-outline-variant overflow-hidden">
                <button
                  className="w-full flex items-center justify-between p-6 text-left font-headline-md text-headline-md text-charcoal font-bold cursor-pointer"
                  onClick={() => toggleFaq(item.id)}
                >
                  <span>{item.q}</span>
                  <LigatureIcon name="expand_more" className={`transition-transform duration-300 ${openFaq === item.id ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === item.id && (
                  <div className="p-6 pt-0 font-body-md text-on-surface-variant border-t border-outline-variant/30">
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
