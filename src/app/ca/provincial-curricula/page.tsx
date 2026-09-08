'use client';

import React, { useState } from 'react';
import { useAppNavigate } from '@/lib/useAppNavigate';
import {
  CheckCircle2, Building2, Trees, Mountain, Landmark, Leaf, Waves,
  Map, ClipboardCheck, FileCheck, FunctionSquare, BookOpen, FlaskConical, Globe,
  User, LineChart, Smile
} from 'lucide-react';

export default function CAProvincialCurriculaPage() {
  const { navigateTo } = useAppNavigate();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    province: 'Ontario',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.fullName && formData.email) setFormSubmitted(true);
  };

  const provinces = [
    {
      name: 'Ontario',
      Icon: Building2,
      grades: 'Grades 1–12',
      board: 'Ontario Curriculum',
      highlights: ['Math & Language Arts', 'Science & Technology', 'OSSLT preparation'],
    },
    {
      name: 'British Columbia',
      Icon: Trees,
      grades: 'Grades K–12',
      board: 'BC Curriculum',
      highlights: ['Core Competencies focus', 'Concept-based learning', 'Provincial assessments'],
    },
    {
      name: 'Alberta',
      Icon: Mountain,
      grades: 'Grades 1–12',
      board: 'Alberta Education',
      highlights: ['Programme of Studies', 'Diploma Exams (Grade 12)', 'PAT preparation'],
    },
    {
      name: 'Quebec',
      Icon: Landmark,
      grades: 'Grades 1–11 (Sec. 1–5)',
      board: 'Ministère de l\'Éducation',
      highlights: ['French & English streams', 'Subject-specific exams', 'CÉGEP preparation'],
    },
    {
      name: 'Saskatchewan',
      Icon: Leaf,
      grades: 'Grades 1–12',
      board: 'Saskatchewan Curriculum',
      highlights: ['Outcomes-based learning', 'Provincial assessments', 'LGBTQ+ inclusive'],
    },
    {
      name: 'Manitoba',
      Icon: Waves,
      grades: 'Grades K–12',
      board: 'Manitoba Curriculum',
      highlights: ['Standards Tests (Gr 3, 7)', 'Grade 12 provincials', 'Indigenous perspectives'],
    },
  ];

  return (
    <div className="bg-background text-on-surface font-body-md overflow-x-hidden">
      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-center py-16 overflow-hidden bg-white">
        <div className="container mx-auto px-margin-mobile md:px-margin-desktop max-w-max-width relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-gutter items-center">
            <div className="space-y-8">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-label-md text-label-md uppercase tracking-wider font-semibold">
                Canadian Provincial Curricula
              </span>
              <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-charcoal leading-tight font-bold">
                Province-matched tutoring for <span className="text-royal-purple">every Canadian student</span>
              </h1>
              <p className="text-on-surface-variant font-body-lg text-body-lg max-w-xl">
                Canada&apos;s ten provinces each set their own curriculum, assessments, and graduation requirements. Our tutors are matched to your child&apos;s province, grade, and exact course outcomes — not a generic Canadian average.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => navigateTo('trial')}
                  className="bg-royal-purple text-on-primary px-8 py-4 rounded-xl font-headline-md text-headline-md hover:shadow-xl transition-all cursor-pointer font-medium"
                >
                  Book a Free Trial Lesson
                </button>
                <button
                  onClick={() => navigateTo('pricing')}
                  className="border-2 border-royal-purple text-royal-purple px-8 py-4 rounded-xl font-headline-md text-headline-md hover:bg-royal-purple/5 transition-all cursor-pointer font-medium"
                >
                  View Pricing
                </button>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="rounded-3xl overflow-hidden shadow-2xl relative">
                <img
                  className="w-full h-[480px] object-cover"
                  alt="Canadian students studying in a modern classroom"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCot5dXwzWPE9Qa-FfwoAPnDVTHq5J8Svg3B-YNge07dQMsT2Au8TlIwTgRJxdhK5TnFiJ-gEspkVgbdmLSFxStv1n1erNn5R6euukMdOqyenO9h6Xuqb9XrtzWO3fQbhaKlHrFS29QJNIhSdj6UBjJxtmiMiR_DUoNdzEL_5SypQ8qMjJfheFFqRJdnt5--77dxNNbVLWh8aJM0f4mvV4j9FzXCp6_sFZzD9FQrbW_Tji_4tfQ-vL8dUXYHE9nX0j8tUmmgRE7-0TmftE"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl max-w-xs border border-outline-variant/30">
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-10 h-10 rounded-full bg-lime-green flex items-center justify-center text-on-secondary">
                    <CheckCircle2 size={24} className="text-charcoal" />
                  </div>
                  <span className="font-headline-md text-charcoal font-bold">10 Provinces Covered</span>
                </div>
                <p className="text-on-surface-variant text-label-md">Tutors matched to your province&apos;s exact curriculum and assessment style.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Province-Specific Matters */}
      <section className="py-24 bg-soft-gray">
        <div className="container mx-auto px-margin-mobile md:px-margin-desktop max-w-max-width">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="font-headline-lg text-headline-lg text-charcoal font-bold mb-4">Why province matters</h2>
            <p className="text-on-surface-variant font-body-lg">
              Education in Canada is entirely provincial. An Ontario Grade 9 math course and a BC Grade 9 math course share a name but different outcomes, different sequencing, and different provincial tests. A tutor who doesn&apos;t know your province will teach to the wrong curriculum.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { Icon: Map, color: 'bg-primary-fixed text-royal-purple', title: 'Province-Matched', desc: 'Every tutor is assigned based on the province your child attends school in — not just "Canadian curriculum."' },
              { Icon: ClipboardCheck, color: 'bg-lime-green/20 text-secondary', title: 'Outcome-Aligned', desc: 'Sessions follow the specific learning outcomes and course expectations set by your provincial ministry.' },
              { Icon: FileCheck, color: 'bg-primary-fixed text-royal-purple', title: 'Assessment-Ready', desc: 'From Ontario EQAO to Alberta PATs and BC provincial assessments — we prepare for the right test.' },
            ].map((item) => (
              <div key={item.title} className="bg-white p-8 rounded-2xl shadow-[0px_4px_20px_rgba(0,0,0,0.05)] text-center">
                <div className={`w-14 h-14 ${item.color} rounded-full flex items-center justify-center mx-auto mb-6`}>
                  <item.Icon size={24} />
                </div>
                <h3 className="font-headline-md text-charcoal font-bold mb-3">{item.title}</h3>
                <p className="text-on-surface-variant font-body-md">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Province Cards */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-margin-mobile md:px-margin-desktop max-w-max-width">
          <div className="text-center mb-16">
            <h2 className="font-headline-lg text-headline-lg text-charcoal font-bold mb-4">Provinces We Cover</h2>
            <p className="text-on-surface-variant font-body-md max-w-2xl mx-auto">Select your province to learn how we align tutoring to its exact curriculum and assessments.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {provinces.map((prov) => (
              <div
                key={prov.name}
                className="group p-8 bg-white rounded-2xl shadow-[0px_4px_20px_rgba(0,0,0,0.05)] border border-transparent hover:border-royal-purple/30 hover:shadow-xl transition-all"
              >
                <div className="w-14 h-14 bg-primary-fixed rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <prov.Icon size={24} className="text-royal-purple" />
                </div>
                <h3 className="font-headline-md text-charcoal font-bold mb-1">{prov.name}</h3>
                <p className="text-label-md text-royal-purple font-semibold mb-1">{prov.grades}</p>
                <p className="text-label-sm text-on-surface-variant mb-4">{prov.board}</p>
                <ul className="space-y-2">
                  {prov.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-2 text-label-md text-on-surface-variant">
                      <CheckCircle2 size={16} className="text-lime-green shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subjects */}
      <section className="py-24 bg-surface-container-low">
        <div className="container mx-auto px-margin-mobile md:px-margin-desktop max-w-max-width">
          <div className="text-center mb-16">
            <h2 className="font-headline-lg text-headline-lg text-charcoal font-bold mb-4">Core Subjects</h2>
            <p className="text-on-surface-variant font-body-md">Covering the subjects that matter most across every provincial curriculum.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { Icon: FunctionSquare, title: 'Mathematics', desc: 'Number sense, algebra, data management and financial literacy from Grades 1–12.' },
              { Icon: BookOpen, title: 'English / Language Arts', desc: 'Reading comprehension, writing, oral communication and media literacy.' },
              { Icon: FlaskConical, title: 'Science', desc: 'Biology, Chemistry, Physics and Earth Sciences aligned to provincial grade bands.' },
              { Icon: Globe, title: 'Social Studies', desc: 'History, geography, civics and economics matched to provincial scope and sequence.' },
            ].map((subject) => (
              <div key={subject.title} className="bg-white p-8 rounded-2xl shadow-[0px_4px_20px_rgba(0,0,0,0.05)] text-center group hover:border-royal-purple/20 border border-transparent transition-all">
                <div className="w-14 h-14 bg-royal-purple text-white rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-6 transition-transform">
                  <subject.Icon size={24} />
                </div>
                <h3 className="font-headline-md text-charcoal font-bold mb-3">{subject.title}</h3>
                <p className="text-on-surface-variant font-body-md">{subject.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Math Make Smart */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-margin-mobile md:px-margin-desktop max-w-max-width">
          <div className="text-center mb-16">
            <h2 className="font-headline-lg text-headline-lg text-charcoal font-bold">Why Choose Math Make Smart?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {[
              { Icon: User, color: 'text-royal-purple', title: 'One-on-One Attention', desc: 'Personalized tutoring matched to your province, grade, and learning style.' },
              { Icon: LineChart, color: 'text-lime-green', title: 'Provincial Assessment Prep', desc: 'Targeted practice for EQAO, PATs, BC provincials and other standardized tests.' },
              { Icon: Smile, color: 'text-royal-purple', title: 'Confidence Building', desc: 'Supportive sessions that reduce anxiety and build lasting academic habits.' },
            ].map((item) => (
              <div key={item.title} className="text-center space-y-4 px-6">
                <div className={`mx-auto w-16 h-16 bg-soft-gray rounded-full flex items-center justify-center ${item.color} mb-4`}>
                  <item.Icon size={32} />
                </div>
                <h4 className="font-headline-lg text-charcoal font-bold">{item.title}</h4>
                <p className="text-on-surface-variant font-body-md">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA & Form */}
      <section className="py-24 bg-royal-purple overflow-hidden">
        <div className="container mx-auto px-margin-mobile md:px-margin-desktop max-w-max-width relative z-10">
          <div className="bg-white rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col lg:flex-row">
            <div className="lg:w-1/2 p-12 lg:p-20 space-y-8 bg-surface">
              <h2 className="font-display-lg text-headline-lg md:text-display-lg text-charcoal font-bold">Book a Free Trial Lesson</h2>
              <p className="text-on-surface-variant font-body-lg">Tell us your province and we&apos;ll match you with a tutor who knows your curriculum inside out.</p>
              <div className="space-y-4">
                {['Matched to your provincial curriculum', 'Flexible online timings', 'No commitment required'].map((pt) => (
                  <div key={pt} className="flex items-center gap-4">
                    <CheckCircle2 size={20} className="text-royal-purple" />
                    <span className="text-charcoal font-headline-md font-bold">{pt}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 p-12 lg:p-20 bg-white">
              {formSubmitted ? (
                <div className="text-center py-12 space-y-4">
                  <CheckCircle2 size={56} className="text-lime-green mx-auto" />
                  <h3 className="font-headline-md text-charcoal font-bold">Request Submitted!</h3>
                  <p className="text-on-surface-variant">Thank you <strong>{formData.fullName}</strong>. We will be in touch shortly to arrange your free trial.</p>
                  <button onClick={() => setFormSubmitted(false)} className="bg-royal-purple text-on-primary px-6 py-2.5 rounded-xl font-medium hover:bg-primary transition-all cursor-pointer mt-4">
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form className="grid grid-cols-1 gap-6" onSubmit={handleSubmit}>
                  <div className="space-y-2">
                    <label className="font-label-md text-charcoal font-medium">Full Name</label>
                    <input required value={formData.fullName} onChange={(e) => setFormData({ ...formData, fullName: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-outline-variant focus:ring-2 focus:ring-royal-purple focus:border-royal-purple outline-none transition-all" placeholder="Student&apos;s full name" type="text" />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="font-label-md text-charcoal font-medium">Phone Number</label>
                      <input required value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-outline-variant focus:ring-2 focus:ring-royal-purple focus:border-royal-purple outline-none transition-all" placeholder="+1" type="tel" />
                    </div>
                    <div className="space-y-2">
                      <label className="font-label-md text-charcoal font-medium">Email Address</label>
                      <input required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-outline-variant focus:ring-2 focus:ring-royal-purple focus:border-royal-purple outline-none transition-all" placeholder="email@example.com" type="email" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="font-label-md text-charcoal font-medium">Province</label>
                    <select value={formData.province} onChange={(e) => setFormData({ ...formData, province: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-outline-variant focus:ring-2 focus:ring-royal-purple focus:border-royal-purple outline-none transition-all bg-white">
                      {['Ontario', 'British Columbia', 'Alberta', 'Quebec', 'Saskatchewan', 'Manitoba', 'Nova Scotia', 'New Brunswick', 'Prince Edward Island', 'Newfoundland & Labrador'].map((p) => (
                        <option key={p} value={p}>{p}</option>
                      ))}
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="font-label-md text-charcoal font-medium">Additional Message</label>
                    <textarea value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-outline-variant focus:ring-2 focus:ring-royal-purple focus:border-royal-purple outline-none transition-all" placeholder="Tell us about your child&apos;s goals..." rows={3} />
                  </div>
                  <button className="w-full bg-royal-purple text-on-primary font-headline-md py-4 rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-95 transition-all cursor-pointer font-bold" type="submit">
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
