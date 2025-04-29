
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Toppings: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-white to-pizza-cream/30">
      <Header />
      
      <main className="flex-grow py-4 md:py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-serif font-bold mb-6">Toppings</h1>
          <p className="text-lg text-gray-700">
            Only for PRO users.
          </p>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Toppings;
