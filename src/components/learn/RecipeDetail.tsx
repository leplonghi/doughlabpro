
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import BakingTimer from './BakingTimer';

interface RecipeDetailProps {
  selectedType: string | null;
  selectedRecipe: string | null;
  onGoBack: () => void;
}

const RecipeDetail: React.FC<RecipeDetailProps> = ({ 
  selectedType, 
  selectedRecipe, 
  onGoBack 
}) => {
  // Determine appropriate timer duration based on recipe type
  const getTimerDuration = () => {
    if (selectedType === 'bread' || selectedType === 'sourdough') {
      return 45; // 45 minutes for bread
    } else if (selectedType === 'pizza') {
      return 12; // 12 minutes for pizza
    } else if (selectedType === 'focaccia') {
      return 20; // 20 minutes for focaccia
    }
    return 30; // default timer duration
  };

  return (
    <div className="mt-8 max-w-3xl mx-auto">
      <div className="text-center mb-8">
        <p className="text-sm text-muted-foreground mb-2">Coming soon!</p>
        <h3 className="text-xl font-medium">Step-by-step guided baking experience</h3>
        <p className="mt-4">
          The complete guided journey will include detailed steps with timers, checkpoints,
          in-context help, and visual guides for each stage of the baking process.
        </p>
        {selectedType && selectedRecipe && (
          <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-md">
            <p className="font-medium">You selected:</p>
            <p className="text-lg">{selectedRecipe}</p>
            <p className="text-sm text-muted-foreground">
              Type: {selectedType.charAt(0).toUpperCase() + selectedType.slice(1)}
            </p>
          </div>
        )}
      </div>
      
      {selectedType && selectedRecipe && (
        <BakingTimer 
          initialMinutes={getTimerDuration()} 
          title={`${selectedRecipe} Timer`} 
        />
      )}
      
      <div className="flex justify-center mt-6">
        <Button 
          onClick={onGoBack} 
          variant="outline" 
          className="mr-4 flex items-center"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Recipes
        </Button>
        <Button asChild className="bg-blue-500 hover:bg-blue-600">
          <a href="/calculator">Switch to Pro Mode</a>
        </Button>
      </div>
    </div>
  );
};

export default RecipeDetail;
