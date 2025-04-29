
import React from 'react';
import { RecipeIcon } from '@/components/icons/RecipeIcons';
import FlourItem from './ingredients/FlourItem';
import WaterItem from './ingredients/WaterItem';
import SaltItem from './ingredients/SaltItem';
import OilItem from './ingredients/OilItem';
import SugarItem from './ingredients/SugarItem';
import YeastItem from './ingredients/YeastItem';
import PrefermentItem from './ingredients/PrefermentItem';
import DoughBallsItem from './ingredients/DoughBallsItem';

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
      <RecipeIcon className="w-5 h-5" />
      Final Dough
    </h3>
    <ul className="space-y-2 text-gray-700">
      <FlourItem flour={flour} formatValue={formatValue} getUnitLabel={getUnitLabel} />
      <WaterItem water={water} formatValue={formatValue} getUnitLabel={getUnitLabel} />
      <SaltItem salt={salt} formatValue={formatValue} getUnitLabel={getUnitLabel} />
      <OilItem oil={oil} formatValue={formatValue} getUnitLabel={getUnitLabel} isNewYorkStyle={isNewYorkStyle} />
      
      {isNewYorkStyle && sugar && sugar > 0 && (
        <SugarItem sugar={sugar} formatValue={formatValue} getUnitLabel={getUnitLabel} />
      )}
      
      {fermentationMethod === 'direct' && (
        <YeastItem yeast={yeast} formatValue={formatValue} getUnitLabel={getUnitLabel} />
      )}
      
      {(fermentationMethod === 'poolish' || fermentationMethod === 'biga') && (
        <PrefermentItem type={fermentationMethod} />
      )}
      
      {numberOfBalls !== undefined && (
        <DoughBallsItem numberOfBalls={numberOfBalls} />
      )}
    </ul>
  </div>
);

export default RecipeFinal;
