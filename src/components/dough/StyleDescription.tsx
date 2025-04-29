
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
            Classic Neapolitan style (200-320°C)
          </p>
        );
      case 'newyork':
        return (
          <p className="text-sm text-gray-600 mt-1">
            New York style with higher hydration
          </p>
        );
      case 'focaccia':
        return (
          <p className="text-sm text-gray-600 mt-1">
            Italian flatbread with olive oil and herbs
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
            Traditional French baguette with crisp crust
          </p>
        );
      case 'brioche':
        return (
          <p className="text-sm text-gray-600 mt-1">
            Rich, buttery bread with eggs and sugar
          </p>
        );
      case 'focaccia':
        return (
          <p className="text-sm text-gray-600 mt-1">
            Italian flatbread with olive oil and herbs
          </p>
        );
      default:
        return null;
    }
  }
};

export default StyleDescription;
