
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card } from '@/components/ui/card';

type FermentationMethod = 'direct' | 'poolish' | 'biga';

interface FermentationMethodSelectProps {
  fermentationMethod: FermentationMethod;
  onChange: (value: FermentationMethod) => void;
}

const FermentationMethodSelect: React.FC<FermentationMethodSelectProps> = ({
  fermentationMethod,
  onChange
}) => {
  const { t } = useTranslation();
  
  return (
    <div className="space-y-4">
      <Label htmlFor="fermentation-method" className="text-lg font-semibold">
        {t('calculator.fermentation.title')}
      </Label>
      
      <Select value={fermentationMethod} onValueChange={val => onChange(val as FermentationMethod)}>
        <SelectTrigger className="w-full bg-background border-border">
          <SelectValue placeholder={t('calculator.fermentation.selectMethod')} />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="direct">{t('calculator.fermentation.direct')}</SelectItem>
          <SelectItem value="poolish">{t('calculator.fermentation.poolish')}</SelectItem>
          <SelectItem value="biga">{t('calculator.fermentation.biga')}</SelectItem>
        </SelectContent>
      </Select>

      <Card className="p-4 bg-secondary/30 border-none shadow-none">
        {fermentationMethod === 'direct' && (
          <div className="space-y-3">
            <p>
              <span className="font-semibold text-primary">{t('calculator.fermentation.direct')}:</span> {t('calculator.fermentation.directDescription')}
            </p>
            <ul className="list-disc ml-5 text-foreground/80 space-y-1">
              <li>{t('calculator.fermentation.directTime')}</li>
              <li>{t('calculator.fermentation.directFlavor')}</li>
            </ul>
          </div>
        )}
        
        {fermentationMethod === 'poolish' && (
          <div className="space-y-3">
            <p>
              <span className="font-semibold text-primary">{t('calculator.fermentation.poolish')}:</span> {t('calculator.fermentation.poolishDescription')}
            </p>
            <ul className="list-disc ml-5 text-foreground/80 space-y-1">
              <li>{t('calculator.fermentation.poolishPrepare')}</li>
              <li>{t('calculator.fermentation.poolishAdd')}</li>
              <li>{t('calculator.fermentation.poolishResult')}</li>
            </ul>
          </div>
        )}
        
        {fermentationMethod === 'biga' && (
          <div className="space-y-3">
            <p>
              <span className="font-semibold text-primary">{t('calculator.fermentation.biga')}:</span> {t('calculator.fermentation.bigaDescription')}
            </p>
            <ul className="list-disc ml-5 text-foreground/80 space-y-1">
              <li>{t('calculator.fermentation.bigaPrepare')}</li>
              <li>{t('calculator.fermentation.bigaAdd')}</li>
              <li>{t('calculator.fermentation.bigaResult')}</li>
            </ul>
          </div>
        )}
      </Card>

      {fermentationMethod !== 'direct' && (
        <Card className="p-4 bg-accent/30 border-none shadow-none mt-4">
          {fermentationMethod === 'poolish' && (
            <div className="space-y-2">
              <p>
                <span className="font-semibold text-primary">{t('calculator.fermentation.poolish')}:</span> {t('calculator.fermentation.poolishInstruction')}
              </p>
              <p>{t('calculator.fermentation.poolishMix')}</p>
              <p className="text-xs text-foreground/70 italic mt-2">{t('calculator.fermentation.poolishNote')}</p>
            </div>
          )}
          
          {fermentationMethod === 'biga' && (
            <div className="space-y-2">
              <p>
                <span className="font-semibold text-primary">{t('calculator.fermentation.biga')}:</span> {t('calculator.fermentation.bigaInstruction')}
              </p>
              <p>{t('calculator.fermentation.bigaMix')}</p>
              <p className="text-xs text-foreground/70 italic mt-2">{t('calculator.fermentation.bigaNote')}</p>
            </div>
          )}
        </Card>
      )}
    </div>
  );
};

export default FermentationMethodSelect;
