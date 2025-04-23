
import React from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Unit } from './UnitSelect';

type YeastType = 'fresh' | 'dry';

interface DoughInputsProps {
  flour: number;
  setFlour: (v: number) => void;
  hydration: number;
  setHydration: (v: number) => void;
  yeastType: YeastType;
  setYeastType: (v: YeastType) => void;
  unit: Unit;
}

const DoughInputs: React.FC<DoughInputsProps> = ({
  flour, setFlour,
  hydration, setHydration,
  yeastType, setYeastType,
  unit
}) => {
  const salt = (flour * 2.5) / 100;
  const yeast = yeastType === 'fresh' ? (flour * 0.3) / 100 : (flour * 0.1) / 100;

  const getUnitLabel = () => {
    switch(unit) {
      case 'ounces':
        return 'oz';
      case 'cups':
        return 'xíc';
      default:
        return 'g';
    }
  };

  const convertToUnit = (grams: number): number => {
    switch(unit) {
      case 'ounces':
        return grams / 28.35;
      case 'cups':
        return grams / 120;
      default:
        return grams;
    }
  };

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="flour">Quantidade de Farinha ({getUnitLabel()})</Label>
        <Input 
          id="flour" 
          type="number" 
          value={convertToUnit(flour)} 
          onChange={(e) => {
            const value = parseFloat(e.target.value);
            if (unit === 'ounces') {
              setFlour(value * 28.35);
            } else if (unit === 'cups') {
              setFlour(value * 120);
            } else {
              setFlour(value);
            }
          }}
          min="0"
          placeholder="Ex: 1000"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label>Sal ({getUnitLabel()})</Label>
          <Input
            value={convertToUnit(salt).toFixed(1)}
            readOnly
            className="bg-gray-50"
          />
        </div>
        <div className="space-y-2">
          <Label>Fermento ({getUnitLabel()})</Label>
          <Input
            value={convertToUnit(yeast).toFixed(2)}
            readOnly
            className="bg-gray-50"
          />
        </div>
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
              <span>60%</span>
              <span>75%</span>
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
};

export default DoughInputs;
