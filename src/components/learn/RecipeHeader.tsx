
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Minus, Plus } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { getItemLabel } from './recipe-data/recipe-helpers';
import { RecipeHeaderProps } from './types';

const RecipeHeader: React.FC<RecipeHeaderProps> = ({ 
  selectedType, 
  selectedRecipe,
  quantity,
  onQuantityChange 
}) => {
  const handleQuantityChange = (newQuantity: number) => {
    if (onQuantityChange && newQuantity >= 1 && newQuantity <= 12) {
      onQuantityChange(newQuantity);
    }
  };
  
  const itemLabel = getItemLabel(selectedType, quantity);
  
  return (
    <div className="mb-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-4">
        <div>
          <h1 className="text-2xl font-bold">{selectedRecipe}</h1>
          <p className="text-muted-foreground">{selectedType} dough</p>
        </div>
        
        {onQuantityChange && (
          <div className="flex items-center bg-gray-50 p-2 rounded-lg border border-gray-200">
            <span className="text-sm font-medium mr-2">Quantity:</span>
            <Button 
              variant="outline" 
              size="icon"
              className="h-8 w-8"
              onClick={() => handleQuantityChange(quantity - 1)}
              disabled={quantity <= 1}
            >
              <Minus className="h-3 w-3" />
            </Button>
            <Input 
              type="number" 
              className="w-12 mx-1 h-8 text-center p-1"
              value={quantity}
              onChange={(e) => handleQuantityChange(parseInt(e.target.value) || 1)}
              min={1}
              max={12}
            />
            <Button 
              variant="outline" 
              size="icon"
              className="h-8 w-8"
              onClick={() => handleQuantityChange(quantity + 1)}
              disabled={quantity >= 12}
            >
              <Plus className="h-3 w-3" />
            </Button>
            <span className="ml-2 text-sm">{itemLabel}</span>
          </div>
        )}
      </div>
      
      <div className="flex flex-wrap gap-2">
        <Badge variant="outline" className="bg-blue-50 hover:bg-blue-50">
          {selectedType === 'pizza' ? `${quantity} ${quantity === 1 ? 'pizza' : 'pizzas'} • ~250g each` : 
            selectedType === 'bread' ? `${quantity} ${quantity === 1 ? 'loaf' : 'loaves'} • ~500g each` :
            selectedType === 'focaccia' ? `${quantity} focaccia • ~500g ${quantity === 1 ? 'sheet' : 'sheets'}` :
            selectedType === 'sourdough' ? `${quantity} ${quantity === 1 ? 'loaf' : 'loaves'} • ~800g each` :
            `${quantity} ${quantity === 1 ? 'item' : 'items'}`
          }
        </Badge>
      </div>
    </div>
  );
};

export default RecipeHeader;
