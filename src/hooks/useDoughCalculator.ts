
import { useState } from 'react';
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
    butter?: number;
    eggs?: number;
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

type StyleType = 'napoletana' | 'newyork' | 'chicago' | 'baguette' | 'brioche' | 'focaccia';

export const useDoughCalculator = (style: StyleType, fermentationMethod: FermentationMethod) => {
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
    
    // Calculate oil and sugar based on style
    let oil = 0;
    let sugar = 0;
    let butter = 0;
    let eggs = 0;
    
    // Determine dough type from style
    const isPizza = ['napoletana', 'newyork', 'chicago'].includes(style);
    
    if (isPizza) {
      if (style === 'napoletana') {
        oil = (flour * 1.5) / 100;
        sugar = 0;
      } else if (style === 'newyork') {
        oil = (flour * 2.5) / 100;
        sugar = (flour * 1.5) / 100;
      } else if (style === 'chicago') {
        oil = (flour * 5) / 100;
        sugar = (flour * 2) / 100;
      }
    } else {
      if (style === 'baguette') {
        oil = 0;
        sugar = 0;
      } else if (style === 'brioche') {
        butter = (flour * 15) / 100;
        sugar = (flour * 8) / 100;
        eggs = Math.ceil((flour * 20) / 100 / 50); // Approximately 50g per egg
      } else if (style === 'focaccia') {
        oil = (flour * 8) / 100;
        sugar = (flour * 1) / 100;
      }
    }
    
    const totalWeight = flour + water + salt + yeast + oil + sugar + butter;
    const numberOfBalls = Math.floor(totalWeight / state.ballWeight);
    
    let recipe: DoughState['recipe'] = {
      flour,
      water,
      salt,
      yeast,
      oil,
      sugar,
    };
    
    // Add special ingredients for bread types
    if (style === 'brioche') {
      recipe.butter = butter;
      recipe.eggs = eggs;
    }
    
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
