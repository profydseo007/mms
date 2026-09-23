'use client';

import { Mail, MessageCircle, Phone } from 'lucide-react';
import { FreeTrialForm } from './FreeTrial';

export default function ContactUs() {
  return (
    <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop py-16 md:py-24">
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        <div>
          <span className="text-primary font-label-sm text-label-sm uppercase tracking-widest mb-4 block">We are here to help</span>
          <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-charcoal mb-6 font-bold">Contact Us</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed mb-10">
            Have a question about tutoring, subjects, or getting started? Send us a message and our team will get back to you as soon as possible.
          </p>

          <div className="space-y-5">
            <a href="mailto:info@mathmakesmart.com" className="flex items-center gap-4 p-5 bg-surface-container-lowest border border-outline-variant/30 rounded-xl hover:border-primary transition-colors">
              <span className="w-12 h-12 rounded-full bg-primary-container/20 text-primary flex items-center justify-center"><Mail className="w-5 h-5" /></span>
              <span><span className="block text-sm text-on-surface-variant">Email us</span><span className="font-semibold text-charcoal">info@mathmakesmart.com</span></span>
            </a>
            <a href="tel:+13474914870" className="flex items-center gap-4 p-5 bg-surface-container-lowest border border-outline-variant/30 rounded-xl hover:border-primary transition-colors">
              <span className="w-12 h-12 rounded-full bg-primary-container/20 text-primary flex items-center justify-center"><Phone className="w-5 h-5" /></span>
              <span><span className="block text-sm text-on-surface-variant">Call our US team</span><span className="font-semibold text-charcoal">+1 347 491 4870</span></span>
            </a>
            <a href="https://wa.me/13474914870" target="_blank" rel="noreferrer" className="flex items-center gap-4 p-5 bg-surface-container-lowest border border-outline-variant/30 rounded-xl hover:border-primary transition-colors">
              <span className="w-12 h-12 rounded-full bg-primary-container/20 text-primary flex items-center justify-center"><MessageCircle className="w-5 h-5" /></span>
              <span><span className="block text-sm text-on-surface-variant">Message us on WhatsApp</span><span className="font-semibold text-charcoal">Chat with our support team</span></span>
            </a>
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <h2 className="font-headline-lg text-headline-lg text-charcoal font-semibold mb-2">Book a free trial lesson</h2>
            <p className="text-on-surface-variant text-sm">Complete the form and our team will help you get started.</p>
          </div>
          <FreeTrialForm />
        </div>
      </section>
    </div>
  );
}
