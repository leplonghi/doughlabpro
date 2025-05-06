
import React from 'react';

interface StepTipProps {
  tip?: string;
}

// Component to display a tip for a step
export const StepTip: React.FC<StepTipProps> = ({ tip }) => {
  if (!tip) return null;
  
  return (
    <div className="bg-green-50 p-4 rounded-md mb-6 border border-green-100">
      <p className="text-green-800 text-sm font-medium flex items-start">
        <span className="mr-2">💡</span>
        <span>{tip}</span>
      </p>
    </div>
  );
};
