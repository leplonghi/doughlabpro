import React, { useState } from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { InfoCircledIcon } from '@radix-ui/react-icons';
import { PizzaStyle } from './PizzaStyleSelect';

type YeastType = 'fresh' | 'dry';

interface DoughInputsProps {
  flour: number;
  setFlour: (v: number) => void;
  hydration: number;
  setHydration: (v: number) => void;
  yeastType: YeastType;
  setYeastType: (v: YeastType) => void;
  pizzaStyle: PizzaStyle;
  errors: Record<string, string>;
  validateField: (field: string, value: any) => void;
}

const DoughInputs: React.FC<DoughInputsProps> = ({
  flour,
  setFlour,
  hydration,
  setHydration,
  yeastType,
  setYeastType,
  pizzaStyle,
  errors,
  validateField
}) => {
  const salt = (flour * 2.5) / 100;
  const yeast = yeastType === 'fresh' ? (flour * 0.3) / 100 : (flour * 0.1) / 100;
  const oil = pizzaStyle === "napoletana" ? 0 : (flour * 2.5) / 100;
  const sugar = pizzaStyle === "napoletana" ? 0 : (flour * 2.5) / 100;
  
  const [ballWeight, setBallWeight] = useState<number>(250);
  const numberOfBalls = Math.floor(flour / ballWeight) || 0;

  // Handle flour input change with validation
  const handleFlourChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === '' || /^\d+$/.test(value)) {
      setFlour(Number(value));
      validateField('flour', Number(value));
    }
  };

  // Handle hydration input change with validation
  const handleHydrationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === '' || (/^\d+$/.test(value) && Number(value) >= 50 && Number(value) <= 90)) {
      setHydration(Number(value));
      validateField('hydration', Number(value));
    }
  };

  const handleHydrationRangeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    setHydration(value);
    validateField('hydration', value);
  };

  const handleBallWeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === '' || /^\d+$/.test(value)) {
      const newWeight = Number(value);
      if (newWeight >= 100 && newWeight <= 500) {
        setBallWeight(newWeight);
      }
    }
  };

  return (
    <div className="space-y-6">
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
          value={ballWeight || ''}
          onChange={handleBallWeightChange}
          min="100"
          max="500"
          placeholder="Ex: 250g"
          className="w-full"
        />
        <div className="text-sm text-muted-foreground mt-1">
          This will make approximately {numberOfBalls} dough {numberOfBalls === 1 ? 'ball' : 'balls'}
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <Label htmlFor="flour">Amount of Flour (g)</Label>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <span className="cursor-help"><InfoCircledIcon className="h-4 w-4 text-muted-foreground" /></span>
              </TooltipTrigger>
              <TooltipContent className="max-w-xs">
                <p>Enter the total amount of flour for your dough in grams. Recommended starting point: 1000g.</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <Input 
          id="flour" 
          type="number" 
          value={flour || ''} 
          onChange={handleFlourChange}
          min="100"
          max="10000"
          placeholder="Ex: 1000g"
          aria-describedby={errors.flour ? "flour-error" : undefined}
          className={errors.flour ? "border-red-500 focus-visible:ring-red-500" : ""}
        />
        {errors.flour && (
          <div id="flour-error" className="text-red-500 text-sm" aria-live="assertive">{errors.flour}</div>
        )}
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label>Salt (g)</Label>
          <Input
            value={salt.toFixed(1)}
            readOnly
            className="bg-gray-50"
          />
        </div>
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Label>Yeast (g)</Label>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <span className="cursor-help"><InfoCircledIcon className="h-4 w-4 text-muted-foreground" /></span>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Fresh yeast (0.3%) is more active but shorter shelf life. Dry yeast (0.1%) is more stable and commonly available.</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          <Input
            value={yeast.toFixed(2)}
            readOnly
            className="bg-gray-50"
          />
        </div>
        <div className="space-y-2">
          <Label>Olive Oil (g)</Label>
          <Input
            value={oil.toFixed(1)}
            readOnly
            className="bg-gray-50"
          />
        </div>
        <div className="space-y-2">
          <Label>Sugar (g)</Label>
          <Input
            value={sugar.toFixed(1)}
            readOnly
            className="bg-gray-50"
          />
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <Label htmlFor="hydration">Hydration (%)</Label>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <span className="cursor-help"><InfoCircledIcon className="h-4 w-4 text-muted-foreground" /></span>
              </TooltipTrigger>
              <TooltipContent className="max-w-xs">
                <p>Hydration is the water-to-flour ratio. Lower (50-60%) makes firmer dough; higher (65-75%) creates more open, airy crust.</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <div className="flex items-center gap-4">
          <Input 
            id="hydration" 
            type="number" 
            value={hydration || ''} 
            onChange={handleHydrationChange}
            min="50"
            max="90"
            placeholder="60%"
            className={`w-24 ${errors.hydration ? "border-red-500 focus-visible:ring-red-500" : ""}`}
            aria-describedby={errors.hydration ? "hydration-error" : undefined}
          />
          <div className="flex-1">
            <input
              type="range"
              min="50"
              max="90"
              value={hydration}
              onChange={handleHydrationRangeChange}
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
        {errors.hydration && (
          <div id="hydration-error" className="text-red-500 text-sm" aria-live="assertive">{errors.hydration}</div>
        )}
      </div>

      <Separator className="my-4" />

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
          onValueChange={(value) => setYeastType(value as YeastType)}
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
    </div>
  );
};

export default DoughInputs;
