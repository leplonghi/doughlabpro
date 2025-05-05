
import { Ingredient } from '../types';

export const getIngredients = (type: string | null, recipe: string | null, quantity: number = 1): Ingredient[] => {
  if (!type || !recipe) return [];

  // Base flour amount - for learning recipes we use 1000g as base (for 4 dough balls of 250g)
  const baseFlour = 1000;
  
  // Standard ball weight for learning recipes
  const standardBallWeight = 250;
  
  // Calculate how many dough balls we're making
  const doughBallsCount = quantity;
  
  // Scale based on quantity requested (each quantity is one dough ball)
  const flourAmount = (baseFlour / 4) * doughBallsCount;
  
  let ingredients: Ingredient[] = [];

  if (type === 'pizza') {
    if (recipe.includes('Neapolitan')) {
      // Neapolitan - 60% hydration, 2.5% salt, 0.1% yeast, 1% oil
      ingredients = [
        { name: '00 Flour', amount: flourAmount, unit: 'g', scalable: true },
        { name: 'Water', amount: flourAmount * 0.6, unit: 'ml', scalable: true },
        { name: 'Salt', amount: flourAmount * 0.025, unit: 'g', scalable: true },
        { name: 'Dry Yeast', amount: flourAmount * 0.001, unit: 'g', scalable: true },
        { name: 'Olive Oil', amount: flourAmount * 0.01, unit: 'ml', scalable: true }
      ];
    } else if (recipe.includes('New York')) {
      // New York - 65% hydration, 2.5% salt, 0.1% yeast, 2% oil, 1% sugar
      ingredients = [
        { name: 'Bread Flour', amount: flourAmount, unit: 'g', scalable: true },
        { name: 'Water', amount: flourAmount * 0.65, unit: 'ml', scalable: true },
        { name: 'Salt', amount: flourAmount * 0.025, unit: 'g', scalable: true },
        { name: 'Sugar', amount: flourAmount * 0.01, unit: 'g', scalable: true },
        { name: 'Olive Oil', amount: flourAmount * 0.02, unit: 'ml', scalable: true },
        { name: 'Dry Yeast', amount: flourAmount * 0.001, unit: 'g', scalable: true }
      ];
    } else if (recipe.includes('Thin Crispy')) {
      // Thin Crispy - 55% hydration, 2.5% salt, 0.1% yeast, 3% oil
      ingredients = [
        { name: 'All-Purpose Flour', amount: flourAmount, unit: 'g', scalable: true },
        { name: 'Water', amount: flourAmount * 0.55, unit: 'ml', scalable: true },
        { name: 'Salt', amount: flourAmount * 0.025, unit: 'g', scalable: true },
        { name: 'Olive Oil', amount: flourAmount * 0.03, unit: 'ml', scalable: true },
        { name: 'Dry Yeast', amount: flourAmount * 0.001, unit: 'g', scalable: true }
      ];
    }
  } else if (type === 'bread') {
    if (recipe.includes('White Sandwich')) {
      // White Sandwich - 65% hydration, 2.5% salt, 2% sugar, 3% butter, 0.7% yeast
      ingredients = [
        { name: 'Bread Flour', amount: flourAmount, unit: 'g', scalable: true },
        { name: 'Water', amount: flourAmount * 0.65, unit: 'ml', scalable: true },
        { name: 'Salt', amount: flourAmount * 0.025, unit: 'g', scalable: true },
        { name: 'Sugar', amount: flourAmount * 0.02, unit: 'g', scalable: true },
        { name: 'Butter', amount: flourAmount * 0.03, unit: 'g', scalable: true },
        { name: 'Dry Yeast', amount: flourAmount * 0.007, unit: 'g', scalable: true }
      ];
    } else if (recipe.includes('Crusty Artisan')) {
      // Crusty Artisan - 75% hydration, 2.5% salt, 0.1% yeast
      ingredients = [
        { name: 'Bread Flour', amount: flourAmount, unit: 'g', scalable: true },
        { name: 'Water', amount: flourAmount * 0.75, unit: 'ml', scalable: true },
        { name: 'Salt', amount: flourAmount * 0.025, unit: 'g', scalable: true },
        { name: 'Dry Yeast', amount: flourAmount * 0.001, unit: 'g', scalable: true }
      ];
    } else if (recipe.includes('Multigrain')) {
      // Multigrain - 70% hydration, 2.5% salt, 1.5% honey, 5% mixed seeds, 0.7% yeast
      ingredients = [
        { name: 'Bread Flour', amount: flourAmount * 0.8, unit: 'g', scalable: true },
        { name: 'Whole Wheat Flour', amount: flourAmount * 0.2, unit: 'g', scalable: true },
        { name: 'Mixed Seeds', amount: flourAmount * 0.05, unit: 'g', scalable: true },
        { name: 'Water', amount: flourAmount * 0.7, unit: 'ml', scalable: true },
        { name: 'Salt', amount: flourAmount * 0.025, unit: 'g', scalable: true },
        { name: 'Honey', amount: flourAmount * 0.015, unit: 'g', scalable: true },
        { name: 'Dry Yeast', amount: flourAmount * 0.007, unit: 'g', scalable: true }
      ];
    }
  } else if (type === 'focaccia') {
    if (recipe.includes('Rosemary')) {
      // Rosemary Focaccia - 75% hydration, 2.5% salt, 8% olive oil, 0.5% yeast
      ingredients = [
        { name: 'Bread Flour', amount: flourAmount, unit: 'g', scalable: true },
        { name: 'Water', amount: flourAmount * 0.75, unit: 'ml', scalable: true },
        { name: 'Salt', amount: flourAmount * 0.025, unit: 'g', scalable: true },
        { name: 'Olive Oil', amount: flourAmount * 0.08, unit: 'ml', scalable: true },
        { name: 'Fresh Rosemary', amount: flourAmount * 0.01, unit: 'g', scalable: true },
        { name: 'Dry Yeast', amount: flourAmount * 0.005, unit: 'g', scalable: true },
        { name: 'Sea Salt Flakes (for topping)', amount: flourAmount * 0.005, unit: 'g', scalable: false }
      ];
    } else if (recipe.includes('Cherry Tomato')) {
      // Cherry Tomato Focaccia - 80% hydration, 2.5% salt, 8% olive oil, 0.5% yeast
      ingredients = [
        { name: 'Bread Flour', amount: flourAmount, unit: 'g', scalable: true },
        { name: 'Water', amount: flourAmount * 0.8, unit: 'ml', scalable: true },
        { name: 'Salt', amount: flourAmount * 0.025, unit: 'g', scalable: true },
        { name: 'Olive Oil', amount: flourAmount * 0.08, unit: 'ml', scalable: true },
        { name: 'Dry Yeast', amount: flourAmount * 0.005, unit: 'g', scalable: true },
        { name: 'Cherry Tomatoes', amount: flourAmount * 0.2, unit: 'g', scalable: true },
        { name: 'Mixed Herbs', amount: flourAmount * 0.01, unit: 'g', scalable: true }
      ];
    } else if (recipe.includes('Olive & Garlic')) {
      // Olive & Garlic Focaccia - 78% hydration, 2.5% salt, 8% olive oil, 0.5% yeast
      ingredients = [
        { name: 'Bread Flour', amount: flourAmount, unit: 'g', scalable: true },
        { name: 'Water', amount: flourAmount * 0.78, unit: 'ml', scalable: true },
        { name: 'Salt', amount: flourAmount * 0.025, unit: 'g', scalable: true },
        { name: 'Olive Oil', amount: flourAmount * 0.08, unit: 'ml', scalable: true },
        { name: 'Dry Yeast', amount: flourAmount * 0.005, unit: 'g', scalable: true },
        { name: 'Olives, pitted and chopped', amount: flourAmount * 0.1, unit: 'g', scalable: true },
        { name: 'Garlic cloves, minced', amount: flourAmount * 0.02, unit: 'g', scalable: true }
      ];
    }
  } else if (type === 'sourdough') {
    if (recipe.includes('Beginner')) {
      // Beginner Sourdough - 70% hydration, 2.5% salt, 20% starter
      ingredients = [
        { name: 'Bread Flour', amount: flourAmount * 0.8, unit: 'g', scalable: true },
        { name: 'Whole Wheat Flour', amount: flourAmount * 0.2, unit: 'g', scalable: true },
        { name: 'Water', amount: flourAmount * 0.7, unit: 'ml', scalable: true },
        { name: 'Salt', amount: flourAmount * 0.025, unit: 'g', scalable: true },
        { name: 'Sourdough Starter (active)', amount: flourAmount * 0.2, unit: 'g', scalable: true }
      ];
    } else if (recipe.includes('Rustic Country')) {
      // Rustic Country Sourdough - 75% hydration, 2.5% salt, 20% starter
      ingredients = [
        { name: 'Bread Flour', amount: flourAmount * 0.8, unit: 'g', scalable: true },
        { name: 'Whole Wheat Flour', amount: flourAmount * 0.2, unit: 'g', scalable: true },
        { name: 'Water', amount: flourAmount * 0.75, unit: 'ml', scalable: true },
        { name: 'Salt', amount: flourAmount * 0.025, unit: 'g', scalable: true },
        { name: 'Sourdough Starter (active)', amount: flourAmount * 0.2, unit: 'g', scalable: true }
      ];
    } else if (recipe.includes('Sourdough Sandwich')) {
      // Sourdough Sandwich - 65% hydration, 2.5% salt, 15% starter, 1.5% honey, 2.5% butter
      ingredients = [
        { name: 'Bread Flour', amount: flourAmount * 0.9, unit: 'g', scalable: true },
        { name: 'Whole Wheat Flour', amount: flourAmount * 0.1, unit: 'g', scalable: true },
        { name: 'Water', amount: flourAmount * 0.65, unit: 'ml', scalable: true },
        { name: 'Salt', amount: flourAmount * 0.025, unit: 'g', scalable: true },
        { name: 'Honey', amount: flourAmount * 0.015, unit: 'g', scalable: true },
        { name: 'Butter', amount: flourAmount * 0.025, unit: 'g', scalable: true },
        { name: 'Sourdough Starter (active)', amount: flourAmount * 0.15, unit: 'g', scalable: true }
      ];
    }
  }
  
  // Round values to make them more readable
  return ingredients.map(ing => ({
    ...ing,
    amount: Math.round(ing.amount * 10) / 10  // Round to 1 decimal place
  }));
};
