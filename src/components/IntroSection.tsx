import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { useTranslation } from 'react-i18next';
const IntroSection: React.FC = () => {
  const {
    t
  } = useTranslation();
  return <div className="max-w-3xl mx-auto mb-10 px-4 bg-orange-500">
      <Card className="overflow-hidden">
        <div className="bg-gradient-to-r from-pizza-light to-pizza-cream p-6 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-800 mb-3">
            {t('calculator.title')}
          </h1>
          <p className="text-gray-600 text-lg md:text-xl font-light">
            {t('calculator.subtitle')}
          </p>
        </div>
        
        <CardContent className="p-4">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-gray-700">
                {t('intro.aboutPizza')}
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-gray-700 text-lg leading-relaxed">
                  {t('intro.aboutPizzaContent')}
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="text-gray-700">
                {t('intro.calculatorFeatures')}
              </AccordionTrigger>
              <AccordionContent>
                <ul className="list-none space-y-3">
                  <li className="flex items-center text-gray-700">
                    <span className="inline-block w-2 h-2 bg-pizza mr-3 rounded-full"></span>
                    {t('intro.feature1')}
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="inline-block w-2 h-2 bg-pizza mr-3 rounded-full"></span>
                    {t('intro.feature2')}
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="inline-block w-2 h-2 bg-pizza mr-3 rounded-full"></span>
                    {t('intro.feature3')}
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="inline-block w-2 h-2 bg-pizza mr-3 rounded-full"></span>
                    {t('intro.feature4')}
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="inline-block w-2 h-2 bg-pizza mr-3 rounded-full"></span>
                    {t('intro.feature5')}
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>
    </div>;
};
export default IntroSection;