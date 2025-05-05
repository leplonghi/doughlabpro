
import { useState } from 'react';
import { FermentationMethod, StyleType, DoughState } from '@/types/dough';
import { useInitialValues } from './dough/useInitialValues';
import { useValidation } from './dough/useValidation';
import { useRecipeCalculation } from './dough/useRecipeCalculation';

export const useDoughCalculator = (style: StyleType, fermentationMethod: FermentationMethod) => {
  const { getInitialBallWeight } = useInitialValues(style);
  
  const [state, setState] = useState<DoughState>({
    flour: 1000,
    hydration: 60,
    yeastType: 'dry',
    ballWeight: getInitialBallWeight(),
    numberOfBalls: 4,
    errors: {},
  });
  
  const { validateField } = useValidation(state);
  const { createRecipe } = useRecipeCalculation();

  const validateAndUpdateErrors = (field: string, value: any) => {
    const { errors, isValid } = validateField(field, value);
    
    setState(prev => ({
      ...prev,
      errors: {
        ...prev.errors,
        ...errors,
      }
    }));
    
    return isValid;
  };

  const calculateRecipe = () => {
    if (!validateAndUpdateErrors('all', null)) {
      return;
    }
    
    const { flour, hydration, yeastType, ballWeight } = state;
    const { recipe, numberOfBalls } = createRecipe(
      flour, 
      hydration, 
      yeastType, 
      style, 
      fermentationMethod, 
      ballWeight
    );
    
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
      ballWeight: getInitialBallWeight(),
      numberOfBalls: 4,
      errors: {},
      recipe: undefined
    });
  };

  return {
    state,
    setState,
    validateField: validateAndUpdateErrors,
    calculateRecipe,
    resetForm,
    // Always use red color for the advanced calculator
    themeColor: 'red'
  };
};
