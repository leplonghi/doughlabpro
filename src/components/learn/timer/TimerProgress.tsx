
import React from 'react';

interface TimerProgressProps {
  hasStarted: boolean;
  progressPercentage: number;
}

const TimerProgress: React.FC<TimerProgressProps> = ({
  hasStarted,
  progressPercentage
}) => {
  return (
    <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 mt-2">
      <div 
        className="bg-amber-500 h-2.5 rounded-full transition-all duration-1000 ease-linear" 
        style={{ width: `${hasStarted ? progressPercentage : 0}%` }}
      ></div>
    </div>
  );
};

export default TimerProgress;
