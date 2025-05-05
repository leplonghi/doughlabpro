import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight, ChefHat } from 'lucide-react';
import BakingTimer from './BakingTimer';
import { Progress } from '@/components/ui/progress';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

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

interface Ingredient {
  name: string;
  amount: number;
  unit: string;
  scalable?: boolean;
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

const getIngredients = (type: string | null, recipe: string | null, quantity: number = 1): Ingredient[] => {
  if (!type || !recipe) return [];

  let baseIngredients: Ingredient[] = [];

  if (type === 'pizza') {
    if (recipe.includes('Neapolitan')) {
      baseIngredients = [
        { name: '00 Flour', amount: 500, unit: 'g', scalable: true },
        { name: 'Water', amount: 300, unit: 'ml', scalable: true },
        { name: 'Salt', amount: 10, unit: 'g', scalable: true },
        { name: 'Dry Yeast', amount: 3, unit: 'g', scalable: true },
        { name: 'Olive Oil', amount: 15, unit: 'ml', scalable: true }
      ];
    } else if (recipe.includes('New York')) {
      baseIngredients = [
        { name: 'Bread Flour', amount: 500, unit: 'g', scalable: true },
        { name: 'Water', amount: 325, unit: 'ml', scalable: true },
        { name: 'Salt', amount: 10, unit: 'g', scalable: true },
        { name: 'Sugar', amount: 15, unit: 'g', scalable: true },
        { name: 'Olive Oil', amount: 25, unit: 'ml', scalable: true },
        { name: 'Dry Yeast', amount: 5, unit: 'g', scalable: true }
      ];
    } else if (recipe.includes('Thin Crispy')) {
      baseIngredients = [
        { name: 'All-Purpose Flour', amount: 400, unit: 'g', scalable: true },
        { name: 'Water', amount: 220, unit: 'ml', scalable: true },
        { name: 'Salt', amount: 8, unit: 'g', scalable: true },
        { name: 'Olive Oil', amount: 30, unit: 'ml', scalable: true },
        { name: 'Dry Yeast', amount: 4, unit: 'g', scalable: true }
      ];
    }
  } else if (type === 'bread') {
    if (recipe.includes('White Sandwich')) {
      baseIngredients = [
        { name: 'Bread Flour', amount: 500, unit: 'g', scalable: true },
        { name: 'Water', amount: 325, unit: 'ml', scalable: true },
        { name: 'Salt', amount: 10, unit: 'g', scalable: true },
        { name: 'Sugar', amount: 20, unit: 'g', scalable: true },
        { name: 'Butter', amount: 30, unit: 'g', scalable: true },
        { name: 'Dry Yeast', amount: 7, unit: 'g', scalable: true }
      ];
    } else if (recipe.includes('Crusty Artisan')) {
      baseIngredients = [
        { name: 'Bread Flour', amount: 500, unit: 'g', scalable: true },
        { name: 'Water', amount: 375, unit: 'ml', scalable: true },
        { name: 'Salt', amount: 10, unit: 'g', scalable: true },
        { name: 'Dry Yeast', amount: 3, unit: 'g', scalable: true }
      ];
    } else if (recipe.includes('Multigrain')) {
      baseIngredients = [
        { name: 'Bread Flour', amount: 400, unit: 'g', scalable: true },
        { name: 'Whole Wheat Flour', amount: 100, unit: 'g', scalable: true },
        { name: 'Mixed Seeds', amount: 50, unit: 'g', scalable: true },
        { name: 'Water', amount: 350, unit: 'ml', scalable: true },
        { name: 'Salt', amount: 10, unit: 'g', scalable: true },
        { name: 'Honey', amount: 15, unit: 'g', scalable: true },
        { name: 'Dry Yeast', amount: 7, unit: 'g', scalable: true }
      ];
    }
  } else if (type === 'focaccia') {
    if (recipe.includes('Rosemary')) {
      baseIngredients = [
        { name: 'Bread Flour', amount: 500, unit: 'g', scalable: true },
        { name: 'Water', amount: 375, unit: 'ml', scalable: true },
        { name: 'Salt', amount: 10, unit: 'g', scalable: true },
        { name: 'Olive Oil', amount: 50, unit: 'ml', scalable: true },
        { name: 'Fresh Rosemary', amount: 2, unit: 'tbsp', scalable: true },
        { name: 'Dry Yeast', amount: 5, unit: 'g', scalable: true },
        { name: 'Sea Salt Flakes (for topping)', amount: 1, unit: 'tbsp', scalable: false }
      ];
    } else if (recipe.includes('Cherry Tomato')) {
      baseIngredients = [
        { name: 'Bread Flour', amount: 500, unit: 'g', scalable: true },
        { name: 'Water', amount: 400, unit: 'ml', scalable: true },
        { name: 'Salt', amount: 10, unit: 'g', scalable: true },
        { name: 'Olive Oil', amount: 60, unit: 'ml', scalable: true },
        { name: 'Dry Yeast', amount: 5, unit: 'g', scalable: true },
        { name: 'Cherry Tomatoes', amount: 200, unit: 'g', scalable: true },
        { name: 'Mixed Herbs', amount: 2, unit: 'tbsp', scalable: true }
      ];
    } else if (recipe.includes('Olive & Garlic')) {
      baseIngredients = [
        { name: 'Bread Flour', amount: 500, unit: 'g', scalable: true },
        { name: 'Water', amount: 390, unit: 'ml', scalable: true },
        { name: 'Salt', amount: 10, unit: 'g', scalable: true },
        { name: 'Olive Oil', amount: 60, unit: 'ml', scalable: true },
        { name: 'Dry Yeast', amount: 5, unit: 'g', scalable: true },
        { name: 'Olives, pitted and chopped', amount: 100, unit: 'g', scalable: true },
        { name: 'Garlic cloves, minced', amount: 4, unit: '', scalable: true }
      ];
    }
  } else if (type === 'sourdough') {
    if (recipe.includes('Beginner')) {
      baseIngredients = [
        { name: 'Bread Flour', amount: 400, unit: 'g', scalable: true },
        { name: 'Whole Wheat Flour', amount: 100, unit: 'g', scalable: true },
        { name: 'Water', amount: 350, unit: 'ml', scalable: true },
        { name: 'Salt', amount: 10, unit: 'g', scalable: true },
        { name: 'Sourdough Starter (active)', amount: 150, unit: 'g', scalable: true }
      ];
    } else if (recipe.includes('Rustic Country')) {
      baseIngredients = [
        { name: 'Bread Flour', amount: 400, unit: 'g', scalable: true },
        { name: 'Whole Wheat Flour', amount: 100, unit: 'g', scalable: true },
        { name: 'Water', amount: 375, unit: 'ml', scalable: true },
        { name: 'Salt', amount: 10, unit: 'g', scalable: true },
        { name: 'Sourdough Starter (active)', amount: 200, unit: 'g', scalable: true }
      ];
    } else if (recipe.includes('Sourdough Sandwich')) {
      baseIngredients = [
        { name: 'Bread Flour', amount: 450, unit: 'g', scalable: true },
        { name: 'Whole Wheat Flour', amount: 50, unit: 'g', scalable: true },
        { name: 'Water', amount: 325, unit: 'ml', scalable: true },
        { name: 'Salt', amount: 10, unit: 'g', scalable: true },
        { name: 'Honey', amount: 15, unit: 'g', scalable: true },
        { name: 'Butter', amount: 25, unit: 'g', scalable: true },
        { name: 'Sourdough Starter (active)', amount: 150, unit: 'g', scalable: true }
      ];
    }
  }
  
  // Scale ingredients based on quantity
  return baseIngredients.map(ing => ({
    ...ing,
    amount: ing.scalable ? ing.amount * quantity : ing.amount
  }));
};

const getStepsForBread = (recipeName: string): BakingStep[] => {
  if (recipeName.includes('White Sandwich')) {
    return [
      {
        title: 'Prepare Your Ingredients',
        description: 'Gather all your ingredients: bread flour, water, salt, sugar, butter, and yeast. Make sure all ingredients are at room temperature.',
        tip: 'Using bread flour with higher protein content will give your sandwich bread a better structure.'
      },
      {
        title: 'Mix the Dough',
        description: 'In a large bowl, combine flour, salt, and sugar. Dissolve yeast in warm water, then add to the flour mixture along with melted butter. Mix until a shaggy dough forms.',
        tip: 'The water temperature should be around 100-110°F (38-43°C) for optimal yeast activation.'
      },
      {
        title: 'Knead the Dough',
        description: 'Turn dough onto a floured surface and knead for 8-10 minutes until smooth and elastic.',
        timer: 10,
        tip: 'The dough should pass the windowpane test - you can stretch it thin enough to see light through without tearing.'
      },
      {
        title: 'First Rise',
        description: 'Place the dough in a lightly oiled bowl, cover, and let rise until doubled in size.',
        timer: 60,
        tip: 'Place the dough in a warm, draft-free area for optimal rising. Around 80-85°F (27-29°C) is ideal.'
      },
      {
        title: 'Shape the Loaf',
        description: 'Gently deflate the dough and shape into a loaf. Place in a greased loaf pan.',
        tip: 'For a tighter crumb, roll the dough into a rectangle and then roll it up tightly before placing in the loaf pan.'
      },
      {
        title: 'Second Rise',
        description: 'Cover the loaf pan and let the dough rise again until it's about 1 inch above the rim of the pan.',
        timer: 45,
        tip: 'This second rise is crucial for a light, airy texture in your sandwich bread.'
      },
      {
        title: 'Bake',
        description: 'Preheat oven to 375°F (190°C). Bake the loaf until golden brown and it sounds hollow when tapped on the bottom.',
        timer: 35,
        tip: 'For a softer crust, brush the top with butter immediately after baking.'
      },
      {
        title: 'Cool',
        description: 'Remove from the pan and let cool completely on a wire rack before slicing.',
        timer: 60,
        tip: 'Letting the bread cool completely before slicing is essential for the best texture and to prevent it from becoming gummy.'
      }
    ];
  }
  return [];
};

const getFocacciaSteps = (recipeName: string): BakingStep[] => {
  if (recipeName.includes('Rosemary')) {
    return [
      {
        title: 'Prepare Your Ingredients',
        description: 'Gather all your ingredients: bread flour, water, salt, olive oil, fresh rosemary, and yeast.',
        tip: 'Using a good quality olive oil will significantly enhance the flavor of your focaccia.'
      },
      {
        title: 'Mix the Dough',
        description: 'In a large bowl, combine flour and salt. In a separate bowl, mix water, olive oil, and yeast. Gradually add the wet ingredients to the dry and mix until a sticky dough forms.',
        tip: 'The dough should be much wetter than regular bread dough - this high hydration is key for authentic focaccia.'
      },
      {
        title: 'Initial Folding',
        description: 'Instead of kneading, perform a series of stretch-and-folds to develop the gluten structure. Pull one side of the dough up and fold it over the center, rotate the bowl, and repeat 3-4 times.',
        timer: 5,
        tip: 'Wet your hands before handling the dough to prevent sticking.'
      },
      {
        title: 'First Rise',
        description: 'Cover the bowl and let the dough rise until doubled in size.',
        timer: 60,
        tip: 'Focaccia dough benefits from a slightly warmer rise temperature than other breads.'
      },
      {
        title: 'Additional Folding',
        description: 'Perform another series of stretch-and-folds, then let the dough rest for 30 minutes. Repeat this process once more.',
        timer: 30,
        tip: 'Each time you fold, you'll notice the dough becoming more structured and less sticky.'
      },
      {
        title: 'Transfer to Pan',
        description: 'Generously oil a baking pan. Gently transfer the dough to the pan, trying to maintain as much air as possible. Stretch it to fit the pan.',
        tip: 'A metal pan will give you a crispier bottom crust than a glass dish.'
      },
      {
        title: 'Final Rise',
        description: 'Cover the pan and let the dough rise once more until it's puffy and nearly doubles in height.',
        timer: 45,
        tip: 'During this final rise, preheat your oven to 425°F (220°C).'
      },
      {
        title: 'Dimple and Top',
        description: 'Drizzle the top with olive oil. Use your fingertips to create deep dimples all over the dough. Sprinkle with rosemary and flaky sea salt.',
        tip: 'The dimples prevent the dough from rising too much in the oven and create pockets for the olive oil and toppings.'
      },
      {
        title: 'Bake',
        description: 'Bake until the top is golden brown and the bottom is crisp.',
        timer: 25,
        tip: 'For extra flavor, drizzle a little more olive oil over the hot focaccia as soon as it comes out of the oven.'
      },
      {
        title: 'Cool & Serve',
        description: 'Let cool slightly before removing from the pan. Serve warm or at room temperature.',
        tip: 'Focaccia is best enjoyed the day it's made, but can be frozen and reheated successfully.'
      }
    ];
  }
  return [];
};

const getSourdoughSteps = (recipeName: string): BakingStep[] => {
  if (recipeName.includes('Beginner')) {
    return [
      {
        title: 'Feed Your Starter',
        description: 'Make sure your sourdough starter is active and bubbly. Feed it 8-12 hours before you plan to mix your dough.',
        tip: 'A mature starter should roughly double in size and show plenty of bubbles within 4-8 hours after feeding.'
      },
      {
        title: 'Mix Flour and Water (Autolyse)',
        description: 'In a large bowl, mix the flour and water until no dry flour remains. Cover and let rest for 30-60 minutes.',
        timer: 45,
        tip: 'This rest period, called autolyse, allows the flour to fully hydrate and begins gluten development.'
      },
      {
        title: 'Add Starter and Salt',
        description: 'Add your active starter and salt to the dough. Mix thoroughly until fully incorporated.',
        tip: 'Use wet hands to prevent the dough from sticking to your fingers during mixing.'
      },
      {
        title: 'Bulk Fermentation with Folds',
        description: 'Over the next 3-5 hours, perform a series of stretch-and-fold techniques every 30 minutes for the first 2 hours. Then let the dough rest undisturbed.',
        timer: 240,
        tip: 'The dough should increase in volume by about 50% and show bubbles on the surface and sides of the container.'
      },
      {
        title: 'Pre-shape the Dough',
        description: 'Gently turn the dough onto a lightly floured surface. Pre-shape into a round by pulling edges into the center, creating tension on the dough surface.',
        tip: 'Handle the dough gently to preserve the gas bubbles that have developed.'
      },
      {
        title: 'Rest the Dough',
        description: 'Let the pre-shaped dough rest for 20-30 minutes before final shaping.',
        timer: 25,
        tip: 'This bench rest allows the gluten to relax, making final shaping easier.'
      },
      {
        title: 'Final Shaping',
        description: 'Shape the dough into a tight ball or batard (oval) shape. Place into a floured banneton or cloth-lined bowl, seam side up.',
        tip: 'A tight final shape creates good surface tension, which helps the bread rise upward rather than outward.'
      },
      {
        title: 'Final Proof',
        description: 'Cover and let the dough proof at room temperature for 1-2 hours, or place in the refrigerator for 8-14 hours for a cold fermentation.',
        timer: 120,
        tip: 'Cold fermentation develops more flavor and makes the dough easier to handle and score.'
      },
      {
        title: 'Preheat and Prepare for Baking',
        description: 'About an hour before baking, place your Dutch oven or baking stone in the oven and preheat to 450°F (230°C).',
        tip: 'A preheated Dutch oven creates steam that helps the bread rise fully and develop a crisp crust.'
      },
      {
        title: 'Score and Bake',
        description: 'Turn the dough onto parchment paper. Score the top with a sharp blade. Transfer to the hot Dutch oven, cover, and bake for 20 minutes. Then remove the lid and bake for another 20-25 minutes.',
        timer: 45,
        tip: 'Scoring allows the bread to expand in a controlled way and creates an artistic pattern on your loaf.'
      },
      {
        title: 'Cool Completely',
        description: 'Remove the bread from the oven and let it cool completely on a wire rack before slicing.',
        timer: 60,
        tip: 'The cooling period is actually part of the baking process. Cutting into the bread too soon can result in a gummy texture.'
      }
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
    } else if (selectedType === 'bread') {
      return getStepsForBread(selectedRecipe);
    } else if (selectedType === 'focaccia') {
      return getFocacciaSteps(selectedRecipe);
    } else if (selectedType === 'sourdough') {
      return getSourdoughSteps(selectedRecipe);
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
  
  // Get ingredients for the current recipe
  const quantity = selectedType === 'pizza' ? numberOfPies : 1;
  const ingredients = getIngredients(selectedType, selectedRecipe, quantity);
  
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

  const getItemLabel = () => {
    if (selectedType === 'pizza') return numberOfPies === 1 ? 'pizza' : 'pizzas';
    if (selectedType === 'bread') return 'loaf';
    if (selectedType === 'focaccia') return 'focaccia';
    if (selectedType === 'sourdough') return 'loaf';
    return 'item';
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
            {selectedType === 'pizza' ? (
              <p className="text-muted-foreground">Making: {numberOfPies} {numberOfPies === 1 ? 'pizza' : 'pizzas'}</p>
            ) : (
              <p className="text-muted-foreground">Making: {quantity} {getItemLabel()}</p>
            )}
          </div>
        </div>
      )}
      
      {/* Ingredients Section */}
      {ingredients.length > 0 && (
        <Card className="mb-8">
          <CardContent className="pt-6">
            <h2 className="text-xl font-medium mb-4 flex items-center">
              <ChefHat className="mr-2 h-5 w-5" />
              Ingredients
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {ingredients.map((ing, idx) => (
                <div key={idx} className="flex justify-between items-center">
                  <span>{ing.name}</span>
                  <span className="font-medium">{ing.amount} {ing.unit}</span>
                </div>
              ))}
            </div>
            
            {selectedType === 'pizza' && (
              <div className="mt-4 text-sm text-muted-foreground">
                <p>Recipe for {numberOfPies} {numberOfPies === 1 ? 'pizza' : 'pizzas'} (about 10-12 inches each)</p>
              </div>
            )}
          </CardContent>
        </Card>
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
