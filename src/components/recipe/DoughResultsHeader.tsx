
import React from 'react';
import { CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { PizzaStyle } from "@/components/PizzaStyleSelect";
import { FermentationMethod } from '@/types/dough';

interface DoughResultsHeaderProps {
  pizzaStyle: PizzaStyle | string;
  fermentationMethod: FermentationMethod;
  numberOfBalls?: number;
  doughType: 'pizza' | 'bread';
}

const DoughResultsHeader: React.FC<DoughResultsHeaderProps> = ({ 
  pizzaStyle, 
  fermentationMethod, 
  numberOfBalls, 
  doughType 
}) => {
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
  );
};

export default DoughResultsHeader;
