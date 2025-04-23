
import { useState, useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';
import { DoughRecipe, DoughState, FermentationMethod, YeastType } from '@/types/dough';
import { PizzaStyle } from '@/components/PizzaStyleSelect';

export const useDoughCalculator = (pizzaStyle: PizzaStyle, fermentationMethod: FermentationMethod) => {
  const [state, setState] = useState<DoughState>({
    flour: 1000,
    hydration: 60,
    yeastType: 'dry' as YeastType,
    ballWeight: 250,
    numberOfBalls: 0,
    recipe: null,
    errors: {},
    isLiveCalculation: false,
  });

  const { toast } = useToast();

  const validateField = (field: string, value: any) => {
    const newErrors = { ...state.errors };
    
    switch (field) {
      case 'flour':
        if (!value) {
          newErrors.flour = 'Flour amount is required';
        } else if (value < 100) {
          newErrors.flour = 'Minimum amount is 100g';
        } else if (value > 10000) {
          newErrors.flour = 'Maximum amount is 10,000g';
        } else {
          delete newErrors.flour;
        }
        break;
      case 'hydration':
        if (!value) {
          newErrors.hydration = 'Hydration percentage is required';
        } else if (value < 50) {
          newErrors.hydration = 'Minimum hydration is 50%';
        } else if (value > 90) {
          newErrors.hydration = 'Maximum hydration is 90%';
        } else {
          delete newErrors.hydration;
        }
        break;
    }

    setState(prev => ({ ...prev, errors: newErrors }));
    return Object.keys(newErrors).length === 0;
  };

  const calculateNumberOfBalls = () => {
    if (state.flour && state.ballWeight && state.ballWeight > 0) {
      const water = (state.flour * state.hydration) / 100;
      const salt = (state.flour * 2.5) / 100;
      const yeast = state.yeastType === 'fresh' ? (state.flour * 0.3) / 100 : (state.flour * 0.1) / 100;
      const oil = pizzaStyle === "napoletana" ? 0 : (state.flour * 2.5) / 100;
      const sugar = pizzaStyle === "napoletana" ? 0 : (state.flour * 2.5) / 100;
      
      const totalDoughWeight = state.flour + water + salt + yeast + oil + (sugar || 0);
      const balls = Math.floor(totalDoughWeight / state.ballWeight);
      
      setState(prev => ({ ...prev, numberOfBalls: balls }));
      return balls;
    }
    setState(prev => ({ ...prev, numberOfBalls: 0 }));
    return 0;
  };

  const validateForm = () => {
    const flourValid = validateField('flour', state.flour);
    const hydrationValid = validateField('hydration', state.hydration);
    return flourValid && hydrationValid;
  };

  const calculateRecipe = () => {
    if (!validateForm()) {
      toast({
        title: "Validation Error",
        description: "Please fix the errors in the form.",
        variant: "destructive"
      });
      return;
    }

    const water = (state.flour * state.hydration) / 100;
    const salt = (state.flour * 2.5) / 100;
    const yeast = state.yeastType === 'fresh' ? (state.flour * 0.3) / 100 : (state.flour * 0.1) / 100;
    const oil = pizzaStyle === "napoletana" ? 0 : (state.flour * 2.5) / 100;
    const sugar = pizzaStyle === "napoletana" ? 0 : (state.flour * 2.5) / 100;

    let newRecipe: DoughRecipe = {
      flour: state.flour,
      water,
      salt,
      yeast,
      oil,
      sugar
    };

    if (fermentationMethod === 'poolish') {
      const poolishFlour = (state.flour * 30) / 100;
      const poolishWater = poolishFlour;
      const poolishYeast = (poolishFlour * 0.1) / 100;

      newRecipe = {
        flour: state.flour - poolishFlour,
        water: water - poolishWater,
        salt,
        yeast: 0,
        oil,
        sugar,
        poolish: {
          flour: poolishFlour,
          water: poolishWater,
          yeast: poolishYeast
        }
      };
    } else if (fermentationMethod === 'biga') {
      const bigaFlour = (state.flour * 50) / 100;
      const bigaWater = (bigaFlour * 50) / 100;
      const bigaYeast = (bigaFlour * 0.1) / 100;

      newRecipe = {
        flour: state.flour - bigaFlour,
        water: water - bigaWater,
        salt,
        yeast: 0,
        oil,
        sugar,
        biga: {
          flour: bigaFlour,
          water: bigaWater,
          yeast: bigaYeast
        }
      };
    }

    setState(prev => ({ ...prev, recipe: newRecipe }));
    calculateNumberOfBalls();

    if (!state.isLiveCalculation) {
      toast({
        title: "Recipe calculated",
        description:
          pizzaStyle === "napoletana"
            ? "Your Neapolitan pizza recipe has been calculated successfully!"
            : "Your New York Style pizza recipe has been calculated successfully!",
      });
    }
  };

  // Effect for live calculation
  useEffect(() => {
    if (state.isLiveCalculation && Object.keys(state.errors).length === 0 && state.flour > 0) {
      calculateRecipe();
    }
  }, [state.flour, state.hydration, state.yeastType, pizzaStyle, fermentationMethod, state.isLiveCalculation, state.ballWeight]);

  // Enable live calculation after initial manual calculation
  useEffect(() => {
    if (state.recipe && !state.isLiveCalculation) {
      setState(prev => ({ ...prev, isLiveCalculation: true }));
    }
  }, [state.recipe]);

  return {
    state,
    setState,
    validateField,
    calculateRecipe,
  };
};
