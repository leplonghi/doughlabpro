
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, LogIn } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose
} from '@/components/ui/sheet';
import { useAuth } from '@/context/AuthContext';

type MenuItem = {
  title: string;
  path: string;
  icon?: React.ReactNode;
};

interface MobileMenuProps {
  menuItems: MenuItem[];
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ 
  menuItems, 
  isOpen, 
  setIsOpen 
}) => {
  const { user, signOut, loading } = useAuth();
  const navigate = useNavigate();

  // Handle sign out
  const handleSignOut = async () => {
    await signOut();
    navigate('/landing');
    setIsOpen(false);
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
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
            {menuItems.map(item => (
              <Link 
                key={item.path} 
                to={item.path} 
                className="text-base font-medium text-foreground hover:text-primary transition-colors flex items-center" 
                onClick={() => setIsOpen(false)}
              >
                {item.icon}
                {item.title}
              </Link>
            ))}
          </nav>
          
          <div className="mt-auto py-4">
            {!loading && !user && (
              <Button 
                className="w-full"
                onClick={() => {
                  setIsOpen(false);
                  navigate('/auth');
                }}
              >
                <LogIn className="mr-2 h-4 w-4" />
                Sign in
              </Button>
            )}
            {user && (
              <Button 
                variant="outline"
                className="w-full text-red-600 border-red-200 hover:bg-red-50"
                onClick={() => {
                  handleSignOut();
                  setIsOpen(false);
                }}
              >
                Sign out
              </Button>
            )}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};
