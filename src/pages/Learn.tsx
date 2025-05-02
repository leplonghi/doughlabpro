
import React, { useState } from 'react';
import PageLayout from '@/components/layout/PageLayout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import AdBanner from '@/components/monetization/AdBanner';

type DoughType = 'pizza' | 'bread' | 'focaccia' | 'sourdough';

const Learn: React.FC = () => {
  const [selectedType, setSelectedType] = useState<DoughType | null>(null);
  const [step, setStep] = useState(1);
  
  const doughTypes = [
    { 
      id: 'pizza' as DoughType, 
      name: 'Pizza', 
      icon: '🍕', 
      description: 'Make perfect pizza dough for various styles' 
    },
    { 
      id: 'bread' as DoughType, 
      name: 'Bread', 
      icon: '🍞', 
      description: 'Bake delicious sandwich and artisan breads' 
    },
    { 
      id: 'focaccia' as DoughType, 
      name: 'Focaccia', 
      icon: '🫓', 
      description: 'Create light and airy flatbread with toppings' 
    },
    { 
      id: 'sourdough' as DoughType, 
      name: 'Sourdough', 
      icon: '🥖', 
      description: 'Master the art of wild yeast fermentation' 
    },
  ];
  
  const recipePresets = {
    pizza: [
      { name: 'Simple Neapolitan Pizza (2 pies)', hydration: 60, difficulty: 'Easy' },
      { name: 'New York Style Pizza (2 pies)', hydration: 65, difficulty: 'Medium' },
      { name: 'Thin Crispy Crust (4 small pies)', hydration: 55, difficulty: 'Easy' }
    ],
    bread: [
      { name: 'Basic White Sandwich Loaf', hydration: 65, difficulty: 'Easy' },
      { name: 'Crusty Artisan Bread', hydration: 75, difficulty: 'Medium' },
      { name: 'Multigrain Bread', hydration: 70, difficulty: 'Medium' }
    ],
    focaccia: [
      { name: 'Classic Rosemary Focaccia', hydration: 75, difficulty: 'Easy' },
      { name: 'Cherry Tomato & Herb Focaccia', hydration: 80, difficulty: 'Medium' },
      { name: 'Olive & Garlic Focaccia', hydration: 78, difficulty: 'Easy' }
    ],
    sourdough: [
      { name: 'Beginner\'s Sourdough Loaf', hydration: 70, difficulty: 'Medium' },
      { name: 'Rustic Country Loaf', hydration: 75, difficulty: 'Hard' },
      { name: 'Sourdough Sandwich Bread', hydration: 65, difficulty: 'Medium' }
    ]
  };
  
  const renderStepContent = () => {
    if (step === 1) {
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {doughTypes.map((type) => (
            <Card 
              key={type.id}
              className={`border hover:shadow-md transition-all cursor-pointer ${
                selectedType === type.id ? 'border-amber-500 ring-2 ring-amber-500 bg-amber-50' : ''
              }`}
              onClick={() => setSelectedType(type.id)}
            >
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="text-5xl mb-4">{type.icon}</div>
                <h3 className="text-xl font-medium mb-2">{type.name}</h3>
                <p className="text-sm text-muted-foreground">{type.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      );
    }
    
    if (step === 2 && selectedType) {
      return (
        <div className="mt-8">
          <h3 className="text-xl font-medium mb-6">Choose a recipe to get started:</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recipePresets[selectedType].map((recipe, index) => (
              <Card 
                key={index}
                className="border hover:shadow-md transition-all cursor-pointer"
                onClick={() => setStep(3)}
              >
                <CardContent className="p-6">
                  <h4 className="font-medium mb-2">{recipe.name}</h4>
                  <div className="flex justify-between text-sm text-muted-foreground mb-4">
                    <span>Hydration: {recipe.hydration}%</span>
                    <span>Difficulty: {recipe.difficulty}</span>
                  </div>
                  <Button className="w-full bg-amber-500 hover:bg-amber-600">
                    Select Recipe
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      );
    }
    
    if (step === 3) {
      return (
        <div className="mt-8 max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <p className="text-sm text-muted-foreground mb-2">Coming soon!</p>
            <h3 className="text-xl font-medium">Step-by-step guided baking experience</h3>
            <p className="mt-4">
              The complete guided journey will include detailed steps with timers, checkpoints,
              in-context help, and visual guides for each stage of the baking process.
            </p>
          </div>
          
          <div className="flex justify-center">
            <Button onClick={() => setStep(1)} variant="outline" className="mr-4">
              Start Over
            </Button>
            <Button asChild className="bg-blue-500 hover:bg-blue-600">
              <a href="/calculator">Switch to Pro Mode</a>
            </Button>
          </div>
        </div>
      );
    }
    
    return null;
  };
  
  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-8">
        <AdBanner />
        
        <div className="max-w-5xl mx-auto mt-8">
          <div className="flex items-center mb-8">
            <div 
              className={`rounded-full w-8 h-8 flex items-center justify-center mr-2 ${
                step >= 1 ? 'bg-amber-500 text-white' : 'bg-gray-200'
              }`}
            >
              1
            </div>
            <div className={`h-1 w-16 ${step >= 2 ? 'bg-amber-500' : 'bg-gray-200'}`}></div>
            <div 
              className={`rounded-full w-8 h-8 flex items-center justify-center mx-2 ${
                step >= 2 ? 'bg-amber-500 text-white' : 'bg-gray-200'
              }`}
            >
              2
            </div>
            <div className={`h-1 w-16 ${step >= 3 ? 'bg-amber-500' : 'bg-gray-200'}`}></div>
            <div 
              className={`rounded-full w-8 h-8 flex items-center justify-center ml-2 ${
                step >= 3 ? 'bg-amber-500 text-white' : 'bg-gray-200'
              }`}
            >
              3
            </div>
          </div>
          
          <h1 className="text-3xl font-bold mb-4">
            {step === 1 && "What do you want to make?"}
            {step === 2 && selectedType && `Choose your ${selectedType} recipe`}
            {step === 3 && "Let's start baking!"}
          </h1>
          
          {renderStepContent()}
        </div>
      </div>
    </PageLayout>
  );
};

export default Learn;
