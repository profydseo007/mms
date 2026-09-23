'use client';

import React from 'react';
import LigatureIcon from '../LigatureIcon';
import { ActivePage } from '@/lib/types';

interface ALevelMathsMockProps {
  onNavigate: (page: ActivePage, subjectTitle?: string) => void;
}

export default function ALevelMathsMock({ onNavigate }: ALevelMathsMockProps) {
  return (
    <div className="bg-surface text-on-surface font-body-md selection:bg-primary-fixed selection:text-on-primary-fixed">
      {/* Hero Section */}
      <header className="pt-16 pb-24 max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-container text-on-primary-container">
              <span className="material-symbols-outlined text-[18px]">calculate</span>
              <span className="font-label-sm text-label-sm">A-LEVEL MATHEMATICS</span>
            </div>
            <h1 className="font-display-lg text-display-lg text-charcoal leading-tight font-bold">
              A-Level Maths <span className="text-primary">Mock Papers</span>
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
              Master your Edexcel (9MA0) exams with subject specialist-designed mock papers. Focus on Pure Mathematics Paper 1 and Paper 2 with realistic formatting and difficulty levels.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <button
                onClick={() => {
                  const el = document.getElementById('available-papers');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-primary text-on-primary px-8 py-4 rounded-xl font-label-md text-label-md shadow-[0px_4px_20px_rgba(0,0,0,0.05)] hover:bg-royal-purple transition-all font-bold cursor-pointer"
              >
                Start Practicing
              </button>
              <button
                onClick={() => onNavigate('mock-papers')}
                className="border-2 border-primary text-primary px-8 py-4 rounded-xl font-label-md text-label-md hover:bg-primary-fixed/20 transition-all font-bold cursor-pointer"
              >
                View All Resources
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-lime-green/10 rounded-3xl -rotate-2 -z-10"></div>
            <img
              alt="Detailed illustration of a student studying advanced A-Level Mathematics"
              className="w-full h-auto rounded-3xl shadow-[0px_10px_30px_rgba(0,0,0,0.08)] object-cover aspect-video lg:aspect-square"
              src="https://lh3.googleusercontent.com/aida/AP1WRLsjsy8LDhvYm2wW6AOUXBZknTdsltiCnV7-Es-91zdEbLPqbTzlsJgLd_0qzWFs0sV4QslqmzWNWGL5isEuB6LEgxpLpWIQDH5ggsM-fUxzNABejHX6z6fzs-_Ctm65J0ZkaDG32mGB7ZCWLVL9Isv5ax2Vy6Bj7DizepOK-ii42mQyo1LaEJpqmo3LJcCzAzcwoCfhXHu70Fa8IzhCUyhb4hw8IbUlJUpMfTikLh8F5zFh5W2OtDY9LwM9"
            />
          </div>
        </div>
      </header>

      {/* Exam-Ready Insights */}
      <section className="py-24 bg-soft-gray">
        <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-gutter">
            <div className="bg-surface p-8 rounded-xl shadow-[0px_4px_20px_rgba(0,0,0,0.05)] flex flex-col items-center text-center space-y-4">
              <div className="w-12 h-12 rounded-full bg-primary-container flex items-center justify-center text-primary">
                <span className="material-symbols-outlined">verified</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-charcoal font-bold">Spec-Aligned</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">Questions perfectly mapped to the Edexcel 9MA0 specification for high-fidelity practice.</p>
            </div>
            <div className="bg-surface p-8 rounded-xl shadow-[0px_4px_20px_rgba(0,0,0,0.05)] flex flex-col items-center text-center space-y-4">
              <div className="w-12 h-12 rounded-full bg-primary-container flex items-center justify-center text-primary">
                <span className="material-symbols-outlined">timer</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-charcoal font-bold">Timed Practice</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">Build your exam stamina and pacing by practicing under realistic 2-hour conditions.</p>
            </div>
            <div className="bg-surface p-8 rounded-xl shadow-[0px_4px_20px_rgba(0,0,0,0.05)] flex flex-col items-center text-center space-y-4">
              <div className="w-12 h-12 rounded-full bg-primary-container flex items-center justify-center text-primary">
                <span className="material-symbols-outlined">menu_book</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-charcoal font-bold">Mark Schemes</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">Comprehensive mark schemes with step-by-step guidance to ensure concept mastery.</p>
            </div>
            <div className="bg-surface p-8 rounded-xl shadow-[0px_4px_20px_rgba(0,0,0,0.05)] flex flex-col items-center text-center space-y-4">
              <div className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center text-secondary">
                <span className="material-symbols-outlined">trending_up</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-charcoal font-bold">Proven Results</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">Join thousands of students who used our mocks to boost their final A-Level grades.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Available Mock Papers */}
      <section className="py-24 max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop" id="available-papers">
        <h2 className="font-display-lg text-display-lg text-charcoal mb-12 text-center font-bold">Available Mock Papers</h2>
        <div className="space-y-16">
          <div className="space-y-8">
            <div className="flex items-center gap-4 border-l-4 border-primary pl-6">
              <h3 className="font-headline-lg text-headline-lg text-charcoal font-bold">Edexcel (9MA0)</h3>
              <span className="px-3 py-1 rounded-full bg-primary/10 text-primary font-label-sm text-label-sm font-bold">Pure Mathematics Specialist</span>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Paper 1 */}
              <div className="bg-surface border border-outline-variant p-8 rounded-2xl shadow-[0px_4px_20px_rgba(0,0,0,0.05)] group hover:border-primary transition-colors">
                <h4 className="font-headline-md text-headline-md mb-6 font-bold">Pure Mathematics Paper 1</h4>
                <div className="space-y-4">
                  <a className="flex items-center justify-between p-4 rounded-xl bg-soft-gray hover:bg-primary-container hover:text-on-primary-container transition-all group/link" href="#">
                    <span className="font-label-md text-label-md font-bold">Mock Paper</span>
                    <span className="material-symbols-outlined group-hover/link:translate-x-1 transition-transform">download</span>
                  </a>
                  <a className="flex items-center justify-between p-4 rounded-xl bg-soft-gray hover:bg-primary-container hover:text-on-primary-container transition-all group/link" href="#">
                    <span className="font-label-md text-label-md font-bold">Model Solution</span>
                    <span className="material-symbols-outlined group-hover/link:translate-x-1 transition-transform">visibility</span>
                  </a>
                  <a className="flex items-center justify-between p-4 rounded-xl bg-soft-gray hover:bg-primary-container hover:text-on-primary-container transition-all group/link" href="#">
                    <span className="font-label-md text-label-md font-bold">Mark Scheme</span>
                    <span className="material-symbols-outlined group-hover/link:translate-x-1 transition-transform">description</span>
                  </a>
                </div>
              </div>
              {/* Paper 2 */}
              <div className="bg-surface border border-outline-variant p-8 rounded-2xl shadow-[0px_4px_20px_rgba(0,0,0,0.05)] group hover:border-primary transition-colors">
                <h4 className="font-headline-md text-headline-md mb-6 font-bold">Pure Mathematics Paper 2</h4>
                <div className="space-y-4">
                  <a className="flex items-center justify-between p-4 rounded-xl bg-soft-gray hover:bg-primary-container hover:text-on-primary-container transition-all group/link" href="#">
                    <span className="font-label-md text-label-md font-bold">Mock Paper</span>
                    <span className="material-symbols-outlined group-hover/link:translate-x-1 transition-transform">download</span>
                  </a>
                  <a className="flex items-center justify-between p-4 rounded-xl bg-soft-gray hover:bg-primary-container hover:text-on-primary-container transition-all group/link" href="#">
                    <span className="font-label-md text-label-md font-bold">Model Solution</span>
                    <span className="material-symbols-outlined group-hover/link:translate-x-1 transition-transform">visibility</span>
                  </a>
                  <a className="flex items-center justify-between p-4 rounded-xl bg-soft-gray hover:bg-primary-container hover:text-on-primary-container transition-all group/link" href="#">
                    <span className="font-label-md text-label-md font-bold">Mark Scheme</span>
                    <span className="material-symbols-outlined group-hover/link:translate-x-1 transition-transform">description</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Banner */}
      <section className="w-full bg-primary py-20 px-margin-desktop text-center text-on-primary">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="font-display-lg text-display-lg text-white font-bold">Master your A-Level Maths with expert resources.</h2>
          <p className="font-body-lg text-body-lg text-white/90">Join over 10,000+ students who have accessed our free mock exams, solution videos, and revision guides this term.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => onNavigate('trial')} className="bg-white text-primary px-8 py-4 rounded-xl font-headline-md text-headline-md hover:shadow-lg transition-all font-bold cursor-pointer">Sign Up Free</button>
            <button onClick={() => onNavigate('mock-papers')} className="border border-white text-white px-8 py-4 rounded-xl font-headline-md text-headline-md hover:bg-white/10 transition-all font-bold cursor-pointer">Learn More</button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-soft-gray">
        <div className="max-w-4xl mx-auto px-margin-mobile md:px-margin-desktop">
          <h2 className="font-display-lg text-display-lg text-charcoal mb-12 text-center font-bold">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <details className="bg-surface p-6 rounded-xl shadow-[0px_4px_20px_rgba(0,0,0,0.05)] group" open>
              <summary className="font-headline-md text-headline-md text-charcoal cursor-pointer flex justify-between items-center list-none font-bold">
                What topics do the Edexcel Pure Maths papers cover?
                <LigatureIcon name="expand_more" className="transition-transform group-open:rotate-180" />
              </summary>
              <p className="mt-4 font-body-md text-body-md text-on-surface-variant">
                Our mock papers cover the full Edexcel (9MA0) specification for Pure Mathematics. This includes algebra and functions, coordinate geometry, sequences and series, trigonometry, exponentials and logarithms, differentiation, and integration.
              </p>
            </details>
            <details className="bg-surface p-6 rounded-xl shadow-[0px_4px_20px_rgba(0,0,0,0.05)] group">
              <summary className="font-headline-md text-headline-md text-charcoal cursor-pointer flex justify-between items-center list-none font-bold">
                Do they come with worked solutions?
                <LigatureIcon name="expand_more" className="transition-transform group-open:rotate-180" />
              </summary>
              <p className="mt-4 font-body-md text-body-md text-on-surface-variant">
                Yes – every mock paper we produce comes with a comprehensive mark scheme and model solutions. These include full working out for complex multi-step questions to help you understand how marks are awarded.
              </p>
            </details>
            <details className="bg-surface p-6 rounded-xl shadow-[0px_4px_20px_rgba(0,0,0,0.05)] group">
              <summary className="font-headline-md text-headline-md text-charcoal cursor-pointer flex justify-between items-center list-none font-bold">
                Are these suitable for AQA students?
                <LigatureIcon name="expand_more" className="transition-transform group-open:rotate-180" />
              </summary>
              <p className="mt-4 font-body-md text-body-md text-on-surface-variant">
                While specifically written for the Edexcel specification, 90% of the Pure Mathematics content overlaps with AQA. AQA students will find these papers highly valuable for practice in core calculus and algebra.
              </p>
            </details>
          </div>
        </div>
      </section>
    </div>
  );
}
