
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import IntroSection from '@/components/IntroSection';
import DoughCalculator from '@/components/DoughCalculator';

const Index: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-pizza-cream bg-opacity-30">
      <Header />
      
      <main className="flex-grow py-6">
        <IntroSection />
        <DoughCalculator />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
