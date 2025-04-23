
import React from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { InfoCircledIcon } from '@radix-ui/react-icons';
import { 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface BallWeightInputProps {
  ballWeight: number;
  flour: number;
  onBallWeightChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const BallWeightInput: React.FC<BallWeightInputProps> = ({
  ballWeight,
  flour,
  onBallWeightChange
}) => {
  const numberOfBalls = Math.floor(flour / ballWeight) || 0;

  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2">
        <Label htmlFor="ballWeight">Dough Ball Weight (g)</Label>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <span className="cursor-help"><InfoCircledIcon className="h-4 w-4 text-muted-foreground" /></span>
            </TooltipTrigger>
            <TooltipContent className="max-w-xs">
              <p>Enter the desired weight for each dough ball (100g-500g). This will help calculate how many balls you can make.</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      <Input
        id="ballWeight"
        type="number"
        inputMode="numeric" // Add inputMode for better mobile keyboard
        pattern="[0-9]*" // Ensure numeric input on mobile browsers
        value={ballWeight || ''}
        onChange={onBallWeightChange}
        min="100"
        max="500"
        placeholder="Ex: 250g"
        className="w-full"
      />
      <div className="text-sm text-muted-foreground mt-1">
        This will make approximately {numberOfBalls} dough {numberOfBalls === 1 ? 'ball' : 'balls'}
      </div>
    </div>
  );
};

export default BallWeightInput;
