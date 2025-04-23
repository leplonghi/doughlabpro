
import React from 'react';
import { Pizza, LogIn, LogOut } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ThemeToggle } from './ThemeToggle';
import { useAuth } from '@/context/AuthContext';
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';
import LanguageSelector from './LanguageSelector';

const Header: React.FC = () => {
  const { user, signOut } = useAuth();
  const { t } = useTranslation();

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b py-3">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="flex items-center gap-2.5">
          <Link to="/">
            <Pizza size={32} className="text-pizza" />
          </Link>
          <h1 className="text-xl md:text-2xl font-serif font-bold bg-gradient-to-r from-pizza to-pizza-dark bg-clip-text text-transparent">
            {t('common.calculator')}
          </h1>
        </div>
        <div className="flex items-center gap-3">
          <LanguageSelector />
          {user ? (
            <Button 
              variant="ghost" 
              size="sm" 
              className="flex items-center gap-1"
              onClick={() => signOut()}
            >
              <LogOut size={18} />
              <span className="hidden md:inline">{t('common.logout')}</span>
            </Button>
          ) : (
            <Link to="/auth">
              <Button variant="ghost" size="sm" className="flex items-center gap-1">
                <LogIn size={18} />
                <span className="hidden md:inline">{t('common.login')}</span>
              </Button>
            </Link>
          )}
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
