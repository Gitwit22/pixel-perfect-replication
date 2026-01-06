import { Phone } from "lucide-react";
import { company } from "@/data/content";
import { Link } from "react-router-dom";

export const Header = () => {
  const handlePhoneClick = async () => {
    if (window.gtag) {
      window.gtag("event", "phone_click", {
        event_category: "lead",
        event_label: "header_phone",
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
    <header className="bg-white border-b-4 border-brand-green shadow-md fixed top-0 left-0 w-full z-50">
      <div className="container-wide flex items-center justify-between py-3">
        {/* Logo / Brand */}
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-brand-black border-4 border-brand-gold flex items-center justify-center text-white font-extrabold text-lg shadow-sm">
            A2
          </div>
          <div className="leading-tight">
            <div className="font-extrabold tracking-wide text-sm sm:text-base uppercase text-brand-black">
              {company.name}
            </div>
            <div className="text-xs text-brand-gray tracking-widest uppercase">
              Richmond, VA
            </div>
          </div>
        </div>

        {/* Nav links - desktop only for now */}
        <nav className="hidden md:flex items-center gap-6 text-xs font-semibold uppercase tracking-widest text-brand-black">
          <Link to="/" className="hover:text-brand-green transition-colors">
            Home
          </Link>
          <Link
            to="/services"
            className="hover:text-brand-green transition-colors"
          >
            Services
          </Link>
          <Link to="/areas" className="hover:text-brand-green transition-colors">
            Areas
          </Link>
          <Link to="/reviews" className="hover:text-brand-green transition-colors">
            Reviews
          </Link>
          <a href="/blog" className="hover:text-brand-green transition-colors">
            Blog
          </a>
          <Link to="/contact" className="hover:text-brand-green transition-colors">
            Contact
          </Link>
          <Link
            to="/instant-quote"
            className="hover:text-brand-green transition-colors"
          >
            Instant Quote
          </Link>
         
        </nav>

        {/* Call button */}
        <a
          href={company.phoneHref}
          onClick={handlePhoneClick}
          className="inline-flex items-center gap-2 rounded-md bg-brand-gold border-2 border-brand-gold-dark px-4 sm:px-5 py-2 text-xs sm:text-sm font-bold uppercase tracking-widest text-brand-black shadow-md hover:bg-brand-gold-dark hover:-translate-y-0.5 transition-all"
        >
          <Phone className="h-4 w-4" />
          <span>{company.phone}</span>
        </a>
      </div>
    </header>
  );
};
