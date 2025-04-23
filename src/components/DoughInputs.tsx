
import React from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { PizzaStyle } from './PizzaStyleSelect';

type YeastType = 'fresh' | 'dry';

interface DoughInputsProps {
  flour: number;
  setFlour: (v: number) => void;
  hydration: number;
  setHydration: (v: number) => void;
  yeastType: YeastType;
  setYeastType: (v: YeastType) => void;
  pizzaStyle: PizzaStyle;
}

const DoughInputs: React.FC<DoughInputsProps> = ({
  flour,
  setFlour,
  hydration,
  setHydration,
  yeastType,
  setYeastType,
  pizzaStyle
}) => {
  const salt = (flour * 2.5) / 100;
  const yeast = yeastType === 'fresh' ? (flour * 0.3) / 100 : (flour * 0.1) / 100;
  const oil = pizzaStyle === "napoletana" ? 0 : (flour * 2.5) / 100;
  const sugar = pizzaStyle === "napoletana" ? 0 : (flour * 2.5) / 100;

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="flour" className="text-foreground">Quantidade de Farinha (g)</Label>
        <Input 
          id="flour" 
          type="number" 
          value={flour || ''}
          onChange={(e) => setFlour(Number(e.target.value))}
          min="0"
          placeholder="Ex: 1000"
          className="text-foreground"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label className="text-foreground">Sal (g)</Label>
          <Input
            value={salt.toFixed(1)}
            readOnly
            className="bg-muted text-muted-foreground"
          />
        </div>
        <div className="space-y-2">
          <Label className="text-foreground">Fermento (g)</Label>
          <Input
            value={yeast.toFixed(2)}
            readOnly
            className="bg-muted text-muted-foreground"
          />
        </div>
        <div className="space-y-2">
          <Label className="text-foreground">Azeite (g)</Label>
          <Input
            value={oil.toFixed(1)}
            readOnly
            className="bg-muted text-muted-foreground"
          />
        </div>
        <div className="space-y-2">
          <Label className="text-foreground">Açúcar (g)</Label>
          <Input
            value={sugar.toFixed(1)}
            readOnly
            className="bg-muted text-muted-foreground"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="hydration" className="text-foreground">Hidratação (%)</Label>
        <div className="flex items-center gap-4">
          <Input 
            id="hydration" 
            type="number" 
            value={hydration} 
            onChange={(e) => setHydration(Number(e.target.value))}
            min="50"
            max="90"
            className="w-24 text-foreground"
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
            <div className="flex justify-between text-xs text-muted-foreground mt-1">
              <span>50%</span>
              <span>60%</span>
              <span>75%</span>
              <span>90%</span>
            </div>
          </div>
        </div>
      </div>

      <Separator className="my-4" />

      <div className="space-y-3">
        <Label className="text-foreground">Tipo de Fermento</Label>
        <RadioGroup 
          value={yeastType} 
          onValueChange={(value) => setYeastType(value as YeastType)}
          className="flex flex-col space-y-2"
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="fresh" id="fresh" />
            <Label htmlFor="fresh" className="text-foreground">Fermento Fresco (0,3%)</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="dry" id="dry" />
            <Label htmlFor="dry" className="text-foreground">Fermento Seco (0,1%)</Label>
          </div>
        </RadioGroup>
      </div>
    </div>
  );
};

export default DoughInputs;
