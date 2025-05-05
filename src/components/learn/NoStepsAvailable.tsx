
import * as React from 'react';
import { cn } from '@/lib/utils';
import BakingTimer from './BakingTimer';
import NavigationButtons from './no-steps/NavigationButtons';

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
      <div className="mb-6">
        <p className="text-sm text-muted-foreground mb-2">No steps available for this recipe yet.</p>
        <h3 className="text-xl font-medium">We're working on it!</h3>
        <p className="mt-4">
          Detailed steps for this recipe type are coming soon. In the meantime, you can use our baking timer below.
        </p>
      </div>
      
      <div className="mt-6">
        <BakingTimer 
          initialMinutes={timerDuration} 
          title={`${selectedRecipe || 'Baking'} Timer`} 
        />
      </div>
      
      <NavigationButtons 
        onGoBack={onGoBack}
        onBackToDoughTypes={handleBackToDoughTypes}
      />
    </div>
  );
};

export default NoStepsAvailable;
