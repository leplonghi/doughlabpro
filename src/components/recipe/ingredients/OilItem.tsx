
import React from 'react';
import { OilIcon } from '@/components/icons/RecipeIcons';
import IngredientItem from './IngredientItem';

interface OilItemProps {
  oil: number;
  formatValue: (value: number) => string;
  getUnitLabel: () => string;
  isNewYorkStyle: boolean;
}

const OilItem: React.FC<OilItemProps> = ({ oil, formatValue, getUnitLabel, isNewYorkStyle }) => (
  <IngredientItem
    label={isNewYorkStyle ? 'Olive Oil:' : 'Oil/Butter:'}
    value={`${formatValue(oil)}${getUnitLabel()}`}
    icon={<OilIcon className="w-4 h-4" />}
    tooltip="Oil amount is fixed based on the selected style. Some styles use more oil for richness and texture."
  />
);

export default OilItem;
