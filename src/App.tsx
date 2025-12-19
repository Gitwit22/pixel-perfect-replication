import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ServiceAreaBedBugs from "./pages/ServiceAreaBedBugs";
import { serviceAreasVa } from "./data/serviceAreasVa";

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
                    phone="804-489-7465"
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
                    phone="804-489-7465"
                    mapQuery={`${area.cityName}, VA`}
                    slugCity={area.slugCity}
                  />
                }
              />,
            ])}
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
