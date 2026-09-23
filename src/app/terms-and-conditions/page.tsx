'use client';

import React from 'react';
import {
  FileText,
  Users,
  UserCheck,
  GraduationCap,
  CreditCard,
  RotateCcw,
  CalendarClock,
  ShieldCheck,
  Video,
  Copyright,
  Ban,
  Scale,
  CloudLightning,
  Globe,
  Gavel,
  RefreshCw,
  CheckCircle,
  XCircle,
  Clock,
  Mail,
  Phone,
  MessageCircle,
  MapPin,
} from 'lucide-react';

const LAST_UPDATED = 'September 22, 2026';

const SECTIONS = [
  { id: 'about', label: 'About These Terms' },
  { id: 'definitions', label: 'Key Words Explained' },
  { id: 'account', label: 'Enrolment & Your Account' },
  { id: 'lessons', label: 'Lessons & Tutors' },
  { id: 'fees', label: 'Fees & Payment' },
  { id: 'cancellation', label: 'Cancelling & Refunds' },
  { id: 'rescheduling', label: 'Rescheduling Lessons' },
  { id: 'safeguarding', label: 'Safeguarding & Conduct' },
  { id: 'recordings', label: 'Recordings & Privacy' },
  { id: 'ip', label: 'Learning Materials' },
  { id: 'ending', label: 'Suspending or Ending Service' },
  { id: 'liability', label: 'Our Responsibility to You' },
  { id: 'events', label: 'Events Beyond Our Control' },
  { id: 'country-rights', label: 'Your Rights by Country' },
  { id: 'law', label: 'Governing Law & Disputes' },
  { id: 'changes', label: 'Changes to These Terms' },
  { id: 'contact', label: 'Contact Us' },
];

const DEFINITIONS = [
  { term: 'We, us, our', meaning: 'Math Make Smart LLC, the company that runs this website and our tutoring services.' },
  { term: 'You, your', meaning: 'The parent, guardian or adult who creates the account and agrees to these terms.' },
  { term: 'Student', meaning: 'The person receiving tutoring, who may be your child or, for adult learners, you.' },
  { term: 'Tutor', meaning: 'The teacher we assign to deliver lessons to the student.' },
  { term: 'Plan', meaning: 'The pay-as-you-go lessons or monthly membership you choose.' },
  { term: 'Services', meaning: 'Our online lessons, learning materials, progress reports and related support.' },
];

const COUNTRY_RIGHTS = [
  {
    flag: '\u{1F1FA}\u{1F1F8}',
    country: 'United States',
    text: 'Your state consumer protection laws continue to apply. Nothing in these terms removes rights that your state says cannot be waived.',
  },
  {
    flag: '\u{1F1EC}\u{1F1E7}',
    country: 'United Kingdom',
    text: 'The Consumer Rights Act 2015 and Consumer Contracts Regulations 2013 apply, including your 14-day right to cancel and the requirement that services are delivered with reasonable care and skill.',
  },
  {
    flag: '\u{1F1EE}\u{1F1EA}',
    country: 'Ireland',
    text: 'The Consumer Rights Act 2022 and EU consumer law apply, including your 14-day right to cancel and your right to services provided with reasonable care and skill.',
  },
  {
    flag: '\u{1F1E8}\u{1F1E6}',
    country: 'Canada',
    text: 'Your provincial consumer protection law applies, including any rules on contracts made online. Quebec residents keep the protections of the Consumer Protection Act.',
  },
  {
    flag: '\u{1F1E6}\u{1F1FA}',
    country: 'Australia',
    text: 'The Australian Consumer Law applies. Its consumer guarantees cannot be excluded, restricted or modified by these terms.',
  },
  {
    flag: '\u{1F1F3}\u{1F1FF}',
    country: 'New Zealand',
    text: 'The Consumer Guarantees Act 1993 and Fair Trading Act 1986 apply, and their guarantees cannot be contracted out of for personal use.',
  },
];

