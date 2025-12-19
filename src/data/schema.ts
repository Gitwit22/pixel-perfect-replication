// Structured Data for SEO

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "PestControlService",
  "name": "All-American Pest Control",
  "description": "Professional bed bug extermination services in Richmond, VA. Licensed and insured pest control company offering heat treatment and chemical treatment for bed bug infestations.",
  "url": "https://aapestpro.com/bed-bug-exterminator-richmond-va",
  "telephone": "+1-804-489-7465",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Richmond",
    "addressRegion": "VA",
    "addressCountry": "US"
  },
  "areaServed": [
    { "@type": "City", "name": "Richmond", "sameAs": "https://en.wikipedia.org/wiki/Richmond,_Virginia" },
    { "@type": "County", "name": "Henrico County" },
    { "@type": "County", "name": "Chesterfield County" },
    { "@type": "County", "name": "Hanover County" }
  ],
  "priceRange": "$$",
  "paymentAccepted": "Cash, Credit Card",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Bed Bug Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Bed Bug Inspection",
          "description": "Professional bed bug inspection to confirm infestation and determine treatment approach"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Bed Bug Heat Treatment",
          "description": "Chemical-free bed bug elimination using controlled heat"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Bed Bug Chemical Treatment",
          "description": "EPA-registered chemical treatment for bed bug elimination"
        }
      }
    ]
  }
};

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How much does bed bug treatment cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The cost of bed bug treatment varies based on the size of the infestation, the treatment method required, and the square footage of affected areas. We provide free inspections and upfront pricing—you'll know exactly what to expect before any work begins."
      }
    },
    {
      "@type": "Question",
      "name": "How quickly can you come out for an inspection?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We offer same-day inspections for most Richmond-area locations when you call before noon. Next-day appointments are typically available for calls made later in the day."
      }
    },
    {
      "@type": "Question",
      "name": "Is bed bug treatment safe around children and pets?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We use EPA-registered products and follow all safety protocols. We'll provide specific guidance about when it's safe for family members and pets to return to treated areas. Our heat treatment option is chemical-free for those who prefer it."
      }
    },
    {
      "@type": "Question",
      "name": "What's the difference between heat treatment and chemical treatment?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Heat treatment uses elevated temperatures (120-140°F) to kill bed bugs at all life stages in a single treatment—it's chemical-free. Chemical treatment uses targeted EPA-registered products that provide residual protection over time. Both methods work."
      }
    },
    {
      "@type": "Question",
      "name": "Will my neighbors know you're treating for bed bugs?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We prioritize your privacy. Our service vehicles are unmarked or feature minimal branding. Our technicians are professional and discreet."
      }
    }
  ]
};

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://aapestpro.com/#organization",
  "name": "All-American Pest Control",
  "url": "https://aapestpro.com",
  "logo": "https://aapestpro.com/logo.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-804-489-7465",
    "contactType": "customer service",
    "availableLanguage": "English",
    "areaServed": "Richmond, VA"
  },
  "sameAs": [
    "https://www.facebook.com/aapestcontrol",
    "https://www.google.com/maps/place/All-American+Pest+Control"
  ]
};

export const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://aapestpro.com/bed-bug-extermination",
  "name": "Bed Bug Extermination Services",
  "description": "Professional bed bug extermination and removal services in Richmond, VA. Same-day inspections, heat treatment, chemical treatment, and guaranteed results.",
  "provider": {
    "@id": "https://aapestpro.com/#organization"
  },
  "areaServed": {
    "@type": "State",
    "name": "Virginia"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Bed Bug Treatment Options",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Emergency Bed Bug Inspection",
          "description": "Same-day bed bug inspection and assessment"
        }
      }
    ]
  }
};
