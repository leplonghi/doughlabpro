import React from 'react';
import { useNavigate } from 'react-router-dom';
import { LogIn } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/context/AuthContext';
import { useTranslation } from 'react-i18next';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export const UserMenu: React.FC = () => {
  const { user, signOut, bypassAuth } = useAuth();
  const navigate = useNavigate();
  const { t } = useTranslation();
  
  // Handle sign out
  const handleSignOut = async () => {
    await signOut();
    navigate('/landing');
  };

  // If bypassing auth or not logged in, show login button
  if (bypassAuth && !user) {
    return (
      <Button 
        variant="ghost" 
        size="sm" 
        className="flex items-center gap-2"
        onClick={() => navigate('/auth')}
      >
        <LogIn size={18} />
        <span className="hidden md:inline">{t('auth.signIn', 'Sign in')}</span>
      </Button>
    );
  }

  // Get the user's name
  const userName = user?.user_metadata?.full_name || user?.email || 'User';

  // Otherwise, show user avatar with dropdown
  return (
    <div className="flex items-center gap-2">
      {/* Show user name */}
      <span className="hidden md:inline text-sm font-medium">
        {userName}
      </span>
      
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Avatar className="h-8 w-8 cursor-pointer">
            {user?.user_metadata?.avatar_url ? (
              <AvatarImage src={user.user_metadata.avatar_url} alt={userName} />
            ) : (
              <AvatarFallback className="bg-black text-white">
                {user?.user_metadata?.full_name ? 
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
  );
};
