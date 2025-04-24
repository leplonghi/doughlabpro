
import React from "react";
import { CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { useTranslation } from "react-i18next";

const DoughCalculatorHeader: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <CardHeader className="space-y-3 p-6 bg-primary/10 rounded-t-xl border-b">
      <CardTitle className="text-2xl font-sans text-center">
        <span className="text-primary">Dough</span>Lab Pro
      </CardTitle>
      <CardDescription className="text-base text-center">
        {t('calculator.subtitle')}
      </CardDescription>
    </CardHeader>
  );
};

export default DoughCalculatorHeader;
