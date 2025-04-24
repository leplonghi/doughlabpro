
import React from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Pizza, Globe, Moon } from 'lucide-react';
import { Button } from './ui/button';
import { useTranslation } from 'react-i18next';

const Header: React.FC = () => {
  const { t } = useTranslation();
  const location = useLocation();
  
  // Hide navigation on auth page
  const isAuthPage = location.pathname === '/auth';
  
  if (isAuthPage) return null;

  return (
    <header className="sticky top-0 z-50 bg-background border-b">
      <div className="container mx-auto flex justify-between items-center h-16 px-4">
        <div className="flex items-center gap-8">
          <Link to="/" className="flex items-center gap-2">
            <Pizza className="h-8 w-8" />
            <span className="text-xl font-bold">DoughLab Pro</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link to="/home" className="text-sm font-medium">
              Home
            </Link>
            <Link to="/toppings" className="text-sm font-medium">
              Toppings
            </Link>
            <Link to="/sauces" className="text-sm font-medium">
              Sauces
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon">
            <Globe className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <Moon className="h-5 w-5" />
          </Button>
          {!isAuthPage && (
            <>
              <Button variant="outline" asChild>
                <Link to="/auth">Sign Up</Link>
              </Button>
              <Button variant="default" className="bg-black" asChild>
                <Link to="/auth">Login</Link>
              </Button>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
