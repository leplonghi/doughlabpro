
import React, { useState, useEffect, useRef } from 'react';
import { Card } from '@/components/ui/card';
import { Clock } from 'lucide-react';
import { toast } from 'sonner';
import TimerControls from './timer/TimerControls';
import TimerProgress from './timer/TimerProgress';
import TimerDisplay from './timer/TimerDisplay';

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
        
        <TimerProgress 
          hasStarted={hasStarted} 
          progressPercentage={getProgressPercentage()} 
        />
        
        <TimerDisplay formattedTime={formatTime(timeLeft)} />
        
        <TimerControls 
          isActive={isActive}
          hasStarted={hasStarted}
          startTimer={startTimer}
          pauseTimer={pauseTimer}
          resetTimer={resetTimer}
        />
      </div>
    </Card>
  );
};

export default BakingTimer;
