
import * as React from 'react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Save, Share, Printer, RotateCcw } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useAuth } from '@/context/AuthContext';
import { useTranslation } from 'react-i18next';

// Check if user is a pro subscriber
const isPro = () => {
  // This would be replaced with actual subscription check
  return localStorage.getItem('subscription_tier') === 'pro';
};

const RecipeActions: React.FC = () => {
  const { toast } = useToast();
  const [saving, setSaving] = React.useState(false);
  const { user } = useAuth(); // Use the Auth context to get the current user
  const { t } = useTranslation();
  
  const handleSaveRecipe = () => {
    if (!user) {
      // Redirect to authentication page or show login modal
      toast({
        title: t('recipe.authRequired', 'Authentication Required'),
        description: t('recipe.loginToSave', 'Please log in to save your recipes.'),
        variant: "destructive"
      });
      return;
    }
    
    if (!isPro()) {
      toast({
        title: t('recipe.proFeature', 'Pro Feature'),
        description: t('recipe.upgradeToSave', 'Saving recipes is a Pro feature. Please upgrade your account.'),
        variant: "destructive"
      });
      return;
    }
    
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
