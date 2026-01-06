import { process } from "@/data/content";

export const ProcessSteps = () => {
  return (
    <section className="section-padding bg-brand-gray-light">
      <div className="container-wide">
        <h2 className="text-2xl sm:text-3xl font-bold text-brand-black mb-3 text-center">
          {process.headline}
        </h2>
        <p className="text-[#6F6F6F] text-center mb-10 max-w-2xl mx-auto">{process.intro}</p>

        <div className="grid md:grid-cols-3 gap-8">
          {process.steps.map((step) => (
            <div
              key={step.number}
              className="relative bg-white rounded-neu-lg p-8 text-center shadow-neu-raised-lg border-2 border-brand-green/30 transition-all hover:shadow-neu-raised-lg hover:border-brand-gold/60"
            >
              {/* Step Number */}
              <div className="w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-5 shadow-neu-raised-sm border-4 border-brand-gold bg-brand-green text-white">
                {step.number}
              </div>

              <h3 className="text-lg font-bold text-brand-black mb-3">{step.title}</h3>
              <p className="text-sm mb-5 text-[#4B5563]">{step.description}</p>

              {/* Highlight Badge */}
              <div className="inline-block px-4 py-2 rounded-full bg-brand-gray-light border border-brand-green/40 shadow-neu-raised-sm">
                <span className="text-xs font-semibold text-brand-green">{step.highlight}</span>
              </div>

              {/* Connector Arrow (hidden on last item and mobile) */}
              {step.number < 3 && (
                <div className="hidden md:block absolute top-1/3 -right-3 w-6 h-6">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="w-6 h-6 text-brand-green/40"
                  >
                    <path
                      d="M9 5l7 7-7 7"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
