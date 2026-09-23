'use client';

import React, { useState } from 'react';
import LigatureIcon from './LigatureIcon';
import { ActivePage } from '@/lib/types';

interface ResourcesHubProps {
  onNavigate: (page: ActivePage, subjectTitle?: string) => void;
}

export default function ResourcesHub({ onNavigate }: ResourcesHubProps) {
  const [userType, setUserType] = useState('Student');
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmail('');
      }, 3000);
    }
  };

  const subjects = [
    { name: 'Biology', icon: 'eyeglasses_2', count: '420+ Resources' },
    { name: 'Chemistry', icon: 'science', count: '380+ Resources' },
    { name: 'Physics', icon: 'bolt', count: '510+ Resources' },
    { name: 'Maths', icon: 'calculate', count: '1200+ Resources' },
    { name: 'English', icon: 'menu_book', count: '290+ Resources' },
    { name: 'Economics', icon: 'payments', count: '150+ Resources' },
    { name: 'Psychology', icon: 'psychology', count: '120+ Resources' },
    { name: 'Geography', icon: 'public', count: '210+ Resources' },
    { name: 'Computer Science', icon: 'desktop_windows', count: '180+ Resources' },
  ];

  return (
    <div className="bg-surface font-body-md text-on-surface">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[420px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            alt="Educational background"
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBornQmUz2cbceDYq8uC1YM9W-tuiBYJA-XpJ1aFaU56romvQValR7Lu2b3CRSZLBT3HdumVLF49SvV4EVyYwTudYpkc6AM4t623_VjDgw4wuagONaiAJZaldITu0wtTYjOnX27s8JXUOPefydRiTmoObqDPB9e_WZlkAj7a883vHJPEIuTl3D7N1SvEc6zQE9HQ5lneHZ78MP_LhWNcwTAyABCiVCU9dupmGNiSZHxRxx3lK2re4tQYQ"
          />
          <div className="absolute inset-0 hero-gradient bg-black/50"></div>
        </div>
        <div className="relative z-10 w-full max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop text-on-primary">
          <div className="max-w-2xl">
            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg font-bold mb-6 text-white">
              Expert Resources for Academic Excellence
            </h1>
            <p className="font-body-lg text-body-lg text-on-primary-container opacity-90 mb-8 leading-relaxed text-white/90">
              Access our comprehensive library of free mock papers, expert predicted papers, and subject-specific revision guides to boost your exam confidence.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => {
                  const el = document.getElementById('browse-subjects');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-lime-green text-on-secondary-fixed font-label-md text-label-md px-8 py-4 rounded-xl hover:shadow-lg transition-all cursor-pointer font-bold"
              >
                Explore All Papers
              </button>
              <button
                onClick={() => onNavigate('trial')}
                className="border-2 border-on-primary text-on-primary font-label-md text-label-md px-8 py-4 rounded-xl hover:bg-white/10 transition-all cursor-pointer font-bold text-white"
              >
                Watch Tutorials
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Core Resource Categories - Bento Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="text-center mb-16">
            <h2 className="font-headline-lg text-headline-lg text-charcoal mb-4 font-bold">
              Everything You Need to Succeed
            </h2>
            <div className="w-20 h-1.5 bg-lime-green mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
            {/* Mock Papers */}
            <div className="md:col-span-8 bg-soft-gray p-8 md:p-10 rounded-[2rem] bento-card relative overflow-hidden flex flex-col justify-between hover:-translate-y-1 transition-transform duration-300">
              <div className="relative z-10">
                <div className="w-14 h-14 bg-royal-purple/10 rounded-2xl flex items-center justify-center text-royal-purple mb-6">
                  <span className="material-symbols-outlined text-3xl">menu_book</span>
                </div>
                <h3 className="font-headline-md text-headline-md text-charcoal mb-4 font-bold">
                  Mock Papers
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
                  Full-length, realistic exam papers designed to mirror real test formats and improve timing. Perfect for final sprint preparation.
                </p>
              </div>
              <div
                onClick={() => onNavigate('curriculum')}
                className="mt-8 flex items-center text-primary font-label-md text-label-md gap-2 cursor-pointer hover:gap-4 transition-all font-bold"
              >
                Practice Now <LigatureIcon name="arrow_forward" />
              </div>
            </div>

            {/* Predicted Papers */}
            <div className="md:col-span-4 bg-primary text-on-primary p-8 md:p-10 rounded-[2rem] bento-card flex flex-col justify-between hover:-translate-y-1 transition-transform duration-300">
              <div>
                <div className="inline-block bg-lime-green text-on-secondary-fixed px-3 py-1 rounded-full font-label-sm text-label-sm mb-6 font-bold">
                  NEW FOR 2026
                </div>
                <h3 className="font-headline-md text-headline-md mb-4 text-white font-bold">
                  Predicted Papers
                </h3>
                <p className="font-body-md text-body-md opacity-90 text-white/90">
                  Expert-crafted papers highlighting topics most likely to appear in this year's exams based on recent trends.
                </p>
              </div>
              <button
                onClick={() => onNavigate('curriculum')}
                className="mt-8 bg-white/10 border border-white/20 w-full py-4 rounded-xl font-label-md text-label-md hover:bg-white/20 transition-all text-white font-bold cursor-pointer"
              >
                View Predictions
              </button>
            </div>

            {/* Revision Resources */}
            <div className="md:col-span-12 bg-white border border-outline-variant/30 shadow-[0px_4px_20px_rgba(0,0,0,0.05)] p-8 md:p-10 rounded-[2rem] bento-card flex flex-col md:flex-row items-center gap-12 hover:-translate-y-1 transition-transform duration-300">
              <div className="md:w-1/2">
                <div className="w-14 h-14 bg-lime-green/10 rounded-2xl flex items-center justify-center text-secondary mb-6">
                  <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                    auto_awesome
                  </span>
                </div>
                <h3 className="font-headline-md text-headline-md text-charcoal mb-4 font-bold">
                  Personalized Revision
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-6">
                  Personalized notes, flashcards, and topic-based questions for GCSE and A-Level success. Organize your study session with expert-vetted materials.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 font-body-md text-on-surface-variant">
                    <span className="material-symbols-outlined text-lime-green text-xl font-bold">check_circle</span> Interactive Flashcards
                  </li>
                  <li className="flex items-center gap-3 font-body-md text-on-surface-variant">
                    <span className="material-symbols-outlined text-lime-green text-xl font-bold">check_circle</span> Topic-based Worksheets
                  </li>
                </ul>
              </div>
              <div className="md:w-1/2 w-full h-64 bg-soft-gray rounded-2xl flex items-center justify-center overflow-hidden">
                <img
                  className="w-full h-full object-cover rounded-2xl"
                  data-alt="Revision dashboard UI representation"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCSPzUDkZCuhAGXbhockMb9GTVwnmtOt12sqbwXZ6-bw2ZkR15mxFFGnnVJ_WCi645wIsxqPv6YiSzfasU_5PEd4E4JYnakOBN_1cg6JJzhNb7hEAC-cH-JjfTZfuVehmtvaPE6j6_Vhv1o8Lt2qq8kcRQYio6Avc0Yn_iUX9wOVMgfznCJfvEWVS7aGRPSDNdFRb1Kyyo8ooewTZ851jYxJ75utgML8IzBk6WszrIyuSEeD25VsVYwlA"
                  alt="Revision dashboard preview"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Browse By Subject Grid */}
      <section id="browse-subjects" className="py-24 bg-surface-container-lowest">
        <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <h2 className="font-headline-lg text-headline-lg text-charcoal mb-2 font-bold">
                Browse by Subject
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Comprehensive resources tailored for every curriculum.
              </p>
            </div>
            <button
              onClick={() => onNavigate('curriculum')}
              className="flex items-center gap-2 text-primary font-label-md text-label-md hover:underline decoration-2 underline-offset-4 cursor-pointer font-bold"
            >
              View All Subjects <LigatureIcon name="expand_more" />
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {subjects.map((sub) => (
              <button
                key={sub.name}
                onClick={() => {
                  const availableSubjects = ['Maths', 'English', 'Science', 'Physics', 'Chemistry', 'Biology'];
                  if (availableSubjects.includes(sub.name)) {
                    onNavigate('subject', sub.name);
                  } else {
                    onNavigate('curriculum');
                  }
                }}
                className="group bg-white p-6 rounded-2xl border border-outline-variant/20 shadow-sm hover:border-primary/40 hover:shadow-md transition-all text-center cursor-pointer"
              >
                <div className="w-16 h-16 bg-soft-gray rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/10 transition-colors">
                  <span className="material-symbols-outlined text-primary group-hover:scale-110 transition-transform">
                    {sub.icon}
                  </span>
                </div>
                <span className="font-headline-md text-headline-md text-charcoal block mb-1 font-bold">
                  {sub.name}
                </span>
                <span className="font-label-sm text-label-sm text-on-surface-variant">
                  {sub.count}
                </span>
              </button>
            ))}
            <button
              onClick={() => onNavigate('trial')}
              className="group bg-white p-6 rounded-2xl border border-dashed border-outline-variant hover:border-primary transition-all text-center flex flex-col justify-center items-center cursor-pointer"
            >
              <span className="material-symbols-outlined text-on-surface-variant block mb-2">add</span>
              <span className="font-label-md text-label-md text-on-surface-variant font-medium">Suggest Subject</span>
            </button>
          </div>
        </div>
      </section>

      {/* Community CTA Section */}
      <section className="py-24">
        <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="bg-charcoal rounded-[3rem] p-8 md:p-20 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-lime-green/10 rounded-full blur-3xl -ml-32 -mb-32"></div>
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="font-headline-lg text-headline-lg text-on-primary mb-6 text-white font-bold">
                Join Our Community
              </h2>
              <p className="font-body-lg text-body-lg text-on-primary/80 mb-10 text-white/80">
                Sign up to our monthly newsletter to be kept in the loop about new resources, exam tips, and exclusive expert blogs.
              </p>
              {subscribed ? (
                <div className="bg-lime-green text-charcoal font-bold p-4 rounded-xl max-w-lg mx-auto">
                  Thank you for subscribing!
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto">
                  <input
                    className="flex-grow bg-white/10 border border-white/20 rounded-xl px-6 py-4 text-on-primary focus:ring-2 focus:ring-primary focus:border-transparent outline-none font-body-md text-white placeholder-white/60"
                    placeholder="Enter your email address"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <button
                    type="submit"
                    className="bg-lime-green text-on-secondary-fixed font-label-md text-label-md px-8 py-4 rounded-xl hover:shadow-lg transition-all whitespace-nowrap font-bold cursor-pointer"
                  >
                    Subscribe Now
                  </button>
                </form>
              )}
              <div className="mt-8 flex justify-center gap-8 text-on-primary/80 font-label-sm text-label-sm text-white/80">
                {['Student', 'Parent', 'Teacher'].map((type) => (
                  <label key={type} className="flex items-center gap-2 cursor-pointer hover:text-white transition-colors">
                    <input
                      className="text-primary focus:ring-primary bg-white/10 border-white/20 cursor-pointer"
                      name="user_type"
                      type="radio"
                      checked={userType === type}
                      onChange={() => setUserType(type)}
                    />
                    {type}
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
