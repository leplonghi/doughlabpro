
import React, { useState, useEffect } from 'react';
import { PizzaStyle } from '@/components/PizzaStyleSelect';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';
import RecipeUnitSelect from '@/components/recipe/RecipeUnitSelect';
import { Unit } from '@/components/UnitSelect';

interface SauceCalculatorProps {
  pizzaStyle: PizzaStyle;
  initialNumberOfBalls: number;
}

const SauceCalculator: React.FC<SauceCalculatorProps> = ({
  pizzaStyle,
  initialNumberOfBalls
}) => {
  const [numberOfBalls, setNumberOfBalls] = useState<number>(initialNumberOfBalls || 4);
  const [activeUnit, setActiveUnit] = useState<Unit>('grams');

  // Sauce amounts per pizza in grams based on style
  const getSaucePerPizza = (): number => {
    switch (pizzaStyle) {
      case 'napoletana':
        return 100;
      case 'newyork':
        return 150;
      case 'focaccia':
        return 120;
      case 'brioche':
      case 'baguette':
        return 100;
      default:
        return 100;
    }
  };

  // Convert to selected unit
  const convertToUnit = (grams: number): string => {
    switch (activeUnit) {
      case 'ounces':
        return `${(grams / 28.35).toFixed(1)} oz`;
      case 'cups':
        const cups = grams / 240; // Sauce is more liquid than flour, so different conversion
        if (cups >= 0.25) {
          return `${cups.toFixed(2).replace(/\.?0+$/, '')} cup${cups !== 1 ? 's' : ''}`;
        } else {
          const tbsp = cups * 16;
          if (tbsp >= 1) {
            return `${tbsp.toFixed(1).replace(/\.0$/, '')} tbsp`;
          } else {
            const tsp = tbsp * 3;
            return `${tsp.toFixed(1).replace(/\.0$/, '')} tsp`;
          }
        }
      default:
        return `${grams.toFixed(0)} g`;
    }
  };

  const totalSauce = getSaucePerPizza() * numberOfBalls;

  return (
    <div>
      <div className="mb-6">
        <Label htmlFor="number-of-pizzas" className="mb-2 block">
          Number of Pizzas
        </Label>
        <Input
          id="number-of-pizzas"
          type="number"
          value={numberOfBalls}
          onChange={(e) => setNumberOfBalls(Math.max(1, parseInt(e.target.value) || 1))}
          min={1}
          className="max-w-[200px]"
        />
      </div>

      <RecipeUnitSelect
        activeUnit={activeUnit}
        onUnitChange={(unit) => setActiveUnit(unit)}
      />

      <Card className="mt-6 p-4 bg-white">
        <div className="flex justify-between items-center">
          <span className="text-lg">Recommended Sauce Quantity:</span>
          <span className="text-xl font-bold">{convertToUnit(totalSauce)}</span>
        </div>
        
        <p className="mt-4 text-gray-600 text-sm">
          This recommendation is calculated based on {getSaucePerPizza()}g of sauce per {pizzaStyle === 'napoletana' ? 'Neapolitan' : 
           pizzaStyle === 'newyork' ? 'New York-Style' :
           pizzaStyle === 'focaccia' ? 'Focaccia' :
           pizzaStyle === 'brioche' ? 'Brioche' :
           pizzaStyle === 'baguette' ? 'Baguette' :
           'standard'} pizza.
        </p>
      </Card>

      <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-100">
        <h3 className="text-lg font-semibold text-blue-800 mb-2">Customization Tips</h3>
        <ul className="list-disc pl-5 space-y-2 text-blue-700">
          <li>For a more garlicky sauce, add 1-2 extra cloves of minced garlic.</li>
          <li>Fresh herbs like oregano or thyme can enhance the flavors.</li>
          <li>For a spicier sauce, increase the amount of red pepper flakes.</li>
          <li>If your sauce is too acidic, add a pinch more sugar to balance it out.</li>
        </ul>
      </div>
    </div>
  );
};

export default SauceCalculator;
