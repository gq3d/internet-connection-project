
import { lazy, Suspense } from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";

const FAQ = lazy(() => import("./pages/FAQ"));
const Services = lazy(() => import("./pages/Services"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));
const SitemapGenerator = lazy(() => import("./components/SitemapGenerator"));
const CityPage = lazy(() => import("./pages/CityPage"));
const Internet = lazy(() => import("./pages/services/Internet"));
const Satellite = lazy(() => import("./pages/services/Satellite"));
const Wifi = lazy(() => import("./pages/services/Wifi"));
const WifiInstallation = lazy(() => import("./pages/services/WifiInstallation"));
const WifiSignalBoost = lazy(() => import("./pages/services/WifiSignalBoost"));
const WifiRoaming = lazy(() => import("./pages/services/WifiRoaming"));
const WifiDiagnostics = lazy(() => import("./pages/services/WifiDiagnostics"));
const Security = lazy(() => import("./pages/services/Security"));
const Surveillance = lazy(() => import("./pages/services/Surveillance"));
const IpCameras = lazy(() => import("./pages/services/cameras/IpCameras"));
const FourKCameras = lazy(() => import("./pages/services/cameras/FourKCameras"));
const PtzCameras = lazy(() => import("./pages/services/cameras/PtzCameras"));
const ThermalCameras = lazy(() => import("./pages/services/cameras/ThermalCameras"));
const AlarmSecurity = lazy(() => import("./pages/services/AlarmSecurity"));
const AccessControl = lazy(() => import("./pages/services/AccessControl"));
const FireSafety = lazy(() => import("./pages/services/FireSafety"));
const CellularBooster = lazy(() => import("./pages/services/CellularBooster"));
const Equipment = lazy(() => import("./pages/Equipment"));
const Reviews = lazy(() => import("./pages/Reviews"));
const Tariffs = lazy(() => import("./pages/Tariffs"));
const Pricing = lazy(() => import("./pages/Pricing"));
const Coverage = lazy(() => import("./pages/Coverage"));
const Esim = lazy(() => import("./pages/Esim"));
const SignalBoost = lazy(() => import("./pages/SignalBoost"));
const HighSpeed = lazy(() => import("./pages/HighSpeed"));
const StableConnection = lazy(() => import("./pages/StableConnection"));
const SecureConnection = lazy(() => import("./pages/SecureConnection"));
const KidsInternet = lazy(() => import("./pages/KidsInternet"));
const FastSetup = lazy(() => import("./pages/FastSetup"));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000,
      gcTime: 10 * 60 * 1000,
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
});

const LoadingSpinner = () => (
  <div className="min-h-screen flex items-center justify-center bg-background">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
  </div>
);

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/services" element={<Services />} />
              <Route path="/city/:citySlug" element={<CityPage />} />
              <Route path="/services/internet" element={<Internet />} />
              <Route path="/services/satellite" element={<Satellite />} />
              <Route path="/services/wifi" element={<Wifi />} />
              <Route path="/services/wifi-installation" element={<WifiInstallation />} />
              <Route path="/services/wifi-signal-boost" element={<WifiSignalBoost />} />
              <Route path="/services/wifi-roaming" element={<WifiRoaming />} />
              <Route path="/services/wifi-diagnostics" element={<WifiDiagnostics />} />
              <Route path="/services/security" element={<Security />} />
              <Route path="/services/surveillance" element={<Surveillance />} />
              <Route path="/services/cameras/ip-cameras" element={<IpCameras />} />
              <Route path="/services/cameras/4k-cameras" element={<FourKCameras />} />
              <Route path="/services/cameras/ptz-cameras" element={<PtzCameras />} />
              <Route path="/services/cameras/thermal-cameras" element={<ThermalCameras />} />
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
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;