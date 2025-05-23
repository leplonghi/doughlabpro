
import React from 'react';
import { Button } from '@/components/ui/button';
import { FermentationMethod } from '@/types/dough';
import FermentationInfo from './FermentationInfo';

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
      <div className="grid grid-cols-3 gap-3">
        <Button 
          variant={fermentationMethod === 'direct' ? 'default' : 'outline'} 
          className={`h-12 justify-center ${fermentationMethod === 'direct' ? 'bg-red-500 hover:bg-red-600' : 'bg-white hover:bg-red-50 border-red-200'}`}
          onClick={() => {
            setFermentationMethod('direct');
            onProceed();
          }}
        >
          Direct
        </Button>
        <Button 
          variant={fermentationMethod === 'poolish' ? 'default' : 'outline'} 
          className={`h-12 justify-center ${fermentationMethod === 'poolish' ? 'bg-red-500 hover:bg-red-600' : 'bg-white hover:bg-red-50 border-red-200'}`}
          onClick={() => {
            setFermentationMethod('poolish');
            onProceed();
          }}
        >
          Poolish
        </Button>
        <Button 
          variant={fermentationMethod === 'biga' ? 'default' : 'outline'} 
          className={`h-12 justify-center ${fermentationMethod === 'biga' ? 'bg-red-500 hover:bg-red-600' : 'bg-white hover:bg-red-50 border-red-200'}`}
          onClick={() => {
            setFermentationMethod('biga');
            onProceed();
          }}
        >
          Biga
        </Button>
      </div>
      
      <FermentationInfo fermentationMethod={fermentationMethod} />
    </>
  );
};

export default FermentationMethodSelector;
