
import React from 'react';
import { Pizza } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b py-3">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="flex items-center gap-2.5">
          <Pizza size={32} className="text-pizza" />
          <h1 className="text-xl md:text-2xl font-serif font-bold bg-gradient-to-r from-pizza to-pizza-dark bg-clip-text text-transparent">
            Pizza Dough Calculator
          </h1>
        </div>
        <ThemeToggle />
      </div>
    </header>
  );
};

export default Header;
