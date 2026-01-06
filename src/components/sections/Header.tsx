import { Phone, Menu } from "lucide-react";
import { company } from "@/data/content";
import { Link } from "react-router-dom";
import React from "react";

export const Header = () => {
  const [mobileNavOpen, setMobileNavOpen] = React.useState(false);
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

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 text-xs font-semibold uppercase tracking-widest text-brand-black">
          <Link to="/" className="hover:text-brand-green transition-colors">Home</Link>
          <Link to="/services" className="hover:text-brand-green transition-colors">Services</Link>
          <Link to="/areas" className="hover:text-brand-green transition-colors">Areas</Link>
          <Link to="/reviews" className="hover:text-brand-green transition-colors">Reviews</Link>
          <a href="/blog" className="hover:text-brand-green transition-colors">Blog</a>
          <Link to="/contact" className="hover:text-brand-green transition-colors">Contact</Link>
          <Link to="/instant-quote" className="hover:text-brand-green transition-colors">Instant Quote</Link>
        </nav>

        {/* Mobile Nav Toggle */}
        <button
          className="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-brand-green"
          aria-label="Open navigation menu"
          onClick={() => setMobileNavOpen((open) => !open)}
        >
          <Menu className="h-6 w-6 text-brand-black" />
        </button>

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

      {/* Mobile Dropdown Menu */}
      {mobileNavOpen && (
        <nav className="md:hidden bg-white border-t border-brand-green shadow-lg absolute top-full left-0 w-full z-40 animate-fade-in">
          <ul className="flex flex-col gap-2 py-4 px-6 text-xs font-semibold uppercase tracking-widest text-brand-black">
            <li><Link to="/" className="py-2 px-2 hover:text-brand-green transition-colors" onClick={() => setMobileNavOpen(false)}>Home</Link></li>
            <li><Link to="/services" className="py-2 px-2 hover:text-brand-green transition-colors" onClick={() => setMobileNavOpen(false)}>Services</Link></li>
            <li><Link to="/areas" className="py-2 px-2 hover:text-brand-green transition-colors" onClick={() => setMobileNavOpen(false)}>Areas</Link></li>
            <li><Link to="/reviews" className="py-2 px-2 hover:text-brand-green transition-colors" onClick={() => setMobileNavOpen(false)}>Reviews</Link></li>
            <li><a href="/blog" className="py-2 px-2 hover:text-brand-green transition-colors" onClick={() => setMobileNavOpen(false)}>Blog</a></li>
            <li><Link to="/contact" className="py-2 px-2 hover:text-brand-green transition-colors" onClick={() => setMobileNavOpen(false)}>Contact</Link></li>
            <li><Link to="/instant-quote" className="py-2 px-2 hover:text-brand-green transition-colors" onClick={() => setMobileNavOpen(false)}>Instant Quote</Link></li>
          </ul>
        </nav>
      )}
    </header>
  );
};
