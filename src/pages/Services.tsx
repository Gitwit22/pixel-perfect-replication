import { TreatmentOptions } from "@/components/sections/TreatmentOptions";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";

const Services = () => (
  <>
    <Header />
    <main>
      <TreatmentOptions />
      <ProcessSteps />
    </main>
    <Footer />
  </>
);

export default Services;