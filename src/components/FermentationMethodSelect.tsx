
import React from 'react';
import {
  Label
} from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';

type FermentationMethod = 'direct' | 'poolish' | 'biga';

interface FermentationMethodSelectProps {
  fermentationMethod: FermentationMethod;
  onChange: (value: FermentationMethod) => void;
}

const FermentationMethodSelect: React.FC<FermentationMethodSelectProps> = ({
  fermentationMethod,
  onChange,
}) => (
  <div className="space-y-3">
    <Label htmlFor="fermentation-method" className="text-lg font-semibold">
      Fermentation Method
    </Label>
    <Select
      value={fermentationMethod}
      onValueChange={val => onChange(val as FermentationMethod)}
    >
      <SelectTrigger>
        <SelectValue placeholder="Select a method" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="direct">Direct</SelectItem>
        <SelectItem value="poolish">Poolish</SelectItem>
        <SelectItem value="biga">Biga</SelectItem>
      </SelectContent>
    </Select>

    <div className="p-3 bg-gray-50 rounded-md text-sm mt-2">
      {fermentationMethod === 'direct' && (
        <>
          <p><b>Direct Method</b>: all ingredients are mixed at once.</p>
          <ul className="list-disc ml-5 mt-2 text-gray-600">
            <li>Fermentation time: 8-24h (room temperature).</li>
            <li>Dough develops mild flavor.</li>
          </ul>
        </>
      )}
      {fermentationMethod === 'poolish' && (
        <>
          <p><b>Poolish</b>: make a liquid pre-ferment using 30% of total flour (100% hydration).</p>
          <ul className="list-disc ml-5 mt-2 text-gray-600">
            <li>Prepare poolish 8-16h before.</li>
            <li>Add poolish to final dough.</li>
            <li>Dough gains lightness, aroma and special texture.</li>
          </ul>
        </>
      )}
      {fermentationMethod === 'biga' && (
        <>
          <p><b>Biga</b>: make a firm pre-ferment using 50% of flour (50% hydration).</p>
          <ul className="list-disc ml-5 mt-2 text-gray-600">
            <li>Prepare biga 12-24h before.</li>
            <li>Add biga to final dough.</li>
            <li>More resistant dough with intense aroma.</li>
          </ul>
        </>
      )}
    </div>

    <div>
      {fermentationMethod === 'poolish' && (
        <div className="mt-2 p-3 bg-yellow-50 rounded">
          <b>Poolish:</b> Use dry yeast (0.1%) or fresh yeast (0.3%) only in pre-ferment.<br />
          Mix 30% flour + same amount of water + yeast.<br />
          <span className="text-xs text-gray-500">After ready, add poolish to final dough.</span>
        </div>
      )}
      {fermentationMethod === 'biga' && (
        <div className="mt-2 p-3 bg-yellow-50 rounded">
          <b>Biga:</b> Mix 50% flour + 50% water + yeast.<br />
          Knead and let ferment before using in final dough.<br />
          <span className="text-xs text-gray-500">Ideal for rustic texture and deep flavor.</span>
        </div>
      )}
    </div>
  </div>
);

export default FermentationMethodSelect;
