
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import DoughCalculator from '@/components/DoughCalculator';
import IntroCollapsible from '@/components/IntroCollapsible';

const Index: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-pizza-cream bg-opacity-30">
      <Header />
      
      <main className="flex-grow py-6 px-4">
        <div className="max-w-3xl mx-auto">
          <IntroCollapsible />
          <div className="mt-6">
            <DoughCalculator />
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
