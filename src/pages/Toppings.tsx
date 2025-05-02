
import React, { useState } from 'react';
import PageLayout from '@/components/layout/PageLayout';
import AdBanner from '@/components/monetization/AdBanner';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useAuth } from '@/context/AuthContext';
import { Lock, Plus, Pizza } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';

const Toppings: React.FC = () => {
  const { user } = useAuth();
  const isPro = user?.user_metadata?.isPro || false;
  const [pizzaStyle, setPizzaStyle] = useState('neapolitan');
  const [numberOfPizzas, setNumberOfPizzas] = useState(2);
  
  const toppingCombos = [
    {
      name: "Classic Margherita",
      image: "/lovable-uploads/1a7e9690-7fcf-43cb-a119-2b7d22416a67.png",
      style: "Neapolitan",
      description: "The quintessential Neapolitan pizza with simple, quality ingredients.",
      ingredients: [
        { name: "San Marzano Tomato Sauce", grams: 80 },
        { name: "Fresh Mozzarella (Fior di Latte)", grams: 100 },
        { name: "Fresh Basil Leaves", grams: 5 },
        { name: "Extra Virgin Olive Oil", grams: 10 },
        { name: "Sea Salt", grams: 1 }
      ]
    },
    {
      name: "New York Pepperoni",
      image: "/lovable-uploads/10240500-8679-4a2d-9667-7895246fe108.png",
      style: "New York",
      description: "The iconic New York-style pepperoni pizza with rich sauce and crispy pepperoni.",
      ingredients: [
        { name: "New York Pizza Sauce", grams: 100 },
        { name: "Low-Moisture Mozzarella", grams: 140 },
        { name: "Pepperoni", grams: 50 },
        { name: "Dried Oregano", grams: 1 }
      ]
    },
    {
      name: "White Ricotta & Garlic",
      image: "/lovable-uploads/1a7e9690-7fcf-43cb-a119-2b7d22416a67.png",
      style: "Sicilian",
      description: "A garlic-forward white pizza with creamy ricotta and herbs.",
      ingredients: [
        { name: "Garlic-Infused Olive Oil", grams: 20 },
        { name: "Fresh Ricotta", grams: 100 },
        { name: "Mozzarella", grams: 80 },
        { name: "Fresh Thyme", grams: 2 },
        { name: "Cracked Black Pepper", grams: 1 }
      ]
    }
  ];
  
  if (!isPro) {
    return (
      <PageLayout>
        <div className="container mx-auto px-4 py-8">
          <AdBanner />
          
          <div className="max-w-3xl mx-auto mt-6">
            <h1 className="text-3xl font-bold mb-4">Pizza Toppings</h1>
            
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
        </div>
      </PageLayout>
    );
  }
  
  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-8">
        <AdBanner />
        
        <div className="max-w-6xl mx-auto mt-6">
          <h1 className="text-3xl font-bold mb-2">Pizza Toppings</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Perfect combinations for delicious pizza
          </p>
          
          {/* Selector Controls */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="w-full md:w-1/2">
              <label className="block text-sm font-medium mb-2">Pizza Style</label>
              <Select value={pizzaStyle} onValueChange={setPizzaStyle}>
                <SelectTrigger>
                  <SelectValue placeholder="Select style" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="neapolitan">Neapolitan</SelectItem>
                  <SelectItem value="new-york">New York</SelectItem>
                  <SelectItem value="sicilian">Sicilian</SelectItem>
                  <SelectItem value="detroit">Detroit</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="w-full md:w-1/2">
              <label className="block text-sm font-medium mb-2">Number of Pizzas</label>
              <Input 
                type="number" 
                min="1" 
                max="10" 
                value={numberOfPizzas} 
                onChange={(e) => setNumberOfPizzas(Number(e.target.value))}
              />
            </div>
          </div>
          
          {/* Topping Combos */}
          <h2 className="text-xl font-medium mb-4">Curated Topping Combinations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4 mb-10">
            {toppingCombos.map((combo, index) => (
              <Card key={index} className="border hover:shadow-md transition-all overflow-hidden">
                <div className="h-40 overflow-hidden">
                  <img 
                    src={combo.image} 
                    alt={combo.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <Badge variant="secondary" className="bg-gray-100 mb-2">
                    {combo.style}
                  </Badge>
                  <h3 className="text-xl font-medium mb-2">{combo.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{combo.description}</p>
                  
                  <div className="mt-4">
                    <h4 className="font-medium mb-2">Ingredients (per pizza):</h4>
                    <ul className="space-y-1 mb-4">
                      {combo.ingredients.map((ingredient, i) => (
                        <li key={i} className="flex justify-between text-sm">
                          <span>{ingredient.name}</span>
                          <span className="font-medium">
                            {ingredient.grams}g × {numberOfPizzas} = {ingredient.grams * numberOfPizzas}g
                          </span>
                        </li>
                      ))}
                    </ul>
                    
                    <Button className="w-full bg-amber-500 hover:bg-amber-600">
                      <Plus className="h-4 w-4 mr-2" />
                      Add to My Bake
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Build Your Own */}
          <div className="mt-12 bg-blue-50 p-6 rounded-lg border border-blue-100">
            <div className="flex items-start">
              <Pizza className="h-5 w-5 mr-3 mt-1 text-blue-600" />
              <div>
                <h2 className="text-xl font-medium mb-2">Build Your Own Combination</h2>
                <p className="mb-4">
                  Create and save your own signature topping blends with custom measurements.
                </p>
                <p className="text-sm text-muted-foreground">
                  Coming soon! In our next update, you'll be able to create custom topping combinations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Toppings;
