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
import { Info } from 'lucide-react';
import DoughCalculatorHeader from './DoughCalculatorHeader';

type DoughType = 'pizza' | 'bread';
type StyleType = PizzaStyle | BreadStyle;

const DoughCalculator: React.FC = () => {
  const [doughType, setDoughType] = useState<DoughType>('pizza');
  const [breadStyle, setBreadStyle] = useState<BreadStyle | ''>('');
  const [pizzaStyle, setPizzaStyle] = useState<PizzaStyle | ''>('');
  const [fermentationMethod, setFermentationMethod] = useState<FermentationMethod>('direct');
  const [activeStep, setActiveStep] = useState<number>(1);
  const { t } = useTranslation();
  
  const currentStyle: StyleType = doughType === 'pizza' ? 
    (pizzaStyle || 'napoletana') as PizzaStyle : 
    (breadStyle || 'baguette') as BreadStyle;
  
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
      setPizzaStyle('');
      setBreadStyle('');
    } else {
      setPizzaStyle('');
      setBreadStyle('');
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
    <div className="w-full max-w-3xl mx-auto px-4 md:px-6 mb-12 fade-in pt-8">
      <SkipToContent />
      
      <div className="flex flex-col items-center mb-6">
        <img src="/lovable-uploads/15936b17-7234-47a3-a949-d72c0d2932e6.png" alt="DoughLab Pro logo" className="h-16 w-auto mb-3" />
        <h1 className="text-3xl font-bold text-center">Dough Calculator</h1>
      </div>
      
      <Card className="mb-8 shadow-sm border-border overflow-hidden rounded-xl">
        <DoughCalculatorHeader />
        <CardContent className="p-0 space-y-0">
          {/* Dough Type Section */}
          <div className="p-6 space-y-4">
            <StepHeader 
              step={1} 
              title="Dough Type" 
              isActive={activeStep === 1} 
              onClick={() => setActiveStep(1)}
              description="Choose between pizza dough or bread dough to customize your recipe."
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
              description={doughType === 'pizza' ? 
                "Select a pizza style to determine hydration and ingredients." : 
                "Choose a bread style to determine the optimal recipe formulation."}
            />
            
            {activeStep >= 2 && (
              <>
                {doughType === 'pizza' ? (
                  <PizzaStyleSelector 
                    pizzaStyle={pizzaStyle as PizzaStyle}
                    setPizzaStyle={setPizzaStyle as (style: PizzaStyle) => void}
                    onProceed={() => handleProceedToNextStep(3)}
                  />
                ) : (
                  <BreadStyleSelector 
                    breadStyle={breadStyle as BreadStyle}
                    setBreadStyle={setBreadStyle as (style: BreadStyle) => void}
                    onProceed={() => handleProceedToNextStep(3)}
                  />
                )}
                
                {(pizzaStyle || breadStyle) && (
                  <StyleDescription doughType={doughType} style={currentStyle} />
                )}
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
              description="Choose a fermentation method to affect flavor development and timing."
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
              description="Adjust flour amount, hydration, and other ingredients to customize your recipe."
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
                
                <div className="p-4 border border-blue-100 bg-blue-50 rounded-md flex items-start mt-6">
                  <Info className="h-5 w-5 text-black-600 mt-0.5 mr-3 flex-shrink-0" />
                  <p className="text-sm text-blue-800">
                    Detailed instructions for handling and fermenting your dough will appear on the results page after calculation.
                  </p>
                </div>
              
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
