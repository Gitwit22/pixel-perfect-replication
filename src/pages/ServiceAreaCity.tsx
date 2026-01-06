// src/pages/ServiceAreaCity.tsx
// Individual city service area page for SEO and local lead generation
// Route: /service-areas/:city

import { useParams, Link, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { serviceAreasVa, ServiceArea } from "@/data/serviceAreasVa";
import { localBusinessSchema } from "@/data/schema";
import { company } from "@/data/content";
import {
  Phone,
  MapPin,
  Shield,
  Clock,
  CheckCircle,
  Bug,
  Flame,
  SprayCan,
  ArrowRight,
  Star,
} from "lucide-react";

// Helper to find city data by slug
const findCityBySlug = (slug: string): ServiceArea | undefined => {
  return serviceAreasVa.find((area) => area.slugCity === slug);
};

// Helper to get city name from slug
const getCityNameBySlug = (slug: string): string => {
  const city = findCityBySlug(slug);
  return city?.cityName || slug;
};

// Services offered (could be moved to content.ts)
const services = [
  {
    icon: Bug,
    name: "Bed Bug Extermination",
    description: "Complete elimination using heat and chemical treatments",
  },
  {
    icon: Bug,
    name: "Roach Control",
    description: "Thorough treatment and prevention for German and American roaches",
  },
  {
    icon: Bug,
    name: "Ant Control",
    description: "Targeted treatment for carpenter ants, fire ants, and more",
  },
  {
    icon: Bug,
    name: "Rodent Prevention",
    description: "Exclusion services and ongoing monitoring",
  },
  {
    icon: Flame,
    name: "Heat Treatment",
    description: "Chemical-free option for sensitive environments",
  },
  {
    icon: SprayCan,
    name: "Preventive Plans",
    description: "Quarterly treatments to keep pests out year-round",
  },
];

const ServiceAreaCity = () => {
  const { city } = useParams<{ city: string }>();

  // Find the city data
  const cityData = city ? findCityBySlug(city) : undefined;

  // If city not found, redirect to main service areas page
  if (!cityData) {
    return <Navigate to="/service-areas" replace />;
  }

  const { cityName, slugCity, nearby } = cityData;

  // Generate schema markup
  const schemaData = localBusinessSchema({ cityName, slugCity });

  // Meta content
  const pageTitle = `Pest Control ${cityName}, VA | Same-Day Service | ${company.name}`;
  const pageDescription = `Professional pest control in ${cityName}, VA. Bed bugs, roaches, ants, rodents—we handle it all. Same-day inspections available. Call ${company.phone} for fast, discreet service.`;

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta
          name="keywords"
          content={`pest control ${cityName}, exterminator ${cityName} VA, bed bug treatment ${cityName}, roach control ${cityName}, ant control ${cityName}`}
        />
        <link
          rel="canonical"
          href={`${company.website}/service-areas/${slugCity}`}
        />

        {/* Open Graph */}
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={`${company.website}/service-areas/${slugCity}`}
        />

        {/* Schema.org JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      </Helmet>

      <Header />

      <main className="bg-slate-50">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}
            />
          </div>

          <div className="relative max-w-6xl mx-auto px-4 py-16 md:py-24">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left: Content */}
              <div>
                <div className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <MapPin className="w-4 h-4" />
                  Serving {cityName}, Virginia
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  Pest Control in{" "}
                  <span className="text-amber-400">{cityName}, VA</span>
                </h1>

                <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                  Professional pest control services for homes and businesses in{" "}
                  {cityName}. Bed bugs, roaches, ants, rodents—we eliminate them
                  all with guaranteed results.
                </p>

                {/* Trust Indicators */}
                <div className="flex flex-wrap gap-4 mb-8">
                  <div className="flex items-center gap-2 text-sm text-slate-300">
                    <Shield className="w-5 h-5 text-green-400" />
                    Licensed & Insured
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-300">
                    <Clock className="w-5 h-5 text-green-400" />
                    Same-Day Service
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-300">
                    <Star className="w-5 h-5 text-amber-400" />
                    5-Star Rated
                  </div>
                </div>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href={company.phoneHref}
                    className="inline-flex items-center justify-center gap-3 bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold px-8 py-4 rounded-lg text-lg transition-all hover:scale-105 shadow-lg shadow-amber-500/25"
                  >
                    <Phone className="w-5 h-5" />
                    {company.phone}
                  </a>
                  <a
                    href={company.quoteUrl}
                    className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-all border border-white/20"
                  >
                    Get Free Quote
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Right: Quick Contact Card */}
              <div className="bg-white text-slate-900 rounded-2xl p-8 shadow-2xl">
                <h2 className="text-2xl font-bold mb-2">
                  Free Inspection in {cityName}
                </h2>
                <p className="text-slate-600 mb-6">
                  Get a same-day inspection and upfront pricing. No obligation.
                </p>

                <form className="space-y-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-slate-700 mb-1"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all"
                      placeholder="John Smith"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-slate-700 mb-1"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all"
                      placeholder="(804) 555-1234"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="pest"
                      className="block text-sm font-medium text-slate-700 mb-1"
                    >
                      What pest issue?
                    </label>
                    <select
                      id="pest"
                      name="pest"
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all bg-white"
                    >
                      <option value="">Select a pest...</option>
                      <option value="bed-bugs">Bed Bugs</option>
                      <option value="roaches">Roaches</option>
                      <option value="ants">Ants</option>
                      <option value="rodents">Mice / Rats</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold py-4 rounded-lg text-lg transition-all hover:shadow-lg"
                  >
                    Request Free Inspection
                  </button>
                </form>

                <p className="text-xs text-slate-500 mt-4 text-center">
                  We'll call you within 2 hours during business hours.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Pest Control Services in {cityName}
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                From emergency bed bug treatments to ongoing prevention plans,
                we protect {cityName} homes and businesses from every type of pest.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-slate-100"
                >
                  <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-amber-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {service.name}
                  </h3>
                  <p className="text-slate-600">{service.description}</p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="text-center mt-12">
              <a
                href={company.phoneHref}
                className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-semibold px-8 py-4 rounded-lg transition-all"
              >
                <Phone className="w-5 h-5" />
                Call for Same-Day Service: {company.phone}
              </a>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                  Why {cityName} Trusts {company.name}
                </h2>

                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-1">
                        Local {cityName} Experts
                      </h3>
                      <p className="text-slate-600">
                        We know {cityName} and the surrounding areas. We're your
                        neighbors, and we're here when you need us—often same-day.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-1">
                        Licensed & Insured
                      </h3>
                      <p className="text-slate-600">
                        Fully licensed by the state of Virginia. Insured for your
                        protection and peace of mind.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-1">
                        Discreet Service
                      </h3>
                      <p className="text-slate-600">
                        Unmarked vehicles and professional technicians. Your
                        privacy matters to us.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-1">
                        Guaranteed Results
                      </h3>
                      <p className="text-slate-600">
                        We stand behind our work. If pests come back, so do we—at
                        no additional charge.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stats / Social Proof */}
              <div className="bg-slate-900 text-white rounded-2xl p-8 md:p-12">
                <div className="grid grid-cols-2 gap-8">
                  <div className="text-center">
                    <div className="text-4xl md:text-5xl font-bold text-amber-400 mb-2">
                      500+
                    </div>
                    <div className="text-slate-300">
                      {cityName} Homes Treated
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl md:text-5xl font-bold text-amber-400 mb-2">
                      4.9
                    </div>
                    <div className="text-slate-300">Google Rating</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl md:text-5xl font-bold text-amber-400 mb-2">
                      Same
                    </div>
                    <div className="text-slate-300">Day Service</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl md:text-5xl font-bold text-amber-400 mb-2">
                      100%
                    </div>
                    <div className="text-slate-300">Satisfaction</div>
                  </div>
                </div>

                <hr className="border-slate-700 my-8" />

                <blockquote className="text-center">
                  <p className="text-lg italic text-slate-300 mb-4">
                    "Fast, professional, and effective. They came out the same day
                    and solved our bed bug problem completely."
                  </p>
                  <cite className="text-amber-400 font-medium not-italic">
                    — Happy Customer, {cityName}
                  </cite>
                </blockquote>
              </div>
            </div>
          </div>
        </section>

        {/* Nearby Service Areas */}
        <section className="py-16 md:py-24 bg-slate-100">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Also Serving Areas Near {cityName}
              </h2>
              <p className="text-lg text-slate-600">
                We provide pest control services throughout the greater{" "}
                {cityName} area and surrounding communities.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              {nearby.map((nearbySlug) => {
                const nearbyCity = findCityBySlug(nearbySlug);
                if (!nearbyCity) return null;

                return (
                  <Link
                    key={nearbySlug}
                    to={`/service-areas/${nearbySlug}`}
                    className="inline-flex items-center gap-2 bg-white hover:bg-amber-50 text-slate-700 hover:text-amber-700 px-6 py-3 rounded-full font-medium transition-all border border-slate-200 hover:border-amber-300"
                  >
                    <MapPin className="w-4 h-4" />
                    {nearbyCity.cityName}, VA
                  </Link>
                );
              })}
            </div>

            {/* Link to all areas */}
            <div className="text-center mt-8">
              <Link
                to="/service-areas"
                className="text-amber-600 hover:text-amber-700 font-medium inline-flex items-center gap-2"
              >
                View All Service Areas
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-amber-500 to-amber-600 text-slate-900">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Get Rid of Pests in {cityName} Today
            </h2>
            <p className="text-xl mb-8 text-slate-800">
              Don't let pests take over your home. Call now for a free inspection
              and same-day service in {cityName}.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={company.phoneHref}
                className="inline-flex items-center justify-center gap-3 bg-slate-900 hover:bg-slate-800 text-white font-bold px-10 py-5 rounded-lg text-xl transition-all hover:scale-105 shadow-lg"
              >
                <Phone className="w-6 h-6" />
                Call {company.phone}
              </a>
              <a
                href={company.quoteUrl}
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-100 text-slate-900 font-bold px-10 py-5 rounded-lg text-xl transition-all border-2 border-slate-900"
              >
                Request Free Quote
              </a>
            </div>

            <p className="mt-6 text-slate-700">
              <Clock className="w-4 h-4 inline mr-2" />
              Available 7 days a week • Same-day service in {cityName}
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default ServiceAreaCity;