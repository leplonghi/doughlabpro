
import React from 'react';
import { Wheat, Droplet, Info } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

// Custom icons for recipe ingredients
const YeastIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M4 11a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z" />
    <path d="M8 9V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v4" />
    <path d="M9.5 13.5v2" />
    <path d="M14.5 13.5v2" />
  </svg>
);

const SaltIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M14 8v.01" />
    <path d="M12 10v.01" />
    <path d="M16 10v.01" />
    <path d="M14 12v.01" />
    <path d="M6 14a4 4 0 0 1 4-4h4a4 4 0 0 1 0 8h-4a4 4 0 0 1-4-4z" />
    <path d="M17 18a4 4 0 0 0 0-8" />
    <path d="M14 14h.01" />
    <path d="M3 14h.01" />
    <path d="M7 14h.01" />
  </svg>
);

const OilIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M5 14c.5-3.5 2-6 3-9" />
    <path d="M14 4h.5C17 4 19 6 19 8.5c0 .5 0 1-.5 1.5" />
    <path d="M8.5 13C5 15 7 20 12 20h2.5c2.5 0 4.5-2 4.5-4.5 0-3-2-5.5-5-5.5-3 0-5 2-5.5 3z" />
  </svg>
);

const SugarIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M9 13V7c0-1.1.9-2 2-2h0a2 2 0 0 1 2 2v6" />
    <path d="M5 13V9a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2v4" />
    <path d="M15 13v-3a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2v3" />
    <path d="M3 13h18v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
  </svg>
);

const DoughBallIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="8" />
    <path d="m16 12-4-4-4 4" />
    <path d="m16 12-4 4-4-4" />
  </svg>
);

const RecipeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <path d="M14 2v6h6" />
    <path d="M16 13H8" />
    <path d="M16 17H8" />
    <path d="M10 9H8" />
  </svg>
);

interface RecipeFinalProps {
  flour: number;
  water: number;
  salt: number;
  yeast: number;
  oil: number;
  sugar?: number;
  isNewYorkStyle: boolean;
  fermentationMethod: 'direct' | 'poolish' | 'biga';
  formatValue: (value: number) => string;
  getUnitLabel: () => string;
  numberOfBalls?: number;
}

const RecipeFinal: React.FC<RecipeFinalProps> = ({
  flour,
  water,
  salt,
  yeast,
  oil,
  sugar,
  isNewYorkStyle,
  fermentationMethod,
  formatValue,
  getUnitLabel,
  numberOfBalls
}) => (
  <div className="recipe-section">
    <h3 className="font-medium text-gray-900 flex items-center gap-2 mb-3">
      <RecipeIcon size={18} />
      Final Dough
    </h3>
    <ul className="space-y-2 text-gray-700">
      <li className="flex justify-between">
        <span className="result-label flex items-center gap-2"><Wheat size={16} /> Flour:</span>
        <span className="result-value">{formatValue(flour)}{getUnitLabel()}</span>
      </li>
      <li className="flex justify-between">
        <span className="result-label flex items-center gap-2"><Droplet size={16} /> Water:</span>
        <span className="result-value">{formatValue(water)}{getUnitLabel()}</span>
      </li>
      <li className="flex justify-between">
        <span className="result-label flex items-center gap-2"><SaltIcon size={16} /> Salt:</span>
        <span className="result-value">{formatValue(salt)}{getUnitLabel()}</span>
      </li>
      <li className="flex justify-between">
        <span className="result-label flex items-center gap-2">
          <OilIcon size={16} /> {isNewYorkStyle ? 'Olive Oil:' : 'Oil/Butter:'}
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <Info size={14} className="text-muted-foreground cursor-help" />
              </TooltipTrigger>
              <TooltipContent>
                <p>Oil amount is fixed based on the selected style. Some styles use more oil for richness and texture.</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </span>
        <span className="result-value">{formatValue(oil)}{getUnitLabel()}</span>
      </li>
      {isNewYorkStyle && sugar && sugar > 0 && (
        <li className="flex justify-between">
          <span className="result-label flex items-center gap-2">
            <SugarIcon size={16} /> Sugar:
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <Info size={14} className="text-muted-foreground cursor-help" />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Sugar amount is fixed based on the style. Only some styles use sugar to enhance browning and flavor.</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </span>
          <span className="result-value">{formatValue(sugar)}{getUnitLabel()}</span>
        </li>
      )}
      {fermentationMethod === 'direct' && (
        <li className="flex justify-between">
          <span className="result-label flex items-center gap-2"><YeastIcon size={16} /> Yeast:</span>
          <span className="result-value">{formatValue(yeast)}{getUnitLabel()}</span>
        </li>
      )}
      {(fermentationMethod === 'poolish' || fermentationMethod === 'biga') && (
        <li className="flex justify-between">
          <span className="result-label flex items-center gap-2">
            {fermentationMethod === 'poolish' ? '🧊 Prepared Poolish:' : '🧊 Prepared Biga:'}
          </span>
          <span className="result-value">All</span>
        </li>
      )}
      {numberOfBalls !== undefined && (
        <li className="flex justify-between">
          <span className="result-label flex items-center gap-2"><DoughBallIcon size={16} /> Dough Balls:</span>
          <span className="result-value">{numberOfBalls}</span>
        </li>
      )}
    </ul>
  </div>
);

export default RecipeFinal;
