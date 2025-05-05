
import React from 'react';
import { getItemLabel } from './recipe-data/recipe-helpers';
import { Button } from '@/components/ui/button';
import { Minus, Plus } from 'lucide-react';

interface RecipeHeaderProps {
  selectedType: string | null;
  selectedRecipe: string | null;
  quantity: number;
  onQuantityChange?: (newQuantity: number) => void;
}

const RecipeHeader: React.FC<RecipeHeaderProps> = ({ 
  selectedType, 
  selectedRecipe, 
  quantity,
  onQuantityChange
}) => {
  if (!selectedType || !selectedRecipe) return null;

  const handleQuantityChange = (delta: number) => {
    if (!onQuantityChange) return;
    
    // Calculate new quantity, ensuring it's between 1-12
    const newQuantity = Math.max(1, Math.min(12, quantity + delta));
    onQuantityChange(newQuantity);
  };

  return (
    <div className="p-4 bg-amber-50 border border-amber-200 rounded-md mb-8">
      <p className="font-medium text-lg">{selectedRecipe}</p>
      <div className="flex justify-between items-center mt-2">
        <p className="text-muted-foreground">
          Type: {selectedType.charAt(0).toUpperCase() + selectedType.slice(1)}
        </p>
        
        <div className="flex items-center">
          <p className="text-muted-foreground mr-2">
            Making:
          </p>
          
          {onQuantityChange && (
            <div className="flex items-center">
              <Button 
                variant="outline" 
                size="icon" 
                className="h-7 w-7"
                onClick={() => handleQuantityChange(-1)}
                disabled={quantity <= 1}
              >
                <Minus className="h-3 w-3" />
              </Button>
              
              <span className="mx-2 min-w-[20px] text-center">
                {quantity}
              </span>
              
              <Button 
                variant="outline"
                size="icon"
                className="h-7 w-7"
                onClick={() => handleQuantityChange(1)}
                disabled={quantity >= 12}
              >
                <Plus className="h-3 w-3" />
              </Button>
              
              <span className="ml-1 text-muted-foreground">
                {getItemLabel(selectedType, quantity)}
              </span>
            </div>
          )}
          
          {!onQuantityChange && (
            <p className="text-muted-foreground">
              {quantity} {getItemLabel(selectedType, quantity)}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default RecipeHeader;
