
import * as React from 'react';
import { TooltipProvider, Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Info } from 'lucide-react';

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
  <li className="flex justify-between">
    <span className="result-label flex items-center gap-2">
      {icon} {label}
      {tooltip && (
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <span className="cursor-help">
                <Info className="w-3.5 h-3.5 text-muted-foreground" />
              </span>
            </TooltipTrigger>
            <TooltipContent>
              <p>{tooltip}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      )}
    </span>
    <span className="result-value">{value}</span>
  </li>
);

export default IngredientItem;
