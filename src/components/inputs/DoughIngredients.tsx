
import React from 'react';
import IngredientSection from './IngredientSection';
import { Wheat, Droplets, CircleDot } from 'lucide-react';
import { SaltIcon, OilIcon, YeastIcon, SugarIcon } from './CustomIcons';

interface IngredientInfo {
  value: number;
  percentage?: string;
  notUsed?: boolean;
}

interface DoughIngredientsProps {
  salt: IngredientInfo;
  oil: IngredientInfo;
  sugar: IngredientInfo;
  isButterInsteadOfOil?: boolean;
}

const DoughIngredients: React.FC<DoughIngredientsProps> = ({
  salt,
  oil,
  sugar,
  isButterInsteadOfOil = false
}) => {
  return (
    <>
      {/* Salt */}
      <IngredientSection icon={<SaltIcon className="h-5 w-5" />} label="Salt">
        <div className="flex gap-4">
          <div className="flex-1">
            <div className="text-sm">2.5% of flour weight</div>
          </div>
          <div className="w-24">
            <div className="text-right font-medium">{salt.value.toFixed(1)}g</div>
          </div>
        </div>
      </IngredientSection>

      {/* Olive Oil or Butter */}
      {oil.value > 0 && (
        <IngredientSection 
          icon={<OilIcon className="h-5 w-5" />} 
          label={isButterInsteadOfOil ? 'Butter' : 'Olive Oil'}
        >
          <div className="flex gap-4">
            <div className="flex-1">
              <div className="text-sm">
                {oil.value > 0 
                  ? `${oil.percentage}% of flour weight` 
                  : 'Not used in this recipe'}
              </div>
            </div>
            <div className="w-24">
              <div className="text-right font-medium">{oil.value.toFixed(1)}g</div>
            </div>
          </div>
        </IngredientSection>
      )}

      {/* Sugar */}
      {sugar.value > 0 && (
        <IngredientSection icon={<SugarIcon className="h-5 w-5" />} label="Sugar">
          <div className="flex gap-4">
            <div className="flex-1">
              <div className="text-sm">
                {sugar.value > 0 
                  ? `${sugar.percentage}% of flour weight` 
                  : 'Not used in this recipe'}
              </div>
            </div>
            <div className="w-24">
              <div className="text-right font-medium">{sugar.value.toFixed(1)}g</div>
            </div>
          </div>
        </IngredientSection>
      )}
    </>
  );
};

export default DoughIngredients;
