
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
              <strong>1. Mix and knead:</strong> Combine flour, salt, and yeast in a large bowl. Add water and mix until no dry flour remains. Knead until the dough is smooth and elastic.
            </p>
            <p className="mb-2">
              <strong>2. Bulk fermentation:</strong> Cover the bowl and let the dough rise at room temperature (approximately 70°F/21°C) for 8 to 12 hours, or until doubled in size.
            </p>
            <p className="mb-2">
              <strong>3. Divide and shape:</strong> Turn the dough onto a floured surface, divide into equal portions, and shape into balls.
            </p>
            <p>
              <strong>4. Final proof:</strong> Place the dough balls in covered containers and refrigerate for at least 2 days, up to 4 days. Before baking, let them rest at room temperature for at least 2 hours.
            </p>
          </>
        )}

        {method === 'poolish' && (
          <>
            <p className="mb-2">
              <strong>1. Prepare the poolish:</strong> Mix equal parts flour and water (by weight) with a small amount of yeast. Cover and let ferment at room temperature for 12 to 16 hours.
            </p>
            <p className="mb-2">
              <strong>2. Mix and knead:</strong> Combine the poolish with the remaining flour, water, salt, and a small amount of yeast. Mix until incorporated and knead until smooth.
            </p>
            <p className="mb-2">
              <strong>3. Bulk fermentation:</strong> Cover and let the dough rise at room temperature for 1 to 2 hours, or until doubled in size.
            </p>
            <p>
              <strong>4. Final proof:</strong> Divide and shape the dough into balls. Place them in covered containers and refrigerate for 24 to 48 hours. Allow to rest at room temperature for at least 2 hours before baking.
            </p>
          </>
        )}

        {method === 'biga' && (
          <>
            <p className="mb-2">
              <strong>1. Prepare the biga:</strong> Mix flour and water (approximately 50-60% hydration) with a small amount of yeast. Knead until a firm dough forms. Cover and let ferment at room temperature for 12 to 16 hours.
            </p>
            <p className="mb-2">
              <strong>2. Mix and knead:</strong> Tear the biga into pieces and combine with the remaining flour, water, salt, and yeast. Mix until incorporated and knead until smooth.
            </p>
            <p className="mb-2">
              <strong>3. Bulk fermentation:</strong> Cover and let the dough rise at room temperature for 1 to 2 hours, or until doubled in size.
            </p>
            <p>
              <strong>4. Final proof:</strong> Divide and shape the dough into balls. Place them in covered containers and refrigerate for 24 to 48 hours. Allow to rest at room temperature for at least 2 hours before baking.
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
              <strong>New York Style Tips:</strong> Stretch the dough to 14-16 inches in diameter. Bake at 500-550°F (260-290°C) on a preheated pizza stone or steel for 8-12 minutes.
            </p>
          )}
          {pizzaStyle === 'napoletana' && (
            <p>
              <strong>Neapolitan Tips:</strong> Stretch the dough to 10-12 inches, keeping the edges thicker. Bake at the highest possible temperature (ideally 800-900°F / 425-485°C) in a wood-fired oven for 60-90 seconds.
            </p>
          )}
          {pizzaStyle === 'chicago' && (
            <p>
              <strong>Chicago Style Tips:</strong> Press the dough into an oiled deep-dish pan, ensuring it covers the bottom and sides. Layer cheese first, then toppings, and finally sauce on top. Bake at 450°F (230°C) for 25-35 minutes.
            </p>
          )}
          {pizzaStyle === 'focaccia' && (
            <p>
              <strong>Focaccia Tips:</strong> Press the dough into an oiled baking sheet, creating dimples with your fingers. Drizzle with olive oil and sprinkle with salt. Bake at 450°F (230°C) for 20-25 minutes.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default FermentationTips;
