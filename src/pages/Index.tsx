
import React from 'react';
import Footer from '@/components/Footer';
import IntroSection from '@/components/IntroSection';
import DoughCalculator from '@/components/DoughCalculator';
import AdBanner from '@/components/monetization/AdBanner';

const Index: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-background to-pizza-light/10">
      <main className="flex-grow container mx-auto px-4 py-6 md:py-10">
        <div className="max-w-3xl mx-auto">
          <IntroSection />
          <AdBanner />
          <DoughCalculator />
          <AdBanner />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
