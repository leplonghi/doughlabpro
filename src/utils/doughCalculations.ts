
import { StyleType } from '@/types/DoughTypes';
import { FermentationMethod } from '@/types/dough';

export const getInitialBallWeight = (style: StyleType): number => {
  if (['napoletana', 'newyork', 'chicago'].includes(style as string)) {
    return 250; // Default pizza ball weight
  } else if (style === 'baguette') {
    return 350; // French baguette
  } else if (style === 'brioche') {
    return 600; // Brioche loaf
  } else if (style === 'focaccia') {
    return 500; // Focaccia sheet
  }
  return 250; // Default
};

export const calculateDoughRecipe = (
  flour: number,
  hydration: number,
  yeastType: 'fresh' | 'dry',
  style: StyleType,
  fermentationMethod: FermentationMethod
) => {
  // Calculate base values
  const water = (flour * hydration) / 100;
  const salt = (flour * 2.5) / 100;
  const yeast = yeastType === 'fresh' ? (flour * 0.3) / 100 : (flour * 0.15) / 100;
  
  // Calculate oil and sugar based on style
  let oil = 0;
  let sugar = 0;
  let butter = 0;
  let eggs = 0;
  
  // Determine dough type from style
  const isPizza = ['napoletana', 'newyork', 'chicago'].includes(style as string);
  
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
  
  let recipe: any = {
    flour,
    water,
    salt,
    yeast,
    oil: butter || oil,
    sugar,
  };
  
  // Add special ingredients for bread types
  if (style === 'brioche') {
    recipe.butter = butter;
    recipe.eggs = eggs;
  }
  
  // Calculate pre-ferments if needed
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
  
  return recipe;
};

export const calculateNumberOfBalls = (recipe: any, ballWeight: number): number => {
  // Calculate total weight
  let totalWeight = recipe.flour + recipe.water + recipe.salt + recipe.yeast;
  
  // Add oil or butter
  totalWeight += recipe.oil || 0;
  
  // Add sugar if present
  totalWeight += recipe.sugar || 0;
  
  // Add poolish components if present
  if (recipe.poolish) {
    totalWeight += recipe.poolish.flour + recipe.poolish.water + recipe.poolish.yeast;
  }
  
  // Add biga components if present
  if (recipe.biga) {
    totalWeight += recipe.biga.flour + recipe.biga.water + recipe.biga.yeast;
  }
  
  return Math.floor(totalWeight / ballWeight);
};
