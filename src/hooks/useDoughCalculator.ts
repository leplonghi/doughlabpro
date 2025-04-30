
import { useState } from 'react';
import { StyleType, DoughCalculatorState } from '@/types/DoughTypes';
import { FermentationMethod } from '@/types/dough';
import { getInitialBallWeight, calculateDoughRecipe, calculateNumberOfBalls } from '@/utils/doughCalculations';
import { validateDoughField } from '@/utils/doughValidation';

export const useDoughCalculator = (style: StyleType, fermentationMethod: FermentationMethod) => {
  const [state, setState] = useState<DoughCalculatorState>({
    flour: 1000,
    hydration: 60,
    yeastType: 'dry',
    ballWeight: getInitialBallWeight(style),
    numberOfBalls: 4,
    errors: {},
  });

  const validateField = (field: string, value: any) => {
    const errors = validateDoughField(field, value, state);
    
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
    
    const { flour, hydration, yeastType, ballWeight } = state;
    
    // Calculate the recipe
    const recipe = calculateDoughRecipe(flour, hydration, yeastType, style, fermentationMethod);
    
    // Calculate number of balls
    const numberOfBalls = calculateNumberOfBalls(recipe, ballWeight);
    
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
      ballWeight: getInitialBallWeight(style),
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
