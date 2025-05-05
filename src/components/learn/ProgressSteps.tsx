
import React from 'react';

interface ProgressStepsProps {
  currentStep: number;
}

const ProgressSteps: React.FC<ProgressStepsProps> = ({ currentStep }) => {
  return (
    <div className="mb-8">
      <div className="flex items-center">
        <div 
          className={`rounded-full w-10 h-10 flex items-center justify-center mr-2 ${
            currentStep >= 1 ? 'bg-amber-500 text-white' : 'bg-gray-200'
          }`}
        >
          1
        </div>
        <div className={`h-1 w-16 ${currentStep >= 2 ? 'bg-amber-500' : 'bg-gray-200'}`}></div>
        <div 
          className={`rounded-full w-10 h-10 flex items-center justify-center mx-2 ${
            currentStep >= 2 ? 'bg-amber-500 text-white' : 'bg-gray-200'
          }`}
        >
          2
        </div>
        <div className={`h-1 w-16 ${currentStep >= 3 ? 'bg-amber-500' : 'bg-gray-200'}`}></div>
        <div 
          className={`rounded-full w-10 h-10 flex items-center justify-center ml-2 ${
            currentStep >= 3 ? 'bg-amber-500 text-white' : 'bg-gray-200'
          }`}
        >
          3
        </div>
      </div>
      
      <div className="flex mt-2 text-sm">
        <div className={`w-10 text-center ${currentStep >= 1 ? 'font-medium text-amber-600' : 'text-gray-500'}`}>
          Type
        </div>
        <div className="w-16"></div>
        <div className={`w-10 text-center ${currentStep >= 2 ? 'font-medium text-amber-600' : 'text-gray-500'}`}>
          Recipe
        </div>
        <div className="w-16"></div>
        <div className={`w-10 text-center ${currentStep >= 3 ? 'font-medium text-amber-600' : 'text-gray-500'}`}>
          Bake
        </div>
      </div>
    </div>
  );
};

export default ProgressSteps;
