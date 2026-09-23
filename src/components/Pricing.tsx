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
import TrustpilotWidget from './TrustpilotWidget';

interface PricingProps {
  onNavigate: (page: ActivePage, subjectTitle?: string) => void;
}

const FAQS = [
  {
    q: 'Can I reschedule a lesson?',
    a: 'Yes. Move a lesson from your dashboard as long as you give at least two hours\u2019 notice before the scheduled start. There is no charge and no limit on how often you do it. Two hours is enough time for the tutor to reallocate the slot, which is the only reason the notice period exists.',
  },
  {
    q: 'How many makeup lessons do I get each month?',
    a: 'Up to three per month, subject to tutor availability. In practice most families never use all three. If a run of illness or travel means you need more, contact us rather than losing the sessions, and we will work something out.',
  },
  {
    q: 'Can two children share one membership?',
    a: 'Yes, and this is the part families most often miss. A membership is a pool of lessons, not a seat assigned to one student. Twelve lessons a month can be split between two children, or between one child\u2019s math and English, without paying twice. For a household with two students needing a few sessions each, sharing one larger package usually costs less than running two small ones.',
  },
  {
    q: 'Can I pause my plan?',
    a: 'Yes, at any time, with advance notice. Summer breaks, exam weeks and family travel all come up, and pausing is a normal request rather than an awkward one. Your tutor match is held while the plan is paused, so you resume with the same person rather than starting over.',
  },
  {
    q: 'Can I switch to a different plan later?',
    a: 'Yes. Changes take effect from the next billing cycle. Most families begin on the eight-lesson plan, then move up during exam season and back down afterwards. There is no fee for changing, and no penalty for moving down.',
  },
  {
    q: 'How does billing work?',
    a: 'Memberships are prepaid monthly, with fees due at the start of each billing month. There is no registration fee, no contract, and no cancellation charge. Payments are processed securely and you will never be billed for anything beyond the plan you selected.',
  },
  {
    q: 'Why is online tutoring cheaper than in-person?',
    a: 'Two reasons, and neither involves cutting quality. There is no travel time to pay for, on either side, and no premises overhead built into the rate. It also removes the local supply problem: instead of paying a premium for the one AP Calculus tutor within driving distance, you are matched from a national pool. Rates for in-person US tutoring commonly run well above what the same expertise costs online.',
  },
  {
    q: 'How do I know what my child actually needs before committing?',
    a: 'Start with the free trial lesson. It exists precisely so nobody commits blind. The tutor assesses where your child stands against their grade-level standards and tells you honestly what would help, which is sometimes fewer sessions than a parent expects. Choosing a package after that conversation is far more accurate than guessing beforehand.',
  },
];

