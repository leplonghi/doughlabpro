
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

declare global {
  interface Window {
    adsbygoogle?: any[];
  }
}

const AdBanner: React.FC = () => {
  React.useEffect(() => {
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
    <div className="bg-white py-6">
      <div className="container mx-auto px-4">
        <Card className="border border-border shadow-sm overflow-hidden">
          <CardContent className="p-0">
            {/* Ad content will be inserted here by Google AdSense */}
            <ins 
              className="adsbygoogle" 
              style={{
                display: 'block',
                minHeight: '100px',
                width: '100%'
              }} 
              data-ad-client={import.meta.env.VITE_AD_CLIENT || 'ca-pub-placeholder'} 
              data-ad-slot={import.meta.env.VITE_AD_SLOT || '0000000000'} 
              data-ad-format="auto" 
              data-full-width-responsive="true"
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdBanner;
