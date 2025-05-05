
import { Ingredient } from '../types';

export const getIngredients = (type: string | null, recipe: string | null, quantity: number = 1): Ingredient[] => {
  if (!type || !recipe) return [];

  // Standard individual dough ball weights
  const getIndividualWeight = () => {
    if (type === 'pizza') return 250; // 250g per pizza dough ball
    if (type === 'bread') return 500; // 500g per bread loaf
    if (type === 'focaccia') return 500; // 500g for focaccia
    if (type === 'sourdough') return 800; // 800g for sourdough loaf
    return 250; // Default
  };
  
  // Total dough weight based on quantity
  const totalDoughWeight = getIndividualWeight() * quantity;
  
  // For pizza recipes, we'll use baker's percentages to calculate ingredients
  // The sum of all percentages gives us the total dough percentage
  let flourPercentage = 100; // Flour is always 100%
  let waterPercentage = 0;
  let saltPercentage = 2.5; // Standard 2.5% salt
  let yeastPercentage = 0.1; // Standard dry yeast percentage
  let oilPercentage = 0;
  let sugarPercentage = 0;
  let butterPercentage = 0;
  let seedsPercentage = 0;
  let honeyPercentage = 0;
  let starterPercentage = 0;
  
  // Set hydration based on recipe type
  if (type === 'pizza') {
    if (recipe.includes('Simple Neapolitan')) {
      waterPercentage = 60;
      // No oil for authentic Neapolitan pizza
      oilPercentage = 0;
    } else if (recipe.includes('New York Style')) {
      waterPercentage = 65;
      oilPercentage = 2;
      sugarPercentage = 1;
    } else if (recipe.includes('Thin Crispy')) {
      waterPercentage = 55;
      oilPercentage = 3;
    }
  } else if (type === 'bread') {
    if (recipe.includes('White Sandwich')) {
      waterPercentage = 65;
      sugarPercentage = 2;
      butterPercentage = 3;
      yeastPercentage = 0.7;
    } else if (recipe.includes('Crusty Artisan')) {
      waterPercentage = 75;
    } else if (recipe.includes('Multigrain')) {
      waterPercentage = 70;
      honeyPercentage = 1.5;
      seedsPercentage = 5;
      yeastPercentage = 0.7;
    }
  } else if (type === 'focaccia') {
    if (recipe.includes('Rosemary')) {
      waterPercentage = 75;
      oilPercentage = 8;
      yeastPercentage = 0.5;
    } else if (recipe.includes('Cherry Tomato')) {
      waterPercentage = 80;
      oilPercentage = 8;
      yeastPercentage = 0.5;
    } else if (recipe.includes('Olive & Garlic')) {
      waterPercentage = 78;
      oilPercentage = 8;
      yeastPercentage = 0.5;
    }
  } else if (type === 'sourdough') {
    if (recipe.includes('Beginner')) {
      waterPercentage = 70;
      starterPercentage = 20;
      yeastPercentage = 0; // No commercial yeast in sourdough
    } else if (recipe.includes('Rustic Country')) {
      waterPercentage = 75;
      starterPercentage = 20;
      yeastPercentage = 0;
    } else if (recipe.includes('Sourdough Sandwich')) {
      waterPercentage = 65;
      starterPercentage = 15;
      honeyPercentage = 1.5;
      butterPercentage = 2.5;
      yeastPercentage = 0;
    }
  }
  
  // Calculate total dough percentage (sum of all ingredients)
  const totalPercentage = flourPercentage + waterPercentage + saltPercentage + 
                         yeastPercentage + oilPercentage + sugarPercentage + 
                         butterPercentage + seedsPercentage + honeyPercentage +
                         starterPercentage;
  
  // Calculate flour amount based on total dough weight and total percentage
  const flourAmount = (totalDoughWeight * flourPercentage) / totalPercentage;
  
  // Now calculate all other ingredients based on flour amount and baker's percentages
  let ingredients: Ingredient[] = [
    { name: type === 'pizza' && recipe.includes('Neapolitan') ? '00 Flour' : 'Bread Flour', 
      amount: flourAmount, unit: 'g', scalable: true }
  ];
  
  if (waterPercentage > 0) {
    ingredients.push({ name: 'Water', amount: (flourAmount * waterPercentage) / 100, unit: 'ml', scalable: true });
  }
  
  if (saltPercentage > 0) {
    ingredients.push({ name: 'Salt', amount: (flourAmount * saltPercentage) / 100, unit: 'g', scalable: true });
  }
  
  if (yeastPercentage > 0) {
    ingredients.push({ name: 'Dry Yeast', amount: (flourAmount * yeastPercentage) / 100, unit: 'g', scalable: true });
  }
  
  if (oilPercentage > 0) {
    ingredients.push({ name: 'Olive Oil', amount: (flourAmount * oilPercentage) / 100, unit: 'ml', scalable: true });
  }
  
  if (sugarPercentage > 0) {
    ingredients.push({ name: 'Sugar', amount: (flourAmount * sugarPercentage) / 100, unit: 'g', scalable: true });
  }
  
  if (butterPercentage > 0) {
    ingredients.push({ name: 'Butter', amount: (flourAmount * butterPercentage) / 100, unit: 'g', scalable: true });
  }
  
  if (seedsPercentage > 0) {
    ingredients.push({ name: 'Mixed Seeds', amount: (flourAmount * seedsPercentage) / 100, unit: 'g', scalable: true });
  }
  
  if (honeyPercentage > 0) {
    ingredients.push({ name: 'Honey', amount: (flourAmount * honeyPercentage) / 100, unit: 'g', scalable: true });
  }
  
  if (starterPercentage > 0) {
    ingredients.push({ name: 'Sourdough Starter (active)', amount: (flourAmount * starterPercentage) / 100, unit: 'g', scalable: true });
  }
  
  // Add special ingredients based on recipe
  if (type === 'focaccia') {
    if (recipe.includes('Rosemary')) {
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
    } else if (recipe.includes('Cherry Tomato')) {
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
    } else if (recipe.includes('Olive & Garlic')) {
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
  }
  
  // For multigrain bread, add whole wheat flour
  if (type === 'bread' && recipe.includes('Multigrain')) {
    // Adjust the first ingredient (bread flour) to 80% of original amount
    ingredients[0].amount = flourAmount * 0.8;
    
    // Add whole wheat flour as 20%
    ingredients.splice(1, 0, { 
      name: 'Whole Wheat Flour', 
      amount: flourAmount * 0.2, 
      unit: 'g', 
      scalable: true 
    });
  }
  
  // For sourdough, add whole wheat component
  if (type === 'sourdough') {
    // Adjust the first ingredient (bread flour) to correct percentage
    const wholeWheatPercentage = recipe.includes('Sandwich') ? 0.1 : 0.2;
    ingredients[0].amount = flourAmount * (1 - wholeWheatPercentage);
    
    // Add whole wheat flour
    ingredients.splice(1, 0, { 
      name: 'Whole Wheat Flour', 
      amount: flourAmount * wholeWheatPercentage, 
      unit: 'g', 
      scalable: true 
    });
  }
  
  // Round values to make them more readable
  return ingredients.map(ing => ({
    ...ing,
    amount: Math.round(ing.amount * 10) / 10  // Round to 1 decimal place
  }));
};
