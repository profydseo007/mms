'use client';

import React from 'react';
import LigatureIcon from '../LigatureIcon';
import { ActivePage } from '@/lib/types';

interface GcseCombinedSciencePredictedProps {
  onNavigate: (page: ActivePage, subjectTitle?: string) => void;
}

export default function GcseCombinedSciencePredicted({ onNavigate }: GcseCombinedSciencePredictedProps) {
  return (
    <div className="bg-surface text-on-surface font-body-md overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 md:py-24 bg-surface">
        <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-fixed text-on-primary-fixed-variant">
                <span className="material-symbols-outlined text-[18px]">biotech</span>
                <span className="font-label-sm text-label-sm font-bold">TRILOGY & SYNERGY PREDICTIONS</span>
              </div>
              <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-charcoal leading-tight font-bold">
                GCSE Combined Science <span className="text-royal-purple">Predicted Papers 2026</span>
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
                Prepare for your AQA Trilogy and Edexcel Combined Science 2026 exams with predicted papers across Biology, Chemistry, and Physics.
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
                  View Science Papers <span className="material-symbols-outlined">arrow_downward</span>
                </a>
                <button
                  onClick={() => onNavigate('trial')}
                  className="px-8 py-4 border-2 border-royal-purple text-royal-purple rounded-xl font-label-md text-label-md font-bold hover:bg-royal-purple/5 transition-all cursor-pointer"
                >
                  Book Science Tuition
                </button>
              </div>
            </div>
            <div className="lg:col-span-5 relative">
              <div className="bg-white p-4 rounded-3xl shadow-[0px_4px_20px_rgba(0,0,0,0.05)] border border-outline-variant">
                <img
                  className="w-full h-auto rounded-2xl object-cover aspect-[4/3]"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBC2dE4F6G8H0I2J4K6L8M0N2O4P6Q8R0S2T4U6V8W0X2Y4Z6A8B0C2D4E6F8G0H2I4J6K8L0M2N4O6P8Q0R2S4T6U8V0W2X4Y6Z8A0B2C4D6E8F0"
                  alt="Student performing science practical experiment"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resource Grid */}
      <section className="py-24 bg-white" id="papers">
        <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop space-y-16">
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <h2 className="font-headline-lg text-headline-lg text-charcoal font-bold">2026 Combined Science Papers</h2>
            <p className="font-body-md text-on-surface-variant">Full trilogy predicted papers covering all six exam papers across Biology, Chemistry, and Physics.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* AQA Trilogy */}
            <div className="bg-soft-gray p-8 rounded-3xl border border-outline-variant space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-royal-purple text-white rounded-xl flex items-center justify-center font-bold">AQA</div>
                <div>
                  <h3 className="font-headline-md text-headline-md text-charcoal font-bold">AQA Combined Science: Trilogy (8464)</h3>
                  <p className="font-body-md text-on-surface-variant">Higher & Foundation Predictions</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-white p-6 rounded-2xl shadow-sm space-y-3">
                  <h4 className="font-headline-sm text-headline-sm text-charcoal font-bold">Biology Paper 1 & Paper 2</h4>
                  <div className="flex flex-wrap gap-2">
                    <button className="px-4 py-2 bg-royal-purple text-white rounded-lg font-label-md font-bold cursor-pointer hover:bg-primary transition-colors">Download Papers</button>
                    <button className="px-4 py-2 border border-royal-purple text-royal-purple rounded-lg font-label-md font-bold cursor-pointer hover:bg-royal-purple/5 transition-colors">Mark Schemes</button>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm space-y-3">
                  <h4 className="font-headline-sm text-headline-sm text-charcoal font-bold">Chemistry Paper 1 & Paper 2</h4>
                  <div className="flex flex-wrap gap-2">
                    <button className="px-4 py-2 bg-royal-purple text-white rounded-lg font-label-md font-bold cursor-pointer hover:bg-primary transition-colors">Download Papers</button>
                    <button className="px-4 py-2 border border-royal-purple text-royal-purple rounded-lg font-label-md font-bold cursor-pointer hover:bg-royal-purple/5 transition-colors">Mark Schemes</button>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm space-y-3">
                  <h4 className="font-headline-sm text-headline-sm text-charcoal font-bold">Physics Paper 1 & Paper 2</h4>
                  <div className="flex flex-wrap gap-2">
                    <button className="px-4 py-2 bg-royal-purple text-white rounded-lg font-label-md font-bold cursor-pointer hover:bg-primary transition-colors">Download Papers</button>
                    <button className="px-4 py-2 border border-royal-purple text-royal-purple rounded-lg font-label-md font-bold cursor-pointer hover:bg-royal-purple/5 transition-colors">Mark Schemes</button>
                  </div>
                </div>
              </div>
            </div>

            {/* Edexcel Combined */}
            <div className="bg-soft-gray p-8 rounded-3xl border border-outline-variant space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-lime-green text-charcoal rounded-xl flex items-center justify-center font-bold">Edexcel</div>
                <div>
                  <h3 className="font-headline-md text-headline-md text-charcoal font-bold">Edexcel Combined Science (1SC0)</h3>
                  <p className="font-body-md text-on-surface-variant">Higher & Foundation Predictions</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-white p-6 rounded-2xl shadow-sm space-y-3">
                  <h4 className="font-headline-sm text-headline-sm text-charcoal font-bold">Biology Paper 1 & Paper 2</h4>
                  <div className="flex flex-wrap gap-2">
                    <button className="px-4 py-2 bg-royal-purple text-white rounded-lg font-label-md font-bold cursor-pointer hover:bg-primary transition-colors">Download Papers</button>
                    <button className="px-4 py-2 border border-royal-purple text-royal-purple rounded-lg font-label-md font-bold cursor-pointer hover:bg-royal-purple/5 transition-colors">Mark Schemes</button>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm space-y-3">
                  <h4 className="font-headline-sm text-headline-sm text-charcoal font-bold">Chemistry Paper 1 & Paper 2</h4>
                  <div className="flex flex-wrap gap-2">
                    <button className="px-4 py-2 bg-royal-purple text-white rounded-lg font-label-md font-bold cursor-pointer hover:bg-primary transition-colors">Download Papers</button>
                    <button className="px-4 py-2 border border-royal-purple text-royal-purple rounded-lg font-label-md font-bold cursor-pointer hover:bg-royal-purple/5 transition-colors">Mark Schemes</button>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm space-y-3">
                  <h4 className="font-headline-sm text-headline-sm text-charcoal font-bold">Physics Paper 1 & Paper 2</h4>
                  <div className="flex flex-wrap gap-2">
                    <button className="px-4 py-2 bg-royal-purple text-white rounded-lg font-label-md font-bold cursor-pointer hover:bg-primary transition-colors">Download Papers</button>
                    <button className="px-4 py-2 border border-royal-purple text-royal-purple rounded-lg font-label-md font-bold cursor-pointer hover:bg-royal-purple/5 transition-colors">Mark Schemes</button>
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
            <details className="bg-white p-6 rounded-2xl shadow-sm group cursor-pointer" open>
              <summary className="font-headline-md text-headline-md text-charcoal flex justify-between items-center list-none font-bold">
                Does Combined Science award two GCSE grades?
                <LigatureIcon name="expand_more" className="transition-transform group-open:rotate-180" />
              </summary>
              <p className="mt-4 font-body-md text-on-surface-variant">
                Yes – GCSE Combined Science counts as two full GCSEs (double award) and produces a 17-point double grade scale (e.g., 9-9, 9-8, down to 1-1). Our predicted papers are weighted accordingly across all six papers.
              </p>
            </details>
          </div>
        </div>
      </section>
    </div>
  );
}
