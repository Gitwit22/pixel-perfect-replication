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
    <section className="section-padding bg-brand-gray-light">
      <div className="container-wide">
        <img src="/bakpak.png" alt="Bed Bug Treatment Equipment" className="mx-auto mb-6 w-64 h-auto rounded-xl shadow-neu-raised-lg" />
        <h2 className="text-2xl sm:text-3xl font-bold text-brand-black mb-3 text-center">
          {treatments.headline}
        </h2>
        <p className="text-[#6F6F6F] text-center mb-10 max-w-2xl mx-auto">
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
            const isPrimary = isHeat;
            return (
              <div
                key={index}
                className={`rounded-neu-lg p-8 relative overflow-hidden transition-all shadow-neu-raised-lg border-2 ${
                  isPrimary ? "bg-white border-brand-green" : "bg-brand-black text-white border-brand-gold"
                }`}
                style={cardStyle}
              >
                <div className="flex items-center gap-4 mb-5 relative z-10">
                  <div
                    className={`w-14 h-14 rounded-full flex items-center justify-center shadow-neu-raised-sm border-2 ${
                      isPrimary
                        ? "bg-brand-green border-brand-gold"
                        : "bg-brand-gold border-brand-black"
                    }`}
                  >
                    <Icon
                      className={`h-7 w-7 ${
                        isPrimary ? "text-white" : "text-brand-black"
                      }`}
                    />
                  </div>
                  <h3 className="text-xl font-bold text-brand-black">
                    {option.title}
                  </h3>
                </div>

                <p
                  className={`mb-5 relative z-10 text-sm ${
                    isPrimary ? "text-[#4B5563]" : "text-white/80"
                  }`}
                >
                  {option.description}
                </p>

                <ul className="space-y-2 mb-5 relative z-10">
                  {option.benefits.map((benefit, bIndex) => (
                    <li key={bIndex} className="flex items-start gap-2">
                      <Check
                        className={`h-5 w-5 flex-shrink-0 mt-0.5 ${
                          isPrimary ? "text-brand-green" : "text-brand-gold"
                        }`}
                      />
                      <span
                        className={`text-sm ${
                          isPrimary ? "text-brand-black" : "text-white"
                        }`}
                      >
                        {benefit}
                      </span>
                    </li>
                  ))}
                </ul>

                <div
                  className={`rounded-neu-md p-3 mt-2 relative z-10 border ${
                    isPrimary
                      ? "bg-brand-gray-light border-brand-green/40"
                      : "bg-black/40 border-brand-gold/60"
                  }`}
                >
                  <span
                    className={`text-sm font-semibold ${
                      isPrimary ? "text-brand-green" : "text-brand-gold"
                    }`}
                  >
                    Best for:
                  </span>{" "}
                  <span
                    className={`text-sm ${
                      isPrimary ? "text-[#4B5563]" : "text-white/80"
                    }`}
                  >
                    {option.bestFor}
                  </span>
                </div>
                {/* Overlay for extra readability if needed */}
                {/* <div className="absolute inset-0 bg-white/70 pointer-events-none" /> */}
              </div>
            );
          })}
        </div>

        <p className="text-center text-[#6F6F6F] mb-6 max-w-2xl mx-auto">
          {treatments.bottomNote}
        </p>

        <div className="text-center">
          <a
            href={`tel:${company.phone}`}
            onClick={handlePhoneClick}
            className="inline-flex items-center gap-2 font-bold px-10 py-4 rounded-full bg-brand-gold text-brand-black shadow-neu-raised-lg transition-all hover:bg-brand-gold-dark active:scale-95 text-lg"
            style={{ boxShadow: "0 6px 18px #F4C43066" }}
          >
            <Phone className="h-5 w-5" />
            {treatments.cta}: {company.phone}
          </a>
        </div>
      </div>
    </section>
  );
};
