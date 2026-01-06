import React from "react";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";


const InstantQuote: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-[#f5f7fa] to-[#c3cfe2] min-h-screen">
      <Header />
      <main className="pt-24">
        

        {/* Hero */}
        <section className="text-center py-12 px-4 relative">
          <div className="inline-block px-6 py-2 rounded-full font-bold text-sm uppercase tracking-widest mb-6 bg-gradient-to-r from-brand-gold to-brand-gold-dark text-brand-black shadow animate-pulse">
            ⚡ INSTANT PRICING
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 bg-gradient-to-r from-brand-black to-brand-green bg-clip-text text-transparent">
            Get Your Treatment Estimate
          </h1>
          <p className="text-lg text-brand-gray max-w-xl mx-auto">
            Answer a few quick questions for instant pricing.{" "}
            <span className="font-bold text-brand-green">
              Free inspection included with all treatments.
            </span>
          </p>
        </section>

        {/* Quote Calculator Placeholder */}
        <div className="max-w-3xl mx-auto my-8 p-8 bg-white rounded-2xl shadow-lg border border-brand-green/10">
          <p className="text-brand-gray mb-6">
            The interactive quote calculator will be available soon. For now,
            please call us or use the contact form for a fast, free estimate!
          </p>
          <a
            href="tel:+18044897465"
            className="btn btn-gold btn-large block w-full mb-4 text-center"
          >
            📞 Call 804-489-7465
          </a>
          <a
            href="/contact"
            className="btn btn-green btn-large block w-full text-center"
          >
            Contact Form
          </a>
        </div>

        {/* Trust Section */}
        <section className="py-12 px-4 bg-white">
          <div className="max-w-4xl mx-auto grid gap-8 md:grid-cols-3">
            <div className="text-center p-6 rounded-xl hover:-translate-y-1 transition-transform">
              <div className="text-4xl mb-2">🛡️</div>
              <h3 className="font-bold mb-1">Licensed & Insured</h3>
              <p className="text-brand-gray">
                Fully licensed by Virginia for your protection
              </p>
            </div>
            <div className="text-center p-6 rounded-xl hover:-translate-y-1 transition-transform">
              <div className="text-4xl mb-2">⚡</div>
              <h3 className="font-bold mb-1">Same-Day Available</h3>
              <p className="text-brand-gray">
                Call before noon for same-day inspection
              </p>
            </div>
            <div className="text-center p-6 rounded-xl hover:-translate-y-1 transition-transform">
              <div className="text-4xl mb-2">👁️</div>
              <h3 className="font-bold mb-1">Discreet Service</h3>
              <p className="text-brand-gray">
                Unmarked vehicles, your privacy matters
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default InstantQuote;