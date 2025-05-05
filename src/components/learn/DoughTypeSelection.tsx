
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { HelpCircle } from 'lucide-react';
import { 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { DoughType } from '@/data/learnData';

interface DoughTypeData {
  id: DoughType;
  name: string;
  icon: string;
  description: string;
}

interface DoughTypeSelectionProps {
  doughTypes: DoughTypeData[];
  onSelect: (typeId: DoughType) => void;
}

const DoughTypeSelection: React.FC<DoughTypeSelectionProps> = ({ 
  doughTypes, 
  onSelect 
}) => {
  return (
    <div className="space-y-6">
      <p className="text-muted-foreground text-lg">
        Select the type of dough you want to make. Each option has different ingredients and techniques.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-4">
        {doughTypes.map((type) => (
          <Card 
            key={type.id}
            className={`border transition-all cursor-pointer transform hover:scale-105 hover:shadow-md hover:border-amber-300`}
            onClick={() => onSelect(type.id)}
          >
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="text-5xl mb-4">{type.icon}</div>
              <div className="flex items-center justify-center mb-2">
                <h3 className="text-xl font-medium">{type.name}</h3>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <HelpCircle className="ml-1 h-4 w-4 text-muted-foreground" />
                    </TooltipTrigger>
                    <TooltipContent className="max-w-xs">
                      <p>{type.description}</p>
                      {type.id === 'pizza' && (
                        <p className="mt-1">Perfect for creating pizzas with different crusts - from thin and crispy to thick and chewy.</p>
                      )}
                      {type.id === 'bread' && (
                        <p className="mt-1">Includes recipes for sandwich loaves, artisan breads, and more.</p>
                      )}
                      {type.id === 'focaccia' && (
                        <p className="mt-1">Italian flatbread that's perfect for beginners and can be topped with various ingredients.</p>
                      )}
                      {type.id === 'sourdough' && (
                        <p className="mt-1">Uses a natural fermentation process for a tangy flavor and chewy texture.</p>
                      )}
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              <p className="text-sm text-muted-foreground">{type.description}</p>
              <div className="mt-4 px-4 py-1.5 rounded-full text-sm font-medium bg-gray-100">
                Select This
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default DoughTypeSelection;
