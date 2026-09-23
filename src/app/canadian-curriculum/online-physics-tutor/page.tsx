'use client';

import type { ActivePage } from '@/lib/types';
import LigatureIcon from '@/components/LigatureIcon';

interface SubjectComponentProps {
  onNavigate: (page: ActivePage, subjectTitle?: string) => void;
}

export default function CAPhysicsTutorContent({ onNavigate }: SubjectComponentProps) {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-primary-fixed">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-white text-royal-purple text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
                SPH3U, SPH4U &amp; Physics 30 Specialists
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-on-primary-fixed mb-6 leading-tight">
                Online Physics Tutor <br className="hidden md:block" />in Canada
              </h1>
              <p className="text-lg text-on-primary-fixed/80 mb-8 max-w-xl">
                Make physics make sense with an expert <strong className="font-semibold">Online Physics Tutor</strong> matched to your province. From Grade 11 mechanics through to SPH4U fields, Physics 30 and Physics 12, every lesson follows the course your child is actually enrolled in.
              </p>
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => onNavigate('trial')}
                  className="bg-charcoal text-white px-8 py-3.5 rounded-full font-semibold hover:bg-charcoal/90 transition-colors"
                >
                  Book Free Trial Lesson
                </button>
                <button
                  onClick={() => onNavigate('pricing')}
                  className="bg-white text-royal-purple px-8 py-3.5 rounded-full font-semibold hover:bg-soft-gray transition-colors"
                >
                  View Canadian Pricing
                </button>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?w=800&q=80"
                alt="Canadian student working through physics problems in an online tutoring session"
                className="rounded-2xl shadow-2xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-16 md:py-20">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4 text-center">Physics Tutoring for Grades 11 and 12</h2>
          <p className="text-on-surface-variant text-center max-w-2xl mx-auto mb-12">
            Senior physics is where the mathematics becomes unavoidable. <span className="font-semibold text-charcoal">Physics tutoring in Canada</span> works best when the tutor addresses the algebra and trigonometry underneath the physics at the same time.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-surface-container-low rounded-2xl p-8">
              <div className="w-12 h-12 bg-lime-green rounded-xl flex items-center justify-center mb-5">
                <LigatureIcon name="Clock" className="w-6 h-6 text-charcoal" />
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-3">Sessions Around Your Timetable</h3>
              <p className="text-on-surface-variant">Physics support scheduled around school, in every Canadian time zone, with availability through unit tests, labs and the run-up to final examinations.</p>
            </div>
            <div className="bg-surface-container-low rounded-2xl p-8">
              <div className="w-12 h-12 bg-lime-green rounded-xl flex items-center justify-center mb-5">
                <LigatureIcon name="DollarSign" className="w-6 h-6 text-charcoal" />
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-3">Clear Pricing in Canadian Dollars</h3>
              <p className="text-on-surface-variant">No registration fee, no minimum term, and rates billed in CAD. A single plan can cover physics alongside math, which is often the more useful combination.</p>
            </div>
            <div className="bg-surface-container-low rounded-2xl p-8">
              <div className="w-12 h-12 bg-lime-green rounded-xl flex items-center justify-center mb-5">
                <LigatureIcon name="Star" className="w-6 h-6 text-charcoal" />
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-3">The Math Behind the Physics</h3>
              <p className="text-on-surface-variant">Most physics difficulty is mathematical. Tutors shore up rearranging equations, vectors and trigonometry alongside the physics itself rather than treating them separately.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Focus */}
      <section className="py-16 md:py-20 bg-surface-container-low">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4 text-center">Senior Physics Courses <br className="hidden md:block" />Across Every Province</h2>
          <p className="text-on-surface-variant text-center max-w-2xl mx-auto mb-12">
            Covering Ontario SPH3U and SPH4U, Alberta Physics 20 and Physics 30 with its Diploma Exam, and BC Physics 11 and Physics 12, plus the equivalent courses in Quebec and the Atlantic provinces.
          </p>
          <div className="grid md:grid-cols-12 gap-6">
            <div className="md:col-span-4 space-y-4">
              <div className="bg-white rounded-xl p-5 flex items-center gap-4">
                <span className="w-8 h-8 rounded-full bg-tertiary-fixed flex items-center justify-center font-bold text-sm flex-shrink-0">1</span>
                <span className="font-semibold text-charcoal">Grade 10 Science Foundations</span>
              </div>
              <div className="bg-white rounded-xl p-5 flex items-center gap-4">
                <span className="w-8 h-8 rounded-full bg-tertiary-fixed flex items-center justify-center font-bold text-sm flex-shrink-0">2</span>
                <span className="font-semibold text-charcoal">Grade 11 Physics (SPH3U, Physics 20, Physics 11)</span>
              </div>
              <div className="bg-white rounded-xl p-5 flex items-center gap-4">
                <span className="w-8 h-8 rounded-full bg-tertiary-fixed flex items-center justify-center font-bold text-sm flex-shrink-0">3</span>
                <span className="font-semibold text-charcoal">Grade 12 Physics (SPH4U, Physics 30, Physics 12)</span>
              </div>
            </div>
            <div className="md:col-span-8 grid sm:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 border border-outline-variant">
                <h4 className="font-bold text-charcoal mb-2">Kinematics &amp; Dynamics</h4>
                <p className="text-sm text-on-surface-variant">Motion in one and two dimensions, vectors, forces, Newton&rsquo;s laws and the free-body diagrams that senior physics is built on.</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-outline-variant">
                <h4 className="font-bold text-charcoal mb-2">Energy, Momentum &amp; Waves</h4>
                <p className="text-sm text-on-surface-variant">Work, energy and power, conservation of momentum, and the wave behaviour that underpins optics and sound.</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-outline-variant">
                <h4 className="font-bold text-charcoal mb-2">Fields, Electricity &amp; Modern Physics</h4>
                <p className="text-sm text-on-surface-variant">Gravitational, electric and magnetic fields, circuits, and the introduction to quantum and nuclear physics in Grade 12 courses.</p>
              </div>
              <div className="bg-secondary-fixed-dim rounded-xl p-6 col-span-full flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <h4 className="font-bold text-white text-lg mb-1">Alberta Physics 30 Diploma Exam Preparation</h4>
                  <p className="text-white/80 text-sm">Timed practice under examination conditions for the Grade 12 Diploma, which blends with the school-awarded mark to produce the final course grade.</p>
                </div>
                <button onClick={() => onNavigate('trial')} className="bg-white text-royal-purple px-6 py-2.5 rounded-full font-semibold whitespace-nowrap">Learn More</button>
              </div>
              <div className="col-span-full flex flex-wrap gap-2">
                {['SPH3U', 'SPH4U', 'Physics 30 Diploma', 'Physics 12', 'Free-body diagrams'].map((tag) => (
                  <span key={tag} className="bg-white border border-outline-variant text-charcoal text-sm px-4 py-2 rounded-full">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grade-by-Grade Roadmap */}
      <section className="py-16 md:py-20">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4 text-center">Your Child&rsquo;s Physics Roadmap, Grade by Grade</h2>
          <p className="text-on-surface-variant text-center max-w-2xl mx-auto mb-12">
            Our <span className="font-semibold text-charcoal">online physics tutoring</span> builds from Grade 10 foundations through to Grade 12, because senior physics assumes fluency that is rarely revisited once missed.
          </p>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">Grade 10 Foundations</h4>
              <p className="text-sm text-on-surface-variant mb-4">Motion, energy and the introduction to physics concepts within integrated science. Weakness here surfaces immediately in Grade 11 kinematics.</p>
              <ul className="space-y-1 text-sm font-medium text-charcoal border-t border-outline-variant pt-3">
                <li className="flex items-center gap-2"><LigatureIcon name="Check" className="w-4 h-4 text-royal-purple" /> Motion &amp; energy basics</li>
                <li className="flex items-center gap-2"><LigatureIcon name="Check" className="w-4 h-4 text-royal-purple" /> Algebra readiness</li>
              </ul>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">Grade 11 Physics</h4>
              <p className="text-sm text-on-surface-variant mb-4">SPH3U in Ontario, Physics 20 in Alberta, Physics 11 in BC. Kinematics, forces, energy and waves, with vectors introduced properly for the first time.</p>
              <ul className="space-y-1 text-sm font-medium text-charcoal border-t border-outline-variant pt-3">
                <li className="flex items-center gap-2"><LigatureIcon name="Check" className="w-4 h-4 text-royal-purple" /> Kinematics &amp; dynamics</li>
                <li className="flex items-center gap-2"><LigatureIcon name="Check" className="w-4 h-4 text-royal-purple" /> Energy &amp; waves</li>
              </ul>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">Grade 12 Physics</h4>
              <p className="text-sm text-on-surface-variant mb-4">SPH4U, Physics 30 and Physics 12. Fields, momentum, and an introduction to modern physics. Alberta students also sit a Diploma Exam in Physics 30.</p>
              <ul className="space-y-1 text-sm font-medium text-charcoal border-t border-outline-variant pt-3">
                <li className="flex items-center gap-2"><LigatureIcon name="Check" className="w-4 h-4 text-royal-purple" /> Fields &amp; momentum</li>
                <li className="flex items-center gap-2"><LigatureIcon name="Check" className="w-4 h-4 text-royal-purple" /> Modern physics foundations</li>
              </ul>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">University Preparation</h4>
              <p className="text-sm text-on-surface-variant mb-4">Senior physics is a prerequisite for engineering and physical science programs across Canada, and the Grade 12 mark feeds directly into the admission average.</p>
              <ul className="space-y-1 text-sm font-medium text-charcoal border-t border-outline-variant pt-3">
                <li className="flex items-center gap-2"><LigatureIcon name="Check" className="w-4 h-4 text-royal-purple" /> Engineering prerequisites</li>
                <li className="flex items-center gap-2"><LigatureIcon name="Check" className="w-4 h-4 text-royal-purple" /> Exam &amp; problem-solving technique</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Quality */}
      <section className="py-16 md:py-20 bg-surface-container-low">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop grid md:grid-cols-2 gap-12 items-center">
          <img
            src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&q=80"
            alt="Physics tutor explaining forces and motion during an online lesson"
            className="rounded-2xl shadow-xl w-full h-auto object-cover"
          />
          <div>
            <span className="inline-block bg-lime-green text-charcoal font-bold px-4 py-1.5 rounded-full mb-4">Course-Code Matched</span>
            <h2 className="text-3xl font-bold text-charcoal mb-6">Physics Tutors Who Know Your Exact Course</h2>
            <p className="text-on-surface-variant mb-6 leading-relaxed">
              Our physics tutors hold degrees in physics, engineering or a closely related field, and are matched to the specific senior course your child is taking. Criminal record and vulnerable sector screening is completed before any tutor is assigned to a student.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <LigatureIcon name="CheckCircle" className="w-5 h-5 text-royal-purple mt-0.5" />
                <span className="text-on-surface-variant">Criminal record and vulnerable sector checked</span>
              </li>
              <li className="flex items-start gap-3">
                <LigatureIcon name="CheckCircle" className="w-5 h-5 text-royal-purple mt-0.5" />
                <span className="text-on-surface-variant">Degree-qualified in physics or engineering</span>
              </li>
              <li className="flex items-start gap-3">
                <LigatureIcon name="CheckCircle" className="w-5 h-5 text-royal-purple mt-0.5" />
                <span className="text-on-surface-variant">Matched to SPH3U, SPH4U, Physics 30 or Physics 12</span>
              </li>
            </ul>
            <button onClick={() => onNavigate('about')} className="bg-charcoal text-white px-8 py-3.5 rounded-full font-semibold">Learn More About Our Tutors</button>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 md:py-20">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-12 text-center">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">Why is my child struggling with physics when they are good at science generally?</h4>
              <p className="text-on-surface-variant text-sm">Usually because senior physics is far more mathematical than the integrated science that precedes it. Students arrive able to explain concepts well but unused to rearranging equations, resolving vectors or working through multi-step calculations under time pressure. That is a mathematics gap wearing a physics costume, and it responds quickly once identified.</p>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">Does my child need Grade 11 physics before Grade 12?</h4>
              <p className="text-on-surface-variant text-sm">Yes. SPH4U, Physics 30 and Physics 12 all assume the kinematics, dynamics and energy work covered in the Grade 11 course, and each builds directly on it. Students who did adequately in Grade 11 without fully securing vectors and free-body diagrams tend to find Grade 12 fields and momentum considerably harder than expected.</p>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">How much does the Alberta Physics 30 Diploma Exam count?</h4>
              <p className="text-on-surface-variant text-sm">It blends with the school-awarded mark to produce the final course grade that appears on the transcript, weighted in favour of coursework, with a combined mark of at least 50 per cent required to pass. Because Alberta universities admit on those final marks, the examination carries more weight than its share of the grade suggests.</p>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">Is physics required for engineering programs in Canada?</h4>
              <p className="text-on-surface-variant text-sm">For essentially all of them, yes, normally alongside senior calculus and chemistry. Requirements vary by university and program, so check the specific institution, but a student considering engineering should treat Grade 12 physics as non-negotiable rather than optional.</p>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">Can you help with just one topic rather than the whole course?</h4>
              <p className="text-on-surface-variant text-sm">Plenty of families book exactly that way. If fields or momentum is the problem, the first session establishes precisely where the misunderstanding begins, then builds a short focused plan around it rather than re-teaching the entire course from September.</p>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">Do you help with lab work and investigations?</h4>
              <p className="text-on-surface-variant text-sm">Yes. Practical work carries real weight in senior physics, and students often lose marks in the analysis and error discussion rather than in the experiment itself. We work through experimental design, uncertainty, graphing and writing conclusions that argue from the data.</p>
            </div>
            <div className="border border-outline-variant rounded-xl p-6">
              <h4 className="font-bold text-charcoal mb-2">Should we work on math at the same time as physics?</h4>
              <p className="text-on-surface-variant text-sm">
                In most cases yes, and it is usually the faster route to a better physics mark. Kinematics depends on trigonometry, dynamics on rearranging equations, and fields on manipulating formulas confidently, so pairing physics with{' '}
                <button
                  onClick={() => onNavigate('subject', 'Math')}
                  className="text-royal-purple font-bold underline underline-offset-2 cursor-pointer"
                >
                  math tutoring
                </button>
                {' '}tends to lift both marks at once rather than treating the same weakness twice.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* Related Subjects */}
      <section className="py-16 md:py-20">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4 text-center">Related Subjects</h2>
          <p className="text-on-surface-variant text-center max-w-2xl mx-auto mb-10">Physics rarely sits on its own. These are the subjects most often studied alongside it.</p>
          <div className="grid sm:grid-cols-3 gap-6">
            <button
              onClick={() => onNavigate('subject', 'Math')}
              className="border border-outline-variant rounded-xl p-6 text-left hover:border-royal-purple transition-colors"
            >
              <h4 className="font-bold text-charcoal mb-1">Online Math Tutor in Canada</h4>
              <span className="text-royal-purple font-semibold text-sm underline underline-offset-2">Math tutoring</span>
            </button>
            <button
              onClick={() => onNavigate('subject', 'Chemistry')}
              className="border border-outline-variant rounded-xl p-6 text-left hover:border-royal-purple transition-colors"
            >
              <h4 className="font-bold text-charcoal mb-1">Online Chemistry Tutor in Canada</h4>
              <span className="text-royal-purple font-semibold text-sm underline underline-offset-2">Chemistry tutoring</span>
            </button>
            <button
              onClick={() => onNavigate('subject', 'Science')}
              className="border border-outline-variant rounded-xl p-6 text-left hover:border-royal-purple transition-colors"
            >
              <h4 className="font-bold text-charcoal mb-1">Online Science Tutor in Canada</h4>
              <span className="text-royal-purple font-semibold text-sm underline underline-offset-2">Science tutoring</span>
            </button>
          </div>
        </div>
      </section>

      {/* Book Your Free Trial Lesson */}
      <section className="py-16 md:py-20 bg-surface-container-low">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4 text-center">Book Your Free Trial Lesson</h2>
          <p className="text-on-surface-variant text-center max-w-2xl mx-auto mb-10">
            Tell us your child&rsquo;s grade, province and physics course, and we will match them with a specialist tutor for a free first lesson. No payment details needed.
          </p>
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Make Physics Click</h2>
            <p className="text-white/80 mb-8 max-w-xl mx-auto">From Grade 11 kinematics to Grade 12 fields and Diploma Exam preparation, our course-matched physics tutors are ready to help.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <button onClick={() => onNavigate('trial')} className="bg-white text-royal-purple px-8 py-3.5 rounded-full font-semibold">Book Free Trial</button>
              <button onClick={() => onNavigate('about')} className="border-2 border-white text-white px-8 py-3.5 rounded-full font-semibold">Contact Us</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}