
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import BakingTimer from './BakingTimer';
import { Progress } from '@/components/ui/progress';

interface RecipeDetailProps {
  selectedType: string | null;
  selectedRecipe: string | null;
  onGoBack: () => void;
  numberOfPies?: number;
}

interface BakingStep {
  title: string;
  description: string;
  timer?: number; // in minutes
  image?: string;
  tip?: string;
}

const getPizzaSteps = (recipeName: string): BakingStep[] => {
  if (recipeName.includes('Neapolitan')) {
    return [
      {
        title: 'Prepare Your Ingredients',
        description: 'Gather all your ingredients: flour, water, salt, and yeast. Make sure they are at room temperature for optimal results.',
        tip: 'Using 00 flour will give you the most authentic Neapolitan texture.'
      },
      {
        title: 'Mix the Dough',
        description: 'In a large bowl, mix flour and salt. Dissolve yeast in warm water, then gradually add to the flour mixture. Mix until a shaggy dough forms.',
        tip: 'Don\'t overmix at this stage - just combine until no dry flour remains.'
      },
      {
        title: 'Knead the Dough',
        description: 'Turn dough onto a lightly floured surface and knead for about 8-10 minutes until smooth and elastic.',
        timer: 10,
        tip: 'The dough should be slightly tacky but not sticky. If too sticky, add small amounts of flour.'
      },
      {
        title: 'First Rise (Bulk Fermentation)',
        description: 'Place the dough in a lightly oiled bowl, cover with plastic wrap or a damp cloth, and let rise at room temperature.',
        timer: 120,
        tip: 'For best flavor development, you can refrigerate the dough for up to 72 hours after the first hour of rising.'
      },
      {
        title: 'Divide and Shape',
        description: 'Gently deflate the dough and divide into equal portions. Shape each portion into a tight ball.',
        tip: 'Each dough ball should weigh about 250g for a 10-12 inch pizza.'
      },
      {
        title: 'Second Rise',
        description: 'Place dough balls on a lightly floured tray, cover, and let rise again.',
        timer: 60,
        tip: 'The dough balls should double in size and be very soft to the touch.'
      },
      {
        title: 'Shape Your Pizza',
        description: 'On a floured surface, gently stretch your dough from the center outward, rotating as you go, until you reach your desired thickness.',
        tip: 'Avoid using a rolling pin for authentic Neapolitan pizza - stretch by hand to preserve the gas bubbles.'
      },
      {
        title: 'Top Your Pizza',
        description: 'Add your sauce and toppings. For classic Neapolitan, use San Marzano tomato sauce, fresh mozzarella, basil, and a drizzle of olive oil.',
        tip: 'Less is more with Neapolitan pizza - don\'t overload with too many toppings.'
      },
      {
        title: 'Bake',
        description: 'Bake in the hottest oven you can (ideally 850°F/450°C+ for authentic results). Use a pizza stone or steel if available.',
        timer: 2,
        tip: 'In a home oven, bake at the highest temperature possible (usually 500-550°F) for 5-7 minutes.'
      },
      {
        title: 'Enjoy!',
        description: 'Remove from oven, add any fresh herbs, slice and enjoy immediately while hot!',
        tip: 'Authentic Neapolitan pizza should have a soft, foldable center and charred, puffy edges.'
      }
    ];
  } else if (recipeName.includes('New York')) {
    return [
      {
        title: 'Prepare Ingredients',
        description: 'Gather high-gluten bread flour, water, salt, olive oil, sugar, and yeast.',
        tip: 'The higher protein content in bread flour gives NY-style pizza its characteristic chew.'
      },
      // ...more steps for NY style
      {
        title: 'Mix and Knead',
        description: 'Combine all ingredients and knead until smooth and elastic, about 10-12 minutes.',
        timer: 12,
        tip: 'The dough should pass the windowpane test - you can stretch it thin enough to see light through without tearing.'
      },
      {
        title: 'Bulk Fermentation',
        description: 'Place in an oiled bowl and let rise until doubled, about 1.5-2 hours.',
        timer: 120,
        tip: 'For best flavor, consider cold fermenting in the refrigerator for 24-72 hours.'
      },
      // ...and more steps
    ];
  } else if (recipeName.includes('Thin Crispy')) {
    return [
      {
        title: 'Prepare Dry Mix',
        description: 'Mix flour, salt, and a pinch of sugar in a bowl.',
        tip: 'Using part cake flour can create an extra crispy crust.'
      },
      {
        title: 'Add Wet Ingredients',
        description: 'Mix water, olive oil, and yeast, then combine with dry ingredients.',
        tip: 'Using cool water will slow fermentation and develop more flavor.'
      },
      // ...more steps for thin crust
    ];
  }
  return [];
};

