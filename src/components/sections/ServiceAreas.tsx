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
    <section className="section-padding bg-brand-gray-light">
      <div className="container-wide">
        <h2 className="text-2xl sm:text-3xl font-bold text-brand-black mb-3 text-center">
          {serviceAreas.headline}
        </h2>
        <p className="text-[#6F6F6F] text-center mb-10 max-w-2xl mx-auto">
          {serviceAreas.intro}
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-10">
          {serviceAreas.regions.map((region, index) => (
            <div
              key={index}
              className="bg-white rounded-neu-lg p-8 border border-brand-green/25 shadow-neu-raised-lg"
            >
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="h-5 w-5 text-brand-green" />
                <h3 className="font-bold text-brand-black">{region.name}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {region.areas.map((area, aIndex) => (
                  <span
                    key={aIndex}
                    className="px-3 py-1.5 rounded-full text-sm text-brand-black bg-brand-gray-light border border-brand-green/30"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Same-Day Availability Box */}
        <div className="bg-brand-black border border-brand-gold/60 rounded-neu-md p-6 text-center mb-6 shadow-neu-raised-lg text-white">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Clock className="h-5 w-5 text-brand-gold" />
            <h3 className="font-bold">
              {serviceAreas.availability.headline}
            </h3>
          </div>
          <p className="text-white/80">{serviceAreas.availability.text}</p>
        </div>

        <p className="text-center text-[#6F6F6F] mb-4">
          {serviceAreas.edgeCase}
        </p>

        <div className="text-center">
          <a
            href={`tel:${company.phone}`}
            onClick={handlePhoneClick}
            className="inline-flex items-center gap-2 font-bold px-8 py-4 rounded-full bg-brand-gold text-brand-black shadow-neu-raised-lg transition-all hover:bg-brand-gold-dark active:scale-95 text-lg"
            style={{ boxShadow: "0 4px 16px #F4C43066" }}
          >
            <Phone className="h-5 w-5" />
            {company.phone}
          </a>
        </div>
      </div>
    </section>
  );
};
