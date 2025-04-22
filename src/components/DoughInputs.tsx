
import React from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

type YeastType = 'fresh' | 'dry';

interface DoughInputsProps {
  flour: number;
  setFlour: (v: number) => void;
  salt: number;
  setSalt: (v: number) => void;
  hydration: number;
  setHydration: (v: number) => void;
  saltPercent: string;
  yeastType: YeastType;
  setYeastType: (v: YeastType) => void;
}

const DoughInputs: React.FC<DoughInputsProps> = ({
  flour, setFlour, salt, setSalt,
  hydration, setHydration, saltPercent,
  yeastType, setYeastType
}) => (
  <div className="space-y-6">
    <div className="space-y-2">
      <Label htmlFor="flour">Quantidade de Farinha (gramas)</Label>
      <Input 
        id="flour" 
        type="number" 
        value={flour} 
        onChange={(e) => setFlour(Number(e.target.value))}
        min="0"
        placeholder="Ex: 1000"
      />
    </div>
    
    <div className="space-y-2">
      <Label htmlFor="salt">Sal (gramas)
        <span className="ml-2 text-xs text-gray-500">({saltPercent}% do peso da farinha)</span>
      </Label>
      <Input
        id="salt"
        type="number"
        value={salt}
        onChange={e => setSalt(Number(e.target.value))}
        min="1"
        className="w-32"
      />
    </div>

    <div className="space-y-2">
      <Label htmlFor="hydration">Hidratação (%)</Label>
      <div className="flex items-center gap-4">
        <Input 
          id="hydration" 
          type="number" 
          value={hydration} 
          onChange={(e) => setHydration(Number(e.target.value))}
          min="50"
          max="90"
          className="w-24"
        />
        <div className="flex-1">
          <input
            type="range"
            min="50"
            max="90"
            value={hydration}
            onChange={(e) => setHydration(Number(e.target.value))}
            className="w-full"
          />
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>50%</span>
            <span>65%</span>
            <span>80%</span>
            <span>90%</span>
          </div>
        </div>
      </div>
    </div>

    <Separator className="my-4" />

    <div className="space-y-3">
      <Label>Tipo de Fermento</Label>
      <RadioGroup 
        value={yeastType} 
        onValueChange={(value) => setYeastType(value as YeastType)}
        className="flex flex-col space-y-2"
      >
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="fresh" id="fresh" />
          <Label htmlFor="fresh">Fermento Fresco (0,3%)</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="dry" id="dry" />
          <Label htmlFor="dry">Fermento Seco (0,1%)</Label>
        </div>
      </RadioGroup>
    </div>
  </div>
);

export default DoughInputs;
