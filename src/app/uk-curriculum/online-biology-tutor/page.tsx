'use client';

import React from 'react';
import type { ActivePage } from '@/lib/types';
import { Check, CheckCircle2, Clock3, DollarSign, Star } from 'lucide-react';

interface SubjectComponentProps {
  onNavigate: (page: ActivePage, subjectTitle?: string) => void;
}

export default function UKBiologyTutorContent({ onNavigate }: SubjectComponentProps) {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-primary-fixed">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-white text-royal-purple text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
                Subject Tutoring
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-on-primary-fixed mb-6 leading-tight">
                Online Biology Tutor <br className="hidden md:block" />in the UK
              </h1>
              <p className="text-lg text-on-primary-fixed/80 mb-8 max-w-xl">
                Get the biology help you need right now from an expert <strong>Online Biology Tutor in the UK</strong>. Whether it&apos;s Key Stage 3 basics, GCSE Biology (Foundation or Higher tier), or A-Level Biology, our specialists work as an online tutor for homework and test preparation, covering cell biology, genetics, and ecology through personalised one-to-one tutoring mapped to the UK curriculum from Key Stage 3 through to A-Level.
              </p>
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => onNavigate('trial')}
                  className="bg-charcoal text-white px-8 py-3.5 rounded-full font-semibold hover:bg-charcoal/90 transition-colors"
                >
                  Book a Free Trial Lesson
                </button>
                <button
                  onClick={() => onNavigate('pricing')}
                  className="bg-white text-royal-purple px-8 py-3.5 rounded-full font-semibold hover:bg-soft-gray transition-colors"
                >
                  View UK Pricing
                </button>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&q=80"
                alt="Online biology tutor teaching a UK student"
                className="rounded-2xl shadow-2xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-16 md:py-20">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4 text-center">Why Choose Math Make Smart for UK Biology?</h2>
          <p className="text-on-surface-variant text-center max-w-2xl mx-auto mb-12">Stop stressing over cell diagrams, exam-board terminology, and required practicals. We provide dedicated virtual biology tutoring built around the UK curriculum and every major exam board.</p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-surface-container-low rounded-2xl p-8">
              <div className="w-12 h-12 bg-lime-green rounded-xl flex items-center justify-center mb-5">
                <Clock3 className="w-6 h-6 text-charcoal" />
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-3">Flexible Timings &amp; Scheduling</h3>
              <p className="text-on-surface-variant">Book live interactive sessions around school clubs, homework, and revision timetables, with slots that suit families across every UK time zone.</p>
            </div>
            <div className="bg-surface-container-low rounded-2xl p-8">
              <div className="w-12 h-12 bg-lime-green rounded-xl flex items-center justify-center mb-5">
                <DollarSign className="w-6 h-6 text-charcoal" />
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-3">Affordable Rates &amp; Packages</h3>
              <p className="text-on-surface-variant">High-quality private biology lessons without the steep hourly fees charged by local tuition centres.</p>
            </div>
            <div className="bg-surface-container-low rounded-2xl p-8">
              <div className="w-12 h-12 bg-lime-green rounded-xl flex items-center justify-center mb-5">
                <Star className="w-6 h-6 text-charcoal" />
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-3">Certified Biology Experts</h3>
              <p className="text-on-surface-variant">Work with verified subject specialists who know how to break down cell transport, genetics, and homeostasis in language that actually makes sense.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Focus */}
      <section className="py-16 md:py-20 bg-surface-container-low">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4 text-center">UK National Curriculum <br className="hidden md:block" />Key Stage 3 to A-Level Biology</h2>
          <p className="text-on-surface-variant text-center max-w-2xl mx-auto mb-12">From building solid Key Stage 3 foundations to exam-board-specific GCSE and A-Level preparation, our lesson plans follow the specifications set by AQA, Edexcel, and OCR.</p>
          <div className="grid md:grid-cols-12 gap-6">
            <div className="md:col-span-4 space-y-4">
              <div className="bg-white rounded-xl p-5 flex items-center gap-4">
                <span className="w-8 h-8 rounded-full bg-tertiary-fixed flex items-center justify-center font-bold text-sm flex-shrink-0">1</span>
                <span className="font-semibold text-charcoal">KS3 Biology Foundations (Years 7-9)</span>
              </div>
              <div className="bg-white rounded-xl p-5 flex items-center gap-4">
                <span className="w-8 h-8 rounded-full bg-tertiary-fixed flex items-center justify-center font-bold text-sm flex-shrink-0">2</span>
                <span className="font-semibold text-charcoal">GCSE Biology — Foundation &amp; Higher Tier (Years 10-11)</span>
              </div>
              <div className="bg-white rounded-xl p-5 flex items-center gap-4">
                <span className="w-8 h-8 rounded-full bg-tertiary-fixed flex items-center justify-center font-bold text-sm flex-shrink-0">3</span>
                <span className="font-semibold text-charcoal">A-Level Biology (Years 12-13)</span>
              </div>
            </div>
            <div className="md:col-span-8 grid sm:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 border border-outline-variant">
                <h4 className="font-bold text-charcoal mb-2">Cell Biology &amp; Organisation</h4>
                <p className="text-sm text-on-surface-variant">Cell structure, microscopy, transport across membranes, and how cells build up into tissues, organs, and organ systems.</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-outline-variant">
                <h4 className="font-bold text-charcoal mb-2">Inheritance, Variation &amp; Evolution</h4>
                <p className="text-sm text-on-surface-variant">DNA structure, protein synthesis, Mendelian genetics, genetic diagrams, and the evidence behind natural selection.</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-outline-variant">
                <h4 className="font-bold text-charcoal mb-2">Ecology &amp; Ecosystems</h4>
                <p className="text-sm text-on-surface-variant">Energy transfer through food chains, population sampling techniques, biodiversity, and human impact on the environment.</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-outline-variant">
                <h4 className="font-bold text-charcoal mb-2">Bioenergetics &amp; Homeostasis</h4>
                <p className="text-sm text-on-surface-variant">Photosynthesis, respiration, and how the nervous and hormonal systems keep the body in balance.</p>
              </div>
              <div className="bg-secondary-fixed-dim rounded-xl p-6 col-span-full flex flex-col sm:flex-row items-center justify-between gap-4">
                <h4 className="font-bold text-white text-lg">Ace Your GCSE or A-Level Biology Exam</h4>
                <button onClick={() => onNavigate('trial')} className="bg-white text-royal-purple px-6 py-2.5 rounded-full font-semibold whitespace-nowrap">Get Started</button>
              </div>
              <div className="col-span-full flex flex-wrap gap-2">
                {['Bioenergetics', 'Homeostasis & Response', 'Infection & Disease', 'Biological Molecules', 'Genetic Information', 'Required Practicals'].map((tag) => (
                  <span key={tag} className="bg-white border border-outline-variant text-charcoal text-sm px-4 py-2 rounded-full">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grade-by-Grade Lesson Plans */}
      <section className="py-16 md:py-20">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-12 text-center">UK Year-by-Year Biology Lesson Plans</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">KS3 Biology (Years 7-9)</h4>
              <p className="text-sm text-on-surface-variant">A grounding in cells, reproduction, healthy lifestyles, and simple ecosystems, delivered at a pace that builds real confidence before GCSE begins.</p>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">GCSE Biology Foundation Tier</h4>
              <p className="text-sm text-on-surface-variant">Covers cell biology, organisation, infection and response, bioenergetics, homeostasis, inheritance, and ecology at a level that secures grades 1 to 5.</p>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">GCSE Biology Higher Tier</h4>
              <p className="text-sm text-on-surface-variant">The full specification in greater depth, including extended calculations, more demanding six-mark answers, and the additional Higher-only content aimed at grades 4 to 9.</p>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">A-Level Biology (Years 12-13)</h4>
              <p className="text-sm text-on-surface-variant">Biological molecules, cell structure, genetic information, energy transfers, and environmental responses, with the statistical and essay-style demands universities expect.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Quality */}
      <section className="py-16 md:py-20 bg-surface-container-low">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop grid md:grid-cols-2 gap-12 items-center">
          <img src="https://images.unsplash.com/photo-1577896851231-70ef18881754?w=800&q=80" alt="UK Biology tutor conducting an interactive online tutoring session" className="rounded-2xl shadow-xl w-full h-auto object-cover" />
          <div>
            <span className="inline-block bg-lime-green text-charcoal font-bold px-4 py-1.5 rounded-full mb-4">99% Satisfaction Rate</span>
            <h2 className="text-3xl font-bold text-charcoal mb-6">Trusted by Families Across the UK</h2>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-royal-purple mt-0.5" /><span className="text-on-surface-variant">Fully DBS-Checked &amp; Vetted Educators</span></li>
              <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-royal-purple mt-0.5" /><span className="text-on-surface-variant">Graduates from Leading UK Universities</span></li>
              <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-royal-purple mt-0.5" /><span className="text-on-surface-variant">Specialists in GCSE and A-Level Biology Across Every Exam Board</span></li>
            </ul>
            <button onClick={() => onNavigate('about')} className="bg-charcoal text-white px-8 py-3.5 rounded-full font-semibold">Learn More About Us</button>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 md:py-20">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-12 text-center">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">Should my child sit Foundation or Higher tier for GCSE Biology?</h4>
              <p className="text-on-surface-variant text-sm">It depends on where they&apos;re currently working and what grade they&apos;re aiming for. Foundation tier caps out at a grade 5, while Higher tier opens the door to grades 4 through 9 but includes tougher content and steeper questions. Our tutors can review recent test scores and mock results with you and recommend the tier that gives your child the best realistic shot, then adjust if things change over the year.</p>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">How do you cover required practicals when tutoring is online?</h4>
              <p className="text-on-surface-variant text-sm">We can&apos;t run the physical experiment through a screen, so instead we focus on what actually gets marked in the exam: labelled method diagrams, spotting sources of error, interpreting results tables, and answering the practical-based questions that show up on every paper. Most students find this is where their marks were slipping anyway, so it&apos;s rarely a compromise.</p>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">What does A-Level Biology add on top of GCSE?</h4>
              <p className="text-on-surface-variant text-sm">A-Level goes considerably deeper into biochemistry and molecular processes, introduces proper statistical analysis for ecology and genetics data, and requires students to complete practical work that counts toward a separate practical endorsement. The jump in Year 12 catches a lot of students off guard, so we spend the first few sessions making sure the underlying GCSE knowledge is solid before building on it.</p>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">Is Combined Science Biology the same as separate GCSE Biology?</h4>
              <p className="text-on-surface-variant text-sm">Not quite. Triple Science (separate GCSE Biology) covers extra content and more depth than the biology portion of Combined Science, and it&apos;s assessed with its own set of exam papers. If your child is still deciding between the two, or wants a broader view across biology, chemistry, and physics before committing, it&apos;s worth a look at our <button type="button" onClick={() => onNavigate('subject', 'Science')} className="text-royal-purple font-semibold underline">Science tutoring page</button> as well.</p>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">My child is struggling with just one topic, like genetics or homeostasis. Can you help with that alone?</h4>
              <p className="text-on-surface-variant text-sm">Definitely. Plenty of families come to us to fix one stubborn topic rather than commit to a full course, and a tutor can build a short, focused block of lessons around exactly that gap. Once it&apos;s sorted, some students stop there and others carry on for ongoing support through the rest of the specification.</p>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">How do online 1-on-1 biology tutoring sessions actually work?</h4>
              <p className="text-on-surface-variant text-sm">Lessons run on our secure platform with a shared digital whiteboard, diagram annotation, and past-paper questions pulled from the exact exam board your child is sitting. It feels much closer to sitting beside a tutor at a desk than a typical video call.</p>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">Is there a free trial lesson available?</h4>
              <p className="text-on-surface-variant text-sm">Yes. You can book a complimentary trial lesson with one of our biology tutors with no upfront payment and no obligation to continue afterwards.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Book Your Free Trial Lesson */}
      <section className="py-16 md:py-20 bg-surface-container-low">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4 text-center">Book Your Free Trial Lesson</h2>
          <p className="text-on-surface-variant text-center max-w-2xl mx-auto mb-10">Fill in a few details below and we&apos;ll match your child with the right biology tutor for their key stage, tier, and exam board.</p>
          <div id="ghl-form-wrap" >
            <iframe className="w-full h-[700px] border-none rounded-xl"
                    id="ghl-dynamic-form"
                    src="https://api.leadconnectorhq.com/widget/form/KoegIzV5zV9qvxp4I6O7?notrack=true"
                    data-layout="{'id':'INLINE'}"
                    data-form-name="Contact Us"
                    data-height="543"
                    data-layout-iframe-id="ghl-dynamic-form"
                    data-form-id="KoegIzV5zV9qvxp4I6O7"
                    title="Contact Us">
            </iframe>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-20">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="bg-royal-purple rounded-3xl p-10 md:p-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Boost Your Biology Grades?</h2>
            <p className="text-white/80 mb-8 max-w-xl mx-auto">Build real understanding of cell biology, genetics, and ecology, and go into every exam with confidence. Join hundreds of students across the UK reaching their full potential in biology.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <button onClick={() => onNavigate('trial')} className="bg-white text-royal-purple px-8 py-3.5 rounded-full font-semibold">Book a Free Trial Lesson</button>
              <button onClick={() => onNavigate('pricing')} className="border-2 border-white text-white px-8 py-3.5 rounded-full font-semibold">View Pricing</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}