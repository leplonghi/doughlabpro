
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, ArrowLeft, Minus, Plus } from 'lucide-react';
import { Input } from '@/components/ui/input';

interface RecipeData {
  name: string;
  hydration: number;
  difficulty: string;
}

interface RecipeSelectionProps {
  recipes: RecipeData[];
  onSelectRecipe: (recipeName: string) => void;
  onGoBack: () => void;
  selectedType?: string | null;
  numberOfPies?: number;
  onNumberOfPiesChange?: (count: number) => void;
}

const RecipeSelection: React.FC<RecipeSelectionProps> = ({ 
  recipes, 
  onSelectRecipe, 
  onGoBack,
  selectedType,
  numberOfPies = 2,
  onNumberOfPiesChange
}) => {
  const handleNumberChange = (newCount: number) => {
    if (onNumberOfPiesChange) {
      if (newCount >= 1 && newCount <= 12) {
        onNumberOfPiesChange(newCount);
      }
    }
  };
  
  return (
    <div className="mt-8">
      <h3 className="text-xl font-medium mb-6">Choose a recipe to get started:</h3>

      {selectedType === 'pizza' && onNumberOfPiesChange && (
        <div className="mb-8 p-4 bg-amber-50 rounded-md">
          <h4 className="text-lg font-medium mb-3">How many pizzas do you want to make?</h4>
          <div className="flex items-center">
            <Button 
              variant="outline" 
              size="icon"
              onClick={() => handleNumberChange(numberOfPies - 1)}
              disabled={numberOfPies <= 1}
            >
              <Minus className="h-4 w-4" />
            </Button>
            <Input 
              type="number" 
              className="w-16 mx-2 text-center"
              value={numberOfPies}
              onChange={(e) => handleNumberChange(parseInt(e.target.value) || 2)}
              min={1}
              max={12}
            />
            <Button 
              variant="outline" 
              size="icon"
              onClick={() => handleNumberChange(numberOfPies + 1)}
              disabled={numberOfPies >= 12}
            >
              <Plus className="h-4 w-4" />
            </Button>
            <span className="ml-3 text-gray-600">
              {numberOfPies === 1 ? 'pizza' : 'pizzas'}
            </span>
          </div>
        </div>
      )}
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {recipes.map((recipe, index) => (
          <Card 
            key={index}
            className="border hover:shadow-md transition-all cursor-pointer"
            onClick={() => onSelectRecipe(recipe.name)}
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
      
      <div className="flex justify-start mt-8">
        <Button 
          variant="outline" 
          onClick={onGoBack}
          className="flex items-center"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Dough Types
        </Button>
      </div>
    </div>
  );
};

export default RecipeSelection;
