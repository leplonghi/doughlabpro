
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { BookOpen, ChevronDown, ChevronUp } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

interface BakingTipsProps {
  doughType: 'pizza' | 'bread';
  style: string;
}

const BakingTips: React.FC<BakingTipsProps> = ({ doughType, style }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const getTips = () => {
    if (doughType === 'pizza') {
      switch (style) {
        case 'napoletana':
          return [
            "For authentic Neapolitan pizza, use '00' flour which has a fine texture and high protein content.",
            "Room temperature ingredients help with proper gluten formation.",
            "Neapolitan pizza is traditionally baked in a wood-fired oven that reaches 850-900°F.",
            "The high heat allows the pizza to cook in 60-90 seconds, creating the characteristic leopard-spotted crust.",
            "Keep toppings minimal to preserve the texture and flavor of the dough."
          ];
        case 'newyork':
          return [
            "New York style dough benefits from a small amount of oil and sugar for browning and flavor.",
            "Allow the shaped dough to rest for 15-20 minutes before adding toppings.",
            "Use a pizza stone or steel preheated for at least an hour.",
            "The dough should be thin in the middle with a puffy, chewy outer crust.",
            "A longer, cooler fermentation (24-72 hours) develops the best flavor."
          ];
        case 'chicago':
          return [
            "Chicago deep-dish requires a higher oil content for a buttery, flaky texture.",
            "The dough should be pressed into a well-oiled deep pan, not thrown or stretched.",
            "Layer cheese on the bottom to prevent the crust from getting soggy.",
            "Put sauce on top of all toppings to protect them from burning during the longer bake time.",
            "Allow the finished pizza to rest for 5-10 minutes before slicing for cleaner cuts."
          ];
        default:
          return [
            "Keep your dough hydration between 58-65% for easier handling.",
            "Cold fermentation (in the refrigerator) produces better flavor development.",
            "Properly knead the dough until it passes the 'windowpane test'.",
            "Use a kitchen scale for accurate measurements.",
            "Let your dough come to room temperature before shaping."
          ];
      }
    } else {
      switch (style) {
        case 'baguette':
          return [
            "Create steam in your oven by placing a pan of water during baking for a crispy crust.",
            "Score the baguettes with a sharp blade just before baking.",
            "Properly shape the dough by folding and rolling, not stretching.",
            "Use high-protein bread flour for better structure.",
            "Final proof should happen in a couche or floured cloth to maintain shape."
          ];
        case 'brioche':
          return [
            "Ensure butter is room temperature before incorporating into the dough.",
            "Add butter slowly, allowing each addition to fully incorporate.",
            "A stand mixer is recommended as brioche requires extensive kneading.",
            "Brioche dough needs long refrigeration (minimum 4 hours, ideally overnight).",
            "Brush with egg wash before baking for a shiny golden crust."
          ];
        case 'focaccia':
          return [
            "High hydration (70-80%) gives focaccia its characteristic open crumb.",
            "Use plenty of olive oil in the pan and on top of the dough.",
            "Create dimples with your fingertips just before baking.",
            "Salt the top just before baking for best flavor.",
            "Allow to cool slightly before cutting to prevent the crumb from becoming gummy."
          ];
        default:
          return [
            "Measure ingredients by weight for consistency.",
            "Temperature control is crucial for proper fermentation.",
            "A longer fermentation develops more complex flavors.",
            "Use a properly heated baking stone or steel for better crust formation.",
            "Allow bread to cool completely before slicing for best texture."
          ];
      }
    }
  };

  const tips = getTips();
  const displayTips = isExpanded ? tips : tips.slice(0, 2);

  return (
    <Card className="mt-4">
      <CardContent className="pt-6">
        <h3 className="font-medium text-gray-900 flex items-center gap-2 mb-3">
          <BookOpen className="h-5 w-5" />
          Pro Baking Tips
        </h3>

        <ul className="space-y-2">
          {displayTips.map((tip, index) => (
            <li key={index} className="text-sm text-gray-700 flex">
              <span className="mr-2">•</span>
              <span>{tip}</span>
            </li>
          ))}
        </ul>

        {tips.length > 2 && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-full mt-3 pt-2 text-sm text-blue-600 hover:text-blue-700 flex items-center justify-center gap-1"
          >
            {isExpanded ? (
              <>
                Show less <ChevronUp className="h-4 w-4" />
              </>
            ) : (
              <>
                Show more tips <ChevronDown className="h-4 w-4" />
              </>
            )}
          </button>
        )}

        <Separator className="my-3" />
        
        <p className="text-xs text-gray-500 italic">
          {doughType === 'pizza' 
            ? "Remember that great pizza comes from practice and attention to detail. Temperature and timing are key factors."
            : "Great bread requires patience. Focus on proper fermentation, scoring, and steam for professional results."}
        </p>
      </CardContent>
    </Card>
  );
};

export default BakingTips;
