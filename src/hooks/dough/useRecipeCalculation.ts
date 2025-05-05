
import { DoughRecipe, FermentationMethod, StyleType, YeastType } from "@/types/dough";

export const useRecipeCalculation = () => {
  const createRecipe = (
    flour: number,
    hydration: number,
    yeastType: YeastType,
    style: StyleType,
    fermentationMethod: FermentationMethod,
    ballWeight: number
  ) => {
    // Calculate water based on hydration percentage
    const water = (flour * hydration) / 100;
    
    // Calculate salt amount - typically 2-3% of flour weight
    const salt = (flour * 2.5) / 100;
    
    // Calculate yeast amount - depends on type and fermentation method
    let yeastPercentage = 0.1; // Base: 0.1% for dry yeast
    
    // Adjust yeast based on type and fermentation method
    if (yeastType === 'fresh') {
      yeastPercentage = 0.3; // Fresh yeast is typically 3x dry yeast
    }
    
    if (fermentationMethod !== 'direct') {
      yeastPercentage = yeastPercentage / 2; // Less yeast for longer fermentation
    }
    
    const yeast = (flour * yeastPercentage) / 100;
    
    // Calculate oil amount - depends on style
    let oil = 0;
    let sugar = 0;
    let butter = 0;
    let eggs = 0; // Add missing eggs variable
    
    // Adjust oil, sugar, butter based on style
    if (style === 'napoletana') {
      oil = (flour * 1) / 100;
    } else if (style === 'newyork') {
      oil = (flour * 2) / 100;
      sugar = (flour * 1) / 100;
    } else if (style === 'chicago') {
      oil = (flour * 5) / 100;
      sugar = (flour * 2) / 100;
    } else if (style === 'baguette') {
      oil = 0;
    } else if (style === 'brioche') {
      butter = (flour * 15) / 100;
      sugar = (flour * 8) / 100;
      eggs = (flour * 25) / 100; // Add eggs for brioche
    } else if (style === 'focaccia') {
      oil = (flour * 8) / 100;
      sugar = (flour * 1) / 100;
    }
    
    // Define the basic recipe
    const recipe: DoughRecipe = {
      flour,
      water,
      salt,
      yeast,
      oil,
    };
    
    // Add optional ingredients if they are used
    if (sugar > 0) {
      recipe.sugar = sugar;
    }
    
    if (butter > 0) {
      recipe.butter = butter;
    }
    
    if (eggs > 0) {
      recipe.eggs = eggs;
    }
    
    // Calculate pre-ferment if not using direct method
    if (fermentationMethod === 'poolish') {
      // Poolish typically uses 30-50% of the flour
      const poolishFlour = flour * 0.3;
      const poolishWater = poolishFlour; // Poolish is 100% hydration
      const poolishYeast = poolishFlour * 0.001; // 0.1% of poolish flour weight
      
      recipe.poolish = {
        flour: poolishFlour,
        water: poolishWater,
        yeast: poolishYeast
      };
      
      // Adjust main dough ingredients
      recipe.flour -= poolishFlour;
      recipe.water -= poolishWater;
      recipe.yeast -= poolishYeast;
    } else if (fermentationMethod === 'biga') {
      // Biga typically uses 30-50% of the flour
      const bigaFlour = flour * 0.3;
      const bigaWater = bigaFlour * 0.6; // Biga is typically 60% hydration
      const bigaYeast = bigaFlour * 0.0005; // 0.05% of biga flour weight
      
      recipe.biga = {
        flour: bigaFlour,
        water: bigaWater,
        yeast: bigaYeast
      };
      
      // Adjust main dough ingredients
      recipe.flour -= bigaFlour;
      recipe.water -= bigaWater;
      recipe.yeast -= bigaYeast;
    }
    
    // Calculate the number of balls based on the recipe and ball weight
    const totalWeight = flour + water + salt + yeast + oil + (sugar || 0) + (butter || 0) + (eggs || 0);
    const numberOfBalls = Math.max(1, Math.floor(totalWeight / ballWeight));
    
    return { recipe, numberOfBalls };
  };
  
  return { createRecipe };
};
