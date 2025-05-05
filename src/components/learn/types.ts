
export interface BakingStep {
  title: string;
  description: string;
  timer?: number; // in minutes
  image?: string;
  tip?: string;
}

export interface Ingredient {
  name: string;
  amount: number;
  unit: string;
  scalable?: boolean;
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
  onQuantityChange?: (newQuantity: number) => void;
}

export interface IngredientsCardProps {
  ingredients: Ingredient[];
  selectedType: string | null;
  quantity: number;
}
