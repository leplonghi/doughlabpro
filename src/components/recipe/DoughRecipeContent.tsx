
import React, { useState } from 'react';
import { CardContent } from '@/components/ui/card';
import { Unit } from '@/components/UnitSelect';
import RecipeUnitSelect from './RecipeUnitSelect';
import RecipePreliminary from './RecipePreliminary';
import RecipeFinal from './RecipeFinal';
import FermentationTips from './FermentationTips';
import TemperatureGuide from './TemperatureGuide';
import BakingTips from './BakingTips';
import RecipeActions from './RecipeActions';
import { formatValue, getUnitLabel } from './FormatUtils';
import { FermentationMethod } from '@/types/dough';

interface DoughRecipe {
  flour: number;
  water: number;
  salt: number;
  yeast: number;
  oil: number;
  sugar?: number;
  poolish?: {
    flour: number;
    water: number;
    yeast: number;
  };
  biga?: {
    flour: number;
    water: number;
    yeast: number;
  };
}

interface DoughRecipeContentProps {
  recipe: DoughRecipe;
  fermentationMethod: FermentationMethod;
  pizzaStyle: string;
  initialUnit: Unit;
  numberOfBalls?: number;
  doughType: 'pizza' | 'bread';
}

const DoughRecipeContent: React.FC<DoughRecipeContentProps> = ({
  recipe,
  fermentationMethod,
  pizzaStyle,
  initialUnit,
  numberOfBalls,
  doughType
}) => {
  const [activeUnit, setActiveUnit] = useState<Unit>(initialUnit);

  return (
    <CardContent className="pt-6">
      <div className="space-y-6">
        <RecipeUnitSelect 
          activeUnit={activeUnit}
          onUnitChange={(unit) => setActiveUnit(unit)}
        />
        
        <div className="overflow-x-auto">
          {fermentationMethod === 'poolish' && recipe.poolish && (
            <RecipePreliminary
              type="poolish"
              flour={recipe.poolish.flour}
              water={recipe.poolish.water}
              yeast={recipe.poolish.yeast}
              formatValue={(value) => formatValue(value, activeUnit)}
              getUnitLabel={() => getUnitLabel(activeUnit)}
            />
          )}
          
          {fermentationMethod === 'biga' && recipe.biga && (
            <RecipePreliminary
              type="biga"
              flour={recipe.biga.flour}
              water={recipe.biga.water}
              yeast={recipe.biga.yeast}
              formatValue={(value) => formatValue(value, activeUnit)}
              getUnitLabel={() => getUnitLabel(activeUnit)}
            />
          )}

          <RecipeFinal
            flour={recipe.flour}
            water={recipe.water}
            salt={recipe.salt}
            yeast={recipe.yeast}
            oil={recipe.oil}
            sugar={recipe.sugar}
            isNewYorkStyle={pizzaStyle === 'newyork'}
            fermentationMethod={fermentationMethod}
            formatValue={(value) => formatValue(value, activeUnit)}
            getUnitLabel={() => getUnitLabel(activeUnit)}
            numberOfBalls={numberOfBalls}
          />

          <FermentationTips 
            method={fermentationMethod} 
            pizzaStyle={pizzaStyle}
          />
          
          <TemperatureGuide
            pizzaStyle={pizzaStyle}
            doughType={doughType}
            fermentationMethod={fermentationMethod}
          />
          
          <BakingTips
            doughType={doughType}
            style={pizzaStyle}
          />
        </div>

        <RecipeActions 
          recipeType={doughType}
          recipeStyle={pizzaStyle}
        />
      </div>
    </CardContent>
  );
};

export default DoughRecipeContent;
