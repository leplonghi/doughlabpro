import React from 'react';
import { useTranslation } from 'react-i18next';
import { Wheat, Droplets, YeastIcon } from 'lucide-react';
import IngredientSection from './inputs/IngredientSection';
import RangeInput from './inputs/RangeInput';
import ErrorMessage from './inputs/ErrorMessage';
import YeastTypeSelector from './inputs/YeastTypeSelector';
import TotalDoughWeight from './inputs/TotalDoughWeight';
import DoughIngredients from './inputs/DoughIngredients';
import DoughBallSize from './inputs/DoughBallSize';
import { YeastIcon as CustomYeastIcon } from './inputs/CustomIcons';
import { YeastType } from '@/types/dough';

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
  doughType: 'pizza' | 'bread';
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
      <IngredientSection icon={<Wheat className="h-5 w-5" />} label="Flour (100%)">
        <RangeInput 
          min="500"
          max="10000"
          step="500"
          value={flour}
          onChange={handleFlourChange}
          id="flour"
          unitLabel="g"
          hasError={!!errors.flour}
        />
        <ErrorMessage message={errors.flour} />
      </IngredientSection>

      {/* Dough Ball Size */}
      <DoughBallSize 
        ballWeight={ballWeight}
        onBallWeightChange={onBallWeightChange}
        description={getBallDescription()}
        weightRange={weightRange}
      />

      {/* Hydration */}
      <IngredientSection icon={<Droplets className="h-5 w-5" />} label="Hydration">
        <RangeInput 
          min="50"
          max="80"
          value={hydration}
          onChange={handleHydrationRangeChange}
          id="hydration"
          unitLabel="%"
          hasError={!!errors.hydration}
        />
        <ErrorMessage message={errors.hydration} />
      </IngredientSection>

      {/* Other Ingredients */}
      <DoughIngredients 
        salt={{ value: salt }}
        oil={{ 
          value: oil, 
          percentage: oil > 0 ? (oil / flour * 100).toFixed(1) : '',
          notUsed: oil <= 0 
        }}
        sugar={{ 
          value: sugar, 
          percentage: sugar > 0 ? (sugar / flour * 100).toFixed(1) : '',
          notUsed: sugar <= 0 
        }}
        isButterInsteadOfOil={doughType === 'bread' && pizzaStyle === 'brioche'}
      />

      {/* Yeast Type */}
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <CustomYeastIcon className="h-5 w-5" />
          <span className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            Yeast Type
          </span>
        </div>
        <YeastTypeSelector yeastType={yeastType} setYeastType={setYeastType} />
      </div>

      {/* Total Dough Weight Display */}
      <TotalDoughWeight 
        totalWeight={totalDoughWeight} 
        ballDescription={getBallDescription()} 
      />
    </div>
  );
};

export default DoughInputs;
