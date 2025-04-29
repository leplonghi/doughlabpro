
import React from 'react';
import { DoughBallIcon } from '@/components/icons/RecipeIcons';
import IngredientItem from './IngredientItem';

interface DoughBallsItemProps {
  numberOfBalls: number;
}

const DoughBallsItem: React.FC<DoughBallsItemProps> = ({ numberOfBalls }) => (
  <IngredientItem
    label="Dough Balls:"
    value={numberOfBalls.toString()}
    icon={<DoughBallIcon className="w-4 h-4" />}
  />
);

export default DoughBallsItem;
