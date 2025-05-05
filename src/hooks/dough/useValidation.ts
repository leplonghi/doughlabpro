
import { useState } from 'react';
import { DoughState } from '@/types/dough';

export const useValidation = (state: Pick<DoughState, 'flour' | 'hydration' | 'errors'>) => {
  const validateField = (field: string, value: any) => {
    const errors: Record<string, string> = {};
    
    if (field === 'flour' || field === 'all') {
      if (!state.flour || state.flour < 100) {
        errors.flour = 'Please enter a valid flour amount (min 100g)';
      }
    }
    
    if (field === 'hydration' || field === 'all') {
      if (!state.hydration || state.hydration < 50 || state.hydration > 90) {
        errors.hydration = 'Hydration should be between 50% and 90%';
      }
    }
    
    return {
      errors,
      isValid: Object.keys(errors).length === 0
    };
  };

  return {
    validateField
  };
};
