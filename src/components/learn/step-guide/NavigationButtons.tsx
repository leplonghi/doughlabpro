
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface NavigationButtonsProps {
  onGoBack: () => void;
  handleBackToDoughTypes: () => void;
}

export const NavigationButtons: React.FC<NavigationButtonsProps> = ({ 
  onGoBack, 
  handleBackToDoughTypes 
}) => {
  const { t } = useTranslation();
  
  return (
    <div className="flex justify-between mt-8 print:hidden">
      <Button 
        variant="outline" 
        onClick={onGoBack}
        className="flex items-center"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        {t('recipe.backToRecipes')}
      </Button>
      
      <div className="flex space-x-4">
        <Button 
          variant="outline" 
          onClick={handleBackToDoughTypes}
          className="flex items-center"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          {t('recipe.backToDoughTypes')}
        </Button>
        <Button asChild className="bg-red-500 hover:bg-red-600">
          <a href="/calculator">{t('recipe.switchToPro')}</a>
        </Button>
      </div>
    </div>
  );
};
