import { useState } from 'react';
import { PizzaStyle } from '@/components/PizzaStyleSelect';
import { FermentationMethod } from '@/types/dough';

interface DoughState {
  flour: number;
  hydration: number;
  yeastType: 'fresh' | 'dry';
  ballWeight: number;
  numberOfBalls: number;
  errors: {
    flour?: string;
    hydration?: string;
  };
  recipe?: {
    flour: number;
    water: number;
    salt: number;
    yeast: number;
    oil: number;
    sugar?: number;
    poolish?: {
      flour: number;
      water: number;
      yeast: number;
    };
    biga?: {
      flour: number;
      water: number;
      yeast: number;
    };
  };
}

export const useDoughCalculator = (pizzaStyle: PizzaStyle, fermentationMethod: FermentationMethod) => {
  const [state, setState] = useState<DoughState>({
    flour: 1000,
    hydration: 60,
    yeastType: 'dry',
    ballWeight: 250,
    numberOfBalls: 4,
    errors: {},
  });

  const validateField = (field: string, value: any) => {
    const errors: Record<string, string> = {};
    
    if (field === 'flour' || field === 'all') {
      if (!state.flour || state.flour < 100) {
        errors.flour = 'Please enter a valid flour amount (min 100g)';
      }
    }
    
    if (field === 'hydration' || field === 'all') {
      if (!state.hydration || state.hydration < 50 || state.hydration > 90) {
        errors.hydration = 'Hydration should be between 50% and 90%';
      }
    }
    
    setState(prev => ({
      ...prev,
      errors: {
        ...prev.errors,
        ...errors,
      }
    }));
    
    return Object.keys(errors).length === 0;
  };

  const calculateRecipe = () => {
    if (!validateField('all', null)) {
      return;
    }
    
    const { flour, hydration, yeastType } = state;
    const water = (flour * hydration) / 100;
    const salt = (flour * 2.5) / 100;
    const yeast = yeastType === 'fresh' ? (flour * 0.3) / 100 : (flour * 0.15) / 100;
    const oil = pizzaStyle === "napoletana" ? 0 : (flour * 2.5) / 100;
    const sugar = pizzaStyle === "napoletana" ? 0 : (flour * 2.5) / 100;
    
    const totalWeight = flour + water + salt + yeast + oil + sugar;
    const numberOfBalls = Math.floor(totalWeight / state.ballWeight);
    
    let recipe: DoughState['recipe'] = {
      flour,
      water,
      salt,
      yeast,
      oil,
      sugar,
    };
    
    if (fermentationMethod === 'poolish') {
      const poolishFlour = flour * 0.3;
      const poolishWater = poolishFlour;
      const poolishYeast = poolishFlour * 0.001;
      
      recipe = {
        ...recipe,
        flour: flour - poolishFlour,
        water: water - poolishWater,
        poolish: {
          flour: poolishFlour,
          water: poolishWater,
          yeast: poolishYeast,
        }
      };
    } else if (fermentationMethod === 'biga') {
      const bigaFlour = flour * 0.3;
      const bigaWater = bigaFlour * 0.6;
      const bigaYeast = bigaFlour * 0.0005;
      
      recipe = {
        ...recipe,
        flour: flour - bigaFlour,
        water: water - bigaWater,
        biga: {
          flour: bigaFlour,
          water: bigaWater,
          yeast: bigaYeast,
        }
      };
    }
    
    setState(prev => ({
      ...prev,
      recipe,
      numberOfBalls,
    }));
    
    // Scroll to results
    setTimeout(() => {
      document.getElementById('results')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const resetForm = () => {
    setState({
      flour: 1000,
      hydration: 60,
      yeastType: 'dry',
      ballWeight: 250,
      numberOfBalls: 4,
      errors: {},
      recipe: undefined
    });
  };

  return {
    state,
    setState,
    validateField,
    calculateRecipe,
    resetForm
  };
};
