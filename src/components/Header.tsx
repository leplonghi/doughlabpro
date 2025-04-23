
import React from 'react';
import { Pizza } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from './ThemeToggle';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageSelector from './LanguageSelector';
import { useIsMobile } from '@/hooks/use-mobile';

const Header: React.FC = () => {
  const { t } = useLanguage();
  const isMobile = useIsMobile();
  
  return (
    <header className="bg-background border-b shadow-sm py-4 px-6 mb-6 md:mb-8">
      <div className="container mx-auto flex flex-col md:flex-row md:justify-between md:items-center gap-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Pizza size={28} className="text-primary" />
            <h1 className="text-xl md:text-2xl font-serif font-bold text-foreground">
              {t('header.title')}
            </h1>
          </div>
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
          </div>
        </div>
        
        <div className="flex items-center justify-between md:gap-4">
          <LanguageSelector />
          <div className="hidden md:flex items-center gap-3">
            <Button variant="outline" size={isMobile ? "sm" : "default"}>
              {t('header.connect')}
            </Button>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
