'use client';

import React, { useState, useEffect } from 'react';
import LigatureIcon from './LigatureIcon';
import { COUNTRY_FORM_IDS, COUNTRY_LABELS } from '@/lib/country';
import { useAppNavigate } from '@/lib/useAppNavigate';
import { Star, School, Users, CheckCircle, ArrowRight, BookOpen, Edit, Settings, Shield, Award, Calendar, Globe, MapPin } from 'lucide-react';

export default function HomeCA() {
  const { navigateTo } = useAppNavigate();
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [formId] = useState(COUNTRY_FORM_IDS.CA);
  const country = 'CA';

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
      q: 'How are your Canadian tutors selected?',
      a: 'Every tutor holds a degree in the subject they teach and clears a subject test, a mock lesson and a background check before working with a single student We also approve tutors by province, so a tutor cleared for Ontario Grade 12 Advanced Functions isn\'t automatically cleared for the Alberta Math 30-1 programme of study. The curriculum expectations differ, and so does the marking.'
    },
    {
      q: 'Is the free trial really free?',
      a: 'Yes. The first 30-minute session costs nothing, requires no card details and carries no obligation. We use it to assess where your child sits against their grade-level expectations and to talk through what they\'re working towards. If you decide not to continue, that\'s the end of it.'
    },
    {
      q: 'What if my student doesn\'t connect with the tutor?',
      a: 'Tell us and we\'ll rematch at no cost. Personality fit matters as much as credentials, and it isn\'t always right the first time. Rematching is routine and doesn\'t use up a session.'
    },
    {
      q: 'Do you cover my province\'s curriculum?',
      a: 'Yes. We tutor the Ontario curriculum, Alberta programmes of study, the BC curriculum, the Québec Education Program and the curricula of Manitoba, Saskatchewan and the Atlantic provinces. Tell us your province when you book and we\'ll match accordingly. We also support students in French immersion working through math and science in French.'
    },
    {
      q: 'Can you help with EQAO, diploma exams and provincial assessments?',
      a: 'Yes. We prepare students for EQAO in Grades 3, 6 and 9, the Grade 10 OSSLT, Alberta\'s Provincial Achievement Tests, BC\'s Graduation Assessments, and Grade 12 diploma exams. Alberta diploma exams in particular carry real weight — a student\'s exam result counts toward a substantial share of the final course mark, so timed practice under exam conditions matters more than extra content review.'
    },
     {
      q: 'How much does tutoring cost in Canada?',
      a: 'Rates are billed in Canadian dollars and depend on subject and grade, with Grade 11 and 12 courses priced above elementary and middle school support. There\'s no registration fee and no minimum contract, and lesson bundles lower the hourly rate. Full pricing is on our pricing page.'
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
              {COUNTRY_LABELS[country] ? `Serving Students Across ${COUNTRY_LABELS[country]}` : 'Enrollment Open'}
            </div>
            <h1 className="text-display-lg-mobile md:text-display-lg font-display text-charcoal leading-tight font-bold">
              Online Tutoring Services in Canada That Actually Click
            </h1>
            <p className="text-body-lg font-sans text-on-surface-variant max-w-lg">
              Personalized one-to-one online tutoring in math, English, science and French immersion, matched to your province's curriculum. From K–12 homework help to university-level support, we pair your child with a tutor who knows the difference between the Ontario and Alberta programmes of study and has the patience to keep going until the concept lands.
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
                  <p className="text-sm font-bold text-charcoal break-words">1k+ Ph.D &amp; Graduate Level</p>
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
              <p className="italic text-on-surface-variant text-sm break-words">"Her Grade 11 functions mark went from a 62 to a 78 over one semester. More than that, she stopped saying she was 'bad at math."</p>
              <p className="mt-3 font-bold text-charcoal text-xs break-words">— Sarah J., Parent, Ontario</p>
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
            <h4>What Makes a Canadian Tutor Worth Your Time</h4>
            <p>Canada doesn't have one curriculum, it has thirteen. A tutor who learned the Ontario programme 
              of study can't assume the same expectations apply in British Columbia or Alberta. We match on province first, then on temperament, because the tutor who suits a confident student racing ahead is rarely the one who suits a student who has quietly stopped raising their hand.</p>
            <div className="w-20 h-1.5 bg-lime-green mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Quality 1 */}
            <div className="group flex flex-col items-center text-center p-4">
              <div className="mb-6 inline-block p-4 rounded-2xl bg-surface-container-low group-hover:bg-primary-fixed transition-colors duration-300 relative">
                <School className="w-10 h-10 text-primary" />
                <div className="absolute top-2 right-2 w-3 h-3 bg-lime-green rounded-full"></div>
              </div>
              <h3 className="text-headline-md font-display mb-3 text-charcoal font-bold">Provincial Curriculum Expertise</h3>
              <p className="text-body-md text-on-surface-variant leading-relaxed">
                Every tutor holds a degree in their subject and is assessed on your child's provincial 
                curriculum, Ontario, Alberta, BC, Quebec or Atlantic Canada. We match to the standard your child is actually marked against, not a national average.
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
               Most students who fall behind aren't stuck on this week's lesson.
                They're missing something from two grades back. Our tutors are trained to find that gap and go back for it, however many times it takes.
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
              Every tutor clears a criminal record and vulnerable sector check before taking a student.
               Sessions are recorded to your account, and no contact happens off-platform. You can review any lesson whenever you like.
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
            <h4>An Online Tutoring Platform Built for Canadian Families</h4>
            <p className="text-body-lg text-on-surface-variant">The teaching is the hard part. Everything around it, booking, rescheduling, paying, tracking progress, should take under a minute. 
              Tutors are available across all six Canadian time zones, so a session works the same whether you're in St. John's or Victoria.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Grid Cards */}
            <div className="bg-white p-8 rounded-[24px] shadow-ambient hover:-translate-y-1 transition-transform duration-300 border border-surface-container">
              <Calendar className="w-8 h-8 text-primary mb-4" />
              <h4 className="text-headline-md font-bold mb-2 text-charcoal">Easy Scheduling</h4>
              <p className="text-body-md text-on-surface-variant">See live tutor availability in your own time zone and book around school, hockey and everything else. No back-and-forth email.</p>
            </div>
            <div className="bg-white p-8 rounded-[24px] shadow-ambient hover:-translate-y-1 transition-transform duration-300 border border-surface-container">
              <Settings className="w-8 h-8 text-primary mb-4" />
              <h4 className="text-headline-md font-bold mb-2 text-charcoal">Simple Rescheduling</h4>
              <p className="text-body-md text-on-surface-variant">Snow day, sick day, plans change. Move any session from your dashboard up to two hours ahead, at no cost.</p>
            </div>
            <div className="bg-white p-8 rounded-[24px] shadow-ambient hover:-translate-y-1 transition-transform duration-300 border border-surface-container">
              <Globe className="w-8 h-8 text-primary mb-4" />
              <h4 className="text-headline-md font-bold mb-2 text-charcoal">Integrated Secure Classroom</h4>
              <p className="text-body-md text-on-surface-variant">Lessons run in our own virtual classroom with a shared whiteboard built for math notation. Nothing to install, no third-party links to chase.</p>
            </div>
            <div className="bg-white p-8 rounded-[24px] shadow-ambient hover:-translate-y-1 transition-transform duration-300 border border-surface-container">
              <Users className="w-8 h-8 text-primary mb-4" />
              <h4 className="text-headline-md font-bold mb-2 text-charcoal">Recorded Sessions</h4>
              <p className="text-body-md text-on-surface-variant">Every lesson is saved to your account, so your child can replay an explanation before an exam and you can see exactly what was taught.</p>
            </div>
            <div className="bg-white p-8 rounded-[24px] shadow-ambient hover:-translate-y-1 transition-transform duration-300 border border-surface-container">
              <Award className="w-8 h-8 text-primary mb-4" />
              <h4 className="text-headline-md font-bold mb-2 text-charcoal">No Locked Contracts</h4>
              <p className="text-body-md text-on-surface-variant">Pay as you go or choose a monthly plan, billed in Canadian dollars. Cancel anytime, without a fee or a phone call.</p>
            </div>
            <div className="bg-white p-8 rounded-[24px] shadow-ambient hover:-translate-y-1 transition-transform duration-300 border border-surface-container">
              <Star className="w-8 h-8 text-primary mb-4" />
              <h4 className="text-headline-md font-bold mb-2 text-charcoal">Progress Reports</h4>
              <p className="text-body-md text-on-surface-variant">A written summary after every session, plus a bi-weekly report showing topics mastered and topics still needing work, in the language of your child's report card.</p>
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
              <h3 className="text-headline-lg font-display text-charcoal mb-4 font-semibold">Private K–12 and University Tutoring in Canada</h3>
              <p className="text-body-lg text-on-surface-variant mb-8 font-sans">
                From early numeracy to first-year university coursework, our online tutors provide personalized learning plans and teach the programme of study your school actually follows.
                 That includes support for students in French immersion who are learning math and science concepts in their second language, a place where confidence slips quietly and early.
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {['Mathematics', 'Science', 'English Language', 'Physics', 'Chemistry', 'Biology'].map((chip) => (
                  <span key={chip} className="bg-primary text-white px-4 py-2 rounded-full text-xs font-semibold shadow-sm">
                    {chip}
                  </span>
                ))}
              </div>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-body-md font-medium text-charcoal">Personalized Learning Plans</span>
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
              <h3 className="text-headline-lg font-display mb-4 font-semibold text-white break-words">Tutoring and Test Prep for Canadian Assessments</h3>
              <p className="text-body-lg text-primary-fixed-dim mb-8 break-words">Exam technique is a separate skill from knowing the material. 
                Our test preparation tutoring covers timed practice, marking-scheme strategy and the exact question styles your child's provincial assessment will use.
                <br></br>
                <strong>Assessments covered:</strong> EQAO (Grades 3, 6 and 9) · OSSLT · Alberta Provincial Achievement Tests · Grade 12 Diploma Exams · BC Graduation Assessments · SSAT · SAT/ACT for US applications
                </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 min-w-0 max-w-full">
                <div className="bg-white/10 p-4 rounded-xl border border-white/20 min-w-0 max-w-full overflow-hidden box-border">
                  <p className="text-[10px] font-bold opacity-80 uppercase tracking-wider min-w-0 break-words">EQAO / OSSLT</p>
                  <p className="text-headline-md font-bold min-w-0 break-words [overflow-wrap:break-word] [word-break:break-word]">+180pt Avg. Increase</p>
                </div>
                <div className="bg-white/10 p-4 rounded-xl border border-white/20 min-w-0 max-w-full overflow-hidden box-border">
                  <p className="text-[10px] font-bold opacity-80 uppercase tracking-wider min-w-0 break-words">English Grades</p>
                  <p className="text-headline-md font-bold min-w-0 break-words [overflow-wrap:break-word] [word-break:break-word]">88% GPA Improvement</p>
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
            <span>Coast to Coast, Every Time Zone</span>
          </div>
          <h3 className="font-headline-lg text-headline-lg text-charcoal mb-4 font-semibold">Tutoring Matched to Your Provincial Curriculum</h3>
          <p className="text-body-lg">
            A tutor who doesn't know your province's expectations is a tutor learning on your time. We staff by province,
             so every student is taught by someone who knows the curriculum documents, the assessment format and the marking standards they'll actually face.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 sm:gap-8">
            {[
              { name: 'Ontario : Ontario curriculum, EQAO, OSSLT and the OSSD' },
              { name: 'Alberta : Alberta programmes of study, PATs and Grade 12 diploma exams'},
              { name: 'British Columbia : BC curriculum and Graduation Numeracy and Literacy Assessments'},
              { name: 'Quebec : Québec Education Program and CEGEP preparation'},
              { name: 'Manitoba & Saskatchewan : Provincial curricula and Grade 12 departmental exams'},
              { name: 'Atlantic Canada : Nova Scotia, New Brunswick, PEI and Newfoundland and Labrador'}
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
                <p className="text-body-md text-on-surface-variant">Tell us the subject, the grade and the province, and what's going wrong. Pick a time that works in your time zone. The first session costs nothing.</p>
              </div>
              <div className="text-center group">
                <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-ambient border-4 border-royal-purple group-hover:scale-110 transition-transform">
                  <span className="text-3xl font-bold text-royal-purple">2</span>
                </div>
                <h4 className="text-headline-md font-bold mb-2 text-charcoal">Meet Your Match</h4>
                <p className="text-body-md text-on-surface-variant">We pair your child with a tutor who knows their provincial curriculum and suits how they learn. If the fit isn't right, we'll rematch at no charge.</p>
              </div>
              <div className="text-center group">
                <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-ambient border-4 border-royal-purple group-hover:scale-110 transition-transform">
                  <span className="text-3xl font-bold text-royal-purple">3</span>
                </div>
                <h4 className="text-headline-md font-bold mb-2 text-charcoal">Watch It Start to Land</h4>
                <p className="text-body-md text-on-surface-variant">Sessions begin at times you choose. You'll get written progress after every lesson, and most families notice a shift in confidence before it shows up on a report card.</p>
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