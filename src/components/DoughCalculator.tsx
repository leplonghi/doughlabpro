
import React, { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import DoughResults from './DoughResults';
import DoughInputs from './DoughInputs';
import SkipToContent from './SkipToContent';
import { useDoughCalculator } from '@/hooks/useDoughCalculator';
import { FermentationMethod } from '@/types/dough';
import { useTranslation } from 'react-i18next';
import { PizzaStyle } from './PizzaStyleSelect';
import StepHeader from './dough/StepHeader';
import DoughTypeSelector from './dough/DoughTypeSelector';
import PizzaStyleSelector from './dough/PizzaStyleSelector';
import BreadStyleSelector, { BreadStyle } from './dough/BreadStyleSelector';
import StyleDescription from './dough/StyleDescription';
import FermentationMethodSelector from './dough/FermentationMethodSelector';
import CalculatorActions from './dough/CalculatorActions';

type DoughType = 'pizza' | 'bread';
type StyleType = PizzaStyle | BreadStyle;

const DoughCalculator: React.FC = () => {
  const [doughType, setDoughType] = useState<DoughType>('pizza');
  const [breadStyle, setBreadStyle] = useState<BreadStyle>('baguette');
  const [pizzaStyle, setPizzaStyle] = useState<PizzaStyle>('napoletana');
  const [fermentationMethod, setFermentationMethod] = useState<FermentationMethod>('direct');
  const [activeStep, setActiveStep] = useState<number>(1);
  const { t } = useTranslation();
  
  const currentStyle: StyleType = doughType === 'pizza' ? pizzaStyle : breadStyle;
  
  const {
    state,
    setState,
    validateField,
    calculateRecipe,
    resetForm
  } = useDoughCalculator(currentStyle, fermentationMethod);

  // Reset sub-type when main dough type changes
  useEffect(() => {
    if (doughType === 'pizza') {
      setPizzaStyle('napoletana');
    } else {
      setBreadStyle('baguette');
    }
  }, [doughType]);

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
    setState(prev => ({
      ...prev,
      ballWeight: weight
    }));
  };

  const handleProceedToNextStep = (nextStep: number) => {
    setActiveStep(nextStep);
  };
  
  return (
    <div className="w-full max-w-3xl mx-auto px-4 md:px-6 mb-12 fade-in">
      <SkipToContent />
      
      <h1 className="text-3xl font-bold text-center mb-6">Dough Calculator</h1>
      
      <Card className="mb-8 shadow-sm border-border overflow-hidden rounded-xl">
        <CardContent className="p-0 space-y-0">
          {/* Dough Type Section */}
          <div className="p-6 space-y-4">
            <StepHeader 
              step={1} 
              title="Dough Type" 
              isActive={activeStep === 1} 
              onClick={() => setActiveStep(1)}
            />
            
            {activeStep >= 1 && (
              <DoughTypeSelector 
                doughType={doughType} 
                setDoughType={setDoughType}
                onProceed={() => handleProceedToNextStep(2)}
              />
            )}
          </div>
          
          {/* Bread or Pizza Style Section */}
          <div className="p-6 space-y-4 border-t border-border">
            <StepHeader 
              step={2} 
              title={doughType === 'pizza' ? 'Pizza Style' : 'Bread Style'} 
              isActive={activeStep === 2}
              onClick={() => activeStep > 2 && setActiveStep(2)}
            />
            
            {activeStep >= 2 && (
              <>
                {doughType === 'pizza' ? (
                  <PizzaStyleSelector 
                    pizzaStyle={pizzaStyle}
                    setPizzaStyle={setPizzaStyle}
                    onProceed={() => handleProceedToNextStep(3)}
                  />
                ) : (
                  <BreadStyleSelector 
                    breadStyle={breadStyle}
                    setBreadStyle={setBreadStyle}
                    onProceed={() => handleProceedToNextStep(3)}
                  />
                )}
                
                <StyleDescription doughType={doughType} style={currentStyle} />
              </>
            )}
          </div>
          
          {/* Fermentation Method Section */}
          <div className="p-6 space-y-4 border-t border-border">
            <StepHeader 
              step={3} 
              title="Fermentation Method" 
              isActive={activeStep === 3}
              onClick={() => activeStep > 3 && setActiveStep(3)}
            />
            
            {activeStep >= 3 && (
              <FermentationMethodSelector 
                fermentationMethod={fermentationMethod}
                setFermentationMethod={setFermentationMethod}
                onProceed={() => handleProceedToNextStep(4)}
              />
            )}
          </div>
          
          {/* Ingredients Section */}
          <div className="p-6 space-y-6 border-t border-border">
            <StepHeader 
              step={4} 
              title="Ingredients" 
              isActive={activeStep === 4}
              onClick={() => activeStep >= 4 && setActiveStep(4)}
            />
            
            {activeStep >= 4 && (
              <>
                <DoughInputs 
                  flour={state.flour} 
                  setFlour={flour => setState(prev => ({ ...prev, flour }))} 
                  hydration={state.hydration} 
                  setHydration={hydration => setState(prev => ({ ...prev, hydration }))} 
                  yeastType={state.yeastType} 
                  setYeastType={yeastType => setState(prev => ({ ...prev, yeastType }))} 
                  pizzaStyle={currentStyle}
                  doughType={doughType}
                  errors={state.errors} 
                  validateField={validateField} 
                  ballWeight={state.ballWeight} 
                  onBallWeightChange={handleBallWeightChange} 
                />
              
                <CalculatorActions 
                  onCalculate={calculateRecipe}
                  onReset={resetForm}
                />
              </>
            )}
          </div>
        </CardContent>
      </Card>

      <div id="results" tabIndex={-1}>
        {state.recipe && (
          <DoughResults 
            recipe={state.recipe} 
            fermentationMethod={fermentationMethod} 
            pizzaStyle={currentStyle} 
            unit="grams" 
            numberOfBalls={state.numberOfBalls} 
          />
        )}
      </div>
    </div>
  );
};

export default DoughCalculator;
