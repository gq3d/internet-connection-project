import { useEffect } from 'react';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbSchemaProps {
  items: BreadcrumbItem[];
}

export default function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
  useEffect(() => {
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Главная',
          item: 'https://wiline.ru/'
        },
        ...items.map((item, index) => ({
          '@type': 'ListItem',
          position: index + 2,
          name: item.label,
          ...(item.href && item.href !== '/' && {
            item: `https://wiline.ru${item.href}`
          })
        }))
      ]
    };

    const scriptId = 'breadcrumb-ld-json';
    let script = document.getElementById(scriptId) as HTMLScriptElement;
    
    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }
    
    script.textContent = JSON.stringify(schema);

    return () => {
      const existingScript = document.getElementById(scriptId);
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, [items]);

  return null;
}