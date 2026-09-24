'use client';

import { useState } from 'react';
import {
  Mail,
  MessageCircle,
  Phone,
  Clock,
  MapPin,
  ChevronDown,
  Sparkles,
  LifeBuoy,
  Briefcase,
  CreditCard,
  BookOpen,
  ShieldCheck,
} from 'lucide-react';
import { FreeTrialForm } from './FreeTrial';

/*
 * Support runs 9:00 AM to 11:30 PM in each family's OWN local time,
 * so no time-zone conversion is shown or needed for any market.
 *
 * Every number below is also a WhatsApp line.
 */
const COUNTRY_CONTACTS: {
  code: string;
  flag: string;
  country: string;
  phoneDisplay: string;
  phoneHref: string;
  whatsapp: string;
}[] = [
  {
    code: 'US',
    flag: '\u{1F1FA}\u{1F1F8}',
    country: 'United States',
    phoneDisplay: '+1 347 491 4870',
    phoneHref: 'tel:+13474914870',
    whatsapp: 'https://wa.me/+13474914870',
  },
  {
    code: 'CA',
    flag: '\u{1F1E8}\u{1F1E6}',
    country: 'Canada',
    phoneDisplay: '+1 647 492 5264',
    phoneHref: 'tel:+16474925264',
    whatsapp: 'https://wa.me/+16474925264',
  },
  {
    code: 'GB',
    flag: '\u{1F1EC}\u{1F1E7}',
    country: 'United Kingdom',
    phoneDisplay: '+44 7400 018383',
    phoneHref: 'tel:+447400018383',
    whatsapp: 'https://wa.me/+447400018383',
  },
  {
    code: 'IE',
    flag: '\u{1F1EE}\u{1F1EA}',
    country: 'Ireland',
    phoneDisplay: '+353 1 525 6806',
    phoneHref: 'tel:+35315256806',
    whatsapp: 'https://wa.me/+35315256806',
  },
  {
    code: 'AU',
    flag: '\u{1F1E6}\u{1F1FA}',
    country: 'Australia',
    phoneDisplay: '+61 480 890 005',
    phoneHref: 'tel:+61480890005',
    whatsapp: 'https://wa.me/+61480890005',
  },
  {
    code: 'NZ',
    flag: '\u{1F1F3}\u{1F1FF}',
    country: 'New Zealand',
    phoneDisplay: '+64 9 870 3334',
    phoneHref: 'tel:+6498703334',
    whatsapp: 'https://wa.me/+6498703334',
  },
];

const MAP_QUERY = '418 Broadway %237805, Albany, NY 12207, United States';

const SUPPORT = {
  hours: '9:00 AM to 11:30 PM',
  days: 'Monday to Friday',
  timezoneNote: 'in your local time',
  email: 'info@mathmakesmart.com',
  phoneDisplay: '+1 (347) 491-4870',
  phoneHref: 'tel:+13474914870',
  whatsapp: 'https://wa.me/13474914870',
  responseTime: 'within one business day',
};

const OFFICES = [
  {
    label: 'Registered office',
    lines: ['Math Make Smart LLC', '418 Broadway #7805', 'Albany, NY 12207', 'United States'],
  },
];

const ROUTES = [
  {
    icon: Sparkles,
    title: 'New to Math Make Smart',
    text: 'Want to know if tutoring is right for your child, or which subjects and curricula we cover? Use the form, or message us on WhatsApp for a quick answer.',
    action: 'Book a free trial lesson',
  },
  {
    icon: LifeBuoy,
    title: 'Already a member',
    text: 'Need to reschedule, pause a plan, change tutor or ask about a lesson? Email us with your child\u2019s name and we will sort it out.',
    action: 'Email support',
  },
  {
    icon: CreditCard,
    title: 'Billing and refunds',
    text: 'Questions about a payment, a plan change or a refund request. Include the payment date and amount so we can find it quickly.',
    action: 'Email billing',
  },
  {
    icon: Briefcase,
    title: 'Tutor applications',
    text: 'Qualified teachers and graduates who want to tutor with us are welcome to get in touch. Tell us your subjects, curricula and availability.',
    action: 'Email your CV',
  },
];

