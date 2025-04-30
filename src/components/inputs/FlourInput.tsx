
import * as React from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { InfoCircledIcon } from '@radix-ui/react-icons';
import { useTranslation } from 'react-i18next';
import { 
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface FlourInputProps {
  flour: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}

const FlourInput: React.FC<FlourInputProps> = ({ flour, onChange, error }) => {
  const { t } = useTranslation();

  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2">
        <Label htmlFor="flour">{t('calculator.flour')}</Label>
        <Tooltip>
          <TooltipTrigger asChild>
            <span className="cursor-help"><InfoCircledIcon className="h-4 w-4 text-muted-foreground" /></span>
          </TooltipTrigger>
          <TooltipContent>
            <p>{t('calculator.ingredients.amountDescription')}</p>
          </TooltipContent>
        </Tooltip>
      </div>
      <Input 
        id="flour" 
        type="number" 
        value={flour || ''} 
        onChange={onChange}
        min="100"
        max="10000"
        placeholder="Ex: 1000g"
        aria-describedby={error ? "flour-error" : undefined}
        className={error ? "border-red-500 focus-visible:ring-red-500" : ""}
      />
      {error && (
        <div id="flour-error" className="text-red-500 text-sm" aria-live="assertive">{error}</div>
      )}
    </div>
  );
};

export default FlourInput;