export default function PricingUS({ onNavigate }: PricingProps) {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const toggleFaq = (idx: number) => setActiveFaq(activeFaq === idx ? null : idx);

  return (
    <main className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop space-y-24 py-12">
      {/* Hero Section */}
      <section className="md:py-24 text-center">
        <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-charcoal mb-6">
          Online Tutoring Prices for <span className="text-primary">US Families</span>
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
          One-to-one tutoring from <strong>$15 per lesson</strong>, for Grades K&ndash;12 and AP coursework. Pay as you go, or
          bring the cost per lesson down with a monthly membership. No registration fee and no contract.
        </p>

        {/* Trust Section */}
        <div className="learning-lane px-margin-mobile flex flex-col md:flex-row items-center justify-center gap-8 text-center max-w-max-width mx-auto md:px-margin-desktop mt-8">
          <h2 className="text-1xl md:text-1xl font-bold text-charcoal tracking-tight">
            Recommended by parents, students, and tutors
          </h2>
          <div className="flex items-center justify-center">
            <TrustpilotWidget />
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
              No commitment. Useful for a single difficult unit, a looming test, or trying a subject before
              committing to a plan.
            </p>
            <div className="space-y-6 mb-8">
              <div className="flex justify-between items-center border-b border-outline-variant pb-4">
                <span className="font-label-md text-label-md text-charcoal">Elementary (K&ndash;5)</span>
                <span className="font-headline-md text-headline-md text-primary">from $15<small className="text-body-md">/lesson</small></span>
              </div>
              <div className="flex justify-between items-center border-b border-outline-variant pb-4">
                <span className="font-label-md text-label-md text-charcoal">Middle School (6&ndash;8)</span>
                <span className="font-headline-md text-headline-md text-primary">from $20<small className="text-body-md">/lesson</small></span>
              </div>
              <div className="flex justify-between items-center border-b border-outline-variant pb-4">
                <span className="font-label-md text-label-md text-charcoal">High School &amp; AP</span>
                <span className="font-headline-md text-headline-md text-primary">from $25<small className="text-body-md">/lesson</small></span>
              </div>
            </div>
            <button
              onClick={() => onNavigate('trial')}
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
              alt="A high school student working through problems at a laptop during an online tutoring session"
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
                <span className="font-display-lg text-display-lg text-charcoal">$200</span>
                <span className="text-on-surface-variant font-body-md">/month</span>
              </div>
              <p className="text-primary font-label-md mb-4">Averages $20 per lesson</p>
              <p className="text-on-surface-variant mb-8 text-sm">
                Two lessons a week. The right level for keeping pace with class and staying on top of homework
                as it arrives.
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
                onClick={() => onNavigate('trial')}
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
                <span className="font-display-lg text-display-lg text-charcoal">$276</span>
                <span className="text-on-surface-variant font-body-md">/month</span>
              </div>
              <p className="text-primary font-label-md mb-4">Averages $23 per lesson</p>
              <p className="text-on-surface-variant mb-8 text-sm">
                Three lessons a week. Enough contact time to close a real gap rather than only keep pace, which
                is why most families end up here.
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
                onClick={() => onNavigate('trial')}
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
                  If none of the standard packages fits, we will build one that does. This is the usual route
                  for families with more than one student, for intensive AP or SAT preparation, and for
                  schedules that change from month to month.
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
                    <span>Sibling sharing</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <BadgeCheck size={20} className="text-lime-green" />
                    <span>Seasonal intensives</span>
                  </div>
                </div>
              </div>
              <div className="md:w-1/3 flex flex-col items-center justify-center p-8 bg-surface-container-lowest/10 rounded-xl backdrop-blur-sm">
                <span className="font-headline-md text-headline-md text-white mb-2 text-center">Custom Quote</span>
                <span className="text-outline-variant font-label-md mb-8 text-center">Tell us what you need</span>
                <button
                  onClick={() => onNavigate('trial')}
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

      {/* What Actually Drives the Price */}
      <section className="mb-24">
        <div className="text-center mb-16">
          <h2 className="font-headline-lg text-headline-lg text-charcoal mb-4">What Actually Drives Tutoring Costs</h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto">
            Most tutoring pricing in the US is opaque, which makes comparison hard. Here is what genuinely
            moves the number, so you can judge any quote you receive rather than only ours.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          <div className="bg-soft-gray p-8 rounded-xl">
            <h3 className="font-label-md text-label-md text-charcoal font-bold mb-3">Level, not subject</h3>
            <p className="text-on-surface-variant text-sm">
              AP Calculus costs more to staff than fifth-grade fractions because the pool of people who can
              teach it well is smaller. Subject matters far less than level. A provider charging the same rate
              for Grade 3 reading and AP Physics is either overcharging on one or under-resourcing the other.
            </p>
          </div>
          <div className="bg-soft-gray p-8 rounded-xl">
            <h3 className="font-label-md text-label-md text-charcoal font-bold mb-3">Frequency and commitment</h3>
            <p className="text-on-surface-variant text-sm">
              Booking a block lowers the per-lesson rate everywhere, ours included: twelve lessons a month
              works out at $23 each against $25 on the eight-lesson plan. The saving is real, but it only
              counts if the lessons get used, so buy for the schedule you will actually keep.
            </p>
          </div>
          <div className="bg-soft-gray p-8 rounded-xl">
            <h3 className="font-label-md text-label-md text-charcoal font-bold mb-3">Group size</h3>
            <p className="text-on-surface-variant text-sm">
              Small-group tutoring advertises lower headline rates, and for review work it can be fine. For
              closing a specific gap it rarely is, because the tutor cannot stop and rebuild a foundation for
              one student while five others wait. Compare like with like before comparing price.
            </p>
          </div>
        </div>
        <div className="bg-primary/5 border border-primary/10 rounded-xl p-8 mt-gutter">
          <h3 className="font-label-md text-label-md text-charcoal font-bold mb-3">A note on comparing quotes</h3>
          <p className="text-on-surface-variant text-sm">
            When comparing providers, check three things that are easy to miss: whether the advertised rate is
            per hour or per session (a 50-minute session priced at $25 is not the same as an hour at $25),
            whether there is a registration or assessment fee on top, and whether unused lessons expire. Those
            three between them account for most of the difference between a quoted price and what families
            actually end up paying.
          </p>
        </div>
      </section>

      {/* Everything Included Features */}
      <section className="mb-24">
        <div className="text-center mb-16">
          <h2 className="font-headline-lg text-headline-lg text-charcoal mb-4">Everything Included in One Price</h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto">
            The cost depends on the package you choose, not on the subject or the grade. Whatever you pick,
            everything below is part of it.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          <div className="bg-soft-gray p-8 rounded-xl flex items-start gap-4">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
              <BarChart3 size={22} className="text-primary" />
            </div>
            <div>
              <h3 className="font-label-md text-label-md text-charcoal font-bold mb-2">Free Initial Assessment</h3>
              <p className="text-on-surface-variant text-sm">The trial lesson doubles as a diagnostic, establishing where your child stands against their grade-level standards before anyone commits.</p>
            </div>
          </div>
          <div className="bg-soft-gray p-8 rounded-xl flex items-start gap-4">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
              <Users size={22} className="text-primary" />
            </div>
            <div>
              <h3 className="font-label-md text-label-md text-charcoal font-bold mb-2">One Membership, Whole Family</h3>
              <p className="text-on-surface-variant text-sm">Lessons can be split across subjects and shared between siblings. Two children with lighter needs often cost less on one shared plan than two separate ones.</p>
            </div>
          </div>
          <div className="bg-soft-gray p-8 rounded-xl flex items-start gap-4">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
              <Video size={22} className="text-primary" />
            </div>
            <div>
              <h3 className="font-label-md text-label-md text-charcoal font-bold mb-2">Recorded Sessions</h3>
              <p className="text-on-surface-variant text-sm">Every lesson is saved to your account, so a method can be revisited weeks later when it reappears in class or on a test.</p>
            </div>
          </div>
          <div className="bg-soft-gray p-8 rounded-xl flex items-start gap-4">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
              <BookOpen size={22} className="text-primary" />
            </div>
            <div>
              <h3 className="font-label-md text-label-md text-charcoal font-bold mb-2">Materials &amp; Practice Sets</h3>
              <p className="text-on-surface-variant text-sm">Worked examples, practice questions and revision materials, matched to the standards your state actually uses.</p>
            </div>
          </div>
          <div className="bg-soft-gray p-8 rounded-xl flex items-start gap-4">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
              <MessageCircle size={22} className="text-primary" />
            </div>
            <div>
              <h3 className="font-label-md text-label-md text-charcoal font-bold mb-2">Between-Lesson Support</h3>
              <p className="text-on-surface-variant text-sm">Stuck on a problem at 9pm? Message your tutor a photo of it rather than losing the evening to it.</p>
            </div>
          </div>
          <div className="bg-soft-gray p-8 rounded-xl flex items-start gap-4">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
              <RefreshCw size={22} className="text-primary" />
            </div>
            <div>
              <h3 className="font-label-md text-label-md text-charcoal font-bold mb-2">Progress Reports</h3>
              <p className="text-on-surface-variant text-sm">A written summary after every session, plus a regular report tracking mastered standards and remaining gaps.</p>
            </div>
          </div>
          <div className="bg-soft-gray p-8 rounded-xl flex items-start gap-4">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
              <CalendarDays size={22} className="text-primary" />
            </div>
            <div>
              <h3 className="font-label-md text-label-md text-charcoal font-bold mb-2">Flexible Rescheduling</h3>
              <p className="text-on-surface-variant text-sm">Move any session with two hours&apos; notice, at no cost, plus up to three makeup lessons each month.</p>
            </div>
          </div>
          <div className="bg-soft-gray p-8 rounded-xl flex items-start gap-4">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
              <ShieldCheck size={22} className="text-primary" />
            </div>
            <div>
              <h3 className="font-label-md text-label-md text-charcoal font-bold mb-2">Secure &amp; Monitored</h3>
              <p className="text-on-surface-variant text-sm">Secure payments, background-checked tutors, and no contact outside the platform.</p>
            </div>
          </div>
          <div className="bg-soft-gray p-8 rounded-xl flex items-start gap-4">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
              <CheckCheck size={22} className="text-primary" />
            </div>
            <div>
              <h3 className="font-label-md text-label-md text-charcoal font-bold mb-2">No Contract, No Extras</h3>
              <p className="text-on-surface-variant text-sm">No registration fee, no cancellation charge, no surprise additions. Pause or change your plan whenever you need to.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-24">
        <div className="text-center mb-12">
          <h2 className="font-headline-lg text-headline-lg text-charcoal mb-4">Frequently Asked Questions</h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto">
            Quick answers on billing, scheduling and what a membership covers.
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

      {/* FAQ CTA */}
      <section className="bg-primary/5 rounded-2xl p-12 mb-24 text-center border border-primary/10 mx-auto">
        <h2 className="font-headline-md text-headline-md text-charcoal mb-4">Still not sure which plan fits?</h2>
        <p className="text-on-surface-variant mb-8 max-w-lg mx-auto">
          Take the free trial lesson first. The tutor will tell you honestly how much support your child needs,
          which is a better basis for choosing than a price list.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => onNavigate('trial')}
            className="px-8 py-4 bg-primary text-on-primary font-bold rounded-lg hover:shadow-lg transition-all active:scale-95 cursor-pointer flex items-center justify-center gap-2"
          >
            <CalendarCheck size={20} />
            Book a Free Trial Lesson
          </button>
          <button
            onClick={() => onNavigate('about')}
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