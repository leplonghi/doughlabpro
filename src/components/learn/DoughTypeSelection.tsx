
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

type DoughType = 'pizza' | 'bread' | 'focaccia' | 'sourdough';

interface DoughTypeData {
  id: DoughType;
  name: string;
  icon: string;
  description: string;
}

interface DoughTypeSelectionProps {
  doughTypes: DoughTypeData[];
  selectedType: DoughType | null;
  onSelectType: (type: DoughType) => void;
}

const DoughTypeSelection: React.FC<DoughTypeSelectionProps> = ({ 
  doughTypes, 
  selectedType, 
  onSelectType 
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
      {doughTypes.map((type) => (
        <Card 
          key={type.id}
          className={`border hover:shadow-md transition-all cursor-pointer ${
            selectedType === type.id ? 'border-amber-500 ring-2 ring-amber-500 bg-amber-50' : ''
          }`}
          onClick={() => onSelectType(type.id)}
        >
          <CardContent className="p-6 flex flex-col items-center text-center">
            <div className="text-5xl mb-4">{type.icon}</div>
            <h3 className="text-xl font-medium mb-2">{type.name}</h3>
            <p className="text-sm text-muted-foreground">{type.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default DoughTypeSelection;
