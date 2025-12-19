import { Check, Flame, FlaskConical, Phone } from "lucide-react";
import { company, treatments } from "@/data/content";

const iconMap = {
  heat: Flame,
  chemical: FlaskConical,
};

export const TreatmentOptions = () => {
  const handlePhoneClick = async () => {
    if (window.gtag) {
      window.gtag("event", "phone_click", {
        event_category: "lead",
        event_label: "treatment_options_phone",
        value: 1,
      });
    }
    try {
      await fetch("/api/event", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          event: "phone_click",
          page: window.location.href,
          ts: Date.now(),
        }),
      });
    } catch {}
  };

  return (
    <section className="section-padding bg-neu-bg">
      <div className="container-wide">
        <img src="/bakpak.png" alt="Bed Bug Treatment Equipment" className="mx-auto mb-6 w-64 h-auto rounded-lg shadow-neu-raised" />
        <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-3 text-center">
          {treatments.headline}
        </h2>
        <p className="text-text-muted text-center mb-10 max-w-2xl mx-auto">
          {treatments.intro}
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-10">
          {treatments.options.map((option, index) => {
            const Icon = index === 0 ? Flame : FlaskConical;
            // If this is the Heat or Chemical Treatment option, add a background image
            const isHeat = index === 0;
            const isChemical = index === 1;
            let cardStyle = {};
            if (isHeat) {
              cardStyle = {
                backgroundImage: "linear-gradient(rgba(242,242,242,0.92), rgba(242,242,242,0.92)), url('/heat.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              };
            } else if (isChemical) {
              cardStyle = {
                backgroundImage: "linear-gradient(rgba(242,242,242,0.92), rgba(242,242,242,0.92)), url('/spray.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              };
            }
            return (
              <div
                key={index}
                className="bg-neu-surface rounded-neu-lg p-8 border border-neu-inset shadow-neu-raised-lg ring-1 ring-white/60 ring-inset transition-all hover:shadow-neu-raised-lg hover:ring-2 hover:ring-white/80 relative overflow-hidden"
                style={cardStyle}
              >
                <div className="flex items-center gap-4 mb-5 relative z-10">
                  <div className="w-14 h-14 bg-neu-accent rounded-neu-md flex items-center justify-center shadow-neu-inset">
                    <Icon className="h-7 w-7 text-neu-accent-foreground" />
                  </div>
                  <h3 className="text-xl font-bold text-text-primary">
                    {option.title}
                  </h3>
                </div>

                <p className="text-text-muted mb-5 relative z-10">{option.description}</p>

                <ul className="space-y-2 mb-5 relative z-10">
                  {option.benefits.map((benefit, bIndex) => (
                    <li key={bIndex} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-neu-secondary flex-shrink-0 mt-0.5" />
                      <span className="text-text-primary text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>

                <div className="bg-neu-inset rounded-neu-md p-3 border border-neu-surface shadow-neu-inset ring-1 ring-white/50 ring-inset relative z-10">
                  <span className="text-sm font-medium text-neu-accent">Best for: </span>
                  <span className="text-sm text-text-muted">{option.bestFor}</span>
                </div>
                {/* Overlay for extra readability if needed */}
                {/* <div className="absolute inset-0 bg-white/70 pointer-events-none" /> */}
              </div>
            );
          })}
        </div>

        <p className="text-center text-text-muted mb-6 max-w-2xl mx-auto">
          {treatments.bottomNote}
        </p>

        <div className="text-center">
          <a
            href={`tel:${company.phoneTel}`}
            onClick={handlePhoneClick}
            className="inline-flex items-center gap-2 bg-neu-accent text-neu-accent-foreground font-bold px-8 py-4 rounded-neu-md shadow-neu-raised-lg transition-all hover:opacity-90 active:scale-95 text-lg"
          >
            <Phone className="h-5 w-5" />
            {treatments.cta}: {company.phone}
          </a>
        </div>
      </div>
    </section>
  );
};
