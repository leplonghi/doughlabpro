
import React from 'react';
import { Pizza } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { useAuth } from './AuthProvider';
import { Button } from './ui/button';
import { supabase } from '@/integrations/supabase/client';

const Header: React.FC = () => {
  const { session } = useAuth();

  const handleSignOut = async () => {
    await supabase.auth.signOut();
  };

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b py-3">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="flex items-center gap-2.5">
          <Pizza size={32} className="text-pizza" />
          <h1 className="text-xl md:text-2xl font-serif font-bold bg-gradient-to-r from-pizza to-pizza-dark bg-clip-text text-transparent">
            Pizza Dough Calculator
          </h1>
        </div>
        <div className="flex items-center gap-4">
          {session && (
            <Button
              variant="outline"
              onClick={handleSignOut}
            >
              Sign Out
            </Button>
          )}
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
