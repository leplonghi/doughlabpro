
import React from 'react';
import { PizzaStyle } from '@/components/PizzaStyleSelect';
import { BreadStyle } from './BreadStyleSelector';

interface StyleDescriptionProps {
  doughType: 'pizza' | 'bread';
  style: PizzaStyle | BreadStyle;
}

const StyleDescription: React.FC<StyleDescriptionProps> = ({ doughType, style }) => {
  if (doughType === 'pizza') {
    switch (style) {
      case 'napoletana':
        return (
          <p className="text-sm text-gray-600 mt-1">
            Classic Italian pizza with a soft, airy crust. Baked quickly at very high temperatures (430–480°C) for a light, blistered finish.
          </p>
        );
      case 'newyork':
        return (
          <p className="text-sm text-gray-600 mt-1">
            Thin, foldable crust with a chewy bite and crispy underside. Perfect for home ovens and everyday pizza baking.
          </p>
        );
      case 'focaccia':
        return (
          <p className="text-sm text-gray-600 mt-1">
            Thick, buttery crust baked in a pan. Layers of cheese, toppings, and sauce create a rich, indulgent experience.
          </p>
        );
      default:
        return null;
    }
  } else {
    switch (style) {
      case 'baguette':
        return (
          <p className="text-sm text-gray-600 mt-1">
            Classic French bread with a crisp crust and open crumb. This is the standard baguette formula, without regional variations.
          </p>
        );
      case 'brioche':
        return (
          <p className="text-sm text-gray-600 mt-1">
            Soft, enriched dough made with butter, eggs, and milk. This is the standard brioche formula, widely used in both sweet and savory recipes.
          </p>
        );
      case 'focaccia':
        return (
          <p className="text-sm text-gray-600 mt-1">
            Traditional focaccia with olive oil and hand-dimpled texture. This is the standard version used across most Italian regions.
          </p>
        );
      default:
        return null;
    }
  }
};

export default StyleDescription;
