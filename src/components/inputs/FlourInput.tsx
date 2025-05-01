
import * as React from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { useTranslation } from 'react-i18next';
import { 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { HelpCircle, FlowerIcon } from 'lucide-react';

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
        <FlowerIcon className="h-4 w-4 text-primary" />
        <Label htmlFor="flour">{t('calculator.flour')}</Label>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <span className="cursor-help"><HelpCircle className="h-4 w-4 text-muted-foreground hover:text-primary transition-colors duration-200" /></span>
            </TooltipTrigger>
            <TooltipContent className="bg-white shadow-md border border-border p-3 max-w-xs">
              <p>{t('calculator.ingredients.amountDescription')}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
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
        className={`transition-all duration-200 focus:border-primary focus:ring-2 focus:ring-primary/20 ${error ? "border-red-500 focus-visible:ring-red-500" : ""}`}
      />
      {error && (
        <div id="flour-error" className="text-red-500 text-sm animate-fade-in" aria-live="assertive">{error}</div>
      )}
    </div>
  );
};

export default FlourInput;
