import React from 'react';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { useLanguage } from '../hooks/useLanguage';

type FermentationMethod = 'direct' | 'poolish' | 'biga';

interface FermentationMethodSelectProps {
  fermentationMethod: FermentationMethod;
  onChange: (value: FermentationMethod) => void;
}

const FermentationMethodSelect: React.FC<FermentationMethodSelectProps> = ({
  fermentationMethod,
  onChange,
}) => {
  const { t } = useLanguage();

  return (
    <div className="space-y-3">
      <Label className="text-lg font-semibold">
        {t('fermentation.label')}
      </Label>
      <Select
        value={fermentationMethod}
        onValueChange={val => onChange(val as FermentationMethod)}
      >
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Selecione um método" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="direct">
            {t('fermentation.direct')}
          </SelectItem>
          <SelectItem value="poolish">
            {t('fermentation.poolish')}
          </SelectItem>
          <SelectItem value="biga">
            {t('fermentation.biga')}
          </SelectItem>
        </SelectContent>
      </Select>

      <div className="p-4 bg-muted/40 rounded-lg border border-border/50">
        <p className="text-sm text-foreground/90">
          {t(`fermentation.description.${fermentationMethod}`)}
        </p>
        <p className="text-sm text-muted-foreground mt-2">
          {t(`fermentation.tips.${fermentationMethod}`)}
        </p>
      </div>
    </div>
  );
};

export default FermentationMethodSelect;
