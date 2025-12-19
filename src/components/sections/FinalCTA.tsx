import { useState } from "react";
import { Phone, CheckCircle, Clock } from "lucide-react";
import { company, finalCTA, form } from "@/data/content";

export const FinalCTA = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    description: "",
  });

  const handlePhoneClick = () => {
    console.log("phone_click");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("form_submission", formData);
    setIsSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="inspection-form" className="section-padding bg-primary text-primary-foreground">
      <div className="container-narrow">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3">
            {finalCTA.headline}
          </h2>
          <p className="opacity-90 mb-6 max-w-xl mx-auto">
            {finalCTA.subheadline}
          </p>

          {/* Phone Display */}
          <a
            href={`tel:${company.phoneTel}`}
            onClick={handlePhoneClick}
            className="inline-flex items-center gap-3 text-3xl sm:text-4xl font-bold mb-2 hover:opacity-90 transition-opacity"
          >
            <Phone className="h-8 w-8 animate-pulse" />
            {company.phone}
          </a>
          <p className="text-sm opacity-80 flex items-center justify-center gap-2">
            <Clock className="h-4 w-4" />
            {finalCTA.availability}
          </p>
        </div>

        {/* Form */}
        <div className="bg-card text-card-foreground rounded-xl p-6 sm:p-8 shadow-lg max-w-lg mx-auto">
          {isSubmitted ? (
            <div className="text-center py-6">
              <CheckCircle className="h-16 w-16 text-secondary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">{form.confirmation.headline}</h3>
              <p className="text-muted-foreground mb-4">{form.confirmation.message}</p>
              <p className="text-sm text-muted-foreground mb-2">
                {form.confirmation.urgentNote}
              </p>
              <a
                href={`tel:${company.phoneTel}`}
                onClick={handlePhoneClick}
                className="inline-flex items-center gap-2 text-primary font-bold text-lg"
              >
                <Phone className="h-5 w-5" />
                {company.phone}
              </a>
              <p className="text-sm text-muted-foreground mt-4">
                {form.confirmation.closing}
              </p>
            </div>
          ) : (
            <>
              <h3 className="text-xl font-bold text-center mb-6">
                {form.headline}
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-1.5"
                  >
                    {form.fields.name.label} *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium mb-1.5"
                  >
                    {form.fields.phone.label} *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label
                    htmlFor="address"
                    className="block text-sm font-medium mb-1.5"
                  >
                    {form.fields.address.label} *
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    required
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label
                    htmlFor="description"
                    className="block text-sm font-medium mb-1.5"
                  >
                    {form.fields.description.label}
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    rows={3}
                    value={formData.description}
                    onChange={handleChange}
                    placeholder={form.fields.description.placeholder}
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-secondary text-secondary-foreground font-bold py-4 rounded-lg shadow-cta transition-all hover:opacity-90 active:scale-[0.98]"
                >
                  {form.submitButton}
                </button>

                <p className="text-xs text-muted-foreground text-center">
                  {form.disclaimer}
                </p>
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  );
};
