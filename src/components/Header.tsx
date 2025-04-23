
import React from 'react';
import { Pizza, LogIn, LogOut, UserRoundCheck, ShoppingCart, Lightbulb, Utensils, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';
import LanguageSelector from './LanguageSelector';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

const Header: React.FC = () => {
  const { user, signOut } = useAuth();
  const { t } = useTranslation();

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b py-3">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="flex items-center gap-4">
          <Link to="/" className="flex items-center gap-2.5">
            <Pizza size={32} className="text-pizza" />
            <h1 className="text-xl md:text-2xl font-serif font-bold bg-gradient-to-r from-pizza to-pizza-dark bg-clip-text text-transparent">
              {t('common.calculator')}
            </h1>
          </Link>
          <div className="hidden md:flex items-center gap-4">
            <Link to="/shop" className="text-muted-foreground hover:text-foreground transition-colors">
              <ShoppingCart size={20} />
            </Link>
            <Link to="/toppings" className="text-muted-foreground hover:text-foreground transition-colors">
              <Utensils size={20} />
            </Link>
            <Link to="/tips" className="text-muted-foreground hover:text-foreground transition-colors">
              <Lightbulb size={20} />
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <LanguageSelector />
          {user ? (
            <div className="flex items-center gap-2">
              <Link to="/profile">
                <Avatar className="h-8 w-8 cursor-pointer">
                  <AvatarImage src={user.user_metadata?.avatar_url || undefined} />
                  <AvatarFallback className="bg-pizza text-white">
                    <User size={16} />
                  </AvatarFallback>
                </Avatar>
              </Link>
              <Button 
                variant="ghost" 
                size="sm" 
                className="flex items-center gap-1"
                onClick={() => signOut()}
              >
                <LogOut size={18} />
                <span className="hidden md:inline">{t('common.logout')}</span>
              </Button>
            </div>
          ) : (
            <Link to="/auth">
              <Button variant="ghost" size="sm" className="flex items-center gap-1">
                <LogIn size={18} />
                <span className="hidden md:inline">{t('common.login')}</span>
              </Button>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
