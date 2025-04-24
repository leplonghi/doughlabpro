
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { useTranslation } from 'react-i18next';

const IntroSection: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <div className="max-w-3xl mx-auto mb-10 px-4">
      <Card className="overflow-hidden border-none shadow-md">
        <div className="bg-gradient-to-r from-primary/20 to-secondary p-8 text-center">
          <h1 className="text-3xl md:text-4xl font-semibold mb-3 text-foreground">
            {t('calculator.title')}
          </h1>
          <p className="text-foreground/80 text-lg font-light">
            {t('calculator.subtitle')}
          </p>
        </div>
        
        <CardContent className="p-6">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1" className="border-b border-border/50">
              <AccordionTrigger className="text-foreground font-medium py-4">
                {t('intro.aboutPizza')}
              </AccordionTrigger>
              <AccordionContent className="text-foreground/80">
                <p className="text-base leading-relaxed">
                  {t('intro.aboutPizzaContent')}
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border-b border-border/50">
              <AccordionTrigger className="text-foreground font-medium py-4">
                {t('intro.calculatorFeatures')}
              </AccordionTrigger>
              <AccordionContent>
                <ul className="list-none space-y-3">
                  <li className="flex items-start gap-3 text-foreground/80">
                    <span className="inline-block w-2 h-2 bg-primary mt-2 rounded-full flex-shrink-0"></span>
                    <span>{t('intro.feature1')}</span>
                  </li>
                  <li className="flex items-start gap-3 text-foreground/80">
                    <span className="inline-block w-2 h-2 bg-primary mt-2 rounded-full flex-shrink-0"></span>
                    <span>{t('intro.feature2')}</span>
                  </li>
                  <li className="flex items-start gap-3 text-foreground/80">
                    <span className="inline-block w-2 h-2 bg-primary mt-2 rounded-full flex-shrink-0"></span>
                    <span>{t('intro.feature3')}</span>
                  </li>
                  <li className="flex items-start gap-3 text-foreground/80">
                    <span className="inline-block w-2 h-2 bg-primary mt-2 rounded-full flex-shrink-0"></span>
                    <span>{t('intro.feature4')}</span>
                  </li>
                  <li className="flex items-start gap-3 text-foreground/80">
                    <span className="inline-block w-2 h-2 bg-primary mt-2 rounded-full flex-shrink-0"></span>
                    <span>{t('intro.feature5')}</span>
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>
    </div>
  );
};

export default IntroSection;
