
import * as React from 'react';
import { cn } from '@/lib/utils';
import NavigationButtons from './no-steps/NavigationButtons';
import { BookOpen } from 'lucide-react';

interface NoStepsAvailableProps {
  onGoBack: () => void;
  selectedRecipe: string | null;
  timerDuration: number;
  themeColor?: string;
}

const NoStepsAvailableProps: React.FC<NoStepsAvailableProps> = ({
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
        <p className="text-sm text-muted-foreground mb-2">No detailed steps available for this recipe yet.</p>
        <h3 className="text-xl font-medium">We're working on it!</h3>
        <p className="mt-4">
          Detailed steps for {selectedRecipe || 'this recipe'} are coming soon. In the meantime, check out our general baking information below.
        </p>
      </div>
      
      <div className="mt-8">
        <div className="bg-blue-50 rounded-lg p-6 border border-blue-100 text-left">
          <div className="flex items-start mb-4">
            <BookOpen className="h-5 w-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
            <h3 className="text-lg font-medium text-blue-800">General Baking Guidelines</h3>
          </div>
          
          <div className="space-y-4">
            <div className="bg-white p-4 rounded shadow-sm">
              <h4 className="font-medium text-gray-900 mb-2">Flour Selection</h4>
              <p className="text-gray-700">Choose the right flour for your recipe. Bread flour has higher protein content (12-14%) which develops more gluten, while all-purpose flour (10-12% protein) works well for most recipes.</p>
            </div>
            
            <div className="bg-white p-4 rounded shadow-sm">
              <h4 className="font-medium text-gray-900 mb-2">Temperature Matters</h4>
              <p className="text-gray-700">Water temperature affects fermentation speed. Warmer water (78-82°F) speeds up fermentation, while cooler water (65-70°F) slows it down for more flavor development.</p>
            </div>
            
            <div className="bg-white p-4 rounded shadow-sm">
              <h4 className="font-medium text-gray-900 mb-2">Fermentation Testing</h4>
              <p className="text-gray-700">To test if your dough is properly fermented, press it gently with your finger. If it springs back slowly and leaves a slight indentation, it's ready.</p>
            </div>
            
            <div className="bg-white p-4 rounded shadow-sm">
              <h4 className="font-medium text-gray-900 mb-2">Creating Steam</h4>
              <p className="text-gray-700">For crusty breads, create steam in your oven by placing a metal pan on the bottom rack and pouring boiling water into it when you put your bread in to bake.</p>
            </div>
          </div>
        </div>
      </div>
      
      <NavigationButtons 
        onGoBack={onGoBack}
        onBackToDoughTypes={handleBackToDoughTypes}
      />
    </div>
  );
};

export default NoStepsAvailableProps;
