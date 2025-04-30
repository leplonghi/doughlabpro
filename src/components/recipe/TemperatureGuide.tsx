
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Thermometer, Info } from 'lucide-react';
import { TooltipProvider, Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

interface TemperatureGuideProps {
  pizzaStyle?: string;
  doughType?: 'pizza' | 'bread';
  fermentationMethod: 'direct' | 'poolish' | 'biga';
}

const TemperatureGuide: React.FC<TemperatureGuideProps> = ({ 
  pizzaStyle = 'napoletana', 
  doughType = 'pizza',
  fermentationMethod
}) => {
  // Get temperature recommendations based on style
  const getBakingTemp = () => {
    if (doughType === 'pizza') {
      switch (pizzaStyle) {
        case 'napoletana': return { min: 800, max: 900, celsius: { min: 425, max: 485 } };
        case 'newyork': return { min: 500, max: 550, celsius: { min: 260, max: 290 } };
        case 'chicago': return { min: 425, max: 450, celsius: { min: 220, max: 230 } };
        default: return { min: 450, max: 500, celsius: { min: 230, max: 260 } };
      }
    } else {
      switch (pizzaStyle) {
        case 'baguette': return { min: 450, max: 475, celsius: { min: 230, max: 245 } };
        case 'brioche': return { min: 350, max: 375, celsius: { min: 175, max: 190 } };
        case 'focaccia': return { min: 425, max: 450, celsius: { min: 220, max: 230 } };
        default: return { min: 425, max: 450, celsius: { min: 220, max: 230 } };
      }
    }
  };

  // Get fermentation temperature recommendations
  const getFermentTemp = () => {
    switch (fermentationMethod) {
      case 'direct': return { room: { min: 68, max: 72, celsius: { min: 20, max: 22 } } };
      case 'poolish': return { 
        preferment: { min: 65, max: 70, celsius: { min: 18, max: 21 } },
        final: { min: 75, max: 80, celsius: { min: 24, max: 27 } }
      };
      case 'biga': return { 
        preferment: { min: 60, max: 65, celsius: { min: 16, max: 18 } },
        final: { min: 75, max: 80, celsius: { min: 24, max: 27 } }
      };
      default: return { room: { min: 70, max: 75, celsius: { min: 21, max: 24 } } };
    }
  };

  const bakingTemp = getBakingTemp();
  const fermentTemp = getFermentTemp();

  return (
    <Card className="mt-4">
      <CardContent className="pt-6">
        <div className="space-y-4">
          <h3 className="font-medium text-gray-900 flex items-center gap-2">
            <Thermometer className="h-5 w-5" />
            Temperature Guide
          </h3>
          
          <div className="space-y-2 text-sm">
            <div className="flex justify-between items-center">
              <span className="text-gray-700">Baking Temperature:</span>
              <span className="font-medium">
                {bakingTemp.min}-{bakingTemp.max}°F ({bakingTemp.celsius.min}-{bakingTemp.celsius.max}°C)
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <span className="inline-block ml-1 cursor-help">
                        <Info className="h-3.5 w-3.5 text-muted-foreground inline-block" />
                      </span>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Optimal temperature range for {doughType === 'pizza' ? 'baking ' + pizzaStyle + ' style pizza' : pizzaStyle + ' bread'}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </span>
            </div>

            {fermentationMethod === 'direct' && (
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Fermentation Temperature:</span>
                <span className="font-medium">
                  {fermentTemp.room.min}-{fermentTemp.room.max}°F ({fermentTemp.room.celsius.min}-{fermentTemp.room.celsius.max}°C)
                </span>
              </div>
            )}

            {(fermentationMethod === 'poolish' || fermentationMethod === 'biga') && (
              <>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">{fermentationMethod.charAt(0).toUpperCase() + fermentationMethod.slice(1)} Fermentation:</span>
                  <span className="font-medium">
                    {fermentTemp.preferment.min}-{fermentTemp.preferment.max}°F ({fermentTemp.preferment.celsius.min}-{fermentTemp.preferment.celsius.max}°C)
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Final Dough Fermentation:</span>
                  <span className="font-medium">
                    {fermentTemp.final.min}-{fermentTemp.final.max}°F ({fermentTemp.final.celsius.min}-{fermentTemp.final.celsius.max}°C)
                  </span>
                </div>
              </>
            )}
          </div>
          
          <div className="bg-amber-50 p-3 rounded-md mt-2">
            <p className="text-xs text-amber-800">
              <strong>Pro Tip:</strong> {doughType === 'pizza' ? 
                'Use a digital thermometer to monitor your oven temperature for best results.' : 
                'For the best crumb structure, monitor both dough and room temperature during fermentation.'}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TemperatureGuide;
