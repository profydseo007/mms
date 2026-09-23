'use client';

import React from 'react';
import LigatureIcon from './LigatureIcon';
import { ActivePage } from '@/lib/types';

interface MockPapersProps {
  onNavigate: (page: ActivePage, subjectTitle?: string) => void;
}

export default function MockPapers({ onNavigate }: MockPapersProps) {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-surface text-on-surface font-body-md overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-soft-gray py-20 px-4 md:px-margin-desktop">
        <div className="max-w-max-width mx-auto flex flex-col items-start gap-6 relative z-10">
          <div className="flex flex-wrap gap-3">
            <span className="inline-flex items-center px-3 py-1 bg-royal-purple/10 text-royal-purple font-label-md text-label-sm rounded-full font-bold">
              <span className="material-symbols-outlined text-[16px] mr-1">verified</span> Created by experts
            </span>
            <span className="inline-flex items-center px-3 py-1 bg-lime-green/20 text-secondary font-label-md text-label-sm rounded-full font-bold">
              <span className="material-symbols-outlined text-[16px] mr-1">card_giftcard</span> Free resources
            </span>
          </div>
          <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-charcoal max-w-2xl leading-tight font-bold">
            Mock Papers Hub
          </h1>
          <p className="font-headline-md text-headline-md text-on-surface-variant font-medium">
            Select your qualification level and subject below
          </p>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl">
            Access expert-designed GCSE and A-Level mock papers, mark schemes, and step-by-step model solutions. Select a subject to view full exam papers and practice materials.
          </p>
          <div className="mt-2 flex flex-wrap gap-4">
            <button
              onClick={() => scrollToSection('gcse-mock-papers')}
              className="bg-royal-purple text-white px-8 py-3.5 rounded-xl font-body-md font-bold shadow-lg hover:translate-y-[-2px] transition-all cursor-pointer"
            >
              GCSE Mock Papers
            </button>
            <button
              onClick={() => scrollToSection('alevel-mock-papers')}
              className="bg-white border-2 border-royal-purple text-royal-purple px-8 py-3.5 rounded-xl font-body-md font-bold hover:bg-royal-purple/5 transition-all cursor-pointer"
            >
              A-Level Mock Papers
            </button>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-max-width mx-auto px-4 md:px-margin-desktop py-16 space-y-20">
        
        {/* GCSE Section */}
        <section id="gcse-mock-papers" className="space-y-8 scroll-mt-24">
          <div className="border-b border-outline-variant/40 pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-royal-purple/10 text-royal-purple rounded-full font-label-sm text-label-sm font-bold mb-3">
                <span className="material-symbols-outlined text-[16px]">school</span>
                <span>YEAR 11 & GCSE</span>
              </div>
              <h2 className="font-display-lg text-headline-lg md:text-display-lg text-charcoal font-bold">
                GCSE Mock Papers
              </h2>
              <p className="text-on-surface-variant font-body-lg mt-2">
                Full-length mock exam papers mapped to current GCSE specifications.
              </p>
            </div>
            <span className="text-label-md font-semibold text-royal-purple bg-royal-purple/5 px-4 py-2 rounded-xl w-fit">
              5 Subjects Available
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-gutter">
            {/* GCSE Maths */}
            <div className="bg-white border border-outline-variant/60 rounded-3xl p-8 shadow-[0px_4px_20px_rgba(0,0,0,0.05)] hover:shadow-xl hover:border-royal-purple transition-all flex flex-col justify-between group">
              <div>
                <div className="w-14 h-14 bg-purple-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-royal-purple group-hover:text-white transition-colors text-royal-purple">
                  <span className="material-symbols-outlined text-[32px]">calculate</span>
                </div>
                <h3 className="font-headline-md text-headline-md text-charcoal font-bold mb-2">GCSE Maths</h3>
                <p className="text-on-surface-variant font-body-md mb-6">
                  Edexcel Higher Tier mock papers including Paper 1 (Non-Calc), Paper 2, and Paper 3 with full mark schemes.
                </p>
              </div>
              <button
                onClick={() => onNavigate('gcse-maths-mock')}
                className="w-full py-3.5 bg-soft-gray text-royal-purple font-bold rounded-xl hover:bg-royal-purple hover:text-white transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                View GCSE Maths Papers <LigatureIcon name="arrow_forward" className="text-sm" />
              </button>
            </div>

            {/* GCSE Physics */}
            <div className="bg-white border border-outline-variant/60 rounded-3xl p-8 shadow-[0px_4px_20px_rgba(0,0,0,0.05)] hover:shadow-xl hover:border-royal-purple transition-all flex flex-col justify-between group">
              <div>
                <div className="w-14 h-14 bg-orange-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-royal-purple group-hover:text-white transition-colors text-orange-600">
                  <span className="material-symbols-outlined text-[32px]">bolt</span>
                </div>
                <h3 className="font-headline-md text-headline-md text-charcoal font-bold mb-2">GCSE Physics</h3>
                <p className="text-on-surface-variant font-body-md mb-6">
                  AQA Higher Tier Physics mock papers covering Energy, Electricity, Forces, Waves & Magnetism.
                </p>
              </div>
              <button
                onClick={() => onNavigate('gcse-physics-mock')}
                className="w-full py-3.5 bg-soft-gray text-royal-purple font-bold rounded-xl hover:bg-royal-purple hover:text-white transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                View GCSE Physics Papers <LigatureIcon name="arrow_forward" className="text-sm" />
              </button>
            </div>

            {/* GCSE Chemistry */}
            <div className="bg-white border border-outline-variant/60 rounded-3xl p-8 shadow-[0px_4px_20px_rgba(0,0,0,0.05)] hover:shadow-xl hover:border-royal-purple transition-all flex flex-col justify-between group">
              <div>
                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-royal-purple group-hover:text-white transition-colors text-blue-600">
                  <span className="material-symbols-outlined text-[32px]">science</span>
                </div>
                <h3 className="font-headline-md text-headline-md text-charcoal font-bold mb-2">GCSE Chemistry</h3>
                <p className="text-on-surface-variant font-body-md mb-6">
                  AQA Higher Tier Chemistry mock papers for Paper 1 and Paper 2 with complete marking criteria.
                </p>
              </div>
              <button
                onClick={() => onNavigate('gcse-chemistry-mock')}
                className="w-full py-3.5 bg-soft-gray text-royal-purple font-bold rounded-xl hover:bg-royal-purple hover:text-white transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                View GCSE Chemistry Papers <LigatureIcon name="arrow_forward" className="text-sm" />
              </button>
            </div>

            {/* GCSE Biology */}
            <div className="bg-white border border-outline-variant/60 rounded-3xl p-8 shadow-[0px_4px_20px_rgba(0,0,0,0.05)] hover:shadow-xl hover:border-royal-purple transition-all flex flex-col justify-between group">
              <div>
                <div className="w-14 h-14 bg-red-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-royal-purple group-hover:text-white transition-colors text-red-600">
                  <span className="material-symbols-outlined text-[32px]">biotech</span>
                </div>
                <h3 className="font-headline-md text-headline-md text-charcoal font-bold mb-2">GCSE Biology</h3>
                <p className="text-on-surface-variant font-body-md mb-6">
                  AQA Higher Tier Biology Paper 1 and Paper 2 mock exams created specifically for Year 11.
                </p>
              </div>
              <button
                onClick={() => onNavigate('gcse-biology-mock')}
                className="w-full py-3.5 bg-soft-gray text-royal-purple font-bold rounded-xl hover:bg-royal-purple hover:text-white transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                View GCSE Biology Papers <LigatureIcon name="arrow_forward" className="text-sm" />
              </button>
            </div>

            {/* GCSE Combined Science */}
            <div className="bg-white border border-outline-variant/60 rounded-3xl p-8 shadow-[0px_4px_20px_rgba(0,0,0,0.05)] hover:shadow-xl hover:border-royal-purple transition-all flex flex-col justify-between group">
              <div>
                <div className="w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-royal-purple group-hover:text-white transition-colors text-green-600">
                  <span className="material-symbols-outlined text-[32px]">query_stats</span>
                </div>
                <h3 className="font-headline-md text-headline-md text-charcoal font-bold mb-2">GCSE Combined Science</h3>
                <p className="text-on-surface-variant font-body-md mb-6">
                  AQA Trilogy Higher Tier mock papers spanning Biology, Chemistry, and Physics.
                </p>
              </div>
              <button
                onClick={() => onNavigate('gcse-combined-science-mock')}
                className="w-full py-3.5 bg-soft-gray text-royal-purple font-bold rounded-xl hover:bg-royal-purple hover:text-white transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                View Combined Science Papers <LigatureIcon name="arrow_forward" className="text-sm" />
              </button>
            </div>
          </div>
        </section>

        {/* A-Level Section */}
        <section id="alevel-mock-papers" className="space-y-8 scroll-mt-24 pt-8">
          <div className="border-b border-outline-variant/40 pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-lime-green/20 text-secondary rounded-full font-label-sm text-label-sm font-bold mb-3">
                <span className="material-symbols-outlined text-[16px]">auto_stories</span>
                <span>YEAR 12 & 13 / A-LEVEL</span>
              </div>
              <h2 className="font-display-lg text-headline-lg md:text-display-lg text-charcoal font-bold">
                A-Level Mock Papers
              </h2>
              <p className="text-on-surface-variant font-body-lg mt-2">
                Advanced level mock papers for AQA, Edexcel, and OCR (A) specifications.
              </p>
            </div>
            <span className="text-label-md font-semibold text-secondary bg-lime-green/10 px-4 py-2 rounded-xl w-fit">
              4 Subjects Available
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-gutter">
            {/* A-Level Maths */}
            <div className="bg-white border border-outline-variant/60 rounded-3xl p-8 shadow-[0px_4px_20px_rgba(0,0,0,0.05)] hover:shadow-xl hover:border-royal-purple transition-all flex flex-col justify-between group">
              <div>
                <div className="w-14 h-14 bg-purple-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-royal-purple group-hover:text-white transition-colors text-royal-purple">
                  <span className="material-symbols-outlined text-[32px]">functions</span>
                </div>
                <h3 className="font-headline-md text-headline-md text-charcoal font-bold mb-2">A-Level Maths</h3>
                <p className="text-on-surface-variant font-body-md mb-6">
                  Edexcel (9MA0) Pure Mathematics Paper 1 and Paper 2 mocks with step-by-step worked solutions.
                </p>
              </div>
              <button
                onClick={() => onNavigate('alevel-maths-mock')}
                className="w-full py-3.5 bg-soft-gray text-royal-purple font-bold rounded-xl hover:bg-royal-purple hover:text-white transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                View A-Level Maths Papers <LigatureIcon name="arrow_forward" className="text-sm" />
              </button>
            </div>

            {/* A-Level Physics */}
            <div className="bg-white border border-outline-variant/60 rounded-3xl p-8 shadow-[0px_4px_20px_rgba(0,0,0,0.05)] hover:shadow-xl hover:border-royal-purple transition-all flex flex-col justify-between group">
              <div>
                <div className="w-14 h-14 bg-orange-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-royal-purple group-hover:text-white transition-colors text-orange-600">
                  <span className="material-symbols-outlined text-[32px]">school</span>
                </div>
                <h3 className="font-headline-md text-headline-md text-charcoal font-bold mb-2">A-Level Physics</h3>
                <p className="text-on-surface-variant font-body-md mb-6">
                  AQA & OCR (A) Physics Paper 1, Paper 2, and Paper 3 mock exams with model answers.
                </p>
              </div>
              <button
                onClick={() => onNavigate('alevel-physics-mock')}
                className="w-full py-3.5 bg-soft-gray text-royal-purple font-bold rounded-xl hover:bg-royal-purple hover:text-white transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                View A-Level Physics Papers <LigatureIcon name="arrow_forward" className="text-sm" />
              </button>
            </div>

            {/* A-Level Chemistry */}
            <div className="bg-white border border-outline-variant/60 rounded-3xl p-8 shadow-[0px_4px_20px_rgba(0,0,0,0.05)] hover:shadow-xl hover:border-royal-purple transition-all flex flex-col justify-between group">
              <div>
                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-royal-purple group-hover:text-white transition-colors text-blue-600">
                  <span className="material-symbols-outlined text-[32px]">bubbles</span>
                </div>
                <h3 className="font-headline-md text-headline-md text-charcoal font-bold mb-2">A-Level Chemistry</h3>
                <p className="text-on-surface-variant font-body-md mb-6">
                  AQA & OCR (A) Chemistry mocks covering Organic, Inorganic, and Physical Chemistry.
                </p>
              </div>
              <button
                onClick={() => onNavigate('alevel-chemistry-mock')}
                className="w-full py-3.5 bg-soft-gray text-royal-purple font-bold rounded-xl hover:bg-royal-purple hover:text-white transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                View A-Level Chemistry Papers <LigatureIcon name="arrow_forward" className="text-sm" />
              </button>
            </div>

            {/* A-Level Biology */}
            <div className="bg-white border border-outline-variant/60 rounded-3xl p-8 shadow-[0px_4px_20px_rgba(0,0,0,0.05)] hover:shadow-xl hover:border-royal-purple transition-all flex flex-col justify-between group">
              <div>
                <div className="w-14 h-14 bg-red-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-royal-purple group-hover:text-white transition-colors text-red-600">
                  <span className="material-symbols-outlined text-[32px]">psychology</span>
                </div>
                <h3 className="font-headline-md text-headline-md text-charcoal font-bold mb-2">A-Level Biology</h3>
                <p className="text-on-surface-variant font-body-md mb-6">
                  AQA & OCR (A) Biology mock papers with mark schemes and practical skills guidance.
                </p>
              </div>
              <button
                onClick={() => onNavigate('alevel-biology-mock')}
                className="w-full py-3.5 bg-soft-gray text-royal-purple font-bold rounded-xl hover:bg-royal-purple hover:text-white transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                View A-Level Biology Papers <LigatureIcon name="arrow_forward" className="text-sm" />
              </button>
            </div>
          </div>
        </section>
      </div>

      {/* Community CTA */}
      <section className="py-16 px-4 md:px-margin-desktop bg-royal-purple relative overflow-hidden mt-12">
        <div className="max-w-max-width mx-auto relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="text-white max-w-xl">
            <h2 className="font-display-lg text-headline-lg font-bold mb-4 text-white">Join the Math Make Smart community</h2>
            <p className="font-body-lg text-white/90">Create a free account to track your mock exam progress, save your favorite papers, and receive personalized resource recommendations.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <button onClick={() => onNavigate('trial')} className="bg-lime-green text-charcoal px-8 py-4 rounded-xl font-bold hover:scale-105 transition-transform cursor-pointer">Create Free Account</button>
            <a href="https://learn.mathmakesmart.com/" target="_blank" rel="noopener noreferrer" className="bg-white/10 text-white border border-white/30 backdrop-blur-sm px-8 py-4 rounded-xl font-bold hover:bg-white/20 transition-all cursor-pointer text-center">Sign In</a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-4 md:px-margin-desktop bg-soft-gray">
        <div className="max-w-max-width mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display-lg text-headline-lg text-charcoal font-bold">Frequently Asked Questions</h2>
            <p className="text-on-surface-variant mt-4 font-body-md">Everything you need to know about our mock papers.</p>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            <details className="group bg-white rounded-2xl shadow-sm overflow-hidden" open>
              <summary className="flex justify-between items-center p-6 cursor-pointer font-headline-md text-on-surface list-none font-bold">
                What are mock papers?
                <LigatureIcon name="expand_more" className="group-open:rotate-180 transition-transform" />
              </summary>
              <div className="p-6 pt-0 text-on-surface-variant font-body-md border-t border-soft-gray">
                Mock papers are GCSE and A Level exam-style practice papers designed to mirror the format, structure, and question style of real exams. They help you practise applying your knowledge, get used to working under timed conditions, and build confidence ahead of your exams.
              </div>
            </details>
            <details className="group bg-white rounded-2xl shadow-sm overflow-hidden">
              <summary className="flex justify-between items-center p-6 cursor-pointer font-headline-md text-on-surface list-none font-bold">
                Who creates the mock papers?
                <LigatureIcon name="expand_more" className="group-open:rotate-180 transition-transform" />
              </summary>
              <div className="p-6 pt-0 text-on-surface-variant font-body-md border-t border-soft-gray">
                Our GCSE and A Level mock papers are developed by subject specialists—including experienced teachers and examiners—designed to replicate the structure and style of real exams, giving you realistic exam practice.
              </div>
            </details>
            <details className="group bg-white rounded-2xl shadow-sm overflow-hidden">
              <summary className="flex justify-between items-center p-6 cursor-pointer font-headline-md text-on-surface list-none font-bold">
                Are mock papers the same as past papers?
                <LigatureIcon name="expand_more" className="group-open:rotate-180 transition-transform" />
              </summary>
              <div className="p-6 pt-0 text-on-surface-variant font-body-md border-t border-soft-gray">
                No – mock papers and past papers serve different purposes. Past papers are official exam papers from previous years, while mock papers are newly created to simulate the experience of sitting a real GCSE or A Level exam using current spec trends.
              </div>
            </details>
          </div>
        </div>
      </section>
    </div>
  );
}
