'use client';

import React, { useState } from 'react';
import { ActivePage } from '@/lib/types';
import LigatureIcon from '../LigatureIcon';
import {
  GraduationCap,
  ArrowRight,
  Clock,
  Wallet,
  Star,
  BookOpen,
  Route,
  Users,
  Target,
  FlaskConical,
  Microscope,
  Atom,
  Globe2,
} from 'lucide-react';

interface SubjectComponentProps {
  onNavigate: (page: ActivePage, subjectTitle?: string) => void;
}

const GRADE_PLANS = [
  { grade: 'Grade 1', band: 'Elementary' },
  { grade: 'Grade 2', band: 'Elementary' },
  { grade: 'Grade 3', band: 'Elementary' },
  { grade: 'Grade 4', band: 'Elementary' },
  { grade: 'Grade 5', band: 'State Science Test' },
  { grade: 'Grade 6', band: 'Middle School' },
  { grade: 'Grade 7', band: 'Middle School' },
  { grade: 'Grade 8', band: 'State Science Test' },
  { grade: 'Biology', band: 'High School' },
  { grade: 'Chemistry', band: 'High School' },
  { grade: 'Physics', band: 'High School' },
  { grade: 'AP Sciences', band: 'College Prep' },
];

const FAQS = [
  {
    q: 'Which science subjects and grades do you cover?',
    a: "Grade 1 through Grade 12. Elementary and middle school science is usually taught as a single integrated subject covering life, physical, and earth and space science. From high school it splits into separate courses, and we cover Biology, Chemistry, Physics, Earth and Space Science and Environmental Science, along with AP Biology, AP Chemistry, AP Physics 1, 2 and C, and AP Environmental Science.",
  },
  {
    q: 'Why does my child know the material but still lose marks?',
    a: "This is the most common science problem we see, and it is usually a format issue rather than a knowledge one. Science assessments built on the Next Generation Science Standards present unfamiliar scenarios and ask students to analyse data, interpret a graph or construct an explanation from evidence. A student who has memorised definitions has prepared for a different test. We work through unfamiliar data and phenomena precisely because that is what the questions demand.",
  },
  {
    q: 'When is science actually tested in my state?',
    a: "Federal rules require science testing once per grade band rather than every year, so most states test in Grade 5, Grade 8, and once during high school. This has a practical consequence families often miss: the Grade 5 test covers material taught across Grades 3, 4 and 5, and the Grade 8 test spans Grades 6 to 8. Preparation has to reach back further than one year of content, which is also why science gaps can go unnoticed for two years before surfacing.",
  },
  {
    q: 'Does my state use NGSS?',
    a: "About twenty states have adopted the Next Generation Science Standards directly, and many more use standards developed from the same framework. Several write their own: Texas uses the TEKS, Florida uses its own science standards rather than NGSS, and Virginia has its own Standards of Learning. We match tutors to your state's science standards, because the sequence and the assessment style both differ.",
  },
  {
    q: 'Can you help with labs and practical work?',
    a: "Yes, in the parts that actually carry marks. We cannot run a physical lab over video, but most credit in lab work comes from experimental design, controlling variables, handling data and writing up conclusions, and those are exactly what one-to-one sessions suit. We also work through virtual simulations, which are increasingly used in US classrooms and appear in assessment questions.",
  },
  {
    q: 'Which high school science should my child take first?',
    a: "Most US high schools run Biology first, then Chemistry, then Physics, though a growing number use a Physics First sequence. The order matters less than the math underneath it: Chemistry needs confident algebra and proportional reasoning, and Physics needs algebra plus trigonometry. If a student is struggling in Chemistry or Physics, the cause is often mathematical rather than scientific, and we check that before anything else.",
  },
  {
    q: 'Is there a free trial lesson?',
    a: "Yes. The first session is free and no credit card is required. We use it to find out where your child actually stands against their grade-level science standards and to check the tutor is a good fit. If you decide not to continue, that is the end of it.",
  },
  {
    q: 'What if my child does not get on with the tutor?',
    a: "We rematch at no charge. Science tutoring in particular depends on a tutor who can explain the same idea three different ways, and that fit is not always right first time. Rematching is routine, costs nothing, and does not use up a session.",
  },
];

