// Script to convert static grid FAQ to accordion style
// Run with: node scripts/faq-accordion-convert.js

const fs = require('fs');
const path = require('path');

const BASE = 'c:\\Users\\Iqra Developer\\Downloads\\mms-main\\mms-main\\src\\app';

const FILES_TO_CONVERT = [
  // Canadian curriculum (no React import, no lucide)
  'canadian-curriculum/online-science-tutor/page.tsx',
  'canadian-curriculum/online-physics-tutor/page.tsx',
  'canadian-curriculum/online-chemistry-tutor/page.tsx',
  'canadian-curriculum/online-biology-tutor/page.tsx',
  'canadian-curriculum/online-english-tutor/page.tsx',
  // Irish curriculum
  'irish-curriculum/online-math-tutor/page.tsx',
  'irish-curriculum/online-science-tutor/page.tsx',
  'irish-curriculum/online-physics-tutor/page.tsx',
  'irish-curriculum/online-chemistry-tutor/page.tsx',
  'irish-curriculum/online-biology-tutor/page.tsx',
  'irish-curriculum/online-english-tutor/page.tsx',
  // NZ curriculum
  'new-zealand-curriculum/online-maths-tutor/page.tsx',
  'new-zealand-curriculum/online-science-tutor/page.tsx',
  'new-zealand-curriculum/online-physics-tutor/page.tsx',
  'new-zealand-curriculum/online-chemistry-tutor/page.tsx',
  'new-zealand-curriculum/online-biology-tutor/page.tsx',
  'new-zealand-curriculum/online-english-tutor/page.tsx',
  // UK curriculum
  'uk-curriculum/online-math-tutor/page.tsx',
  'uk-curriculum/online-science-tutor/page.tsx',
  'uk-curriculum/online-physics-tutor/page.tsx',
  'uk-curriculum/online-chemistry-tutor/page.tsx',
  'uk-curriculum/online-biology-tutor/page.tsx',
  'uk-curriculum/online-english-tutor/page.tsx',
];

const ACCORDION_MAP_TEMPLATE = `(faq, idx) => (
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
            )`;

