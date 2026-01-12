// src/pages/Areas.tsx
// Main service areas index page - lists all service areas
// Route: /service-areas

import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { serviceAreasVa } from "@/data/serviceAreasVa";
import { company } from "@/data/content";
import { Phone, MapPin, ArrowRight, Shield, Clock, CheckCircle } from "lucide-react";
import { GoogleAd } from "@/components/GoogleAd";

// Group cities by region for better organization
const regions = [
  {
    name: "Richmond Metro",
    description: "Our home base—fastest response times",
    cities: ["richmond", "henrico", "short-pump", "glen-allen", "highland-springs", "varina", "sandston", "lakeside"],
  },
  {
    name: "Chesterfield & Midlothian",
    description: "Serving all of Chesterfield County",
    cities: ["chesterfield", "midlothian", "north-chesterfield", "chester", "bon-air", "moseley", "brandermill"],
  },
  {
    name: "Hanover & Mechanicsville",
    description: "Northern suburbs coverage",
    cities: ["mechanicsville", "ashland", "hanover", "atlee"],
  },
  {
    name: "Tri-Cities Area",
    description: "Petersburg, Colonial Heights & beyond",
    cities: ["petersburg", "colonial-heights", "hopewell", "prince-george"],
  },
  {
    name: "Western Areas",
    description: "Powhatan, Goochland & rural communities",
    cities: ["powhatan", "goochland", "amelia-court-house", "farmville"],
  },
  {
    name: "Williamsburg & East",
    description: "Historic Triangle region",
    cities: ["new-kent", "williamsburg", "toano"],
  },
  {
    name: "Fredericksburg Area",
    description: "Northern Virginia suburbs",
    cities: ["fredericksburg", "spotsylvania", "stafford", "king-george"],
  },
  {
    name: "Hampton Roads",
    description: "Coastal Virginia's 7 Cities",
    cities: ["newport-news", "hampton", "norfolk", "virginia-beach", "chesapeake", "portsmouth", "suffolk"],
  },
  {
    name: "Charlottesville Area",
    description: "Central Virginia coverage",
    cities: ["charlottesville", "albemarle", "waynesboro", "staunton"],
  },
];

// Helper to get city name from slug
const getCityData = (slug: string) => {
  return serviceAreasVa.find((area) => area.slugCity === slug);
};

