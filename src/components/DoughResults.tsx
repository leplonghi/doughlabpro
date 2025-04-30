
import React from 'react';
import { Card } from '@/components/ui/card';
import { PizzaStyle } from "./PizzaStyleSelect";
import { Unit } from './UnitSelect';
import { FermentationMethod } from '@/types/dough';
import DoughResultsHeader from './recipe/DoughResultsHeader';
import DoughRecipeContent from './recipe/DoughRecipeContent';
import AdBanner from './monetization/AdBanner';

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
  return (
    <Card className="mb-8 print-component" id="recipe-card">
      <DoughResultsHeader 
        pizzaStyle={pizzaStyle}
        fermentationMethod={fermentationMethod}
        numberOfBalls={numberOfBalls}
        doughType={doughType}
      />
      
      <DoughRecipeContent
        recipe={recipe}
        fermentationMethod={fermentationMethod}
        pizzaStyle={String(pizzaStyle)}
        initialUnit={initialUnit}
        numberOfBalls={numberOfBalls}
        doughType={doughType}
      />

      {/* Show ad banner */}
      <AdBanner />
    </Card>
  );
};

export default DoughResults;
