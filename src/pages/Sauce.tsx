
import * as React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AdBanner from '@/components/monetization/AdBanner';

const Sauce: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-white to-pizza-cream/30">
      <Header />
      
      <main className="flex-grow py-4 md:py-8">
        <div className="container mx-auto px-4">
          <AdBanner />
          <h1 className="text-4xl font-serif font-bold mb-6 mt-6">Pizza Sauces</h1>
          <p className="text-lg text-gray-700">
            Pro users only.
          </p>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Sauce;
