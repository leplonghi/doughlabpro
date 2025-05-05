
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import BakingTimer from './BakingTimer';

interface NoStepsAvailableProps {
  onGoBack: () => void;
  selectedRecipe: string | null;
  timerDuration: number;
  themeColor?: string;
}

const NoStepsAvailable: React.FC<NoStepsAvailableProps> = ({
  onGoBack,
  selectedRecipe,
  timerDuration,
  themeColor = 'green'
}) => {
  // Function to handle going back to dough types
  const handleBackToDoughTypes = () => {
    window.location.href = '/learn';
  };

  return (
    <div className="text-center mb-8">
      <p className="text-sm text-muted-foreground mb-2">No steps available for this recipe yet.</p>
      <h3 className="text-xl font-medium">We're working on it!</h3>
      <p className="mt-4">
        Detailed steps for this recipe type are coming soon. In the meantime, you can use our baking timer below.
      </p>
      
      <div className="mt-6">
        <BakingTimer 
          initialMinutes={timerDuration} 
          title={`${selectedRecipe || 'Baking'} Timer`} 
        />
      </div>
      
      <div className="flex justify-center mt-6">
        <Button 
          onClick={onGoBack} 
          variant="outline" 
          className="mr-4 flex items-center"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Recipes
        </Button>
        <Button
          variant="outline"
          onClick={handleBackToDoughTypes}
          className="mr-4 flex items-center"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Dough Types
        </Button>
        <Button asChild className={`bg-red-500 hover:bg-red-600`}>
          <a href="/calculator">Switch to Pro Mode</a>
        </Button>
      </div>
    </div>
  );
};

export default NoStepsAvailable;
