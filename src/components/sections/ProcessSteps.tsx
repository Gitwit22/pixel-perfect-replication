import { process } from "@/data/content";

export const ProcessSteps = () => {
  return (
    <section className="section-padding bg-primary text-primary-foreground">
      <div className="container-wide">
        <h2 className="text-2xl sm:text-3xl font-bold mb-3 text-center">
          {process.headline}
        </h2>
        <p className="opacity-90 text-center mb-10">{process.intro}</p>

        <div className="grid md:grid-cols-3 gap-6">
          {process.steps.map((step) => (
            <div
              key={step.number}
              className="relative bg-primary-foreground/10 rounded-xl p-6 text-center"
            >
              {/* Step Number */}
              <div className="w-14 h-14 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                {step.number}
              </div>

              <h3 className="text-lg font-bold mb-3">{step.title}</h3>
              <p className="opacity-90 text-sm mb-4">{step.description}</p>

              {/* Highlight Badge */}
              <div className="inline-block bg-primary-foreground/20 px-3 py-1.5 rounded-full">
                <span className="text-xs font-medium">{step.highlight}</span>
              </div>

              {/* Connector Arrow (hidden on last item and mobile) */}
              {step.number < 3 && (
                <div className="hidden md:block absolute top-1/3 -right-3 w-6 h-6">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="w-6 h-6 text-primary-foreground/50"
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
