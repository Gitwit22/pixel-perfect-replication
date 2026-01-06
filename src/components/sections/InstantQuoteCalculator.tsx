

import React, { useState } from "react";

// Types
interface QuoteData {
  treatment: "heat" | "chemical" | "unsure" | null;
  treatmentPrice: number;
  bedrooms: number | null;
  bedroomPrice: number;
  addons: string[];
  addonPrices: number[];
}

interface FormData {
  name: string;
  phone: string;
  email: string;
  zip: string;
  callTime: string;
}

// Pricing constants
const PRICING = {
  heat: 1250,
  chemical: 200,
  bedrooms: {
    1: 200,
    2: 400,
    3: 600,
    4: 800,
  },
  addons: {
    basement: 200,
    rush: 400,
  },
};

export default function InstantQuoteCalculator() {
  const [currentStep, setCurrentStep] = useState(1);
  const [quoteData, setQuoteData] = useState<QuoteData>({
    treatment: null,
    treatmentPrice: 0,
    bedrooms: null,
    bedroomPrice: 0,
    addons: [],
    addonPrices: [],
  });
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    zip: "",
    callTime: "morning",
  });

  const maxSteps = 4;
  const progressPercentage = ((currentStep - 1) / (maxSteps - 1)) * 100;

  // Handlers
  const handleTreatmentSelect = (treatment: "heat" | "chemical" | "unsure") => {
    const price = treatment === "unsure" ? 0 : PRICING[treatment];
    setQuoteData({ ...quoteData, treatment, treatmentPrice: price });
  };

  const handleBedroomSelect = (bedrooms: number) => {
    const price = PRICING.bedrooms[bedrooms as keyof typeof PRICING.bedrooms] || 800;
    setQuoteData({ ...quoteData, bedrooms, bedroomPrice: price });
  };

  const handleAddonToggle = (addon: string, price: number) => {
    const isSelected = quoteData.addons.includes(addon);
    if (isSelected) {
      setQuoteData({
        ...quoteData,
        addons: quoteData.addons.filter((a) => a !== addon),
        addonPrices: quoteData.addonPrices.filter((_, i) => quoteData.addons[i] !== addon),
      });
    } else {
      setQuoteData({
        ...quoteData,
        addons: [...quoteData.addons, addon],
        addonPrices: [...quoteData.addonPrices, price],
      });
    }
  };

  const calculateTotal = () => {
    if (quoteData.treatment === "unsure") {
      const chemicalTotal = PRICING.chemical + quoteData.bedroomPrice + quoteData.addonPrices.reduce((sum, price) => sum + price, 0);
      const heatTotal = PRICING.heat + quoteData.bedroomPrice + quoteData.addonPrices.reduce((sum, price) => sum + price, 0);
      return { min: chemicalTotal, max: heatTotal };
    }
    return {
      total: quoteData.treatmentPrice + quoteData.bedroomPrice + quoteData.addonPrices.reduce((sum, price) => sum + price, 0),
    };
  };

  const nextStep = () => {
    if (currentStep === 1 && !quoteData.treatment) {
      alert("Please select a treatment type");
      return;
    }
    if (currentStep === 2 && !quoteData.bedrooms) {
      alert("Please select number of bedrooms");
      return;
    }
    if (currentStep < maxSteps) {
      setCurrentStep(currentStep + 1);
      window.scrollTo(0, 0);
      if (typeof window !== "undefined" && (window as any).gtag) {
        (window as any).gtag("event", `quote_step_${currentStep}`, {
          treatment: quoteData.treatment,
          bedrooms: quoteData.bedrooms,
        });
      }
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      window.scrollTo(0, 0);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "generate_lead", {
        value: calculateTotal().total || calculateTotal().min,
        currency: "USD",
      });
    }
    console.log("Quote Data:", quoteData);
    console.log("Form Data:", formData);
    alert("Thank you! We'll call you within 1 hour to schedule your free inspection.");
  };

  const renderPriceBreakdown = () => {
    const total = calculateTotal();
    return (
      <div className="space-y-4">
        {quoteData.treatment !== "unsure" && (
          <div className="flex justify-between py-3 border-b border-white/20">
            <span>{quoteData.treatment === "heat" ? "Heat Treatment (Base)" : "Chemical Treatment (Base)"}</span>
            <span>${quoteData.treatmentPrice.toLocaleString()}</span>
          </div>
        )}
        <div className="flex justify-between py-3 border-b border-white/20">
          <span>{quoteData.bedrooms} Bedroom(s)</span>
          <span>${quoteData.bedroomPrice.toLocaleString()}</span>
        </div>
        {quoteData.addons.map((addon, index) => (
          <div key={addon} className="flex justify-between py-3 border-b border-white/20">
            <span>{addon === "basement" ? "Basement/Attic" : "Same-Day Rush Service"}</span>
            <span>${quoteData.addonPrices[index].toLocaleString()}</span>
          </div>
        ))}
        {quoteData.treatment === "unsure" && (
          <>
            <div className="flex justify-between py-3 border-b border-white/20">
              <span>Chemical Treatment Option</span>
              <span>${total.min?.toLocaleString()}</span>
            </div>
            <div className="flex justify-between py-3 border-b border-white/20">
              <span>Heat Treatment Option</span>
              <span>${total.max?.toLocaleString()}</span>
            </div>
          </>
        )}
        <div className="flex justify-between pt-4 mt-4 border-t-2 border-white/30 text-2xl font-black">
          <span>ESTIMATED TOTAL:</span>
          <span>
            {quoteData.treatment === "unsure"
              ? `$${total.min?.toLocaleString()} - $${total.max?.toLocaleString()}`
              : `$${total.total?.toLocaleString()}`}
          </span>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f5f7fa] to-[#c3cfe2]">
      <div className="max-w-xl mx-auto py-10 px-4">
        <h2 className="text-3xl font-bold mb-6 text-center">Instant Quote Calculator</h2>
        <div className="w-full bg-gray-300 rounded-full h-2.5 mb-8">
          <div
            className="bg-blue-600 h-2.5 rounded-full transition-all"
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
        {/* Step 1: Treatment Selection */}
        {currentStep === 1 && (
          <div>
            <h3 className="text-xl font-semibold mb-4">Select Treatment Type</h3>
            <div className="flex flex-col gap-4">
              <button
                className={`py-3 px-6 rounded-lg border ${quoteData.treatment === "heat" ? "bg-blue-600 text-white" : "bg-white"}`}
                onClick={() => handleTreatmentSelect("heat")}
              >
                Heat Treatment (${PRICING.heat})
              </button>
              <button
                className={`py-3 px-6 rounded-lg border ${quoteData.treatment === "chemical" ? "bg-blue-600 text-white" : "bg-white"}`}
                onClick={() => handleTreatmentSelect("chemical")}
              >
                Chemical Treatment (${PRICING.chemical})
              </button>
              <button
                className={`py-3 px-6 rounded-lg border ${quoteData.treatment === "unsure" ? "bg-blue-600 text-white" : "bg-white"}`}
                onClick={() => handleTreatmentSelect("unsure")}
              >
                Not Sure Yet
              </button>
            </div>
          </div>
        )}
        {/* Step 2: Bedroom Selection */}
        {currentStep === 2 && (
          <div>
            <h3 className="text-xl font-semibold mb-4">How many bedrooms?</h3>
            <div className="flex flex-col gap-4">
              {[1, 2, 3, 4].map((num) => (
                <button
                  key={num}
                  className={`py-3 px-6 rounded-lg border ${quoteData.bedrooms === num ? "bg-blue-600 text-white" : "bg-white"}`}
                  onClick={() => handleBedroomSelect(num)}
                >
                  {num} Bedroom{num > 1 ? "s" : ""} (${PRICING.bedrooms[num as keyof typeof PRICING.bedrooms]})
                </button>
              ))}
            </div>
          </div>
        )}
        {/* Step 3: Addons */}
        {currentStep === 3 && (
          <div>
            <h3 className="text-xl font-semibold mb-4">Add Optional Services</h3>
            <div className="flex flex-col gap-4">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={quoteData.addons.includes("basement")}
                  onChange={() => handleAddonToggle("basement", PRICING.addons.basement)}
                  className="mr-2"
                />
                Basement/Attic (${PRICING.addons.basement})
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={quoteData.addons.includes("rush")}
                  onChange={() => handleAddonToggle("rush", PRICING.addons.rush)}
                  className="mr-2"
                />
                Same-Day Rush Service (${PRICING.addons.rush})
              </label>
            </div>
          </div>
        )}
        {/* Step 4: Contact Form & Price Breakdown */}
        {currentStep === 4 && (
          <div>
            <h3 className="text-xl font-semibold mb-4">Your Instant Quote</h3>
            {renderPriceBreakdown()}
            <form className="mt-8 space-y-4" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-2 border rounded"
                required
              />
              <input
                type="tel"
                placeholder="Phone"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-2 border rounded"
                required
              />
              <input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-2 border rounded"
                required
              />
              <input
                type="text"
                placeholder="ZIP Code"
                value={formData.zip}
                onChange={(e) => setFormData({ ...formData, zip: e.target.value })}
                className="w-full px-4 py-2 border rounded"
                required
              />
              <select
                value={formData.callTime}
                onChange={(e) => setFormData({ ...formData, callTime: e.target.value })}
                className="w-full px-4 py-2 border rounded"
              >
                <option value="morning">Morning Call</option>
                <option value="afternoon">Afternoon Call</option>
                <option value="evening">Evening Call</option>
              </select>
              <button
                type="submit"
                className="w-full py-3 bg-blue-600 text-white font-bold rounded-lg mt-4"
              >
                Get My Free Inspection
              </button>
            </form>
          </div>
        )}
        {/* Navigation Buttons */}
        <div className="flex justify-between mt-8">
          <button
            onClick={prevStep}
            disabled={currentStep === 1}
            className={`py-2 px-6 rounded-lg border ${currentStep === 1 ? "bg-gray-300 text-gray-500 cursor-not-allowed" : "bg-white"}`}
          >
            Back
          </button>
          {currentStep < maxSteps && (
            <button
              onClick={nextStep}
              className="py-2 px-6 rounded-lg border bg-blue-600 text-white"
            >
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
}