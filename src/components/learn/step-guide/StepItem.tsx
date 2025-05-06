
import React from 'react';
import { Separator } from '@/components/ui/separator';
import { BakingStep } from '../types';
import { StepHeader } from './StepHeader';
import { StepImage } from './StepImage';
import { StepInfo } from './StepInfo';
import { StepTip } from './StepTip';

interface StepItemProps {
  step: BakingStep;
  index: number;
  isLast: boolean;
  themeColor: string;
}

export const StepItem: React.FC<StepItemProps> = ({ step, index, isLast, themeColor }) => {
  return (
    <div 
      id={`step-${index + 1}`} 
      className="bg-white p-6 rounded-lg border shadow-sm scroll-mt-4"
    >
      <StepHeader 
        index={index} 
        title={step.title} 
        themeColor={themeColor}
      />
      
      {/* Step image */}
      <StepImage title={step.title} providedImage={step.image} />
      
      <p className="mb-6 text-gray-700">{step.description}</p>
      
      {/* Didactic information box */}
      <StepInfo didacticInfo={step.didacticInfo} title={step.title} />
      
      {/* Tip */}
      <StepTip tip={step.tip} />
      
      {/* Add separator if not the last step */}
      {!isLast && <Separator className="mt-6" />}
    </div>
  );
};
