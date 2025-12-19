import { MapPin, Clock, Phone } from "lucide-react";
import { company, serviceAreas } from "@/data/content";

export const ServiceAreas = () => {
  const handlePhoneClick = () => {
    console.log("phone_click");
  };

  return (
    <section className="section-padding bg-card">
      <div className="container-wide">
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3 text-center">
          {serviceAreas.headline}
        </h2>
        <p className="text-muted-foreground text-center mb-10">
          {serviceAreas.intro}
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {serviceAreas.regions.map((region, index) => (
            <div
              key={index}
              className="bg-muted rounded-xl p-6 border border-border"
            >
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="h-5 w-5 text-primary" />
                <h3 className="font-bold text-foreground">{region.name}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {region.areas.map((area, aIndex) => (
                  <span
                    key={aIndex}
                    className="bg-card px-3 py-1.5 rounded-full text-sm text-foreground border border-border"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Same-Day Availability Box */}
        <div className="bg-secondary/10 border border-secondary/30 rounded-xl p-6 text-center mb-6">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Clock className="h-5 w-5 text-secondary" />
            <h3 className="font-bold text-foreground">
              {serviceAreas.availability.headline}
            </h3>
          </div>
          <p className="text-muted-foreground">{serviceAreas.availability.text}</p>
        </div>

        <p className="text-center text-muted-foreground mb-4">
          {serviceAreas.edgeCase}
        </p>

        <div className="text-center">
          <a
            href={`tel:${company.phoneTel}`}
            onClick={handlePhoneClick}
            className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
          >
            <Phone className="h-4 w-4" />
            {company.phone}
          </a>
        </div>
      </div>
    </section>
  );
};
