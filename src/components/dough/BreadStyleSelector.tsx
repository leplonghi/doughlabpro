
import React from 'react';
import { Button } from '@/components/ui/button';

export type BreadStyle = 'baguette' | 'brioche' | 'focaccia';

interface BreadStyleSelectorProps {
  breadStyle: BreadStyle | '';
  setBreadStyle: (style: BreadStyle) => void;
  onProceed: () => void;
}

const BreadStyleSelector: React.FC<BreadStyleSelectorProps> = ({
  breadStyle,
  setBreadStyle,
  onProceed
}) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      <Button 
        variant={breadStyle === 'baguette' ? 'default' : 'outline'} 
        className={`h-14 justify-center transition-all duration-200 ${
          breadStyle === 'baguette' 
            ? 'shadow-sm' 
            : 'bg-white hover:bg-gray-50'
        }`}
        onClick={() => {
          setBreadStyle('baguette');
          onProceed();
        }}
      >
        <div className="flex flex-col items-center">
          <span className="text-base">Baguette</span>
          <span className="text-xs opacity-75">French Classic</span>
        </div>
      </Button>
      <Button 
        variant={breadStyle === 'brioche' ? 'default' : 'outline'} 
        className={`h-14 justify-center transition-all duration-200 ${
          breadStyle === 'brioche' 
            ? 'shadow-sm' 
            : 'bg-white hover:bg-gray-50'
        }`}
        onClick={() => {
          setBreadStyle('brioche');
          onProceed();
        }}
      >
        <div className="flex flex-col items-center">
          <span className="text-base">Brioche</span>
          <span className="text-xs opacity-75">Rich & Buttery</span>
        </div>
      </Button>
      <Button 
        variant={breadStyle === 'focaccia' ? 'default' : 'outline'} 
        className={`h-14 justify-center transition-all duration-200 ${
          breadStyle === 'focaccia' 
            ? 'shadow-sm' 
            : 'bg-white hover:bg-gray-50'
        }`}
        onClick={() => {
          setBreadStyle('focaccia');
          onProceed();
        }}
      >
        <div className="flex flex-col items-center">
          <span className="text-base">Focaccia</span>
          <span className="text-xs opacity-75">Italian Flatbread</span>
        </div>
      </Button>
    </div>
  );
};

export default BreadStyleSelector;
