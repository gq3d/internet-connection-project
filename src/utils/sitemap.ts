// Утилита для генерации sitemap.xml
export interface SitemapUrl {
  loc: string;
  lastmod?: string;
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: number;
}

// Список всех городов
const cities = [
  'Москва', 'Подольск', 'Красногорск', 'Химки', 'Мытищи', 'Люберцы',
  'Домодедово', 'Сергиев Посад', 'Коломна', 'Пушкино', 'Зеленоград', 'Щёлково',
  'Видное', 'Дубна', 'Истра', 'Орехово-Зуево', 'Клин', 'Фрязино',
  'Лобня', 'Ногинск', 'Реутов', 'Красноармейск', 'Дмитров', 'Серпухов',
  'Егорьевск', 'Лыткарино', 'Солнечногорск', 'Жуковский', 'Старая Купавна',
  'Бронницы', 'Чехов', 'Кашира'
];

// Функция генерации slug
const generateCitySlug = (cityName: string): string => {
  return cityName
    .toLowerCase()
    .replace(/ё/g, 'e')
    .replace(/[^a-zA-Z0-9\u0430-\u044f]/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
};

// Список страниц услуг
const servicePages = [
  { slug: 'internet', name: 'Беспроводной интернет' },
  { slug: 'satellite', name: 'Спутниковый интернет' },
  { slug: 'wifi', name: 'Wi-Fi оборудование' },
  { slug: 'security', name: 'Охранные системы' },
  { slug: 'surveillance', name: 'Видеонаблюдение' },
  { slug: 'cellular-booster', name: 'Усиление сотовой связи' }
];

// Список всех страниц сайта
export const siteUrls: SitemapUrl[] = [
  {
    loc: '/',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'weekly',
    priority: 1.0
  },
  // Добавляем страницы услуг
  ...servicePages.map(service => ({
    loc: `/services/${service.slug}`,
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'monthly' as const,
    priority: 0.9
  })),
  // Добавляем все городские страницы
  ...cities.map(city => ({
    loc: `/city/${generateCitySlug(city)}`,
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'monthly' as const,
    priority: 0.7
  }))
];

export const generateSitemap = (baseUrl: string = 'https://mosoblconnect.ru'): string => {
  const urlElements = siteUrls.map(url => `
  <url>
    <loc>${baseUrl}${url.loc}</loc>
    ${url.lastmod ? `<lastmod>${url.lastmod}</lastmod>` : ''}
    ${url.changefreq ? `<changefreq>${url.changefreq}</changefreq>` : ''}
    ${url.priority !== undefined ? `<priority>${url.priority}</priority>` : ''}
  </url>`).join('');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlElements}
</urlset>`;
};

export const generateRobotsTxt = (baseUrl: string = 'https://mosoblconnect.ru'): string => {
  return `# mosoblconnect.ru robots.txt

User-agent: *
Allow: /
Disallow: /api/
Disallow: /admin/
Disallow: /*.json$

# Yandex Bot
User-agent: Yandex
Allow: /
Crawl-delay: 1

# Google Bot
User-agent: Googlebot
Allow: /
Crawl-delay: 1

# Sitemap
Sitemap: ${baseUrl}/sitemap.xml

# Host (для Яндекса)
Host: ${baseUrl.replace('https://', '').replace('http://', '')}`;
};