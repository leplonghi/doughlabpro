
import React from 'react';
import { Button } from '@/components/ui/button';
import { Printer } from 'lucide-react';
import { BakingStep, Ingredient } from './types';
import IngredientsCard from './IngredientsCard';
import { useTranslation } from 'react-i18next';
import { TableOfContents } from './step-guide/TableOfContents';
import { StepItem } from './step-guide/StepItem';
import { NavigationButtons } from './step-guide/NavigationButtons';

interface StepGuideProps {
  steps: BakingStep[];
  onGoBack: () => void;
  ingredients: Ingredient[];
  selectedType: string | null;
  quantity: number;
  themeColor?: string;
}

const StepGuide: React.FC<StepGuideProps> = ({
  steps,
  onGoBack,
  ingredients,
  selectedType,
  quantity,
  themeColor = 'green'
}) => {
  const { t } = useTranslation();
  
  // Function to handle going back to dough types
  const handleBackToDoughTypes = () => {
    window.location.href = '/learn';
  };

  const printSteps = () => {
    window.print();
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold">{t('recipe.stepByStep')}</h2>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" onClick={printSteps}>
            <Printer className="mr-1 h-4 w-4" />
            {t('common.printRecipe')}
          </Button>
        </div>
      </div>
      
      {/* Always show ingredients in compact form */}
      <IngredientsCard 
        ingredients={ingredients} 
        selectedType={selectedType} 
        quantity={quantity}
        compact={true}
      />
      
      {/* Table of contents for quick navigation */}
      <TableOfContents steps={steps} themeColor={themeColor} />
      
      {/* All steps at once */}
      <div className="space-y-8">
        {steps.map((step, index) => (
          <StepItem 
            key={index}
            step={step}
            index={index}
            isLast={index === steps.length - 1}
            themeColor={themeColor}
          />
        ))}
      </div>
      
      <NavigationButtons 
        onGoBack={onGoBack} 
        handleBackToDoughTypes={handleBackToDoughTypes} 
      />
    </div>
  );
};

export default StepGuide;
