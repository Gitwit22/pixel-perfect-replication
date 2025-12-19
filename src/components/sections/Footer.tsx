import { Phone } from "lucide-react";
import { company, footer } from "@/data/content";

export const Footer = () => {
  const handlePhoneClick = async () => {
    if (window.gtag) {
      window.gtag("event", "phone_click", {
        event_category: "lead",
        event_label: "footer_phone",
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
    <footer className="bg-foreground text-background py-10">
      <div className="container-narrow text-center">
        <h3 className="text-xl font-bold mb-1">{company.name}</h3>
        <p className="text-background/70 text-sm mb-4">{footer.tagline}</p>

        <a
          href={`tel:${company.phoneTel}`}
          onClick={handlePhoneClick}
          className="inline-flex items-center gap-2 text-lg font-semibold mb-4 hover:opacity-80 transition-opacity"
        >
          <Phone className="h-5 w-5" />
          {company.phone}
        </a>

        <p className="text-background/60 text-sm mb-4">{footer.license}</p>

        <div className="flex justify-center gap-4 text-sm text-background/60 mb-6">
          <a href="/privacy" className="hover:text-background transition-colors">
            Privacy Policy
          </a>
          <span>|</span>
          <a href="/terms" className="hover:text-background transition-colors">
            Terms of Service
          </a>
        </div>

        <p className="text-background/50 text-xs">
          © {new Date().getFullYear()} {company.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
