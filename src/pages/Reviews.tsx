import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { Reviews as ReviewsSection } from "@/components/sections/Reviews";

const Reviews = () => (
  <>
    <Header />
    <main>
      <ReviewsSection />
    </main>
    <Footer />
  </>
);

export default Reviews;