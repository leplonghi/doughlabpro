
import React, { useState } from 'react';
import { getIngredients } from './recipe-data/ingredients';
import { getSteps, getDefaultTimerDuration } from './recipe-data/recipe-helpers';
import RecipeHeader from './RecipeHeader';
import IngredientsCard from './IngredientsCard';
import StepGuide from './StepGuide';
import NoStepsAvailable from './NoStepsAvailable';
import { RecipeDetailProps } from './types';

const RecipeDetail: React.FC<RecipeDetailProps> = ({ 
  selectedType, 
  selectedRecipe, 
  onGoBack,
  numberOfPies = 2,
  themeColor = 'green'
}) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const [quantity, setQuantity] = useState(numberOfPies);
  
  // Get steps based on recipe type
  const steps = getSteps(selectedType, selectedRecipe);
  
  // Get ingredients for the current recipe
  const ingredients = getIngredients(selectedType, selectedRecipe, quantity);
  
  // Get the default timer duration for this recipe type
  const timerDuration = getDefaultTimerDuration(selectedType);

  const handleStepComplete = (stepIndex: number) => {
    if (!completedSteps.includes(stepIndex)) {
      setCompletedSteps([...completedSteps, stepIndex]);
    }
  };

  const handleQuantityChange = (newQuantity: number) => {
    setQuantity(newQuantity);
  };

  return (
    <div className="mt-8 max-w-3xl mx-auto">
      <RecipeHeader 
        selectedType={selectedType} 
        selectedRecipe={selectedRecipe}
        quantity={quantity}
        onQuantityChange={handleQuantityChange}
      />
      
      {steps.length > 0 ? (
        <StepGuide
          steps={steps}
          currentStepIndex={currentStepIndex}
          setCurrentStepIndex={(index) => {
            setCurrentStepIndex(index);
            if (index > currentStepIndex) {
              handleStepComplete(currentStepIndex);
            }
          }}
          onGoBack={onGoBack}
          ingredients={ingredients}
          selectedType={selectedType}
          quantity={quantity}
          themeColor={themeColor}
        />
      ) : (
        <>
          <IngredientsCard 
            ingredients={ingredients} 
            selectedType={selectedType}
            quantity={quantity}
          />
          
          <NoStepsAvailable 
            onGoBack={onGoBack}
            selectedRecipe={selectedRecipe}
            timerDuration={timerDuration}
            themeColor={themeColor}
          />
        </>
      )}
    </div>
  );
};

export default RecipeDetail;
