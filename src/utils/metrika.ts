// Yandex Metrika tracking utilities

declare global {
  interface Window {
    ym?: (counterId: number, method: string, ...args: any[]) => void;
  }
}

const METRIKA_ID = 104206748;

export const trackEvent = (eventName: string, params?: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.ym) {
    window.ym(METRIKA_ID, 'reachGoal', eventName, params);
  }
};

export const trackCityVisit = (cityName: string, citySlug: string) => {
  trackEvent('city_page_view', {
    city_name: cityName,
    city_slug: citySlug
  });
};

export const trackPhoneClick = (source: string, cityName?: string) => {
  trackEvent('phone_click', {
    source,
    city_name: cityName
  });
};

export const trackWhatsAppClick = (source: string, cityName?: string) => {
  trackEvent('whatsapp_click', {
    source,
    city_name: cityName
  });
};

export const trackServiceInterest = (serviceName: string, cityName?: string) => {
  trackEvent('service_interest', {
    service_name: serviceName,
    city_name: cityName
  });
};

export const trackCTAClick = (ctaType: string, cityName?: string) => {
  trackEvent('cta_click', {
    cta_type: ctaType,
    city_name: cityName
  });
};
