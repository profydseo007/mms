'use client';

import React from 'react';
import { ActivePage } from '@/lib/types';
import { CheckCircle, Users, GraduationCap, MapPin, Sparkles, HelpCircle, Globe } from 'lucide-react';

interface AboutProps {
  onNavigate: (page: ActivePage, subjectTitle?: string) => void;
}

export default function About({ onNavigate }: AboutProps) {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden bg-white">
        <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop flex flex-col md:flex-row items-center gap-16 relative z-10">
          <div className="w-full md:w-1/2 space-y-6">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full font-label-sm text-label-sm uppercase tracking-wider">Our Journey</span>
            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-charcoal font-bold leading-tight">
              Empowering Students Through <span className="text-royal-purple">Patient</span>, Professional Math Tutoring.
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl font-sans">
              We believe every student has the potential to master mathematics. Our mission is to bridge the gap between confusion and confidence through personalized, expert-led guidance.
            </p>
            <div className="pt-4 flex flex-wrap gap-4">
              <button 
                onClick={() => onNavigate('home')}
                className="bg-royal-purple text-white px-8 py-4 rounded-full font-label-md text-label-md hover:shadow-lg transition-all cursor-pointer"
              >
                Explore Our Lessons
              </button>
              <button 
                onClick={() => onNavigate('trial')}
                className="border-2 border-royal-purple text-royal-purple px-8 py-4 rounded-full font-label-md text-label-md hover:bg-royal-purple hover:text-white transition-all cursor-pointer"
              >
                Meet Our Tutors
              </button>
            </div>
          </div>
          <div className="w-full md:w-1/2 relative">
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl">
              <img 
                className="w-full h-auto object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAO-qcNcJELhkgNJxi7rXlfB1NM2H5Yt4m4Va324UhUoq7hEpyh84VJmXefT76vhN33ChYw3Qbft-kSoLwx9ta2-Df48cOZhgt90-2zUG6XvZ7iyWuW8uPUHXzskGEuX-5m0l8xxJncEHyY6cz4VH7MIwZ9L6mjuCEJFRIH6VFGXVxebSKzpGz2Sgh1Cfx_Y2tCeueD2IOWTZHA7-LkW5XaVu8b1ZWYQi9YLlTQSIAU2452ireSmJqZLg"
                alt="Focused student during virtual tutoring"
              />
            </div>
            {/* Decorative Graphic */}
            <div className="absolute -top-12 -right-12 w-64 h-64 -z-10 opacity-20 pointer-events-none">
              <img 
                className="w-full h-full object-contain" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD6sYTBT_6p2GpT86FI7vPCokQNmCUy77qasmZDNPE_dk9bh5aKB2n8gI0QJlqMuh5Si3c5seD3LbGCCxU0ySlEXaovt-P97Img4ArokgJw2JxMoY48ULnCTaSLlmj8d3wPh-GkNKUuobUzBxUgiWQLM6O2edyIQdfh6LyzxlR1iBmwzOdavd2VZj_p4aLbAggNZGLNUcgAnMZWq7A0UQM9GI9bu8jk7OzFSs7GKinmk2v9WGvVIT1KxA"
                alt="Decorative mathematical curves"
              />
            </div>
          </div>
        </div>
        {/* Background Shape */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-soft-gray -z-20 rounded-l-[100px]"></div>
      </section>

      {/* Our Mission & Vision */}
      <section className="py-24 bg-surface-container-lowest border-y border-surface-container">
        <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="flex flex-col md:flex-row gap-12 items-start">
            <div className="md:sticky md:top-32 w-full md:w-1/3">
              <h2 className="font-headline-lg text-headline-lg text-charcoal mb-4 font-bold">Our Mission <br />&amp; Vision</h2>
              <div className="w-12 h-1 bg-lime-green rounded-full"></div>
            </div>
            <div className="w-full md:w-2/3 space-y-12">
              <div className="glass-card p-10 rounded-[2rem] border-l-8 border-l-royal-purple shadow-sm">
                <h3 className="font-headline-md text-headline-md text-royal-purple mb-4 font-bold">Accessible Learning</h3>
                <p className="text-body-lg text-on-surface-variant font-sans">
                  At Math Make Smart, we're dedicated to making world-class mathematics education accessible and stress-free for students across the globe. We envision a world where no student feels intimidated by numbers.
                </p>
              </div>
              <div className="glass-card p-10 rounded-[2rem] border-l-8 border-l-lime-green shadow-sm">
                <h3 className="font-headline-md text-headline-md text-secondary mb-4 font-bold">Patient Mastery</h3>
                <p className="text-body-lg text-on-surface-variant font-sans">
                  We prioritize mastery over memorization. By fostering a patient-first environment, we allow students to ask questions freely, build strong foundations, and eventually tackle complex problems with ease.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Math Make Smart Story */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop flex flex-col lg:flex-row gap-16 items-center">
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <img 
              className="rounded-[2rem] shadow-xl w-full" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCUqzSktCp_rHA_2TN5YD22Q9S9BE_YWK08jYjtrwKw7yqw1cXAKuwFkcWP1vdb-nIvZD8UFIC78gx_9_7s0lwcCnx_RpSocJD8vhfZs2BPNM4bv8JB4WL79Nh8OdyYJkLsTP5p5pixzLKwfRgsWd92dfXLwgKI0Ohs1YUIeIiwfe-lz5x8n0vcMahTZ_DwXpCeHygk-mEB1umTeLXOeFDFevApyfVEnQ3PL9GMNpkTT43HbyH4tYt3fA"
              alt="Educators collaborating on mathematics curriculum"
            />
          </div>
          <div className="w-full lg:w-1/2 order-1 lg:order-2 space-y-6">
            <h2 className="font-headline-lg text-headline-lg text-charcoal font-bold">The Math Make Smart Story</h2>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Born from a collective of experienced educators who noticed a growing "math anxiety" among students, Math Make Smart was founded on a simple principle: Math shouldn't be scary.
            </p>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              We started as a small group of local tutors and quickly realized the need for a patient, structured, and professional digital platform that could provide high-quality guidance regardless of geography. Today, we are a global community of experts dedicated to one thing—helping your child succeed.
            </p>
            <div className="flex items-center gap-8 pt-4">
              <div>
                <div className="text-display-lg-mobile text-royal-purple font-bold">15k+</div>
                <div className="font-label-sm text-on-surface-variant uppercase tracking-wider">Students Helped</div>
              </div>
              <div>
                <div className="text-display-lg-mobile text-secondary font-bold">98%</div>
                <div className="font-label-sm text-on-surface-variant uppercase tracking-wider">Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Math Make Smart (Bento Grid) */}
      <section className="py-24 bg-soft-gray border-y border-surface-container">
        <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="text-center mb-16 space-y-4">
            <h2 className="font-headline-lg text-headline-lg text-charcoal font-bold">Why Choose Math Make Smart?</h2>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto">Discover the pillars that define our tutoring experience and ensure student success.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Column 1 */}
            <div className="flex flex-col gap-8">
              <div className="bento-item hover-lift bg-white rounded-2xl p-8 border border-surface-container shadow-sm">
                <span className="material-symbols-outlined text-4xl text-royal-purple mb-4">verified_user</span>
                <h3 className="font-headline-md text-headline-md text-charcoal mb-2 font-medium">Expert, Vetted Tutors</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">We only hire the top 5% of applicants, ensuring your child learns from the best minds in mathematics education.</p>
              </div>
              <div className="bento-item hover-lift bg-primary-container text-on-primary-container rounded-2xl p-8 shadow-sm">
                <span className="material-symbols-outlined text-4xl text-white mb-4">psychology</span>
                <h3 className="font-headline-md text-headline-md text-white mb-2 font-medium">Patient-First Approach</h3>
                <p className="font-body-md text-body-md text-white/95">No rushing. No pressure. We move at the student's pace to ensure complete conceptual clarity.</p>
              </div>
            </div>
            {/* Column 2 */}
            <div className="flex flex-col gap-8">
              <div className="bento-item hover-lift bg-white rounded-2xl p-8 border border-surface-container shadow-sm flex flex-col justify-between h-full">
                <div>
                  <span className="material-symbols-outlined text-4xl text-secondary mb-4">public</span>
                  <h3 className="font-headline-md text-headline-md text-charcoal mb-2 font-medium">Global Curriculum</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">Aligned with educational standards in the UK, USA, CA, AU, NZ, and IE.</p>
                </div>
                <div className="mt-8 pt-8 border-t border-surface-variant flex flex-wrap gap-2">
                  {['GCSE', 'SAT/ACT', 'VCE', 'Calculus'].map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-soft-gray rounded-full text-xs font-semibold text-on-surface-variant border border-surface-container">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            {/* Column 3 */}
            <div className="flex flex-col gap-8">
              <div className="bento-item hover-lift bg-secondary-container rounded-2xl p-8 shadow-sm">
                <span className="material-symbols-outlined text-4xl text-on-secondary-container mb-4">monitoring</span>
                <h3 className="font-headline-md text-headline-md text-on-secondary-container mb-2 font-medium">AI-Driven Progress</h3>
                <p className="font-body-md text-body-md text-on-secondary-container/85">Real-time data tracking that identifies knowledge gaps and predicts future learning milestones.</p>
              </div>
              <div className="bento-item hover-lift bg-white rounded-2xl p-8 border border-surface-container shadow-sm">
                <span className="material-symbols-outlined text-4xl text-royal-purple mb-4">card_membership</span>
                <h3 className="font-headline-md text-headline-md text-charcoal mb-2 font-medium">Verified Results</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">Join thousands of students who have seen an average 2-grade improvement within 6 months.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Global Presence */}
      <section className="py-24 bg-surface-container-lowest relative overflow-hidden border-y border-surface-container/60">
        {/* Globe / World Background Graphic Element */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none opacity-25 md:opacity-35">
          <div className="relative w-[480px] h-[480px] md:w-[680px] md:h-[680px]">
            {/* Soft Ambient Radial Glow */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-royal-purple/20 via-primary-container/15 to-lime-green/15 blur-3xl transform scale-95"></div>
            
            {/* SVG Wireframe Globe & World Map Continents */}
            <svg viewBox="0 0 500 500" className="w-full h-full text-royal-purple stroke-current fill-none animate-spin-slow" style={{ animationDuration: '100s' }}>
              {/* Outer globe boundary */}
              <circle cx="250" cy="250" r="230" strokeWidth="1.5" strokeDasharray="6 6" />
              <circle cx="250" cy="250" r="210" strokeWidth="1" opacity="0.6" />
              
              {/* Equator & Latitudes */}
              <line x1="20" y1="250" x2="480" y2="250" strokeWidth="1.5" opacity="0.7" />
              <ellipse cx="250" cy="250" rx="230" ry="160" strokeWidth="1" opacity="0.4" />
              <ellipse cx="250" cy="250" rx="230" ry="90" strokeWidth="1" opacity="0.4" />
              
              {/* Prime Meridian & Longitudes */}
              <line x1="250" y1="20" x2="250" y2="480" strokeWidth="1.5" opacity="0.7" />
              <ellipse cx="250" cy="250" rx="160" ry="230" strokeWidth="1" opacity="0.4" />
              <ellipse cx="250" cy="250" rx="90" ry="230" strokeWidth="1" opacity="0.4" />

              {/* World Map Stylized Outline Paths */}
              {/* North America */}
              <path d="M 110 130 Q 130 110 160 120 T 180 160 T 150 200 T 100 170 Z" strokeWidth="1.5" className="fill-royal-purple/10" opacity="0.7" />
              {/* South America */}
              <path d="M 160 230 Q 180 250 170 290 T 150 340 T 130 280 Z" strokeWidth="1.5" className="fill-royal-purple/10" opacity="0.7" />
              {/* Europe & Africa */}
              <path d="M 230 120 Q 260 110 270 140 T 250 180 Z" strokeWidth="1.5" className="fill-royal-purple/10" opacity="0.7" />
              <path d="M 240 190 Q 280 200 270 270 T 230 310 T 220 240 Z" strokeWidth="1.5" className="fill-royal-purple/10" opacity="0.7" />
              {/* Asia & Australia */}
              <path d="M 280 110 Q 360 100 380 160 T 320 210 T 270 150 Z" strokeWidth="1.5" className="fill-royal-purple/10" opacity="0.7" />
              <path d="M 340 280 Q 380 280 370 320 T 330 330 Z" strokeWidth="1.5" className="fill-royal-purple/10" opacity="0.7" />

              {/* Pulsing Global Connection Nodes */}
              <circle cx="150" cy="150" r="5" className="fill-royal-purple" />
              <circle cx="250" cy="130" r="5" className="fill-royal-purple" />
              <circle cx="250" cy="230" r="5" className="fill-royal-purple" />
              <circle cx="350" cy="160" r="5" className="fill-royal-purple" />
              <circle cx="350" cy="300" r="5" className="fill-royal-purple" />
              
              {/* Arc Connection Lines */}
              <path d="M 150 150 Q 200 100 250 130" strokeWidth="1" strokeDasharray="3 3" opacity="0.8" />
              <path d="M 250 130 Q 300 110 350 160" strokeWidth="1" strokeDasharray="3 3" opacity="0.8" />
              <path d="M 350 160 Q 380 230 350 300" strokeWidth="1" strokeDasharray="3 3" opacity="0.8" />
            </svg>
          </div>
        </div>

        {/* Foreground Section Content */}
        <div className="relative z-10 max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-royal-purple/10 text-royal-purple rounded-full font-label-md text-sm font-semibold mb-4">
            <Globe className="w-4 h-4" />
            <span>Worldwide Academic Reach</span>
          </div>
          <h2 className="font-headline-lg text-headline-lg text-charcoal mb-4 font-semibold">Our Global Presence</h2>
          <p className="text-body-lg text-on-surface-variant max-w-xl mx-auto mb-12">
            Delivering top-tier, curriculum-aligned math tutoring to students across 6 key international regions.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 sm:gap-8">
            {[
              { name: 'United Kingdom', code: 'UK' },
              { name: 'USA', code: 'US' },
              { name: 'Canada', code: 'CA' },
              { name: 'Australia', code: 'AU' },
              { name: 'New Zealand', code: 'NZ' },
              { name: 'Ireland', code: 'IE' }
            ].map((country) => (
              <div key={country.name} className="flex flex-col items-center gap-4 group cursor-pointer">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center border border-surface-container group-hover:bg-royal-purple group-hover:border-royal-purple group-hover:text-white transition-all duration-300 shadow-sm group-hover:shadow-lg group-hover:-translate-y-1">
                  <MapPin className="w-6 h-6 text-royal-purple group-hover:text-white transition-colors" />
                </div>
                <span className="font-label-md text-label-md text-on-surface-variant group-hover:text-royal-purple font-medium transition-colors">{country.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 relative overflow-hidden bg-white">
        <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="relative bg-royal-purple rounded-[3rem] p-12 md:p-24 text-center text-white overflow-hidden shadow-2xl">
            <div className="relative z-10 max-w-2xl mx-auto space-y-8">
              <h2 className="text-display-lg-mobile md:text-headline-lg font-display text-white font-semibold">Start your child's journey to math mastery</h2>
              <p className="font-body-lg text-body-lg text-white/85">Experience the difference a patient, professional tutor can make. Join our community today.</p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button 
                  onClick={() => onNavigate('trial')}
                  className="bg-lime-green text-charcoal px-10 py-5 rounded-full font-label-md text-label-md hover:scale-105 transition-transform shadow-lg cursor-pointer"
                >
                  Book Free Lesson
                </button>
                <button 
                  onClick={() => onNavigate('trial')}
                  className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-10 py-5 rounded-full font-label-md text-label-md hover:bg-white/20 transition-all cursor-pointer"
                >
                  Contact Us
                </button>
              </div>
            </div>
            {/* Decorative Circle Shaders */}
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-lime-green/10 rounded-full blur-3xl"></div>
          </div>
        </div>
      </section>
    </div>
  );
}
