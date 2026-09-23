'use client';

import React from 'react';
import { Award, CheckCircle, Clock, Shield, HelpCircle, XCircle } from 'lucide-react';

export default function Refund() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop py-16 md:py-24">
      {/* Hero Section */}
      <div className="mb-16 md:mb-24 text-center max-w-3xl mx-auto">
        <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface mb-6 font-bold">Refund Policy</h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant font-sans">
          We are committed to providing a patient, personalized learning experience. If you're not satisfied, we're here to help make it right.
        </p>
        <div className="mt-8 inline-flex items-center gap-2 px-4 py-2 bg-primary-container/10 text-primary rounded-full font-label-md text-label-md">
          <Clock className="w-5 h-5 text-primary" />
          Last Updated: October 24, 2023
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
        {/* Sidebar Navigation */}
        <aside className="hidden lg:block lg:col-span-3">
          <nav className="sticky top-32 space-y-4 bg-white p-4 rounded-xl border border-surface-container shadow-sm">
            <button 
              onClick={() => scrollToSection('guarantee')}
              className="block w-full text-left py-2 px-4 text-on-surface-variant hover:text-primary transition-all font-medium text-sm cursor-pointer"
            >
              Satisfaction Guarantee
            </button>
            <button 
              onClick={() => scrollToSection('cancellation')}
              className="block w-full text-left py-2 px-4 text-on-surface-variant hover:text-primary transition-all font-medium text-sm cursor-pointer"
            >
              Cancellation Policy
            </button>
            <button 
              onClick={() => scrollToSection('eligibility')}
              className="block w-full text-left py-2 px-4 text-on-surface-variant hover:text-primary transition-all font-medium text-sm cursor-pointer"
            >
              Refund Eligibility
            </button>
            <button 
              onClick={() => scrollToSection('process')}
              className="block w-full text-left py-2 px-4 text-on-surface-variant hover:text-primary transition-all font-medium text-sm cursor-pointer"
            >
              Refund Process
            </button>
          </nav>
        </aside>

        {/* Content Area */}
        <div className="lg:col-span-9 space-y-16">
          {/* Section: Satisfaction Guarantee */}
          <section className="bg-surface-container-lowest p-8 md:p-12 rounded-xl policy-card scroll-mt-24" id="guarantee">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-lime-green/20 rounded-full flex items-center justify-center text-secondary">
                <CheckCircle className="w-6 h-6 text-secondary" />
              </div>
              <h2 className="font-headline-lg text-headline-lg text-on-surface font-semibold">Satisfaction Guarantee</h2>
            </div>
            <p className="mb-6 text-on-surface-variant leading-relaxed font-sans">
              At Math Make Smart, we believe every student deserves a learning environment where they feel seen and heard. Before you commit to a paid plan, we invite every new family to experience a **1-Hour Complimentary Consultation &amp; Trial Lesson**. This allows us to assess the student's needs and ensures our tutoring style is a perfect match.
            </p>
            <div className="bg-soft-gray p-6 rounded-lg border-l-4 border-lime-green">
              <p className="font-bold text-on-surface mb-2 font-sans">The "Best Match" Promise</p>
              <p className="text-on-surface-variant font-sans text-sm">If you are not completely satisfied with your first paid session, let us know within 24 hours. We will either credit the session back to your account or match you with a different specialist at no additional cost.</p>
            </div>
          </section>

          {/* Section: Cancellation Policy */}
          <section className="bg-surface-container-lowest p-8 md:p-12 rounded-xl policy-card scroll-mt-24" id="cancellation">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                <Clock className="w-6 h-6" />
              </div>
              <h2 className="font-headline-lg text-headline-lg text-on-surface font-semibold">Cancellation Policy</h2>
            </div>
            <p className="mb-6 text-on-surface-variant font-sans">We value our tutors' time and the commitment they make to each student. Our cancellation policy ensures a predictable schedule for everyone.</p>
            <ul className="space-y-4">
              <li className="flex gap-4 items-start">
                <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div className="font-sans">
                  <span className="font-bold text-charcoal">Standard Sessions:</span> Cancellations made at least 24 hours in advance are eligible for rescheduling without penalty.
                </div>
              </li>
              <li className="flex gap-4 items-start">
                <XCircle className="w-5 h-5 text-error mt-1 flex-shrink-0" />
                <div className="font-sans">
                  <span className="font-bold text-charcoal">Late Cancellations:</span> Sessions cancelled with less than 24 hours notice will be charged at 50% of the standard rate.
                </div>
              </li>
              <li className="flex gap-4 items-start">
                <XCircle className="w-5 h-5 text-error mt-1 flex-shrink-0" />
                <div className="font-sans">
                  <span className="font-bold text-charcoal">No-Shows:</span> If a student is absent without notice, the session will be charged at the full rate.
                </div>
              </li>
            </ul>
          </section>

          {/* Section: Eligibility */}
          <section className="bg-surface-container-lowest p-8 md:p-12 rounded-xl policy-card scroll-mt-24" id="eligibility">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                <Shield className="w-6 h-6" />
              </div>
              <h2 className="font-headline-lg text-headline-lg text-on-surface font-semibold">Eligibility for Refunds</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 bg-soft-gray rounded-lg space-y-3">
                <h3 className="font-headline-md text-headline-md text-on-surface mb-3 font-medium">Eligible</h3>
                <ul className="space-y-3 text-on-surface-variant text-sm font-sans">
                  <li className="flex items-start gap-2"><span className="text-lime-green font-bold">•</span> Technical failure on the Math Make Smart platform.</li>
                  <li className="flex items-start gap-2"><span className="text-lime-green font-bold">•</span> Tutor absence without prior notification.</li>
                  <li className="flex items-start gap-2"><span className="text-lime-green font-bold">•</span> Pre-paid session packages (unused hours) within 30 days of purchase.</li>
                </ul>
              </div>
              <div className="p-6 bg-soft-gray rounded-lg space-y-3">
                <h3 className="font-headline-md text-headline-md text-on-surface mb-3 font-medium">Ineligible</h3>
                <ul className="space-y-3 text-on-surface-variant text-sm font-sans">
                  <li className="flex items-start gap-2"><span className="text-error font-bold">•</span> Sessions completed more than 7 days ago.</li>
                  <li className="flex items-start gap-2"><span className="text-error font-bold">•</span> Failure to use purchased hours after 6 months.</li>
                  <li className="flex items-start gap-2"><span className="text-error font-bold">•</span> Change of mind after the 24-hour post-session grace period.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section: Process */}
          <section className="bg-surface-container-lowest p-8 md:p-12 rounded-xl policy-card scroll-mt-24" id="process">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                <Award className="w-6 h-6" />
              </div>
              <h2 className="font-headline-lg text-headline-lg text-on-surface font-semibold">Refund Request Process</h2>
            </div>
            <div className="relative space-y-8 before:absolute before:left-6 before:top-2 before:bottom-2 before:w-0.5 before:bg-primary-container/20">
              <div className="relative pl-16">
                <div className="absolute left-0 w-12 h-12 rounded-full bg-primary flex items-center justify-center text-on-primary font-bold z-10">1</div>
                <h4 className="font-headline-md text-headline-md mb-2 text-charcoal font-medium">Submit Request</h4>
                <p className="text-on-surface-variant font-sans text-sm">Email our support team at <strong>refunds@mathmakesmart.com</strong> with your account details and the specific session ID or package date.</p>
              </div>
              <div className="relative pl-16">
                <div className="absolute left-0 w-12 h-12 rounded-full bg-primary flex items-center justify-center text-on-primary font-bold z-10">2</div>
                <h4 className="font-headline-md text-headline-md mb-2 text-charcoal font-medium">Review Period</h4>
                <p className="text-on-surface-variant font-sans text-sm">Our academic success team will review your request within 48 business hours to ensure it aligns with our patient-first quality standards.</p>
              </div>
              <div className="relative pl-16">
                <div className="absolute left-0 w-12 h-12 rounded-full bg-primary flex items-center justify-center text-on-primary font-bold z-10">3</div>
                <h4 className="font-headline-md text-headline-md mb-2 text-charcoal font-medium">Fund Return</h4>
                <p className="text-on-surface-variant font-sans text-sm">Approved refunds are processed back to the original payment method within 5–10 business days, depending on your financial institution.</p>
              </div>
            </div>
          </section>

          {/* Help CTA */}
          <div className="bg-royal-purple text-on-primary p-12 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-8 overflow-hidden relative shadow-lg">
            <div className="relative z-10 max-w-lg">
              <h2 className="font-headline-lg text-headline-lg mb-4 text-white font-medium">Need further assistance?</h2>
              <p className="font-body-lg text-body-lg text-primary-fixed-dim">Our team is available 7 days a week to help parents navigate their tutoring plans and financial inquiries.</p>
            </div>
            <div className="relative z-10 flex gap-4">
              <a 
                href="mailto:refunds@mathmakesmart.com"
                className="bg-white text-primary px-8 py-3 rounded-full font-label-md text-label-md hover:bg-opacity-90 transition-all cursor-pointer flex items-center justify-center"
              >
                Contact Support
              </a>
            </div>
            {/* Decorative Background Graphic */}
            <div className="absolute -right-10 -bottom-10 opacity-10 text-white">
              <HelpCircle className="w-48 h-48" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
