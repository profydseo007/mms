'use client';

import React from 'react';
import LigatureIcon from '../LigatureIcon';
import { ActivePage } from '@/lib/types';
import { Clock, DollarSign, CheckCircle2, Star, GraduationCap, BookOpen, Monitor, ArrowUpRight, Check, Shield } from 'lucide-react';

interface SubjectComponentProps {
  onNavigate: (page: ActivePage, subjectTitle?: string) => void;
}

export default function ChemistrySubject({ onNavigate }: SubjectComponentProps) {
  return (
    <div className="bg-background text-on-surface font-body-md selection:bg-primary-fixed selection:text-on-primary-fixed">
      {/* Hero Section */}
      <section className="relative overflow-hidden pb-16 md:py-24 bg-surface-lowest py-20">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative z-10 space-y-6">
            <span className="bg-primary-fixed text-on-primary-fixed-variant px-4 py-1.5 rounded-full text-label-sm font-label-sm uppercase tracking-wider font-semibold">
              Top-Rated US Curriculum Support
            </span>
            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-charcoal font-bold">
              Online Chemistry Tutor in USA
            </h1>
            <p className="text-body-lg font-body-lg text-on-surface-variant max-w-lg font-sans">
              Master the science of matter from Grade 9 to AP Chemistry. Expert-led, 1-on-1 virtual sessions tailored to American state standards and rigorous exam boards.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={() => onNavigate('trial')}
                className="bg-royal-purple text-white px-8 py-4 rounded-xl font-label-md text-label-md hover:shadow-lg hover:shadow-primary/20 transition-all active:scale-95 flex items-center justify-center gap-2 font-bold cursor-pointer"
              >
                Book Free Trial Lesson
                <LigatureIcon name="arrow_forward" className="text-sm" />
              </button>
              <button
                onClick={() => onNavigate('a-levels')}
                className="border-2 border-royal-purple text-royal-purple px-8 py-4 rounded-xl font-label-md text-label-md hover:bg-soft-gray transition-all flex items-center justify-center font-bold cursor-pointer"
              >
                View Pricing
              </button>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute -inset-4 bg-lime-green/20 blur-3xl rounded-full opacity-50 group-hover:opacity-70 transition-opacity"></div>
            <div className="relative h-[380px] md:h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl">
              <img
                alt="American high school student focused on chemistry equations and online learning"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHVpd-6X9nwB5jc2U9MpRkKYXzjmBuxQn25aQ8OclEcExAzAA-yRs_58RJBptdyEYgDXSuhPW1A6_zU5PMS337-_W3IvDri3vgxzjHS99Jd4Kuf-aOPf5KJIIcOuK7lrGgomSMvv-7FzF-k3EQXjuBlnQUTVNyhqqd5zugkDKmnZn5R8VFDH2AQUQSo0ZvR5ty-_b-bctwIDasCShWOVBPW-XFsEHWcYlwMYSZQbWuhQK652ASHPQbZHe3TlCFNHmfcnsTppkNcFHQyjE"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="bg-soft-gray py-20 md:py-24">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="text-center mb-16 space-y-4">
            <h2 className="font-headline-lg text-headline-lg text-charcoal font-bold">What We Offer</h2>
            <p className="text-on-surface-variant max-w-2xl mx-auto">Comprehensive, personalized virtual tutoring designed around the unique demands of American high school and AP chemistry frameworks.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:-translate-y-2 transition-transform duration-300">
              <div className="w-12 h-12 bg-primary-fixed rounded-xl flex items-center justify-center mb-6">
                <Clock className="text-royal-purple" size={24} />
              </div>
              <h3 className="font-headline-md text-headline-md mb-3 text-charcoal font-bold">Flexible Timings</h3>
              <p className="text-on-surface-variant">Customized schedules built around your busy American after-school commitments, available evenings and weekends across all US time zones.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:-translate-y-2 transition-transform duration-300 border-b-4 border-lime-green">
              <div className="w-12 h-12 bg-primary-fixed rounded-xl flex items-center justify-center mb-6">
                <DollarSign className="text-royal-purple" size={24} />
              </div>
              <h3 className="font-headline-md text-headline-md mb-3 text-charcoal font-bold">Affordable Rates</h3>
              <p className="text-on-surface-variant">Competitive pricing for top-tier virtual tutoring, featuring flexible block booking discounts and clear, transparent fee packages.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:-translate-y-2 transition-transform duration-300">
              <div className="w-12 h-12 bg-primary-fixed rounded-xl flex items-center justify-center mb-6">
                <Shield className="text-royal-purple" size={24} />
              </div>
              <h3 className="font-headline-md text-headline-md mb-3 text-charcoal font-bold">Superior Quality Tutoring</h3>
              <p className="text-on-surface-variant">Learn from elite chemistry specialists equipped with advanced degrees and extensive experience in the US education system.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Stages & Grade Plans */}
      <section className="py-20 md:py-24 bg-white overflow-hidden">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="font-headline-lg text-headline-lg text-charcoal mb-4 font-bold">Master Every Grade & Curriculum Stage</h2>
              <p className="text-on-surface-variant">From introductory atomic structure to complex stoichiometry and AP Chemistry exams, we deliver targeted support tailored for US students.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 space-y-8">
              <div className="bg-soft-gray p-8 rounded-3xl relative overflow-hidden group">
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="bg-royal-purple text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">1</span>
                    <h3 className="font-headline-md text-headline-md font-bold">High School Foundation (Grades 9-10)</h3>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    <div className="flex items-center gap-2 bg-white/50 p-3 rounded-lg font-medium"><CheckCircle2 className="text-royal-purple" size={18} /> Atomic Theory</div>
                    <div className="flex items-center gap-2 bg-white/50 p-3 rounded-lg font-medium"><CheckCircle2 className="text-royal-purple" size={18} /> Periodic Trends</div>
                    <div className="flex items-center gap-2 bg-white/50 p-3 rounded-lg font-medium"><CheckCircle2 className="text-royal-purple" size={18} /> Chemical Bonding</div>
                    <div className="flex items-center gap-2 bg-white/50 p-3 rounded-lg font-medium"><CheckCircle2 className="text-royal-purple" size={18} /> Stoichiometry Basics</div>
                    <div className="flex items-center gap-2 bg-white/50 p-3 rounded-lg font-medium"><CheckCircle2 className="text-royal-purple" size={18} /> States of Matter</div>
                    <div className="flex items-center gap-2 bg-white/50 p-3 rounded-lg font-medium"><CheckCircle2 className="text-royal-purple" size={18} /> Lab Safety</div>
                  </div>
                </div>
              </div>

              <div className="bg-white border-2 border-soft-gray p-8 rounded-3xl shadow-sm">
                <div className="flex items-center gap-3 mb-8">
                  <span className="bg-royal-purple text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">2</span>
                  <h3 className="font-headline-md text-headline-md font-bold">Advanced Chemistry & Honors (Grade 11)</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h4 className="font-label-md text-label-md text-royal-purple uppercase tracking-widest border-b border-soft-gray pb-2 font-bold">Core Concepts</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2 text-on-surface-variant font-medium"><Check className="text-lime-green mt-1" size={18} /> Gas Laws & Pressures</li>
                      <li className="flex items-start gap-2 text-on-surface-variant font-medium"><Check className="text-lime-green mt-1" size={18} /> Solutions & Molarity</li>
                      <li className="flex items-start gap-2 text-on-surface-variant font-medium"><Check className="text-lime-green mt-1" size={18} /> Acids, Bases & pH</li>
                      <li className="flex items-start gap-2 text-on-surface-variant font-medium"><Check className="text-lime-green mt-1" size={18} /> Reaction Kinetics</li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h4 className="font-label-md text-label-md text-royal-purple uppercase tracking-widest border-b border-soft-gray pb-2 font-bold">Problem Solving</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2 text-on-surface-variant font-medium"><Star className="text-royal-purple mt-1" size={18} /> Chemical Equilibrium</li>
                      <li className="flex items-start gap-2 text-on-surface-variant font-medium"><Star className="text-royal-purple mt-1" size={18} /> Thermodynamics & Enthalpy</li>
                      <li className="flex items-start gap-2 text-on-surface-variant font-medium"><Star className="text-royal-purple mt-1" size={18} /> Redox Reactions</li>
                      <li className="flex items-start gap-2 text-on-surface-variant font-medium"><Star className="text-royal-purple mt-1" size={18} /> Electrochemistry</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 h-full">
              <div className="bg-primary-container text-on-primary-container p-8 rounded-3xl h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-8">
                    <span className="bg-white text-royal-purple w-10 h-10 rounded-full flex items-center justify-center font-bold">3</span>
                    <h3 className="font-headline-md text-headline-md text-white font-bold">AP Chemistry & College Prep (Grade 12)</h3>
                  </div>
                  <div className="space-y-6">
                    <div className="bg-white/10 p-5 rounded-2xl border border-white/20">
                      <h4 className="font-bold mb-2">Advanced Atomic Structure</h4>
                      <p className="text-sm opacity-90">Quantum mechanical model, electron configurations, and photoelectron spectroscopy.</p>
                    </div>
                    <div className="bg-white/10 p-5 rounded-2xl border border-white/20">
                      <h4 className="font-bold mb-2">Intermolecular Forces</h4>
                      <p className="text-sm opacity-90">Properties of solids, liquids, solutions, and molecular geometry configurations.</p>
                    </div>
                    <div className="bg-white/10 p-5 rounded-2xl border border-white/20">
                      <h4 className="font-bold mb-2">Organic & Biochemistry</h4>
                      <p className="text-sm opacity-90">Functional groups, reaction mechanisms, and foundational biological molecules.</p>
                    </div>
                  </div>
                </div>
                <div className="mt-8 rounded-2xl overflow-hidden h-48">
                  <img
                    alt="American students collaborating on advanced college prep chemistry"
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida/AP1WRLvoWmsfUkKcpSMEXX4erD26CwVSYrQQD9z1_FPA9Hk-r4yfTZwI3YA8qPmVwcDq3s_7eg67DrZRP-2d_BRSet_ZI8uJKGj7n_S9rZfy1CP0iH4Ru29YX5xfeVJw6WcqwbNHUKtYDbkYaHFTPWfei4c_IFL3Kex5FvGAiAHLPqK9d6eb-8sZx60ACEGP90YPe6jPwI435CzF_ia0rxHG77cMPlVV1jUE1pR_qSItLNbee9uIg218Nmk7fjov"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Physics Lesson Plans Sections for Each Grade */}
      <section className="py-20 md:py-24 bg-soft-gray">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="text-center mb-16 space-y-4">
            <h2 className="font-headline-lg text-headline-lg text-charcoal font-bold">Integrated STEM & Physics Lesson Plans By Grade</h2>
            <p className="text-on-surface-variant max-w-2xl mx-auto">Because advanced chemistry relies heavily on physical science principles, our curriculum seamlessly integrates targeted physics lesson plans for every US grade level.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
            <div className="bg-white p-8 rounded-3xl shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-royal-purple font-bold text-sm tracking-wider uppercase">Grade 9 Plan</span>
                <h3 className="font-headline-md text-headline-md mt-2 mb-4 text-charcoal font-bold">Energy & Matter Mechanics</h3>
                <p className="text-on-surface-variant text-sm">Focuses on thermal energy transfers, kinetic molecular theory, conservation of energy, and atomic motion.</p>
              </div>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-royal-purple font-bold text-sm tracking-wider uppercase">Grade 10 Plan</span>
                <h3 className="font-headline-md text-headline-md mt-2 mb-4 text-charcoal font-bold">Electromagnetism & Waves</h3>
                <p className="text-on-surface-variant text-sm">Covers electrostatic forces, atomic emission spectra, light wavelengths, and photon energy calculations.</p>
              </div>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-royal-purple font-bold text-sm tracking-wider uppercase">Grade 11 Plan</span>
                <h3 className="font-headline-md text-headline-md mt-2 mb-4 text-charcoal font-bold">Thermodynamics & Dynamics</h3>
                <p className="text-on-surface-variant text-sm">Explores heat capacities, enthalpy changes, entropy laws, and reaction rate collision dynamics.</p>
              </div>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-royal-purple font-bold text-sm tracking-wider uppercase">Grade 12 / AP Plan</span>
                <h3 className="font-headline-md text-headline-md mt-2 mb-4 text-charcoal font-bold">Advanced Quantum Physics</h3>
                <p className="text-on-surface-variant text-sm">Integrates wave-particle duality, subatomic forces, quantum numbers, and nuclear chemistry physics.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 md:py-24 bg-white">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <h2 className="font-headline-lg text-headline-lg text-charcoal text-center mb-16 font-bold">Why Choose Math Make Smart for US Students?</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter">
            <div className="md:col-span-2 bg-soft-gray p-10 rounded-3xl shadow-sm flex flex-col justify-between">
              <div>
                <GraduationCap className="text-royal-purple mb-6" size={40} />
                <h3 className="font-headline-md text-headline-md mb-4 text-charcoal font-bold">Expert American Tutors</h3>
                <p className="text-on-surface-variant">Our instructors are experienced STEM educators specializing in breaking down difficult American high school curriculum and AP exam requirements.</p>
              </div>
              <div className="mt-8 flex -space-x-2">
                <div className="w-10 h-10 rounded-full border-2 border-white bg-royal-purple/20"></div>
                <div className="w-10 h-10 rounded-full border-2 border-white bg-lime-green/20"></div>
                <div className="w-10 h-10 rounded-full border-2 border-white bg-primary-fixed"></div>
                <div className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center bg-soft-gray text-[10px] font-bold">+24</div>
              </div>
            </div>
            <div className="bg-soft-gray p-10 rounded-3xl shadow-sm">
              <BookOpen className="text-royal-purple mb-6" size={40} />
              <h3 className="font-headline-md text-headline-md mb-4 text-charcoal font-bold">AP & Standard Exam Prep</h3>
              <p className="text-on-surface-variant">Rigorous drills with past AP Chemistry free-response questions and standardized test strategies.</p>
            </div>
            <div className="bg-soft-gray p-10 rounded-3xl shadow-sm">
              <BookOpen className="text-royal-purple mb-6" size={40} />
              <h3 className="font-headline-md text-headline-md mb-4 text-charcoal font-bold">Homework & Lab Support</h3>
              <p className="text-on-surface-variant">On-demand guidance for complex homework sets, lab report data analysis, and balancing chemical equations.</p>
            </div>
            <div className="md:col-span-4 bg-royal-purple p-10 rounded-3xl text-white flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="max-w-xl">
                <h3 className="font-headline-md text-headline-md mb-2 font-bold">Seamless Online Portal Access</h3>
                <p className="opacity-90">Log into your personalized virtual classroom and digital resource hub from anywhere across the United States. Zero commute times, maximized learning efficiency.</p>
              </div>
              <Monitor className="opacity-30" size={80} />
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Tutors */}
      <section className="py-20 md:py-24 bg-soft-gray">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="flex justify-between items-center mb-16">
            <h2 className="font-headline-lg text-headline-lg text-charcoal font-bold">Meet Our Chemistry Specialists</h2>
            <button
              onClick={() => onNavigate('about')}
              className="text-royal-purple font-label-md text-label-md flex items-center gap-1 hover:underline font-bold cursor-pointer"
            >
              View all tutors <ArrowUpRight size={16} />
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter">
            <div className="group">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5] mb-4">
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent z-10"></div>
                <div className="absolute bottom-4 left-4 right-4 z-20">
                  <p className="text-white font-bold">Dr. Sarah Thompson</p>
                  <p className="text-white/80 text-xs font-medium">AP & Organic Chemistry</p>
                </div>
                <div
                  className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                  style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDnaR_xudtj-NcCZN1KN8QnY2Z5v5pgOIlpif-NeI1_iDjfmsq4awW5JlgBv2Evtsj1v1gdOlCkT-YXHf0wm8SU1lk9dpoo3Y_IYJWNirjSgTKskmXt6bguuLVZYKEKWeo6BygpkA4DOHf1rcZu8JAzRQ-wCvfSidCoZjdcnOkAurKeJXPBXNicWhamJHRVW4J2pu-0-cgT2Oq83dslkYzM_TVqcwHH6k67MvlRpDnjqA55zmxm_qUOTg")' }}
                />
              </div>
              <div className="flex items-center gap-1 text-lime-green mb-1">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="fill-lime-green" size={16} />
                ))}
                <span className="text-charcoal text-xs font-bold ml-1">5.0</span>
              </div>
            </div>
            <div className="group">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5] mb-4">
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent z-10"></div>
                <div className="absolute bottom-4 left-4 right-4 z-20">
                  <p className="text-white font-bold">James Wilson</p>
                  <p className="text-white/80 text-xs font-medium">High School Specialist</p>
                </div>
                <div
                  className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                  style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCPcblokqfAWlRHexg8kgQSp8qH5hnlUJgkJyMy0JCiwybQBYDx5vS1iAwIcrHIHcHnaMU14ls5jG86iB_EQSxFQHTe4pbXnr3QSBlnpib-9v3Yaj_jQKErxZFBMPmgxsv2ehqYgRuUJtJnj_ukKzmW6yq30j1sJwbM1DPqY86kH3ga15Kob_LivYXkGoKhPW1rC_2bv9z7_9IQwjkUsfskofAKBfrT1KHQ1Gk4NWEoPJ7MrXesASDdkA")' }}
                />
              </div>
              <div className="flex items-center gap-1 text-lime-green mb-1">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="fill-lime-green" size={16} />
                ))}
                <span className="text-charcoal text-xs font-bold ml-1">4.9</span>
              </div>
            </div>
            <div className="group">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5] mb-4">
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent z-10"></div>
                <div className="absolute bottom-4 left-4 right-4 z-20">
                  <p className="text-white font-bold">Elena Rodriguez</p>
                  <p className="text-white/80 text-xs font-medium">Physical Chemistry PhD</p>
                </div>
                <div
                  className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                  style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAQYjZ4b0l2Me31fmadlgatmBdfE-3abwE0eJD-_12nuNUVU1_YYAwEUozWO2lzznNHPkBNmpozqtRzVRwEfCD7C05qLaNa3QesMHoxLquKe0jDFF-txLK5omWu-r1DHpuFmMhmv1ZZKjh2TNWgYymkWoicqt3WOIKEelr6zqa-Q1kAaj_D0cbKxrUvEKN95JS1bRNem-_kwJ_Nci61wQGOp8PgqsqnVK0Soh18fxp6ZVwEA_20LUD5CQ")' }}
                />
              </div>
              <div className="flex items-center gap-1 text-lime-green mb-1">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="fill-lime-green" size={16} />
                ))}
                <span className="text-charcoal text-xs font-bold ml-1">5.0</span>
              </div>
            </div>
            <div className="group">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5] mb-4">
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent z-10"></div>
                <div className="absolute bottom-4 left-4 right-4 z-20">
                  <p className="text-white font-bold">Mark Chen</p>
                  <p className="text-white/80 text-xs font-medium">Honors & AP Inorganic</p>
                </div>
                <div
                  className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                  style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCzKctx5URdDpQlp4076aF1blj5_feGbCxdaf79B0zHWY-XigJK9lkxlypKfR9jkpaQZSzCAodb42LZErHc8bl2dcOR3fsHpBsqlw4QAV9Z3n_GlLdzEYJnfBiMTSHJye3X3T9A91FASxgQmQvKhiiQAQlQxy2x_bNuKTpe8vwm00qACAC3U7uDA1ZpAjqg9i5xGBjWS6rQuhUea3INK9y5qJHsihnw-Gn4GiMFBipU3kCUa666yqRjdA")' }}
                />
              </div>
              <div className="flex items-center gap-1 text-lime-green mb-1">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="fill-lime-green" size={16} />
                ))}
                <span className="text-charcoal text-xs font-bold ml-1">4.8</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-20 md:py-24 bg-white">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="text-center mb-16 space-y-4">
            <h2 className="font-headline-lg text-headline-lg text-charcoal font-bold">Frequently Asked Questions</h2>
            <p className="text-on-surface-variant max-w-2xl mx-auto">Got questions about online chemistry tutoring in the USA? We have straightforward answers.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-soft-gray p-8 rounded-3xl space-y-3">
              <h3 className="font-headline-md text-headline-md text-charcoal font-bold">How do online chemistry tutoring sessions work?</h3>
              <p className="text-on-surface-variant text-sm">Sessions take place via our state-of-the-art virtual classroom platform, featuring interactive whiteboards, real-time equation editors, and screen sharing to simplify complex concepts.</p>
            </div>
            <div className="bg-soft-gray p-8 rounded-3xl space-y-3">
              <h3 className="font-headline-md text-headline-md text-charcoal font-bold">Are tutors experienced with American AP Chemistry curricula?</h3>
              <p className="text-on-surface-variant text-sm">Yes! All our US-focused tutors are fully versed in state science standards, AP Chemistry exam requirements, and college-preparatory benchmarks.</p>
            </div>
            <div className="bg-soft-gray p-8 rounded-3xl space-y-3">
              <h3 className="font-headline-md text-headline-md text-charcoal font-bold">Can I book a free trial session before committing?</h3>
              <p className="text-on-surface-variant text-sm">Absolutely. We offer a 100% free trial lesson so you can test our teaching style, meet your tutor, and experience our online platform with zero financial obligation.</p>
            </div>
            <div className="bg-soft-gray p-8 rounded-3xl space-y-3">
              <h3 className="font-headline-md text-headline-md text-charcoal font-bold">How are lesson times scheduled across different US time zones?</h3>
              <p className="text-on-surface-variant text-sm">Our tutors offer flexible scheduling accommodating all US time zones (EST, CST, MST, PST), making it easy to fit sessions into your after-school routine.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 md:py-24 bg-surface-lowest">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="bg-charcoal rounded-[40px] p-10 md:p-20 text-center relative overflow-hidden group">
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <div className="absolute top-0 left-0 w-64 h-64 bg-royal-purple blur-[100px]"></div>
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-lime-green blur-[100px]"></div>
            </div>
            <div className="relative z-10 space-y-8">
              <h2 className="font-display-lg text-display-lg-mobile md:text-display-lg text-white font-bold">Excel in Chemistry Today!</h2>
              <p className="text-white/70 max-w-2xl mx-auto text-body-lg font-sans">Join high school and AP students across the USA who are achieving top grades and mastering scientific concepts with Math Make Smart.</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <button
                  onClick={() => onNavigate('trial')}
                  className="w-full sm:w-auto bg-lime-green text-charcoal px-10 py-4 rounded-xl font-bold hover:scale-105 transition-transform shadow-xl cursor-pointer"
                >
                  Book Free Trial
                </button>
                <button
                  onClick={() => onNavigate('about')}
                  className="w-full sm:w-auto border border-white/30 text-white px-10 py-4 rounded-xl font-bold hover:bg-white/10 transition-colors cursor-pointer"
                >
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}