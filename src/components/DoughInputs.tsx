
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Wheat, Droplets, Waves, GanttChart, CheckCircle, Pizza, Bed, Weight, CircleDot } from 'lucide-react';

type YeastType = 'fresh' | 'dry';
type DoughType = 'pizza' | 'bread';
type PizzaStyle = 'napoletana' | 'newyork' | 'chicago';
type BreadStyle = 'baguette' | 'brioche' | 'focaccia';
type StyleType = PizzaStyle | BreadStyle;

interface DoughInputsProps {
  flour: number;
  setFlour: (v: number) => void;
  hydration: number;
  setHydration: (v: number) => void;
  yeastType: YeastType;
  setYeastType: (v: YeastType) => void;
  pizzaStyle: StyleType;
  doughType: DoughType;
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
  doughType,
  errors,
  validateField,
  ballWeight,
  onBallWeightChange
}) => {
  // Use safe translation access with fallbacks
  const { t = (key: string) => key, ready = true } = useTranslation();
  
  // Calculate ingredients based on dough type
  const salt = (flour * 2.5) / 100;
  const yeast = yeastType === 'fresh' ? (flour * 0.3) / 100 : (flour * 0.15) / 100;
  
  // Adjust oil and sugar based on dough type and style
  let oil = 0;
  let sugar = 0;
  
  if (doughType === 'pizza') {
    if (pizzaStyle === 'napoletana') {
      oil = (flour * 1.5) / 100;
      sugar = 0;
    } else if (pizzaStyle === 'newyork') {
      oil = (flour * 2.5) / 100;
      sugar = (flour * 1.5) / 100;
    } else if (pizzaStyle === 'chicago') {
      oil = (flour * 5) / 100;
      sugar = (flour * 2) / 100;
    }
  } else if (doughType === 'bread') {
    if (pizzaStyle === 'baguette') {
      oil = 0;
      sugar = 0;
    } else if (pizzaStyle === 'brioche') {
      oil = (flour * 15) / 100; // Butter for brioche
      sugar = (flour * 8) / 100;
    } else if (pizzaStyle === 'focaccia') {
      oil = (flour * 8) / 100;
      sugar = (flour * 1) / 100;
    }
  }
  
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

  // Get description for the number of balls based on dough type and style
  const getBallDescription = () => {
    if (doughType === 'pizza') {
      return `${numberOfBalls} pizza${numberOfBalls !== 1 ? 's' : ''}`;
    } else {
      if (pizzaStyle === 'baguette') {
        return `${numberOfBalls} baguette${numberOfBalls !== 1 ? 's' : ''} (each approx. 35cm long)`;
      } else if (pizzaStyle === 'brioche') {
        return `${numberOfBalls} brioche loaf/loaves (approx. 10cm × 20cm each)`;
      } else if (pizzaStyle === 'focaccia') {
        return `${numberOfBalls} focaccia sheet${numberOfBalls !== 1 ? 's' : ''} (approx. 20cm × 30cm)`;
      }
    }
    return '';
  };

  // Get min/max weight range based on dough type and style
  const getWeightRange = () => {
    if (doughType === 'pizza') {
      return { min: 200, max: 400, step: 10 };
    } else {
      if (pizzaStyle === 'baguette') {
        return { min: 350, max: 450, step: 10 };
      } else if (pizzaStyle === 'brioche') {
        return { min: 500, max: 800, step: 50 };
      } else if (pizzaStyle === 'focaccia') {
        return { min: 400, max: 800, step: 50 };
      }
      return { min: 350, max: 800, step: 50 };
    }
  };

  const weightRange = getWeightRange();

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

      {/* Dough Ball Size */}
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <Weight className="h-5 w-5" />
          <Label htmlFor="ballWeight">Doughball Size</Label>
        </div>
        <div className="flex gap-4">
          <div className="flex-1">
            <input
              type="range"
              min={weightRange.min}
              max={weightRange.max}
              step={weightRange.step}
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
        <p className="text-sm text-gray-600">
          {getBallDescription()}
        </p>
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

      {/* Olive Oil or Butter */}
      {oil > 0 && (
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <GanttChart className="h-5 w-5" />
            <Label>
              {doughType === 'bread' && pizzaStyle === 'brioche' ? 'Butter' : 'Olive Oil'}
            </Label>
          </div>
          <div className="flex gap-4">
            <div className="flex-1">
              <div className="text-sm">
                {oil > 0 
                  ? `${(oil / flour * 100).toFixed(1)}% of flour weight` 
                  : 'Not used in this recipe'}
              </div>
            </div>
            <div className="w-24">
              <div className="text-right font-medium">{oil.toFixed(1)}g</div>
            </div>
          </div>
        </div>
      )}

      {/* Sugar */}
      {sugar > 0 && (
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5" />
            <Label>Sugar</Label>
          </div>
          <div className="flex gap-4">
            <div className="flex-1">
              <div className="text-sm">
                {sugar > 0 
                  ? `${(sugar / flour * 100).toFixed(1)}% of flour weight` 
                  : 'Not used in this recipe'}
              </div>
            </div>
            <div className="w-24">
              <div className="text-right font-medium">{sugar.toFixed(1)}g</div>
            </div>
          </div>
        </div>
      )}

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
          <div className="font-bold">
            {totalDoughWeight.toFixed(0)}g 
          </div>
        </div>
        <p className="text-sm text-gray-500 mt-1">
          {getBallDescription()}
        </p>
      </div>
    </div>
  );
};

export default DoughInputs;
