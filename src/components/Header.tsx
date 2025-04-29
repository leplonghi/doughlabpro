
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import { Pizza, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';

const Header: React.FC = () => {
  const { user } = useAuth();
  const { t } = useTranslation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    { title: 'Home', path: '/home' },
    { title: 'Dough Calculator', path: '/calculator' },
    { title: 'Toppings', path: '/toppings' },
    { title: 'Sauces', path: '/sauce' },
    { title: 'Utensils', path: '/utensils' },
  ];

  const NavItems = () => (
    <>
      {menuItems.map((item) => (
        <Link 
          key={item.path}
          to={item.path} 
          className="text-base font-medium text-foreground hover:text-black transition-colors"
          onClick={() => setMobileMenuOpen(false)}
        >
          {t(item.title.toLowerCase(), item.title)}
        </Link>
      ))}
    </>
  );

  return (
    <header className="w-full border-b border-border bg-background sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2">
              <Pizza className="h-6 w-6 text-black" />
              <span className="text-xl font-semibold">DoughLab Pro</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <NavItems />
          </nav>

          {/* Right side actions */}
          <div className="flex items-center gap-2">
            {/* Mobile Menu Button */}
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[80%] sm:w-[350px]">
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between py-4">
                    <div className="flex items-center gap-2">
                      <Pizza className="h-6 w-6 text-black" />
                      <span className="text-xl font-semibold">DoughLab Pro</span>
                    </div>
                    <SheetClose asChild>
                      <Button variant="ghost" size="icon">
                        <X className="h-5 w-5" />
                      </Button>
                    </SheetClose>
                  </div>
                  
                  <nav className="flex flex-col space-y-4 mt-6">
                    <NavItems />
                  </nav>
                  
                  <div className="mt-auto pb-8">
                    {!user ? (
                      <div className="flex flex-col gap-3 mt-4">
                        <Button 
                          variant="outline" 
                          onClick={() => {
                            window.location.href = '/auth';
                            setMobileMenuOpen(false);
                          }} 
                          className="w-full"
                        >
                          {t('common.signUp', 'Sign Up')}
                        </Button>
                        <Button 
                          variant="default" 
                          onClick={() => {
                            window.location.href = '/auth';
                            setMobileMenuOpen(false);
                          }} 
                          className="w-full bg-black text-white hover:bg-black/80"
                        >
                          {t('common.login', 'Login')}
                        </Button>
                      </div>
                    ) : (
                      <Button 
                        variant="default" 
                        onClick={() => {
                          window.location.href = '/profile';
                          setMobileMenuOpen(false);
                        }} 
                        className="w-full mt-4 bg-black text-white hover:bg-black/80"
                      >
                        {t('common.profile', 'Profile')}
                      </Button>
                    )}
                  </div>
                </div>
              </SheetContent>
            </Sheet>

            {/* Desktop actions */}
            <div className="hidden md:flex items-center gap-4">
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
      </div>
    </header>
  );
};

export default Header;
