import { Helmet } from "react-helmet-async";
import { StickyCallBar } from "@/components/sections/StickyCallBar";
import { Hero } from "@/components/sections/Hero";
import { SignsSection } from "@/components/sections/SignsSection";
import { WhatToDoSection } from "@/components/sections/WhatToDoSection";
import { TreatmentOptions } from "@/components/sections/TreatmentOptions";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { ServiceAreas } from "@/components/sections/ServiceAreas";
import { Reviews } from "@/components/sections/Reviews";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Footer } from "@/components/sections/Footer";
import { meta } from "@/data/content";
import { localBusinessSchema, faqSchema } from "@/data/schema";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://aapestpro.com/bed-bug-exterminator-richmond-va" />
        
        {/* Open Graph */}
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:type" content="website" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(localBusinessSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      <main>
        <Hero />
        <SignsSection />
        <WhatToDoSection />
        <TreatmentOptions />
        <ProcessSteps />
        <WhyChooseUs />
        <ServiceAreas />
        <Reviews />
        <FAQ />
        <FinalCTA />
        <Footer />
        <StickyCallBar />
      </main>
    </>
  );
};

export default Index;
