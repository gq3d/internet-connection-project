# Руководство по SEO настройкам сайта

## Автоматическая генерация sitemap.xml и robots.txt

Сайт автоматически генерирует файлы `sitemap.xml` и `robots.txt` для корректной индексации поисковиками.

### Доступные файлы:
- `/sitemap.xml` - карта сайта в формате XML
- `/robots.txt` - файл для поисковых роботов

### Как добавить новые страницы в sitemap:

1. Откройте файл `src/utils/sitemap.ts`
2. Добавьте новую страницу в массив `siteUrls`:

```typescript
export const siteUrls: SitemapUrl[] = [
  {
    loc: '/',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'weekly',
    priority: 1.0
  },
  // Добавьте новую страницу здесь:
  {
    loc: '/about',
    lastmod: '2024-01-15',
    changefreq: 'monthly', 
    priority: 0.8
  }
];
```

3. Добавьте соответствующий маршрут в `src/App.tsx`:

```typescript
<Route path="/about" element={<About />} />
```

### Параметры URL:
- `loc` - путь страницы (обязательно)
- `lastmod` - дата последнего изменения (YYYY-MM-DD)
- `changefreq` - частота изменений: always, hourly, daily, weekly, monthly, yearly, never
- `priority` - приоритет (0.0 - 1.0, где 1.0 - максимальный приоритет)

### Автоматическое обновление:
- Sitemap генерируется динамически при каждом запросе
- При добавлении новых страниц они автоматически попадут в sitemap
- Поисковики будут уведомлены через robots.txt

### Проверка работы:
1. Откройте `https://mosoblconnect.ru/sitemap.xml`
2. Откройте `https://mosoblconnect.ru/robots.txt`
3. Убедитесь, что файлы отображаются корректно

### Отправка в поисковики:
1. Google Search Console: https://search.google.com/search-console
2. Яндекс.Вебмастер: https://webmaster.yandex.ru
3. Добавьте sitemap URL: `https://mosoblconnect.ru/sitemap.xml`