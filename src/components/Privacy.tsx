'use client';

import React from 'react';
import {
  Mail,
  Shield,
  CheckCircle,
  Clock,
  MapPin,
  Phone,
  Users,
  Building2,
  Baby,
  Video,
  Cookie,
  Share2,
  Globe,
  Archive,
  Scale,
  RefreshCw,
  MessageCircle,
} from 'lucide-react';

const LAST_UPDATED = 'September 22, 2026';

const SECTIONS = [
  { id: 'who-we-are', label: 'Who We Are' },
  { id: 'collection', label: 'Information We Collect' },
  { id: 'usage', label: 'How We Use Your Data' },
  { id: 'children', label: 'Children\u2019s Privacy' },
  { id: 'recordings', label: 'Lesson Recordings' },
  { id: 'cookies', label: 'Cookies' },
  { id: 'disclosure', label: 'Sharing Your Data' },
  { id: 'transfers', label: 'International Transfers' },
  { id: 'retention', label: 'How Long We Keep Data' },
  { id: 'security', label: 'Data Security' },
  { id: 'rights', label: 'Your Rights by Country' },
  { id: 'changes', label: 'Changes to This Policy' },
  { id: 'contact', label: 'Contact Us' },
];

const USES = [
  { title: 'Delivering Tutoring', text: 'Matching your child with a tutor, scheduling lessons and running sessions (contract).' },
  { title: 'Progress & Reporting', text: 'Sharing lesson notes and progress updates with you (contract).' },
  { title: 'Payments', text: 'Billing and managing your plan or package (contract and legal obligation).' },
  { title: 'Safeguarding', text: 'Keeping students safe and dealing with any concern (legitimate interests and legal obligation).' },
  { title: 'Communication', text: 'Session reminders, service updates and replies to your messages (contract).' },
  { title: 'Marketing', text: 'Offers and news, only where you have agreed. You can opt out at any time (consent).' },
];

const COUNTRY_RIGHTS = [
  {
    flag: '\u{1F1FA}\u{1F1F8}',
    country: 'United States',
    law: 'COPPA and applicable state privacy laws, including the CCPA/CPRA for California residents',
    points: [
      'Parents of children under 13 can review, correct or ask us to delete their child\u2019s information',
      'California residents can ask what we collect, request deletion or correction, and opt out of sale or sharing',
      'We do not sell personal information',
    ],
    regulator: 'Federal Trade Commission, or your state Attorney General',
  },
  {
    flag: '\u{1F1EC}\u{1F1E7}',
    country: 'United Kingdom',
    law: 'UK GDPR and the Data Protection Act 2018',
    points: [
      'Access, correct, erase or restrict the processing of your data',
      'Object to processing and withdraw consent at any time',
      'Receive your data in a portable format',
    ],
    regulator: 'Information Commissioner\u2019s Office (ICO)',
  },
  {
    flag: '\u{1F1EE}\u{1F1EA}',
    country: 'Ireland',
    law: 'The EU General Data Protection Regulation (GDPR) and the Data Protection Acts',
    points: [
      'Access, correct, erase or restrict the processing of your data',
      'Object to processing and withdraw consent at any time',
      'Receive your data in a portable format',
    ],
    regulator: 'Data Protection Commission (DPC)',
  },
  {
    flag: '\u{1F1E8}\u{1F1E6}',
    country: 'Canada',
    law: 'PIPEDA, and Quebec\u2019s Law 25 for Quebec residents',
    points: [
      'Access the personal information we hold about you',
      'Challenge its accuracy and ask for it to be corrected',
      'Withdraw consent, subject to legal or contractual limits',
    ],
    regulator: 'Office of the Privacy Commissioner of Canada',
  },
  {
    flag: '\u{1F1E6}\u{1F1FA}',
    country: 'Australia',
    law: 'The Privacy Act 1988 and the Australian Privacy Principles',
    points: [
      'Access the personal information we hold about you',
      'Ask us to correct information that is wrong or out of date',
      'Complain to us first, then to the regulator if it is not resolved',
    ],
    regulator: 'Office of the Australian Information Commissioner (OAIC)',
  },
  {
    flag: '\u{1F1F3}\u{1F1FF}',
    country: 'New Zealand',
    law: 'The Privacy Act 2020 and its Information Privacy Principles',
    points: [
      'Access the personal information we hold about you',
      'Ask us to correct it if it is inaccurate',
      'Complain to us first, then to the regulator if it is not resolved',
    ],
    regulator: 'Office of the Privacy Commissioner',
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

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3">
      <CheckCircle className="w-5 h-5 text-lime-green mt-1 flex-shrink-0" />
      <span className="font-sans text-on-surface-variant">{children}</span>
    </li>
  );
}

