'use client';

import React from 'react';
import LigatureIcon from '../LigatureIcon';
import { ActivePage } from '@/lib/types';

interface ALevelMathsPredictedProps {
  onNavigate: (page: ActivePage, subjectTitle?: string) => void;
}

export default function ALevelMathsPredicted({ onNavigate }: ALevelMathsPredictedProps) {
  return (
    <div className="bg-surface text-on-surface font-body-md selection:bg-primary-fixed selection:text-on-primary-fixed">
      {/* Hero Section */}
      <section className="pt-16 pb-24 max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-container text-on-primary-container">
              <span className="material-symbols-outlined text-[18px]">calculate</span>
              <span className="font-label-sm text-label-sm font-bold uppercase">2026 A-LEVEL MATHS PREDICTIONS</span>
            </div>
            <h1 className="font-display-lg text-display-lg text-charcoal leading-tight font-bold">
              2026 A-Level Maths <span className="text-royal-purple">Predicted Papers</span>
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
              Master your Edexcel (9MA0) and AQA (7357) A-Level Mathematics exams with specialist-crafted predicted papers for Pure Mathematics, Mechanics, and Statistics.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                className="bg-royal-purple text-white px-8 py-4 rounded-xl font-label-md text-label-md shadow-[0px_4px_20px_rgba(0,0,0,0.05)] hover:opacity-90 transition-all font-bold cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.getElementById('papers');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                href="#papers"
              >
                View Predicted Papers
              </a>
              <button
                onClick={() => onNavigate('trial')}
                className="border-2 border-royal-purple text-royal-purple px-8 py-4 rounded-xl font-label-md text-label-md hover:bg-royal-purple/5 transition-all font-bold cursor-pointer"
              >
                Book A-Level Tuition
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-lime-green/10 rounded-3xl -rotate-2 -z-10"></div>
            <img
              alt="Student solving calculus and pure maths problems"
              className="w-full h-auto rounded-3xl shadow-[0px_10px_30px_rgba(0,0,0,0.08)] object-cover aspect-video lg:aspect-square"
              src="https://lh3.googleusercontent.com/aida/AP1WRLsjsy8LDhvYm2wW6AOUXBZknTdsltiCnV7-Es-91zdEbLPqbTzlsJgLd_0qzWFs0sV4QslqmzWNWGL5isEuB6LEgxpLpWIQDH5ggsM-fUxzNABejHX6z6fzs-_Ctm65J0ZkaDG32mGB7ZCWLVL9Isv5ax2Vy6Bj7DizepOK-ii42mQyo1LaEJpqmo3LJcCzAzcwoCfhXHu70Fa8IzhCUyhb4hw8IbUlJUpMfTikLh8F5zFh5W2OtDY9LwM9"
            />
          </div>
        </div>
      </section>

      {/* Papers Catalog */}
      <section className="py-24 bg-soft-gray" id="papers">
        <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <h2 className="font-display-lg text-display-lg text-charcoal mb-12 text-center font-bold">2026 Predicted Papers Catalog</h2>
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Edexcel 9MA0 */}
            <div className="bg-white p-8 rounded-3xl border border-outline-variant space-y-6 shadow-sm">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-royal-purple text-white rounded-xl flex items-center justify-center font-bold">Edexcel</div>
                <div>
                  <h3 className="font-headline-md text-headline-md text-charcoal font-bold">Edexcel A-Level Maths (9MA0)</h3>
                  <p className="font-body-md text-on-surface-variant">Pure 1, Pure 2, Statistics & Mechanics</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-soft-gray p-6 rounded-2xl space-y-3">
                  <h4 className="font-headline-sm text-headline-sm text-charcoal font-bold">Pure Mathematics 1 & 2</h4>
                  <div className="flex flex-wrap gap-2">
                    <button className="px-4 py-2 bg-royal-purple text-white rounded-lg font-label-md font-bold cursor-pointer hover:bg-primary transition-colors">Download Papers</button>
                    <button className="px-4 py-2 border border-royal-purple text-royal-purple rounded-lg font-label-md font-bold cursor-pointer hover:bg-royal-purple/5 transition-colors">Mark Schemes</button>
                  </div>
                </div>
                <div className="bg-soft-gray p-6 rounded-2xl space-y-3">
                  <h4 className="font-headline-sm text-headline-sm text-charcoal font-bold">Paper 3: Statistics & Mechanics</h4>
                  <div className="flex flex-wrap gap-2">
                    <button className="px-4 py-2 bg-royal-purple text-white rounded-lg font-label-md font-bold cursor-pointer hover:bg-primary transition-colors">Download Paper</button>
                    <button className="px-4 py-2 border border-royal-purple text-royal-purple rounded-lg font-label-md font-bold cursor-pointer hover:bg-royal-purple/5 transition-colors">Mark Scheme</button>
                  </div>
                </div>
              </div>
            </div>

            {/* AQA 7357 */}
            <div className="bg-white p-8 rounded-3xl border border-outline-variant space-y-6 shadow-sm">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-lime-green text-charcoal rounded-xl flex items-center justify-center font-bold">AQA</div>
                <div>
                  <h3 className="font-headline-md text-headline-md text-charcoal font-bold">AQA A-Level Maths (7357)</h3>
                  <p className="font-body-md text-on-surface-variant">Paper 1, Paper 2, Paper 3</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-soft-gray p-6 rounded-2xl space-y-3">
                  <h4 className="font-headline-sm text-headline-sm text-charcoal font-bold">Paper 1 (Pure) & Paper 2 (Pure & Mechanics)</h4>
                  <div className="flex flex-wrap gap-2">
                    <button className="px-4 py-2 bg-royal-purple text-white rounded-lg font-label-md font-bold cursor-pointer hover:bg-primary transition-colors">Download Papers</button>
                    <button className="px-4 py-2 border border-royal-purple text-royal-purple rounded-lg font-label-md font-bold cursor-pointer hover:bg-royal-purple/5 transition-colors">Mark Schemes</button>
                  </div>
                </div>
                <div className="bg-soft-gray p-6 rounded-2xl space-y-3">
                  <h4 className="font-headline-sm text-headline-sm text-charcoal font-bold">Paper 3 (Pure & Statistics)</h4>
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
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-margin-mobile md:px-margin-desktop">
          <h2 className="font-display-lg text-display-lg text-charcoal mb-12 text-center font-bold">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <details className="bg-soft-gray p-6 rounded-xl shadow-sm group cursor-pointer" open>
              <summary className="font-headline-md text-headline-md text-charcoal flex justify-between items-center list-none font-bold">
                Do these predicted papers cover both Year 12 and Year 13 content?
                <LigatureIcon name="expand_more" className="transition-transform group-open:rotate-180" />
              </summary>
              <p className="mt-4 font-body-md text-on-surface-variant">
                Yes, A-Level Mathematics is a synoptic qualification, so our 2026 predicted papers cover full AS and A2 content across pure, mechanics, and statistics.
              </p>
            </details>
          </div>
        </div>
      </section>
    </div>
  );
}
