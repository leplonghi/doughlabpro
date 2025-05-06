
export interface BakingStep {
  title: string;
  description: string;
  image?: string;
  tip?: string;
  timer?: number; // Keeping this for backward compatibility
  didacticInfo?: string; // New field for didactic information
}

export interface Ingredient {
  name: string;
  amount: number;
  unit: string;
}

export interface RecipeDetailProps {
  selectedType: string | null;
  selectedRecipe: string | null;
  onGoBack: () => void;
  numberOfPies?: number;
  themeColor?: string;
}
