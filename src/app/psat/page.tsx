'use client';

import React, { useState } from 'react';
import { useAppNavigate } from '@/lib/useAppNavigate';
import { Award, CheckCircle2, ChevronDown } from 'lucide-react';

export default function USPsatPage() {
  const { navigateTo } = useAppNavigate();
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ fullName: '', phone: '', email: '', targetScore: "9th Grade", message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.fullName && formData.email) setFormSubmitted(true);
  };

  const faqs = [
    { q: "Does the PSAT actually matter or is it just practice?", a: "Both, depending on the year. In ninth and tenth grade it is genuinely a low-stakes diagnostic and colleges never see it. The junior year sitting is different: it doubles as the National Merit Scholarship Qualifying Test. Since there is no retake for that purpose, a student who underperforms in October of eleventh grade has no second chance at it, which is why the two years should not be approached the same way." },
    { q: "How does National Merit qualification work?", a: "It uses a Selection Index calculated from the section scores rather than the headline total, and the qualifying threshold is set separately for each state and moves year to year. That means the score needed in one state can differ noticeably from another. Because thresholds are published after the fact, the only sensible strategy is to aim comfortably above recent years' figures for your state rather than at them." },
    { q: "Is the PSAT the same as the digital SAT?", a: "Very nearly. Same Bluebook app, same two sections, same multistage adaptive module structure, same built-in Desmos calculator. The differences are scale, 320 to 1520 rather than 400 to 1600, and slightly gentler content pitched at earlier grades. This close alignment is what makes the PSAT such a reliable predictor of SAT performance." },
    { q: "Do colleges see PSAT scores?", a: "Not as part of an application. Colleges do not receive PSAT scores for admissions purposes and no student is assessed on them. What can happen is that a strong score triggers outreach through the College Board's student search service, so families notice an increase in college mail. That is marketing rather than admissions, though it can be genuinely useful for discovering institutions." },
    { q: "When is the PSAT taken?", a: "In the autumn, usually October, and it is administered at school rather than booked independently like the SAT. Because registration runs through the school, deadlines and arrangements vary, so the counselling office rather than the College Board website is the right first port of call." },
    { q: "Should my child prepare for the PSAT at all?", a: "For the tenth grade sitting, light familiarity with the format is enough and the diagnostic value comes from an honest attempt. For eleventh grade, preparation is genuinely worthwhile, both for National Merit and because the score report becomes the foundation of an SAT plan. Students who prepare in sophomore year rather than the summer before junior year consistently have an easier time of it." },
    { q: "What if my child does badly on the PSAT?", a: "In ninth or tenth grade, very little follows from it beyond a useful diagnostic. In eleventh grade it closes the National Merit route, but nothing else: colleges never see the score, and SAT preparation continues unaffected. The most productive response is to treat the score report as data about which areas need work rather than as a verdict." },
    { q: "Can preparing for the PSAT help with the SAT?", a: "Substantially, and this is the strongest practical argument for taking it seriously. The platform, the adaptive routing and the question domains are shared, so time spent on PSAT preparation transfers almost entirely. Students who prepare properly for the PSAT typically arrive at SAT preparation already familiar with Bluebook and with the strategic demands of adaptive testing." }
  ];

  return (
    <div className="bg-background text-on-surface font-body-md overflow-x-hidden">
      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-center py-16 overflow-hidden bg-white">
        <div className="container mx-auto px-margin-mobile md:px-margin-desktop max-w-max-width relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-gutter items-center">
            <div className="space-y-8">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-label-md text-label-md uppercase tracking-wider font-semibold">PSAT / NMSQT</span>
              <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-charcoal leading-tight font-bold">
                PSAT preparation online with <span className="text-royal-purple">expert US tutors</span>
              </h1>
              <p className="text-on-surface-variant font-body-lg text-body-lg max-w-xl">
                The PSAT/NMSQT is taken in the autumn and does two jobs at once: it previews the digital SAT and, in eleventh grade, serves as the qualifying test for the National Merit Scholarship Program. Most families treat it as practice and discover the second job too late.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button onClick={() => navigateTo('trial')} className="bg-royal-purple text-on-primary px-8 py-4 rounded-xl font-headline-md hover:shadow-xl transition-all cursor-pointer font-medium">Book a Free Trial</button>
                <button onClick={() => { const el = document.getElementById('test-sections'); if (el) el.scrollIntoView({ behavior: 'smooth' }); }} className="border-2 border-royal-purple text-royal-purple px-8 py-4 rounded-xl font-headline-md hover:bg-royal-purple/5 transition-all cursor-pointer font-medium">See How It Works</button>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img className="w-full h-[480px] object-cover" alt="A student preparing for the PSAT with an online tutor" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBIC2148RcAcfRXxnZOcCNJC2Yr32DtyHa7d1TOD82ZBuHm5-qZ-Hfyjuic-1MLI6po5tOU8XT7FUpGqvgdHGzRwEInHX72mGWsxX-9nVAlOqT4sbH-gqYAG5YfaLbivq9Je_ZI7ity8vsit3aPnhFxzYCZ7Vd3uaU5jtItj5k130NViqjkJsMWfhwBn54qZk6DOAoC1XqgTsCbUlAYR6O8_Q9eb3Xz1j99Ujc64cOxRy0f-IOnZz3fvw" />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl max-w-xs border border-outline-variant/30">
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-10 h-10 rounded-full bg-lime-green flex items-center justify-center"><Award size={20} className="text-charcoal" /></div>
                  <span className="font-headline-md text-charcoal font-bold">National Merit</span>
                </div>
                <p className="text-on-surface-variant text-label-md">The junior-year PSAT/NMSQT is the entry route to National Merit recognition and scholarship consideration.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Format */}
      <section className="py-24 bg-soft-gray">
        <div className="container mx-auto px-margin-mobile md:px-margin-desktop max-w-max-width">
          <div className="text-center mb-16">
            <h2 className="font-headline-lg text-headline-lg text-charcoal font-bold mb-4">Inside the Digital PSAT</h2>
            <p className="text-on-surface-variant font-body-md max-w-2xl mx-auto">The PSAT mirrors the digital SAT closely: the same Bluebook app, the same adaptive module structure, the same two sections. Only the scale and the stakes differ.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" id="test-sections">
            {[
              { icon: "menu_book", color: "bg-primary-fixed", iconColor: "text-royal-purple", title: "Reading & Writing", time: "Module 1", items: ["Short passages, one question each", "Craft, structure and conventions", "Same domains as the digital SAT"] },
              { icon: "auto_stories", color: "bg-lime-green/20", iconColor: "text-secondary", title: "Reading & Writing", time: "Module 2 (adaptive)", items: ["Routed by module 1 performance", "Expression of ideas", "Information and ideas"] },
              { icon: "functions", color: "bg-secondary-container", iconColor: "text-secondary", title: "Math", time: "Module 1", items: ["Algebra and problem solving", "Calculator permitted throughout", "Built-in Desmos graphing tool"] },
              { icon: "calculate", color: "bg-royal-purple/10", iconColor: "text-royal-purple", title: "Math", time: "Module 2 (adaptive)", items: ["Routed by module 1 performance", "Advanced maths and geometry", "Student-produced responses"] },
            ].map((section) => (
              <div key={section.title} className="p-8 bg-white rounded-2xl shadow-[0px_4px_20px_rgba(0,0,0,0.05)] border border-transparent hover:border-royal-purple/20 transition-all group">
                <div className={`w-14 h-14 ${section.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}><section.icon size={24} className={section.iconColor} /></div>
                <h3 className="font-headline-md text-charcoal font-bold mb-1">{section.title}</h3>
                <p className="text-label-sm text-royal-purple font-semibold mb-4">{section.time}</p>
                <ul className="space-y-2">{section.items.map((item) => <li key={item} className="flex items-start gap-2 text-label-md text-on-surface-variant"><CheckCircle2 size={16} className="text-lime-green  mt-0.5" />{item}</li>)}</ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What changed */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-margin-mobile md:px-margin-desktop max-w-max-width">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-gutter items-center">
            <div className="space-y-6">
              <span className="inline-block px-4 py-1.5 rounded-full bg-lime-green/20 text-secondary font-label-md text-label-md uppercase tracking-wider font-semibold">Why It Matters More Than Families Think</span>
              <h2 className="font-headline-lg text-headline-lg text-charcoal font-bold">The Test That Is Practice and Also Not Practice</h2>
              <p className="text-on-surface-variant font-body-md">In ninth and tenth grade the PSAT is genuinely low stakes, and treating it as a free diagnostic is the right approach. The eleventh grade sitting is different: it is the National Merit Scholarship Qualifying Test, and it is the only opportunity a student gets.</p>
              <p className="text-on-surface-variant font-body-md">There is no retake for National Merit purposes. A student having an ordinary morning in October of junior year cannot sit it again in the spring. That asymmetry is the single most useful thing a family can understand about this test, and it is why preparation before junior year is worth more than most people assume.</p>
            </div>
            <div className="bg-soft-gray p-10 rounded-[2rem] border border-outline-variant/30">
              <h3 className="font-headline-md text-charcoal font-bold mb-6">What to Know</h3>
              <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle2 size={16} className="text-lime-green  mt-1" />
                <span className="text-body-md text-on-surface-variant">Delivered digitally in Bluebook, matching the SAT experience</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 size={16} className="text-lime-green  mt-1" />
                <span className="text-body-md text-on-surface-variant">Adaptive modules work exactly as they do on the SAT</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 size={16} className="text-lime-green  mt-1" />
                <span className="text-body-md text-on-surface-variant">Scored on a 320 to 1520 scale rather than 1600</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 size={16} className="text-lime-green  mt-1" />
                <span className="text-body-md text-on-surface-variant">Only the junior year sitting counts for National Merit</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 size={16} className="text-lime-green  mt-1" />
                <span className="text-body-md text-on-surface-variant">Selection Index thresholds vary by state each year</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 size={16} className="text-lime-green  mt-1" />
                <span className="text-body-md text-on-surface-variant">A strong result can also generate college outreach and interest</span>
              </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Scoring */}
      <section className="py-24 bg-soft-gray">
        <div className="container mx-auto px-margin-mobile md:px-margin-desktop max-w-max-width">
          <div className="text-center mb-16">
            <h2 className="font-headline-lg text-headline-lg text-charcoal font-bold mb-4">How PSAT Scoring Works</h2>
            <p className="text-on-surface-variant font-body-md max-w-2xl mx-auto">The scale is deliberately close to the SAT's, which makes it a genuinely useful predictor. National Merit, however, uses a different calculation entirely.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-8 bg-white rounded-2xl border border-outline-variant/30">
              <p className="font-display-lg text-royal-purple font-bold mb-2">320–1520</p>
              <h3 className="font-headline-md text-charcoal font-bold mb-3">Total Score</h3>
              <p className="text-on-surface-variant font-body-md">Reading and Writing and Math are each scored 160 to 760. The slightly lower ceiling than the SAT reflects the test being pitched at earlier grade levels.</p>
            </div>
            <div className="p-8 bg-white rounded-2xl border border-outline-variant/30">
              <p className="font-display-lg text-royal-purple font-bold mb-2">Index</p>
              <h3 className="font-headline-md text-charcoal font-bold mb-3">Selection Index</h3>
              <p className="text-on-surface-variant font-body-md">National Merit uses a Selection Index derived from section scores rather than the total. Qualifying thresholds are set by state and shift year to year.</p>
            </div>
            <div className="p-8 bg-white rounded-2xl border border-outline-variant/30">
              <p className="font-display-lg text-royal-purple font-bold mb-2">Preview</p>
              <h3 className="font-headline-md text-charcoal font-bold mb-3">SAT Predictor</h3>
              <p className="text-on-surface-variant font-body-md">Because the content, platform and adaptive structure align with the SAT, the PSAT is a reliable early indicator of where SAT preparation should focus.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How we prepare */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-margin-mobile md:px-margin-desktop max-w-max-width">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-gutter items-start">
            <div className="space-y-6">
              <h2 className="font-headline-lg text-headline-lg text-charcoal font-bold">How We Prepare Students for the PSAT</h2>
              <p className="text-on-surface-variant font-body-md">Preparation splits by grade. What is sensible in tenth grade and what is necessary in eleventh are different things.</p>
              <button onClick={() => navigateTo('trial')} className="bg-royal-purple text-on-primary px-8 py-4 rounded-xl font-headline-md hover:shadow-xl transition-all cursor-pointer font-medium">Book a Free Diagnostic</button>
            </div>
            <div className="space-y-8">
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-royal-purple text-white rounded-full flex items-center justify-center font-bold text-lg">1</div>
              <div>
                <h3 className="font-headline-md text-charcoal font-bold mb-2">Start in Sophomore Year</h3>
                <p className="text-on-surface-variant font-body-md">The most effective PSAT preparation happens the year before the sitting that counts. Working on foundations in tenth grade means junior year is refinement rather than repair.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-royal-purple text-white rounded-full flex items-center justify-center font-bold text-lg">2</div>
              <div>
                <h3 className="font-headline-md text-charcoal font-bold mb-2">Treat Junior Year as the Real Thing</h3>
                <p className="text-on-surface-variant font-body-md">Because National Merit offers no second attempt, we prepare the eleventh grade sitting with the seriousness families usually reserve for the SAT itself, including full timed practice in Bluebook.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-royal-purple text-white rounded-full flex items-center justify-center font-bold text-lg">3</div>
              <div>
                <h3 className="font-headline-md text-charcoal font-bold mb-2">Convert It Into an SAT Plan</h3>
                <p className="text-on-surface-variant font-body-md">Whatever the outcome, the score report is a detailed map of where SAT preparation should concentrate. We turn it into a specific plan rather than filing it away.</p>
              </div>
            </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-soft-gray">
        <div className="container mx-auto px-margin-mobile md:px-margin-desktop max-w-max-width">
          <div className="text-center mb-16"><h2 className="font-headline-lg text-headline-lg text-charcoal font-bold mb-4">PSAT Preparation Questions, Answered</h2>
          <p className="text-on-surface-variant font-body-md max-w-2xl mx-auto">The questions American families ask us most often about National Merit, scoring and whether the PSAT is worth preparing for.</p></div>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-surface-container-highest rounded-2xl overflow-hidden bg-white">
                <button className="w-full flex items-center justify-between p-6 text-left hover:bg-soft-gray transition-colors font-headline-md text-[18px] font-bold cursor-pointer gap-4" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  <span>{faq.q}</span><ChevronDown size={22} className={`shrink-0 transition-transform duration-300 ${openFaq === i ? 'rotate-180 text-royal-purple' : ''}`} />
                </button>
                {openFaq === i && <div className="bg-soft-gray p-6 text-on-surface-variant font-body-md border-t border-surface-container-highest">{faq.a}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="py-24 bg-royal-purple overflow-hidden">
        <div className="container mx-auto px-margin-mobile md:px-margin-desktop max-w-max-width relative z-10">
          <div className="bg-white rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col lg:flex-row">
            <div className="lg:w-1/2 p-12 lg:p-20 space-y-8 bg-surface">
              <h2 className="font-display-lg text-headline-lg md:text-display-lg text-charcoal font-bold">Book a Free Trial Lesson</h2>
              <p className="text-on-surface-variant font-body-lg">We start with a full timed diagnostic in Bluebook conditions and tell you honestly whether National Merit is a realistic target for your state, and what it would take.</p>
              <div className="space-y-4">{["Full digital PSAT diagnostic", "National Merit Selection Index guidance", "A converted plan for the SAT"].map((pt) => <div key={pt} className="flex items-center gap-4"><CheckCircle2 size={20} className="text-royal-purple" /><span className="text-charcoal font-headline-md font-bold">{pt}</span></div>)}</div>
            </div>
            <div className="lg:w-1/2 p-12 lg:p-20 bg-white">
              {formSubmitted ? (
                <div className="text-center py-12 space-y-4">
                  <CheckCircle2 size={20} className="text-lime-green" />
                  <h3 className="font-headline-md text-charcoal font-bold">Request Submitted!</h3>
                  <p className="text-on-surface-variant">Thank you <strong>{formData.fullName}</strong>. We&apos;ll be in touch to arrange your PSAT trial lesson.</p>
                  <button onClick={() => setFormSubmitted(false)} className="bg-royal-purple text-on-primary px-6 py-2.5 rounded-xl font-medium cursor-pointer mt-4">Submit Another</button>
                </div>
              ) : (
                <form className="grid grid-cols-1 gap-6" onSubmit={handleSubmit}>
                  <div className="space-y-2"><label className="font-label-md text-charcoal font-medium">Full Name</label><input required value={formData.fullName} onChange={(e) => setFormData({ ...formData, fullName: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-outline-variant focus:ring-2 focus:ring-royal-purple outline-none transition-all" placeholder="Student&apos;s full name" type="text" /></div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2"><label className="font-label-md text-charcoal font-medium">Phone</label><input required value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-outline-variant focus:ring-2 focus:ring-royal-purple outline-none transition-all" placeholder="+1" type="tel" /></div>
                    <div className="space-y-2"><label className="font-label-md text-charcoal font-medium">Email</label><input required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-outline-variant focus:ring-2 focus:ring-royal-purple outline-none transition-all" placeholder="email@example.com" type="email" /></div>
                  </div>
                  <div className="space-y-2"><label className="font-label-md text-charcoal font-medium">Grade Level</label><select value={formData.targetScore} onChange={(e) => setFormData({ ...formData, targetScore: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-outline-variant focus:ring-2 focus:ring-royal-purple outline-none transition-all bg-white">{["9th Grade", "10th Grade", "11th Grade (NMSQT)"].map((s) => <option key={s}>{s}</option>)}</select></div>
                  <div className="space-y-2"><label className="font-label-md text-charcoal font-medium">Additional Message</label><textarea value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-outline-variant focus:ring-2 focus:ring-royal-purple outline-none transition-all" placeholder="Grade, test date, National Merit goal..." rows={3} /></div>
                  <button className="w-full bg-royal-purple text-on-primary font-headline-md py-4 rounded-xl shadow-lg hover:shadow-xl active:scale-95 transition-all cursor-pointer font-bold" type="submit">Send Request</button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}