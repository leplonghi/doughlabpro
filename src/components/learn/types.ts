
export interface BakingStep {
  title: string;
  description: string;
  image?: string;
  tip?: string;
  timer?: number; // Keeping this for backward compatibility
  didacticInfo?: string; // Field for didactic information
}

export interface Ingredient {
  name: string;
  amount: number;
  unit: string;
  scalable?: boolean; // Adding this property to fix build errors
}

export interface RecipeDetailProps {
  selectedType: string | null;
  selectedRecipe: string | null;
  onGoBack: () => void;
  numberOfPies?: number;
  themeColor?: string;
}

export interface RecipeHeaderProps {
  selectedType: string | null;
  selectedRecipe: string | null;
  quantity: number;
  onQuantityChange?: (newQuantity: number) => void;
}
