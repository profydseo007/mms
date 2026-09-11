'use client';

import { useAppNavigate } from '@/lib/useAppNavigate';
import {
  Award,
  BookOpenCheck,
  Calculator,
  CheckCircle2,
  ClipboardCheck,
  GraduationCap,
  LineChart,
  School,
} from 'lucide-react';

const NCEA_STAGES = [
  { title: 'NCEA Level 1', subtitle: 'Year 11 foundations', icon: BookOpenCheck, points: ['Literacy and numeracy co-requisite', 'Core achievement standards', 'Study and assessment routines'] },
  { title: 'NCEA Level 2', subtitle: 'Year 12 progression', icon: LineChart, points: ['Subject pathway planning', 'Internal and external assessments', 'Merit and Excellence strategies'] },
  { title: 'NCEA Level 3', subtitle: 'Year 13 and UE', icon: GraduationCap, points: ['University Entrance requirements', 'Advanced subject standards', 'Exam and portfolio preparation'] },
];

const SUPPORT_AREAS = [
  { title: 'Numeracy and literacy', icon: Calculator, text: 'Build the co-requisite skills with clear explanations and timed practice.' },
  { title: 'Achievement standards', icon: ClipboardCheck, text: 'Understand exactly how internals and externals are assessed and marked.' },
  { title: 'Scholarship pathways', icon: Award, text: 'Extend strong students with deeper problem solving and exam technique.' },
];

export default function NZNceaPage() {
  const { navigateTo } = useAppNavigate();

  return (
    <main className="overflow-hidden bg-background text-on-surface">
      <section className="relative bg-white py-24">
        <div className="mx-auto grid max-w-max-width grid-cols-1 items-center gap-12 px-margin-mobile md:grid-cols-2 md:px-margin-desktop">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-primary"><School size={16} aria-hidden="true" /> New Zealand test preparation</div>
            <h1 className="font-display-lg text-display-lg-mobile text-charcoal font-bold md:text-display-lg">NCEA preparation for <span className="text-royal-purple">every level</span></h1>
            <p className="mt-6 max-w-xl text-body-lg text-on-surface-variant">One-to-one tutoring for NCEA Levels 1 to 3, the literacy and numeracy co-requisite, University Entrance, and NZQA Scholarship.</p>
            <button onClick={() => navigateTo('trial')} className="mt-8 rounded-xl bg-royal-purple px-8 py-4 font-bold text-white shadow-ambient">Book a Free Trial</button>
          </div>
          <div className="rounded-[2rem] bg-primary-fixed p-10 shadow-ambient"><GraduationCap className="mb-6 text-royal-purple" size={40} aria-hidden="true" /><h2 className="font-headline-lg text-charcoal font-bold">Plan backwards from the qualification</h2><p className="mt-4 text-on-surface-variant">We match each lesson to the standards, deadlines, and pathway your student is working towards.</p></div>
        </div>
      </section>
      <section className="bg-soft-gray py-24"><div className="mx-auto max-w-max-width px-margin-mobile md:px-margin-desktop"><div className="mb-12 text-center"><h2 className="font-headline-lg text-charcoal font-bold">Support across NCEA</h2><p className="mx-auto mt-4 max-w-2xl text-on-surface-variant">Focused preparation for the stage your student is approaching.</p></div><div className="grid grid-cols-1 gap-6 md:grid-cols-3">{NCEA_STAGES.map((stage) => (<article key={stage.title} className="bg-white p-8 shadow-ambient"><stage.icon className="mb-6 text-royal-purple" size={32} aria-hidden="true" /><h3 className="font-headline-md text-charcoal font-bold">{stage.title}</h3><p className="mt-1 text-label-md font-semibold text-royal-purple">{stage.subtitle}</p><ul className="mt-6 space-y-3 text-on-surface-variant">{stage.points.map((point) => (<li key={point} className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 shrink-0 text-lime-green" size={17} aria-hidden="true" />{point}</li>))}</ul></article>))}</div></div></section>
      <section className="bg-white py-24"><div className="mx-auto max-w-max-width px-margin-mobile md:px-margin-desktop"><h2 className="mb-12 text-center font-headline-lg text-charcoal font-bold">What we prepare</h2><div className="grid grid-cols-1 gap-8 md:grid-cols-3">{SUPPORT_AREAS.map((area) => (<div key={area.title} className="text-center"><area.icon className="mx-auto mb-5 text-royal-purple" size={32} aria-hidden="true" /><h3 className="font-headline-md text-charcoal font-bold">{area.title}</h3><p className="mt-3 text-on-surface-variant">{area.text}</p></div>))}</div></div></section>
    </main>
  );
}
