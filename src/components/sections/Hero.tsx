import { Phone, Shield, MapPin, EyeOff } from "lucide-react";
import { company, hero } from "@/data/content";

const iconMap = {
  shield: Shield,
  "map-pin": MapPin,
  "eye-off": EyeOff,
};

export const Hero = () => {
  const handlePhoneClick = async () => {
    if (window.gtag) {
      window.gtag("event", "phone_click", {
        event_category: "lead",
        event_label: "hero_phone",
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

  const scrollToForm = () => {
    document.getElementById("inspection-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="section-padding relative"
      style={{
        backgroundImage: "linear-gradient(rgba(236,236,236,0.4), rgba(242,242,242,0.4)), url('/hpuse.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container-narrow flex flex-col items-center">
        {/* Accent badges */}
        <span className="mb-2 px-4 py-1 rounded-neu-md bg-[#E3E3E3] text-[#2F6B4F] text-sm font-semibold shadow-neu-raised-sm">
          Licensed & Insured in Virginia
        </span>
        <span className="mb-4 px-4 py-1 rounded-neu-md bg-[#2F6B4F] text-white text-sm font-semibold shadow-neu-raised-sm">
          Residential & Commercial
        </span>
        {/* Raised neu-card */}
        <div className="bg-[#F2F2F2] rounded-neu-lg shadow-neu-raised p-8 w-full max-w-3xl flex flex-col items-center">
          <img src="/aa-pest-logo-bedbug.svg" alt="Bed Bug Logo" className="w-20 h-20 mb-4 drop-shadow-lg" />
          <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-3 text-[#4A5D6B] text-center">
            AA Pest Control
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2 leading-tight text-[#2B2B2B] text-center" itemProp="name">
            Bed Bug Exterminator
          </h1>
          <div className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-4 text-[#2B2B2B] text-center">
            in Richmond, VA
          </div>
          <p className="text-lg sm:text-xl mb-6 max-w-2xl mx-auto text-[#6F6F6F] text-center" itemProp="description">
            {hero.subheadline}
          </p>
          {/* Phone Display */}
          <a
            href={`tel:${company.phoneTel}`}
            onClick={handlePhoneClick}
            className="inline-flex items-center gap-3 text-3xl font-bold mb-6 text-[#2F6B4F] hover:opacity-90 transition-opacity neu-btn neu-btn--phone"
            style={{ textShadow: '0 2px 8px #E3E3E3' }}
          >
            <Phone className="h-7 w-7 animate-pulse text-[#2F6B4F]" />
            <span>{hero.phoneDisplay}</span>
          </a>
          <p className="text-base text-[#6F6F6F] mb-6">{hero.availability}</p>
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8 w-full">
            <button
              onClick={scrollToForm}
              className="neu-btn w-full sm:w-auto text-[#2B2B2B] font-semibold border-2 border-[#2F6B4F] rounded-full px-8 py-3 shadow-neu-raised-lg hover:bg-[#e3e3e3] hover:text-[#2F6B4F] transition-all"
              style={{ boxShadow: '0 4px 16px #2F6B4F22' }}
            >
              {hero.secondaryCTA}
            </button>
          </div>
          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-8 mt-4">
            {hero.trustBadges.map((badge, index) => {
              const Icon = iconMap[badge.icon as keyof typeof iconMap];
              return (
                <div
                  key={index}
                  className="neu-card-sm flex items-center gap-2 px-4 py-2"
                >
                  {Icon && <Icon className="h-4 w-4 text-[#2F6B4F]" />}
                  <span className="text-sm font-medium text-[#4A5D6B]">{badge.title}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
