
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import FAQ from "./pages/FAQ";
import Services from "./pages/Services";
import NotFoundPage from "./pages/NotFoundPage";
import SitemapGenerator from "./components/SitemapGenerator";
import CityPage from "./pages/CityPage";
import Internet from "./pages/services/Internet";
import Satellite from "./pages/services/Satellite";
import Wifi from "./pages/services/Wifi";
import Security from "./pages/services/Security";
import Surveillance from "./pages/services/Surveillance";
import AlarmSecurity from "./pages/services/AlarmSecurity";
import AccessControl from "./pages/services/AccessControl";
import FireSafety from "./pages/services/FireSafety";
import CellularBooster from "./pages/services/CellularBooster";
import Equipment from "./pages/Equipment";
import Reviews from "./pages/Reviews";
import Tariffs from "./pages/Tariffs";
import Pricing from "./pages/Pricing";
import Coverage from "./pages/Coverage";
import Esim from "./pages/Esim";
import SignalBoost from "./pages/SignalBoost";
import HighSpeed from "./pages/HighSpeed";
import StableConnection from "./pages/StableConnection";
import SecureConnection from "./pages/SecureConnection";
import KidsInternet from "./pages/KidsInternet";
import FastSetup from "./pages/FastSetup";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/services" element={<Services />} />
            <Route path="/city/:citySlug" element={<CityPage />} />
            <Route path="/services/internet" element={<Internet />} />
            <Route path="/services/satellite" element={<Satellite />} />
            <Route path="/services/wifi" element={<Wifi />} />
            <Route path="/services/security" element={<Security />} />
            <Route path="/services/surveillance" element={<Surveillance />} />
            <Route path="/services/alarm-security" element={<AlarmSecurity />} />
            <Route path="/services/access-control" element={<AccessControl />} />
            <Route path="/services/fire-safety" element={<FireSafety />} />
            <Route path="/services/cellular-booster" element={<CellularBooster />} />
            <Route path="/equipment" element={<Equipment />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/tariffs" element={<Tariffs />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/coverage" element={<Coverage />} />
            <Route path="/esim" element={<Esim />} />
            <Route path="/signal-boost" element={<SignalBoost />} />
            <Route path="/high-speed" element={<HighSpeed />} />
            <Route path="/stable-connection" element={<StableConnection />} />
            <Route path="/secure-connection" element={<SecureConnection />} />
            <Route path="/kids-internet" element={<KidsInternet />} />
            <Route path="/fast-setup" element={<FastSetup />} />
            <Route path="/sitemap.xml" element={<SitemapGenerator type="sitemap" />} />
            <Route path="/robots.txt" element={<SitemapGenerator type="robots" />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;