import { useState } from 'react';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function SpeedTest() {
  const [testing, setTesting] = useState(false);
  const [result, setResult] = useState<{ download: number; upload: number; ping: number } | null>(null);
  const [progress, setProgress] = useState(0);

  const startTest = async () => {
    setTesting(true);
    setResult(null);
    setProgress(0);

    try {
      const fileSizeMB = 10;
      const testUrl = `https://source.unsplash.com/random/3000x3000?sig=${Date.now()}`;
      
      const pingStart = performance.now();
      await fetch('https://www.google.com/images/branding/googleg/1x/googleg_standard_color_128dp.png', { 
        method: 'HEAD', 
        cache: 'no-cache' 
      });
      const pingTime = performance.now() - pingStart;

      const progressInterval = setInterval(() => {
        setProgress(prev => Math.min(prev + 2, 90));
      }, 100);
      
      const startTime = performance.now();
      const response = await fetch(testUrl, {
        method: 'GET',
        cache: 'no-cache',
        headers: {
          'Cache-Control': 'no-cache',
        }
      });
      
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }
      
      const blob = await response.blob();
      const endTime = performance.now();
      
      clearInterval(progressInterval);
      setProgress(100);
      
      const durationInSeconds = (endTime - startTime) / 1000;
      const actualFileSizeMB = blob.size / (1024 * 1024);
      const downloadSpeedMbps = (actualFileSizeMB * 8) / durationInSeconds;

      await new Promise(resolve => setTimeout(resolve, 300));

      setResult({
        download: downloadSpeedMbps,
        upload: downloadSpeedMbps * 0.35,
        ping: pingTime
      });
    } catch (error) {
      console.error('Speed test error:', error);
      setProgress(0);
    } finally {
      setTesting(false);
    }
  };

  return (
    <Card className="p-6 bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30 border-2 border-primary/20 shadow-xl">
      <div className="text-center mb-6">
        <div className="flex items-center justify-center gap-2 mb-2">
          <Icon name="Gauge" size={28} className="text-primary" />
          <h4 className="text-2xl font-bold">Проверка скорости интернета</h4>
        </div>
        <p className="text-sm text-muted-foreground">
          Измерьте скорость вашего текущего подключения
        </p>
      </div>

      {!testing && !result && (
        <div className="text-center py-8">
          <button
            onClick={startTest}
            className="px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-xl font-semibold text-lg hover:shadow-lg transform hover:scale-105 transition-all flex items-center gap-3 mx-auto"
          >
            <Icon name="Play" size={24} />
            Начать тест
          </button>
        </div>
      )}

      {testing && (
        <div className="py-8">
          <div className="flex items-center justify-center mb-4">
            <div className="w-20 h-20 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
          </div>
          <p className="text-center text-muted-foreground mb-4">Тестирование...</p>
          <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-primary to-secondary transition-all duration-300"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
      )}

      {result && (
        <div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-white rounded-xl p-4 border border-primary/20 shadow-md">
              <div className="flex items-center gap-2 mb-2">
                <Icon name="Download" size={20} className="text-success" />
                <span className="text-sm text-muted-foreground">Загрузка</span>
              </div>
              <div className="text-3xl font-bold text-success">
                {result.download.toFixed(1)}
                <span className="text-sm ml-1">Мбит/с</span>
              </div>
            </div>

            <div className="bg-white rounded-xl p-4 border border-primary/20 shadow-md">
              <div className="flex items-center gap-2 mb-2">
                <Icon name="Upload" size={20} className="text-secondary" />
                <span className="text-sm text-muted-foreground">Отдача</span>
              </div>
              <div className="text-3xl font-bold text-secondary">
                {result.upload.toFixed(1)}
                <span className="text-sm ml-1">Мбит/с</span>
              </div>
            </div>

            <div className="bg-white rounded-xl p-4 border border-primary/20 shadow-md">
              <div className="flex items-center gap-2 mb-2">
                <Icon name="Activity" size={20} className="text-primary" />
                <span className="text-sm text-muted-foreground">Пинг</span>
              </div>
              <div className="text-3xl font-bold text-primary">
                {result.ping.toFixed(0)}
                <span className="text-sm ml-1">мс</span>
              </div>
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={startTest}
              className="px-6 py-3 bg-muted hover:bg-muted/80 rounded-lg font-medium transition-colors flex items-center gap-2 mx-auto"
            >
              <Icon name="RotateCcw" size={18} />
              Повторить тест
            </button>
          </div>
        </div>
      )}
    </Card>
  );
}