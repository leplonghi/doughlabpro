import React from "react";
import { CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { useLanguage } from '../hooks/useLanguage';

const DoughCalculatorHeader: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <CardHeader className="bg-pizza-light bg-opacity-40">
      <CardTitle className="text-2xl text-gray-800">{t('calculator.title')}</CardTitle>
      <CardDescription>
        {t('calculator.description')}
      </CardDescription>
    </CardHeader>
  );
};

export default DoughCalculatorHeader;
