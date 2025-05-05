
import { Ingredient } from '../../types';

// Helper function to round values for readability
export const roundIngredientAmounts = (ingredients: Ingredient[]): Ingredient[] => {
  return ingredients.map(ing => ({
    ...ing,
    amount: Math.round(ing.amount * 10) / 10  // Round to 1 decimal place
  }));
};

// Calculate base dough weight
export const getIndividualWeight = (type: string | null): number => {
  if (type === 'pizza') return 250; // Default for pizza
  if (type === 'bread') return 500; // 500g per bread loaf
  if (type === 'focaccia') return 500; // 500g for focaccia
  if (type === 'sourdough') return 800; // 800g for sourdough loaf
  return 250; // Default
};

// Get specific pizza dough ball weight based on recipe name
export const getPizzaDoughBallWeight = (recipeName: string | null): number => {
  if (recipeName?.includes('Neapolitan')) return 250;
  if (recipeName?.includes('New York')) return 350;
  if (recipeName?.includes('Thin Crispy')) return 200;
  return 250; // Default
};

// Create base ingredients array with flour
export const createBaseIngredients = (
  flourAmount: number, 
  recipeName: string | null
): Ingredient[] => {
  return [
    { 
      name: recipeName?.includes('Neapolitan') ? '00 Flour' : 'Bread Flour', 
      amount: flourAmount, 
      unit: 'g', 
      scalable: true 
    }
  ];
};
