import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ServiceAreaBedBugs from "./pages/ServiceAreaBedBugs";
import BlogIndex from "./pages/BlogIndex";
import BlogPost from "./pages/BlogPost";
import Services from "./pages/Services";
import Areas from "./pages/Areas";
import Reviews from "./pages/Reviews";
import Contact from "./pages/Contact";
import InstantQuote from "./pages/InstantQuote";
import { serviceAreasVa } from "./data/serviceAreasVa";
import { company } from "@/data/content";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/services" element={<Services />} />
            <Route path="/areas" element={<Areas />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/instant-quote" element={<InstantQuote />} />
            <Route path="/blog" element={<BlogIndex />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            {/* Service Area Bed Bug Routes */}
            {serviceAreasVa.map((area) => [
              <Route
                key={`treatment-${area.slugCity}`}
                path={`/bed-bug-treatment-${area.slugCity}-va`}
                element={
                  <ServiceAreaBedBugs
                    city={area.cityName}
                    serviceType="treatment"
                    countyLine="Henrico County & surrounding areas"
                    phone={company.phone}
                    mapQuery={`${area.cityName}, VA`}
                    slugCity={area.slugCity}
                  />
                }
              />,
              <Route
                key={`inspection-${area.slugCity}`}
                path={`/bed-bug-inspection-${area.slugCity}-va`}
                element={
                  <ServiceAreaBedBugs
                    city={area.cityName}
                    serviceType="inspection"
                    countyLine="Henrico County & surrounding areas"
                    phone={company.phone}
                    mapQuery={`${area.cityName}, VA`}
                    slugCity={area.slugCity}
                  />
                }
              />,
            ])}
            <Route path="/service-areas" element={<Areas />} />
            <Route
              path="/service-areas/:slug"
              element={
                <ServiceAreaBedBugs
                  city=""
                  serviceType="treatment"
                  countyLine=""
                  phone={company.phone}
                  mapQuery=""
                  slugCity=""
                />
              }
            />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
