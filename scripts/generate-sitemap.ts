import { writeFileSync } from 'fs';
import { resolve } from 'path';

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
    
    <!-- Основные страницы -->
    <url>
        <loc>${baseUrl}/tariffs</loc>
        <lastmod>${today}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.95</priority>
    </url>
    
    <url>
        <loc>${baseUrl}/pricing</loc>
        <lastmod>${today}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.95</priority>
    </url>
    
    <url>
        <loc>${baseUrl}/coverage</loc>
        <lastmod>${today}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.9</priority>
    </url>
    
    <url>
        <loc>${baseUrl}/services</loc>
        <lastmod>${today}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.95</priority>
    </url>
    
    <url>
        <loc>${baseUrl}/equipment</loc>
        <lastmod>${today}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.9</priority>
    </url>
    
    <url>
        <loc>${baseUrl}/reviews</loc>
        <lastmod>${today}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.85</priority>
    </url>
    
    <url>
        <loc>${baseUrl}/faq</loc>
        <lastmod>${today}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.85</priority>
    </url>
    
    <url>
        <loc>${baseUrl}/esim</loc>
        <lastmod>${today}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.9</priority>
    </url>
    
    <url>
        <loc>${baseUrl}/signal-boost</loc>
        <lastmod>${today}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.8</priority>
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