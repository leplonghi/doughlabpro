
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, ArrowLeft, Minus, Plus, Info } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { getItemLabel } from './recipe-data/recipe-helpers';

interface RecipeData {
  name: string;
  hydration: number;
  difficulty: string;
  defaultQuantity?: number;
}

interface RecipeSelectionProps {
  recipes: RecipeData[];
  onSelectRecipe: (recipeName: string) => void;
  onGoBack: () => void;
  selectedType?: string | null;
  numberOfItems?: number;
  onNumberOfItemsChange?: (count: number) => void;
  itemLabel?: string;
}

const difficultyInfo = {
  'Easy': 'Good for beginners with minimal techniques required.',
  'Medium': 'Some experience helpful but still approachable with clear instructions.',
  'Hard': 'More complex techniques that may require practice to master.'
};

const hydrationInfo = 'Hydration is the percentage of water relative to flour weight. Higher hydration creates a more open crumb structure but can be more difficult to handle.';

const RecipeSelection: React.FC<RecipeSelectionProps> = ({ 
  recipes, 
  onSelectRecipe, 
  onGoBack,
  selectedType,
  numberOfItems = 2,
  onNumberOfItemsChange,
  itemLabel = 'items'
}) => {
  const handleNumberChange = (newCount: number) => {
    if (onNumberOfItemsChange) {
      if (newCount >= 1 && newCount <= 12) {
        onNumberOfItemsChange(newCount);
      }
    }
  };

  // Determine if we should show the quantity selector
  const showQuantitySelector = selectedType && onNumberOfItemsChange;
  
  // Get the proper label based on the selected type and quantity
  const getProperItemLabel = (type: string | null | undefined, count: number) => {
    return getItemLabel(type, count);
  };
  
  return (
    <div className="mt-8 space-y-6">
      <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 mb-6">
        <h3 className="text-lg font-medium flex items-center text-blue-800">
          <Info className="mr-2 h-5 w-5" />
          Recipe Selection Guide
        </h3>
        <p className="mt-2 text-blue-700">
          Each recipe has a different difficulty level and hydration percentage. Beginners should start with "Easy" recipes, 
          which are more forgiving and require less technique.
        </p>
      </div>

      {showQuantitySelector && (
        <div className="mb-8 p-6 bg-amber-50 rounded-lg border border-amber-200">
          <h4 className="text-lg font-medium mb-3 flex items-center">
            How many {getProperItemLabel(selectedType, 2)} do you want to make?
          </h4>
          <p className="text-muted-foreground mb-4">
            This will calculate the right amount of ingredients for your {getProperItemLabel(selectedType, numberOfItems)}.
          </p>
          <div className="flex items-center">
            <Button 
              variant="outline" 
              size="icon"
              onClick={() => handleNumberChange(numberOfItems - 1)}
              disabled={numberOfItems <= 1}
            >
              <Minus className="h-4 w-4" />
            </Button>
            <Input 
              type="number" 
              className="w-16 mx-2 text-center"
              value={numberOfItems}
              onChange={(e) => handleNumberChange(parseInt(e.target.value) || 2)}
              min={1}
              max={12}
            />
            <Button 
              variant="outline" 
              size="icon"
              onClick={() => handleNumberChange(numberOfItems + 1)}
              disabled={numberOfItems >= 12}
            >
              <Plus className="h-4 w-4" />
            </Button>
            <span className="ml-3 text-gray-600">
              {getProperItemLabel(selectedType, numberOfItems)}
            </span>
          </div>
        </div>
      )}
      
      <h3 className="text-xl font-medium mb-2">Choose a recipe to get started:</h3>
      
      <div className="flex items-center mb-4">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger className="inline-flex items-center text-sm text-muted-foreground">
              <Info className="mr-1 h-4 w-4" /> What is hydration?
            </TooltipTrigger>
            <TooltipContent className="max-w-xs p-4">
              <p>{hydrationInfo}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {recipes.map((recipe, index) => {
          const itemLabel = getProperItemLabel(selectedType, numberOfItems);
          
          return (
            <Card 
              key={index}
              className="border hover:shadow-md transition-all cursor-pointer hover:scale-105"
              onClick={() => onSelectRecipe(recipe.name)}
            >
              <CardContent className="p-6">
                <h4 className="font-medium mb-2 text-lg">
                  {recipe.name}
                  {selectedType && numberOfItems > 0 && (
                    <span className="text-gray-500 font-normal"> ({numberOfItems} {itemLabel})</span>
                  )}
                </h4>
                
                <div className="space-y-3 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium">Hydration:</span>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger className="inline-flex items-center">
                          <span>{recipe.hydration}%</span>
                          <Info className="ml-1 h-4 w-4 text-muted-foreground" />
                        </TooltipTrigger>
                        <TooltipContent className="max-w-xs">
                          <p>{hydrationInfo}</p>
                          <p className="mt-1">
                            {recipe.hydration < 65 ? 'Lower hydration (under 65%) is easier to handle but produces a denser crumb.' : 
                             recipe.hydration > 70 ? 'Higher hydration (over 70%) creates an open, airy crumb but can be sticky and harder to work with.' :
                             'Medium hydration (65-70%) offers a good balance between workability and texture.'}
                          </p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                  
                  <div className="flex justify-between text-sm">
                    <span className="font-medium">Difficulty:</span>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger className="inline-flex items-center">
                          <span className={recipe.difficulty === 'Easy' ? 'text-green-600' : 
                                          recipe.difficulty === 'Medium' ? 'text-amber-600' : 'text-red-600'}>
                            {recipe.difficulty}
                          </span>
                          <Info className="ml-1 h-4 w-4 text-muted-foreground" />
                        </TooltipTrigger>
                        <TooltipContent className="max-w-xs">
                          <p>{difficultyInfo[recipe.difficulty as keyof typeof difficultyInfo]}</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                </div>
                
                <Button className="w-full bg-amber-500 hover:bg-amber-600">
                  Select Recipe
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          );
        })}
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
