
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, ArrowLeft } from 'lucide-react';

interface RecipeData {
  name: string;
  hydration: number;
  difficulty: string;
}

interface RecipeSelectionProps {
  recipes: RecipeData[];
  onSelectRecipe: (recipeName: string) => void;
  onGoBack: () => void;
}

const RecipeSelection: React.FC<RecipeSelectionProps> = ({ 
  recipes, 
  onSelectRecipe, 
  onGoBack 
}) => {
  return (
    <div className="mt-8">
      <h3 className="text-xl font-medium mb-6">Choose a recipe to get started:</h3>
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
