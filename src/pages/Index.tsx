import React from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '@/components/layout/PageLayout';
import { Button } from '@/components/ui/button';
import { ChefHat, FlaskConical, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import AdBanner from '@/components/monetization/AdBanner';
import { useAuth } from '@/context/AuthContext';

const Index: React.FC = () => {
  const { user } = useAuth();
  
  const doughTypes = [
    { name: 'Pizza', icon: '🍕', description: 'Classic, Neapolitan, NY Style' },
    { name: 'Bread', icon: '🍞', description: 'Artisan, Sandwich, Baguette' },
    { name: 'Focaccia', icon: '🫓', description: 'Classic Italian flatbread' },
    { name: 'Brioche', icon: '🥐', description: 'Enriched, buttery bread' },
    { name: 'Bagel', icon: '🥯', description: 'NY style, dense & chewy' },
    { name: 'Sourdough', icon: '🥖', description: 'Wild yeast fermentation' }
  ];
  
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="px-4 py-16 md:py-24 max-w-7xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
          Master Every Dough – Whether You're Starting or Scaling
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-12">
          From your first focaccia to your perfect sourdough. DoughLab Pro guides, calculates, and teaches.
        </p>
        
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <Card className="border-green-200 hover:border-green-300 transition-all hover:shadow-md">
            <CardContent className="p-8 flex flex-col items-center">
              <ChefHat className="h-12 w-12 text-green-500 mb-4" />
              <h2 className="text-xl font-semibold mb-2">I'm a Beginner</h2>
              <p className="text-muted-foreground mb-6">
                Learn step-by-step with guided recipes and timers. Perfect for your first few bakes.
              </p>
              <Button asChild className="bg-green-500 hover:bg-amber-600">
                <Link to="/learn">
                  Start Learning
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
          
          <Card className="border-red-200 hover:border-red-300 transition-all hover:shadow-md">
            <CardContent className="p-8 flex flex-col items-center">
              <FlaskConical className="h-12 w-12 text-red-500 mb-4" />
              <h2 className="text-xl font-semibold mb-2">I'm Experienced</h2>
              <p className="text-muted-foreground mb-6">
                Fine-tune hydration, fermentation, and baker's percentages with precision tools.
              </p>
              <Button asChild className="bg-red-500 hover:bg-red-600">
                <Link to="/calculator">
                  To The Calculator
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
      
      {/* Ad Banner */}
      <AdBanner />
      
      {/* What Can You Make Section */}
      <section className="px-4 py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">What Can You Make?</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {doughTypes.map((type) => (
              <Card key={type.name} className="border hover:shadow-md transition-all">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="text-4xl mb-3">{type.icon}</div>
                  <h3 className="font-medium mb-1">{type.name}</h3>
                  <p className="text-xs text-muted-foreground">{type.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Dual Path Explainer */}
      <section className="px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Choose Your Path</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex flex-col items-center text-center p-6 rounded-lg bg-amber-50">
              <div className="bg-amber-100 p-4 rounded-full mb-4">
                <ChefHat className="h-8 w-8 text-amber-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Beginner Mode</h3>
              <ul className="space-y-2 text-left mt-4">
                <li className="flex items-center">
                  <span className="bg-green-100 text-green-800 p-1 rounded-full mr-2">✓</span>
                  Step-by-step guided baking
                </li>
                <li className="flex items-center">
                  <span className="bg-green-100 text-green-800 p-1 rounded-full mr-2">✓</span>
                  Built-in timers and checklists
                </li>
                <li className="flex items-center">
                  <span className="bg-green-100 text-green-800 p-1 rounded-full mr-2">✓</span>
                  Simple starter recipes
                </li>
                <li className="flex items-center">
                  <span className="bg-green-100 text-green-800 p-1 rounded-full mr-2">✓</span>
                  In-context help with DoughGuide
                </li>
              </ul>
            </div>
            
            <div className="flex flex-col items-center text-center p-6 rounded-lg bg-blue-50">
              <div className="bg-blue-100 p-4 rounded-full mb-4">
                <FlaskConical className="h-8 w-8 text-blue-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Pro Mode</h3>
              <ul className="space-y-2 text-left mt-4">
                <li className="flex items-center">
                  <span className="bg-green-100 text-green-800 p-1 rounded-full mr-2">✓</span>
                  Advanced baker's percentages
                </li>
                <li className="flex items-center">
                  <span className="bg-green-100 text-green-800 p-1 rounded-full mr-2">✓</span>
                  Preferment calculations (poolish, biga)
                </li>
                <li className="flex items-center">
                  <span className="bg-green-100 text-green-800 p-1 rounded-full mr-2">✓</span>
                  Fine-tune every aspect of your dough
                </li>
                <li className="flex items-center">
                  <span className="bg-green-100 text-green-800 p-1 rounded-full mr-2">✓</span>
                  Temperature and environment adjustments
                </li>
              </ul>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Button asChild className="bg-black text-white hover:bg-gray-800">
              <Link to="/school">
                Learn from scratch in Dough School
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="px-4 py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">What Bakers Say</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border">
              <CardContent className="p-6">
                <p className="mb-4 italic text-gray-600">
                  "DoughLab Pro transformed my pizza game. The calculator is spot-on every time."
                </p>
                <p className="font-medium">- Marco T.</p>
              </CardContent>
            </Card>
            
            <Card className="border">
              <CardContent className="p-6">
                <p className="mb-4 italic text-gray-600">
                  "As a beginner, the guided mode was exactly what I needed to make my first successful loaf."
                </p>
                <p className="font-medium">- Sarah K.</p>
              </CardContent>
            </Card>
            
            <Card className="border">
              <CardContent className="p-6">
                <p className="mb-4 italic text-gray-600">
                  "The AI assistant helped me troubleshoot when my dough wasn't rising. Problem solved!"
                </p>
                <p className="font-medium">- James L.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Second Ad Banner */}
      <AdBanner />
    </PageLayout>
  );
};

export default Index;
