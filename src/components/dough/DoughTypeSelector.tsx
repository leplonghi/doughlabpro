
import React from 'react';
import { Button } from '@/components/ui/button';
import { Pizza, Wheat } from 'lucide-react';

interface DoughTypeSelectorProps {
  doughType: 'pizza' | 'bread';
  setDoughType: (type: 'pizza' | 'bread') => void;
  onProceed: () => void;
}

const DoughTypeSelector: React.FC<DoughTypeSelectorProps> = ({ 
  doughType, 
  setDoughType,
  onProceed
}) => {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Button
          variant={doughType === 'pizza' ? 'default' : 'outline'}
          className={`h-auto py-6 px-6 flex flex-col items-center ${
            doughType === 'pizza' 
              ? 'bg-primary text-white' 
              : 'bg-white hover:bg-gray-50'
          }`}
          onClick={() => setDoughType('pizza')}
        >
          <Pizza className="h-10 w-10 mb-2" />
          <span className="text-lg font-medium">Pizza Dough</span>
        </Button>
        
        <Button
          variant={doughType === 'bread' ? 'default' : 'outline'}
          className={`h-auto py-6 px-6 flex flex-col items-center ${
            doughType === 'bread' 
              ? 'bg-primary text-white' 
              : 'bg-white hover:bg-gray-50'
          }`}
          onClick={() => setDoughType('bread')}
        >
          <Wheat className="h-10 w-10 mb-2" />
          <span className="text-lg font-medium">Bread Dough</span>
        </Button>
      </div>
      
      <div className="flex justify-end">
        <Button 
          onClick={onProceed}
          variant="default" 
          className="px-5"
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default DoughTypeSelector;
