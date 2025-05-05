
import * as React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import './i18n'; // Import i18n configuration

// Create root and render app without duplicate StrictMode
// since we already have StrictMode in App.tsx
ReactDOM.createRoot(document.getElementById('root')!).render(
  <App />
);

// Register service worker after React has initialized
import registerServiceWorker from './serviceWorker.ts';
registerServiceWorker();
