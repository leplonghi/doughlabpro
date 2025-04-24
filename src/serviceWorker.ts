
// Service worker registration
const registerServiceWorker = async () => {
  if ('serviceWorker' in navigator) {
    try {
      const registration = await navigator.serviceWorker.register('/sw.js', {
        scope: '/',
      });
      console.log('Service worker registration successful with scope:', registration.scope);
      
      // Request notification permission if not already granted
      if ('Notification' in window && Notification.permission !== 'granted' && Notification.permission !== 'denied') {
        await Notification.requestPermission();
      }
    } catch (error) {
      console.error('Service worker registration failed:', error);
    }
  }
};

export default registerServiceWorker;
