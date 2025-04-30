
import React from 'react';
import { PizzaStyle } from '@/components/PizzaStyleSelect';

interface SauceRecipeProps {
  pizzaStyle: PizzaStyle;
}

interface Ingredient {
  name: string;
  quantity: string;
}

interface SauceInstructions {
  ingredients: Ingredient[];
  steps: string[];
}

const SauceRecipe: React.FC<SauceRecipeProps> = ({ pizzaStyle }) => {
  const getSauceRecipe = (): SauceInstructions => {
    switch (pizzaStyle) {
      case 'napoletana':
        return {
          ingredients: [
            { name: 'Whole peeled San Marzano tomatoes', quantity: '1 can (28 oz)' },
            { name: 'Sea salt', quantity: '1 tsp' },
            { name: 'Fresh basil leaves', quantity: '4-6 leaves' },
            { name: 'Extra-virgin olive oil', quantity: '1 tbsp' }
          ],
          steps: [
            'Crush the tomatoes by hand or use a food mill for a smooth consistency.',
            'Stir in salt and torn basil leaves.',
            'Drizzle with olive oil.',
            'No cooking required; use the sauce fresh for authentic flavor.'
          ]
        };
      case 'newyork':
        return {
          ingredients: [
            { name: 'Whole peeled tomatoes', quantity: '1 can (28 oz)' },
            { name: 'Olive oil', quantity: '1 tbsp' },
            { name: 'Unsalted butter', quantity: '1 tbsp' },
            { name: 'Garlic cloves, minced', quantity: '2 cloves' },
            { name: 'Dried oregano', quantity: '1 tsp' },
            { name: 'Red pepper flakes', quantity: 'Pinch' },
            { name: 'Salt', quantity: 'to taste' },
            { name: 'Medium onion, halved', quantity: '1' },
            { name: 'Fresh basil', quantity: '2 sprigs' },
            { name: 'Sugar', quantity: '1 tsp' }
          ],
          steps: [
            'Blend tomatoes until smooth.',
            'In a saucepan, heat olive oil and butter over medium heat.',
            'Sauté garlic, oregano, and red pepper flakes until fragrant.',
            'Add blended tomatoes, onion halves, basil, and sugar.',
            'Simmer uncovered for 45 minutes, stirring occasionally.',
            'Remove onion and basil before using.'
          ]
        };
      case 'chicago':
        return {
          ingredients: [
            { name: 'Olive oil', quantity: '2 tbsp' },
            { name: 'Garlic cloves, minced', quantity: '2 cloves' },
            { name: 'Dried oregano', quantity: '1 tsp' },
            { name: 'Red pepper flakes', quantity: '1/4 tsp' },
            { name: 'Crushed tomatoes', quantity: '1 can (28 oz)' },
            { name: 'Sugar', quantity: '1 tsp' },
            { name: 'Salt', quantity: 'to taste' }
          ],
          steps: [
            'Heat olive oil in a saucepan over medium heat.',
            'Sauté garlic, oregano, and red pepper flakes until aromatic.',
            'Add crushed tomatoes and sugar.',
            'Simmer for 30 minutes until thickened.',
            'Season with salt to taste.',
            'Allow to cool slightly before using on your deep-dish pizza.'
          ]
        };
      case 'focaccia':
      case 'brioche':
      case 'baguette':
        return {
          ingredients: [
            { name: 'Butter', quantity: '1.5 tbsp' },
            { name: 'All-purpose flour', quantity: '2 tbsp' },
            { name: 'Skim milk', quantity: '3/4 cup' },
            { name: 'Salt', quantity: '1/8 tsp' },
            { name: 'Grated Parmesan cheese', quantity: '1/2 cup' }
          ],
          steps: [
            'Melt butter in a saucepan over medium heat.',
            'Whisk in flour to form a roux; cook for 1 minute.',
            'Gradually add milk, whisking continuously to prevent lumps.',
            'Stir in salt and Parmesan cheese.',
            'Cook until the sauce thickens; use warm.'
          ]
        };
      default:
        return {
          ingredients: [
            { name: 'Crushed tomatoes', quantity: '1 can (28 oz)' },
            { name: 'Olive oil', quantity: '2 tbsp' },
            { name: 'Garlic cloves, minced', quantity: '2 cloves' },
            { name: 'Dried oregano', quantity: '1 tsp' },
            { name: 'Salt', quantity: 'to taste' },
            { name: 'Sugar', quantity: '1/2 tsp' }
          ],
          steps: [
            'In a saucepan, heat olive oil over medium heat.',
            'Add minced garlic and sauté until fragrant.',
            'Stir in crushed tomatoes, oregano, salt, and sugar.',
            'Simmer on low heat for 20-30 minutes.',
            'Let cool slightly before using.'
          ]
        };
    }
  };

  const recipe = getSauceRecipe();

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Ingredients</h3>
        <ul className="list-disc pl-5 space-y-2">
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index} className="text-gray-700">
              <span className="font-medium">{ingredient.quantity}</span> {ingredient.name}
            </li>
          ))}
        </ul>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Instructions</h3>
        <ol className="list-decimal pl-5 space-y-2">
          {recipe.steps.map((step, index) => (
            <li key={index} className="text-gray-700">{step}</li>
          ))}
        </ol>
      </div>
      
      <div className="mt-6 p-4 bg-amber-50 rounded-lg border border-amber-100">
        <h3 className="text-lg font-semibold text-amber-800 mb-2">Storage Tip</h3>
        <p className="text-amber-700">
          Store any unused sauce in an airtight container in the refrigerator for up to 5 days, or freeze for up to 3 months.
        </p>
      </div>
    </div>
  );
};

export default SauceRecipe;
