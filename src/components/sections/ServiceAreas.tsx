import { MapPin, Clock, Phone } from "lucide-react";
import { company, serviceAreas } from "@/data/content";

export const ServiceAreas = () => {
  const handlePhoneClick = async () => {
    if (window.gtag) {
      window.gtag("event", "phone_click", {
        event_category: "lead",
        event_label: "service_areas_phone",
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
        <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-3 text-center">
          {serviceAreas.headline}
        </h2>
        <p className="text-text-muted text-center mb-10">
          {serviceAreas.intro}
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-10">
          {serviceAreas.regions.map((region, index) => (
            <div
              key={index}
              className="bg-neu-surface rounded-neu-lg p-8 border border-neu-inset shadow-neu-raised-lg ring-1 ring-white/60 ring-inset"
            >
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="h-5 w-5 text-neu-accent" />
                <h3 className="font-bold text-text-primary">{region.name}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {region.areas.map((area, aIndex) => (
                  <span
                    key={aIndex}
                    className="bg-neu-inset px-3 py-1.5 rounded-full text-sm text-text-primary border border-neu-surface shadow-neu-inset ring-1 ring-white/40 ring-inset"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Same-Day Availability Box */}
        <div className="bg-neu-inset border border-neu-surface rounded-neu-md p-6 text-center mb-6 shadow-neu-inset ring-1 ring-white/50 ring-inset">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Clock className="h-5 w-5 text-neu-secondary" />
            <h3 className="font-bold text-text-primary">
              {serviceAreas.availability.headline}
            </h3>
          </div>
          <p className="text-text-muted">{serviceAreas.availability.text}</p>
        </div>

        <p className="text-center text-text-muted mb-4">
          {serviceAreas.edgeCase}
        </p>

        <div className="text-center">
          <a
            href={`tel:${company.phoneTel}`}
            onClick={handlePhoneClick}
            className="inline-flex items-center gap-2 bg-neu-accent text-neu-accent-foreground font-bold px-8 py-4 rounded-neu-md shadow-neu-raised-lg transition-all hover:opacity-90 active:scale-95 text-lg"
          >
            <Phone className="h-5 w-5" />
            {company.phone}
          </a>
        </div>
      </div>
    </section>
  );
};
