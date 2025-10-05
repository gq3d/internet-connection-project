import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function SpeedTest() {
  const [testing, setTesting] = useState(false);
  const [downloadSpeed, setDownloadSpeed] = useState<number | null>(null);
  const [uploadSpeed, setUploadSpeed] = useState<number | null>(null);
  const [ping, setPing] = useState<number | null>(null);
  const [progress, setProgress] = useState(0);

  const testPing = async (): Promise<number> => {
    const start = performance.now();
    try {
      await fetch('https://www.cloudflare.com/cdn-cgi/trace', { 
        method: 'GET',
        cache: 'no-cache'
      });
      const end = performance.now();
      return Math.round(end - start);
    } catch {
      return 0;
    }
  };

  const testDownloadSpeed = async (): Promise<number> => {
    const fileSize = 3 * 1024 * 1024;
    const testUrl = `https://via.placeholder.com/2000x1500.jpg?timestamp=${Date.now()}`;
    
    const start = performance.now();
    try {
      const response = await fetch(testUrl, { cache: 'no-cache' });
      await response.blob();
      const end = performance.now();
      
      const durationInSeconds = (end - start) / 1000;
      const speedInMbps = (fileSize * 8) / (durationInSeconds * 1000000);
      return Math.round(speedInMbps * 100) / 100;
    } catch {
      return 0;
    }
  };

  const testUploadSpeed = async (): Promise<number> => {
    const fileSize = 1 * 1024 * 1024;
    const data = new Blob([new ArrayBuffer(fileSize)], { type: 'application/octet-stream' });
    
    const start = performance.now();
    try {
      await fetch('https://httpbin.org/post', {
        method: 'POST',
        body: data,
        cache: 'no-cache'
      });
      const end = performance.now();
      
      const durationInSeconds = (end - start) / 1000;
      const speedInMbps = (fileSize * 8) / (durationInSeconds * 1000000);
      return Math.round(speedInMbps * 100) / 100;
    } catch {
      return 0;
    }
  };

  const runSpeedTest = async () => {
    setTesting(true);
    setProgress(0);
    setDownloadSpeed(null);
    setUploadSpeed(null);
    setPing(null);

    setProgress(10);
    const pingResult = await testPing();
    setPing(pingResult);

    setProgress(30);
    const downloadResult = await testDownloadSpeed();
    setDownloadSpeed(downloadResult);

    setProgress(60);
    const uploadResult = await testUploadSpeed();
    setUploadSpeed(uploadResult);

    setProgress(100);
    setTesting(false);
  };

  return (
    <Card id="speed-test" className="p-8 bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30 border-2 border-primary/20 shadow-xl scroll-mt-24">
      <div className="text-center mb-8">
        <div className="flex items-center justify-center gap-2 mb-3">
          <Icon name="Gauge" size={32} className="text-primary" />
          <h4 className="text-3xl font-bold">Проверка скорости интернета</h4>
        </div>
        <p className="text-lg text-muted-foreground">
          Измерьте скорость вашего подключения
        </p>
      </div>

      <div className="max-w-2xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <Card className="p-6 text-center bg-white/80 backdrop-blur">
            <Icon name="Download" size={32} className="mx-auto mb-3 text-blue-600" />
            <div className="text-sm text-muted-foreground mb-1">Загрузка</div>
            <div className="text-3xl font-bold text-blue-600">
              {downloadSpeed !== null ? `${downloadSpeed}` : '---'}
            </div>
            <div className="text-sm text-muted-foreground">Мбит/с</div>
          </Card>

          <Card className="p-6 text-center bg-white/80 backdrop-blur">
            <Icon name="Upload" size={32} className="mx-auto mb-3 text-green-600" />
            <div className="text-sm text-muted-foreground mb-1">Выгрузка</div>
            <div className="text-3xl font-bold text-green-600">
              {uploadSpeed !== null ? `${uploadSpeed}` : '---'}
            </div>
            <div className="text-sm text-muted-foreground">Мбит/с</div>
          </Card>

          <Card className="p-6 text-center bg-white/80 backdrop-blur">
            <Icon name="Activity" size={32} className="mx-auto mb-3 text-purple-600" />
            <div className="text-sm text-muted-foreground mb-1">Пинг</div>
            <div className="text-3xl font-bold text-purple-600">
              {ping !== null ? `${ping}` : '---'}
            </div>
            <div className="text-sm text-muted-foreground">мс</div>
          </Card>
        </div>

        {testing && (
          <div className="mb-6">
            <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
            <p className="text-center text-sm text-muted-foreground mt-2">
              Выполняется тестирование... {progress}%
            </p>
          </div>
        )}

        <Button 
          onClick={runSpeedTest}
          disabled={testing}
          className="w-full h-14 text-lg"
          size="lg"
        >
          {testing ? (
            <>
              <Icon name="Loader2" size={20} className="mr-2 animate-spin" />
              Тестирование...
            </>
          ) : (
            <>
              <Icon name="PlayCircle" size={20} className="mr-2" />
              Начать тест
            </>
          )}
        </Button>

        <div className="mt-6 p-4 bg-blue-50/50 rounded-lg border border-blue-200">
          <p className="text-sm text-center text-muted-foreground">
            <Icon name="Info" size={16} className="inline mr-1" />
            Для точных результатов закройте другие программы, использующие интернет
          </p>
        </div>
      </div>
    </Card>
  );
}