const RecipeDetail: React.FC<RecipeDetailProps> = ({ 
  selectedType, 
  selectedRecipe, 
  onGoBack,
  numberOfPies = 2
}) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  
  // Get steps based on recipe type
  const getSteps = (): BakingStep[] => {
    if (!selectedType || !selectedRecipe) return [];
    
    if (selectedType === 'pizza') {
      return getPizzaSteps(selectedRecipe);
    }
    
    // For other types, return placeholder steps
    return [
      { title: "Preparation", description: "Prepare your workspace and ingredients." },
      { title: "Mix the dough", description: "Combine all ingredients and mix until incorporated." },
      { title: "Knead", description: "Develop the gluten structure through kneading.", timer: 10 },
      { title: "First rise", description: "Allow the dough to ferment and rise.", timer: 60 },
      { title: "Shape", description: "Shape the dough according to your recipe." },
      { title: "Second rise", description: "Let the shaped dough proof.", timer: 45 },
      { title: "Bake", description: "Bake until golden brown and delicious.", timer: getTimerDuration() },
    ];
  };
  
  const steps = getSteps();
  const currentStep = steps[currentStepIndex] || { title: '', description: '' };
  const progress = steps.length > 0 ? (currentStepIndex / steps.length) * 100 : 0;
  
  const nextStep = () => {
    if (currentStepIndex < steps.length - 1) {
      setCompletedSteps([...completedSteps, currentStepIndex]);
      setCurrentStepIndex(currentStepIndex + 1);
    }
  };
  
  const prevStep = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex(currentStepIndex - 1);
    }
  };
  
  // Determine appropriate timer duration based on recipe type
  function getTimerDuration() {
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
      {selectedType && selectedRecipe && (
        <div className="p-4 bg-amber-50 border border-amber-200 rounded-md mb-8">
          <p className="font-medium text-lg">{selectedRecipe}</p>
          <div className="flex justify-between text-sm mt-2">
            <p className="text-muted-foreground">
              Type: {selectedType.charAt(0).toUpperCase() + selectedType.slice(1)}
            </p>
            {selectedType === 'pizza' && (
              <p className="text-muted-foreground">Making: {numberOfPies} {numberOfPies === 1 ? 'pizza' : 'pizzas'}</p>
            )}
          </div>
        </div>
      )}
      
      {steps.length > 0 ? (
        <div className="space-y-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold">Step-by-Step Guide</h2>
            <p className="text-sm text-muted-foreground">
              Step {currentStepIndex + 1} of {steps.length}
            </p>
          </div>
          
          <Progress value={progress} className="h-2 mb-8" />
          
          <div className="bg-white p-6 rounded-lg border shadow-sm">
            <h3 className="text-xl font-medium mb-3">{currentStep.title}</h3>
            <p className="mb-6 text-gray-700">{currentStep.description}</p>
            
            {currentStep.tip && (
              <div className="bg-blue-50 p-3 rounded-md mb-6 border border-blue-100">
                <p className="text-blue-800 text-sm font-medium">Tip: {currentStep.tip}</p>
              </div>
            )}
            
            {currentStep.timer && (
              <div className="my-6">
                <BakingTimer 
                  initialMinutes={currentStep.timer} 
                  title={`${currentStep.title} Timer`} 
                />
              </div>
            )}
            
            <div className="flex justify-between mt-6">
              <Button 
                variant="outline" 
                onClick={currentStepIndex === 0 ? onGoBack : prevStep}
                className="flex items-center"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                {currentStepIndex === 0 ? 'Back to Recipes' : 'Previous Step'}
              </Button>
              
              {currentStepIndex < steps.length - 1 ? (
                <Button 
                  onClick={nextStep}
                  className="bg-amber-500 hover:bg-amber-600 flex items-center"
                >
                  Next Step
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              ) : (
                <Button asChild className="bg-blue-500 hover:bg-blue-600">
                  <a href="/calculator">Switch to Pro Mode</a>
                </Button>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center mb-8">
          <p className="text-sm text-muted-foreground mb-2">No steps available for this recipe yet.</p>
          <h3 className="text-xl font-medium">We're working on it!</h3>
          <p className="mt-4">
            Detailed steps for this recipe type are coming soon. In the meantime, you can use our baking timer below.
          </p>
          
          <div className="mt-6">
            <BakingTimer 
              initialMinutes={getTimerDuration()} 
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
            <Button asChild className="bg-blue-500 hover:bg-blue-600">
              <a href="/calculator">Switch to Pro Mode</a>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default RecipeDetail;
