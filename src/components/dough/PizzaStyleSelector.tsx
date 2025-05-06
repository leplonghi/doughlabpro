
import React from 'react';
import { Button } from '@/components/ui/button';
import { PizzaStyle } from '@/components/PizzaStyleSelect';

interface PizzaStyleSelectorProps {
  pizzaStyle: PizzaStyle;
  setPizzaStyle: (style: PizzaStyle) => void;
  onProceed: () => void;
}

const PizzaStyleSelector: React.FC<PizzaStyleSelectorProps> = ({
  pizzaStyle,
  setPizzaStyle,
  onProceed
}) => {
  return (
    <div className="grid grid-cols-2 gap-3">
      <Button 
        variant={pizzaStyle === 'napoletana' ? 'default' : 'outline'} 
        className={`h-12 justify-center ${pizzaStyle === 'napoletana' ? 'bg-red-500 hover:bg-red-600' : 'bg-white hover:bg-red-50 border-red-200'}`}
        onClick={() => {
          setPizzaStyle('napoletana');
          onProceed();
        }}
      >
        Neapolitan
      </Button>
      <Button 
        variant={pizzaStyle === 'newyork' ? 'default' : 'outline'} 
        className={`h-12 justify-center ${pizzaStyle === 'newyork' ? 'bg-red-500 hover:bg-red-600' : 'bg-white hover:bg-red-50 border-red-200'}`}
        onClick={() => {
          setPizzaStyle('newyork');
          onProceed();
        }}
      >
        New York
      </Button>
    </div>
  );
};

export default PizzaStyleSelector;
