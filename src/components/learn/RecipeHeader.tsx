
import React from 'react';
import { getItemLabel } from './recipe-data/recipe-helpers';

interface RecipeHeaderProps {
  selectedType: string | null;
  selectedRecipe: string | null;
  quantity: number;
}

const RecipeHeader: React.FC<RecipeHeaderProps> = ({ 
  selectedType, 
  selectedRecipe, 
  quantity 
}) => {
  if (!selectedType || !selectedRecipe) return null;

  return (
    <div className="p-4 bg-amber-50 border border-amber-200 rounded-md mb-8">
      <p className="font-medium text-lg">{selectedRecipe}</p>
      <div className="flex justify-between text-sm mt-2">
        <p className="text-muted-foreground">
          Type: {selectedType.charAt(0).toUpperCase() + selectedType.slice(1)}
        </p>
        <p className="text-muted-foreground">
          Making: {quantity} {getItemLabel(selectedType, quantity)}
        </p>
      </div>
    </div>
  );
};

export default RecipeHeader;
