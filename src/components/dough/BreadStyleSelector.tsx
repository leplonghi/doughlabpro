
import React from 'react';
import { Button } from '@/components/ui/button';
import { CircleDot } from 'lucide-react';

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
        className="h-12 justify-center" 
        onClick={() => {
          setBreadStyle('baguette');
          onProceed();
        }}
      >
        French Baguette
      </Button>
      <Button 
        variant={breadStyle === 'brioche' ? 'default' : 'outline'} 
        className="h-12 justify-center" 
        onClick={() => {
          setBreadStyle('brioche');
          onProceed();
        }}
      >
        Brioche
      </Button>
      <Button 
        variant={breadStyle === 'focaccia' ? 'default' : 'outline'} 
        className="h-12 justify-center" 
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
