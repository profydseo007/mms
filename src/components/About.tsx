'use client';

import React from 'react';
import { ActivePage } from '@/lib/types';
import { MapPin, Globe, ShieldCheck, Video, ClipboardList, CalendarCheck, MessageSquare, Link, Quote } from 'lucide-react';
import TrustpilotWidget from './TrustpilotWidget';

/*
 * ────────────────────────────────────────────────────────────────
 * CONFIRM THESE BEFORE PUBLISHING
 * Every number below appears publicly. Only publish figures you can
 * evidence, and make sure they match the pricing and home pages.
 * ────────────────────────────────────────────────────────────────
 */
const STATS = {
  foundedYear: 2017,         // confirmed by client
  yearsTrading: '8+',        // derived from 2017. NOTE: live site still says "5 Years of Excellence" - update WordPress
  familiesTaught: '10,000+', // live pricing page says 10,000+ families
  tutors: '500+',            // live pricing page says 200+ tutors
  countries: '6+',
};

const LINKEDIN = {
  company: 'https://www.linkedin.com/company/mathmakesmart',
  founder: 'https://www.linkedin.com/in/hasanali946/',
};

const FOUNDER = {
  name: 'Ali Hassan',
  title: 'Founder & CEO',
  qualification: 'MS Computer Science',
  photo: 'https://mathmakesmart.com/wp-content/uploads/2026/07/Ali-Hassan-CEO-of-MMS-scaled.webp',
};

const COUNTRIES = [
  { name: 'United Kingdom', detail: 'National Curriculum, GCSE and A-Level, across all four nations', check: 'Enhanced DBS checked' },
  { name: 'United States', detail: 'State standards, AP courses, SAT and ACT preparation', check: 'Background checked' },
  { name: 'Canada', detail: 'Provincial curricula, EQAO, Alberta Diploma and BC assessments', check: 'Vulnerable sector checked' },
  { name: 'Australia', detail: 'Australian Curriculum, NAPLAN, VCE, HSC, QCE and more', check: 'Working with Children Check' },
  { name: 'New Zealand', detail: 'New Zealand Curriculum and NCEA Levels 1 to 3', check: 'Police vetted' },
  { name: 'Ireland', detail: 'Junior Cycle and Leaving Certificate, Higher and Ordinary Level', check: 'Garda vetted' },
];

const STEPS = [
  { icon: CalendarCheck, title: 'Book a free trial', text: 'Tell us your child\u2019s year group, curriculum and what they are finding hard. No card details needed.' },
  { icon: ClipboardList, title: 'We assess and match', text: 'The first lesson is a real assessment. We find the actual gap, then pair your child with a specialist tutor.' },
  { icon: Video, title: 'Weekly one-to-one lessons', text: 'Live sessions with a shared whiteboard, recorded to your account so your child can replay any explanation.' },
  { icon: MessageSquare, title: 'You see the progress', text: 'A written summary after every lesson, plus regular reports in the language of your child\u2019s own school reports.' },
];

interface AboutProps {
  onNavigate: (page: ActivePage, subjectTitle?: string) => void;
}

