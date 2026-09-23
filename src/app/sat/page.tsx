'use client';

import React, { useState } from 'react';
import { useAppNavigate } from '@/lib/useAppNavigate';
import { BookOpen, BookMarked, Calculator, FunctionSquare, CheckCircle2, ChevronDown, Laptop } from 'lucide-react';

export default function USSatPage() {
  const { navigateTo } = useAppNavigate();
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ fullName: '', phone: '', email: '', targetScore: "1000–1190", message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.fullName && formData.email) setFormSubmitted(true);
  };

  const faqs = [
    { q: "What does adaptive actually mean on the digital SAT?", a: "Each section is split into two modules. The first contains questions of mixed difficulty, and performance there routes the student into either a harder or an easier second module. The harder route provides access to the top of the scoring range. This is multistage adaptive rather than question-by-question adaptive, so an individual mistake does not immediately change the next question, but the pattern across module one genuinely matters." },
    { q: "Is the paper SAT still available?", a: "No. The SAT went fully digital worldwide in March 2024 and the paper version has been retired. Testing happens in the College Board's Bluebook app on a laptop or tablet, either the student's own device or one supplied by the test centre. Any prep book printed before 2024 describes a test that no longer exists." },
    { q: "Can my child use a calculator on the whole maths section?", a: "Yes, and this is a meaningful change from the paper test, which had a no-calculator portion. A graphing calculator is also built into Bluebook itself, so students can use the on-screen Desmos tool or bring an approved handheld. Practising with whichever they intend to use on the day is worth doing early, because switching tools late rarely goes well." },
    { q: "Should my child take the SAT or the ACT?", a: "Every US college accepts both, so it comes down to fit rather than preference on the college side. The SAT is adaptive, allows a calculator throughout, and gives more time per question. The ACT is linear and faster paced, and now has optional Science. Students who dislike the idea of a test reacting to them often prefer the ACT's predictability. The reliable way to decide is a timed practice test of each current format and a comparison of the outcomes." },
    { q: "How long is the digital SAT?", a: "About two hours and fourteen minutes, roughly forty-five minutes shorter than the old paper test. That reduction is real but it comes with a trade-off: fewer questions means each carries more weight, so the cost of a careless error is higher than it used to be." },
    { q: "What is a good SAT score?", a: "It depends on the colleges being targeted rather than on any national figure. The useful exercise is looking up the published middle-50% range for each college on your child's list and setting a target against that. A score that is competitive for one institution can be well below the median at another, and chasing an abstract number wastes preparation time." },
    { q: "Are colleges still test-optional?", a: "Many are, though the picture has shifted. A large number of institutions remain test-optional or test-free, while several highly selective universities have reinstated testing requirements in recent admissions cycles. Because policies change year to year, check each college directly for the cycle your child is applying in. Where a college is genuinely optional, a strong score still helps and a weak one can be withheld." },
    { q: "When should we start preparing?", a: "Most families see meaningful movement from ten to twelve weeks of consistent work, and starting earlier than feels necessary is almost always the better call. Test technique and platform familiarity improve quickly. Genuine content gaps, particularly in algebra and advanced maths, take longer and are usually the real ceiling on a score." }
  ];

  return (
    <div className="bg-background text-on-surface font-body-md overflow-x-hidden">
      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-center py-16 overflow-hidden bg-white">
        <div className="container mx-auto px-margin-mobile md:px-margin-desktop max-w-max-width relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-gutter items-center">
            <div className="space-y-8">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-label-md text-label-md uppercase tracking-wider font-semibold">Scholastic Assessment Test</span>
              <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-charcoal leading-tight font-bold">
                SAT preparation online with <span className="text-royal-purple">expert US tutors</span>
              </h1>
              <p className="text-on-surface-variant font-body-lg text-body-lg max-w-xl">
                The SAT has been fully digital since March 2024. It runs about two hours and fourteen minutes, adapts to how a student performs, and allows a calculator throughout the maths. Preparation built for the old paper test no longer transfers cleanly.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button onClick={() => navigateTo('trial')} className="bg-royal-purple text-on-primary px-8 py-4 rounded-xl font-headline-md hover:shadow-xl transition-all cursor-pointer font-medium">Book a Free Trial</button>
                <button onClick={() => { const el = document.getElementById('test-sections'); if (el) el.scrollIntoView({ behavior: 'smooth' }); }} className="border-2 border-royal-purple text-royal-purple px-8 py-4 rounded-xl font-headline-md hover:bg-royal-purple/5 transition-all cursor-pointer font-medium">See the Adaptive Format</button>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img className="w-full h-[480px] object-cover" alt="A student preparing for the digital SAT with an online tutor" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBIC2148RcAcfRXxnZOcCNJC2Yr32DtyHa7d1TOD82ZBuHm5-qZ-Hfyjuic-1MLI6po5tOU8XT7FUpGqvgdHGzRwEInHX72mGWsxX-9nVAlOqT4sbH-gqYAG5YfaLbivq9Je_ZI7ity8vsit3aPnhFxzYCZ7Vd3uaU5jtItj5k130NViqjkJsMWfhwBn54qZk6DOAoC1XqgTsCbUlAYR6O8_Q9eb3Xz1j99Ujc64cOxRy0f-IOnZz3fvw" />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl max-w-xs border border-outline-variant/30">
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-10 h-10 rounded-full bg-lime-green flex items-center justify-center"><Laptop size={20} className="text-charcoal" /></div>
                  <span className="font-headline-md text-charcoal font-bold">2 Hours 14 Minutes</span>
                </div>
                <p className="text-on-surface-variant text-label-md">Two adaptive sections delivered through the College Board Bluebook app on a laptop or tablet.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Format */}
      <section className="py-24 bg-soft-gray">
        <div className="container mx-auto px-margin-mobile md:px-margin-desktop max-w-max-width">
          <div className="text-center mb-16">
            <h2 className="font-headline-lg text-headline-lg text-charcoal font-bold mb-4">Inside the Digital SAT</h2>
            <p className="text-on-surface-variant font-body-md max-w-2xl mx-auto">Two sections, each split into two modules. The second module in each section adjusts in difficulty according to performance in the first, which changes what effective preparation looks like.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" id="test-sections">
            {[
              { Icon: BookOpen, color: "bg-primary-fixed", iconColor: "text-royal-purple", title: "Reading & Writing", time: "Module 1", items: ["Short passages, one question each", "Craft and structure, information and ideas", "Rapid context switching between texts"] },
              { Icon: BookMarked, color: "bg-lime-green/20", iconColor: "text-secondary", title: "Reading & Writing", time: "Module 2 (adaptive)", items: ["Difficulty set by module 1 performance", "Standard English conventions", "Expression of ideas"] },
              { Icon: FunctionSquare, color: "bg-secondary-container", iconColor: "text-secondary", title: "Math", time: "Module 1", items: ["Algebra, advanced maths, problem solving", "Calculator permitted throughout", "Built-in Desmos graphing calculator"] },
              { Icon: Calculator, color: "bg-royal-purple/10", iconColor: "text-royal-purple", title: "Math", time: "Module 2 (adaptive)", items: ["Difficulty set by module 1 performance", "Geometry and trigonometry", "Student-produced response questions"] },
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
              <span className="inline-block px-4 py-1.5 rounded-full bg-lime-green/20 text-secondary font-label-md text-label-md uppercase tracking-wider font-semibold">Fully Digital Since 2024</span>
              <h2 className="font-headline-lg text-headline-lg text-charcoal font-bold">Why Early Accuracy Matters More Than It Used To</h2>
              <p className="text-on-surface-variant font-body-md">The digital SAT is multistage adaptive. Each section opens with a module of mixed difficulty, and performance there determines whether the second module draws from a harder or easier pool. The harder pool carries access to the upper end of the scale.</p>
              <p className="text-on-surface-variant font-body-md">The practical consequence is that the opening minutes of each section matter disproportionately. A student who starts carelessly and settles down later is capped before they find their rhythm. That is a genuinely different strategic problem from the paper test, where a slow start could be recovered.</p>
            </div>
            <div className="bg-soft-gray p-10 rounded-[2rem] border border-outline-variant/30">
              <h3 className="font-headline-md text-charcoal font-bold mb-6">What Digital Changed</h3>
              <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle2 size={16} className="text-lime-green  mt-1" />
                <span className="text-body-md text-on-surface-variant">Taken in the Bluebook app on a laptop or tablet</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 size={16} className="text-lime-green  mt-1" />
                <span className="text-body-md text-on-surface-variant">About two hours fourteen minutes, down from three hours</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 size={16} className="text-lime-green  mt-1" />
                <span className="text-body-md text-on-surface-variant">Reading and Writing combined into a single section</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 size={16} className="text-lime-green  mt-1" />
                <span className="text-body-md text-on-surface-variant">Calculator allowed across the whole maths section</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 size={16} className="text-lime-green  mt-1" />
                <span className="text-body-md text-on-surface-variant">Shorter passages with one question each</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 size={16} className="text-lime-green  mt-1" />
                <span className="text-body-md text-on-surface-variant">The optional essay was retired permanently in 2021</span>
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
            <h2 className="font-headline-lg text-headline-lg text-charcoal font-bold mb-4">How Digital SAT Scoring Works</h2>
            <p className="text-on-surface-variant font-body-md max-w-2xl mx-auto">The familiar 1600 scale survived the move to digital, but how a student reaches the upper end has changed.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-8 bg-white rounded-2xl border border-outline-variant/30">
              <p className="font-display-lg text-royal-purple font-bold mb-2">1600</p>
              <h3 className="font-headline-md text-charcoal font-bold mb-3">Total Score</h3>
              <p className="text-on-surface-variant font-body-md">Reading and Writing and Math are each scored 200 to 800 and added together. The scale is unchanged from the paper era, which keeps historical college data broadly comparable.</p>
            </div>
            <div className="p-8 bg-white rounded-2xl border border-outline-variant/30">
              <p className="font-display-lg text-royal-purple font-bold mb-2">Adaptive</p>
              <h3 className="font-headline-md text-charcoal font-bold mb-3">Module Routing</h3>
              <p className="text-on-surface-variant font-body-md">Performance in the first module of each section determines the difficulty of the second. Reaching the highest scores requires routing into the harder second module.</p>
            </div>
            <div className="p-8 bg-white rounded-2xl border border-outline-variant/30">
              <p className="font-display-lg text-royal-purple font-bold mb-2">Days</p>
              <h3 className="font-headline-md text-charcoal font-bold mb-3">Faster Results</h3>
              <p className="text-on-surface-variant font-body-md">Digital delivery returns scores considerably faster than the paper test did, which matters when planning a retake around application deadlines.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How we prepare */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-margin-mobile md:px-margin-desktop max-w-max-width">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-gutter items-start">
            <div className="space-y-6">
              <h2 className="font-headline-lg text-headline-lg text-charcoal font-bold">How We Prepare Students for the Digital SAT</h2>
              <p className="text-on-surface-variant font-body-md">Adaptive testing rewards a different approach from the paper SAT. Preparation has to account for the routing, not just the content.</p>
              <button onClick={() => navigateTo('trial')} className="bg-royal-purple text-on-primary px-8 py-4 rounded-xl font-headline-md hover:shadow-xl transition-all cursor-pointer font-medium">Book a Free Diagnostic</button>
            </div>
            <div className="space-y-8">
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-royal-purple text-white rounded-full flex items-center justify-center font-bold text-lg">1</div>
              <div>
                <h3 className="font-headline-md text-charcoal font-bold mb-2">Practise in Bluebook, Not on Paper</h3>
                <p className="text-on-surface-variant font-body-md">Familiarity with the interface, the annotation tools and the built-in Desmos calculator is worth real points. Students who first meet the platform on test day lose time to navigation rather than to the questions.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-royal-purple text-white rounded-full flex items-center justify-center font-bold text-lg">2</div>
              <div>
                <h3 className="font-headline-md text-charcoal font-bold mb-2">Front-Load Accuracy</h3>
                <p className="text-on-surface-variant font-body-md">Because module one determines routing, we drill precision in the opening stretch of each section specifically. This is the single biggest strategic difference from paper-test preparation.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-royal-purple text-white rounded-full flex items-center justify-center font-bold text-lg">3</div>
              <div>
                <h3 className="font-headline-md text-charcoal font-bold mb-2">Use Desmos Deliberately</h3>
                <p className="text-on-surface-variant font-body-md">The graphing calculator is built into the app and available throughout the maths section. Used well it turns several question types into quick visual checks, but only for students who have practised with it beforehand.</p>
              </div>
            </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-soft-gray">
        <div className="container mx-auto px-margin-mobile md:px-margin-desktop max-w-max-width">
          <div className="text-center mb-16"><h2 className="font-headline-lg text-headline-lg text-charcoal font-bold mb-4">SAT Preparation Questions, Answered</h2>
          <p className="text-on-surface-variant font-body-md max-w-2xl mx-auto">The questions American families ask us most often about the digital format, adaptive scoring and choosing between the SAT and ACT.</p></div>
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
              <p className="text-on-surface-variant font-body-lg">We start with a full timed diagnostic inside Bluebook conditions. You will know section scores, a total estimate and whether routing is the limiting factor before the second session.</p>
              <div className="space-y-4">{["Full digital SAT diagnostic", "Adaptive module strategy", "Bluebook and Desmos familiarity"].map((pt) => <div key={pt} className="flex items-center gap-4"><CheckCircle2 size={20} className="text-royal-purple" /><span className="text-charcoal font-headline-md font-bold">{pt}</span></div>)}</div>
            </div>
            <div className="lg:w-1/2 p-12 lg:p-20 bg-white">
              {formSubmitted ? (
                <div className="text-center py-12 space-y-4">
                  <CheckCircle2 size={20} className="text-lime-green" />
                  <h3 className="font-headline-md text-charcoal font-bold">Request Submitted!</h3>
                  <p className="text-on-surface-variant">Thank you <strong>{formData.fullName}</strong>. We&apos;ll be in touch to arrange your SAT trial lesson.</p>
                  <button onClick={() => setFormSubmitted(false)} className="bg-royal-purple text-on-primary px-6 py-2.5 rounded-xl font-medium cursor-pointer mt-4">Submit Another</button>
                </div>
              ) : (
                <form className="grid grid-cols-1 gap-6" onSubmit={handleSubmit}>
                  <div className="space-y-2"><label className="font-label-md text-charcoal font-medium">Full Name</label><input required value={formData.fullName} onChange={(e) => setFormData({ ...formData, fullName: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-outline-variant focus:ring-2 focus:ring-royal-purple outline-none transition-all" placeholder="Student&apos;s full name" type="text" /></div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2"><label className="font-label-md text-charcoal font-medium">Phone</label><input required value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-outline-variant focus:ring-2 focus:ring-royal-purple outline-none transition-all" placeholder="+1" type="tel" /></div>
                    <div className="space-y-2"><label className="font-label-md text-charcoal font-medium">Email</label><input required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-outline-variant focus:ring-2 focus:ring-royal-purple outline-none transition-all" placeholder="email@example.com" type="email" /></div>
                  </div>
                  <div className="space-y-2"><label className="font-label-md text-charcoal font-medium">Target Total Score</label><select value={formData.targetScore} onChange={(e) => setFormData({ ...formData, targetScore: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-outline-variant focus:ring-2 focus:ring-royal-purple outline-none transition-all bg-white">{["1000–1190", "1200–1290", "1300–1390", "1400–1490", "1500–1600"].map((s) => <option key={s}>{s}</option>)}</select></div>
                  <div className="space-y-2"><label className="font-label-md text-charcoal font-medium">Additional Message</label><textarea value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-outline-variant focus:ring-2 focus:ring-royal-purple outline-none transition-all" placeholder="Current score, planned test date, which module feels hardest..." rows={3} /></div>
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