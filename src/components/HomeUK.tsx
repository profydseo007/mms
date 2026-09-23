'use client';

import React, { useState, useEffect } from 'react';
import LigatureIcon from './LigatureIcon';
import { COUNTRY_FORM_IDS, COUNTRY_LABELS } from '@/lib/country';
import { useAppNavigate } from '@/lib/useAppNavigate';
import { Star, School, Users, CheckCircle, ArrowRight, BookOpen, Edit, Settings, Shield, Award, Calendar, Globe, MapPin } from 'lucide-react';

export default function HomeUK() {
  const { navigateTo } = useAppNavigate();
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [formId] = useState(COUNTRY_FORM_IDS.GB);
  const country = 'GB';

  useEffect(() => {
    const scriptId = 'ghl-form-embed-script';
    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://link.msgsndr.com/js/form_embed.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  const toggleFaq = (index: number) => {
    if (activeFaq === index) {
      setActiveFaq(null);
    } else {
      setActiveFaq(index);
    }
  };

  const faqs = [
    {
      q: 'How are your tutors selected?',
      a: 'Every tutor holds a degree in the subject they teach and clears a subject test, a mock lesson and an enhanced DBS check before working with a single student. We also approve tutors by exam board, because an AQA GCSE Maths paper and an Edexcel one reward different things, and a tutor who knows the mark scheme is worth considerably more than one who simply knows the maths.'
    },
    {
      q: 'Is the free trial really free?',
      a: 'Yes. The first 30-minute session costs nothing, requires no card details and carries no obligation. We use it to establish where your child sits against their year group and what they\'re working towards. If you decide not to continue, that\'s the end of it.'
    },
    {
      q: 'Do you cover Scotland, Wales and Northern Ireland, or just England?',
      a: 'All four nations, and they are genuinely different systems rather than variations on one. England and Northern Ireland sit GCSEs and A-Levels, though England grades 9 to 1 while Northern Ireland uses CCEA grading. Scotland follows Curriculum for Excellence with National 5, Higher and Advanced Higher, now awarded by Qualifications Scotland, which replaced the SQA on 1 February 2026. Wales is partway through its own reform, with Made-for-Wales GCSEs taught from September 2025 and first awarded in 2027. We match tutors to the nation and the awarding body, not just the subject.'
    },
    {
      q: 'What does a grade 4 actually mean, and is it a pass?',
      a: 'In England, GCSEs are graded 9 to 1 rather than A* to G. A grade 4 is a standard pass and a grade 5 is a strong pass, which is why some sixth forms and employers ask for a 5 even though 4 is technically a pass. The distinction matters most in maths and English, because students who do not reach a grade 4 in those subjects are normally required to keep studying them post-16. If your child is sitting somewhere around a 3 or 4, that boundary is usually the single most valuable place to focus tutoring.'
    },
    {
      q: 'Should my child be entered for Foundation or Higher tier maths?',
      a: 'Foundation tier caps the available grade at 5, while Higher tier runs from 9 down to 4 with a narrow allowance below. The instinct is to push for Higher, but a student who is comfortably achieving marks at the top of Foundation will often secure a stronger grade than one struggling at the bottom of Higher, where the paper assumes content they have not yet secured. It is a strategic decision that should be made on recent mock performance and the grade actually required for their next step, and it is worth revisiting after each set of mocks rather than settled once in Year 10.'
    },
    {
      q: 'When should we start tutoring before GCSEs or A-Levels?',
      a: 'Earlier than most families do. The common pattern is to book tutoring after a disappointing set of mocks in Year 11, which leaves a term to repair gaps that opened in Year 9. Starting in Year 10, or even late Year 9, means the work can be genuinely remedial rather than triage. That said, focused work in the final two terms still helps considerably, particularly on exam technique and mark scheme strategy, which are quick to improve compared with rebuilding subject knowledge.'
    },
    {
      q: 'How much does online tutoring cost in the UK?',
      a: 'Rates are billed in pounds and depend on subject and level, with A-Level priced above GCSE and Key Stage 3 support. There\'s no registration fee and no minimum contract, and lesson bundles lower the hourly rate. Full pricing is on our pricing page.'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-16 pb-24 md:pt-24 md:pb-32 bg-white">
        <div className="learning-lane px-margin-mobile grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-max-width mx-auto md:px-margin-desktop">
          <div className="relative z-10 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary-container text-on-secondary-container rounded-full text-label-sm font-label-sm mb-2">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
              {COUNTRY_LABELS[country] ? `Serving Students Across ${COUNTRY_LABELS[country]}` : ''}
            </div>
            <h1 className="text-display-lg-mobile md:text-display-lg font-display text-charcoal leading-tight font-bold">
              Online Tutoring Services in the United Kingdom That Actually Click
            </h1>
            <p className="text-body-lg font-sans text-on-surface-variant max-w-lg">
              One-to-one online tutoring in maths, science and English, matched to your child&apos;s exam board.
              We pair every student with a specialist who knows the difference between an AQA and an Edexcel mark scheme,
              understands where tier and grade boundaries actually sit, and has the patience to keep going until the concept lands.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button 
                onClick={() => navigateTo('trial')}
                className="bg-royal-purple text-on-primary px-8 py-4 rounded-xl font-bold text-body-lg hover:bg-primary transition-colors shadow-ambient cursor-pointer text-center"
              >
                Get Free Trial Session
              </button>
              <button 
                onClick={() => navigateTo('curriculum')}
                className="border-2 border-royal-purple text-royal-purple px-8 py-4 rounded-xl font-bold text-body-lg hover:bg-soft-gray transition-colors cursor-pointer text-center"
              >
                View Curriculum
              </button>
            </div>

            {/* Stat Badges */}
            <div className="flex flex-wrap gap-4 pt-6 min-w-0 max-w-full">
              <div className="bg-white p-4 rounded-xl shadow-ambient flex items-center gap-3 border border-outline-variant/30 min-w-0 max-w-full">
                <div className="w-10 h-10 bg-primary-container rounded-lg flex items-center justify-center text-white shrink-0">
                  <School className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] font-semibold text-on-surface-variant uppercase tracking-wider break-words">Expert Tutors</p>
                  <p className="text-sm font-bold text-charcoal break-words">1k+ Degree Qualified</p>
                </div>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-ambient flex items-center gap-3 border border-outline-variant/30 min-w-0 max-w-full">
                <div className="w-10 h-10 bg-lime-green rounded-lg flex items-center justify-center text-charcoal shrink-0">
                  <Users className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] font-semibold text-on-surface-variant uppercase tracking-wider break-words">Trusted by</p>
                  <p className="text-sm font-bold text-charcoal break-words">10,000+ Families</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image column */}
          <div className="relative">
            <div className="absolute -top-12 -right-12 w-96 h-96 bg-primary-fixed rounded-full blur-3xl opacity-30"></div>
            <div className="relative z-10 rounded-[32px] overflow-hidden shadow-dropdown border-8 border-white">
              <img 
                className="w-full aspect-[4/5] object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD4Oes6SUQsEAnaxpgVeSQ6f-WwJl7-szPzekLkyG_J8FHI9EmRAuMiWSkEK2e3m8b5q4eS3RqqUEsqv-ocAIziz2-2eRfsJnhFv0TTB__Q6Mk-f4AlY1rGOKWA9CFzAvSuGZEeHfQQQqf7FerWhOE-TARzRSm769rpAoNeZnj4W3Ma5XM8t63RqnldSMSJ_Qgtfz2TVjHMerPqhhqx9OZYppDSfJmFUGQiEpLNKt_1E_wZ4ZixNg2oE6SQusF0g-60lHQ" 
                alt="Happy engaged student using laptop"
              />
            </div>
            {/* Floating Testimonial Card */}
            <div className="absolute -bottom-6 -left-2 sm:-left-6 bg-white p-4 sm:p-6 rounded-2xl shadow-dropdown border border-outline-variant/30 z-20 max-w-[220px] sm:max-w-[280px] min-w-0">
              <div className="flex items-center gap-1 mb-2 text-lime-green">
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
              </div>
              <p className="italic text-on-surface-variant text-sm break-words">&quot;He was sitting on a grade 3 in his mocks and the school had already moved him to Foundation.
                He came out with a 5.&quot;</p>
              <p className="mt-3 font-bold text-charcoal text-xs break-words">— Sarah J., Parent from Leeds</p>
            </div>
          </div>
        </div>
      </section>

        {/* Trust Section */}
           <section className="bg-soft-gray py-12 md:py-16 border-y border-surface-container">
             <div className="learning-lane px-margin-mobile flex flex-col md:flex-row items-center justify-center gap-8 text-center md:text-left max-w-max-width mx-auto md:px-margin-desktop">
               <div className="flex items-center gap-3">
                 <span className="text-xl font-bold text-charcoal">Trustpilot</span>
                 <div className="flex gap-1">
                   {[1, 2, 3, 4, 5].map((idx) => (
                     <div key={idx} className="w-8 h-8 bg-[#00b67a] flex items-center justify-center text-white rounded-sm">
                       <Star className="w-4 h-4 fill-current" />
                     </div>
                   ))}
                 </div>
               </div>
               <p className="text-body-lg font-medium text-charcoal">Excellent 4.9/5 rating based on 660+ reviews</p>
             </div>
           </section>
     

      {/* The Ideal Tutor Section */}
      <section className="py-24 bg-white">
        <div className="learning-lane px-margin-mobile max-w-max-width mx-auto md:px-margin-desktop">
          <div className="text-center mb-16 space-y-3">
            <h2 className="text-headline-lg md:text-display-lg-mobile font-display text-charcoal font-bold">The Ideal Online Tutor</h2>
            <h4>What Makes a Tutor Worth Your Money</h4>
            <p className="text-body-lg text-on-surface-variant">
              A great deal of private tuition is just supervised homework, and an hour of that changes very little.
              The difference between a tutor who lifts a grade and one who fills an hour is whether they teach the underlying idea
              or simply work through the questions your child was already going to attempt.
              We hire for the first, then match on temperament, because the tutor who suits a student pushing for a grade 9
              is rarely the one who suits a student who has quietly given up in maths.
            </p>
            <div className="w-20 h-1.5 bg-lime-green mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Quality 1 */}
            <div className="group flex flex-col items-center text-center p-4">
              <div className="mb-6 inline-block p-4 rounded-2xl bg-surface-container-low group-hover:bg-primary-fixed transition-colors duration-300 relative">
                <School className="w-10 h-10 text-primary" />
                <div className="absolute top-2 right-2 w-3 h-3 bg-lime-green rounded-full"></div>
              </div>
              <h3 className="text-headline-md font-display mb-3 text-charcoal font-bold">Exam Board Expertise</h3>
              <p className="text-body-md text-on-surface-variant leading-relaxed">
                Every tutor holds a degree in their subject and is assessed on the specification your child is examined against,
                whether that is AQA, Edexcel, OCR, WJEC or CCEA. They know the mark scheme, not just the material.
              </p>
            </div>
            {/* Quality 2 */}
            <div className="group flex flex-col items-center text-center p-4">
              <div className="mb-6 inline-block p-4 rounded-2xl bg-surface-container-low group-hover:bg-primary-fixed transition-colors duration-300 relative">
                <Users className="w-10 h-10 text-primary" />
                <div className="absolute top-2 right-2 w-3 h-3 bg-lime-green rounded-full"></div>
              </div>
              <h3 className="text-headline-md font-display mb-3 text-charcoal font-bold">Patience That Holds</h3>
              <p className="text-body-md text-on-surface-variant leading-relaxed">
                Most students struggling in Year 11 aren&apos;t stuck on this week&apos;s topic. They&apos;re missing something from Year 8 or 9.
                Our tutors are trained to find that gap and go back for it, however many times it takes.
              </p>
            </div>
            {/* Quality 3 */}
            <div className="group flex flex-col items-center text-center p-4">
              <div className="mb-6 inline-block p-4 rounded-2xl bg-surface-container-low group-hover:bg-primary-fixed transition-colors duration-300 relative">
                <Shield className="w-10 h-10 text-primary" />
                <div className="absolute top-2 right-2 w-3 h-3 bg-lime-green rounded-full"></div>
              </div>
              <h3 className="text-headline-md font-display mb-3 text-charcoal font-bold">Vetted, Safe and Accountable</h3>
              <p className="text-body-md text-on-surface-variant leading-relaxed">
                Every tutor holds an enhanced DBS check before taking a student. Sessions are recorded to your account,
                and no contact happens off-platform. You can review any lesson whenever you like.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tutoring without the hassle Section */}
      <section className="py-24 bg-soft-gray border-y border-surface-container">
        <div className="learning-lane px-margin-mobile max-w-max-width mx-auto md:px-margin-desktop">
          <div className="text-center mb-16 max-w-2xl mx-auto space-y-4">
            <h3 className="text-headline-lg md:text-display-lg-mobile font-display text-charcoal font-bold">Tutoring for every subject, without the hassle</h3>
            <h4>An Online Tutoring Platform Built for UK Families</h4>
            <p className="text-body-lg text-on-surface-variant">The teaching is the hard part. Everything around it, booking, rescheduling, paying, tracking progress,
               should take under a minute.
              And because it&apos;s online, a student in rural Cumbria gets the same tutor a student in Richmond does.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Grid Cards */}
            <div className="bg-white p-8 rounded-[24px] shadow-ambient hover:-translate-y-1 transition-transform duration-300 border border-surface-container">
              <Calendar className="w-8 h-8 text-primary mb-4" />
              <h4 className="text-headline-md font-bold mb-2 text-charcoal">Easy Scheduling</h4>
              <p className="text-body-md text-on-surface-variant">See live tutor availability and book around school,
                clubs and everything else. No driving to a tuition centre on a Saturday morning.</p>
            </div>
            <div className="bg-white p-8 rounded-[24px] shadow-ambient hover:-translate-y-1 transition-transform duration-300 border border-surface-container">
              <Settings className="w-8 h-8 text-primary mb-4" />
              <h4 className="text-headline-md font-bold mb-2 text-charcoal">Simple Rescheduling</h4>
              <p className="text-body-md text-on-surface-variant">Plans change. Move any session from your dashboard up to two hours ahead, at no cost.</p>
            </div>
            <div className="bg-white p-8 rounded-[24px] shadow-ambient hover:-translate-y-1 transition-transform duration-300 border border-surface-container">
              <Globe className="w-8 h-8 text-primary mb-4" />
              <h4 className="text-headline-md font-bold mb-2 text-charcoal">Integrated Secure Classroom</h4>
              <p className="text-body-md text-on-surface-variant">Lessons run in our own virtual classroom with a shared whiteboard built for maths notation.
                 Nothing to install, no third-party links to chase.</p>
            </div>
            <div className="bg-white p-8 rounded-[24px] shadow-ambient hover:-translate-y-1 transition-transform duration-300 border border-surface-container">
              <Users className="w-8 h-8 text-primary mb-4" />
              <h4 className="text-headline-md font-bold mb-2 text-charcoal">Recorded Sessions</h4>
              <p className="text-body-md text-on-surface-variant">Every lesson is saved to your account, so your child can replay an explanation
                during revision and you can see exactly what was covered.</p>
            </div>
            <div className="bg-white p-8 rounded-[24px] shadow-ambient hover:-translate-y-1 transition-transform duration-300 border border-surface-container">
              <Award className="w-8 h-8 text-primary mb-4" />
              <h4 className="text-headline-md font-bold mb-2 text-charcoal">No Locked Contracts</h4>
              <p className="text-body-md text-on-surface-variant">Pay as you go or choose a monthly plan, billed in pounds. Cancel anytime, without a fee or a phone call.</p>
            </div>
            <div className="bg-white p-8 rounded-[24px] shadow-ambient hover:-translate-y-1 transition-transform duration-300 border border-surface-container">
              <Star className="w-8 h-8 text-primary mb-4" />
              <h4 className="text-headline-md font-bold mb-2 text-charcoal">Progress Reports</h4>
              <p className="text-body-md text-on-surface-variant">A written summary after every session, plus a fortnightly report showing topics mastered and topics still needing work, in the language of the specification.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us / Subjects Section */}
      <section className="py-24 bg-white">
        <div className="learning-lane px-margin-mobile grid grid-cols-1 md:grid-cols-2 gap-12 max-w-max-width mx-auto md:px-margin-desktop">
          {/* Card 1 */}
          <div className="bg-surface-container-low p-10 rounded-[32px] relative overflow-hidden flex flex-col justify-between border border-surface-container">
            <div className="relative z-10">
              <h3 className="text-headline-lg font-display text-charcoal mb-4 font-semibold">Private Tuition From Primary to A-Level</h3>
              <p className="text-body-lg text-on-surface-variant mb-8 font-sans">From Key Stage 1 numeracy to A-Level Further Maths, our tutors
                teach the specification your child&apos;s school actually follows. That includes the years most families overlook,
                Key Stage 3, where the gaps that later cost grades at GCSE quietly open up.</p>
              <div className="flex flex-wrap gap-2 mb-8">
                {['Maths', 'Science', 'English', 'Physics', 'Chemistry', 'Biology'].map((chip) => (
                  <span key={chip} className="bg-primary text-white px-4 py-2 rounded-full text-xs font-semibold shadow-sm">
                    {chip}
                  </span>
                ))}
              </div>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-body-md font-medium text-charcoal">Personalised Learning Plans</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-body-md font-medium text-charcoal">Concept-First Instruction</span>
                </li>
              </ul>
            </div>
            <div className="absolute bottom-0 right-0 opacity-10 scale-150 transform translate-x-8 translate-y-8 text-primary">
              <BookOpen className="w-32 h-32" />
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-primary p-6 sm:p-10 rounded-[32px] text-white relative overflow-hidden flex flex-col justify-between shadow-lg max-w-full box-border">
            <div className="relative z-10 min-w-0 max-w-full">
              <h3 className="text-headline-lg font-display mb-4 font-semibold text-white break-words">Entrance Exams, GCSE and A-Level Preparation</h3>
              <p className="text-body-lg text-primary-fixed-dim mb-8 break-words">Exam technique is a separate skill from knowing the material.
                 Our tutors cover mark scheme strategy, timed past paper practice, tiering decisions and the
                 subject choices that shape a UCAS application long before Year 13. <br></br>Covered: 11+ and 13+ · Key Stage 3 · GCSE and IGCSE
                  · A-Level and Further Maths · National 5, Higher and Advanced Higher · Mocks, resits and revision</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 min-w-0 max-w-full">
                <div className="bg-white/10 p-4 rounded-xl border border-white/20 min-w-0 max-w-full overflow-hidden box-border">
                  <p className="text-[10px] font-bold opacity-80 uppercase tracking-wider min-w-0 break-words">Every Exam Board</p>
                  <p className="text-headline-md font-bold min-w-0 break-words [overflow-wrap:break-word] [word-break:break-word]">AQA · Edexcel · OCR · WJEC · CCEA</p>
                </div>
                <div className="bg-white/10 p-4 rounded-xl border border-white/20 min-w-0 max-w-full overflow-hidden box-border">
                  <p className="text-[10px] font-bold opacity-80 uppercase tracking-wider min-w-0 break-words">All Four Nations</p>
                  <p className="text-headline-md font-bold min-w-0 break-words [overflow-wrap:break-word] [word-break:break-word]">Specification-Matched Tutors</p>
                </div>
              </div>
              <button 
                onClick={() => navigateTo('about')}
                className="bg-lime-green text-charcoal px-6 py-4 rounded-xl font-bold w-full hover:scale-[1.02] transition-transform cursor-pointer"
              >
                Find Your Subject Expert
              </button>
            </div>
            <div className="absolute bottom-0 right-0 opacity-10 scale-150 transform translate-x-8 translate-y-8 text-white pointer-events-none">
              <Edit className="w-32 h-32" />
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
            <span>Four Nations, Four Systems</span>
          </div>
          <h3 className="font-headline-lg text-headline-lg text-charcoal mb-4 font-semibold">Tutoring Matched to Your Nation and Exam Board</h3>
          <p className="text-body-lg">
            The United Kingdom does not have one education system. It has four, each with its own curriculum, its own
            qualifications and its own regulator, and two of them are currently mid-reform. A tutor who assumes every
            student sits an English GCSE is a tutor learning on your time. We match by nation, stage and awarding body.
             <br></br>
             <strong>Online tutors available nationwide:</strong> London, Manchester, Birmingham, Glasgow, Cardiff, Belfast, Edinburgh and everywhere between.
             <br></br>
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 sm:gap-8">
            {[
              { name: 'England : National Curriculum, Key Stages 1 to 4, GCSEs graded 9 to 1 and A-Levels'},
              { name: 'Scotland : Curriculum for Excellence, National 5, Higher and Advanced Higher'},
              { name: 'Wales : Curriculum for Wales and the new Made-for-Wales GCSEs'},
              { name: 'Northern Ireland : CCEA curriculum, GCSEs and A-Levels' },
              { name: 'Independent Schools : 11+, 13+, Common Entrance and scholarship papers'},
              { name: 'Post-16 : Sixth form, A-Levels, GCSE resits and UCAS planning'}
            ].map((country) => (
              <div key={country.name} className="flex flex-col items-center gap-4 group cursor-pointer">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center border border-surface-container group-hover:bg-royal-purple group-hover:border-royal-purple group-hover:text-white transition-all duration-300 shadow-sm group-hover:shadow-lg group-hover:-translate-y-1">
                  <MapPin className="w-6 h-6 text-royal-purple group-hover:text-white transition-colors" />
                </div>
                <span className="font-label-md text-label-md text-on-surface-variant group-hover:text-royal-purple font-medium transition-colors">{country.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Getting Started in 3 Steps */}
      <section className="py-24 bg-soft-gray border-y border-surface-container overflow-hidden">
        <div className="learning-lane px-margin-mobile max-w-max-width mx-auto md:px-margin-desktop">
          <div className="text-center mb-16">
            <h2 className="text-headline-lg md:text-display-lg-mobile font-display text-charcoal font-bold">Get Started in 3 Steps</h2>
          </div>
          <div className="relative">
            <div className="hidden md:block absolute top-12 left-0 w-full h-1 bg-outline-variant/30"></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
              <div className="text-center group">
                <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-ambient border-4 border-royal-purple group-hover:scale-110 transition-transform">
                  <span className="text-3xl font-bold text-royal-purple">1</span>
                </div>
                <h4 className="text-headline-md font-bold mb-2 text-charcoal">Book Your Trial</h4>
                <p className="text-body-md text-on-surface-variant">Tell us the subject, the year group and the exam board, and what&apos;s going wrong.
                   Pick a time that suits. The first session costs nothing.</p>
              </div>
              <div className="text-center group">
                <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-ambient border-4 border-royal-purple group-hover:scale-110 transition-transform">
                  <span className="text-3xl font-bold text-royal-purple">2</span>
                </div>
                <h4 className="text-headline-md font-bold mb-2 text-charcoal">Meet Your Match</h4>
                <p className="text-body-md text-on-surface-variant">We pair your child with a tutor who knows their specification and suits how they learn.
                  If the fit isn&apos;t right, we&apos;ll rematch at no charge.</p>
              </div>
              <div className="text-center group">
                <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-ambient border-4 border-royal-purple group-hover:scale-110 transition-transform">
                  <span className="text-3xl font-bold text-royal-purple">3</span>
                </div>
                <h4 className="text-headline-md font-bold mb-2 text-charcoal">Watch It Start to Land</h4>
                <p className="text-body-md text-on-surface-variant">Sessions begin at times you choose. You&apos;ll get written progress after every lesson,
                   and most families notice a shift in confidence well before the mocks.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Free Trial Form Section */}
          <section className="py-24 bg-white">
            <div className="learning-lane px-margin-mobile max-w-max-width mx-auto md:px-margin-desktop">
              <div className="bg-surface-container-low rounded-[40px] p-8 md:p-16 flex flex-col lg:flex-row gap-12 items-center border border-surface-container">
                <div className="lg:w-1/2 space-y-6">
                  <h2 className="text-display-lg-mobile md:text-headline-lg font-display text-charcoal font-semibold">Try a Lesson Before You Decide Anything</h2>
                  <p className="text-body-lg text-on-surface-variant">Your first 30-minute session is free, and no card is required to book it. It exists so we can find out where your student actually is, and so you can watch a tutor work with them, before anyone commits to anything.</p>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-lime-green" />
                      <span className="font-medium text-charcoal">No credit card required</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-lime-green" />
                      <span className="font-medium text-charcoal">Free assessment included</span>
                    </div>
                     <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-lime-green" />
                      <span className="font-medium text-charcoal">No obligation to continue</span>
                    </div>
                  </div>
                </div>
                
               {/* GHL Free Trial Form (country-aware) */}
    <div className="bg-white p-6 md:p-8 rounded-[28px] shadow-[0_18px_45px_rgba(15,23,42,0.08)] border border-slate-200 w-full max-w-[520px] ml-auto relative min-h-[600px]">
      <iframe
        key={formId}
        src={`https://link.msgsndr.com/widget/form/${formId}`}
        style={{ width: '100%', height: '100%', border: 'none', borderRadius: '3px', position: 'absolute', inset: 0 }}
        id={`inline-${formId}`}
        data-layout="{'id':'INLINE'}"
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name="Free Trial Form"
        data-height="600"
        data-layout-iframe-id={`inline-${formId}`}
        data-form-id={formId}
        title="Free Trial Form"
      />
    </div>
              </div>
            </div>
          </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white border-t border-surface-container">
        <div className="learning-lane px-margin-mobile max-w-max-width mx-auto md:px-margin-desktop">
          <h2 className="text-headline-lg font-display text-charcoal mb-12 text-center font-bold">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, idx) => (
              <div 
                key={idx} 
                className={`accordion-item bg-soft-gray rounded-2xl border transition-all cursor-pointer ${
                  activeFaq === idx ? 'border-royal-purple shadow-ambient' : 'border-outline-variant/30'
                }`}
                onClick={() => toggleFaq(idx)}
              >
                <div className="flex justify-between items-center p-6">
                  <h4 className="text-body-lg font-bold text-charcoal">{faq.q}</h4>
                  <LigatureIcon name="expand_more" className={`transition-transform duration-200 ${activeFaq === idx ? 'rotate-180 text-primary' : 'text-charcoal'}`} />
                </div>
                {activeFaq === idx && (
                  <div className="px-6 pb-6 text-on-surface-variant text-body-md animate-fade-in">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}