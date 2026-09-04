'use client';

import React from 'react';
import { Mail, Shield, CheckCircle, Clock, MapPin, Phone, Users } from 'lucide-react';

export default function Privacy() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop py-16 md:py-24">
      {/* Hero Section */}
      <div className="mb-16 text-center max-w-3xl mx-auto">
        <span className="text-primary font-label-sm text-label-sm uppercase tracking-widest mb-4 block">Trust &amp; Safety</span>
        <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-charcoal mb-6 font-bold">Privacy Policy</h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant font-sans">
          At Math Make Smart Tutoring, your trust is our most valuable asset. We are committed to protecting your personal data and ensuring a safe learning environment for every student.
        </p>
        <div className="mt-8 flex justify-center items-center gap-4 text-on-surface-variant">
          <span className="flex items-center gap-2 font-label-md text-label-md">
            <Clock className="w-5 h-5 text-primary" />
            Last Updated: June 15, 2024
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
        {/* Sticky Sidebar Navigation */}
        <aside className="lg:col-span-3 sticky top-24 hidden lg:block">
          <nav className="space-y-1 bg-white p-4 rounded-xl border border-surface-container shadow-sm">
            <button 
              onClick={() => scrollToSection('collection')}
              className="block w-full text-left py-2.5 px-4 rounded-lg text-on-surface-variant hover:bg-soft-gray hover:text-primary transition-all font-medium text-sm cursor-pointer"
            >
              Information Collection
            </button>
            <button 
              onClick={() => scrollToSection('usage')}
              className="block w-full text-left py-2.5 px-4 rounded-lg text-on-surface-variant hover:bg-soft-gray hover:text-primary transition-all font-medium text-sm cursor-pointer"
            >
              Use of Data
            </button>
            <button 
              onClick={() => scrollToSection('cookies')}
              className="block w-full text-left py-2.5 px-4 rounded-lg text-on-surface-variant hover:bg-soft-gray hover:text-primary transition-all font-medium text-sm cursor-pointer"
            >
              Cookies Policy
            </button>
            <button 
              onClick={() => scrollToSection('security')}
              className="block w-full text-left py-2.5 px-4 rounded-lg text-on-surface-variant hover:bg-soft-gray hover:text-primary transition-all font-medium text-sm cursor-pointer"
            >
              Data Security
            </button>
            <button 
              onClick={() => scrollToSection('disclosure')}
              className="block w-full text-left py-2.5 px-4 rounded-lg text-on-surface-variant hover:bg-soft-gray hover:text-primary transition-all font-medium text-sm cursor-pointer"
            >
              Third-Party Disclosure
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left py-2.5 px-4 rounded-lg text-on-surface-variant hover:bg-soft-gray hover:text-primary transition-all font-medium text-sm cursor-pointer"
            >
              Contact Us
            </button>
          </nav>
        </aside>

        {/* Main Policy Content */}
        <div className="lg:col-span-9 space-y-12">
          {/* Information Collection */}
          <section className="bg-surface-container-lowest rounded-xl p-8 md:p-12 shadow-ambient border border-outline-variant/30 scroll-mt-24" id="collection">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-primary-container/20 rounded-full flex items-center justify-center text-primary">
                <Users className="w-6 h-6" />
              </div>
              <h2 className="font-headline-lg text-headline-lg text-charcoal font-semibold">Information Collection</h2>
            </div>
            <p className="text-on-surface-variant mb-6 font-sans leading-relaxed">
              To provide the highest quality tutoring services, we collect information that helps us personalize the learning experience. This information is gathered when you register on our site, place an order, or subscribe to our newsletter.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-lime-green mt-1 flex-shrink-0" />
                <span className="font-sans"><strong>Personal Identification:</strong> Name, email address, mailing address, and phone number.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-lime-green mt-1 flex-shrink-0" />
                <span className="font-sans"><strong>Academic Data:</strong> Grade level, subjects of interest, and specific learning goals or challenges.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-lime-green mt-1 flex-shrink-0" />
                <span className="font-sans"><strong>Payment Information:</strong> Securely processed billing details (we do not store full credit card numbers on our servers).</span>
              </li>
            </ul>
          </section>

          {/* Use of Data */}
          <section className="bg-surface-container-lowest rounded-xl p-8 md:p-12 shadow-ambient border border-outline-variant/30 scroll-mt-24" id="usage">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-primary-container/20 rounded-full flex items-center justify-center text-primary">
                <CheckCircle className="w-6 h-6" />
              </div>
              <h2 className="font-headline-lg text-headline-lg text-charcoal font-semibold">Use of Data</h2>
            </div>
            <p className="text-on-surface-variant mb-6 font-sans">
              The information we collect from you may be used in the following ways to enhance your tutoring journey:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-6 bg-soft-gray rounded-lg">
                <h4 className="font-bold text-primary mb-2">Personalization</h4>
                <p className="text-on-surface-variant font-sans text-sm">To better respond to your individual needs and learning pace.</p>
              </div>
              <div className="p-6 bg-soft-gray rounded-lg">
                <h4 className="font-bold text-primary mb-2">Communication</h4>
                <p className="text-on-surface-variant font-sans text-sm">To send periodic emails regarding your session updates and service announcements.</p>
              </div>
              <div className="p-6 bg-soft-gray rounded-lg">
                <h4 className="font-bold text-primary mb-2">Platform Improvement</h4>
                <p className="text-on-surface-variant font-sans text-sm">To improve our website offerings based on the feedback we receive from you.</p>
              </div>
              <div className="p-6 bg-soft-gray rounded-lg">
                <h4 className="font-bold text-primary mb-2">Customer Service</h4>
                <p className="text-on-surface-variant font-sans text-sm">To more effectively respond to your customer service requests and support needs.</p>
              </div>
            </div>
          </section>

          {/* Cookies Policy */}
          <section className="bg-surface-container-lowest rounded-xl p-8 md:p-12 shadow-ambient border border-outline-variant/30 scroll-mt-24" id="cookies">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-primary-container/20 rounded-full flex items-center justify-center text-primary">
                <Mail className="w-6 h-6" />
              </div>
              <h2 className="font-headline-lg text-headline-lg text-charcoal font-semibold">Cookies Policy</h2>
            </div>
            <p className="text-on-surface-variant mb-4 font-sans leading-relaxed">
              Yes, we use cookies (small files that a site or its service provider transfers to your computer's hard drive through your Web browser) to enable the site's or service provider's systems to recognize your browser and capture and remember certain information.
            </p>
            <div className="bg-primary-container/5 border-l-4 border-primary p-6 my-6 rounded-r-lg">
              <p className="font-body-md italic text-on-surface font-sans">
                "We use cookies to help us remember and process the items in your shopping cart, understand and save your preferences for future visits, and compile aggregate data about site traffic."
              </p>
            </div>
            <p className="text-on-surface-variant font-sans leading-relaxed">
              You can choose to have your computer warn you each time a cookie is being sent, or you can choose to turn off all cookies via your browser settings. If you turn cookies off, some features that make your site experience more efficient may not function properly.
            </p>
          </section>

          {/* Data Security */}
          <section className="bg-surface-container-lowest rounded-xl p-8 md:p-12 shadow-ambient border border-outline-variant/30 scroll-mt-24" id="security">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-primary-container/20 rounded-full flex items-center justify-center text-primary">
                <Shield className="w-6 h-6" />
              </div>
              <h2 className="font-headline-lg text-headline-lg text-charcoal font-semibold">Data Security</h2>
            </div>
            <p className="text-on-surface-variant mb-6 font-sans leading-relaxed">
              We implement a variety of security measures to maintain the safety of your personal information. Your personal information is contained behind secured networks and is only accessible by a limited number of persons who have special access rights to such systems.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="px-4 py-2 bg-lime-green/10 text-primary border border-lime-green/30 rounded-full font-label-md flex items-center gap-2 text-xs">
                <Shield className="w-4 h-4" /> SSL Encryption
              </div>
              <div className="px-4 py-2 bg-lime-green/10 text-primary border border-lime-green/30 rounded-full font-label-md flex items-center gap-2 text-xs">
                <Clock className="w-4 h-4" /> 24/7 Monitoring
              </div>
              <div className="px-4 py-2 bg-lime-green/10 text-primary border border-lime-green/30 rounded-full font-label-md flex items-center gap-2 text-xs">
                <CheckCircle className="w-4 h-4" /> Encrypted Storage
              </div>
            </div>
          </section>

          {/* Third-Party Disclosure */}
          <section className="bg-surface-container-lowest rounded-xl p-8 md:p-12 shadow-ambient border border-outline-variant/30 scroll-mt-24" id="disclosure">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-primary-container/20 rounded-full flex items-center justify-center text-primary">
                <Users className="w-6 h-6" />
              </div>
              <h2 className="font-headline-lg text-headline-lg text-charcoal font-semibold">Third-Party Disclosure</h2>
            </div>
            <p className="text-on-surface-variant font-sans leading-relaxed">
              We do not sell, trade, or otherwise transfer to outside parties your personally identifiable information. This does not include trusted third parties who assist us in operating our website, conducting our business, or servicing you, so long as those parties agree to keep this information confidential.
            </p>
          </section>

          {/* Contact Information */}
          <section className="bg-primary text-on-primary rounded-xl p-8 md:p-12 shadow-lg scroll-mt-24" id="contact">
            <h2 className="font-headline-lg text-headline-lg mb-6 font-semibold text-white">Questions about our Privacy Policy?</h2>
            <p className="mb-8 font-body-lg text-primary-fixed-dim">
              If there are any questions regarding this privacy policy, you may contact our Data Privacy Officer using the information below.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="flex flex-col gap-2">
                <span className="font-label-sm uppercase tracking-wide opacity-80 text-xs font-semibold">Email Support</span>
                <a className="font-bold underline decoration-lime-green decoration-2 underline-offset-4 text-white" href="mailto:privacy@mathmakesmart.com">privacy@mathmakesmart.com</a>
              </div>
              <div className="flex flex-col gap-2">
                <span className="font-label-sm uppercase tracking-wide opacity-80 text-xs font-semibold">Global Office</span>
                <p className="font-bold text-white">123 Learning Lane, Suite 400<br />Silicon Valley, CA 94025</p>
              </div>
              <div className="flex flex-col gap-2">
                <span className="font-label-sm uppercase tracking-wide opacity-80 text-xs font-semibold">Direct Line</span>
                <p className="font-bold text-white">+1 (800) SMART-LEARN</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
