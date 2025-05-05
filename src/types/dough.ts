
export type FermentationMethod = 'direct' | 'poolish' | 'biga';
export type YeastType = 'fresh' | 'dry';
export type StyleType = 'napoletana' | 'newyork' | 'chicago' | 'baguette' | 'brioche' | 'focaccia';

export interface DoughRecipe {
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
}

export interface DoughState {
  flour: number;
  hydration: number;
  yeastType: YeastType;
  ballWeight: number;
  numberOfBalls: number;
  recipe?: DoughRecipe;
  errors: Record<string, string>;
  isLiveCalculation?: boolean;
}
