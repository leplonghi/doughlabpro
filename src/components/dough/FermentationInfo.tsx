
import React from 'react';
import { FermentationMethod } from '@/types/dough';

interface FermentationInfoProps {
  fermentationMethod: FermentationMethod;
}

const FermentationInfo: React.FC<FermentationInfoProps> = ({ fermentationMethod }) => {
  if (fermentationMethod === 'direct') {
    return null;
  }

  return (
    <div className="mt-4 space-y-3">
      <p className="text-sm">
        {fermentationMethod === 'poolish' 
          ? 'Poolish is a liquid pre-ferment with 100% hydration. Improves dough extensibility and adds mild acidity and complex aroma. Ideal for pizza, focaccia, and baguette.'
          : 'Biga is a stiff pre-ferment with low hydration. Adds strength and nutty flavor to rustic breads and traditional pizza.'}
      </p>
      
      <div className="bg-gray-50 p-4 rounded-lg">
        <h3 className="font-medium mb-2">Pre-ferment Details</h3>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-gray-600">Flour Portion:</p>
            <p className="font-medium">30% of total flour</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Hydration:</p>
            <p className="font-medium">{fermentationMethod === 'poolish' ? '100%' : '40%'}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Yeast Amount:</p>
            <p className="font-medium">{fermentationMethod === 'poolish' ? '0.1%' : '0.05%'} of pre-ferment flour</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Fermentation Time:</p>
            <p className="font-medium">{fermentationMethod === 'poolish' ? '12-24' : '12-24'} hours at 18-21°C</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FermentationInfo;
