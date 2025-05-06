
import { BakingStep } from '../types';

export const getSourdoughSteps = (recipeName: string, language: string = 'en'): BakingStep[] => {
  // Choose the correct language steps
  if (language === 'pt') {
    return getSourdoughStepsPt(recipeName);
  } else if (language === 'es') {
    return getSourdoughStepsEs(recipeName);
  } else {
    // Default to English
    return getSourdoughStepsEn(recipeName);
  }
};

// English sourdough steps
const getSourdoughStepsEn = (recipeName: string): BakingStep[] => {
  // Return appropriate steps based on recipe name
  return [];
};

// Portuguese sourdough steps
const getSourdoughStepsPt = (recipeName: string): BakingStep[] => {
  // Return appropriate steps based on recipe name
  return [];
};

// Spanish sourdough steps
const getSourdoughStepsEs = (recipeName: string): BakingStep[] => {
  // Return appropriate steps based on recipe name
  return [];
};
