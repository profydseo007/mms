'use client';

import React from 'react';
import LigatureIcon from '../LigatureIcon';
import { ActivePage } from '@/lib/types';

interface ALevelChemistryPredictedProps {
  onNavigate: (page: ActivePage, subjectTitle?: string) => void;
}

export default function ALevelChemistryPredicted({ onNavigate }: ALevelChemistryPredictedProps) {
  return (
    <div className="bg-background text-on-surface font-body-md overflow-x-hidden">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-surface">
        <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary-container text-on-secondary-container rounded-full">
              <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
              <span className="font-label-sm text-label-sm">Trusted by 50,000+ Students</span>
            </div>
            <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-charcoal leading-tight font-bold">
              2026 Chemistry A Level <span className="text-royal-purple">Predicted Papers</span>
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
              Master your exams with expert-crafted predictions for AQA and OCR (A). Built by subject specialists to reflect 2026 exam trends.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                className="px-8 py-4 bg-royal-purple text-on-primary rounded-xl font-headline-md text-headline-md flex items-center justify-center gap-2 hover:opacity-90 transition-all shadow-lg active:scale-95 cursor-pointer"
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
                Talk to an Expert
              </button>
            </div>
          </div>
          <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-[0px_4px_20px_rgba(0,0,0,0.05)]">
            <img
              alt="Student studying chemistry with textbook and laptop"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCeMlDH2I6jqxe9Qy8DHczKYUqloiIU8v1rbdhcrqK-qHX3GY7HqFA2S7YADLRWVxfn-Gc4w5o6nrZO85VZp26yfF0r0ImKNdl4a9FFoclGGOU1pYVPcPBFIwUBMGGt-xrT2nwWQGzbY3THC-RIillooRYDCPICzrw7foZuSKF7zvrWRSKqibdHxliE_tlrvrZMYwAGZfuLCPezijAZMfDRpYXt9IH5j6K86MPKxLyShusMsw6IpZTyjw"
            />
          </div>
        </div>
      </section>

      {/* Predicted Papers Section */}
      <section className="py-24 bg-white" id="papers">
        <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="text-center mb-16 space-y-4">
            <h2 className="font-headline-lg text-headline-lg text-charcoal font-bold">Predicted Papers by Exam Board</h2>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto">
              Expertly modeled on real AQA and OCR specifications. Every paper includes a full mark scheme and model answers.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            {/* AQA Board */}
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 bg-primary-container text-on-primary-container rounded-xl flex items-center justify-center">
                  <span className="material-symbols-outlined">science</span>
                </div>
                <h3 className="font-headline-md text-headline-md text-charcoal font-bold">AQA A Level Chemistry 2026</h3>
              </div>
              <div className="space-y-6">
                {/* Paper 1 */}
                <div className="bg-soft-gray rounded-2xl p-6 border border-outline-variant hover:border-royal-purple transition-colors">
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="font-headline-md text-headline-md font-bold">Paper 1</h4>
                    <span className="font-label-sm text-label-sm px-3 py-1 bg-lime-green text-charcoal rounded-full font-bold">Available</span>
                  </div>
                  <div className="grid gap-3">
                    <button className="flex items-center justify-between p-3 bg-white rounded-lg hover:bg-primary-fixed group transition-all cursor-pointer">
                      <span className="flex items-center gap-3 font-medium"><span className="material-symbols-outlined text-royal-purple">description</span> Predicted Paper</span>
                      <span className="material-symbols-outlined text-royal-purple group-hover:translate-x-1 transition-transform">download</span>
                    </button>
                    <button className="flex items-center justify-between p-3 bg-white rounded-lg hover:bg-primary-fixed group transition-all cursor-pointer">
                      <span className="flex items-center gap-3 font-medium"><span className="material-symbols-outlined text-royal-purple">fact_check</span> Mark Scheme</span>
                      <span className="material-symbols-outlined text-royal-purple group-hover:translate-x-1 transition-transform">download</span>
                    </button>
                    <div className="flex items-center justify-between p-3 bg-surface-container rounded-lg opacity-70">
                      <span className="flex items-center gap-3"><span className="material-symbols-outlined">psychology</span> Model Answers</span>
                      <span className="font-label-sm text-label-sm text-primary font-bold">Coming Soon</span>
                    </div>
                  </div>
                </div>
                {/* Paper 2 */}
                <div className="bg-soft-gray rounded-2xl p-6 border border-outline-variant opacity-80">
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="font-headline-md text-headline-md font-bold">Paper 2</h4>
                    <span className="font-label-sm text-label-sm px-3 py-1 bg-surface-container text-on-surface-variant rounded-full font-bold">Coming Soon</span>
                  </div>
                  <p className="font-body-md text-body-md italic text-on-surface-variant">This paper is currently in peer review and will be released shortly.</p>
                </div>
              </div>
            </div>

            {/* OCR Board */}
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 bg-secondary-container text-on-secondary-container rounded-xl flex items-center justify-center">
                  <span className="material-symbols-outlined">experiment</span>
                </div>
                <h3 className="font-headline-md text-headline-md text-charcoal font-bold">OCR (A) A Level Chemistry 2026</h3>
              </div>
              <div className="space-y-6">
                {/* Paper 1 */}
                <div className="bg-soft-gray rounded-2xl p-6 border border-outline-variant hover:border-royal-purple transition-colors">
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="font-headline-md text-headline-md font-bold">Paper 1</h4>
                    <span className="font-label-sm text-label-sm px-3 py-1 bg-lime-green text-charcoal rounded-full font-bold">Available</span>
                  </div>
                  <div className="grid gap-3">
                    <button className="flex items-center justify-between p-3 bg-white rounded-lg hover:bg-primary-fixed group transition-all cursor-pointer">
                      <span className="flex items-center gap-3 font-medium"><span className="material-symbols-outlined text-royal-purple">description</span> Predicted Paper</span>
                      <span className="material-symbols-outlined text-royal-purple group-hover:translate-x-1 transition-transform">download</span>
                    </button>
                    <button className="flex items-center justify-between p-3 bg-white rounded-lg hover:bg-primary-fixed group transition-all cursor-pointer">
                      <span className="flex items-center gap-3 font-medium"><span className="material-symbols-outlined text-royal-purple">fact_check</span> Mark Scheme</span>
                      <span className="material-symbols-outlined text-royal-purple group-hover:translate-x-1 transition-transform">download</span>
                    </button>
                    <button className="flex items-center justify-between p-3 bg-white rounded-lg hover:bg-primary-fixed group transition-all cursor-pointer">
                      <span className="flex items-center gap-3 font-medium"><span className="material-symbols-outlined text-royal-purple">psychology</span> Model Answers</span>
                      <span className="material-symbols-outlined text-royal-purple group-hover:translate-x-1 transition-transform">download</span>
                    </button>
                  </div>
                </div>
                {/* Paper 2 */}
                <div className="bg-soft-gray rounded-2xl p-6 border border-outline-variant hover:border-royal-purple transition-colors">
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="font-headline-md text-headline-md font-bold">Paper 2</h4>
                    <span className="font-label-sm text-label-sm px-3 py-1 bg-lime-green text-charcoal rounded-full font-bold">Available</span>
                  </div>
                  <div className="grid gap-3">
                    <button className="flex items-center justify-between p-3 bg-white rounded-lg hover:bg-primary-fixed group transition-all cursor-pointer">
                      <span className="flex items-center gap-3 font-medium"><span className="material-symbols-outlined text-royal-purple">description</span> Predicted Paper</span>
                      <span className="material-symbols-outlined text-royal-purple group-hover:translate-x-1 transition-transform">download</span>
                    </button>
                    <button className="flex items-center justify-between p-3 bg-white rounded-lg hover:bg-primary-fixed group transition-all cursor-pointer">
                      <span className="flex items-center gap-3 font-medium"><span className="material-symbols-outlined text-royal-purple">fact_check</span> Mark Scheme</span>
                      <span className="material-symbols-outlined text-royal-purple group-hover:translate-x-1 transition-transform">download</span>
                    </button>
                    <button className="flex items-center justify-between p-3 bg-white rounded-lg hover:bg-primary-fixed group transition-all cursor-pointer">
                      <span className="flex items-center gap-3 font-medium"><span className="material-symbols-outlined text-royal-purple">psychology</span> Model Answers</span>
                      <span className="material-symbols-outlined text-royal-purple group-hover:translate-x-1 transition-transform">download</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expert Contributor Section */}
      <section className="py-24 bg-soft-gray">
        <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="text-center mb-16 space-y-4">
            <h2 className="font-headline-lg text-headline-lg text-charcoal font-bold">Meet the Authors</h2>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto">
              Our predictions are developed by academic leaders with a deep understanding of Chemistry assessment.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Dan C */}
            <div className="bg-white rounded-3xl p-8 shadow-[0px_4px_20px_rgba(0,0,0,0.05)] flex flex-col md:flex-row gap-8 items-start hover:translate-y-[-4px] transition-transform">
              <div className="w-32 h-32 rounded-2xl overflow-hidden shrink-0 border-4 border-primary-fixed">
                <img
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAlzp5P_GvvPT6NECUnVr6o8zy6PB-qSKj4Efm-JxUhUssSXop8XvOytGCHXxhD39zsme4r4IaPGf6NSzwzDFvcf2drkBmH0DiGYfKyKQzEsJc1pEkyIlW6BDgl5F5GN0UR-MoJvghdACw41kTZx7zC9Mck3B6Sjf46kj_NE0nL7YCAHyj_R8HlejWq-w5QeaD-Ulxjxw9tjgjkLlW9UzJsqB9MI5xQ3D5mgnkczUi_L_SZO0LeSeKX2A"
                  alt="Dan C."
                />
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="font-headline-md text-headline-md text-charcoal font-bold">Dan C.</h3>
                  <span className="px-3 py-1 bg-royal-purple/10 text-royal-purple rounded-lg font-label-sm text-label-sm font-bold">PhD, Transition Metal Chemistry</span>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Dan graduated from Cardiff University with a first class MChem before completing his PhD. A science teacher with 5 years at Bristol University collaborating on Thinking Science resources.
                </p>
                <div className="flex flex-wrap gap-3 pt-2">
                  <button onClick={() => onNavigate('trial')} className="px-6 py-2 bg-royal-purple text-on-primary rounded-lg font-label-md text-label-md font-bold hover:opacity-90 active:scale-95 transition-all cursor-pointer">Book Tuition</button>
                </div>
              </div>
            </div>

            {/* Will A */}
            <div className="bg-white rounded-3xl p-8 shadow-[0px_4px_20px_rgba(0,0,0,0.05)] flex flex-col md:flex-row gap-8 items-start hover:translate-y-[-4px] transition-transform">
              <div className="w-32 h-32 rounded-2xl overflow-hidden shrink-0 border-4 border-secondary-container">
                <img
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBndGzTg_39HzmFD7WgnQy76F4J8ID6qCEo_KSKWWra0HE_chKJ7BqO2mELfhfRKoIe7CNwVXFCivBdbZsS8MdwM22wdqPDTECe29T7pvGYN0oAUPbMFYXC4RyYn2m5x4JNdnQ6_Jby6NHXvQPNhwCvtr033Yr0xjiarIkOp9JTMjb7xvMNB8Q-bK5I4IwdvFFNuIMvnd3fkIXDZhMN-IVhErrzz0S62Q3mbIdXR3f-S8KVjQgb0pPLXA"
                  alt="Will A."
                />
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="font-headline-md text-headline-md text-charcoal font-bold">Will A.</h3>
                  <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-lg font-label-sm text-label-sm font-bold">Durham MSc, Chemistry</span>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  An enthusiastic tutor with thousands of hours of experience. Will focuses on thorough understanding of fundamental principles and rigorous exam technique practice.
                </p>
                <div className="flex flex-wrap gap-3 pt-2">
                  <button onClick={() => onNavigate('trial')} className="px-6 py-2 bg-royal-purple text-on-primary rounded-lg font-label-md text-label-md font-bold hover:opacity-90 active:scale-95 transition-all cursor-pointer">Book Tuition</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="space-y-4">
              <h2 className="font-headline-lg text-headline-lg text-charcoal font-bold">Frequently Asked Questions</h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Haven't found what you're looking for? Our friendly team is here to help you navigate your 2026 revision journey.
              </p>
            </div>
            <div className="lg:col-span-2 space-y-4">
              <details className="group bg-soft-gray rounded-2xl p-6 transition-all duration-300 open:bg-white open:ring-1 open:ring-royal-purple" open>
                <summary className="flex justify-between items-center font-label-md text-label-md font-bold cursor-pointer list-none text-charcoal">
                  What topics are covered in the A Level Chemistry predicted papers?
                  <LigatureIcon name="expand_more" className="group-open:rotate-180 transition-transform" />
                </summary>
                <div className="mt-4 font-body-md text-body-md text-on-surface-variant border-t border-outline-variant pt-4">
                  Our A Level Chemistry predicted papers cover key organic, inorganic, and physical chemistry topics from the specification. Specific topics are selected based on detailed analysis of past exam papers, examiner reports, and historical trends in specification coverage.
                </div>
              </details>
              <details className="group bg-soft-gray rounded-2xl p-6 transition-all duration-300 open:bg-white open:ring-1 open:ring-royal-purple">
                <summary className="flex justify-between items-center font-label-md text-label-md font-bold cursor-pointer list-none text-charcoal">
                  Which exam boards are covered in the predicted papers?
                  <LigatureIcon name="expand_more" className="group-open:rotate-180 transition-transform" />
                </summary>
                <div className="mt-4 font-body-md text-body-md text-on-surface-variant border-t border-outline-variant pt-4">
                  We currently offer comprehensive coverage for AQA and OCR (A). These are our most popular specifications, and we ensure every paper is designed by a teacher experienced in that specific board's style.
                </div>
              </details>
              <details className="group bg-soft-gray rounded-2xl p-6 transition-all duration-300 open:bg-white open:ring-1 open:ring-royal-purple">
                <summary className="flex justify-between items-center font-label-md text-label-md font-bold cursor-pointer list-none text-charcoal">
                  Do the predicted papers allow the use of a data sheet?
                  <LigatureIcon name="expand_more" className="group-open:rotate-180 transition-transform" />
                </summary>
                <div className="mt-4 font-body-md text-body-md text-on-surface-variant border-t border-outline-variant pt-4">
                  Yes, just like in the real 2026 A Level Chemistry exams, you should use the official data sheet provided by your exam board when completing our predicted papers to ensure realistic practice.
                </div>
              </details>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
