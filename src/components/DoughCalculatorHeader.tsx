
import React from "react";
import { CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { useTranslation } from "react-i18next";

const DoughCalculatorHeader: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <CardHeader className="space-y-1.5 bg-gradient-to-r from-pizza-light/30 to-background p-6 rounded-t-lg border-b">
      <CardTitle className="text-2xl font-serif">DoughLab Pro</CardTitle>
      <CardDescription className="text-base text-muted-foreground">
        {t('calculator.subtitle')}
      </CardDescription>
    </CardHeader>
  );
};

export default DoughCalculatorHeader;
