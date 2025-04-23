
import React from 'react';
import { Pizza } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

const Header: React.FC = () => {
  return (
    <header className="bg-background border-b shadow-sm py-4 px-4 md:px-6 mb-8">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2 md:gap-3">
          <Pizza size={28} className="text-pizza shrink-0" />
          <h1 className="text-xl md:text-2xl font-serif font-bold text-foreground truncate">
            Pizza Calculator
          </h1>
        </div>
        <ThemeToggle />
      </div>
    </header>
  );
};

export default Header;
