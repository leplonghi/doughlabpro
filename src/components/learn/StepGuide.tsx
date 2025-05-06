
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft, BookOpen, List, Printer } from 'lucide-react';
import { BakingStep, Ingredient } from './types';
import IngredientsCard from './IngredientsCard';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useTranslation } from 'react-i18next';

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

  // Helper function to get appropriate image for a step
  const getStepImage = (stepTitle: string, providedImage?: string) => {
    if (providedImage) return providedImage;
    
    // Map step titles to appropriate images
    if (stepTitle.includes('Mix') || stepTitle.includes('Autolyse')) {
      return "/lovable-uploads/dough-mixing.jpg";
    } else if (stepTitle.includes('Knead') || stepTitle.includes('Fold')) {
      return "/lovable-uploads/dough-folding.jpg";
    } else if (stepTitle.includes('Ferment') || stepTitle.includes('Proof')) {
      return "/lovable-uploads/dough-fermentation.jpg";
    } else if (stepTitle.includes('Shape')) {
      return "/lovable-uploads/dough-shaping.jpg";
    } else if (stepTitle.includes('Bake')) {
      return "/lovable-uploads/dough-baking.jpg";
    }
    
    // Default image if no specific match
    return "/lovable-uploads/dough-process.jpg";
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
      <div className="bg-white p-4 rounded-lg border shadow-sm print:hidden">
        <div className="flex items-center mb-3">
          <List className="h-5 w-5 mr-2 text-gray-600" />
          <h3 className="text-lg font-medium">{t('recipe.quickNavigation')}</h3>
        </div>
        <ScrollArea className="h-auto max-h-48">
          <ul className="space-y-1">
            {steps.map((step, index) => (
              <li key={index}>
                <a 
                  href={`#step-${index + 1}`} 
                  className={cn(
                    "block px-3 py-1.5 text-sm rounded hover:bg-gray-100",
                    themeColor === 'green' ? 'hover:text-green-700' : 'hover:text-blue-700'
                  )}
                >
                  {index + 1}. {step.title}
                </a>
              </li>
            ))}
          </ul>
        </ScrollArea>
      </div>
      
      {/* All steps at once */}
      <div className="space-y-8">
        {steps.map((step, index) => (
          <div 
            key={index}
            id={`step-${index + 1}`} 
            className="bg-white p-6 rounded-lg border shadow-sm scroll-mt-4"
          >
            <div className="flex items-center mb-4">
              <div 
                className={cn(
                  "flex items-center justify-center w-8 h-8 rounded-full mr-3 text-white font-medium",
                  themeColor === 'green' ? 'bg-green-500' : 'bg-blue-500'
                )}
              >
                {index + 1}
              </div>
              <h3 className="text-xl font-medium">{step.title}</h3>
            </div>
            
            {/* Step image */}
            <div className="mb-6 rounded-lg overflow-hidden">
              <img 
                src={getStepImage(step.title, step.image)} 
                alt={step.title} 
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
            
            <p className="mb-6 text-gray-700">{step.description}</p>
            
            {/* Didactic information box */}
            <div className="my-6 p-4 bg-blue-50 rounded-lg border border-blue-100">
              <div className="flex items-start">
                <BookOpen className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-blue-800 mb-2">{t('recipe.learningNotes')}</h4>
                  {step.didacticInfo ? (
                    <p className="text-blue-700">{step.didacticInfo}</p>
                  ) : (
                    <p className="text-blue-700">
                      {step.title.includes('Mix') && "Proper mixing ensures even hydration of the flour and helps develop initial gluten structure. Take your time during this phase to ensure all ingredients are well incorporated."}
                      {step.title.includes('Fold') && "Folding techniques help develop gluten structure without overworking the dough. Each fold redistributes the yeast and creates a stronger dough with better texture."}
                      {step.title.includes('Ferment') && "Fermentation is when flavor develops. The longer and slower the fermentation, the more complex flavors will develop in your dough."}
                      {step.title.includes('Shape') && "Proper shaping creates surface tension that helps the dough hold its shape and rise properly during baking."}
                      {step.title.includes('Bake') && "The initial high temperature creates 'oven spring' - the final rise of the dough in the oven. Steam during the first part of baking helps develop a crispy crust."}
                    </p>
                  )}
                </div>
              </div>
            </div>
            
            {step.tip && (
              <div className="bg-green-50 p-4 rounded-md mb-6 border border-green-100">
                <p className="text-green-800 text-sm font-medium flex items-start">
                  <span className="mr-2">💡</span>
                  <span>{step.tip}</span>
                </p>
              </div>
            )}
            
            {index < steps.length - 1 && <Separator className="mt-6" />}
          </div>
        ))}
      </div>
      
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
    </div>
  );
};

export default StepGuide;
