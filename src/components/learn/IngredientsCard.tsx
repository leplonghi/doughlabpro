
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ChefHat } from 'lucide-react';
import { Ingredient } from './types';
import { getItemLabel } from './recipe-data/recipe-helpers';
import { Separator } from '@/components/ui/separator';

interface IngredientsCardProps {
  ingredients: Ingredient[];
  selectedType: string | null;
  quantity: number;
  compact?: boolean;
}

const IngredientsCard: React.FC<IngredientsCardProps> = ({ 
  ingredients, 
  selectedType, 
  quantity,
  compact = false
}) => {
  if (ingredients.length === 0) return null;

  return (
    <Card className={compact ? "mb-4" : "mb-8"}>
      <CardContent className={compact ? "pt-4 pb-2" : "pt-6"}>
        <h2 className={`${compact ? "text-lg" : "text-xl"} font-medium mb-4 flex items-center`}>
          <ChefHat className="mr-2 h-5 w-5" />
          Ingredients
        </h2>
        
        <div className={`grid ${compact ? "grid-cols-1 gap-2" : "grid-cols-1 md:grid-cols-2 gap-4"}`}>
          {ingredients.map((ing, idx) => (
            <div key={idx} className="flex justify-between items-center">
              <span>{ing.name}</span>
              <span className="font-medium">{ing.amount} {ing.unit}</span>
            </div>
          ))}
        </div>
        
        <div className={`${compact ? "mt-3" : "mt-4"} text-sm text-muted-foreground`}>
          <p>Recipe for {quantity} {getItemLabel(selectedType, quantity)}</p>
          {selectedType === 'pizza' && (
            <p className="mt-1">(about 10-12 inches each)</p>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default IngredientsCard;
