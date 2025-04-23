
import React from 'react';
import BrandLogo from './header/BrandLogo';
import NavLinks from './header/NavLinks';
import LanguageSelector from './LanguageSelector';
import AuthActions from './header/AuthActions';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b py-3">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="flex items-center gap-4">
          <BrandLogo />
          <NavLinks />
        </div>
        <div className="flex items-center gap-3">
          <LanguageSelector />
          <AuthActions />
        </div>
      </div>
    </header>
  );
};

export default Header;
