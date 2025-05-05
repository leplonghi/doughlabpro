
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ChefHat } from 'lucide-react';
import { Ingredient } from './types';

interface IngredientsCardProps {
  ingredients: Ingredient[];
  selectedType: string | null;
  quantity: number;
}

const IngredientsCard: React.FC<IngredientsCardProps> = ({ 
  ingredients, 
  selectedType, 
  quantity 
}) => {
  if (ingredients.length === 0) return null;

  return (
    <Card className="mb-8">
      <CardContent className="pt-6">
        <h2 className="text-xl font-medium mb-4 flex items-center">
          <ChefHat className="mr-2 h-5 w-5" />
          Ingredients
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {ingredients.map((ing, idx) => (
            <div key={idx} className="flex justify-between items-center">
              <span>{ing.name}</span>
              <span className="font-medium">{ing.amount} {ing.unit}</span>
            </div>
          ))}
        </div>
        
        {selectedType === 'pizza' && (
          <div className="mt-4 text-sm text-muted-foreground">
            <p>Recipe for {quantity} {quantity === 1 ? 'pizza' : 'pizzas'} (about 10-12 inches each)</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default IngredientsCard;
