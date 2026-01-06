import { Star, ExternalLink } from "lucide-react";
import { reviews } from "@/data/content";

export const Reviews = () => {
  return (
    <section className="section-padding bg-brand-gray-light">
      <div className="container-wide">
        {/* Header with tagline and Google Review CTA side by side */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-6">
          <div className="flex flex-col items-center md:items-start">
            <img src="/aa-pest-logo-clean.svg" alt="AA Pest Clean Logo" className="w-20 h-20 mb-2" />
            <h2 className="text-2xl sm:text-3xl font-bold text-brand-black text-center md:text-left">
              {reviews.headline}
            </h2>
            <p className="text-brand-black text-lg mt-2 text-center md:text-left">
              Check out our reviews from our customers!
            </p>
          </div>
          {/* Google Review CTA in side panel */}
          <div className="flex justify-center md:justify-end">
            <a
              href="https://www.google.com/search?sca_esv=e218964b1e17de2c&hl=en-US&sxsrf=AE3TifOZRDv6UIOBIGI3qY_bPBV6l_Zq9w:1767717297442&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-E7p5V6IBE8IS-5v951U4GRpQMQ1FroTJxNT1v-BwZNI2AlEK8vOpLgnQ-k17tK8XaZn769YocFoUhupd2OmMlxjLfOP65fmZkpg0YL3TcRkCvMkumg%3D%3D&q=All+American+Pest+Control+Reviews&sa=X&ved=2ahUKEwjz-c6MrPeRAxU7kIkEHfNPAQ8Q0bkNegQIKxAE&biw=1920&bih=993&dpr=1#"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-bold px-8 py-4 rounded-full bg-brand-gold text-brand-black shadow-neu-raised-lg transition-all hover:bg-brand-gold-dark active:scale-95 text-lg"
              style={{ boxShadow: "0 4px 16px #F4C43077" }}
            >
              <ExternalLink className="h-4 w-4" />
              Leave a Google Review
            </a>
          </div>
        </div>

        {/* Review Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-12">
          {reviews.items.map((review, index) => (
            <div
              key={index}
              className="bg-white rounded-neu-lg p-8 shadow-neu-raised-lg border border-brand-green/25 flex flex-col h-full"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-brand-gold text-brand-gold drop-shadow"
                  />
                ))}
              </div>

              <p className="text-brand-black mb-4 italic flex-grow">"{review.text}"</p>

              <div className="border-t border-brand-gray-light pt-4">
                <p className="font-semibold text-brand-black">{review.name}</p>
                <p className="text-sm text-[#6F6F6F]">{review.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};