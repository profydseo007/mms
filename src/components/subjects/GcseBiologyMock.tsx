'use client';

import React, { useState } from 'react';
import LigatureIcon from '../LigatureIcon';
import { ActivePage } from '@/lib/types';

interface GcseBiologyMockProps {
  onNavigate: (page: ActivePage, subjectTitle?: string) => void;
}

export default function GcseBiologyMock({ onNavigate }: GcseBiologyMockProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="bg-surface text-on-surface font-body-md overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative py-24 px-margin-mobile md:px-margin-desktop overflow-hidden">
        <div className="max-w-max-width mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-16 relative z-10">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-royal-purple/10 text-royal-purple rounded-full font-label-sm text-label-sm font-bold">
              <span className="w-2 h-2 rounded-full bg-lime-green animate-pulse"></span>
              GCSE BIOLOGY RESOURCES
            </div>
            <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-charcoal leading-tight font-bold">
              Biology GCSE <br /><span className="text-royal-purple">Mock Papers</span>
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-lg">
              Prepare with confidence. Expertly created Paper 1 and Paper 2 mocks specifically designed for Year 11 students following the latest specifications.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <button
                onClick={() => {
                  const el = document.getElementById('resources');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-8 py-4 bg-royal-purple text-white font-label-md text-label-md rounded-xl hover:shadow-lg transition-all font-bold cursor-pointer"
              >
                View Papers
              </button>
              <button
                onClick={() => onNavigate('mock-papers')}
                className="px-8 py-4 border-2 border-royal-purple text-royal-purple font-label-md text-label-md rounded-xl hover:bg-royal-purple/5 transition-all font-bold cursor-pointer"
              >
                About AQA Mocks
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-lime-green/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-royal-purple/10 rounded-full blur-3xl"></div>
            <div className="shadow-[0px_10px_30px_rgba(0,0,0,0.08)] rounded-3xl overflow-hidden relative border border-white">
              <div
                className="aspect-square bg-cover bg-center"
                style={{
                  backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuAq3_3U8O4HUXJuHtrMcZm69fHOmPG3nwaQYkNb0Vz1OZwIBOdNKs4dogPwM4_I_-IqWLPumrifpwSKOiQcECYAuKIYvacpxMoa-J4TKrhCe8wruxnHl43-iwe5k242wPuJunjrKcnMIvobp3bc4r9R_8WEzp_I2CoUZIabUhKX_6JC0jjRKVb8ELn3PQyVHSZcZah2zqi6ZCE5GbO6pdMVVBBGQi5VG01XvTn8YxvrzZQgj7gU_hPZBC2spmVN031hdeZ5mAnzsN6K')`
                }}
              ></div>
            </div>
          </div>
        </div>
      </section>

      {/* Resource Section */}
      <section className="py-24 bg-soft-gray" id="resources">
        <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="mb-16 text-center max-w-2xl mx-auto">
            <h2 className="font-headline-lg text-headline-lg text-charcoal mb-4 font-bold">Available Mock Papers</h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Our full-length Paper 1 and Paper 2 mocks for AQA Higher Tier follow the format and style of real exams to reinforce understanding and refine technique.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-gutter">
            {/* Preview Card */}
            <div className="lg:col-span-1 bg-white rounded-3xl p-8 shadow-[0px_4px_20px_rgba(0,0,0,0.05)] flex flex-col h-fit sticky top-28">
              <div className="w-full aspect-[3/4] bg-surface-container rounded-xl mb-6 relative overflow-hidden group">
                <div
                  className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                  style={{
                    backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuAEL9bpv3HEzSf364zVsoR2f7zw97Iq6Wx6gYlnPfndOTSc8hmJ8rpuNRW-0TTZhFaA9uV2MEzxM5A0r3nkImYYEZw1yNRhJH9LyBKbXao_BPLABrkLzyWQQWCRz5hWNe4xXU6cqPlYE60bKa5rRUjYALz0XDpwtQJp3aZut-66vJskv4-J8pIOAh9Z7Oic8FbK9ycSVC-Jz__hCnQn1ud_gBBg9f3LYwNGcryx3e_oITQaduJKOehAga9IgpiJBCFdBOoR3aZvhsQp')`
                  }}
                ></div>
                <div className="absolute inset-0 bg-charcoal/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="px-6 py-2 bg-white text-charcoal font-label-md rounded-full font-bold">Preview Paper</span>
                </div>
              </div>
              <h3 className="font-headline-md text-headline-md text-charcoal mb-4 font-bold">AQA Higher Tier</h3>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 text-on-surface-variant">
                  <span className="material-symbols-outlined text-lime-green">check_circle</span>
                  <span className="font-body-md">Exam-style questions</span>
                </li>
                <li className="flex items-center gap-3 text-on-surface-variant">
                  <span className="material-symbols-outlined text-lime-green">check_circle</span>
                  <span className="font-body-md">Realistic timed conditions</span>
                </li>
                <li className="flex items-center gap-3 text-on-surface-variant">
                  <span className="material-symbols-outlined text-lime-green">check_circle</span>
                  <span className="font-body-md">Full Mark Schemes included</span>
                </li>
              </ul>
              <button onClick={() => onNavigate('trial')} className="w-full py-4 bg-royal-purple text-white font-label-md rounded-xl hover:shadow-lg transition-all font-bold cursor-pointer">Access Now — Free</button>
            </div>

            {/* Resources Table/Cards */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white rounded-3xl p-6 md:p-10 shadow-[0px_4px_20px_rgba(0,0,0,0.05)]">
                <h4 className="font-headline-md text-headline-md text-charcoal mb-8 border-b pb-4 font-bold">Biology GCSE Higher (AQA)</h4>
                <div className="space-y-4">
                  {/* Paper 1 */}
                  <div className="group flex flex-col md:flex-row md:items-center justify-between p-6 rounded-2xl border border-outline-variant hover:border-royal-purple hover:bg-royal-purple/[0.02] transition-all">
                    <div className="flex items-center gap-4 mb-4 md:mb-0">
                      <div className="w-12 h-12 rounded-full bg-royal-purple/10 flex items-center justify-center text-royal-purple">
                        <span className="material-symbols-outlined">description</span>
                      </div>
                      <div>
                        <p className="font-label-md text-label-md text-royal-purple font-bold">Paper 1</p>
                        <p className="font-headline-sm text-on-surface font-semibold">Mock Paper – AQA Biology</p>
                      </div>
                    </div>
                    <button className="flex items-center gap-2 text-royal-purple font-label-md group-hover:underline font-bold cursor-pointer">
                      Download PDF <span className="material-symbols-outlined text-sm">download</span>
                    </button>
                  </div>
                  <div className="group flex flex-col md:flex-row md:items-center justify-between p-6 rounded-2xl border border-outline-variant hover:border-lime-green hover:bg-lime-green/[0.02] transition-all">
                    <div className="flex items-center gap-4 mb-4 md:mb-0">
                      <div className="w-12 h-12 rounded-full bg-lime-green/10 flex items-center justify-center text-secondary">
                        <span className="material-symbols-outlined">fact_check</span>
                      </div>
                      <div>
                        <p className="font-label-md text-label-md text-secondary font-bold">Mark Scheme</p>
                        <p className="font-headline-sm text-on-surface font-semibold">Paper 1 Mark Scheme – AQA</p>
                      </div>
                    </div>
                    <button className="flex items-center gap-2 text-secondary font-label-md group-hover:underline font-bold cursor-pointer">
                      Download PDF <span className="material-symbols-outlined text-sm">download</span>
                    </button>
                  </div>

                  {/* Paper 2 */}
                  <div className="group flex flex-col md:flex-row md:items-center justify-between p-6 rounded-2xl border border-outline-variant hover:border-royal-purple hover:bg-royal-purple/[0.02] transition-all mt-8">
                    <div className="flex items-center gap-4 mb-4 md:mb-0">
                      <div className="w-12 h-12 rounded-full bg-royal-purple/10 flex items-center justify-center text-royal-purple">
                        <span className="material-symbols-outlined">description</span>
                      </div>
                      <div>
                        <p className="font-label-md text-label-md text-royal-purple font-bold">Paper 2</p>
                        <p className="font-headline-sm text-on-surface font-semibold">Mock Paper – AQA Biology</p>
                      </div>
                    </div>
                    <button className="flex items-center gap-2 text-royal-purple font-label-md group-hover:underline font-bold cursor-pointer">
                      Download PDF <span className="material-symbols-outlined text-sm">download</span>
                    </button>
                  </div>
                  <div className="group flex flex-col md:flex-row md:items-center justify-between p-6 rounded-2xl border border-outline-variant hover:border-lime-green hover:bg-lime-green/[0.02] transition-all">
                    <div className="flex items-center gap-4 mb-4 md:mb-0">
                      <div className="w-12 h-12 rounded-full bg-lime-green/10 flex items-center justify-center text-secondary">
                        <span className="material-symbols-outlined">fact_check</span>
                      </div>
                      <div>
                        <p className="font-label-md text-label-md text-secondary font-bold">Mark Scheme</p>
                        <p className="font-headline-sm text-on-surface font-semibold">Paper 2 Mark Scheme – AQA</p>
                      </div>
                    </div>
                    <button className="flex items-center gap-2 text-secondary font-label-md group-hover:underline font-bold cursor-pointer">
                      Download PDF <span className="material-symbols-outlined text-sm">download</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-margin-mobile md:px-margin-desktop bg-royal-purple relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10 text-white">
          <h2 className="font-headline-lg text-headline-lg mb-6 font-bold text-white">Create your free account to access</h2>
          <p className="font-body-lg text-body-lg mb-12 text-primary-fixed opacity-90 max-w-2xl mx-auto">
            Get access to our full set of mock papers, track your progress, and revisit papers anytime. Join thousands of students boosting their grades today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button onClick={() => onNavigate('trial')} className="px-10 py-5 bg-white text-royal-purple font-label-md rounded-xl hover:bg-lime-green hover:text-charcoal transition-all font-bold cursor-pointer">Sign Up Now</button>
            <button onClick={() => onNavigate('mock-papers')} className="px-10 py-5 border-2 border-white/30 hover:border-white text-white font-label-md rounded-xl transition-all font-bold cursor-pointer">Learn More</button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-soft-gray">
        <div className="max-w-4xl mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="text-center mb-16">
            <h2 className="font-headline-lg text-headline-lg text-charcoal mb-4 font-bold">Frequently Asked Questions</h2>
            <p className="font-body-md text-on-surface-variant">Everything you need to know about our GCSE Biology mocks.</p>
          </div>
          <div className="space-y-4">
            {[
              {
                id: 1,
                q: 'Will these mock papers help improve my exam technique?',
                a: 'Completing mock papers helps you practise range of exam-style questions, improve your timing, and build confidence. Reviewing answers against model solutions helps identify areas for improvement and refine your technique.'
              },
              {
                id: 2,
                q: 'How do I access the GCSE Biology mock exam papers?',
                a: 'You can access them by creating a free account on our Resources platform. Once logged in, you can download all available papers and mark schemes as PDFs.'
              },
              {
                id: 3,
                q: 'Are the papers exam-board specific?',
                a: 'Yes – these mock papers are specifically designed for AQA Higher Tier and follow the exact structure, format, and style of the real GCSE Biology exams.'
              },
              {
                id: 4,
                q: 'Do they cover practical skills and data analysis?',
                a: 'Yes – our papers include questions that assess practical skills, data handling, and the interpretation of experimental results, which are crucial areas in GCSE Biology.'
              }
            ].map(item => (
              <div key={item.id} className="bg-white rounded-2xl overflow-hidden shadow-[0px_4px_20px_rgba(0,0,0,0.05)] border border-transparent hover:border-royal-purple/20 transition-all">
                <button
                  className="w-full flex items-center justify-between p-6 text-left cursor-pointer font-bold"
                  onClick={() => setOpenFaq(openFaq === item.id ? null : item.id)}
                >
                  <span className="font-headline-sm text-on-surface font-semibold">{item.q}</span>
                  <LigatureIcon name="expand_more" className={`text-royal-purple transition-transform duration-300 ${openFaq === item.id ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === item.id && (
                  <div className="p-6 text-on-surface-variant font-body-md bg-surface-container-low border-t border-outline-variant/30">
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
