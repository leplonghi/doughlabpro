
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
    <div className="grid grid-cols-2 gap-4">
      <Button 
        variant={pizzaStyle === 'napoletana' ? 'default' : 'outline'} 
        className={`h-14 justify-center transition-all duration-200 ${
          pizzaStyle === 'napoletana' 
            ? 'shadow-sm' 
            : 'bg-white hover:bg-gray-50'
        }`}
        onClick={() => {
          setPizzaStyle('napoletana');
          onProceed();
        }}
      >
        <div className="flex flex-col items-center">
          <span className="text-base">Neapolitan</span>
          <span className="text-xs opacity-75">Traditional Italian</span>
        </div>
      </Button>
      <Button 
        variant={pizzaStyle === 'newyork' ? 'default' : 'outline'} 
        className={`h-14 justify-center transition-all duration-200 ${
          pizzaStyle === 'newyork' 
            ? 'shadow-sm' 
            : 'bg-white hover:bg-gray-50'
        }`}
        onClick={() => {
          setPizzaStyle('newyork');
          onProceed();
        }}
      >
        <div className="flex flex-col items-center">
          <span className="text-base">New York</span>
          <span className="text-xs opacity-75">Classic American</span>
        </div>
      </Button>
    </div>
  );
};

export default PizzaStyleSelector;
