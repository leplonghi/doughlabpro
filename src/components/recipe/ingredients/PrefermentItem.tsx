
import React from 'react';
import IngredientItem from './IngredientItem';

interface PrefermentItemProps {
  type: 'poolish' | 'biga';
}

const PrefermentItem: React.FC<PrefermentItemProps> = ({ type }) => (
  <IngredientItem
    label={type === 'poolish' ? '🧊 Prepared Poolish:' : '🧊 Prepared Biga:'}
    value="All"
    icon={<span className="w-4 h-4 flex items-center justify-center">🧊</span>}
  />
);

export default PrefermentItem;
