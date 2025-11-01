import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { notifyPageView } from '@/utils/indexnow';

export default function PageViewTracker() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    notifyPageView(pathname);
  }, [pathname]);

  return null;
}
