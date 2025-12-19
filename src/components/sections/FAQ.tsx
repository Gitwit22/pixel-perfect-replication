import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faq } from "@/data/content";

export const FAQ = () => {
  return (
    <section className="section-padding bg-card">
      <div className="container-narrow">
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-10 text-center">
          {faq.headline}
        </h2>

        <Accordion type="single" collapsible className="space-y-3">
          {faq.items.map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-muted rounded-lg border border-border px-4"
            >
              <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline py-4">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-4">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
