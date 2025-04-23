
import React from 'react';
import { Separator } from '@/components/ui/separator';
import BallWeightInput from './inputs/BallWeightInput';
import FlourInput from './inputs/FlourInput';
import HydrationInput from './inputs/HydrationInput';
import YeastSelector from './inputs/YeastSelector';
import IngredientDisplay from './inputs/IngredientDisplay';
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
  const salt = (flour * 2.5) / 100;
  const yeast = yeastType === 'fresh' ? (flour * 0.3) / 100 : (flour * 0.15) / 100;
  const oil = pizzaStyle === "napoletana" ? 0 : (flour * 2.5) / 100;
  const sugar = pizzaStyle === "napoletana" ? 0 : (flour * 2.5) / 100;

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
      <BallWeightInput
        ballWeight={ballWeight}
        flour={flour}
        onBallWeightChange={handleBallWeightChange}
      />

      <FlourInput
        flour={flour}
        onChange={handleFlourChange}
        error={errors.flour}
      />

      <div className="grid grid-cols-2 gap-4">
        <IngredientDisplay label="Salt (g)" value={salt} />
        <IngredientDisplay label="Yeast (g)" value={yeast} />
        <IngredientDisplay label="Olive Oil (g)" value={oil} />
        <IngredientDisplay label="Sugar (g)" value={sugar} />
      </div>

      <HydrationInput
        hydration={hydration}
        onInputChange={handleHydrationChange}
        onRangeChange={handleHydrationRangeChange}
        error={errors.hydration}
      />

      <Separator className="my-4" />

      <YeastSelector
        yeastType={yeastType}
        onYeastTypeChange={setYeastType}
      />
    </div>
  );
};

export default DoughInputs;
