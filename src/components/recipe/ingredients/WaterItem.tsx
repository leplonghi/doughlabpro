
import React from 'react';
import { Droplet } from 'lucide-react';
import IngredientItem from './IngredientItem';

interface WaterItemProps {
  water: number;
  formatValue: (value: number) => string;
  getUnitLabel: () => string;
}

const WaterItem: React.FC<WaterItemProps> = ({ water, formatValue, getUnitLabel }) => (
  <IngredientItem
    label="Water:"
    value={`${formatValue(water)}${getUnitLabel()}`}
    icon={<Droplet className="w-4 h-4" />}
  />
);

export default WaterItem;
