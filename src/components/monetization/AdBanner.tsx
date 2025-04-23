
import React, { useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';

declare global {
  interface Window {
    adsbygoogle?: any[];
  }
}

const AdBanner: React.FC = () => {
  useEffect(() => {
    // Load ads when component mounts
    try {
      if (window.adsbygoogle && window.adsbygoogle.push) {
        window.adsbygoogle.push({});
      }
    } catch (e) {
      console.error('Error loading ads:', e);
    }
  }, []);

  return (
    <Card className="mt-4 overflow-hidden">
      <CardContent className="p-0">
        <div className="bg-gray-100 p-4 text-center">
          <div 
            className="w-full flex items-center justify-center min-h-[120px] text-gray-500"
            style={{ 
              background: 'repeating-linear-gradient(45deg, #f0f0f0, #f0f0f0 10px, #f8f8f8 10px, #f8f8f8 20px)' 
            }}
          >
            <ins 
              className="adsbygoogle" 
              style={{ display: 'block', minWidth: '300px', width: '100%', minHeight: '120px' }}
              data-ad-client={import.meta.env.VITE_AD_CLIENT || 'ca-pub-placeholderid'}
              data-ad-slot={import.meta.env.VITE_AD_SLOT || '1234567890'}
              data-ad-format="auto"
              data-full-width-responsive="true"
            />
          </div>
          <p className="text-xs mt-2">
            Support the developer by purchasing the ad-free version
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default AdBanner;
