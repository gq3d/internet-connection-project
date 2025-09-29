import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  canonical?: string;
  structuredData?: object;
}

export const useSEO = ({
  title,
  description,
  keywords,
  ogTitle,
  ogDescription,
  ogImage,
  canonical,
  structuredData
}: SEOProps) => {
  useEffect(() => {
    if (title) {
      document.title = title;
    }

    const metaTags: { [key: string]: string } = {
      description: description || '',
      keywords: keywords || '',
      'og:title': ogTitle || title || '',
      'og:description': ogDescription || description || '',
      'og:image': ogImage || '',
      'twitter:title': ogTitle || title || '',
      'twitter:description': ogDescription || description || '',
      'twitter:image': ogImage || ''
    };

    Object.entries(metaTags).forEach(([name, content]) => {
      if (!content) return;

      const isOg = name.startsWith('og:');
      const isTwitter = name.startsWith('twitter:');
      const attr = isOg || isTwitter ? 'property' : 'name';
      
      let meta = document.querySelector(`meta[${attr}="${name}"]`);
      
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attr, name);
        document.head.appendChild(meta);
      }
      
      meta.setAttribute('content', content);
    });

    if (canonical) {
      let link = document.querySelector('link[rel="canonical"]');
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', 'canonical');
        document.head.appendChild(link);
      }
      link.setAttribute('href', canonical);
    }

    if (structuredData) {
      const scriptId = 'structured-data';
      let script = document.getElementById(scriptId);
      
      if (!script) {
        script = document.createElement('script');
        script.id = scriptId;
        script.type = 'application/ld+json';
        document.head.appendChild(script);
      }
      
      script.textContent = JSON.stringify(structuredData);
    }
  }, [title, description, keywords, ogTitle, ogDescription, ogImage, canonical, structuredData]);
};