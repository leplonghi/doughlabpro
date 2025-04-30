
import React from 'react';
import { Unit } from '@/components/UnitSelect';
import { Button } from '@/components/ui/button';

interface RecipeUnitSelectProps {
  activeUnit: Unit;
  onUnitChange: (unit: Unit) => void;
}

const RecipeUnitSelect: React.FC<RecipeUnitSelectProps> = ({ activeUnit, onUnitChange }) => {
  return (
    <div className="mb-4 flex flex-wrap gap-2">
      <Button 
        size="sm" 
        variant={activeUnit === 'grams' ? 'default' : 'outline'}
        className={`${activeUnit !== 'grams' ? 'bg-white' : ''}`}
        onClick={() => onUnitChange('grams')}
      >
        Grams
      </Button>
      <Button 
        size="sm" 
        variant={activeUnit === 'ounces' ? 'default' : 'outline'}
        className={`${activeUnit !== 'ounces' ? 'bg-white' : ''}`}
        onClick={() => onUnitChange('ounces')}
      >
        Ounces
      </Button>
      <Button 
        size="sm" 
        variant={activeUnit === 'cups' ? 'default' : 'outline'}
        className={`${activeUnit !== 'cups' ? 'bg-white' : ''}`}
        onClick={() => onUnitChange('cups')}
      >
        Cups/Spoons
      </Button>
    </div>
  );
};

export default RecipeUnitSelect;
