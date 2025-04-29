
import React from 'react';
import { Wheat } from 'lucide-react';
import IngredientItem from './IngredientItem';

interface FlourItemProps {
  flour: number;
  formatValue: (value: number) => string;
  getUnitLabel: () => string;
}

const FlourItem: React.FC<FlourItemProps> = ({ flour, formatValue, getUnitLabel }) => (
  <IngredientItem
    label="Flour:"
    value={`${formatValue(flour)}${getUnitLabel()}`}
    icon={<Wheat className="w-4 h-4" />}
  />
);

export default FlourItem;
