
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { MobileMenu } from '@/components/header/MobileMenu';
import { DesktopNavigation } from '@/components/header/DesktopNavigation';
import { HeaderLogo } from '@/components/header/HeaderLogo';
import { UserMenu } from '@/components/header/UserMenu';
import { menuItems } from '@/components/header/menuItems';
import LanguageSelector from '@/components/header/LanguageSelector';

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <header className="w-full border-b border-border bg-background sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <HeaderLogo />

          {/* Desktop Navigation */}
          <DesktopNavigation menuItems={menuItems} />

          {/* Right side actions */}
          <div className="flex items-center gap-4">
            {/* Language Selector */}
            <LanguageSelector />
            
            {/* Auth Actions */}
            <UserMenu />
            
            {/* Mobile Menu */}
            <MobileMenu 
              menuItems={menuItems} 
              isOpen={mobileMenuOpen} 
              setIsOpen={setMobileMenuOpen} 
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
