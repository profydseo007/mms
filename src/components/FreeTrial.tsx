'use client';

import { useEffect, useRef, useState } from 'react';
import { ActivePage } from '@/lib/types';
import { COUNTRY_FORM_IDS, getClientCountryDetection } from '@/lib/country';
import {
  Star,
  Award,
  FileText,
  CheckCircle,
  GraduationCap,
  Calendar,
  Phone,
  Sparkles,
  ChevronDown,
  ClipboardList,
  UserCheck,
  CalendarCheck,
} from 'lucide-react';
import TrustpilotWidget from './TrustpilotWidget';

/*
 * ────────────────────────────────────────────────────────────
 * CONFIRM BEFORE PUBLISHING
 * These figures appear publicly and must match the pricing,
 * home and about pages. Conflicting numbers across pages cost
 * more trust than a smaller number does.
 * ────────────────────────────────────────────────────────────
 */
const SOCIAL_PROOF = 'Trusted by 10,000+ families worldwide';

const COUNTRY_LABELS: Record<string, string> = {
  US: 'United States',
  GB: 'United Kingdom',
  UK: 'United Kingdom',
  CA: 'Canada',
  AU: 'Australia',
  NZ: 'New Zealand',
  IE: 'Ireland',
};

function getUsableFormId(region: string): string {
  const candidate = COUNTRY_FORM_IDS[region];
  return candidate && !candidate.startsWith('YOUR_') ? candidate : COUNTRY_FORM_IDS.US;
}

/** Only offer regions that have a real (non-placeholder) form configured. */
function getSelectableRegions(): { code: string; label: string }[] {
  const seen = new Set<string>();
  return Object.keys(COUNTRY_FORM_IDS)
    .filter((code) => {
      const id = COUNTRY_FORM_IDS[code];
      if (!id || id.startsWith('YOUR_')) return false;
      const label = COUNTRY_LABELS[code];
      if (!label || seen.has(label)) return false;
      seen.add(label);
      return true;
    })
    .map((code) => ({ code, label: COUNTRY_LABELS[code] }));
}

interface FreeTrialProps {
  onNavigate: (page: ActivePage, subjectTitle?: string) => void;
}

interface FreeTrialFormProps {
  className?: string;
  /** Show the "wrong country?" selector. Off for embeds on other pages. */
  showRegionPicker?: boolean;
}

