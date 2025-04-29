
import React from 'react';
import { PizzaStyle } from '@/components/PizzaStyleSelect';
import { Info, BookOpen } from 'lucide-react';

interface FermentationTipsProps {
  method: 'direct' | 'poolish' | 'biga';
  pizzaStyle?: string;
}

const FermentationTips: React.FC<FermentationTipsProps> = ({ method, pizzaStyle = 'napoletana' }) => {
  return (
    <div className="bg-pizza-light bg-opacity-30 p-4 rounded-lg mt-6">
      <h3 className="font-medium text-gray-900 mb-2 flex items-center gap-2">
        <BookOpen className="h-5 w-5" />
        Instructions
      </h3>
      
      {/* General fermentation instructions */}
      <div className="text-sm text-gray-700 mb-3">
        {method === 'direct' && (
          <>
            <p className="mb-2">
              <strong>1. Mix and knead:</strong> Combine all ingredients in a large bowl and knead for 8-10 minutes until smooth and elastic.
            </p>
            <p className="mb-2">
              <strong>2. Bulk fermentation:</strong> Cover and let rise at room temperature for 2 hours, or until doubled in size.
            </p>
            <p className="mb-2">
              <strong>3. Divide and shape:</strong> Divide into {pizzaStyle === 'newyork' ? 'thin discs' : 'balls'} of equal weight and shape.
            </p>
            <p>
              <strong>4. Final proof:</strong> Cover and allow to rest for 4-6 hours at room temperature or 24-48 hours in the refrigerator.
            </p>
          </>
        )}
        
        {method === 'poolish' && (
          <>
            <p className="mb-2">
              <strong>1. Use prepared poolish:</strong> After 8-16 hours of fermentation, combine your poolish with the final dough ingredients.
            </p>
            <p className="mb-2">
              <strong>2. Mix and knead:</strong> Gently mix all ingredients until incorporated, then knead for 5-7 minutes.
            </p>
            <p className="mb-2">
              <strong>3. Bulk fermentation:</strong> Cover and let rise for 1 hour at room temperature.
            </p>
            <p>
              <strong>4. Final proof:</strong> Divide into balls, cover and rest for 2-4 hours at room temperature or overnight in the refrigerator.
            </p>
          </>
        )}
        
        {method === 'biga' && (
          <>
            <p className="mb-2">
              <strong>1. Use prepared biga:</strong> After 12-24 hours of fermentation, combine your biga with the final dough ingredients.
            </p>
            <p className="mb-2">
              <strong>2. Mix and knead:</strong> Gently tear the biga into small pieces and combine with other ingredients. Knead for 8-10 minutes.
            </p>
            <p className="mb-2">
              <strong>3. Bulk fermentation:</strong> Cover and let rise for 1-2 hours at room temperature.
            </p>
            <p>
              <strong>4. Final proof:</strong> Divide into balls, cover and rest for 4-6 hours before baking.
            </p>
          </>
        )}
      </div>
      
      {/* Style-specific instructions */}
      <div className="text-sm text-gray-700 mt-3 pt-3 border-t border-gray-200">
        <div className="flex items-start">
          <Info className="h-4 w-4 mr-2 mt-0.5 text-blue-600" />
          {pizzaStyle === 'newyork' && (
            <p>
              <strong>New York Style Tips:</strong> Stretch the dough thin to 14-16 inches and bake at the highest temperature your home oven can achieve (450-550°F/230-290°C) on a preheated pizza stone or steel for 8-12 minutes.
            </p>
          )}
          {pizzaStyle === 'napoletana' && (
            <p>
              <strong>Neapolitan Tips:</strong> Stretch to 10-12 inches, keeping the edge thicker. Bake at the highest possible temperature (350°C+) on a pizza onvenb(Neapolitan can´t be done on a home oven) for just 60-90 seconds if possible.
            </p>
          )}
          {pizzaStyle === 'chicago' && (
            <p>
              <strong>Chicago Style Tips:</strong> Press dough into an oiled deep dish pan, making sure it covers the bottom and sides. Layer cheese first, then toppings, and finally sauce on top. Bake at 250°C for 25-35 minutes.
            </p>
          )}
          {pizzaStyle === 'focaccia' && (
            <p>
              <strong>Focaccia Tips:</strong> Press dough into an oiled baking sheet, creating dimples with your fingers. Drizzle with olive oil and sprinkle with salt before baking at 250°C for 20-25 minutes.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default FermentationTips;
