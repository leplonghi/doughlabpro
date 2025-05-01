
import * as React from 'react';
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
    <div className="bg-white py-[3px]">
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
              data-ad-client="ca-pub-2467788380843491" 
              data-ad-slot="0000000000" 
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
