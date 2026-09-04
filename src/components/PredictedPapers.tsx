'use client';

import React, { useState } from 'react';
import LigatureIcon from './LigatureIcon';
import { ActivePage } from '@/lib/types';

interface PredictedPapersProps {
  onNavigate: (page: ActivePage, subjectTitle?: string) => void;
}

export default function PredictedPapers({ onNavigate }: PredictedPapersProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (id: number) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  const scrollToResources = () => {
    const el = document.getElementById('hub-content');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-surface text-on-surface font-body-md overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-surface">
        <div className="max-w-[1280px] mx-auto px-4 md:px-margin-desktop grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="z-10">
            <span className="inline-block px-3 py-1 bg-secondary-container text-on-secondary-container font-label-md text-label-md rounded-full mb-6 font-bold">
              New for 2026 Series
            </span>
            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-royal-purple mb-4 font-bold">
              Predicted Papers Hub
            </h1>
            <p className="font-headline-md text-headline-md text-on-surface-variant mb-6 font-semibold">
              Free, expert-crafted predictions for GCSE and A-Level exams.
            </p>
            <p className="text-on-surface-variant text-body-lg mb-8 max-w-xl">
              Our 2026 GCSE and A-Level predicted papers cover a wide range of subjects and exam boards, providing students with realistic exam-style practice, full mark schemes, and model solutions.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={scrollToResources}
                className="bg-royal-purple text-on-primary px-8 py-4 rounded-xl font-headline-md shadow-lg hover:shadow-xl transition-all flex items-center gap-2 cursor-pointer font-bold"
              >
                Explore Subject Hubs <span className="material-symbols-outlined">arrow_downward</span>
              </button>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute -inset-4 bg-royal-purple/5 rounded-3xl blur-2xl group-hover:bg-royal-purple/10 transition-colors"></div>
            <img
              className="relative z-10 w-full h-[450px] object-cover rounded-3xl shadow-xl"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC0qmhbQnlrgf-F3xIQIGu03ktOwLjaGIuyvOZDxYJ3IN6v29IP3wQXR7j2NPQsFCFBX7QvfVIVpcGCniOakvx8jmPnYUac2F7mqukpUXK4ISVDCuxGEbBna1T9I7hkdJEH1TiTWLrS0K_N7cxq6SVn8M2vFGPXE2Tenikp4ny2vAh7fFcH3_UcBuXCnDWftmlZEof4KgXu3iCUeMavvrgUXCvPL1Dxg5VkYd9TDFOlJqqlge_ft_2dbA"
              alt="Student studying with predicted papers"
            />
            <div className="absolute -bottom-6 -left-6 z-20 bg-white p-4 rounded-xl shadow-lg border border-surface-variant flex items-center gap-3">
              <div className="w-10 h-10 bg-lime-green rounded-full flex items-center justify-center">
                <span className="material-symbols-outlined text-on-secondary-container" style={{ fontVariationSettings: "'FILL' 1" }}>
                  verified
                </span>
              </div>
              <div>
                <p className="font-label-md text-label-sm text-on-surface-variant uppercase tracking-wider font-bold">Exam Boards</p>
                <p className="font-headline-md text-label-md font-bold">AQA, Edexcel & OCR</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Navigation Hub Content */}
      <section className="py-20 bg-soft-gray" id="hub-content">
        <div className="max-w-[1280px] mx-auto px-4 md:px-margin-desktop space-y-20">
          
          {/* SECTION 1: GCSE Predicted Papers */}
          <div>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-royal-purple/10 text-royal-purple rounded-full font-label-sm text-label-sm font-bold mb-3">
                  <span className="material-symbols-outlined text-[16px]">school</span>
                  GCSE QUALIFICATIONS
                </div>
                <h2 className="font-display-lg text-display-lg-mobile md:text-headline-lg text-charcoal font-bold">
                  GCSE Predicted Papers
                </h2>
              </div>
              <p className="text-on-surface-variant max-w-md">
                Select a GCSE subject below to access 2026 exam-board specific predicted paper sets.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* GCSE Maths */}
              <div
                onClick={() => onNavigate('gcse-maths-predicted')}
                className="bg-white p-8 rounded-2xl shadow-[0px_4px_20px_rgba(0,0,0,0.05)] hover:shadow-xl transition-all border border-transparent hover:border-royal-purple/30 group cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="w-14 h-14 bg-royal-purple/10 rounded-xl flex items-center justify-center mb-6 text-royal-purple group-hover:bg-royal-purple group-hover:text-white transition-colors">
                    <span className="material-symbols-outlined text-4xl">functions</span>
                  </div>
                  <h3 className="font-headline-md text-headline-md text-charcoal mb-3 font-bold group-hover:text-royal-purple transition-colors">
                    GCSE Maths
                  </h3>
                  <p className="text-on-surface-variant mb-6 text-body-md">
                    Edexcel (1MA1) and AQA (8300) predicted sets for Non-Calculator & Calculator papers.
                  </p>
                </div>
                <div className="pt-4 border-t border-outline-variant/30 flex items-center justify-between text-royal-purple font-label-md font-bold">
                  <span>Explore GCSE Maths</span>
                  <LigatureIcon name="arrow_forward" className="group-hover:translate-x-2 transition-transform" />
                </div>
              </div>

              {/* GCSE Physics */}
              <div
                onClick={() => onNavigate('gcse-physics-predicted')}
                className="bg-white p-8 rounded-2xl shadow-[0px_4px_20px_rgba(0,0,0,0.05)] hover:shadow-xl transition-all border border-transparent hover:border-royal-purple/30 group cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="w-14 h-14 bg-royal-purple/10 rounded-xl flex items-center justify-center mb-6 text-royal-purple group-hover:bg-royal-purple group-hover:text-white transition-colors">
                    <span className="material-symbols-outlined text-4xl">bolt</span>
                  </div>
                  <h3 className="font-headline-md text-headline-md text-charcoal mb-3 font-bold group-hover:text-royal-purple transition-colors">
                    GCSE Physics
                  </h3>
                  <p className="text-on-surface-variant mb-6 text-body-md">
                    Predicted papers for AQA (8463) and Edexcel (1PH0) Higher Tier with equation sheets.
                  </p>
                </div>
                <div className="pt-4 border-t border-outline-variant/30 flex items-center justify-between text-royal-purple font-label-md font-bold">
                  <span>Explore GCSE Physics</span>
                  <LigatureIcon name="arrow_forward" className="group-hover:translate-x-2 transition-transform" />
                </div>
              </div>

              {/* GCSE Chemistry */}
              <div
                onClick={() => onNavigate('gcse-chemistry-predicted')}
                className="bg-white p-8 rounded-2xl shadow-[0px_4px_20px_rgba(0,0,0,0.05)] hover:shadow-xl transition-all border border-transparent hover:border-royal-purple/30 group cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="w-14 h-14 bg-royal-purple/10 rounded-xl flex items-center justify-center mb-6 text-royal-purple group-hover:bg-royal-purple group-hover:text-white transition-colors">
                    <span className="material-symbols-outlined text-4xl">science</span>
                  </div>
                  <h3 className="font-headline-md text-headline-md text-charcoal mb-3 font-bold group-hover:text-royal-purple transition-colors">
                    GCSE Chemistry
                  </h3>
                  <p className="text-on-surface-variant mb-6 text-body-md">
                    Comprehensive predictions covering Paper 1 and Paper 2 for AQA and Edexcel.
                  </p>
                </div>
                <div className="pt-4 border-t border-outline-variant/30 flex items-center justify-between text-royal-purple font-label-md font-bold">
                  <span>Explore GCSE Chemistry</span>
                  <LigatureIcon name="arrow_forward" className="group-hover:translate-x-2 transition-transform" />
                </div>
              </div>

              {/* GCSE Biology */}
              <div
                onClick={() => onNavigate('gcse-biology-predicted')}
                className="bg-white p-8 rounded-2xl shadow-[0px_4px_20px_rgba(0,0,0,0.05)] hover:shadow-xl transition-all border border-transparent hover:border-royal-purple/30 group cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="w-14 h-14 bg-royal-purple/10 rounded-xl flex items-center justify-center mb-6 text-royal-purple group-hover:bg-royal-purple group-hover:text-white transition-colors">
                    <span className="material-symbols-outlined text-4xl">biotech</span>
                  </div>
                  <h3 className="font-headline-md text-headline-md text-charcoal mb-3 font-bold group-hover:text-royal-purple transition-colors">
                    GCSE Biology
                  </h3>
                  <p className="text-on-surface-variant mb-6 text-body-md">
                    2026 predictions for Cell Biology, Genetics, Ecology, and Practical Skills.
                  </p>
                </div>
                <div className="pt-4 border-t border-outline-variant/30 flex items-center justify-between text-royal-purple font-label-md font-bold">
                  <span>Explore GCSE Biology</span>
                  <LigatureIcon name="arrow_forward" className="group-hover:translate-x-2 transition-transform" />
                </div>
              </div>

              {/* GCSE Combined Science */}
              <div
                onClick={() => onNavigate('gcse-combined-science-predicted')}
                className="bg-white p-8 rounded-2xl shadow-[0px_4px_20px_rgba(0,0,0,0.05)] hover:shadow-xl transition-all border border-transparent hover:border-royal-purple/30 group cursor-pointer flex flex-col justify-between sm:col-span-2 lg:col-span-1"
              >
                <div>
                  <div className="w-14 h-14 bg-royal-purple/10 rounded-xl flex items-center justify-center mb-6 text-royal-purple group-hover:bg-royal-purple group-hover:text-white transition-colors">
                    <span className="material-symbols-outlined text-4xl">dashboard_customize</span>
                  </div>
                  <h3 className="font-headline-md text-headline-md text-charcoal mb-3 font-bold group-hover:text-royal-purple transition-colors">
                    GCSE Combined Science
                  </h3>
                  <p className="text-on-surface-variant mb-6 text-body-md">
                    AQA Trilogy (8464) and Edexcel (1SC0) 6-paper double award predicted sets.
                  </p>
                </div>
                <div className="pt-4 border-t border-outline-variant/30 flex items-center justify-between text-royal-purple font-label-md font-bold">
                  <span>Explore Combined Science</span>
                  <LigatureIcon name="arrow_forward" className="group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </div>
          </div>

          {/* SECTION 2: A-Level Predicted Papers */}
          <div>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4 border-t border-outline-variant/40 pt-16">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-lime-green/20 text-secondary rounded-full font-label-sm text-label-sm font-bold mb-3">
                  <span className="material-symbols-outlined text-[16px]">workspace_premium</span>
                  A-LEVEL QUALIFICATIONS
                </div>
                <h2 className="font-display-lg text-display-lg-mobile md:text-headline-lg text-charcoal font-bold">
                  A-Level Predicted Papers
                </h2>
              </div>
              <p className="text-on-surface-variant max-w-md">
                Select an A-Level subject below to access 2026 advanced predictions and model answers.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* A-Level Maths */}
              <div
                onClick={() => onNavigate('alevel-maths-predicted')}
                className="bg-white p-8 rounded-2xl shadow-[0px_4px_20px_rgba(0,0,0,0.05)] hover:shadow-xl transition-all border border-transparent hover:border-royal-purple/30 group cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="w-14 h-14 bg-royal-purple/10 rounded-xl flex items-center justify-center mb-6 text-royal-purple group-hover:bg-royal-purple group-hover:text-white transition-colors">
                    <span className="material-symbols-outlined text-4xl">calculate</span>
                  </div>
                  <h3 className="font-headline-md text-headline-md text-charcoal mb-3 font-bold group-hover:text-royal-purple transition-colors">
                    A-Level Maths
                  </h3>
                  <p className="text-on-surface-variant mb-6 text-body-md">
                    Edexcel (9MA0) & AQA (7357) sets for Pure Maths, Mechanics and Statistics.
                  </p>
                </div>
                <div className="pt-4 border-t border-outline-variant/30 flex items-center justify-between text-royal-purple font-label-md font-bold">
                  <span>View A-Level Maths</span>
                  <LigatureIcon name="arrow_forward" className="group-hover:translate-x-2 transition-transform" />
                </div>
              </div>

              {/* A-Level Physics */}
              <div
                onClick={() => onNavigate('alevel-physics-predicted')}
                className="bg-white p-8 rounded-2xl shadow-[0px_4px_20px_rgba(0,0,0,0.05)] hover:shadow-xl transition-all border border-transparent hover:border-royal-purple/30 group cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="w-14 h-14 bg-royal-purple/10 rounded-xl flex items-center justify-center mb-6 text-royal-purple group-hover:bg-royal-purple group-hover:text-white transition-colors">
                    <span className="material-symbols-outlined text-4xl">electric_bolt</span>
                  </div>
                  <h3 className="font-headline-md text-headline-md text-charcoal mb-3 font-bold group-hover:text-royal-purple transition-colors">
                    A-Level Physics
                  </h3>
                  <p className="text-on-surface-variant mb-6 text-body-md">
                    AQA (7408) & OCR A (H556) predicted papers with detailed mark schemes.
                  </p>
                </div>
                <div className="pt-4 border-t border-outline-variant/30 flex items-center justify-between text-royal-purple font-label-md font-bold">
                  <span>View A-Level Physics</span>
                  <LigatureIcon name="arrow_forward" className="group-hover:translate-x-2 transition-transform" />
                </div>
              </div>

              {/* A-Level Chemistry */}
              <div
                onClick={() => onNavigate('alevel-chemistry-predicted')}
                className="bg-white p-8 rounded-2xl shadow-[0px_4px_20px_rgba(0,0,0,0.05)] hover:shadow-xl transition-all border border-transparent hover:border-royal-purple/30 group cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="w-14 h-14 bg-royal-purple/10 rounded-xl flex items-center justify-center mb-6 text-royal-purple group-hover:bg-royal-purple group-hover:text-white transition-colors">
                    <span className="material-symbols-outlined text-4xl">experiment</span>
                  </div>
                  <h3 className="font-headline-md text-headline-md text-charcoal mb-3 font-bold group-hover:text-royal-purple transition-colors">
                    A-Level Chemistry
                  </h3>
                  <p className="text-on-surface-variant mb-6 text-body-md">
                    AQA & OCR A Organic, Inorganic, and Physical Chemistry 2026 predictions.
                  </p>
                </div>
                <div className="pt-4 border-t border-outline-variant/30 flex items-center justify-between text-royal-purple font-label-md font-bold">
                  <span>View A-Level Chemistry</span>
                  <LigatureIcon name="arrow_forward" className="group-hover:translate-x-2 transition-transform" />
                </div>
              </div>

              {/* A-Level Biology */}
              <div
                onClick={() => onNavigate('alevel-biology-predicted')}
                className="bg-white p-8 rounded-2xl shadow-[0px_4px_20px_rgba(0,0,0,0.05)] hover:shadow-xl transition-all border border-transparent hover:border-royal-purple/30 group cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="w-14 h-14 bg-royal-purple/10 rounded-xl flex items-center justify-center mb-6 text-royal-purple group-hover:bg-royal-purple group-hover:text-white transition-colors">
                    <span className="material-symbols-outlined text-4xl">psychology</span>
                  </div>
                  <h3 className="font-headline-md text-headline-md text-charcoal mb-3 font-bold group-hover:text-royal-purple transition-colors">
                    A-Level Biology
                  </h3>
                  <p className="text-on-surface-variant mb-6 text-body-md">
                    AQA & OCR (A) predictions covering biological processes, diversity, and data.
                  </p>
                </div>
                <div className="pt-4 border-t border-outline-variant/30 flex items-center justify-between text-royal-purple font-label-md font-bold">
                  <span>View A-Level Biology</span>
                  <LigatureIcon name="arrow_forward" className="group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-headline-lg text-headline-lg text-center text-charcoal mb-12 font-bold">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {[
              {
                id: 1,
                q: 'What are predicted papers?',
                a: 'Predicted papers are exam-style practice papers designed by experienced educators and examiners. They are created using detailed analysis of past exam papers, examiner reports, and historical trends in specification coverage to predict the types of questions and topics that may appear on upcoming exams.'
              },
              {
                id: 2,
                q: 'Who creates the predicted papers?',
                a: 'Our 2026 GCSE and A Level predicted papers are written by subject experts, including experienced teachers and senior examiners who thoroughly analyze exam board specifications.'
              },
              {
                id: 3,
                q: 'Are full mark schemes provided?',
                a: 'Yes! Every predicted paper set includes comprehensive mark schemes and model solutions to help you understand how marks are awarded.'
              }
            ].map((faq) => (
              <div key={faq.id} className="bg-soft-gray rounded-2xl shadow-sm overflow-hidden border border-outline-variant/30">
                <button
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-surface-container transition-all cursor-pointer font-bold"
                  onClick={() => toggleFaq(faq.id)}
                >
                  <span className="font-headline-md text-label-md md:text-headline-md text-charcoal">{faq.q}</span>
                  <LigatureIcon name="expand_more" className={`transition-transform ${openFaq === faq.id ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === faq.id && (
                  <div className="p-6 pt-0 text-on-surface-variant border-t border-outline-variant/20 font-body-md">
                    {faq.a}
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