export default function ScienceSubjectUS({ onNavigate }: SubjectComponentProps) {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const toggleFaq = (idx: number) => setActiveFaq(activeFaq === idx ? null : idx);

  return (
    <div className="bg-background text-on-background font-body-md">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-surface py-20 lg:py-28">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="z-10 space-y-8">
            <div className="inline-flex items-center gap-2 bg-primary-container/10 px-4 py-2 rounded-full text-primary font-label-md text-label-md font-semibold">
              <GraduationCap size={16} />
              Grades 1&ndash;12, matched to your state
            </div>
            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-charcoal leading-tight font-bold">
              Online Science Tutor <br />
              <span className="text-royal-purple">in USA</span>
            </h1>
            <p className="text-body-lg font-body-lg text-on-surface-variant max-w-xl font-sans">
              One-to-one science tutoring from elementary through AP, covering Biology, Chemistry, Physics and
              Earth Science. Modern US science assessments test reasoning rather than recall, and our tutors
              teach for that.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <button
                onClick={() => onNavigate('trial')}
                className="bg-royal-purple text-on-primary px-8 py-4 rounded-xl font-label-md text-label-md shadow-lg hover:shadow-primary/20 transition-all font-bold cursor-pointer"
              >
                Book Free Trial Lesson
              </button>
              <button
                onClick={() => onNavigate('pricing')}
                className="border-2 border-royal-purple text-royal-purple px-8 py-4 rounded-xl font-label-md text-label-md hover:bg-royal-purple/5 transition-all font-bold cursor-pointer"
              >
                View Pricing
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] relative">
              <img
                className="w-full h-full object-cover"
                alt="A student in an online science tutoring session"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCnHcE7PMc5_kJ_9ba0LvdjEp4CJE_264TMgW552Jchq5GcLPUZhFwcensCBa6K0BjI8nv1Kjasho7f8r3Pij2NBl0tGTty7Ks4kzxLEVR6BAR2l8C8MSyyGhZBXa_t_uSo-QtXGnNrqc_5MqvJUGMtH2J8Lw14YEa0z1e-qQM1xXa_J6FVDfzr5iGAly9zcHtXjCgcazs2cqbHS1VlXmnycEo8KiF7K8QkujBAcm-Wu6aCHZ4qdWuSFRphC692qqoVPVyFMi73CWiOuio"
              />
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 glass-card p-6 rounded-2xl shadow-xl max-w-xs bg-white/80 backdrop-blur-md border border-white/40">
              <div className="flex items-center gap-4 mb-2">
                <div className="bg-lime-green p-2 rounded-lg">
                  <FlaskConical size={20} className="text-charcoal" />
                </div>
                <span className="font-label-md text-label-md text-charcoal font-bold">Three-Dimensional</span>
              </div>
              <p className="text-sm text-on-surface-variant">Content, practices and crosscutting concepts in every session.</p>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] bg-royal-purple/5 rounded-full blur-3xl -z-0"></div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 md:py-24 bg-soft-gray">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="text-center mb-16 space-y-4">
            <h2 className="font-headline-lg text-headline-lg text-charcoal font-bold">What We Offer</h2>
            <p className="text-on-surface-variant max-w-2xl mx-auto">
              Searching for a science tutor near you? Online tutoring removes the geography problem. Your child
              works with a specialist in their exact course rather than whoever is available locally.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-surface p-10 rounded-3xl shadow-[0px_4px_20px_rgba(0,0,0,0.05)] border border-outline-variant/30 hover:-translate-y-2 transition-transform duration-300">
              <div className="w-14 h-14 bg-primary-container/10 rounded-2xl flex items-center justify-center mb-8">
                <Clock size={28} className="text-primary" />
              </div>
              <h3 className="font-headline-md text-headline-md text-charcoal mb-4 font-bold">Flexible Timings</h3>
              <p className="text-on-surface-variant mb-6">
                Sessions scheduled around school and activities, with tutors available across every US time zone
                from Eastern to Pacific. Reschedule up to two hours ahead at no cost.
              </p>
              <button
                onClick={() => onNavigate('trial')}
                className="text-primary font-label-md text-label-md flex items-center gap-2 group font-bold cursor-pointer"
              >
                Book a session <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            <div className="bg-surface p-10 rounded-3xl shadow-[0px_4px_20px_rgba(0,0,0,0.05)] border border-outline-variant/30 hover:-translate-y-2 transition-transform duration-300">
              <div className="w-14 h-14 bg-secondary-container/20 rounded-2xl flex items-center justify-center mb-8">
                <Wallet size={28} className="text-secondary" />
              </div>
              <h3 className="font-headline-md text-headline-md text-charcoal mb-4 font-bold">Affordable Rates</h3>
              <p className="text-on-surface-variant mb-6">
                Clear per-hour pricing in US dollars with discounted lesson bundles. No registration fee, no
                minimum contract, and the first session is free.
              </p>
              <button
                onClick={() => onNavigate('pricing')}
                className="text-primary font-label-md text-label-md flex items-center gap-2 group font-bold cursor-pointer"
              >
                Fee structure <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            <div className="bg-surface p-10 rounded-3xl shadow-[0px_4px_20px_rgba(0,0,0,0.05)] border border-outline-variant/30 hover:-translate-y-2 transition-transform duration-300">
              <div className="w-14 h-14 bg-tertiary-fixed/30 rounded-2xl flex items-center justify-center mb-8">
                <Star size={28} className="text-tertiary" />
              </div>
              <h3 className="font-headline-md text-headline-md text-charcoal mb-4 font-bold">Superior Quality</h3>
              <p className="text-on-surface-variant mb-6">
                Tutors hold a degree in the science they teach and are assessed on the specific course and state
                standards your child is examined against.
              </p>
              <button
                onClick={() => onNavigate('about')}
                className="text-primary font-label-md text-label-md flex items-center gap-2 group font-bold cursor-pointer"
              >
                How matching works <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Three Dimensions */}
      <section className="py-20 md:py-24 bg-surface">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="text-center mb-16 space-y-4">
            <h2 className="font-headline-lg text-headline-lg text-charcoal font-bold">Why Science Homework Looks Different Now</h2>
            <p className="text-on-surface-variant max-w-2xl mx-auto">
              If you learned science by memorising facts, your child&apos;s work will look unfamiliar. Modern US
              science standards assess three things at once, which is why a student who knows the content can
              still lose marks.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-soft-gray p-10 rounded-3xl border border-outline-variant/30 space-y-4">
              <div className="w-14 h-14 bg-primary-container/10 rounded-2xl flex items-center justify-center">
                <BookOpen size={28} className="text-primary" />
              </div>
              <h3 className="font-headline-md text-headline-md text-charcoal font-bold">Disciplinary Core Ideas</h3>
              <p className="text-on-surface-variant">
                The content itself, across life science, physical science, earth and space science, and
                engineering. This is the part that most resembles science as older generations were taught it.
              </p>
            </div>
            <div className="bg-soft-gray p-10 rounded-3xl border border-outline-variant/30 space-y-4">
              <div className="w-14 h-14 bg-secondary-container/20 rounded-2xl flex items-center justify-center">
                <Microscope size={28} className="text-secondary" />
              </div>
              <h3 className="font-headline-md text-headline-md text-charcoal font-bold">Science &amp; Engineering Practices</h3>
              <p className="text-on-surface-variant">
                Asking questions, planning investigations, analysing data and constructing explanations from
                evidence. Students are assessed on doing these things, not on describing them.
              </p>
            </div>
            <div className="bg-soft-gray p-10 rounded-3xl border border-outline-variant/30 space-y-4">
              <div className="w-14 h-14 bg-tertiary-fixed/30 rounded-2xl flex items-center justify-center">
                <Globe2 size={28} className="text-tertiary" />
              </div>
              <h3 className="font-headline-md text-headline-md text-charcoal font-bold">Crosscutting Concepts</h3>
              <p className="text-on-surface-variant">
                Patterns, cause and effect, scale, systems, and structure and function. These are what let a
                student carry reasoning from biology into physics rather than starting again.
              </p>
            </div>
          </div>
          <p className="text-center text-on-surface-variant max-w-3xl mx-auto mt-12">
            The practical consequence is that questions present unfamiliar scenarios and ask students to reason
            through them. Memorising terminology prepares a student poorly for that, which is why our sessions
            work through unfamiliar data and phenomena rather than drilling definitions.
          </p>
        </div>
      </section>

      {/* Course Coverage */}
      <section className="py-20 md:py-24 bg-soft-gray">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="text-center mb-16 space-y-4">
            <h2 className="font-headline-lg text-headline-lg text-charcoal font-bold">Science Coverage by Stage</h2>
            <p className="text-on-surface-variant max-w-2xl mx-auto">
              US science is taught as one integrated subject through middle school, then splits into separate
              courses at high school. Each stage needs a different kind of support.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-surface p-10 rounded-3xl shadow-[0px_4px_20px_rgba(0,0,0,0.05)] border border-outline-variant/30 space-y-4">
              <span className="font-label-sm text-label-sm text-primary uppercase tracking-widest font-semibold">Grades 1&ndash;5</span>
              <h3 className="font-headline-md text-headline-md text-charcoal font-bold">Elementary Science</h3>
              <p className="text-on-surface-variant">
                Living things and habitats, weather and climate, states of matter, forces and motion, the solar
                system, and simple engineering design. The Grade 5 state test covers all three years.
              </p>
            </div>
            <div className="bg-surface p-10 rounded-3xl shadow-[0px_4px_20px_rgba(0,0,0,0.05)] border border-outline-variant/30 space-y-4">
              <span className="font-label-sm text-label-sm text-primary uppercase tracking-widest font-semibold">Grades 6&ndash;8</span>
              <h3 className="font-headline-md text-headline-md text-charcoal font-bold">Middle School Science</h3>
              <p className="text-on-surface-variant">
                Cells and heredity, ecosystems and energy flow, chemical reactions, waves and energy transfer,
                plate tectonics and weather systems. The Grade 8 test spans all three years.
              </p>
            </div>
            <div className="bg-surface p-10 rounded-3xl shadow-[0px_4px_20px_rgba(0,0,0,0.05)] border border-outline-variant/30 space-y-4">
              <span className="font-label-sm text-label-sm text-primary uppercase tracking-widest font-semibold">Grades 9&ndash;12</span>
              <h3 className="font-headline-md text-headline-md text-charcoal font-bold">High School Sciences</h3>
              <p className="text-on-surface-variant">
                Biology, Chemistry, Physics, Earth and Space Science and Environmental Science as separate
                courses, plus AP Biology, AP Chemistry, AP Physics 1, 2 and C, and AP Environmental Science.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Lesson Plans For Each Grade */}
      <section className="py-20 md:py-24 bg-surface">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="space-y-4">
              <h2 className="font-headline-lg text-headline-lg text-charcoal font-bold">Lesson Plans For Each Grade</h2>
              <p className="text-on-surface-variant max-w-xl">
                Coverage from Grade 1 through AP, organised the way US schools actually run science: by grade
                through middle school, then by course.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {GRADE_PLANS.map((item) => (
              <div
                key={item.grade}
                onClick={() => onNavigate('trial')}
                className="group cursor-pointer"
              >
                <div className="bg-soft-gray p-8 rounded-3xl border border-transparent group-hover:border-royal-purple group-hover:bg-white transition-all duration-300 text-center">
                  <BookOpen size={22} className="text-royal-purple mx-auto mb-3 opacity-70 group-hover:opacity-100 transition-opacity" />
                  <span className="block font-headline-md text-headline-md text-royal-purple mb-2 font-bold">{item.grade}</span>
                  <span className="text-body-md text-on-surface-variant">{item.band}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-20 md:py-24 bg-soft-gray relative overflow-hidden">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            <img
              className="rounded-[48px] shadow-2xl w-full object-cover"
              alt="A tutor explaining a science concept during an online lesson"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAu5HfPlKVTgcPbXwLes0aId_UIpXWEah71gxFvE9iOzsIvn5c438ai9c1QYpBwMKSOlb1K9paVVHq25AZNT-gVR4o3U5xGKj4XGIxbEBM0nZ30tZLG9bRMPqBR1JyDUN8xw48EVWNHCxl6F5W_7caxKQXsNcZJtNoOJyibZY64_ZNKubr5LIwylWWYjhPPAWyHjIWfayClr2XxgO3oUDSko-50wEMhR0VwgVLmxHgt9Dmo5ydgoTcWWw"
            />
          </div>
          <div className="space-y-8 order-1 lg:order-2">
            <h2 className="font-headline-lg text-headline-lg text-charcoal font-bold">The Math Make Smart Method</h2>
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-primary text-on-primary rounded-full flex items-center justify-center font-bold text-lg">1</div>
                <div>
                  <h3 className="font-headline-md text-headline-md text-charcoal mb-2 font-bold flex items-center gap-2"><Route size={20} className="text-royal-purple" /> Find the Real Gap</h3>
                  <p className="text-on-surface-variant">
                    A student failing Chemistry often has a math problem, not a chemistry one. We check the
                    foundations first, because re-teaching the current chapter rarely fixes anything.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-primary text-on-primary rounded-full flex items-center justify-center font-bold text-lg">2</div>
                <div>
                  <h3 className="font-headline-md text-headline-md text-charcoal mb-2 font-bold flex items-center gap-2"><Users size={20} className="text-royal-purple" /> Matched by Course and State</h3>
                  <p className="text-on-surface-variant">
                    Tutors are approved for the specific course and state standards your child follows, because
                    a Florida science sequence and a Texas one are not the same thing.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-primary text-on-primary rounded-full flex items-center justify-center font-bold text-lg">3</div>
                <div>
                  <h3 className="font-headline-md text-headline-md text-charcoal mb-2 font-bold flex items-center gap-2"><Target size={20} className="text-royal-purple" /> Practise the Question Type</h3>
                  <p className="text-on-surface-variant">
                    Once the concept is secure, we work through unfamiliar data sets and phenomena, which is the
                    format state science assessments and AP exams actually use.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* High School Courses */}
      <section className="py-20 md:py-24 bg-soft-gray">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="text-center mb-16 space-y-4">
            <h2 className="font-headline-lg text-headline-lg text-charcoal font-bold">High School Science &amp; AP Courses</h2>
            <p className="text-on-surface-variant max-w-2xl mx-auto">
              Course names vary by state, which catches out families who move districts and anyone searching
              using the name their own school uses. Whatever yours is called, we match a specialist to it.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-8 rounded-3xl border border-outline-variant/30 space-y-3">
              <Microscope size={26} className="text-royal-purple" />
              <h3 className="font-headline-md text-headline-md text-charcoal font-bold">Biology</h3>
              <p className="text-body-md text-on-surface-variant">
                Cells, genetics, evolution and ecology, plus AP Biology. Called Living Earth in California and
                Life Science: Biology in New York.
              </p>
            </div>
            <div className="bg-white p-8 rounded-3xl border border-outline-variant/30 space-y-3">
              <FlaskConical size={26} className="text-royal-purple" />
              <h3 className="font-headline-md text-headline-md text-charcoal font-bold">Chemistry</h3>
              <p className="text-body-md text-on-surface-variant">
                Atomic structure, bonding, stoichiometry and equilibrium, plus AP Chemistry. Stoichiometry is
                where most students first struggle, and it is usually a ratios problem rather than a chemistry one.
              </p>
            </div>
            <div className="bg-white p-8 rounded-3xl border border-outline-variant/30 space-y-3">
              <Atom size={26} className="text-royal-purple" />
              <h3 className="font-headline-md text-headline-md text-charcoal font-bold">Physics</h3>
              <p className="text-body-md text-on-surface-variant">
                Mechanics, energy, waves, electricity and magnetism, plus AP Physics 1, 2 and C. We shore up the
                algebra and trigonometry alongside the physics.
              </p>
            </div>
            <div className="bg-white p-8 rounded-3xl border border-outline-variant/30 space-y-3">
              <Globe2 size={26} className="text-royal-purple" />
              <h3 className="font-headline-md text-headline-md text-charcoal font-bold">Earth &amp; Environmental</h3>
              <p className="text-body-md text-on-surface-variant">
                Geology, astronomy, climate systems and environmental science, plus AP Environmental Science.
                Earth and Space Sciences in New York.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-24 bg-surface border-t border-surface-container">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <h2 className="text-headline-lg font-display text-charcoal mb-4 text-center font-bold">Frequently Asked Questions</h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto mb-12 text-center">
            The questions American parents ask us most often about science tutoring, testing and course choice.
          </p>
          <div className="max-w-3xl mx-auto space-y-4">
            {FAQS.map((faq, idx) => (
              <div
                key={idx}
                className={`accordion-item bg-soft-gray rounded-2xl border transition-all cursor-pointer ${
                  activeFaq === idx ? 'border-royal-purple shadow-ambient' : 'border-outline-variant/30'
                }`}
                onClick={() => toggleFaq(idx)}
              >
                <div className="flex justify-between items-center p-6">
                  <h3 className="text-body-lg font-bold text-charcoal">{faq.q}</h3>
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

      {/* CTA Section */}
      <section className="py-20 md:py-24">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="bg-royal-purple rounded-[60px] p-10 lg:p-20 text-center text-on-primary relative overflow-hidden">
            <div className="relative z-10 space-y-8 max-w-3xl mx-auto">
              <h2 className="font-display-lg text-display-lg-mobile md:text-display-lg font-bold">Let&apos;s Learn Together!</h2>
              <p className="text-body-lg opacity-90 font-sans">
                Book a free trial lesson, or ask us about science lesson plans, pricing and scheduling for your
                child&apos;s grade and state.
              </p>
              <div className="flex flex-wrap justify-center gap-6 pt-4">
                <button
                  onClick={() => onNavigate('trial')}
                  className="bg-white text-royal-purple px-10 py-5 rounded-2xl font-headline-md text-headline-md font-bold hover:scale-105 transition-all shadow-xl cursor-pointer"
                >
                  Book Free Trial Now
                </button>
                <button
                  onClick={() => onNavigate('pricing')}
                  className="border-2 border-white/30 text-white px-10 py-5 rounded-2xl font-headline-md text-headline-md font-bold hover:bg-white/10 transition-all cursor-pointer"
                >
                  View Pricing
                </button>
              </div>
            </div>
            <div className="absolute -top-12 -left-12 w-64 h-64 bg-lime-green/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-primary-container/30 rounded-full blur-3xl"></div>
          </div>
        </div>
      </section>
    </div>
  );
}