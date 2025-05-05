
import { Ingredient } from '../../types';
import { createBaseIngredients } from './common';

export const getFocacciaIngredients = (
  recipe: string | null,
  flourAmount: number
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
  let waterPercentage = 65; // Standard 65% hydration for all focaccias
  let saltPercentage = 2.5; // Standard 2.5% salt
  let yeastPercentage = 0.1; // Standard dry yeast percentage
  let oilPercentage = 8;    // Standard olive oil for focaccia
  let sugarPercentage = 0;
  
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
  
  // Add special ingredients based on recipe
  if (recipe?.includes('Rosemary')) {
    ingredients.push({ 
      name: 'Fresh Rosemary', 
      amount: (flourAmount * 1) / 100, 
      unit: 'g', 
      scalable: true 
    });
    ingredients.push({ 
      name: 'Sea Salt Flakes (for topping)', 
      amount: (flourAmount * 0.5) / 100, 
      unit: 'g', 
      scalable: false 
    });
  } else if (recipe?.includes('Cherry Tomato')) {
    ingredients.push({ 
      name: 'Cherry Tomatoes', 
      amount: (flourAmount * 20) / 100, 
      unit: 'g', 
      scalable: true 
    });
    ingredients.push({ 
      name: 'Mixed Herbs', 
      amount: (flourAmount * 1) / 100, 
      unit: 'g', 
      scalable: true 
    });
  } else if (recipe?.includes('Olive & Garlic')) {
    ingredients.push({ 
      name: 'Olives, pitted and chopped', 
      amount: (flourAmount * 10) / 100, 
      unit: 'g', 
      scalable: true 
    });
    ingredients.push({ 
      name: 'Garlic cloves, minced', 
      amount: (flourAmount * 2) / 100, 
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
