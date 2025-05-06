import { BakingStep } from '../types';
import { getPizzaSteps } from './pizza-steps';
import { getBreadSteps } from './bread-steps';
import { getFocacciaSteps } from './focaccia-steps';
import { getSourdoughSteps } from './sourdough-steps';

export const getSteps = (type: string | null, recipe: string | null, language: string = 'en'): BakingStep[] => {
  if (!type || !recipe) return [];
  
  // Get steps based on dough type
  switch (type) {
    case 'pizza':
      return getPizzaSteps(recipe, language);
    case 'bread':
      return getBreadSteps(recipe, language);
    case 'focaccia':
      return getFocacciaSteps(recipe, language);
    case 'sourdough':
      return getSourdoughSteps(recipe, language);
    default:
      return [];
  }
};

// The rest of the existing helper functions...
export const getItemLabel = (type: string | null, count: number): string => {
  if (!type) return count === 1 ? 'item' : 'items';
  
  switch (type) {
    case 'pizza':
      return count === 1 ? 'pizza' : 'pizzas';
    case 'bread':
      return count === 1 ? 'loaf' : 'loaves';
    case 'focaccia':
      return count === 1 ? 'focaccia' : 'focaccias';
    case 'sourdough':
      return count === 1 ? 'loaf' : 'loaves';
    default:
      return count === 1 ? 'item' : 'items';
  }
};

// Get default timer duration based on recipe type
export const getDefaultTimerDuration = (type: string | null): number => {
  if (!type) return 60 * 60; // 1 hour default
  
  switch (type) {
    case 'pizza':
      return 60 * 60; // 1 hour for pizza
    case 'bread':
      return 2 * 60 * 60; // 2 hours for bread
    case 'focaccia':
      return 90 * 60; // 90 minutes for focaccia
    case 'sourdough':
      return 4 * 60 * 60; // 4 hours for sourdough
    default:
      return 60 * 60; // 1 hour default
  }
};
