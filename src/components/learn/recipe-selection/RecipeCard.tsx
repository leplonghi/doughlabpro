
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Info } from 'lucide-react';
import { 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface RecipeCardProps {
  recipe: {
    name: string;
    hydration: number;
    difficulty: string;
    ballWeight?: number;
  };
  themeColor: string;
  selectedType: string | null;
  numberOfItems: number;
  itemLabel: string;
  difficultyInfo: Record<string, string>;
  hydrationInfo: string;
  onSelectRecipe: (recipeName: string) => void;
}

const RecipeCard: React.FC<RecipeCardProps> = ({
  recipe,
  themeColor,
  selectedType,
  numberOfItems,
  itemLabel,
  difficultyInfo,
  hydrationInfo,
  onSelectRecipe
}) => {
  // Get ball info if available
  const ballInfo = recipe.ballWeight ? `(${recipe.ballWeight}g balls)` : '';

  return (
    <Card 
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
        {ballInfo && (
          <p className="text-sm text-gray-500 mb-2">{ballInfo}</p>
        )}
        
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
        
        <Button className={`w-full bg-${themeColor}-500 hover:bg-${themeColor}-600`}>
          Select Recipe
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </CardContent>
    </Card>
  );
};

export default RecipeCard;
