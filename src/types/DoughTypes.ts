
import { PizzaStyle } from '@/components/PizzaStyleSelect';
import { BreadStyle } from '@/components/dough/BreadStyleSelector';
import { FermentationMethod } from '@/types/dough';

export type StyleType = PizzaStyle | BreadStyle;

export interface DoughCalculatorState {
  flour: number;
  hydration: number;
  yeastType: 'fresh' | 'dry';
  ballWeight: number;
  numberOfBalls: number;
  errors: {
    flour?: string;
    hydration?: string;
  };
  recipe?: {
    flour: number;
    water: number;
    salt: number;
    yeast: number;
    oil: number;
    sugar?: number;
    butter?: number;
    eggs?: number;
    poolish?: {
      flour: number;
      water: number;
      yeast: number;
    };
    biga?: {
      flour: number;
      water: number;
      yeast: number;
    };
  };
}
