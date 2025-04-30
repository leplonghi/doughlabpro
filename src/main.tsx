
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import './index.css';
import registerServiceWorker from './serviceWorker.ts';

// Create a separate root element to ensure React is properly initialized
const root = ReactDOM.createRoot(document.getElementById('root')!);

// Render the app
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);

// Register service worker for offline functionality after React has initialized
setTimeout(() => {
  registerServiceWorker();
}, 100);
