
import React from 'react';
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import registerServiceWorker from './serviceWorker'

// Register service worker for PWA support
registerServiceWorker();

createRoot(document.getElementById("root")!).render(<React.StrictMode><App /></React.StrictMode>);
