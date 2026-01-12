import { useState } from "react";
import { Phone, CheckCircle, Clock } from "lucide-react";
import { company, finalCTA, form } from "@/data/content";

export const FinalCTA = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    description: "",
  });

  const track = (eventName: string, label: string) => {
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      window.gtag("event", eventName, {
        event_category: "lead",
        event_label: label,
      });
    }
  };

  const handlePhoneClick = async () => {
    if (window.gtag) {
      window.gtag("event", "phone_click", {
        event_category: "lead",
        event_label: "final_cta_phone",
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          source: "a2pestpros",
          page: typeof window !== "undefined" ? window.location.href : "",
        }),
      });

      const data = await res.json().catch(() => null);

      if (!res.ok || !data?.ok) {
        const msg =
          data?.error ||
          `Lead submit failed (${res.status})`;
        throw new Error(msg);
      }

      track("form_submit", "final_cta_form");
      setIsSubmitted(true);
    } catch (err: any) {
      console.error("Lead submit error:", err);
      setSubmitError(
        "Submission failed. Please call the number above and we’ll take care of you right away."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section
      id="inspection-form"
      className="section-padding bg-brand-black text-white"
    >
      <div className="container-narrow flex flex-col items-center">
        <div className="neu-card w-full max-w-3xl mx-auto mb-10 p-8 flex flex-col items-center bg-brand-black text-white border border-brand-gold/40 rounded-neu-lg shadow-neu-raised-lg">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 text-white">
            {finalCTA.headline}
          </h2>
          <p className="mb-6 max-w-xl mx-auto text-white/80">
            {finalCTA.subheadline}
          </p>
          {/* Phone Display */}
          <a
href={company.phoneHref}
            onClick={handlePhoneClick}
            className="inline-flex items-center gap-3 text-4xl font-bold mb-2 text-brand-gold hover:text-white transition-colors"
            style={{ textShadow: "0 3px 12px #000000AA" }}
          >
            <Phone className="h-8 w-8 animate-pulse text-brand-gold" />
            <span>{company.phone}</span>
          </a>
          <p className="text-base flex items-center justify-center gap-2 text-white/80 mb-6">
            <Clock className="h-4 w-4 text-white/80" />
            {finalCTA.availability}
          </p>
          {/* Form */}
          <div className="neu-card w-full max-w-2xl mx-auto p-10 sm:p-12 flex flex-col items-center justify-center bg-[#111827] text-white rounded-neu-lg border border-brand-gold/30 shadow-neu-raised-lg">
            {isSubmitted ? (
              <div className="text-center py-6">
                <CheckCircle className="h-16 w-16 text-white mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2 text-white">
                  {form.confirmation.headline}
                </h3>
                <p className="text-white/80 mb-4">
                  {form.confirmation.message}
                </p>
                <p className="text-sm text-white/80 mb-2">
                  {form.confirmation.urgentNote}
                </p>
                <a
href={company.phoneHref}
                  onClick={handlePhoneClick}
                  className="inline-flex items-center gap-2 text-white font-bold text-lg"
                >
                  <Phone className="h-5 w-5 text-white" />
                  {company.phone}
                </a>
                <p className="text-sm text-white/80 mt-4">
                  {form.confirmation.closing}
                </p>
              </div>
            ) : (
              <>
                <h3 className="text-xl font-bold text-center mb-6 text-white">
                  {form.headline}
                </h3>
                <form onSubmit={handleSubmit} className="space-y-6 w-full flex flex-col items-center justify-center">
                  <div className="w-full max-w-md mx-auto">
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium mb-1.5 text-white"
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
                      className="neu-input w-full bg-white text-[#111827] placeholder:text-[#6F6F6F]"
                    />
                  </div>
                  <div className="w-full max-w-md mx-auto">
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium mb-1.5 text-white"
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
                      className="neu-input w-full bg-white text-[#111827] placeholder:text-[#6F6F6F]"
                    />
                  </div>
                  <div className="w-full max-w-md mx-auto">
                    <label
                      htmlFor="address"
                      className="block text-sm font-medium mb-1.5 text-white"
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
                      className="neu-input w-full bg-white text-[#111827] placeholder:text-[#6F6F6F]"
                    />
                  </div>
                  <div className="w-full max-w-md mx-auto">
                    <label
                      htmlFor="description"
                      className="block text-sm font-medium mb-1.5 text-white"
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
                      className="neu-input resize-none w-full bg-white text-[#111827] placeholder:text-[#6F6F6F]"
                    />
                  </div>
                  {submitError ? (
                    <p className="text-sm font-medium text-[#D94F4F]">
                      {submitError}
                    </p>
                  ) : null}
                  <div className="w-full max-w-md mx-auto flex flex-col gap-3">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full font-bold py-4 rounded-full bg-brand-gold text-brand-black shadow-neu-raised-lg disabled:opacity-60 disabled:cursor-not-allowed hover:bg-brand-gold-dark transition-colors"
                      style={{ boxShadow: "0 4px 16px #F4C43077" }}
                    >
                      {isSubmitting ? "Submitting..." : form.submitButton}
                    </button>
                    <a
                      href={company.phoneHref}
                      onClick={handlePhoneClick}
                      className="w-full inline-flex items-center justify-center gap-2 rounded-full border border-white/70 text-white py-3 text-sm font-semibold hover:bg-white/10 transition-colors"
                    >
                      <Phone className="h-4 w-4" />
                      Prefer to talk now? Call us.
                    </a>
                  </div>
                  <p className="text-xs text-white text-center">
                    {form.disclaimer}
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
