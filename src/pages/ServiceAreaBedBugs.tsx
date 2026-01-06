import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { serviceAreasVa } from "../data/serviceAreasVa";
import { TreatmentOptions } from "@/components/sections/TreatmentOptions";
import { ProcessSteps } from "@/components/sections/ProcessSteps";

interface ServiceAreaBedBugsProps {
  city: string;
  serviceType: "treatment" | "inspection";
  countyLine: string;
  phone: string;
  mapQuery: string;
  slugCity: string;
}

const services = [
  "Inspection",
  "Heat Treatment",
  "Chemical Treatment",
  "Follow-up",
  "Prep Guidance",
];

const faqs = (city: string) => [
  {
    q: `How soon can you provide bed bug service in ${city}?`,
    a: `We offer same-day bed bug inspections and treatments in ${city}, VA and the surrounding Henrico County area. Call us for immediate availability!`,
  },
  {
    q: `What bed bug treatment options are available in ${city}?`,
    a: `In ${city}, VA, we provide heat treatment, chemical treatment, and follow-up services to ensure complete bed bug elimination.`,
  },
  {
    q: `Do you serve areas near ${city}, VA?`,
    a: `Yes! We serve ${city}, Henrico County, and all nearby communities. Contact us to confirm service in your area.`,
  },
];


