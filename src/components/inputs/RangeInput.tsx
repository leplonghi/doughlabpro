
import React from 'react';
import { Input } from '@/components/ui/input';

interface RangeInputProps {
  min: string | number;
  max: string | number;
  step?: string | number;
  value: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  id: string;
  unitLabel?: string;
  hasError?: boolean;
}

const RangeInput: React.FC<RangeInputProps> = ({
  min,
  max,
  step = 1,
  value,
  onChange,
  id,
  unitLabel,
  hasError = false,
}) => {
  return (
    <div className="flex gap-4">
      <div className="flex-1">
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={onChange}
          className="w-full accent-black"
        />
      </div>
      <div className="w-24 flex items-center">
        <Input
          id={id}
          type="number"
          value={value || ''}
          onChange={onChange}
          className={`text-right ${hasError ? "border-red-500" : ""}`}
        />
        {unitLabel && <span className="ml-1">{unitLabel}</span>}
      </div>
    </div>
  );
};

export default RangeInput;
