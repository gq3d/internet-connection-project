
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import SitemapGenerator from "./components/SitemapGenerator";
import CityPage from "./pages/CityPage";
import Internet from "./pages/services/Internet";
import Satellite from "./pages/services/Satellite";
import Wifi from "./pages/services/Wifi";
import Security from "./pages/services/Security";
import Surveillance from "./pages/services/Surveillance";
import CellularBooster from "./pages/services/CellularBooster";
import Equipment from "./pages/Equipment";
import Reviews from "./pages/Reviews";

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
            <Route path="/city/:citySlug" element={<CityPage />} />
            <Route path="/services/internet" element={<Internet />} />
            <Route path="/services/satellite" element={<Satellite />} />
            <Route path="/services/wifi" element={<Wifi />} />
            <Route path="/services/security" element={<Security />} />
            <Route path="/services/surveillance" element={<Surveillance />} />
            <Route path="/services/cellular-booster" element={<CellularBooster />} />
            <Route path="/equipment" element={<Equipment />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/sitemap.xml" element={<SitemapGenerator type="sitemap" />} />
            <Route path="/robots.txt" element={<SitemapGenerator type="robots" />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;