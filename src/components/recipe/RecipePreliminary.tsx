
import React from 'react';
import { Clock, Wheat, Droplet, FlaskConical } from 'lucide-react';

interface RecipePreMixProps {
  type: 'poolish' | 'biga';
  flour: number;
  water: number;
  yeast: number;
  formatValue: (value: number) => string;
  getUnitLabel: () => string;
}

const RecipePreliminary: React.FC<RecipePreMixProps> = ({
  type,
  flour,
  water,
  yeast,
  formatValue,
  getUnitLabel
}) => (
  <div className="recipe-section bg-yellow-50 p-4 rounded-md">
    <h3 className="font-medium text-gray-900 flex items-center gap-2 mb-3">
      <Clock size={18} />
      {type === 'poolish' ? 'Poolish (Preparar 8-16h antes)' : 'Biga (Preparar 12-24h antes)'}
    </h3>
    <ul className="space-y-2 text-gray-700">
      <li className="flex justify-between">
        <span className="result-label flex items-center gap-2"><Wheat size={16} /> Wheat:</span>
        <span className="result-value">{formatValue(flour)}{getUnitLabel()}</span>
      </li>
      <li className="flex justify-between">
        <span className="result-label flex items-center gap-2"><Droplet size={16} /> Water:</span>
        <span className="result-value">{formatValue(water)}{getUnitLabel()}</span>
      </li>
      <li className="flex justify-between">
        <span className="result-label flex items-center gap-2"><FlaskConical size={16} /> Yeast:</span>
        <span className="result-value">{formatValue(yeast)}{getUnitLabel()}</span>
      </li>
    </ul>
    <p className="text-sm text-gray-500 mt-3">
      {type === 'poolish'
        ? 'Mix and let ferment at room temperature for 8-16 hours before incorporating into the final dough.'
        : 'Mix and let ferment at room temperature for 12-24 hours before incorporating into the final dough.'}
    </p>
  </div>
);

export default RecipePreliminary;