export default function About({ onNavigate }: AboutProps) {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden bg-white">
        <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop flex flex-col md:flex-row items-center gap-16 relative z-10">
          <div className="w-full md:w-1/2 space-y-6">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full font-label-sm text-label-sm uppercase tracking-wider">About Us</span>
            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-charcoal font-bold leading-tight">
              One-to-one tutoring, matched to <span className="text-royal-purple">your child&rsquo;s own curriculum</span>.
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl font-sans">
              Math Make Smart provides live, one-to-one online tutoring in maths, English and science to families in the
              UK, USA, Canada, Australia, New Zealand and Ireland. Every tutor is matched to the curriculum your child is
              actually taught, and to the exams they will actually sit.
            </p>

            {/* Trust Section */}

                       <center><h5>
                        Recommended by parents, students, and tutors
                      </h5></center>
                    
                      <div className="flex items-center justify-center">
                       
                        <TrustpilotWidget />
                        
                      </div>
                     
                    
                  
          </div>
          <div className="w-full md:w-1/2 relative">
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl">
              <img
                className="w-full h-auto object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAO-qcNcJELhkgNJxi7rXlfB1NM2H5Yt4m4Va324UhUoq7hEpyh84VJmXefT76vhN33ChYw3Qbft-kSoLwx9ta2-Df48cOZhgt90-2zUG6XvZ7iyWuW8uPUHXzskGEuX-5m0l8xxJncEHyY6cz4VH7MIwZ9L6mjuCEJFRIH6VFGXVxebSKzpGz2Sgh1Cfx_Y2tCeueD2IOWTZHA7-LkW5XaVu8b1ZWYQi9YLlTQSIAU2452ireSmJqZLg"
                alt="A student working one-to-one with an online tutor"
              />
            </div>
            <div className="absolute -top-12 -right-12 w-64 h-64 -z-10 opacity-20 pointer-events-none">
              <img
                className="w-full h-full object-contain"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD6sYTBT_6p2GpT86FI7vPCokQNmCUy77qasmZDNPE_dk9bh5aKB2n8gI0QJlqMuh5Si3c5seD3LbGCCxU0ySlEXaovt-P97Img4ArokgJw2JxMoY48ULnCTaSLlmj8d3wPh-GkNKUuobUzBxUgiWQLM6O2edyIQdfh6LyzxlR1iBmwzOdavd2VZj_p4aLbAggNZGLNUcgAnMZWq7A0UQM9GI9bu8jk7OzFSs7GKinmk2v9WGvVIT1KxA"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-soft-gray -z-20 rounded-l-[100px]"></div>
      </section>

      {/* Our Mission & Vision */}
      <section className="py-24 bg-surface-container-lowest border-y border-surface-container">
        <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="flex flex-col md:flex-row gap-12 items-start">
            <div className="md:sticky md:top-32 w-full md:w-1/3">
              <h2 className="font-headline-lg text-headline-lg text-charcoal mb-4 font-bold">Our Mission <br />&amp; Vision</h2>
              <div className="w-12 h-1 bg-lime-green rounded-full"></div>
            </div>
            <div className="w-full md:w-2/3 space-y-12">
              <div className="glass-card p-10 rounded-[2rem] border-l-8 border-l-royal-purple shadow-sm">
                <h3 className="font-headline-md text-headline-md text-royal-purple mb-4 font-bold">Teach the Curriculum They Actually Study</h3>
                <p className="text-body-lg text-on-surface-variant font-sans">
                  A tutor who does not know your child&rsquo;s syllabus is learning on your time. We match every student to a
                  tutor who knows their curriculum, their exam board or state authority, and how their work is marked,
                  whether that is a GCSE paper in Manchester or an NCEA standard in Christchurch.
                </p>
              </div>
              <div className="glass-card p-10 rounded-[2rem] border-l-8 border-l-lime-green shadow-sm">
                <h3 className="font-headline-md text-headline-md text-secondary mb-4 font-bold">Understanding Before Drilling</h3>
                <p className="text-body-lg text-on-surface-variant font-sans">
                  Students who memorise a method stall the moment a question is worded differently. We teach why a method
                  works first, then practise it, because that is what holds up under exam pressure and carries into the
                  following year.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Math Make Smart Story */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop flex flex-col lg:flex-row gap-16 items-center">
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <img
              className="rounded-[2rem] shadow-xl w-full"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCUqzSktCp_rHA_2TN5YD22Q9S9BE_YWK08jYjtrwKw7yqw1cXAKuwFkcWP1vdb-nIvZD8UFIC78gx_9_7s0lwcCnx_RpSocJD8vhfZs2BPNM4bv8JB4WL79Nh8OdyYJkLsTP5p5pixzLKwfRgsWd92dfXLwgKI0Ohs1YUIeIiwfe-lz5x8n0vcMahTZ_DwXpCeHygk-mEB1umTeLXOeFDFevApyfVEnQ3PL9GMNpkTT43HbyH4tYt3fA"
              alt="The Math Make Smart teaching team planning lessons"
            />
          </div>
          <div className="w-full lg:w-1/2 order-1 lg:order-2 space-y-6">
            <h2 className="font-headline-lg text-headline-lg text-charcoal font-bold">Our Story</h2>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Math Make Smart was founded in {STATS.foundedYear} by Ali Hassan, who had spent years teaching students one at
              a time and kept seeing the same thing: bright students falling behind in maths, not because they could not
              do it, but because a gap from two years earlier had never been found and fixed.
            </p>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              He built the service around finding that gap first, and around a simple ambition: to take teaching he could
              only give to a handful of students locally and make it available anywhere. What began with a small group of
              tutors is now a team working across six countries and several time zones, covering maths, English and the
              sciences from primary school through to final-year exams.
            </p>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              We stayed one-to-one on purpose. In a group, a tutor cannot stop and rebuild a foundation for one student
              while the others wait. One-to-one is the only setting where the real problem gets solved.
            </p>
            <div className="flex flex-wrap items-center gap-8 pt-4">
              <div>
                <div className="text-display-lg-mobile text-royal-purple font-bold">{STATS.yearsTrading}</div>
                <div className="font-label-sm text-on-surface-variant uppercase tracking-wider">Years Teaching</div>
              </div>
              <div>
                <div className="text-display-lg-mobile text-secondary font-bold">{STATS.familiesTaught}</div>
                <div className="font-label-sm text-on-surface-variant uppercase tracking-wider">Families Supported</div>
              </div>
              <div>
                <div className="text-display-lg-mobile text-royal-purple font-bold">{STATS.countries}</div>
                <div className="font-label-sm text-on-surface-variant uppercase tracking-wider">Countries Served</div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Leadership */}
      <section className="py-24 bg-surface-container-lowest border-y border-surface-container">
        <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="text-center mb-16 space-y-4">
            <h2 className="font-headline-lg text-headline-lg text-charcoal font-bold">A Message From Our Founder</h2>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto">
              Math Make Smart is led by the person who started it, and he still shapes how we teach.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-12 items-center lg:items-start">
            <div className="w-full lg:w-1/3 flex-shrink-0">
              <div className="rounded-[2rem] overflow-hidden shadow-xl bg-soft-gray">
                <img
                  className="w-full h-auto object-cover"
                  src={FOUNDER.photo}
                  alt={`${FOUNDER.name}, ${FOUNDER.title} of Math Make Smart`}
                  loading="lazy"
                />
              </div>
              <div className="mt-6 text-center lg:text-left">
                <h3 className="font-headline-md text-headline-md text-charcoal font-bold">{FOUNDER.name}</h3>
                <p className="font-label-md text-royal-purple font-semibold">{FOUNDER.title}</p>
                <p className="font-body-md text-body-md text-on-surface-variant mt-1">{FOUNDER.qualification}</p>
                <a
                  href={LINKEDIN.founder}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 text-royal-purple font-semibold text-sm hover:underline underline-offset-4"
                >
                  <Link className="w-4 h-4" /> Connect on LinkedIn
                </a>
              </div>
            </div>

            <div className="w-full lg:w-2/3">
              <div className="glass-card p-10 md:p-12 rounded-[2rem] border-l-8 border-l-royal-purple shadow-sm relative">
                <Quote className="w-10 h-10 text-royal-purple/15 absolute top-8 right-8" />
                <div className="space-y-5 relative z-10">
                  <p className="font-body-lg text-body-lg text-on-surface-variant font-sans leading-relaxed">
                    &ldquo;I started teaching because I enjoyed the moment a student stops guessing and starts
                    understanding. Working one to one, I could only reach a handful of students. The question that led to
                    Math Make Smart was simple: how do I give that same attention to a child anywhere in the world?
                  </p>
                  <p className="font-body-md text-body-md text-on-surface-variant font-sans leading-relaxed">
                    My background is in computer science, so building the platform was the straightforward part. The
                    harder work has been keeping the teaching personal as we have grown. That is why we have stayed
                    one-to-one, why tutors are matched to your child&rsquo;s own curriculum rather than a generic syllabus,
                    and why every first lesson is a proper assessment rather than a sales call.
                  </p>
                  <p className="font-body-md text-body-md text-on-surface-variant font-sans leading-relaxed">
                    I am grateful to every family who has trusted us with their child&rsquo;s learning, and to the teachers
                    who make it work. If our tutoring is not right for your child, I would rather we told you that
                    honestly than sold you lessons you do not need.&rdquo;
                  </p>
                  <div className="pt-4 border-t border-surface-variant flex flex-wrap items-center justify-between gap-4">
                    <div>
                      <p className="font-headline-md text-charcoal font-bold">{FOUNDER.name}</p>
                      <p className="font-label-md text-on-surface-variant text-sm">
                        {FOUNDER.title}, Math Make Smart &middot; Founded {STATS.foundedYear}
                      </p>
                    </div>
                    <a
                      href={LINKEDIN.company}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-royal-purple text-royal-purple font-semibold text-sm hover:bg-royal-purple hover:text-white transition-colors"
                    >
                      <Link className="w-4 h-4" /> Follow Math Make Smart
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-white border-y border-surface-container">
        <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="text-center mb-16 space-y-4">
            <h2 className="font-headline-lg text-headline-lg text-charcoal font-bold">How It Works</h2>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto">
              Four steps from first enquiry to steady progress. The first one costs nothing.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {STEPS.map((s, i) => {
              const Icon = s.icon;
              return (
                <div key={s.title} className="bg-soft-gray rounded-2xl p-8 border border-surface-container">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-royal-purple text-white flex items-center justify-center font-bold text-sm">{i + 1}</div>
                    <Icon className="w-6 h-6 text-royal-purple" />
                  </div>
                  <h3 className="font-headline-md text-headline-md text-charcoal mb-2 font-medium">{s.title}</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">{s.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Math Make Smart (Bento Grid) */}
      <section className="py-24 bg-soft-gray border-y border-surface-container">
        <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="text-center mb-16 space-y-4">
            <h2 className="font-headline-lg text-headline-lg text-charcoal font-bold">Why Families Choose Us</h2>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto">
              The things parents tell us made the difference.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Column 1 */}
            <div className="flex flex-col gap-8">
              <div className="bento-item hover-lift bg-white rounded-2xl p-8 border border-surface-container shadow-sm">
                <span className="material-symbols-outlined text-4xl text-royal-purple mb-4">verified_user</span>
                <h3 className="font-headline-md text-headline-md text-charcoal mb-2 font-medium">Vetted, Subject-Specialist Tutors</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Every tutor holds a degree in the subject they teach and completes the background check required in
                  their country before working with a student.
                </p>
              </div>
              <div className="bento-item hover-lift bg-primary-container text-on-primary-container rounded-2xl p-8 shadow-sm">
                <span className="material-symbols-outlined text-4xl text-white mb-4">psychology</span>
                <h3 className="font-headline-md text-headline-md text-white mb-2 font-medium">Patient, One-to-One Teaching</h3>
                <p className="font-body-md text-body-md text-white/95">
                  No group classes and no rushing. Lessons move at your child&rsquo;s pace, and questions are always welcome,
                  however basic they feel.
                </p>
              </div>
            </div>
            {/* Column 2 */}
            <div className="flex flex-col gap-8">
              <div className="bento-item hover-lift bg-white rounded-2xl p-8 border border-surface-container shadow-sm flex flex-col justify-between h-full">
                <div>
                  <span className="material-symbols-outlined text-4xl text-secondary mb-4">public</span>
                  <h3 className="font-headline-md text-headline-md text-charcoal mb-2 font-medium">Matched to Your Curriculum</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    Not a generic international syllabus. We teach the specification, standard or state framework your
                    child&rsquo;s own school follows.
                  </p>
                </div>
                <div className="mt-8 pt-8 border-t border-surface-variant flex flex-wrap gap-2">
                  {['GCSE &amp; A-Level', 'Leaving Cert', 'NCEA', 'VCE &amp; HSC', 'AP &amp; SAT', 'Provincial curricula'].map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-soft-gray rounded-full text-xs font-semibold text-on-surface-variant border border-surface-container"
                      dangerouslySetInnerHTML={{ __html: tag }}
                    />
                  ))}
                </div>
              </div>
            </div>
            {/* Column 3 */}
            <div className="flex flex-col gap-8">
              <div className="bento-item hover-lift bg-secondary-container rounded-2xl p-8 shadow-sm">
                <span className="material-symbols-outlined text-4xl text-on-secondary-container mb-4">videocam</span>
                <h3 className="font-headline-md text-headline-md text-on-secondary-container mb-2 font-medium">Every Lesson Recorded</h3>
                <p className="font-body-md text-body-md text-on-secondary-container/85">
                  Sessions are saved to your account, so a method taught in October can be replayed the night before a
                  test in June.
                </p>
              </div>
              <div className="bento-item hover-lift bg-white rounded-2xl p-8 border border-surface-container shadow-sm">
                <span className="material-symbols-outlined text-4xl text-royal-purple mb-4">insights</span>
                <h3 className="font-headline-md text-headline-md text-charcoal mb-2 font-medium">Progress You Can Read</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  A written summary after every lesson and regular reports, written in the language of your child&rsquo;s own
                  school report rather than ours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Safeguarding */}
      <section className="py-24 bg-white">
        <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="bg-soft-gray rounded-[2rem] p-10 md:p-16 border border-surface-container">
            <div className="flex flex-col lg:flex-row gap-12 items-start">
              <div className="lg:w-1/3">
                <div className="w-14 h-14 rounded-2xl bg-royal-purple/10 flex items-center justify-center mb-6">
                  <ShieldCheck className="w-7 h-7 text-royal-purple" />
                </div>
                <h2 className="font-headline-lg text-headline-lg text-charcoal font-bold mb-4">Safeguarding Comes First</h2>
                <p className="font-body-md text-on-surface-variant">
                  Most of our students are children. These are the rules we hold ourselves to, in every country we teach
                  in.
                </p>
              </div>
              <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  ['Background checks in every country', 'Enhanced DBS in the UK, Garda vetting in Ireland, Working with Children Checks in Australia, police vetting in New Zealand, and vulnerable sector checks in Canada.'],
                  ['All contact stays on the platform', 'Tutors and students never exchange personal phone numbers, emails or social media accounts.'],
                  ['Lessons are recorded', 'Recordings support quality checks and student safety, and are never made public or used in advertising.'],
                  ['Parents stay in the loop', 'You can review any recorded lesson and read the notes after every session.'],
                ].map(([t, d]) => (
                  <div key={t} className="bg-white rounded-xl p-6 border border-surface-container">
                    <h3 className="font-headline-md text-charcoal font-medium mb-2">{t}</h3>
                    <p className="font-body-md text-body-md text-on-surface-variant">{d}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Global Presence */}
      <section className="py-24 bg-surface-container-lowest relative overflow-hidden border-y border-surface-container/60">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none opacity-25 md:opacity-35">
          <div className="relative w-[480px] h-[480px] md:w-[680px] md:h-[680px]">
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-royal-purple/20 via-primary-container/15 to-lime-green/15 blur-3xl transform scale-95"></div>
            <svg viewBox="0 0 500 500" className="w-full h-full text-royal-purple stroke-current fill-none animate-spin-slow" style={{ animationDuration: '100s' }}>
              <circle cx="250" cy="250" r="230" strokeWidth="1.5" strokeDasharray="6 6" />
              <circle cx="250" cy="250" r="210" strokeWidth="1" opacity="0.6" />
              <line x1="20" y1="250" x2="480" y2="250" strokeWidth="1.5" opacity="0.7" />
              <ellipse cx="250" cy="250" rx="230" ry="160" strokeWidth="1" opacity="0.4" />
              <ellipse cx="250" cy="250" rx="230" ry="90" strokeWidth="1" opacity="0.4" />
              <line x1="250" y1="20" x2="250" y2="480" strokeWidth="1.5" opacity="0.7" />
              <ellipse cx="250" cy="250" rx="160" ry="230" strokeWidth="1" opacity="0.4" />
              <ellipse cx="250" cy="250" rx="90" ry="230" strokeWidth="1" opacity="0.4" />
              <path d="M 110 130 Q 130 110 160 120 T 180 160 T 150 200 T 100 170 Z" strokeWidth="1.5" className="fill-royal-purple/10" opacity="0.7" />
              <path d="M 160 230 Q 180 250 170 290 T 150 340 T 130 280 Z" strokeWidth="1.5" className="fill-royal-purple/10" opacity="0.7" />
              <path d="M 230 120 Q 260 110 270 140 T 250 180 Z" strokeWidth="1.5" className="fill-royal-purple/10" opacity="0.7" />
              <path d="M 240 190 Q 280 200 270 270 T 230 310 T 220 240 Z" strokeWidth="1.5" className="fill-royal-purple/10" opacity="0.7" />
              <path d="M 280 110 Q 360 100 380 160 T 320 210 T 270 150 Z" strokeWidth="1.5" className="fill-royal-purple/10" opacity="0.7" />
              <path d="M 340 280 Q 380 280 370 320 T 330 330 Z" strokeWidth="1.5" className="fill-royal-purple/10" opacity="0.7" />
              <circle cx="150" cy="150" r="5" className="fill-royal-purple" />
              <circle cx="250" cy="130" r="5" className="fill-royal-purple" />
              <circle cx="250" cy="230" r="5" className="fill-royal-purple" />
              <circle cx="350" cy="160" r="5" className="fill-royal-purple" />
              <circle cx="350" cy="300" r="5" className="fill-royal-purple" />
              <path d="M 150 150 Q 200 100 250 130" strokeWidth="1" strokeDasharray="3 3" opacity="0.8" />
              <path d="M 250 130 Q 300 110 350 160" strokeWidth="1" strokeDasharray="3 3" opacity="0.8" />
              <path d="M 350 160 Q 380 230 350 300" strokeWidth="1" strokeDasharray="3 3" opacity="0.8" />
            </svg>
          </div>
        </div>

        <div className="relative z-10 max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-royal-purple/10 text-royal-purple rounded-full font-label-md text-sm font-semibold mb-4">
            <Globe className="w-4 h-4" />
            <span>Six Countries, Six Curricula</span>
          </div>
          <h2 className="font-headline-lg text-headline-lg text-charcoal mb-4 font-semibold">Where We Teach</h2>
          <p className="text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-12">
            Each country has its own curriculum, its own exams and its own safeguarding rules. We staff by market so
            your child works with someone who knows theirs.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {COUNTRIES.map((c) => (
              <div key={c.name} className="bg-white rounded-2xl p-6 border border-surface-container text-left hover:border-royal-purple transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-royal-purple/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-royal-purple" />
                  </div>
                  <h3 className="font-headline-md text-charcoal font-medium">{c.name}</h3>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant mb-3">{c.detail}</p>
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-secondary bg-lime-green/15 px-3 py-1 rounded-full">
                  <ShieldCheck className="w-3.5 h-3.5" /> {c.check}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 relative overflow-hidden bg-white">
        <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="relative bg-royal-purple rounded-[3rem] p-12 md:p-24 text-center text-white overflow-hidden shadow-2xl">
            <div className="relative z-10 max-w-2xl mx-auto space-y-8">
              <h2 className="text-display-lg-mobile md:text-headline-lg font-display text-white font-semibold">
                Find out where your child actually stands
              </h2>
              <p className="font-body-lg text-body-lg text-white/85">
                The first lesson is free and it is a genuine assessment. We will tell you honestly what is holding your
                child back and whether tutoring is the right answer.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button
                  onClick={() => onNavigate('trial')}
                  className="bg-lime-green text-charcoal px-10 py-5 rounded-full font-label-md text-label-md hover:scale-105 transition-transform shadow-lg cursor-pointer"
                >
                  Book a Free Trial Lesson
                </button>
                <button
                  onClick={() => onNavigate('pricing')}
                  className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-10 py-5 rounded-full font-label-md text-label-md hover:bg-white/20 transition-all cursor-pointer"
                >
                  View Pricing
                </button>
              </div>
              <p className="text-white/60 font-label-md text-sm">No credit card required</p>
            </div>
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-lime-green/10 rounded-full blur-3xl"></div>
          </div>
        </div>
      </section>
    </div>
  );
}