
import React from 'react';
import { cn } from '@/lib/utils';

interface StepHeaderProps {
  index: number;
  title: string;
  themeColor: string;
}

// Component to display the step number and title
export const StepHeader: React.FC<StepHeaderProps> = ({ index, title, themeColor }) => {
  return (
    <div className="flex items-center mb-4">
      <div 
        className={cn(
          "flex items-center justify-center w-8 h-8 rounded-full mr-3 text-white font-medium",
          themeColor === 'green' ? 'bg-green-500' : 'bg-blue-500'
        )}
      >
        {index + 1}
      </div>
      <h3 className="text-xl font-medium">{title}</h3>
    </div>
  );
};
