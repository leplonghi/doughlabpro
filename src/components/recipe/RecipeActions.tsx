
import * as React from 'react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Save, Printer, RotateCcw, Lock } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import ProButton from '@/components/usage/ProButton';

interface RecipeActionsProps {
  recipeType?: 'pizza' | 'bread';
  recipeStyle?: string;
}

const RecipeActions: React.FC<RecipeActionsProps> = ({ 
  recipeType = 'pizza',
  recipeStyle = 'custom'
}) => {
  const { toast } = useToast();
  
  const handleProFeatureClick = () => {
    toast({
      title: "PRO Feature",
      description: "This feature is only available to PRO users.",
      variant: "default"
    });
  };
  
  const handleReset = () => {
    // Reset form logic would go here
    window.location.reload();
  };

  return (
    <>
      <Separator className="my-4" />
      <div className="flex flex-wrap justify-center gap-4">
        {/* PRO Feature: Save Recipe */}
        <Button variant="outline" onClick={handleProFeatureClick}>
          <Lock className="mr-2 h-4 w-4" />
          <Save className="mr-2 h-4 w-4" />
          Save Recipe
        </Button>
        
        <Button onClick={handleReset}>
          <RotateCcw className="mr-2 h-4 w-4" />
          New Recipe
        </Button>
        
        {/* PRO Feature: Print */}
        <Button variant="outline" onClick={handleProFeatureClick}>
          <Lock className="mr-2 h-4 w-4" />
          <Printer className="mr-2 h-4 w-4" />
          Print
        </Button>
        
        {/* PRO Button */}
        <div className="mt-1">
          <ProButton />
        </div>
      </div>
    </>
  );
};

export default RecipeActions;
