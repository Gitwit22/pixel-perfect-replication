import { Check, Phone, AlertTriangle } from "lucide-react";
import { company, signs } from "@/data/content";

export const SignsSection = () => {
  const handlePhoneClick = async () => {
    if (window.gtag) {
      window.gtag("event", "phone_click", {
        event_category: "lead",
        event_label: "signs_section_phone",
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
    <section className="section-padding bg-brand-green">
      <div className="container-narrow bg-white rounded-neu-lg shadow-neu-raised-lg p-8 mx-auto flex flex-col items-center text-center border border-brand-green/20">
        <img src="/bed-bugs-on-mattress.png" alt="Bed bugs on mattress" className="mx-auto mb-6 w-full max-w-md rounded-lg shadow-neu-raised" />
        <h2 className="text-2xl sm:text-3xl font-bold text-brand-black mb-3">
          {signs.headline}
        </h2>
        <p className="text-[#6F6F6F] mb-8 max-w-2xl mx-auto">{signs.intro}</p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 w-full max-w-2xl mx-auto">
          {signs.items.map((item, index) => (
            <li
              key={index}
              className="neu-card-sm flex items-center gap-2 px-4 py-3 bg-brand-gray-light border border-brand-green/30 rounded-neu-md shadow-neu-raised-sm"
            >
              <div className="flex-shrink-0 w-7 h-7 bg-brand-green rounded-full flex items-center justify-center shadow-neu-raised-sm">
                <Check className="h-4 w-4 text-white" />
              </div>
              <span className="text-[#2B2B2B] text-sm text-left">{item}</span>
            </li>
          ))}
        </ul>
        {/* Callout Box */}
        <div className="flex items-center gap-3 mb-6 justify-center bg-brand-black text-white px-4 py-3 rounded-neu-md border border-brand-gold shadow-neu-raised-lg max-w-2xl mx-auto">
          <AlertTriangle className="h-5 w-5 text-brand-gold flex-shrink-0 mt-0.5" />
          <p className="font-medium text-sm sm:text-base">{signs.cta.text}</p>
        </div>
        {/* CTA */}
        <div className="text-center">
          <a
            href={`tel:${company.phone}`}
            onClick={handlePhoneClick}
            className="inline-flex items-center gap-2 font-bold px-8 py-3 rounded-full bg-brand-gold text-brand-black shadow-neu-raised-lg outline-none focus:ring-2 focus:ring-brand-gold/60 hover:bg-brand-gold-dark transition-colors text-sm sm:text-base"
            style={{ boxShadow: "0 4px 16px #F4C43055" }}
          >
            <Phone className="h-5 w-5" />
            {signs.cta.buttonText}: {company.phone}
          </a>
        </div>
      </div>
    </section>
  );
};
