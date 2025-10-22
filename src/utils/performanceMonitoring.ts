export const reportWebVitals = (onPerfEntry?: (metric: any) => void) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    }).catch(() => {
      console.warn('Web Vitals library not available');
    });
  }
};

export const measurePerformance = () => {
  if (typeof window !== 'undefined' && 'performance' in window) {
    window.addEventListener('load', () => {
      const perfData = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      
      if (perfData) {
        const metrics = {
          DNS: perfData.domainLookupEnd - perfData.domainLookupStart,
          TCP: perfData.connectEnd - perfData.connectStart,
          TTFB: perfData.responseStart - perfData.requestStart,
          Download: perfData.responseEnd - perfData.responseStart,
          DOMInteractive: perfData.domInteractive,
          DOMComplete: perfData.domComplete,
          LoadComplete: perfData.loadEventEnd - perfData.loadEventStart,
        };

        console.log('Performance Metrics:', metrics);
      }
    });
  }
};

export const prefetchRoute = (route: string) => {
  const link = document.createElement('link');
  link.rel = 'prefetch';
  link.href = route;
  document.head.appendChild(link);
};

export const preconnectToOrigin = (origin: string) => {
  const link = document.createElement('link');
  link.rel = 'preconnect';
  link.href = origin;
  link.crossOrigin = 'anonymous';
  document.head.appendChild(link);
};
