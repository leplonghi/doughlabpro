
import * as React from 'react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Save, Share, Printer, RotateCcw } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useTranslation } from 'react-i18next';
import ScreenshotButton from './ScreenshotButton';

interface RecipeActionsProps {
  recipeType?: 'pizza' | 'bread';
  recipeStyle?: string;
}

const RecipeActions: React.FC<RecipeActionsProps> = ({ 
  recipeType = 'pizza',
  recipeStyle = 'custom'
}) => {
  const { toast } = useToast();
  const [saving, setSaving] = React.useState(false);
  const { t } = useTranslation();
  
  const handleSaveRecipe = () => {
    // Save recipe logic would go here
    setSaving(true);
    
    setTimeout(() => {
      setSaving(false);
      toast({
        title: t('recipe.saved', 'Recipe Saved'),
        description: t('recipe.savedSuccess', 'Your recipe has been saved successfully!'),
      });
    }, 1000);
  };
  
  const handlePrint = () => {
    window.print();
  };
  
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: t('recipe.shareTitle', 'My Pizza Dough Recipe'),
        text: t('recipe.shareText', 'Check out this pizza dough recipe I created!'),
        url: window.location.href,
      })
      .catch((error) => console.log('Error sharing', error));
    } else {
      toast({
        title: t('recipe.sharingNotSupported', 'Sharing not supported'),
        description: t('recipe.browserSharingError', 'Your browser doesn\'t support the Web Share API.'),
        variant: "destructive"
      });
    }
  };
  
  const handleReset = () => {
    // Reset form logic would go here
    window.location.reload();
  };

  return (
    <>
      <Separator />
      <div className="flex flex-wrap justify-center gap-4">
        <Button variant="outline" onClick={handleSaveRecipe} disabled={saving}>
          <Save className="mr-2 h-4 w-4" />
          {saving ? t('recipe.saving', 'Saving...') : t('recipe.saveRecipe', 'Save Recipe')}
        </Button>
        <ScreenshotButton 
          recipeElementId="recipe-card" 
          recipeType={recipeType}
          recipeStyle={recipeStyle}
        />
        <Button onClick={handleReset}>
          <RotateCcw className="mr-2 h-4 w-4" />
          {t('recipe.newRecipe', 'New Recipe')}
        </Button>
        <Button variant="outline" onClick={handlePrint}>
          <Printer className="mr-2 h-4 w-4" />
          {t('recipe.print', 'Print')}
        </Button>
        <Button variant="outline" onClick={handleShare}>
          <Share className="mr-2 h-4 w-4" />
          {t('recipe.share', 'Share')}
        </Button>
      </div>
    </>
  );
};

export default RecipeActions;
