
import React from 'react';
import { Button } from '@/components/ui/button';
import { FermentationMethod } from '@/types/dough';
import FermentationInfo from './FermentationInfo';
import { Clock, Leaf, Gauge } from 'lucide-react';

interface FermentationMethodSelectorProps {
  fermentationMethod: FermentationMethod;
  setFermentationMethod: (method: FermentationMethod) => void;
  onProceed: () => void;
}

const FermentationMethodSelector: React.FC<FermentationMethodSelectorProps> = ({
  fermentationMethod,
  setFermentationMethod,
  onProceed
}) => {
  return (
    <>
      <div className="grid grid-cols-3 gap-4">
        <Button 
          variant={fermentationMethod === 'direct' ? 'default' : 'outline'} 
          className={`h-16 justify-center transition-all duration-200 ${
            fermentationMethod === 'direct' 
              ? 'shadow-sm' 
              : 'bg-white hover:bg-gray-50'
          }`}
          onClick={() => {
            setFermentationMethod('direct');
            onProceed();
          }}
        >
          <div className="flex flex-col items-center">
            <Clock className="h-5 w-5 mb-1" />
            <span className="text-base">Direct</span>
            <span className="text-xs opacity-75">Simple & Fast</span>
          </div>
        </Button>
        <Button 
          variant={fermentationMethod === 'poolish' ? 'default' : 'outline'} 
          className={`h-16 justify-center transition-all duration-200 ${
            fermentationMethod === 'poolish' 
              ? 'shadow-sm' 
              : 'bg-white hover:bg-gray-50'
          }`}
          onClick={() => {
            setFermentationMethod('poolish');
            onProceed();
          }}
        >
          <div className="flex flex-col items-center">
            <Leaf className="h-5 w-5 mb-1" />
            <span className="text-base">Poolish</span>
            <span className="text-xs opacity-75">Wet Pre-ferment</span>
          </div>
        </Button>
        <Button 
          variant={fermentationMethod === 'biga' ? 'default' : 'outline'} 
          className={`h-16 justify-center transition-all duration-200 ${
            fermentationMethod === 'biga' 
              ? 'shadow-sm' 
              : 'bg-white hover:bg-gray-50'
          }`}
          onClick={() => {
            setFermentationMethod('biga');
            onProceed();
          }}
        >
          <div className="flex flex-col items-center">
            <Gauge className="h-5 w-5 mb-1" />
            <span className="text-base">Biga</span>
            <span className="text-xs opacity-75">Dry Pre-ferment</span>
          </div>
        </Button>
      </div>
      
      <FermentationInfo fermentationMethod={fermentationMethod} />
    </>
  );
};

export default FermentationMethodSelector;
