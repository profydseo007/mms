/**
 * Script to convert static grid FAQ sections to inline accordion-style FAQs
 * matching the Home.tsx dropdown pattern.
 * 
 * Instead of importing FAQAccordion (which would require prop restructuring),
 * this script inlines the accordion logic directly in each page that already
 * has 'use client', adding a useState for openFaq and replacing the static grid
 * with accordion divs.
 */

import { readFileSync, writeFileSync } from 'fs';
import { resolve } from 'path';

const BASE = 'c:\\Users\\Iqra Developer\\Downloads\\mms-main\\mms-main\\src\\app';

const FILES = [
  'australian-curriculum/online-math-tutor/page.tsx',
  'australian-curriculum/online-science-tutor/page.tsx',
  'australian-curriculum/online-physics-tutor/page.tsx',
  'australian-curriculum/online-chemistry-tutor/page.tsx',
  'australian-curriculum/online-biology-tutor/page.tsx',
  'australian-curriculum/online-english-tutor/page.tsx',
  'canadian-curriculum/online-math-tutor/page.tsx',
  'canadian-curriculum/online-science-tutor/page.tsx',
  'canadian-curriculum/online-physics-tutor/page.tsx',
  'canadian-curriculum/online-chemistry-tutor/page.tsx',
  'canadian-curriculum/online-biology-tutor/page.tsx',
  'canadian-curriculum/online-english-tutor/page.tsx',
  'irish-curriculum/online-math-tutor/page.tsx',
  'irish-curriculum/online-science-tutor/page.tsx',
  'irish-curriculum/online-physics-tutor/page.tsx',
  'irish-curriculum/online-chemistry-tutor/page.tsx',
  'irish-curriculum/online-biology-tutor/page.tsx',
  'irish-curriculum/online-english-tutor/page.tsx',
  'new-zealand-curriculum/online-maths-tutor/page.tsx',
  'new-zealand-curriculum/online-science-tutor/page.tsx',
  'new-zealand-curriculum/online-physics-tutor/page.tsx',
  'new-zealand-curriculum/online-chemistry-tutor/page.tsx',
  'new-zealand-curriculum/online-biology-tutor/page.tsx',
  'new-zealand-curriculum/online-english-tutor/page.tsx',
  'uk-curriculum/online-math-tutor/page.tsx',
  'uk-curriculum/online-science-tutor/page.tsx',
  'uk-curriculum/online-physics-tutor/page.tsx',
  'uk-curriculum/online-chemistry-tutor/page.tsx',
  'uk-curriculum/online-biology-tutor/page.tsx',
  'uk-curriculum/online-english-tutor/page.tsx',
];

/**
 * Parse FAQ items from a static grid FAQ section.
 * Returns array of { q, aLines } objects.
 */
function parseFaqItems(faqSection) {
  const items = [];
  // Match each <div className="border border-outline-variant rounded-xl p-6">...</div>
  const itemRegex = /<div className="border border-outline-variant rounded-xl p-6">([\s\S]*?)\n\s*<\/div>\n\s*<\/div>/g;
  // simpler: split by the opening div
  const parts = faqSection.split('<div className="border border-outline-variant rounded-xl p-6">');
  parts.shift(); // remove first part before any FAQ item

  for (const part of parts) {
    // Extract question from <h4>...</h4>
    const qMatch = part.match(/<h4[^>]*>([\s\S]*?)<\/h4>/);
    // Extract answer - everything from <p className="text-on-surface-variant ..."> to </p> or JSX content
    const aMatch = part.match(/<p className="text-on-surface-variant[^"]*">([\s\S]*?)<\/p>/);
    
    if (qMatch) {
      const q = qMatch[1].trim();
      let a = '';
      if (aMatch) {
        a = aMatch[1].trim();
      } else {
        // Complex answer with JSX (buttons etc) - extract content between <p ...> and final </p>
        const complexMatch = part.match(/<p className="text-on-surface-variant[^"]*">([\s\S]*)/);
        if (complexMatch) {
          // Find the matching closing </p> - take content up to </div>
          const raw = complexMatch[1];
          // Trim trailing </div> and whitespace
          a = raw.replace(/\s*<\/div>\s*$/, '').replace(/<\/p>\s*$/, '').trim();
        }
      }
      items.push({ q, a });
    }
  }
  return items;
}

