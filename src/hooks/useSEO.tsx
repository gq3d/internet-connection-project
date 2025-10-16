import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
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
  keywords,
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
      robots: robotsContent
    };

    if (description) metaTags.description = description;
    if (keywords) metaTags.keywords = keywords;
    if (ogTitle || title) {
      metaTags['og:type'] = 'website';
      metaTags['og:title'] = ogTitle || title || '';
      metaTags['og:locale'] = 'ru_RU';
    }
    if (ogDescription || description) metaTags['og:description'] = ogDescription || description || '';
    if (ogImage) {
      metaTags['og:image'] = ogImage;
      metaTags['og:image:alt'] = ogImageAlt || title || '';
    }
    if (ogTitle || title || ogImage) {
      metaTags['twitter:card'] = 'summary_large_image';
      if (ogTitle || title) metaTags['twitter:title'] = ogTitle || title || '';
      if (ogDescription || description) metaTags['twitter:description'] = ogDescription || description || '';
      if (ogImage) {
        metaTags['twitter:image'] = ogImage;
        metaTags['twitter:image:alt'] = ogImageAlt || title || '';
      }
    }

    Object.entries(metaTags).forEach(([name, content]) => {
      if (!content || content.trim() === '') return;

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
  }, [title, description, keywords, ogTitle, ogDescription, ogImage, ogImageAlt, canonical, structuredData, noindex]);
};