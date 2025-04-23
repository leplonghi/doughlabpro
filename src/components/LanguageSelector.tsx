
import React from "react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useLanguage } from '../contexts/LanguageContext';
import { Globe } from 'lucide-react';

const languages = [
  { value: 'en', label: 'English' },
  { value: 'pt', label: 'Português' },
  { value: 'es', label: 'Español' },
  { value: 'fr', label: 'Français' },
  { value: 'zh', label: '中文' },
  { value: 'ja', label: '日本語' },
];

const LanguageSelector: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2">
        <Globe className="h-4 w-4" />
        <Label>{t('language.label')}</Label>
      </div>
      <RadioGroup 
        value={language} 
        onValueChange={(value) => setLanguage(value as any)}
        className="flex flex-wrap gap-4"
      >
        {languages.map((lang) => (
          <div key={lang.value} className="flex items-center space-x-2">
            <RadioGroupItem value={lang.value} id={lang.value} />
            <Label htmlFor={lang.value}>{lang.label}</Label>
          </div>
        ))}
      </RadioGroup>
    </div>
  );
};

export default LanguageSelector;
