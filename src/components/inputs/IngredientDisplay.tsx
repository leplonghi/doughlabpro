
import React from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { useTranslation } from 'react-i18next';

interface IngredientDisplayProps {
  label: string;
  value: number;
  translationKey?: string;
}

const IngredientDisplay: React.FC<IngredientDisplayProps> = ({ 
  label, 
  value,
  translationKey 
}) => {
  const { t } = useTranslation();
  
  // Use the translationKey if provided, otherwise use the label
  const displayLabel = translationKey ? t(translationKey) : label;
  
  return (
    <div className="space-y-2">
      <Label>{displayLabel}</Label>
      <Input
        value={value.toFixed(2)}
        readOnly
        className="bg-gray-50"
      />
    </div>
  );
};

export default IngredientDisplay;
