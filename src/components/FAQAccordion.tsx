'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export interface FAQItem {
  q: string;
  a: React.ReactNode;
}

interface FAQAccordionProps {
  faqs: FAQItem[];
  title?: string;
  subtitle?: string;
  className?: string;
}

export default function FAQAccordion({ faqs, title = 'Frequently Asked Questions', subtitle, className = '' }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => setOpenIndex(openIndex === idx ? null : idx);

  return (
    <section className={`py-16 md:py-20 ${className}`}>
      <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">{title}</h2>
          {subtitle && <p className="text-on-surface-variant max-w-2xl mx-auto">{subtitle}</p>}
        </div>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className={`bg-soft-gray rounded-2xl border transition-all cursor-pointer ${
                openIndex === idx ? 'border-royal-purple shadow-ambient' : 'border-outline-variant/30'
              }`}
              onClick={() => toggle(idx)}
            >
              <div className="flex justify-between items-center p-6 gap-4">
                <h3 className="text-body-lg font-bold text-charcoal">{faq.q}</h3>
                <ChevronDown
                  size={22}
                  aria-hidden="true"
                  className={`shrink-0 transition-transform duration-300 ${
                    openIndex === idx ? 'rotate-180 text-royal-purple' : 'text-charcoal'
                  }`}
                />
              </div>
              {openIndex === idx && (
                <div className="px-6 pb-6 text-on-surface-variant text-body-md border-t border-outline-variant/20 pt-4">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
