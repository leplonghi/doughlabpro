
import React from 'react';
import { Button } from '@/components/ui/button';
import { Calculator, RotateCcw } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface CalculatorActionsProps {
  onCalculate: () => void;
  onReset: () => void;
}

const CalculatorActions: React.FC<CalculatorActionsProps> = ({ onCalculate, onReset }) => {
  const { t } = useTranslation();
  
  return (
    <div className="flex justify-between gap-3 mt-6">
      <Button 
        variant="outline" 
        className="flex-1 h-12 font-medium bg-white hover:bg-red-500 hover:text-white border-red-300"
        onClick={onCalculate}
      >
        <Calculator className="mr-2 h-5 w-5" />
        {t('calculator.actions.calculate')}
      </Button>
      <Button 
        variant="outline" 
        className="flex-1 h-12 font-medium bg-white hover:bg-gray-50"
        onClick={onReset}
      >
        <RotateCcw className="mr-2 h-5 w-5" />
        {t('calculator.actions.reset')}
      </Button>
    </div>
  );
};

export default CalculatorActions;
