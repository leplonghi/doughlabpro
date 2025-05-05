
import { BakingStep } from '../types';
import { getPizzaSteps } from './pizza-steps';
import { getBreadSteps } from './bread-steps';
import { getFocacciaSteps } from './focaccia-steps';
import { getSourdoughSteps } from './sourdough-steps';

export const getSteps = (selectedType: string | null, selectedRecipe: string | null): BakingStep[] => {
  if (!selectedType || !selectedRecipe) return [];
  
  if (selectedType === 'pizza') {
    return getPizzaSteps(selectedRecipe);
  } else if (selectedType === 'bread') {
    return getBreadSteps(selectedRecipe);
  } else if (selectedType === 'focaccia') {
    return getFocacciaSteps(selectedRecipe);
  } else if (selectedType === 'sourdough') {
    return getSourdoughSteps(selectedRecipe);
  }
  
  // For other types, return placeholder steps
  return [
    { title: "Preparation", description: "Prepare your workspace and ingredients." },
    { title: "Mix the dough", description: "Combine all ingredients and mix until incorporated." },
    { title: "Knead", description: "Develop the gluten structure through kneading.", timer: 10 },
    { title: "First rise", description: "Allow the dough to ferment and rise.", timer: 60 },
    { title: "Shape", description: "Shape the dough according to your recipe." },
    { title: "Second rise", description: "Let the shaped dough proof.", timer: 45 },
    { title: "Bake", description: "Bake until golden brown and delicious.", timer: getDefaultTimerDuration(selectedType) },
  ];
};

export const getDefaultTimerDuration = (selectedType: string | null): number => {
  if (selectedType === 'bread' || selectedType === 'sourdough') {
    return 45; // 45 minutes for bread
  } else if (selectedType === 'pizza') {
    return 12; // 12 minutes for pizza
  } else if (selectedType === 'focaccia') {
    return 20; // 20 minutes for focaccia
  }
  return 30; // default timer duration
};

export const getItemLabel = (selectedType: string | null, quantity: number): string => {
  if (selectedType === 'pizza') return quantity === 1 ? 'pizza' : 'pizzas';
  if (selectedType === 'bread') return 'loaf';
  if (selectedType === 'focaccia') return 'focaccia';
  if (selectedType === 'sourdough') return 'loaf';
  return 'item';
};
