
import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  Label
} from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';

type FermentationMethod = 'direct' | 'poolish' | 'biga';

interface FermentationMethodSelectProps {
  fermentationMethod: FermentationMethod;
  onChange: (value: FermentationMethod) => void;
}

const FermentationMethodSelect: React.FC<FermentationMethodSelectProps> = ({
  fermentationMethod,
  onChange,
}) => {
  const { t } = useTranslation();
  
  return (
    <div className="space-y-3">
      <Label htmlFor="fermentation-method" className="text-lg font-semibold">
        {t('calculator.fermentation.title')}
      </Label>
      <Select
        value={fermentationMethod}
        onValueChange={val => onChange(val as FermentationMethod)}
      >
        <SelectTrigger>
          <SelectValue placeholder={t('calculator.fermentation.selectMethod')} />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="direct">{t('calculator.fermentation.direct')}</SelectItem>
          <SelectItem value="poolish">{t('calculator.fermentation.poolish')}</SelectItem>
          <SelectItem value="biga">{t('calculator.fermentation.biga')}</SelectItem>
        </SelectContent>
      </Select>

      <div className="p-3 bg-gray-50 rounded-md text-sm mt-2">
        {fermentationMethod === 'direct' && (
          <>
            <p><b>{t('calculator.fermentation.direct')}:</b> {t('calculator.fermentation.directDescription')}</p>
            <ul className="list-disc ml-5 mt-2 text-gray-600">
              <li>{t('calculator.fermentation.directTime')}</li>
              <li>{t('calculator.fermentation.directFlavor')}</li>
            </ul>
          </>
        )}
        {fermentationMethod === 'poolish' && (
          <>
            <p><b>{t('calculator.fermentation.poolish')}:</b> {t('calculator.fermentation.poolishDescription')}</p>
            <ul className="list-disc ml-5 mt-2 text-gray-600">
              <li>{t('calculator.fermentation.poolishPrepare')}</li>
              <li>{t('calculator.fermentation.poolishAdd')}</li>
              <li>{t('calculator.fermentation.poolishResult')}</li>
            </ul>
          </>
        )}
        {fermentationMethod === 'biga' && (
          <>
            <p><b>{t('calculator.fermentation.biga')}:</b> {t('calculator.fermentation.bigaDescription')}</p>
            <ul className="list-disc ml-5 mt-2 text-gray-600">
              <li>{t('calculator.fermentation.bigaPrepare')}</li>
              <li>{t('calculator.fermentation.bigaAdd')}</li>
              <li>{t('calculator.fermentation.bigaResult')}</li>
            </ul>
          </>
        )}
      </div>

      <div>
        {fermentationMethod === 'poolish' && (
          <div className="mt-2 p-3 bg-yellow-50 rounded">
            <b>{t('calculator.fermentation.poolish')}:</b> {t('calculator.fermentation.poolishInstruction')}<br />
            {t('calculator.fermentation.poolishMix')}<br />
            <span className="text-xs text-gray-500">{t('calculator.fermentation.poolishNote')}</span>
          </div>
        )}
        {fermentationMethod === 'biga' && (
          <div className="mt-2 p-3 bg-yellow-50 rounded">
            <b>{t('calculator.fermentation.biga')}:</b> {t('calculator.fermentation.bigaInstruction')}<br />
            {t('calculator.fermentation.bigaMix')}<br />
            <span className="text-xs text-gray-500">{t('calculator.fermentation.bigaNote')}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default FermentationMethodSelect;
