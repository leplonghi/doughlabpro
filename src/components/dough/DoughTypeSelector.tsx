
import React from 'react';
import { Button } from '@/components/ui/button';
import { Pizza, Bread } from 'lucide-react';

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
    <div className="grid grid-cols-2 gap-4">
      <Button
        variant={doughType === 'pizza' ? 'default' : 'outline'}
        className={`h-24 transition-all duration-300 ${
          doughType === 'pizza' 
            ? 'shadow-sm' 
            : 'bg-white hover:bg-gray-50'
        }`}
        onClick={() => {
          setDoughType('pizza');
          onProceed();
        }}
      >
        <div className="flex flex-col items-center">
          <div className="rounded-full bg-white p-2 mb-2">
            <Pizza 
              className={`h-10 w-10 ${doughType === 'pizza' ? 'text-primary' : 'text-gray-400'}`} 
            />
          </div>
          <span className="font-medium text-base">Pizza Dough</span>
        </div>
      </Button>
      <Button
        variant={doughType === 'bread' ? 'default' : 'outline'}
        className={`h-24 transition-all duration-300 ${
          doughType === 'bread' 
            ? 'shadow-sm' 
            : 'bg-white hover:bg-gray-50'
        }`}
        onClick={() => {
          setDoughType('bread');
          onProceed();
        }}
      >
        <div className="flex flex-col items-center">
          <div className="rounded-full bg-white p-2 mb-2">
            <Bread 
              className={`h-10 w-10 ${doughType === 'bread' ? 'text-primary' : 'text-gray-400'}`} 
            />
          </div>
          <span className="font-medium text-base">Bread Dough</span>
        </div>
      </Button>
    </div>
  );
};

export default DoughTypeSelector;
