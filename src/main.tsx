
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import registerServiceWorker from './serviceWorker';

// Register service worker for PWA support
registerServiceWorker();

const root = document.getElementById('root');
if (!root) throw new Error('Root element not found');

const reactRoot = createRoot(root);
reactRoot.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
