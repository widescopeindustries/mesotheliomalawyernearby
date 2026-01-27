'use client';

import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { ChevronDown, HelpCircle } from "lucide-react";
import { COMMON_FAQS } from '@/data/keywords';

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 bg-muted/40">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
              <HelpCircle className="h-5 w-5 text-primary" />
              <span className="text-sm font-semibold text-primary">Common Questions</span>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Frequently Asked Questions About Mesothelioma Lawyers
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get answers to the most common questions about mesothelioma lawsuits, settlements, and finding the best attorney near you.
            </p>
          </div>

          {/* FAQ Accordion */}
          <div className="space-y-4">
            {COMMON_FAQS.map((faq, index) => (
              <Card 
                key={index}
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'border-primary shadow-lg' : 'hover:border-primary/50'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full text-left p-6 flex items-start justify-between gap-4 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-t-lg"
                  aria-expanded={openIndex === index}
                >
                  <h3 className="font-serif font-semibold text-lg text-foreground pr-4">
                    {faq.question}
                  </h3>
                  <ChevronDown 
                    className={`h-5 w-5 text-primary flex-shrink-0 transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <CardContent className="pt-0 pb-6 px-6">
                    <p className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>

          {/* Additional CTA */}
          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">
              Have more questions? Our team is ready to help 24/7.
            </p>
            <a 
              href="tel:214-699-4543"
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-accent-foreground px-6 py-3 rounded-lg font-semibold transition-all duration-200 hover:shadow-lg"
            >
              Call (214) 699-4543 for Free Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
