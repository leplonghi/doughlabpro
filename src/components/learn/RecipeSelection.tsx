
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { getItemLabel } from './recipe-data/recipe-helpers';
import RecipeCard from './recipe-selection/RecipeCard';
import QuantitySelector from './recipe-selection/QuantitySelector';
import RecipeInfoBanner from './recipe-selection/RecipeInfoBanner';

interface RecipeData {
  name: string;
  hydration: number;
  difficulty: string;
  defaultQuantity?: number;
  ballWeight?: number;
  fermentationHours?: number;
}

interface RecipeSelectionProps {
  recipes: RecipeData[];
  onSelectRecipe: (recipeName: string) => void;
  onGoBack: () => void;
  selectedType?: string | null;
  numberOfItems?: number;
  onNumberOfItemsChange?: (count: number) => void;
  itemLabel?: string;
  themeColor?: string;
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
  itemLabel = 'items',
  themeColor = 'green'
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
  const properItemLabel = getItemLabel(selectedType, numberOfItems);
  
  return (
    <div className="mt-8 space-y-6">
      <RecipeInfoBanner hydrationInfo={hydrationInfo} />

      {showQuantitySelector && (
        <QuantitySelector 
          numberOfItems={numberOfItems}
          itemLabel={properItemLabel}
          selectedType={selectedType}
          onNumberChange={handleNumberChange}
        />
      )}
      
      <h3 className="text-xl font-medium mb-2">Choose a recipe to get started:</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {recipes.map((recipe, index) => (
          <RecipeCard
            key={index}
            recipe={recipe}
            themeColor={themeColor}
            selectedType={selectedType}
            numberOfItems={numberOfItems}
            itemLabel={properItemLabel}
            difficultyInfo={difficultyInfo}
            hydrationInfo={hydrationInfo}
            onSelectRecipe={onSelectRecipe}
          />
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
