
import * as React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

interface NavigationButtonsProps {
  onGoBack: () => void;
  onBackToDoughTypes: () => void;
}

const NavigationButtons: React.FC<NavigationButtonsProps> = ({
  onGoBack,
  onBackToDoughTypes
}) => {
  return (
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
        onClick={onBackToDoughTypes}
        className="mr-4 flex items-center"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Dough Types
      </Button>
      <Button asChild className="bg-red-500 hover:bg-red-600">
        <a href="/calculator">Switch to Pro Mode</a>
      </Button>
    </div>
  );
};

export default NavigationButtons;
