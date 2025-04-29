
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
    <div className="grid grid-cols-3 gap-3">
      <Button 
        variant={pizzaStyle === 'napoletana' ? 'default' : 'outline'} 
        className="h-12 justify-center" 
        onClick={() => {
          setPizzaStyle('napoletana');
          onProceed();
        }}
      >
        Neapolitan
      </Button>
      <Button 
        variant={pizzaStyle === 'newyork' ? 'default' : 'outline'} 
        className="h-12 justify-center" 
        onClick={() => {
          setPizzaStyle('newyork');
          onProceed();
        }}
      >
        New York
      </Button>
      <Button 
        variant={pizzaStyle === 'focaccia' ? 'default' : 'outline'} 
        className="h-12 justify-center" 
        onClick={() => {
          setPizzaStyle('focaccia');
          onProceed();
        }}
      >
        Focaccia
      </Button>
    </div>
  );
};

export default PizzaStyleSelector;
