
import React from 'react';
import PageLayout from '@/components/layout/PageLayout';
import AdBanner from '@/components/monetization/AdBanner';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useAuth } from '@/context/AuthContext';
import { Lock, Calculator } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Sauce: React.FC = () => {
  const { user } = useAuth();
  const isPro = user?.user_metadata?.isPro || false;
  
  const sauces = [
    {
      name: "Neapolitan Raw Sauce",
      image: "/lovable-uploads/1a7e9690-7fcf-43cb-a119-2b7d22416a67.png",
      tags: ["Raw", "Tomato", "Classic"],
      description: "Authentic Neapolitan-style sauce with San Marzano tomatoes.",
      ingredients: [
        "1000g San Marzano tomatoes",
        "20g sea salt",
        "Fresh basil leaves"
      ],
      instructions: "Crush tomatoes by hand, add salt, and mix. Let sit for 30 minutes before using.",
      pairing: "Best for Neapolitan style pizzas."
    },
    {
      name: "New York Pizza Sauce",
      image: "/lovable-uploads/10240500-8679-4a2d-9667-7895246fe108.png",
      tags: ["Cooked", "Tomato", "Garlic"],
      description: "Rich, slow-cooked sauce perfect for New York style pizza.",
      ingredients: [
        "800g crushed tomatoes",
        "30g olive oil",
        "15g garlic, minced",
        "10g sugar",
        "5g dried oregano",
        "10g salt"
      ],
      instructions: "Sauté garlic in olive oil until fragrant. Add tomatoes, sugar, salt, and oregano. Simmer for 30-45 minutes until thickened.",
      pairing: "Ideal for New York and Detroit style pizzas."
    },
    {
      name: "White Cream Base",
      image: "/lovable-uploads/10240500-8679-4a2d-9667-7895246fe108.png",
      tags: ["White", "Cream", "Garlic"],
      description: "Creamy garlic base for white pizzas.",
      ingredients: [
        "500g heavy cream",
        "30g butter",
        "20g garlic, minced",
        "30g parmesan cheese",
        "5g salt",
        "2g black pepper",
        "Fresh thyme"
      ],
      instructions: "Melt butter, sauté garlic until golden. Add cream and reduce slightly. Stir in parmesan, salt, pepper, and thyme.",
      pairing: "Perfect for white pizzas with mushrooms, spinach, or chicken."
    }
  ];
  
  if (!isPro) {
    return (
      <PageLayout>
        <div className="container mx-auto px-4 py-8">
          <AdBanner />
          
          <div className="max-w-3xl mx-auto mt-6">
            <h1 className="text-3xl font-bold mb-4">Pizza Sauces</h1>
            
            <Card className="mb-6 border-yellow-200">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <Lock className="h-12 w-12 text-amber-500 mb-4" />
                <h2 className="text-xl font-semibold mb-2">PRO Feature</h2>
                <p className="text-gray-600 mb-4">
                  Access our complete collection of sauce recipes, from classic Neapolitan to gourmet white bases and specialty sauces.
                </p>
                <Button className="bg-black text-white font-medium rounded hover:bg-black/80">
                  Upgrade to PRO
                </Button>
              </CardContent>
            </Card>
            
            <p className="text-lg text-gray-700 mb-4">
              Upgrade to PRO to access our complete guide to pizza sauces, including:
            </p>
            
            <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-700">
              <li>✅ Traditional and modern sauce recipes</li>
              <li>🍅 Raw and cooked tomato sauce variations</li>
              <li>🧀 White bases and specialty sauces</li>
              <li>🧮 Sauce calculator for precise measurements</li>
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
          <h1 className="text-3xl font-bold mb-2">Pizza Sauces</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Perfect your pizza with these sauce recipes
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {sauces.map((sauce, index) => (
              <Card key={index} className="border hover:shadow-md transition-all overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={sauce.image} 
                    alt={sauce.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {sauce.tags.map((tag, i) => (
                      <Badge key={i} variant="secondary" className="bg-gray-100">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <h3 className="text-xl font-medium mb-2">{sauce.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{sauce.description}</p>
                  
                  <div className="mt-4">
                    <h4 className="font-medium mb-2">Ingredients:</h4>
                    <ul className="list-disc pl-5 space-y-1 mb-4 text-sm">
                      {sauce.ingredients.map((ingredient, i) => (
                        <li key={i}>{ingredient}</li>
                      ))}
                    </ul>
                    
                    <h4 className="font-medium mb-2">Instructions:</h4>
                    <p className="text-sm mb-4">{sauce.instructions}</p>
                    
                    <div className="text-sm italic text-gray-600">
                      {sauce.pairing}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-12 bg-blue-50 p-6 rounded-lg border border-blue-100">
            <div className="flex items-start">
              <Calculator className="h-5 w-5 mr-3 mt-1 text-blue-600" />
              <div>
                <h2 className="text-xl font-medium mb-2">Sauce Calculator</h2>
                <p className="mb-4">
                  Calculate the exact amount of sauce needed based on your number of pizzas.
                </p>
                <p className="text-sm text-muted-foreground">
                  Coming soon! In our next update, you'll be able to adjust quantities automatically.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Sauce;
