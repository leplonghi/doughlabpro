
import React from 'react';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

export type Unit = 'grams' | 'ounces' | 'cups';

interface UnitSelectProps {
  unit: Unit;
  onChange: (value: Unit) => void;
}

const UnitSelect: React.FC<UnitSelectProps> = ({ unit, onChange }) => (
  <div className="space-y-3">
    <Label>Measurement Units</Label>
    <RadioGroup 
      value={unit} 
      onValueChange={(value) => onChange(value as Unit)}
      className="flex gap-4"
    >
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="grams" id="grams" />
        <Label htmlFor="grams">Grams</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="ounces" id="ounces" />
        <Label htmlFor="ounces">Ounces</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="cups" id="cups" />
        <Label htmlFor="cups">Cups/Spoons</Label>
      </div>
    </RadioGroup>
  </div>
);

export default UnitSelect;
