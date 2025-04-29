
import React from 'react';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card } from '@/components/ui/card';

type FermentationMethod = 'direct' | 'poolish' | 'biga';

interface FermentationMethodSelectProps {
  fermentationMethod: FermentationMethod;
  onChange: (value: FermentationMethod) => void;
}

const FermentationMethodSelect: React.FC<FermentationMethodSelectProps> = ({
  fermentationMethod,
  onChange
}) => {
  return (
    <div className="space-y-4">
      <Label htmlFor="fermentation-method" className="text-lg font-semibold">
        Fermentation Method
      </Label>
      
      <Select value={fermentationMethod} onValueChange={val => onChange(val as FermentationMethod)}>
        <SelectTrigger className="w-full bg-background border-border">
          <SelectValue placeholder="Select a method" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="direct">Direct</SelectItem>
          <SelectItem value="poolish">Poolish</SelectItem>
          <SelectItem value="biga">Biga</SelectItem>
        </SelectContent>
      </Select>

      <Card className="p-4 bg-secondary/30 border-none shadow-none px-[12px] py-0">
        {fermentationMethod === 'direct' && (
          <div className="space-y-3">
            <p>
              <span className="font-semibold text-primary">Direct:</span> all ingredients are mixed at once.
            </p>
            <ul className="list-disc ml-5 text-foreground/80 space-y-1">
              <li>Fermentation time: 8-24h (room temperature).</li>
              <li>Dough develops mild flavor.</li>
            </ul>
          </div>
        )}
        
        {fermentationMethod === 'poolish' && (
          <div className="space-y-3">
            <p>
              <span className="font-semibold text-primary">Poolish:</span> make a liquid pre-ferment using 30% of total flour (100% hydration).
            </p>
            <ul className="list-disc ml-5 text-foreground/80 space-y-1">
              <li>Prepare poolish 8-16h before.</li>
              <li>Add poolish to final dough.</li>
              <li>Dough gains lightness, aroma and special texture.</li>
            </ul>
          </div>
        )}
        
        {fermentationMethod === 'biga' && (
          <div className="space-y-3">
            <p>
              <span className="font-semibold text-primary">Biga:</span> make a firm pre-ferment using 50% of flour (50% hydration).
            </p>
            <ul className="list-disc ml-5 text-foreground/80 space-y-1">
              <li>Prepare biga 12-24h before.</li>
              <li>Add biga to final dough.</li>
              <li>More resistant dough with intense aroma.</li>
            </ul>
          </div>
        )}
      </Card>

      {fermentationMethod !== 'direct' && (
        <Card className="p-4 bg-accent/30 border-none shadow-none mt-4 py-0">
          {fermentationMethod === 'poolish' && (
            <div className="space-y-2">
              <p>
                <span className="font-semibold text-primary">Poolish:</span> Use dry yeast (0.1%) or fresh yeast (0.3%) only in pre-ferment.
              </p>
              <p>Mix 30% flour + same amount of water + yeast.</p>
              <p className="text-xs text-foreground/70 italic mt-2">After ready, add poolish to final dough.</p>
            </div>
          )}
          
          {fermentationMethod === 'biga' && (
            <div className="space-y-2">
              <p>
                <span className="font-semibold text-primary">Biga:</span> Mix 50% flour + 50% water + yeast.
              </p>
              <p>Knead and let ferment before using in final dough.</p>
              <p className="text-xs text-foreground/70 italic mt-2">Ideal for rustic texture and deep flavor.</p>
            </div>
          )}
        </Card>
      )}
    </div>
  );
};

export default FermentationMethodSelect;
