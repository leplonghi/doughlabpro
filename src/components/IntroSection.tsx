
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { Plus, Minus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

const IntroSection: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="max-w-3xl mx-auto mb-10 px-4">
      <Card className="overflow-hidden">
        <div className="bg-gradient-to-r from-pizza-light to-pizza-cream p-6 text-center relative">
          <div className="flex justify-between items-center">
            <div className="flex-grow">
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-800 mb-3">
                Neapolitan Pizza Calculator
              </h1>
              <p className="text-gray-600 text-lg md:text-xl font-light">
                Create pizza dough with precision
              </p>
            </div>
            <Collapsible open={isOpen} onOpenChange={setIsOpen}>
              <CollapsibleTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="shrink-0 ml-4"
                >
                  {isOpen ? (
                    <Minus className="h-4 w-4" />
                  ) : (
                    <Plus className="h-4 w-4" />
                  )}
                </Button>
              </CollapsibleTrigger>
              <CollapsibleContent className="animate-accordion-down">
                <CardContent className="p-8">
                  <div className="prose prose-slate mx-auto">
                    <p className="text-gray-700 text-lg leading-relaxed">
                      True Neapolitan pizza follows centuries-old traditions, with precise proportions that result in a light, airy dough with flavorful crispy edges.
                    </p>
                    
                    <p className="text-gray-700 mt-6 font-medium">
                      Our calculator helps you:
                    </p>
                    
                    <ul className="list-none space-y-3 mt-4">
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
                    </ul>
                  </div>
                </CardContent>
              </CollapsibleContent>
            </Collapsible>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default IntroSection;
