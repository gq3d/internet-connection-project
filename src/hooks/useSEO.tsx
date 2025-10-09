import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogImageAlt?: string;
  canonical?: string;
  structuredData?: object;
  noindex?: boolean;
}

export const useSEO = ({
  title,
  description,
  ogTitle,
  ogDescription,
  ogImage,
  ogImageAlt,
  canonical,
  structuredData,
  noindex = false
}: SEOProps) => {
  useEffect(() => {
    if (title) {
      document.title = title;
    }

    const robotsContent = noindex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1';
    
    const metaTags: { [key: string]: string } = {
      description: description || '',
      robots: robotsContent,
      'og:type': 'website',
      'og:title': ogTitle || title || '',
      'og:description': ogDescription || description || '',
      'og:image': ogImage || '',
      'og:image:alt': ogImageAlt || title || '',
      'og:locale': 'ru_RU',
      'twitter:card': 'summary_large_image',
      'twitter:title': ogTitle || title || '',
      'twitter:description': ogDescription || description || '',
      'twitter:image': ogImage || '',
      'twitter:image:alt': ogImageAlt || title || ''
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

    let link = document.querySelector('link[rel="canonical"]');
    if (canonical && canonical.trim()) {
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', 'canonical');
        document.head.appendChild(link);
      }
      link.setAttribute('href', canonical);
    } else if (link) {
      link.remove();
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
  }, [title, description, ogTitle, ogDescription, ogImage, ogImageAlt, canonical, structuredData, noindex]);
};