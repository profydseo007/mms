'use client';

import React, { useState } from 'react';
import { ActivePage } from '@/lib/types';

interface TestPrepProps {
  onNavigate: (page: ActivePage, subjectTitle?: string) => void;
}

export default function ThirteenPlusPrep({ onNavigate }: TestPrepProps) {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    country: 'United Kingdom',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.fullName && formData.email) {
      setFormSubmitted(true);
    }
  };

  return (
    <div className="bg-background text-on-surface font-body-md selection:bg-primary-fixed antialiased">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 bg-white">
        <div className="learning-lane px-margin-mobile md:px-margin-desktop grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-max-width mx-auto">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary-container text-on-secondary-container rounded-full text-label-sm font-label-sm mb-6">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
              UK Independent &amp; Grammar Schools
            </div>
            <h1 className="text-display-lg-mobile md:text-display-lg font-display-lg text-charcoal mb-6 font-bold">
              13+ Test Preparation by Expert Tutors
            </h1>
            <p className="text-body-lg font-body-lg text-on-surface-variant mb-10 max-w-lg">
              The essential bridge to premium Year 9 entry. We provide patient, personalized guidance to help students master academic readiness and excel in high-stakes admissions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button
                onClick={() => onNavigate('trial')}
                className="bg-royal-purple text-on-primary px-8 py-4 rounded-xl font-headline-md text-headline-md hover:bg-primary transition-colors shadow-ambient cursor-pointer font-medium"
              >
                Book a Free Trial Lesson
              </button>
              <button
                onClick={() => onNavigate('curriculum')}
                className="border-2 border-royal-purple text-royal-purple px-8 py-4 rounded-xl font-headline-md text-headline-md hover:bg-soft-gray transition-colors cursor-pointer font-medium"
              >
                View Curriculum
              </button>
            </div>
            <div className="flex flex-wrap gap-4">
              <div className="bg-white p-4 rounded-xl shadow-ambient flex items-center gap-3 border border-outline-variant">
                <div className="w-10 h-10 bg-lime-green rounded-lg flex items-center justify-center text-charcoal">
                  <span className="material-symbols-outlined">verified</span>
                </div>
                <div>
                  <p className="text-label-sm font-label-sm text-on-surface-variant uppercase tracking-wider">Success Rate</p>
                  <p className="text-body-md font-bold text-charcoal">94% Year 9 Placements</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative hidden md:block">
            <div className="absolute -top-12 -right-12 w-96 h-96 bg-primary-fixed rounded-full blur-3xl opacity-30"></div>
            <div className="relative z-10 rounded-[32px] overflow-hidden shadow-dropdown">
              <img
                className="w-full aspect-[4/3] object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAfWBfugthFKEF1_Qk1gpvy3QVbw2z3OI-33zxE-w2H8T9xfPd4cKjreQqNIQm02iQYoTnGhMWfAkUnxqbneQjOTRCscR5CTkCPtu42Kpp_-gaTzh8YEERIUM5Hf-xrSPrtVfiBBCn5cRfnFBUU_8aJ1cknLLAUAIF_2VE6U77ulCU5jP4i4UnmTJjovcSL3-NpILDEPem8rTRzQDBxnvz-pLrI5d_6NjuC4JgrgO5Vpj_9l3tVaeNkNvqQ8trtPsjUmKM"
                alt="Student preparing for 13+ exam"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-dropdown border border-outline-variant z-20 max-w-[240px]">
              <div className="flex items-center gap-1 mb-2">
                <span className="material-symbols-outlined text-lime-green" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
                <span className="material-symbols-outlined text-lime-green" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
                <span className="material-symbols-outlined text-lime-green" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
                <span className="material-symbols-outlined text-lime-green" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
                <span className="material-symbols-outlined text-lime-green" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
              </div>
              <p className="italic text-on-surface-variant text-body-md">"The 13+ preparation was a game-changer for my daughter's senior school entry."</p>
              <p className="mt-3 font-bold text-charcoal text-label-md">— James W., Parent</p>
            </div>
          </div>
        </div>
      </section>

      {/* Intro: What is the 13+? */}
      <section className="py-24 bg-soft-gray">
        <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-headline-lg font-display-lg text-charcoal mb-6 font-bold">What is the 13+ Exam?</h2>
              <p className="text-body-lg text-on-surface-variant mb-6 leading-relaxed">
                The 13 Plus exam (13+) is a critical entrance assessment used by independent and grammar schools in the UK. It evaluates students around age 13 for admission into Year 9, assessing academic readiness for the rigorous senior school curriculum.
              </p>
              <p className="text-body-md text-on-surface-variant leading-relaxed">
                It typically tests core academic skills such as English, mathematics, and science, alongside problem-solving ability and analytical thinking.
              </p>
            </div>
            <div className="bg-white p-10 rounded-[32px] shadow-ambient">
              <h3 className="text-headline-md font-display-lg text-charcoal mb-8 font-bold">Why the 13+ Matters</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary-fixed rounded-xl flex items-center justify-center flex-shrink-0 text-primary">
                    <span className="material-symbols-outlined">school</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-charcoal">School Admissions</h4>
                    <p className="text-body-md text-on-surface-variant">Direct gateway to elite independent senior schools.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary-fixed rounded-xl flex items-center justify-center flex-shrink-0 text-primary">
                    <span className="material-symbols-outlined">psychology</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-charcoal">Subject Proficiency</h4>
                    <p className="text-body-md text-on-surface-variant">Validates mastery of core academic achievements required by top schools.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary-fixed rounded-xl flex items-center justify-center flex-shrink-0 text-primary">
                    <span className="material-symbols-outlined">assignment_ind</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-charcoal">Placement</h4>
                    <p className="text-body-md text-on-surface-variant">Used to determine optimal class assignments and academic setting.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Subjects Breakdown */}
      <section className="py-24 bg-white">
        <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop text-center mb-16">
          <h2 className="text-headline-lg font-display-lg text-charcoal mb-4 font-bold">Core Subjects Breakdown</h2>
          <p className="text-body-lg text-on-surface-variant max-w-2xl mx-auto">Focused mastery across the fundamental disciplines required for senior school success.</p>
        </div>
        <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop grid md:grid-cols-3 gap-8">
          {/* English */}
          <div className="p-8 rounded-[24px] border border-outline-variant hover:shadow-dropdown transition-all group">
            <div className="w-16 h-16 bg-surface-container-low rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary-fixed transition-colors">
              <span className="material-symbols-outlined text-primary text-3xl">menu_book</span>
            </div>
            <h3 className="text-headline-md font-bold text-charcoal mb-4">English</h3>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-2 text-on-surface-variant">
                <span className="material-symbols-outlined text-lime-green text-sm" style={{ fontVariationSettings: '"FILL" 1' }}>check_circle</span> Comprehension &amp; Grammar
              </li>
              <li className="flex items-center gap-2 text-on-surface-variant">
                <span className="material-symbols-outlined text-lime-green text-sm" style={{ fontVariationSettings: '"FILL" 1' }}>check_circle</span> Creative Writing
              </li>
              <li className="flex items-center gap-2 text-on-surface-variant">
                <span className="material-symbols-outlined text-lime-green text-sm" style={{ fontVariationSettings: '"FILL" 1' }}>check_circle</span> 60 mins per paper
              </li>
            </ul>
            <div className="pt-6 border-t border-outline-variant">
              <p className="text-label-sm font-bold text-primary uppercase">Format</p>
              <p className="text-body-md text-charcoal font-medium">2 Papers | Essay &amp; Analysis</p>
            </div>
          </div>
          {/* Maths */}
          <div className="p-8 rounded-[24px] border border-outline-variant hover:shadow-dropdown transition-all group">
            <div className="w-16 h-16 bg-surface-container-low rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary-fixed transition-colors">
              <span className="material-symbols-outlined text-primary text-3xl">functions</span>
            </div>
            <h3 className="text-headline-md font-bold text-charcoal mb-4">Mathematics</h3>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-2 text-on-surface-variant">
                <span className="material-symbols-outlined text-lime-green text-sm" style={{ fontVariationSettings: '"FILL" 1' }}>check_circle</span> Arithmetic &amp; Geometry
              </li>
              <li className="flex items-center gap-2 text-on-surface-variant">
                <span className="material-symbols-outlined text-lime-green text-sm" style={{ fontVariationSettings: '"FILL" 1' }}>check_circle</span> Algebra &amp; Problem Solving
              </li>
              <li className="flex items-center gap-2 text-on-surface-variant">
                <span className="material-symbols-outlined text-lime-green text-sm" style={{ fontVariationSettings: '"FILL" 1' }}>check_circle</span> 60–90 mins per paper
              </li>
            </ul>
            <div className="pt-6 border-t border-outline-variant">
              <p className="text-label-sm font-bold text-primary uppercase">Format</p>
              <p className="text-body-md text-charcoal font-medium">1-2 Papers | Calculation-heavy</p>
            </div>
          </div>
          {/* Science */}
          <div className="p-8 rounded-[24px] border border-outline-variant hover:shadow-dropdown transition-all group">
            <div className="w-16 h-16 bg-surface-container-low rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary-fixed transition-colors">
              <span className="material-symbols-outlined text-primary text-3xl">science</span>
            </div>
            <h3 className="text-headline-md font-bold text-charcoal mb-4">Science</h3>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-2 text-on-surface-variant">
                <span className="material-symbols-outlined text-lime-green text-sm" style={{ fontVariationSettings: '"FILL" 1' }}>check_circle</span> Biology, Chemistry, Physics
              </li>
              <li className="flex items-center gap-2 text-on-surface-variant">
                <span className="material-symbols-outlined text-lime-green text-sm" style={{ fontVariationSettings: '"FILL" 1' }}>check_circle</span> Combined or Separate Papers
              </li>
              <li className="flex items-center gap-2 text-on-surface-variant">
                <span className="material-symbols-outlined text-lime-green text-sm" style={{ fontVariationSettings: '"FILL" 1' }}>check_circle</span> 60–75 mins combined
              </li>
            </ul>
            <div className="pt-6 border-t border-outline-variant">
              <p className="text-label-sm font-bold text-primary uppercase">Format</p>
              <p className="text-body-md text-charcoal font-medium">Mixed | Theory &amp; Practical</p>
            </div>
          </div>
        </div>
      </section>

      {/* Exam Pattern & Duration */}
      <section className="py-24 bg-soft-gray overflow-hidden">
        <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="bg-primary p-12 md:p-16 rounded-[40px] text-white relative">
            <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
              <div>
                <h2 className="text-headline-lg font-display-lg mb-6 font-bold">Exam Pattern &amp; Duration</h2>
                <p className="text-body-lg text-primary-fixed mb-10">The 13+ follows a standardized schedule, but sittings vary to accommodate different entry paths.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="bg-white/10 p-6 rounded-2xl border border-white/20">
                    <p className="text-label-sm font-bold uppercase opacity-70">Main Sitting</p>
                    <p className="text-headline-md font-bold">June</p>
                  </div>
                  <div className="bg-white/10 p-6 rounded-2xl border border-white/20">
                    <p className="text-label-sm font-bold uppercase opacity-70">Late Entry</p>
                    <p className="text-headline-md font-bold">Nov &amp; Jan</p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="bg-white/10 p-6 rounded-2xl border border-white/20 flex gap-4 items-center">
                  <span className="material-symbols-outlined text-lime-green text-3xl">list_alt</span>
                  <p className="text-body-md">Includes multiple-choice, short-answer, and extended essay responses.</p>
                </div>
                <div className="bg-white/10 p-6 rounded-2xl border border-white/20 flex gap-4 items-center">
                  <span className="material-symbols-outlined text-lime-green text-3xl">schedule</span>
                  <p className="text-body-md">Precise dates are determined by schools; we tailor prep to your specific target institution.</p>
                </div>
              </div>
            </div>
            <div className="absolute bottom-0 right-0 opacity-10 scale-150 transform translate-x-10 translate-y-10">
              <span className="material-symbols-outlined text-[160px]" style={{ fontVariationSettings: '"FILL" 1' }}>calendar_month</span>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Math Make Smart? */}
      <section className="py-24 bg-white">
        <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="text-center mb-16">
            <h2 className="text-headline-lg font-display-lg text-charcoal mb-4 font-bold">Why Choose Math Make Smart?</h2>
            <div className="w-20 h-1.5 bg-lime-green mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Value Prop 1 */}
            <div className="text-center p-6 bg-surface-container-low rounded-[24px] hover:bg-primary-fixed transition-colors">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-ambient">
                <span className="material-symbols-outlined text-primary text-3xl">person_search</span>
              </div>
              <h3 className="text-headline-md font-bold text-charcoal mb-3">Personalized Focus</h3>
              <p className="text-body-md text-on-surface-variant">Lessons adapted to individual strengths and unique learning styles.</p>
            </div>
            {/* Value Prop 2 */}
            <div className="text-center p-6 bg-surface-container-low rounded-[24px] hover:bg-primary-fixed transition-colors">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-ambient">
                <span className="material-symbols-outlined text-primary text-3xl">query_stats</span>
              </div>
              <h3 className="text-headline-md font-bold text-charcoal mb-3">Exam Strategy</h3>
              <p className="text-body-md text-on-surface-variant">Techniques to manage time and tackle complex paper structures effectively.</p>
            </div>
            {/* Value Prop 3 */}
            <div className="text-center p-6 bg-surface-container-low rounded-[24px] hover:bg-primary-fixed transition-colors">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-ambient">
                <span className="material-symbols-outlined text-primary text-3xl">sentiment_satisfied</span>
              </div>
              <h3 className="text-headline-md font-bold text-charcoal mb-3">Confidence Building</h3>
              <p className="text-body-md text-on-surface-variant">Emotional support to keep anxiety at bay during high-stakes exams.</p>
            </div>
            {/* Value Prop 4 */}
            <div className="text-center p-6 bg-surface-container-low rounded-[24px] hover:bg-primary-fixed transition-colors">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-ambient">
                <span className="material-symbols-outlined text-primary text-3xl">history_edu</span>
              </div>
              <h3 className="text-headline-md font-bold text-charcoal mb-3">Past Paper Mastery</h3>
              <p className="text-body-md text-on-surface-variant">Deep familiarity with actual exam formats and school-specific expectations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Lead Gen: Free Trial Form */}
      <section className="py-24 bg-white">
        <div className="learning-lane px-margin-mobile max-w-max-width mx-auto md:px-margin-desktop">
          <div className="bg-surface-container-low rounded-[40px] p-8 md:p-16 flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <h2 className="text-display-lg font-display-lg text-charcoal mb-6 font-bold">Ready to see the difference?</h2>
              <p className="text-body-lg text-on-surface-variant mb-8">Join thousands of families who have transformed their student's grades and confidence. Your first 30-minute session is on us.</p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-lime-green" style={{ fontVariationSettings: '"FILL" 1' }}>check_circle</span>
                  <span className="font-medium text-charcoal">No credit card required</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-lime-green" style={{ fontVariationSettings: '"FILL" 1' }}>check_circle</span>
                  <span className="font-medium text-charcoal">Free assessment included</span>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 w-full">
              <div className="bg-white p-8 md:p-10 rounded-[32px] shadow-dropdown border border-outline-variant">
                {formSubmitted ? (
                  <div className="text-center py-12 space-y-4">
                    <span className="material-symbols-outlined text-lime-green text-6xl">check_circle</span>
                    <h3 className="font-headline-md text-charcoal font-bold">Trial Requested!</h3>
                    <p className="text-on-surface-variant">Thank you <strong>{formData.fullName}</strong>. We have received your request for a 13+ trial session.</p>
                    <button
                      onClick={() => setFormSubmitted(false)}
                      className="bg-royal-purple text-on-primary px-6 py-2.5 rounded-xl font-medium hover:bg-primary transition-all cursor-pointer mt-4"
                    >
                      Submit Another Request
                    </button>
                  </div>
                ) : (
                  <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-label-md font-label-md text-charcoal mb-2 font-medium">Full Name</label>
                        <input
                          required
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-outline-variant focus:border-royal-purple focus:ring-2 focus:ring-royal-purple/20 outline-none transition-all"
                          placeholder="Student Name"
                          type="text"
                        />
                      </div>
                      <div>
                        <label className="block text-label-md font-label-md text-charcoal mb-2 font-medium">Phone Number</label>
                        <input
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-outline-variant focus:border-royal-purple focus:ring-2 focus:ring-royal-purple/20 outline-none transition-all"
                          placeholder="+44 7xxx xxxxxx"
                          type="tel"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-label-md font-label-md text-charcoal mb-2 font-medium">Parent Email</label>
                      <input
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-outline-variant focus:border-royal-purple focus:ring-2 focus:ring-royal-purple/20 outline-none transition-all"
                        placeholder="email@example.com"
                        type="email"
                      />
                    </div>
                    <div>
                      <label className="block text-label-md font-label-md text-charcoal mb-2 font-medium">Country</label>
                      <select
                        value={formData.country}
                        onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-outline-variant focus:border-royal-purple focus:ring-2 focus:ring-royal-purple/20 outline-none transition-all bg-white"
                      >
                        <option value="United Kingdom">United Kingdom</option>
                        <option value="USA">USA</option>
                        <option value="Canada">Canada</option>
                        <option value="Australia">Australia</option>
                        <option value="Ireland">Ireland</option>
                        <option value="New Zealand">New Zealand</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-label-md font-label-md text-charcoal mb-2 font-medium">Message (Optional)</label>
                      <textarea
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-outline-variant focus:border-royal-purple focus:ring-2 focus:ring-royal-purple/20 outline-none transition-all"
                        placeholder="Tell us about your child's needs..."
                        rows={3}
                      />
                    </div>
                    <button
                      className="w-full bg-royal-purple text-on-primary py-4 rounded-xl font-bold text-headline-md shadow-ambient hover:bg-primary transition-all active:scale-95 cursor-pointer"
                      type="submit"
                    >
                      Secure My Free Trial
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
