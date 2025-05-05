
import React from 'react';
import { Label } from '@/components/ui/label';

interface IngredientSectionProps {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}

const IngredientSection: React.FC<IngredientSectionProps> = ({
  icon,
  label,
  children
}) => {
  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2">
        {icon}
        <Label>{label}</Label>
      </div>
      {children}
    </div>
  );
};

export default IngredientSection;
