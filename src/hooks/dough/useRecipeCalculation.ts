
import { StyleType, FermentationMethod, DoughRecipe } from '@/types/dough';

export const useRecipeCalculation = () => {
  const calculateRecipeIngredients = (
    flour: number, 
    hydration: number, 
    yeastType: 'fresh' | 'dry',
    style: StyleType
  ) => {
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
    
    return {
      water,
      salt,
      yeast,
      oil,
      butter,
      sugar,
      eggs
    };
  };

  const createRecipe = (
    flour: number, 
    hydration: number, 
    yeastType: 'fresh' | 'dry', 
    style: StyleType, 
    fermentationMethod: FermentationMethod,
    ballWeight: number
  ): { recipe: DoughRecipe, numberOfBalls: number } => {
    const { water, salt, yeast, oil, butter, sugar } = calculateRecipeIngredients(flour, hydration, yeastType, style);
    
    const totalWeight = flour + water + salt + yeast + (butter || oil) + (sugar || 0);
    const numberOfBalls = Math.floor(totalWeight / ballWeight);
    
    let recipe: DoughRecipe = {
      flour,
      water,
      salt,
      yeast,
      oil: butter || oil,
    };

    if (sugar) {
      recipe.sugar = sugar;
    }
    
    // Add special ingredients for bread types
    if (style === 'brioche') {
      recipe.butter = butter;
      recipe.eggs = eggs;
    }
    
    // Handle preferment methods
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
    
    return { recipe, numberOfBalls };
  };

  return {
    calculateRecipeIngredients,
    createRecipe
  };
};
