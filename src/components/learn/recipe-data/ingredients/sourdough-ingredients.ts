
import { Ingredient } from '../../types';

export const getSourdoughIngredients = (
  recipe: string | null,
  flourAmount: number
): { 
  ingredients: Ingredient[],
  percentages: { 
    waterPercentage: number,
    saltPercentage: number,
    starterPercentage: number,
    honeyPercentage: number,
    butterPercentage: number
  } 
} => {
  // Set default percentages
  let waterPercentage = 0;
  let saltPercentage = 2.5; // Standard 2.5% salt
  let starterPercentage = 0;
  let honeyPercentage = 0;
  let butterPercentage = 0;
  
  // Set hydration based on recipe type
  if (recipe?.includes('Beginner')) {
    waterPercentage = 70;
    starterPercentage = 20;
  } else if (recipe?.includes('Rustic Country')) {
    waterPercentage = 75;
    starterPercentage = 20;
  } else if (recipe?.includes('Sourdough Sandwich')) {
    waterPercentage = 65;
    starterPercentage = 15;
    honeyPercentage = 1.5;
    butterPercentage = 2.5;
  }
  
  // Determine whole wheat percentage
  const wholeWheatPercentage = recipe?.includes('Sandwich') ? 0.1 : 0.2;
  
  // Start with adjusted flour amounts
  const ingredients: Ingredient[] = [
    { 
      name: 'Bread Flour', 
      amount: flourAmount * (1 - wholeWheatPercentage), 
      unit: 'g', 
      scalable: true 
    },
    { 
      name: 'Whole Wheat Flour', 
      amount: flourAmount * wholeWheatPercentage, 
      unit: 'g', 
      scalable: true 
    }
  ];
  
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
  
  if (starterPercentage > 0) {
    ingredients.push({ 
      name: 'Sourdough Starter (active)', 
      amount: (flourAmount * starterPercentage) / 100, 
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
  
  if (butterPercentage > 0) {
    ingredients.push({ 
      name: 'Butter', 
      amount: (flourAmount * butterPercentage) / 100, 
      unit: 'g', 
      scalable: true 
    });
  }
  
  return { 
    ingredients, 
    percentages: { 
      waterPercentage, 
      saltPercentage, 
      starterPercentage, 
      honeyPercentage, 
      butterPercentage 
    } 
  };
};