const ServiceAreaBedBugs: React.FC<ServiceAreaBedBugsProps> = ({
  city,
  serviceType,
  countyLine,
  phone,
  mapQuery,
  slugCity,
}) => {
  const location = useLocation();
  let resolvedCity = city;
  let resolvedSlug = slugCity;
  // If city is missing, extract slug from URL and look up city name
  if (!resolvedCity) {
    // Debug: print the current pathname
    // eslint-disable-next-line no-console
    console.log('Current pathname:', location.pathname);
    // Try to extract slug from /bed-bug-treatment-:slug-va
    let match = location.pathname.match(/bed-bug-treatment-([a-z0-9-]+)-va\/?/i);
    if (match && match[1]) {
      resolvedSlug = match[1];
    } else {
      // Try to extract slug from /service-areas/:slug
      match = location.pathname.match(/service-areas\/?([a-z0-9-]+)/i);
      if (match && match[1]) {
        resolvedSlug = match[1];
      }
    }
    // Debug: print the extracted slug
    // eslint-disable-next-line no-console
    console.log('Extracted slug:', resolvedSlug);
    // Debug: print all available slugCity values
    // eslint-disable-next-line no-console
    console.log('Available slugCity values:', serviceAreasVa.map(a => a.slugCity));
    const area = serviceAreasVa.find((a) => a.slugCity === resolvedSlug);
    resolvedCity = area?.cityName || '';
    // Debug: print the resolved city
    // eslint-disable-next-line no-console
    console.log('Resolved city:', resolvedCity);
  }
  const title =
    resolvedCity
      ? serviceType === "treatment"
        ? `Bed Bug Treatment in ${resolvedCity}, VA`
        : `Bed Bug Inspection in ${resolvedCity}, VA`
      : 'Service Area Not Found';
  const metaDescription =
    resolvedCity
      ? serviceType === "treatment"
        ? `Professional bed bug treatment in ${resolvedCity}, VA. Same-day inspections, heat & chemical options. Serving Henrico County & surrounding areas. Call ${phone}.`
        : `Expert bed bug inspection in ${resolvedCity}, VA. Fast, local service in Henrico County & nearby. Call ${phone} for a same-day inspection.`
      : 'Sorry, we could not find this service area.';

  // Find nearby cities for internal links
  const area = serviceAreasVa.find((a) => a.slugCity === resolvedSlug);
  const nearbyLinks = area?.nearby.slice(0, 5).map((nearSlug) => {
    const nearArea = serviceAreasVa.find((a) => a.slugCity === nearSlug);
    if (!nearArea) return null;
    return (
      <li key={nearSlug}>
        <a
          href={`/bed-bug-treatment-${nearSlug}-va`}
          className="text-blue-600 underline"
        >
          Bed Bug Treatment in {nearArea.cityName}
        </a>
      </li>
    );
  });

  return (
    <div className="section-padding bg-[#ECECEC] min-h-screen">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={metaDescription} />
      </Helmet>
      <div className="container-narrow flex flex-col items-center">
        {/* Accent badges */}
        <span className="mb-2 px-4 py-1 rounded-neu-md bg-[#E3E3E3] text-[#2F6B4F] text-sm font-semibold shadow-neu-raised-sm">
          Licensed & Insured in Virginia
        </span>
        <span className="mb-4 px-4 py-1 rounded-neu-md bg-[#2F6B4F] text-white text-sm font-semibold shadow-neu-raised-sm">
          Residential & Commercial
        </span>
        {/* Card container */}
        <div className="bg-[#F2F2F2] rounded-neu-lg shadow-neu-raised p-8 w-full max-w-3xl flex flex-col items-center mb-8">
          <img src="/aa-pest-logo-bedbug.svg" alt="Bed Bug Logo" className="w-20 h-20 mb-4 drop-shadow-lg" />
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2 leading-tight text-[#2B2B2B] text-center">
            {title}
          </h1>
          <div className="text-lg font-semibold mb-4 text-[#2F6B4F] text-center">
            {countyLine}
          </div>
          <a
            href={`tel:${phone}`}
            className="inline-flex items-center gap-3 text-2xl font-bold mb-4 text-[#2F6B4F] hover:opacity-90 transition-opacity neu-btn neu-btn--phone"
            style={{ textShadow: '0 2px 8px #E3E3E3' }}
          >
            {phone}
          </a>
          <p className="text-base text-[#6F6F6F] mb-6 text-center">
            {resolvedCity
              ? `${resolvedCity} bed bug ${serviceType} services for ${countyLine}. Fast, local, and effective.`
              : 'Sorry, we could not find this service area.'}
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 w-full max-w-xl mx-auto">
            {services.map((s) => (
              <li key={s} className="neu-card-sm px-4 py-3 text-[#2B2B2B] text-sm font-medium bg-[#E3E3E3] rounded-neu-md shadow-neu-raised-sm">{s}</li>
            ))}
          </ul>
          {/* FAQ Section */}
          <section className="w-full max-w-xl mx-auto mb-6">
            <h2 className="text-xl font-bold mb-4 text-[#2B2B2B]">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs(resolvedCity).map((faq, i) => (
                <div key={i} className="bg-[#F2F2F2] rounded-neu-md shadow-neu-raised-sm p-4">
                  <strong className="text-[#2F6B4F]">{faq.q}</strong>
                  <div className="text-[#2B2B2B]">{faq.a}</div>
                </div>
              ))}
            </div>
          </section>
          {/* Google Map */}
          <div className="mb-6 w-full">
            <iframe
              title={`Google Map of ${resolvedCity}, VA`}
              src={`https://www.google.com/maps?q=${encodeURIComponent(mapQuery)}&output=embed`}
              width="100%"
              height="300"
              style={{ border: 0, borderRadius: '16px', boxShadow: '0 4px 16px #2F6B4F22' }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
          {/* CTA Section */}
          <section className="mb-6 w-full bg-[#2F6B4F] text-white p-6 rounded-neu-lg shadow-neu-raised-lg flex flex-col items-center">
            <h2 className="text-xl font-bold mb-2">Same-day inspections available</h2>
            <a
              href={`tel:${phone}`}
              className="inline-block bg-white text-[#2F6B4F] font-bold px-6 py-3 rounded-neu-md shadow-neu-raised-lg mr-2 mb-2"
              style={{ boxShadow: '0 4px 16px #2F6B4F22' }}
            >
              Call Now
            </a>
            <a href="#lead-form" className="inline-block bg-[#4A5D6B] text-white font-bold px-6 py-3 rounded-neu-md shadow-neu-raised-lg">
              Request Inspection
            </a>
          </section>
          <div className="mb-4 w-full">
            <a href="/bed-bug-treatment-richmond-va" className="text-[#4A5D6B] underline font-semibold">
              &larr; Back to main bed bug page
            </a>
          </div>
          <div className="w-full">
            <h3 className="font-semibold mb-2 text-[#2B2B2B]">Nearby Service Areas</h3>
            <ul className="flex flex-wrap gap-2">
              {nearbyLinks}
            </ul>
          </div>
        </div>
        <TreatmentOptions />
        <ProcessSteps />
        {/* Inspection Form Section */}
        <section id="lead-form" className="w-full max-w-2xl mx-auto mt-12 mb-8 bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-4 text-[#2F6B4F]">Request a Free Bed Bug Inspection</h2>
          <InspectionForm city={resolvedCity} />
        </section>
      </div>
    </div>
  );
};

const InspectionForm = ({ city }: { city: string }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    zip: "",
    callTime: "morning",
    message: "",
    consent: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    let checked = false;
    if (type === "checkbox") {
      checked = (e.target as HTMLInputElement).checked;
    }
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Google Analytics event
    if (window.gtag) {
      window.gtag("event", "generate_lead", {
        event_category: "Inspection Form",
        event_label: `Service Area: ${city}`,
      });
    }
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, city }),
      });
      if (response.ok) {
        alert("Thank you! We'll call you within 1 hour to schedule your free inspection.");
        setFormData({
          name: "",
          phone: "",
          email: "",
          zip: "",
          callTime: "morning",
          message: "",
          consent: false,
        });
      } else {
        alert("Something went wrong. Please call us at 804-489-7465");
      }
    } catch (error) {
      alert("Something went wrong. Please call us at 804-489-7465");
    }
    setIsSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block font-bold mb-1">Name</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required className="form-input w-full border border-black" />
        </div>
        <div>
          <label className="block font-bold mb-1">Phone</label>
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required className="form-input w-full border border-black" />
        </div>
        <div>
          <label className="block font-bold mb-1">Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} className="form-input w-full border border-black" />
        </div>
        <div>
          <label className="block font-bold mb-1">ZIP Code</label>
          <input type="text" name="zip" value={formData.zip} onChange={handleChange} required className="form-input w-full border border-black" />
        </div>
        <div>
          <label className="block font-bold mb-1">Best Time to Call</label>
          <select name="callTime" value={formData.callTime} onChange={handleChange} className="form-select w-full border border-black">
            <option value="morning">Morning (8am-12pm)</option>
            <option value="afternoon">Afternoon (12pm-5pm)</option>
            <option value="evening">Evening (5pm-8pm)</option>
            <option value="anytime">Anytime</option>
          </select>
        </div>
      </div>
      <div>
        <label className="block font-bold mb-1">Additional Details</label>
        <textarea name="message" value={formData.message} onChange={handleChange} rows={3} className="form-input w-full border border-black" />
      </div>
      <div className="flex items-center gap-2">
        <input type="checkbox" name="consent" checked={formData.consent} onChange={handleChange} required />
        <label htmlFor="consent" className="text-sm">I consent to being contacted by A2 Pest Pros.</label>
      </div>
      <button type="submit" className="btn w-full bg-brand-green text-white font-bold py-3 rounded-lg shadow-md border-2 border-brand-green hover:bg-green-700 transition-all" style={{boxShadow: '0 4px 12px rgba(47,107,79,0.15)'}} disabled={isSubmitting}>
        {isSubmitting ? "Submitting..." : "Request Free Inspection"}
      </button>
    </form>
  );
};

export default ServiceAreaBedBugs;
