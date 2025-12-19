import { Phone, Shield, MapPin, EyeOff } from "lucide-react";
import { company, hero } from "@/data/content";

const iconMap = {
  shield: Shield,
  "map-pin": MapPin,
  "eye-off": EyeOff,
};

export const Hero = () => {
  const handlePhoneClick = () => {
    console.log("phone_click");
  };

  const scrollToForm = () => {
    document.getElementById("inspection-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="bg-primary text-primary-foreground section-padding">
      <div className="container-narrow text-center">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
          {hero.headline}
        </h1>
        
        <p className="text-lg sm:text-xl opacity-90 mb-6 max-w-2xl mx-auto">
          {hero.subheadline}
        </p>

        {/* Phone Display */}
        <a
          href={`tel:${company.phoneTel}`}
          onClick={handlePhoneClick}
          className="inline-flex items-center gap-3 text-2xl sm:text-3xl font-bold mb-6 hover:opacity-90 transition-opacity"
        >
          <Phone className="h-7 w-7 animate-pulse" />
          <span>{hero.phoneDisplay}</span>
        </a>

        <p className="text-sm opacity-80 mb-6">{hero.availability}</p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
          <a
            href={`tel:${company.phoneTel}`}
            onClick={handlePhoneClick}
            className="inline-flex items-center justify-center gap-2 bg-secondary text-secondary-foreground font-bold text-lg px-8 py-4 rounded-lg shadow-cta transition-all hover:opacity-90 active:scale-95"
          >
            <Phone className="h-5 w-5" />
            {hero.primaryCTA}
          </a>
          
          <button
            onClick={scrollToForm}
            className="inline-flex items-center justify-center font-semibold text-lg px-8 py-4 rounded-lg border-2 border-primary-foreground/30 bg-primary-foreground/10 text-primary-foreground transition-all hover:bg-primary-foreground/20"
          >
            {hero.secondaryCTA}
          </button>
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-8">
          {hero.trustBadges.map((badge, index) => {
            const Icon = iconMap[badge.icon as keyof typeof iconMap];
            return (
              <div
                key={index}
                className="flex items-center gap-2 bg-primary-foreground/10 px-4 py-2 rounded-full"
              >
                {Icon && <Icon className="h-4 w-4 opacity-80" />}
                <span className="text-sm font-medium">{badge.title}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
