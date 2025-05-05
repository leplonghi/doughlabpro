
import React from 'react';
import { Info } from 'lucide-react';
import { 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface RecipeInfoBannerProps {
  hydrationInfo: string;
}

const RecipeInfoBanner: React.FC<RecipeInfoBannerProps> = ({ hydrationInfo }) => {
  return (
    <>
      <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 mb-6">
        <h3 className="text-lg font-medium flex items-center text-blue-800">
          <Info className="mr-2 h-5 w-5" />
          Recipe Selection Guide
        </h3>
        <p className="mt-2 text-blue-700">
          Each recipe has a different difficulty level and hydration percentage. Beginners should start with "Easy" recipes, 
          which are more forgiving and require less technique.
        </p>
      </div>
      
      <div className="flex items-center mb-4">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger className="inline-flex items-center text-sm text-muted-foreground">
              <Info className="mr-1 h-4 w-4" /> What is hydration?
            </TooltipTrigger>
            <TooltipContent className="max-w-xs p-4">
              <p>{hydrationInfo}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </>
  );
};

export default RecipeInfoBanner;
