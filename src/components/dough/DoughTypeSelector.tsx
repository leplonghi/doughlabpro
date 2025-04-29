
import React from 'react';
import { Button } from '@/components/ui/button';
import { Pizza } from 'lucide-react';

type DoughType = 'pizza' | 'bread';

interface DoughTypeSelectorProps {
  doughType: DoughType;
  setDoughType: (type: DoughType) => void;
  onProceed: () => void;
}

const BreadIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide"
  >
    <path d="M8 8h.01" />
    <path d="M12 8h.01" />
    <path d="M16 8h.01" />
    <path d="M19 4H5a3 3 0 0 0-3 3v.2c0 1.2.7 2.3 1.8 2.8L6 11c1.5.7 3.1.7 4.6 0l1.4-.7c1.2-.6 2.6-.6 3.8 0l1.4.7c1.5.7 3.1.7 4.6 0l2.2-1c1.1-.5 1.8-1.6 1.8-2.8V7a3 3 0 0 0-3-3z" />
    <path d="M20 11.8V16a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3v-4.2" />
  </svg>
);

const DoughTypeSelector: React.FC<DoughTypeSelectorProps> = ({
  doughType,
  setDoughType,
  onProceed
}) => {
  return (
    <>
      <div className="grid grid-cols-2 gap-3">
        <Button 
          variant={doughType === 'pizza' ? 'default' : 'outline'} 
          className="h-12 justify-center" 
          onClick={() => {
            setDoughType('pizza');
            onProceed();
          }}
        >
          <Pizza className="mr-2 h-5 w-5" />
          Pizza
        </Button>
        <Button 
          variant={doughType === 'bread' ? 'default' : 'outline'} 
          className="h-12 justify-center" 
          onClick={() => {
            setDoughType('bread');
            onProceed();
          }}
        >
          <BreadIcon className="mr-2 h-5 w-5" />
          Bread
        </Button>
      </div>
      
      <p className="text-sm text-gray-600 mt-1">
        {doughType === 'pizza' 
          ? "Pizza dough, crafted for high-temperature or home baking with iconic styles. Choose between Neapolitan, New York, or Deep Dish to match your taste and baking method."
          : "Artisanal bread dough with a variety of fermentation methods and hydration profiles. Select from classic styles like Baguette, Ciabatta, or Whole Wheat to begin your recipe."}
      </p>
    </>
  );
};

export default DoughTypeSelector;
