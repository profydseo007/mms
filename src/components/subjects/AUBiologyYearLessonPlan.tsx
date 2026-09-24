import Link from 'next/link';

const PLANS: Record<number, { focus: string; lessons: string[] }> = {
  2: { focus: 'plant and animal growth', lessons: ['Observe and record how plants change as they grow.', 'Compare familiar animal life cycles and the needs of young animals.'] },
  3: { focus: 'the features and life cycles of living things', lessons: ['Group plants and animals using observable features.', 'Sequence and compare familiar plant and animal life cycles.'] },
  4: { focus: 'living things and their habitats', lessons: ['Identify how habitat features meet the needs of local organisms.', 'Model food chains and describe relationships between living things.'] },
  5: { focus: 'adaptations and ecosystem relationships', lessons: ['Connect structural adaptations to how organisms survive.', 'Model interactions between producers, consumers and decomposers.'] },
  6: { focus: 'classification, adaptations and ecosystem change', lessons: ['Classify organisms by shared characteristics and adaptations.', 'Use food webs to predict how environmental changes affect populations.'] },
  7: { focus: 'cells, classification and ecosystems', lessons: ['Identify key cell structures and observe specimens with a microscope.', 'Classify organisms and model feeding relationships in ecosystems.'] },
  8: { focus: 'body systems, reproduction and ecosystems', lessons: ['Describe how major body systems work together.', 'Compare reproduction and life cycles across organisms.'] },
  9: { focus: 'genetics, body coordination and ecosystems', lessons: ['Explain how body systems coordinate responses.', 'Model how genetic information is passed between generations.'] },
  10: { focus: 'inheritance, evolution and biological systems', lessons: ['Use models to explore DNA, genes and inherited variation.', 'Explain how natural selection can change populations over time.'] },
  11: { focus: 'cells, organisms and ecosystems', lessons: ['Relate cell structure to specialised functions and processes.', 'Analyse population data and interactions within ecosystems.'] },
  12: { focus: 'gene expression, heredity and evolution', lessons: ['Explain gene expression and patterns of inheritance.', 'Evaluate evidence about evolution and practise data-based exam responses.'] },
};

export default function AUBiologyYearLessonPlan({ year }: { year: number }) {
  const plan = PLANS[year];
  if (!plan) return null;

  return (
    <main className="bg-surface min-h-screen">
      <section className="py-16 md:py-24">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <Link href="/au/australian-curriculum/online-biology-tutor" className="inline-flex text-royal-purple font-semibold mb-8 hover:underline">
            ← Back to Biology tutoring
          </Link>
          <div className="max-w-3xl">
            <p className="text-royal-purple font-semibold uppercase tracking-wide mb-3">Australian Curriculum · Year {year} Biology</p>
            <h1 className="text-4xl md:text-5xl font-bold text-charcoal mb-6">Year {year} Biology Lesson Plan</h1>
            <p className="text-lg text-on-surface-variant">A structured learning sequence focused on {plan.focus}. Senior course content varies by state and territory.</p>
          </div>
        </div>
      </section>
      <section className="pb-20 md:pb-24">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <h2 className="text-2xl md:text-3xl font-bold text-charcoal mb-8">Lesson sequence</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {plan.lessons.map((lesson, index) => (
              <article key={lesson} className="bg-white p-7 md:p-8 rounded-3xl border border-outline-variant/40">
                <p className="text-sm text-royal-purple font-bold mb-3">Lesson {index + 1}</p>
                <h3 className="text-xl font-bold text-charcoal">{lesson}</h3>
              </article>
            ))}
          </div>
          <div className="mt-10 p-7 md:p-8 rounded-3xl bg-royal-purple text-white">
            <h2 className="text-2xl font-bold mb-3">Learning goal</h2>
            <p className="text-white/85">Students build their understanding of {plan.focus} through observation, models and evidence-based explanations.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
