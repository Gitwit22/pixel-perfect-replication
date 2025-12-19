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
    <section className="section-padding bg-[#2F6B4F]">
      <div className="container-narrow bg-[#F2F2F2] rounded-neu-lg shadow-neu-raised-lg p-8 mx-auto flex flex-col items-center text-center">
        <img src="/bed-bugs-on-mattress.png" alt="Bed bugs on mattress" className="mx-auto mb-6 w-full max-w-md rounded-lg shadow-neu-raised" />
        <h2 className="text-2xl sm:text-3xl font-bold text-[#2B2B2B] mb-3">
          {signs.headline}
        </h2>
        <p className="text-[#6F6F6F] mb-8">{signs.intro}</p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 w-full max-w-2xl mx-auto">
          {signs.items.map((item, index) => (
            <li
              key={index}
              className="neu-card-sm flex items-center gap-2 px-4 py-3"
            >
              <div className="flex-shrink-0 w-7 h-7 bg-[#2F6B4F] rounded-full flex items-center justify-center shadow-neu-raised-sm">
                <Check className="h-4 w-4 text-white" />
              </div>
              <span className="text-[#2B2B2B] text-sm text-left">{item}</span>
            </li>
          ))}
        </ul>
        {/* Callout Box */}
        <div className="neu-accent-bg flex items-center gap-3 mb-6 justify-center">
          <AlertTriangle className="h-5 w-5 text-[#4A5D6B] flex-shrink-0 mt-0.5" />
          <p className="text-[#2B2B2B] font-medium">{signs.cta.text}</p>
        </div>
        {/* CTA */}
        <div className="text-center">
          <a
            href={`tel:${company.phoneTel}`}
            onClick={handlePhoneClick}
            className="neu-btn neu-btn-primary inline-flex items-center gap-2 font-bold px-6 py-3 border-2 border-[#2F6B4F] outline-none focus:ring-2 focus:ring-[#2F6B4F]/50"
            style={{ boxShadow: '0 4px 16px #2F6B4F22' }}
          >
            <Phone className="h-5 w-5" />
            {signs.cta.buttonText}: {company.phone}
          </a>
        </div>
      </div>
    </section>
  );
};
