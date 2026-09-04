'use client';

import React, { useState } from 'react';
import LigatureIcon from '../LigatureIcon';
import { ActivePage } from '@/lib/types';

interface GcseMathsMockProps {
  onNavigate: (page: ActivePage, subjectTitle?: string) => void;
}

export default function GcseMathsMock({ onNavigate }: GcseMathsMockProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="bg-surface text-on-surface font-body-md overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative pt-16 pb-24 overflow-hidden">
        <div className="max-w-max-width mx-auto px-margin-desktop grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary font-label-sm text-label-sm font-bold">
              <span className="material-symbols-outlined text-[18px]">verified</span>
              <span>2026 Curriculum Ready</span>
            </div>
            <div className="space-y-4">
              <h1 className="font-display-lg text-display-lg text-charcoal leading-tight font-bold">
                GCSE Maths <span className="text-primary">Mock Papers</span>
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
                Boost your GCSE Maths revision with our free Edexcel Higher Tier mock papers. Professionally designed to mirror real exam formats, covering everything from algebra to advanced geometry.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => {
                  const el = document.getElementById('available-papers');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-8 py-4 bg-royal-purple text-white rounded-xl font-bold hover:bg-primary transition-all shadow-[0px_4px_20px_rgba(0,0,0,0.05)] cursor-pointer"
              >
                Download All Papers
              </button>
              <button
                onClick={() => onNavigate('mock-papers')}
                className="px-8 py-4 border-2 border-royal-purple text-royal-purple rounded-xl font-bold hover:bg-royal-purple/5 transition-all cursor-pointer"
              >
                Explore Mark Schemes
              </button>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="relative">
              <div className="absolute -inset-4 bg-lime-green/20 blur-2xl rounded-full"></div>
              <div className="relative rounded-[2.5rem] overflow-hidden border-8 border-white shadow-[0px_10px_30px_rgba(0,0,0,0.08)] transform rotate-2 hover:rotate-0 transition-transform duration-500">
                <img
                  alt="Student studying maths"
                  className="w-full aspect-square object-cover"
                  src="https://lh3.googleusercontent.com/aida/AP1WRLs9ZumxDWG5Os3hfjTPtey9wq9_w5ZNBjcd-CvAzJoNBHtwWlcbTrV_osAhG2fUwOolytOQKUmmoaoAJ-1acDKU_oLSEbg568RT3EtdXaCyocsVmnQszThPQPRw69lc0yKjpZVtY1wWSiZmfVugFF0tIdmyGXhtqEKQSnV45WTuaCWopRuMARLiDReDmxC5FpDx28JmLJMiGMgfhGh6xXIAvMjSKGtRV7CBvT7rCrO1H7lIoeASkif1vIE9"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview & Info Hub */}
      <section className="py-20 bg-white">
        <div className="max-w-max-width mx-auto px-margin-desktop">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 bg-soft-gray p-10 rounded-3xl border border-outline-variant">
              <h2 className="font-headline-lg text-headline-lg text-charcoal mb-8 font-bold">Mock Papers Overview</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <p className="text-on-surface-variant leading-relaxed">Covering Paper 1 (Non-Calculator), Paper 2, and Paper 3 (Calculator), these full-length mocks are professionally designed to follow the structure, style, and challenge of real exams.</p>
                  <p className="text-on-surface-variant leading-relaxed">Whether used as timed papers or for focused practice, they help students build the stamina and technique needed for top grades.</p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-lime-green mt-1">check_circle</span>
                    <span className="text-on-surface font-medium">Exam-style questions aligned with 2026 specs</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-lime-green mt-1">check_circle</span>
                    <span className="text-on-surface font-medium">Realistic practice under timed conditions</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-lime-green mt-1">check_circle</span>
                    <span className="text-on-surface font-medium">Full model solutions for every question</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-charcoal text-white p-10 rounded-3xl flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-lime-green/20 flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-lime-green">school</span>
                </div>
                <h3 className="font-headline-md text-headline-md mb-2 font-bold">Edexcel Specs</h3>
                <p className="text-white/60 mb-8">Optimized for 2025/2026 exam cycles.</p>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span className="text-white/60">Tiers:</span>
                  <span className="font-bold">Higher & Foundation</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span className="text-white/60">Boards:</span>
                  <span className="font-bold">Edexcel</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/60">Access:</span>
                  <span className="text-lime-green font-bold">UNLIMITED FREE</span>
                </div>
              </div>
              <button onClick={() => onNavigate('trial')} className="mt-10 w-full py-4 bg-white text-charcoal font-bold rounded-xl hover:bg-lime-green transition-colors cursor-pointer">Join Free Now</button>
            </div>
          </div>
        </div>
      </section>

      {/* Mock Papers Grid */}
      <section className="py-24 bg-surface space-y-20" id="available-papers">
        <div className="max-w-max-width mx-auto px-margin-desktop">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
            <div className="max-w-2xl">
              <h2 className="font-headline-lg text-headline-lg text-charcoal mb-4 font-bold">Available Mock Papers</h2>
              <p className="text-on-surface-variant">Download full-length papers and corresponding mark schemes for Edexcel Higher Tier (2021-2025 cycles).</p>
            </div>
          </div>
          <div className="space-y-20">
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="h-px flex-1 bg-outline-variant"></div>
                <h3 className="font-headline-md text-charcoal flex items-center gap-2 px-4 font-bold">
                  <span className="material-symbols-outlined text-primary">calendar_today</span> 2025 Series
                </h3>
                <div className="h-px flex-1 bg-outline-variant"></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Paper 1 */}
                <div className="bg-white p-8 rounded-3xl shadow-[0px_4px_20px_rgba(0,0,0,0.05)] border border-outline-variant hover:border-primary transition-all group">
                  <div className="flex justify-between items-start mb-6">
                    <span className="bg-primary-container/20 text-primary px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">Paper 1</span>
                    <span className="text-on-surface-variant font-label-sm">Non-Calculator</span>
                  </div>
                  <h4 className="font-headline-md text-charcoal mb-6 font-bold">GCSE Higher Mock Paper</h4>
                  <div className="space-y-4">
                    <a className="flex items-center justify-between p-4 bg-soft-gray rounded-xl group-hover:bg-primary/5 transition-colors" href="#">
                      <div className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-primary">description</span>
                        <span className="font-medium text-charcoal">Download Paper</span>
                      </div>
                      <span className="material-symbols-outlined text-[18px]">download</span>
                    </a>
                    <a className="flex items-center justify-between p-4 bg-soft-gray rounded-xl group-hover:bg-primary/5 transition-colors" href="#">
                      <div className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-secondary">fact_check</span>
                        <span className="font-medium text-charcoal">Mark Scheme</span>
                      </div>
                      <span className="material-symbols-outlined text-[18px]">visibility</span>
                    </a>
                  </div>
                </div>
                {/* Paper 2 */}
                <div className="bg-white p-8 rounded-3xl shadow-[0px_4px_20px_rgba(0,0,0,0.05)] border border-outline-variant hover:border-primary transition-all group">
                  <div className="flex justify-between items-start mb-6">
                    <span className="bg-primary-container/20 text-primary px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">Paper 2</span>
                    <span className="text-on-surface-variant font-label-sm">Calculator</span>
                  </div>
                  <h4 className="font-headline-md text-charcoal mb-6 font-bold">GCSE Higher Mock Paper</h4>
                  <div className="space-y-4">
                    <a className="flex items-center justify-between p-4 bg-soft-gray rounded-xl group-hover:bg-primary/5 transition-colors" href="#">
                      <div className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-primary">description</span>
                        <span className="font-medium text-charcoal">Download Paper</span>
                      </div>
                      <span className="material-symbols-outlined text-[18px]">download</span>
                    </a>
                    <a className="flex items-center justify-between p-4 bg-soft-gray rounded-xl group-hover:bg-primary/5 transition-colors" href="#">
                      <div className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-secondary">fact_check</span>
                        <span className="font-medium text-charcoal">Mark Scheme</span>
                      </div>
                      <span className="material-symbols-outlined text-[18px]">visibility</span>
                    </a>
                  </div>
                </div>
                {/* Paper 3 */}
                <div className="bg-white p-8 rounded-3xl shadow-[0px_4px_20px_rgba(0,0,0,0.05)] border border-outline-variant hover:border-primary transition-all group">
                  <div className="flex justify-between items-start mb-6">
                    <span className="bg-primary-container/20 text-primary px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">Paper 3</span>
                    <span className="text-on-surface-variant font-label-sm">Calculator</span>
                  </div>
                  <h4 className="font-headline-md text-charcoal mb-6 font-bold">GCSE Higher Mock Paper</h4>
                  <div className="space-y-4">
                    <a className="flex items-center justify-between p-4 bg-soft-gray rounded-xl group-hover:bg-primary/5 transition-colors" href="#">
                      <div className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-primary">description</span>
                        <span className="font-medium text-charcoal">Download Paper</span>
                      </div>
                      <span className="material-symbols-outlined text-[18px]">download</span>
                    </a>
                    <a className="flex items-center justify-between p-4 bg-soft-gray rounded-xl group-hover:bg-primary/5 transition-colors" href="#">
                      <div className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-secondary">fact_check</span>
                        <span className="font-medium text-charcoal">Mark Scheme</span>
                      </div>
                      <span className="material-symbols-outlined text-[18px]">visibility</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Archive Table Section */}
            <div className="bg-white rounded-[2.5rem] p-10 border border-outline-variant shadow-[0px_4px_20px_rgba(0,0,0,0.05)]">
              <div className="flex items-center justify-between mb-8">
                <h3 className="font-headline-md text-charcoal flex items-center gap-3 font-bold">
                  <span className="material-symbols-outlined text-on-surface-variant">history</span> 2022 Archive
                </h3>
                <span className="text-on-surface-variant font-label-sm">Previous Specification Papers</span>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b-2 border-soft-gray">
                      <th className="py-5 px-6 font-bold text-charcoal">Paper Title</th>
                      <th className="py-5 px-6 font-bold text-charcoal">Mock Exam</th>
                      <th className="py-5 px-6 font-bold text-charcoal text-right">Mark Scheme</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-soft-gray hover:bg-soft-gray/50 transition-colors">
                      <td className="py-5 px-6 font-medium">Paper 1 (Non-Calc) - Edexcel Higher</td>
                      <td className="py-5 px-6"><a className="text-primary font-bold hover:underline" href="#">PDF Paper</a></td>
                      <td className="py-5 px-6 text-right"><a className="px-4 py-2 border border-outline-variant rounded-lg hover:bg-white transition-colors" href="#">View Scheme</a></td>
                    </tr>
                    <tr className="border-b border-soft-gray hover:bg-soft-gray/50 transition-colors">
                      <td className="py-5 px-6 font-medium">Paper 2 (Calc) - Edexcel Higher</td>
                      <td className="py-5 px-6"><a className="text-primary font-bold hover:underline" href="#">PDF Paper</a></td>
                      <td className="py-5 px-6 text-right"><a className="px-4 py-2 border border-outline-variant rounded-lg hover:bg-white transition-colors" href="#">View Scheme</a></td>
                    </tr>
                    <tr className="hover:bg-soft-gray/50 transition-colors">
                      <td className="py-5 px-6 font-medium">Paper 3 (Calc) - Edexcel Higher</td>
                      <td className="py-5 px-6"><a className="text-primary font-bold hover:underline" href="#">PDF Paper</a></td>
                      <td className="py-5 px-6 text-right"><a className="px-4 py-2 border border-outline-variant rounded-lg hover:bg-white transition-colors" href="#">View Scheme</a></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="mx-auto px-margin-desktop py-20">
        <div className="relative overflow-hidden rounded-[3rem] bg-royal-purple text-white px-12 py-20 text-center shadow-[0px_10px_30px_rgba(0,0,0,0.08)]">
          <div className="relative z-10 max-w-3xl mx-auto space-y-8">
            <h2 className="font-display-lg text-4xl md:text-5xl leading-tight font-bold text-white">Master your GCSE Maths with expert resources.</h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">Create a free account to track your progress, unlock video solutions, and access our full library of 2026 mock papers.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button onClick={() => onNavigate('trial')} className="px-12 py-5 bg-lime-green text-charcoal font-bold rounded-2xl hover:scale-105 transition-transform cursor-pointer">Get Started Free</button>
              <button onClick={() => onNavigate('mock-papers')} className="px-12 py-5 bg-white/10 backdrop-blur-md border border-white/30 font-bold rounded-2xl hover:bg-white/20 transition-colors cursor-pointer text-white">Learn More</button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-soft-gray">
        <div className="max-w-4xl mx-auto px-margin-mobile md:px-0">
          <div className="text-center mb-16">
            <h2 className="font-headline-lg text-headline-lg text-charcoal mb-4 font-bold">Frequently Asked Questions</h2>
            <p className="text-on-surface-variant">Everything you need to know about our GCSE Maths mock papers.</p>
          </div>
          <div className="space-y-4">
            {[
              {
                id: 1,
                q: 'Are the GCSE Maths mock papers harder than the 2026 exams?',
                a: 'The mock papers are designed to be similar in difficulty to real GCSE Maths exams, providing realistic practice. Some questions may be slightly more challenging to help build confidence and prepare you for a range of question types.'
              },
              {
                id: 2,
                q: 'Can I use the formulae sheet when completing the mock papers?',
                a: 'You should use the official formulae sheet provided by your exam board when completing the GCSE Maths mock papers. This ensures your practice reflects real exam conditions.'
              },
              {
                id: 3,
                q: 'Are there worked solutions for the GCSE Maths mock exam papers?',
                a: 'Yes – each GCSE Maths mock exam paper includes model solutions with full working and methods, helping you understand how to approach different question types.'
              }
            ].map(item => (
              <div key={item.id} className="bg-white rounded-[1.5rem] shadow-sm border border-outline-variant p-8">
                <button
                  className="w-full flex justify-between items-center font-bold text-lg text-charcoal text-left cursor-pointer"
                  onClick={() => setOpenFaq(openFaq === item.id ? null : item.id)}
                >
                  <span>{item.q}</span>
                  <div className="w-8 h-8 rounded-full border border-outline-variant flex items-center justify-center">
                    <LigatureIcon name="expand_more" className={`transition-transform ${openFaq === item.id ? 'rotate-180' : ''}`} />
                  </div>
                </button>
                {openFaq === item.id && (
                  <div className="mt-6 text-on-surface-variant leading-relaxed pt-6 border-t border-soft-gray">
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
