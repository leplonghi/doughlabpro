
import React from 'react';

interface FermentationTipsProps {
  method: 'direct' | 'poolish' | 'biga';
}

const FermentationTips: React.FC<FermentationTipsProps> = ({ method }) => (
  <div className="bg-pizza-light bg-opacity-30 p-4 rounded-lg">
    <h3 className="font-medium text-gray-900 mb-2">Fermentation Tips</h3>
    {method === 'direct' && (
      <p className="text-sm text-gray-700">
        Allow the dough to ferment for 8-12 hours at room temperature (20-22°C) or in the refrigerator for longer. 
        The dough should double in volume and develop a characteristic aroma.
      </p>
    )}
    {method === 'poolish' && (
      <p className="text-sm text-gray-700">
        After incorporating the poolish into the final dough, allow to ferment for 4-8 hours at room temperature.
        This method gives lightness and complex flavor to the dough.
      </p>
    )}
    {method === 'biga' && (
      <p className="text-sm text-gray-700">
        After incorporating the biga, allow to ferment for 4-8 hours. This method provides strength to the dough and a more intense flavor.
        Ideal for doughs with greater resistance.
      </p>
    )}
  </div>
);

export default FermentationTips;