const FAQS = [
  {
    q: 'What subjects do you offer tutoring in?',
    a: 'Maths, English, science, and the separate sciences of biology, chemistry and physics, from primary school through to final-year exams. Which subjects are available at senior level depends on your country, since curricula and qualifications differ between the UK, Ireland, the US, Canada, Australia and New Zealand.',
  },
  {
    q: 'How are tutors selected and checked?',
    a: 'Every tutor holds a degree in the subject they teach and is assessed on the specific curriculum they will be teaching, not just the subject in general. They also complete the background check required in their country, such as an enhanced DBS check, Garda vetting, a Working with Children Check, police vetting or a vulnerable sector check.',
  },
  {
    q: 'How do I enrol my child?',
    a: 'Start with the free trial lesson. Fill in the form on this page with your child\u2019s year or grade, curriculum and what they are finding difficult, and we will match a tutor and arrange a time. No card details are needed to book it.',
  },
  {
    q: 'How are lessons delivered?',
    a: 'Live and one-to-one by video call, using a shared interactive whiteboard built for mathematical notation. Your child needs a device with a microphone and speaker or headset, a stable internet connection, and a quiet place to work. Lessons are recorded to your account so they can be replayed during revision.',
  },
  {
    q: 'What does tutoring cost?',
    a: 'Prices are shown in your own currency on our pricing page, and depend on the number of lessons per month rather than the subject. There is no registration fee and no lock-in contract, and one plan can be shared between siblings or across subjects.',
  },
  {
    q: 'Can we try before committing?',
    a: 'Yes. The first lesson is free, requires no card details, and is a genuine assessment rather than a sales call. The tutor will tell you honestly where your child stands and what would help, even if that is fewer lessons than you expected.',
  },
  {
    q: 'How do I keep track of my child\u2019s progress?',
    a: 'You receive a written summary after every lesson, plus regular reports showing which topics have been mastered and which still need work, written in the language of your child\u2019s own school reports. You can also watch any recorded lesson yourself.',
  },
  {
    q: 'What if we need to reschedule or cancel?',
    a: 'You can reschedule any lesson free of charge with at least two hours\u2019 notice, and take up to three makeup lessons each month. Plans can be paused or cancelled at any time without a fee. Full details are in our Refund and Cancellation Policy.',
  },
  {
    q: 'Do you tutor in my country?',
    a: 'We work with families in the United States, United Kingdom, Ireland, Canada, Australia and New Zealand. Tutors are matched by market, so your child works with someone who knows their curriculum and the exams they will actually sit.',
  },
  {
    q: 'How quickly will you reply?',
    a: `We aim to respond to emails and WhatsApp messages ${SUPPORT.responseTime}. If your question is urgent, WhatsApp is usually the fastest way to reach us.`,
  },
];

