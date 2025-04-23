
import React from 'react';
import { Pizza, LogIn, LogOut, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ThemeToggle } from './ThemeToggle';
import { useAuth } from '@/context/AuthContext';
import { Button } from '@/components/ui/button';

const Header: React.FC = () => {
  const { user, signOut } = useAuth();

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b py-3">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="flex items-center gap-2.5">
          <Link to="/">
            <Pizza size={32} className="text-pizza" />
          </Link>
          <h1 className="text-xl md:text-2xl font-serif font-bold bg-gradient-to-r from-pizza to-pizza-dark bg-clip-text text-transparent">
            Pizza Dough Calculator
          </h1>
        </div>
        <div className="flex items-center gap-3">
          {user ? (
            <Button 
              variant="ghost" 
              size="sm" 
              className="flex items-center gap-1"
              onClick={() => signOut()}
            >
              <LogOut size={18} />
              <span className="hidden md:inline">Log Out</span>
            </Button>
          ) : (
            <Link to="/auth">
              <Button variant="ghost" size="sm" className="flex items-center gap-1">
                <LogIn size={18} />
                <span className="hidden md:inline">Log In</span>
              </Button>
            </Link>
          )}
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
