
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';

const Header: React.FC = () => {
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
              <img src="/lovable-uploads/15936b17-7234-47a3-a949-d72c0d2932e6.png" className="h-8 w-auto" alt="DoughLab Pro" />
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
                      <img src="/lovable-uploads/15936b17-7234-47a3-a949-d72c0d2932e6.png" className="h-8 w-auto" alt="DoughLab Pro" />
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
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
