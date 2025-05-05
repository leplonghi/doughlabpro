
export interface Ingredient {
  name: string;
  amount: number;
  unit: string;
  scalable: boolean;
}

export interface BakingStep {
  title: string;
  description: string;
  tip?: string;
  timer?: number; // in minutes
  image?: string; // URL to the image for this step
}

export interface RecipeDetailProps {
  selectedType: string | null;
  selectedRecipe: string | null;
  onGoBack: () => void;
  numberOfPies?: number;
}

export interface RecipeHeaderProps {
  selectedType: string | null;
  selectedRecipe: string | null;
  quantity: number;
  onQuantityChange?: (quantity: number) => void;
}
