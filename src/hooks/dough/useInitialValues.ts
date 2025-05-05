
import { StyleType } from '@/types/dough';

export const useInitialValues = (style: StyleType) => {
  // Set initial ball weight based on style
  const getInitialBallWeight = () => {
    if (['napoletana', 'newyork', 'chicago'].includes(style)) {
      return 250; // Default pizza ball weight
    } else if (style === 'baguette') {
      return 350; // French baguette
    } else if (style === 'brioche') {
      return 600; // Brioche loaf
    } else if (style === 'focaccia') {
      return 500; // Focaccia sheet
    }
    return 250; // Default
  };

  return {
    getInitialBallWeight
  };
};
