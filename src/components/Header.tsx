import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import { Button } from '@/components/ui/button';
import { useTheme } from 'next-themes';
import { Moon, Sun, Globe } from 'lucide-react';
import { Pizza } from 'lucide-react';
import LanguageSelector from './LanguageSelector';
const Header: React.FC = () => {
  const {
    user
  } = useAuth();
  const {
    theme,
    setTheme
  } = useTheme();
  return <header className="sticky top-0 z-50 w-full border-b border-gray-200 dark:border-gray-800 bg-amber-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Navigation */}
          <div className="flex items-center gap-8">
            <Link to="/" className="flex items-center gap-2">
              <Pizza className="h-8 w-8" />
              <span className="text-xl font-bold">DoughLab Pro</span>
            </Link>
            
            <nav className="hidden md:flex items-center gap-6">
              <Link to="/home" className="text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
                Home
              </Link>
              <Link to="/toppings" className="text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
                Toppings
              </Link>
              <Link to="/sauce" className="text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
                Sauces
              </Link>
            </nav>
          </div>

          {/* Right side actions */}
          <div className="flex items-center gap-4">
            <LanguageSelector />
            
            <Button variant="ghost" size="icon" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className="rounded-full">
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>

            {!user ? <div className="flex items-center gap-2">
                <Button variant="ghost" onClick={() => window.location.href = '/auth'} className="text-sm font-medium">
                  Sign Up
                </Button>
                <Button variant="default" onClick={() => window.location.href = '/auth'} className="bg-black text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200">
                  Login
                </Button>
              </div> : <Button variant="default" onClick={() => window.location.href = '/profile'} className="bg-black text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200">
                Profile
              </Button>}
          </div>
        </div>
      </div>
    </header>;
};
export default Header;