
import * as React from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { InfoCircledIcon } from '@radix-ui/react-icons';
import { 
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface HydrationInputProps {
  hydration: number;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onRangeChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}

const HydrationInput: React.FC<HydrationInputProps> = ({
  hydration,
  onInputChange,
  onRangeChange,
  error
}) => {
  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2">
        <Label htmlFor="hydration">Hydration</Label>
        <Tooltip>
          <TooltipTrigger asChild>
            <span className="cursor-help"><InfoCircledIcon className="h-4 w-4 text-muted-foreground" /></span>
          </TooltipTrigger>
          <TooltipContent className="max-w-xs">
            <p>The percentage of water relative to flour weight</p>
          </TooltipContent>
        </Tooltip>
      </div>
      <div className="flex items-center gap-4">
        <Input 
          id="hydration" 
          type="number" 
          value={hydration || ''} 
          onChange={onInputChange}
          min="50"
          max="90"
          placeholder="60%"
          className={`w-24 ${error ? "border-red-500 focus-visible:ring-red-500" : ""}`}
          aria-describedby={error ? "hydration-error" : undefined}
        />
        <div className="flex-1">
          <input
            type="range"
            min="50"
            max="90"
            value={hydration}
            onChange={onRangeChange}
            className="w-full"
          />
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>50%</span>
            <span>60%</span>
            <span>75%</span>
            <span>90%</span>
          </div>
        </div>
      </div>
      {error && (
        <div id="hydration-error" className="text-red-500 text-sm" aria-live="assertive">{error}</div>
      )}
    </div>
  );
};

export default HydrationInput;
