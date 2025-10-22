import * as React from 'react';
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'
import { preconnectToOrigin } from './utils/performanceMonitoring'

preconnectToOrigin('https://cdn.poehali.dev');
preconnectToOrigin('https://cdn.wiline.ru');
preconnectToOrigin('https://fonts.googleapis.com');

createRoot(document.getElementById("root")!).render(<App />);