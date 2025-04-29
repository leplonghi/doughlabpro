
import React from 'react';
import { SugarIcon } from '@/components/icons/RecipeIcons';
import IngredientItem from './IngredientItem';

interface SugarItemProps {
  sugar: number;
  formatValue: (value: number) => string;
  getUnitLabel: () => string;
}

const SugarItem: React.FC<SugarItemProps> = ({ sugar, formatValue, getUnitLabel }) => (
  <IngredientItem
    label="Sugar:"
    value={`${formatValue(sugar)}${getUnitLabel()}`}
    icon={<SugarIcon className="w-4 h-4" />}
    tooltip="Sugar amount is fixed based on the style. Only some styles use sugar to enhance browning and flavor."
  />
);

export default SugarItem;
