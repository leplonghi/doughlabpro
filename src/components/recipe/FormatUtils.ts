
import { Unit } from '@/components/UnitSelect';

export const convertToUnit = (grams: number, activeUnit: Unit): number => {
  switch(activeUnit) {
    case 'ounces':
      return grams / 28.35;
    case 'cups':
      return grams / 120; // Base conversion factor
    default:
      return grams;
  }
};

export const getUnitLabel = (activeUnit: Unit): string => {
  switch(activeUnit) {
    case 'ounces':
      return 'oz';
    case 'cups':
      return '';
    default:
      return 'g';
  }
};

// Format cup measurements properly with correct conversion ratios
export const formatCupMeasurement = (grams: number): string => {
  // Base conversion - 1 cup = 120g of flour (approximate)
  const cups = grams / 120;
  
  if (cups >= 0.25) {
    // Format as cups
    return `${cups.toFixed(2).replace(/\.?0+$/, '')} cup${cups !== 1 ? 's' : ''}`;
  } else {
    // Convert to tablespoons (1 cup = 16 tbsp)
    const tbsp = cups * 16;
    
    if (tbsp >= 1) {
      return `${tbsp.toFixed(1).replace(/\.0$/, '')} tbsp`;
    } else {
      // Convert to teaspoons (1 tbsp = 3 tsp)
      const tsp = tbsp * 3;
      return `${tsp.toFixed(1).replace(/\.0$/, '')} tsp`;
    }
  }
};

export const formatValue = (value: number, activeUnit: Unit): string => {
  const converted = convertToUnit(value, activeUnit);
  
  if (activeUnit === 'cups') {
    return formatCupMeasurement(value);
  }
  
  return converted.toFixed(activeUnit === 'grams' ? 1 : 2).replace(/\.0$/, '');
};
