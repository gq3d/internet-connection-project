import { useState } from 'react';
import Icon from '@/components/ui/icon';

const BACKEND_URL = 'https://functions.poehali.dev/24646cdf-f7b2-49c4-9848-31a7546faf8f';

export default function SitemapNotifier() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{ success: boolean; message: string } | null>(null);

  const notifyYandex = async () => {
    setLoading(true);
    setResult(null);

    try {
      const response = await fetch(BACKEND_URL);
      const data = await response.json();
      
      setResult({
        success: data.success,
        message: data.message || data.error || 'Неизвестная ошибка'
      });
    } catch (error) {
      setResult({
        success: false,
        message: 'Ошибка соединения с сервером'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div className="bg-white rounded-lg shadow-lg p-4 max-w-sm">
        <div className="flex items-center gap-3 mb-3">
          <Icon name="RefreshCw" className="text-primary" size={24} />
          <h3 className="font-semibold">Обновить Sitemap</h3>
        </div>
        
        <p className="text-sm text-muted-foreground mb-4">
          Отправить уведомление в Яндекс.Вебмастер об обновлении sitemap
        </p>

        <button
          onClick={notifyYandex}
          disabled={loading}
          className="w-full inline-flex items-center justify-center px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? (
            <>
              <Icon name="Loader2" className="mr-2 animate-spin" size={16} />
              Отправка...
            </>
          ) : (
            <>
              <Icon name="Send" className="mr-2" size={16} />
              Отправить
            </>
          )}
        </button>

        {result && (
          <div className={`mt-3 p-3 rounded-lg text-sm ${
            result.success 
              ? 'bg-green-50 text-green-800 border border-green-200' 
              : 'bg-red-50 text-red-800 border border-red-200'
          }`}>
            <div className="flex items-start gap-2">
              <Icon 
                name={result.success ? "CheckCircle2" : "AlertCircle"} 
                size={16} 
                className="mt-0.5 flex-shrink-0"
              />
              <p>{result.message}</p>
            </div>
          </div>
        )}

        <div className="mt-3 pt-3 border-t border-border">
          <a 
            href="https://webmaster.yandex.ru/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1"
          >
            Открыть Яндекс.Вебмастер
            <Icon name="ExternalLink" size={12} />
          </a>
        </div>
      </div>
    </div>
  );
}
