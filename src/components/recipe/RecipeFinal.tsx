
import React from 'react';
import { Wheat, Droplet, FlaskConical, FileText } from 'lucide-react';

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
  getUnitLabel
}) => (
  <div className="recipe-section">
    <h3 className="font-medium text-gray-900 flex items-center gap-2 mb-3">
      <FileText size={18} />
      Massa Final
    </h3>
    <ul className="space-y-2 text-gray-700">
      <li className="flex justify-between">
        <span className="result-label flex items-center gap-2"><Wheat size={16} /> Farinha:</span>
        <span className="result-value">{formatValue(flour)}{getUnitLabel()}</span>
      </li>
      <li className="flex justify-between">
        <span className="result-label flex items-center gap-2"><Droplet size={16} /> Água:</span>
        <span className="result-value">{formatValue(water)}{getUnitLabel()}</span>
      </li>
      <li className="flex justify-between">
        <span className="result-label flex items-center gap-2">🧂 Sal:</span>
        <span className="result-value">{formatValue(salt)}{getUnitLabel()}</span>
      </li>
      <li className="flex justify-between">
        <span className="result-label flex items-center gap-2">🫒 Azeite:</span>
        <span className="result-value">{formatValue(oil)}{getUnitLabel()}</span>
      </li>
      {isNewYorkStyle && (
        <li className="flex justify-between">
          <span className="result-label flex items-center gap-2">🍯 Açúcar:</span>
          <span className="result-value">{formatValue(sugar || 0)}{getUnitLabel()}</span>
        </li>
      )}
      {fermentationMethod === 'direct' && (
        <li className="flex justify-between">
          <span className="result-label flex items-center gap-2"><FlaskConical size={16} /> Fermento:</span>
          <span className="result-value">{formatValue(yeast)}{getUnitLabel()}</span>
        </li>
      )}
      {(fermentationMethod === 'poolish' || fermentationMethod === 'biga') && (
        <li className="flex justify-between">
          <span className="result-label flex items-center gap-2">
            {fermentationMethod === 'poolish' ? '🧊 Poolish preparado:' : '🧊 Biga preparada:'}
          </span>
          <span className="result-value">Toda</span>
        </li>
      )}
    </ul>
  </div>
);

export default RecipeFinal;
