'use client';

import React from 'react';
import LigatureIcon from '../LigatureIcon';
import { ActivePage } from '@/lib/types';

interface ALevelPhysicsPredictedProps {
  onNavigate: (page: ActivePage, subjectTitle?: string) => void;
}

export default function ALevelPhysicsPredicted({ onNavigate }: ALevelPhysicsPredictedProps) {
  return (
    <div className="bg-background text-on-surface font-body-md overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-surface">
        <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-container text-on-primary-container">
                <span className="material-symbols-outlined text-[18px]">bolt</span>
                <span className="font-label-sm text-label-sm uppercase tracking-wide">Updated for 2026 Series</span>
              </div>
              <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-charcoal leading-tight font-bold">
                2026 Physics A Level <span className="text-royal-purple">Predicted Papers</span>
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
                Elevate your A Level Physics revision with expert-crafted predicted papers for AQA and OCR (A). Realistic question structures, mark schemes, and model answers.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <a
                  className="px-8 py-4 bg-royal-purple text-on-primary rounded-xl font-headline-md text-headline-md shadow-lg hover:shadow-xl transition-shadow flex items-center gap-2 cursor-pointer"
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
                  className="px-8 py-4 border border-outline text-royal-purple rounded-xl font-headline-md text-headline-md hover:bg-soft-gray transition-colors cursor-pointer font-bold"
                >
                  Get Exam Support
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-[0px_4px_20px_rgba(0,0,0,0.05)] bg-surface-container">
                <img
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAgpZ922sByC2S6c41tFlsT2D7h81aB_iVdY41bL1w95I0aK6Zp66J4xO7iBvIn_iV0d9d_l8z2-HnL124V6iRzS5RIn0Z4p1qFkXo1yW5v7b8I8n8hL1S0J4dM23L6S3b0w2_7b82I022uL"
                  alt="A student solving complex physics equations on a digital tablet with circuit diagrams"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3 border border-outline-variant">
                <div className="w-10 h-10 rounded-full bg-lime-green/20 text-secondary flex items-center justify-center font-bold">
                  98%
                </div>
                <div>
                  <div className="font-label-md text-label-md font-bold text-charcoal">Spec Alignment</div>
                  <div className="font-body-md text-body-md text-on-surface-variant">AQA & OCR A</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resource Catalog */}
      <section className="py-24 bg-white" id="papers">
        <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="mb-16 text-center max-w-2xl mx-auto space-y-4">
            <h2 className="font-headline-lg text-headline-lg text-charcoal font-bold">Predicted Papers by Exam Board</h2>
            <p className="font-body-md text-body-md text-on-surface-variant">Select your exam board to access paper predictions, detailed mark schemes, and step-by-step model solutions.</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            {/* AQA */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 border-b border-outline-variant pb-4">
                <div className="w-10 h-10 rounded-lg bg-royal-purple text-white flex items-center justify-center font-bold">AQA</div>
                <h3 className="font-headline-md text-headline-md text-charcoal font-bold">AQA A Level Physics (7408)</h3>
              </div>
              <div className="grid gap-4">
                <div className="p-6 rounded-2xl bg-soft-gray border border-transparent hover:border-royal-purple/30 transition-all">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="font-headline-md text-headline-md text-charcoal font-bold">Paper 1: Core Physics</h4>
                      <p className="font-body-md text-body-md text-on-surface-variant">Sections 1–5 & Periodic Motion</p>
                    </div>
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-lime-green/30 text-charcoal">2026 Ready</span>
                  </div>
                  <div className="grid sm:grid-cols-3 gap-2">
                    <button className="p-2 bg-white rounded-lg text-center font-label-md text-label-md text-royal-purple hover:bg-royal-purple hover:text-white transition-colors border border-outline-variant cursor-pointer font-bold">Paper</button>
                    <button className="p-2 bg-white rounded-lg text-center font-label-md text-label-md text-royal-purple hover:bg-royal-purple hover:text-white transition-colors border border-outline-variant cursor-pointer font-bold">Mark Scheme</button>
                    <button className="p-2 bg-white rounded-lg text-center font-label-md text-label-md text-royal-purple hover:bg-royal-purple hover:text-white transition-colors border border-outline-variant cursor-pointer font-bold">Solutions</button>
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-soft-gray border border-transparent hover:border-royal-purple/30 transition-all">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="font-headline-md text-headline-md text-charcoal font-bold">Paper 2: Advanced Fields</h4>
                      <p className="font-body-md text-body-md text-on-surface-variant">Thermal, Fields & Nuclear Physics</p>
                    </div>
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-lime-green/30 text-charcoal">2026 Ready</span>
                  </div>
                  <div className="grid sm:grid-cols-3 gap-2">
                    <button className="p-2 bg-white rounded-lg text-center font-label-md text-label-md text-royal-purple hover:bg-royal-purple hover:text-white transition-colors border border-outline-variant cursor-pointer font-bold">Paper</button>
                    <button className="p-2 bg-white rounded-lg text-center font-label-md text-label-md text-royal-purple hover:bg-royal-purple hover:text-white transition-colors border border-outline-variant cursor-pointer font-bold">Mark Scheme</button>
                    <button className="p-2 bg-white rounded-lg text-center font-label-md text-label-md text-royal-purple hover:bg-royal-purple hover:text-white transition-colors border border-outline-variant cursor-pointer font-bold">Solutions</button>
                  </div>
                </div>
              </div>
            </div>

            {/* OCR */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 border-b border-outline-variant pb-4">
                <div className="w-10 h-10 rounded-lg bg-lime-green text-charcoal flex items-center justify-center font-bold">OCR</div>
                <h3 className="font-headline-md text-headline-md text-charcoal font-bold">OCR Physics A (H556)</h3>
              </div>
              <div className="grid gap-4">
                <div className="p-6 rounded-2xl bg-soft-gray border border-transparent hover:border-royal-purple/30 transition-all">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="font-headline-md text-headline-md text-charcoal font-bold">Paper 1: Modelling Physics</h4>
                      <p className="font-body-md text-body-md text-on-surface-variant">Modules 1, 2, 3 and 5</p>
                    </div>
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-lime-green/30 text-charcoal">2026 Ready</span>
                  </div>
                  <div className="grid sm:grid-cols-3 gap-2">
                    <button className="p-2 bg-white rounded-lg text-center font-label-md text-label-md text-royal-purple hover:bg-royal-purple hover:text-white transition-colors border border-outline-variant cursor-pointer font-bold">Paper</button>
                    <button className="p-2 bg-white rounded-lg text-center font-label-md text-label-md text-royal-purple hover:bg-royal-purple hover:text-white transition-colors border border-outline-variant cursor-pointer font-bold">Mark Scheme</button>
                    <button className="p-2 bg-white rounded-lg text-center font-label-md text-label-md text-royal-purple hover:bg-royal-purple hover:text-white transition-colors border border-outline-variant cursor-pointer font-bold">Solutions</button>
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-soft-gray border border-transparent hover:border-royal-purple/30 transition-all">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="font-headline-md text-headline-md text-charcoal font-bold">Paper 2: Exploring Physics</h4>
                      <p className="font-body-md text-body-md text-on-surface-variant">Modules 1, 2, 4 and 6</p>
                    </div>
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-lime-green/30 text-charcoal">2026 Ready</span>
                  </div>
                  <div className="grid sm:grid-cols-3 gap-2">
                    <button className="p-2 bg-white rounded-lg text-center font-label-md text-label-md text-royal-purple hover:bg-royal-purple hover:text-white transition-colors border border-outline-variant cursor-pointer font-bold">Paper</button>
                    <button className="p-2 bg-white rounded-lg text-center font-label-md text-label-md text-royal-purple hover:bg-royal-purple hover:text-white transition-colors border border-outline-variant cursor-pointer font-bold">Mark Scheme</button>
                    <button className="p-2 bg-white rounded-lg text-center font-label-md text-label-md text-royal-purple hover:bg-royal-purple hover:text-white transition-colors border border-outline-variant cursor-pointer font-bold">Solutions</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Author Section */}
      <section className="py-24 bg-soft-gray">
        <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-[0px_4px_20px_rgba(0,0,0,0.05)] border border-outline-variant">
            <div className="grid md:grid-cols-3 gap-8 items-center">
              <div className="aspect-square rounded-2xl overflow-hidden bg-surface-container">
                <img
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBdS5w1K0vQJmP9zL9I-q1mN_wX8k4e7iY9t9M6v2J4a_L3zL9I0q_m2N1wX_k4e7iY9t9M6v2J4a_L3zL9I0q_m2N1wX_k4e7iY9t9M6v2J4a_L3zL9I0q_m2N1wX"
                  alt="Dr. Sarah Jenkins"
                />
              </div>
              <div className="md:col-span-2 space-y-4">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-royal-purple/10 text-royal-purple">Lead Physics Author</span>
                <h3 className="font-headline-lg text-headline-lg text-charcoal font-bold">Dr. Sarah Jenkins</h3>
                <p className="font-body-lg text-body-lg text-on-surface-variant">
                  Dr. Sarah Jenkins holds a PhD in Theoretical Astrophysics from Cambridge University and has over 12 years of experience as a senior examiner and Head of Physics. She designs predicted papers to challenge top-grade candidates and clarify core physical principles.
                </p>
                <div className="pt-2">
                  <button onClick={() => onNavigate('trial')} className="px-6 py-3 bg-royal-purple text-white rounded-xl font-label-md font-bold cursor-pointer hover:bg-primary transition-colors">Book Tuition with Sarah</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-margin-mobile md:px-margin-desktop">
          <h2 className="font-headline-lg text-headline-lg text-charcoal mb-12 text-center font-bold">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <details className="p-6 bg-soft-gray rounded-2xl group cursor-pointer" open>
              <summary className="font-headline-md text-headline-md text-charcoal flex justify-between items-center list-none font-bold">
                How accurate are the 2026 predicted papers?
                <LigatureIcon name="expand_more" className="transition-transform group-open:rotate-180" />
              </summary>
              <p className="mt-4 font-body-md text-body-md text-on-surface-variant">
                Our predictions are generated using advanced analysis of historical question distribution, recent examiner report focus areas, and curriculum weighting. While no paper can predict exact questions, our structure and challenge levels match the real exam experience.
              </p>
            </details>
            <details className="p-6 bg-soft-gray rounded-2xl group cursor-pointer">
              <summary className="font-headline-md text-headline-md text-charcoal flex justify-between items-center list-none font-bold">
                Are data and formula booklets included?
                <LigatureIcon name="expand_more" className="transition-transform group-open:rotate-180" />
              </summary>
              <p className="mt-4 font-body-md text-body-md text-on-surface-variant">
                Yes, every predicted paper download comes with the relevant exam board data, formula sheet, and relationship tables so you can practice under true exam conditions.
              </p>
            </details>
          </div>
        </div>
      </section>
    </div>
  );
}
