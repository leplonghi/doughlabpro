
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight, Image } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import BakingTimer from './BakingTimer';
import { BakingStep, Ingredient } from './types';
import IngredientsCard from './IngredientsCard';
import { Separator } from '@/components/ui/separator';

interface StepGuideProps {
  steps: BakingStep[];
  currentStepIndex: number;
  setCurrentStepIndex: (index: number) => void;
  onGoBack: () => void;
  ingredients: Ingredient[];
  selectedType: string | null;
  quantity: number;
}

const StepGuide: React.FC<StepGuideProps> = ({
  steps,
  currentStepIndex,
  setCurrentStepIndex,
  onGoBack,
  ingredients,
  selectedType,
  quantity
}) => {
  const currentStep = steps[currentStepIndex] || { title: '', description: '' };
  const progress = steps.length > 0 ? (currentStepIndex / steps.length) * 100 : 0;

  const nextStep = () => {
    if (currentStepIndex < steps.length - 1) {
      setCurrentStepIndex(currentStepIndex + 1);
    }
  };
  
  const prevStep = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex(currentStepIndex - 1);
    }
  };

  // Function to handle going back to dough types
  const handleBackToDoughTypes = () => {
    // This will navigate back to the beginning
    window.location.href = '/learn';
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold">Step-by-Step Guide</h2>
        <p className="text-sm text-muted-foreground">
          Step {currentStepIndex + 1} of {steps.length}
        </p>
      </div>
      
      <Progress value={progress} className="h-2 mb-8" />
      
      {/* Always show ingredients in compact form during the step guide */}
      <IngredientsCard 
        ingredients={ingredients} 
        selectedType={selectedType} 
        quantity={quantity}
        compact={true}
      />
      
      <div className="bg-white p-6 rounded-lg border shadow-sm">
        <h3 className="text-xl font-medium mb-3">{currentStep.title}</h3>
        
        {currentStep.image && (
          <div className="mb-6 rounded-lg overflow-hidden">
            <img 
              src={currentStep.image} 
              alt={currentStep.title} 
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
        )}
        
        <p className="mb-6 text-gray-700">{currentStep.description}</p>
        
        {currentStep.tip && (
          <div className="bg-green-50 p-4 rounded-md mb-6 border border-green-100">
            <p className="text-green-800 text-sm font-medium flex items-start">
              <span className="mr-2">💡</span>
              <span>{currentStep.tip}</span>
            </p>
          </div>
        )}
        
        {currentStep.timer && (
          <div className="my-6 p-4 bg-amber-50 rounded-lg border border-amber-100">
            <BakingTimer 
              initialMinutes={currentStep.timer} 
              title={`${currentStep.title} Timer`} 
            />
          </div>
        )}
        
        <Separator className="my-6" />
        
        <div className="flex justify-between mt-6">
          <Button 
            variant="outline" 
            onClick={currentStepIndex === 0 ? onGoBack : prevStep}
            className="flex items-center"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            {currentStepIndex === 0 ? 'Back to Recipes' : 'Previous Step'}
          </Button>
          
          {currentStepIndex < steps.length - 1 ? (
            <Button 
              onClick={nextStep}
              className="bg-green-500 hover:bg-green-600 flex items-center"
            >
              Next Step
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          ) : (
            <div className="flex space-x-4">
              <Button 
                variant="outline" 
                onClick={handleBackToDoughTypes}
                className="flex items-center"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Dough Types
              </Button>
              <Button asChild className="bg-red-500 hover:bg-red-600">
                <a href="/calculator">Switch to Pro Mode</a>
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StepGuide;
