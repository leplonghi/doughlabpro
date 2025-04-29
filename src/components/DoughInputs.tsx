import React from 'react';
import { PizzaStyle } from './PizzaStyleSelect';
import { useTranslation } from 'react-i18next';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Wheat, Droplets, Waves, GanttChart, CheckCircle, Pizza } from 'lucide-react';

type YeastType = 'fresh' | 'dry';

interface DoughInputsProps {
  flour: number;
  setFlour: (v: number) => void;
  hydration: number;
  setHydration: (v: number) => void;
  yeastType: YeastType;
  setYeastType: (v: YeastType) => void;
  pizzaStyle: PizzaStyle;
  errors: Record<string, string>;
  validateField: (field: string, value: any) => void;
  ballWeight: number;
  onBallWeightChange: (weight: number) => void;
}

const DoughInputs: React.FC<DoughInputsProps> = ({
  flour,
  setFlour,
  hydration,
  setHydration,
  yeastType,
  setYeastType,
  pizzaStyle,
  errors,
  validateField,
  ballWeight,
  onBallWeightChange
}) => {
  const { t } = useTranslation();
  
  const salt = (flour * 2.5) / 100;
  const yeast = yeastType === 'fresh' ? (flour * 0.3) / 100 : (flour * 0.15) / 100;
  const oil = pizzaStyle === "napoletana" ? (flour * 2.5) / 100 : (flour * 3) / 100;
  const sugar = pizzaStyle === "napoletana" ? (flour * 2.5) / 100 : (flour * 3) / 100;
  const water = (flour * hydration) / 100;
  const totalDoughWeight = flour + water + salt + yeast + oil + sugar;
  const numberOfBalls = Math.floor(totalDoughWeight / ballWeight) || 0;

  const handleFlourChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === '' || /^\d+$/.test(value)) {
      setFlour(Number(value));
      validateField('flour', Number(value));
    }
  };

  const handleHydrationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === '' || (/^\d+$/.test(value) && Number(value) >= 50 && Number(value) <= 90)) {
      setHydration(Number(value));
      validateField('hydration', Number(value));
    }
  };

  const handleHydrationRangeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    setHydration(value);
    validateField('hydration', value);
  };

  const handleBallWeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === '' || /^\d+$/.test(value)) {
      const newWeight = Number(value);
      if (newWeight >= 100 && newWeight <= 500) {
        onBallWeightChange(newWeight);
      }
    }
  };

  return (
    <div className="space-y-6">
      {/* Flour Input with Slider */}
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <Wheat className="h-5 w-5" />
          <Label htmlFor="flour">Flour (100%)</Label>
        </div>
        <div className="flex gap-4">
          <div className="flex-1">
            <input
              type="range"
              min="500"
              max="2000"
              step="50"
              value={flour}
              onChange={handleFlourChange}
              className="w-full accent-black"
            />
          </div>
          <div className="w-24 flex items-center">
            <Input
              id="flour"
              type="number"
              value={flour || ''}
              onChange={handleFlourChange}
              className={`text-right ${errors.flour ? "border-red-500" : ""}`}
            />
            <span className="ml-1">g</span>
          </div>
        </div>
        {errors.flour && (
          <p className="text-red-500 text-sm">{errors.flour}</p>
        )}
      </div>

      {/* Dough Ball Weight */}
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <Pizza className="h-5 w-5" />
          <Label htmlFor="ballWeight">Dough Ball Weight</Label>
        </div>
        <div className="flex gap-4">
          <div className="flex-1">
            <input
              type="range"
              min="200"
              max="400"
              step="10"
              value={ballWeight}
              onChange={(e) => onBallWeightChange(Number(e.target.value))}
              className="w-full accent-black"
            />
          </div>
          <div className="w-24 flex items-center">
            <Input
              id="ballWeight"
              type="number"
              value={ballWeight || ''}
              onChange={(e) => onBallWeightChange(Number(e.target.value))}
              className="text-right"
            />
            <span className="ml-1">g</span>
          </div>
        </div>
        <p className="text-sm text-gray-600">{numberOfBalls} pizza{numberOfBalls !== 1 ? 's' : ''}</p>
      </div>

      {/* Hydration */}
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <Droplets className="h-5 w-5" />
          <Label htmlFor="hydration">Hydration</Label>
        </div>
        <div className="flex gap-4">
          <div className="flex-1">
            <input
              type="range"
              min="50"
              max="80"
              value={hydration}
              onChange={handleHydrationRangeChange}
              className="w-full accent-black"
            />
          </div>
          <div className="w-24 flex items-center">
            <Input
              id="hydration"
              type="number"
              value={hydration || ''}
              onChange={handleHydrationChange}
              className={`text-right ${errors.hydration ? "border-red-500" : ""}`}
            />
            <span className="ml-1">%</span>
          </div>
        </div>
        {errors.hydration && (
          <p className="text-red-500 text-sm">{errors.hydration}</p>
        )}
      </div>

      {/* Salt */}
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <Waves className="h-5 w-5" />
          <Label>Salt</Label>
        </div>
        <div className="flex gap-4">
          <div className="flex-1">
            <div className="text-sm">2.5% of flour weight</div>
          </div>
          <div className="w-24">
            <div className="text-right font-medium">{salt.toFixed(1)}g</div>
          </div>
        </div>
      </div>

      {/* Olive Oil */}
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <GanttChart className="h-5 w-5" />
          <Label>Olive Oil</Label>
        </div>
        <div className="flex gap-4">
          <div className="flex-1">
            <div className="text-sm">2.5% of flour weight</div>
          </div>
          <div className="w-24">
            <div className="text-right font-medium">{oil.toFixed(1)}g</div>
          </div>
        </div>
      </div>

      {/* Sugar */}
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <CheckCircle className="h-5 w-5" />
          <Label>Sugar</Label>
        </div>
        <div className="flex gap-4">
          <div className="flex-1">
            <div className="text-sm">2.5% of flour weight</div>
          </div>
          <div className="w-24">
            <div className="text-right font-medium">{sugar.toFixed(1)}g</div>
          </div>
        </div>
      </div>

      {/* Yeast Type */}
      <div className="space-y-3">
        <Label>Yeast Type</Label>
        <div className="grid grid-cols-2 gap-3">
          <button
            type="button"
            onClick={() => setYeastType('fresh')}
            className={`py-3 px-4 border rounded-md text-center ${
              yeastType === 'fresh'
                ? 'bg-black text-white border-black'
                : 'border-gray-200 bg-white'
            }`}
          >
            Fresh (0.3% - 3g)
          </button>
          <button
            type="button"
            onClick={() => setYeastType('dry')}
            className={`py-3 px-4 border rounded-md text-center ${
              yeastType === 'dry'
                ? 'bg-black text-white border-black'
                : 'border-gray-200 bg-white'
            }`}
          >
            Dry (0.15% - 2g)
          </button>
        </div>
      </div>

      {/* Total Dough Weight Display */}
      <div className="pt-4 border-t border-gray-200">
        <div className="flex justify-between items-center">
          <div className="font-medium">Total Dough Weight</div>
          <div className="font-bold">{totalDoughWeight.toFixed(0)}g ({numberOfBalls} pizzas)</div>
        </div>
      </div>
    </div>
  );
};

export default DoughInputs;
