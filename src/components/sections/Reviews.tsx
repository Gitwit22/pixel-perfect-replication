import { Star, ExternalLink } from "lucide-react";
import { reviews } from "@/data/content";

export const Reviews = () => {
  return (
    <section className="section-padding bg-section-alt">
      <div className="container-wide">
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-10 text-center">
          {reviews.headline}
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {reviews.items.map((review, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 shadow-sm border border-border"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              <p className="text-foreground mb-4 italic">"{review.text}"</p>

              <div className="border-t border-border pt-4">
                <p className="font-semibold text-foreground">{review.name}</p>
                <p className="text-muted-foreground text-sm">{review.location}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Google Review CTA */}
        <div className="text-center">
          <p className="text-muted-foreground mb-4">
            Had a great experience with All-American Pest Control?
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 bg-card text-primary font-semibold px-5 py-2.5 rounded-lg border border-border hover:bg-muted transition-colors"
          >
            <ExternalLink className="h-4 w-4" />
            Leave a Google Review
          </a>
        </div>
      </div>
    </section>
  );
};
