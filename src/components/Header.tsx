
import React, { useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { useTranslation } from 'react-i18next';
import { MobileMenu } from '@/components/header/MobileMenu';
import { DesktopNavigation } from '@/components/header/DesktopNavigation';
import { HeaderLogo } from '@/components/header/HeaderLogo';
import { UserMenu } from '@/components/header/UserMenu';
import { menuItems } from '@/components/header/menuItems';

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { bypassAuth, loading } = useAuth();

  return (
    <header className="w-full border-b border-border bg-background sticky top-0 z-50">
      {bypassAuth && (
        <div className="bg-amber-500 text-black text-center py-1 text-sm font-medium">
          Development Mode - Authentication Bypassed
        </div>
      )}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <HeaderLogo />

          {/* Desktop Navigation */}
          <DesktopNavigation menuItems={menuItems} />

          {/* Right side actions */}
          <div className="flex items-center gap-4">
            {/* Auth Actions */}
            {!loading && <UserMenu />}
            
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
