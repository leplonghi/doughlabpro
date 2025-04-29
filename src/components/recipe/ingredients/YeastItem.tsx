
import React from 'react';
import { YeastIcon } from '@/components/icons/RecipeIcons';
import IngredientItem from './IngredientItem';

interface YeastItemProps {
  yeast: number;
  formatValue: (value: number) => string;
  getUnitLabel: () => string;
}

const YeastItem: React.FC<YeastItemProps> = ({ yeast, formatValue, getUnitLabel }) => (
  <IngredientItem
    label="Yeast:"
    value={`${formatValue(yeast)}${getUnitLabel()}`}
    icon={<YeastIcon className="w-4 h-4" />}
  />
);

export default YeastItem;
