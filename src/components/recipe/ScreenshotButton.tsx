
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Camera } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useTranslation } from 'react-i18next';
import { takeScreenshot, saveScreenshotToLocal } from '@/utils/screenshot';

interface ScreenshotButtonProps {
  recipeElementId: string;
  recipeType: string;
  recipeStyle: string;
}

const ScreenshotButton: React.FC<ScreenshotButtonProps> = ({
  recipeElementId,
  recipeType,
  recipeStyle
}) => {
  const [isCapturing, setIsCapturing] = useState(false);
  const { toast } = useToast();
  const { t } = useTranslation();

  const handleScreenshot = async () => {
    try {
      setIsCapturing(true);
      
      // Take screenshot of the recipe
      const screenshot = await takeScreenshot(
        recipeElementId, 
        recipeType,
        recipeStyle
      );
      
      if (screenshot) {
        // Save to local storage
        saveScreenshotToLocal(screenshot);
        
        // Show success toast
        toast({
          title: t('recipe.screenshotSaved', 'Screenshot Saved'),
          description: t('recipe.screenshotSavedToGallery', 'Recipe screenshot saved to your gallery'),
        });
      } else {
        throw new Error('Failed to capture screenshot');
      }
    } catch (error) {
      console.error('Error taking screenshot:', error);
      toast({
        title: t('recipe.screenshotError', 'Screenshot Error'),
        description: t('recipe.screenshotErrorMessage', 'Could not capture recipe screenshot'),
        variant: "destructive"
      });
    } finally {
      setIsCapturing(false);
    }
  };

  return (
    <Button 
      variant="outline" 
      onClick={handleScreenshot} 
      disabled={isCapturing}
    >
      <Camera className="mr-2 h-4 w-4" />
      {isCapturing 
        ? t('recipe.saving', 'Saving...') 
        : t('recipe.saveScreenshot', 'Save to Gallery')}
    </Button>
  );
};

export default ScreenshotButton;
