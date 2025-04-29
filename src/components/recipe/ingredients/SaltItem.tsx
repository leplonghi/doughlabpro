
import React from 'react';
import { SaltIcon } from '@/components/icons/RecipeIcons';
import IngredientItem from './IngredientItem';

interface SaltItemProps {
  salt: number;
  formatValue: (value: number) => string;
  getUnitLabel: () => string;
}

const SaltItem: React.FC<SaltItemProps> = ({ salt, formatValue, getUnitLabel }) => (
  <IngredientItem
    label="Salt:"
    value={`${formatValue(salt)}${getUnitLabel()}`}
    icon={<SaltIcon className="w-4 h-4" />}
  />
);

export default SaltItem;
