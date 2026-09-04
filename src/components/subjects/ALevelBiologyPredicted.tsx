'use client';

import React, { useState } from 'react';
import LigatureIcon from '../LigatureIcon';
import { ActivePage } from '@/lib/types';

interface ALevelBiologyPredictedProps {
  onNavigate: (page: ActivePage, subjectTitle?: string) => void;
}

export default function ALevelBiologyPredicted({ onNavigate }: ALevelBiologyPredictedProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="bg-background text-on-background font-body-md overflow-x-hidden">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#f3f4f6] to-white py-20 px-4 md:px-20">
        <div className="max-w-max-width mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary-fixed text-on-primary-fixed-variant rounded-full font-label-sm uppercase tracking-wider">
              <span className="material-symbols-outlined text-[16px]">verified</span>
              2026 Predictions
            </div>
            <h1 className="font-display-lg text-display-lg text-charcoal leading-tight">
              2026 Biology A Level <span className="text-royal-purple">Predicted Papers</span>
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
              Refine your exam technique with expert-crafted papers for AQA and OCR (A). Our predictions help Year 13 students bridge the gap between revision and exam performance.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                className="bg-royal-purple text-white px-8 py-4 rounded-xl font-headline-md text-[18px] shadow-lg hover:shadow-xl transition-shadow flex items-center gap-2 cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.getElementById('papers');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                href="#papers"
              >
                View Papers <span className="material-symbols-outlined">arrow_downward</span>
              </a>
              <div className="flex items-center gap-2 text-on-surface-variant">
                <span className="material-symbols-outlined text-lime-green" style={{ fontVariationSettings: "'FILL' 1" }}>
                  check_circle
                </span>
                <span className="font-label-md">Used by 50,000+ Students</span>
              </div>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute -inset-4 bg-royal-purple/5 rounded-3xl blur-2xl group-hover:bg-royal-purple/10 transition-colors"></div>
            <img
              alt="A student focused on studying Biology on her laptop with detailed biological diagrams visible on screen."
              className="relative rounded-3xl shadow-2xl w-full object-cover aspect-[4/3]"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQ-wUOyGxHGbzZBLdX_jJmHr_WfCPdwb3wOkTyuOrls_cnhsR9TPxxNl45i2y1U4Par_9eAcg1yYv8VxDJPtk53RJlE7j-g4qvkIMxz4ci55ABQ1r8Cbddmw-8qFaauQqUNpA7o5DocCujro0fJVuan3x7s-splMEsSFVBu3qupRiYIhzNFQyPIbi7JBFuY104z95xDblvgOymZBTvaM9DXpCCy1sikn4qOqzZoJCWlOSN7wUkapaN6g"
            />
            <div className="absolute -bottom-6 -left-6 bg-white/70 backdrop-blur-md border border-white/20 p-6 rounded-2xl shadow-xl flex items-center gap-4">
              <div className="w-12 h-12 bg-lime-green rounded-full flex items-center justify-center text-on-secondary">
                <span className="material-symbols-outlined">analytics</span>
              </div>
              <div>
                <div className="font-headline-md text-headline-md text-royal-purple leading-none">94%</div>
                <div className="font-label-sm text-on-surface-variant">Accuracy Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Predicted Papers Section */}
      <section className="py-24 px-4 md:px-20 bg-white" id="papers">
        <div className="max-w-max-width mx-auto">
          <div className="mb-16 text-center max-w-2xl mx-auto">
            <h2 className="font-headline-lg text-headline-lg text-charcoal mb-4">Predicted Papers by Exam Board</h2>
            <p className="text-on-surface-variant">Expertly modeled on real AQA and OCR specifications. Every paper includes a full mark scheme and model answers.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* AQA Section */}
            <div className="space-y-8">
              <div className="flex items-center gap-4 border-b border-surface-container-highest pb-4">
                <div className="w-12 h-12 bg-primary-fixed rounded-xl flex items-center justify-center text-royal-purple">
                  <span className="font-bold">AQA</span>
                </div>
                <h3 className="font-headline-md text-headline-md">AQA A Level Biology 2026</h3>
              </div>
              <div className="grid grid-cols-1 gap-4">
                {/* Paper 1 */}
                <div className="bg-soft-gray p-6 rounded-2xl border border-transparent hover:border-royal-purple/20 transition-all group shadow-[0px_4px_20px_rgba(0,0,0,0.05)]">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h4 className="font-headline-md text-[20px] mb-1">Paper 1: Biological Processes</h4>
                      <p className="text-label-sm text-on-surface-variant">Relevant Topics: 1-4 & Practical Skills</p>
                    </div>
                    <span className="px-2 py-1 bg-lime-green/20 text-secondary text-[10px] rounded font-bold uppercase">New for 2026</span>
                  </div>
                  <div className="flex flex-col gap-3">
                    <button className="flex items-center justify-between p-3 bg-white rounded-lg border border-outline-variant hover:border-royal-purple transition-colors cursor-pointer">
                      <span className="flex items-center gap-2 font-label-md text-on-surface"><span className="material-symbols-outlined text-royal-purple">description</span> Predicted Paper</span>
                      <span className="material-symbols-outlined text-on-surface-variant">download</span>
                    </button>
                    <button className="flex items-center justify-between p-3 bg-white rounded-lg border border-outline-variant hover:border-royal-purple transition-colors cursor-pointer">
                      <span className="flex items-center gap-2 font-label-md text-on-surface"><span className="material-symbols-outlined text-royal-purple">fact_check</span> Mark Scheme</span>
                      <span className="material-symbols-outlined text-on-surface-variant">download</span>
                    </button>
                    <button className="flex items-center justify-between p-3 bg-white rounded-lg border border-outline-variant hover:border-royal-purple transition-colors cursor-pointer">
                      <span className="flex items-center gap-2 font-label-md text-on-surface"><span className="material-symbols-outlined text-royal-purple">emoji_objects</span> Model Answers</span>
                      <span className="material-symbols-outlined text-on-surface-variant">download</span>
                    </button>
                  </div>
                </div>
                {/* Paper 2 */}
                <div className="bg-soft-gray p-6 rounded-2xl border border-transparent hover:border-royal-purple/20 transition-all group shadow-[0px_4px_20px_rgba(0,0,0,0.05)]">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h4 className="font-headline-md text-[20px] mb-1">Paper 2: Genetics & Evolution</h4>
                      <p className="text-label-sm text-on-surface-variant">Relevant Topics: 5-8 & Practical Skills</p>
                    </div>
                    <span className="px-2 py-1 bg-lime-green/20 text-secondary text-[10px] rounded font-bold uppercase">New for 2026</span>
                  </div>
                  <div className="flex flex-col gap-3">
                    <button className="flex items-center justify-between p-3 bg-white rounded-lg border border-outline-variant hover:border-royal-purple transition-colors cursor-pointer">
                      <span className="flex items-center gap-2 font-label-md text-on-surface"><span className="material-symbols-outlined text-royal-purple">description</span> Predicted Paper</span>
                      <span className="material-symbols-outlined text-on-surface-variant">download</span>
                    </button>
                    <button className="flex items-center justify-between p-3 bg-white rounded-lg border border-outline-variant hover:border-royal-purple transition-colors cursor-pointer">
                      <span className="flex items-center gap-2 font-label-md text-on-surface"><span className="material-symbols-outlined text-royal-purple">fact_check</span> Mark Scheme</span>
                      <span className="material-symbols-outlined text-on-surface-variant">download</span>
                    </button>
                    <button className="flex items-center justify-between p-3 bg-white rounded-lg border border-outline-variant hover:border-royal-purple transition-colors cursor-pointer">
                      <span className="flex items-center gap-2 font-label-md text-on-surface"><span className="material-symbols-outlined text-royal-purple">emoji_objects</span> Model Answers</span>
                      <span className="material-symbols-outlined text-on-surface-variant">download</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* OCR Section */}
            <div className="space-y-8">
              <div className="flex items-center gap-4 border-b border-surface-container-highest pb-4">
                <div className="w-12 h-12 bg-tertiary-fixed rounded-xl flex items-center justify-center text-tertiary">
                  <span className="font-bold">OCR</span>
                </div>
                <h3 className="font-headline-md text-headline-md">OCR (A) A Level Biology 2026</h3>
              </div>
              <div className="grid grid-cols-1 gap-4">
                {/* Paper 1 */}
                <div className="bg-soft-gray p-6 rounded-2xl border border-transparent hover:border-royal-purple/20 transition-all group shadow-[0px_4px_20px_rgba(0,0,0,0.05)]">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h4 className="font-headline-md text-[20px] mb-1">Paper 1: Biological Processes</h4>
                      <p className="text-label-sm text-on-surface-variant">Modules 1, 2, 3 and 5</p>
                    </div>
                    <span className="px-2 py-1 bg-lime-green/20 text-secondary text-[10px] rounded font-bold uppercase">Optimized</span>
                  </div>
                  <div className="flex flex-col gap-3">
                    <button className="flex items-center justify-between p-3 bg-white rounded-lg border border-outline-variant hover:border-royal-purple transition-colors cursor-pointer">
                      <span className="flex items-center gap-2 font-label-md text-on-surface"><span className="material-symbols-outlined text-royal-purple">description</span> Predicted Paper</span>
                      <span className="material-symbols-outlined text-on-surface-variant">download</span>
                    </button>
                    <button className="flex items-center justify-between p-3 bg-white rounded-lg border border-outline-variant hover:border-royal-purple transition-colors cursor-pointer">
                      <span className="flex items-center gap-2 font-label-md text-on-surface"><span className="material-symbols-outlined text-royal-purple">fact_check</span> Mark Scheme</span>
                      <span className="material-symbols-outlined text-on-surface-variant">download</span>
                    </button>
                    <button className="flex items-center justify-between p-3 bg-white rounded-lg border border-outline-variant hover:border-royal-purple transition-colors cursor-pointer">
                      <span className="flex items-center gap-2 font-label-md text-on-surface"><span className="material-symbols-outlined text-royal-purple">emoji_objects</span> Model Answers</span>
                      <span className="material-symbols-outlined text-on-surface-variant">download</span>
                    </button>
                  </div>
                </div>
                {/* Paper 2 */}
                <div className="bg-soft-gray p-6 rounded-2xl border border-transparent hover:border-royal-purple/20 transition-all group shadow-[0px_4px_20px_rgba(0,0,0,0.05)]">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h4 className="font-headline-md text-[20px] mb-1">Paper 2: Biological Diversity</h4>
                      <p className="text-label-sm text-on-surface-variant">Modules 1, 2, 4 and 6</p>
                    </div>
                    <span className="px-2 py-1 bg-lime-green/20 text-secondary text-[10px] rounded font-bold uppercase">Optimized</span>
                  </div>
                  <div className="flex flex-col gap-3">
                    <button className="flex items-center justify-between p-3 bg-white rounded-lg border border-outline-variant hover:border-royal-purple transition-colors cursor-pointer">
                      <span className="flex items-center gap-2 font-label-md text-on-surface"><span className="material-symbols-outlined text-royal-purple">description</span> Predicted Paper</span>
                      <span className="material-symbols-outlined text-on-surface-variant">download</span>
                    </button>
                    <button className="flex items-center justify-between p-3 bg-white rounded-lg border border-outline-variant hover:border-royal-purple transition-colors cursor-pointer">
                      <span className="flex items-center gap-2 font-label-md text-on-surface"><span className="material-symbols-outlined text-royal-purple">fact_check</span> Mark Scheme</span>
                      <span className="material-symbols-outlined text-on-surface-variant">download</span>
                    </button>
                    <button className="flex items-center justify-between p-3 bg-white rounded-lg border border-outline-variant hover:border-royal-purple transition-colors cursor-pointer">
                      <span className="flex items-center gap-2 font-label-md text-on-surface"><span className="material-symbols-outlined text-royal-purple">emoji_objects</span> Model Answers</span>
                      <span className="material-symbols-outlined text-on-surface-variant">download</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Authors Section */}
      <section className="py-24 px-4 md:px-20 bg-soft-gray">
        <div className="max-w-max-width mx-auto">
          <div className="bg-white rounded-[32px] p-8 md:p-16 shadow-[0px_4px_20px_rgba(0,0,0,0.05)] flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-1/3 flex flex-col items-center text-center">
              <div className="relative w-48 h-48 mb-6">
                <div className="absolute inset-0 bg-royal-purple rounded-full scale-105 opacity-10"></div>
                <div
                  className="w-full h-full bg-cover bg-center rounded-full border-4 border-white shadow-xl relative z-10"
                  style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBtLUpp--s-LlrGvXQkqwLydpiHV9ti8mBEVRyqP0JC-0bGLAFCaaXbci0MQfBzRAEZrkGmrQPrQqBmHcBXSNoKuJRWeMxYoWtnKWC7o8UaceZh_g_a_06srif3vmgGvTD4tg8PFRC92MWPlKviBqUUfMqfcP0LkZx3EZNfGid9P8ESHZ03DysC6yKQVTvarYrr7zLuJe_dfhgDKQqzELl42peQ7mdJA6oJl4TzGQ9gmEr74KNN_i6kkQ')" }}
                ></div>
              </div>
              <h3 className="font-headline-lg text-headline-lg text-charcoal font-bold">Teresa B.</h3>
              <p className="text-royal-purple font-label-md mb-4">BSc, MSc, PGCE</p>
              <div className="flex gap-2">
                <span className="px-3 py-1 bg-primary-fixed rounded-full text-[12px] font-bold text-royal-purple">Expert Examiner</span>
              </div>
            </div>
            <div className="w-full md:w-2/3">
              <h4 className="font-headline-md text-headline-md mb-4 font-bold">Meet Your Expert Contributor</h4>
              <p className="text-on-surface-variant font-body-md mb-6 leading-relaxed">
                Teresa, also known as Tre, holds a BSc in Biomolecular Science, an MSc in Biomedical Basis of Disease, and a PGCE in Secondary Science. She's taught biology in various settings since 2007, including online classes and a top ten-rated sixth form college in the Midlands.
              </p>
              <p className="text-on-surface-variant font-body-md mb-8 leading-relaxed">
                As well as teaching, Teresa mentors other teachers in IT and works as an A Level Biology examiner for two different exam boards. Her insight into paper construction ensures these predictions aren't just guesses, but strategic teaching tools.
              </p>
              <div className="flex flex-wrap gap-4">
                <button onClick={() => onNavigate('trial')} className="bg-royal-purple text-white px-8 py-3 rounded-xl font-label-md font-bold cursor-pointer hover:bg-primary transition-all">Book Tuition with Tre</button>
                <button onClick={() => onNavigate('predicted-papers')} className="border border-royal-purple text-royal-purple px-8 py-3 rounded-xl font-label-md font-bold cursor-pointer hover:bg-royal-purple/5 transition-all">View Hub</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-4 md:px-20 bg-white">
        <div className="max-w-max-width mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-headline-lg text-headline-lg text-charcoal mb-4 font-bold">Frequently Asked Questions</h2>
            <p className="text-on-surface-variant">Everything you need to know about our predicted papers.</p>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                id: 0,
                q: 'Do the papers follow exact board specifications?',
                a: 'Yes, our A Level Biology predicted papers are written according to the latest AQA and OCR (A) specifications to ensure they are relevant and aligned with your exam board. They mirror the structure, mark allocation, and terminology of real exams.'
              },
              {
                id: 1,
                q: 'Do they include practical skills and data analysis?',
                a: 'Our predicted papers include questions that assess practical skills, data analysis, and the interpretation of experimental results, reflecting the types of questions you can expect in the 2026 A Level Biology exams.'
              },
              {
                id: 2,
                q: 'Are these suitable for Year 12 students?',
                a: 'While primarily designed for Year 13, Year 12 students can benefit from Paper 1 content as it typically covers the AS-level material studied in the first year of the course.'
              }
            ].map(item => (
              <div key={item.id} className="border border-surface-container-highest rounded-2xl overflow-hidden">
                <button
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-soft-gray transition-colors font-headline-md text-[18px] group cursor-pointer font-bold"
                  onClick={() => toggleFaq(item.id)}
                >
                  <span>{item.q}</span>
                  <LigatureIcon name="expand_more" className={`transition-transform duration-300 ${openFaq === item.id ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === item.id && (
                  <div className="bg-soft-gray p-6 text-on-surface-variant font-body-md border-t border-surface-container-highest">
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
