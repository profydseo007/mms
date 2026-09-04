'use client';

import React, { useState } from 'react';
import LigatureIcon from '../LigatureIcon';
import { ActivePage } from '@/lib/types';

interface GcseCombinedScienceMockProps {
  onNavigate: (page: ActivePage, subjectTitle?: string) => void;
}

export default function GcseCombinedScienceMock({ onNavigate }: GcseCombinedScienceMockProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="bg-surface text-on-surface font-body-md overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative py-24 px-margin-mobile md:px-margin-desktop overflow-hidden">
        <div className="max-w-max-width mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-16 relative z-10">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-royal-purple/10 text-royal-purple rounded-full font-label-sm text-label-sm font-bold">
              <span className="w-2 h-2 rounded-full bg-lime-green animate-pulse"></span>
              AQA TRILOGY SPECIFICATION
            </div>
            <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-charcoal leading-tight font-bold">
              GCSE Combined Science <br /><span className="text-royal-purple">Mock Papers</span>
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-lg">
              Prepare with confidence for your GCSE Combined Science exams. Expertly created mocks for AQA Trilogy Higher Tier specifically designed for Year 11 students.
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
                About Mocks
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
                  backgroundImage: `url('https://lh3.googleusercontent.com/aida/AP1WRLv2yNKfIYxJzUgPebvV45QnAwo-WJiZd2WP5vPmEhcyHa4GsF-X03Qlc3rT97XlzIvXsP90IJ6c8lhI5diZuSA-Sh2LSV5M3tEwWgtNEUVZaE6NChzVEH4ES4yj9unOoHlUmfwhmTL7zHe9jYZqo1OXpnFpkBLreE3uwj8RipDSAFq3ip5xnk9hxUusquKzl0R8vecuf_vfl3uFzSBK1SImUGuOV_irZ00yme-CDydb15dWq-fShG-GavjM')`
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
              Our full-length AQA Higher Tier Trilogy mocks follow the format and style of real exams to reinforce understanding and refine technique across Biology, Chemistry, and Physics.
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
                  <span className="font-body-md">Biology Papers 1 & 2</span>
                </li>
                <li className="flex items-center gap-3 text-on-surface-variant">
                  <span className="material-symbols-outlined text-lime-green">check_circle</span>
                  <span className="font-body-md">Chemistry Papers 1 & 2</span>
                </li>
                <li className="flex items-center gap-3 text-on-surface-variant">
                  <span className="material-symbols-outlined text-lime-green">check_circle</span>
                  <span className="font-body-md">Physics Papers 1 & 2</span>
                </li>
              </ul>
              <button onClick={() => onNavigate('trial')} className="w-full py-4 bg-royal-purple text-white font-label-md rounded-xl hover:shadow-lg transition-all font-bold cursor-pointer">Access Now — Free</button>
            </div>

            {/* Resources Table/Cards */}
            <div className="lg:col-span-2 space-y-12">
              {/* Biology Section */}
              <div className="bg-white rounded-3xl p-6 md:p-10 shadow-[0px_4px_20px_rgba(0,0,0,0.05)]">
                <h4 className="font-headline-md text-headline-md text-charcoal mb-8 border-b pb-4 font-bold">Biology (AQA Trilogy)</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="group flex items-center justify-between p-4 rounded-xl border border-outline-variant hover:border-royal-purple transition-all cursor-pointer">
                    <div>
                      <p className="font-label-sm text-royal-purple font-bold">Biology Paper 1</p>
                      <p className="font-semibold text-on-surface">Mock Exam</p>
                    </div>
                    <span className="material-symbols-outlined text-royal-purple">download</span>
                  </div>
                  <div className="group flex items-center justify-between p-4 rounded-xl border border-outline-variant hover:border-lime-green transition-all cursor-pointer">
                    <div>
                      <p className="font-label-sm text-secondary font-bold">Biology Paper 1</p>
                      <p className="font-semibold text-on-surface">Mark Scheme</p>
                    </div>
                    <span className="material-symbols-outlined text-secondary">download</span>
                  </div>
                  <div className="group flex items-center justify-between p-4 rounded-xl border border-outline-variant hover:border-royal-purple transition-all cursor-pointer">
                    <div>
                      <p className="font-label-sm text-royal-purple font-bold">Biology Paper 2</p>
                      <p className="font-semibold text-on-surface">Mock Exam</p>
                    </div>
                    <span className="material-symbols-outlined text-royal-purple">download</span>
                  </div>
                  <div className="group flex items-center justify-between p-4 rounded-xl border border-outline-variant hover:border-lime-green transition-all cursor-pointer">
                    <div>
                      <p className="font-label-sm text-secondary font-bold">Biology Paper 2</p>
                      <p className="font-semibold text-on-surface">Mark Scheme</p>
                    </div>
                    <span className="material-symbols-outlined text-secondary">download</span>
                  </div>
                </div>
              </div>

              {/* Chemistry Section */}
              <div className="bg-white rounded-3xl p-6 md:p-10 shadow-[0px_4px_20px_rgba(0,0,0,0.05)]">
                <h4 className="font-headline-md text-headline-md text-charcoal mb-8 border-b pb-4 font-bold">Chemistry (AQA Trilogy)</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="group flex items-center justify-between p-4 rounded-xl border border-outline-variant hover:border-royal-purple transition-all cursor-pointer">
                    <div>
                      <p className="font-label-sm text-royal-purple font-bold">Chemistry Paper 1</p>
                      <p className="font-semibold text-on-surface">Mock Exam</p>
                    </div>
                    <span className="material-symbols-outlined text-royal-purple">download</span>
                  </div>
                  <div className="group flex items-center justify-between p-4 rounded-xl border border-outline-variant hover:border-lime-green transition-all cursor-pointer">
                    <div>
                      <p className="font-label-sm text-secondary font-bold">Chemistry Paper 1</p>
                      <p className="font-semibold text-on-surface">Mark Scheme</p>
                    </div>
                    <span className="material-symbols-outlined text-secondary">download</span>
                  </div>
                  <div className="group flex items-center justify-between p-4 rounded-xl border border-outline-variant hover:border-royal-purple transition-all cursor-pointer">
                    <div>
                      <p className="font-label-sm text-royal-purple font-bold">Chemistry Paper 2</p>
                      <p className="font-semibold text-on-surface">Mock Exam</p>
                    </div>
                    <span className="material-symbols-outlined text-royal-purple">download</span>
                  </div>
                  <div className="group flex items-center justify-between p-4 rounded-xl border border-outline-variant hover:border-lime-green transition-all cursor-pointer">
                    <div>
                      <p className="font-label-sm text-secondary font-bold">Chemistry Paper 2</p>
                      <p className="font-semibold text-on-surface">Mark Scheme</p>
                    </div>
                    <span className="material-symbols-outlined text-secondary">download</span>
                  </div>
                </div>
              </div>

              {/* Physics Section */}
              <div className="bg-white rounded-3xl p-6 md:p-10 shadow-[0px_4px_20px_rgba(0,0,0,0.05)]">
                <h4 className="font-headline-md text-headline-md text-charcoal mb-8 border-b pb-4 font-bold">Physics (AQA Trilogy)</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="group flex items-center justify-between p-4 rounded-xl border border-outline-variant hover:border-royal-purple transition-all cursor-pointer">
                    <div>
                      <p className="font-label-sm text-royal-purple font-bold">Physics Paper 1</p>
                      <p className="font-semibold text-on-surface">Mock Exam</p>
                    </div>
                    <span className="material-symbols-outlined text-royal-purple">download</span>
                  </div>
                  <div className="group flex items-center justify-between p-4 rounded-xl border border-outline-variant hover:border-lime-green transition-all cursor-pointer">
                    <div>
                      <p className="font-label-sm text-secondary font-bold">Physics Paper 1</p>
                      <p className="font-semibold text-on-surface">Mark Scheme</p>
                    </div>
                    <span className="material-symbols-outlined text-secondary">download</span>
                  </div>
                  <div className="group flex items-center justify-between p-4 rounded-xl border border-outline-variant hover:border-royal-purple transition-all cursor-pointer">
                    <div>
                      <p className="font-label-sm text-royal-purple font-bold">Physics Paper 2</p>
                      <p className="font-semibold text-on-surface">Mock Exam</p>
                    </div>
                    <span className="material-symbols-outlined text-royal-purple">download</span>
                  </div>
                  <div className="group flex items-center justify-between p-4 rounded-xl border border-outline-variant hover:border-lime-green transition-all cursor-pointer">
                    <div>
                      <p className="font-label-sm text-secondary font-bold">Physics Paper 2</p>
                      <p className="font-semibold text-on-surface">Mark Scheme</p>
                    </div>
                    <span className="material-symbols-outlined text-secondary">download</span>
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
            <p className="font-body-md text-on-surface-variant">Everything you need to know about our GCSE Combined Science mocks.</p>
          </div>
          <div className="space-y-4">
            {[
              {
                id: 1,
                q: 'Will using mock papers improve my exam technique?',
                a: 'Using GCSE Combined Science mock papers helps you practise applying your knowledge, improve your timing, and become more familiar with exam-style questions. Reviewing your answers against the model solutions helps you identify how to improve your approach to different question types.'
              },
              {
                id: 2,
                q: 'What topics are covered in the GCSE Combined Science mock papers?',
                a: 'Our GCSE Combined Science mock papers cover a wide range of topics from across the specification – for Biology, Chemistry, and Physics – giving you broad exam-style practice across all key areas.'
              },
              {
                id: 3,
                q: 'Are the GCSE Combined Science mock papers exam-board specific?',
                a: 'Yes – these GCSE Combined Science mock papers are designed for AQA Higher Tier. Each paper mirrors the structure, format, and question styles used in real exams, giving you realistic exam-style practice.'
              },
              {
                id: 4,
                q: 'Can I use the equation sheet when completing papers?',
                a: 'Yes – you should use the official equation sheets provided by your exam board when completing the relevant papers. This ensures your practice matches real exam conditions.'
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
