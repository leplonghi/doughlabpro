
import React from 'react';
import { YeastType } from '@/types/dough';

interface YeastTypeSelectorProps {
  yeastType: YeastType;
  setYeastType: (type: YeastType) => void;
}

const YeastTypeSelector: React.FC<YeastTypeSelectorProps> = ({
  yeastType,
  setYeastType
}) => {
  return (
    <div className="grid grid-cols-2 gap-3">
      <button
        type="button"
        onClick={() => setYeastType('fresh')}
        className={`py-3 px-4 border rounded-md text-center ${
          yeastType === 'fresh'
            ? 'bg-black text-white border-black'
            : 'border-gray-200 bg-white'
        }`}
      >
        Fresh (0.3% - 3g)
      </button>
      <button
        type="button"
        onClick={() => setYeastType('dry')}
        className={`py-3 px-4 border rounded-md text-center ${
          yeastType === 'dry'
            ? 'bg-black text-white border-black'
            : 'border-gray-200 bg-white'
        }`}
      >
        Dry (0.15% - 2g)
      </button>
    </div>
  );
};

export default YeastTypeSelector;
