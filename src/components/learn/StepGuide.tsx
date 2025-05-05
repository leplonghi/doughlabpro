
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import BakingTimer from './BakingTimer';
import { BakingStep } from './types';

interface StepGuideProps {
  steps: BakingStep[];
  currentStepIndex: number;
  setCurrentStepIndex: (index: number) => void;
  onGoBack: () => void;
}

const StepGuide: React.FC<StepGuideProps> = ({
  steps,
  currentStepIndex,
  setCurrentStepIndex,
  onGoBack
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

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold">Step-by-Step Guide</h2>
        <p className="text-sm text-muted-foreground">
          Step {currentStepIndex + 1} of {steps.length}
        </p>
      </div>
      
      <Progress value={progress} className="h-2 mb-8" />
      
      <div className="bg-white p-6 rounded-lg border shadow-sm">
        <h3 className="text-xl font-medium mb-3">{currentStep.title}</h3>
        <p className="mb-6 text-gray-700">{currentStep.description}</p>
        
        {currentStep.tip && (
          <div className="bg-blue-50 p-3 rounded-md mb-6 border border-blue-100">
            <p className="text-blue-800 text-sm font-medium">Tip: {currentStep.tip}</p>
          </div>
        )}
        
        {currentStep.timer && (
          <div className="my-6">
            <BakingTimer 
              initialMinutes={currentStep.timer} 
              title={`${currentStep.title} Timer`} 
            />
          </div>
        )}
        
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
              className="bg-amber-500 hover:bg-amber-600 flex items-center"
            >
              Next Step
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          ) : (
            <Button asChild className="bg-blue-500 hover:bg-blue-600">
              <a href="/calculator">Switch to Pro Mode</a>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default StepGuide;
