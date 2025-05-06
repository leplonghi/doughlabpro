
import React, { useState } from 'react';
import { getIngredients } from './recipe-data/ingredients';
import { getSteps, getDefaultTimerDuration } from './recipe-data/recipe-helpers';
import RecipeHeader from './RecipeHeader';
import IngredientsCard from './IngredientsCard';
import StepGuide from './StepGuide';
import NoStepsAvailable from './NoStepsAvailable';
import { RecipeDetailProps } from './types';
import { Button } from '@/components/ui/button';
import { Printer } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import PageSEO from '@/components/layout/PageSEO';

const RecipeDetail: React.FC<RecipeDetailProps> = ({ 
  selectedType, 
  selectedRecipe, 
  onGoBack,
  numberOfPies = 2,
  themeColor = 'green'
}) => {
  const [quantity, setQuantity] = useState<number>(numberOfPies);
  const { t, i18n } = useTranslation();
  
  // Get steps based on recipe type, passing current language
  const steps = getSteps(selectedType, selectedRecipe, i18n.language);
  
  // Get ingredients for the current recipe
  const ingredients = getIngredients(selectedType, selectedRecipe, quantity);
  
  // Get the default timer duration for this recipe type
  const timerDuration = getDefaultTimerDuration(selectedType);
  
  // Create structured data for this specific recipe
  const recipeIngredientsFormatted = ingredients.map(ing => 
    `${ing.amount} ${ing.unit} ${t(`ingredients.${ing.name.toLowerCase().replace(' ', '')}`, ing.name)}`
  );

  const stepsFormatted = steps.map((step, index) => ({
    '@type': 'HowToStep',
    'name': step.title,
    'text': step.description,
    'position': index + 1,
    'image': step.image || ''
  }));

  const recipeSchema = {
    '@context': 'https://schema.org/',
    '@type': 'Recipe',
    'name': `${selectedRecipe} ${selectedType} dough`,
    'description': `Learn how to make perfect ${selectedRecipe} ${selectedType} dough with this detailed recipe`,
    'recipeIngredient': recipeIngredientsFormatted,
    'recipeInstructions': stepsFormatted,
    'recipeCategory': selectedType,
    'recipeCuisine': selectedType === 'pizza' ? 'Italian' : 'Baking',
    'author': {
      '@type': 'Organization',
      'name': 'DoughLab Pro'
    }
  };

  const handleQuantityChange = (newQuantity: number) => {
    setQuantity(newQuantity);
  };

  // Function to handle printing the recipe
  const handlePrintRecipe = () => {
    window.print();
  };

  // Create SEO title and description for this recipe
  const recipeTitle = `${selectedRecipe} ${selectedType} Dough Recipe`;
  const recipeDescription = 
    `Learn how to make perfect ${selectedRecipe} ${selectedType} dough with our step-by-step guide. ` +
    `This recipe makes ${quantity} ${quantity === 1 ? 'item' : 'items'}.`;

  return (
    <div className="mt-8 max-w-4xl mx-auto">
      <PageSEO 
        title={recipeTitle}
        description={recipeDescription}
        ogType="article"
        structuredData={recipeSchema}
      />
      
      <div className="flex justify-between items-center mb-4">
        <RecipeHeader 
          selectedType={selectedType} 
          selectedRecipe={selectedRecipe}
          quantity={quantity}
          onQuantityChange={handleQuantityChange}
        />
        
        {/* Print Recipe Button */}
        <Button 
          variant="outline" 
          size="sm" 
          onClick={handlePrintRecipe} 
          className="print:hidden"
        >
          <Printer className="mr-2 h-4 w-4" />
          {t('common.printRecipe')}
        </Button>
      </div>
      
      {steps.length > 0 ? (
        <StepGuide
          steps={steps}
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