function convertFile(filePath) {
  const fullPath = resolve(BASE, filePath);
  let content;
  try {
    content = readFileSync(fullPath, 'utf8');
  } catch (e) {
    console.log(`SKIP (not found): ${filePath}`);
    return;
  }

  // Check if this file has the static grid FAQ pattern
  if (!content.includes('grid md:grid-cols-2 gap-6') || !content.includes('Frequently Asked Questions')) {
    console.log(`SKIP (no grid FAQ): ${filePath}`);
    return;
  }

  // Check if already converted
  if (content.includes('openFaq') || content.includes('FAQAccordion')) {
    console.log(`SKIP (already converted): ${filePath}`);
    return;
  }

  // 1. Add useState import if not present
  if (!content.includes('useState')) {
    content = content.replace(
      "import React from 'react';",
      "import React, { useState } from 'react';"
    );
  }

  // 2. Add ChevronDown import if not present
  if (!content.includes('ChevronDown')) {
    // Add to existing lucide-react import
    content = content.replace(
      /from 'lucide-react';/,
      (match) => {
        // find the import line start
        return match; // handled below
      }
    );
    content = content.replace(
      /import \{([^}]+)\} from 'lucide-react';/,
      (match, imports) => {
        if (imports.includes('ChevronDown')) return match;
        return `import {${imports}, ChevronDown } from 'lucide-react';`;
      }
    );
  }

  // 3. Add openFaq state after the export default function line
  // Find the function body opening
  const funcMatch = content.match(/export default function \w+[^)]*\)\s*\{/);
  if (funcMatch) {
    const funcEnd = content.indexOf(funcMatch[0]) + funcMatch[0].length;
    // Check if return is next (no state vars yet)
    const afterFunc = content.slice(funcEnd);
    if (!afterFunc.trimStart().startsWith('\n  const [openFaq')) {
      content = content.slice(0, funcEnd) + 
        '\n  const [openFaq, setOpenFaq] = React.useState<number | null>(null);' +
        content.slice(funcEnd);
    }
  }

  // 4. Replace the static FAQ section with accordion
  // Pattern: {/* FAQs */}\n      <section className="py-16 md:py-20">\n        <div ...>\n          <h2 ...>Frequently Asked Questions</h2>\n          <div className="grid md:grid-cols-2 gap-6">...</div>\n        </div>\n      </section>
  
  // Find the FAQ section start
  const faqStart = content.indexOf('{/* FAQs */}');
  if (faqStart === -1) {
    console.log(`SKIP (no FAQ comment): ${filePath}`);
    return;
  }

  // Find the end of the FAQ section - look for next section or related comment
  // The FAQ section ends with </section>
  let searchFrom = faqStart;
  let faqEnd = -1;
  let depth = 0;
  let inSection = false;
  
  // Find the <section start after the comment
  const sectionStart = content.indexOf('<section', faqStart);
  if (sectionStart === -1) return;
  
  // Find the matching </section>
  let pos = sectionStart;
  depth = 0;
  while (pos < content.length) {
    const openIdx = content.indexOf('<section', pos);
    const closeIdx = content.indexOf('</section>', pos);
    
    if (openIdx !== -1 && openIdx < closeIdx) {
      depth++;
      pos = openIdx + 8;
    } else if (closeIdx !== -1) {
      depth--;
      if (depth === 0) {
        faqEnd = closeIdx + '</section>'.length;
        break;
      }
      pos = closeIdx + 10;
    } else {
      break;
    }
  }
  
  if (faqEnd === -1) {
    console.log(`SKIP (can't find FAQ section end): ${filePath}`);
    return;
  }

  const faqSection = content.slice(faqStart, faqEnd);
  
  // Parse the FAQ items from the section
  const faqItems = parseFaqItems(faqSection);
  
  if (faqItems.length === 0) {
    console.log(`SKIP (no FAQ items parsed): ${filePath}`);
    return;
  }

  // Build the new accordion section
  const faqArrayLines = faqItems.map((item, i) => {
    const aContent = item.a;
    return `    {
      q: ${JSON.stringify(item.q)},
      a: (<>${aContent}</>),
    }`;
  }).join(',\n');

  const newSection = `{/* FAQs */}
      <section className="py-16 md:py-20">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-12 text-center">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {[
${faqArrayLines}
            ].map((faq, idx) => (
              <div
                key={idx}
                className={\`bg-soft-gray rounded-2xl border transition-all cursor-pointer \${
                  openFaq === idx ? 'border-royal-purple shadow-ambient' : 'border-outline-variant/30'
                }\`}
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
              >
                <div className="flex justify-between items-center p-6 gap-4">
                  <h3 className="text-body-lg font-bold text-charcoal">{faq.q}</h3>
                  <ChevronDown
                    size={22}
                    aria-hidden="true"
                    className={\`shrink-0 transition-transform duration-300 \${
                      openFaq === idx ? 'rotate-180 text-royal-purple' : 'text-charcoal'
                    }\`}
                  />
                </div>
                {openFaq === idx && (
                  <div className="px-6 pb-6 text-on-surface-variant text-body-md border-t border-outline-variant/20 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>`;

  content = content.slice(0, faqStart) + newSection + content.slice(faqEnd);

  writeFileSync(fullPath, content, 'utf8');
  console.log(`CONVERTED: ${filePath}`);
}

for (const file of FILES) {
  convertFile(file);
}

console.log('\nDone!');
