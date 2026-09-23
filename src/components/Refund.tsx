'use client';

import React from 'react';
import {
  Award,
  CheckCircle,
  Clock,
  Shield,
  HelpCircle,
  XCircle,
  Gift,
  PauseCircle,
  CalendarClock,
  Scale,
  Mail,
  Phone,
  MessageCircle,
  MapPin,
} from 'lucide-react';

const LAST_UPDATED = 'September 22, 2026';

const SECTIONS = [
  { id: 'promise', label: 'Our Promise' },
  { id: 'trial', label: 'Free Trial Lesson' },
  { id: 'cooling-off', label: 'Cancellation Window' },
  { id: 'plans', label: 'Cancelling or Pausing a Plan' },
  { id: 'rescheduling', label: 'Rescheduling & Missed Lessons' },
  { id: 'eligibility', label: 'Refund Eligibility' },
  { id: 'process', label: 'How to Request a Refund' },
  { id: 'country-rights', label: 'Your Rights by Country' },
  { id: 'contact', label: 'Contact Us' },
];

const COUNTRY_RIGHTS = [
  {
    flag: '\u{1F1EC}\u{1F1E7}',
    country: 'United Kingdom',
    law: 'Consumer Contracts Regulations 2013 and Consumer Rights Act 2015',
    text: 'You have 14 days from signing up to cancel. If you ask us to start lessons within those 14 days, you pay only for the lessons already delivered. Services must also be carried out with reasonable care and skill.',
  },
  {
    flag: '\u{1F1EE}\u{1F1EA}',
    country: 'Ireland',
    law: 'Consumer Rights Act 2022 and EU consumer law',
    text: 'You have 14 days from signing up to cancel. If lessons start within that period at your request, you pay only for what has been delivered. Services must be provided with reasonable care and skill.',
  },
  {
    flag: '\u{1F1E6}\u{1F1FA}',
    country: 'Australia',
    law: 'Australian Consumer Law',
    text: 'Consumer guarantees apply to our services and cannot be excluded. If a lesson is not delivered with due care and skill, you may be entitled to have it provided again or to a refund.',
  },
  {
    flag: '\u{1F1F3}\u{1F1FF}',
    country: 'New Zealand',
    law: 'Consumer Guarantees Act 1993',
    text: 'Services must be carried out with reasonable care and skill and within a reasonable time. If they are not, you may be entitled to have the problem fixed or to a refund.',
  },
  {
    flag: '\u{1F1E8}\u{1F1E6}',
    country: 'Canada',
    law: 'Provincial consumer protection laws',
    text: 'Your province may give you specific rights for services bought online, including cancellation rights and rules on refunds. Nothing in this policy limits those rights.',
  },
  {
    flag: '\u{1F1FA}\u{1F1F8}',
    country: 'United States',
    law: 'State consumer protection laws',
    text: 'Your state may give you additional rights when you buy services online. Nothing in this policy limits them, and you keep any rights your card provider offers.',
  },
];

function SectionHeader({ icon: Icon, title, tint = 'bg-primary/10 text-primary' }: { icon: React.ElementType; title: string; tint?: string }) {
  return (
    <div className="flex items-center gap-4 mb-6">
      <div className={`w-12 h-12 ${tint} rounded-full flex items-center justify-center flex-shrink-0`}>
        <Icon className="w-6 h-6" />
      </div>
      <h2 className="font-headline-lg text-headline-lg text-on-surface font-semibold">{title}</h2>
    </div>
  );
}

function Point({ good = true, title, children }: { good?: boolean; title: string; children: React.ReactNode }) {
  const Icon = good ? CheckCircle : XCircle;
  return (
    <li className="flex gap-4 items-start">
      <Icon className={`w-5 h-5 mt-1 flex-shrink-0 ${good ? 'text-primary' : 'text-error'}`} />
      <div className="font-sans text-on-surface-variant">
        <span className="font-bold text-charcoal">{title}</span> {children}
      </div>
    </li>
  );
}

const CARD = 'bg-surface-container-lowest p-8 md:p-12 rounded-xl policy-card scroll-mt-24';

