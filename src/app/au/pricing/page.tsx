'use client';

import React, { useState } from 'react';
import { ActivePage } from '@/lib/types';
import {
  Wallet,
  CalendarCheck,
  ClipboardList,
  CheckCircle2,
  CheckCheck,
  GraduationCap,
  Award,
  BadgeCheck,
  Rocket,
  BarChart3,
  BookOpen,
  MessageCircle,
  RefreshCw,
  CalendarDays,
  Users,
  Mail,
  ShieldCheck,
  Video,
  ChevronDown,
} from 'lucide-react';
import TrustpilotWidget from '@/components/TrustpilotWidget';



interface PricingProps {
  onNavigate: (page: ActivePage, subjectTitle?: string) => void;
}

const FAQS = [
  {
    q: 'Can I reschedule a lesson?',
    a: 'Yes. Move any session from your dashboard provided you give at least two hours’ notice. There is no fee and no cap on how often you do it. The two-hour window exists only so the tutor can offer the slot to another family.',
  },
  {
    q: 'How many makeup lessons am I allowed each month?',
    a: 'Up to three, subject to tutor availability. Most families never reach that. If footy training or a school camp means you need more in a particular month, get in touch rather than writing the sessions off.',
  },
  {
    q: 'Can one membership cover two children, or two subjects?',
    a: 'Yes, and it is the part families most often overlook when comparing online tutoring prices. A membership is a pool of lessons rather than a slot reserved for one child. Twelve lessons a month can be split between two siblings, or between one child’s maths and English, at no extra cost. Where two kids each need a couple of sessions a week, one shared plan is usually cheaper than two separate ones.',
  },
  {
    q: 'Can I pause my membership?',
    a: 'Yes, at any point, with a little notice. School holidays, exam blocks and family travel all interrupt a schedule, and pausing is a routine request. Your tutor pairing is held while you are paused, so lessons pick back up with the same person instead of starting over with someone new.',
  },
  {
    q: 'Can I switch between plans?',
    a: 'Yes. Any change takes effect from your next billing date. A common pattern is starting on eight lessons a month, stepping up to twelve through Term 3 ahead of trial exams, then dropping back once results are in. Moving down costs nothing and carries no penalty.',
  },
  {
    q: 'What currency is billing in, and how does it work?',
    a: 'All tutoring fees on this page are quoted in Australian dollars (AUD). Memberships are prepaid monthly, with payment due at the start of each billing cycle. There is no registration fee, no minimum term and no charge for cancelling. Payments are processed securely, and nothing is ever added beyond the plan you selected.',
  },
  {
    q: 'Do tutors follow my state’s curriculum, including the HSC, VCE or QCE?',
    a: 'Yes. Tutors plan lessons around what your child is actually studying, whether that is the Australian Curriculum as taught in your state, NAPLAN preparation in Years 3, 5, 7 and 9, or senior subjects leading to the HSC in New South Wales, VCE in Victoria, QCE in Queensland, WACE in Western Australia or SACE in South Australia. Tell us the state, year and subject at booking and the first lesson is planned accordingly.',
  },
  {
    q: 'How does this compare with a local private tutor?',
    a: 'In-person tutoring across Australia typically runs $40 to $90 an hour for primary and junior high, and $80 to $180 an hour once a student reaches senior HSC, VCE or QCE subjects. Two things account for the gap online closes: nobody is paying for a tutor’s travel time, and there is no in-home or centre overhead built into the rate. You are also not limited to whichever specialist maths tutor happens to live nearby.',
  },
  {
    q: 'How do I work out how many lessons my child needs?',
    a: 'Book the free trial first and let the tutor tell you. They will assess where your child sits against year-level and ATAR expectations and say plainly what would help, which is occasionally less than a parent assumed. Choosing a plan after that conversation is far more reliable than picking one from a price list beforehand.',
  },
];

