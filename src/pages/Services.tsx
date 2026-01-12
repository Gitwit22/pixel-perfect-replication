import { TreatmentOptions } from "@/components/sections/TreatmentOptions";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { GoogleAd } from "@/components/GoogleAd";

const Services = () => (
  <>
    <Header />
    <main>
      <TreatmentOptions />
      {/* AdSense placement between Treatment Options and 3-Step Process */}
      <div className="my-8">
        <GoogleAd slot="1870401628" />
      </div>
      <ProcessSteps />
    </main>
    <Footer />
  </>
);

export default Services;