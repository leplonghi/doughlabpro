import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
const Toppings: React.FC = () => {
  return <div className="flex flex-col min-h-screen bg-gradient-to-br from-white to-pizza-cream/30">
      <Header />
      
      <main className="flex-grow py-8 md:py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl base font-serif font-bold mb-6">Pizza Toppings</h1>
          
          <Card className="mb-6 border-yellow-200">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <Lock className="h-12 w-12 text-amber-500 mb-4" />
              <h2 className="text-xl font-semibold mb-2">PRO Feature</h2>
              <p className="text-gray-600 mb-4">
                Explore our complete guide to toppings, fillings, and layering — curated for every dough style, from pizzas to focaccias, brioches and more.
              </p>
              <Button className="bg-black text-white font-medium rounded hover:bg-black/80">
                Upgrade to PRO
              </Button>
            </CardContent>
          </Card>
          
          <p className="text-lg text-gray-700">
            Upgrade to PRO to access our complete guide to pizza toppings, including:
          </p>
          
          <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-700">
            <li>✅ Classic and modern combinations by dough type</li>
            <li>🌿 Seasonal and regional ingredient suggestions</li>
            <li>🔥 Layering and stuffing techniques for best bake results</li>
            <li>🇮🇹 Culinary traditions for pizza, focaccia, and enriched breads</li>
          </ul>
        </div>
      </main>
      
      <Footer />
    </div>;
};
export default Toppings;