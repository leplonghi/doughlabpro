
import { Ingredient } from '../types';

export const getIngredients = (type: string | null, recipe: string | null, quantity: number = 1): Ingredient[] => {
  if (!type || !recipe) return [];

  let baseIngredients: Ingredient[] = [];

  if (type === 'pizza') {
    if (recipe.includes('Neapolitan')) {
      baseIngredients = [
        { name: '00 Flour', amount: 500, unit: 'g', scalable: true },
        { name: 'Water', amount: 300, unit: 'ml', scalable: true },
        { name: 'Salt', amount: 10, unit: 'g', scalable: true },
        { name: 'Dry Yeast', amount: 3, unit: 'g', scalable: true },
        { name: 'Olive Oil', amount: 15, unit: 'ml', scalable: true }
      ];
    } else if (recipe.includes('New York')) {
      baseIngredients = [
        { name: 'Bread Flour', amount: 500, unit: 'g', scalable: true },
        { name: 'Water', amount: 325, unit: 'ml', scalable: true },
        { name: 'Salt', amount: 10, unit: 'g', scalable: true },
        { name: 'Sugar', amount: 15, unit: 'g', scalable: true },
        { name: 'Olive Oil', amount: 25, unit: 'ml', scalable: true },
        { name: 'Dry Yeast', amount: 5, unit: 'g', scalable: true }
      ];
    } else if (recipe.includes('Thin Crispy')) {
      baseIngredients = [
        { name: 'All-Purpose Flour', amount: 400, unit: 'g', scalable: true },
        { name: 'Water', amount: 220, unit: 'ml', scalable: true },
        { name: 'Salt', amount: 8, unit: 'g', scalable: true },
        { name: 'Olive Oil', amount: 30, unit: 'ml', scalable: true },
        { name: 'Dry Yeast', amount: 4, unit: 'g', scalable: true }
      ];
    }
  } else if (type === 'bread') {
    if (recipe.includes('White Sandwich')) {
      baseIngredients = [
        { name: 'Bread Flour', amount: 500, unit: 'g', scalable: true },
        { name: 'Water', amount: 325, unit: 'ml', scalable: true },
        { name: 'Salt', amount: 10, unit: 'g', scalable: true },
        { name: 'Sugar', amount: 20, unit: 'g', scalable: true },
        { name: 'Butter', amount: 30, unit: 'g', scalable: true },
        { name: 'Dry Yeast', amount: 7, unit: 'g', scalable: true }
      ];
    } else if (recipe.includes('Crusty Artisan')) {
      baseIngredients = [
        { name: 'Bread Flour', amount: 500, unit: 'g', scalable: true },
        { name: 'Water', amount: 375, unit: 'ml', scalable: true },
        { name: 'Salt', amount: 10, unit: 'g', scalable: true },
        { name: 'Dry Yeast', amount: 3, unit: 'g', scalable: true }
      ];
    } else if (recipe.includes('Multigrain')) {
      baseIngredients = [
        { name: 'Bread Flour', amount: 400, unit: 'g', scalable: true },
        { name: 'Whole Wheat Flour', amount: 100, unit: 'g', scalable: true },
        { name: 'Mixed Seeds', amount: 50, unit: 'g', scalable: true },
        { name: 'Water', amount: 350, unit: 'ml', scalable: true },
        { name: 'Salt', amount: 10, unit: 'g', scalable: true },
        { name: 'Honey', amount: 15, unit: 'g', scalable: true },
        { name: 'Dry Yeast', amount: 7, unit: 'g', scalable: true }
      ];
    }
  } else if (type === 'focaccia') {
    if (recipe.includes('Rosemary')) {
      baseIngredients = [
        { name: 'Bread Flour', amount: 500, unit: 'g', scalable: true },
        { name: 'Water', amount: 375, unit: 'ml', scalable: true },
        { name: 'Salt', amount: 10, unit: 'g', scalable: true },
        { name: 'Olive Oil', amount: 50, unit: 'ml', scalable: true },
        { name: 'Fresh Rosemary', amount: 2, unit: 'tbsp', scalable: true },
        { name: 'Dry Yeast', amount: 5, unit: 'g', scalable: true },
        { name: 'Sea Salt Flakes (for topping)', amount: 1, unit: 'tbsp', scalable: false }
      ];
    } else if (recipe.includes('Cherry Tomato')) {
      baseIngredients = [
        { name: 'Bread Flour', amount: 500, unit: 'g', scalable: true },
        { name: 'Water', amount: 400, unit: 'ml', scalable: true },
        { name: 'Salt', amount: 10, unit: 'g', scalable: true },
        { name: 'Olive Oil', amount: 60, unit: 'ml', scalable: true },
        { name: 'Dry Yeast', amount: 5, unit: 'g', scalable: true },
        { name: 'Cherry Tomatoes', amount: 200, unit: 'g', scalable: true },
        { name: 'Mixed Herbs', amount: 2, unit: 'tbsp', scalable: true }
      ];
    } else if (recipe.includes('Olive & Garlic')) {
      baseIngredients = [
        { name: 'Bread Flour', amount: 500, unit: 'g', scalable: true },
        { name: 'Water', amount: 390, unit: 'ml', scalable: true },
        { name: 'Salt', amount: 10, unit: 'g', scalable: true },
        { name: 'Olive Oil', amount: 60, unit: 'ml', scalable: true },
        { name: 'Dry Yeast', amount: 5, unit: 'g', scalable: true },
        { name: 'Olives, pitted and chopped', amount: 100, unit: 'g', scalable: true },
        { name: 'Garlic cloves, minced', amount: 4, unit: '', scalable: true }
      ];
    }
  } else if (type === 'sourdough') {
    if (recipe.includes('Beginner')) {
      baseIngredients = [
        { name: 'Bread Flour', amount: 400, unit: 'g', scalable: true },
        { name: 'Whole Wheat Flour', amount: 100, unit: 'g', scalable: true },
        { name: 'Water', amount: 350, unit: 'ml', scalable: true },
        { name: 'Salt', amount: 10, unit: 'g', scalable: true },
        { name: 'Sourdough Starter (active)', amount: 150, unit: 'g', scalable: true }
      ];
    } else if (recipe.includes('Rustic Country')) {
      baseIngredients = [
        { name: 'Bread Flour', amount: 400, unit: 'g', scalable: true },
        { name: 'Whole Wheat Flour', amount: 100, unit: 'g', scalable: true },
        { name: 'Water', amount: 375, unit: 'ml', scalable: true },
        { name: 'Salt', amount: 10, unit: 'g', scalable: true },
        { name: 'Sourdough Starter (active)', amount: 200, unit: 'g', scalable: true }
      ];
    } else if (recipe.includes('Sourdough Sandwich')) {
      baseIngredients = [
        { name: 'Bread Flour', amount: 450, unit: 'g', scalable: true },
        { name: 'Whole Wheat Flour', amount: 50, unit: 'g', scalable: true },
        { name: 'Water', amount: 325, unit: 'ml', scalable: true },
        { name: 'Salt', amount: 10, unit: 'g', scalable: true },
        { name: 'Honey', amount: 15, unit: 'g', scalable: true },
        { name: 'Butter', amount: 25, unit: 'g', scalable: true },
        { name: 'Sourdough Starter (active)', amount: 150, unit: 'g', scalable: true }
      ];
    }
  }
  
  // Scale ingredients based on quantity
  return baseIngredients.map(ing => ({
    ...ing,
    amount: ing.scalable ? ing.amount * quantity : ing.amount
  }));
};
