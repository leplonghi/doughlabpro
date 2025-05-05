
import { Ingredient } from '../types';
import { getIndividualWeight, roundIngredientAmounts } from './ingredients/common';
import { getPizzaIngredients } from './ingredients/pizza-ingredients';
import { getBreadIngredients } from './ingredients/bread-ingredients';
import { getFocacciaIngredients } from './ingredients/focaccia-ingredients';
import { getSourdoughIngredients } from './ingredients/sourdough-ingredients';

export const getIngredients = (type: string | null, recipe: string | null, quantity: number = 1): Ingredient[] => {
  if (!type || !recipe) return [];

  // Total dough weight based on quantity
  const totalDoughWeight = getIndividualWeight(type) * quantity;
  
  // For all recipes, we'll use baker's percentages to calculate ingredients
  // Default flour percentage
  const flourPercentage = 100;
  
  let ingredients: Ingredient[] = [];
  
  // Get recipe-specific ingredients and percentages
  if (type === 'pizza') {
    const { waterPercentage, saltPercentage, yeastPercentage, oilPercentage, sugarPercentage } = 
      getPizzaIngredients(recipe, 0, 0, 0).percentages;
    
    // Calculate total percentage (sum of all ingredients)
    const totalPercentage = flourPercentage + waterPercentage + saltPercentage + 
                           yeastPercentage + oilPercentage + sugarPercentage;
    
    // Calculate flour amount based on total dough weight and total percentage
    const flourAmount = (totalDoughWeight * flourPercentage) / totalPercentage;
    
    // Get ingredients with the calculated flour amount
    ingredients = getPizzaIngredients(recipe, flourAmount, totalPercentage, totalDoughWeight).ingredients;
  } 
  else if (type === 'bread') {
    const { waterPercentage, saltPercentage, yeastPercentage, sugarPercentage, 
            butterPercentage, honeyPercentage, seedsPercentage } = 
      getBreadIngredients(recipe, 0).percentages;
    
    // Calculate total percentage
    const totalPercentage = flourPercentage + waterPercentage + saltPercentage + 
                           yeastPercentage + sugarPercentage + butterPercentage + 
                           honeyPercentage + seedsPercentage;
    
    // Calculate flour amount
    const flourAmount = (totalDoughWeight * flourPercentage) / totalPercentage;
    
    // Get ingredients
    ingredients = getBreadIngredients(recipe, flourAmount).ingredients;
  } 
  else if (type === 'focaccia') {
    const { waterPercentage, saltPercentage, yeastPercentage, oilPercentage, sugarPercentage } = 
      getFocacciaIngredients(recipe, 0).percentages;
    
    // Calculate total percentage
    const totalPercentage = flourPercentage + waterPercentage + saltPercentage + 
                           yeastPercentage + oilPercentage + sugarPercentage;
    
    // Calculate flour amount
    const flourAmount = (totalDoughWeight * flourPercentage) / totalPercentage;
    
    // Get ingredients
    ingredients = getFocacciaIngredients(recipe, flourAmount).ingredients;
  } 
  else if (type === 'sourdough') {
    const { waterPercentage, saltPercentage, starterPercentage, honeyPercentage, butterPercentage } = 
      getSourdoughIngredients(recipe, 0).percentages;
    
    // Calculate total percentage
    const totalPercentage = flourPercentage + waterPercentage + saltPercentage + 
                           starterPercentage + honeyPercentage + butterPercentage;
    
    // Calculate flour amount
    const flourAmount = (totalDoughWeight * flourPercentage) / totalPercentage;
    
    // Get ingredients
    ingredients = getSourdoughIngredients(recipe, flourAmount).ingredients;
  }
  
  // Round values to make them more readable
  return roundIngredientAmounts(ingredients);
};
