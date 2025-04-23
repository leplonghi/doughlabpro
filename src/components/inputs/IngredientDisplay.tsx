
import React from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';

interface IngredientDisplayProps {
  label: string;
  value: number;
}

const IngredientDisplay: React.FC<IngredientDisplayProps> = ({ label, value }) => {
  return (
    <div className="space-y-2">
      <Label>{label}</Label>
      <Input
        value={value.toFixed(1)}
        readOnly
        className="bg-gray-50"
      />
    </div>
  );
};

export default IngredientDisplay;
