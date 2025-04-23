
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { FileText } from 'lucide-react';
import { PizzaStyle } from "./PizzaStyleSelect";
import { Unit } from './UnitSelect';
import RecipePreliminary from './recipe/RecipePreliminary';
import RecipeFinal from './recipe/RecipeFinal';
import FermentationTips from './recipe/FermentationTips';
import RecipeActions from './recipe/RecipeActions';

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
}

const DoughResults: React.FC<DoughResultsProps> = ({ recipe, fermentationMethod, pizzaStyle, unit }) => {
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
        return 'xíc';
      default:
        return 'g';
    }
  };

  const formatValue = (value: number): string => {
    const converted = convertToUnit(value);
    return converted.toFixed(unit === 'grams' ? 1 : 2).replace(/\.0$/, '');
  };

  return (
    <Card className="mb-8">
      <CardHeader className="bg-pizza-light bg-opacity-30">
        <CardTitle>
          {pizzaStyle === "newyork" ? "Sua Receita de Pizza New York Style" : "Sua Receita de Pizza Napolitana"}
        </CardTitle>
        <CardDescription>
          {fermentationMethod === 'direct'
            ? 'Método Direto'
            : fermentationMethod === 'poolish'
              ? 'Método Poolish'
              : 'Método Biga'}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="pt-6">
        <div className="space-y-6">
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
          />

          <FermentationTips method={fermentationMethod} />
          <RecipeActions />
        </div>
      </CardContent>
    </Card>
  );
};

export default DoughResults;
