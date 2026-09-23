'use client';

import React from 'react';
import LigatureIcon from '../LigatureIcon';
import { ActivePage } from '@/lib/types';

interface ALevelBiologyMockProps {
  onNavigate: (page: ActivePage, subjectTitle?: string) => void;
}

export default function ALevelBiologyMock({ onNavigate }: ALevelBiologyMockProps) {
  return (
    <div className="bg-surface text-on-surface font-body-md selection:bg-primary-fixed selection:text-on-primary-fixed">
      {/* Hero Section */}
      <header className="pt-16 pb-24 max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-container text-on-primary-container">
              <span className="material-symbols-outlined text-[18px]">science</span>
              <span className="font-label-sm text-label-sm">A-LEVEL BIOLOGY</span>
            </div>
            <h1 className="font-display-lg text-display-lg text-charcoal leading-tight">
              Biology A-Level <span className="text-primary">Mock Papers</span>
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
              Prepare effectively for your AQA and OCR (A) exams with our free mock papers, expertly created by biology specialists to mirror the style and timing of real papers.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <button
                onClick={() => {
                  const el = document.getElementById('available-papers');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-primary text-on-primary px-8 py-4 rounded-xl font-label-md text-label-md hover:bg-royal-purple transition-all cursor-pointer"
              >
                Start Practicing
              </button>
              <button
                onClick={() => onNavigate('mock-papers')}
                className="border-2 border-primary text-primary px-8 py-4 rounded-xl font-label-md text-label-md hover:bg-primary-fixed/20 transition-all cursor-pointer"
              >
                View All Resources
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-lime-green/10 rounded-3xl -rotate-2 -z-10"></div>
            <img
              alt="Detailed illustration of a focused student in a science lab environment"
              className="w-full h-auto rounded-3xl object-cover aspect-video lg:aspect-square shadow-[0px_10px_30px_rgba(0,0,0,0.08)]"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBX2oMcr5y3rXhlBrlrUe06hoHmQz6nv4ohQlpWXONS9-oinSpAVT7gR-AqEoRSZKTM7TsVAlhsLJqurOmrmZ3QgZkwDXg6yAUr7UZ3CPYtNmn6yJDwcfkR6v0al7qIh1HSpN3tos6vutMMYcKklguwbeBASW_A8ptPNWIF12oh-Pf9XiHoAFPxJeIATtO2rRRS2iTIDZCHWWyrVnfd-jPxEGma9TwbOtw7zh0vmq825eZqn9T4HjKuPuq3XYYoKDe1KSKk0cxj0od3"
            />
          </div>
        </div>
      </header>

      {/* Exam Insights (4-Column Grid) */}
      <section className="py-24 bg-soft-gray">
        <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-gutter">
            <div className="bg-surface p-8 rounded-xl shadow-[0px_4px_20px_rgba(0,0,0,0.05)] flex flex-col items-center text-center space-y-4">
              <div className="w-12 h-12 rounded-full bg-primary-container flex items-center justify-center text-primary">
                <span className="material-symbols-outlined">checklist</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-charcoal font-bold">Spec-Aligned</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">Accurately mapped to the latest AQA and OCR (A) specifications for reliable practice.</p>
            </div>
            <div className="bg-surface p-8 rounded-xl shadow-[0px_4px_20px_rgba(0,0,0,0.05)] flex flex-col items-center text-center space-y-4">
              <div className="w-12 h-12 rounded-full bg-primary-container flex items-center justify-center text-primary">
                <span className="material-symbols-outlined">timer</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-charcoal font-bold">Timed Practice</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">Designed to mirror real exam timing constraints to build your pacing confidence.</p>
            </div>
            <div className="bg-surface p-8 rounded-xl shadow-[0px_4px_20px_rgba(0,0,0,0.05)] flex flex-col items-center text-center space-y-4">
              <div className="w-12 h-12 rounded-full bg-primary-container flex items-center justify-center text-primary">
                <span className="material-symbols-outlined">menu_book</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-charcoal font-bold">Mark Schemes</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">Detailed model solutions and marking criteria included for every single question.</p>
            </div>
            <div className="bg-surface p-8 rounded-xl shadow-[0px_4px_20px_rgba(0,0,0,0.05)] flex flex-col items-center text-center space-y-4">
              <div className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center text-secondary">
                <span className="material-symbols-outlined">trending_up</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-charcoal font-bold">Proven Results</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">Used by thousands of students to identify gaps and achieve top A-Level grades.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mock Paper Grid */}
      <section className="py-24 max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop" id="available-papers">
        <h2 className="font-display-lg text-display-lg text-charcoal mb-12 text-center font-bold">Available Mock Papers</h2>
        <div className="space-y-16">
          {/* AQA Section */}
          <div className="space-y-8">
            <div className="flex items-center gap-4 border-l-4 border-primary pl-6">
              <h3 className="font-headline-lg text-headline-lg text-charcoal font-bold">AQA Biology</h3>
              <span className="px-3 py-1 rounded-full bg-primary/10 text-primary font-label-sm text-label-sm">Board-Specific</span>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Paper 1 */}
              <div className="bg-surface border border-outline-variant p-8 rounded-2xl shadow-[0px_4px_20px_rgba(0,0,0,0.05)] group hover:border-primary transition-colors">
                <h4 className="font-headline-md text-headline-md mb-6 font-bold">Paper 1: Relevant Topics</h4>
                <div className="space-y-4">
                  <a className="flex items-center justify-between p-4 rounded-xl bg-soft-gray hover:bg-primary-container hover:text-on-primary-container transition-all group/link" href="#">
                    <span className="font-label-md text-label-md">Mock Paper</span>
                    <span className="material-symbols-outlined group-hover/link:translate-x-1 transition-transform">download</span>
                  </a>
                  <a className="flex items-center justify-between p-4 rounded-xl bg-soft-gray hover:bg-primary-container hover:text-on-primary-container transition-all group/link" href="#">
                    <span className="font-label-md text-label-md">Model Solution</span>
                    <span className="material-symbols-outlined group-hover/link:translate-x-1 transition-transform">visibility</span>
                  </a>
                  <a className="flex items-center justify-between p-4 rounded-xl bg-soft-gray hover:bg-primary-container hover:text-on-primary-container transition-all group/link" href="#">
                    <span className="font-label-md text-label-md">Mark Scheme</span>
                    <span className="material-symbols-outlined group-hover/link:translate-x-1 transition-transform">description</span>
                  </a>
                </div>
              </div>
              {/* Paper 2 */}
              <div className="bg-surface border border-outline-variant p-8 rounded-2xl shadow-[0px_4px_20px_rgba(0,0,0,0.05)] group hover:border-primary transition-colors">
                <h4 className="font-headline-md text-headline-md mb-6 font-bold">Paper 2: Synoptic Content</h4>
                <div className="space-y-4">
                  <a className="flex items-center justify-between p-4 rounded-xl bg-soft-gray hover:bg-primary-container hover:text-on-primary-container transition-all group/link" href="#">
                    <span className="font-label-md text-label-md">Mock Paper</span>
                    <span className="material-symbols-outlined group-hover/link:translate-x-1 transition-transform">download</span>
                  </a>
                  <a className="flex items-center justify-between p-4 rounded-xl bg-soft-gray hover:bg-primary-container hover:text-on-primary-container transition-all group/link" href="#">
                    <span className="font-label-md text-label-md">Model Solution</span>
                    <span className="material-symbols-outlined group-hover/link:translate-x-1 transition-transform">visibility</span>
                  </a>
                  <a className="flex items-center justify-between p-4 rounded-xl bg-soft-gray hover:bg-primary-container hover:text-on-primary-container transition-all group/link" href="#">
                    <span className="font-label-md text-label-md">Mark Scheme</span>
                    <span className="material-symbols-outlined group-hover/link:translate-x-1 transition-transform">description</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* OCR (A) Section */}
          <div className="space-y-8">
            <div className="flex items-center gap-4 border-l-4 border-secondary pl-6">
              <h3 className="font-headline-lg text-headline-lg text-charcoal font-bold">OCR (A) Biology</h3>
              <span className="px-3 py-1 rounded-full bg-secondary/10 text-secondary font-label-sm text-label-sm">Standard Format</span>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Paper 1 */}
              <div className="bg-surface border border-outline-variant p-8 rounded-2xl shadow-[0px_4px_20px_rgba(0,0,0,0.05)] group hover:border-secondary transition-colors">
                <h4 className="font-headline-md text-headline-md mb-6 font-bold">Paper 1: Biological Processes</h4>
                <div className="space-y-4">
                  <a className="flex items-center justify-between p-4 rounded-xl bg-soft-gray hover:bg-secondary-container hover:text-on-secondary-container transition-all group/link" href="#">
                    <span className="font-label-md text-label-md">Mock Paper</span>
                    <span className="material-symbols-outlined group-hover/link:translate-x-1 transition-transform">download</span>
                  </a>
                  <a className="flex items-center justify-between p-4 rounded-xl bg-soft-gray hover:bg-secondary-container hover:text-on-secondary-container transition-all group/link" href="#">
                    <span className="font-label-md text-label-md">Model Solution</span>
                    <span className="material-symbols-outlined group-hover/link:translate-x-1 transition-transform">visibility</span>
                  </a>
                  <a className="flex items-center justify-between p-4 rounded-xl bg-soft-gray hover:bg-secondary-container hover:text-on-secondary-container transition-all group/link" href="#">
                    <span className="font-label-md text-label-md">Mark Scheme</span>
                    <span className="material-symbols-outlined group-hover/link:translate-x-1 transition-transform">description</span>
                  </a>
                </div>
              </div>
              {/* Paper 2 */}
              <div className="bg-surface border border-outline-variant p-8 rounded-2xl shadow-[0px_4px_20px_rgba(0,0,0,0.05)] group hover:border-secondary transition-colors">
                <h4 className="font-headline-md text-headline-md mb-6 font-bold">Paper 2: Biological Diversity</h4>
                <div className="space-y-4">
                  <a className="flex items-center justify-between p-4 rounded-xl bg-soft-gray hover:bg-secondary-container hover:text-on-secondary-container transition-all group/link" href="#">
                    <span className="font-label-md text-label-md">Mock Paper</span>
                    <span className="material-symbols-outlined group-hover/link:translate-x-1 transition-transform">download</span>
                  </a>
                  <a className="flex items-center justify-between p-4 rounded-xl bg-soft-gray hover:bg-secondary-container hover:text-on-secondary-container transition-all group/link" href="#">
                    <span className="font-label-md text-label-md">Model Solution</span>
                    <span className="material-symbols-outlined group-hover/link:translate-x-1 transition-transform">visibility</span>
                  </a>
                  <a className="flex items-center justify-between p-4 rounded-xl bg-soft-gray hover:bg-secondary-container hover:text-on-secondary-container transition-all group/link" href="#">
                    <span className="font-label-md text-label-md">Mark Scheme</span>
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
          <h2 className="font-display-lg text-display-lg font-bold text-white">Master your A-Level Biology with expert resources.</h2>
          <p className="font-body-lg text-body-lg text-white/90">Join over 50,000 students using our platform to boost their grades and secure university placements.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => onNavigate('trial')} className="bg-white text-primary px-8 py-4 rounded-xl font-headline-md text-headline-md hover:shadow-lg transition-all font-bold cursor-pointer">Create Free Account</button>
            <button onClick={() => onNavigate('mock-papers')} className="border border-white text-white px-8 py-4 rounded-xl font-headline-md text-headline-md hover:bg-white/10 transition-all font-bold cursor-pointer">Learn More</button>
          </div>
        </div>
      </section>

      {/* Additional Resources (Bento Grid) */}
      <section className="py-24 max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
        <h2 className="font-display-lg text-display-lg text-charcoal mb-12 font-bold">Beyond Mock Papers</h2>
        <div className="grid grid-cols-1 md:grid-cols-6 gap-gutter">
          <div className="md:col-span-4 bg-surface-container p-10 rounded-2xl flex flex-col justify-between shadow-[0px_4px_20px_rgba(0,0,0,0.05)] group">
            <div className="space-y-4">
              <span className="material-symbols-outlined text-primary text-4xl">school</span>
              <h3 className="font-headline-lg text-headline-lg font-bold">Private Tuition</h3>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-md">Connect with high-calibre tutors for interactive lessons tailored to your specific needs.</p>
            </div>
            <button onClick={() => onNavigate('curriculum')} className="text-primary font-label-md text-label-md flex items-center gap-2 group-hover:underline font-bold cursor-pointer mt-6">
              Find a Tutor <LigatureIcon name="arrow_forward" />
            </button>
          </div>
          <div className="md:col-span-2 bg-secondary/5 border border-secondary/20 p-10 rounded-2xl flex flex-col justify-between shadow-[0px_4px_20px_rgba(0,0,0,0.05)] group">
            <div className="space-y-4">
              <span className="material-symbols-outlined text-secondary text-4xl">rocket_launch</span>
              <h3 className="font-headline-lg text-headline-lg font-bold">STEM Exploration</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">In-depth career profiles and university advice for the next generation of scientists.</p>
            </div>
            <button onClick={() => onNavigate('curriculum')} className="text-secondary font-label-md text-label-md flex items-center gap-2 group-hover:underline font-bold cursor-pointer mt-6">
              Explore Now <LigatureIcon name="arrow_forward" />
            </button>
          </div>
          <div className="md:col-span-6 bg-primary/5 border border-primary/20 p-10 rounded-2xl flex flex-col justify-between shadow-[0px_4px_20px_rgba(0,0,0,0.05)] group">
            <div className="space-y-4">
              <span className="material-symbols-outlined text-royal-purple text-4xl">menu_book</span>
              <h3 className="font-headline-lg text-headline-lg font-bold">Revision Courses</h3>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-md">Affordable crash courses for GCSE and A Level taught by professional specialists.</p>
            </div>
            <button onClick={() => onNavigate('curriculum')} className="text-primary font-label-md text-label-md flex items-center gap-2 group-hover:underline font-bold cursor-pointer mt-6">
              Browse Courses <LigatureIcon name="arrow_forward" />
            </button>
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
                Do the mock papers follow the exam board specifications?
                <LigatureIcon name="expand_more" className="transition-transform group-open:rotate-180" />
              </summary>
              <p className="mt-4 font-body-md text-body-md text-on-surface-variant">
                Yes, our AQA Biology mock papers and OCR (A) Biology mock papers are written to align with the latest specifications. They are designed to reflect the structure, format, and question styles used in real exams, giving you accurate and relevant practice.
              </p>
            </details>
            <details className="bg-surface p-6 rounded-xl shadow-[0px_4px_20px_rgba(0,0,0,0.05)] group">
              <summary className="font-headline-md text-headline-md text-charcoal cursor-pointer flex justify-between items-center list-none font-bold">
                Do they include practical skills questions?
                <LigatureIcon name="expand_more" className="transition-transform group-open:rotate-180" />
              </summary>
              <p className="mt-4 font-body-md text-body-md text-on-surface-variant">
                Yes – the A Level Biology mock papers feature a range of questions that assess practical skills, data handling, and the interpretation of experimental results – all key areas in A Level Biology exams.
              </p>
            </details>
            <details className="bg-surface p-6 rounded-xl shadow-[0px_4px_20px_rgba(0,0,0,0.05)] group">
              <summary className="font-headline-md text-headline-md text-charcoal cursor-pointer flex justify-between items-center list-none font-bold">
                Are these suitable for Year 12 students?
                <LigatureIcon name="expand_more" className="transition-transform group-open:rotate-180" />
              </summary>
              <p className="mt-4 font-body-md text-body-md text-on-surface-variant">
                Our A Level Biology mock exam papers are mainly intended for Year 13 students. However, Year 12 students may also find them useful for practising topics they have already covered – particularly Paper 1 content.
              </p>
            </details>
            <details className="bg-surface p-6 rounded-xl shadow-[0px_4px_20px_rgba(0,0,0,0.05)] group">
              <summary className="font-headline-md text-headline-md text-charcoal cursor-pointer flex justify-between items-center list-none font-bold">
                How do I download the mark schemes?
                <LigatureIcon name="expand_more" className="transition-transform group-open:rotate-180" />
              </summary>
              <p className="mt-4 font-body-md text-body-md text-on-surface-variant">
                All mark schemes and model solutions are available for free to registered users. Simply click the download button in the paper grid above to access them instantly.
              </p>
            </details>
          </div>
        </div>
      </section>
    </div>
  );
}
