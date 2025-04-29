
import React, { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import DoughResults from './DoughResults';
import FermentationMethodSelect from './FermentationMethodSelect';
import DoughInputs from './DoughInputs';
import SkipToContent from './SkipToContent';
import { useDoughCalculator } from '@/hooks/useDoughCalculator';
import { FermentationMethod } from '@/types/dough';
import { useTranslation } from 'react-i18next';
import { Button } from './ui/button';
import { Pizza, Bread, Brioche, Reset, Calculate } from 'lucide-react';

type DoughType = 'pizza' | 'bread' | 'focaccia' | 'brioche';
type PizzaStyle = "napoletana" | "newyork";

const DoughCalculator: React.FC = () => {
  const [doughType, setDoughType] = useState<DoughType>('pizza');
  const [pizzaStyle, setPizzaStyle] = useState<PizzaStyle>("napoletana");
  const [fermentationMethod, setFermentationMethod] = useState<FermentationMethod>("direct");
  const { t } = useTranslation();
  
  const {
    state,
    setState,
    validateField,
    calculateRecipe,
    resetForm
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
    setState(prev => ({
      ...prev,
      ballWeight: weight
    }));
  };
  
  return (
    <div className="w-full max-w-3xl mx-auto px-4 md:px-6 mb-12 fade-in">
      <SkipToContent />
      
      <h1 className="text-3xl font-bold text-center mb-6">Pizza Dough Calculator</h1>
      
      <Card className="mb-8 shadow-sm border-border overflow-hidden rounded-xl">
        <CardContent className="p-0 space-y-6">
          {/* Dough Type Section */}
          <div className="p-6 space-y-4">
            <div className="flex items-center gap-3 mb-2">
              <div className="flex items-center justify-center w-7 h-7 rounded-full bg-black text-white text-sm font-medium">1</div>
              <h2 className="text-xl font-semibold">Dough Type</h2>
            </div>
            
            <div className="grid grid-cols-2 gap-3">
              <Button 
                variant={doughType === 'pizza' ? 'default' : 'outline'} 
                className="h-12 justify-center" 
                onClick={() => setDoughType('pizza')}
              >
                <Pizza className="mr-2 h-5 w-5" />
                Pizza
              </Button>
              <Button 
                variant={doughType === 'bread' ? 'default' : 'outline'} 
                className="h-12 justify-center" 
                onClick={() => setDoughType('bread')}
              >
                <Bread className="mr-2 h-5 w-5" />
                Bread
              </Button>
              <Button 
                variant={doughType === 'focaccia' ? 'default' : 'outline'} 
                className="h-12 justify-center" 
                onClick={() => setDoughType('focaccia')}
              >
                <Bread className="mr-2 h-5 w-5" />
                Focaccia
              </Button>
              <Button 
                variant={doughType === 'brioche' ? 'default' : 'outline'} 
                className="h-12 justify-center" 
                onClick={() => setDoughType('brioche')}
              >
                <Brioche className="mr-2 h-5 w-5" />
                Brioche
              </Button>
            </div>
            
            <p className="text-sm text-gray-600 mt-1">
              Classic Italian pizza dough with various styles
            </p>
          </div>
          
          {/* Pizza Style Section */}
          <div className="p-6 space-y-4 border-t border-border">
            <div className="flex items-center gap-3 mb-2">
              <div className="flex items-center justify-center w-7 h-7 rounded-full bg-black text-white text-sm font-medium">2</div>
              <h2 className="text-xl font-semibold">Pizza Style</h2>
            </div>
            
            <div className="grid grid-cols-2 gap-3">
              <Button 
                variant={pizzaStyle === 'napoletana' ? 'default' : 'outline'} 
                className="h-12 justify-center" 
                onClick={() => setPizzaStyle('napoletana')}
              >
                Neapolitan
              </Button>
              <Button 
                variant={pizzaStyle === 'newyork' ? 'default' : 'outline'} 
                className="h-12 justify-center" 
                onClick={() => setPizzaStyle('newyork')}
              >
                New York
              </Button>
            </div>
            
            <p className="text-sm text-gray-600 mt-1">
              {pizzaStyle === 'napoletana' 
                ? 'Classic style with olive oil and sugar (200-320°C)'
                : 'New York style with higher hydration and longer fermentation'
              }
            </p>
          </div>
          
          {/* Fermentation Method Section */}
          <div className="p-6 space-y-4 border-t border-border">
            <div className="flex items-center gap-3 mb-2">
              <div className="flex items-center justify-center w-7 h-7 rounded-full bg-black text-white text-sm font-medium">3</div>
              <h2 className="text-xl font-semibold">Fermentation Method</h2>
            </div>
            
            <div className="grid grid-cols-3 gap-3">
              <Button 
                variant={fermentationMethod === 'direct' ? 'default' : 'outline'} 
                className="h-12 justify-center" 
                onClick={() => setFermentationMethod('direct')}
              >
                Direct
              </Button>
              <Button 
                variant={fermentationMethod === 'poolish' ? 'default' : 'outline'} 
                className="h-12 justify-center" 
                onClick={() => setFermentationMethod('poolish')}
              >
                Poolish
              </Button>
              <Button 
                variant={fermentationMethod === 'biga' ? 'default' : 'outline'} 
                className="h-12 justify-center" 
                onClick={() => setFermentationMethod('biga')}
              >
                Biga
              </Button>
            </div>
            
            {fermentationMethod !== 'direct' && (
              <div className="mt-4 space-y-3">
                <p className="text-sm">
                  Poolish pre-ferment (100% hydration, 30% of total flour) ferments for 12-16 hours at 18-21°C (64-70°F). 
                  Creates a mild, nutty flavor and enhances dough extensibility.
                </p>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-medium mb-2">Pre-ferment Details</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-600">Flour Portion:</p>
                      <p className="font-medium">30% of total flour</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Hydration:</p>
                      <p className="font-medium">100%</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Yeast Amount:</p>
                      <p className="font-medium">0.1% of pre-ferment flour</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Fermentation Time:</p>
                      <p className="font-medium">12-16 hours at 18-21°C</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          
          {/* Ingredients Section */}
          <div className="p-6 space-y-6 border-t border-border">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center justify-center w-7 h-7 rounded-full bg-black text-white text-sm font-medium">4</div>
              <h2 className="text-xl font-semibold">Ingredients</h2>
            </div>
            
            <DoughInputs 
              flour={state.flour} 
              setFlour={flour => setState(prev => ({ ...prev, flour }))} 
              hydration={state.hydration} 
              setHydration={hydration => setState(prev => ({ ...prev, hydration }))} 
              yeastType={state.yeastType} 
              setYeastType={yeastType => setState(prev => ({ ...prev, yeastType }))} 
              pizzaStyle={pizzaStyle} 
              errors={state.errors} 
              validateField={validateField} 
              ballWeight={state.ballWeight} 
              onBallWeightChange={handleBallWeightChange} 
            />
          
            <div className="flex justify-between gap-3 mt-6">
              <Button 
                variant="default" 
                className="flex-1 h-12 font-medium"
                onClick={calculateRecipe}
              >
                <Calculate className="mr-2 h-5 w-5" />
                Calculate Recipe
              </Button>
              <Button 
                variant="outline" 
                className="flex-1 h-12 font-medium"
                onClick={resetForm}
              >
                <Reset className="mr-2 h-5 w-5" />
                Reset
              </Button>
            </div>
          </div>
        </CardContent>
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
