
import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import { useTheme } from 'next-themes';
import { Moon, Sun, Pizza } from 'lucide-react';
import { Button } from '@/components/ui/button';
import LanguageSelector from './LanguageSelector';
import { useTranslation } from 'react-i18next';

const Header: React.FC = () => {
  const { user } = useAuth();
  const { theme, setTheme } = useTheme();
  const { t } = useTranslation();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Navigation */}
          <div className="flex items-center gap-8">
            <Link to="/" className="flex items-center gap-2">
              <Pizza className="h-7 w-7 text-primary" />
              <span className="text-xl font-semibold">DoughLab Pro</span>
            </Link>
            
            <nav className="hidden md:flex items-center gap-6">
              <Link to="/home" className="text-base font-medium text-foreground/80 hover:text-primary transition-colors">
                {t('common.menu.home', 'Home')}
              </Link>
              <Link to="/toppings" className="text-base font-medium text-foreground/80 hover:text-primary transition-colors">
                {t('common.menu.toppings', 'Toppings')}
              </Link>
              <Link to="/sauce" className="text-base font-medium text-foreground/80 hover:text-primary transition-colors">
                {t('common.menu.sauce', 'Sauces')}
              </Link>
            </nav>
          </div>

          {/* Right side actions */}
          <div className="flex items-center gap-4">
            <LanguageSelector />
            
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} 
              className="rounded-full"
            >
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>

            {!user ? (
              <div className="flex items-center gap-2">
                <Button 
                  variant="ghost" 
                  onClick={() => window.location.href = '/auth'} 
                  className="text-sm font-medium"
                >
                  {t('auth.signUp', 'Sign Up')}
                </Button>
                <Button 
                  variant="default" 
                  onClick={() => window.location.href = '/auth'} 
                  className="bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  {t('auth.login', 'Login')}
                </Button>
              </div>
            ) : (
              <Button 
                variant="default" 
                onClick={() => window.location.href = '/profile'} 
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                {t('common.profile', 'Profile')}
              </Button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