const Areas = () => {
  const pageTitle = `Service Areas | Pest Control in Virginia | ${company.name}`;
  const pageDescription = `${company.name} provides professional pest control services throughout Virginia. Find bed bug treatment, roach control, and pest prevention in Richmond, Hampton Roads, Fredericksburg, Charlottesville, and surrounding areas.`;

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta
          name="keywords"
          content="pest control Virginia, exterminator Richmond VA, bed bug treatment Virginia, pest control near me"
        />
        <link rel="canonical" href={`${company.website}/service-areas`} />

        {/* Open Graph */}
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${company.website}/service-areas`} />
      </Helmet>

      <Header />

      <main className="bg-slate-50">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}
            />
          </div>

          <div className="relative max-w-6xl mx-auto px-4 py-16 md:py-24 text-center">
            <div className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <MapPin className="w-4 h-4" />
              {serviceAreasVa.length}+ Communities Served
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Pest Control <span className="text-amber-400">Service Areas</span>
            </h1>

            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
              Professional pest control throughout Virginia. From Richmond to
              Hampton Roads, Fredericksburg to Charlottesville—we've got you
              covered with same-day service and guaranteed results.
            </p>

            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center gap-6 mb-10">
              <div className="flex items-center gap-2 text-slate-300">
                <Shield className="w-5 h-5 text-green-400" />
                Licensed & Insured
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Clock className="w-5 h-5 text-green-400" />
                Same-Day Service
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <CheckCircle className="w-5 h-5 text-green-400" />
                Guaranteed Results
              </div>
            </div>

            {/* CTA */}
            <a
              href={company.phoneHref}
              className="inline-flex items-center gap-3 bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold px-8 py-4 rounded-lg text-lg transition-all hover:scale-105 shadow-lg shadow-amber-500/25"
            >
              <Phone className="w-5 h-5" />
              Call {company.phone}
            </a>
          </div>
        </section>

        {/* Quick Search */}
        <section className="py-8 bg-white border-b border-slate-200" style={{
          backgroundImage: 'url(/rich.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}>
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-white/80 rounded-xl p-4 shadow">
              <p className="text-slate-600">
                <strong className="text-slate-900">Don&apos;t see your area?</strong>{' '}
                Call us—we may still be able to help.
              </p>
              <a
                href={company.phoneHref}
                className="inline-flex items-center gap-2 text-amber-600 hover:text-amber-700 font-semibold"
              >
                <Phone className="w-4 h-4" />
                {company.phone}
              </a>
            </div>
          </div>
        </section>

        {/* Service Areas by Region */}
        <section className="py-16 md:py-24 relative">
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'rgba(15, 23, 42, 0.4)', // Tailwind slate-900 at 40% opacity
            zIndex: 0,
            pointerEvents: 'none',
          }} />
          <div className="max-w-6xl mx-auto px-4 relative z-10">
            <div className="space-y-16">
              {regions.map((region) => (
                <div key={region.name}>
                  {/* Region Header */}
                  <div className="mb-6">
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
                      {region.name}
                    </h2>
                    <p className="text-slate-600">{region.description}</p>
                  </div>

                  {/* Cities Grid */}
                  <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {region.cities.map((slug) => {
                      const cityData = getCityData(slug);
                      if (!cityData) return null;

                      return (
                        <Link
                          key={slug}
                          to={`/service-areas/${slug}`}
                          className="group bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-all border border-slate-100 hover:border-amber-300"
                        >
                          <div className="flex items-start justify-between">
                            <div>
                              <h3 className="font-bold text-slate-900 group-hover:text-amber-600 transition-colors">
                                {cityData.cityName}
                              </h3>
                              <p className="text-sm text-slate-500">Virginia</p>
                            </div>
                            <ArrowRight className="w-5 h-5 text-slate-300 group-hover:text-amber-500 group-hover:translate-x-1 transition-all" />
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AdSense placement before Local Experts section */}
        <div className="my-8">
          <GoogleAd slot="9462128797" />
        </div>

        {/* Why Service Area Matters */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                  Local Experts, Faster Service
                </h2>
                <p className="text-lg text-slate-600 mb-6">
                  We're not a national chain with call centers hundreds of miles
                  away. {company.name} is a local Virginia pest control company,
                  which means:
                </p>

                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                    <span className="text-slate-700">
                      <strong>Same-day service</strong> in most areas when you
                      call before noon
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                    <span className="text-slate-700">
                      <strong>Knowledge of local pests</strong>—we know what bugs
                      thrive in Virginia's climate
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                    <span className="text-slate-700">
                      <strong>Accountable service</strong>—we're part of your
                      community and stake our reputation on every job
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                    <span className="text-slate-700">
                      <strong>No travel fees</strong> for most service areas
                    </span>
                  </li>
                </ul>
              </div>

              {/* Map placeholder / visual */}
              <div className="bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl p-8 md:p-12 text-center">
                <MapPin className="w-16 h-16 text-amber-500 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  Covering Virginia
                </h3>
                <p className="text-slate-600 mb-6">
                  From the Blue Ridge to the Bay, we're ready to help.
                </p>
                <div className="text-4xl font-bold text-amber-500">
                  {serviceAreasVa.length}+
                </div>
                <div className="text-slate-600">Communities Served</div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-amber-500 to-amber-600 text-slate-900">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Get Rid of Pests?
            </h2>
            <p className="text-xl mb-8 text-slate-800">
              No matter where you are in Virginia, we're here to help. Call now
              for a free inspection and same-day service.
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
              Available 7 days a week • Same-day service available
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Areas;