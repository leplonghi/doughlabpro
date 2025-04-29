
import React from 'react';
import { Button } from '@/components/ui/button';
import { Pizza, Bed } from 'lucide-react';

type DoughType = 'pizza' | 'bread';

interface DoughTypeSelectorProps {
  doughType: DoughType;
  setDoughType: (type: DoughType) => void;
  onProceed: () => void;
}

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
          <Bed className="mr-2 h-5 w-5" />
          Bread
        </Button>
      </div>
      
      <p className="text-sm text-gray-600 mt-1">
        {doughType === 'pizza' 
          ? 'Pizza dough with various styles' 
          : 'Bread dough with different variations'}
      </p>
    </>
  );
};

export default DoughTypeSelector;