export default function PricingAustralia({ onNavigate }: PricingProps) {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const toggleFaq = (idx: number) => setActiveFaq(activeFaq === idx ? null : idx);

  return (
    <main className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop space-y-24 py-12">
      {/* Hero Section */}
      <section className="md:py-24 text-center">
        <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-charcoal mb-6">
          Online Tutoring Prices for <span className="text-primary">Australian Families</span>
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
          One-to-one tutoring from <strong>$15 a lesson</strong>, covering primary school through to Year 12
          and the ATAR. Pay as you go, or bring the cost per lesson down with a monthly membership. No
          registration fee and no contract.
        </p>

         {/* Trust Section */}
                <div className="learning-lane px-margin-mobile flex flex-col md:flex-row items-center justify-center gap-8 text-center max-w-max-width mx-auto md:px-margin-desktop mt-8">
                  <h2 className="text-1xl md:text-1xl font-bold text-charcoal tracking-tight">
                    Recommended by parents, students, and tutors
                  </h2>
                  <div className="flex items-center justify-center">
                    <TrustpilotWidget/>
                  </div>
                </div>
      </section>

      {/* Pricing Tiers: Bento Grid Layout */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-gutter mb-24">
        {/* Pay-per-lesson Option */}
        <div className="md:col-span-4 flex flex-col">
          <div className="bg-surface-container-lowest p-8 rounded-xl pricing-card-shadow border border-outline-variant/30 flex-grow hover:-translate-y-2 transition-transform duration-300">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full mb-6">
              <Wallet size={18} strokeWidth={2.25} />
              <span className="font-label-sm text-label-sm uppercase">Flexible Option</span>
            </div>
            <h3 className="font-headline-md text-headline-md text-charcoal mb-2">Pay-per-lesson</h3>
            <p className="text-on-surface-variant mb-8">
              No commitment. Sensible for one stubborn topic, a set of trial exams on the horizon, or trying
              a subject before committing to a plan.
            </p>
            <div className="space-y-6 mb-8">
              <div className="flex justify-between items-center border-b border-outline-variant pb-4">
                <span className="font-label-md text-label-md text-charcoal">Primary (Years 1&ndash;6)</span>
                <span className="font-headline-md text-headline-md text-primary">from $15<small className="text-body-md">/lesson</small></span>
              </div>
              <div className="flex justify-between items-center border-b border-outline-variant pb-4">
                <span className="font-label-md text-label-md text-charcoal">Years 7&ndash;10</span>
                <span className="font-headline-md text-headline-md text-primary">from $19<small className="text-body-md">/lesson</small></span>
              </div>
              <div className="flex justify-between items-center border-b border-outline-variant pb-4">
                <span className="font-label-md text-label-md text-charcoal">Years 11&ndash;12 &amp; ATAR</span>
                <span className="font-headline-md text-headline-md text-primary">from $24<small className="text-body-md">/lesson</small></span>
              </div>
            </div>
            <button
              onClick={() => (window.location.href = '/free-trial')}
              className="w-full py-4 border-2 border-primary text-primary font-bold rounded-lg hover:bg-primary/5 transition-all active:scale-95 cursor-pointer flex items-center justify-center gap-2"
            >
              <CalendarCheck size={20} />
              Book Individual Lesson
            </button>
          </div>
          {/* Visual Anchor */}
          <div className="mt-gutter rounded-xl overflow-hidden aspect-[1.6] relative shadow-lg">
            <img
              className="object-cover w-full h-full rounded-xl aspect-video"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDETdNAp1lHZlNEVgJrTlhpbVzuZTZ15uf7TG8d4afAw-xnOy95RnXN6QLBEHuCOkwXSHM3yvE0KLDdCiYDbAGdgGtx8ue34v8GLlix1--9uHhRyrY4dMd1EljJ3i8On3dlthkOnP8_4tIy18hsIHZuMDPfkZNt4Sy-pkuVthtvy5wYlJ-LMGSW_tWpu9w5usVjv8MxeVU0IR9R5Rt7yUBxYpimZHyvN7rmd1-ZPJScAZwmIu-GuKRPqg"
              alt="An Australian secondary school student working through revision at a laptop during an online tutoring session"
            />
          </div>
        </div>

        {/* Monthly Packages */}
        <div className="md:col-span-8 space-y-gutter">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-gutter">
            {/* 8 Lessons */}
            <div className="bg-surface-container-lowest p-8 rounded-xl pricing-card-shadow border border-outline-variant/30 relative overflow-hidden hover:-translate-y-2 transition-transform duration-300">
              <div className="flex items-center gap-2 mb-4">
                <ClipboardList size={24} className="text-primary" />
                <h3 className="font-label-md text-label-md text-primary font-bold uppercase">8 Lessons / Month</h3>
              </div>
              <div className="flex items-baseline gap-1 mb-2">
                <span className="font-display-lg text-display-lg text-charcoal">$160</span>
                <span className="text-on-surface-variant font-body-md">/month AUD</span>
              </div>
              <p className="text-primary font-label-md mb-4">Works out at $20 a lesson</p>
              <p className="text-on-surface-variant mb-8 text-sm">
                Two lessons a week. The right weight for keeping pace with class and staying on top of
                homework as it lands.
              </p>
              <ul className="space-y-4 mb-10">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-lime-green shrink-0" size={20} fill="currentColor" stroke="white" />
                  <span className="text-body-md">8 x 50-minute sessions</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-lime-green shrink-0" size={20} fill="currentColor" stroke="white" />
                  <span className="text-body-md">Shareable across subjects and siblings</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-lime-green shrink-0" size={20} fill="currentColor" stroke="white" />
                  <span className="text-body-md">Up to 3 makeup lessons monthly</span>
                </li>
              </ul>
              <button
                onClick={() => (window.location.href = '/free-trial')}
                className="w-full py-4 bg-primary text-on-primary font-bold rounded-lg hover:shadow-lg transition-all active:scale-95 cursor-pointer flex items-center justify-center gap-2"
              >
                <CheckCheck size={20} />
                Choose 8 Lessons
              </button>
            </div>

            {/* 12 Lessons */}
            <div className="bg-surface-container-lowest p-8 rounded-xl pricing-card-shadow border-2 border-primary relative overflow-hidden hover:-translate-y-2 transition-transform duration-300">
              <div className="absolute top-0 right-0 bg-primary text-on-primary px-6 py-1 rounded-bl-xl font-label-sm text-label-sm">MOST POPULAR</div>
              <div className="flex items-center gap-2 mb-4">
                <GraduationCap size={24} className="text-primary" />
                <h3 className="font-label-md text-label-md text-primary font-bold uppercase">12 Lessons / Month</h3>
              </div>
              <div className="flex items-baseline gap-1 mb-2">
                <span className="font-display-lg text-display-lg text-charcoal">$216</span>
                <span className="text-on-surface-variant font-body-md">/month AUD</span>
              </div>
              <p className="text-primary font-label-md mb-4">Works out at $18 a lesson</p>
              <p className="text-on-surface-variant mb-8 text-sm">
                Three lessons a week. Enough contact time to close a genuine gap rather than only hold
                ground, which is why most families settle here.
              </p>
              <ul className="space-y-4 mb-10">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-lime-green shrink-0" size={20} fill="currentColor" stroke="white" />
                  <span className="text-body-md">12 x 50-minute sessions</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-lime-green shrink-0" size={20} fill="currentColor" stroke="white" />
                  <span className="text-body-md">Lowest cost per lesson</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-lime-green shrink-0" size={20} fill="currentColor" stroke="white" />
                  <span className="text-body-md">Priority scheduling &amp; tutor messaging</span>
                </li>
              </ul>
              <button
                onClick={() => (window.location.href = '/free-trial')}
                className="w-full py-4 bg-primary text-on-primary font-bold rounded-lg hover:shadow-lg transition-all active:scale-95 cursor-pointer flex items-center justify-center gap-2"
              >
                <CheckCircle2 size={20} />
                Choose 12 Lessons
              </button>
            </div>
          </div>

          {/* Custom Package */}
          <div className="bg-charcoal text-on-primary p-8 md:p-12 rounded-xl pricing-card-shadow relative overflow-hidden">
            <div className="md:flex justify-between items-start relative z-10 gap-8">
              <div className="md:w-1/2">
                <div className="flex items-center gap-3 mb-4">
                  <Award size={28} className="text-lime-green" />
                  <h3 className="font-label-md text-label-md text-lime-green font-bold uppercase">Custom Membership</h3>
                </div>
                <h2 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-white mb-6">Built Around Your Household</h2>
                <p className="text-outline-variant mb-8 text-lg">
                  Where none of the standard plans quite fits, we will put one together that does. This is
                  the usual route for households with more than one child, for intensive revision ahead of
                  the HSC, VCE or QCE, and for schedules that shift term by term.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  <div className="flex items-center gap-3">
                    <BadgeCheck size={20} className="text-lime-green" />
                    <span>Any number of lessons</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <BadgeCheck size={20} className="text-lime-green" />
                    <span>Multiple subjects</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <BadgeCheck size={20} className="text-lime-green" />
                    <span>Shared between siblings</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <BadgeCheck size={20} className="text-lime-green" />
                    <span>Trial-exam intensives</span>
                  </div>
                </div>
              </div>
              <div className="md:w-1/3 flex flex-col items-center justify-center p-8 bg-surface-container-lowest/10 rounded-xl backdrop-blur-sm">
                <span className="font-headline-md text-headline-md text-white mb-2 text-center">Custom Quote</span>
                <span className="text-outline-variant font-label-md mb-8 text-center">Tell us what you need</span>
                <button
                  onClick={() => (window.location.href = '/free-trial')}
                  className="w-full py-4 bg-lime-green text-charcoal font-bold rounded-lg hover:scale-105 transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <Rocket size={20} />
                  Get in Touch
                </button>
              </div>
            </div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[100px] -mr-32 -mt-32"></div>
          </div>
        </div>
      </section>

      {/* Reading an Australian tuition quote */}
      <section className="mb-24">
        <div className="text-center mb-16">
          <h2 className="font-headline-lg text-headline-lg text-charcoal mb-4">How to Read an Australian Tutoring Quote</h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto">
            Private tuition pricing across Australia is quoted in several different ways, which makes
            comparing two providers harder than it should be. Three things account for most of the
            confusion.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          <div className="bg-soft-gray p-8 rounded-xl">
            <h3 className="font-label-md text-label-md text-charcoal font-bold mb-3">Per hour or per lesson</h3>
            <p className="text-on-surface-variant text-sm">
              A lesson is not always sixty minutes. Ours run to fifty, which is deliberate: long enough to
              work through a full concept, short enough that focus holds, particularly for primary-age
              students. When comparing tutoring rates, check which unit the figure refers to before assuming
              one plan is cheaper than another.
            </p>
          </div>
          <div className="bg-soft-gray p-8 rounded-xl">
            <h3 className="font-label-md text-label-md text-charcoal font-bold mb-3">Year level, not subject</h3>
            <p className="text-on-surface-variant text-sm">
              What moves the price is year level and syllabus depth rather than subject name. Year 12
              Specialist Maths costs more to staff than Year 3 numeracy because far fewer tutors can teach
              ATAR-level content confidently. A provider quoting one flat rate for every year is usually
              cutting a corner somewhere.
            </p>
          </div>
          <div className="bg-soft-gray p-8 rounded-xl">
            <h3 className="font-label-md text-label-md text-charcoal font-bold mb-3">What sits on top</h3>
            <p className="text-on-surface-variant text-sm">
              Registration fees, assessment charges, minimum terms and lesson credits that quietly expire are
              where an advertised rate and the final bill part ways. Ours carries none of those, which is
              worth checking against whatever else you are comparing.
            </p>
          </div>
        </div>
      </section>

      {/* When to start */}
      <section className="mb-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
          <div className="md:col-span-7 space-y-6">
            <h2 className="font-headline-lg text-headline-lg text-charcoal">Getting the Timing Right Costs Less Than Getting It Wrong</h2>
            <p className="text-on-surface-variant">
              The most expensive way to buy tutoring is to leave it until after disappointing trial exam
              results in Year 12. By that point there are only a couple of terms left, and that is enough
              time to sharpen exam technique but rarely enough to rebuild foundations that slipped over the
              previous two or three years before the ATAR is calculated.
            </p>
            <p className="text-on-surface-variant">
              Families who start in Year 10, or late in Year 9, tend to need fewer lessons overall and spend
              less in total, because the work can be genuinely building rather than damage control once
              senior subjects begin. The same logic applies in primary school, where a term of steady support
              before the jump to high school is worth considerably more than a scramble once Year 7 gets
              underway.
            </p>
            <p className="text-on-surface-variant">
              None of which means starting late is pointless. Exam technique, time management and marking
              criteria all improve quickly, and that alone shifts a final result. It simply means the earlier
              decision is usually the cheaper one.
            </p>
          </div>
          <div className="md:col-span-5">
            <div className="bg-primary/5 border border-primary/10 rounded-xl p-8 space-y-5">
              <h3 className="font-headline-md text-headline-md text-charcoal">Where families typically start</h3>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-lime-green shrink-0 mt-1" size={18} fill="currentColor" stroke="white" />
                <p className="text-on-surface-variant text-sm"><span className="font-bold text-charcoal">Years 3&ndash;6:</span> building core skills ahead of NAPLAN and selective-school entry tests</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-lime-green shrink-0 mt-1" size={18} fill="currentColor" stroke="white" />
                <p className="text-on-surface-variant text-sm"><span className="font-bold text-charcoal">Years 7&ndash;9:</span> shoring up junior high foundations before senior subjects begin</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-lime-green shrink-0 mt-1" size={18} fill="currentColor" stroke="white" />
                <p className="text-on-surface-variant text-sm"><span className="font-bold text-charcoal">Year 10&ndash;11:</span> subject selection and building toward the HSC, VCE or QCE</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-lime-green shrink-0 mt-1" size={18} fill="currentColor" stroke="white" />
                <p className="text-on-surface-variant text-sm"><span className="font-bold text-charcoal">Year 12:</span> trial exams, final assessments and the ATAR</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Everything Included Features */}
      <section className="mb-24">
        <div className="text-center mb-16">
          <h2 className="font-headline-lg text-headline-lg text-charcoal mb-4">Everything Included in One Price</h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto">
            What you pay depends on the plan you pick, not on the subject or the year level. Whichever
            tutoring package you choose, all of this comes with it.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          <div className="bg-soft-gray p-8 rounded-xl flex items-start gap-4">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
              <BarChart3 size={22} className="text-primary" />
            </div>
            <div>
              <h3 className="font-label-md text-label-md text-charcoal font-bold mb-2">Free Assessment Lesson</h3>
              <p className="text-on-surface-variant text-sm">The trial doubles as a diagnostic, establishing where your child sits against year-level expectations before anyone commits to anything.</p>
            </div>
          </div>
          <div className="bg-soft-gray p-8 rounded-xl flex items-start gap-4">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
              <Users size={22} className="text-primary" />
            </div>
            <div>
              <h3 className="font-label-md text-label-md text-charcoal font-bold mb-2">One Plan, Whole Family</h3>
              <p className="text-on-surface-variant text-sm">Lessons split across subjects and shared between siblings. Two kids with lighter needs often cost less on one plan than on two.</p>
            </div>
          </div>
          <div className="bg-soft-gray p-8 rounded-xl flex items-start gap-4">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
              <Video size={22} className="text-primary" />
            </div>
            <div>
              <h3 className="font-label-md text-label-md text-charcoal font-bold mb-2">Recorded Lessons</h3>
              <p className="text-on-surface-variant text-sm">Every session saved to your account, so a method can be revisited during study breaks after it was first taught.</p>
            </div>
          </div>
          <div className="bg-soft-gray p-8 rounded-xl flex items-start gap-4">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
              <BookOpen size={22} className="text-primary" />
            </div>
            <div>
              <h3 className="font-label-md text-label-md text-charcoal font-bold mb-2">Curriculum-Matched Materials</h3>
              <p className="text-on-surface-variant text-sm">Worked examples, revision notes and past paper practice matched to the Australian Curriculum as taught in your state, including HSC, VCE and QCE syllabuses.</p>
            </div>
          </div>
          <div className="bg-soft-gray p-8 rounded-xl flex items-start gap-4">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
              <MessageCircle size={22} className="text-primary" />
            </div>
            <div>
              <h3 className="font-label-md text-label-md text-charcoal font-bold mb-2">Support Between Lessons</h3>
              <p className="text-on-surface-variant text-sm">Stuck on a question at nine in the evening? Send your tutor a photo rather than losing the night to it.</p>
            </div>
          </div>
          <div className="bg-soft-gray p-8 rounded-xl flex items-start gap-4">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
              <RefreshCw size={22} className="text-primary" />
            </div>
            <div>
              <h3 className="font-label-md text-label-md text-charcoal font-bold mb-2">Progress Reports</h3>
              <p className="text-on-surface-variant text-sm">A written summary after every lesson, plus regular reporting on topics mastered and areas still needing work.</p>
            </div>
          </div>
          <div className="bg-soft-gray p-8 rounded-xl flex items-start gap-4">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
              <CalendarDays size={22} className="text-primary" />
            </div>
            <div>
              <h3 className="font-label-md text-label-md text-charcoal font-bold mb-2">Flexible Rescheduling</h3>
              <p className="text-on-surface-variant text-sm">Move any lesson with two hours&apos; notice at no cost, plus up to three makeup sessions each month.</p>
            </div>
          </div>
          <div className="bg-soft-gray p-8 rounded-xl flex items-start gap-4">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
              <ShieldCheck size={22} className="text-primary" />
            </div>
            <div>
              <h3 className="font-label-md text-label-md text-charcoal font-bold mb-2">Safe &amp; Monitored</h3>
              <p className="text-on-surface-variant text-sm">Working With Children Check-verified tutors, secure payments in AUD, and no contact taking place outside the platform.</p>
            </div>
          </div>
          <div className="bg-soft-gray p-8 rounded-xl flex items-start gap-4">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
              <CheckCheck size={22} className="text-primary" />
            </div>
            <div>
              <h3 className="font-label-md text-label-md text-charcoal font-bold mb-2">No Contract, No Extras</h3>
              <p className="text-on-surface-variant text-sm">No registration fee, no cancellation charge and nothing added on quietly. Pause or switch plans whenever you need to.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-24">
        <div className="text-center mb-12">
          <h2 className="font-headline-lg text-headline-lg text-charcoal mb-4">Frequently Asked Questions</h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto">
            Quick answers on billing, scheduling and what a tutoring membership actually covers.
          </p>
        </div>
        <div className="max-w-3xl mx-auto space-y-4">
          {FAQS.map((faq, idx) => (
            <div
              key={idx}
              className={`bg-soft-gray rounded-2xl border transition-all cursor-pointer ${
                activeFaq === idx ? 'border-primary shadow-lg' : 'border-outline-variant/30'
              }`}
              onClick={() => toggleFaq(idx)}
            >
              <div className="flex justify-between items-center p-6 gap-4">
                <h3 className="text-body-lg font-bold text-charcoal">{faq.q}</h3>
                <ChevronDown
                  size={22}
                  className={`shrink-0 transition-transform duration-200 ${activeFaq === idx ? 'rotate-180 text-primary' : 'text-charcoal'}`}
                />
              </div>
              {activeFaq === idx && (
                <div className="px-6 pb-6 text-on-surface-variant text-body-md">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Closing CTA */}
      <section className="bg-primary/5 rounded-2xl p-12 mb-24 text-center border border-primary/10 mx-auto">
        <h2 className="font-headline-md text-headline-md text-charcoal mb-4">Not sure which plan fits?</h2>
        <p className="text-on-surface-variant mb-8 max-w-lg mx-auto">
          Take the free trial lesson first. The tutor will tell you honestly how much support your child
          needs, which is a better starting point than a price list.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => (window.location.href = '/free-trial')}
            className="px-8 py-4 bg-primary text-on-primary font-bold rounded-lg hover:shadow-lg transition-all active:scale-95 cursor-pointer flex items-center justify-center gap-2"
          >
            <CalendarCheck size={20} />
            Book a Free Trial Lesson
          </button>
          <button
           onClick={() => (window.location.href = '/free-trial')}
            className="px-8 py-4 border-2 border-primary text-primary font-bold rounded-lg hover:bg-primary/5 transition-all cursor-pointer flex items-center justify-center gap-2"
          >
            <Mail size={20} />
            Ask for a Custom Quote
          </button>
        </div>
      </section>
    </main>
  );
}