import { Helmet } from "react-helmet-async";
import { StickyCallBar } from "@/components/sections/StickyCallBar";
import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { SignsSection } from "@/components/sections/SignsSection";
import WhatToDoSection from "@/components/sections/WhatToDoSection";
import { TreatmentOptions } from "@/components/sections/TreatmentOptions";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import { ServiceAreas } from "@/components/sections/ServiceAreas";
import { Reviews } from "@/components/sections/Reviews";

import { FinalCTA } from "@/components/sections/FinalCTA";
import { Footer } from "@/components/sections/Footer";
import { analytics, company, meta } from "@/data/content";
import { localBusinessSchema, faqSchema, organizationSchema, serviceSchema } from "@/data/schema";
import { FaqSection } from "@/components/sections/FaqSection";

const Index = () => {
  const gaId = analytics.gaMeasurementId;

  return (
    <>
      <Helmet>
        {/* Google Analytics */}
        <script async src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gaId}');
          `}
        </script>
        
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta name="keywords" content="bed bug exterminator, Richmond VA, pest control, bed bug removal, heat treatment, same day service, licensed exterminator, Henrico County, Chesterfield County" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content={company.name} />
        <meta name="geo.region" content="US-VA" />
        <meta name="geo.placename" content="Richmond, Virginia" />
        <meta name="geo.position" content="37.5407;-77.4360" />
        <meta name="ICBM" content="37.5407, -77.4360" />
        <link rel="canonical" href={`${company.website}/bed-bug-exterminator-richmond-va`} />
        
        {/* Open Graph */}
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${company.website}/bed-bug-exterminator-richmond-va`} />
        <meta property="og:image" content={`${company.website}/images/bed-bug-service-richmond.jpg`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content={company.name} />
        
        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={`${company.website}/images/bed-bug-service-richmond.jpg`} />
        
        {/* Business Info */}
        <meta name="contact" content={company.phone} />
        <meta name="coverage" content="Richmond, VA and surrounding areas" />
        
        {/* Technical SEO */}
        <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta name="format-detection" content="telephone=yes" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/inter-var.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        
        {/* Performance */}
        <link rel="preload" as="script" href="/js/critical.js" />
        <meta name="theme-color" content="#1a1a1a" />
        
        {/* Sitemap */}
        <link rel="sitemap" type="application/xml" title="Sitemap" href="/sitemap.xml" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(localBusinessSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(serviceSchema)}
        </script>
      </Helmet>

      <main id="top">
        <Header />
        <Hero />
        <SignsSection />
        <WhatToDoSection />
        
        
        <WhyChooseUs />
        <ServiceAreas />
        
        <FaqSection />
        <FinalCTA />
        <Footer />
        <StickyCallBar />
      </main>
    </>
  );
};

export default Index;