const CARD =
  'bg-surface-container-lowest rounded-xl p-8 md:p-12 shadow-ambient border border-outline-variant/30 scroll-mt-24';

function SectionHeader({ icon: Icon, title }: { icon: React.ElementType; title: string }) {
  return (
    <div className="flex items-center gap-4 mb-6">
      <div className="w-12 h-12 bg-primary-container/20 rounded-full flex items-center justify-center text-primary flex-shrink-0">
        <Icon className="w-6 h-6" />
      </div>
      <h2 className="font-headline-lg text-headline-lg text-charcoal font-semibold">{title}</h2>
    </div>
  );
}

function Bullet({ good = true, children }: { good?: boolean; children: React.ReactNode }) {
  const Icon = good ? CheckCircle : XCircle;
  return (
    <li className="flex items-start gap-3">
      <Icon className={`w-5 h-5 mt-1 flex-shrink-0 ${good ? 'text-lime-green' : 'text-error'}`} />
      <span className="font-sans text-on-surface-variant">{children}</span>
    </li>
  );
}

function Para({ children, last = false }: { children: React.ReactNode; last?: boolean }) {
  return <p className={`text-on-surface-variant font-sans leading-relaxed ${last ? '' : 'mb-6'}`}>{children}</p>;
}

export default function TermsConditions() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop py-16 md:py-24">
      {/* Hero Section */}
      <div className="mb-16 text-center max-w-3xl mx-auto">
        <span className="text-primary font-label-sm text-label-sm uppercase tracking-widest mb-4 block">Our Agreement With You</span>
        <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-charcoal mb-6 font-bold">Terms &amp; Conditions</h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant font-sans">
          These terms explain how Math Make Smart LLC&rsquo;s online tutoring works for families in the United States,
          United Kingdom, Ireland, Canada, Australia and New Zealand. We have written them in plain language so you
          know exactly what to expect from us, and what we ask of you.
        </p>
        <div className="mt-8 flex justify-center items-center gap-4 text-on-surface-variant">
          <span className="flex items-center gap-2 font-label-md text-label-md">
            <Clock className="w-5 h-5 text-primary" />
            Last Updated: {LAST_UPDATED}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
        {/* Sticky Sidebar Navigation */}
        <aside className="lg:col-span-3 sticky top-24 hidden lg:block">
          <nav className="space-y-1 bg-white p-4 rounded-xl border border-surface-container shadow-sm max-h-[calc(100vh-8rem)] overflow-y-auto">
            {SECTIONS.map((s) => (
              <button
                key={s.id}
                onClick={() => scrollToSection(s.id)}
                className="block w-full text-left py-2.5 px-4 rounded-lg text-on-surface-variant hover:bg-soft-gray hover:text-primary transition-all font-medium text-sm cursor-pointer"
              >
                {s.label}
              </button>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <div className="lg:col-span-9 space-y-12">
          {/* About */}
          <section className={CARD} id="about">
            <SectionHeader icon={FileText} title="About These Terms" />
            <Para>
              These terms form the agreement between you and <strong>Math Make Smart LLC</strong>, 418 Broadway #7805,
              Albany, NY 12207, United States. They apply whenever you book a free trial, buy lessons or use our website.
            </Para>
            <Para>
              Because most of our students are under 18, <strong>a parent or legal guardian must accept these terms</strong>
              {' '}and manage the account on the student&rsquo;s behalf. Adult learners can accept them for themselves.
            </Para>
            <Para last>
              These terms work together with our <strong>Privacy Policy</strong> and our{' '}
              <strong>Refund &amp; Cancellation Policy</strong>. Please read all three. Nothing in these terms affects the
              legal rights you have as a consumer in your country.
            </Para>
          </section>

          {/* Definitions */}
          <section className={CARD} id="definitions">
            <SectionHeader icon={Users} title="Key Words Explained" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {DEFINITIONS.map((d) => (
                <div key={d.term} className="p-6 bg-soft-gray rounded-lg">
                  <h4 className="font-bold text-primary mb-2">{d.term}</h4>
                  <p className="text-on-surface-variant font-sans text-sm">{d.meaning}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Account */}
          <section className={CARD} id="account">
            <SectionHeader icon={UserCheck} title="Enrolment &amp; Your Account" />
            <Para>
              Before lessons begin, we will talk with you about the student&rsquo;s year or grade, curriculum and goals so
              we can recommend the right plan and match the right tutor.
            </Para>
            <ul className="space-y-4">
              <Bullet>Please give us accurate information and let us know if anything changes.</Bullet>
              <Bullet>Keep your login details private and do not share them with anyone else.</Bullet>
              <Bullet>You are responsible for activity on your account, so tell us straight away if you think it has been used without permission.</Bullet>
            </ul>
          </section>

          {/* Lessons */}
          <section className={CARD} id="lessons">
            <SectionHeader icon={GraduationCap} title="Lessons &amp; Tutors" />
            <Para>
              Lessons are live, one-to-one and delivered online, usually lasting 50 minutes. Your student needs a
              device, a stable internet connection, and a quiet space with a working microphone and speaker or headset.
            </Para>
            <ul className="space-y-4">
              <Bullet>We will match your student with a qualified tutor suited to their curriculum and level.</Bullet>
              <Bullet>If the tutor is not the right fit, ask and we will arrange a new one at no extra cost.</Bullet>
              <Bullet>We may occasionally change a tutor for reasons such as availability, and we will tell you in advance where we can.</Bullet>
              <Bullet>We teach with reasonable care and skill, but we cannot guarantee specific grades or exam results, which also depend on the student&rsquo;s own effort.</Bullet>
            </ul>
          </section>

          {/* Fees */}
          <section className={CARD} id="fees">
            <SectionHeader icon={CreditCard} title="Fees &amp; Payment" />
            <Para>
              Current prices are shown on our pricing page for your country and are charged in your local currency.
            </Para>
            <ul className="space-y-4">
              <Bullet><strong>Pay as you go:</strong> individual lessons are paid for before they take place.</Bullet>
              <Bullet><strong>Monthly plans:</strong> paid in advance at the start of each billing month, with no contract and no registration fee.</Bullet>
              <Bullet><strong>Shared plans:</strong> lessons in one plan can be used across subjects and shared between siblings.</Bullet>
              <Bullet><strong>Failed payments:</strong> if a payment does not go through, we will let you know and may pause lessons until it is sorted out.</Bullet>
              <Bullet><strong>Price changes:</strong> we will give you notice before any price change affects your plan.</Bullet>
            </ul>
          </section>

          {/* Cancellation */}
          <section className={CARD} id="cancellation">
            <SectionHeader icon={RotateCcw} title="Cancelling &amp; Refunds" />
            <Para>
              You can cancel at any time. Full details are in our Refund &amp; Cancellation Policy, but in short:
            </Para>
            <ul className="space-y-4">
              <Bullet><strong>UK and Ireland:</strong> you have 14 days from sign-up to cancel for a refund, less any lessons already delivered at your request.</Bullet>
              <Bullet><strong>US, Canada, Australia and New Zealand:</strong> you have 7 days from sign-up to cancel for a refund, less any lessons already taken.</Bullet>
              <Bullet><strong>Monthly plans:</strong> cancelling stops your next payment, and you can use the rest of the month you have already paid for.</Bullet>
              <Bullet><strong>Pausing:</strong> you can pause a plan with notice, and your tutor pairing is kept for when you return.</Bullet>
            </ul>
          </section>

          {/* Rescheduling */}
          <section className={CARD} id="rescheduling">
            <SectionHeader icon={CalendarClock} title="Rescheduling Lessons" />
            <ul className="space-y-4">
              <Bullet>Reschedule any lesson free of charge with at least 2 hours&rsquo; notice.</Bullet>
              <Bullet>Up to 3 makeup lessons are available each month, subject to tutor availability.</Bullet>
              <Bullet good={false}>Lessons cancelled with less than 2 hours&rsquo; notice, or missed without notice, count as used.</Bullet>
              <Bullet>If we or a tutor cancel, you will always receive a replacement lesson or a refund for it.</Bullet>
            </ul>
          </section>

          {/* Safeguarding */}
          <section className={CARD} id="safeguarding">
            <SectionHeader icon={ShieldCheck} title="Safeguarding &amp; Conduct" />
            <Para>
              Keeping students safe comes first. Every tutor completes the background check that applies in their
              country before working with students, such as an enhanced DBS check, Garda vetting, a Working with
              Children Check or police vetting.
            </Para>
            <ul className="space-y-4 mb-6">
              <Bullet>All contact between tutors and students happens through our platform.</Bullet>
              <Bullet good={false}>Tutors and students must not exchange personal phone numbers, email addresses, social media or home addresses.</Bullet>
              <Bullet good={false}>Arranging private lessons with a tutor outside Math Make Smart is not permitted.</Bullet>
            </ul>
            <div className="bg-primary-container/5 border-l-4 border-primary p-6 rounded-r-lg">
              <p className="font-body-md text-on-surface font-sans">
                We expect everyone to be respectful. Abusive, threatening or inappropriate behaviour by a student,
                parent or tutor is never acceptable. If you have any safeguarding concern, contact us straight away.
              </p>
            </div>
          </section>

          {/* Recordings */}
          <section className={CARD} id="recordings">
            <SectionHeader icon={Video} title="Recordings &amp; Privacy" />
            <Para last>
              Lessons are recorded so students can revise from them and so we can check quality and safety. Recordings
              are saved to your account, are never made public and are not used in advertising. How we collect, use and
              protect personal information, including recordings, is explained in our Privacy Policy.
            </Para>
          </section>

          {/* IP */}
          <section className={CARD} id="ip">
            <SectionHeader icon={Copyright} title="Learning Materials" />
            <Para>
              Worksheets, notes, practice papers and other materials we provide are owned by us or our licensors.
            </Para>
            <ul className="space-y-4">
              <Bullet>You and your student may use them for personal study.</Bullet>
              <Bullet good={false}>Please do not copy, share, sell or publish them without our permission.</Bullet>
              <Bullet>Work your student creates in lessons remains theirs.</Bullet>
            </ul>
          </section>

          {/* Ending */}
          <section className={CARD} id="ending">
            <SectionHeader icon={Ban} title="Suspending or Ending Service" />
            <Para>We may suspend or end our services if:</Para>
            <ul className="space-y-4 mb-6">
              <Bullet good={false}>fees remain unpaid after we have reminded you;</Bullet>
              <Bullet good={false}>there is a serious or repeated breach of these terms;</Bullet>
              <Bullet good={false}>anyone behaves abusively or threatens staff, tutors or students; or</Bullet>
              <Bullet good={false}>we need to act to protect a student&rsquo;s safety.</Bullet>
            </ul>
            <Para last>
              Where it is reasonable to do so, we will tell you first and give you a chance to put things right. If we
              end the service for reasons that are not your fault, we will refund any lessons you have paid for but not
              received.
            </Para>
          </section>

          {/* Liability */}
          <section className={CARD} id="liability">
            <SectionHeader icon={Scale} title="Our Responsibility to You" />
            <Para>
              We will provide our services with reasonable care and skill. If we fall short, please tell us so we can
              try to put it right.
            </Para>
            <ul className="space-y-4">
              <Bullet>We are not responsible for losses that were not foreseeable, or for problems caused by your own device, software or internet connection.</Bullet>
              <Bullet>Where the law allows, our total liability to you is limited to the fees you have paid us for the services concerned.</Bullet>
              <Bullet>Nothing in these terms limits our liability where it would be unlawful to do so, including for fraud, or for death or personal injury caused by negligence.</Bullet>
            </ul>
          </section>

          {/* Events */}
          <section className={CARD} id="events">
            <SectionHeader icon={CloudLightning} title="Events Beyond Our Control" />
            <Para last>
              Sometimes events outside our reasonable control, such as widespread internet or power outages, natural
              disasters or government action, may interrupt lessons. If that happens, we will let you know, resume as
              quickly as we can, and offer replacement lessons for any that could not go ahead.
            </Para>
          </section>

          {/* Country Rights */}
          <section className={CARD} id="country-rights">
            <SectionHeader icon={Globe} title="Your Rights by Country" />
            <Para>
              These terms never take away the rights your local consumer law gives you. Where the law gives you more
              protection than these terms, the law applies.
            </Para>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {COUNTRY_RIGHTS.map((c) => (
                <div key={c.country} className="p-6 bg-soft-gray rounded-lg">
                  <h4 className="font-bold text-charcoal mb-3 flex items-center gap-2">
                    <span aria-hidden="true">{c.flag}</span> {c.country}
                  </h4>
                  <p className="text-sm text-on-surface-variant font-sans">{c.text}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Law */}
          <section className={CARD} id="law">
            <SectionHeader icon={Gavel} title="Governing Law &amp; Disputes" />
            <Para>
              These terms are governed by the laws of the State of New York, United States. However, if you live in
              another country, you keep the protection of the mandatory consumer laws of the country where you live, and
              you may be able to bring a claim in your local courts.
            </Para>
            <Para last>
              If something goes wrong, please contact us first. Most issues can be settled quickly by talking them
              through, and we will always try to resolve a complaint fairly before it goes any further.
            </Para>
          </section>

          {/* Changes */}
          <section className={CARD} id="changes">
            <SectionHeader icon={RefreshCw} title="Changes to These Terms" />
            <Para last>
              We may update these terms from time to time, for example when our services or the law change. The date at
              the top shows the latest version. If a change significantly affects you, we will let you know by email
              before it takes effect, and you are free to cancel if you do not agree.
            </Para>
          </section>

          {/* Contact */}
          <section className="bg-primary text-on-primary rounded-xl p-8 md:p-12 shadow-lg scroll-mt-24" id="contact">
            <h2 className="font-headline-lg text-headline-lg mb-6 font-semibold text-white">Questions About These Terms?</h2>
            <p className="mb-8 font-body-lg text-primary-fixed-dim">
              If anything here is unclear, or you want to raise a concern, contact Math Make Smart LLC using any of the
              details below.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <span className="font-label-sm uppercase tracking-wide opacity-80 text-xs font-semibold flex items-center gap-2">
                  <Mail className="w-4 h-4" /> Email
                </span>
                <a className="font-bold underline decoration-lime-green decoration-2 underline-offset-4 text-white" href="mailto:info@mathmakesmart.com">
                  info@mathmakesmart.com
                </a>
              </div>
              <div className="flex flex-col gap-2">
                <span className="font-label-sm uppercase tracking-wide opacity-80 text-xs font-semibold flex items-center gap-2">
                  <Phone className="w-4 h-4" /> Phone
                </span>
                <a className="font-bold text-white" href="tel:+13474914870">+1 (347) 491-4870</a>
              </div>
              <div className="flex flex-col gap-2">
                <span className="font-label-sm uppercase tracking-wide opacity-80 text-xs font-semibold flex items-center gap-2">
                  <MessageCircle className="w-4 h-4" /> WhatsApp Support
                </span>
                <a
                  className="font-bold underline decoration-lime-green decoration-2 underline-offset-4 text-white"
                  href="https://wa.me/+13474914870"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Chat with us on WhatsApp
                </a>
              </div>
              <div className="flex flex-col gap-2">
                <span className="font-label-sm uppercase tracking-wide opacity-80 text-xs font-semibold flex items-center gap-2">
                  <MapPin className="w-4 h-4" /> Postal Address
                </span>
                <p className="font-bold text-white">
                  Math Make Smart LLC
                  <br />
                  418 Broadway #7805
                  <br />
                  Albany, NY 12207, United States
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}