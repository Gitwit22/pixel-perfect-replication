import { Star, ExternalLink } from "lucide-react";
import { reviews } from "@/data/content";

export const Reviews = () => {
  return (
    <section className="section-padding bg-neu-bg">
      <div className="container-wide">
        <div className="flex flex-col items-center mb-8">
          <img src="/aa-pest-logo-clean.svg" alt="AA Pest Clean Logo" className="w-20 h-20 mb-2" />
          <h2 className="text-2xl sm:text-3xl font-bold text-text-primary text-center">
            {reviews.headline}
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {reviews.items.map((review, index) => (
            <div
              key={index}
              className="bg-neu-surface rounded-neu-lg p-8 shadow-neu-raised-lg border border-neu-inset ring-1 ring-white/60 ring-inset"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-yellow-400 text-yellow-400 drop-shadow"
                  />
                ))}
              </div>

              <p className="text-text-primary mb-4 italic">"{review.text}"</p>

              <div className="border-t border-neu-surface pt-4">
                <p className="font-semibold text-text-primary">{review.name}</p>
                <p className="text-text-muted text-sm">{review.location}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Google Review CTA */}
        <div className="text-center">
          <p className="text-text-muted mb-4">
            Had a great experience with All-American Pest Control?
          </p>
          <a
            href="https://share.google/1FBePe6GTHLwlRPUD"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-neu-accent text-neu-accent-foreground font-bold px-8 py-4 rounded-neu-md shadow-neu-raised-lg ring-1 ring-white/60 ring-inset transition-all hover:opacity-90 active:scale-95 text-lg"
          >
            <ExternalLink className="h-4 w-4" />
            Leave a Google Review
          </a>
        </div>
      </div>
    </section>
  );
};
