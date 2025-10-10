import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  canonical?: string;
  noindex?: boolean;
}

export default function SEO({
  title = "NetConnect - Беспроводной интернет в Московской области | От 1490₽, скорость до 240 Мбит/с",
  description = "Провайдер интернета NetConnect - беспроводной и спутниковый интернет до 240 Мбит/с в Московской области. Тарифы от 1490₽/мес. Подключение частных домов, дач за 1-3 дня. Wi-Fi оборудование, видеонаблюдение, усиление сотовой связи. Покрытие 99% МО. Звоните: +7 (901) 500-00-78",
  keywords = "интернет московская область, беспроводной интернет мо, спутниковый интернет, интернет на даче, интернет в частном доме, провайдер интернета мо, интернет загородный дом, wi-fi оборудование, видеонаблюдение установка, усиление сотовой связи, интернет без проводов, системы охраны",
  ogTitle,
  ogDescription,
  ogImage = "https://cdn.poehali.dev/projects/d4f2c7e9-a091-4f1c-9e82-47f687864218/files/93db5504-b12a-4d11-8489-699ce8ce5049.jpg",
  canonical,
  noindex = false
}: SEOProps) {
  const fullTitle = title;
  const finalOgTitle = ogTitle || title;
  const finalOgDescription = ogDescription || description;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}
      
      {canonical && <link rel="canonical" href={canonical} />}
      
      <meta property="og:title" content={finalOgTitle} />
      <meta property="og:description" content={finalOgDescription} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:type" content="website" />
      
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={finalOgTitle} />
      <meta name="twitter:description" content={finalOgDescription} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
}