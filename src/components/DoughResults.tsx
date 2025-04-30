
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { PizzaStyle } from "./PizzaStyleSelect";
import { Unit } from './UnitSelect';
import RecipePreliminary from './recipe/RecipePreliminary';
import RecipeFinal from './recipe/RecipeFinal';
import FermentationTips from './recipe/FermentationTips';
import RecipeActions from './recipe/RecipeActions';
import AdBanner from './monetization/AdBanner';
import RecipeUnitSelect from './recipe/RecipeUnitSelect';
import TemperatureGuide from './recipe/TemperatureGuide';
import BakingTips from './recipe/BakingTips';

type FermentationMethod = 'direct' | 'poolish' | 'biga';

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

interface DoughResultsProps {
  recipe: DoughRecipe;
  fermentationMethod: FermentationMethod;
  pizzaStyle: PizzaStyle | string;
  unit: Unit;
  numberOfBalls?: number;
  doughType?: 'pizza' | 'bread';
}

const DoughResults: React.FC<DoughResultsProps> = ({ 
  recipe, 
  fermentationMethod, 
  pizzaStyle, 
  unit: initialUnit,
  numberOfBalls,
  doughType = 'pizza'
}) => {
  const [activeUnit, setActiveUnit] = useState<Unit>(initialUnit);

  const convertToUnit = (grams: number): number => {
    switch(activeUnit) {
      case 'ounces':
        return grams / 28.35;
      case 'cups':
        return grams / 120; // Keep this conversion factor as a baseline
      default:
        return grams;
    }
  };

  const getUnitLabel = () => {
    switch(activeUnit) {
      case 'ounces':
        return 'oz';
      case 'cups':
        // No default unit label since we'll determine it dynamically
        return '';
      default:
        return 'g';
    }
  };

  // New function to format cup measurements properly with correct conversion ratios
  const formatCupMeasurement = (grams: number): string => {
    // Base conversion - 1 cup = 120g of flour (approximate)
    const cups = grams / 120;
    
    if (cups >= 0.25) {
      // Format as cups
      return `${cups.toFixed(2).replace(/\.?0+$/, '')} cup${cups !== 1 ? 's' : ''}`;
    } else {
      // Convert to tablespoons (1 cup = 16 tbsp)
      const tbsp = cups * 16;
      
      if (tbsp >= 1) {
        return `${tbsp.toFixed(1).replace(/\.0$/, '')} tbsp`;
      } else {
        // Convert to teaspoons (1 tbsp = 3 tsp)
        const tsp = tbsp * 3;
        return `${tsp.toFixed(1).replace(/\.0$/, '')} tsp`;
      }
    }
  };

  const formatValue = (value: number): string => {
    const converted = convertToUnit(value);
    
    if (activeUnit === 'cups') {
      return formatCupMeasurement(value);
    }
    
    return converted.toFixed(activeUnit === 'grams' ? 1 : 2).replace(/\.0$/, '');
  };

  const getTitle = () => {
    if (doughType === 'pizza') {
      if (pizzaStyle === 'newyork') return "Your New York Style Pizza Recipe";
      if (pizzaStyle === 'napoletana') return "Your Neapolitan Pizza Recipe";
      return `Your ${String(pizzaStyle).charAt(0).toUpperCase() + String(pizzaStyle).slice(1)} Recipe`;
    } else {
      return `Your ${String(pizzaStyle).charAt(0).toUpperCase() + String(pizzaStyle).slice(1)} Bread Recipe`;
    }
  };

  return (
    <Card className="mb-8 print-component" id="recipe-card">
      <CardHeader className="bg-pizza-light bg-opacity-30">
        <CardTitle>
          {getTitle()}
        </CardTitle>
        <CardDescription>
          {fermentationMethod === 'direct'
            ? 'Direct Method'
            : fermentationMethod === 'poolish'
              ? 'Poolish Method'
              : 'Biga Method'}
        </CardDescription>
        {numberOfBalls !== undefined && (
          <CardDescription className="mt-1">
            Makes approximately {numberOfBalls} {numberOfBalls === 1 ? 'dough ball' : 'dough balls'}
          </CardDescription>
        )}
      </CardHeader>
      
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
                formatValue={formatValue}
                getUnitLabel={getUnitLabel}
              />
            )}
            
            {fermentationMethod === 'biga' && recipe.biga && (
              <RecipePreliminary
                type="biga"
                flour={recipe.biga.flour}
                water={recipe.biga.water}
                yeast={recipe.biga.yeast}
                formatValue={formatValue}
                getUnitLabel={getUnitLabel}
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
              formatValue={formatValue}
              getUnitLabel={getUnitLabel}
              numberOfBalls={numberOfBalls}
            />

            <FermentationTips 
              method={fermentationMethod} 
              pizzaStyle={pizzaStyle as string}
            />
            
            <TemperatureGuide
              pizzaStyle={pizzaStyle as string}
              doughType={doughType}
              fermentationMethod={fermentationMethod}
            />
            
            <BakingTips
              doughType={doughType}
              style={pizzaStyle as string}
            />
          </div>

          <RecipeActions 
            recipeType={doughType}
            recipeStyle={String(pizzaStyle)}
          />
        </div>
      </CardContent>

      {/* Show ad banner */}
      <AdBanner />
    </Card>
  );
};

export default DoughResults;
