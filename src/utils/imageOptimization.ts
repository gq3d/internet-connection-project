export const getOptimizedImageUrl = (url: string, width?: number): string => {
  if (!url || typeof url !== 'string') return url;
  
  if (url.includes('cdn.poehali.dev') || url.includes('cdn.wiline.ru')) {
    const separator = url.includes('?') ? '&' : '?';
    const params = [];
    
    if (width) {
      params.push(`w=${width}`);
    }
    
    params.push('fm=webp');
    params.push('q=85');
    
    return params.length > 0 ? `${url}${separator}${params.join('&')}` : url;
  }
  
  return url;
};

export const preloadImage = (src: string): void => {
  const link = document.createElement('link');
  link.rel = 'preload';
  link.as = 'image';
  link.href = src;
  document.head.appendChild(link);
};

export const preloadCriticalImages = (urls: string[]): void => {
  urls.forEach(url => preloadImage(url));
};
