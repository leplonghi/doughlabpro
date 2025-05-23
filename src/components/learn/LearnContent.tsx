
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import DoughTypeSelection from './DoughTypeSelection';
import RecipeSelection from './RecipeSelection';
import RecipeDetail from './RecipeDetail';
import { recipePresets, DoughType } from '@/data/learnData';
import { getItemLabel } from './recipe-data/recipe-helpers';

interface LearnContentProps {
  doughTypes: Array<{
    id: DoughType;
    name: string;
    icon: string;
    description: string;
  }>;
  recipePresets: Record<string, Array<{
    name: string;
    hydration: number;
    difficulty: string;
    defaultQuantity?: number;
    ballWeight?: number;
    fermentationHours?: number;
  }>>;
}

const LearnContent: React.FC<LearnContentProps> = ({ doughTypes, recipePresets }) => {
  const [selectedType, setSelectedType] = useState<DoughType | null>(null);
  const [selectedRecipe, setSelectedRecipe] = useState<string | null>(null);
  const [numberOfItems, setNumberOfItems] = useState<number>(2);
  
  // Get recipes for the selected type
  const getRecipesForType = () => {
    if (!selectedType) return [];
    return recipePresets[selectedType] || [];
  };

  // Handle selecting a dough type
  const handleSelectType = (typeId: DoughType) => {
    setSelectedType(typeId);
    setSelectedRecipe(null);
    
    // Set default number of items based on first recipe in the selected type
    const recipes = recipePresets[typeId] || [];
    if (recipes.length > 0 && recipes[0].defaultQuantity) {
      setNumberOfItems(recipes[0].defaultQuantity);
    } else {
      // Default to 2 if not specified
      setNumberOfItems(2);
    }
  };

  // Handle selecting a recipe
  const handleSelectRecipe = (recipeName: string) => {
    setSelectedRecipe(recipeName);
  };

  // Handle going back to type selection
  const handleBackToTypes = () => {
    setSelectedType(null);
    setSelectedRecipe(null);
  };

  // Handle going back to recipe selection
  const handleBackToRecipes = () => {
    setSelectedRecipe(null);
  };

  // Item label based on selected type
  const itemLabel = getItemLabel(selectedType, numberOfItems);

  // Theme color for beginners page (green)
  const themeColor = 'green';

  return (
    <Card className="mt-4">
      <CardContent className="p-6">
        {!selectedType ? (
          <DoughTypeSelection doughTypes={doughTypes} onSelect={handleSelectType} />
        ) : !selectedRecipe ? (
          <RecipeSelection 
            recipes={getRecipesForType()} 
            onSelectRecipe={handleSelectRecipe} 
            onGoBack={handleBackToTypes}
            selectedType={selectedType}
            numberOfItems={numberOfItems}
            onNumberOfItemsChange={setNumberOfItems}
            itemLabel={itemLabel}
            themeColor={themeColor}
          />
        ) : (
          <RecipeDetail 
            selectedType={selectedType} 
            selectedRecipe={selectedRecipe}
            onGoBack={handleBackToRecipes}
            numberOfPies={numberOfItems}
            themeColor={themeColor}
          />
        )}
      </CardContent>
    </Card>
  );
};

export default LearnContent;