export default function Refund() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop py-16 md:py-24">
      {/* Hero Section */}
      <div className="mb-16 md:mb-24 text-center max-w-3xl mx-auto">
        <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface mb-6 font-bold">Refund &amp; Cancellation Policy</h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant font-sans">
          We want every family to feel confident choosing Math Make Smart. This page explains, in plain language, how
          free trials, cancellations, missed lessons and refunds work for families in the United States, United
          Kingdom, Ireland, Canada, Australia and New Zealand.
        </p>
        <div className="mt-8 inline-flex items-center gap-2 px-4 py-2 bg-primary-container/10 text-primary rounded-full font-label-md text-label-md">
          <Clock className="w-5 h-5 text-primary" />
          Last Updated: {LAST_UPDATED}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
        {/* Sidebar Navigation */}
        <aside className="hidden lg:block lg:col-span-3">
          <nav className="sticky top-32 space-y-1 bg-white p-4 rounded-xl border border-surface-container shadow-sm">
            {SECTIONS.map((s) => (
              <button
                key={s.id}
                onClick={() => scrollToSection(s.id)}
                className="block w-full text-left py-2 px-4 rounded-lg text-on-surface-variant hover:bg-soft-gray hover:text-primary transition-all font-medium text-sm cursor-pointer"
              >
                {s.label}
              </button>
            ))}
          </nav>
        </aside>

        {/* Content Area */}
        <div className="lg:col-span-9 space-y-16">
          {/* Our Promise */}
          <section className={CARD} id="promise">
            <SectionHeader icon={CheckCircle} title="Our Promise" tint="bg-lime-green/20 text-secondary" />
            <p className="mb-6 text-on-surface-variant leading-relaxed font-sans">
              Choosing a tutor is a big decision, so we make it low-risk. You can try a free lesson before paying
              anything, cancel within your cancellation window for a full refund, and change or pause your plan later
              without penalty.
            </p>
            <div className="bg-soft-gray p-6 rounded-lg border-l-4 border-lime-green">
              <p className="font-bold text-on-surface mb-2 font-sans">The &ldquo;Right Match&rdquo; Promise</p>
              <p className="text-on-surface-variant font-sans text-sm">
                If the tutor is not the right fit for your child, tell us and we will match you with another tutor at no
                extra cost. Changing tutors is routine and never uses up a lesson.
              </p>
            </div>
          </section>

          {/* Free Trial */}
          <section className={CARD} id="trial">
            <SectionHeader icon={Gift} title="Free Trial Lesson" />
            <p className="mb-6 text-on-surface-variant font-sans leading-relaxed">
              Every new student can book a free trial lesson before signing up. No card details are needed, and there
              is no obligation to continue afterwards.
            </p>
            <ul className="space-y-4">
              <Point title="Completely free:">The trial lesson is never charged, whether or not you go on to enrol.</Point>
              <Point title="A real assessment:">The tutor looks at where your child stands and explains what would help.</Point>
              <Point title="No pressure:">If you decide not to continue, nobody will chase you with sales calls.</Point>
            </ul>
          </section>

          {/* Cancellation Window */}
          <section className={CARD} id="cooling-off">
            <SectionHeader icon={Shield} title="Cancellation Window" />
            <p className="mb-6 text-on-surface-variant font-sans leading-relaxed">
              After you sign up, you have a set period to change your mind and receive a full refund.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="p-6 bg-soft-gray rounded-lg">
                <p className="font-bold text-charcoal mb-2 font-sans">UK &amp; Ireland: 14 days</p>
                <p className="text-on-surface-variant text-sm font-sans">
                  Consumer law gives you 14 days from sign-up to cancel. If you ask us to start lessons during that
                  time, you pay only for lessons already delivered.
                </p>
              </div>
              <div className="p-6 bg-soft-gray rounded-lg">
                <p className="font-bold text-charcoal mb-2 font-sans">US, Canada, Australia &amp; NZ: 7 days</p>
                <p className="text-on-surface-variant text-sm font-sans">
                  Cancel within 7 days of signing up for a full refund of the amount paid, less any lessons already
                  taken.
                </p>
              </div>
            </div>
            <p className="text-on-surface-variant font-sans text-sm">
              To cancel, simply email, call or message us on WhatsApp. You do not need to give a reason.
            </p>
          </section>

          {/* Plans */}
          <section className={CARD} id="plans">
            <SectionHeader icon={PauseCircle} title="Cancelling or Pausing a Plan" />
            <p className="mb-6 text-on-surface-variant font-sans leading-relaxed">
              Monthly plans are paid in advance at the start of each billing month. There is no contract and no
              cancellation fee.
            </p>
            <ul className="space-y-4">
              <Point title="Cancel anytime:">Cancelling stops your next payment. Your current month stays active, so you can use the lessons already paid for.</Point>
              <Point title="Pause your plan:">Holidays, exams or illness? Pause with notice and your tutor pairing is kept for when you return.</Point>
              <Point title="Change your plan:">Move up or down a plan at any time. The change starts from your next billing date.</Point>
              <Point good={false} title="Part-month refunds:">Outside your cancellation window, we do not refund the unused part of a month that has already started, except where the law requires it.</Point>
            </ul>
          </section>

          {/* Rescheduling */}
          <section className={CARD} id="rescheduling">
            <SectionHeader icon={CalendarClock} title="Rescheduling &amp; Missed Lessons" />
            <p className="mb-6 text-on-surface-variant font-sans">
              Plans change, so we keep rescheduling simple and fair to both students and tutors.
            </p>
            <ul className="space-y-4">
              <Point title="Reschedule with 2 hours&rsquo; notice:">Move any lesson from your dashboard, free of charge, as long as it is at least 2 hours before the start time.</Point>
              <Point title="Makeup lessons:">You can take up to 3 makeup lessons each month, subject to tutor availability.</Point>
              <Point good={false} title="Late cancellations:">Lessons cancelled less than 2 hours before the start time count as used.</Point>
              <Point good={false} title="No-shows:">If a student does not attend without notice, the lesson counts as used.</Point>
              <Point title="If we cancel:">If a tutor misses a lesson or we cannot deliver it, you always get a free replacement lesson or a refund for it.</Point>
            </ul>
          </section>

          {/* Eligibility */}
          <section className={CARD} id="eligibility">
            <SectionHeader icon={Shield} title="Refund Eligibility" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 bg-soft-gray rounded-lg space-y-3">
                <h3 className="font-headline-md text-headline-md text-on-surface mb-3 font-medium">You can get a refund when</h3>
                <ul className="space-y-3 text-on-surface-variant text-sm font-sans">
                  <li className="flex items-start gap-2"><span className="text-lime-green font-bold">&bull;</span> You cancel within your cancellation window.</li>
                  <li className="flex items-start gap-2"><span className="text-lime-green font-bold">&bull;</span> A tutor misses a lesson without notice.</li>
                  <li className="flex items-start gap-2"><span className="text-lime-green font-bold">&bull;</span> A technical problem on our side stops a lesson going ahead.</li>
                  <li className="flex items-start gap-2"><span className="text-lime-green font-bold">&bull;</span> You were charged by mistake or twice.</li>
                  <li className="flex items-start gap-2"><span className="text-lime-green font-bold">&bull;</span> Your local consumer law gives you the right to one.</li>
                </ul>
              </div>
              <div className="p-6 bg-soft-gray rounded-lg space-y-3">
                <h3 className="font-headline-md text-headline-md text-on-surface mb-3 font-medium">Refunds do not usually cover</h3>
                <ul className="space-y-3 text-on-surface-variant text-sm font-sans">
                  <li className="flex items-start gap-2"><span className="text-error font-bold">&bull;</span> Lessons already delivered.</li>
                  <li className="flex items-start gap-2"><span className="text-error font-bold">&bull;</span> Late cancellations and no-shows.</li>
                  <li className="flex items-start gap-2"><span className="text-error font-bold">&bull;</span> The unused part of a month after your cancellation window.</li>
                  <li className="flex items-start gap-2"><span className="text-error font-bold">&bull;</span> Problems caused by your own device or internet connection.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Process */}
          <section className={CARD} id="process">
            <SectionHeader icon={Award} title="How to Request a Refund" />
            <div className="relative space-y-8 before:absolute before:left-6 before:top-2 before:bottom-2 before:w-0.5 before:bg-primary-container/20">
              <div className="relative pl-16">
                <div className="absolute left-0 w-12 h-12 rounded-full bg-primary flex items-center justify-center text-on-primary font-bold z-10">1</div>
                <h4 className="font-headline-md text-headline-md mb-2 text-charcoal font-medium">Contact Us</h4>
                <p className="text-on-surface-variant font-sans text-sm">
                  Email <strong>info@mathmakesmart.com</strong> or message us on WhatsApp with your name, your child&rsquo;s
                  name and the lesson date or payment you are asking about.
                </p>
              </div>
              <div className="relative pl-16">
                <div className="absolute left-0 w-12 h-12 rounded-full bg-primary flex items-center justify-center text-on-primary font-bold z-10">2</div>
                <h4 className="font-headline-md text-headline-md mb-2 text-charcoal font-medium">We Review It</h4>
                <p className="text-on-surface-variant font-sans text-sm">
                  We will confirm we have received your request and reply with a decision within 2 business days.
                </p>
              </div>
              <div className="relative pl-16">
                <div className="absolute left-0 w-12 h-12 rounded-full bg-primary flex items-center justify-center text-on-primary font-bold z-10">3</div>
                <h4 className="font-headline-md text-headline-md mb-2 text-charcoal font-medium">You Get Your Money Back</h4>
                <p className="text-on-surface-variant font-sans text-sm">
                  Approved refunds are sent to your original payment method within 14 days. Your bank may take a few
                  extra days to show it on your statement.
                </p>
              </div>
            </div>
          </section>

          {/* Country Rights */}
          <section className={CARD} id="country-rights">
            <SectionHeader icon={Scale} title="Your Rights by Country" />
            <p className="mb-8 text-on-surface-variant font-sans leading-relaxed">
              This policy never takes away the rights your local consumer law gives you. Where the law gives you more
              than this policy does, the law applies.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {COUNTRY_RIGHTS.map((c) => (
                <div key={c.country} className="p-6 bg-soft-gray rounded-lg">
                  <h4 className="font-bold text-charcoal mb-1 flex items-center gap-2">
                    <span aria-hidden="true">{c.flag}</span> {c.country}
                  </h4>
                  <p className="text-xs text-primary font-semibold mb-3">{c.law}</p>
                  <p className="text-sm text-on-surface-variant font-sans">{c.text}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Contact */}
          <section className={CARD} id="contact">
            <SectionHeader icon={Mail} title="Contact Us" />
            <p className="mb-6 text-on-surface-variant font-sans">
              Questions about a payment, cancellation or refund? Reach Math Make Smart LLC any of these ways.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <a href="mailto:info@mathmakesmart.com" className="flex items-start gap-3 p-4 bg-soft-gray rounded-lg hover:bg-primary/5 transition-colors">
                <Mail className="w-5 h-5 text-primary mt-0.5" />
                <span className="font-sans"><strong className="block text-charcoal">Email</strong><span className="text-on-surface-variant text-sm">info@mathmakesmart.com</span></span>
              </a>
              <a href="tel:+13474914870" className="flex items-start gap-3 p-4 bg-soft-gray rounded-lg hover:bg-primary/5 transition-colors">
                <Phone className="w-5 h-5 text-primary mt-0.5" />
                <span className="font-sans"><strong className="block text-charcoal">Phone</strong><span className="text-on-surface-variant text-sm">+1 (347) 491-4870</span></span>
              </a>
              <a href="https://wa.me/+13474914870" target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 p-4 bg-soft-gray rounded-lg hover:bg-primary/5 transition-colors">
                <MessageCircle className="w-5 h-5 text-primary mt-0.5" />
                <span className="font-sans"><strong className="block text-charcoal">WhatsApp Support</strong><span className="text-on-surface-variant text-sm">Chat with our team</span></span>
              </a>
              <div className="flex items-start gap-3 p-4 bg-soft-gray rounded-lg">
                <MapPin className="w-5 h-5 text-primary mt-0.5" />
                <span className="font-sans"><strong className="block text-charcoal">Postal Address</strong><span className="text-on-surface-variant text-sm">Math Make Smart LLC, 418 Broadway #7805, Albany, NY 12207, United States</span></span>
              </div>
            </div>
          </section>

          {/* Help CTA */}
          <div className="bg-royal-purple text-on-primary p-12 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-8 overflow-hidden relative shadow-lg">
            <div className="relative z-10 max-w-lg">
              <h2 className="font-headline-lg text-headline-lg mb-4 text-white font-medium">Need a hand with your plan?</h2>
              <p className="font-body-lg text-body-lg text-primary-fixed-dim">
                Message our team on WhatsApp for quick help with rescheduling, pausing, changing plans or refunds.
              </p>
            </div>
            <div className="relative z-10 flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/+13474914870"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-primary px-8 py-3 rounded-full font-label-md text-label-md hover:bg-opacity-90 transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" /> WhatsApp Us
              </a>
              <a
                href="mailto:info@mathmakesmart.com"
                className="border border-white/40 text-white px-8 py-3 rounded-full font-label-md text-label-md hover:bg-white/10 transition-all cursor-pointer flex items-center justify-center"
              >
                Email Support
              </a>
            </div>
            <div className="absolute -right-10 -bottom-10 opacity-10 text-white">
              <HelpCircle className="w-48 h-48" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}