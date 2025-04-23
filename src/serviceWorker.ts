
// Service worker registration
const registerServiceWorker = async () => {
  if ('serviceWorker' in navigator) {
    try {
      const registration = await navigator.serviceWorker.register('/sw.js');
      console.log('Service worker registration successful with scope:', registration.scope);
    } catch (error) {
      console.error('Service worker registration failed:', error);
    }
  }
};

export default registerServiceWorker;
