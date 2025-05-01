
import * as React from 'react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from "@/components/ui/tooltip";
import { HelpCircle } from 'lucide-react';

interface IngredientItemProps {
  label: string;
  value: string;
  icon: React.ReactNode;
  tooltip?: string;
}

const IngredientItem: React.FC<IngredientItemProps> = ({
  label,
  value,
  icon,
  tooltip
}) => (
  <li className="flex justify-between items-center py-2 group">
    <span className="result-label flex items-center gap-2">
      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-200">
        {icon}
      </div>
      <span className="ml-1">{label}</span>
      {tooltip && (
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <span className="cursor-help inline-flex">
                <HelpCircle className="w-4 h-4 text-muted-foreground hover:text-primary transition-colors duration-200" />
              </span>
            </TooltipTrigger>
            <TooltipContent className="bg-white shadow-md border border-border p-3 max-w-xs">
              <p className="text-sm">{tooltip}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      )}
    </span>
    <span className="result-value font-medium text-primary">{value}</span>
  </li>
);

export default IngredientItem;
