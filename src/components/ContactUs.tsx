'use client';

import { FormEvent } from 'react';
import { Mail, MessageCircle, Phone, Send } from 'lucide-react';

export default function ContactUs() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get('name') ?? '');
    const email = String(form.get('email') ?? '');
    const message = String(form.get('message') ?? '');
    const subject = encodeURIComponent(`Math Make Smart enquiry from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:info@mathmakesmart.com?subject=${subject}&body=${body}`;
  };

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

        <form onSubmit={handleSubmit} className="bg-surface-container-lowest rounded-xl p-8 md:p-10 border border-outline-variant/30 shadow-ambient space-y-6">
          <div>
            <h2 className="font-headline-lg text-headline-lg text-charcoal font-semibold mb-2">Send a message</h2>
            <p className="text-on-surface-variant text-sm">Tell us a little about how we can help.</p>
          </div>
          <label className="block"><span className="block text-sm font-semibold text-charcoal mb-2">Name</span><input required name="name" type="text" autoComplete="name" className="w-full rounded-lg border border-outline-variant bg-white px-4 py-3 outline-none focus:border-primary" /></label>
          <label className="block"><span className="block text-sm font-semibold text-charcoal mb-2">Email</span><input required name="email" type="email" autoComplete="email" className="w-full rounded-lg border border-outline-variant bg-white px-4 py-3 outline-none focus:border-primary" /></label>
          <label className="block"><span className="block text-sm font-semibold text-charcoal mb-2">Message</span><textarea required name="message" rows={6} className="w-full rounded-lg border border-outline-variant bg-white px-4 py-3 outline-none focus:border-primary resize-y" /></label>
          <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-white hover:opacity-90 transition-opacity"><Send className="w-4 h-4" /> Send message</button>
        </form>
      </section>
    </div>
  );
}