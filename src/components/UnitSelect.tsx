
import React from 'react';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { useLanguage } from '../contexts/LanguageContext';

export type Unit = 'grams' | 'ounces' | 'cups';

interface UnitSelectProps {
  value: Unit;
  onChange: (value: Unit) => void;
}

const UnitSelect: React.FC<UnitSelectProps> = ({ value, onChange }) => {
  const { t } = useLanguage();
  
  return (
    <div className="space-y-3">
      <Label>{t('calculator.unitLabel')}</Label>
      <RadioGroup 
        value={value} 
        onValueChange={(value) => onChange(value as Unit)}
        className="flex gap-4"
      >
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="grams" id="grams" />
          <Label htmlFor="grams">{t('units.grams')}</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="ounces" id="ounces" />
          <Label htmlFor="ounces">{t('units.ounces')}</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="cups" id="cups" />
          <Label htmlFor="cups">{t('units.cups')}</Label>
        </div>
      </RadioGroup>
    </div>
  );
};

export default UnitSelect;
