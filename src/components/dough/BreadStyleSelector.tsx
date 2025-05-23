
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
    <div className="grid grid-cols-3 gap-3">
      <Button 
        variant={breadStyle === 'baguette' ? 'default' : 'outline'} 
        className={`h-12 justify-center ${breadStyle === 'baguette' ? 'bg-red-500 hover:bg-red-600' : 'bg-white hover:bg-red-50 border-red-200'}`}
        onClick={() => {
          setBreadStyle('baguette');
          onProceed();
        }}
      >
        Baguette
      </Button>
      <Button 
        variant={breadStyle === 'brioche' ? 'default' : 'outline'} 
        className={`h-12 justify-center ${breadStyle === 'brioche' ? 'bg-red-500 hover:bg-red-600' : 'bg-white hover:bg-red-50 border-red-200'}`}
        onClick={() => {
          setBreadStyle('brioche');
          onProceed();
        }}
      >
        Brioche
      </Button>
      <Button 
        variant={breadStyle === 'focaccia' ? 'default' : 'outline'} 
        className={`h-12 justify-center ${breadStyle === 'focaccia' ? 'bg-red-500 hover:bg-red-600' : 'bg-white hover:bg-red-50 border-red-200'}`}
        onClick={() => {
          setBreadStyle('focaccia');
          onProceed();
        }}
      >
        Focaccia
      </Button>
    </div>
  );
};

export default BreadStyleSelector;
