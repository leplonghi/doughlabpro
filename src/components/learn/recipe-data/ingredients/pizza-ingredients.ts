
import { Ingredient } from '../../types';
import { createBaseIngredients } from './common';

export const getPizzaIngredients = (
  recipe: string | null,
  flourAmount: number,
  totalPercentage: number,
  totalDoughWeight: number
): { 
  ingredients: Ingredient[], 
  percentages: { 
    waterPercentage: number,
    saltPercentage: number,
    yeastPercentage: number,
    oilPercentage: number,
    sugarPercentage: number 
  } 
} => {
  // Set default percentages
  let waterPercentage = 0;
  let saltPercentage = 2.5; // Standard 2.5% salt
  let yeastPercentage = 0.1; // Standard dry yeast percentage
  let oilPercentage = 0;
  let sugarPercentage = 0;
  
  // Set hydration based on recipe type
  if (recipe?.includes('Simple Neapolitan')) {
    waterPercentage = 60;
    // No oil for authentic Neapolitan pizza
    oilPercentage = 0;
  } else if (recipe?.includes('New York Style')) {
    waterPercentage = 65;
    oilPercentage = 2;
    sugarPercentage = 1;
  } else if (recipe?.includes('Thin Crispy')) {
    waterPercentage = 55;
    oilPercentage = 3;
  }
  
  // Start with flour
  let ingredients = createBaseIngredients(flourAmount, recipe);
  
  // Add remaining basic ingredients
  if (waterPercentage > 0) {
    ingredients.push({ 
      name: 'Water', 
      amount: (flourAmount * waterPercentage) / 100, 
      unit: 'ml', 
      scalable: true 
    });
  }
  
  if (saltPercentage > 0) {
    ingredients.push({ 
      name: 'Salt', 
      amount: (flourAmount * saltPercentage) / 100, 
      unit: 'g', 
      scalable: true 
    });
  }
  
  if (yeastPercentage > 0) {
    ingredients.push({ 
      name: 'Dry Yeast', 
      amount: (flourAmount * yeastPercentage) / 100, 
      unit: 'g', 
      scalable: true 
    });
  }
  
  if (oilPercentage > 0) {
    ingredients.push({ 
      name: 'Olive Oil', 
      amount: (flourAmount * oilPercentage) / 100, 
      unit: 'ml', 
      scalable: true 
    });
  }
  
  if (sugarPercentage > 0) {
    ingredients.push({ 
      name: 'Sugar', 
      amount: (flourAmount * sugarPercentage) / 100, 
      unit: 'g', 
      scalable: true 
    });
  }
  
  return { 
    ingredients, 
    percentages: { 
      waterPercentage, 
      saltPercentage, 
      yeastPercentage, 
      oilPercentage, 
      sugarPercentage 
    } 
  };
};
