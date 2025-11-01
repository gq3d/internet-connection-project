const INDEXNOW_KEY = '4a8f9c2e1b6d3f7a5e9c8b1d4a7f2e6c';
const INDEXNOW_ENDPOINT = 'https://yandex.com/indexnow';
const SITE_URL = 'https://mosoblconnect.ru';

export const submitToIndexNow = async (urls: string[]) => {
  try {
    const response = await fetch(INDEXNOW_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        host: 'mosoblconnect.ru',
        key: INDEXNOW_KEY,
        keyLocation: `${SITE_URL}/${INDEXNOW_KEY}.txt`,
        urlList: urls.map(url => url.startsWith('http') ? url : `${SITE_URL}${url}`)
      })
    });

    if (response.ok) {
      console.log('IndexNow: URLs submitted successfully', urls);
      return true;
    } else {
      console.error('IndexNow submission failed:', response.status);
      return false;
    }
  } catch (error) {
    console.error('IndexNow error:', error);
    return false;
  }
};

export const notifyPageView = (path: string) => {
  if (typeof window !== 'undefined' && path !== '/') {
    const fullUrl = `${SITE_URL}${path}`;
    submitToIndexNow([fullUrl]);
  }
};
