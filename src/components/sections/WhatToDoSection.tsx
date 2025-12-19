import { Lightbulb, Phone } from "lucide-react";
import { whatToDo, company } from "@/data/content";

export const WhatToDoSection = () => {
  const handlePhoneClick = async () => {
    if (window.gtag) {
      window.gtag("event", "phone_click", {
        event_category: "lead",
        event_label: "what_to_do_section_phone",
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
      <div className="container-narrow">
        <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-3 text-center">
          {whatToDo.headline}
        </h2>
        <p className="text-text-muted text-center mb-8">{whatToDo.intro}</p>

        <div className="space-y-5 mb-10">
          {whatToDo.steps.map((step, index) => (
            <div key={index} className="flex flex-col gap-2">
              <div
                className="flex gap-5 bg-neu-surface p-6 rounded-neu-lg shadow-neu-raised-lg border border-neu-inset ring-1 ring-white/60 ring-inset items-center"
              >
                <div className="flex-shrink-0 w-10 h-10 bg-neu-accent rounded-full flex items-center justify-center text-neu-accent-foreground font-bold shadow-neu-inset text-lg">
                  {index + 1}
                </div>
                <div>
                  <h3 className="font-semibold text-text-primary mb-1">
                    {step.title}
                  </h3>
                  <p className="text-text-muted text-sm">
                    {step.description}
                  </p>
                </div>
              </div>
              {/* Add call button directly under the last step */}
              {index === whatToDo.steps.length - 1 && (
                <div className="flex justify-center mt-2">
                  <a
                    href={`tel:${company.phoneTel}`}
                    onClick={handlePhoneClick}
                    className="neu-btn neu-btn-primary flex items-center gap-2 font-bold px-6 py-3 border-2 border-[#2F6B4F] outline-none focus:ring-2 focus:ring-[#2F6B4F]/50 shadow-neu-raised-lg"
                    style={{ boxShadow: '0 4px 16px #2F6B4F22' }}
                  >
                    <Phone className="h-5 w-5" />
                    Call Now: {company.phone}
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Pro Tip */}
        <div className="bg-neu-inset border border-neu-surface rounded-neu-md p-5 shadow-neu-inset ring-1 ring-white/50 ring-inset mt-2">
          <div className="flex items-start gap-3">
            <Lightbulb className="h-5 w-5 text-neu-accent flex-shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-neu-accent">Pro Tip:</span>
              <p className="text-text-primary mt-1">{whatToDo.proTip}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
