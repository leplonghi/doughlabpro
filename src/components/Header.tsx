
import React from 'react';
import { Pizza } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from './ThemeToggle';
import { useLanguage } from '../contexts/LanguageContext';

const Header: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <header className="bg-background border-b shadow-sm py-4 px-6 mb-8">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Pizza size={32} className="text-primary" />
          <h1 className="text-2xl font-serif font-bold text-foreground">
            {t('header.title')}
          </h1>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" className="hidden md:block">
            {t('header.connect')}
          </Button>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
