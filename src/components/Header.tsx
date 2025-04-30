
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, LogIn } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { useAuth } from '@/context/AuthContext';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { user, signOut } = useAuth();
  const { t } = useTranslation();
  const navigate = useNavigate();

  const menuItems = [{
    title: 'Home',
    path: '/home'
  }, {
    title: 'Calculator',
    path: '/calculator'
  }, {
    title: 'Toppings',
    path: '/toppings'
  }, {
    title: 'Sauces',
    path: '/sauce'
  }];
  
  const NavItems = () => (
    <>
      {menuItems.map(item => (
        <Link 
          key={item.path} 
          to={item.path} 
          className="text-base font-medium text-foreground hover:text-primary transition-colors" 
          onClick={() => setMobileMenuOpen(false)}
        >
          {item.title}
        </Link>
      ))}
    </>
  );

  const handleSignOut = async () => {
    await signOut();
    navigate('/home');
  };

  // Get the user's name
  const userName = user?.user_metadata?.full_name || user?.email || 'User';

  return (
    <header className="w-full border-b border-border bg-background sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2">
              <img src="/lovable-uploads/15936b17-7234-47a3-a949-d72c0d2932e6.png" className="h-8 w-auto" alt="DoughLab Pro" />
              <span className="font-medium text-sm"></span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <NavItems />
          </nav>

          {/* Right side actions */}
          <div className="flex items-center gap-4">
            {/* Auth Actions */}
            {user ? (
              <div className="flex items-center gap-2">
                {/* Show user name */}
                <span className="hidden md:inline text-sm font-medium">
                  {userName}
                </span>
                
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Avatar className="h-8 w-8 cursor-pointer">
                      {user.user_metadata.avatar_url ? (
                        <AvatarImage src={user.user_metadata.avatar_url} alt={userName} />
                      ) : (
                        <AvatarFallback className="bg-black text-white">
                          {user.user_metadata.full_name ? 
                            `${user.user_metadata.full_name.charAt(0)}` : 
                            'U'
                          }
                        </AvatarFallback>
                      )}
                    </Avatar>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem onClick={() => navigate('/profile')}>
                      {t('profile.title', 'Profile')}
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => navigate('/calculator')}>
                      Dough Calculator
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem 
                      onClick={handleSignOut}
                      className="text-red-600 focus:text-red-600"
                    >
                      {t('auth.signOut', 'Sign out')}
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            ) : (
              <Button 
                variant="ghost" 
                size="sm" 
                className="flex items-center gap-2"
                onClick={() => navigate('/auth')}
              >
                <LogIn size={18} />
                <span className="hidden md:inline">{t('auth.signIn', 'Sign in')}</span>
              </Button>
            )}
            
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
                  
                  <div className="mt-auto py-4">
                    {!user && (
                      <Button 
                        className="w-full"
                        onClick={() => {
                          setMobileMenuOpen(false);
                          navigate('/auth');
                        }}
                      >
                        <LogIn className="mr-2 h-4 w-4" />
                        {t('auth.signIn', 'Sign in')}
                      </Button>
                    )}
                    {user && (
                      <Button 
                        variant="outline"
                        className="w-full text-red-600 border-red-200 hover:bg-red-50"
                        onClick={() => {
                          handleSignOut();
                          setMobileMenuOpen(false);
                        }}
                      >
                        {t('auth.signOut', 'Sign out')}
                      </Button>
                    )}
                  </div>
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
