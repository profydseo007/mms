'use client';

import React, { useEffect, useState } from 'react';
import { ActivePage } from '@/lib/types';
import { COUNTRY_FORM_IDS, getClientCountryDetection } from '@/lib/country';
import { Star, ShieldAlert, Award, FileText, CheckCircle, GraduationCap, Calendar, Phone, Mail, Sparkles } from 'lucide-react';
import TrustpilotWidget from './TrustpilotWidget';

function getUsableFormId(region: string): string {
  const candidate = COUNTRY_FORM_IDS[region];
  return candidate && !candidate.startsWith('YOUR_')
    ? candidate
    : COUNTRY_FORM_IDS.US;
}

interface FreeTrialProps {
  onNavigate: (page: ActivePage, subjectTitle?: string) => void;
}

export default function FreeTrial({ onNavigate }: FreeTrialProps) {
  const [selectedRegion, setSelectedRegion] = useState('US');
  const [formId, setFormId] = useState(COUNTRY_FORM_IDS.US);

  useEffect(() => {
    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 3000);

    async function detectRegion() {
      try {
        const result = await getClientCountryDetection(controller.signal);
        const countryCode = result.countryCode?.toUpperCase();
        if (!countryCode) return;

        const detectedRegion =
          getUsableFormId(countryCode) !== COUNTRY_FORM_IDS.US || countryCode === 'US'
            ? countryCode
            : 'US';
        setSelectedRegion(detectedRegion);
        setFormId(getUsableFormId(detectedRegion));
      } catch (error) {
        if (!(error instanceof DOMException && error.name === 'AbortError')) {
          console.warn('[ghl free-trial] country detection unavailable; using US form');
        }
      }
    }

    void detectRegion();

    const scriptId = 'ghl-form-embed-script';
    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://link.msgsndr.com/js/form_embed.js';
      script.async = true;
      document.body.appendChild(script);
    }

    return () => {
      window.clearTimeout(timeout);
      controller.abort();
    };
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center pt-12 pb-24 overflow-hidden bg-white">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-primary-fixed opacity-10 rounded-l-full transform translate-x-1/4"></div>
        </div>
        <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop grid md:grid-cols-2 gap-16 items-center relative z-10">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-secondary-container px-4 py-2 rounded-full text-on-secondary-container shadow-sm">
              <Star className="w-4 h-4 fill-current text-secondary" />
              <span className="font-label-sm text-label-sm">Trusted by 5,000+ Parents</span>
            </div>
            <h1 className="font-display text-display-lg-mobile md:text-display-lg text-charcoal leading-tight font-bold">
              Book a <span className="text-royal-purple font-extrabold">Free Trial Lesson</span> Now!
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-lg">
              For any subject and any age student. Discover personalized tutoring that fits your schedule and academic goals.
            </p>
            <div className="flex items-center gap-4">
              <div className="flex flex-col">
                <TrustpilotWidget />
              </div>
            </div>
          </div>

          {/* GHL Free Trial Form (country-aware) */}
          <div className="bg-white p-6 md:p-8 rounded-[28px] shadow-[0_18px_45px_rgba(15,23,42,0.08)] border border-slate-200 w-full max-w-[520px] ml-auto">
            <iframe
              key={formId}
              id="ghl-dynamic-form"
              src={`https://api.leadconnectorhq.com/widget/form/${formId}?notrack=true`}
              style={{ width: '100%', height: '543px', border: 'none', borderRadius: '8px' }}
              data-layout="{'id':'INLINE'}"
              data-form-name="Free Trial"
              data-height="543"
              data-layout-iframe-id="ghl-dynamic-form"
              data-form-id={formId}
              title="Free Trial"
            />
          </div>
        </div>
      </section>

      {/* Trust & Value Prop Section */}
      <section className="bg-soft-gray py-24 border-y border-surface-container">
        <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="text-center mb-16 space-y-4">
            <h2 className="font-headline-lg text-headline-lg text-charcoal font-semibold uppercase tracking-wider">Premium Academic Standard</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
              Delivering the best standard of education at great value. Experience world-class tutoring without the premium price tag.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Pricing Card */}
            <div className="bg-white p-10 rounded-xl shadow-ambient border-t-4 border-royal-purple flex flex-col items-center justify-center text-center">
              <span className="font-label-md text-label-md text-royal-purple uppercase tracking-widest mb-4">Starting At</span>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl md:text-5xl font-bold text-charcoal">$14.99</span>
                <span className="text-on-surface-variant font-label-md">/hour</span>
              </div>
              <p className="mt-6 text-on-surface-variant font-body-md">Professional tutoring that fits every budget. Quality education should be accessible to all.</p>
            </div>
            {/* Hero Image Context */}
            <div className="lg:col-span-2 relative h-[400px] rounded-xl overflow-hidden shadow-ambient border border-surface-container">
              <img 
                className="w-full h-full object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB8DbcxxLYd4Mat9rLzghFo8KU8Q0JJkS7uaLG6aP0tdur4PYinJQvhY-P6D5yYtn9GhMYEFR3FXPbwNenq_5Dk5RdMytKt8XpazTXcUtU52IUX69XPdtWP3Sb53ZJj6ExedaWGK2UhRwVXhuJaB6yIHDrzyLYK3FXgvEnslJBEEfMIxO6_3fXcx53aDhASA8TdZa-SqWrC4hNbjKwaR-1y1ZUy9rS4uW5MdAWBaMghavbGCLZDVSC5TxF_7jXYatIIvyrxtLO_pAS70Hc"
                alt="Personal tutoring session"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 to-transparent flex items-end p-8">
                <p className="text-white font-headline-md max-w-md font-medium">"The progress my son made in just one month was incredible." — Sarah J., Parent</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us / Bento Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="space-y-4">
              <span className="text-royal-purple font-label-sm text-label-sm uppercase tracking-widest font-semibold">Our Key Features</span>
              <h2 className="font-headline-lg text-headline-lg text-charcoal font-semibold">What Makes Us Special</h2>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant md:max-w-md font-sans">
              We've built a learning ecosystem that prioritizes student engagement and parent transparency.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Feature 1: Worksheets */}
            <div className="bg-white p-8 rounded-xl border border-surface-container hover:shadow-xl transition-all duration-300 group">
              <div className="w-12 h-12 bg-primary-fixed rounded-lg flex items-center justify-center text-royal-purple mb-6 group-hover:scale-110 transition-transform">
                <FileText className="w-6 h-6" />
              </div>
              <h3 className="font-headline-md text-headline-md text-charcoal mb-4 font-medium">Unlimited Worksheets</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">Practice and revision material provided completely free. No hidden resource charges.</p>
            </div>
            {/* Feature 2: Portal */}
            <div className="bg-white p-8 rounded-xl border border-surface-container hover:shadow-xl transition-all duration-300 group">
              <div className="w-12 h-12 bg-primary-fixed rounded-lg flex items-center justify-center text-royal-purple mb-6 group-hover:scale-110 transition-transform">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h3 className="font-headline-md text-headline-md text-charcoal mb-4 font-medium">Student &amp; Parent Portal</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">Full access to courses for students and progress tracking for parents in real-time.</p>
            </div>
            {/* Feature 3: Reports */}
            <div className="bg-white p-8 rounded-xl border border-surface-container hover:shadow-xl transition-all duration-300 group">
              <div className="w-12 h-12 bg-primary-fixed rounded-lg flex items-center justify-center text-royal-purple mb-6 group-hover:scale-110 transition-transform">
                <Star className="w-6 h-6" />
              </div>
              <h3 className="font-headline-md text-headline-md text-charcoal mb-4 font-medium">Daily &amp; Monthly Reports</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">Stay updated with powerful stats after every single lesson. Data-driven learning.</p>
            </div>
            {/* Feature 4: Interactive */}
            <div className="bg-white p-8 rounded-xl border border-surface-container hover:shadow-xl transition-all duration-300 group">
              <div className="w-12 h-12 bg-primary-fixed rounded-lg flex items-center justify-center text-royal-purple mb-6 group-hover:scale-110 transition-transform">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="font-headline-md text-headline-md text-charcoal mb-4 font-medium">Interactive Classes</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">Smart e-learning made fun. Creative and engaging lessons that keep students inspired.</p>
            </div>
            {/* Feature 5: Flexible */}
            <div className="bg-white p-8 rounded-xl border border-surface-container hover:shadow-xl transition-all duration-300 group">
              <div className="w-12 h-12 bg-primary-fixed rounded-lg flex items-center justify-center text-royal-purple mb-6 group-hover:scale-110 transition-transform">
                <Calendar className="w-6 h-6" />
              </div>
              <h3 className="font-headline-md text-headline-md text-charcoal mb-4 font-medium">Flexible Timing</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">Tutors available whenever students need help, even late at night.</p>
            </div>
            {/* Feature 6: Guarantee */}
            <div className="bg-primary-container p-8 rounded-xl text-on-primary hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-6">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-headline-md text-headline-md mb-2 font-medium text-white">Money Back Guarantee</h3>
                <p className="font-body-md opacity-90 text-white">We mean what we say. If you're not satisfied, we'll return your money back.</p>
              </div>
              <div className="mt-8 flex items-center gap-2 text-lime-green">
                <CheckCircle className="w-5 h-5 fill-current" />
                <span className="font-label-md">100% Secure Promise</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-royal-purple relative overflow-hidden text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-6 h-full gap-4 rotate-12 scale-150">
            <div className="bg-white/20 h-full w-full rounded-full"></div>
            <div className="bg-white/20 h-full w-full rounded-full"></div>
            <div className="bg-white/20 h-full w-full rounded-full"></div>
          </div>
        </div>
        <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop relative z-10 text-center space-y-8">
          <h2 className="text-display-lg-mobile md:text-display-lg text-white font-medium">
            Ready to see the <span className="text-lime-green font-bold">Math Make Smart</span> difference?
          </h2>
          <p className="font-body-lg text-body-lg text-white/80 max-w-2xl mx-auto">
            Book your free trial today without any obligations or conditions. It's your right to judge our expertise.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <button 
              onClick={() => onNavigate('trial')}
              className="bg-white text-royal-purple px-12 py-5 rounded-full font-headline-md text-headline-md hover:shadow-[0px_8px_30px_rgba(255,255,255,0.3)] transition-all cursor-pointer text-center"
            >
              Book My Free Lesson
            </button>
            <a 
              className="bg-transparent border-2 border-white/50 text-white px-12 py-5 rounded-full font-headline-md text-headline-md hover:bg-white/10 transition-all flex items-center justify-center gap-2" 
              href="tel:+13474914870"
            >
              <Phone className="w-5 h-5" />
              Call for Questions
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}