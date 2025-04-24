
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
import { useTranslation } from 'react-i18next';

const DoughCalculator: React.FC = () => {
  const [pizzaStyle, setPizzaStyle] = React.useState<PizzaStyle>("napoletana");
  const [fermentationMethod, setFermentationMethod] = React.useState<FermentationMethod>("direct");
  const { t } = useTranslation();
  
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
    <div className="w-full max-w-3xl mx-auto px-4 md:px-6 mb-12 fade-in">
      <SkipToContent />
      <Card className="mb-8 shadow-sm border-border overflow-hidden rounded-xl">
        <DoughCalculatorHeader />
        <CardContent className="p-6 space-y-8">
          <div className="space-y-5">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center justify-center w-7 h-7 rounded-full bg-primary text-primary-foreground text-sm font-medium">1</div>
              <h2 className="text-xl font-semibold text-foreground">{t('calculator.pizzaStyle.title')}</h2>
            </div>
            <PizzaStyleSwitch
              pizzaStyle={pizzaStyle}
              setPizzaStyle={setPizzaStyle}
            />
          </div>

          <div className="space-y-5">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center justify-center w-7 h-7 rounded-full bg-primary text-primary-foreground text-sm font-medium">2</div>
              <h2 className="text-xl font-semibold text-foreground">{t('calculator.fermentation.title')}</h2>
            </div>
            <FermentationMethodSelect
              fermentationMethod={fermentationMethod}
              onChange={setFermentationMethod}
            />
          </div>

          <div className="space-y-5">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center justify-center w-7 h-7 rounded-full bg-primary text-primary-foreground text-sm font-medium">3</div>
              <h2 className="text-xl font-semibold text-foreground">{t('calculator.ingredients.title')}</h2>
            </div>
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
          </div>
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
