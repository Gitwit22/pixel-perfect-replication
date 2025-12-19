import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faq } from "@/data/content";

export const FAQ = () => {
  return (
    <section className="section-padding bg-neu-bg">
      <div className="container-narrow">
        <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-10 text-center">
          {faq.headline}
        </h2>

        <Accordion type="single" collapsible className="space-y-4">
          {faq.items.map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-neu-surface rounded-neu-md border border-neu-inset px-6 shadow-neu-raised-lg ring-1 ring-white/60 ring-inset"
            >
              <AccordionTrigger className="text-left font-semibold text-text-primary hover:no-underline py-4">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-text-muted pb-4">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
