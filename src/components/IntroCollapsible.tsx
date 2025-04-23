
import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { Card } from '@/components/ui/card';
import { useLanguage } from '../hooks/useLanguage';

const IntroCollapsible: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(true);
  const { t } = useLanguage();

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen}>
      <Card className="p-4">
        <CollapsibleTrigger className="flex items-center justify-between w-full">
          <h2 className="text-lg font-serif font-semibold">
            {t('calculator.title')}
          </h2>
          {isOpen ? (
            <ChevronUp className="h-5 w-5 text-gray-500" />
          ) : (
            <ChevronDown className="h-5 w-5 text-gray-500" />
          )}
        </CollapsibleTrigger>
        
        <CollapsibleContent className="mt-4">
          <div className="prose prose-slate">
            <p className="text-sm text-gray-700">
              {t('calculator.introText')}
            </p>
            
            <div className="mt-4">
              <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
                {[
                  'calculator.introPoint1',
                  'calculator.introPoint2', 
                  'calculator.introPoint3', 
                  'calculator.introPoint4'
                ].map((key, index) => (
                  <li key={index}>{t(key)}</li>
                ))}
              </ul>
            </div>
          </div>
        </CollapsibleContent>
      </Card>
    </Collapsible>
  );
};

export default IntroCollapsible;
