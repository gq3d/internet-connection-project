import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import { useEffect } from 'react';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  useEffect(() => {
    const breadcrumbSchema = {
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
          ...(item.href && { item: `https://wiline.ru${item.href}` })
        }))
      ]
    };

    const scriptId = 'breadcrumb-schema';
    let script = document.getElementById(scriptId);
    
    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }
    
    script.textContent = JSON.stringify(breadcrumbSchema);

    return () => {
      const existingScript = document.getElementById(scriptId);
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, [items]);

  return (
    <nav aria-label="Хлебные крошки" className="container mx-auto px-4 py-4">
      <ol className="flex items-center space-x-2 text-sm text-muted-foreground">
        <li>
          <Link 
            to="/" 
            className="hover:text-primary transition-colors flex items-center"
          >
            <Icon name="Home" size={16} className="mr-1" />
            Главная
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={index} className="flex items-center space-x-2">
            <Icon name="ChevronRight" size={16} />
            {item.href ? (
              <Link 
                to={item.href} 
                className="hover:text-primary transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-foreground font-medium">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}