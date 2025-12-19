import { useEffect, useState } from "react";
import { Phone } from "lucide-react";
import { company } from "@/data/content";

export const StickyCallBar = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = async () => {
    if (window.gtag) {
      window.gtag("event", "phone_click", {
        event_category: "lead",
        event_label: "sticky_call_bar_phone",
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

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden animate-slide-up">
      <div className="bg-[#ECECEC] px-4 py-3 shadow-neu-raised border-t border-[#E3E3E3] transition-all">
        <div className="flex items-center justify-between gap-3">
          <span className="text-[#2B2B2B] font-medium text-sm">
            Bed Bug Emergency?
          </span>
          <a
            href={`tel:${company.phoneTel}`}
            onClick={handleClick}
            className="flex items-center gap-2 bg-[#2F6B4F] text-white font-bold px-4 py-2 rounded-neu-md shadow-neu-raised transition-all hover:bg-[#4A5D6B] active:shadow-neu-pressed"
          >
            <Phone className="h-4 w-4 text-white" />
            <span>TAP TO CALL NOW</span>
          </a>
        </div>
      </div>
    </div>
  );
};
