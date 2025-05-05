
import React, { useState } from 'react';
import DoughTypeSelection from './DoughTypeSelection';
import RecipeSelection from './RecipeSelection';
import RecipeDetail from './RecipeDetail';
import ProgressSteps from './ProgressSteps';
import { Lightbulb, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

type DoughType = 'pizza' | 'bread' | 'focaccia' | 'sourdough';

interface LearnContentProps {
  doughTypes: Array<{
    id: DoughType;
    name: string;
    icon: string;
    description: string;
  }>;
  recipePresets: Record<DoughType, Array<{
    name: string;
    hydration: number;
    difficulty: string;
  }>>;
}

const LearnContent: React.FC<LearnContentProps> = ({ doughTypes, recipePresets }) => {
  const [selectedType, setSelectedType] = useState<DoughType | null>(null);
  const [step, setStep] = useState(1);
  const [selectedRecipe, setSelectedRecipe] = useState<string | null>(null);
  const [numberOfPies, setNumberOfPies] = useState(2);
  
  const handleDoughTypeSelect = (type: DoughType) => {
    setSelectedType(type);
    setStep(2);
  };
  
  const handleRecipeSelect = (recipeName: string) => {
    setSelectedRecipe(recipeName);
    setStep(3);
  };
  
  const handleGoBack = () => {
    if (step === 2) {
      setSelectedType(null);
      setStep(1);
    } else if (step === 3) {
      setSelectedRecipe(null);
      setStep(2);
    }
  };

  const handleNumberOfPiesChange = (count: number) => {
    setNumberOfPies(count);
  };

  const getCurrentStepHeading = () => {
    if (step === 1) return "What do you want to make?";
    if (step === 2 && selectedType) {
      const typeName = 
        selectedType === 'pizza' ? 'pizza' :
        selectedType === 'bread' ? 'bread' :
        selectedType === 'focaccia' ? 'focaccia' : 'sourdough';
      return `Choose your ${typeName} recipe`;
    }
    if (step === 3) return "Let's start baking!";
    return "";
  };

  const renderHelperBox = () => {
    if (step === 1) {
      return (
        <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 mb-6">
          <div className="flex items-start">
            <Lightbulb className="h-5 w-5 text-blue-600 mt-0.5 mr-2" />
            <div>
              <h3 className="font-medium text-blue-800">Getting Started</h3>
              <p className="mt-2 text-blue-700">
                Welcome to our step-by-step baking guide! First, choose what type of dough you want to make. 
                Each option has different ingredients and techniques.
              </p>
            </div>
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="max-w-5xl mx-auto mt-8">
      <ProgressSteps currentStep={step} />
      
      {step > 1 && (
        <Button 
          variant="ghost" 
          onClick={handleGoBack}
          className="mb-4 text-muted-foreground flex items-center hover:text-amber-600"
          size="sm"
        >
          <ArrowLeft className="mr-1 h-4 w-4" />
          {step === 2 ? 'Back to dough selection' : 'Back to recipe selection'}
        </Button>
      )}
      
      <h1 className="text-3xl font-bold mb-6">
        {getCurrentStepHeading()}
      </h1>
      
      {renderHelperBox()}
      
      {step === 1 && (
        <DoughTypeSelection 
          doughTypes={doughTypes} 
          selectedType={selectedType} 
          onSelectType={handleDoughTypeSelect} 
        />
      )}
      
      {step === 2 && selectedType && (
        <RecipeSelection 
          recipes={recipePresets[selectedType]} 
          onSelectRecipe={handleRecipeSelect}
          onGoBack={handleGoBack}
          selectedType={selectedType}
          numberOfPies={numberOfPies}
          onNumberOfPiesChange={handleNumberOfPiesChange}
        />
      )}
      
      {step === 3 && (
        <RecipeDetail 
          selectedType={selectedType} 
          selectedRecipe={selectedRecipe}
          onGoBack={handleGoBack} 
          numberOfPies={numberOfPies}
        />
      )}
    </div>
  );
};

export default LearnContent;
