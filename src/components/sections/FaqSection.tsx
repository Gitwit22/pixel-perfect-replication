import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faq } from "@/data/content";

export const FaqSection = () => (
  <section className="section-padding bg-brand-gray-light">
    <div className="container-narrow">
      <h2 className="text-2xl sm:text-3xl font-bold text-brand-black mb-10 text-center">
        {faq.headline}
      </h2>
      <Accordion type="single" collapsible className="space-y-4">
        {faq.items.map((item, index) => (
          <AccordionItem
            key={index}
            value={`item-${index}`}
            className="bg-white rounded-neu-md border border-brand-green/25 px-6 shadow-neu-raised-lg"
          >
            <AccordionTrigger className="text-left font-semibold text-brand-black hover:no-underline py-4">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="text-[#4B5563] pb-4">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);