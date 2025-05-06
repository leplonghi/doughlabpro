
import React from 'react';
import { BookOpen } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface StepInfoProps {
  didacticInfo?: string;
  title: string;
}

// Component to display didactic information for a step
export const StepInfo: React.FC<StepInfoProps> = ({ didacticInfo, title }) => {
  const { t } = useTranslation();

  // Generate default didactic info based on step title if none provided
  const getDefaultDidacticInfo = (title: string) => {
    if (title.includes('Mix')) {
      return "Proper mixing ensures even hydration of the flour and helps develop initial gluten structure. Take your time during this phase to ensure all ingredients are well incorporated.";
    } else if (title.includes('Fold')) {
      return "Folding techniques help develop gluten structure without overworking the dough. Each fold redistributes the yeast and creates a stronger dough with better texture.";
    } else if (title.includes('Ferment')) {
      return "Fermentation is when flavor develops. The longer and slower the fermentation, the more complex flavors will develop in your dough.";
    } else if (title.includes('Shape')) {
      return "Proper shaping creates surface tension that helps the dough hold its shape and rise properly during baking.";
    } else if (title.includes('Bake')) {
      return "The initial high temperature creates 'oven spring' - the final rise of the dough in the oven. Steam during the first part of baking helps develop a crispy crust.";
    }
    return "";
  };

  return (
    <div className="my-6 p-4 bg-blue-50 rounded-lg border border-blue-100">
      <div className="flex items-start">
        <BookOpen className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
        <div>
          <h4 className="font-medium text-blue-800 mb-2">{t('recipe.learningNotes')}</h4>
          {didacticInfo ? (
            <p className="text-blue-700">{didacticInfo}</p>
          ) : (
            <p className="text-blue-700">
              {getDefaultDidacticInfo(title)}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
