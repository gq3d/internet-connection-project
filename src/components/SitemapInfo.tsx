import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function SitemapInfo() {
  const stats = {
    totalPages: 39,
    services: 6,
    cities: 32,
    mainPage: 1
  };

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Icon name="FileText" size={24} />
          <span>Карта сайта (Sitemap)</span>
        </CardTitle>
        <CardDescription>
          Автоматически генерируемая XML-карта для поисковых систем
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <div className="flex items-center justify-between p-3 bg-primary/5 rounded-lg">
              <span className="text-sm text-muted-foreground">Всего страниц</span>
              <span className="text-2xl font-bold text-primary">{stats.totalPages}</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-accent rounded-lg">
              <span className="text-sm text-muted-foreground">Услуги</span>
              <span className="text-xl font-semibold">{stats.services}</span>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between p-3 bg-accent rounded-lg">
              <span className="text-sm text-muted-foreground">Города</span>
              <span className="text-xl font-semibold">{stats.cities}</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-accent rounded-lg">
              <span className="text-sm text-muted-foreground">Главная</span>
              <span className="text-xl font-semibold">{stats.mainPage}</span>
            </div>
          </div>
        </div>

        <div className="pt-4 border-t space-y-3">
          <h4 className="font-semibold flex items-center space-x-2">
            <Icon name="Link" size={18} />
            <span>Ссылки на карты:</span>
          </h4>
          <div className="space-y-2">
            <a 
              href="/sitemap.xml" 
              target="_blank"
              className="flex items-center space-x-2 text-sm text-primary hover:underline"
            >
              <Icon name="FileCode" size={16} />
              <span>sitemap.xml</span>
            </a>
            <a 
              href="/robots.txt" 
              target="_blank"
              className="flex items-center space-x-2 text-sm text-primary hover:underline"
            >
              <Icon name="FileText" size={16} />
              <span>robots.txt</span>
            </a>
          </div>
        </div>

        <div className="pt-4 border-t">
          <p className="text-sm text-muted-foreground">
            💡 Карта сайта автоматически обновляется и включает все страницы услуг и городов. 
            Файлы доступны для поисковых роботов Google, Yandex и других поисковых систем.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}