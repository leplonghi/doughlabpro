import React from 'react';
import { Clock } from 'lucide-react';
import { useLanguage } from '../../hooks/useLanguage';

interface FermentationTipsProps {
  method: 'direct' | 'poolish' | 'biga';
}

const FermentationTips: React.FC<FermentationTipsProps> = ({ method }) => {
  const { t } = useLanguage();
  
  return (
    <div className="bg-muted/30 p-4 rounded-lg border border-border/50">
      <h3 className="font-medium text-foreground flex items-center gap-2 mb-2">
        <Clock size={18} />
        {t('recipe.tips')}
      </h3>
      <p className="text-sm text-muted-foreground">
        {t(`fermentation.tips.${method}`)}
      </p>
    </div>
  );
};

export default FermentationTips;
