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

  const handleClick = () => {
    console.log("phone_click");
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden animate-slide-up">
      <div className="bg-primary px-4 py-3 shadow-lg">
        <div className="flex items-center justify-between gap-3">
          <span className="text-primary-foreground font-medium text-sm">
            Bed Bug Emergency?
          </span>
          <a
            href={`tel:${company.phoneTel}`}
            onClick={handleClick}
            className="flex items-center gap-2 bg-secondary text-secondary-foreground font-bold px-4 py-2 rounded-lg shadow-cta transition-all hover:opacity-90 active:scale-95"
          >
            <Phone className="h-4 w-4" />
            <span>TAP TO CALL NOW</span>
          </a>
        </div>
      </div>
    </div>
  );
};