export default function ContactUs() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop py-16 md:py-24">
      {/* Hero + form */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        <div>
          <span className="text-primary font-label-sm text-label-sm uppercase tracking-widest mb-4 block">We are here to help</span>
          <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-charcoal mb-6 font-bold">Contact Us</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed mb-8">
            Whether you are choosing a tutor for the first time or you are already a member with a question about a
            lesson, our team is happy to help. We support families in the US, UK, Ireland, Canada, Australia and New
            Zealand, and we reply {SUPPORT.responseTime}.
          </p>

          {/* Support hours */}
          <div className="flex items-start gap-4 p-5 bg-primary-container/5 border border-primary/15 rounded-xl mb-8">
            <span className="w-10 h-10 rounded-full bg-primary-container/20 text-primary flex items-center justify-center flex-shrink-0">
              <Clock className="w-5 h-5" aria-hidden="true" />
            </span>
            <div>
              <span className="block font-semibold text-charcoal">
                {SUPPORT.hours} {SUPPORT.timezoneNote}, {SUPPORT.days}
              </span>
              <span className="block text-sm text-on-surface-variant mt-1">
                Wherever you are, that means 9:00 AM to 11:30 PM where you are, so there is no time difference to work
                out. Messages sent outside these hours are answered the next working day, and lessons themselves run
                seven days a week.
              </span>
            </div>
          </div>

          <div className="space-y-5">
            <a
              href={`mailto:${SUPPORT.email}`}
              className="flex items-center gap-4 p-5 bg-surface-container-lowest border border-outline-variant/30 rounded-xl hover:border-primary transition-colors"
            >
              <span className="w-12 h-12 rounded-full bg-primary-container/20 text-primary flex items-center justify-center">
                <Mail className="w-5 h-5" aria-hidden="true" />
              </span>
              <span>
                <span className="block text-sm text-on-surface-variant">Email us</span>
                <span className="font-semibold text-charcoal">{SUPPORT.email}</span>
              </span>
            </a>
            <a
              href={SUPPORT.phoneHref}
              className="flex items-center gap-4 p-5 bg-surface-container-lowest border border-outline-variant/30 rounded-xl hover:border-primary transition-colors"
            >
              <span className="w-12 h-12 rounded-full bg-primary-container/20 text-primary flex items-center justify-center">
                <Phone className="w-5 h-5" aria-hidden="true" />
              </span>
              <span>
                <span className="block text-sm text-on-surface-variant">Call or text us</span>
                <span className="font-semibold text-charcoal">{SUPPORT.phoneDisplay}</span>
                <span className="block text-xs text-on-surface-variant mt-0.5">
                  International number. Calling charges may apply from outside the US.
                </span>
              </span>
            </a>
            <a
              href={SUPPORT.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 p-5 bg-surface-container-lowest border border-outline-variant/30 rounded-xl hover:border-primary transition-colors"
            >
              <span className="w-12 h-12 rounded-full bg-primary-container/20 text-primary flex items-center justify-center">
                <MessageCircle className="w-5 h-5" aria-hidden="true" />
              </span>
              <span>
                <span className="block text-sm text-on-surface-variant">Message us on WhatsApp</span>
                <span className="font-semibold text-charcoal">Usually the fastest way to reach us</span>
              </span>
            </a>
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <h2 className="font-headline-lg text-headline-lg text-charcoal font-semibold mb-2">Book a free trial lesson</h2>
            <p className="text-on-surface-variant text-sm">
              The quickest way to get started. Tell us your child&rsquo;s year group and curriculum, and we will match a
              tutor and arrange a time. No card details needed.
            </p>
          </div>
          <FreeTrialForm />
        </div>
      </section>

      {/* Local phone numbers */}
      <section className="mt-20 md:mt-28">
        <div className="text-center mb-12 space-y-3">
          <h2 className="font-headline-lg text-headline-lg text-charcoal font-semibold">Call Us in Your Country</h2>
          <p className="font-body-md text-on-surface-variant max-w-2xl mx-auto">
            Use the number for where you live to avoid international call charges. All lines are answered by the same
            team, {SUPPORT.hours} {SUPPORT.timezoneNote}.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {COUNTRY_CONTACTS.map((c) => (
            <div
              key={c.code}
              className="p-6 bg-surface-container-lowest border border-outline-variant/30 rounded-xl"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl leading-none" aria-hidden="true">
                  {c.flag}
                </span>
                <span className="font-semibold text-charcoal">{c.country}</span>
              </div>
              <a
                href={c.phoneHref}
                className="flex items-center gap-2 text-charcoal hover:text-primary transition-colors font-body-md mb-2"
              >
                <Phone className="w-4 h-4 text-primary flex-shrink-0" aria-hidden="true" />
                {c.phoneDisplay}
              </a>
              <a
                href={c.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors text-sm"
              >
                <MessageCircle className="w-4 h-4 text-lime-green flex-shrink-0" aria-hidden="true" />
                Message on WhatsApp
              </a>
            </div>
          ))}
        </div>
        <p className="text-center text-sm text-on-surface-variant mt-8">
          Not in one of these countries, or prefer to message? WhatsApp and email reach us from anywhere at no cost.
        </p>
      </section>

      {/* Who to contact */}
      <section className="mt-20 md:mt-28">
        <div className="text-center mb-12 space-y-3">
          <h2 className="font-headline-lg text-headline-lg text-charcoal font-semibold">What Do You Need Help With?</h2>
          <p className="font-body-md text-on-surface-variant max-w-2xl mx-auto">
            Telling us which of these applies in your first message saves a round of emails.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {ROUTES.map((r) => {
            const Icon = r.icon;
            return (
              <div key={r.title} className="p-8 bg-surface-container-lowest border border-outline-variant/30 rounded-xl">
                <div className="w-12 h-12 rounded-xl bg-primary-container/20 text-primary flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6" aria-hidden="true" />
                </div>
                <h3 className="font-headline-md text-charcoal font-bold mb-2">{r.title}</h3>
                <p className="font-body-md text-on-surface-variant mb-4">{r.text}</p>
                <a
                  href={`mailto:${SUPPORT.email}?subject=${encodeURIComponent(r.title)}`}
                  className="text-primary font-semibold text-sm underline underline-offset-4"
                >
                  {r.action}
                </a>
              </div>
            );
          })}
        </div>
      </section>

      {/* FAQs */}
      <section className="mt-20 md:mt-28">
        <div className="text-center mb-12 space-y-3">
          <h2 className="font-headline-lg text-headline-lg text-charcoal font-semibold">Frequently Asked Questions</h2>
          <p className="font-body-md text-on-surface-variant max-w-2xl mx-auto">
            Quick answers to the questions we are asked most. If yours is not here, message us and we will answer it.
          </p>
        </div>
        <div className="max-w-3xl mx-auto space-y-4">
          {FAQS.map((faq, i) => (
            <div key={i} className="border border-outline-variant/30 rounded-2xl overflow-hidden">
              <button
                className="w-full flex items-center justify-between gap-4 p-6 text-left hover:bg-soft-gray transition-colors font-headline-md text-[18px] font-bold cursor-pointer"
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                aria-expanded={openFaq === i}
              >
                <span>{faq.q}</span>
                <ChevronDown
                  className={`w-5 h-5 shrink-0 transition-transform duration-300 ${openFaq === i ? 'rotate-180 text-primary' : ''}`}
                  aria-hidden="true"
                />
              </button>
              {openFaq === i && (
                <div className="bg-soft-gray p-6 text-on-surface-variant font-body-md border-t border-outline-variant/30">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Office + useful links */}
      <section className="mt-20 md:mt-28 grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="p-8 bg-surface-container-lowest border border-outline-variant/30 rounded-xl">
          <div className="w-12 h-12 rounded-xl bg-primary-container/20 text-primary flex items-center justify-center mb-5">
            <MapPin className="w-6 h-6" aria-hidden="true" />
          </div>
          <h2 className="font-headline-md text-charcoal font-bold mb-4">Our Address</h2>
          {OFFICES.map((o) => (
            <div key={o.label} className="mb-4 last:mb-0">
              <span className="block text-xs uppercase tracking-wide text-on-surface-variant font-semibold mb-1">{o.label}</span>
              <address className="not-italic font-body-md text-charcoal leading-relaxed">
                {o.lines.map((l) => (
                  <span key={l} className="block">
                    {l}
                  </span>
                ))}
              </address>
            </div>
          ))}
          <p className="text-sm text-on-surface-variant mt-4">
            All tutoring is delivered online, so there is no campus to visit. Please contact us by email, phone or
            WhatsApp rather than calling in.
          </p>
          <div className="mt-6 rounded-xl overflow-hidden border border-outline-variant/30">
            <iframe
              title="Math Make Smart LLC office location on Google Maps"
              src={`https://www.google.com/maps?q=${MAP_QUERY}&output=embed`}
              width="100%"
              height="260"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${MAP_QUERY}`}
            target="_blank"
            rel="noreferrer"
            className="inline-block mt-3 text-primary font-semibold text-sm underline underline-offset-4"
          >
            Open in Google Maps
          </a>
        </div>

        <div className="p-8 bg-surface-container-lowest border border-outline-variant/30 rounded-xl">
          <div className="w-12 h-12 rounded-xl bg-primary-container/20 text-primary flex items-center justify-center mb-5">
            <BookOpen className="w-6 h-6" aria-hidden="true" />
          </div>
          <h2 className="font-headline-md text-charcoal font-bold mb-4">You Might Be Looking For</h2>
          <ul className="space-y-3">
            {[
              ['Pricing for your country', '/tutoring-pricing/'],
              ['Book a free trial lesson', '/free-trial/'],
              ['Student and parent portal login', '/login/'],
              ['Refund and cancellation policy', '/refund-policy/'],
              ['Privacy policy', '/privacy-policy/'],
            ].map(([label, href]) => (
              <li key={label}>
                <a href={href} className="flex items-center gap-2 text-charcoal hover:text-primary transition-colors font-body-md">
                  <span className="text-primary">&rarr;</span> {label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-6 pt-6 border-t border-outline-variant/30 flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-lime-green flex-shrink-0 mt-0.5" aria-hidden="true" />
            <p className="text-sm text-on-surface-variant">
              Safeguarding concern about a lesson or a tutor? Email us and mark it urgent. We treat these first.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}