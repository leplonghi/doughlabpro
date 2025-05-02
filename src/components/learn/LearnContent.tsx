
import React from 'react';
import DoughTypeSelection from './DoughTypeSelection';
import RecipeSelection from './RecipeSelection';
import RecipeDetail from './RecipeDetail';
import ProgressSteps from './ProgressSteps';

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
  const [selectedType, setSelectedType] = React.useState<DoughType | null>(null);
  const [step, setStep] = React.useState(1);
  const [selectedRecipe, setSelectedRecipe] = React.useState<string | null>(null);
  const [numberOfPies, setNumberOfPies] = React.useState(2);
  
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

  return (
    <div className="max-w-5xl mx-auto mt-8">
      <ProgressSteps currentStep={step} />
      
      <h1 className="text-3xl font-bold mb-4">
        {step === 1 && "What do you want to make?"}
        {step === 2 && selectedType && `Choose your ${selectedType} recipe`}
        {step === 3 && "Let's start baking!"}
      </h1>
      
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