export default function Privacy() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop py-16 md:py-24">
      {/* Hero Section */}
      <div className="mb-16 text-center max-w-3xl mx-auto">
        <span className="text-primary font-label-sm text-label-sm uppercase tracking-widest mb-4 block">Trust &amp; Safety</span>
        <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-charcoal mb-6 font-bold">Privacy Policy</h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant font-sans">
          Math Make Smart LLC provides online one-to-one tutoring to families in the United States, United Kingdom,
          Ireland, Canada, Australia and New Zealand. Most of the students we teach are children, so we treat their
          information with particular care. This policy explains, in plain language, what we collect, why we collect
          it, and the choices you have.
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
          <nav className="space-y-1 bg-white p-4 rounded-xl border border-surface-container shadow-sm">
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

        {/* Main Policy Content */}
        <div className="lg:col-span-9 space-y-12">
          {/* Who We Are */}
          <section className={CARD} id="who-we-are">
            <SectionHeader icon={Building2} title="Who We Are" />
            <p className="text-on-surface-variant mb-6 font-sans leading-relaxed">
              This website and our tutoring services are operated by <strong>Math Make Smart LLC</strong>, 418 Broadway
              #7805, Albany, NY 12207, United States. For data protection purposes, Math Make Smart LLC is the
              organisation responsible for your personal information (the &ldquo;controller&rdquo;).
            </p>
            <p className="text-on-surface-variant font-sans leading-relaxed">
              In this policy, &ldquo;we&rdquo;, &ldquo;us&rdquo; and &ldquo;our&rdquo; mean Math Make Smart LLC.
              &ldquo;You&rdquo; means the parent, guardian or adult who uses our services, and &ldquo;your child&rdquo;
              means the student receiving tutoring. Adult learners who book lessons for themselves are covered in the
              same way.
            </p>
          </section>

          {/* Information Collection */}
          <section className={CARD} id="collection">
            <SectionHeader icon={Users} title="Information We Collect" />
            <p className="text-on-surface-variant mb-6 font-sans leading-relaxed">
              We only collect what we need to arrange and deliver tutoring. Most of it comes directly from you when you
              book a free trial, enrol, or contact us.
            </p>
            <ul className="space-y-4">
              <Bullet><strong>Parent or guardian details:</strong> name, email address, phone number, country and time zone, and billing contact if different.</Bullet>
              <Bullet><strong>Student details:</strong> first name, age or year/grade, school curriculum, subjects, and the goals or difficulties you tell us about.</Bullet>
              <Bullet><strong>Learning records:</strong> lesson notes, progress reports, homework and assessment results created during tutoring.</Bullet>
              <Bullet><strong>Lesson recordings:</strong> audio and video of online sessions, explained in the Lesson Recordings section below.</Bullet>
              <Bullet><strong>Payment information:</strong> handled by our payment provider. We do not store full card numbers on our own systems.</Bullet>
              <Bullet><strong>Support needs:</strong> any learning needs you choose to share so we can support your child properly. This is optional and used only for teaching.</Bullet>
              <Bullet><strong>Technical data:</strong> device, browser, IP address and pages visited, collected through cookies and similar tools.</Bullet>
            </ul>
          </section>

          {/* Use of Data */}
          <section className={CARD} id="usage">
            <SectionHeader icon={CheckCircle} title="How We Use Your Data" />
            <p className="text-on-surface-variant mb-6 font-sans">
              We use your information for the purposes below. Where the law requires a reason (a &ldquo;legal
              basis&rdquo;), it is shown in brackets.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {USES.map((u) => (
                <div key={u.title} className="p-6 bg-soft-gray rounded-lg">
                  <h4 className="font-bold text-primary mb-2">{u.title}</h4>
                  <p className="text-on-surface-variant font-sans text-sm">{u.text}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Children's Privacy */}
          <section className={CARD} id="children">
            <SectionHeader icon={Baby} title="Children&rsquo;s Privacy" />
            <p className="text-on-surface-variant mb-6 font-sans leading-relaxed">
              Our services are designed for school-age students, so a parent or guardian must set up the account and
              agree to this policy on behalf of any child. We do not knowingly allow children to create accounts or
              share personal information without that consent.
            </p>
            <ul className="space-y-4">
              <Bullet>We collect only the student information needed to teach effectively.</Bullet>
              <Bullet>Tutors contact students only through our platform, never through personal accounts.</Bullet>
              <Bullet>We never use a child&rsquo;s photo, name or work in marketing without a parent&rsquo;s separate, written permission.</Bullet>
              <Bullet>Parents can review, correct or ask us to delete their child&rsquo;s information at any time.</Bullet>
            </ul>
          </section>

          {/* Lesson Recordings */}
          <section className={CARD} id="recordings">
            <SectionHeader icon={Video} title="Lesson Recordings" />
            <p className="text-on-surface-variant mb-4 font-sans leading-relaxed">
              We record online lessons for two reasons: so students can replay explanations when they revise, and so we
              can check teaching quality and keep students safe. Recordings are saved to your account and are never made
              public.
            </p>
            <div className="bg-primary-container/5 border-l-4 border-primary p-6 my-6 rounded-r-lg">
              <p className="font-body-md text-on-surface font-sans">
                Recordings can be viewed by the student&rsquo;s family, the assigned tutor, and a small number of our
                staff for quality and safeguarding checks. We do not use recordings in advertising.
              </p>
            </div>
            <p className="text-on-surface-variant font-sans leading-relaxed">
              If you would prefer a lesson not to be recorded, or want an existing recording deleted, contact us and we
              will explain what is possible for your plan.
            </p>
          </section>

          {/* Cookies */}
          <section className={CARD} id="cookies">
            <SectionHeader icon={Cookie} title="Cookies" />
            <p className="text-on-surface-variant mb-6 font-sans leading-relaxed">
              Cookies are small files stored on your device when you visit our website. We use them in three ways:
            </p>
            <ul className="space-y-4 mb-6">
              <Bullet><strong>Essential cookies:</strong> needed for the site to work, such as keeping you logged in. These do not require consent.</Bullet>
              <Bullet><strong>Analytics cookies:</strong> help us understand how visitors use the site so we can improve it.</Bullet>
              <Bullet><strong>Advertising cookies:</strong> help us show relevant adverts on other websites and measure how well they work.</Bullet>
            </ul>
            <p className="text-on-surface-variant font-sans leading-relaxed">
              Where the law requires it, including in the UK and Ireland, we only set analytics and advertising cookies
              after you agree. You can change your choice or block cookies in your browser settings at any time, though
              some parts of the site may not work as well.
            </p>
          </section>

          {/* Sharing */}
          <section className={CARD} id="disclosure">
            <SectionHeader icon={Share2} title="Sharing Your Data" />
            <p className="text-on-surface-variant mb-6 font-sans leading-relaxed">
              <strong>We do not sell your personal information.</strong> We share it only when it is needed to run our
              service, and only with people who must keep it confidential:
            </p>
            <ul className="space-y-4">
              <Bullet><strong>Your tutor,</strong> who receives the details needed to teach your child.</Bullet>
              <Bullet><strong>Service providers</strong> such as our video lesson platform, booking and email tools, payment processor and website hosting.</Bullet>
              <Bullet><strong>Authorities,</strong> where the law requires it or where we must act to protect a child&rsquo;s safety.</Bullet>
              <Bullet><strong>A new owner,</strong> if our business is ever sold or merged, under the same protections as this policy.</Bullet>
            </ul>
          </section>

          {/* International Transfers */}
          <section className={CARD} id="transfers">
            <SectionHeader icon={Globe} title="International Transfers" />
            <p className="text-on-surface-variant mb-6 font-sans leading-relaxed">
              We are based in the United States, and our tutors and service providers work in several countries. This
              means your information may be processed outside the country where you live.
            </p>
            <p className="text-on-surface-variant font-sans leading-relaxed">
              When we transfer data from the UK, Ireland or the wider European Economic Area, we use recognised
              safeguards such as standard contractual clauses. For other countries, we take reasonable steps to make
              sure the receiving party protects your information to the standard your local law expects.
            </p>
          </section>

          {/* Retention */}
          <section className={CARD} id="retention">
            <SectionHeader icon={Archive} title="How Long We Keep Data" />
            <p className="text-on-surface-variant mb-6 font-sans leading-relaxed">
              We keep information only as long as we need it, then delete or anonymise it.
            </p>
            <ul className="space-y-4">
              <Bullet><strong>Account and learning records:</strong> while you are a member, and for up to 3 years after your membership ends.</Bullet>
              <Bullet><strong>Lesson recordings:</strong> for a limited period after the lesson, unless you ask us to delete them sooner.</Bullet>
              <Bullet><strong>Financial records:</strong> for as long as tax and accounting laws require.</Bullet>
              <Bullet><strong>Free trial enquiries:</strong> removed if you do not go on to enrol, unless you have agreed to hear from us.</Bullet>
            </ul>
          </section>

          {/* Data Security */}
          <section className={CARD} id="security">
            <SectionHeader icon={Shield} title="Data Security" />
            <p className="text-on-surface-variant mb-6 font-sans leading-relaxed">
              We use technical and organisational measures to protect your information, and only people who need it
              for their role can access it. No online system is completely risk-free, but if a breach affecting your
              data ever happens, we will tell you and the relevant regulator where the law requires us to.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="px-4 py-2 bg-lime-green/10 text-primary border border-lime-green/30 rounded-full font-label-md flex items-center gap-2 text-xs">
                <Shield className="w-4 h-4" /> Encrypted Connections (SSL)
              </div>
              <div className="px-4 py-2 bg-lime-green/10 text-primary border border-lime-green/30 rounded-full font-label-md flex items-center gap-2 text-xs">
                <Users className="w-4 h-4" /> Role-Based Access
              </div>
              <div className="px-4 py-2 bg-lime-green/10 text-primary border border-lime-green/30 rounded-full font-label-md flex items-center gap-2 text-xs">
                <CheckCircle className="w-4 h-4" /> Background-Checked Tutors
              </div>
            </div>
          </section>

          {/* Your Rights by Country */}
          <section className={CARD} id="rights">
            <SectionHeader icon={Scale} title="Your Rights by Country" />
            <p className="text-on-surface-variant mb-8 font-sans leading-relaxed">
              Wherever you live, you can ask us what information we hold, ask us to correct it, and ask us to delete it.
              Your local law may give you more rights. To use any of them, email us and we will reply within the time
              your law requires. If you are unhappy with our answer, you can complain to your local regulator.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {COUNTRY_RIGHTS.map((c) => (
                <div key={c.country} className="p-6 bg-soft-gray rounded-lg">
                  <h4 className="font-bold text-charcoal mb-1 flex items-center gap-2">
                    <span aria-hidden="true">{c.flag}</span> {c.country}
                  </h4>
                  <p className="text-xs text-primary font-semibold mb-4">{c.law}</p>
                  <ul className="space-y-2 mb-4">
                    {c.points.map((p) => (
                      <li key={p} className="flex items-start gap-2 text-sm text-on-surface-variant font-sans">
                        <CheckCircle className="w-4 h-4 text-lime-green mt-0.5 flex-shrink-0" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-xs text-on-surface-variant font-sans">
                    <strong>Regulator:</strong> {c.regulator}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Changes */}
          <section className={CARD} id="changes">
            <SectionHeader icon={RefreshCw} title="Changes to This Policy" />
            <p className="text-on-surface-variant font-sans leading-relaxed">
              We may update this policy when our services or the law change. The date at the top shows when it was last
              revised. If we make a significant change that affects how we use your information, we will let you know by
              email before it takes effect.
            </p>
          </section>

          {/* Contact */}
          <section className="bg-primary text-on-primary rounded-xl p-8 md:p-12 shadow-lg scroll-mt-24" id="contact">
            <h2 className="font-headline-lg text-headline-lg mb-6 font-semibold text-white">Questions About Your Privacy?</h2>
            <p className="mb-8 font-body-lg text-primary-fixed-dim">
              To ask a question, make a request about your data, or raise a concern, contact Math Make Smart LLC using
              any of the details below.
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