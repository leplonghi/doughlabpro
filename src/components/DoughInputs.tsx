
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Wheat, Droplets, Weight, CircleDot } from 'lucide-react';

// Custom icons for ingredients
const SaltIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M14 8v.01" />
    <path d="M12 10v.01" />
    <path d="M16 10v.01" />
    <path d="M14 12v.01" />
    <path d="M6 14a4 4 0 0 1 4-4h4a4 4 0 0 1 0 8h-4a4 4 0 0 1-4-4z" />
    <path d="M17 18a4 4 0 0 0 0-8" />
    <path d="M14 14h.01" />
    <path d="M3 14h.01" />
    <path d="M7 14h.01" />
  </svg>
);

const OilIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M5 14c.5-3.5 2-6 3-9" />
    <path d="M14 4h.5C17 4 19 6 19 8.5c0 .5 0 1-.5 1.5" />
    <path d="M8.5 13C5 15 7 20 12 20h2.5c2.5 0 4.5-2 4.5-4.5 0-3-2-5.5-5-5.5-3 0-5 2-5.5 3z" />
  </svg>
);

const YeastIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M4 11a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z" />
    <path d="M8 9V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v4" />
    <path d="M8 9V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v4" />
    <path d="M9.5 13.5v2" />
    <path d="M14.5 13.5v2" />
  </svg>
);

const SugarIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M9 13V7c0-1.1.9-2 2-2h0a2 2 0 0 1 2 2v6" />
    <path d="M5 13V9a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2v4" />
    <path d="M15 13v-3a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2v3" />
    <path d="M3 13h18v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
  </svg>
);

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
          <SaltIcon className="h-5 w-5" />
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
            <OilIcon className="h-5 w-5" />
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
            <SugarIcon className="h-5 w-5" />
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
        <div className="flex items-center gap-2">
          <YeastIcon className="h-5 w-5" />
          <Label>Yeast Type</Label>
        </div>
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
