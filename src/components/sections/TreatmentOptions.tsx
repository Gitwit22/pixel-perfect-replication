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
    <section className="section-padding bg-card">
      <div className="container-wide">
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3 text-center">
          {treatments.headline}
        </h2>
        <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">
          {treatments.intro}
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {treatments.options.map((option, index) => {
            const Icon = index === 0 ? Flame : FlaskConical;
            return (
              <div
                key={index}
                className="bg-muted rounded-xl p-6 border border-border"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                    <Icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">
                    {option.title}
                  </h3>
                </div>

                <p className="text-muted-foreground mb-4">{option.description}</p>

                <ul className="space-y-2 mb-4">
                  {option.benefits.map((benefit, bIndex) => (
                    <li key={bIndex} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>

                <div className="bg-card rounded-lg p-3 border border-border">
                  <span className="text-sm font-medium text-primary">Best for: </span>
                  <span className="text-sm text-muted-foreground">{option.bestFor}</span>
                </div>
              </div>
            );
          })}
        </div>

        <p className="text-center text-muted-foreground mb-6 max-w-2xl mx-auto">
          {treatments.bottomNote}
        </p>

        <div className="text-center">
          <a
            href={`tel:${company.phoneTel}`}
            onClick={handlePhoneClick}
            className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground font-bold px-6 py-3 rounded-lg shadow-cta transition-all hover:opacity-90 active:scale-95"
          >
            <Phone className="h-5 w-5" />
            {treatments.cta}: {company.phone}
          </a>
        </div>
      </div>
    </section>
  );
};
