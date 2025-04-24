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
  return <Card className="mt-4 overflow-hidden">
      <CardContent className="p-0">
        
      </CardContent>
    </Card>;
};
export default AdBanner;