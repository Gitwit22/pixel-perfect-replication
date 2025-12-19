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
    <section className="section-padding bg-section-alt">
      <div className="container-wide">
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-10 text-center">
          {whyChooseUs.headline}
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {whyChooseUs.benefits.map((benefit, index) => {
            const Icon = iconMap[benefit.icon as keyof typeof iconMap];
            return (
              <div
                key={index}
                className="bg-card p-5 rounded-xl shadow-sm border border-border"
              >
                <div className="w-12 h-12 bg-trust-badge rounded-lg flex items-center justify-center mb-4">
                  {Icon && <Icon className="h-6 w-6 text-primary" />}
                </div>
                <h3 className="font-bold text-foreground mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm">{benefit.description}</p>
              </div>
            );
          })}
        </div>

        {/* Quote */}
        <div className="bg-card rounded-xl p-6 border border-border max-w-2xl mx-auto">
          <Quote className="h-8 w-8 text-primary/30 mb-3" />
          <blockquote className="text-lg text-foreground italic mb-3">
            "{whyChooseUs.quote.text}"
          </blockquote>
          <cite className="text-muted-foreground text-sm not-italic">
            — {whyChooseUs.quote.attribution}
          </cite>
        </div>
      </div>
    </section>
  );
};
