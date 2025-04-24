
import React from 'react';
import Footer from '@/components/Footer';
import IntroSection from '@/components/IntroSection';
import DoughCalculator from '@/components/DoughCalculator';
import AdBanner from '@/components/monetization/AdBanner';
import Header from '@/components/Header';

const Index: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow container mx-auto py-8 md:py-12">
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
