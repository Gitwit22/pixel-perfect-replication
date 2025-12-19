import { Lightbulb } from "lucide-react";
import { whatToDo } from "@/data/content";

export const WhatToDoSection = () => {
  return (
    <section className="section-padding bg-section-alt">
      <div className="container-narrow">
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3 text-center">
          {whatToDo.headline}
        </h2>
        <p className="text-muted-foreground text-center mb-8">{whatToDo.intro}</p>

        <div className="space-y-4 mb-8">
          {whatToDo.steps.map((step, index) => (
            <div
              key={index}
              className="flex gap-4 bg-card p-5 rounded-lg shadow-sm"
            >
              <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
                {index + 1}
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Pro Tip */}
        <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
          <div className="flex items-start gap-3">
            <Lightbulb className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-primary">Pro Tip:</span>
              <p className="text-foreground mt-1">{whatToDo.proTip}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
