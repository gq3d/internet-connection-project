import { writeFileSync } from 'fs';
import { resolve } from 'path';

// Список всех городов
const cities = [
  'Москва', 'Подольск', 'Красногорск', 'Химки', 'Мытищи', 'Люберцы',
  'Домодедово', 'Сергиев Посад', 'Коломна', 'Пушкино', 'Зеленоград', 'Щёлково',
  'Видное', 'Дубна', 'Истра', 'Орехово-Зуево', 'Клин', 'Фрязино',
  'Лобня', 'Ногинск', 'Реутов', 'Красноармейск', 'Дмитров', 'Серпухов',
  'Егорьевск', 'Лыткарино', 'Солнечногорск', 'Жуковский', 'Старая Купавна',
  'Бронницы', 'Чехов', 'Кашира'
];

// Список страниц услуг
const servicePages = [
  { slug: 'internet', name: 'Беспроводной интернет' },
  { slug: 'satellite', name: 'Спутниковый интернет' },
  { slug: 'wifi', name: 'Wi-Fi оборудование' },
  { slug: 'security', name: 'Охранные системы' },
  { slug: 'surveillance', name: 'Видеонаблюдение' },
  { slug: 'cellular-booster', name: 'Усиление сотовой связи' }
];

const generateCitySlug = (cityName: string): string => {
  return cityName
    .toLowerCase()
    .replace(/ё/g, 'e')
    .replace(/[^a-zA-Z0-9\u0430-\u044f]/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
};

const today = new Date().toISOString().split('T')[0];
const baseUrl = 'https://mosoblconnect.ru';

// Генерация XML
let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
    
    <!-- Главная страница -->
    <url>
        <loc>${baseUrl}/</loc>
        <lastmod>${today}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>1.0</priority>
        <image:image>
            <image:loc>https://cdn.mosoblconnect.ru/files/0b95440d-0b84-41b8-8404-418760cb07a4.jpg</image:loc>
            <image:title>NetConnect - провайдер интернета в Московской области</image:title>
        </image:image>
    </url>
    
    <!-- Страницы услуг -->
`;

servicePages.forEach(service => {
  sitemap += `    <url>
        <loc>${baseUrl}/services/${service.slug}</loc>
        <lastmod>${today}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.9</priority>
    </url>
    
`;
});

sitemap += `    <!-- Страницы городов -->
`;

cities.forEach(city => {
  const slug = generateCitySlug(city);
  sitemap += `    <url>
        <loc>${baseUrl}/city/${slug}</loc>
        <lastmod>${today}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.7</priority>
    </url>
    
`;
});

sitemap += `</urlset>`;

// Сохранение файла
const sitemapPath = resolve(process.cwd(), 'public', 'sitemap.xml');
writeFileSync(sitemapPath, sitemap, 'utf-8');

console.log('✅ Sitemap успешно сгенерирован:', sitemapPath);
console.log(`📊 Всего страниц: ${1 + servicePages.length + cities.length}`);