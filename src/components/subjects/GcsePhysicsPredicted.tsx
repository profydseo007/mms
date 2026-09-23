'use client';

import React from 'react';
import LigatureIcon from '../LigatureIcon';
import { ActivePage } from '@/lib/types';

interface GcsePhysicsPredictedProps {
  onNavigate: (page: ActivePage, subjectTitle?: string) => void;
}

export default function GcsePhysicsPredicted({ onNavigate }: GcsePhysicsPredictedProps) {
  return (
    <div className="bg-surface text-on-surface font-body-md overflow-x-hidden">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-surface">
        <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary-container text-on-secondary-container rounded-full">
              <span className="material-symbols-outlined text-[18px]">electric_bolt</span>
              <span className="font-label-sm text-label-sm font-bold">2026 PHYSICS PREDICTIONS</span>
            </div>
            <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-charcoal leading-tight font-bold">
              GCSE Physics <span className="text-royal-purple">Predicted Papers 2026</span>
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
              Master calculation and 6-mark extended response questions for AQA (8463) and Edexcel (1PH0) GCSE Physics exams.
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
                View Papers
                <span className="material-symbols-outlined">arrow_downward</span>
              </a>
              <button
                onClick={() => onNavigate('trial')}
                className="px-8 py-4 border-2 border-royal-purple text-royal-purple rounded-xl font-headline-md text-headline-md flex items-center justify-center gap-2 hover:bg-soft-gray transition-all active:scale-95 cursor-pointer font-bold"
              >
                Physics Tuition
              </button>
            </div>
          </div>
          <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-[0px_4px_20px_rgba(0,0,0,0.05)] bg-surface-container">
            <img
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAgpZ922sByC2S6c41tFlsT2D7h81aB_iVdY41bL1w95I0aK6Zp66J4xO7iBvIn_iV0d9d_l8z2-HnL124V6iRzS5RIn0Z4p1qFkXo1yW5v7b8I8n8hL1S0J4dM23L6S3b0w2_7b82I022uL"
              alt="Student carrying out physics practical with ray box and lens"
            />
          </div>
        </div>
      </section>

      {/* Papers Catalog */}
      <section className="py-24 bg-white" id="papers">
        <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop space-y-16">
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <h2 className="font-headline-lg text-headline-lg text-charcoal font-bold">2026 GCSE Physics Papers</h2>
            <p className="font-body-md text-on-surface-variant">Full exam-style papers for Paper 1 and Paper 2 with equation sheets and mark schemes.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* AQA */}
            <div className="bg-soft-gray p-8 rounded-3xl border border-outline-variant space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-royal-purple text-white rounded-xl flex items-center justify-center font-bold">AQA</div>
                <div>
                  <h3 className="font-headline-md text-headline-md text-charcoal font-bold">AQA GCSE Physics (8463)</h3>
                  <p className="font-body-md text-on-surface-variant">Higher Tier Predictions</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-white p-6 rounded-2xl shadow-sm space-y-3">
                  <h4 className="font-headline-sm text-headline-sm text-charcoal font-bold">Paper 1 (Energy, Electricity, Particle Model, Atomic Structure)</h4>
                  <div className="flex flex-wrap gap-2">
                    <button className="px-4 py-2 bg-royal-purple text-white rounded-lg font-label-md font-bold cursor-pointer hover:bg-primary transition-colors">Download Paper</button>
                    <button className="px-4 py-2 border border-royal-purple text-royal-purple rounded-lg font-label-md font-bold cursor-pointer hover:bg-royal-purple/5 transition-colors">Mark Scheme</button>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm space-y-3">
                  <h4 className="font-headline-sm text-headline-sm text-charcoal font-bold">Paper 2 (Forces, Waves, Magnetism, Space)</h4>
                  <div className="flex flex-wrap gap-2">
                    <button className="px-4 py-2 bg-royal-purple text-white rounded-lg font-label-md font-bold cursor-pointer hover:bg-primary transition-colors">Download Paper</button>
                    <button className="px-4 py-2 border border-royal-purple text-royal-purple rounded-lg font-label-md font-bold cursor-pointer hover:bg-royal-purple/5 transition-colors">Mark Scheme</button>
                  </div>
                </div>
              </div>
            </div>

            {/* Edexcel */}
            <div className="bg-soft-gray p-8 rounded-3xl border border-outline-variant space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-lime-green text-charcoal rounded-xl flex items-center justify-center font-bold">Edexcel</div>
                <div>
                  <h3 className="font-headline-md text-headline-md text-charcoal font-bold">Edexcel GCSE Physics (1PH0)</h3>
                  <p className="font-body-md text-on-surface-variant">Higher Tier Predictions</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-white p-6 rounded-2xl shadow-sm space-y-3">
                  <h4 className="font-headline-sm text-headline-sm text-charcoal font-bold">Paper 1 (Key Concepts, Motion, Waves, Light, Radioactivity)</h4>
                  <div className="flex flex-wrap gap-2">
                    <button className="px-4 py-2 bg-royal-purple text-white rounded-lg font-label-md font-bold cursor-pointer hover:bg-primary transition-colors">Download Paper</button>
                    <button className="px-4 py-2 border border-royal-purple text-royal-purple rounded-lg font-label-md font-bold cursor-pointer hover:bg-royal-purple/5 transition-colors">Mark Scheme</button>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm space-y-3">
                  <h4 className="font-headline-sm text-headline-sm text-charcoal font-bold">Paper 2 (Energy, Electricity, Magnetism, Particle Model)</h4>
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
                Are Physics equation sheets included with the papers?
                <LigatureIcon name="expand_more" className="transition-transform group-open:rotate-180" />
              </summary>
              <p className="mt-4 font-body-md text-on-surface-variant">
                Yes, every GCSE Physics predicted paper set comes complete with the updated exam board equation sheet for true exam simulation.
              </p>
            </details>
          </div>
        </div>
      </section>
    </div>
  );
}
