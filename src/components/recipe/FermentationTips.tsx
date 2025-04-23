
import React from 'react';
import { useTranslation } from 'react-i18next';

interface FermentationTipsProps {
  method: 'direct' | 'poolish' | 'biga';
}

const FermentationTips: React.FC<FermentationTipsProps> = ({ method }) => {
  const { t } = useTranslation();
  
  return (
    <div className="bg-pizza-light bg-opacity-30 p-4 rounded-lg">
      <h3 className="font-medium text-gray-900 mb-2">{t('calculator.fermentation.tips')}</h3>
      {method === 'direct' && (
        <p className="text-sm text-gray-700">
          {t('calculator.fermentation.directTips')}
        </p>
      )}
      {method === 'poolish' && (
        <p className="text-sm text-gray-700">
          {t('calculator.fermentation.poolishTips')}
        </p>
      )}
      {method === 'biga' && (
        <p className="text-sm text-gray-700">
          {t('calculator.fermentation.bigaTips')}
        </p>
      )}
    </div>
  );
};

export default FermentationTips;
