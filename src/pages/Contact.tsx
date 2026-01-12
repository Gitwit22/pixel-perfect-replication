import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { GoogleAd } from "@/components/GoogleAd";
import React, { useState } from "react";

const initialFormData = {
  firstName: "",
  lastName: "",
  phone: "",
  email: "",
  zip: "",
  propertyType: "house",
  timeline: "week",
  rooms: "1",
  callTime: "morning",
  message: "",
  consent: false,
};

const Contact = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Email tracking link (from homepage form)
    if (window.gtag) {
      window.gtag("event", "generate_lead", {
        event_category: "Contact Form",
        event_label: "Contact Page Submission",
      });
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert("Thank you! We'll call you within 1 hour to schedule your free inspection.");
        setFormData(initialFormData);
      } else {
        alert("Something went wrong. Please call us at 804-489-7465");
      }
    } catch (error) {
      alert("Something went wrong. Please call us at 804-489-7465");
    }
    setIsSubmitting(false);
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-[#f5f7fa] to-[#c3cfe2] pt-24 pb-16">
        <section className="py-12 text-center relative overflow-hidden">
          <div className="inline-block px-5 py-2 mb-6 text-xs font-bold tracking-widest uppercase bg-gradient-to-r from-[#2F6B4F] to-[#1E4533] text-white rounded-full shadow-lg">
            📞 GET IN TOUCH
          </div>
          <h1 className="text-5xl md:text-6xl font-black mb-4 bg-gradient-to-r from-[#1A1A1A] to-[#2F6B4F] bg-clip-text text-transparent">
            Contact A2 Pest Pros
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto px-4">
            <strong className="text-[#2F6B4F]">Same-day service available in Richmond Metro.</strong> Call now or request service online—we respond within 1 hour during business hours.
          </p>
        </section>
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-2xl p-8 border-3 border-[#2F6B4F]">
          <h2 className="text-3xl font-black mb-2">Request Free Inspection</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block font-bold mb-1">First Name</label>
                <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required className="form-input w-full border border-black" />
              </div>
              <div>
                <label className="block font-bold mb-1">Last Name</label>
                <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required className="form-input w-full border border-black" />
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
                <label className="block font-bold mb-1">Property Type</label>
                <select name="propertyType" value={formData.propertyType} onChange={handleChange} className="form-select w-full">
                  <option value="house">House</option>
                  <option value="apartment">Apartment</option>
                  <option value="condo">Condo/Townhome</option>
                  <option value="multi">Multi-Family</option>
                  <option value="commercial">Commercial</option>
                </select>
              </div>
              <div>
                <label className="block font-bold mb-1">Timeline</label>
                <select name="timeline" value={formData.timeline} onChange={handleChange} className="form-select w-full border border-black">
                  <option value="today">Today</option>
                  <option value="week">Within the past week</option>
                  <option value="month">Within the past month</option>
                  <option value="longer">More than a month ago</option>
                  <option value="unsure">Not sure / Prevention</option>
                </select>
              </div>
              <div>
                <label className="block font-bold mb-1">Rooms Affected</label>
                <input type="text" name="rooms" value={formData.rooms} onChange={handleChange} className="form-input w-full border border-black" />
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
        </div>
        {/* AdSense placement just below the contact form */}
        <div className="max-w-3xl mx-auto my-8">
          <GoogleAd slot="1345973239" />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Contact;