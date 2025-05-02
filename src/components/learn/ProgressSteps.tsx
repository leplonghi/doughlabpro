
import React from 'react';

interface ProgressStepsProps {
  currentStep: number;
}

const ProgressSteps: React.FC<ProgressStepsProps> = ({ currentStep }) => {
  return (
    <div className="flex items-center mb-8">
      <div 
        className={`rounded-full w-8 h-8 flex items-center justify-center mr-2 ${
          currentStep >= 1 ? 'bg-amber-500 text-white' : 'bg-gray-200'
        }`}
      >
        1
      </div>
      <div className={`h-1 w-16 ${currentStep >= 2 ? 'bg-amber-500' : 'bg-gray-200'}`}></div>
      <div 
        className={`rounded-full w-8 h-8 flex items-center justify-center mx-2 ${
          currentStep >= 2 ? 'bg-amber-500 text-white' : 'bg-gray-200'
        }`}
      >
        2
      </div>
      <div className={`h-1 w-16 ${currentStep >= 3 ? 'bg-amber-500' : 'bg-gray-200'}`}></div>
      <div 
        className={`rounded-full w-8 h-8 flex items-center justify-center ml-2 ${
          currentStep >= 3 ? 'bg-amber-500 text-white' : 'bg-gray-200'
        }`}
      >
        3
      </div>
    </div>
  );
};

export default ProgressSteps;
