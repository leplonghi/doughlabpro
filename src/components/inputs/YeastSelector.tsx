
import * as React from 'react';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { InfoCircledIcon } from '@radix-ui/react-icons';
import { 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

type YeastType = 'fresh' | 'dry';

interface YeastSelectorProps {
  yeastType: YeastType;
  onYeastTypeChange: (value: YeastType) => void;
}

const YeastSelector: React.FC<YeastSelectorProps> = ({
  yeastType,
  onYeastTypeChange
}) => {
  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2">
        <Label>Yeast Type</Label>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <span className="cursor-help"><InfoCircledIcon className="h-4 w-4 text-muted-foreground" /></span>
            </TooltipTrigger>
            <TooltipContent>
              <p>Fresh yeast is more perishable but adds better flavor. Dry yeast has longer shelf life and is more widely available.</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      <RadioGroup 
        value={yeastType} 
        onValueChange={onYeastTypeChange}
        className="flex flex-col space-y-2"
      >
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="fresh" id="fresh" />
          <Label htmlFor="fresh">Fresh Yeast (0.3%)</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="dry" id="dry" />
          <Label htmlFor="dry">Dry Yeast (0.1%)</Label>
        </div>
      </RadioGroup>
    </div>
  );
};

export default YeastSelector;
