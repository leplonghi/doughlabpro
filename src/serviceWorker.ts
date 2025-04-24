
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

      // Add event listener to handle updates
      navigator.serviceWorker.addEventListener('controllerchange', () => {
        console.log('Service worker controller changed, refreshing content');
      });

      // Check for updates every minute
      setInterval(() => {
        registration.update();
      }, 60000); // 60 seconds
    } catch (error) {
      console.error('Service worker registration failed:', error);
    }
  }
};

// Function to refresh the application and clear cache
export const refreshApplication = async () => {
  if ('serviceWorker' in navigator) {
    // Get the service worker registration
    const registration = await navigator.serviceWorker.getRegistration();
    
    if (registration && registration.active) {
      // Clear the cache
      navigator.serviceWorker.controller?.postMessage({type: 'CLEAR_CACHE'});
      
      // Force the service worker to activate
      registration.update();
      
      // Reload the page after a short delay
      setTimeout(() => {
        window.location.reload();
      }, 300);
    } else {
      // If no service worker is active, just reload the page
      window.location.reload();
    }
  } else {
    // Fallback for browsers without service worker support
    window.location.reload();
  }
};

export default registerServiceWorker;
