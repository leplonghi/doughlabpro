
import React from "react";
import { Globe } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useLanguage } from '../hooks/useLanguage';
import { useIsMobile } from '../hooks/use-mobile';

// Export the Language type
export type Language = 'en' | 'pt' | 'es' | 'fr' | 'zh' | 'ja';

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
  const isMobile = useIsMobile();

  return (
    <div className="flex items-center gap-2">
      <Globe className="h-4 w-4 text-muted-foreground" />
      <Select value={language} onValueChange={(value: Language) => setLanguage(value)}>
        <SelectTrigger className={`${isMobile ? 'w-[140px]' : 'w-[180px]'} bg-background`}>
          <SelectValue placeholder={t('language.label')} />
        </SelectTrigger>
        <SelectContent className="bg-popover">
          {languages.map((lang) => (
            <SelectItem key={lang.value} value={lang.value as Language}>
              {lang.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default LanguageSelector;
