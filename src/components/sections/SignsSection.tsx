import { Check, Phone, AlertTriangle } from "lucide-react";
import { company, signs } from "@/data/content";

export const SignsSection = () => {
  const handlePhoneClick = () => {
    console.log("phone_click");
  };

  return (
    <section className="section-padding bg-card">
      <div className="container-narrow">
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3 text-center">
          {signs.headline}
        </h2>
        <p className="text-muted-foreground text-center mb-8">{signs.intro}</p>

        <ul className="space-y-4 mb-8">
          {signs.items.map((item, index) => (
            <li
              key={index}
              className="flex items-start gap-3 bg-muted p-4 rounded-lg"
            >
              <div className="flex-shrink-0 w-6 h-6 bg-secondary rounded-full flex items-center justify-center mt-0.5">
                <Check className="h-4 w-4 text-secondary-foreground" />
              </div>
              <span className="text-foreground">{item}</span>
            </li>
          ))}
        </ul>

        {/* Callout Box */}
        <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4 mb-6">
          <div className="flex items-start gap-3">
            <AlertTriangle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
            <p className="text-foreground font-medium">{signs.cta.text}</p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href={`tel:${company.phoneTel}`}
            onClick={handlePhoneClick}
            className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground font-bold px-6 py-3 rounded-lg shadow-cta transition-all hover:opacity-90 active:scale-95"
          >
            <Phone className="h-5 w-5" />
            {signs.cta.buttonText}: {company.phone}
          </a>
        </div>
      </div>
    </section>
  );
};
