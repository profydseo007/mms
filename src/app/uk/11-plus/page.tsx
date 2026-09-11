'use client';

import React, { useState } from 'react';
import { useAppNavigate } from '@/lib/useAppNavigate';
import {
  BarChart3,
  BookOpen,
  Calculator,
  CalendarDays,
  Check,
  CheckCircle2,
  CreditCard,
  FileText,
  History,
  MessageCircle,
  Shapes,
  School,
  Smile,
  Sparkles,
  Star,
  TrendingUp,
  UserRound,
  Clock3,
} from 'lucide-react';

export default function UKElevenPlusPage() {
  const { navigateTo } = useAppNavigate();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    country: 'UK',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.fullName && formData.email) {
      setFormSubmitted(true);
    }
  };

  return (
    <div className="bg-surface text-on-background font-body-md text-body-md overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center py-16 overflow-hidden">
        <div className="container mx-auto px-margin-mobile md:px-margin-desktop max-w-max-width relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-gutter items-center">
            <div className="space-y-8">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-label-md text-label-md">
                UK SELECTIVE SCHOOL ENTRY
              </span>
              <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-charcoal leading-tight font-bold">
                11+ Test preparation by <span className="text-royal-purple">expert tutors</span> in the UK
              </h1>
              <p className="text-on-surface-variant font-body-lg text-body-lg max-w-xl">
                Navigate the significant shift in your child&apos;s learning process. Expert-led guidance for entry into grammar schools and elite selective institutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => navigateTo('trial')}
                  className="bg-royal-purple text-on-primary px-8 py-4 rounded-xl font-headline-md text-headline-md hover:shadow-xl transition-all cursor-pointer font-medium"
                >
                  Book a Free Trial Lesson
                </button>
                <button
                  onClick={() => navigateTo('curriculum')}
                  className="border-2 border-royal-purple text-royal-purple px-8 py-4 rounded-xl font-headline-md text-headline-md hover:bg-royal-purple/5 transition-all cursor-pointer font-medium"
                >
                  View Curriculum
                </button>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="rounded-3xl overflow-hidden shadow-2xl relative">
                <img
                  className="w-full h-[500px] object-cover"
                  alt="A diverse group of primary school aged students in a high-tech classroom"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCot5dXwzWPE9Qa-FfwoAPnDVTHq5J8Svg3B-YNge07dQMsT2Au8TlIwTgRJxdhK5TnFiJ-gEspkVgbdmLSFxStv1n1erNn5R6euukMdOqyenO9h6Xuqb9XrtzWO3fQbhaKlHrFS29QJNIhSdj6UBjJxtmiMiR_DUoNdzEL_5SypQ8qMjJfheFFqRJdnt5--77dxNNbVLWh8aJM0f4mvV4j9FzXCp6_sFZzD9FQrbW_Tji_4tfQ-vL8dUXYHE9nX0j8tUmmgRE7-0TmftE"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl max-w-xs border border-outline-variant/30">
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-10 h-10 rounded-full bg-lime-green flex items-center justify-center text-on-secondary">
                    <CheckCircle2 size={20} aria-hidden="true" />
                  </div>
                  <span className="font-headline-md text-charcoal font-bold">Proven Results</span>
                </div>
                <p className="text-on-surface-variant text-label-md">80% pass rate across selective boards.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section: Importance */}
      <section className="py-24 bg-soft-gray">
        <div className="container mx-auto px-margin-mobile md:px-margin-desktop max-w-max-width">
          <div className="flex flex-col lg:flex-row gap-gutter items-center">
            <div className="lg:w-1/2 space-y-6">
              <h2 className="font-headline-lg text-headline-lg text-charcoal font-bold">Why is the 11+ exam important?</h2>
              <p className="text-on-surface-variant font-body-md leading-relaxed">
                Sat by students in Year 6 (aged 10-11), the 11+ exam is the gateway to the UK&apos;s grammar and independent school system. It evaluates numerical ability, English, and reasoning faculties during a pivotal academic transition.
              </p>
            </div>
            <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
              <div className="p-8 bg-white rounded-2xl shadow-[0px_4px_20px_rgba(0,0,0,0.05)] border-l-4 border-royal-purple">
                <div className="text-display-lg text-royal-purple font-bold">100k</div>
                <div className="text-charcoal font-headline-md font-bold">Applicants annually</div>
              </div>
              <div className="p-8 bg-white rounded-2xl shadow-[0px_4px_20px_rgba(0,0,0,0.05)] border-l-4 border-lime-green">
                <div className="text-display-lg text-secondary font-bold">15,000</div>
                <div className="text-charcoal font-headline-md font-bold">Available spaces</div>
              </div>
            </div>
          </div>
          <div className="mt-12 p-8 bg-white/70 backdrop-blur-md border border-outline-variant/20 rounded-2xl text-center">
            <p className="text-on-surface-variant italic">
              &quot;While about 80% of students pass, scoring the required grades doesn&apos;t guarantee admission. Interview performance and household location play critical roles.&quot;
            </p>
          </div>
        </div>
      </section>

      {/* Bento Grid: Exam Boards */}
      <section className="py-24">
        <div className="container mx-auto px-margin-mobile md:px-margin-desktop max-w-max-width">
          <div className="text-center mb-16 space-y-4">
            <h2 className="font-display-lg text-headline-lg md:text-display-lg text-charcoal font-bold">Who conducts the 11+ test?</h2>
            <p className="text-on-surface-variant max-w-2xl mx-auto">Different boards have distinct methodologies. Understanding your target school&apos;s board is essential for effective preparation.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* GL Assessment */}
            <div className="group p-8 bg-white rounded-2xl shadow-[0px_4px_20px_rgba(0,0,0,0.05)] border border-transparent hover:border-royal-purple/30 transition-all flex flex-col">
              <div className="w-16 h-16 bg-primary-fixed rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <BookOpen size={30} className="text-royal-purple" aria-hidden="true" />
              </div>
              <h3 className="font-headline-lg text-headline-lg text-charcoal mb-4 font-bold">GL Assessments</h3>
              <p className="text-on-surface-variant mb-6 flex-grow">Content-based tests widely used in regions like Kent and Buckinghamshire. Multiple-choice formats focusing on curriculum-based knowledge and pattern recognition.</p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-label-md text-royal-purple font-medium">
                  <Check size={16} aria-hidden="true" />
                  <span>Verbal &amp; Non-Verbal</span>
                </div>
                <div className="flex items-center gap-2 text-label-md text-royal-purple font-medium">
                  <Check size={16} aria-hidden="true" />
                  <span>Maths &amp; English</span>
                </div>
              </div>
            </div>
            {/* CEM */}
            <div className="group p-8 bg-white rounded-2xl shadow-[0px_4px_20px_rgba(0,0,0,0.05)] border border-transparent hover:border-royal-purple/30 transition-all flex flex-col">
              <div className="w-16 h-16 bg-secondary-container rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Sparkles size={30} className="text-secondary" aria-hidden="true" />
              </div>
              <h3 className="font-headline-lg text-headline-lg text-charcoal mb-4 font-bold">CEM (Cambridge)</h3>
              <p className="text-on-surface-variant mb-6 flex-grow">Aptitude-based assessments designed to be &quot;tutor-proof.&quot; Focuses on adaptive thinking, reasoning, and real-world problem solving with unpredictable formats.</p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-label-md text-secondary font-medium">
                  <Check size={16} aria-hidden="true" />
                  <span>Ability-based</span>
                </div>
                <div className="flex items-center gap-2 text-label-md text-secondary font-medium">
                  <Check size={16} aria-hidden="true" />
                  <span>Mixed Formats</span>
                </div>
              </div>
            </div>
            {/* ISEB */}
            <div className="group p-8 bg-white rounded-2xl shadow-[0px_4px_20px_rgba(0,0,0,0.05)] border border-transparent hover:border-royal-purple/30 transition-all flex flex-col">
              <div className="w-16 h-16 bg-tertiary-fixed rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <School size={30} className="text-tertiary" aria-hidden="true" />
              </div>
              <h3 className="font-headline-lg text-headline-lg text-charcoal mb-4 font-bold">ISEB (Independent)</h3>
              <p className="text-on-surface-variant mb-6 flex-grow">Used for entrance into prestigious independent schools. A broader range of subjects often including Science, History, or Latin via Common Entrance Exams.</p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-label-md text-tertiary font-medium">
                  <Check size={16} aria-hidden="true" />
                  <span>Private Entry</span>
                </div>
                <div className="flex items-center gap-2 text-label-md text-tertiary font-medium">
                  <Check size={16} aria-hidden="true" />
                  <span>Written Responses</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Subjects Covered Section */}
      <section className="py-24 bg-surface-container-low overflow-hidden">
        <div className="container mx-auto px-margin-mobile md:px-margin-desktop max-w-max-width">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="font-display-lg text-headline-lg md:text-display-lg text-charcoal font-bold">Comprehensive Subject Coverage</h2>
              <p className="text-on-surface-variant font-body-lg">We provide deep-dive tutoring into the four core pillars of the 11+ examination, ensuring no gaps in your child&apos;s knowledge.</p>
              <div className="space-y-4">
                <div className="flex gap-6 p-4 rounded-xl hover:bg-white transition-colors duration-300 cursor-default">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-royal-purple/10 flex items-center justify-center text-royal-purple">
                    <FileText size={24} aria-hidden="true" />
                  </div>
                  <div>
                    <h4 className="font-headline-md text-charcoal font-bold">English</h4>
                    <p className="text-on-surface-variant text-label-md">Reading comprehension, grammar, spelling, and creative writing tasks.</p>
                  </div>
                </div>
                <div className="flex gap-6 p-4 rounded-xl hover:bg-white transition-colors duration-300 cursor-default">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-royal-purple/10 flex items-center justify-center text-royal-purple">
                    <MessageCircle size={24} aria-hidden="true" />
                  </div>
                  <div>
                    <h4 className="font-headline-md text-charcoal font-bold">Verbal Reasoning</h4>
                    <p className="text-on-surface-variant text-label-md">Vocabulary, word affiliations, analogies, and logical thought-processing.</p>
                  </div>
                </div>
                <div className="flex gap-6 p-4 rounded-xl hover:bg-white transition-colors duration-300 cursor-default">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-royal-purple/10 flex items-center justify-center text-royal-purple">
                    <Shapes size={24} aria-hidden="true" />
                  </div>
                  <div>
                    <h4 className="font-headline-md text-charcoal font-bold">Non-Verbal Reasoning</h4>
                    <p className="text-on-surface-variant text-label-md">Visual patterns, shape sequencing, and spatial awareness exercises.</p>
                  </div>
                </div>
                <div className="flex gap-6 p-4 rounded-xl hover:bg-white transition-colors duration-300 cursor-default">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-royal-purple/10 flex items-center justify-center text-royal-purple">
                    <Calculator size={24} aria-hidden="true" />
                  </div>
                  <div>
                    <h4 className="font-headline-md text-charcoal font-bold">Mathematics</h4>
                    <p className="text-on-surface-variant text-label-md">Arithmetic, fractions, algebra, geometry, and complex problem-solving.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-12 -right-12 w-64 h-64 bg-lime-green/20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-royal-purple/20 rounded-full blur-3xl"></div>
              <div className="relative bg-white p-8 md:p-12 rounded-[2rem] shadow-2xl space-y-8">
                <h3 className="font-headline-lg text-headline-lg text-charcoal text-center font-bold">Typical Test Format</h3>
                <div className="space-y-6">
                  <div className="flex justify-between items-center border-b border-outline-variant pb-4">
                    <span className="font-headline-md text-charcoal font-bold">Verbal Reasoning</span>
                    <span className="bg-soft-gray px-3 py-1 rounded-full text-label-md font-semibold">45 Minutes</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-outline-variant pb-4">
                    <span className="font-headline-md text-charcoal font-bold">Non-Verbal Reasoning</span>
                    <span className="bg-soft-gray px-3 py-1 rounded-full text-label-md font-semibold">45 Minutes</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-outline-variant pb-4">
                    <span className="font-headline-md text-charcoal font-bold">Mathematics</span>
                    <span className="bg-soft-gray px-3 py-1 rounded-full text-label-md font-semibold">45 Minutes</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-outline-variant pb-4">
                    <span className="font-headline-md text-charcoal font-bold">English</span>
                    <span className="bg-soft-gray px-3 py-1 rounded-full text-label-md font-semibold">45-60 Minutes</span>
                  </div>
                </div>
                <div className="pt-4 text-center">
                  <p className="text-on-surface-variant font-label-md font-semibold">Total duration: 2 - 2.5 hours</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits & Personal Touch */}
      <section className="py-24">
        <div className="container mx-auto px-margin-mobile md:px-margin-desktop max-w-max-width">
          <div className="text-center mb-16">
            <h2 className="font-display-lg text-headline-lg md:text-display-lg text-charcoal font-bold">Why Choose Math Make Smart?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            <div className="text-center space-y-4 px-6">
              <div className="mx-auto w-16 h-16 bg-soft-gray rounded-full flex items-center justify-center text-royal-purple mb-4">
                <UserRound size={30} aria-hidden="true" />
              </div>
              <h4 className="font-headline-lg text-headline-lg text-charcoal font-bold">One-on-One Attention</h4>
              <p className="text-on-surface-variant font-body-md">Personalized tutoring tailored to your child&apos;s specific learning style and pace.</p>
            </div>
            <div className="text-center space-y-4 px-6">
              <div className="mx-auto w-16 h-16 bg-soft-gray rounded-full flex items-center justify-center text-lime-green mb-4">
                <BarChart3 size={30} aria-hidden="true" />
              </div>
              <h4 className="font-headline-lg text-headline-lg text-charcoal font-bold">Mock Test Mastery</h4>
              <p className="text-on-surface-variant font-body-md">Regular exam-condition practice to develop speed, accuracy, and board familiarity.</p>
            </div>
            <div className="text-center space-y-4 px-6">
              <div className="mx-auto w-16 h-16 bg-soft-gray rounded-full flex items-center justify-center text-royal-purple mb-4">
                <Smile size={30} aria-hidden="true" />
              </div>
              <h4 className="font-headline-lg text-headline-lg text-charcoal font-bold">Confidence Building</h4>
              <p className="text-on-surface-variant font-body-md">Reducing exam anxiety through positive reinforcement and strategy coaching.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA & Form Section */}
      <section className="py-24 relative overflow-hidden bg-royal-purple">
        <div className="container mx-auto px-margin-mobile md:px-margin-desktop max-w-max-width relative z-10">
          <div className="bg-white rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col lg:flex-row">
            <div className="lg:w-1/2 p-12 lg:p-20 space-y-8 bg-surface">
              <h2 className="font-display-lg text-headline-lg md:text-display-lg text-charcoal font-bold">Book a Free Trial Lesson</h2>
              <p className="text-on-surface-variant font-body-lg">Start your 11+ journey with an expert evaluation. No commitment required, just expert feedback for your child.</p>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <Clock3 size={20} className="text-royal-purple" aria-hidden="true" />
                  <span className="text-charcoal font-headline-md font-bold">Flexible Online Timings</span>
                </div>
                <div className="flex items-center gap-4">
                  <CreditCard size={20} className="text-royal-purple" aria-hidden="true" />
                  <span className="text-charcoal font-headline-md font-bold">Affordable &amp; Discount Packages</span>
                </div>
                <div className="flex items-center gap-4">
                  <Star size={20} className="text-royal-purple" aria-hidden="true" />
                  <span className="text-charcoal font-headline-md font-bold">Superior Quality Guarantee</span>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 p-12 lg:p-20 bg-white">
              {formSubmitted ? (
                <div className="text-center py-12 space-y-4">
                  <CheckCircle2 size={60} className="text-lime-green mx-auto" aria-hidden="true" />
                  <h3 className="font-headline-md text-charcoal font-bold">Request Submitted!</h3>
                  <p className="text-on-surface-variant">Thank you <strong>{formData.fullName}</strong>. We will get in touch shortly regarding your 11+ free trial lesson.</p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="bg-royal-purple text-on-primary px-6 py-2.5 rounded-xl font-medium hover:bg-primary transition-all cursor-pointer mt-4"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form className="grid grid-cols-1 gap-6" onSubmit={handleSubmit}>
                  <div className="space-y-2">
                    <label className="font-label-md text-charcoal font-medium">Full Name</label>
                    <input
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-outline-variant focus:ring-2 focus:ring-royal-purple focus:border-royal-purple outline-none transition-all"
                      placeholder="Your child's name"
                      type="text"
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="font-label-md text-charcoal font-medium">Phone Number</label>
                      <input
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-outline-variant focus:ring-2 focus:ring-royal-purple focus:border-royal-purple outline-none transition-all"
                        placeholder="+44"
                        type="tel"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="font-label-md text-charcoal font-medium">Email Address</label>
                      <input
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-outline-variant focus:ring-2 focus:ring-royal-purple focus:border-royal-purple outline-none transition-all"
                        placeholder="email@example.com"
                        type="email"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="font-label-md text-charcoal font-medium">Country</label>
                    <select
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-outline-variant focus:ring-2 focus:ring-royal-purple focus:border-royal-purple outline-none transition-all"
                    >
                      <option value="UK">UK</option>
                      <option value="USA">USA</option>
                      <option value="Ireland">Ireland</option>
                      <option value="Canada">Canada</option>
                      <option value="Australia">Australia</option>
                      <option value="New Zealand">New Zealand</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="font-label-md text-charcoal font-medium">Additional Message</label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-outline-variant focus:ring-2 focus:ring-royal-purple focus:border-royal-purple outline-none transition-all"
                      placeholder="Tell us about your child's goals..."
                      rows={3}
                    />
                  </div>
                  <button
                    className="w-full bg-royal-purple text-on-primary font-headline-md py-4 rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-95 transition-all cursor-pointer font-bold"
                    type="submit"
                  >
                    Send Request
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
