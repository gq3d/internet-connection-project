import { useEffect } from 'react';
import { generateSitemap, generateRobotsTxt } from '@/utils/sitemap';

const SitemapGenerator = ({ type }: { type: 'sitemap' | 'robots' }) => {
  useEffect(() => {
    const content = type === 'sitemap' ? generateSitemap() : generateRobotsTxt();
    const contentType = type === 'sitemap' ? 'application/xml' : 'text/plain';
    
    // Устанавливаем правильный Content-Type
    document.documentElement.setAttribute('data-content-type', contentType);
    
    // Очищаем body и вставляем содержимое
    document.body.innerHTML = `<pre>${content}</pre>`;
    document.body.style.fontFamily = 'monospace';
    document.body.style.whiteSpace = 'pre-wrap';
    document.body.style.margin = '0';
    document.body.style.padding = '10px';
  }, [type]);

  return null;
};

export default SitemapGenerator;