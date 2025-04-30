
interface ValidationErrors {
  flour?: string;
  hydration?: string;
}

export const validateDoughField = (field: string, value: any, state: any): ValidationErrors => {
  const errors: ValidationErrors = {};
  
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
  
  return errors;
};
