
import { Ingredient } from '../../types';
import { createBaseIngredients } from './common';

export const getBreadIngredients = (
  recipe: string | null,
  flourAmount: number
): { 
  ingredients: Ingredient[], 
  percentages: { 
    waterPercentage: number,
    saltPercentage: number,
    yeastPercentage: number,
    sugarPercentage: number,
    butterPercentage: number,
    honeyPercentage: number,
    seedsPercentage: number
  } 
} => {
  // Set default percentages
  let waterPercentage = 0;
  let saltPercentage = 2.5; // Standard 2.5% salt
  let yeastPercentage = 0.1; // Standard dry yeast percentage
  let sugarPercentage = 0;
  let butterPercentage = 0;
  let honeyPercentage = 0;
  let seedsPercentage = 0;
  
  // Set hydration based on recipe type
  if (recipe?.includes('White Sandwich')) {
    waterPercentage = 65;
    sugarPercentage = 2;
    butterPercentage = 3;
    yeastPercentage = 0.7;
  } else if (recipe?.includes('Crusty Artisan')) {
    waterPercentage = 75;
  } else if (recipe?.includes('Multigrain')) {
    waterPercentage = 70;
    honeyPercentage = 1.5;
    seedsPercentage = 5;
    yeastPercentage = 0.7;
  }
  
  // Start with flour, but adjust for multigrain
  let ingredients: Ingredient[] = [];
  
  if (recipe?.includes('Multigrain')) {
    // Adjust the bread flour to 80% of original amount
    ingredients.push({
      name: 'Bread Flour',
      amount: flourAmount * 0.8,
      unit: 'g',
      scalable: true
    });
    
    // Add whole wheat flour as 20%
    ingredients.push({
      name: 'Whole Wheat Flour',
      amount: flourAmount * 0.2,
      unit: 'g',
      scalable: true
    });
  } else {
    ingredients = createBaseIngredients(flourAmount, recipe);
  }
  
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
  
  if (sugarPercentage > 0) {
    ingredients.push({ 
      name: 'Sugar', 
      amount: (flourAmount * sugarPercentage) / 100, 
      unit: 'g', 
      scalable: true 
    });
  }
  
  if (butterPercentage > 0) {
    ingredients.push({ 
      name: 'Butter', 
      amount: (flourAmount * butterPercentage) / 100, 
      unit: 'g', 
      scalable: true 
    });
  }
  
  if (honeyPercentage > 0) {
    ingredients.push({ 
      name: 'Honey', 
      amount: (flourAmount * honeyPercentage) / 100, 
      unit: 'g', 
      scalable: true 
    });
  }
  
  if (seedsPercentage > 0) {
    ingredients.push({ 
      name: 'Mixed Seeds', 
      amount: (flourAmount * seedsPercentage) / 100, 
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
      sugarPercentage, 
      butterPercentage, 
      honeyPercentage, 
      seedsPercentage 
    } 
  };
};
