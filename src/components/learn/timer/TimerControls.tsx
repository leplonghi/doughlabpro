
import React from 'react';
import { Button } from '@/components/ui/button';
import { Play, Pause, Square } from 'lucide-react';

interface TimerControlsProps {
  isActive: boolean;
  hasStarted: boolean;
  startTimer: () => void;
  pauseTimer: () => void;
  resetTimer: () => void;
}

const TimerControls: React.FC<TimerControlsProps> = ({
  isActive,
  hasStarted,
  startTimer,
  pauseTimer,
  resetTimer
}) => {
  return (
    <div className="flex gap-2">
      {!isActive ? (
        <Button
          onClick={startTimer}
          variant="outline"
          className="flex items-center gap-1 bg-green-50 text-green-700 border-green-200 hover:bg-green-100 hover:text-green-800"
        >
          <Play className="h-4 w-4" />
          {hasStarted ? 'Resume' : 'Start'}
        </Button>
      ) : (
        <Button
          onClick={pauseTimer}
          variant="outline"
          className="flex items-center gap-1 bg-amber-50 text-amber-700 border-amber-200 hover:bg-amber-100 hover:text-amber-800"
        >
          <Pause className="h-4 w-4" />
          Pause
        </Button>
      )}
      
      <Button
        onClick={resetTimer}
        variant="outline"
        className="flex items-center gap-1 bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100 hover:text-gray-800"
        disabled={!hasStarted}
      >
        <Square className="h-4 w-4" />
        Reset
      </Button>
    </div>
  );
};

export default TimerControls;
