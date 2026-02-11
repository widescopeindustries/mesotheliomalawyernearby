'use client';

import { COMMON_FAQS } from '@/data/keywords';

export const SchemaMarkup = () => {
  // Organization Schema
    const organizationSchema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Mesothelioma Lawyer Nearby",
      "url": "https://mesotheliomalawyernearby.com",
      "logo": "https://mesotheliomalawyernearby.com/logo.png",
      "description": "Veteran-owned legal referral service connecting mesothelioma victims with experienced asbestos attorneys nationwide.",
      "foundingDate": "2024",
      "founders": [{
        "@type": "Person",
        "name": "Service-Disabled Veteran Owner"
      }],
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "316 Brandywine Ave",
        "addressLocality": "Streetman",
        "addressRegion": "TX",
        "postalCode": "75859",
        "addressCountry": "US"
      },
      "email": "info@mesotheliomalawyernearby.com",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1-214-699-4543",
        "contactType": "customer service",
        "areaServed": "US",
        "availableLanguage": ["English", "Spanish"],
        "hoursAvailable": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          "opens": "00:00",
          "closes": "23:59"
        }
      },
      "sameAs": []
    };
  
    // LegalService Schema
    const legalServiceSchema = {
      "@context": "https://schema.org",
      "@type": "LegalService",
      "name": "Mesothelioma Lawyer Nearby",
      "description": "Find the best mesothelioma lawyers near you. Free case evaluation. Veteran-owned referral service connecting asbestos exposure victims with top-rated attorneys.",
      "url": "https://mesotheliomalawyernearby.com",
      "telephone": "+1-214-699-4543",
      "email": "info@mesotheliomalawyernearby.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "316 Brandywine Ave",
        "addressLocality": "Streetman",
        "addressRegion": "TX",
        "postalCode": "75859",
        "addressCountry": "US"
      },
      "priceRange": "Free Consultation",
      "areaServed": {
        "@type": "Country",
        "name": "United States"
      },
      "serviceType": [
        "Mesothelioma Legal Representation",
        "Asbestos Exposure Claims",
        "Wrongful Death Claims",
        "Workers Compensation",
        "Veterans Asbestos Claims"
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Mesothelioma Legal Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Free Case Evaluation",
              "description": "No-cost, no-obligation consultation to review your mesothelioma case"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Attorney Matching",
              "description": "Connect with specialized mesothelioma attorneys in your area"
            }
          }
        ]
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "ratingCount": "127",
        "bestRating": "5",
        "worstRating": "1"
      }
    };
  
    // FAQPage Schema using existing COMMON_FAQS
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": COMMON_FAQS.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    };
  
    // WebPage Schema
    const webPageSchema = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Best Mesothelioma Lawyers Near Me | Veteran-Owned Legal Referral",
      "description": "Find the best mesothelioma lawyers near you. Free case evaluation. Veteran-owned referral service connecting asbestos exposure victims with top-rated attorneys.",
      "url": "https://mesotheliomalawyernearby.com",
      "isPartOf": {
        "@type": "WebSite",
        "name": "Mesothelioma Lawyer Nearby",
        "url": "https://mesotheliomalawyernearby.com"
      },
      "about": {
        "@type": "Thing",
        "name": "Mesothelioma Legal Services"
      },
      "mentions": [
        { "@type": "Thing", "name": "Mesothelioma" },
        { "@type": "Thing", "name": "Asbestos Exposure" },
        { "@type": "Thing", "name": "Personal Injury Law" },
        { "@type": "Thing", "name": "Veterans Benefits" }
      ],
      "speakable": {
        "@type": "SpeakableSpecification",
        "cssSelector": ["h1", ".hero-description"]
      }
    };
  
    // BreadcrumbList Schema
    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [{
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://mesotheliomalawyernearby.com"
      }]
    };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(legalServiceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
};
