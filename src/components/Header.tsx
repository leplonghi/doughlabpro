import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Pizza, Moon, Sun, Globe } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { useTheme } from 'next-themes';
import LanguageSelector from './LanguageSelector';
const Header: React.FC = () => {
  const {
    t
  } = useTranslation();
  const location = useLocation();
  const {
    user
  } = useAuth();
  const {
    theme,
    setTheme
  } = useTheme();

  // Hide navigation on auth page
  if (location.pathname === '/auth') {
    return null;
  }
  return <header className="sticky top-0 z-50 w-full border-b border-gray-200 dark:border-gray-800 bg-amber-200">
      <div className="container mx-auto flex items-center justify-between h-16 px-[17px]">
        <div className="flex items-center">
          <Link to="/" className="flex items-center gap-2">
            <Pizza size={32} className="text-black dark:text-white" />
            <span className="text-xl px-[7px] py-0 my-0 font-extrabold">DoughLab Pro</span>
          </Link>
          
          <nav className="hidden md:flex ml-10 space-x-8">
            <Link to="/home" className="text-sm font-medium hover:text-gray-600 dark:hover:text-gray-300">
              {t('common.menu.home')}
            </Link>
            <Link to="/toppings" className="text-sm font-medium hover:text-gray-600 dark:hover:text-gray-300">
              {t('common.menu.toppings')}
            </Link>
            <Link to="/sauce" className="text-sm font-medium hover:text-gray-600 dark:hover:text-gray-300">
              {t('common.menu.sauces')}
            </Link>
          </nav>
        </div>
        
        <div className="flex items-center gap-2">
          <LanguageSelector />
          
          <Button variant="ghost" size="icon" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className="rounded-full" aria-label={t('common.toggleTheme')}>
            {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
          
          {user ? <Button variant="default" onClick={() => window.location.href = '/profile'} className="bg-black text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200">
              {t('common.profile')}
            </Button> : <div className="flex gap-2">
              <Button variant="outline" onClick={() => window.location.href = '/auth'} className="border-gray-300 dark:border-gray-700">
                {t('auth.signUp')}
              </Button>
              <Button variant="default" onClick={() => window.location.href = '/auth'} className="bg-black text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200">
                {t('auth.login')}
              </Button>
            </div>}
        </div>
      </div>
    </header>;
};
export default Header;