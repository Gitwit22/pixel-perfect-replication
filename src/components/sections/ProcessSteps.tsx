import { process } from "@/data/content";

export const ProcessSteps = () => {
  return (
    <section className="section-padding bg-neu-bg">
      <div className="container-wide">
        <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-3 text-center">
          {process.headline}
        </h2>
        <p className="text-text-muted text-center mb-10">{process.intro}</p>

        <div className="grid md:grid-cols-3 gap-8">
          {process.steps.map((step) => (
            <div
              key={step.number}
              className="relative bg-neu-surface rounded-neu-lg p-8 text-center shadow-neu-raised-lg border border-neu-inset ring-1 ring-white/60 ring-inset transition-all hover:shadow-neu-raised-lg hover:ring-2 hover:ring-white/80"
            >
              {/* Step Number */}
              <div className="w-16 h-16 bg-neu-secondary text-neu-secondary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-5 shadow-neu-inset">
                {step.number}
              </div>

              <h3 className="text-lg font-bold text-text-primary mb-3">{step.title}</h3>
              <p className="text-text-muted text-sm mb-5">{step.description}</p>

              {/* Highlight Badge */}
              <div className="inline-block bg-neu-inset px-4 py-2 rounded-full shadow-neu-inset">
                <span className="text-xs font-medium text-neu-accent">{step.highlight}</span>
              </div>

              {/* Connector Arrow (hidden on last item and mobile) */}
              {step.number < 3 && (
                <div className="hidden md:block absolute top-1/3 -right-3 w-6 h-6">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="w-6 h-6 text-neu-secondary/40"
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
