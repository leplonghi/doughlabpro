
import React from 'react';
import { Pizza } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from './ThemeToggle';

const Header: React.FC = () => {
  return (
    <header className="bg-background border-b shadow-sm py-4 px-6 mb-8">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-3">
          <Pizza size={32} className="text-pizza" />
          <h1 className="text-2xl font-serif font-bold text-foreground">
            Neapolitan Pizza Calculator
          </h1>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" className="hidden md:block">
            Sign In
          </Button>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