export function FreeTrialForm({ className = '', showRegionPicker = true }: FreeTrialFormProps) {
  const [selectedRegion, setSelectedRegion] = useState('US');
  const [formId, setFormId] = useState(COUNTRY_FORM_IDS.US);
  const regions = getSelectableRegions();

  useEffect(() => {
    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 3000);

    async function detectRegion() {
      try {
        const result = await getClientCountryDetection(controller.signal);
        const countryCode = result.countryCode?.toUpperCase();
        if (!countryCode) return;

        const detectedRegion =
          getUsableFormId(countryCode) !== COUNTRY_FORM_IDS.US || countryCode === 'US' ? countryCode : 'US';
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

  const handleRegionChange = (code: string) => {
    setSelectedRegion(code);
    setFormId(getUsableFormId(code));
  };

  return (
    <div
      className={`bg-white p-6 md:p-8 rounded-[28px] shadow-[0_18px_45px_rgba(15,23,42,0.08)] border border-slate-200 w-full max-w-[520px]
         mx-auto lg:ml-auto lg:mr-0 ${className}`}
    >
    <div className="mb-5">
        <h2 className="font-headline-md text-charcoal font-bold mb-1">Book your free lesson</h2>
        <p className="text-sm text-on-surface-variant">
          Takes about a minute. No card details needed.
        </p>
    </div>

      <iframe
        key={formId}
        id="ghl-dynamic-form"
        src={`https://api.leadconnectorhq.com/widget/form/${formId}?notrack=true`}
        style={{ width: '100%', minHeight: '700px', border: 'none', }}
        data-layout="{'id':'INLINE'}"
        data-form-name="Free Trial"
        data-height="auto"
        data-layout-iframe-id="ghl-dynamic-form"
        data-form-id={formId}
        title="Free trial lesson booking form"
        loading="lazy"
      />

      
    </div>
  );
}

const STEPS = [
  {
    icon: ClipboardList,
    title: 'You tell us the basics',
    text: 'Your child\u2019s year or grade, their curriculum, and what they are finding difficult. One minute, no card details.',
  },
  {
    icon: UserCheck,
    title: 'We match a specialist tutor',
    text: 'Not a generalist. Someone who knows your child\u2019s exact curriculum, exam board or state authority.',
  },
  {
    icon: CalendarCheck,
    title: 'You book a time that suits',
    text: 'We contact you to arrange the lesson around school and family commitments, in your time zone.',
  },
  {
    icon: GraduationCap,
    title: 'The lesson is a real assessment',
    text: 'The tutor finds the actual gap and tells you honestly what would help, even if that is fewer lessons than you expected.',
  },
];

const FAQS = [
  {
    q: 'Is the trial lesson really free?',
    a: 'Yes. No card details are required to book it, and you are not charged whether or not you go on to enrol. It is a full lesson with a qualified tutor, not a sales demonstration.',
  },
  {
    q: 'What happens after I submit the form?',
    a: 'A member of our team contacts you to confirm your child\u2019s curriculum and find a lesson time that works in your time zone. Most families are booked in within a day or two.',
  },
  {
    q: 'What does my child need for the lesson?',
    a: 'A device with a working microphone and speaker or headset, a stable internet connection, and a quiet place to work. A pen and paper helps too. Nothing needs to be installed in advance.',
  },
  {
    q: 'Will the tutor know my child\u2019s curriculum?',
    a: 'That is the point of the questions on the form. We match tutors by curriculum, so a student following the Australian Curriculum works with a tutor who knows it, and an Irish student gets someone who knows the Leaving Certificate specification.',
  },
  {
    q: 'What if the tutor is not the right fit?',
    a: 'Tell us and we will match your child with a different tutor at no cost. Personality fit matters as much as subject knowledge, and rematching is routine rather than awkward.',
  },
  {
    q: 'Do I have to sign up for anything afterwards?',
    a: 'No. There is no obligation and no contract. If you decide not to continue, that is the end of it and nobody will chase you.',
  },
];

export default function FreeTrial({ onNavigate }: FreeTrialProps) {
  const formRef = useRef<HTMLDivElement>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative flex items-center pt-12 pb-20 md:pb-24 overflow-hidden bg-white">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-primary-fixed opacity-10 rounded-l-full transform translate-x-1/4"></div>
        </div>
        <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop grid lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
          <div className="space-y-6 md:space-y-8 order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 bg-secondary-container px-4 py-2 rounded-full text-on-secondary-container shadow-sm">
              <Star className="w-4 h-4 fill-current text-secondary" aria-hidden="true" />
              <span className="font-label-sm text-label-sm">{SOCIAL_PROOF}</span>
            </div>
            <h1 className="font-display text-display-lg-mobile md:text-display-lg text-charcoal leading-tight font-bold">
              Book a <span className="text-royal-purple font-extrabold">Free Trial Lesson</span>
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-lg">
              One-to-one online tutoring in maths, English and science, for students from primary school to final-year
              exams. Your first lesson is free and there is nothing to pay up front.
            </p>
            <ul className="space-y-3">
              {[
                'No credit card required',
                'A real assessment, not a sales call',
                'Tutor matched to your child\u2019s curriculum',
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 font-body-md text-on-surface-variant">
                  <CheckCircle className="w-5 h-5 text-lime-green flex-shrink-0" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-4">
              <TrustpilotWidget />
            </div>
          </div>

          {/* GHL Free Trial Form (country-aware) */}
          <div ref={formRef} id="trial-form" className="order-1 lg:order-2 scroll-mt-24">
            <FreeTrialForm />
          </div>
        </div>
      </section>

      {/* What Happens Next */}
      <section className="py-20 md:py-24 bg-soft-gray border-y border-surface-container">
        <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="text-center mb-14 space-y-4">
            <h2 className="font-headline-lg text-headline-lg text-charcoal font-semibold">What Happens After You Book</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
              No surprises. Here is exactly what to expect between filling in the form and your child&rsquo;s first lesson.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {STEPS.map((s, i) => {
              const Icon = s.icon;
              return (
                <div key={s.title} className="bg-white rounded-xl p-8 border border-surface-container">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-9 h-9 rounded-full bg-royal-purple text-white flex items-center justify-center font-bold text-sm">
                      {i + 1}
                    </div>
                    <Icon className="w-6 h-6 text-royal-purple" aria-hidden="true" />
                  </div>
                  <h3 className="font-headline-md text-headline-md text-charcoal mb-2 font-medium">{s.title}</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">{s.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Value Prop */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="text-center mb-14 space-y-4">
            <h2 className="font-headline-lg text-headline-lg text-charcoal font-semibold">Quality Tutoring, Fairly Priced</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
              Clear pricing in your own currency, with no registration fee and no lock-in contract.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-soft-gray p-10 rounded-xl shadow-ambient border-t-4 border-royal-purple flex flex-col items-center justify-center text-center">
              <span className="font-label-md text-label-md text-royal-purple uppercase tracking-widest mb-4">Lessons From</span>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl md:text-5xl font-bold text-charcoal">$15</span>
                <span className="text-on-surface-variant font-label-md">/lesson</span>
              </div>
              <p className="mt-6 text-on-surface-variant font-body-md">
                Prices shown in your local currency on our pricing page. Monthly plans bring the cost per lesson down
                further, and can be shared between siblings.
              </p>
              <button
                onClick={() => onNavigate('pricing')}
                className="mt-6 text-royal-purple font-semibold text-sm underline underline-offset-4 cursor-pointer"
              >
                See pricing for your country
              </button>
            </div>
            <div className="lg:col-span-2 relative h-[320px] md:h-[400px] rounded-xl overflow-hidden shadow-ambient border border-surface-container">
              <img
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB8DbcxxLYd4Mat9rLzghFo8KU8Q0JJkS7uaLG6aP0tdur4PYinJQvhY-P6D5yYtn9GhMYEFR3FXPbwNenq_5Dk5RdMytKt8XpazTXcUtU52IUX69XPdtWP3Sb53ZJj6ExedaWGK2UhRwVXhuJaB6yIHDrzyLYK3FXgvEnslJBEEfMIxO6_3fXcx53aDhASA8TdZa-SqWrC4hNbjKwaR-1y1ZUy9rS4uW5MdAWBaMghavbGCLZDVSC5TxF_7jXYatIIvyrxtLO_pAS70Hc"
                alt="A student in a one-to-one online tutoring session"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 to-transparent flex items-end p-8">
                <p className="text-white font-headline-md max-w-md font-medium">
                  Live, one-to-one lessons with a tutor who knows your child&rsquo;s curriculum.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 md:py-24 bg-soft-gray border-y border-surface-container">
        <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="flex flex-col md:flex-row justify-between items-end mb-14 gap-6">
            <div className="space-y-4">
              <span className="text-royal-purple font-label-sm text-label-sm uppercase tracking-widest font-semibold">What&rsquo;s Included</span>
              <h2 className="font-headline-lg text-headline-lg text-charcoal font-semibold">Every Plan Comes With This</h2>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant md:max-w-md font-sans">
              The same support whichever subject or country, because good tutoring needs more than an hour a week.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-8 rounded-xl border border-surface-container hover:shadow-xl transition-all duration-300 group">
              <div className="w-12 h-12 bg-primary-fixed rounded-lg flex items-center justify-center text-royal-purple mb-6 group-hover:scale-110 transition-transform">
                <FileText className="w-6 h-6" aria-hidden="true" />
              </div>
              <h3 className="font-headline-md text-headline-md text-charcoal mb-4 font-medium">Worksheets &amp; Practice</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Practice questions, worked examples and revision material matched to your child&rsquo;s curriculum, at no
                extra charge.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl border border-surface-container hover:shadow-xl transition-all duration-300 group">
              <div className="w-12 h-12 bg-primary-fixed rounded-lg flex items-center justify-center text-royal-purple mb-6 group-hover:scale-110 transition-transform">
                <GraduationCap className="w-6 h-6" aria-hidden="true" />
              </div>
              <h3 className="font-headline-md text-headline-md text-charcoal mb-4 font-medium">Recorded Lessons</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Every session is saved to your account, so a method taught in October can be replayed before a test in
                June.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl border border-surface-container hover:shadow-xl transition-all duration-300 group">
              <div className="w-12 h-12 bg-primary-fixed rounded-lg flex items-center justify-center text-royal-purple mb-6 group-hover:scale-110 transition-transform">
                <Star className="w-6 h-6" aria-hidden="true" />
              </div>
              <h3 className="font-headline-md text-headline-md text-charcoal mb-4 font-medium">Progress Reports</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                A written summary after every lesson, plus regular reports showing what has been mastered and what still
                needs work.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl border border-surface-container hover:shadow-xl transition-all duration-300 group">
              <div className="w-12 h-12 bg-primary-fixed rounded-lg flex items-center justify-center text-royal-purple mb-6 group-hover:scale-110 transition-transform">
                <Sparkles className="w-6 h-6" aria-hidden="true" />
              </div>
              <h3 className="font-headline-md text-headline-md text-charcoal mb-4 font-medium">Interactive Lessons</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                A shared whiteboard built for mathematical notation, so students work through problems with the tutor
                rather than watching.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl border border-surface-container hover:shadow-xl transition-all duration-300 group">
              <div className="w-12 h-12 bg-primary-fixed rounded-lg flex items-center justify-center text-royal-purple mb-6 group-hover:scale-110 transition-transform">
                <Calendar className="w-6 h-6" aria-hidden="true" />
              </div>
              <h3 className="font-headline-md text-headline-md text-charcoal mb-4 font-medium">Flexible Scheduling</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Evening and weekend slots across every time zone we serve, and you can reschedule with two hours&rsquo;
                notice at no cost.
              </p>
            </div>
            <div className="bg-primary-container p-8 rounded-xl text-on-primary hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-6">
                  <Award className="w-6 h-6 text-white" aria-hidden="true" />
                </div>
                <h3 className="font-headline-md text-headline-md mb-2 font-medium text-white">No Contract, No Risk</h3>
                <p className="font-body-md opacity-90 text-white">
                  Cancel within your cancellation window for a full refund, and change or pause your plan at any time
                  without a fee.
                </p>
              </div>
              <button
                onClick={() => onNavigate('refund')}
                className="mt-8 flex items-center gap-2 text-lime-green font-label-md cursor-pointer hover:underline underline-offset-4 text-left"
              >
                <CheckCircle className="w-5 h-5 fill-current" aria-hidden="true" />
                <span>Read our refund policy</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="text-center mb-14 space-y-4">
            <h2 className="font-headline-lg text-headline-lg text-charcoal font-semibold">Before You Book</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
              The questions parents ask us most often about the free trial.
            </p>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {FAQS.map((faq, i) => (
              <div key={i} className="border border-surface-container rounded-2xl overflow-hidden">
                <button
                  className="w-full flex items-center justify-between gap-4 p-6 text-left hover:bg-soft-gray transition-colors font-headline-md text-[18px] font-bold cursor-pointer"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  aria-expanded={openFaq === i}
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 shrink-0 transition-transform duration-300 ${openFaq === i ? 'rotate-180 text-royal-purple' : ''}`}
                    aria-hidden="true"
                  />
                </button>
                {openFaq === i && (
                  <div className="bg-soft-gray p-6 text-on-surface-variant font-body-md border-t border-surface-container">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 md:py-24 bg-royal-purple relative overflow-hidden text-white">
        <div className="absolute inset-0 opacity-10" aria-hidden="true">
          <div className="grid grid-cols-6 h-full gap-4 rotate-12 scale-150">
            <div className="bg-white/20 h-full w-full rounded-full"></div>
            <div className="bg-white/20 h-full w-full rounded-full"></div>
            <div className="bg-white/20 h-full w-full rounded-full"></div>
          </div>
        </div>
        <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop relative z-10 text-center space-y-8">
          <h2 className="text-display-lg-mobile md:text-display-lg text-white font-medium">
            Find out where your child <span className="text-lime-green font-bold">actually stands</span>
          </h2>
          <p className="font-body-lg text-body-lg text-white/80 max-w-2xl mx-auto">
            The first lesson is free, and we will tell you honestly what would help. No obligation, no card details,
            no follow-up sales calls.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <button
              onClick={scrollToForm}
              className="bg-white text-royal-purple px-12 py-5 rounded-full font-headline-md text-headline-md hover:shadow-[0px_8px_30px_rgba(255,255,255,0.3)] transition-all cursor-pointer text-center"
            >
              Book My Free Lesson
            </button>
            <a
              className="bg-transparent border-2 border-white/50 text-white px-12 py-5 rounded-full font-headline-md text-headline-md hover:bg-white/10 transition-all flex items-center justify-center gap-2"
              href="tel:+13474914870"
            >
              <Phone className="w-5 h-5" aria-hidden="true" />
              Call Us Instead
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}