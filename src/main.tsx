
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import './index.css';
import registerServiceWorker from './serviceWorker.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);

// Register service worker for offline functionality
// Moving this after the React initialization to avoid potential issues
setTimeout(() => {
  registerServiceWorker();
}, 0);
