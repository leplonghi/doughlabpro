
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
        <section className="hero-section container mx-auto px-4">
          <div className="hero-content">
            <h1 className="text-4xl md:text-5xl font-bold">Perfect Dough Every Time</h1>
            <p className="text-lg text-muted-foreground">Professional measures for home bakers and pizzaiolos</p>
            <Button asChild className="bg-black text-white font-medium rounded hover:bg-black/80 px-6 py-6">
              <Link to="/calculator">Start the Magic</Link>
            </Button>
          </div>
          
          <div className="hero-image">
            <img 
              src="/lovable-uploads/10240500-8679-4a2d-9667-7895246fe108.png" 
              alt="Perfect pizza dough" 
              className="rounded-lg w-full h-auto object-cover"
            />
          </div>
        </section>
        
        {/* Ad Banner */}
        <AdBanner />
        
        {/* Features Section */}
        <section className="py-16 bg-secondary">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center">Features</h2>
            
            <div className="feature-grid">
              <div className="feature-card">
                <div className="feature-icon">
                  <Utensils size={28} />
                </div>
                <h3 className="text-xl font-medium mb-2">Multiple Dough and Pizza Styles</h3>
                <p className="text-muted-foreground">From authentic Neapolitan to classic New York style to Brioche</p>
              </div>
              
              <div className="feature-card">
                <div className="feature-icon">
                  <Clock size={28} />
                </div>
                <h3 className="text-xl font-medium mb-2">Advanced Fermentation</h3>
                <p className="text-muted-foreground">Direct, Poolish, and Biga methods for optimal flavor</p>
              </div>
              
              <div className="feature-card">
                <div className="feature-icon">
                  <Calculator size={28} />
                </div>
                <h3 className="text-xl font-medium mb-2">Precise Calculations</h3>
                <p className="text-muted-foreground">Baker's percentages and exact measurements for consistency</p>
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
