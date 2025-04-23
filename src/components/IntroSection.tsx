
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';

const IntroSection: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto mb-10 px-4">
      <Card className="overflow-hidden">
        <div className="bg-gradient-to-r from-pizza-light to-pizza-cream p-6 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-800 mb-3">
            Pizza Dough Calculator Pro
          </h1>
          <p className="text-gray-600 text-lg md:text-xl font-light">
            Create pizza dough with precision
          </p>
        </div>
        
        <CardContent className="p-4">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-gray-700">
                About Pizza
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-gray-700 text-lg leading-relaxed">
                  True Neapolitan pizza follows centuries-old traditions, with precise proportions that result in a light, airy dough with flavorful crispy edges.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="text-gray-700">
                Calculator Features
              </AccordionTrigger>
              <AccordionContent>
                <ul className="list-none space-y-3">
                  <li className="flex items-center text-gray-700">
                    <span className="inline-block w-2 h-2 bg-pizza mr-3 rounded-full"></span>
                    Calculate ingredients precisely based on flour quantity
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="inline-block w-2 h-2 bg-pizza mr-3 rounded-full"></span>
                    Choose between direct, poolish, or biga fermentation
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="inline-block w-2 h-2 bg-pizza mr-3 rounded-full"></span>
                    Adjust hydration to match your technique
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="inline-block w-2 h-2 bg-pizza mr-3 rounded-full"></span>
                    Use fresh or dry yeast with correct proportions
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="inline-block w-2 h-2 bg-pizza mr-3 rounded-full"></span>
                    See how many doughball you will have!
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
