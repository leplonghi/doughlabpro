import React from 'react';
import { Clock, Wheat, Droplet, FlaskConical } from 'lucide-react';
import { useLanguage } from '../../hooks/useLanguage';

interface RecipePreMixProps {
  type: 'poolish' | 'biga';
  flour: number;
  water: number;
  yeast: number;
  formatValue: (value: number) => string;
  getUnitLabel: () => string;
}

const RecipePreliminary: React.FC<RecipePreMixProps> = ({
  type,
  flour,
  water,
  yeast,
  formatValue,
  getUnitLabel
}) => {
  const { t } = useLanguage();
  
  return (
    <div className="bg-muted/30 p-4 rounded-lg border border-border/50">
      <h3 className="font-medium text-foreground flex items-center gap-2 mb-3">
        <Clock size={18} />
        {t(`recipe.preliminary.${type}`)}
      </h3>
      <ul className="space-y-2 text-foreground/90">
        <li className="flex justify-between items-center">
          <span className="flex items-center gap-2"><Wheat size={16} /> {t('ingredients.flour')}:</span>
          <span className="font-medium">{formatValue(flour)}{getUnitLabel()}</span>
        </li>
        <li className="flex justify-between items-center">
          <span className="flex items-center gap-2"><Droplet size={16} /> {t('ingredients.water')}:</span>
          <span className="font-medium">{formatValue(water)}{getUnitLabel()}</span>
        </li>
        <li className="flex justify-between items-center">
          <span className="flex items-center gap-2"><FlaskConical size={16} /> {t('ingredients.yeast')}:</span>
          <span className="font-medium">{formatValue(yeast)}{getUnitLabel()}</span>
        </li>
      </ul>
    </div>
  );
};

export default RecipePreliminary;
