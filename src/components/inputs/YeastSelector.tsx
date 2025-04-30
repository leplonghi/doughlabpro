
import * as React from 'react';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { InfoCircledIcon } from '@radix-ui/react-icons';
import { useTranslation } from 'react-i18next';
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

type YeastType = 'fresh' | 'dry';

interface YeastSelectorProps {
  yeastType: YeastType;
  onYeastTypeChange: (value: YeastType) => void;
}

const YeastSelector: React.FC<YeastSelectorProps> = ({
  yeastType,
  onYeastTypeChange
}) => {
  const { t } = useTranslation();
  
  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2">
        <Label>{t('calculator.ingredients.yeastType')}</Label>
        <TooltipPrimitive.Provider>
          <Tooltip>
            <TooltipTrigger asChild>
              <span className="cursor-help"><InfoCircledIcon className="h-4 w-4 text-muted-foreground" /></span>
            </TooltipTrigger>
            <TooltipContent>
              <p>{t('calculator.ingredients.yeastDescription')}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipPrimitive.Provider>
      </div>
      <RadioGroup value={yeastType} onValueChange={onYeastTypeChange} className="flex flex-col space-y-2">
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="fresh" id="fresh" className="bg-amber-400 hover:bg-amber-300" />
          <Label htmlFor="fresh">{t('calculator.ingredients.freshYeast')}</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="dry" id="dry" className="bg-amber-400 hover:bg-amber-300" />
          <Label htmlFor="dry">{t('calculator.ingredients.dryYeast')}</Label>
        </div>
      </RadioGroup>
    </div>
  );
};

export default YeastSelector;
