'use client';

import React from 'react';
import LigatureIcon from '../LigatureIcon';
import { ActivePage } from '@/lib/types';

interface GcseMathsPredictedProps {
  onNavigate: (page: ActivePage, subjectTitle?: string) => void;
}

export default function GcseMathsPredicted({ onNavigate }: GcseMathsPredictedProps) {
  return (
    <div className="bg-surface text-on-surface font-body-md overflow-x-hidden">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-surface">
        <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary-container text-on-secondary-container rounded-full">
              <span className="material-symbols-outlined text-[18px]">functions</span>
              <span className="font-label-sm text-label-sm font-bold">2026 MATHS PREDICTIONS</span>
            </div>
            <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-charcoal leading-tight font-bold">
              GCSE Maths <span className="text-royal-purple">Predicted Papers 2026</span>
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
              Sharpen your exam skills for Edexcel (1MA1) and AQA (8300) GCSE Maths. Full 3-paper practice sets with non-calculator and calculator papers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                className="px-8 py-4 bg-royal-purple text-white rounded-xl font-headline-md text-headline-md flex items-center justify-center gap-2 hover:opacity-90 transition-all shadow-lg active:scale-95 cursor-pointer font-bold"
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.getElementById('papers');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                href="#papers"
              >
                View Maths Papers
                <span className="material-symbols-outlined">arrow_downward</span>
              </a>
              <button
                onClick={() => onNavigate('trial')}
                className="px-8 py-4 border-2 border-royal-purple text-royal-purple rounded-xl font-headline-md text-headline-md flex items-center justify-center gap-2 hover:bg-soft-gray transition-all active:scale-95 cursor-pointer font-bold"
              >
                Maths Tuition
              </button>
            </div>
          </div>
          <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-[0px_4px_20px_rgba(0,0,0,0.05)] bg-surface-container">
            <img
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDF1G2H3I4J5K6L7M8N9O0P1Q2R3S4T5U6V7W8X9Y0Z1A2B3C4D5E6F7G8H9I0J1K2L3M4N5O6P7Q8R9S0T1U2V3W4X5Y6Z7"
              alt="Student analyzing geometry and algebra problem on tablet"
            />
          </div>
        </div>
      </section>

      {/* Predicted Papers Catalog */}
      <section className="py-24 bg-white" id="papers">
        <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop space-y-16">
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <h2 className="font-headline-lg text-headline-lg text-charcoal font-bold">2026 GCSE Maths Predicted Sets</h2>
            <p className="font-body-md text-on-surface-variant">Each set contains Paper 1 (Non-Calculator), Paper 2 (Calculator), and Paper 3 (Calculator).</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Edexcel */}
            <div className="bg-soft-gray p-8 rounded-3xl border border-outline-variant space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-royal-purple text-white rounded-xl flex items-center justify-center font-bold">Edexcel</div>
                <div>
                  <h3 className="font-headline-md text-headline-md text-charcoal font-bold">Edexcel GCSE Maths (1MA1)</h3>
                  <p className="font-body-md text-on-surface-variant">Higher Tier Set</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-white p-6 rounded-2xl shadow-sm space-y-3">
                  <h4 className="font-headline-sm text-headline-sm text-charcoal font-bold">Paper 1 (Non-Calculator)</h4>
                  <div className="flex flex-wrap gap-2">
                    <button className="px-4 py-2 bg-royal-purple text-white rounded-lg font-label-md font-bold cursor-pointer hover:bg-primary transition-colors">Download Paper</button>
                    <button className="px-4 py-2 border border-royal-purple text-royal-purple rounded-lg font-label-md font-bold cursor-pointer hover:bg-royal-purple/5 transition-colors">Mark Scheme</button>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm space-y-3">
                  <h4 className="font-headline-sm text-headline-sm text-charcoal font-bold">Paper 2 (Calculator)</h4>
                  <div className="flex flex-wrap gap-2">
                    <button className="px-4 py-2 bg-royal-purple text-white rounded-lg font-label-md font-bold cursor-pointer hover:bg-primary transition-colors">Download Paper</button>
                    <button className="px-4 py-2 border border-royal-purple text-royal-purple rounded-lg font-label-md font-bold cursor-pointer hover:bg-royal-purple/5 transition-colors">Mark Scheme</button>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm space-y-3">
                  <h4 className="font-headline-sm text-headline-sm text-charcoal font-bold">Paper 3 (Calculator)</h4>
                  <div className="flex flex-wrap gap-2">
                    <button className="px-4 py-2 bg-royal-purple text-white rounded-lg font-label-md font-bold cursor-pointer hover:bg-primary transition-colors">Download Paper</button>
                    <button className="px-4 py-2 border border-royal-purple text-royal-purple rounded-lg font-label-md font-bold cursor-pointer hover:bg-royal-purple/5 transition-colors">Mark Scheme</button>
                  </div>
                </div>
              </div>
            </div>

            {/* AQA */}
            <div className="bg-soft-gray p-8 rounded-3xl border border-outline-variant space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-lime-green text-charcoal rounded-xl flex items-center justify-center font-bold">AQA</div>
                <div>
                  <h3 className="font-headline-md text-headline-md text-charcoal font-bold">AQA GCSE Maths (8300)</h3>
                  <p className="font-body-md text-on-surface-variant">Higher Tier Set</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-white p-6 rounded-2xl shadow-sm space-y-3">
                  <h4 className="font-headline-sm text-headline-sm text-charcoal font-bold">Paper 1 (Non-Calculator)</h4>
                  <div className="flex flex-wrap gap-2">
                    <button className="px-4 py-2 bg-royal-purple text-white rounded-lg font-label-md font-bold cursor-pointer hover:bg-primary transition-colors">Download Paper</button>
                    <button className="px-4 py-2 border border-royal-purple text-royal-purple rounded-lg font-label-md font-bold cursor-pointer hover:bg-royal-purple/5 transition-colors">Mark Scheme</button>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm space-y-3">
                  <h4 className="font-headline-sm text-headline-sm text-charcoal font-bold">Paper 2 (Calculator)</h4>
                  <div className="flex flex-wrap gap-2">
                    <button className="px-4 py-2 bg-royal-purple text-white rounded-lg font-label-md font-bold cursor-pointer hover:bg-primary transition-colors">Download Paper</button>
                    <button className="px-4 py-2 border border-royal-purple text-royal-purple rounded-lg font-label-md font-bold cursor-pointer hover:bg-royal-purple/5 transition-colors">Mark Scheme</button>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm space-y-3">
                  <h4 className="font-headline-sm text-headline-sm text-charcoal font-bold">Paper 3 (Calculator)</h4>
                  <div className="flex flex-wrap gap-2">
                    <button className="px-4 py-2 bg-royal-purple text-white rounded-lg font-label-md font-bold cursor-pointer hover:bg-primary transition-colors">Download Paper</button>
                    <button className="px-4 py-2 border border-royal-purple text-royal-purple rounded-lg font-label-md font-bold cursor-pointer hover:bg-royal-purple/5 transition-colors">Mark Scheme</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-soft-gray">
        <div className="max-w-4xl mx-auto px-margin-mobile md:px-margin-desktop">
          <h2 className="font-headline-lg text-headline-lg text-charcoal mb-12 text-center font-bold">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <details className="bg-white p-6 rounded-2xl shadow-sm group cursor-pointer" open>
              <summary className="font-headline-md text-headline-md text-charcoal flex justify-between items-center list-none font-bold">
                Are full worked solutions included with GCSE Maths predicted papers?
                <LigatureIcon name="expand_more" className="transition-transform group-open:rotate-180" />
              </summary>
              <p className="mt-4 font-body-md text-on-surface-variant">
                Yes! Every paper includes step-by-step model solutions showing method marks (M marks), accuracy marks (A marks), and communication requirements for full marks.
              </p>
            </details>
          </div>
        </div>
      </section>
    </div>
  );
}
