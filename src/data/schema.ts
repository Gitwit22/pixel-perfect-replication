// Structured Data for SEO
import { company } from "./content";

type LocalBusinessSchemaProps = {
  cityName: string;
  slugCity: string;
};

export const localBusinessSchema = ({
  cityName,
  slugCity,
}: LocalBusinessSchemaProps) => ({
  "@context": "https://schema.org",
  "@type": "PestControlService",

  "@id": `${company.website}/service-areas/${slugCity}#pestcontrol`,

  "name": `${company.name} – Pest Control in ${cityName}, VA`,

  "description": `Professional pest control services in ${cityName}, VA. ${company.name} provides expert bed bug treatment, roach control, ant control, rodent prevention, and long-term pest management solutions for homes and businesses.`,

  "url": `${company.website}/service-areas/${slugCity}`,

  "telephone": company.phone,

  "priceRange": "$$",

  "openingHours": [
    "Mo-Fr 08:00-18:00",
    "Sa 09:00-15:00"
  ],

  "areaServed": {
    "@type": "City",
    "name": cityName,
    "addressRegion": "VA",
    "addressCountry": "US"
  },

  "address": {
    "@type": "PostalAddress",
    "addressLocality": cityName,
    "addressRegion": "VA",
    "addressCountry": "US"
  },

  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Pest Control Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Bed Bug Inspection and Treatment",
          "areaServed": cityName
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Roach and Ant Control",
          "areaServed": cityName
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Rodent Prevention and Exclusion",
          "areaServed": cityName
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Ongoing Pest Prevention Plans",
          "areaServed": cityName
        }
      }
    ]
  },


  "provider": {
    "@type": "Organization",
    "name": company.name,
    "url": company.website,
    "telephone": company.phone
  }
});


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
  "@id": `${company.website}/#organization`,
  "name": company.name,
  "url": company.website,
  "logo": "public/aa-pest-logo-icon.svg",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": company.phone,
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
  "@id": `${company.website}/bed-bug-extermination`,
  "name": "Bed Bug Extermination Services",
  "description": "Professional bed bug extermination and removal services in Richmond, VA. Same-day inspections, heat treatment, chemical treatment, and guaranteed results.",
  "provider": {
    "@id": `${company.website}/#organization`
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
