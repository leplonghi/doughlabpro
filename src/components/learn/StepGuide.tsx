
import React from 'react';
import { Button } from '@/components/ui/card';
import { ArrowLeft, ArrowRight, BookOpen, Image } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { BakingStep, Ingredient } from './types';
import IngredientsCard from './IngredientsCard';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';

interface StepGuideProps {
  steps: BakingStep[];
  currentStepIndex: number;
  setCurrentStepIndex: (index: number) => void;
  onGoBack: () => void;
  ingredients: Ingredient[];
  selectedType: string | null;
  quantity: number;
  themeColor?: string;
}

const StepGuide: React.FC<StepGuideProps> = ({
  steps,
  currentStepIndex,
  setCurrentStepIndex,
  onGoBack,
  ingredients,
  selectedType,
  quantity,
  themeColor = 'green'
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

  // Helper function to get appropriate image for the current step
  const getStepImage = (stepTitle: string) => {
    // Map step titles to appropriate images
    if (stepTitle.includes('Mix') || stepTitle.includes('Autolyse')) {
      return "/lovable-uploads/dough-mixing.jpg";
    } else if (stepTitle.includes('Knead') || stepTitle.includes('Fold')) {
      return "/lovable-uploads/dough-folding.jpg";
    } else if (stepTitle.includes('Ferment') || stepTitle.includes('Proof')) {
      return "/lovable-uploads/dough-fermentation.jpg";
    } else if (stepTitle.includes('Shape')) {
      return "/lovable-uploads/dough-shaping.jpg";
    } else if (stepTitle.includes('Bake')) {
      return "/lovable-uploads/dough-baking.jpg";
    }
    
    // Default image if no specific match
    return "/lovable-uploads/dough-process.jpg";
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold">Step-by-Step Guide</h2>
        <p className="text-sm text-muted-foreground">
          Step {currentStepIndex + 1} of {steps.length}
        </p>
      </div>
      
      <Progress value={progress} className={cn(`h-2 mb-8`, themeColor === 'green' ? 'bg-green-100' : 'bg-blue-100')} />
      
      {/* Always show ingredients in compact form during the step guide */}
      <IngredientsCard 
        ingredients={ingredients} 
        selectedType={selectedType} 
        quantity={quantity}
        compact={true}
      />
      
      <div className="bg-white p-6 rounded-lg border shadow-sm">
        <h3 className="text-xl font-medium mb-3">{currentStep.title}</h3>
        
        {/* Step image - using either provided image or default based on step title */}
        <div className="mb-6 rounded-lg overflow-hidden">
          <img 
            src={currentStep.image || getStepImage(currentStep.title)} 
            alt={currentStep.title} 
            className="w-full h-64 object-cover rounded-lg"
          />
        </div>
        
        <p className="mb-6 text-gray-700">{currentStep.description}</p>
        
        {/* Didactic information box - replaces timer */}
        <div className="my-6 p-4 bg-blue-50 rounded-lg border border-blue-100">
          <div className="flex items-start">
            <BookOpen className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
            <div>
              <h4 className="font-medium text-blue-800 mb-2">Learning Notes</h4>
              {currentStep.didacticInfo ? (
                <p className="text-blue-700">{currentStep.didacticInfo}</p>
              ) : (
                <p className="text-blue-700">
                  {currentStep.title.includes('Mix') && "Proper mixing ensures even hydration of the flour and helps develop initial gluten structure. Take your time during this phase to ensure all ingredients are well incorporated."}
                  {currentStep.title.includes('Fold') && "Folding techniques help develop gluten structure without overworking the dough. Each fold redistributes the yeast and creates a stronger dough with better texture."}
                  {currentStep.title.includes('Ferment') && "Fermentation is when flavor develops. The longer and slower the fermentation, the more complex flavors will develop in your dough."}
                  {currentStep.title.includes('Shape') && "Proper shaping creates surface tension that helps the dough hold its shape and rise properly during baking."}
                  {currentStep.title.includes('Bake') && "The initial high temperature creates 'oven spring' - the final rise of the dough in the oven. Steam during the first part of baking helps develop a crispy crust."}
                </p>
              )}
            </div>
          </div>
        </div>
        
        {currentStep.tip && (
          <div className="bg-green-50 p-4 rounded-md mb-6 border border-green-100">
            <p className="text-green-800 text-sm font-medium flex items-start">
              <span className="mr-2">💡</span>
              <span>{currentStep.tip}</span>
            </p>
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
              className={cn(
                "flex items-center",
                themeColor === 'green' ? 'bg-green-500 hover:bg-green-600' : 'bg-blue-500 hover:bg-blue-600'
              )}
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
