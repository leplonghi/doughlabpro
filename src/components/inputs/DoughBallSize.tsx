
import React from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Weight } from 'lucide-react';

interface WeightRange {
  min: number;
  max: number;
  step: number;
}

interface DoughBallSizeProps {
  ballWeight: number;
  onBallWeightChange: (weight: number) => void;
  description: string;
  weightRange: WeightRange;
}

const DoughBallSize: React.FC<DoughBallSizeProps> = ({
  ballWeight,
  onBallWeightChange,
  description,
  weightRange
}) => {
  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2">
        <Weight className="h-5 w-5" />
        <Label htmlFor="ballWeight">Doughball Size</Label>
      </div>
      <div className="flex gap-4">
        <div className="flex-1">
          <input
            type="range"
            min={weightRange.min}
            max={weightRange.max}
            step={weightRange.step}
            value={ballWeight}
            onChange={(e) => onBallWeightChange(Number(e.target.value))}
            className="w-full accent-black"
          />
        </div>
        <div className="w-24 flex items-center">
          <Input
            id="ballWeight"
            type="number"
            value={ballWeight || ''}
            onChange={(e) => onBallWeightChange(Number(e.target.value))}
            className="text-right"
          />
          <span className="ml-1">g</span>
        </div>
      </div>
      <p className="text-sm text-gray-600">
        {description}
      </p>
    </div>
  );
};

export default DoughBallSize;
