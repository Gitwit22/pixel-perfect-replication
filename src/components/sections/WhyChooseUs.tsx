import {
  ShieldCheck,
  MapPin,
  EyeOff,
  MessageCircle,
  Award,
  RefreshCw,
  Quote,
} from "lucide-react";
import { whyChooseUs } from "@/data/content";

const iconMap = {
  "shield-check": ShieldCheck,
  "map-pin": MapPin,
  "eye-off": EyeOff,
  "message-circle": MessageCircle,
  award: Award,
  "refresh-cw": RefreshCw,
};

export const WhyChooseUs = () => {
  return (
    <section className="section-padding bg-neu-bg">
      <div className="container-wide">
        <img src="/aa-pest-logo-icon.svg" alt="AA Pest Icon" className="mx-auto mb-6 w-16 h-16" />
        <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-10 text-center">
          {whyChooseUs.headline}
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {whyChooseUs.benefits.map((benefit, index) => {
            const Icon = iconMap[benefit.icon as keyof typeof iconMap];
            return (
              <div
                key={index}
                className="bg-neu-surface p-7 rounded-neu-lg shadow-neu-raised-lg border border-neu-inset ring-1 ring-white/60 ring-inset transition-all hover:shadow-neu-raised-lg hover:ring-2 hover:ring-white/80"
              >
                <div className="w-14 h-14 bg-neu-accent rounded-neu-md flex items-center justify-center mb-5 shadow-neu-inset">
                  {Icon && <Icon className="h-7 w-7 text-neu-accent-foreground" />}
                </div>
                <h3 className="font-bold text-text-primary mb-2">{benefit.title}</h3>
                <p className="text-text-muted text-sm">{benefit.description}</p>
              </div>
            );
          })}
        </div>

        {/* Quote */}
        <div className="bg-neu-inset rounded-neu-lg p-8 border border-neu-surface max-w-2xl mx-auto shadow-neu-inset ring-1 ring-white/50 ring-inset mt-2">
          <Quote className="h-8 w-8 text-neu-accent/30 mb-3" />
          <blockquote className="text-lg text-text-primary italic mb-3">
            "{whyChooseUs.quote.text}"
          </blockquote>
          <cite className="text-text-muted text-sm not-italic">
            — {whyChooseUs.quote.attribution}
          </cite>
        </div>
      </div>
    </section>
  );
};
