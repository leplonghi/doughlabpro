
import React from 'react';
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
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
        <Tooltip>
          <TooltipTrigger>
            <Info className="w-3.5 h-3.5 text-muted-foreground cursor-help" />
          </TooltipTrigger>
          <TooltipContent>
            <p>{tooltip}</p>
          </TooltipContent>
        </Tooltip>
      )}
    </span>
    <span className="result-value">{value}</span>
  </li>
);

export default IngredientItem;
