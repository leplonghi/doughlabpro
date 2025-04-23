
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { FileText } from 'lucide-react';
import { PizzaStyle } from "./PizzaStyleSelect";
import { Unit } from './UnitSelect';
import RecipePreliminary from './recipe/RecipePreliminary';
import RecipeFinal from './recipe/RecipeFinal';
import FermentationTips from './recipe/FermentationTips';
import RecipeActions from './recipe/RecipeActions';
import AdBanner from './monetization/AdBanner';

// Check if user is a pro subscriber
const isPro = () => {
  // This would be replaced with actual authentication check
  return localStorage.getItem('subscription_tier') === 'pro';
};

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
  pizzaStyle: PizzaStyle;
  unit: Unit;
  numberOfBalls?: number;
}

const DoughResults: React.FC<DoughResultsProps> = ({ 
  recipe, 
  fermentationMethod, 
  pizzaStyle, 
  unit,
  numberOfBalls 
}) => {
  const convertToUnit = (grams: number): number => {
    switch(unit) {
      case 'ounces':
        return grams / 28.35;
      case 'cups':
        return grams / 120;
      default:
        return grams;
    }
  };

  const getUnitLabel = () => {
    switch(unit) {
      case 'ounces':
        return 'oz';
      case 'cups':
        return 'cups';
      default:
        return 'g';
    }
  };

  const formatValue = (value: number): string => {
    const converted = convertToUnit(value);
    return converted.toFixed(unit === 'grams' ? 1 : 2).replace(/\.0$/, '');
  };

  return (
    <Card className="mb-8 print-component">
      <CardHeader className="bg-pizza-light bg-opacity-30">
        <CardTitle>
          {pizzaStyle === "newyork" ? "Your New York Style Pizza Recipe" : "Your Neapolitan Pizza Recipe"}
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

            <FermentationTips method={fermentationMethod} />
          </div>

          <RecipeActions />
        </div>
      </CardContent>

      {/* Show ad banner for free users */}
      {!isPro() && <AdBanner />}
    </Card>
  );
};

export default DoughResults;
