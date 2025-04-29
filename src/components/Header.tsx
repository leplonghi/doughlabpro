
import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import { Pizza } from 'lucide-react';
import { Button } from '@/components/ui/button';
import LanguageSelector from './LanguageSelector';
import { useTranslation } from 'react-i18next';

const Header: React.FC = () => {
  const { user } = useAuth();
  const { t } = useTranslation();

  return (
    <header className="w-full border-b border-border bg-background sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Navigation */}
          <div className="flex items-center gap-8">
            <Link to="/" className="flex items-center gap-2">
              <Pizza className="h-6 w-6 text-black" />
              <span className="text-xl font-semibold">DoughLab Pro</span>
            </Link>
            
            <nav className="hidden md:flex items-center gap-6">
              <Link to="/home" className="text-base font-medium text-foreground hover:text-black transition-colors">
                Home
              </Link>
              <Link to="/calculator" className="text-base font-medium text-foreground hover:text-black transition-colors">
                Calculator
              </Link>
              <Link to="/toppings" className="text-base font-medium text-foreground hover:text-black transition-colors">
                Toppings
              </Link>
              <Link to="/sauce" className="text-base font-medium text-foreground hover:text-black transition-colors">
                Sauces
              </Link>
              <Link to="/utensils" className="text-base font-medium text-foreground hover:text-black transition-colors">
                Utensils
              </Link>
            </nav>
          </div>

          {/* Right side actions */}
          <div className="flex items-center gap-4">
            <LanguageSelector />

            {!user ? (
              <div className="flex items-center gap-2">
                <Button 
                  variant="ghost" 
                  onClick={() => window.location.href = '/auth'} 
                  className="text-sm font-medium"
                >
                  {t('common.signUp', 'Sign Up')}
                </Button>
                <Button 
                  variant="default" 
                  onClick={() => window.location.href = '/auth'} 
                  className="bg-black text-white hover:bg-black/80"
                >
                  {t('common.login', 'Login')}
                </Button>
              </div>
            ) : (
              <Button 
                variant="default" 
                onClick={() => window.location.href = '/profile'} 
                className="bg-black text-white hover:bg-black/80"
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
