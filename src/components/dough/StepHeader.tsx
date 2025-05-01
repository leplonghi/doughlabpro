
import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

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
      className={`flex items-center justify-between w-full cursor-pointer group py-2 ${isActive ? 'mb-4' : 'border-b border-border pb-4'}`} 
      onClick={onClick}
    >
      <div className="flex items-center gap-3">
        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white text-sm font-medium shadow-sm transition-all duration-200 group-hover:shadow">
          {step}
        </div>
        <h2 className="text-xl font-semibold group-hover:text-primary transition-colors duration-200">{title}</h2>
      </div>
      {!isActive ? 
        <ChevronDown className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors duration-200" /> :
        <ChevronUp className="h-5 w-5 text-primary transition-colors duration-200" />
      }
    </div>
    {isActive && description && (
      <p className="text-sm text-gray-600 mb-6 pl-11 animate-fade-in">{description}</p>
    )}
  </div>
);

export default StepHeader;