function extractFaqItems(content) {
  // Find FAQ section
  const faqSectionStart = content.indexOf('{/* FAQs */}');
  if (faqSectionStart === -1) return null;
  
  const gridStart = content.indexOf('<div className="grid md:grid-cols-2 gap-6">', faqSectionStart);
  if (gridStart === -1) return null;
  
  // Find all FAQ card items between grid and closing div
  const items = [];
  const cardPattern = /<div className="border border-outline-variant rounded-xl p-6">([\s\S]*?)<\/div>\s*(?=<div className="border|<\/div>)/g;
  
  // Get content from grid div to the closing
  const gridCloseApprox = content.indexOf('</div>\n        </div>\n      </section>', gridStart);
  const gridContent = content.slice(gridStart, gridCloseApprox + 50);
  
  let match;
  const re = /<div className="border border-outline-variant rounded-xl p-6">([\s\S]*?)(?=\n\s*<div className="border border-outline-variant rounded-xl p-6">|\n\s*<\/div>\s*\n\s*<\/div>\s*\n\s*<\/div>\s*\n\s*<\/section>)/g;
  
  let tempContent = gridContent;
  const cardDivs = tempContent.split('<div className="border border-outline-variant rounded-xl p-6">').slice(1);
  
  for (const cardDiv of cardDivs) {
    // Extract question
    const qMatch = cardDiv.match(/<h4[^>]*>([\s\S]*?)<\/h4>/);
    // Extract text answer
    const simpleAMatch = cardDiv.match(/<p className="text-on-surface-variant text-sm">([\s\S]*?)<\/p>\s*\n\s*<\/div>/);
    // Extract complex JSX answer
    const complexAMatch = cardDiv.match(/<p className="text-on-surface-variant text-sm">([\s\S]*)/);
    
    if (qMatch) {
      const q = qMatch[1].trim();
      let a = '';
      
      if (simpleAMatch) {
        a = simpleAMatch[1].trim();
        // Escape HTML entities for use in JS strings  
        a = a.replace(/&rsquo;/g, '\u2019')
              .replace(/&apos;/g, "'")
              .replace(/&amp;/g, '&')
              .replace(/&ldquo;/g, '\u201c')
              .replace(/&rdquo;/g, '\u201d');
        items.push({ q, a, isComplex: false });
      } else if (complexAMatch) {
        // Complex answer with JSX (buttons etc)
        const rawA = complexAMatch[1];
        // Take everything up to the closing </p> and then </div>
        // This is a JSX fragment so we keep it raw
        const endIdx = rawA.lastIndexOf('</p>');
        if (endIdx !== -1) {
          const innerContent = rawA.slice(0, endIdx).trim();
          items.push({ q, a: innerContent, isComplex: true });
        }
      }
    }
  }
  
  return items.length > 0 ? items : null;
}

function buildFaqData(items) {
  const parts = items.map(item => {
    const q = JSON.stringify(item.q);
    if (!item.isComplex) {
      const a = JSON.stringify(item.a);
      return `              {\n                q: ${q},\n                a: ${a},\n              }`;
    } else {
      // Keep JSX as-is in template literal
      return `              {\n                q: ${q},\n                a: (\n                  <>\n                    ${item.a}\n                  </>\n                ),\n              }`;
    }
  });
  return parts.join(',\n');
}

function convertFile(relPath) {
  const fullPath = path.resolve(BASE, relPath.replace(/\//g, path.sep));
  
  let content;
  try {
    content = fs.readFileSync(fullPath, 'utf8');
  } catch (e) {
    console.log(`SKIP (not found): ${relPath}`);
    return;
  }
  
  // Skip if already converted
  if (content.includes('openFaq') || !content.includes('grid md:grid-cols-2 gap-6')) {
    console.log(`SKIP (already done or no grid FAQ): ${relPath}`);
    return;
  }
  
  // 1. Add React and useState
  if (!content.includes("import React")) {
    if (content.includes("'use client';")) {
      content = content.replace("'use client';\n\n", "'use client';\n\nimport React, { useState } from 'react';\n");
    }
  } else if (!content.includes('useState')) {
    content = content.replace("import React from 'react';", "import React, { useState } from 'react';");
  }
  
  // 2. Add ChevronDown import
  if (!content.includes('ChevronDown')) {
    if (content.includes("from 'lucide-react'")) {
      content = content.replace(
        /import \{([^}]+)\} from 'lucide-react';/,
        (match, imports) => `import {${imports}, ChevronDown } from 'lucide-react';`
      );
    } else {
      // Find a good insertion point (after last import)
      const lastImportIdx = content.lastIndexOf("import ");
      const lineEnd = content.indexOf('\n', lastImportIdx);
      content = content.slice(0, lineEnd + 1) + "import { ChevronDown } from 'lucide-react';\n" + content.slice(lineEnd + 1);
    }
  }
  
  // 3. Add openFaq state
  const funcMatch = content.match(/export default function \w+[^)]*\)\s*\{/);
  if (funcMatch) {
    const insertIdx = content.indexOf(funcMatch[0]) + funcMatch[0].length;
    if (!content.slice(insertIdx, insertIdx + 100).includes('openFaq')) {
      content = content.slice(0, insertIdx) +
        '\n  const [openFaq, setOpenFaq] = React.useState<number | null>(null);' +
        content.slice(insertIdx);
    }
  }
  
  // 4. Replace the grid FAQ section with accordion
  // Find FAQ section boundaries
  const faqCommentIdx = content.indexOf('{/* FAQs */}');
  if (faqCommentIdx === -1) {
    console.log(`SKIP (no FAQ comment): ${relPath}`);
    return;
  }
  
  const sectionOpenIdx = content.indexOf('<section', faqCommentIdx);
  if (sectionOpenIdx === -1) return;
  
  // Find matching </section>
  let depth = 0;
  let pos = sectionOpenIdx;
  let sectionEndIdx = -1;
  
  while (pos < content.length) {
    const nextOpen = content.indexOf('<section', pos);
    const nextClose = content.indexOf('</section>', pos);
    
    if (nextClose === -1) break;
    
    if (nextOpen !== -1 && nextOpen < nextClose) {
      depth++;
      pos = nextOpen + 8;
    } else {
      depth--;
      pos = nextClose + 10;
      if (depth === 0) {
        sectionEndIdx = pos;
        break;
      }
    }
  }
  
  if (sectionEndIdx === -1) {
    console.log(`SKIP (can't find section end): ${relPath}`);
    return;
  }
  
  const oldSection = content.slice(faqCommentIdx, sectionEndIdx);
  
  // Get FAQ heading text
  const headingMatch = oldSection.match(/<h2[^>]*>(.*?)<\/h2>/);
  const heading = headingMatch ? headingMatch[1].trim() : 'Frequently Asked Questions';
  
  // Build new section with a simplified accordion (inline)
  // Extract the FAQ card items
  const gridMatch = oldSection.match(/<div className="grid md:grid-cols-2 gap-6">([\s\S]*?)<\/div>\s*\n\s*<\/div>\s*\n\s*<\/section>/);
  
  if (!gridMatch) {
    console.log(`SKIP (can't match grid): ${relPath}`);
    return;
  }
  
  // For simplicity, replace the structural parts while keeping FAQ content
  const newSection = oldSection
    .replace(
      '<div className="grid md:grid-cols-2 gap-6">',
      '<div className="max-w-3xl mx-auto space-y-4">\n            {(['
    )
    .replace(
      /<div className="border border-outline-variant rounded-xl p-6">\s*<h4 className="font-bold text-charcoal mb-2">/g,
      '              { q: `'
    );
  
  // This approach is getting too complex. Instead, just do a simple structural replacement
  // that wraps each item manually.
  
  console.log(`NEEDS MANUAL: ${relPath}`);
}

// Actually, let's use a different simpler approach:
// Just replace the grid container and card structure with accordion structure
// while keeping all existing content in place

function simpleConvert(relPath) {
  const fullPath = path.resolve(BASE, relPath.replace(/\//g, path.sep));
  
  let content;
  try {
    content = fs.readFileSync(fullPath, 'utf8');
  } catch (e) {
    console.log(`SKIP (not found): ${relPath}`);
    return false;
  }
  
  if (content.includes('openFaq') || !content.includes('grid md:grid-cols-2 gap-6')) {
    console.log(`SKIP: ${relPath}`);
    return false;
  }
  
  console.log(`Processing: ${relPath}`);
  console.log(`  Lines: ${content.split('\n').length}`);
  
  // Find FAQ section to understand line numbers
  const lines = content.split('\n');
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes('{/* FAQs */}')) {
      console.log(`  FAQ comment at line ${i + 1}`);
    }
    if (lines[i].includes('grid md:grid-cols-2 gap-6')) {
      console.log(`  Grid at line ${i + 1}`);
    }
    if (lines[i].includes('export default function')) {
      console.log(`  Function: ${lines[i].trim().substring(0, 60)}`);
    }
  }
  
  return true;
}

for (const f of FILES_TO_CONVERT) {
  simpleConvert(f);
}
