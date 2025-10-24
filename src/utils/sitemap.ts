// Утилита для генерации sitemap.xml
export interface SitemapUrl {
  loc: string;
  lastmod?: string;
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: number;
}

// Список всех городов
const cities = [
  'Москва', 'Подольск', 'Красногорск', 'Химки', 'Королёв', 'Мытищи', 'Люберцы',
  'Электросталь', 'Домодедово', 'Одинцово', 'Сергиев Посад', 'Коломна', 'Раменское',
  'Долгопрудный', 'Пушкино', 'Зеленоград', 'Щёлково', 'Видное', 'Дубна', 'Истра',
  'Орехово-Зуево', 'Клин', 'Фрязино', 'Лобня', 'Ногинск', 'Реутов', 'Красноармейск',
  'Дмитров', 'Серпухов', 'Егорьевск', 'Лыткарино', 'Солнечногорск', 'Жуковский',
  'Старая Купавна', 'Бронницы', 'Чехов', 'Кашира', 'Воскресенск', 'Ивантеевка',
  'Павловский Посад', 'Наро-Фоминск', 'Можайск', 'Ступино', 'Протвино',
  'Лосино-Петровский', 'Апрелевка', 'Черноголовка', 'Балашиха', 'Рошаль',
  'Высоковск', 'Куровское', 'Краснознаменск', 'Звенигород', 'Волоколамск',
  'Руза', 'Талдом', 'Шатура', 'Озёры'
];

// Функция генерации slug (полная транслитерация)
const generateCitySlug = (cityName: string): string => {
  const translitMap: { [key: string]: string } = {
    'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd', 'е': 'e', 'ё': 'e',
    'ж': 'zh', 'з': 'z', 'и': 'i', 'й': 'y', 'к': 'k', 'л': 'l', 'м': 'm',
    'н': 'n', 'о': 'o', 'п': 'p', 'р': 'r', 'с': 's', 'т': 't', 'у': 'u',
    'ф': 'f', 'х': 'h', 'ц': 'ts', 'ч': 'ch', 'ш': 'sh', 'щ': 'sch',
    'ъ': '', 'ы': 'y', 'ь': '', 'э': 'e', 'ю': 'yu', 'я': 'ya'
  };
  
  return cityName
    .toLowerCase()
    .split('')
    .map(char => translitMap[char] || char)
    .join('')
    .replace(/[^a-zA-Z0-9]/g, '-')
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

// Список страниц eSIM
const esimPages = [
  { slug: 'global', name: 'Глобальный' },
  { slug: 'europe', name: 'Европа' },
  { slug: 'asia', name: 'Азия' },
  { slug: 'north-america', name: 'Северная Америка' },
  { slug: 'south-america', name: 'Южная Америка' },
  { slug: 'africa', name: 'Африка' },
  { slug: 'middle-east', name: 'Ближний Восток' },
  { slug: 'australia', name: 'Австралия и Океания' },
  { slug: 'caribbean', name: 'Карибский бассейн' }
];

// Список страниц преимуществ интернета
const advantagePages = [
  { slug: 'high-speed', name: 'Высокоскоростной интернет' },
  { slug: 'stable-connection', name: 'Стабильное соединение' },
  { slug: 'secure-connection', name: 'Защищённое подключение' },
  { slug: 'kids-internet', name: 'Детский интернет' },
  { slug: 'fast-setup', name: 'Быстрое подключение' }
];

// Список всех страниц сайта
export const siteUrls: SitemapUrl[] = [
  {
    loc: '/',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'weekly',
    priority: 1.0
  },
  {
    loc: '/tariffs',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'monthly' as const,
    priority: 0.95
  },
  {
    loc: '/pricing',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'monthly' as const,
    priority: 0.95
  },
  {
    loc: '/coverage',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'weekly' as const,
    priority: 0.9
  },
  {
    loc: '/services',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'monthly' as const,
    priority: 0.95
  },
  {
    loc: '/equipment',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'monthly' as const,
    priority: 0.9
  },
  {
    loc: '/reviews',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'monthly' as const,
    priority: 0.85
  },
  {
    loc: '/faq',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'monthly' as const,
    priority: 0.85
  },
  {
    loc: '/esim',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'weekly' as const,
    priority: 0.9
  },
  {
    loc: '/signal-boost',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'monthly' as const,
    priority: 0.8
  },
  // Добавляем страницы услуг
  ...servicePages.map(service => ({
    loc: `/services/${service.slug}`,
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'monthly' as const,
    priority: 0.9
  })),
  // Добавляем страницы eSIM регионов
  ...esimPages.map(esim => ({
    loc: `/esim/${esim.slug}`,
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'weekly' as const,
    priority: 0.8
  })),
  // Добавляем страницы преимуществ интернета
  ...advantagePages.map(advantage => ({
    loc: `/${advantage.slug}`,
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'monthly' as const,
    priority: 0.8
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