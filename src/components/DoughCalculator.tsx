
import React, { useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import DoughResults from './DoughResults';
import FermentationMethodSelect from './FermentationMethodSelect';
import DoughInputs from './DoughInputs';
import DoughCalculatorHeader from './DoughCalculatorHeader';
import DoughCalculateButton from './DoughCalculateButton';
import PizzaStyleSwitch from './PizzaStyleSwitch';
import { PizzaStyle } from './PizzaStyleSelect';
import SkipToContent from './SkipToContent';
import { useDoughCalculator } from '@/hooks/useDoughCalculator';
import { FermentationMethod } from '@/types/dough';

const DoughCalculator: React.FC = () => {
  const [pizzaStyle, setPizzaStyle] = React.useState<PizzaStyle>("napoletana");
  const [fermentationMethod, setFermentationMethod] = React.useState<FermentationMethod>("direct");
  
  const {
    state,
    setState,
    validateField,
    calculateRecipe,
  } = useDoughCalculator(pizzaStyle, fermentationMethod);

  // Add print-specific CSS
  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      @media print {
        body * {
          visibility: hidden;
        }
        .print-component, .print-component * {
          visibility: visible;
        }
        .print-component {
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
        }
        .print-component button, 
        .print-component .ad-banner {
          display: none !important;
        }
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const handleBallWeightChange = (weight: number) => {
    setState(prev => ({ ...prev, ballWeight: weight }));
  };

  return (
    <div className="w-full max-w-3xl mx-auto px-4 md:px-6">
      <SkipToContent />
      <Card className="mb-8">
        <DoughCalculatorHeader />
        <CardContent className="pt-6 space-y-6">
          <PizzaStyleSwitch
            pizzaStyle={pizzaStyle}
            setPizzaStyle={setPizzaStyle}
          />
          <FermentationMethodSelect
            fermentationMethod={fermentationMethod}
            onChange={setFermentationMethod}
          />
          <DoughInputs
            flour={state.flour}
            setFlour={(flour) => setState(prev => ({ ...prev, flour }))}
            hydration={state.hydration}
            setHydration={(hydration) => setState(prev => ({ ...prev, hydration }))}
            yeastType={state.yeastType}
            setYeastType={(yeastType) => setState(prev => ({ ...prev, yeastType }))}
            pizzaStyle={pizzaStyle}
            errors={state.errors}
            validateField={validateField}
            ballWeight={state.ballWeight}
            onBallWeightChange={handleBallWeightChange}
          />
        </CardContent>
        <DoughCalculateButton onClick={calculateRecipe} />
      </Card>

      <div id="results" tabIndex={-1}>
        {state.recipe && (
          <DoughResults 
            recipe={state.recipe}
            fermentationMethod={fermentationMethod}
            pizzaStyle={pizzaStyle}
            unit="grams"
            numberOfBalls={state.numberOfBalls}
          />
        )}
      </div>
    </div>
  );
};

export default DoughCalculator;
