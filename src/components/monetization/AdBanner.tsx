
import React, { useEffect } from 'react';

const AdBanner: React.FC = () => {
  useEffect(() => {
    const loadAds = () => {
      // Check if AdSense script exists, if not, create it
      if (!document.getElementById('adsbygoogle-script')) {
        const adScript = document.createElement('script');
        adScript.id = 'adsbygoogle-script';
        adScript.async = true;
        adScript.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';
        adScript.setAttribute('data-ad-client', import.meta.env.VITE_AD_CLIENT || 'ca-pub-xxxxxxxxxxxxxxxx');
        document.head.appendChild(adScript);
      }

      // Initialize ads
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (e) {
        console.error('AdSense error:', e);
      }
    };

    loadAds();
    
    return () => {
      // Cleanup function if needed
    };
  }, []);

  return (
    <div className="ad-container my-4 flex justify-center">
      <ins
        className="adsbygoogle"
        style={{ display: 'block', width: '100%', height: '90px' }}
        data-ad-client={import.meta.env.VITE_AD_CLIENT || 'ca-pub-xxxxxxxxxxxxxxxx'}
        data-ad-slot={import.meta.env.VITE_AD_SLOT || '0000000000'}
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
    </div>
  );
};

export default AdBanner;
