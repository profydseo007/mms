from pathlib import Path
import re

root = Path(r"c:\Users\Iqra Developer\Downloads\mms-main\mms-main")
subject_topics = {
    'online-biology-tutor': {
        'primary': ['Living things and their needs', 'Plant and animal life cycles', 'Habitats and survival features', 'Local biodiversity and caring for life'],
        'middle': ['Cells and classification', 'Body systems and health', 'Reproduction and inheritance', 'Ecosystems and interdependence'],
        'secondary': ['Cellular processes and systems', 'Genetics and inheritance', 'Evolution and population change', 'Ecology, evidence and data'],
        'senior': ['Cells, organisms and ecosystems', 'Gene expression and heredity', 'Evolution and contemporary biology', 'Practical investigations and exam responses'],
    },
    'online-chemistry-tutor': {
        'primary': ['Materials in everyday life', 'Solids, liquids and gases', 'Changes to materials', 'Safe observation and fair testing'],
        'middle': ['Particles and states of matter', 'Elements, compounds and mixtures', 'Chemical reactions and conservation', 'Acids, bases and material properties'],
        'secondary': ['Atomic structure and periodic patterns', 'Bonding and chemical formulae', 'Moles, equations and stoichiometry', 'Reaction rates, acids and equilibrium'],
        'senior': ['Structure, properties and reactions', 'Quantitative chemistry and solutions', 'Equilibrium, acids and redox', 'Organic chemistry and practical analysis'],
    },
    'online-english-tutor': {
        'primary': ['Reading fluency and comprehension', 'Vocabulary, grammar and sentence craft', 'Narrative and imaginative writing', 'Speaking, listening and response'],
        'middle': ['Close reading and inference', 'Text structures and language choices', 'Persuasive and analytical writing', 'Discussion, evidence and editing'],
        'secondary': ['Analysing texts and contexts', 'Argument, interpretation and evidence', 'Creative and persuasive composition', 'Timed responses and revision'],
        'senior': ['State certificate text study', 'Analytical essays and evidence', 'Language, audience and context', 'Exam planning, drafting and refinement'],
    },
    'online-math-tutor': {
        'primary': ['Number sense and place value', 'Addition, subtraction and multiplication', 'Measurement, shape and space', 'Patterns, data and problem solving'],
        'middle': ['Fractions, decimals and percentages', 'Ratios, rates and proportional thinking', 'Algebra, equations and graphs', 'Geometry, measurement and statistics'],
        'secondary': ['Functions, algebra and modelling', 'Geometry, measurement and trigonometry', 'Statistics and probability', 'Exam problems and mathematical reasoning'],
        'senior': ['Functions, calculus and rates of change', 'Probability, statistics and data', 'Methods, Specialist and General pathways', 'Applied modelling and exam technique'],
    },
    'online-maths-tutor': {
        'primary': ['Number sense and place value', 'Addition, subtraction and multiplication', 'Measurement, shape and space', 'Patterns, data and problem solving'],
        'middle': ['Fractions, decimals and percentages', 'Ratios, rates and proportional thinking', 'Algebra, equations and graphs', 'Geometry, measurement and statistics'],
        'secondary': ['Functions, algebra and modelling', 'Geometry, measurement and trigonometry', 'Statistics and probability', 'Exam problems and mathematical reasoning'],
        'senior': ['Functions, calculus and rates of change', 'Probability, statistics and data', 'Methods, Specialist and General pathways', 'Applied modelling and exam technique'],
    },
    'online-physics-tutor': {
        'primary': ['Pushes, pulls and movement', 'Light, shadows and vision', 'Sound and vibration', 'Heat, electricity and simple circuits'],
        'middle': ['Motion, speed and forces', 'Energy transfer and efficiency', 'Waves, light and sound', 'Electricity and magnetism'],
        'secondary': ['Kinematics and Newton’s laws', 'Work, energy and momentum', 'Waves, optics and circuits', 'Fields, data and practical modelling'],
        'senior': ['Mechanics and energy', 'Electricity and fields', 'Waves and modern physics', 'Practical investigations and exam problems'],
    },
    'online-science-tutor': {
        'primary': ['Living things and their needs', 'Weather and seasonal patterns', 'Materials and their properties', 'Forces, light and sound'],
        'middle': ['Cells and body systems', 'Earth and space sciences', 'Particles, mixtures and reactions', 'Energy, forces and ecosystems'],
        'secondary': ['Biological systems and ecology', 'Atomic structure and chemical change', 'Motion, energy and waves', 'Scientific data and investigation'],
        'senior': ['Biology course foundations', 'Chemistry course foundations', 'Physics course foundations', 'Research, practicals and exam skills'],
    },
}

for p in sorted((root / 'src/app').rglob('lesson-plan-for-year-one/page.tsx')):
    text = p.read_text(encoding='utf-8')
    if 'const TOPICS = {' not in text:
        continue
    folder = p.parent.parent.name
    data = subject_topics.get(folder)
    if not data:
        continue

    new_block = "const TOPICS: Record<'primary' | 'middle' | 'secondary' | 'senior', string[]> = {\n" \
        f"  primary: {data['primary']!r},\n" \
        f"  middle: {data['middle']!r},\n" \
        f"  secondary: {data['secondary']!r},\n" \
        f"  senior: {data['senior']!r},\n" \
        '};'

    text, count = re.subn(r"const TOPICS = \{[\s\S]*?\n\nfunction getBand", new_block + "\n\nfunction getBand", text)
    if count:
        text = text.replace("const topics = TOPICS[subject][getBand(year)];", "const band = getBand(year);\n  const topics = TOPICS[band];")
        text = text.replace("const topics = TOPICS[subject][band];", "const topics = TOPICS[band];")
        p.write_text(text, encoding='utf-8')
        print('updated', p.relative_to(root))
