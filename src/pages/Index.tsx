
import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import AdBanner from '@/components/monetization/AdBanner';
import { Button } from '@/components/ui/button';
import { Clock, Utensils, Calculator } from 'lucide-react';

const Index: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-12 md:py-16 grid md:grid-cols-2 gap-6 md:gap-12 items-center">
          <div className="hero-content order-2 md:order-1">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Master Every Dough. Bake with Precision.</h1>
            <p className="text-lg text-muted-foreground mb-8">Smart dough calculator for pizza makers, bread lovers, and artisan bakers.</p>
            <Button asChild className="bg-black text-white font-medium rounded hover:bg-black/80 px-6 py-6">
              <Link to="/calculator">Let’s Bake!</Link>
            </Button>
          </div>
          
          <div className="hero-image order-1 md:order-2">
            <img 
              src="https://oojhhvutzzkvugizucks.supabase.co/storage/v1/object/public/imagens//ChatGPT%20Image%2029%20de%20abr.%20de%202025,%2011_50_01.png" 
              alt="Fresh bread and baking" 
              className="rounded-lg w-full h-auto object-cover shadow-lg"
            />
          </div>
        </section>
        
        {/* Ad Banner */}
        <AdBanner />
        
        {/* Features Section */}
        <section className="py-16 bg-secondary">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Features</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-black/10 rounded-full flex items-center justify-center mb-4">
                  <Utensils size={24} />
                </div>
                <h3 className="text-xl font-medium mb-2">Multiple Dough Styles</h3>
                <p className="text-muted-foreground">From Neapolitan pizza to focaccia, ciabatta, brioche and more — all styles, one formula engine.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-black/10 rounded-full flex items-center justify-center mb-4">
                  <Clock size={24} />
                </div>
                <h3 className="text-xl font-medium mb-2">Advanced Fermentation</h3>
                <p className="text-muted-foreground">Explore Direct, Poolish and Biga methods for deeper flavor and better structure.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-black/10 rounded-full flex items-center justify-center mb-4">
                  <Calculator size={24} />
                </div>
                <h3 className="text-xl font-medium mb-2">Baker’s Math Made Easy</h3>
                <p className="text-muted-foreground">Exact measurements and hydration logic — just input and bake.</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Second Ad Banner */}
        <AdBanner />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
