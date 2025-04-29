
import React from 'react';
import { ChevronDown } from 'lucide-react';

interface StepHeaderProps { 
  step: number; 
  title: string; 
  isActive: boolean; 
  onClick: () => void;
  description?: string;
}

const StepHeader: React.FC<StepHeaderProps> = ({ step, title, isActive, onClick, description }) => (
  <div>
    <div 
      className={`flex items-center justify-between w-full cursor-pointer ${isActive ? 'mb-4' : 'border-b border-border pb-4'}`} 
      onClick={onClick}
    >
      <div className="flex items-center gap-3">
        <div className="flex items-center justify-center w-7 h-7 rounded-full bg-black text-white text-sm font-medium">
          {step}
        </div>
        <h2 className="text-xl font-semibold">{title}</h2>
      </div>
      {!isActive && <ChevronDown className="h-5 w-5" />}
    </div>
    {isActive && description && (
      <p className="text-sm text-gray-600 mb-4">{description}</p>
    )}
  </div>
);

export default StepHeader;
