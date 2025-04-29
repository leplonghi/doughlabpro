
import * as React from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { InfoCircledIcon } from '@radix-ui/react-icons';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { useTranslation } from 'react-i18next';

interface BallWeightInputProps {
  ballWeight: number;
  totalDoughWeight: number;
  onBallWeightChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const BallWeightInput: React.FC<BallWeightInputProps> = ({
  ballWeight,
  totalDoughWeight,
  onBallWeightChange
}) => {
  const { t } = useTranslation();
  
  const numberOfBalls = Math.floor(totalDoughWeight / ballWeight) || 0;
  
  const handleRangeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newEvent = {
      ...e,
      target: {
        ...e.target,
        value: e.target.value
      }
    };
    onBallWeightChange(newEvent);
  };
  
  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2">
        <Label htmlFor="ballWeight">{t('calculator.ingredients.ballWeight')}</Label>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <span className="cursor-help"><InfoCircledIcon className="h-4 w-4 text-muted-foreground" /></span>
            </TooltipTrigger>
            <TooltipContent className="max-w-xs bg-white text-black border border-border">
              <p>{t('calculator.ingredients.ballWeightDescription')}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      
      <div className="flex items-center gap-4">
        <Input
          id="ballWeight"
          type="number"
          inputMode="numeric"
          pattern="[0-9]*"
          value={ballWeight || ''}
          onChange={onBallWeightChange}
          min="250"
          max="400"
          placeholder="Ex: 250g"
          className="w-24 border-input"
        />
        
        <div className="flex-1">
          <input
            type="range"
            min="250"
            max="400"
            step="50"
            value={ballWeight}
            onChange={handleRangeChange}
            className="w-full accent-black"
          />
          <div className="flex justify-between text-xs text-muted-foreground mt-1">
            <span>250g</span>
            <span>300g</span>
            <span>350g</span>
            <span>400g</span>
          </div>
        </div>
      </div>
      
      <div className="text-sm text-muted-foreground mt-1">
        {t('calculator.ingredients.ballCountResult', { count: numberOfBalls })}
      </div>
    </div>
  );
};

export default BallWeightInput;
