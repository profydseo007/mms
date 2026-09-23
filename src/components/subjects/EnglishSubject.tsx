'use client';

import React from 'react';
import { ActivePage } from '@/lib/types';
import {
  Clock,
  CheckCircle2,
  Star,
  GraduationCap,
  BookOpen,
  Wallet,
  Award,
  ArrowRight,
  FileText,
  SpellCheck,
  ScrollText,
  PenLine,
  Feather,
  HelpCircle,
  Library,
  Type,
  Mic,
  Network,
  ClipboardCheck,
  PenTool,
  CheckCheck,
  BadgeCheck,
  Users,
  Brain,
  ShieldCheck,
  ChevronDown,
} from 'lucide-react';

interface SubjectComponentProps {
  onNavigate: (page: ActivePage, subjectTitle?: string) => void;
}

export default function EnglishSubject({ onNavigate }: SubjectComponentProps) {
  return (
    <div className="bg-background text-on-surface font-body-md overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative py-20 md:py-24 overflow-hidden">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="inline-block bg-primary/10 text-royal-purple font-label-sm text-label-sm px-3 py-1 rounded-full uppercase tracking-wider font-semibold">
              US Curriculum Specialist
            </span>
            <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-charcoal leading-tight font-bold">
              Online English Tutor in USA
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl font-sans">
              Personalized 1-on-1 English tutoring for K-12 and test preparation. Strengthen reading comprehension, essay writing, grammar, and literary analysis with expert US curriculum tutors.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={() => onNavigate('trial')}
                className="bg-royal-purple text-white py-4 px-8 rounded-xl font-label-md text-label-md font-bold custom-shadow hover:bg-primary transition-all active:scale-95 cursor-pointer"
              >
                Book Free Trial Lesson
              </button>
              <button
                onClick={() => onNavigate('a-levels')}
                className="border-2 border-royal-purple text-royal-purple py-4 px-8 rounded-xl font-label-md text-label-md font-bold hover:bg-soft-gray transition-all cursor-pointer"
              >
                View Pricing
              </button>
            </div>
            <div className="flex items-center gap-4 pt-6">
              <div className="flex -space-x-3">
                <div
                  className="w-10 h-10 rounded-full border-2 border-white bg-surface-container bg-cover bg-center"
                  style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCXJaAmYVGub0aZBVpgaGs3jqebGJZ4yT-mnR4sR0zxBj4lYOrg0QjMOpbzhuEiSgfuNX2fqZe_p9evLWKYFBRvfTcVhuaUiZ3K0vkddIV8ramBIWSpdSRnaiONajgiSRmMXxSjnWuW0AYMgwHnCBkPAX31Lj2J01Chme0xVuuGalcBJ2LeMXTHqE9uCBpg-NKrKtdEC7vd7hrvtJEQbpXQL_HqxEpTKuBxjwxywQTBOPvoveSftqUzyg")' }}
                />
                <div
                  className="w-10 h-10 rounded-full border-2 border-white bg-surface-container bg-cover bg-center"
                  style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDQZ19fLJctTMZc2QeEhGHsjVcG3W1MaKRJRTcru24UOEciI3JLZne1cf8EspD6etSrz6wEfJ1sMh4xx4tzaTzH7QrlPFJb5yBBVOaYc_fvy1pENLYhV31mG9tsufeZjnOnhCzzjgWyVl303cI5iURnImCfe2_eXRY5DK1Zi2AbNyW3jidk7isIuvybYh9Qq-g2QrLGCHt6EGcaEZp4YxjGe7nWEb2jecGw-av2f_0HyQEP-r27gQSVsA")' }}
                />
                <div
                  className="w-10 h-10 rounded-full border-2 border-white bg-surface-container bg-cover bg-center"
                  style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDXcT5dTGzu6O-tl548x4XjZ4ycMi3yTYRo0b6JaxMXgKmCr4n-2ejf4rtVaHef_gLWZ94FwZm9KigFAGwPqoDRxHwCmUnV12CA_Ipr1XmRojy1TQIP2-92xwRfYk6laYAo3o1UcKzs-fHwvEOAAS3j-32YTbFN_M0Pmz9mamG6E7zcnywXdgF_jzWREwv8wcU-Yahi3qq4bEC9yMpMblfa_yJoNxRLwFKJcLrm3lKWDEAOVLJwRuMOOA")' }}
                />
              </div>
              <p className="font-label-sm text-label-sm text-on-surface-variant">
                <span className="text-royal-purple font-bold">500+</span> Verified US English Tutors
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-lime-green/20 rounded-full blur-3xl -z-10"></div>
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAKa-X47XE51c6BNF2ihvhYQrtNIg61tH6wzGJp87yEUdD-GKVbURmzK1k_9EMCMBR7GjFQUeVpgQZIgF1GHBfppT9nVcGTuNvjZFegtYk177FBCyTCzd5wamcPa9Ez8LmiYWbLsaNXFss1jOWP9oTEWWmmInzvLz2pHIj2cN3t4BVoXBaKYvd1jlWJbj5UCinK7qsBhebCSum0amzJbALEGiPn8kU1_XvOXjXixL7-opULQIAn2FMN0D16Ww6HYmqjzHGDUD7N_HfsCvw"
              alt="Online English tutoring session for US students"
              className="w-full h-auto rounded-3xl custom-shadow object-cover"
            />
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-20 md:py-24 bg-soft-gray">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop text-center mb-16">
          <h2 className="font-headline-lg text-headline-lg text-charcoal mb-4 font-bold">What We Offer</h2>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto">
            Are you searching for an expert "online English tutor in USA"? Say goodbye to exhausting in-person classes. We connect you to professional US curriculum educators for focused one-on-one sessions.
          </p>
        </div>
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop grid md:grid-cols-3 gap-gutter">
          {/* Flexible Timings */}
          <div className="bg-surface-container-lowest p-8 rounded-2xl hover:shadow-lg transition-all">
            <div className="w-14 h-14 bg-primary/10 text-royal-purple rounded-xl flex items-center justify-center mb-6">
              <Clock size={28} />
            </div>
            <h3 className="font-headline-md text-headline-md mb-4 text-charcoal font-bold">Flexible Timings</h3>
            <ul className="space-y-3 text-on-surface-variant">
              <li className="flex items-center gap-3">
                <CheckCircle2 className="text-lime-green" size={16} /> Customize timings
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="text-lime-green" size={16} /> Easy scheduling
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="text-lime-green" size={16} /> Stress-free rescheduling
              </li>
            </ul>
            <button
              onClick={() => onNavigate('curriculum')}
              className="mt-8 inline-flex items-center gap-1 text-royal-purple font-label-md font-bold hover:underline cursor-pointer"
            >
              All Subjects <ArrowRight size={16} />
            </button>
          </div>
          {/* Affordable Rates */}
          <div className="bg-surface-container-lowest p-8 rounded-2xl hover:shadow-lg transition-all border-b-4 border-royal-purple">
            <div className="w-14 h-14 bg-primary/10 text-royal-purple rounded-xl flex items-center justify-center mb-6">
              <Wallet size={28} />
            </div>
            <h3 className="font-headline-md text-headline-md mb-4 text-charcoal font-bold">Affordable Rates</h3>
            <ul className="space-y-3 text-on-surface-variant">
              <li className="flex items-center gap-3">
                <CheckCircle2 className="text-lime-green" size={16} /> Free Trial Session
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="text-lime-green" size={16} /> Discounted Packages
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="text-lime-green" size={16} /> Standard Refund Policy
              </li>
            </ul>
            <button
              onClick={() => onNavigate('a-levels')}
              className="mt-8 inline-flex items-center gap-1 text-royal-purple font-label-md font-bold hover:underline cursor-pointer"
            >
              Fee Structure <ArrowRight size={16} />
            </button>
          </div>
          {/* Superior Quality */}
          <div className="bg-surface-container-lowest p-8 rounded-2xl hover:shadow-lg transition-all">
            <div className="w-14 h-14 bg-primary/10 text-royal-purple rounded-xl flex items-center justify-center mb-6">
              <ShieldCheck size={28} />
            </div>
            <h3 className="font-headline-md text-headline-md mb-4 text-charcoal font-bold">Superior Tutoring</h3>
            <ul className="space-y-3 text-on-surface-variant">
              <li className="flex items-center gap-3">
                <CheckCircle2 className="text-lime-green" size={16} /> Basic Study Skills
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="text-lime-green" size={16} /> Comprehension Team
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="text-lime-green" size={16} /> Homework Efficiency
              </li>
            </ul>
            <button
              onClick={() => onNavigate('trial')}
              className="mt-8 inline-flex items-center gap-1 text-royal-purple font-label-md font-bold hover:underline cursor-pointer"
            >
              Sign up Now <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* Curriculum Focus */}
      <section className="py-20 md:py-24">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
            <div className="md:col-span-4 bg-royal-purple text-white p-10 rounded-3xl flex flex-col justify-between">
              <div>
                <h2 className="font-headline-lg text-headline-lg mb-4 font-bold">Curriculum &amp; Grade Levels</h2>
                <p className="font-body-md opacity-90">Tailored support aligned with Common Core and state standards across the USA.</p>
              </div>
              <div className="mt-8">
                <BookOpen size={64} className="opacity-20" />
              </div>
            </div>
            <div className="md:col-span-8 grid md:grid-cols-3 gap-gutter">
              <div className="bg-surface-container p-8 rounded-3xl flex flex-col items-center text-center justify-center border border-outline-variant">
                <GraduationCap size={32} className="text-primary mb-3" />
                <h4 className="font-headline-md text-headline-md text-charcoal mb-2 font-bold">Elementary (K–5)</h4>
                <p className="font-label-sm uppercase tracking-widest text-primary font-semibold">Foundational Reading</p>
              </div>
              <div className="bg-lime-green/10 p-8 rounded-3xl flex flex-col items-center text-center justify-center border border-lime-green/30">
                <Award size={32} className="text-secondary mb-3" />
                <h4 className="font-headline-md text-headline-md text-charcoal mb-2 font-bold">Middle &amp; High (6–12)</h4>
                <p className="font-label-sm uppercase tracking-widest text-secondary font-semibold">Advanced Prep</p>
              </div>
              <div className="bg-surface-container p-8 rounded-3xl flex flex-col items-center text-center justify-center border border-outline-variant">
                <FileText size={32} className="text-primary mb-3" />
                <h4 className="font-headline-md text-headline-md text-charcoal mb-2 font-bold">SAT / ACT &amp; AP</h4>
                <p className="font-label-sm uppercase tracking-widest text-primary font-semibold">Test Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Top-Tier Tutors */}
      <section className="py-20 md:py-24 bg-surface-container-lowest">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2">
            <div className="relative inline-block w-full">
              <img
                alt="Professional US English Tutor"
                className="rounded-3xl custom-shadow max-w-full w-full object-cover"
                src="https://lh3.googleusercontent.com/aida/AP1WRLvJ5ZkW9ZVGSkaUXlGr-5dzzz-agCawRb5QGgtdLxg5-WbKT0Px57IhUeK4dTouTHoSkCJ_xaqN0HkhZYj2WV-ZsDjZMjsMNbZ1ylxAEsbYI7Y-YmykdCUgR0iUEBFrJxEvZv6PgTU3jErcV5JCtynNesuI_qAz1KtkklK9c_oatGuIN-U7ElZ78L0yOqAuU4AGndpmUqAUZkF32o8sQatr3gar2roWYWgT-e4dRmNwltnw5H-0Zw9Zv0OZ"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl custom-shadow">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-lime-green rounded-full flex items-center justify-center">
                    <Award size={22} className="text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-charcoal">98% Success Rate</p>
                    <p className="text-xs text-on-surface-variant">Top-Tier US Exam Scoring</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 space-y-6">
            <h2 className="font-headline-lg text-headline-lg text-charcoal font-bold">Top-Tier Online English Tutors in the USA</h2>
            <p className="font-body-md text-on-surface-variant">
              Find your perfect online English tutor in USA and elevate your reading comprehension, writing mechanics, and literary analysis. MathMakeSmart connects students nationwide with certified American literature and language specialists.
            </p>
            <p className="font-body-md text-on-surface-variant">
              Whether you are preparing for state standardized testing, refining persuasive essay structures, or mastering AP English Literature, our instructors deliver targeted lessons tailored to your exact academic needs.
            </p>
            <div className="pt-4">
              <button
                onClick={() => onNavigate('about')}
                className="bg-royal-purple text-white py-3 px-8 rounded-lg font-label-md text-label-md font-bold hover:opacity-90 transition-all flex items-center gap-2 cursor-pointer"
              >
                Meet our teachers <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Personalized Learning */}
      <section className="py-20 md:py-24 bg-soft-gray">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop mb-16 text-center">
          <h2 className="font-headline-lg text-headline-lg text-charcoal mb-4 font-bold">Improve Your English With Personalized Learning</h2>
          <p className="font-body-md text-on-surface-variant max-w-3xl mx-auto">Instructors create a detailed and suitable learning plan for you based on your proficiency level, grade requirements, and academic goals.</p>
        </div>
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop grid md:grid-cols-3 gap-gutter">
          <div className="bg-white p-10 rounded-3xl border border-outline-variant/30 custom-shadow flex flex-col h-full">
            <div className="w-12 h-12 bg-royal-purple/10 text-royal-purple rounded-xl flex items-center justify-center mb-6">
              <Users size={22} />
            </div>
            <h4 className="font-headline-md text-headline-md mb-4 text-royal-purple font-bold">1-to-1 Tutoring Sessions</h4>
            <p className="font-body-md text-on-surface-variant mb-6 flex-grow">
              We assign each tutor only one student so that our professional can provide undivided attention, focusing on individual reading speed, writing clarity, and critical thinking development.
            </p>
            <div className="w-full h-1 bg-primary/10 rounded-full overflow-hidden">
              <div className="w-1/3 h-full bg-royal-purple"></div>
            </div>
          </div>
          <div className="bg-white p-10 rounded-3xl border border-outline-variant/30 custom-shadow flex flex-col h-full">
            <div className="w-12 h-12 bg-royal-purple/10 text-royal-purple rounded-xl flex items-center justify-center mb-6">
              <Clock size={22} />
            </div>
            <h4 className="font-headline-md text-headline-md mb-4 text-royal-purple font-bold">Flexible Learning</h4>
            <p className="font-body-md text-on-surface-variant mb-6 flex-grow">
              Tailored sessions suit your busy schedule. Choose specific texts or writing styles to master, or let our experts guide your curriculum path with structured feedback.
            </p>
            <div className="w-full h-1 bg-primary/10 rounded-full overflow-hidden">
              <div className="w-2/3 h-full bg-royal-purple"></div>
            </div>
          </div>
          <div className="bg-white p-10 rounded-3xl border border-outline-variant/30 custom-shadow flex flex-col h-full">
            <div className="w-12 h-12 bg-royal-purple/10 text-royal-purple rounded-xl flex items-center justify-center mb-6">
              <BadgeCheck size={22} />
            </div>
            <h4 className="font-headline-md text-headline-md mb-4 text-royal-purple font-bold">Qualified Instructors</h4>
            <p className="font-body-md text-on-surface-variant mb-6 flex-grow">
              Our team comprises top-tier English tutors in the USA, highly qualified and well-versed in Common Core standards, grammar mechanics, and rhetorical analysis.
            </p>
            <div className="w-full h-1 bg-primary/10 rounded-full overflow-hidden">
              <div className="w-full h-full bg-royal-purple"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Concepts We Cover */}
      <section className="py-20 md:py-24">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <h2 className="font-headline-lg text-headline-lg text-charcoal text-center mb-16 font-bold underline decoration-lime-green decoration-4 underline-offset-8">
            Concepts That We Cover
          </h2>
          <div className="space-y-16">
            {/* Elementary School */}
            <div className="flex flex-col md:flex-row gap-12 items-start">
              <div className="md:w-1/3 sticky top-24">
                <h3 className="font-headline-md text-headline-md text-royal-purple border-l-4 border-royal-purple pl-4 font-bold">Elementary School (K–5)</h3>
                <p className="font-body-md text-on-surface-variant mt-4">Foundational literacy, phonics mastery, vocabulary expansion, and early sentence composition.</p>
              </div>
              <div className="md:w-2/3 bg-surface-container rounded-3xl p-8 grid md:grid-cols-2 gap-4 w-full">
                <div className="flex items-center gap-3 bg-white p-4 rounded-xl font-medium"><BookOpen size={20} className="text-royal-purple" /> Phonics &amp; Decoding</div>
                <div className="flex items-center gap-3 bg-white p-4 rounded-xl font-medium"><PenLine size={20} className="text-royal-purple" /> Sentence Structure</div>
                <div className="flex items-center gap-3 bg-white p-4 rounded-xl font-medium"><SpellCheck size={20} className="text-royal-purple" /> Spelling &amp; Mechanics</div>
                <div className="flex items-center gap-3 bg-white p-4 rounded-xl font-medium"><ScrollText size={20} className="text-royal-purple" /> Narrative Writing</div>
                <div className="flex items-center gap-3 bg-white p-4 rounded-xl font-medium"><Users size={20} className="text-royal-purple" /> Vocabulary Building</div>
                <div className="flex items-center gap-3 bg-white p-4 rounded-xl font-medium"><Brain size={20} className="text-royal-purple" /> Reading Comprehension</div>
              </div>
            </div>
            {/* Middle School */}
            <div className="flex flex-col md:flex-row-reverse gap-12 items-start">
              <div className="md:w-1/3 sticky top-24">
                <h3 className="font-headline-md text-headline-md text-royal-purple border-r-4 border-royal-purple pr-4 text-right font-bold">Middle School (6–8)</h3>
                <p className="font-body-md text-on-surface-variant mt-4 text-right">Transitioning to textual analysis, persuasive essays, and foundational literary devices.</p>
              </div>
              <div className="md:w-2/3 bg-soft-gray border border-outline-variant rounded-3xl p-8 grid md:grid-cols-2 gap-4 w-full">
                <div className="flex items-center gap-3 bg-white p-4 rounded-xl font-medium"><Feather size={20} className="text-primary" /> Literary Analysis</div>
                <div className="flex items-center gap-3 bg-white p-4 rounded-xl font-medium"><HelpCircle size={20} className="text-primary" /> Persuasive Writing</div>
                <div className="flex items-center gap-3 bg-white p-4 rounded-xl font-medium"><Library size={20} className="text-primary" /> Grammar &amp; Syntax</div>
                <div className="flex items-center gap-3 bg-white p-4 rounded-xl font-medium"><Type size={20} className="text-primary" /> Advanced Vocabulary</div>
                <div className="flex items-center gap-3 bg-white p-4 rounded-xl font-medium"><Mic size={20} className="text-primary" /> Public Speaking</div>
                <div className="flex items-center gap-3 bg-white p-4 rounded-xl font-medium"><Network size={20} className="text-primary" /> Research Skills</div>
              </div>
            </div>
            {/* High School & AP */}
            <div className="flex flex-col md:flex-row gap-12 items-start">
              <div className="md:w-1/3 sticky top-24">
                <h3 className="font-headline-md text-headline-md text-royal-purple border-l-4 border-royal-purple pl-4 font-bold">High School &amp; AP (9–12)</h3>
                <p className="font-body-md text-on-surface-variant mt-4">Advanced literary critique, rhetorical analysis, SAT/ACT English prep, and AP exam mastery.</p>
              </div>
              <div className="md:w-2/3 bg-royal-purple p-8 rounded-3xl grid md:grid-cols-2 gap-4 w-full">
                <div className="flex items-center gap-3 bg-white/10 text-white p-4 rounded-xl backdrop-blur-md font-medium"><Star size={20} /> Rhetorical Analysis</div>
                <div className="flex items-center gap-3 bg-white/10 text-white p-4 rounded-xl backdrop-blur-md font-medium"><ClipboardCheck size={20} /> Argumentative Essays</div>
                <div className="flex items-center gap-3 bg-white/10 text-white p-4 rounded-xl backdrop-blur-md font-medium"><CheckCircle2 size={20} /> SAT / ACT Prep</div>
                <div className="flex items-center gap-3 bg-white/10 text-white p-4 rounded-xl backdrop-blur-md font-medium"><PenTool size={20} /> AP Literature Prep</div>
                <div className="flex items-center gap-3 bg-white/10 text-white p-4 rounded-xl backdrop-blur-md font-medium"><Award size={20} /> Comparative Literature</div>
                <div className="flex items-center gap-3 bg-white/10 text-white p-4 rounded-xl backdrop-blur-md font-medium"><CheckCheck size={20} /> College Essay Coaching</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* English Lesson Plans For Each Grade */}
      <section className="py-20 md:py-24 bg-soft-gray">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop text-center mb-16">
          <h2 className="font-headline-lg text-headline-lg text-charcoal mb-4 font-bold">English Lesson Plans For Each Grade</h2>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto">
            Explore our structured, grade-specific English lesson plans designed to build comprehensive reading, writing, and language proficiency for US students.
          </p>
        </div>
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop grid md:grid-cols-3 gap-gutter">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-outline-variant/30 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 bg-primary/10 text-royal-purple rounded-xl flex items-center justify-center mb-4">
                <BookOpen size={24} />
              </div>
              <h3 className="font-headline-md text-headline-md mb-2 text-charcoal font-bold">Grade 5 English</h3>
              <p className="text-on-surface-variant text-sm mb-6">Focuses on advanced vocabulary, complex sentence structures, narrative writing, and text comprehension.</p>
            </div>
            <button
              onClick={() => onNavigate('curriculum')}
              className="inline-flex items-center gap-2 text-royal-purple font-label-md font-bold hover:underline cursor-pointer"
            >
              View Lesson Plan <ArrowRight size={16} />
            </button>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-outline-variant/30 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 bg-primary/10 text-royal-purple rounded-xl flex items-center justify-center mb-4">
                <FileText size={24} />
              </div>
              <h3 className="font-headline-md text-headline-md mb-2 text-charcoal font-bold">Grade 6 English</h3>
              <p className="text-on-surface-variant text-sm mb-6">Introduces literary analysis, introductory poetry, citing textual evidence, and persuasive composition.</p>
            </div>
            <button
              onClick={() => onNavigate('curriculum')}
              className="inline-flex items-center gap-2 text-royal-purple font-label-md font-bold hover:underline cursor-pointer"
            >
              View Lesson Plan <ArrowRight size={16} />
            </button>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-outline-variant/30 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 bg-primary/10 text-royal-purple rounded-xl flex items-center justify-center mb-4">
                <PenLine size={24} />
              </div>
              <h3 className="font-headline-md text-headline-md mb-2 text-charcoal font-bold">Grade 7 English</h3>
              <p className="text-on-surface-variant text-sm mb-6">Deepens comprehension of thematic elements, argumentative essay organization, and grammar mechanics.</p>
            </div>
            <button
              onClick={() => onNavigate('curriculum')}
              className="inline-flex items-center gap-2 text-royal-purple font-label-md font-bold hover:underline cursor-pointer"
            >
              View Lesson Plan <ArrowRight size={16} />
            </button>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-outline-variant/30 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 bg-primary/10 text-royal-purple rounded-xl flex items-center justify-center mb-4">
                <Feather size={24} />
              </div>
              <h3 className="font-headline-md text-headline-md mb-2 text-charcoal font-bold">Grade 8 English</h3>
              <p className="text-on-surface-variant text-sm mb-6">Covers classic American literature excerpts, structural analysis, research writing, and speech delivery.</p>
            </div>
            <button
              onClick={() => onNavigate('curriculum')}
              className="inline-flex items-center gap-2 text-royal-purple font-label-md font-bold hover:underline cursor-pointer"
            >
              View Lesson Plan <ArrowRight size={16} />
            </button>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-outline-variant/30 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 bg-primary/10 text-royal-purple rounded-xl flex items-center justify-center mb-4">
                <Award size={24} />
              </div>
              <h3 className="font-headline-md text-headline-md mb-2 text-charcoal font-bold">Grade 9 English</h3>
              <p className="text-on-surface-variant text-sm mb-6">Focuses on high school literary analysis, rhetorical devices, vocabulary development, and thesis-driven essays.</p>
            </div>
            <button
              onClick={() => onNavigate('curriculum')}
              className="inline-flex items-center gap-2 text-royal-purple font-label-md font-bold hover:underline cursor-pointer"
            >
              View Lesson Plan <ArrowRight size={16} />
            </button>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-outline-variant/30 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 bg-primary/10 text-royal-purple rounded-xl flex items-center justify-center mb-4">
                <Star size={24} />
              </div>
              <h3 className="font-headline-md text-headline-md mb-2 text-charcoal font-bold">Grade 10 English</h3>
              <p className="text-on-surface-variant text-sm mb-6">Prepares students for rigorous standardized testing, advanced literary critique, and collegiate writing standards.</p>
            </div>
            <button
              onClick={() => onNavigate('curriculum')}
              className="inline-flex items-center gap-2 text-royal-purple font-label-md font-bold hover:underline cursor-pointer"
            >
              View Lesson Plan <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-20 md:py-24">
        <div className="learning-lane max-w-4xl mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="text-center mb-16">
            <h2 className="font-headline-lg text-headline-lg text-charcoal mb-4 font-bold">Frequently Asked Questions</h2>
            <p className="font-body-md text-on-surface-variant">Got questions about our online English tutoring services in the USA? Find answers below.</p>
          </div>
          <div className="space-y-6">
            <div className="bg-surface-container p-6 rounded-2xl border border-outline-variant/50">
              <h3 className="font-headline-md text-headline-md text-charcoal font-bold mb-2">How do online English tutoring sessions work?</h3>
              <p className="text-on-surface-variant">Sessions are conducted 1-on-1 via secure video conferencing platforms (Zoom or Google Meet) with interactive digital whiteboards, shared document editing, and structured lesson materials tailored to US Common Core standards.</p>
            </div>
            <div className="bg-surface-container p-6 rounded-2xl border border-outline-variant/50">
              <h3 className="font-headline-md text-headline-md text-charcoal font-bold mb-2">Are your tutors experienced with the US curriculum?</h3>
              <p className="text-on-surface-variant">Yes! All our English tutors specialize in the US curriculum, covering K-12 requirements, state testing, SAT/ACT English preparation, and AP Literature/Language coursework.</p>
            </div>
            <div className="bg-surface-container p-6 rounded-2xl border border-outline-variant/50">
              <h3 className="font-headline-md text-headline-md text-charcoal font-bold mb-2">Can I book a free trial session before committing?</h3>
              <p className="text-on-surface-variant">Absolutely. We offer a completely free trial lesson with no payment required so you can experience our teaching methodology and evaluate tutor compatibility before choosing a package.</p>
            </div>
            <div className="bg-surface-container p-6 rounded-2xl border border-outline-variant/50">
              <h3 className="font-headline-md text-headline-md text-charcoal font-bold mb-2">How do you track student progress?</h3>
              <p className="text-on-surface-variant">Our tutors provide continuous feedback, periodic assessments, and customized progress reports focusing on reading comprehension, vocabulary retention, and essay writing milestones.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trial Booking */}
      <section className="py-20 md:py-24 bg-surface-container-low overflow-hidden">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop bg-white rounded-[40px] shadow-xl overflow-hidden flex flex-col md:flex-row">
          <div className="md:w-1/2 p-8 md:p-16 flex flex-col justify-center">
            <h2 className="font-headline-lg text-headline-lg text-charcoal mb-6 font-bold">Book Your Free Trial Today</h2>
            <p className="font-body-md text-on-surface-variant mb-8">Take a free online English trial lesson before booking any packages. No payment required — just tell us your availability.</p>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-lime-green/20 text-secondary rounded-full flex items-center justify-center font-bold">1</div>
                <p className="font-label-md font-medium">Check the tutor calendar</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-lime-green/20 text-secondary rounded-full flex items-center justify-center font-bold">2</div>
                <p className="font-label-md font-medium">Select your preferred slot</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-lime-green/20 text-secondary rounded-full flex items-center justify-center font-bold">3</div>
                <p className="font-label-md font-medium">Attend via Zoom or Google Meet</p>
              </div>
            </div>
            <div className="mt-10">
              <button
                onClick={() => onNavigate('trial')}
                className="bg-royal-purple text-white py-4 px-10 rounded-xl font-headline-md text-headline-md font-bold shadow-lg hover:shadow-royal-purple/20 transition-all active:scale-95 cursor-pointer"
              >
                Get Started Now!
              </button>
            </div>
          </div>
          <div
            className="md:w-1/2 h-80 md:h-auto bg-cover bg-center"
            style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida/AP1WRLuF3A5ybVHT1QWhkMjcj7ulxi2crFLd3F0BU6Ga5p3Ou0q6qkYlWHgrluODoVLsghP9_wDAWZLAPWVbeLrl1THBhZs9KDcH2ZVmE7q-hClxr2R3nE1uTJm21ldD42utQT884aXvc0XSAz-J4B5nXigdUJGOJVr2RPkhtmu3MIu84iEReEA9mfszFoipPS_ArunXMYqw-QsqtWA-kyEOyzPTNm0L1-XGq-FOKbKeSvaeXdKhoK5B5fsKm5Y")' }}
          />
        </div>
      </section>
    </div>
  );
}