
import React from 'react';
import { Button } from '@/components/ui/button';
import { Minus, Plus } from 'lucide-react';
import { Input } from '@/components/ui/input';

interface QuantitySelectorProps {
  numberOfItems: number;
  itemLabel: string;
  selectedType: string | null | undefined;
  onNumberChange: (count: number) => void;
}

const QuantitySelector: React.FC<QuantitySelectorProps> = ({
  numberOfItems,
  itemLabel,
  selectedType,
  onNumberChange
}) => {
  return (
    <div className="mb-8 p-6 bg-amber-50 rounded-lg border border-amber-200">
      <h4 className="text-lg font-medium mb-3 flex items-center">
        How many {itemLabel} do you want to make?
      </h4>
      <p className="text-muted-foreground mb-4">
        This will calculate the right amount of ingredients for your {itemLabel}.
      </p>
      <div className="flex items-center">
        <Button 
          variant="outline" 
          size="icon"
          onClick={() => onNumberChange(numberOfItems - 1)}
          disabled={numberOfItems <= 1}
        >
          <Minus className="h-4 w-4" />
        </Button>
        <Input 
          type="number" 
          className="w-16 mx-2 text-center"
          value={numberOfItems}
          onChange={(e) => onNumberChange(parseInt(e.target.value) || 2)}
          min={1}
          max={12}
        />
        <Button 
          variant="outline" 
          size="icon"
          onClick={() => onNumberChange(numberOfItems + 1)}
          disabled={numberOfItems >= 12}
        >
          <Plus className="h-4 w-4" />
        </Button>
        <span className="ml-3 text-gray-600">
          {itemLabel}
        </span>
      </div>
    </div>
  );
};

export default QuantitySelector;
