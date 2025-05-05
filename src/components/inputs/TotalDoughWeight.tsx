
import React from 'react';

interface TotalDoughWeightProps {
  totalWeight: number;
  ballDescription: string;
}

const TotalDoughWeight: React.FC<TotalDoughWeightProps> = ({
  totalWeight,
  ballDescription
}) => {
  return (
    <div className="pt-4 border-t border-gray-200">
      <div className="flex justify-between items-center">
        <div className="font-medium">Total Dough Weight</div>
        <div className="font-bold">
          {totalWeight.toFixed(0)}g 
        </div>
      </div>
      <p className="text-sm text-gray-500 mt-1">
        {ballDescription}
      </p>
    </div>
  );
};

export default TotalDoughWeight;
