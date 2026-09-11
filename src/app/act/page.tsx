'use client';

import React, { useState } from 'react';
import { useAppNavigate } from '@/lib/useAppNavigate';
import { SpellCheck2, FunctionSquare, BookOpen, FlaskConical, CheckCircle2, ChevronDown, Clock } from 'lucide-react';

export default function USActPage() {
  const { navigateTo } = useAppNavigate();
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ fullName: '', phone: '', email: '', targetScore: "20–23", message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.fullName && formData.email) setFormSubmitted(true);
  };

  const faqs = [
    { q: "Is the ACT Science section still required?", a: "No, and this is the single biggest change. Under the Enhanced format Science became optional. Students choose whether to add it when registering, and if they do it is reported as a separate score rather than folded into the composite. Take it if your target colleges require or recommend it, or if your child is applying for a STEM major and science is a strength. Skip it if none of the colleges on the list ask for it and a shorter test day would help." },
    { q: "How is the ACT composite calculated now?", a: "From English, Math and Reading only. Each is scored 1 to 36 and the three are averaged, then rounded to the nearest whole number. Science, when taken, produces its own 1 to 36 score plus a STEM score averaging Math and Science. Anyone still describing the composite as an average of four sections is working from pre-2025 information." },
    { q: "Is the ACT adaptive like the digital SAT?", a: "No, and the distinction matters when choosing between them. The ACT is linear in both paper and digital form: every student sees the same questions in the same order regardless of performance. The digital SAT is multistage adaptive, so how a student performs in the first module determines the difficulty of the second. Students who find adaptive testing unsettling often prefer the predictability of the ACT." },
    { q: "Should my child take the ACT on paper or digitally?", a: "Both formats use the identical Enhanced content, so it comes down to working style. Paper allows annotating passages and writing directly on math problems, which many students rely on more than they realise. The digital version removes handwriting and scrolling suits some students better. Sit a timed practice test in each format before deciding, because the preference is usually obvious once tried." },
    { q: "The test is shorter now. Does that make it easier?", a: "No, and assuming so is a common trap. The Enhanced ACT has about a quarter fewer questions, but a disproportionate share of the removed items were the easier ones. Fewer questions also means each carries more weight, so a careless error costs more than it used to. Students report the shorter math section feeling harder rather than gentler." },
    { q: "What is a competitive ACT score?", a: "It depends entirely on the colleges being targeted. Broadly, most four-year institutions treat the mid-twenties as competitive, and highly selective universities look for the low-to-mid thirties. Rather than chasing a number in the abstract, we work backwards from the middle-50% ranges published by the specific colleges on your child's list, which is far more useful than a national benchmark." },
    { q: "Do I need the optional Writing test?", a: "Most colleges do not require it. A small number of selective universities still request it, and some states use it for placement purposes. Check each college on your list directly rather than assuming, because requirements shift and a missing Writing score cannot be added retroactively without retaking the whole test." },
    { q: "How long before the test date should we start?", a: "Ten to twelve weeks of consistent work is a realistic window for meaningful score movement, though it depends on the starting point and the size of the target gap. Pacing and technique respond quickly. Rebuilding genuine content gaps, particularly in math, takes considerably longer and is usually what limits a result." }
  ];

  return (
    <div className="bg-background text-on-surface font-body-md overflow-x-hidden">
      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-center py-16 overflow-hidden bg-white">
        <div className="container mx-auto px-margin-mobile md:px-margin-desktop max-w-max-width relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-gutter items-center">
            <div className="space-y-8">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-label-md text-label-md uppercase tracking-wider font-semibold">American College Testing</span>
              <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-charcoal leading-tight font-bold">
                ACT preparation online with <span className="text-royal-purple">expert US tutors</span>
              </h1>
              <p className="text-on-surface-variant font-body-lg text-body-lg max-w-xl">
                The ACT is accepted by every college and university in the United States. Since the Enhanced format arrived it is shorter, Science has become optional, and the composite is calculated differently. We prepare students for the test as it exists now, not the one their older sibling sat.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button onClick={() => navigateTo('trial')} className="bg-royal-purple text-on-primary px-8 py-4 rounded-xl font-headline-md hover:shadow-xl transition-all cursor-pointer font-medium">Book a Free Trial</button>
                <button onClick={() => { const el = document.getElementById('test-sections'); if (el) el.scrollIntoView({ behavior: 'smooth' }); }} className="border-2 border-royal-purple text-royal-purple px-8 py-4 rounded-xl font-headline-md hover:bg-royal-purple/5 transition-all cursor-pointer font-medium">View Test Sections</button>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img className="w-full h-[480px] object-cover" alt="A student preparing for the ACT with an online tutor" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBIC2148RcAcfRXxnZOcCNJC2Yr32DtyHa7d1TOD82ZBuHm5-qZ-Hfyjuic-1MLI6po5tOU8XT7FUpGqvgdHGzRwEInHX72mGWsxX-9nVAlOqT4sbH-gqYAG5YfaLbivq9Je_ZI7ity8vsit3aPnhFxzYCZ7Vd3uaU5jtItj5k130NViqjkJsMWfhwBn54qZk6DOAoC1XqgTsCbUlAYR6O8_Q9eb3Xz1j99Ujc64cOxRy0f-IOnZz3fvw" />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl max-w-xs border border-outline-variant/30">
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-10 h-10 rounded-full bg-lime-green flex items-center justify-center"><Clock size={20} className="text-charcoal" /></div>
                  <span className="font-headline-md text-charcoal font-bold">About 2 Hours</span>
                </div>
                <p className="text-on-surface-variant text-label-md">The Enhanced ACT core runs roughly two hours, or about two hours forty with optional Science.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Format */}
      <section className="py-24 bg-soft-gray">
        <div className="container mx-auto px-margin-mobile md:px-margin-desktop max-w-max-width">
          <div className="text-center mb-16">
            <h2 className="font-headline-lg text-headline-lg text-charcoal font-bold mb-4">Inside the Enhanced ACT</h2>
            <p className="text-on-surface-variant font-body-md max-w-2xl mx-auto">Three core sections make up the composite, with Science and Writing available as add-ons. Every section is strictly timed and the test is linear rather than adaptive, so pacing strategy carries real weight.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" id="test-sections">
            {[
              { Icon: SpellCheck2, color: "bg-primary-fixed", iconColor: "text-royal-purple", title: "English", time: "Core section", items: ["Usage, mechanics and punctuation", "Rhetorical skills and organisation", "Shorter passages than the legacy test"] },
              { Icon: FunctionSquare, color: "bg-secondary-container", iconColor: "text-secondary", title: "Math", time: "Core section", items: ["Algebra through trigonometry", "Four answer choices, not five", "No formula sheet provided"] },
              { Icon: BookOpen, color: "bg-lime-green/20", iconColor: "text-secondary", title: "Reading", time: "Core section", items: ["Passages across four genres", "Main idea, inference and evidence", "Shorter passages under the new format"] },
              { Icon: FlaskConical, color: "bg-royal-purple/10", iconColor: "text-royal-purple", title: "Science", time: "Optional add-on", items: ["Data interpretation, not factual recall", "Reported separately from the composite", "Generates a STEM score with Math"] },
            ].map((section) => (
              <div key={section.title} className="p-8 bg-white rounded-2xl shadow-[0px_4px_20px_rgba(0,0,0,0.05)] border border-transparent hover:border-royal-purple/20 transition-all group">
                <div className={`w-14 h-14 ${section.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}><section.Icon size={24} className={section.iconColor} /></div>
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
              <span className="inline-block px-4 py-1.5 rounded-full bg-lime-green/20 text-secondary font-label-md text-label-md uppercase tracking-wider font-semibold">Changed Since 2025</span>
              <h2 className="font-headline-lg text-headline-lg text-charcoal font-bold">The ACT Your Child Sits Is Not the One Most Guides Describe</h2>
              <p className="text-on-surface-variant font-body-md">The Enhanced ACT rolled out online in April 2025, on paper from September 2025, and reached school-day testing in spring 2026. It is roughly fifty minutes shorter than the legacy test, carries about a quarter fewer questions, and gives students noticeably more time per question.</p>
              <p className="text-on-surface-variant font-body-md">Do not read shorter as easier. Many of the more straightforward items were removed, so what remains skews harder and each question carries more weight toward the final score. Students working from older prep books are practising a test that no longer exists.</p>
            </div>
            <div className="bg-soft-gray p-10 rounded-[2rem] border border-outline-variant/30">
              <h3 className="font-headline-md text-charcoal font-bold mb-6">What Actually Changed</h3>
              <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle2 size={16} className="text-lime-green  mt-1" />
                <span className="text-body-md text-on-surface-variant">Science is now optional and sits outside the composite</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 size={16} className="text-lime-green  mt-1" />
                <span className="text-body-md text-on-surface-variant">Composite is calculated from English, Math and Reading only</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 size={16} className="text-lime-green  mt-1" />
                <span className="text-body-md text-on-surface-variant">Math dropped from five answer choices to four</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 size={16} className="text-lime-green  mt-1" />
                <span className="text-body-md text-on-surface-variant">Roughly 25% fewer questions with more time for each</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 size={16} className="text-lime-green  mt-1" />
                <span className="text-body-md text-on-surface-variant">Students choose between paper and digital delivery</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 size={16} className="text-lime-green  mt-1" />
                <span className="text-body-md text-on-surface-variant">Still linear, so unlike the digital SAT it never adapts to performance</span>
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
            <h2 className="font-headline-lg text-headline-lg text-charcoal font-bold mb-4">How ACT Scoring Works</h2>
            <p className="text-on-surface-variant font-body-md max-w-2xl mx-auto">Understanding the scale matters before setting a target, particularly now that Science sits outside the composite calculation.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-8 bg-white rounded-2xl border border-outline-variant/30">
              <p className="font-display-lg text-royal-purple font-bold mb-2">1–36</p>
              <h3 className="font-headline-md text-charcoal font-bold mb-3">Section and Composite</h3>
              <p className="text-on-surface-variant font-body-md">Each core section is scored 1 to 36, and the composite averages English, Math and Reading, rounded to the nearest whole number. Science, if taken, is reported on its own.</p>
            </div>
            <div className="p-8 bg-white rounded-2xl border border-outline-variant/30">
              <p className="font-display-lg text-royal-purple font-bold mb-2">STEM</p>
              <h3 className="font-headline-md text-charcoal font-bold mb-3">A Separate Signal</h3>
              <p className="text-on-surface-variant font-body-md">Students who sit Science also receive a STEM score averaging Math and Science, which some engineering and science programmes look at directly.</p>
            </div>
            <div className="p-8 bg-white rounded-2xl border border-outline-variant/30">
              <p className="font-display-lg text-royal-purple font-bold mb-2">2–12</p>
              <h3 className="font-headline-md text-charcoal font-bold mb-3">Optional Writing</h3>
              <p className="text-on-surface-variant font-body-md">The Writing test is scored separately and never affects the composite. Most colleges do not require it, but a handful still ask.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How we prepare */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-margin-mobile md:px-margin-desktop max-w-max-width">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-gutter items-start">
            <div className="space-y-6">
              <h2 className="font-headline-lg text-headline-lg text-charcoal font-bold">How We Prepare Students for the ACT</h2>
              <p className="text-on-surface-variant font-body-md">Content gaps and pacing problems look identical on a score report and need completely different fixes. The first job is telling them apart.</p>
              <button onClick={() => navigateTo('trial')} className="bg-royal-purple text-on-primary px-8 py-4 rounded-xl font-headline-md hover:shadow-xl transition-all cursor-pointer font-medium">Book a Free Diagnostic</button>
            </div>
            <div className="space-y-8">
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-royal-purple text-white rounded-full flex items-center justify-center font-bold text-lg">1</div>
              <div>
                <h3 className="font-headline-md text-charcoal font-bold mb-2">Diagnose Before Teaching</h3>
                <p className="text-on-surface-variant font-body-md">A full timed practice test under real conditions establishes section scores, a composite estimate, and crucially whether the issue is knowledge, speed or accuracy under pressure.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-royal-purple text-white rounded-full flex items-center justify-center font-bold text-lg">2</div>
              <div>
                <h3 className="font-headline-md text-charcoal font-bold mb-2">Decide on Science Early</h3>
                <p className="text-on-surface-variant font-body-md">Whether to sit the optional Science section depends on the colleges on your list and whether your child is heading for a STEM major. It is a strategic call worth making before preparation begins, not after.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-royal-purple text-white rounded-full flex items-center justify-center font-bold text-lg">3</div>
              <div>
                <h3 className="font-headline-md text-charcoal font-bold mb-2">Train Pace Alongside Content</h3>
                <p className="text-on-surface-variant font-body-md">The Enhanced ACT gives more time per question than the legacy test, but it remains faster than the SAT. We build timing into every session rather than treating it as a separate skill added at the end.</p>
              </div>
            </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-soft-gray">
        <div className="container mx-auto px-margin-mobile md:px-margin-desktop max-w-max-width">
          <div className="text-center mb-16"><h2 className="font-headline-lg text-headline-lg text-charcoal font-bold mb-4">ACT Preparation Questions, Answered</h2>
          <p className="text-on-surface-variant font-body-md max-w-2xl mx-auto">The questions American families ask us most often about the Enhanced format, Science, scoring and choosing between tests.</p></div>
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
              <p className="text-on-surface-variant font-body-lg">We start with a full timed diagnostic. You will know your section scores, composite estimate and whether Science is worth adding before the second session.</p>
              <div className="space-y-4">{["Full Enhanced ACT diagnostic", "Science section decision guidance", "Pacing and timing strategy"].map((pt) => <div key={pt} className="flex items-center gap-4"><CheckCircle2 size={20} className="text-royal-purple" /><span className="text-charcoal font-headline-md font-bold">{pt}</span></div>)}</div>
            </div>
            <div className="lg:w-1/2 p-12 lg:p-20 bg-white">
              {formSubmitted ? (
                <div className="text-center py-12 space-y-4">
                  <CheckCircle2 size={20} className="text-lime-green" />
                  <h3 className="font-headline-md text-charcoal font-bold">Request Submitted!</h3>
                  <p className="text-on-surface-variant">Thank you <strong>{formData.fullName}</strong>. We&apos;ll be in touch to arrange your ACT trial lesson.</p>
                  <button onClick={() => setFormSubmitted(false)} className="bg-royal-purple text-on-primary px-6 py-2.5 rounded-xl font-medium cursor-pointer mt-4">Submit Another</button>
                </div>
              ) : (
                <form className="grid grid-cols-1 gap-6" onSubmit={handleSubmit}>
                  <div className="space-y-2"><label className="font-label-md text-charcoal font-medium">Full Name</label><input required value={formData.fullName} onChange={(e) => setFormData({ ...formData, fullName: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-outline-variant focus:ring-2 focus:ring-royal-purple outline-none transition-all" placeholder="Student&apos;s full name" type="text" /></div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2"><label className="font-label-md text-charcoal font-medium">Phone</label><input required value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-outline-variant focus:ring-2 focus:ring-royal-purple outline-none transition-all" placeholder="+1" type="tel" /></div>
                    <div className="space-y-2"><label className="font-label-md text-charcoal font-medium">Email</label><input required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-outline-variant focus:ring-2 focus:ring-royal-purple outline-none transition-all" placeholder="email@example.com" type="email" /></div>
                  </div>
                  <div className="space-y-2"><label className="font-label-md text-charcoal font-medium">Target Composite Score</label><select value={formData.targetScore} onChange={(e) => setFormData({ ...formData, targetScore: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-outline-variant focus:ring-2 focus:ring-royal-purple outline-none transition-all bg-white">{["20–23", "24–27", "28–30", "31–33", "34–36"].map((s) => <option key={s}>{s}</option>)}</select></div>
                  <div className="space-y-2"><label className="font-label-md text-charcoal font-medium">Additional Message</label><textarea value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-outline-variant focus:ring-2 focus:ring-royal-purple outline-none transition-all" placeholder="Current score, test date, weakest section..." rows={3} /></div>
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