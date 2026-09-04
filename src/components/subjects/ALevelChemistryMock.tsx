'use client';

import React from 'react';
import LigatureIcon from '../LigatureIcon';
import { ActivePage } from '@/lib/types';

interface ALevelChemistryMockProps {
  onNavigate: (page: ActivePage, subjectTitle?: string) => void;
}

export default function ALevelChemistryMock({ onNavigate }: ALevelChemistryMockProps) {
  return (
    <div className="bg-background font-body-md text-on-background">
      {/* Hero Section */}
      <section className="py-20 bg-surface-container-lowest overflow-hidden">
        <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1 space-y-6">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary/10 text-royal-purple border border-primary/20">
              <span className="material-symbols-outlined text-[18px] mr-2">science</span>
              <span className="font-label-md text-label-md tracking-wider">A-LEVEL REVISION</span>
            </div>
            <h1 className="font-display-lg text-display-lg md:text-display-lg-mobile text-charcoal font-bold">
              Chemistry A-Level <br /><span className="text-royal-purple">Mock Papers</span>
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
              Prepare effectively for your AQA and OCR (A) exams with our free A-Level Chemistry mock papers, expertly created to reflect the latest specifications.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <button
                onClick={() => {
                  const el = document.getElementById('resources');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-royal-purple text-white px-8 py-4 rounded-xl font-headline-md text-headline-md hover:bg-primary transition-all shadow-[0px_4px_20px_rgba(0,0,0,0.05)] cursor-pointer font-bold"
              >
                Download Papers
              </button>
              <div className="flex items-center gap-4 px-6 border border-outline-variant rounded-xl">
                <span className="material-symbols-outlined text-lime-green" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                <span className="font-label-md text-label-md text-on-surface-variant">2026 Specification Aligned</span>
              </div>
            </div>
          </div>
          <div className="flex-1 relative">
            <img
              alt="A detailed digital illustration of a student in a chemistry lab"
              className="w-full h-auto rounded-3xl shadow-[0px_10px_30px_rgba(0,0,0,0.08)]"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBlxZ9U4BQcQo3e6EqOubBbsdzzO6K_ALO64VOOethikYZ8IePPcPMw51sei2sm6edXJgDuxXIlSyLUZOv-9M8Gn-CS9aJRDEb1TLR32yr3YIFmjtTYruKgAcxuo3GbLnjiu6MGqbsesDDrGnlN5GnM6qU-2r42CBeywpKBegj1zDEAjrLPgS1bEdGnQUYiq-hGUegxaqjMa-hmZDYfcWiD6--a985H39S0ZUqWFcIFKpihDIBvFKJm8A"
            />
          </div>
        </div>
      </section>

      {/* Insights Section */}
      <section className="py-24 bg-soft-gray">
        <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter">
            <div className="bg-white p-8 rounded-2xl shadow-[0px_4px_20px_rgba(0,0,0,0.05)] border border-white hover:border-royal-purple/20 transition-colors">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-royal-purple">checklist</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-charcoal mb-3 font-bold">Spec-Aligned</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">Papers tailored specifically for AQA and OCR (A) Chemistry specifications.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-[0px_4px_20px_rgba(0,0,0,0.05)] border border-white hover:border-royal-purple/20 transition-colors">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-royal-purple">timer</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-charcoal mb-3 font-bold">Timed Practice</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">Exact time limits and question counts to simulate real exam pressure.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-[0px_4px_20px_rgba(0,0,0,0.05)] border border-white hover:border-royal-purple/20 transition-colors">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-royal-purple">draw</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-charcoal mb-3 font-bold">Mark Schemes</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">Comprehensive solutions and marking guidance for every question.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-[0px_4px_20px_rgba(0,0,0,0.05)] border border-white hover:border-royal-purple/20 transition-colors">
              <div className="w-12 h-12 bg-secondary-container/20 rounded-xl flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-secondary">trending_up</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-charcoal mb-3 font-bold">Proven Results</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">Used by thousands of students to boost their final A-Level grades.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-24 bg-white" id="resources">
        <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="text-center mb-16">
            <h2 className="font-headline-lg text-headline-lg text-charcoal mb-4 font-bold">Official Mock Resources</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">Download our expert-crafted Paper 1 (Physical & Inorganic) and Paper 2 (Physical & Organic) mocks below.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* AQA Board */}
            <div className="space-y-6">
              <div className="flex items-center gap-4 pb-4 border-b border-outline-variant">
                <span className="px-4 py-1 bg-royal-purple text-white rounded-lg font-label-md text-label-md font-bold">AQA</span>
                <h3 className="font-headline-md text-headline-md text-charcoal font-bold">Chemistry A-Level</h3>
              </div>
              <div className="grid grid-cols-1 gap-4">
                <div className="flex flex-col md:flex-row md:items-center justify-between p-6 bg-surface-container-low rounded-2xl border border-transparent hover:border-royal-purple/30 transition-all">
                  <div>
                    <h4 className="font-headline-md text-headline-md text-charcoal mb-1 font-bold">Paper 1 Mock</h4>
                    <p className="font-body-md text-body-md text-on-surface-variant">Physical & Inorganic Chemistry</p>
                  </div>
                  <div className="flex gap-2 mt-4 md:mt-0">
                    <button className="bg-white text-royal-purple border border-royal-purple p-3 rounded-lg hover:bg-royal-purple hover:text-white transition-all cursor-pointer">
                      <span className="material-symbols-outlined">download</span>
                    </button>
                    <button className="bg-white text-royal-purple border border-royal-purple p-3 rounded-lg hover:bg-royal-purple hover:text-white transition-all cursor-pointer">
                      <span className="material-symbols-outlined">description</span>
                    </button>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row md:items-center justify-between p-6 bg-surface-container-low rounded-2xl border border-transparent hover:border-royal-purple/30 transition-all">
                  <div>
                    <h4 className="font-headline-md text-headline-md text-charcoal mb-1 font-bold">Paper 2 Mock</h4>
                    <p className="font-body-md text-body-md text-on-surface-variant">Physical & Organic Chemistry</p>
                  </div>
                  <div className="flex gap-2 mt-4 md:mt-0">
                    <button className="bg-white text-royal-purple border border-royal-purple p-3 rounded-lg hover:bg-royal-purple hover:text-white transition-all cursor-pointer">
                      <span className="material-symbols-outlined">download</span>
                    </button>
                    <button className="bg-white text-royal-purple border border-royal-purple p-3 rounded-lg hover:bg-royal-purple hover:text-white transition-all cursor-pointer">
                      <span className="material-symbols-outlined">description</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* OCR (A) Board */}
            <div className="space-y-6">
              <div className="flex items-center gap-4 pb-4 border-b border-outline-variant">
                <span className="px-4 py-1 bg-royal-purple text-white rounded-lg font-label-md text-label-md font-bold">OCR (A)</span>
                <h3 className="font-headline-md text-headline-md text-charcoal font-bold">Chemistry A-Level</h3>
              </div>
              <div className="grid grid-cols-1 gap-4">
                <div className="flex flex-col md:flex-row md:items-center justify-between p-6 bg-surface-container-low rounded-2xl border border-transparent hover:border-royal-purple/30 transition-all">
                  <div>
                    <h4 className="font-headline-md text-headline-md text-charcoal mb-1 font-bold">Paper 1 Mock</h4>
                    <p className="font-body-md text-body-md text-on-surface-variant">Periodic table, elements and physical chemistry</p>
                  </div>
                  <div className="flex gap-2 mt-4 md:mt-0">
                    <button className="bg-white text-royal-purple border border-royal-purple p-3 rounded-lg hover:bg-royal-purple hover:text-white transition-all cursor-pointer">
                      <span className="material-symbols-outlined">download</span>
                    </button>
                    <button className="bg-white text-royal-purple border border-royal-purple p-3 rounded-lg hover:bg-royal-purple hover:text-white transition-all cursor-pointer">
                      <span className="material-symbols-outlined">description</span>
                    </button>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row md:items-center justify-between p-6 bg-surface-container-low rounded-2xl border border-transparent hover:border-royal-purple/30 transition-all">
                  <div>
                    <h4 className="font-headline-md text-headline-md text-charcoal mb-1 font-bold">Paper 2 Mock</h4>
                    <p className="font-body-md text-body-md text-on-surface-variant">Synthesis and analytical techniques</p>
                  </div>
                  <div className="flex gap-2 mt-4 md:mt-0">
                    <button className="bg-white text-royal-purple border border-royal-purple p-3 rounded-lg hover:bg-royal-purple hover:text-white transition-all cursor-pointer">
                      <span className="material-symbols-outlined">download</span>
                    </button>
                    <button className="bg-white text-royal-purple border border-royal-purple p-3 rounded-lg hover:bg-royal-purple hover:text-white transition-all cursor-pointer">
                      <span className="material-symbols-outlined">description</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Banner */}
      <section className="py-16">
        <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="relative rounded-[32px] overflow-hidden bg-royal-purple p-12 md:p-16 text-center shadow-[0px_10px_30px_rgba(0,0,0,0.08)]">
            <div className="relative z-10">
              <h2 className="font-display-lg text-display-lg md:text-display-lg-mobile text-white mb-6 font-bold">Master your A-Level Chemistry with expert resources.</h2>
              <p className="font-body-lg text-body-lg text-white/90 mb-10 max-w-2xl mx-auto">Create a free account to track your progress and access exclusive model solutions for all our mock papers.</p>
              <button onClick={() => onNavigate('trial')} className="bg-lime-green text-charcoal px-10 py-4 rounded-xl font-headline-md text-headline-md hover:scale-105 transition-transform font-bold cursor-pointer">Create Free Account</button>
            </div>
          </div>
        </div>
      </section>

      {/* Bento Section: Beyond Mock Papers */}
      <section className="py-24 bg-white">
        <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <h2 className="font-headline-lg text-headline-lg text-charcoal mb-12 text-center font-bold">Beyond Mock Papers</h2>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
            <div className="md:col-span-7 bg-surface-container-low p-10 rounded-[32px] flex flex-col justify-between group cursor-pointer hover:bg-surface-container transition-all" onClick={() => onNavigate('curriculum')}>
              <div>
                <span className="font-label-md text-label-md text-royal-purple mb-4 block font-bold">PREMIUM SUPPORT</span>
                <h3 className="font-display-lg text-display-lg-mobile text-charcoal mb-6 font-bold">Private Tuition</h3>
                <p className="font-body-lg text-body-lg text-on-surface-variant max-w-lg">Discover a zero-fuss platform where you can search for high-calibre tutors, meet for interactive lessons and track progress.</p>
                <ul className="mt-8 space-y-4">
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-lime-green">check_circle</span>
                    <span className="font-body-md text-body-md">Hand-picked expert tutors from £20/hour</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-lime-green">check_circle</span>
                    <span className="font-body-md text-body-md">Online bespoke learning classroom</span>
                  </li>
                </ul>
              </div>
              <div className="mt-10">
                <span className="font-label-md text-label-md text-royal-purple flex items-center group-hover:gap-4 transition-all gap-2 font-bold">Find a Tutor <LigatureIcon name="arrow_forward" /></span>
              </div>
            </div>

            <div className="md:col-span-5 bg-royal-purple text-white p-10 rounded-[32px] relative overflow-hidden flex flex-col justify-between group cursor-pointer" onClick={() => onNavigate('curriculum')}>
              <div className="relative z-10">
                <span className="font-label-md text-label-md text-white/70 mb-4 block font-bold">CAREER PATHS</span>
                <h3 className="font-headline-lg text-headline-lg mb-6 font-bold">STEM Exploration</h3>
                <p className="font-body-md text-body-md text-white/80">In-depth information on STEM fields, university advice, and real-world career profiles to inspire your future.</p>
              </div>
              <div className="relative z-10 mt-10">
                <span className="inline-flex items-center gap-2 group-hover:gap-4 transition-all font-bold">Explore Now <LigatureIcon name="arrow_forward" /></span>
              </div>
              <div className="absolute -bottom-10 -right-10 opacity-20 transform group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-[180px]">rocket_launch</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-surface-container-lowest">
        <div className="max-w-4xl mx-auto px-margin-mobile md:px-margin-desktop">
          <h2 className="font-headline-lg text-headline-lg text-charcoal mb-12 text-center font-bold">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <details className="group bg-white rounded-2xl shadow-[0px_4px_20px_rgba(0,0,0,0.05)] p-6 border border-transparent open:border-royal-purple/20 transition-all">
              <summary className="font-headline-md text-headline-md text-charcoal flex justify-between items-center cursor-pointer list-none font-bold">
                What topics do the A Level Chemistry mock exam papers cover?
                <LigatureIcon name="expand_more" className="group-open:rotate-180 transition-transform" />
              </summary>
              <div className="mt-6 font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Our A Level Chemistry mock exam papers include questions from across organic, inorganic, and physical chemistry. They are designed to give you well-rounded exam practice, covering a mix of topics and question types in line with the specification.
              </div>
            </details>
            <details className="group bg-white rounded-2xl shadow-[0px_4px_20px_rgba(0,0,0,0.05)] p-6 border border-transparent open:border-royal-purple/20 transition-all">
              <summary className="font-headline-md text-headline-md text-charcoal flex justify-between items-center cursor-pointer list-none font-bold">
                Do the A Level Chemistry mock papers allow the use of a data sheet?
                <LigatureIcon name="expand_more" className="group-open:rotate-180 transition-transform" />
              </summary>
              <div className="mt-6 font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Yes – you should use the official data sheet from your exam board when completing the mock papers. This ensures your practice mirrors real exam conditions and helps you get used to working with key reference data.
              </div>
            </details>
            <details className="group bg-white rounded-2xl shadow-[0px_4px_20px_rgba(0,0,0,0.05)] p-6 border border-transparent open:border-royal-purple/20 transition-all">
              <summary className="font-headline-md text-headline-md text-charcoal flex justify-between items-center cursor-pointer list-none font-bold">
                Which exam boards do the A Level Chemistry mock papers cover?
                <LigatureIcon name="expand_more" className="group-open:rotate-180 transition-transform" />
              </summary>
              <div className="mt-6 font-body-md text-body-md text-on-surface-variant leading-relaxed">
                We offer A Level Chemistry mock papers for AQA and OCR (A). Each set is written to match the structure and format of the relevant exam board, so you can practise with papers that closely resemble the style of your real exams.
              </div>
            </details>
          </div>
        </div>
      </section>
    </div>
  );
}
