
import React from 'react';

interface TimerDisplayProps {
  formattedTime: string;
}

const TimerDisplay: React.FC<TimerDisplayProps> = ({ formattedTime }) => {
  return (
    <div className="text-3xl font-bold mb-4 font-mono">
      {formattedTime}
    </div>
  );
};

export default TimerDisplay;
