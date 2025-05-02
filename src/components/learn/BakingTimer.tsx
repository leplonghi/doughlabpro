
import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Play, Pause, Square, Clock } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { toast } from 'sonner';

interface BakingTimerProps {
  initialMinutes?: number;
  title?: string;
}

const BakingTimer: React.FC<BakingTimerProps> = ({ 
  initialMinutes = 30,
  title = "Baking Timer"
}) => {
  const [timeLeft, setTimeLeft] = useState(initialMinutes * 60);
  const [isActive, setIsActive] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const intervalRef = useRef<number | null>(null);
  
  useEffect(() => {
    return () => {
      if (intervalRef.current !== null) {
        window.clearInterval(intervalRef.current);
      }
    };
  }, []);
  
  const startTimer = () => {
    if (timeLeft === 0) {
      resetTimer();
    }
    
    setIsActive(true);
    setHasStarted(true);
    
    intervalRef.current = window.setInterval(() => {
      setTimeLeft(prevTime => {
        if (prevTime <= 1) {
          window.clearInterval(intervalRef.current as number);
          setIsActive(false);
          toast.success('Timer complete!', {
            description: 'Your baking timer has finished.',
            duration: 5000
          });
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);
  };
  
  const pauseTimer = () => {
    if (intervalRef.current !== null) {
      window.clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    setIsActive(false);
  };
  
  const resetTimer = () => {
    pauseTimer();
    setTimeLeft(initialMinutes * 60);
    setHasStarted(false);
  };
  
  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };
  
  const getProgressPercentage = () => {
    const totalSeconds = initialMinutes * 60;
    return ((totalSeconds - timeLeft) / totalSeconds) * 100;
  };

  return (
    <Card className="p-4 my-4 bg-amber-50 border-amber-200">
      <div className="flex flex-col items-center">
        <div className="flex items-center mb-2">
          <Clock className="mr-2 h-5 w-5 text-amber-600" />
          <h3 className="text-lg font-medium">{title}</h3>
        </div>
        
        <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 mt-2">
          <div 
            className="bg-amber-500 h-2.5 rounded-full transition-all duration-1000 ease-linear" 
            style={{ width: `${hasStarted ? getProgressPercentage() : 0}%` }}
          ></div>
        </div>
        
        <div className="text-3xl font-bold mb-4 font-mono">
          {formatTime(timeLeft)}
        </div>
        
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
      </div>
    </Card>
  );
};

export default BakingTimer;
