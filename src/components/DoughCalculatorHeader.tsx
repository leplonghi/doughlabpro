
import React from "react";
import { CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { useTranslation } from 'react-i18next';

const DoughCalculatorHeader: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <CardHeader className="space-y-3 p-6 bg-red-500/90 rounded-t-xl border-b">
      <CardTitle className="text-2xl font-sans text-center text-white">
        {t('calculator.title')}
      </CardTitle>
      <CardDescription className="text-base text-center text-white/80">
        {t('calculator.subtitle')}
      </CardDescription>
    </CardHeader>
  );
};

export default DoughCalculatorHeader;
